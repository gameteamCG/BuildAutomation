const { ccclass, property } = cc._decorator;

@ccclass
export default class TextComponentFontChanger extends cc.Component {
    @property(cc.Font)
    newFont: cc.Font = null;

    @property(cc.Font)
    richTextFont: cc.Font = null;  // Optional separate font for RichText

    @property({
        type: [cc.Node],
        tooltip: "Nodes to exclude from font changes"
    })
    excludedNodes: cc.Node[] = [];

    @property({
        tooltip: "Apply changes automatically when scene loads"
    })
    applyOnLoad: boolean = true;

    @property(cc.Node)
    targetRootNode: cc.Node = null;

    @property({
        tooltip: "Show detailed processing logs"
    })
    debugMode: boolean = true;

    // Delay in seconds before applying changes
    @property({
        tooltip: "Initial delay before applying changes",
        min: 0
    })
    initialDelay: number = 0.1;

    onLoad() {
        if (this.applyOnLoad) {
            this.scheduleOnce(() => this.changeAllTextFonts(), this.initialDelay);
        }
    }

    changeAllTextFonts() {
        if (!this.newFont && !this.richTextFont) {
            this.logError("No fonts assigned for either Label or RichText!");
            return;
        }

        const rootNode = this.targetRootNode || this.node;
        this.log(`Starting font change from root: ${rootNode.name}`);

        this.processNode(rootNode);

        this.log("Font change operation completed");
    }

    private processNode(node: cc.Node) {
        if (this.isNodeExcluded(node)) {
            this.log(`Skipping excluded node: ${node.name}`);
            return;
        }

        // Process Label component if exists
        const label = node.getComponent(cc.Label);
        if (label && this.newFont) {
            this.changeLabelFont(node, label);
        }

        // Process RichText component if exists
        const richText = node.getComponent(cc.RichText);
        if (richText && this.richTextFont) {
            this.changeRichTextFont(node, richText);
        }

        // Process children recursively
        node.children.forEach(child => this.processNode(child));
    }

    private changeLabelFont(node: cc.Node, label: cc.Label) {
        if (!label.enabled) {
            this.log(`Skipping disabled Label on node: ${node.name}`);
            return;
        }

        try {
            this.log(`Changing Label font on ${node.name} from ${label.font?.name || 'default'} to ${this.newFont.name}`);
            
            label.font = this.newFont;
            this.forceLabelUpdate(label);
            
        } catch (error) {
            this.logError(`Failed to change Label font on ${node.name}: ${error}`);
        }
    }

    private changeRichTextFont(node: cc.Node, richText: cc.RichText) {
        if (!richText.enabled) {
            this.log(`Skipping disabled RichText on node: ${node.name}`);
            return;
        }

        try {
            const fontToUse = this.richTextFont || this.newFont;
            this.log(`Changing RichText font on ${node.name} to ${fontToUse.name}`);
            
            richText.font = fontToUse;
            richText['_updateRenderData']?.();
            
        } catch (error) {
            this.logError(`Failed to change RichText font on ${node.name}: ${error}`);
        }
    }

    private forceLabelUpdate(label: cc.Label) {
        // Multiple update methods for different Cocos versions
        label['_updateRenderData']?.();
        label['_renderData'] = null;
        label['_forceUpdateRenderData']?.();
        label['_activateMaterial']?.();
    }

    private isNodeExcluded(node: cc.Node): boolean {
        return this.excludedNodes.some(excludedNode => 
            excludedNode === node || node.isChildOf(excludedNode)
        );
    }

    // Debug utilities
    private log(message: string) {
        if (this.debugMode) cc.log(`[FontChanger] ${message}`);
    }

    private logError(message: string) {
        cc.error(`[FontChanger] ERROR: ${message}`);
    }

    // Public API
    public addExclusion(node: cc.Node) {
        if (!this.excludedNodes.includes(node)) {
            this.excludedNodes.push(node);
            this.log(`Added exclusion: ${node.name}`);
        }
    }

    public removeExclusion(node: cc.Node) {
        const index = this.excludedNodes.indexOf(node);
        if (index >= 0) {
            this.excludedNodes.splice(index, 1);
            this.log(`Removed exclusion: ${node.name}`);
        }
    }
}
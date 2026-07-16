const { ccclass, property } = cc._decorator;

@ccclass
export default class TVInputManager extends cc.Component {



    private focusNodes: cc.Node[] = [];
    private currentIndex: number = -1;
    private canSelect: boolean = true;
    private originalScales: Map<cc.Node, number> = new Map(); // 🔥 store base scales

    private static readonly FOCUS_SCALE = 1.15; // tweak to taste

    // ================= INIT =================

    private static instance: TVInputManager = null;

    static get Instance() {
        return this.instance;
    }

    init(nodes: cc.Node[], defaultIndex: number = -1) {

        this.focusNodes = nodes || [];

        // 🔥 remember each node's original scale
        this.originalScales.clear();
        this.focusNodes.forEach(node => {
            if (node && node.isValid) {
                // defensive: if captured mid pop-in/hide animation (scale ~0),
                // fall back to 1 instead of freezing the node invisible
                const scale = node.scale;
                this.originalScales.set(node, scale > 0.01 ? scale : 1);
            }
        });

        this.currentIndex = defaultIndex;

        if (defaultIndex === -1) {
            this.clearFocus();
        } else {
            this.updateFocus();
        }

        this.attachClickListeners();
    }

    setCanSelect(val: boolean) {
        this.canSelect = val;
    }

    // ================= INPUT =================


    private handleTVKeys = (e: KeyboardEvent) => {

        const blockedKeys = [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "Enter",
            " ",
            "Space",
            "Spacebar",
            "Backspace",
            "Escape",
            "GoBack",
            "BrowserBack"
        ];

        if (blockedKeys.includes(e.key)) {

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            cc.game.canvas?.focus();

            this.onKeyDown({
                keyCode: e.keyCode
            } as any);
        }
    };


    onLoad() {

        cc.game.addPersistRootNode(this.node);
        TVInputManager.instance = this;

        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";

        // 🔥 block native TV navigation
        window.addEventListener(
            "keydown",
            this.handleTVKeys,
            true
        );
        console.log("onload---------");

        TVInputManager.instance = this;



        // 🔥 focus browser + canvas
        window.focus();

        this.scheduleOnce(() => {

            if (cc.game.canvas) {

                cc.game.canvas.setAttribute("tabindex", "0");

                cc.game.canvas.focus();

            }

        }, 0.2);
    }

    onDestroy() {



        // 🔥 remove TV listener
        window.removeEventListener("keydown", this.handleTVKeys, true);
        this.focusNodes = [];
        this.originalScales.clear();

        TVInputManager.instance = null;
    }


    onKeyDown(event: cc.Event.EventKeyboard) {


        (event as any).preventDefault?.();

        console.log("KEY DETECTED", event.keyCode);

        switch (event.keyCode) {

            case cc.macro.KEY.left:
            case cc.macro.KEY.up:
                this.move(-1);
                return;

            case cc.macro.KEY.right:
            case cc.macro.KEY.down:
                this.move(1);
                return;
        }
        console.log("canslect 1")

        if (!this.canSelect) return;

        if (
            event.keyCode === 8 ||    // Backspace
            event.keyCode === 27      // Escape
        ) {

            console.log("TV BACK BUTTON");

            // your custom back logic
            return;
        }

        if (
            event.keyCode === cc.macro.KEY.enter ||
            event.keyCode === cc.macro.KEY.space ||
            event.keyCode === 13 ||
            event.keyCode === 23 ||
            event.keyCode === 66
        ) {
            console.log("trigger 5")

            this.trigger();
        }
    }

    // ================= CORE =================

    move(step: number) {
        console.log("Move")
        this.clean();

        if (this.focusNodes.length === 0) return;



        // 🔥 first move → set initial focus
        if (this.currentIndex === -1) {

            this.currentIndex =
                step > 0
                    ? 0
                    : this.focusNodes.length - 1;

            this.updateFocus();
            return;
        }

        this.currentIndex += step;

        if (this.currentIndex < 0) this.currentIndex = this.focusNodes.length - 1;
        if (this.currentIndex >= this.focusNodes.length) this.currentIndex = 0;

        this.updateFocus();

        console.log(
            "Current Focus:",
            this.currentIndex,
            this.focusNodes[this.currentIndex]?.name
        );
    }

    trigger() {

        this.clean();
        console.log("1 trigger")

        if (this.focusNodes.length === 0) return;
        console.log("2 trigger")

        if (this.currentIndex === -1) return;
        console.log("3 trigger")
        let node = this.focusNodes[this.currentIndex];
        if (!node) return;

        // if (startGame.Instance && startGame.Instance.buttonClick) {
        //     cc.audioEngine.playEffect(startGame.Instance.buttonClick, false);
        // }
        console.log("4 trigger")

        this.playPressEffect(node, () => {
            console.log("playeffect")

            let button = node.getComponent(cc.Button);

            if (button && button.clickEvents.length > 0) {

                button.clickEvents.forEach(eventHandler => {

                    eventHandler.emit([{
                        target: node,
                        currentTarget: node
                    }]);

                });

            }

        });
    }

    // ================= HELPERS =================

    clean() {
        this.focusNodes = this.focusNodes.filter(node => {
            if (!node || !node.isValid) return false;

            let btn = node.getComponent(cc.Button);
            if (btn && !btn.interactable) return false;

            return true;
        });

        if (this.currentIndex >= this.focusNodes.length) {
            this.currentIndex = 0;
        }
    }

    updateFocus() {
        console.log("this.focusNodes.length", this.focusNodes.length);

        this.focusNodes.forEach((node, index) => {

            if (!node || !node.isValid) return;

            const baseScale = this.originalScales.get(node) ?? 1;

            cc.Tween.stopAllByTarget(node);
            if (index === this.currentIndex) {
                console.log("focused");
                cc.tween(node)
                    .to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE })
                    .start();
                node.opacity = 255;
            } else {
                console.log("unfocused");
                cc.tween(node)
                    .to(0.1, { scale: baseScale })
                    .start();
                node.opacity = 255;
            }
        });
    }
    // ================= MOUSE + TV =================

    playPressEffect(node: cc.Node, callback?: Function) {

        let baseScale = this.originalScales.get(node) ?? node.scale; // 🔥 important
        console.log("CLICK:", node.name);
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
            .to(0.1, { scale: baseScale, opacity: 255 })
            .call(() => {
                if (callback) callback();
            })
            .start();
        // When game only has touch events.
        node.emit("tv-select", { target: node, currentTarget: node });
    }

    clearFocus() {
        this.focusNodes.forEach(node => {
            if (!node || !node.isValid) return;

            const baseScale = this.originalScales.get(node) ?? 1;

            cc.Tween.stopAllByTarget(node);
            node.scale = baseScale;
            node.opacity = 255;
        });
    }

    attachClickListeners() {
        this.focusNodes.forEach((node, index) => {

            node.off(cc.Node.EventType.MOUSE_ENTER);
            node.off(cc.Node.EventType.MOUSE_LEAVE);
            node.off(cc.Node.EventType.MOUSE_DOWN);
            node.off("click");

            node.on("click", (event) => {

                this.currentIndex = index;
                this.updateFocus();

                this.playPressEffect(node, () => {
                    if (this.canSelect) {
                        node.emit("custom-select", event || { target: node });
                    }
                });

            });

            node.on(cc.Node.EventType.MOUSE_ENTER, () => {
                const baseScale = this.originalScales.get(node) ?? 1;
                cc.tween(node).to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE }).start();
            });

            node.on(cc.Node.EventType.MOUSE_LEAVE, () => {

                const baseScale = this.originalScales.get(node) ?? 1;

                if (
                    !this.focusNodes ||
                    this.currentIndex < 0 ||
                    !this.focusNodes[this.currentIndex]
                ) {

                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                    return;
                }

                if (this.focusNodes[this.currentIndex] !== node) {

                    cc.tween(node)
                        .to(0.1, { scale: baseScale })
                        .start();
                }
            });

        });


    }
}

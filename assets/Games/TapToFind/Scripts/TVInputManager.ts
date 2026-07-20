
const { ccclass, property } = cc._decorator;

@ccclass
export default class TVInputManager extends cc.Component {

    @property(cc.AudioClip)
    private hoverSFX: cc.AudioClip = null;
    private focusNodes: cc.Node[] = [];
    private currentIndex: number = -1;
    private canSelect: boolean = true;
    private originalScales: Map<cc.Node, number> = new Map();
    private static readonly FOCUS_SCALE = 1.15;

    // ================= INIT =================

    private static instance: TVInputManager = null;
    static get Instance() {
        return this.instance;
    }
    init(nodes: cc.Node[], defaultIndex: number = -1) {
        this.focusNodes = nodes || [];
        this.originalScales.clear();
        this.focusNodes.forEach(node => {
            if (node && node.isValid) {
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
        window.addEventListener(
            "keydown",
            this.handleTVKeys,
            true
        );
        TVInputManager.instance = this;
        window.focus();
        this.scheduleOnce(() => {
            if (cc.game.canvas) {
                cc.game.canvas.setAttribute("tabindex", "0");
                cc.game.canvas.focus();
            }
        }, 0.2);
    }

    onDestroy() {
        window.removeEventListener("keydown", this.handleTVKeys, true);
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager.instance = null;
    }


    onKeyDown(event: cc.Event.EventKeyboard) {
        (event as any).preventDefault?.();
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
        if (!this.canSelect) return;
        if (
            event.keyCode === 8 ||
            event.keyCode === 27
        ) {
            return;
        }
        if (
            event.keyCode === cc.macro.KEY.enter ||
            event.keyCode === cc.macro.KEY.space ||
            event.keyCode === 13 ||
            event.keyCode === 23 ||
            event.keyCode === 66
        ) {
            this.trigger();
        }
    }

    // ================= CORE =================

    move(step: number) {
        console.log("Move")
        this.clean();
        if (this.focusNodes.length === 0) return;
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
    }

    trigger() {
        this.clean();
        if (this.focusNodes.length === 0) return;
        if (this.currentIndex === -1) return;
        let node = this.focusNodes[this.currentIndex];
        if (!node) return;
        this.playPressEffect(node, () => {
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
        this.focusNodes.forEach((node, index) => {
            if (!node || !node.isValid) return;
            const baseScale = this.originalScales.get(node) ?? 1;
            cc.Tween.stopAllByTarget(node);
            if (index === this.currentIndex) {
                cc.tween(node)
                    .to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE })
                    .start();
                node.opacity = 255;
            } else {
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
                cc.audioEngine.playEffect(this.hoverSFX, false)
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

/*
        --------------For Gameplay--------------------------------
    
        if game has touchStart event : add this after assigning touchStart event
        element.on('tv-select', function (event) {
            this.TouchStart(element);
        }, this);

        if(TVInputManager.Instance) {
            TVInputManager.Instance.setCanSelect(this.canTouch)
        }
    
        Start :
        let optionNodes = this.node.getChildByName("options").children;
        optionNodes.forEach((element, idx) => {
            let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" });
            if (idx === optionNodes.length - 1) {
                t = t.call(() => {
                    this.setupTVFocus("options");
                });
            }
            t.start();
        });
    
        For options
        let optionNodes2 = this.node.getChildByName("options").children;
        optionNodes2.forEach((element, idx) => {
            let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" })
                .call(() => {
                    this.canTouch = true;
                    TVInputManager.Instance.setCanSelect(this.canTouch)
                });
            if (idx === optionNodes2.length - 1) {
                t = t.call(() => {
                    this.setupTVFocus("options");
                });
            }
            t.start();
        });
    
        buttonSound: this.setupTVFocus("options");
    
        private setupTVFocus(activeContainerName: string) {
            let backBtn = startGame.Instance.node.getChildByName("back");
            let musicBtn = startGame.Instance.node.getChildByName("music");
            let soundBtn = this.node.getChildByName("panel").getChildByName("soundbutton");
            backBtn.scale = 1;
            musicBtn.scale = 1;
            let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
                let btn = node.getComponent(cc.Button);
                return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
            });
            let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);
            if (cc.director.getScene().name == "1") {
                TVInputManager.Instance.init(nodes, (parseInt(this.answerarray[0])) - 1);
            }
            else {
                TVInputManager.Instance.init(nodes, -1);
            }
            TVInputManager.Instance.setCanSelect(this.canTouch);
        }



        -------------------------------- EndScreen-----------------------------------------
         onload : 
                let backBtn = startGame.Instance.node.getChildByName("back");
                let musicBtn = startGame.Instance.node.getChildByName("music");
                backBtn.scale = 1;
                musicBtn.scale = 1;
                let nodes = [backBtn, musicBtn,];
                TVInputManager.Instance.setCanSelect(true);
                TVInputManager.Instance.init(nodes);
    

        ------------------------------StartGame -----------------------------------------
        onload :
            let backBtn = this.node.getChildByName("back");
            let musicBtn = this.node.getChildByName("music");
            let nodes = [backBtn, musicBtn,];
            this.scheduleOnce(() => {
                TVInputManager.Instance.init(nodes);
            }, 0.5);
    
*/
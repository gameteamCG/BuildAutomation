
// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class TVInputManager extends cc.Component {

//     @property(cc.AudioClip)
//     private hoverSFX: cc.AudioClip = null;
//     private focusNodes: cc.Node[] = [];
//     private currentIndex: number = -1;
//     private canSelect: boolean = true;
//     private originalScales: Map<cc.Node, number> = new Map();
//     private static readonly FOCUS_SCALE = 1.15;

//     // ================= INIT =================

//     private static instance: TVInputManager = null;
//     static get Instance() {
//         return this.instance;
//     }
//     init(nodes: cc.Node[], defaultIndex: number = -1) {
//         this.focusNodes = nodes || [];
//         this.originalScales.clear();
//         this.focusNodes.forEach(node => {
//             if (node && node.isValid) {
//                 const scale = node.scale;
//                 this.originalScales.set(node, scale > 0.01 ? scale : 1);
//             }
//         });
//         this.currentIndex = defaultIndex;
//         if (defaultIndex === -1) {
//             this.clearFocus();
//         } else {
//             this.updateFocus();
//         }
//         this.attachClickListeners();
//     }

//     setCanSelect(val: boolean) {
//         this.canSelect = val;
//     }

//     // ================= INPUT =================


//     private handleTVKeys = (e: KeyboardEvent) => {
//         const blockedKeys = [
//             "ArrowUp",
//             "ArrowDown",
//             "ArrowLeft",
//             "ArrowRight",
//             "Enter",
//             " ",
//             "Space",
//             "Spacebar",
//             "Backspace",
//             "Escape",
//             "GoBack",
//             "BrowserBack"
//         ];

//         if (blockedKeys.includes(e.key)) {
//             e.preventDefault();
//             e.stopPropagation();
//             e.stopImmediatePropagation();
//             cc.game.canvas?.focus();
//             this.onKeyDown({
//                 keyCode: e.keyCode
//             } as any);
//         }
//     };


//     onLoad() {
//         cc.game.addPersistRootNode(this.node);
//         TVInputManager.instance = this;
//         document.body.style.overflow = "hidden";
//         document.body.style.touchAction = "none";
//         window.addEventListener(
//             "keydown",
//             this.handleTVKeys,
//             true
//         );
//         TVInputManager.instance = this;
//         window.focus();
//         this.scheduleOnce(() => {
//             if (cc.game.canvas) {
//                 cc.game.canvas.setAttribute("tabindex", "0");
//                 cc.game.canvas.focus();
//             }
//         }, 0.2);
//     }

//     onDestroy() {
//         window.removeEventListener("keydown", this.handleTVKeys, true);
//         this.focusNodes = [];
//         this.originalScales.clear();
//         TVInputManager.instance = null;
//     }


//     onKeyDown(event: cc.Event.EventKeyboard) {
//         (event as any).preventDefault?.();
//         switch (event.keyCode) {
//             case cc.macro.KEY.left:
//             case cc.macro.KEY.up:
//                 this.move(-1);
//                 return;

//             case cc.macro.KEY.right:
//             case cc.macro.KEY.down:
//                 this.move(1);
//                 return;
//         }
//         if (!this.canSelect) return;
//         if (
//             event.keyCode === 8 ||
//             event.keyCode === 27
//         ) {
//             return;
//         }
//         if (
//             event.keyCode === cc.macro.KEY.enter ||
//             event.keyCode === cc.macro.KEY.space ||
//             event.keyCode === 13 ||
//             event.keyCode === 23 ||
//             event.keyCode === 66
//         ) {
//             this.trigger();
//         }
//     }

//     // ================= CORE =================

//     move(step: number) {
//         console.log("Move")
//         this.clean();
//         if (this.focusNodes.length === 0) return;
//         if (this.currentIndex === -1) {
//             this.currentIndex =
//                 step > 0
//                     ? 0
//                     : this.focusNodes.length - 1;

//             this.updateFocus();
//             return;
//         }
//         this.currentIndex += step;
//         if (this.currentIndex < 0) this.currentIndex = this.focusNodes.length - 1;
//         if (this.currentIndex >= this.focusNodes.length) this.currentIndex = 0;
//         this.updateFocus();
//         if (!this.canSelect) return;
//     }

//     trigger() {
//         this.clean();
//         if (this.focusNodes.length === 0) return;
//         if (this.currentIndex === -1) return;
//         let node = this.focusNodes[this.currentIndex];
//         if (!node) return;
//         this.playPressEffect(node, () => {
//             let button = node.getComponent(cc.Button);
//             if (button && button.clickEvents.length > 0) {
//                 button.clickEvents.forEach(eventHandler => {
//                     eventHandler.emit([{
//                         target: node,
//                         currentTarget: node
//                     }]);
//                 });
//             }
//         });
//     }

//     // ================= HELPERS =================

//     clean() {
//         this.focusNodes = this.focusNodes.filter(node => {
//             if (!node || !node.isValid) return false;
//             let btn = node.getComponent(cc.Button);
//             if (btn && !btn.interactable) return false;
//             return true;
//         });

//         if (this.currentIndex >= this.focusNodes.length) {
//             this.currentIndex = 0;
//         }
//     }

//     updateFocus() {
//         this.focusNodes.forEach((node, index) => {
//             if (!node || !node.isValid) return;
//             const baseScale = this.originalScales.get(node) ?? 1;
//             cc.Tween.stopAllByTarget(node);
//             if (index === this.currentIndex) {
//                 cc.audioEngine.playEffect(this.hoverSFX, false);
//                 cc.tween(node)
//                     .to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE })
//                     .start();
//                 node.opacity = 255;
//             } else {
//                 cc.tween(node)
//                     .to(0.1, { scale: baseScale })
//                     .start();
//                 node.opacity = 255;
//             }
//         });
//     }
//     // ================= MOUSE + TV =================

//     playPressEffect(node: cc.Node, callback?: Function) {
//         let baseScale = this.originalScales.get(node) ?? node.scale; // 🔥 important
//         console.log("CLICK:", node.name);
//         cc.Tween.stopAllByTarget(node);
//         cc.tween(node)
//             .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
//             .to(0.1, { scale: baseScale, opacity: 255 })
//             .call(() => {
//                 if (callback) callback();
//             })
//             .start();
//         node.emit("tv-select", { target: node, currentTarget: node });
//     }

//     clearFocus() {
//         this.focusNodes.forEach(node => {
//             if (!node || !node.isValid) return;
//             const baseScale = this.originalScales.get(node) ?? 1;
//             cc.Tween.stopAllByTarget(node);
//             node.scale = baseScale;
//             node.opacity = 255;
//         });
//     }

//     attachClickListeners() {
//         this.focusNodes.forEach((node, index) => {
//             node.off(cc.Node.EventType.MOUSE_ENTER);
//             node.off(cc.Node.EventType.MOUSE_LEAVE);
//             node.off(cc.Node.EventType.MOUSE_DOWN);
//             node.off("click");
//             node.on("click", (event) => {
//                 this.currentIndex = index;
//                 this.updateFocus();
//                 this.playPressEffect(node, () => {
//                     if (this.canSelect) {
//                         node.emit("custom-select", event || { target: node });
//                     }
//                 });
//             });
//             node.on(cc.Node.EventType.MOUSE_ENTER, () => {
//                 cc.audioEngine.playEffect(this.hoverSFX, false)
//                 const baseScale = this.originalScales.get(node) ?? 1;
//                 cc.tween(node).to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE }).start();
//             });
//             node.on(cc.Node.EventType.MOUSE_LEAVE, () => {
//                 const baseScale = this.originalScales.get(node) ?? 1;
//                 if (
//                     !this.focusNodes ||
//                     this.currentIndex < 0 ||
//                     !this.focusNodes[this.currentIndex]
//                 ) {
//                     cc.tween(node).to(0.1, { scale: baseScale }).start();
//                     return;
//                 }
//                 if (this.focusNodes[this.currentIndex] !== node) {
//                     cc.tween(node)
//                         .to(0.1, { scale: baseScale })
//                         .start();
//                 }
//             });
//         });
//     }
// }

// /*
//         --------------For Gameplay--------------------------------

//         if game has touchStart event : add this after assigning touchStart event
//         element.on('tv-select', function (event) {
//             this.TouchStart(element);
//         }, this);

//         if(TVInputManager.Instance) {
//             TVInputManager.Instance.setCanSelect(this.canTouch)
//         }

//         Start :
//         let optionNodes = this.node.getChildByName("options").children;
//         optionNodes.forEach((element, idx) => {
//             let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" });
//             if (idx === optionNodes.length - 1) {
//                 t = t.call(() => {
//                     this.setupTVFocus("options");
//                 });
//             }
//             t.start();
//         });

//         For options
//         let optionNodes2 = this.node.getChildByName("options").children;
//         optionNodes2.forEach((element, idx) => {
//             let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" })
//                 .call(() => {
//                     this.canTouch = true;
//                     TVInputManager.Instance.setCanSelect(this.canTouch)
//                 });
//             if (idx === optionNodes2.length - 1) {
//                 t = t.call(() => {
//                     this.setupTVFocus("options");
//                 });
//             }
//             t.start();
//         });

//         buttonSound: this.setupTVFocus("options");

//         private setupTVFocus(activeContainerName: string) {
//             let backBtn = startGame.Instance.node.getChildByName("back");
//             let musicBtn = startGame.Instance.node.getChildByName("music");
//             let soundBtn = this.node.getChildByName("panel").getChildByName("soundbutton");
//             backBtn.scale = 1;
//             musicBtn.scale = 1;
//             let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
//                 let btn = node.getComponent(cc.Button);
//                 return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
//             });
//             let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);
//             if (cc.director.getScene().name == "1") {
//                 TVInputManager.Instance.init(nodes, (parseInt(this.answerarray[0])) - 1);
//             }
//             else {
//                 TVInputManager.Instance.init(nodes, -1);
//             }
//             TVInputManager.Instance.setCanSelect(this.canTouch);
//         }



//         -------------------------------- EndScreen-----------------------------------------
//          onload : 
//                 let backBtn = startGame.Instance.node.getChildByName("back");
//                 let musicBtn = startGame.Instance.node.getChildByName("music");
//                 backBtn.scale = 1;
//                 musicBtn.scale = 1;
//                 let nodes = [backBtn, musicBtn,];
//                 TVInputManager.Instance.setCanSelect(true);
//                 TVInputManager.Instance.init(nodes);


//         ------------------------------StartGame -----------------------------------------
//         onload :
//             let backBtn = this.node.getChildByName("back");
//             let musicBtn = this.node.getChildByName("music");
//             let nodes = [backBtn, musicBtn,];
//             this.scheduleOnce(() => {
//                 TVInputManager.Instance.init(nodes);
//             }, 0.5);

// */

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
        // detach listeners from OLD nodes that are no longer part of the new list,
        // so stale hover/click handlers don't linger on nodes from the previous screen/question
        this.detachClickListeners();

        this.focusNodes = (nodes || []).filter(n => !!n && n.isValid);
        this.originalScales.clear();
        this.focusNodes.forEach(node => {
            const scale = node.scale;
            this.originalScales.set(node, scale > 0.01 ? scale : 1);
        });

        this.currentIndex = defaultIndex;
        if (defaultIndex === -1 || defaultIndex >= this.focusNodes.length) {
            this.currentIndex = -1;
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
        this.detachClickListeners();
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager.instance = null;
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        (event as any).preventDefault?.();

        // 🔑 FIX: block ALL keyboard input (navigation + select) while canSelect is false.
        // Earlier only trigger() checked canSelect, so arrow-keys could move focus onto
        // nodes that weren't ready yet, causing desync between what's highlighted and
        // what actually gets clicked.
        if (!this.canSelect) return;

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
        const focusedNodeBefore = (this.currentIndex >= 0 && this.currentIndex < this.focusNodes.length)
            ? this.focusNodes[this.currentIndex]
            : null;

        this.clean(focusedNodeBefore);

        if (this.focusNodes.length === 0) return;

        if (this.currentIndex === -1) {
            this.currentIndex = step > 0 ? 0 : this.focusNodes.length - 1;
            this.updateFocus();
            return;
        }

        this.currentIndex += step;
        if (this.currentIndex < 0) this.currentIndex = this.focusNodes.length - 1;
        if (this.currentIndex >= this.focusNodes.length) this.currentIndex = 0;
        this.updateFocus();
    }

    trigger() {
        const focusedNodeBefore = (this.currentIndex >= 0 && this.currentIndex < this.focusNodes.length)
            ? this.focusNodes[this.currentIndex]
            : null;

        this.clean(focusedNodeBefore);

        if (this.focusNodes.length === 0) return;
        if (this.currentIndex === -1) return;

        let node = this.focusNodes[this.currentIndex];
        if (!node || !node.isValid) return;

        this.playPressEffect(node, () => {
            let button = node.getComponent(cc.Button);
            if (button && button.interactable && button.clickEvents.length > 0) {
                button.clickEvents.forEach(eventHandler => {
                    eventHandler.emit([{
                        target: node,
                        currentTarget: node
                    }]);
                });
            }
            // keep native listeners (Gameplay's TOUCH_START / "tv-select" handlers) in sync
            node.emit("tv-select", { target: node, currentTarget: node });
        });
    }

    // ================= HELPERS =================

    /**
     * Removes invalid / inactive / non-interactable nodes from the focus list.
     * 🔑 FIX: previously this only re-clamped currentIndex by raw number, which could
     * silently point the cursor at a DIFFERENT node than the one visually highlighted
     * once nodes got removed from the middle of the list (e.g. sound button going
     * non-interactable while audio plays). Now we track the actual focused NODE
     * reference and re-locate its index after filtering.
     */
    clean(focusedNode: cc.Node | null) {
        this.focusNodes = this.focusNodes.filter(node => {
            if (!node || !node.isValid || !node.active || node.opacity <= 0) return false;
            let btn = node.getComponent(cc.Button);
            if (btn && !btn.interactable) return false;
            return true;
        });

        if (focusedNode && this.focusNodes.includes(focusedNode)) {
            this.currentIndex = this.focusNodes.indexOf(focusedNode);
        } else if (this.currentIndex >= this.focusNodes.length) {
            this.currentIndex = this.focusNodes.length > 0 ? 0 : -1;
        }
    }

    updateFocus() {
        this.focusNodes.forEach((node, index) => {
            if (!node || !node.isValid) return;
            const baseScale = this.originalScales.get(node) ?? 1;
            cc.Tween.stopAllByTarget(node);
            if (index === this.currentIndex) {
                if (this.hoverSFX) {
                    cc.audioEngine.playEffect(this.hoverSFX, false);
                }
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
        let baseScale = this.originalScales.get(node) ?? node.scale;
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
            .to(0.1, { scale: baseScale, opacity: 255 })
            .call(() => {
                if (callback) callback();
            })
            .start();
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

    private clickHandlers: Map<cc.Node, { click: Function, enter: Function, leave: Function }> = new Map();

    attachClickListeners() {
        this.focusNodes.forEach((node, index) => {
            node.off(cc.Node.EventType.MOUSE_ENTER);
            node.off(cc.Node.EventType.MOUSE_LEAVE);
            node.off(cc.Node.EventType.MOUSE_DOWN);
            node.off("click");

            const onClick = (event: any) => {
                // 🔑 FIX: skip click handling entirely for non-interactable buttons,
                // so a leftover mouse click on a just-disabled button (e.g. sound
                // button mid-audio) can't desync currentIndex from what's on screen.
                let btn = node.getComponent(cc.Button);
                if (btn && !btn.interactable) return;
                if (!this.focusNodes.includes(node)) return;

                this.currentIndex = this.focusNodes.indexOf(node);
                this.updateFocus();
                this.playPressEffect(node, () => {
                    if (this.canSelect) {
                        // 🔑 FIX: emit "tv-select" (not "custom-select") so mouse clicks
                        // and keyboard selects always go through the SAME event that
                        // Gameplay.ts listens for.
                        node.emit("tv-select", { target: node, currentTarget: node });
                    }
                });
            };

            const onEnter = () => {
                let btn = node.getComponent(cc.Button);
                if (btn && !btn.interactable) return; // don't hover-highlight disabled buttons
                if (this.hoverSFX) {
                    cc.audioEngine.playEffect(this.hoverSFX, false);
                }
                const baseScale = this.originalScales.get(node) ?? 1;
                cc.tween(node).to(0.1, { scale: baseScale * TVInputManager.FOCUS_SCALE }).start();
            };

            const onLeave = () => {
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
                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                }
            };

            node.on("click", onClick);
            node.on(cc.Node.EventType.MOUSE_ENTER, onEnter);
            node.on(cc.Node.EventType.MOUSE_LEAVE, onLeave);

            this.clickHandlers.set(node, { click: onClick, enter: onEnter, leave: onLeave });
        });
    }

    /** detach listeners bound by a previous init() call, including from nodes no longer in focusNodes */
    detachClickListeners() {
        this.clickHandlers.forEach((handlers, node) => {
            if (node && node.isValid) {
                node.off("click", handlers.click as any);
                node.off(cc.Node.EventType.MOUSE_ENTER, handlers.enter as any);
                node.off(cc.Node.EventType.MOUSE_LEAVE, handlers.leave as any);
            }
        });
        this.clickHandlers.clear();
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



"use strict";
cc._RF.push(module, '8bf60YCrZxKiZLcdZhYbVvF', 'TVInputManager');
// Games/TapToFind/Scripts/TVInputManager.ts

"use strict";
// const { ccclass, property } = cc._decorator;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TVInputManager = /** @class */ (function (_super) {
    __extends(TVInputManager, _super);
    function TVInputManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverSFX = null;
        _this.focusNodes = [];
        _this.currentIndex = -1;
        _this.canSelect = true;
        _this.originalScales = new Map();
        // ================= INPUT =================
        _this.handleTVKeys = function (e) {
            var _a;
            var blockedKeys = [
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
                (_a = cc.game.canvas) === null || _a === void 0 ? void 0 : _a.focus();
                _this.onKeyDown({
                    keyCode: e.keyCode
                });
            }
        };
        _this.clickHandlers = new Map();
        return _this;
    }
    TVInputManager_1 = TVInputManager;
    Object.defineProperty(TVInputManager, "Instance", {
        get: function () {
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    TVInputManager.prototype.init = function (nodes, defaultIndex) {
        var _this = this;
        if (defaultIndex === void 0) { defaultIndex = -1; }
        // detach listeners from OLD nodes that are no longer part of the new list,
        // so stale hover/click handlers don't linger on nodes from the previous screen/question
        this.detachClickListeners();
        this.focusNodes = (nodes || []).filter(function (n) { return !!n && n.isValid; });
        this.originalScales.clear();
        this.focusNodes.forEach(function (node) {
            var scale = node.scale;
            _this.originalScales.set(node, scale > 0.01 ? scale : 1);
        });
        this.currentIndex = defaultIndex;
        if (defaultIndex === -1 || defaultIndex >= this.focusNodes.length) {
            this.currentIndex = -1;
            this.clearFocus();
        }
        else {
            this.updateFocus();
        }
        this.attachClickListeners();
    };
    TVInputManager.prototype.setCanSelect = function (val) {
        this.canSelect = val;
    };
    TVInputManager.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        TVInputManager_1.instance = this;
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
        window.addEventListener("keydown", this.handleTVKeys, true);
        TVInputManager_1.instance = this;
        window.focus();
        this.scheduleOnce(function () {
            if (cc.game.canvas) {
                cc.game.canvas.setAttribute("tabindex", "0");
                cc.game.canvas.focus();
            }
        }, 0.2);
    };
    TVInputManager.prototype.onDestroy = function () {
        window.removeEventListener("keydown", this.handleTVKeys, true);
        this.detachClickListeners();
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager_1.instance = null;
    };
    TVInputManager.prototype.onKeyDown = function (event) {
        var _a, _b;
        (_b = (_a = event).preventDefault) === null || _b === void 0 ? void 0 : _b.call(_a);
        // 🔑 FIX: block ALL keyboard input (navigation + select) while canSelect is false.
        // Earlier only trigger() checked canSelect, so arrow-keys could move focus onto
        // nodes that weren't ready yet, causing desync between what's highlighted and
        // what actually gets clicked.
        if (!this.canSelect)
            return;
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
        if (event.keyCode === 8 ||
            event.keyCode === 27) {
            return;
        }
        if (event.keyCode === cc.macro.KEY.enter ||
            event.keyCode === cc.macro.KEY.space ||
            event.keyCode === 13 ||
            event.keyCode === 23 ||
            event.keyCode === 66) {
            this.trigger();
        }
    };
    // ================= CORE =================
    TVInputManager.prototype.move = function (step) {
        var focusedNodeBefore = (this.currentIndex >= 0 && this.currentIndex < this.focusNodes.length)
            ? this.focusNodes[this.currentIndex]
            : null;
        this.clean(focusedNodeBefore);
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1) {
            this.currentIndex = step > 0 ? 0 : this.focusNodes.length - 1;
            this.updateFocus();
            return;
        }
        this.currentIndex += step;
        if (this.currentIndex < 0)
            this.currentIndex = this.focusNodes.length - 1;
        if (this.currentIndex >= this.focusNodes.length)
            this.currentIndex = 0;
        this.updateFocus();
    };
    TVInputManager.prototype.trigger = function () {
        var focusedNodeBefore = (this.currentIndex >= 0 && this.currentIndex < this.focusNodes.length)
            ? this.focusNodes[this.currentIndex]
            : null;
        this.clean(focusedNodeBefore);
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1)
            return;
        var node = this.focusNodes[this.currentIndex];
        if (!node || !node.isValid)
            return;
        this.playPressEffect(node, function () {
            var button = node.getComponent(cc.Button);
            if (button && button.interactable && button.clickEvents.length > 0) {
                button.clickEvents.forEach(function (eventHandler) {
                    eventHandler.emit([{
                            target: node,
                            currentTarget: node
                        }]);
                });
            }
            // keep native listeners (Gameplay's TOUCH_START / "tv-select" handlers) in sync
            node.emit("tv-select", { target: node, currentTarget: node });
        });
    };
    // ================= HELPERS =================
    /**
     * Removes invalid / inactive / non-interactable nodes from the focus list.
     * 🔑 FIX: previously this only re-clamped currentIndex by raw number, which could
     * silently point the cursor at a DIFFERENT node than the one visually highlighted
     * once nodes got removed from the middle of the list (e.g. sound button going
     * non-interactable while audio plays). Now we track the actual focused NODE
     * reference and re-locate its index after filtering.
     */
    TVInputManager.prototype.clean = function (focusedNode) {
        this.focusNodes = this.focusNodes.filter(function (node) {
            if (!node || !node.isValid || !node.active || node.opacity <= 0)
                return false;
            var btn = node.getComponent(cc.Button);
            if (btn && !btn.interactable)
                return false;
            return true;
        });
        if (focusedNode && this.focusNodes.includes(focusedNode)) {
            this.currentIndex = this.focusNodes.indexOf(focusedNode);
        }
        else if (this.currentIndex >= this.focusNodes.length) {
            this.currentIndex = this.focusNodes.length > 0 ? 0 : -1;
        }
    };
    TVInputManager.prototype.updateFocus = function () {
        var _this = this;
        this.focusNodes.forEach(function (node, index) {
            var _a;
            if (!node || !node.isValid)
                return;
            var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
            cc.Tween.stopAllByTarget(node);
            if (index === _this.currentIndex) {
                if (_this.hoverSFX) {
                    cc.audioEngine.playEffect(_this.hoverSFX, false);
                }
                cc.tween(node)
                    .to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE })
                    .start();
                node.opacity = 255;
            }
            else {
                cc.tween(node)
                    .to(0.1, { scale: baseScale })
                    .start();
                node.opacity = 255;
            }
        });
    };
    // ================= MOUSE + TV =================
    TVInputManager.prototype.playPressEffect = function (node, callback) {
        var _a;
        var baseScale = (_a = this.originalScales.get(node)) !== null && _a !== void 0 ? _a : node.scale;
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
            .to(0.1, { scale: baseScale, opacity: 255 })
            .call(function () {
            if (callback)
                callback();
        })
            .start();
    };
    TVInputManager.prototype.clearFocus = function () {
        var _this = this;
        this.focusNodes.forEach(function (node) {
            var _a;
            if (!node || !node.isValid)
                return;
            var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
            cc.Tween.stopAllByTarget(node);
            node.scale = baseScale;
            node.opacity = 255;
        });
    };
    TVInputManager.prototype.attachClickListeners = function () {
        var _this = this;
        this.focusNodes.forEach(function (node, index) {
            node.off(cc.Node.EventType.MOUSE_ENTER);
            node.off(cc.Node.EventType.MOUSE_LEAVE);
            node.off(cc.Node.EventType.MOUSE_DOWN);
            node.off("click");
            var onClick = function (event) {
                // 🔑 FIX: skip click handling entirely for non-interactable buttons,
                // so a leftover mouse click on a just-disabled button (e.g. sound
                // button mid-audio) can't desync currentIndex from what's on screen.
                var btn = node.getComponent(cc.Button);
                if (btn && !btn.interactable)
                    return;
                if (!_this.focusNodes.includes(node))
                    return;
                _this.currentIndex = _this.focusNodes.indexOf(node);
                _this.updateFocus();
                _this.playPressEffect(node, function () {
                    if (_this.canSelect) {
                        // 🔑 FIX: emit "tv-select" (not "custom-select") so mouse clicks
                        // and keyboard selects always go through the SAME event that
                        // Gameplay.ts listens for.
                        node.emit("tv-select", { target: node, currentTarget: node });
                    }
                });
            };
            var onEnter = function () {
                var _a;
                var btn = node.getComponent(cc.Button);
                if (btn && !btn.interactable)
                    return; // don't hover-highlight disabled buttons
                if (_this.hoverSFX) {
                    cc.audioEngine.playEffect(_this.hoverSFX, false);
                }
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                cc.tween(node).to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE }).start();
            };
            var onLeave = function () {
                var _a;
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                if (!_this.focusNodes ||
                    _this.currentIndex < 0 ||
                    !_this.focusNodes[_this.currentIndex]) {
                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                    return;
                }
                if (_this.focusNodes[_this.currentIndex] !== node) {
                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                }
            };
            node.on("click", onClick);
            node.on(cc.Node.EventType.MOUSE_ENTER, onEnter);
            node.on(cc.Node.EventType.MOUSE_LEAVE, onLeave);
            _this.clickHandlers.set(node, { click: onClick, enter: onEnter, leave: onLeave });
        });
    };
    /** detach listeners bound by a previous init() call, including from nodes no longer in focusNodes */
    TVInputManager.prototype.detachClickListeners = function () {
        this.clickHandlers.forEach(function (handlers, node) {
            if (node && node.isValid) {
                node.off("click", handlers.click);
                node.off(cc.Node.EventType.MOUSE_ENTER, handlers.enter);
                node.off(cc.Node.EventType.MOUSE_LEAVE, handlers.leave);
            }
        });
        this.clickHandlers.clear();
    };
    var TVInputManager_1;
    TVInputManager.FOCUS_SCALE = 1.15;
    // ================= INIT =================
    TVInputManager.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], TVInputManager.prototype, "hoverSFX", void 0);
    TVInputManager = TVInputManager_1 = __decorate([
        ccclass
    ], TVInputManager);
    return TVInputManager;
}(cc.Component));
exports.default = TVInputManager;
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

cc._RF.pop();
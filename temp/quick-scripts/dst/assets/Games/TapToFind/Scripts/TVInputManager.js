
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/TVInputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFRhcFRvRmluZFxcU2NyaXB0c1xcVFZJbnB1dE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLFdBQVc7QUFDWCw2REFBNkQ7QUFFN0QsOEJBQThCO0FBQzlCLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QyxnRUFBZ0U7QUFDaEUsa0RBQWtEO0FBRWxELGtEQUFrRDtBQUVsRCxzREFBc0Q7QUFDdEQsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxRQUFRO0FBQ1IsMERBQTBEO0FBQzFELHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkMsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsMkVBQTJFO0FBQzNFLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsNENBQTRDO0FBQzVDLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsbUJBQW1CO0FBQ25CLGtDQUFrQztBQUNsQyxZQUFZO0FBQ1osdUNBQXVDO0FBQ3ZDLFFBQVE7QUFFUixtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDLFFBQVE7QUFFUixtREFBbUQ7QUFHbkQscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixhQUFhO0FBRWIsNkNBQTZDO0FBQzdDLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDLHVDQUF1QztBQUN2QywrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1os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QVEsQ0FBQyxLQUFZLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQVksQ0FBQyxDQUFDO2FBQ2xFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7O0lBclV1QiwwQkFBVyxHQUFHLElBQUksQ0FBQztJQUUzQywyQ0FBMkM7SUFFNUIsdUJBQVEsR0FBbUIsSUFBSSxDQUFDO0lBVC9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2U7SUFIckIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQThVbEM7SUFBRCxxQkFBQztDQTlVRCxBQThVQyxDQTlVMkMsRUFBRSxDQUFDLFNBQVMsR0E4VXZEO2tCQTlVb0IsY0FBYztBQWdWbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9GRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLy8gQGNjY2xhc3NcclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFZJbnB1dE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuLy8gICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbi8vICAgICBwcml2YXRlIGhvdmVyU0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4vLyAgICAgcHJpdmF0ZSBmb2N1c05vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuLy8gICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAtMTtcclxuLy8gICAgIHByaXZhdGUgY2FuU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuLy8gICAgIHByaXZhdGUgb3JpZ2luYWxTY2FsZXM6IE1hcDxjYy5Ob2RlLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4vLyAgICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9DVVNfU0NBTEUgPSAxLjE1O1xyXG5cclxuLy8gICAgIC8vID09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVFZJbnB1dE1hbmFnZXIgPSBudWxsO1xyXG4vLyAgICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGluaXQobm9kZXM6IGNjLk5vZGVbXSwgZGVmYXVsdEluZGV4OiBudW1iZXIgPSAtMSkge1xyXG4vLyAgICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IG5vZGVzIHx8IFtdO1xyXG4vLyAgICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuLy8gICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuLy8gICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IG5vZGUuc2NhbGU7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLnNldChub2RlLCBzY2FsZSA+IDAuMDEgPyBzY2FsZSA6IDEpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBkZWZhdWx0SW5kZXg7XHJcbi8vICAgICAgICAgaWYgKGRlZmF1bHRJbmRleCA9PT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5jbGVhckZvY3VzKCk7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLmF0dGFjaENsaWNrTGlzdGVuZXJzKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgc2V0Q2FuU2VsZWN0KHZhbDogYm9vbGVhbikge1xyXG4vLyAgICAgICAgIHRoaXMuY2FuU2VsZWN0ID0gdmFsO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vID09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy8gICAgIHByaXZhdGUgaGFuZGxlVFZLZXlzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuLy8gICAgICAgICBjb25zdCBibG9ja2VkS2V5cyA9IFtcclxuLy8gICAgICAgICAgICAgXCJBcnJvd1VwXCIsXHJcbi8vICAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXHJcbi8vICAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXHJcbi8vICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxyXG4vLyAgICAgICAgICAgICBcIkVudGVyXCIsXHJcbi8vICAgICAgICAgICAgIFwiIFwiLFxyXG4vLyAgICAgICAgICAgICBcIlNwYWNlXCIsXHJcbi8vICAgICAgICAgICAgIFwiU3BhY2ViYXJcIixcclxuLy8gICAgICAgICAgICAgXCJCYWNrc3BhY2VcIixcclxuLy8gICAgICAgICAgICAgXCJFc2NhcGVcIixcclxuLy8gICAgICAgICAgICAgXCJHb0JhY2tcIixcclxuLy8gICAgICAgICAgICAgXCJCcm93c2VyQmFja1wiXHJcbi8vICAgICAgICAgXTtcclxuXHJcbi8vICAgICAgICAgaWYgKGJsb2NrZWRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4vLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzPy5mb2N1cygpO1xyXG4vLyAgICAgICAgICAgICB0aGlzLm9uS2V5RG93bih7XHJcbi8vICAgICAgICAgICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGVcclxuLy8gICAgICAgICAgICAgfSBhcyBhbnkpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG5cclxuLy8gICAgIG9uTG9hZCgpIHtcclxuLy8gICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4vLyAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gXCJub25lXCI7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbi8vICAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4vLyAgICAgICAgICAgICB0aGlzLmhhbmRsZVRWS2V5cyxcclxuLy8gICAgICAgICAgICAgdHJ1ZVxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4vLyAgICAgICAgIHdpbmRvdy5mb2N1cygpO1xyXG4vLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYgKGNjLmdhbWUuY2FudmFzKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XHJcbi8vICAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5mb2N1cygpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSwgMC4yKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBvbkRlc3Ryb3koKSB7XHJcbi8vICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlVFZLZXlzLCB0cnVlKTtcclxuLy8gICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSBbXTtcclxuLy8gICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbi8vICAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBudWxsO1xyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuLy8gICAgICAgICAoZXZlbnQgYXMgYW55KS5wcmV2ZW50RGVmYXVsdD8uKCk7XHJcbi8vICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbi8vICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbi8vICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKC0xKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbi8vICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4vLyAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKDEpO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZiAoIXRoaXMuY2FuU2VsZWN0KSByZXR1cm47XHJcbi8vICAgICAgICAgaWYgKFxyXG4vLyAgICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSA4IHx8XHJcbi8vICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3XHJcbi8vICAgICAgICAgKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYgKFxyXG4vLyAgICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgfHxcclxuLy8gICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlIHx8XHJcbi8vICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDEzIHx8XHJcbi8vICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDIzIHx8XHJcbi8vICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDY2XHJcbi8vICAgICAgICAgKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyA9PT09PT09PT09PT09PT09PSBDT1JFID09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAgICAgbW92ZShzdGVwOiBudW1iZXIpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmVcIilcclxuLy8gICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbi8vICAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID1cclxuLy8gICAgICAgICAgICAgICAgIHN0ZXAgPiAwXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPyAwXHJcbi8vICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuXHJcbi8vICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSBzdGVwO1xyXG4vLyAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IDApIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCAtIDE7XHJcbi8vICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuLy8gICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbi8vICAgICAgICAgaWYgKCF0aGlzLmNhblNlbGVjdCkgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRyaWdnZXIoKSB7XHJcbi8vICAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4vLyAgICAgICAgIGlmICh0aGlzLmZvY3VzTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbi8vICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSAtMSkgcmV0dXJuO1xyXG4vLyAgICAgICAgIGxldCBub2RlID0gdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XTtcclxuLy8gICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcclxuLy8gICAgICAgICB0aGlzLnBsYXlQcmVzc0VmZmVjdChub2RlLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4vLyAgICAgICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5jbGlja0V2ZW50cy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbm9kZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldDogbm9kZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1dKTtcclxuLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gPT09PT09PT09PT09PT09PT0gSEVMUEVSUyA9PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gICAgIGNsZWFuKCkge1xyXG4vLyAgICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IHRoaXMuZm9jdXNOb2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4vLyAgICAgICAgICAgICBpZiAoYnRuICYmICFidG4uaW50ZXJhY3RhYmxlKSByZXR1cm4gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHVwZGF0ZUZvY3VzKCkge1xyXG4vLyAgICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4vLyAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbi8vICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5jdXJyZW50SW5kZXgpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4vLyAgICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuLy8gICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gPT09PT09PT09PT09PT09PT0gTU9VU0UgKyBUViA9PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gICAgIHBsYXlQcmVzc0VmZmVjdChub2RlOiBjYy5Ob2RlLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbi8vICAgICAgICAgbGV0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IG5vZGUuc2NhbGU7IC8vIPCflKUgaW1wb3J0YW50XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJDTElDSzpcIiwgbm9kZS5uYW1lKTtcclxuLy8gICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbi8vICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuLy8gICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuODUsIG9wYWNpdHk6IDI1NSB9KVxyXG4vLyAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUsIG9wYWNpdHk6IDI1NSB9KVxyXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4vLyAgICAgICAgIG5vZGUuZW1pdChcInR2LXNlbGVjdFwiLCB7IHRhcmdldDogbm9kZSwgY3VycmVudFRhcmdldDogbm9kZSB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjbGVhckZvY3VzKCkge1xyXG4vLyAgICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4vLyAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbi8vICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBiYXNlU2NhbGU7XHJcbi8vICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBhdHRhY2hDbGlja0xpc3RlbmVycygpIHtcclxuLy8gICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIpO1xyXG4vLyAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSk7XHJcbi8vICAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xyXG4vLyAgICAgICAgICAgICBub2RlLm9mZihcImNsaWNrXCIpO1xyXG4vLyAgICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbGVjdCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJjdXN0b20tc2VsZWN0XCIsIGV2ZW50IHx8IHsgdGFyZ2V0OiBub2RlIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSlcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbi8vICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIFRWSW5wdXRNYW5hZ2VyLkZPQ1VTX1NDQUxFIH0pLnN0YXJ0KCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICF0aGlzLmZvY3VzTm9kZXMgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA8IDAgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XVxyXG4vLyAgICAgICAgICAgICAgICAgKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSkuc3RhcnQoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XSAhPT0gbm9kZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qXHJcbi8vICAgICAgICAgLS0tLS0tLS0tLS0tLS1Gb3IgR2FtZXBsYXktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gICAgICAgICBpZiBnYW1lIGhhcyB0b3VjaFN0YXJ0IGV2ZW50IDogYWRkIHRoaXMgYWZ0ZXIgYXNzaWduaW5nIHRvdWNoU3RhcnQgZXZlbnRcclxuLy8gICAgICAgICBlbGVtZW50Lm9uKCd0di1zZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5Ub3VjaFN0YXJ0KGVsZW1lbnQpO1xyXG4vLyAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuLy8gICAgICAgICBpZihUVklucHV0TWFuYWdlci5JbnN0YW5jZSkge1xyXG4vLyAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaClcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIFN0YXJ0IDpcclxuLy8gICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4vLyAgICAgICAgIG9wdGlvbk5vZGVzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuKGVsZW1lbnQpLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KTtcclxuLy8gICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICBGb3Igb3B0aW9uc1xyXG4vLyAgICAgICAgIGxldCBvcHRpb25Ob2RlczIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4vLyAgICAgICAgIG9wdGlvbk5vZGVzMi5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuLy8gICAgICAgICAgICAgbGV0IHQgPSBjYy50d2VlbihlbGVtZW50KS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuLy8gICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaClcclxuLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2RlczIubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICBidXR0b25Tb3VuZDogdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG5cclxuLy8gICAgICAgICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbi8vICAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbi8vICAgICAgICAgICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRidXR0b25cIik7XHJcbi8vICAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4vLyAgICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbi8vICAgICAgICAgICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGFjdGl2ZUNvbnRhaW5lck5hbWUpLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWN0aXZlICYmIG5vZGUub3BhY2l0eSA+IDAgJiYgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgbGV0IG5vZGVzID0gWy4uLm9wdGlvbkJ1dHRvbnMsIGJhY2tCdG4sIHNvdW5kQnRuLCBtdXNpY0J0bl0uZmlsdGVyKG4gPT4gISFuKTtcclxuLy8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4vLyAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgKHBhcnNlSW50KHRoaXMuYW5zd2VyYXJyYXlbMF0pKSAtIDEpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuLy8gICAgICAgICB9XHJcblxyXG5cclxuXHJcbi8vICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kU2NyZWVuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgICAgICAgb25sb2FkIDogXHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrQnRuLnNjYWxlID0gMTtcclxuLy8gICAgICAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBub2RlcyA9IFtiYWNrQnRuLCBtdXNpY0J0bixdO1xyXG4vLyAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcblxyXG5cclxuLy8gICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgICAgICBvbmxvYWQgOlxyXG4vLyAgICAgICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbi8vICAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4vLyAgICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbi8vICAgICAgICAgICAgIH0sIDAuNSk7XHJcblxyXG4vLyAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRWSW5wdXRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBob3ZlclNGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgZm9jdXNOb2RlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIGNhblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIG9yaWdpbmFsU2NhbGVzOiBNYXA8Y2MuTm9kZSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPQ1VTX1NDQUxFID0gMS4xNTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBJTklUID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRWSW5wdXRNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChub2RlczogY2MuTm9kZVtdLCBkZWZhdWx0SW5kZXg6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgLy8gZGV0YWNoIGxpc3RlbmVycyBmcm9tIE9MRCBub2RlcyB0aGF0IGFyZSBubyBsb25nZXIgcGFydCBvZiB0aGUgbmV3IGxpc3QsXHJcbiAgICAgICAgLy8gc28gc3RhbGUgaG92ZXIvY2xpY2sgaGFuZGxlcnMgZG9uJ3QgbGluZ2VyIG9uIG5vZGVzIGZyb20gdGhlIHByZXZpb3VzIHNjcmVlbi9xdWVzdGlvblxyXG4gICAgICAgIHRoaXMuZGV0YWNoQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gKG5vZGVzIHx8IFtdKS5maWx0ZXIobiA9PiAhIW4gJiYgbi5pc1ZhbGlkKTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbm9kZS5zY2FsZTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5zZXQobm9kZSwgc2NhbGUgPiAwLjAxID8gc2NhbGUgOiAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBkZWZhdWx0SW5kZXg7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRJbmRleCA9PT0gLTEgfHwgZGVmYXVsdEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFjaENsaWNrTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FuU2VsZWN0KHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuU2VsZWN0ID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUVktleXMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZWRLZXlzID0gW1xyXG4gICAgICAgICAgICBcIkFycm93VXBcIixcclxuICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcclxuICAgICAgICAgICAgXCJBcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiRW50ZXJcIixcclxuICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2VcIixcclxuICAgICAgICAgICAgXCJTcGFjZWJhclwiLFxyXG4gICAgICAgICAgICBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICAgICAgICBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgICBcIkdvQmFja1wiLFxyXG4gICAgICAgICAgICBcIkJyb3dzZXJCYWNrXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXM/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKHtcclxuICAgICAgICAgICAgICAgIGtleUNvZGU6IGUua2V5Q29kZVxyXG4gICAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUVktleXMsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYy5nYW1lLmNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVRWS2V5cywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kZXRhY2hDbGlja0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgKGV2ZW50IGFzIGFueSkucHJldmVudERlZmF1bHQ/LigpO1xyXG5cclxuICAgICAgICAvLyDwn5SRIEZJWDogYmxvY2sgQUxMIGtleWJvYXJkIGlucHV0IChuYXZpZ2F0aW9uICsgc2VsZWN0KSB3aGlsZSBjYW5TZWxlY3QgaXMgZmFsc2UuXHJcbiAgICAgICAgLy8gRWFybGllciBvbmx5IHRyaWdnZXIoKSBjaGVja2VkIGNhblNlbGVjdCwgc28gYXJyb3cta2V5cyBjb3VsZCBtb3ZlIGZvY3VzIG9udG9cclxuICAgICAgICAvLyBub2RlcyB0aGF0IHdlcmVuJ3QgcmVhZHkgeWV0LCBjYXVzaW5nIGRlc3luYyBiZXR3ZWVuIHdoYXQncyBoaWdobGlnaHRlZCBhbmRcclxuICAgICAgICAvLyB3aGF0IGFjdHVhbGx5IGdldHMgY2xpY2tlZC5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2VsZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gOCB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSAyN1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gNjZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IENPUkUgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtb3ZlKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzZWROb2RlQmVmb3JlID0gKHRoaXMuY3VycmVudEluZGV4ID49IDAgJiYgdGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICA/IHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFuKGZvY3VzZWROb2RlQmVmb3JlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHN0ZXAgPiAwID8gMCA6IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IHN0ZXA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzZWROb2RlQmVmb3JlID0gKHRoaXMuY3VycmVudEluZGV4ID49IDAgJiYgdGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICA/IHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFuKGZvY3VzZWROb2RlQmVmb3JlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlQcmVzc0VmZmVjdChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5pbnRlcmFjdGFibGUgJiYgYnV0dG9uLmNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8ga2VlcCBuYXRpdmUgbGlzdGVuZXJzIChHYW1lcGxheSdzIFRPVUNIX1NUQVJUIC8gXCJ0di1zZWxlY3RcIiBoYW5kbGVycykgaW4gc3luY1xyXG4gICAgICAgICAgICBub2RlLmVtaXQoXCJ0di1zZWxlY3RcIiwgeyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSEVMUEVSUyA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBpbnZhbGlkIC8gaW5hY3RpdmUgLyBub24taW50ZXJhY3RhYmxlIG5vZGVzIGZyb20gdGhlIGZvY3VzIGxpc3QuXHJcbiAgICAgKiDwn5SRIEZJWDogcHJldmlvdXNseSB0aGlzIG9ubHkgcmUtY2xhbXBlZCBjdXJyZW50SW5kZXggYnkgcmF3IG51bWJlciwgd2hpY2ggY291bGRcclxuICAgICAqIHNpbGVudGx5IHBvaW50IHRoZSBjdXJzb3IgYXQgYSBESUZGRVJFTlQgbm9kZSB0aGFuIHRoZSBvbmUgdmlzdWFsbHkgaGlnaGxpZ2h0ZWRcclxuICAgICAqIG9uY2Ugbm9kZXMgZ290IHJlbW92ZWQgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBsaXN0IChlLmcuIHNvdW5kIGJ1dHRvbiBnb2luZ1xyXG4gICAgICogbm9uLWludGVyYWN0YWJsZSB3aGlsZSBhdWRpbyBwbGF5cykuIE5vdyB3ZSB0cmFjayB0aGUgYWN0dWFsIGZvY3VzZWQgTk9ERVxyXG4gICAgICogcmVmZXJlbmNlIGFuZCByZS1sb2NhdGUgaXRzIGluZGV4IGFmdGVyIGZpbHRlcmluZy5cclxuICAgICAqL1xyXG4gICAgY2xlYW4oZm9jdXNlZE5vZGU6IGNjLk5vZGUgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gdGhpcy5mb2N1c05vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQgfHwgIW5vZGUuYWN0aXZlIHx8IG5vZGUub3BhY2l0eSA8PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZiAoYnRuICYmICFidG4uaW50ZXJhY3RhYmxlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZm9jdXNlZE5vZGUgJiYgdGhpcy5mb2N1c05vZGVzLmluY2x1ZGVzKGZvY3VzZWROb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuZm9jdXNOb2Rlcy5pbmRleE9mKGZvY3VzZWROb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoID4gMCA/IDAgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJTRlgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaG92ZXJTRlgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlICogVFZJbnB1dE1hbmFnZXIuRk9DVVNfU0NBTEUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBNT1VTRSArIFRWID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcGxheVByZXNzRWZmZWN0KG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gbm9kZS5zY2FsZTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuODUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGJhc2VTY2FsZTtcclxuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xpY2tIYW5kbGVyczogTWFwPGNjLk5vZGUsIHsgY2xpY2s6IEZ1bmN0aW9uLCBlbnRlcjogRnVuY3Rpb24sIGxlYXZlOiBGdW5jdGlvbiB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBhdHRhY2hDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSk7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xyXG4gICAgICAgICAgICBub2RlLm9mZihcImNsaWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb25DbGljayA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDwn5SRIEZJWDogc2tpcCBjbGljayBoYW5kbGluZyBlbnRpcmVseSBmb3Igbm9uLWludGVyYWN0YWJsZSBidXR0b25zLFxyXG4gICAgICAgICAgICAgICAgLy8gc28gYSBsZWZ0b3ZlciBtb3VzZSBjbGljayBvbiBhIGp1c3QtZGlzYWJsZWQgYnV0dG9uIChlLmcuIHNvdW5kXHJcbiAgICAgICAgICAgICAgICAvLyBidXR0b24gbWlkLWF1ZGlvKSBjYW4ndCBkZXN5bmMgY3VycmVudEluZGV4IGZyb20gd2hhdCdzIG9uIHNjcmVlbi5cclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmludGVyYWN0YWJsZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvY3VzTm9kZXMuaW5jbHVkZXMobm9kZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuZm9jdXNOb2Rlcy5pbmRleE9mKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDwn5SRIEZJWDogZW1pdCBcInR2LXNlbGVjdFwiIChub3QgXCJjdXN0b20tc2VsZWN0XCIpIHNvIG1vdXNlIGNsaWNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQga2V5Ym9hcmQgc2VsZWN0cyBhbHdheXMgZ28gdGhyb3VnaCB0aGUgU0FNRSBldmVudCB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVwbGF5LnRzIGxpc3RlbnMgZm9yLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJ0di1zZWxlY3RcIiwgeyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvbkVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuICYmICFidG4uaW50ZXJhY3RhYmxlKSByZXR1cm47IC8vIGRvbid0IGhvdmVyLWhpZ2hsaWdodCBkaXNhYmxlZCBidXR0b25zXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ob3ZlclNGWCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlICogVFZJbnB1dE1hbmFnZXIuRk9DVVNfU0NBTEUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmZvY3VzTm9kZXMgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XSAhPT0gbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIG9uRW50ZXIpO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCBvbkxlYXZlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tIYW5kbGVycy5zZXQobm9kZSwgeyBjbGljazogb25DbGljaywgZW50ZXI6IG9uRW50ZXIsIGxlYXZlOiBvbkxlYXZlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBkZXRhY2ggbGlzdGVuZXJzIGJvdW5kIGJ5IGEgcHJldmlvdXMgaW5pdCgpIGNhbGwsIGluY2x1ZGluZyBmcm9tIG5vZGVzIG5vIGxvbmdlciBpbiBmb2N1c05vZGVzICovXHJcbiAgICBkZXRhY2hDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcnMsIG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9mZihcImNsaWNrXCIsIGhhbmRsZXJzLmNsaWNrIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgaGFuZGxlcnMuZW50ZXIgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCBoYW5kbGVycy5sZWF2ZSBhcyBhbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS1Gb3IgR2FtZXBsYXktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcbiAgICAgICAgaWYgZ2FtZSBoYXMgdG91Y2hTdGFydCBldmVudCA6IGFkZCB0aGlzIGFmdGVyIGFzc2lnbmluZyB0b3VjaFN0YXJ0IGV2ZW50XHJcbiAgICAgICAgZWxlbWVudC5vbigndHYtc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgU3RhcnQgOlxyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnNcIikuY2hpbGRyZW47XHJcbiAgICAgICAgb3B0aW9uTm9kZXMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gdC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBGb3Igb3B0aW9uc1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlczIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzMi5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHQgPSBjYy50d2VlbihlbGVtZW50KS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2RlczIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgYnV0dG9uU291bmQ6IHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgIFxyXG4gICAgICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzKGFjdGl2ZUNvbnRhaW5lck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgbGV0IHNvdW5kQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkJ1dHRvbnMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYWN0aXZlQ29udGFpbmVyTmFtZSkuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmUgJiYgbm9kZS5vcGFjaXR5ID4gMCAmJiAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIobiA9PiAhIW4pO1xyXG4gICAgICAgICAgICBpZiAoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAocGFyc2VJbnQodGhpcy5hbnN3ZXJhcnJheVswXSkpIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmRTY3JlZW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICBvbmxvYWQgOiBcclxuICAgICAgICAgICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgIFxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBvbmxvYWQgOlxyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICBcclxuKi9cclxuXHJcblxyXG4iXX0=
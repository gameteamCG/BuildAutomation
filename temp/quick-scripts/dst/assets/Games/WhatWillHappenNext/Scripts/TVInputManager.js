
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/TVInputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48ed6uP8ZRKurYoxmyE4jXI', 'TVInputManager');
// Games/WhatWillHappenNext/Scripts/TVInputManager.ts

"use strict";
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
        this.focusNodes = nodes || [];
        this.originalScales.clear();
        this.focusNodes.forEach(function (node) {
            if (node && node.isValid) {
                var scale = node.scale;
                _this.originalScales.set(node, scale > 0.01 ? scale : 1);
            }
        });
        this.currentIndex = defaultIndex;
        if (defaultIndex === -1) {
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
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager_1.instance = null;
    };
    TVInputManager.prototype.onKeyDown = function (event) {
        var _a, _b;
        (_b = (_a = event).preventDefault) === null || _b === void 0 ? void 0 : _b.call(_a);
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
        if (!this.canSelect)
            return;
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
        if (!this.canSelect)
            return;
        console.log("Move");
        this.clean();
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1) {
            this.currentIndex =
                step > 0
                    ? 0
                    : this.focusNodes.length - 1;
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
        this.clean();
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1)
            return;
        var node = this.focusNodes[this.currentIndex];
        if (!node)
            return;
        this.playPressEffect(node, function () {
            var button = node.getComponent(cc.Button);
            if (button && button.clickEvents.length > 0) {
                button.clickEvents.forEach(function (eventHandler) {
                    eventHandler.emit([{
                            target: node,
                            currentTarget: node
                        }]);
                });
            }
        });
    };
    // ================= HELPERS =================
    TVInputManager.prototype.clean = function () {
        this.focusNodes = this.focusNodes.filter(function (node) {
            if (!node || !node.isValid)
                return false;
            var btn = node.getComponent(cc.Button);
            if (btn && !btn.interactable)
                return false;
            return true;
        });
        if (this.currentIndex >= this.focusNodes.length) {
            this.currentIndex = 0;
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
                cc.audioEngine.playEffect(_this.hoverSFX, false);
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
        var baseScale = (_a = this.originalScales.get(node)) !== null && _a !== void 0 ? _a : node.scale; // 🔥 important
        console.log("CLICK:", node.name);
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
            .to(0.1, { scale: baseScale, opacity: 255 })
            .call(function () {
            if (callback)
                callback();
        })
            .start();
        node.emit("tv-select", { target: node, currentTarget: node });
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
            node.on("click", function (event) {
                _this.currentIndex = index;
                _this.updateFocus();
                _this.playPressEffect(node, function () {
                    if (_this.canSelect) {
                        node.emit("custom-select", event || { target: node });
                    }
                });
            });
            node.on(cc.Node.EventType.MOUSE_ENTER, function () {
                var _a;
                cc.audioEngine.playEffect(_this.hoverSFX, false);
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                cc.tween(node).to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE }).start();
            });
            node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
                var _a;
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                if (!_this.focusNodes ||
                    _this.currentIndex < 0 ||
                    !_this.focusNodes[_this.currentIndex]) {
                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                    return;
                }
                if (_this.focusNodes[_this.currentIndex] !== node) {
                    cc.tween(node)
                        .to(0.1, { scale: baseScale })
                        .start();
                }
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVFZJbnB1dE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyUUM7UUF4UVcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG9CQUFjLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUErQnpELDRDQUE0QztRQUdwQyxrQkFBWSxHQUFHLFVBQUMsQ0FBZ0I7O1lBQ3BDLElBQU0sV0FBVyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNoQixDQUFDO1lBRUYsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUM3QixNQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLEdBQUc7Z0JBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNkLENBQUMsQ0FBQzthQUNiO1FBQ0ws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Q0FBQyxZQUFZLENBQUMsRUFDckM7b0JBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3JELE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQzdCLEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQWxRdUIsMEJBQVcsR0FBRyxJQUFJLENBQUM7SUFFM0MsMkNBQTJDO0lBRTVCLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQVQvQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNlO0lBSHJCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyUWxDO0lBQUQscUJBQUM7Q0EzUUQsQUEyUUMsQ0EzUTJDLEVBQUUsQ0FBQyxTQUFTLEdBMlF2RDtrQkEzUW9CLGNBQWM7QUE2UW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvRkUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRWSW5wdXRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBob3ZlclNGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgZm9jdXNOb2RlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIGNhblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIG9yaWdpbmFsU2NhbGVzOiBNYXA8Y2MuTm9kZSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPQ1VTX1NDQUxFID0gMS4xNTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBJTklUID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRWSW5wdXRNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBpbml0KG5vZGVzOiBjYy5Ob2RlW10sIGRlZmF1bHRJbmRleDogbnVtYmVyID0gLTEpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSBub2RlcyB8fCBbXTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBub2RlLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5zZXQobm9kZSwgc2NhbGUgPiAwLjAxID8gc2NhbGUgOiAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gZGVmYXVsdEluZGV4O1xyXG4gICAgICAgIGlmIChkZWZhdWx0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdHRhY2hDbGlja0xpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhblNlbGVjdCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhblNlbGVjdCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBJTlBVVCA9PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRWS2V5cyA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tlZEtleXMgPSBbXHJcbiAgICAgICAgICAgIFwiQXJyb3dVcFwiLFxyXG4gICAgICAgICAgICBcIkFycm93RG93blwiLFxyXG4gICAgICAgICAgICBcIkFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICBcIkFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgXCJFbnRlclwiLFxyXG4gICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgXCJTcGFjZVwiLFxyXG4gICAgICAgICAgICBcIlNwYWNlYmFyXCIsXHJcbiAgICAgICAgICAgIFwiQmFja3NwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiRXNjYXBlXCIsXHJcbiAgICAgICAgICAgIFwiR29CYWNrXCIsXHJcbiAgICAgICAgICAgIFwiQnJvd3NlckJhY2tcIlxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGlmIChibG9ja2VkS2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmNhbnZhcz8uZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vbktleURvd24oe1xyXG4gICAgICAgICAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlXHJcbiAgICAgICAgICAgIH0gYXMgYW55KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUVktleXMsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYy5nYW1lLmNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVRWS2V5cywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5jbGVhcigpO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgKGV2ZW50IGFzIGFueSkucHJldmVudERlZmF1bHQ/LigpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNlbGVjdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gOCB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSAyN1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmVudGVyIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zcGFjZSB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSAxMyB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSAyMyB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSA2NlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gQ09SRSA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG1vdmUoc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNlbGVjdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW92ZVwiKVxyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPVxyXG4gICAgICAgICAgICAgICAgc3RlcCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IHN0ZXA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbiAmJiBidXR0b24uY2xpY2tFdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQ6IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IEhFTFBFUlMgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSB0aGlzLmZvY3VzTm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmludGVyYWN0YWJsZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5jdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IE1PVVNFICsgVFYgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwbGF5UHJlc3NFZmZlY3Qobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyBub2RlLnNjYWxlOyAvLyDwn5SlIGltcG9ydGFudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0s6XCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHNjYWxlOiBiYXNlU2NhbGUgKiAwLjg1LCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBub2RlLmVtaXQoXCJ0di1zZWxlY3RcIiwgeyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFzZVNjYWxlO1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwiY3VzdG9tLXNlbGVjdFwiLCBldmVudCB8fCB7IHRhcmdldDogbm9kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF0gIT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tRm9yIEdhbWVwbGF5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgICAgIGlmIGdhbWUgaGFzIHRvdWNoU3RhcnQgZXZlbnQgOiBhZGQgdGhpcyBhZnRlciBhc3NpZ25pbmcgdG91Y2hTdGFydCBldmVudFxyXG4gICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFN0YXJ0IDpcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuKGVsZW1lbnQpLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgRm9yIG9wdGlvbnNcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICBvcHRpb25Ob2RlczIuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHQgPSB0LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGJ1dHRvblNvdW5kOiB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICBcclxuICAgICAgICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGFjdGl2ZUNvbnRhaW5lck5hbWUpLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWN0aXZlICYmIG5vZGUub3BhY2l0eSA+IDAgJiYgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gWy4uLm9wdGlvbkJ1dHRvbnMsIGJhY2tCdG4sIHNvdW5kQnRuLCBtdXNpY0J0bl0uZmlsdGVyKG4gPT4gISFuKTtcclxuICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgKHBhcnNlSW50KHRoaXMuYW5zd2VyYXJyYXlbMF0pKSAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kU2NyZWVuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgb25sb2FkIDogXHJcbiAgICAgICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlcyA9IFtiYWNrQnRuLCBtdXNpY0J0bixdO1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnRHYW1lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgb25sb2FkIDpcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgICAgICBsZXQgbXVzaWNCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMpO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgXHJcbiovIl19
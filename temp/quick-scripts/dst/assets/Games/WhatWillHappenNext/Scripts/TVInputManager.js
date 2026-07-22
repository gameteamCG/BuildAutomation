
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
cc._RF.push(module, '04d39X5twJOqb1rnGqZNcVE', 'TVInputManager');
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
            
        private setupTVFocus2() {
            let backBtn = startGame.Instance.node.getChildByName("back");
            let musicBtn = startGame.Instance.node.getChildByName("music");
            backBtn.scale = 1;
            musicBtn.scale = 1;
            let nodes = [backBtn, musicBtn,];
            TVInputManager.Instance.setCanSelect(true);
            TVInputManager.Instance.init(nodes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVFZJbnB1dE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEwUUM7UUF2UVcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG9CQUFjLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUErQnpELDRDQUE0QztRQUdwQyxrQkFBWSxHQUFHLFVBQUMsQ0FBZ0I7O1lBQ3BDLElBQU0sV0FBVyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNoQixDQUFDO1lBRUYsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUM3QixNQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLEdBQUc7Z0JBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNkLENBQUMsQ0FBQzthQUNiO1FBQ0ws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LENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyRCxPQUFPO2lCQUNWO2dCQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUM3QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt5QkFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO3lCQUM3QixLQUFLLEVBQUUsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUFqUXVCLDBCQUFXLEdBQUcsSUFBSSxDQUFDO0lBRTNDLDJDQUEyQztJQUU1Qix1QkFBUSxHQUFtQixJQUFJLENBQUM7SUFUL0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDZTtJQUhyQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMFFsQztJQUFELHFCQUFDO0NBMVFELEFBMFFDLENBMVEyQyxFQUFFLENBQUMsU0FBUyxHQTBRdkQ7a0JBMVFvQixjQUFjO0FBNFFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQThGRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFZJbnB1dE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGhvdmVyU0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBmb2N1c05vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgY2FuU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgb3JpZ2luYWxTY2FsZXM6IE1hcDxjYy5Ob2RlLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9DVVNfU0NBTEUgPSAxLjE1O1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVFZJbnB1dE1hbmFnZXIgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGluaXQobm9kZXM6IGNjLk5vZGVbXSwgZGVmYXVsdEluZGV4OiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IG5vZGVzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IG5vZGUuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLnNldChub2RlLCBzY2FsZSA+IDAuMDEgPyBzY2FsZSA6IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBkZWZhdWx0SW5kZXg7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFjaENsaWNrTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FuU2VsZWN0KHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuU2VsZWN0ID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVFZLZXlzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBibG9ja2VkS2V5cyA9IFtcclxuICAgICAgICAgICAgXCJBcnJvd1VwXCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICBcIkVudGVyXCIsXHJcbiAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICBcIlNwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2ViYXJcIixcclxuICAgICAgICAgICAgXCJCYWNrc3BhY2VcIixcclxuICAgICAgICAgICAgXCJFc2NhcGVcIixcclxuICAgICAgICAgICAgXCJHb0JhY2tcIixcclxuICAgICAgICAgICAgXCJCcm93c2VyQmFja1wiXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrZWRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bih7XHJcbiAgICAgICAgICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGVcclxuICAgICAgICAgICAgfSBhcyBhbnkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRWS2V5cyxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNjLmdhbWUuY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlVFZLZXlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAoZXZlbnQgYXMgYW55KS5wcmV2ZW50RGVmYXVsdD8uKCk7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKC0xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSA4IHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDEzIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDIzIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDY2XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBDT1JFID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbW92ZShzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmVcIilcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID1cclxuICAgICAgICAgICAgICAgIHN0ZXAgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSBzdGVwO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IDApIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmZvY3VzTm9kZXNbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBIRUxQRVJTID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gdGhpcy5mb2N1c05vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidG4gJiYgIWJ0bi5pbnRlcmFjdGFibGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlICogVFZJbnB1dE1hbmFnZXIuRk9DVVNfU0NBTEUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09IE1PVVNFICsgVFYgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwbGF5UHJlc3NFZmZlY3Qobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyBub2RlLnNjYWxlOyAvLyDwn5SlIGltcG9ydGFudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0s6XCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHNjYWxlOiBiYXNlU2NhbGUgKiAwLjg1LCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBub2RlLmVtaXQoXCJ0di1zZWxlY3RcIiwgeyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFzZVNjYWxlO1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwiY3VzdG9tLXNlbGVjdFwiLCBldmVudCB8fCB7IHRhcmdldDogbm9kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF0gIT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tRm9yIEdhbWVwbGF5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgICAgIGlmIGdhbWUgaGFzIHRvdWNoU3RhcnQgZXZlbnQgOiBhZGQgdGhpcyBhZnRlciBhc3NpZ25pbmcgdG91Y2hTdGFydCBldmVudFxyXG4gICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFN0YXJ0IDpcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuKGVsZW1lbnQpLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgRm9yIG9wdGlvbnNcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICBvcHRpb25Ob2RlczIuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHQgPSB0LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGJ1dHRvblNvdW5kOiB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICBcclxuICAgICAgICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGFjdGl2ZUNvbnRhaW5lck5hbWUpLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWN0aXZlICYmIG5vZGUub3BhY2l0eSA+IDAgJiYgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gWy4uLm9wdGlvbkJ1dHRvbnMsIGJhY2tCdG4sIHNvdW5kQnRuLCBtdXNpY0J0bl0uZmlsdGVyKG4gPT4gISFuKTtcclxuICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgKHBhcnNlSW50KHRoaXMuYW5zd2VyYXJyYXlbMF0pKSAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzMigpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBub2RlcyA9IFtiYWNrQnRuLCBtdXNpY0J0bixdO1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmRTY3JlZW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICBvbmxvYWQgOiBcclxuICAgICAgICAgICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgIFxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBvbmxvYWQgOlxyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICBcclxuKi8iXX0=
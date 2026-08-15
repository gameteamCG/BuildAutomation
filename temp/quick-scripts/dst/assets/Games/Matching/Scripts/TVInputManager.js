
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Matching/Scripts/TVInputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb7571e6axJKYqK6zngdLsv', 'TVInputManager');
// Games/Matching/Scripts/TVInputManager.ts

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
    TVInputManager.FOCUS_SCALE = 1.11;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1hdGNoaW5nXFxTY3JpcHRzXFxUVklucHV0TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTJRQztRQXhRVyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsb0JBQWMsR0FBeUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQStCekQsNENBQTRDO1FBR3BDLGtCQUFZLEdBQUcsVUFBQyxDQUFnQjs7WUFDcEMsSUFBTSxXQUFXLEdBQUc7Z0JBQ2hCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osT0FBTztnQkFDUCxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixhQUFhO2FBQ2hCLENBQUM7WUFFRixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQzdCLE1BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssR0FBRztnQkFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87aUJBQ2QsQ0FBQyxDQUFDO2FBQ2I7UUFDTCxDQUFDLENBQUM7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Q0FBQyxFQUNyQztvQkFDRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDckQsT0FBTztpQkFDVjtnQkFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDN0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQzt5QkFDN0IsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBbFF1QiwwQkFBVyxHQUFHLElBQUksQ0FBQztJQUUzQywyQ0FBMkM7SUFFNUIsdUJBQVEsR0FBbUIsSUFBSSxDQUFDO0lBVC9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2U7SUFIckIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJRbEM7SUFBRCxxQkFBQztDQTNRRCxBQTJRQyxDQTNRMkMsRUFBRSxDQUFDLFNBQVMsR0EyUXZEO2tCQTNRb0IsY0FBYztBQTZRbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9GRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFZJbnB1dE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGhvdmVyU0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBmb2N1c05vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgY2FuU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgb3JpZ2luYWxTY2FsZXM6IE1hcDxjYy5Ob2RlLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9DVVNfU0NBTEUgPSAxLjExO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVFZJbnB1dE1hbmFnZXIgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGluaXQobm9kZXM6IGNjLk5vZGVbXSwgZGVmYXVsdEluZGV4OiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IG5vZGVzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IG5vZGUuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLnNldChub2RlLCBzY2FsZSA+IDAuMDEgPyBzY2FsZSA6IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBkZWZhdWx0SW5kZXg7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFjaENsaWNrTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FuU2VsZWN0KHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuU2VsZWN0ID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVFZLZXlzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBibG9ja2VkS2V5cyA9IFtcclxuICAgICAgICAgICAgXCJBcnJvd1VwXCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICBcIkVudGVyXCIsXHJcbiAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICBcIlNwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2ViYXJcIixcclxuICAgICAgICAgICAgXCJCYWNrc3BhY2VcIixcclxuICAgICAgICAgICAgXCJFc2NhcGVcIixcclxuICAgICAgICAgICAgXCJHb0JhY2tcIixcclxuICAgICAgICAgICAgXCJCcm93c2VyQmFja1wiXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrZWRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bih7XHJcbiAgICAgICAgICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGVcclxuICAgICAgICAgICAgfSBhcyBhbnkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRWS2V5cyxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNjLmdhbWUuY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlVFZLZXlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAoZXZlbnQgYXMgYW55KS5wcmV2ZW50RGVmYXVsdD8uKCk7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKC0xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSA4IHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDEzIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDIzIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDY2XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBDT1JFID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbW92ZShzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3ZlXCIpXHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9XHJcbiAgICAgICAgICAgICAgICBzdGVwID4gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5mb2N1c05vZGVzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gc3RlcDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCAwKSB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKSB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXlQcmVzc0VmZmVjdChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5jbGlja0V2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldDogbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSEVMUEVSUyA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IHRoaXMuZm9jdXNOb2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZiAoYnRuICYmICFidG4uaW50ZXJhY3RhYmxlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIFRWSW5wdXRNYW5hZ2VyLkZPQ1VTX1NDQUxFIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gTU9VU0UgKyBUViA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHBsYXlQcmVzc0VmZmVjdChub2RlOiBjYy5Ob2RlLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IG5vZGUuc2NhbGU7IC8vIPCflKUgaW1wb3J0YW50XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElDSzpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuODUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIG5vZGUuZW1pdChcInR2LXNlbGVjdFwiLCB7IHRhcmdldDogbm9kZSwgY3VycmVudFRhcmdldDogbm9kZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBiYXNlU2NhbGU7XHJcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSk7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xyXG4gICAgICAgICAgICBub2RlLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJjdXN0b20tc2VsZWN0XCIsIGV2ZW50IHx8IHsgdGFyZ2V0OiBub2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIFRWSW5wdXRNYW5hZ2VyLkZPQ1VTX1NDQUxFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmZvY3VzTm9kZXMgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XSAhPT0gbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS1Gb3IgR2FtZXBsYXktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcbiAgICAgICAgaWYgZ2FtZSBoYXMgdG91Y2hTdGFydCBldmVudCA6IGFkZCB0aGlzIGFmdGVyIGFzc2lnbmluZyB0b3VjaFN0YXJ0IGV2ZW50XHJcbiAgICAgICAgZWxlbWVudC5vbigndHYtc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgU3RhcnQgOlxyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnNcIikuY2hpbGRyZW47XHJcbiAgICAgICAgb3B0aW9uTm9kZXMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gdC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBGb3Igb3B0aW9uc1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlczIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzMi5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHQgPSBjYy50d2VlbihlbGVtZW50KS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2RlczIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgYnV0dG9uU291bmQ6IHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgIFxyXG4gICAgICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzKGFjdGl2ZUNvbnRhaW5lck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgbGV0IHNvdW5kQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkJ1dHRvbnMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYWN0aXZlQ29udGFpbmVyTmFtZSkuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmUgJiYgbm9kZS5vcGFjaXR5ID4gMCAmJiAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIobiA9PiAhIW4pO1xyXG4gICAgICAgICAgICBpZiAoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAocGFyc2VJbnQodGhpcy5hbnN3ZXJhcnJheVswXSkpIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmRTY3JlZW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICBvbmxvYWQgOiBcclxuICAgICAgICAgICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgIFxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBvbmxvYWQgOlxyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICBcclxuKi8iXX0=
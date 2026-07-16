
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
        _this.focusNodes = [];
        _this.currentIndex = -1;
        _this.canSelect = true;
        _this.originalScales = new Map(); // 🔥 store base scales
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
        // 🔥 remember each node's original scale
        this.originalScales.clear();
        this.focusNodes.forEach(function (node) {
            if (node && node.isValid) {
                // defensive: if captured mid pop-in/hide animation (scale ~0),
                // fall back to 1 instead of freezing the node invisible
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
        // 🔥 block native TV navigation
        window.addEventListener("keydown", this.handleTVKeys, true);
        console.log("onload---------");
        TVInputManager_1.instance = this;
        // 🔥 focus browser + canvas
        window.focus();
        this.scheduleOnce(function () {
            if (cc.game.canvas) {
                cc.game.canvas.setAttribute("tabindex", "0");
                cc.game.canvas.focus();
            }
        }, 0.2);
    };
    TVInputManager.prototype.onDestroy = function () {
        // 🔥 remove TV listener
        window.removeEventListener("keydown", this.handleTVKeys, true);
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager_1.instance = null;
    };
    TVInputManager.prototype.onKeyDown = function (event) {
        var _a, _b;
        (_b = (_a = event).preventDefault) === null || _b === void 0 ? void 0 : _b.call(_a);
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
        console.log("canslect 1");
        if (!this.canSelect)
            return;
        if (event.keyCode === 8 || // Backspace
            event.keyCode === 27 // Escape
        ) {
            console.log("TV BACK BUTTON");
            // your custom back logic
            return;
        }
        if (event.keyCode === cc.macro.KEY.enter ||
            event.keyCode === cc.macro.KEY.space ||
            event.keyCode === 13 ||
            event.keyCode === 23 ||
            event.keyCode === 66) {
            console.log("trigger 5");
            this.trigger();
        }
    };
    // ================= CORE =================
    TVInputManager.prototype.move = function (step) {
        var _a;
        console.log("Move");
        this.clean();
        if (this.focusNodes.length === 0)
            return;
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
        if (this.currentIndex < 0)
            this.currentIndex = this.focusNodes.length - 1;
        if (this.currentIndex >= this.focusNodes.length)
            this.currentIndex = 0;
        this.updateFocus();
        console.log("Current Focus:", this.currentIndex, (_a = this.focusNodes[this.currentIndex]) === null || _a === void 0 ? void 0 : _a.name);
    };
    TVInputManager.prototype.trigger = function () {
        this.clean();
        console.log("1 trigger");
        if (this.focusNodes.length === 0)
            return;
        console.log("2 trigger");
        if (this.currentIndex === -1)
            return;
        console.log("3 trigger");
        var node = this.focusNodes[this.currentIndex];
        if (!node)
            return;
        // if (startGame.Instance && startGame.Instance.buttonClick) {
        //     cc.audioEngine.playEffect(startGame.Instance.buttonClick, false);
        // }
        console.log("4 trigger");
        this.playPressEffect(node, function () {
            console.log("playeffect");
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
        console.log("this.focusNodes.length", this.focusNodes.length);
        this.focusNodes.forEach(function (node, index) {
            var _a;
            if (!node || !node.isValid)
                return;
            var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
            cc.Tween.stopAllByTarget(node);
            if (index === _this.currentIndex) {
                console.log("focused");
                cc.tween(node)
                    .to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE })
                    .start();
                node.opacity = 255;
            }
            else {
                console.log("unfocused");
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
        // When game only has touch events.
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
    TVInputManager.FOCUS_SCALE = 1.15; // tweak to taste
    // ================= INIT =================
    TVInputManager.instance = null;
    TVInputManager = TVInputManager_1 = __decorate([
        ccclass
    ], TVInputManager);
    return TVInputManager;
}(cc.Component));
exports.default = TVInputManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVFZJbnB1dE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyWEM7UUF2WFcsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG9CQUFjLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyx1QkFBdUI7UUEwQ2pGLDRDQUE0QztRQUdwQyxrQkFBWSxHQUFHLFVBQUMsQ0FBZ0I7O1lBRXBDLElBQU0sV0FBVyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNoQixDQUFDO1lBRUYsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFFN0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUU3QixNQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLEdBQUc7Z0JBRXhCLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNkLENBQUMsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFDOztJQTBT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QUFFO29CQUU3QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt5QkFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO3lCQUM3QixLQUFLLEVBQUUsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQzs7SUFqWHVCLDBCQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsaUJBQWlCO0lBRTdELDJDQUEyQztJQUU1Qix1QkFBUSxHQUFtQixJQUFJLENBQUM7SUFiOUIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJYbEM7SUFBRCxxQkFBQztDQTNYRCxBQTJYQyxDQTNYMkMsRUFBRSxDQUFDLFNBQVMsR0EyWHZEO2tCQTNYb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVklucHV0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzTm9kZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBjYW5TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlczogTWFwPGNjLk5vZGUsIG51bWJlcj4gPSBuZXcgTWFwKCk7IC8vIPCflKUgc3RvcmUgYmFzZSBzY2FsZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT0NVU19TQ0FMRSA9IDEuMTU7IC8vIHR3ZWFrIHRvIHRhc3RlXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUVklucHV0TWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG5vZGVzOiBjYy5Ob2RlW10sIGRlZmF1bHRJbmRleDogbnVtYmVyID0gLTEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gbm9kZXMgfHwgW107XHJcblxyXG4gICAgICAgIC8vIPCflKUgcmVtZW1iZXIgZWFjaCBub2RlJ3Mgb3JpZ2luYWwgc2NhbGVcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmZW5zaXZlOiBpZiBjYXB0dXJlZCBtaWQgcG9wLWluL2hpZGUgYW5pbWF0aW9uIChzY2FsZSB+MCksXHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsIGJhY2sgdG8gMSBpbnN0ZWFkIG9mIGZyZWV6aW5nIHRoZSBub2RlIGludmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBub2RlLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5zZXQobm9kZSwgc2NhbGUgPiAwLjAxID8gc2NhbGUgOiAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGRlZmF1bHRJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKGRlZmF1bHRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hDbGlja0xpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhblNlbGVjdCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhblNlbGVjdCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBJTlBVVCA9PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRWS2V5cyA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2NrZWRLZXlzID0gW1xyXG4gICAgICAgICAgICBcIkFycm93VXBcIixcclxuICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcclxuICAgICAgICAgICAgXCJBcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiRW50ZXJcIixcclxuICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2VcIixcclxuICAgICAgICAgICAgXCJTcGFjZWJhclwiLFxyXG4gICAgICAgICAgICBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICAgICAgICBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgICBcIkdvQmFja1wiLFxyXG4gICAgICAgICAgICBcIkJyb3dzZXJCYWNrXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjYy5nYW1lLmNhbnZhcz8uZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKHtcclxuICAgICAgICAgICAgICAgIGtleUNvZGU6IGUua2V5Q29kZVxyXG4gICAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAvLyDwn5SlIGJsb2NrIG5hdGl2ZSBUViBuYXZpZ2F0aW9uXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRWS2V5cyxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmxvYWQtLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuXHJcblxyXG5cclxuICAgICAgICAvLyDwn5SlIGZvY3VzIGJyb3dzZXIgKyBjYW52YXNcclxuICAgICAgICB3aW5kb3cuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNjLmdhbWUuY2FudmFzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIPCflKUgcmVtb3ZlIFRWIGxpc3RlbmVyXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlVFZLZXlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLmluc3RhbmNlID0gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcblxyXG5cclxuICAgICAgICAoZXZlbnQgYXMgYW55KS5wcmV2ZW50RGVmYXVsdD8uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS0VZIERFVEVDVEVEXCIsIGV2ZW50LmtleUNvZGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKC0xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbnNsZWN0IDFcIilcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNlbGVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDggfHwgICAgLy8gQmFja3NwYWNlXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3ICAgICAgLy8gRXNjYXBlXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRWIEJBQ0sgQlVUVE9OXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8geW91ciBjdXN0b20gYmFjayBsb2dpY1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gNjZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIDVcIilcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBDT1JFID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbW92ZShzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmVcIilcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8g8J+UpSBmaXJzdCBtb3ZlIOKGkiBzZXQgaW5pdGlhbCBmb2N1c1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID1cclxuICAgICAgICAgICAgICAgIHN0ZXAgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gc3RlcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcIkN1cnJlbnQgRm9jdXM6XCIsXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4LFxyXG4gICAgICAgICAgICB0aGlzLmZvY3VzTm9kZXNbdGhpcy5jdXJyZW50SW5kZXhdPy5uYW1lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxIHRyaWdnZXJcIilcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjIgdHJpZ2dlclwiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIzIHRyaWdnZXJcIilcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2UgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmJ1dHRvbkNsaWNrKSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLmJ1dHRvbkNsaWNrLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiNCB0cmlnZ2VyXCIpXHJcblxyXG4gICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZWZmZWN0XCIpXHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQ6IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IEhFTFBFUlMgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSB0aGlzLmZvY3VzTm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidG4gJiYgIWJ0bi5pbnRlcmFjdGFibGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUZvY3VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5mb2N1c05vZGVzLmxlbmd0aFwiLCB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmZvY3VzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBNT1VTRSArIFRWID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcGxheVByZXNzRWZmZWN0KG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgICAgbGV0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IG5vZGUuc2NhbGU7IC8vIPCflKUgaW1wb3J0YW50XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElDSzpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuODUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIC8vIFdoZW4gZ2FtZSBvbmx5IGhhcyB0b3VjaCBldmVudHMuXHJcbiAgICAgICAgbm9kZS5lbWl0KFwidHYtc2VsZWN0XCIsIHsgdGFyZ2V0OiBub2RlLCBjdXJyZW50VGFyZ2V0OiBub2RlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG5cclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFzZVNjYWxlO1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUik7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKFwiY2xpY2tcIik7XHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlQcmVzc0VmZmVjdChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChcImN1c3RvbS1zZWxlY3RcIiwgZXZlbnQgfHwgeyB0YXJnZXQ6IG5vZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIFRWSW5wdXRNYW5hZ2VyLkZPQ1VTX1NDQUxFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmZvY3VzTm9kZXMgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzTm9kZXNbdGhpcy5jdXJyZW50SW5kZXhdICE9PSBub2RlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
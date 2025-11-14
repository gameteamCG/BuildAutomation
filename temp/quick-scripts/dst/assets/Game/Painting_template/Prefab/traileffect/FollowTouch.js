
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Prefab/traileffect/FollowTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7837eThnK5HlZyMRo7P8eEn', 'FollowTouch');
// Game/Painting_template/Prefab/traileffect/FollowTouch.ts

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
var TrailTouch = /** @class */ (function (_super) {
    __extends(TrailTouch, _super);
    function TrailTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.followSpeed = 0.35;
        _this.targetPos = cc.Vec2.ZERO;
        _this.following = false;
        return _this;
    }
    TrailTouch.prototype.onEnable = function () {
        var parent = this.node.parent;
        parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        var ps = this.node.getComponent(cc.ParticleSystem);
        if (ps)
            ps.stopSystem();
    };
    TrailTouch.prototype.onDisable = function () {
        var parent = this.node.parent;
        parent.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        parent.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        parent.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        parent.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    TrailTouch.prototype.update = function (dt) {
        if (this.following) {
            // Smoothly move towards target position
            var current = this.node.getPosition();
            var newPos = current.lerp(this.targetPos, this.followSpeed);
            this.node.setPosition(newPos);
        }
    };
    TrailTouch.prototype.onTouchStart = function (event) {
        var ps = this.node.getComponent(cc.ParticleSystem);
        if (ps)
            ps.resetSystem();
        var touchLoc = event.getLocation();
        this.targetPos = this.node.parent.convertToNodeSpaceAR(touchLoc);
        this.node.setPosition(this.targetPos);
        this.following = true;
    };
    TrailTouch.prototype.onTouchMove = function (event) {
        var touchLoc = event.getLocation();
        this.targetPos = this.node.parent.convertToNodeSpaceAR(touchLoc);
    };
    TrailTouch.prototype.onTouchEnd = function (event) {
        this.following = false;
        var ps = this.node.getComponent(cc.ParticleSystem);
        if (ps)
            ps.stopSystem();
    };
    __decorate([
        property({
            tooltip: "How fast node follows touch (1 = instant)"
        })
    ], TrailTouch.prototype, "followSpeed", void 0);
    TrailTouch = __decorate([
        ccclass
    ], TrailTouch);
    return TrailTouch;
}(cc.Component));
exports.default = TrailTouch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFByZWZhYlxcdHJhaWxlZmZlY3RcXEZvbGxvd1RvdWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBMkRDO1FBdERHLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRW5CLGVBQVMsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxlQUFTLEdBQVksS0FBSyxDQUFDOztJQW1EdkMsQ0FBQztJQWpERyw2QkFBUSxHQUFSO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUM7UUFDakMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENB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Y29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWlsVG91Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCJIb3cgZmFzdCBub2RlIGZvbGxvd3MgdG91Y2ggKDEgPSBpbnN0YW50KVwiXHJcbiAgICB9KVxyXG4gICAgZm9sbG93U3BlZWQ6IG51bWJlciA9IDAuMzU7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICBwcml2YXRlIGZvbGxvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xyXG4gICAgICAgIHBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYgKHBzKSBwcy5zdG9wU3lzdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xyXG4gICAgICAgIHBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93aW5nKSB7XHJcbiAgICAgICAgICAgIC8vIFNtb290aGx5IG1vdmUgdG93YXJkcyB0YXJnZXQgcG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSBjdXJyZW50LmxlcnAodGhpcy50YXJnZXRQb3MsIHRoaXMuZm9sbG93U3BlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zdCBwcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGlmIChwcykgcHMucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hMb2MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UG9zID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnRhcmdldFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9sbG93aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hMb2MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UG9zID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuZm9sbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBpZiAocHMpIHBzLnN0b3BTeXN0ZW0oKTtcclxuICAgIH1cclxufVxyXG4iXX0=
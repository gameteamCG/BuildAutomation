
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/traileffect/FollowTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7837eThnK5HlZyMRo7P8eEn', 'FollowTouch');
// Games/MainAssets/traileffect/FollowTouch.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXHRyYWlsZWZmZWN0XFxGb2xsb3dUb3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJEQztRQXRERyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUFtRHZDLENBQUM7SUFqREcsNkJBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakUsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxD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cywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFpbFRvdWNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IFwiSG93IGZhc3Qgbm9kZSBmb2xsb3dzIHRvdWNoICgxID0gaW5zdGFudClcIlxyXG4gICAgfSlcclxuICAgIGZvbGxvd1NwZWVkOiBudW1iZXIgPSAwLjM1O1xyXG5cclxuICAgIHByaXZhdGUgdGFyZ2V0UG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgcHJpdmF0ZSBmb2xsb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcclxuICAgICAgICBwYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCBwcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGlmIChwcykgcHMuc3RvcFN5c3RlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcclxuICAgICAgICBwYXJlbnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICBwYXJlbnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2luZykge1xyXG4gICAgICAgICAgICAvLyBTbW9vdGhseSBtb3ZlIHRvd2FyZHMgdGFyZ2V0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gY3VycmVudC5sZXJwKHRoaXMudGFyZ2V0UG9zLCB0aGlzLmZvbGxvd1NwZWVkKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgcHMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBpZiAocHMpIHBzLnJlc2V0U3lzdGVtKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLnRhcmdldFBvcyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy50YXJnZXRQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLmZvbGxvd2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoTG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLnRhcmdldFBvcyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLmZvbGxvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHBzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYgKHBzKSBwcy5zdG9wU3lzdGVtKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
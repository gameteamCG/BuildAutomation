
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Matching/traileffect/FollowTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7837eThnK5HlZyMRo7P8eEn', 'FollowTouch');
// resources/traileffect/FollowTouch.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFx0cmFpbGVmZmVjdFxcRm9sbG93VG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyREM7UUF0REcsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFFbkIsZUFBUyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBbUR2QyxDQUFDO0lBakRHLDZCQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQztRQUNqQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpFLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNy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cnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhaWxUb3VjaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBcIkhvdyBmYXN0IG5vZGUgZm9sbG93cyB0b3VjaCAoMSA9IGluc3RhbnQpXCJcclxuICAgIH0pXHJcbiAgICBmb2xsb3dTcGVlZDogbnVtYmVyID0gMC4zNTtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgZm9sbG93aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgcGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBpZiAocHMpIHBzLnN0b3BTeXN0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgcGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgcGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dpbmcpIHtcclxuICAgICAgICAgICAgLy8gU21vb3RobHkgbW92ZSB0b3dhcmRzIHRhcmdldCBwb3NpdGlvblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IGN1cnJlbnQubGVycCh0aGlzLnRhcmdldFBvcywgdGhpcy5mb2xsb3dTcGVlZCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYgKHBzKSBwcy5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaExvYyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMudGFyZ2V0UG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2xsb3dpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zdCB0b3VjaExvYyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5mb2xsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBwcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGlmIChwcykgcHMuc3RvcFN5c3RlbSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
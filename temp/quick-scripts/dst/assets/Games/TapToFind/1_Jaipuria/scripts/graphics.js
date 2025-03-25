
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/1_Jaipuria/scripts/graphics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a971ebhNVpMDaezT79cYiY1', 'graphics');
// Games/TapToFind/1_Jaipuria/scripts/graphics.ts

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
var roughArea_1 = require("./roughArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var board = this.node.parent.parent.getChildByName("board");
        board.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        board.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        board.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(0.1, 0);
        this.graphics.lineTo(-0.11, 0);
        this.graphics.stroke();
        this.touches.length = 0;
        //this.touches.push(event.touch.getLocation());
    };
    NewClass.prototype.onTouchStart = function (event) {
        var newGraphicsNode = cc.instantiate(this.node.parent.parent.getComponent(roughArea_1.default).graphicsPrefab);
        newGraphicsNode.parent = this.node.parent;
        this.graphics = newGraphicsNode.getComponent(cc.Graphics);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(0.1, 0);
        this.graphics.lineTo(-0.11, 0);
        this.graphics.stroke();
        this.touches.length = 0;
        this.touches.push(event.touch.getLocation());
    };
    NewClass.prototype.onTouchMove = function (event) {
        var touches = this.touches;
        touches.push(event.touch.getLocation());
        var MIN_POINT_DISTANCE = 2;
        this.graphics.clear();
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        var lastIndex = 0;
        for (var i = 1, l = touches.length; i < l; i++) {
            if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this.graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
            this.graphics.stroke();
            this.graphics.strokeColor = this.node.parent.parent.getComponent(roughArea_1.default).currentColor;
        }
    };
    NewClass.prototype.onTouchEnd = function (event) {
        //this.graphics.clear();
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvMV9KYWlwdXJpYS9zY3JpcHRzL2dyYXBoaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTNERyxhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRXhCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDOztRQXdEN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUF0REcsd0JBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxN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LElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzVGO0lBRUwsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osd0JBQXdCO0lBQzVCLENBQUM7SUExRGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RDVCO0lBQUQsZUFBQztDQTdERCxBQTZEQyxDQTdEcUMsRUFBRSxDQUFDLFNBQVMsR0E2RGpEO2tCQTdEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3VnaEFyZWEgZnJvbSBcIi4vcm91Z2hBcmVhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHRvdWNoZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG5cclxuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHZhciBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYm9hcmRcIik7XHJcbiAgICAgICAgYm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oMC4xLCAwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbygtMC4xMSwgMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAvL3RoaXMudG91Y2hlcy5wdXNoKGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCBuZXdHcmFwaGljc05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQocm91Z2hBcmVhKS5ncmFwaGljc1ByZWZhYik7XHJcbiAgICAgICAgbmV3R3JhcGhpY3NOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ld0dyYXBoaWNzTm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKDAuMSwgMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oLTAuMTEsIDApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hlcyA9IHRoaXMudG91Y2hlcztcclxuICAgICAgICB0b3VjaGVzLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IE1JTl9QT0lOVF9ESVNUQU5DRSA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHRvdWNoZXNbMF0ueCAtIHdvcmxkUG9zLngsIHRvdWNoZXNbMF0ueSAtIHdvcmxkUG9zLnkpO1xyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxLCBsID0gdG91Y2hlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRvdWNoZXNbaV0uc3ViKHRvdWNoZXNbbGFzdEluZGV4XSkubWFnKCkgPCBNSU5fUE9JTlRfRElTVEFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRvdWNoZXNbaV0ueCAtIHdvcmxkUG9zLngsIHRvdWNoZXNbaV0ueSAtIHdvcmxkUG9zLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KHJvdWdoQXJlYSkuY3VycmVudENvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgICAgIC8vdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn0iXX0=
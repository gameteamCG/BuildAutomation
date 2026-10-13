
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/1_Jaipuria (1)/1_Jaipuria/scripts/graphics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a971ebhNVpMDaezT79cYiY1', 'graphics');
// resources/1_Jaipuria (1)/1_Jaipuria/scripts/graphics.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFwxX0phaXB1cmlhICgxKVxcMV9KYWlwdXJpYVxcc2NyaXB0c1xcZ3JhcGhpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkRDO1FBM0RHLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsY0FBUSxHQUFnQixJQUFJLENBQUM7O1FBd0Q3QixpQkFBaUI7SUFDckIsQ0FBQztJQXRERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsK0NBQStDO0lBQ25ELENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsS0FBSztRQUNkLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckcsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFeEMsSUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsa0JBQWtCLEVBQUU7Z0JBQy9ELFNBQVM7YUFDWjtZQUNELFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDNUY7SUFFTCxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLEtBQUs7UUFDWix3QkFBd0I7SUFDNUIsQ0FBQztJQTFEZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZENUI7SUFBRCxlQUFDO0NBN0RELEFBNkRDLENBN0RxQyxFQUFFLENBQUMsU0FBUyxHQTZEakQ7a0JBN0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdWdoQXJlYSBmcm9tIFwiLi9yb3VnaEFyZWFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgdG91Y2hlczogY2MuVmVjMltdID0gW107XHJcblxyXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIGJvYXJkID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib2FyZFwiKTtcclxuICAgICAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGJvYXJkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIGJvYXJkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCAwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbygwLjEsIDApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKC0wLjExLCAwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMudG91Y2hlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIC8vdGhpcy50b3VjaGVzLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5ld0dyYXBoaWNzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChyb3VnaEFyZWEpLmdyYXBoaWNzUHJlZmFiKTtcclxuICAgICAgICBuZXdHcmFwaGljc05vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3R3JhcGhpY3NOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oMC4xLCAwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbygtMC4xMSwgMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnRvdWNoZXMucHVzaChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaGVzID0gdGhpcy50b3VjaGVzO1xyXG4gICAgICAgIHRvdWNoZXMucHVzaChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICAgICAgY29uc3QgTUlOX1BPSU5UX0RJU1RBTkNFID0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoKSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odG91Y2hlc1swXS54IC0gd29ybGRQb3MueCwgdG91Y2hlc1swXS55IC0gd29ybGRQb3MueSk7XHJcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDEsIGwgPSB0b3VjaGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodG91Y2hlc1tpXS5zdWIodG91Y2hlc1tsYXN0SW5kZXhdKS5tYWcoKSA8IE1JTl9QT0lOVF9ESVNUQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gaTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8odG91Y2hlc1tpXS54IC0gd29ybGRQb3MueCwgdG91Y2hlc1tpXS55IC0gd29ybGRQb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQocm91Z2hBcmVhKS5jdXJyZW50Q29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufSJdfQ==
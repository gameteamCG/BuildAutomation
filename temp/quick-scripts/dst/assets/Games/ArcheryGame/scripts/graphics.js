
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/graphics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a971ebhNVpMDaezT79cYiY1', 'graphics');
// Games/ArcheryGame/scripts/graphics.ts

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
var Graphics = /** @class */ (function (_super) {
    __extends(Graphics, _super);
    function Graphics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        _this.maxPoints = 1000;
        _this.isDrawing = false; // Track if a line is being drawn
        return _this;
    }
    Graphics.prototype.start = function () {
        var board = this.node.parent.parent.getChildByName("board");
        // Add touch event listeners
        board.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        board.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        board.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // Get the single Graphics component for the entire drawing
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.clear();
        this.touches.length = 0;
    };
    Graphics.prototype.onTouchStart = function (event) {
        // Start a new path without clearing the previous drawings
        var touchLocation = event.touch.getLocation();
        this.touches.length = 0;
        this.touches.push(touchLocation);
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touchLocation.x - worldPos.x, touchLocation.y - worldPos.y);
        this.isDrawing = true; // Start drawing
    };
    Graphics.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return; // Only draw if the touch has started
        var touchLocation = event.touch.getLocation();
        var touches = this.touches;
        touches.push(touchLocation);
        if (touches.length > this.maxPoints) {
            touches.shift();
        }
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        // Continue from the last point and draw to the new point
        this.graphics.lineTo(touchLocation.x - worldPos.x, touchLocation.y - worldPos.y);
        this.graphics.stroke();
        // Set the stroke color
        this.graphics.strokeColor =
            this.node.parent.parent.getComponent(roughArea_1.default).currentColor;
    };
    Graphics.prototype.onTouchEnd = function (event) {
        // Finish drawing when touch ends
        this.isDrawing = false;
    };
    Graphics = __decorate([
        ccclass
    ], Graphics);
    return Graphics;
}(cc.Component));
exports.default = Graphics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxncmFwaGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnRUM7UUEvREMsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxpQ0FBaUM7O0lBNEQvRCxDQUFDO0lBMURDLHdCQUFLLEdBQUw7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVELDRCQUE0QjtRQUM1QixLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsMERBQTBEO1FBQzFELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDNUIsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7SUFDekMsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLHFDQUFxQztRQUVsRSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUM1QixhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXZCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNkLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBL0RrQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0U1QjtJQUFELGVBQUM7Q0FoRUQsQUFnRUMsQ0FoRXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0VqRDtrQkFoRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91Z2hBcmVhIGZyb20gXCIuL3JvdWdoQXJlYVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICB0b3VjaGVzOiBjYy5WZWMyW10gPSBbXTtcclxuICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gIG1heFBvaW50czogbnVtYmVyID0gMTAwMDtcclxuICBpc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gVHJhY2sgaWYgYSBsaW5lIGlzIGJlaW5nIGRyYXduXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIGJvYXJkID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib2FyZFwiKTtcclxuXHJcbiAgICAvLyBBZGQgdG91Y2ggZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgYm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzaW5nbGUgR3JhcGhpY3MgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIGRyYXdpbmdcclxuICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgLy8gU3RhcnQgYSBuZXcgcGF0aCB3aXRob3V0IGNsZWFyaW5nIHRoZSBwcmV2aW91cyBkcmF3aW5nc1xyXG4gICAgbGV0IHRvdWNoTG9jYXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnRvdWNoZXMucHVzaCh0b3VjaExvY2F0aW9uKTtcclxuXHJcbiAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpO1xyXG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oXHJcbiAgICAgIHRvdWNoTG9jYXRpb24ueCAtIHdvcmxkUG9zLngsXHJcbiAgICAgIHRvdWNoTG9jYXRpb24ueSAtIHdvcmxkUG9zLnlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlOyAvLyBTdGFydCBkcmF3aW5nXHJcbiAgfVxyXG5cclxuICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuOyAvLyBPbmx5IGRyYXcgaWYgdGhlIHRvdWNoIGhhcyBzdGFydGVkXHJcblxyXG4gICAgbGV0IHRvdWNoTG9jYXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHRvdWNoZXMgPSB0aGlzLnRvdWNoZXM7XHJcbiAgICB0b3VjaGVzLnB1c2godG91Y2hMb2NhdGlvbik7XHJcblxyXG4gICAgaWYgKHRvdWNoZXMubGVuZ3RoID4gdGhpcy5tYXhQb2ludHMpIHtcclxuICAgICAgdG91Y2hlcy5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoKSk7XHJcblxyXG4gICAgLy8gQ29udGludWUgZnJvbSB0aGUgbGFzdCBwb2ludCBhbmQgZHJhdyB0byB0aGUgbmV3IHBvaW50XHJcbiAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhcclxuICAgICAgdG91Y2hMb2NhdGlvbi54IC0gd29ybGRQb3MueCxcclxuICAgICAgdG91Y2hMb2NhdGlvbi55IC0gd29ybGRQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzdHJva2UgY29sb3JcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPVxyXG4gICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQocm91Z2hBcmVhKS5jdXJyZW50Q29sb3I7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAvLyBGaW5pc2ggZHJhd2luZyB3aGVuIHRvdWNoIGVuZHNcclxuICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
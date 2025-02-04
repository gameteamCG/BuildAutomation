
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS9zY3JpcHRzL2dyYXBoaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdFQztRQS9EQyxhQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFZLEtBQUssQ0FBQyxDQUFDLGlDQUFpQzs7SUE0RC9ELENBQUM7SUExREMsd0JBQUssR0FBTDtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUQsNEJBQTRCO1FBQzVCLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsS0FBSztRQUNoQiwwREFBMEQ7UUFDMUQsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUM1QixhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLGdCQUFnQjtJQUN6QyxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMscUNBQXFDO1FBRWxFLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVCLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEQseURBQXlEO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNsQixhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQzVCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdkIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDakUsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUEvRGtCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnRTVCO0lBQUQsZUFBQztDQWhFRCxBQWdFQyxDQWhFcUMsRUFBRSxDQUFDLFNBQVMsR0FnRWpEO2tCQWhFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3VnaEFyZWEgZnJvbSBcIi4vcm91Z2hBcmVhXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHRvdWNoZXM6IGNjLlZlYzJbXSA9IFtdO1xuICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuICBtYXhQb2ludHM6IG51bWJlciA9IDEwMDA7XG4gIGlzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlOyAvLyBUcmFjayBpZiBhIGxpbmUgaXMgYmVpbmcgZHJhd25cblxuICBzdGFydCgpIHtcbiAgICB2YXIgYm9hcmQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJvYXJkXCIpO1xuXG4gICAgLy8gQWRkIHRvdWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGJvYXJkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgYm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgYm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuXG4gICAgLy8gR2V0IHRoZSBzaW5nbGUgR3JhcGhpY3MgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIGRyYXdpbmdcbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgIC8vIFN0YXJ0IGEgbmV3IHBhdGggd2l0aG91dCBjbGVhcmluZyB0aGUgcHJldmlvdXMgZHJhd2luZ3NcbiAgICBsZXQgdG91Y2hMb2NhdGlvbiA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgdGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy50b3VjaGVzLnB1c2godG91Y2hMb2NhdGlvbik7XG5cbiAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpO1xuICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKFxuICAgICAgdG91Y2hMb2NhdGlvbi54IC0gd29ybGRQb3MueCxcbiAgICAgIHRvdWNoTG9jYXRpb24ueSAtIHdvcmxkUG9zLnlcbiAgICApO1xuXG4gICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlOyAvLyBTdGFydCBkcmF3aW5nXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0RyYXdpbmcpIHJldHVybjsgLy8gT25seSBkcmF3IGlmIHRoZSB0b3VjaCBoYXMgc3RhcnRlZFxuXG4gICAgbGV0IHRvdWNoTG9jYXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgIGxldCB0b3VjaGVzID0gdGhpcy50b3VjaGVzO1xuICAgIHRvdWNoZXMucHVzaCh0b3VjaExvY2F0aW9uKTtcblxuICAgIGlmICh0b3VjaGVzLmxlbmd0aCA+IHRoaXMubWF4UG9pbnRzKSB7XG4gICAgICB0b3VjaGVzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigpKTtcblxuICAgIC8vIENvbnRpbnVlIGZyb20gdGhlIGxhc3QgcG9pbnQgYW5kIGRyYXcgdG8gdGhlIG5ldyBwb2ludFxuICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKFxuICAgICAgdG91Y2hMb2NhdGlvbi54IC0gd29ybGRQb3MueCxcbiAgICAgIHRvdWNoTG9jYXRpb24ueSAtIHdvcmxkUG9zLnlcbiAgICApO1xuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XG5cbiAgICAvLyBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPVxuICAgICAgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KHJvdWdoQXJlYSkuY3VycmVudENvbG9yO1xuICB9XG5cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIC8vIEZpbmlzaCBkcmF3aW5nIHdoZW4gdG91Y2ggZW5kc1xuICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
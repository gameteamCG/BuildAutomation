"use strict";
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
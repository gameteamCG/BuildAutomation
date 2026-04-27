
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Draw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77541gnSxBIPqgHQkYr5Kbo', 'Draw');
// Game/Painting_template/Script/Draw.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Draw = /** @class */ (function (_super) {
    __extends(Draw, _super);
    function Draw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        _this.usedBtn = 1;
        return _this;
    }
    Draw.prototype.start = function () {
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Draw.prototype.setupDrawingNode = function () {
        // let drawingNode = cc.instantiate(this.drawingPrefab);
        // drawingNode.setPosition(new cc.Vec2(0, 0));
        // this.points[this.currentPos].mask.addChild(drawingNode);
        var graphicsNode = this.node.getChildByName("grap").getComponent(cc.Graphics);
        graphicsNode.moveTo(0, 0);
        graphicsNode.lineTo(0.1, 0);
        graphicsNode.lineTo(-0.11, 0);
        graphicsNode.stroke();
        return graphicsNode;
    };
    Draw.prototype.onTouchStart = function (event) {
        this.graphics = this.setupDrawingNode();
        if (this.usedBtn == 1) {
            this.touches.length = 0;
            this.touches.push(event.touch.getLocation());
        }
        else {
            this.graphics.setMaterial(0, this.graphics.getMaterial(1));
            // this.touches1.length = 0;
            // this.touches1.push(event.touch.getLocation());
        }
    };
    Draw.prototype.onTouchMove = function (event) {
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
        }
        this.graphics.stroke();
    };
    Draw.prototype.onTouchEnd = function (event) {
    };
    Draw.prototype.onBtnClicked = function () {
        this.usedBtn *= -1;
    };
    Draw = __decorate([
        ccclass
    ], Draw);
    return Draw;
}(cc.Component));
exports.default = Draw;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcRHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW9FQztRQWxFRyxhQUFPLEdBQWMsRUFBRSxDQUFBO1FBQ3ZCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBK0RoQixDQUFDO0lBN0RHLG9CQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQkFBZ0IsR0FBaEI7UUFFSSx3REFBd0Q7UUFDeEQsOENBQThDO1FBQzlDLDJEQUEyRDtRQUUzRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FB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IjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgdG91Y2hlczogY2MuVmVjMltdID0gW11cclxuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgdXNlZEJ0biA9IDE7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRHJhd2luZ05vZGUoKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBkcmF3aW5nTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZHJhd2luZ1ByZWZhYik7XHJcbiAgICAgICAgLy8gZHJhd2luZ05vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgMCkpO1xyXG4gICAgICAgIC8vIHRoaXMucG9pbnRzW3RoaXMuY3VycmVudFBvc10ubWFzay5hZGRDaGlsZChkcmF3aW5nTm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBncmFwaGljc05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJncmFwXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLm1vdmVUbygwLCAwKTtcclxuICAgICAgICBncmFwaGljc05vZGUubGluZVRvKDAuMSwgMCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLmxpbmVUbygtMC4xMSwgMCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JhcGhpY3NOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLnNldHVwRHJhd2luZ05vZGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlZEJ0biA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoZXMucHVzaChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmFwaGljcy5nZXRNYXRlcmlhbCgxKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG91Y2hlczEubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3VjaGVzMS5wdXNoKGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaGVzID0gdGhpcy50b3VjaGVzO1xyXG4gICAgICAgIHRvdWNoZXMucHVzaChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICAgICAgY29uc3QgTUlOX1BPSU5UX0RJU1RBTkNFID0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoKSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odG91Y2hlc1swXS54IC0gd29ybGRQb3MueCwgdG91Y2hlc1swXS55IC0gd29ybGRQb3MueSk7XHJcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDEsIGwgPSB0b3VjaGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodG91Y2hlc1tpXS5zdWIodG91Y2hlc1tsYXN0SW5kZXhdKS5tYWcoKSA8IE1JTl9QT0lOVF9ESVNUQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gaTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8odG91Y2hlc1tpXS54IC0gd29ybGRQb3MueCwgdG91Y2hlc1tpXS55IC0gd29ybGRQb3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgfVxyXG4gICAgb25CdG5DbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMudXNlZEJ0biAqPSAtMTtcclxuICAgIH1cclxufVxyXG4iXX0=
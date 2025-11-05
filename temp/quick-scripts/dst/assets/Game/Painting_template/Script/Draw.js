
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
        console.log("@@1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcRHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXFFQztRQW5FRyxhQUFPLEdBQWMsRUFBRSxDQUFBO1FBQ3ZCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBZ0VoQixDQUFDO0lBOURHLG9CQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQkFBZ0IsR0FBaEI7UUFFSSx3REFBd0Q7UUFDeEQsOENBQThDO1FBQzlDLDJEQUEyRDtRQUUzRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FB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RUFBRSxDQUFDLFNBQVMsR0FxRTdDO2tCQXJFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICB0b3VjaGVzOiBjYy5WZWMyW10gPSBbXVxyXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICB1c2VkQnRuID0gMTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBEcmF3aW5nTm9kZSgpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IGRyYXdpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kcmF3aW5nUHJlZmFiKTtcclxuICAgICAgICAvLyBkcmF3aW5nTm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLCAwKSk7XHJcbiAgICAgICAgLy8gdGhpcy5wb2ludHNbdGhpcy5jdXJyZW50UG9zXS5tYXNrLmFkZENoaWxkKGRyYXdpbmdOb2RlKTtcclxuXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdyYXBcIikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljc05vZGUubW92ZVRvKDAsIDApO1xyXG4gICAgICAgIGdyYXBoaWNzTm9kZS5saW5lVG8oMC4xLCAwKTtcclxuICAgICAgICBncmFwaGljc05vZGUubGluZVRvKC0wLjExLCAwKTtcclxuICAgICAgICBncmFwaGljc05vZGUuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBncmFwaGljc05vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuc2V0dXBEcmF3aW5nTm9kZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAxXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VkQnRuID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hlcy5wdXNoKGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyYXBoaWNzLmdldE1hdGVyaWFsKDEpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3VjaGVzMS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvdWNoZXMxLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoZXMgPSB0aGlzLnRvdWNoZXM7XHJcbiAgICAgICAgdG91Y2hlcy5wdXNoKGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBNSU5fUE9JTlRfRElTVEFOQ0UgPSAyO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigpKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0b3VjaGVzWzBdLnggLSB3b3JsZFBvcy54LCB0b3VjaGVzWzBdLnkgLSB3b3JsZFBvcy55KTtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMSwgbCA9IHRvdWNoZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0b3VjaGVzW2ldLnN1Yih0b3VjaGVzW2xhc3RJbmRleF0pLm1hZygpIDwgTUlOX1BPSU5UX0RJU1RBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0b3VjaGVzW2ldLnggLSB3b3JsZFBvcy54LCB0b3VjaGVzW2ldLnkgLSB3b3JsZFBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VkQnRuICo9IC0xO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
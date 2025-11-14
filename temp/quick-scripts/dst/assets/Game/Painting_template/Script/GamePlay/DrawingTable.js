
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/DrawingTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84dcApqB9OvZnd34MZQ78e', 'DrawingTable');
// Game/Painting_template/Script/GamePlay/DrawingTable.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var Global_1 = require("../Common/Global");
var PersistentScroll_1 = require("./Persistent/PersistentScroll");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawingSplitData = /** @class */ (function () {
    function DrawingSplitData() {
        this.DrawingSplitData = null;
    }
    __decorate([
        property({ type: cc.Node, visible: true, tooltip: "DrawingSplitData" })
    ], DrawingSplitData.prototype, "DrawingSplitData", void 0);
    DrawingSplitData = __decorate([
        ccclass("DrawingSplitData")
    ], DrawingSplitData);
    return DrawingSplitData;
}());
var DrawingTable = /** @class */ (function (_super) {
    __extends(DrawingTable, _super);
    function DrawingTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DrawingSplitDataArray = [];
        _this.currentChild = null;
        _this.currentMask = null;
        _this.parentRef = null;
        _this.parentNode = null;
        _this.persistentScrollNode = null;
        _this.persistentScrollScript = null;
        _this.prevTouch = new cc.Vec2;
        _this.currentstensil = [];
        // draggedstensil = [];
        // pointposition = [];
        _this.overAllData = [];
        _this.currentData = {
            currentTool: 0,
            drawArray: [],
            currentChildIndex: 0,
            currentPatternFrameIndex: 0,
            currentTileIndex: 0
        };
        _this.drawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DrawingTable.prototype.onLoad = function () {
    };
    DrawingTable.prototype.start = function () {
        this.persistentScrollScript = Global_1.default.instance.PersistentScrollInstance;
        this.persistentScrollNode = Global_1.default.instance.PersistentScrollInstance.node;
        this.persistentScrollScript.initialiseDrawing(this);
    };
    DrawingTable.prototype.initTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    };
    // update (dt) {}
    DrawingTable.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
        for (var i = 0; i < this.DrawingSplitDataArray.length; i++) {
            this.drawingDataArray.push([]);
        }
    };
    DrawingTable.prototype._onTouchBegin = function (event) {
        this.node.getChildByName("moveingParticle").active = true;
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        for (var i = 0; i < this.DrawingSplitDataArray.length; i++) {
            var element = this.DrawingSplitDataArray[i].DrawingSplitData;
            var collider = this.getPolygonData(element);
            if (cc.Intersection.pointInPolygon(point, collider.world.points)) {
                this.prevTouch = point;
                this.currentData = {
                    currentTool: 0,
                    drawArray: [],
                    currentChildIndex: 0,
                    currentPatternFrameIndex: 0,
                    currentTileIndex: 0
                };
                var id = cc.audioEngine.playEffect(PersistentScroll_1.default.Instance.SFX[PersistentScroll_1.default.Instance.toolNumber], true);
                cc.audioEngine.setVolume(id, 0.6);
                // this.draggedstensil = [];
                // this.pointposition = []
                this.currentData.currentChildIndex = i;
                this.currentData.currentTool = this.persistentScrollScript.currentPensilSelection;
                this.currentMask = null;
                this.currentChild = element;
                this.checkMasking();
                this._addCircle(point);
                return;
            }
        }
    };
    DrawingTable.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    DrawingTable.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        PersistentScroll_1.default.Instance.hand.opacity = 255;
        PersistentScroll_1.default.Instance.tickBtn.getComponent(cc.Button).interactable = true;
        cc.audioEngine.stopAllEffects();
        this._addCircle(point);
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN ||
            this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL)
            cc.audioEngine.playEffect(PersistentScroll_1.default.Instance.glowAud, false);
        var myData = {
            currentTool: this.currentData.currentTool,
            currentPatternFrameIndex: this.currentData.currentPatternFrameIndex,
            currentTileIndex: this.currentData.currentTileIndex,
            child: this.currentMask,
        };
        this.drawingDataArray[this.currentData.currentChildIndex].push(myData);
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            return;
        var point1 = event.touch.getLocation();
        point1 = this.persistentScrollNode.convertToNodeSpaceAR(point1);
        this.persistentScrollScript.particleEffect.node.setPosition(point1);
        this.persistentScrollScript.particleEffect.resetSystem();
    };
    DrawingTable.prototype._addCircle = function (point) {
        var pos1 = new cc.Vec2(this.prevTouch.x - point.x, this.prevTouch.y - point.y);
        var forwardVector = pos1.normalize();
        var splitVal = 5;
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL)
            splitVal = 2;
        var distance = splitVal;
        var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, point.x, point.y);
        var val = Distance / splitVal;
        // this.pointposition.push(new cc.Vec2(this.prevTouch.x,this.prevTouch.y));
        for (var i = 0; i <= val; i++) {
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
                var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                stencil.fill();
                // this.draggedstensil.push(stencil);
                if (this.persistentScrollScript.isDualSymetryClicked) {
                    var stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);
                }
                else if (this.persistentScrollScript.isQuadSymetryClicked) {
                    var stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);
                    var stencil2 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil2.circle(this.prevTouch.x * -1, this.prevTouch.y * -1, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil2.fill();
                    // this.draggedstensil.push(stencil2);
                    var stencil3 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil3.circle(this.prevTouch.x, this.prevTouch.y * -1, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil3.fill();
                    // this.draggedstensil.push(stencil3);
                }
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2) {
                var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.rect(this.prevTouch.x - (Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2), this.prevTouch.y - (Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]), Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] * 2);
                stencil.fill();
                // this.draggedstensil.push(stencil);
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY) {
                for (var i_1 = 0; i_1 < 5; i_1++) {
                    var pt = Constant_1.Constant.circlerandPoint(this.prevTouch.x, this.prevTouch.y, 20);
                    var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil.circle(pt.x, pt.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil.fill();
                    // this.draggedstensil.push(stencil);
                }
            }
            this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1, this.prevTouch.y + (forwardVector.y * distance) * -1);
        }
        this.prevTouch = point;
    };
    DrawingTable.prototype.checkMasking = function () {
        var currentTileIndex = 0;
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            currentTileIndex = 0;
        else
            currentTileIndex = this.persistentScrollScript.currentTileIndex;
        this.currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[currentTileIndex].DrawingmaskPrefab);
        this.currentChild.addChild(this.currentMask);
        var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(this.currentMask);
        DrawingmaskClassRef.initialiseRef(this);
        DrawingmaskClassRef.initialisePatternData(this.persistentScrollScript);
        this.currentData.currentPatternFrameIndex = this.persistentScrollScript.currentPatternFrameIndex;
        this.currentData.currentTileIndex = currentTileIndex;
        var data = {
            child: this.currentMask,
            parent: this.currentChild
        };
        this.currentstensil.push(data);
    };
    DrawingTable.prototype.getPolygonData = function (element) {
        return element.getComponent(cc.PolygonCollider);
    };
    DrawingTable.prototype.drawData = function (dataArray) {
        if (dataArray == null)
            return;
        this.drawingDataArray = dataArray;
        //new
        for (var i = 0; i < dataArray.length; i++) {
            var element = dataArray[i];
            if (element.length > 0) {
                var currentChild = this.DrawingSplitDataArray[i].DrawingSplitData;
                var currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].DrawingmaskPrefab);
                currentChild.addChild(currentMask);
                var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(currentMask);
                DrawingmaskClassRef.initialiseRef(this);
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.COLOR && element[0].currentTool != Constant_1.Constant.ToolsTag.ERASER)
                    currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].ColorFrameListArray[element[0].currentPatternFrameIndex].color;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].PatternFrameListArray[element[0].currentPatternFrameIndex].PatternFrame;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].SparkleFrameListArray[element[0].currentPatternFrameIndex].SparkleFrame;
                currentMask.getComponent(cc.Mask).inverted = true;
            }
        }
        return;
        //new
        this.overAllData = dataArray;
        for (var j = 0; j < dataArray.length; j++) {
            var element = dataArray[j];
            var currentChild = this.DrawingSplitDataArray[element.currentChildIndex].DrawingSplitData;
            var currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].DrawingmaskPrefab);
            currentChild.addChild(currentMask);
            var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(currentMask);
            DrawingmaskClassRef.initialiseRef(this);
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR && element.currentTool != Constant_1.Constant.ToolsTag.ERASER)
                currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].ColorFrameListArray[element.currentPatternFrameIndex].color;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].PatternFrameListArray[element.currentPatternFrameIndex].PatternFrame;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].SparkleFrameListArray[element.currentPatternFrameIndex].SparkleFrame;
            if (element.currentTileIndex == Constant_1.Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;
            if (element.currentTool == Constant_1.Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;
            for (var i = 0; i < element.drawArray.length; i++) {
                for (var k = 0; k < element.drawArray[i].length; k++) {
                    if (k == 0) {
                        this.prevTouch = element.drawArray[i][k];
                    }
                    var pos1 = new cc.Vec2(this.prevTouch.x - element.drawArray[i][k].x, this.prevTouch.y - element.drawArray[i][k].y);
                    var forwardVector = pos1.normalize();
                    var splitVal = 5;
                    if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL)
                        splitVal = 2;
                    var distance = splitVal;
                    var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, element.drawArray[i][k].x, element.drawArray[i][k].y);
                    var val = Distance / splitVal;
                    for (var i_2 = 0; i_2 <= val; i_2++) {
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH
                            || element.currentTool == Constant_1.Constant.ToolsTag.PENCIL
                            || element.currentTool == Constant_1.Constant.ToolsTag.SPARKEL
                            || element.currentTool == Constant_1.Constant.ToolsTag.PATTERN
                            || element.currentTool == Constant_1.Constant.ToolsTag.ERASER) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH2) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.rect(this.prevTouch.x - (Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2), this.prevTouch.y - (Constant_1.Constant.CurrentToolsTagSize[element.currentTool]), Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2, Constant_1.Constant.CurrentToolsTagSize[element.currentTool] * 2);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.SPRAY) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1, this.prevTouch.y + (forwardVector.y * distance) * -1);
                    }
                    this.prevTouch = element.drawArray[i][k];
                }
            }
        }
    };
    __decorate([
        property(DrawingSplitData)
    ], DrawingTable.prototype, "DrawingSplitDataArray", void 0);
    DrawingTable = __decorate([
        ccclass
    ], DrawingTable);
    return DrawingTable;
}(cc.Component));
exports.default = DrawingTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFDNUMsK0NBQThDO0FBQzlDLDJDQUFzQztBQUV0QyxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBREc7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzhEQUN2QztJQUYvQixnQkFBZ0I7UUFEckIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO09BQ3RCLGdCQUFnQixDQUdyQjtJQUFELHVCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSUQ7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFvWEM7UUFqWEcsMkJBQXFCLEdBQXVCLEVBQUUsQ0FBQztRQUUvQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztRQUd4QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFB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QUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDMUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxtQkFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUN0RyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xCO3dCQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdEO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUM7YUFDSjtTQUdKO0lBQ0wsQ0FBQztJQS9XRDtRQURDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQzsrREFDb0I7SUFIOUIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW9YaEM7SUFBRCxtQkFBQztDQXBYRCxBQW9YQyxDQXBYeUMsRUFBRSxDQUFDLFNBQVMsR0FvWHJEO2tCQXBYb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuL1BlcnNpc3RlbnQvUGVyc2lzdGVudFNjcm9sbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiRHJhd2luZ1NwbGl0RGF0YVwiKVxyXG5jbGFzcyBEcmF3aW5nU3BsaXREYXRhIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiRHJhd2luZ1NwbGl0RGF0YVwiIH0pXHJcbiAgICBEcmF3aW5nU3BsaXREYXRhOiBjYy5Ob2RlID0gbnVsbDtcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmdUYWJsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KERyYXdpbmdTcGxpdERhdGEpXHJcbiAgICBEcmF3aW5nU3BsaXREYXRhQXJyYXk6IERyYXdpbmdTcGxpdERhdGFbXSA9IFtdO1xyXG5cclxuICAgIGN1cnJlbnRDaGlsZCA9IG51bGw7XHJcbiAgICBjdXJyZW50TWFzayA9IG51bGw7XHJcblxyXG4gICAgcGFyZW50UmVmID0gbnVsbDtcclxuICAgIHBhcmVudE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHBlcnNpc3RlbnRTY3JvbGxOb2RlID0gbnVsbDtcclxuICAgIHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQgPSBudWxsO1xyXG5cclxuICAgIHByZXZUb3VjaCA9IG5ldyBjYy5WZWMyO1xyXG5cclxuXHJcbiAgICBjdXJyZW50c3RlbnNpbCA9IFtdO1xyXG4gICAgLy8gZHJhZ2dlZHN0ZW5zaWwgPSBbXTtcclxuICAgIC8vIHBvaW50cG9zaXRpb24gPSBbXTtcclxuXHJcbiAgICBvdmVyQWxsRGF0YSA9IFtdO1xyXG4gICAgY3VycmVudERhdGEgPSB7XHJcbiAgICAgICAgY3VycmVudFRvb2w6IDAsXHJcbiAgICAgICAgZHJhd0FycmF5OiBbXSxcclxuICAgICAgICBjdXJyZW50Q2hpbGRJbmRleDogMCxcclxuICAgICAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXg6IDAsXHJcbiAgICAgICAgY3VycmVudFRpbGVJbmRleDogMFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZHJhd2luZ0RhdGFBcnJheSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5pbml0aWFsaXNlRHJhd2luZyh0aGlzKTtcclxuICAgIH1cclxuICAgIGluaXRUb3VjaCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hCZWdpbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBpbml0aWFsaXNlUmVmKFBhcmVudFJlZikge1xyXG4gICAgICAgIHRoaXMucGFyZW50UmVmID0gUGFyZW50UmVmO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHRoaXMucGFyZW50UmVmLm5vZGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5EcmF3aW5nU3BsaXREYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3aW5nRGF0YUFycmF5LnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaEJlZ2luKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibW92ZWluZ1BhcnRpY2xlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5EcmF3aW5nU3BsaXREYXRhQXJyYXlbaV0uRHJhd2luZ1NwbGl0RGF0YTtcclxuICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gdGhpcy5nZXRQb2x5Z29uRGF0YShlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24ocG9pbnQsIGNvbGxpZGVyLndvcmxkLnBvaW50cykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gcG9pbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9vbDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkcmF3QXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZUluZGV4OiAwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLlNGWFtQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLnRvb2xOdW1iZXJdLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgMC42KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9pbnRwb3NpdGlvbiA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50Q2hpbGRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUb29sID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDaGlsZCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTWFza2luZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaE1vdmVkKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgICAgIFBlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UuaGFuZC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIFBlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UudGlja0J0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcclxuICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTiB8fFxyXG4gICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFBlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UuZ2xvd0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBteURhdGEgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUb29sOiB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUb29sLFxyXG4gICAgICAgICAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXg6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4LFxyXG4gICAgICAgICAgICBjdXJyZW50VGlsZUluZGV4OiB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUaWxlSW5kZXgsXHJcbiAgICAgICAgICAgIGNoaWxkOiB0aGlzLmN1cnJlbnRNYXNrLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nRGF0YUFycmF5W3RoaXMuY3VycmVudERhdGEuY3VycmVudENoaWxkSW5kZXhdLnB1c2gobXlEYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHBvaW50MSA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQxID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludDEpO1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5wYXJ0aWNsZUVmZmVjdC5ub2RlLnNldFBvc2l0aW9uKHBvaW50MSk7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LnBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBfYWRkQ2lyY2xlKHBvaW50KSB7XHJcblxyXG4gICAgICAgIHZhciBwb3MxID0gbmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCAtIHBvaW50LngsIHRoaXMucHJldlRvdWNoLnkgLSBwb2ludC55KTtcclxuICAgICAgICBsZXQgZm9yd2FyZFZlY3RvciA9IHBvczEubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGxldCBzcGxpdFZhbCA9IDU7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTClcclxuICAgICAgICAgICAgc3BsaXRWYWwgPSAyO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHNwbGl0VmFsO1xyXG5cclxuICAgICAgICBsZXQgRGlzdGFuY2UgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RGlzdGFuY2UodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgcG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgbGV0IHZhbCA9IERpc3RhbmNlIC8gc3BsaXRWYWw7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnBvaW50cG9zaXRpb24ucHVzaChuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54LHRoaXMucHJldlRvdWNoLnkpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdmFsOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSFxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgc3RlbmNpbC5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSxcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmlzRHVhbFN5bWV0cnlDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMS5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5pc1F1YWRTeW1ldHJ5Q2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsMSA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMS5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCAqIC0xLCB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDEuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsMiA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMi5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCAqIC0xLCB0aGlzLnByZXZUb3VjaC55ICogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMi5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwzID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwzLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55ICogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMy5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwucmVjdCh0aGlzLnByZXZUb3VjaC54IC0gKENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dICogMik7XHJcbiAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHB0ID0gQ29uc3RhbnQuY2lyY2xlcmFuZFBvaW50KHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZShwdC54LCBwdC55LCBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaCA9IG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLnggKyAoZm9yd2FyZFZlY3Rvci54ICogZGlzdGFuY2UpICogLTEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55ICsgKGZvcndhcmRWZWN0b3IueSAqIGRpc3RhbmNlKSAqIC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja01hc2tpbmcoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUaWxlSW5kZXggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXggPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmRleCA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50VGlsZUluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbY3VycmVudFRpbGVJbmRleF0uRHJhd2luZ21hc2tQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENoaWxkLmFkZENoaWxkKHRoaXMuY3VycmVudE1hc2spO1xyXG5cclxuICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKHRoaXMuY3VycmVudE1hc2spO1xyXG4gICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuICAgICAgICBEcmF3aW5nbWFza0NsYXNzUmVmLmluaXRpYWxpc2VQYXR0ZXJuRGF0YSh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50VGlsZUluZGV4ID0gY3VycmVudFRpbGVJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkOiB0aGlzLmN1cnJlbnRNYXNrLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY3VycmVudENoaWxkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudHN0ZW5zaWwucHVzaChkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UG9seWdvbkRhdGEoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEYXRhKGRhdGFBcnJheSkge1xyXG4gICAgICAgIGlmIChkYXRhQXJyYXkgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdpbmdEYXRhQXJyYXkgPSBkYXRhQXJyYXk7XHJcblxyXG4gICAgICAgIC8vbmV3XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFBcnJheVtpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gdGhpcy5EcmF3aW5nU3BsaXREYXRhQXJyYXlbaV0uRHJhd2luZ1NwbGl0RGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1hc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhdLkRyYXdpbmdtYXNrUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5hZGRDaGlsZChjdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IERyYXdpbmdtYXNrQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ21hc2tDbGFzc1JlZihjdXJyZW50TWFzayk7XHJcbiAgICAgICAgICAgICAgICBEcmF3aW5nbWFza0NsYXNzUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUiAmJiBlbGVtZW50WzBdLmN1cnJlbnRUb29sICE9IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4XS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXlbZWxlbWVudFswXS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXhdLlBhdHRlcm5GcmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhdLlNwYXJrbGVGcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vbmV3XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gZGF0YUFycmF5O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUFycmF5W2pdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gdGhpcy5EcmF3aW5nU3BsaXREYXRhQXJyYXlbZWxlbWVudC5jdXJyZW50Q2hpbGRJbmRleF0uRHJhd2luZ1NwbGl0RGF0YTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uRHJhd2luZ21hc2tQcmVmYWIpO1xyXG4gICAgICAgICAgICBjdXJyZW50Q2hpbGQuYWRkQ2hpbGQoY3VycmVudE1hc2spO1xyXG5cclxuICAgICAgICAgICAgbGV0IERyYXdpbmdtYXNrQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ21hc2tDbGFzc1JlZihjdXJyZW50TWFzayk7XHJcbiAgICAgICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmIGVsZW1lbnQuY3VycmVudFRvb2wgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXhdLkNvbG9yRnJhbWVMaXN0QXJyYXlbZWxlbWVudC5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXhdLmNvbG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uUGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXhdLlNwYXJrbGVGcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuZHJhd0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGVsZW1lbnQuZHJhd0FycmF5W2ldLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaCA9IGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvczEgPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54IC0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba10ueCwgdGhpcy5wcmV2VG91Y2gueSAtIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3J3YXJkVmVjdG9yID0gcG9zMS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwbGl0VmFsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gc3BsaXRWYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBEaXN0YW5jZSA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREaXN0YW5jZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LCBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS54LCBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS55KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gRGlzdGFuY2UgLyBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdmFsOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LCBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5yZWN0KHRoaXMucHJldlRvdWNoLnggLSAoQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgLSAoQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gbmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCArIChmb3J3YXJkVmVjdG9yLnggKiBkaXN0YW5jZSkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgKyAoZm9yd2FyZFZlY3Rvci55ICogZGlzdGFuY2UpICogLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaCA9IGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFDNUMsK0NBQThDO0FBQzlDLDJDQUFzQztBQUV0QyxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBREc7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzhEQUN2QztJQUYvQixnQkFBZ0I7UUFEckIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO09BQ3RCLGdCQUFnQixDQUdyQjtJQUFELHVCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSUQ7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtWEM7UUFoWEcsMkJBQXFCLEdBQXVCLEVBQUUsQ0FBQztRQUUvQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztRQUd4QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFB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RCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLG1CQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ3RHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDbEI7d0JBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0Q7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1NBR0o7SUFDTCxDQUFDO0lBOVdEO1FBREMsUUFBUSxDQUFDLGdCQUFnQixDQUFDOytEQUNvQjtJQUg5QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbVhoQztJQUFELG1CQUFDO0NBblhELEFBbVhDLENBblh5QyxFQUFFLENBQUMsU0FBUyxHQW1YckQ7a0JBblhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi9Db21tb24vQ29uc3RhbnRcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQ29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IFBlcnNpc3RlbnRTY3JvbGwgZnJvbSBcIi4vUGVyc2lzdGVudC9QZXJzaXN0ZW50U2Nyb2xsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJEcmF3aW5nU3BsaXREYXRhXCIpXHJcbmNsYXNzIERyYXdpbmdTcGxpdERhdGEge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJEcmF3aW5nU3BsaXREYXRhXCIgfSlcclxuICAgIERyYXdpbmdTcGxpdERhdGE6IGNjLk5vZGUgPSBudWxsO1xyXG59XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZ1RhYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoRHJhd2luZ1NwbGl0RGF0YSlcclxuICAgIERyYXdpbmdTcGxpdERhdGFBcnJheTogRHJhd2luZ1NwbGl0RGF0YVtdID0gW107XHJcblxyXG4gICAgY3VycmVudENoaWxkID0gbnVsbDtcclxuICAgIGN1cnJlbnRNYXNrID0gbnVsbDtcclxuXHJcbiAgICBwYXJlbnRSZWYgPSBudWxsO1xyXG4gICAgcGFyZW50Tm9kZSA9IG51bGw7XHJcblxyXG4gICAgcGVyc2lzdGVudFNjcm9sbE5vZGUgPSBudWxsO1xyXG4gICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IG51bGw7XHJcblxyXG4gICAgcHJldlRvdWNoID0gbmV3IGNjLlZlYzI7XHJcblxyXG5cclxuICAgIGN1cnJlbnRzdGVuc2lsID0gW107XHJcbiAgICAvLyBkcmFnZ2Vkc3RlbnNpbCA9IFtdO1xyXG4gICAgLy8gcG9pbnRwb3NpdGlvbiA9IFtdO1xyXG5cclxuICAgIG92ZXJBbGxEYXRhID0gW107XHJcbiAgICBjdXJyZW50RGF0YSA9IHtcclxuICAgICAgICBjdXJyZW50VG9vbDogMCxcclxuICAgICAgICBkcmF3QXJyYXk6IFtdLFxyXG4gICAgICAgIGN1cnJlbnRDaGlsZEluZGV4OiAwLFxyXG4gICAgICAgIGN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDogMCxcclxuICAgICAgICBjdXJyZW50VGlsZUluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBkcmF3aW5nRGF0YUFycmF5ID0gW107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQgPSBHbG9iYWwuaW5zdGFuY2UuUGVyc2lzdGVudFNjcm9sbEluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUgPSBHbG9iYWwuaW5zdGFuY2UuUGVyc2lzdGVudFNjcm9sbEluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmluaXRpYWxpc2VEcmF3aW5nKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaW5pdFRvdWNoKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIGluaXRpYWxpc2VSZWYoUGFyZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYgPSBQYXJlbnRSZWY7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gdGhpcy5wYXJlbnRSZWYubm9kZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdpbmdEYXRhQXJyYXkucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4oZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldFBvbHlnb25EYXRhKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihwb2ludCwgY29sbGlkZXIud29ybGQucG9pbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb29sOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFBlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UuU0ZYW1BlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UudG9vbE51bWJlcl0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2ludHBvc2l0aW9uID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENoaWxkID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXNraW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoTW92ZWQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS50aWNrQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOIHx8XHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS5nbG93QXVkLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IG15RGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRvb2w6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDogdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFRpbGVJbmRleCxcclxuICAgICAgICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRyYXdpbmdEYXRhQXJyYXlbdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50Q2hpbGRJbmRleF0ucHVzaChteURhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgcG9pbnQxID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludDEgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50MSk7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LnBhcnRpY2xlRWZmZWN0Lm5vZGUuc2V0UG9zaXRpb24ocG9pbnQxKTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQucGFydGljbGVFZmZlY3QucmVzZXRTeXN0ZW0oKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIF9hZGRDaXJjbGUocG9pbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIHBvczEgPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54IC0gcG9pbnQueCwgdGhpcy5wcmV2VG91Y2gueSAtIHBvaW50LnkpO1xyXG4gICAgICAgIGxldCBmb3J3YXJkVmVjdG9yID0gcG9zMS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNwbGl0VmFsID0gNTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMKVxyXG4gICAgICAgICAgICBzcGxpdFZhbCA9IDI7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3BsaXRWYWw7XHJcblxyXG4gICAgICAgIGxldCBEaXN0YW5jZSA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREaXN0YW5jZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LCBwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICBsZXQgdmFsID0gRGlzdGFuY2UgLyBzcGxpdFZhbDtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucG9pbnRwb3NpdGlvbi5wdXNoKG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLngsdGhpcy5wcmV2VG91Y2gueSkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk5cclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaXNEdWFsU3ltZXRyeUNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDEgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDEuY2lyY2xlKHRoaXMucHJldlRvdWNoLnggKiAtMSwgdGhpcy5wcmV2VG91Y2gueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmlzUXVhZFN5bWV0cnlDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMS5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwyID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDMgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDMuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwzLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgc3RlbmNpbC5yZWN0KHRoaXMucHJldlRvdWNoLnggLSAoQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55IC0gKENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKSxcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gKiAyKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHQgPSBDb25zdGFudC5jaXJjbGVyYW5kUG9pbnQodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHB0LngsIHB0LnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gbmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCArIChmb3J3YXJkVmVjdG9yLnggKiBkaXN0YW5jZSkgKiAtMSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgKyAoZm9yd2FyZFZlY3Rvci55ICogZGlzdGFuY2UpICogLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTWFza2luZygpIHtcclxuICAgICAgICBsZXQgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjdXJyZW50VGlsZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtjdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hpbGQuYWRkQ2hpbGQodGhpcy5jdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgIGxldCBEcmF3aW5nbWFza0NsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdtYXNrQ2xhc3NSZWYodGhpcy5jdXJyZW50TWFzayk7XHJcbiAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUaWxlSW5kZXggPSBjdXJyZW50VGlsZUluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jdXJyZW50Q2hpbGRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50c3RlbnNpbC5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb2x5Z29uRGF0YShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0RhdGEoZGF0YUFycmF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGFBcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuXHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uRHJhd2luZ21hc2tQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkLmFkZENoaWxkKGN1cnJlbnRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmIGVsZW1lbnRbMF0uY3VycmVudFRvb2wgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4XS5Db2xvckZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uUGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9uZXdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMub3ZlckFsbERhdGEgPSBkYXRhQXJyYXk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YUFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhQXJyYXlbal07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtlbGVtZW50LmN1cnJlbnRDaGlsZEluZGV4XS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudC5jdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5hZGRDaGlsZChjdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IgJiYgZWxlbWVudC5jdXJyZW50VG9vbCAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uUGF0dGVybkZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5QYXR0ZXJuRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5kcmF3QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZWxlbWVudC5kcmF3QXJyYXlbaV0ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zMSA9IG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLnggLSBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS54LCB0aGlzLnByZXZUb3VjaC55IC0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba10ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcndhcmRWZWN0b3IgPSBwb3MxLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IERpc3RhbmNlID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERpc3RhbmNlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLngsIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBEaXN0YW5jZSAvIHNwbGl0VmFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLnJlY3QodGhpcy5wcmV2VG91Y2gueCAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54ICsgKGZvcndhcmRWZWN0b3IueCAqIGRpc3RhbmNlKSAqIC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSArIChmb3J3YXJkVmVjdG9yLnkgKiBkaXN0YW5jZSkgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
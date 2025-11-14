
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
        _this.prevTouch = new cc.Vec2();
        _this.currentstensil = [];
        // draggedstensil = [];
        // pointposition = [];
        _this.overAllData = [];
        _this.currentData = {
            currentTool: 0,
            drawArray: [],
            currentChildIndex: 0,
            currentPatternFrameIndex: 0,
            currentTileIndex: 0,
        };
        _this.drawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DrawingTable.prototype.onLoad = function () { };
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
                    currentTileIndex: 0,
                };
                var id = cc.audioEngine.playEffect(PersistentScroll_1.default.Instance.SFX[PersistentScroll_1.default.Instance.toolNumber], true);
                cc.audioEngine.setVolume(id, 0.6);
                // this.draggedstensil = [];
                // this.pointposition = []
                this.currentData.currentChildIndex = i;
                this.currentData.currentTool =
                    this.persistentScrollScript.currentPensilSelection;
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
        PersistentScroll_1.default.Instance.tickBtn.getComponent(cc.Button).interactable =
            true;
        cc.audioEngine.stopAllEffects();
        this._addCircle(point);
        if (this.persistentScrollScript.currentPensilSelection ==
            Constant_1.Constant.ToolsTag.BRUSH ||
            this.persistentScrollScript.currentPensilSelection ==
                Constant_1.Constant.ToolsTag.PATTERN ||
            this.persistentScrollScript.currentPensilSelection ==
                Constant_1.Constant.ToolsTag.SPARKEL)
            cc.audioEngine.playEffect(PersistentScroll_1.default.Instance.glowAud, false);
        var myData = {
            currentTool: this.currentData.currentTool,
            currentPatternFrameIndex: this.currentData.currentPatternFrameIndex,
            currentTileIndex: this.currentData.currentTileIndex,
            child: this.currentMask,
        };
        this.drawingDataArray[this.currentData.currentChildIndex].push(myData);
        if (this.persistentScrollScript.currentPensilSelection ==
            Constant_1.Constant.ToolsTag.ERASER)
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
        if (this.persistentScrollScript.currentPensilSelection ==
            Constant_1.Constant.ToolsTag.PENCIL)
            splitVal = 2;
        var distance = splitVal;
        var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, point.x, point.y);
        var val = Distance / splitVal;
        // this.pointposition.push(new cc.Vec2(this.prevTouch.x,this.prevTouch.y));
        for (var i = 0; i <= val; i++) {
            if (this.persistentScrollScript.currentPensilSelection ==
                Constant_1.Constant.ToolsTag.BRUSH ||
                this.persistentScrollScript.currentPensilSelection ==
                    Constant_1.Constant.ToolsTag.PENCIL ||
                this.persistentScrollScript.currentPensilSelection ==
                    Constant_1.Constant.ToolsTag.SPARKEL ||
                this.persistentScrollScript.currentPensilSelection ==
                    Constant_1.Constant.ToolsTag.PATTERN ||
                this.persistentScrollScript.currentPensilSelection ==
                    Constant_1.Constant.ToolsTag.ERASER) {
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
            if (this.persistentScrollScript.currentPensilSelection ==
                Constant_1.Constant.ToolsTag.BRUSH2) {
                var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.rect(this.prevTouch.x -
                    Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] /
                        2, this.prevTouch.y -
                    Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection], Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] * 2);
                stencil.fill();
                // this.draggedstensil.push(stencil);
            }
            if (this.persistentScrollScript.currentPensilSelection ==
                Constant_1.Constant.ToolsTag.SPRAY) {
                for (var i_1 = 0; i_1 < 5; i_1++) {
                    var pt = Constant_1.Constant.circlerandPoint(this.prevTouch.x, this.prevTouch.y, 20);
                    var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil.circle(pt.x, pt.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil.fill();
                    // this.draggedstensil.push(stencil);
                }
            }
            this.prevTouch = new cc.Vec2(this.prevTouch.x + forwardVector.x * distance * -1, this.prevTouch.y + forwardVector.y * distance * -1);
        }
        this.prevTouch = point;
    };
    DrawingTable.prototype.checkMasking = function () {
        var currentTileIndex = 0;
        if (this.persistentScrollScript.currentPensilSelection ==
            Constant_1.Constant.ToolsTag.ERASER)
            currentTileIndex = 0;
        else
            currentTileIndex = this.persistentScrollScript.currentTileIndex;
        this.currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[currentTileIndex]
            .DrawingmaskPrefab);
        this.currentChild.addChild(this.currentMask);
        var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(this.currentMask);
        DrawingmaskClassRef.initialiseRef(this);
        DrawingmaskClassRef.initialisePatternData(this.persistentScrollScript);
        this.currentData.currentPatternFrameIndex =
            this.persistentScrollScript.currentPatternFrameIndex;
        this.currentData.currentTileIndex = currentTileIndex;
        var data = {
            child: this.currentMask,
            parent: this.currentChild,
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
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.COLOR &&
                    element[0].currentTool != Constant_1.Constant.ToolsTag.ERASER)
                    currentMask.getChildByName("img").color =
                        this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].ColorFrameListArray[element[0].currentPatternFrameIndex].color;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                    currentMask
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame =
                        this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].PatternFrameListArray[element[0].currentPatternFrameIndex].PatternFrame;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                    currentMask
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame =
                        this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].SparkleFrameListArray[element[0].currentPatternFrameIndex].SparkleFrame;
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
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR &&
                element.currentTool != Constant_1.Constant.ToolsTag.ERASER)
                currentMask.getChildByName("img").color =
                    this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].ColorFrameListArray[element.currentPatternFrameIndex].color;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame =
                    this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].PatternFrameListArray[element.currentPatternFrameIndex].PatternFrame;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame =
                    this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].SparkleFrameListArray[element.currentPatternFrameIndex].SparkleFrame;
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
                    if (this.persistentScrollScript.currentPensilSelection ==
                        Constant_1.Constant.ToolsTag.PENCIL)
                        splitVal = 2;
                    var distance = splitVal;
                    var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, element.drawArray[i][k].x, element.drawArray[i][k].y);
                    var val = Distance / splitVal;
                    for (var i_2 = 0; i_2 <= val; i_2++) {
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH ||
                            element.currentTool == Constant_1.Constant.ToolsTag.PENCIL ||
                            element.currentTool == Constant_1.Constant.ToolsTag.SPARKEL ||
                            element.currentTool == Constant_1.Constant.ToolsTag.PATTERN ||
                            element.currentTool == Constant_1.Constant.ToolsTag.ERASER) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH2) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.rect(this.prevTouch.x -
                                Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2, this.prevTouch.y -
                                Constant_1.Constant.CurrentToolsTagSize[element.currentTool], Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2, Constant_1.Constant.CurrentToolsTagSize[element.currentTool] * 2);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.SPRAY) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        this.prevTouch = new cc.Vec2(this.prevTouch.x + forwardVector.x * distance * -1, this.prevTouch.y + forwardVector.y * distance * -1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFDNUMsK0NBQThDO0FBQzlDLDJDQUFzQztBQUV0QyxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVFLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBREM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzhEQUN2QztJQUY3QixnQkFBZ0I7UUFEckIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO09BQ3RCLGdCQUFnQixDQUdyQjtJQUFELHVCQUFDO0NBSEQsQUFHQyxJQUFBO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwZkM7UUF4ZkMsMkJBQXFCLEdBQXVCLEVBQUUsQ0FBQztRQUUvQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTFCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BC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QUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDMUQsT0FBTyxDQUFDLE1BQU0sQ0FDWixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2hCLG1CQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUNsRCxDQUFDOzRCQUNGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDaEI7d0JBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FDbkQsQ0FBQztxQkFDSDtvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUF2ZkQ7UUFEQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7K0RBQ29CO0lBRjVCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EwZmhDO0lBQUQsbUJBQUM7Q0ExZkQsQUEwZkMsQ0ExZnlDLEVBQUUsQ0FBQyxTQUFTLEdBMGZyRDtrQkExZm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkRyYXdpbmdTcGxpdERhdGFcIilcclxuY2xhc3MgRHJhd2luZ1NwbGl0RGF0YSB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJEcmF3aW5nU3BsaXREYXRhXCIgfSlcclxuICBEcmF3aW5nU3BsaXREYXRhOiBjYy5Ob2RlID0gbnVsbDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZ1RhYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoRHJhd2luZ1NwbGl0RGF0YSlcclxuICBEcmF3aW5nU3BsaXREYXRhQXJyYXk6IERyYXdpbmdTcGxpdERhdGFbXSA9IFtdO1xyXG5cclxuICBjdXJyZW50Q2hpbGQgPSBudWxsO1xyXG4gIGN1cnJlbnRNYXNrID0gbnVsbDtcclxuXHJcbiAgcGFyZW50UmVmID0gbnVsbDtcclxuICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgcGVyc2lzdGVudFNjcm9sbE5vZGUgPSBudWxsO1xyXG4gIHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQgPSBudWxsO1xyXG5cclxuICBwcmV2VG91Y2ggPSBuZXcgY2MuVmVjMigpO1xyXG5cclxuICBjdXJyZW50c3RlbnNpbCA9IFtdO1xyXG4gIC8vIGRyYWdnZWRzdGVuc2lsID0gW107XHJcbiAgLy8gcG9pbnRwb3NpdGlvbiA9IFtdO1xyXG5cclxuICBvdmVyQWxsRGF0YSA9IFtdO1xyXG4gIGN1cnJlbnREYXRhID0ge1xyXG4gICAgY3VycmVudFRvb2w6IDAsXHJcbiAgICBkcmF3QXJyYXk6IFtdLFxyXG4gICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXg6IDAsXHJcbiAgICBjdXJyZW50VGlsZUluZGV4OiAwLFxyXG4gIH07XHJcblxyXG4gIGRyYXdpbmdEYXRhQXJyYXkgPSBbXTtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHt9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZTtcclxuICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUgPSBHbG9iYWwuaW5zdGFuY2UuUGVyc2lzdGVudFNjcm9sbEluc3RhbmNlLm5vZGU7XHJcbiAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaW5pdGlhbGlzZURyYXdpbmcodGhpcyk7XHJcbiAgfVxyXG4gIGluaXRUb3VjaCgpIHtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gIGluaXRpYWxpc2VSZWYoUGFyZW50UmVmKSB7XHJcbiAgICB0aGlzLnBhcmVudFJlZiA9IFBhcmVudFJlZjtcclxuICAgIHRoaXMucGFyZW50Tm9kZSA9IHRoaXMucGFyZW50UmVmLm5vZGU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmRyYXdpbmdEYXRhQXJyYXkucHVzaChbXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25Ub3VjaEJlZ2luKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5EcmF3aW5nU3BsaXREYXRhQXJyYXlbaV0uRHJhd2luZ1NwbGl0RGF0YTtcclxuICAgICAgbGV0IGNvbGxpZGVyID0gdGhpcy5nZXRQb2x5Z29uRGF0YShlbGVtZW50KTtcclxuXHJcbiAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24ocG9pbnQsIGNvbGxpZGVyLndvcmxkLnBvaW50cykpIHtcclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgICAgY3VycmVudFRvb2w6IDAsXHJcbiAgICAgICAgICBkcmF3QXJyYXk6IFtdLFxyXG4gICAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXg6IDAsXHJcbiAgICAgICAgICBjdXJyZW50VGlsZUluZGV4OiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuICAgICAgICAgIFBlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UuU0ZYW1BlcnNpc3RlbnRTY3JvbGwuSW5zdGFuY2UudG9vbE51bWJlcl0sXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIDAuNik7XHJcbiAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbCA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMucG9pbnRwb3NpdGlvbiA9IFtdXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudENoaWxkSW5kZXggPSBpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wgPVxyXG4gICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb247XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENoaWxkID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoZWNrTWFza2luZygpO1xyXG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25Ub3VjaE1vdmVkKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICB9XHJcblxyXG4gIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICBQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLnRpY2tCdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID1cclxuICAgICAgdHJ1ZTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICAgIENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgICAgQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTiB8fFxyXG4gICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICAgIENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgIClcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLmdsb3dBdWQsIGZhbHNlKTtcclxuICAgIGxldCBteURhdGEgPSB7XHJcbiAgICAgIGN1cnJlbnRUb29sOiB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUb29sLFxyXG4gICAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXg6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4LFxyXG4gICAgICBjdXJyZW50VGlsZUluZGV4OiB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUaWxlSW5kZXgsXHJcbiAgICAgIGNoaWxkOiB0aGlzLmN1cnJlbnRNYXNrLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheVt0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRDaGlsZEluZGV4XS5wdXNoKG15RGF0YSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgIENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUlxyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB2YXIgcG9pbnQxID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgIHBvaW50MSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQxKTtcclxuICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5wYXJ0aWNsZUVmZmVjdC5ub2RlLnNldFBvc2l0aW9uKHBvaW50MSk7XHJcbiAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQucGFydGljbGVFZmZlY3QucmVzZXRTeXN0ZW0oKTtcclxuICB9XHJcblxyXG4gIF9hZGRDaXJjbGUocG9pbnQpIHtcclxuICAgIHZhciBwb3MxID0gbmV3IGNjLlZlYzIoXHJcbiAgICAgIHRoaXMucHJldlRvdWNoLnggLSBwb2ludC54LFxyXG4gICAgICB0aGlzLnByZXZUb3VjaC55IC0gcG9pbnQueVxyXG4gICAgKTtcclxuICAgIGxldCBmb3J3YXJkVmVjdG9yID0gcG9zMS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICBsZXQgc3BsaXRWYWwgPSA1O1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUxcclxuICAgIClcclxuICAgICAgc3BsaXRWYWwgPSAyO1xyXG4gICAgbGV0IGRpc3RhbmNlID0gc3BsaXRWYWw7XHJcblxyXG4gICAgbGV0IERpc3RhbmNlID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERpc3RhbmNlKFxyXG4gICAgICB0aGlzLnByZXZUb3VjaC54LFxyXG4gICAgICB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICBwb2ludC54LFxyXG4gICAgICBwb2ludC55XHJcbiAgICApO1xyXG4gICAgbGV0IHZhbCA9IERpc3RhbmNlIC8gc3BsaXRWYWw7XHJcblxyXG4gICAgLy8gdGhpcy5wb2ludHBvc2l0aW9uLnB1c2gobmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCx0aGlzLnByZXZUb3VjaC55KSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdmFsOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgICAgICBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgICAgICBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICAgICAgQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTCB8fFxyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgICAgICBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOIHx8XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT1cclxuICAgICAgICAgIENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUlxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgc3RlbmNpbCA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICBzdGVuY2lsLmNpcmNsZShcclxuICAgICAgICAgIHRoaXMucHJldlRvdWNoLngsXHJcbiAgICAgICAgICB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtcclxuICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25cclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5pc0R1YWxTeW1ldHJ5Q2xpY2tlZCkge1xyXG4gICAgICAgICAgbGV0IHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgc3RlbmNpbDEuY2lyY2xlKFxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaC54ICogLTEsXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaXNRdWFkU3ltZXRyeUNsaWNrZWQpIHtcclxuICAgICAgICAgIGxldCBzdGVuY2lsMSA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZShcclxuICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCAqIC0xLFxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW1xyXG4gICAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdGVuY2lsMS5maWxsKCk7XHJcbiAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDEpO1xyXG5cclxuICAgICAgICAgIGxldCBzdGVuY2lsMiA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZShcclxuICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCAqIC0xLFxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55ICogLTEsXHJcbiAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0ZW5jaWwyLmZpbGwoKTtcclxuICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsMik7XHJcblxyXG4gICAgICAgICAgbGV0IHN0ZW5jaWwzID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgc3RlbmNpbDMuY2lyY2xlKFxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaC54LFxyXG4gICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55ICogLTEsXHJcbiAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0ZW5jaWwzLmZpbGwoKTtcclxuICAgICAgICAgIC8vIHRoaXMuZHJhZ2dlZHN0ZW5zaWwucHVzaChzdGVuY2lsMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICAgIENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMlxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgc3RlbmNpbCA9IHRoaXMuY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICBzdGVuY2lsLnJlY3QoXHJcbiAgICAgICAgICB0aGlzLnByZXZUb3VjaC54IC1cclxuICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtcclxuICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvblxyXG4gICAgICAgICAgICBdIC9cclxuICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtXHJcbiAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXHJcbiAgICAgICAgICBdIC8gMixcclxuICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbXHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXHJcbiAgICAgICAgICBdICogMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICAgIENvbnN0YW50LlRvb2xzVGFnLlNQUkFZXHJcbiAgICAgICkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgcHQgPSBDb25zdGFudC5jaXJjbGVyYW5kUG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLngsXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgIDIwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICBzdGVuY2lsLmNpcmNsZShcclxuICAgICAgICAgICAgcHQueCxcclxuICAgICAgICAgICAgcHQueSxcclxuICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtcclxuICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnByZXZUb3VjaCA9IG5ldyBjYy5WZWMyKFxyXG4gICAgICAgIHRoaXMucHJldlRvdWNoLnggKyBmb3J3YXJkVmVjdG9yLnggKiBkaXN0YW5jZSAqIC0xLFxyXG4gICAgICAgIHRoaXMucHJldlRvdWNoLnkgKyBmb3J3YXJkVmVjdG9yLnkgKiBkaXN0YW5jZSAqIC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNYXNraW5nKCkge1xyXG4gICAgbGV0IGN1cnJlbnRUaWxlSW5kZXggPSAwO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PVxyXG4gICAgICBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVJcclxuICAgIClcclxuICAgICAgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICBlbHNlIGN1cnJlbnRUaWxlSW5kZXggPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFRpbGVJbmRleDtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUoXHJcbiAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2N1cnJlbnRUaWxlSW5kZXhdXHJcbiAgICAgICAgLkRyYXdpbmdtYXNrUHJlZmFiXHJcbiAgICApO1xyXG4gICAgdGhpcy5jdXJyZW50Q2hpbGQuYWRkQ2hpbGQodGhpcy5jdXJyZW50TWFzayk7XHJcblxyXG4gICAgbGV0IERyYXdpbmdtYXNrQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ21hc2tDbGFzc1JlZihcclxuICAgICAgdGhpcy5jdXJyZW50TWFza1xyXG4gICAgKTtcclxuICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPVxyXG4gICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4O1xyXG4gICAgdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50VGlsZUluZGV4ID0gY3VycmVudFRpbGVJbmRleDtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgIHBhcmVudDogdGhpcy5jdXJyZW50Q2hpbGQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdXJyZW50c3RlbnNpbC5wdXNoKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9seWdvbkRhdGEoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgfVxyXG5cclxuICBkcmF3RGF0YShkYXRhQXJyYXkpIHtcclxuICAgIGlmIChkYXRhQXJyYXkgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuXHJcbiAgICAvL25ld1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFBcnJheVtpXTtcclxuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5W2ldLkRyYXdpbmdTcGxpdERhdGE7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TWFzayA9IGNjLmluc3RhbnRpYXRlKFxyXG4gICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbXHJcbiAgICAgICAgICAgIGVsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleFxyXG4gICAgICAgICAgXS5EcmF3aW5nbWFza1ByZWZhYlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3VycmVudENoaWxkLmFkZENoaWxkKGN1cnJlbnRNYXNrKTtcclxuXHJcbiAgICAgICAgbGV0IERyYXdpbmdtYXNrQ2xhc3NSZWYgPVxyXG4gICAgICAgICAgQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdtYXNrQ2xhc3NSZWYoY3VycmVudE1hc2spO1xyXG4gICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmXHJcbiAgICAgICAgICBlbGVtZW50WzBdLmN1cnJlbnRUb29sICE9IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUlxyXG4gICAgICAgIClcclxuICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID1cclxuICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbXHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4XHJcbiAgICAgICAgICAgIF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTilcclxuICAgICAgICAgIGN1cnJlbnRNYXNrXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtcclxuICAgICAgICAgICAgICBlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhcclxuICAgICAgICAgICAgXS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXlbXHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXhcclxuICAgICAgICAgICAgXS5QYXR0ZXJuRnJhbWU7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgIGN1cnJlbnRNYXNrXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtcclxuICAgICAgICAgICAgICBlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhcclxuICAgICAgICAgICAgXS5TcGFya2xlRnJhbWVMaXN0QXJyYXlbXHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXhcclxuICAgICAgICAgICAgXS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICAgIC8vbmV3XHJcblxyXG4gICAgdGhpcy5vdmVyQWxsRGF0YSA9IGRhdGFBcnJheTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUFycmF5W2pdO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudENoaWxkID1cclxuICAgICAgICB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtlbGVtZW50LmN1cnJlbnRDaGlsZEluZGV4XS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgbGV0IGN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUoXHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbXHJcbiAgICAgICAgICBlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXhcclxuICAgICAgICBdLkRyYXdpbmdtYXNrUHJlZmFiXHJcbiAgICAgICk7XHJcbiAgICAgIGN1cnJlbnRDaGlsZC5hZGRDaGlsZChjdXJyZW50TWFzayk7XHJcblxyXG4gICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9XHJcbiAgICAgICAgQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdtYXNrQ2xhc3NSZWYoY3VycmVudE1hc2spO1xyXG4gICAgICBEcmF3aW5nbWFza0NsYXNzUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmXHJcbiAgICAgICAgZWxlbWVudC5jdXJyZW50VG9vbCAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVJcclxuICAgICAgKVxyXG4gICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID1cclxuICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W1xyXG4gICAgICAgICAgICBlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXhcclxuICAgICAgICAgIF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudFRpbGVJbmRleFxyXG4gICAgICAgICAgXS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXlbXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XHJcbiAgICAgICAgICBdLlBhdHRlcm5GcmFtZTtcclxuXHJcbiAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtcclxuICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VGlsZUluZGV4XHJcbiAgICAgICAgICBdLlNwYXJrbGVGcmFtZUxpc3RBcnJheVtcclxuICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXhcclxuICAgICAgICAgIF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXHJcbiAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5kcmF3QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGVsZW1lbnQuZHJhd0FycmF5W2ldLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZiAoayA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIHBvczEgPSBuZXcgY2MuVmVjMihcclxuICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCAtIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLngsXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgLSBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS55XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGV0IGZvcndhcmRWZWN0b3IgPSBwb3MxLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgIGxldCBzcGxpdFZhbCA9IDU7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09XHJcbiAgICAgICAgICAgIENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICBzcGxpdFZhbCA9IDI7XHJcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICBsZXQgRGlzdGFuY2UgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RGlzdGFuY2UoXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLngsXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLngsXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLnlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBsZXQgdmFsID0gRGlzdGFuY2UgLyBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMIHx8XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMIHx8XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOIHx8XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIpIHtcclxuICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgc3RlbmNpbC5yZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCAtXHJcbiAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0gLyAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtXHJcbiAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0sXHJcbiAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMixcclxuICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0gKiAyXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZShcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gbmV3IGNjLlZlYzIoXHJcbiAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueCArIGZvcndhcmRWZWN0b3IueCAqIGRpc3RhbmNlICogLTEsXHJcbiAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSArIGZvcndhcmRWZWN0b3IueSAqIGRpc3RhbmNlICogLTFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==

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
var GamePlay_1 = require("./GamePlay");
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
        GamePlay_1.default.Instance.hand2.opacity = 0;
        PersistentScroll_1.default.Instance.tickBtn.getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsK0NBQThDO0FBQzlDLDJDQUFzQztBQUN0Qyx1Q0FBa0M7QUFDbEMsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7SUFDckMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzs4REFDdkM7SUFGL0IsZ0JBQWdCO1FBRHJCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztPQUN0QixnQkFBZ0IsQ0FHckI7SUFBRCx1QkFBQztDQUhELEFBR0MsSUFBQTtBQUlEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcVhDO1FBbFhHLDJCQUFxQixHQUF1QixFQUFFLENBQUM7UUFFL0Msa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsNEJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFHeEIsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUV0QixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBVyxHQUFHO1lBQ1Ys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QUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RDtvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2FBQ0o7U0FHSjtJQUNMLENBQUM7SUFoWEQ7UUFEQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7K0RBQ29CO0lBSDlCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxWGhDO0lBQUQsbUJBQUM7Q0FyWEQsQUFxWEMsQ0FyWHlDLEVBQUUsQ0FBQyxTQUFTLEdBcVhyRDtrQkFyWG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkRyYXdpbmdTcGxpdERhdGFcIilcclxuY2xhc3MgRHJhd2luZ1NwbGl0RGF0YSB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIkRyYXdpbmdTcGxpdERhdGFcIiB9KVxyXG4gICAgRHJhd2luZ1NwbGl0RGF0YTogY2MuTm9kZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nVGFibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShEcmF3aW5nU3BsaXREYXRhKVxyXG4gICAgRHJhd2luZ1NwbGl0RGF0YUFycmF5OiBEcmF3aW5nU3BsaXREYXRhW10gPSBbXTtcclxuXHJcbiAgICBjdXJyZW50Q2hpbGQgPSBudWxsO1xyXG4gICAgY3VycmVudE1hc2sgPSBudWxsO1xyXG5cclxuICAgIHBhcmVudFJlZiA9IG51bGw7XHJcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IG51bGw7XHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgICBwcmV2VG91Y2ggPSBuZXcgY2MuVmVjMjtcclxuXHJcblxyXG4gICAgY3VycmVudHN0ZW5zaWwgPSBbXTtcclxuICAgIC8vIGRyYWdnZWRzdGVuc2lsID0gW107XHJcbiAgICAvLyBwb2ludHBvc2l0aW9uID0gW107XHJcblxyXG4gICAgb3ZlckFsbERhdGEgPSBbXTtcclxuICAgIGN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRUb29sOiAwLFxyXG4gICAgICAgIGRyYXdBcnJheTogW10sXHJcbiAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiAwLFxyXG4gICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG5cclxuICAgIGRyYXdpbmdEYXRhQXJyYXkgPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaW5pdGlhbGlzZURyYXdpbmcodGhpcyk7XHJcbiAgICB9XHJcbiAgICBpbml0VG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoQmVnaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgaW5pdGlhbGlzZVJlZihQYXJlbnRSZWYpIHtcclxuICAgICAgICB0aGlzLnBhcmVudFJlZiA9IFBhcmVudFJlZjtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnBhcmVudFJlZi5ub2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheS5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hCZWdpbihldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldFBvbHlnb25EYXRhKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihwb2ludCwgY29sbGlkZXIud29ybGQucG9pbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb29sOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2ludHBvc2l0aW9uID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENoaWxkID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXNraW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoTW92ZWQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgR2FtZVBsYXkuSW5zdGFuY2UuaGFuZDIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS50aWNrQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4gfHxcclxuICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLmdsb3dBdWQsIGZhbHNlKTtcclxuICAgICAgICBsZXQgbXlEYXRhID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50VG9vbDogdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50VG9vbCxcclxuICAgICAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCxcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmRleDogdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50VGlsZUluZGV4LFxyXG4gICAgICAgICAgICBjaGlsZDogdGhpcy5jdXJyZW50TWFzayxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheVt0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRDaGlsZEluZGV4XS5wdXNoKG15RGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgcG9pbnQxID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludDEgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50MSk7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LnBhcnRpY2xlRWZmZWN0Lm5vZGUuc2V0UG9zaXRpb24ocG9pbnQxKTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQucGFydGljbGVFZmZlY3QucmVzZXRTeXN0ZW0oKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIF9hZGRDaXJjbGUocG9pbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIHBvczEgPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54IC0gcG9pbnQueCwgdGhpcy5wcmV2VG91Y2gueSAtIHBvaW50LnkpO1xyXG4gICAgICAgIGxldCBmb3J3YXJkVmVjdG9yID0gcG9zMS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNwbGl0VmFsID0gNTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMKVxyXG4gICAgICAgICAgICBzcGxpdFZhbCA9IDI7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3BsaXRWYWw7XHJcblxyXG4gICAgICAgIGxldCBEaXN0YW5jZSA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREaXN0YW5jZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LCBwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICBsZXQgdmFsID0gRGlzdGFuY2UgLyBzcGxpdFZhbDtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucG9pbnRwb3NpdGlvbi5wdXNoKG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLngsdGhpcy5wcmV2VG91Y2gueSkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk5cclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaXNEdWFsU3ltZXRyeUNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDEgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDEuY2lyY2xlKHRoaXMucHJldlRvdWNoLnggKiAtMSwgdGhpcy5wcmV2VG91Y2gueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmlzUXVhZFN5bWV0cnlDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMS5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwyID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDMgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDMuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwzLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgc3RlbmNpbC5yZWN0KHRoaXMucHJldlRvdWNoLnggLSAoQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55IC0gKENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKSxcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gKiAyKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHQgPSBDb25zdGFudC5jaXJjbGVyYW5kUG9pbnQodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHB0LngsIHB0LnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gbmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCArIChmb3J3YXJkVmVjdG9yLnggKiBkaXN0YW5jZSkgKiAtMSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgKyAoZm9yd2FyZFZlY3Rvci55ICogZGlzdGFuY2UpICogLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTWFza2luZygpIHtcclxuICAgICAgICBsZXQgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjdXJyZW50VGlsZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtjdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hpbGQuYWRkQ2hpbGQodGhpcy5jdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgIGxldCBEcmF3aW5nbWFza0NsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdtYXNrQ2xhc3NSZWYodGhpcy5jdXJyZW50TWFzayk7XHJcbiAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUaWxlSW5kZXggPSBjdXJyZW50VGlsZUluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jdXJyZW50Q2hpbGRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50c3RlbnNpbC5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb2x5Z29uRGF0YShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0RhdGEoZGF0YUFycmF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGFBcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuXHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uRHJhd2luZ21hc2tQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkLmFkZENoaWxkKGN1cnJlbnRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmIGVsZW1lbnRbMF0uY3VycmVudFRvb2wgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4XS5Db2xvckZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uUGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9uZXdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMub3ZlckFsbERhdGEgPSBkYXRhQXJyYXk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YUFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhQXJyYXlbal07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtlbGVtZW50LmN1cnJlbnRDaGlsZEluZGV4XS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudC5jdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5hZGRDaGlsZChjdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IgJiYgZWxlbWVudC5jdXJyZW50VG9vbCAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uUGF0dGVybkZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5QYXR0ZXJuRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5kcmF3QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZWxlbWVudC5kcmF3QXJyYXlbaV0ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zMSA9IG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLnggLSBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS54LCB0aGlzLnByZXZUb3VjaC55IC0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba10ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcndhcmRWZWN0b3IgPSBwb3MxLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IERpc3RhbmNlID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERpc3RhbmNlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLngsIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBEaXN0YW5jZSAvIHNwbGl0VmFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLnJlY3QodGhpcy5wcmV2VG91Y2gueCAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54ICsgKGZvcndhcmRWZWN0b3IueCAqIGRpc3RhbmNlKSAqIC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSArIChmb3J3YXJkVmVjdG9yLnkgKiBkaXN0YW5jZSkgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
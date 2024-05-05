
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30f37RhHfRDy5c6luFrmfSU', 'PersistentScroll');
// Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll.ts

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
var CommonFun_1 = require("../../Common/CommonFun");
var Constant_1 = require("../../Common/Constant");
var Global_1 = require("../../Common/Global");
var TileSelection_1 = require("../TileSelection");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ColorFrameList = /** @class */ (function () {
    function ColorFrameList() {
        this.color = new cc.Color();
        this.colorParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ visible: true, tooltip: "color" })
    ], ColorFrameList.prototype, "color", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "colorParticleFrame" })
    ], ColorFrameList.prototype, "colorParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], ColorFrameList.prototype, "isLocked", void 0);
    ColorFrameList = __decorate([
        ccclass("ColorFrameList")
    ], ColorFrameList);
    return ColorFrameList;
}());
var PatternFrameList = /** @class */ (function () {
    function PatternFrameList() {
        this.PatternFrame = null;
        this.PatternParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternFrame" })
    ], PatternFrameList.prototype, "PatternFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternParticleFrame" })
    ], PatternFrameList.prototype, "PatternParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], PatternFrameList.prototype, "isLocked", void 0);
    PatternFrameList = __decorate([
        ccclass("PatternFrameList")
    ], PatternFrameList);
    return PatternFrameList;
}());
var SparkleFrameList = /** @class */ (function () {
    function SparkleFrameList() {
        this.SparkleFrame = null;
        this.SparkleParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleFrame" })
    ], SparkleFrameList.prototype, "SparkleFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleParticleFrame" })
    ], SparkleFrameList.prototype, "SparkleParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], SparkleFrameList.prototype, "isLocked", void 0);
    SparkleFrameList = __decorate([
        ccclass("SparkleFrameList")
    ], SparkleFrameList);
    return SparkleFrameList;
}());
var TileSelectionList = /** @class */ (function () {
    function TileSelectionList() {
        this.DrawingmaskPrefab = null;
        this.ScrollSelectionPrefab = null;
        this.ColorFrameListArray = [];
        this.PatternFrameListArray = [];
        this.SparkleFrameListArray = [];
        this.type = "";
    }
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "Drawingmask" })
    ], TileSelectionList.prototype, "DrawingmaskPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "ScrollSelection" })
    ], TileSelectionList.prototype, "ScrollSelectionPrefab", void 0);
    __decorate([
        property({ type: ColorFrameList, visible: true, tooltip: "ColorFrameListArray" })
    ], TileSelectionList.prototype, "ColorFrameListArray", void 0);
    __decorate([
        property({ type: PatternFrameList, visible: true, tooltip: "PatternFrameListArray" })
    ], TileSelectionList.prototype, "PatternFrameListArray", void 0);
    __decorate([
        property({ type: SparkleFrameList, visible: true, tooltip: "SparkleFrameListArray" })
    ], TileSelectionList.prototype, "SparkleFrameListArray", void 0);
    __decorate([
        property({ visible: true, tooltip: "type" })
    ], TileSelectionList.prototype, "type", void 0);
    TileSelectionList = __decorate([
        ccclass("TileSelectionList")
    ], TileSelectionList);
    return TileSelectionList;
}());
var PersistentScroll = /** @class */ (function (_super) {
    __extends(PersistentScroll, _super);
    function PersistentScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.tickBtn = null;
        _this.TileSelectionListArray = [];
        _this.rightNode = null;
        _this.ToolArray = [];
        _this.DualSymetry = null;
        _this.QuadSymetry = null;
        // @property(cc.Color)
        // colorPicker: cc.Color[] = null;
        _this.particleEffect = null;
        _this.cameraAud = null;
        _this.toolsAud = null;
        _this.glowAud = null;
        _this.scrollAud = null;
        _this.eraserAud = null;
        _this.CurrentBottomIndexValue = 0;
        _this.CurrentTopIndexValue = 0;
        _this.count = 0;
        _this.FrameArray = [];
        _this.TileArray = [];
        _this.startUpdate = false;
        _this.isScrolled = false;
        _this.prevTouch = new cc.Vec2;
        _this.touchTilePos = new cc.Vec2(0, 0);
        _this.currentTileIndex = -1;
        _this.prevPensilSelection = 0;
        _this.currentPensilSelection = 0;
        _this.currentToolIndex = 0;
        _this.currentPatternFrame = null;
        _this.currentPatternFrameIndex = 0;
        _this.currentDrawingScript = null;
        _this.isDualSymetryClicked = false;
        _this.isQuadSymetryClicked = false;
        return _this;
    }
    PersistentScroll_1 = PersistentScroll;
    Object.defineProperty(PersistentScroll, "Instance", {
        get: function () {
            return PersistentScroll_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    PersistentScroll.prototype.onLoad = function () {
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
    };
    PersistentScroll.prototype.start = function () {
        cc.game.addPersistRootNode(this.node);
        Global_1.default.instance.PersistentScrollInstance = this;
        PersistentScroll_1.instance = this;
        this.touchTilePos = new cc.Vec2(0, 0);
        this.onColorClicked();
        this.initialiseTool();
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.currentPensilSelection = Constant_1.Constant.ToolsTag.BRUSH;
        // this._instance = this;
        console.log("count = ", this.count);
        this.count++;
    };
    PersistentScroll.prototype.onDualSymetryCalled = function () {
        this.isDualSymetryClicked = true;
        this.isQuadSymetryClicked = false;
    };
    PersistentScroll.prototype.onQuadSymetryCalled = function () {
        this.isDualSymetryClicked = false;
        this.isQuadSymetryClicked = true;
    };
    PersistentScroll.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.prevTouch = point;
        this.isScrolled = false;
    };
    PersistentScroll.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        var Distance = this.prevTouch.y - point.y;
        for (var i = 0; i < this.TileArray.length; i++) {
            var element = this.TileArray[i];
            element.setPosition(element.getPosition().x, element.getPosition().y - Distance);
        }
        this.prevTouch = point;
        this.isScrolled = true;
    };
    PersistentScroll.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    PersistentScroll.prototype.update = function (dt) {
        if (!this.startUpdate)
            return;
        if (this.touchTilePos.y != 0 && !this.isScrolled) {
            var diffVal = (this.touchTilePos.y > 0 ? 1 : -1);
            var diff = 40 * diffVal;
            if (this.touchTilePos.y < 40 && this.touchTilePos.y > -40) {
                diff = this.touchTilePos.y;
                this.touchTilePos.y = 0;
            }
            else
                this.touchTilePos.y = this.touchTilePos.y - diff;
            for (var i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                var element = this.rightNode.getChildByName("scroll").children[i];
                element.setPosition(new cc.Vec2(0, element.getPosition().y - diff));
            }
        }
        var currentArray = this.FrameArray;
        this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);
        this.checkToRemoveFromBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkToRemoveFromTop(this.TileArray[0], currentArray);
    };
    PersistentScroll.prototype.addTile = function () {
        var posY = 0;
        this.CurrentTopIndexValue = 0;
        var currentArray = this.FrameArray;
        var lastTile = null;
        for (var i = 0; i < currentArray.length; i++) {
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[i], i);
            dataRef.setLocked(currentArray[i].isLocked);
            this.TileArray.push(data);
            posY = posY - data.height;
            this.CurrentBottomIndexValue = i;
            lastTile = data;
            // if(i==10)
            //     this.touchTilePos.y = data.getPosition().y;
        }
        this.CurrentBottomIndexValue++;
        this.startUpdate = true;
    };
    PersistentScroll.prototype.checkToRemoveFromBottom = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y + lastTile.height);
        if (pos < 0) {
            this.CurrentBottomIndexValue--;
            if (this.CurrentBottomIndexValue < 0)
                this.CurrentBottomIndexValue = currentArray.length - 1;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.pop();
        }
    };
    PersistentScroll.prototype.checkToRemoveFromTop = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y - lastTile.height);
        if (pos > this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue++;
            if (this.CurrentTopIndexValue >= currentArray.length)
                this.CurrentTopIndexValue = 0;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.shift();
        }
    };
    PersistentScroll.prototype.checkIfTileFilledOnBottom = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos > 0) {
            this.CurrentBottomIndexValue++;
            if (this.CurrentBottomIndexValue >= currentArray.length)
                this.CurrentBottomIndexValue = 0;
            var posY = lastTile.getPosition().y - lastTile.height;
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentBottomIndexValue], this.CurrentBottomIndexValue);
            dataRef.setLocked(currentArray[this.CurrentBottomIndexValue].isLocked);
            this.TileArray.push(data);
            this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        }
    };
    PersistentScroll.prototype.checkIfTileFilledOnTop = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos < this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue--;
            if (this.CurrentTopIndexValue < 0)
                this.CurrentTopIndexValue = currentArray.length - 1;
            var posY = lastTile.getPosition().y + lastTile.height;
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentTopIndexValue], this.CurrentTopIndexValue);
            dataRef.setLocked(currentArray[this.CurrentTopIndexValue].isLocked);
            this.TileArray.unshift(data);
            this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);
        }
    };
    PersistentScroll.prototype.onTileSelected = function (ref) {
        cc.audioEngine.playEffect(this.scrollAud, false);
        if (this.isScrolled) {
            for (var i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                var element = this.rightNode.getChildByName("scroll").children[i];
                var area = element.getBoundingBox();
                var pos = this.rightNode.convertToNodeSpaceAR(element.getPosition());
                var a = new cc.Rect(pos.x, pos.y - element.height * 0.5, element.width, element.height);
                var b = new cc.Vec2(this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().x, this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().y);
                b = this.rightNode.convertToNodeSpaceAR(b);
                if (a.contains(b)) {
                    this.isScrolled = false;
                    this.touchTilePos.y = element.getPosition().y;
                    var elementRef = element.getComponent(TileSelection_1.default);
                    if (!elementRef.isLocked) {
                        this.changePattern(elementRef);
                    }
                    else {
                        console.log("Selected is locked -- ritesh");
                    }
                }
            }
        }
        else {
            if (!ref.isLocked) {
                this.changePattern(ref);
            }
            else {
                console.log("Selected is locked -- ritesh");
            }
            this.touchTilePos.y = ref.node.getPosition().y;
        }
    };
    PersistentScroll.prototype.changePattern = function (element) {
        this.currentPatternFrame = element.patternFrame;
        this.currentPatternFrameIndex = element.index;
        this.changeParticle(element.index);
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
            this.currentPensilSelection = this.prevPensilSelection;
            this.highLightTool();
        }
    };
    PersistentScroll.prototype.onColorClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.COLOR;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].ColorFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].color;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
        var element1 = this.ToolArray[this.currentPensilSelection];
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            element1.getChildByName("mask").getChildByName("bg").color = this.currentPatternFrame; //CommonFun.instance.hexToRgb(this.currentPatternFrame);
    };
    PersistentScroll.prototype.onPatternClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.PATTERN;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].PatternFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].PatternFrame;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
    };
    PersistentScroll.prototype.onSparkleClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.SPARKLE;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].SparkleFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].SparkleFrame;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
    };
    PersistentScroll.prototype.changeParticle = function (index) {
        //set color of particle
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR) {
            this.particleEffect.spriteFrame = this.FrameArray[index].colorParticleFrame;
            this.particleEffect.startColor = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
            this.particleEffect.endColor = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
        }
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN) {
            this.particleEffect.spriteFrame = this.FrameArray[index].PatternParticleFrame;
            this.particleEffect.startColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
        }
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE) {
            this.particleEffect.spriteFrame = this.FrameArray[index].SparkleParticleFrame;
            this.particleEffect.startColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
        }
        //set color of tool
        var element1 = this.ToolArray[this.currentPensilSelection];
        this.currentToolIndex = index;
        this.updateColorOfTool(element1, this.currentPensilSelection, index);
    };
    PersistentScroll.prototype.initialiseTool = function () {
        this.highLightTool();
        for (var i = 0; i < this.ToolArray.length; i++) {
            var element1 = this.ToolArray[i];
            this.initColorOfTool(element1, i, 0);
        }
    };
    PersistentScroll.prototype.onToolsClicked = function (ref, tag) {
        this.prevPensilSelection = this.currentPensilSelection;
        this.currentPensilSelection = Constant_1.Constant.ToolsTag[tag];
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
            cc.audioEngine.playEffect(this.eraserAud, false);
        }
        else {
            cc.audioEngine.playEffect(this.toolsAud, false);
        }
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            this.onColorClicked();
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN)
            this.onPatternClicked();
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL)
            this.onSparkleClicked();
        this.highLightTool();
        this.updateColorOfTool(ref.target, this.currentPensilSelection, this.currentToolIndex);
    };
    PersistentScroll.prototype.highLightTool = function () {
        for (var i = 0; i < this.ToolArray.length; i++) {
            var element = this.ToolArray[i];
            element.scale = 1;
            if (i != Constant_1.Constant.ToolsTag.ERASER) {
                element.getChildByName("mask").getChildByName("layer").active = false;
                element.getChildByName("highLight1").active = false;
            }
            element.getChildByName("highLight").active = false;
            if (i == this.currentPensilSelection) {
                if (i != Constant_1.Constant.ToolsTag.ERASER) {
                    element.getChildByName("mask").getChildByName("layer").active = false;
                    element.getChildByName("highLight1").active = true;
                }
                element.getChildByName("highLight").active = true;
                element.scale = 1.1;
            }
        }
    };
    PersistentScroll.prototype.initColorOfTool = function (element, value, index) {
        if (value == Constant_1.Constant.ToolsTag.BRUSH
        // || 
        // value == Constant.ToolsTag.PENCIL ||
        //     value == Constant.ToolsTag.BRUSH2||
        //         value == Constant.ToolsTag.SPRAY||
        //             value == Constant.ToolsTag.PAINT
        )
            element.getChildByName("mask").getChildByName("bg").color = this.TileSelectionListArray[0].ColorFrameListArray[index].color; //CommonFun.instance.hexToRgb(this.TileSelectionListArray[0].ColorFrameListArray[index].color);
        if (value == Constant_1.Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[2].SparkleFrameListArray[index].SparkleFrame;
        if (value == Constant_1.Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[1].PatternFrameListArray[index].PatternFrame;
    };
    PersistentScroll.prototype.updateColorOfTool = function (element, value, index) {
        if (value == Constant_1.Constant.ToolsTag.BRUSH ||
            value == Constant_1.Constant.ToolsTag.PENCIL ||
            value == Constant_1.Constant.ToolsTag.BRUSH2 ||
            value == Constant_1.Constant.ToolsTag.SPRAY ||
            value == Constant_1.Constant.ToolsTag.PAINT)
            element.getChildByName("mask").getChildByName("bg").color = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
        if (value == Constant_1.Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].SparkleFrame;
        if (value == Constant_1.Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].PatternFrame;
    };
    PersistentScroll.prototype.initialiseDrawing = function (ref) {
        this.currentDrawingScript = ref;
    };
    PersistentScroll.prototype.onUndoClicked = function () {
        cc.audioEngine.playEffect(this.eraserAud, false);
        if (this.currentDrawingScript.currentstensil.length > 0) {
            var data = this.currentDrawingScript.currentstensil[this.currentDrawingScript.currentstensil.length - 1];
            for (var i = 0; i < this.currentDrawingScript.drawingDataArray.length; i++) {
                for (var j = 0; j < this.currentDrawingScript.drawingDataArray[i].length; j++) {
                    if (data.child == this.currentDrawingScript.drawingDataArray[i][j].child)
                        this.currentDrawingScript.drawingDataArray[i].pop();
                }
            }
            data.parent.removeChild(data.child);
            this.currentDrawingScript.currentstensil.pop();
        }
    };
    var PersistentScroll_1;
    PersistentScroll.instance = null;
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "tickBtn", void 0);
    __decorate([
        property(TileSelectionList)
    ], PersistentScroll.prototype, "TileSelectionListArray", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "rightNode", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "ToolArray", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "DualSymetry", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "QuadSymetry", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], PersistentScroll.prototype, "particleEffect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "cameraAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "toolsAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "glowAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "scrollAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "eraserAud", void 0);
    PersistentScroll = PersistentScroll_1 = __decorate([
        ccclass
    ], PersistentScroll);
    return PersistentScroll;
}(cc.Component));
exports.default = PersistentScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9HYW1lUGxheS9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0RBQStDO0FBRS9DLGtEQUFpRDtBQUNqRCw4Q0FBeUM7QUFDekMsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxVQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHdkIsdUJBQWtCLEdBQW1CLElBQUksQ0FBQztRQUcxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUN2QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7OERBQ3ZDO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7b0RBQzlCO0lBUmYsY0FBYztRQURuQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7T0FDcEIsY0FBYyxDQVNuQjtJQUFELHFCQUFDO0NBVEQsQUFTQyxJQUFBO0FBRUQ7SUFBQTtRQUVJLGlCQUFZLEdBQW1CLElBQUksQ0FBQztRQUdwQyx5QkFBb0IsR0FBbUIsSUFBSSxDQUFDO1FBRzVD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QUMsSUFBSSxDQUFDO3lEQUNDO0lBTW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NERBQ2E7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3VEQUNRO0lBckNkLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBNmZwQztJQUFELHVCQUFDO0NBN2ZELEFBNmZDLENBN2Y2QyxFQUFFLENBQUMsU0FBUyxHQTZmekQ7a0JBN2ZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uLy4uL0NvbW1vbi9Db25maWdDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi8uLi9Db21tb24vQ29uc3RhbnRcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL0NvbW1vbi9HbG9iYWxcIjtcbmltcG9ydCBUaWxlU2VsZWN0aW9uIGZyb20gXCIuLi9UaWxlU2VsZWN0aW9uXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiQ29sb3JGcmFtZUxpc3RcIilcbmNsYXNzIENvbG9yRnJhbWVMaXN0IHtcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImNvbG9yXCIgfSlcbiAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiY29sb3JQYXJ0aWNsZUZyYW1lXCIgfSlcbiAgICBjb2xvclBhcnRpY2xlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwibG9ja2VkXCIgfSlcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xufVxuQGNjY2xhc3MoXCJQYXR0ZXJuRnJhbWVMaXN0XCIpXG5jbGFzcyBQYXR0ZXJuRnJhbWVMaXN0IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuRnJhbWVcIiB9KVxuICAgIFBhdHRlcm5GcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiUGF0dGVyblBhcnRpY2xlRnJhbWVcIiB9KVxuICAgIFBhdHRlcm5QYXJ0aWNsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImxvY2tlZFwiIH0pXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcbn1cbkBjY2NsYXNzKFwiU3BhcmtsZUZyYW1lTGlzdFwiKVxuY2xhc3MgU3BhcmtsZUZyYW1lTGlzdCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiU3BhcmtsZUZyYW1lXCIgfSlcbiAgICBTcGFya2xlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNwYXJrbGVQYXJ0aWNsZUZyYW1lXCIgfSlcbiAgICBTcGFya2xlUGFydGljbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJsb2NrZWRcIiB9KVxuICAgIGlzTG9ja2VkID0gZmFsc2U7XG59XG5cbkBjY2NsYXNzKFwiVGlsZVNlbGVjdGlvbkxpc3RcIilcbmNsYXNzIFRpbGVTZWxlY3Rpb25MaXN0IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiRHJhd2luZ21hc2tcIiB9KVxuICAgIERyYXdpbmdtYXNrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNjcm9sbFNlbGVjdGlvblwiIH0pXG4gICAgU2Nyb2xsU2VsZWN0aW9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ29sb3JGcmFtZUxpc3QsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiQ29sb3JGcmFtZUxpc3RBcnJheVwiIH0pXG4gICAgQ29sb3JGcmFtZUxpc3RBcnJheSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGF0dGVybkZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuRnJhbWVMaXN0QXJyYXlcIiB9KVxuICAgIFBhdHRlcm5GcmFtZUxpc3RBcnJheSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3BhcmtsZUZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJTcGFya2xlRnJhbWVMaXN0QXJyYXlcIiB9KVxuICAgIFNwYXJrbGVGcmFtZUxpc3RBcnJheSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJ0eXBlXCIgfSlcbiAgICB0eXBlID0gXCJcIjtcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTY3JvbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlja0J0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGlsZVNlbGVjdGlvbkxpc3QpXG4gICAgVGlsZVNlbGVjdGlvbkxpc3RBcnJheTogVGlsZVNlbGVjdGlvbkxpc3RbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmlnaHROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFRvb2xBcnJheSA9IFtdO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBEdWFsU3ltZXRyeSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgUXVhZFN5bWV0cnkgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLkNvbG9yKVxuICAgIC8vIGNvbG9yUGlja2VyOiBjYy5Db2xvcltdID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBwYXJ0aWNsZUVmZmVjdDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjYW1lcmFBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICB0b29sc0F1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGdsb3dBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzY3JvbGxBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBlcmFzZXJBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBDdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA9IDA7XG4gICAgQ3VycmVudFRvcEluZGV4VmFsdWUgPSAwO1xuXG4gICAgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBGcmFtZUFycmF5ID0gW107XG4gICAgVGlsZUFycmF5ID0gW107XG5cbiAgICBzdGFydFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlzU2Nyb2xsZWQgPSBmYWxzZTtcbiAgICBwcmV2VG91Y2ggPSBuZXcgY2MuVmVjMjtcbiAgICB0b3VjaFRpbGVQb3MgPSBuZXcgY2MuVmVjMigwLCAwKTtcblxuICAgIGN1cnJlbnRUaWxlSW5kZXggPSAtMTtcbiAgICBwcmV2UGVuc2lsU2VsZWN0aW9uID0gMDtcbiAgICBjdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gMDtcbiAgICBjdXJyZW50VG9vbEluZGV4ID0gMDtcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lID0gbnVsbDtcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSAwO1xuXG4gICAgY3VycmVudERyYXdpbmdTY3JpcHQgPSBudWxsO1xuXG4gICAgaXNEdWFsU3ltZXRyeUNsaWNrZWQgPSBmYWxzZTtcbiAgICBpc1F1YWRTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFBlcnNpc3RlbnRTY3JvbGwgPSBudWxsO1xuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBQZXJzaXN0ZW50U2Nyb2xsLmluc3RhbmNlXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIFBlcnNpc3RlbnRTY3JvbGwuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudG91Y2hUaWxlUG9zID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgICAgIHRoaXMub25Db2xvckNsaWNrZWQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlVG9vbCgpO1xuXG5cbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hCZWdpbiwgdGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0g7XG5cbiAgICAgICAgLy8gdGhpcy5faW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgPSBcIiwgdGhpcy5jb3VudCk7XG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG5cbiAgICBvbkR1YWxTeW1ldHJ5Q2FsbGVkKCkge1xuICAgICAgICB0aGlzLmlzRHVhbFN5bWV0cnlDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1F1YWRTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBvblF1YWRTeW1ldHJ5Q2FsbGVkKCkge1xuICAgICAgICB0aGlzLmlzRHVhbFN5bWV0cnlDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgX29uVG91Y2hCZWdpbihldmVudCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XG4gICAgICAgIHRoaXMucHJldlRvdWNoID0gcG9pbnQ7XG5cbiAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX29uVG91Y2hNb3ZlZChldmVudCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XG5cbiAgICAgICAgbGV0IERpc3RhbmNlID0gdGhpcy5wcmV2VG91Y2gueSAtIHBvaW50Lnk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRpbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuVGlsZUFycmF5W2ldO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRQb3NpdGlvbihlbGVtZW50LmdldFBvc2l0aW9uKCkueCwgZWxlbWVudC5nZXRQb3NpdGlvbigpLnkgLSBEaXN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcblxuICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhcnRVcGRhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cblxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbGVQb3MueSAhPSAwICYmICF0aGlzLmlzU2Nyb2xsZWQpIHtcbiAgICAgICAgICAgIGxldCBkaWZmVmFsID0gKHRoaXMudG91Y2hUaWxlUG9zLnkgPiAwID8gMSA6IC0xKTtcbiAgICAgICAgICAgIGxldCBkaWZmID0gNDAgKiBkaWZmVmFsO1xuICAgICAgICAgICAgaWYgKHRoaXMudG91Y2hUaWxlUG9zLnkgPCA0MCAmJiB0aGlzLnRvdWNoVGlsZVBvcy55ID4gLTQwKSB7XG4gICAgICAgICAgICAgICAgZGlmZiA9IHRoaXMudG91Y2hUaWxlUG9zLnk7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IHRoaXMudG91Y2hUaWxlUG9zLnkgLSBkaWZmO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIGVsZW1lbnQuZ2V0UG9zaXRpb24oKS55IC0gZGlmZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gdGhpcy5GcmFtZUFycmF5O1xuICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Cb3R0b20odGhpcy5UaWxlQXJyYXlbdGhpcy5UaWxlQXJyYXkubGVuZ3RoIC0gMV0sIGN1cnJlbnRBcnJheSk7XG4gICAgICAgIHRoaXMuY2hlY2tJZlRpbGVGaWxsZWRPblRvcCh0aGlzLlRpbGVBcnJheVswXSwgY3VycmVudEFycmF5KTtcblxuXG4gICAgICAgIHRoaXMuY2hlY2tUb1JlbW92ZUZyb21Cb3R0b20odGhpcy5UaWxlQXJyYXlbdGhpcy5UaWxlQXJyYXkubGVuZ3RoIC0gMV0sIGN1cnJlbnRBcnJheSk7XG4gICAgICAgIHRoaXMuY2hlY2tUb1JlbW92ZUZyb21Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XG4gICAgfVxuXG4gICAgYWRkVGlsZSgpIHtcbiAgICAgICAgdmFyIHBvc1kgPSAwO1xuICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlID0gMDtcblxuICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gdGhpcy5GcmFtZUFycmF5O1xuICAgICAgICBsZXQgbGFzdFRpbGUgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxuICAgICAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuYWRkQ2hpbGQoZGF0YSk7XG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YVJlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYoZGF0YSk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVtpXSwgaSk7XG4gICAgICAgICAgICBkYXRhUmVmLnNldExvY2tlZChjdXJyZW50QXJyYXlbaV0uaXNMb2NrZWQpO1xuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkucHVzaChkYXRhKTtcblxuICAgICAgICAgICAgcG9zWSA9IHBvc1kgLSBkYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSBpO1xuICAgICAgICAgICAgbGFzdFRpbGUgPSBkYXRhO1xuXG4gICAgICAgICAgICAvLyBpZihpPT0xMClcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gZGF0YS5nZXRQb3NpdGlvbigpLnk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSsrO1xuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGVja1RvUmVtb3ZlRnJvbUJvdHRvbShsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkgKyBsYXN0VGlsZS5oZWlnaHQpO1xuICAgICAgICBpZiAocG9zIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZS0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPCAwKVxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUNoaWxkKGxhc3RUaWxlKTtcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tUb1JlbW92ZUZyb21Ub3AobGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xuICAgICAgICBsZXQgcG9zID0gQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRUb0NlbnRlcllQb3MobGFzdFRpbGUuZ2V0UG9zaXRpb24oKS55IC0gbGFzdFRpbGUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHBvcyA+IHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPj0gY3VycmVudEFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUNoaWxkKGxhc3RUaWxlKTtcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0lmVGlsZUZpbGxlZE9uQm90dG9tKGxhc3RUaWxlLCBjdXJyZW50QXJyYXkpIHtcbiAgICAgICAgbGV0IHBvcyA9IENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0VG9DZW50ZXJZUG9zKGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSk7XG4gICAgICAgIGlmIChwb3MgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlKys7XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA+PSBjdXJyZW50QXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSAwO1xuXG4gICAgICAgICAgICBsZXQgcG9zWSA9IGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSAtIGxhc3RUaWxlLmhlaWdodDtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxuICAgICAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuYWRkQ2hpbGQoZGF0YSk7XG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YVJlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYoZGF0YSk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlXSwgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSk7XG4gICAgICAgICAgICBkYXRhUmVmLnNldExvY2tlZChjdXJyZW50QXJyYXlbdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZV0uaXNMb2NrZWQpO1xuXG4gICAgICAgICAgICB0aGlzLlRpbGVBcnJheS5wdXNoKGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Cb3R0b20odGhpcy5UaWxlQXJyYXlbdGhpcy5UaWxlQXJyYXkubGVuZ3RoIC0gMV0sIGN1cnJlbnRBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tJZlRpbGVGaWxsZWRPblRvcChsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkpO1xuICAgICAgICBpZiAocG9zIDwgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlLS07XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICBsZXQgcG9zWSA9IGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSArIGxhc3RUaWxlLmhlaWdodDtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxuICAgICAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuYWRkQ2hpbGQoZGF0YSk7XG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YVJlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYoZGF0YSk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlXSwgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSk7XG4gICAgICAgICAgICBkYXRhUmVmLnNldExvY2tlZChjdXJyZW50QXJyYXlbdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZV0uaXNMb2NrZWQpO1xuXG4gICAgICAgICAgICB0aGlzLlRpbGVBcnJheS51bnNoaWZ0KGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uVGlsZVNlbGVjdGVkKHJlZikge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Nyb2xsQXVkLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IGFyZWEgPSBlbGVtZW50LmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMucmlnaHROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVsZW1lbnQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgY2MuUmVjdChwb3MueCwgcG9zLnkgLSBlbGVtZW50LmhlaWdodCAqIDAuNSwgZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGIgPSBuZXcgY2MuVmVjMih0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikuZ2V0UG9zaXRpb24oKS54LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikuZ2V0UG9zaXRpb24oKS55KTtcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5yaWdodE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoYik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYS5jb250YWlucyhiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IGVsZW1lbnQuZ2V0UG9zaXRpb24oKS55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlZiA9IChlbGVtZW50LmdldENvbXBvbmVudChUaWxlU2VsZWN0aW9uKSBhcyBUaWxlU2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50UmVmLmlzTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4oZWxlbWVudFJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlzIGxvY2tlZCAtLSByaXRlc2hcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVmLmlzTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXR0ZXJuKHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlzIGxvY2tlZCAtLSByaXRlc2hcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IHJlZi5ub2RlLmdldFBvc2l0aW9uKCkueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVBhdHRlcm4oZWxlbWVudCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSBlbGVtZW50LnBhdHRlcm5GcmFtZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSBlbGVtZW50LmluZGV4O1xuICAgICAgICB0aGlzLmNoYW5nZVBhcnRpY2xlKGVsZW1lbnQuaW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPSB0aGlzLnByZXZQZW5zaWxTZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFRvb2woKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sb3JDbGlja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbGVJbmRleCA9IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SO1xuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5Db2xvckZyYW1lTGlzdEFycmF5O1xuICAgICAgICB0aGlzLlRpbGVBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmFkZFRpbGUoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbMF0uY29sb3I7XG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcblxuICAgICAgICB0aGlzLmNoYW5nZVBhcnRpY2xlKDApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5Ub29sQXJyYXlbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTCB8fFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQUkFZIHx8XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXG4gICAgICAgICAgICBlbGVtZW50MS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZS8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSk7XG5cbiAgICB9XG4gICAgb25QYXR0ZXJuQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbGVJbmRleCA9IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk47XG4gICAgICAgIHRoaXMuRnJhbWVBcnJheSA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVt0aGlzLmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheTtcbiAgICAgICAgdGhpcy5UaWxlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5hZGRUaWxlKCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gdGhpcy5GcmFtZUFycmF5WzBdLlBhdHRlcm5GcmFtZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSAwO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoMCk7XG4gICAgfVxuICAgIG9uU3BhcmtsZUNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlSW5kZXggPSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFO1xuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TcGFya2xlRnJhbWVMaXN0QXJyYXk7XG4gICAgICAgIHRoaXMuVGlsZUFycmF5ID0gW107XG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuYWRkVGlsZSgpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSA9IHRoaXMuRnJhbWVBcnJheVswXS5TcGFya2xlRnJhbWU7XG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcblxuICAgICAgICB0aGlzLmNoYW5nZVBhcnRpY2xlKDApO1xuICAgIH1cblxuICAgIGNoYW5nZVBhcnRpY2xlKGluZGV4KSB7XG4gICAgICAgIC8vc2V0IGNvbG9yIG9mIHBhcnRpY2xlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yUGFydGljbGVGcmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3RhcnRDb2xvciA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3QuZW5kQ29sb3IgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5QYXR0ZXJuUGFydGljbGVGcmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3RhcnRDb2xvciA9IENvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LmVuZENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlNwYXJrbGVQYXJ0aWNsZUZyYW1lO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zdGFydENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3QuZW5kQ29sb3IgPSBDb21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IoXCIjRkZGRkZGXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXQgY29sb3Igb2YgdG9vbFxuICAgICAgICBjb25zdCBlbGVtZW50MSA9IHRoaXMuVG9vbEFycmF5W3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl07XG4gICAgICAgIHRoaXMuY3VycmVudFRvb2xJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yT2ZUb29sKGVsZW1lbnQxLCB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24sIGluZGV4KTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlVG9vbCgpIHtcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRUb29sKCk7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG9vbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50MSA9IHRoaXMuVG9vbEFycmF5W2ldO1xuICAgICAgICAgICAgdGhpcy5pbml0Q29sb3JPZlRvb2woZWxlbWVudDEsIGksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub29sc0NsaWNrZWQocmVmLCB0YWcpIHtcblxuICAgICAgICB0aGlzLnByZXZQZW5zaWxTZWxlY3Rpb24gPSB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb247XG4gICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IENvbnN0YW50LlRvb2xzVGFnW3RhZ107XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXJhc2VyQXVkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudG9vbHNBdWQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIgfHxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSB8fFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxuICAgICAgICAgICAgdGhpcy5vbkNvbG9yQ2xpY2tlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTilcbiAgICAgICAgICAgIHRoaXMub25QYXR0ZXJuQ2xpY2tlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcbiAgICAgICAgICAgIHRoaXMub25TcGFya2xlQ2xpY2tlZCgpO1xuXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0VG9vbCgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JPZlRvb2wocmVmLnRhcmdldCwgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uLCB0aGlzLmN1cnJlbnRUb29sSW5kZXgpO1xuICAgIH1cblxuICAgIGhpZ2hMaWdodFRvb2woKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub29sQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLlRvb2xBcnJheVtpXTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2NhbGUgPSAxO1xuICAgICAgICAgICAgaWYgKGkgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0MVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodDFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2NhbGUgPSAxLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0Q29sb3JPZlRvb2woZWxlbWVudCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSFxuICAgICAgICAgICAgLy8gfHwgXG4gICAgICAgICAgICAvLyB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcbiAgICAgICAgICAgIC8vICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDJ8fFxuICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWXx8XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVFxuICAgICAgICApXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzBdLkNvbG9yRnJhbWVMaXN0QXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzBdLkNvbG9yRnJhbWVMaXN0QXJyYXlbaW5kZXhdLmNvbG9yKTtcblxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbMl0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2luZGV4XS5TcGFya2xlRnJhbWU7XG5cbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4pXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzFdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtpbmRleF0uUGF0dGVybkZyYW1lO1xuXG4gICAgfVxuICAgIHVwZGF0ZUNvbG9yT2ZUb29sKGVsZW1lbnQsIHZhbHVlLCBpbmRleCkge1xuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcbiAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTCB8fFxuICAgICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSB8fFxuICAgICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvci8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMKVxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uU3BhcmtsZUZyYW1lO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOKVxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uUGF0dGVybkZyYW1lO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VEcmF3aW5nKHJlZikge1xuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0ID0gcmVmO1xuICAgIH1cblxuICAgIG9uVW5kb0NsaWNrZWQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5lcmFzZXJBdWQsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsW3RoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5kcmF3aW5nRGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmRyYXdpbmdEYXRhQXJyYXlbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY2hpbGQgPT0gdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5kcmF3aW5nRGF0YUFycmF5W2ldW2pdLmNoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5kcmF3aW5nRGF0YUFycmF5W2ldLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgZGF0YS5wYXJlbnQucmVtb3ZlQ2hpbGQoZGF0YS5jaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
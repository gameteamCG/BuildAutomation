
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
        _this.questionvo = null;
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
        _this.currentPensilSelection = 1;
        _this.currentToolIndex = 1;
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
        this.currentPensilSelection = Constant_1.Constant.ToolsTag.PENCIL;
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
    PersistentScroll.prototype.soundbutton = function () {
        var _this = this;
        this.node.getChildByName("panel").getChildByName("sound").getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionvo, false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("panel").getChildByName("sound").getComponent(cc.Button).interactable = true;
        }, this.questionvo.duration + 0.1);
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
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "questionvo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXFBlcnNpc3RlbnRcXFBlcnNpc3RlbnRTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0RBQStDO0FBRS9DLGtEQUFpRDtBQUNqRCw4Q0FBeUM7QUFDekMsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxVQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHdkIsdUJBQWtCLEdBQW1CLElBQUksQ0FBQztRQUcxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUN2QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7OERBQ3ZDO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7b0RBQzlCO0lBUmYsY0FBYztRQURuQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7T0FDcEIsY0FBYyxDQVNuQjtJQUFELHFCQUFDO0NBVEQsQUFTQyxJQUFBO0FBRUQ7SUFBQTtRQUVJLGlCQUFZLEdBQW1CLElBQUksQ0FBQztRQUdwQyx5QkFBb0IsR0FBbUIsSUFBSSxDQUFD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QyxPQUFPO09BQ2EsZ0JBQWdCLENBMGdCcEM7SUFBRCx1QkFBQztDQTFnQkQsQUEwZ0JDLENBMWdCNkMsRUFBRSxDQUFDLFNBQVMsR0EwZ0J6RDtrQkExZ0JvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi8uLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi8uLi9Db21tb24vQ29uZmlnQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi8uLi9Db21tb24vQ29uc3RhbnRcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vQ29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgVGlsZVNlbGVjdGlvbiBmcm9tIFwiLi4vVGlsZVNlbGVjdGlvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQ29sb3JGcmFtZUxpc3RcIilcclxuY2xhc3MgQ29sb3JGcmFtZUxpc3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJjb2xvclwiIH0pXHJcbiAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImNvbG9yUGFydGljbGVGcmFtZVwiIH0pXHJcbiAgICBjb2xvclBhcnRpY2xlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImxvY2tlZFwiIH0pXHJcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xyXG59XHJcbkBjY2NsYXNzKFwiUGF0dGVybkZyYW1lTGlzdFwiKVxyXG5jbGFzcyBQYXR0ZXJuRnJhbWVMaXN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlBhdHRlcm5GcmFtZVwiIH0pXHJcbiAgICBQYXR0ZXJuRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuUGFydGljbGVGcmFtZVwiIH0pXHJcbiAgICBQYXR0ZXJuUGFydGljbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwibG9ja2VkXCIgfSlcclxuICAgIGlzTG9ja2VkID0gZmFsc2U7XHJcbn1cclxuQGNjY2xhc3MoXCJTcGFya2xlRnJhbWVMaXN0XCIpXHJcbmNsYXNzIFNwYXJrbGVGcmFtZUxpc3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiU3BhcmtsZUZyYW1lXCIgfSlcclxuICAgIFNwYXJrbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNwYXJrbGVQYXJ0aWNsZUZyYW1lXCIgfSlcclxuICAgIFNwYXJrbGVQYXJ0aWNsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJsb2NrZWRcIiB9KVxyXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuQGNjY2xhc3MoXCJUaWxlU2VsZWN0aW9uTGlzdFwiKVxyXG5jbGFzcyBUaWxlU2VsZWN0aW9uTGlzdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiRHJhd2luZ21hc2tcIiB9KVxyXG4gICAgRHJhd2luZ21hc2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNjcm9sbFNlbGVjdGlvblwiIH0pXHJcbiAgICBTY3JvbGxTZWxlY3Rpb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ29sb3JGcmFtZUxpc3QsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiQ29sb3JGcmFtZUxpc3RBcnJheVwiIH0pXHJcbiAgICBDb2xvckZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGF0dGVybkZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuRnJhbWVMaXN0QXJyYXlcIiB9KVxyXG4gICAgUGF0dGVybkZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3BhcmtsZUZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJTcGFya2xlRnJhbWVMaXN0QXJyYXlcIiB9KVxyXG4gICAgU3BhcmtsZUZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJ0eXBlXCIgfSlcclxuICAgIHR5cGUgPSBcIlwiO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aWNrQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVGlsZVNlbGVjdGlvbkxpc3QpXHJcbiAgICBUaWxlU2VsZWN0aW9uTGlzdEFycmF5OiBUaWxlU2VsZWN0aW9uTGlzdFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByaWdodE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVG9vbEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEdWFsU3ltZXRyeSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFF1YWRTeW1ldHJ5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ29sb3IpXHJcbiAgICAvLyBjb2xvclBpY2tlcjogY2MuQ29sb3JbXSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgcGFydGljbGVFZmZlY3Q6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2FtZXJhQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHRvb2xzQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdsb3dBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2Nyb2xsQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGVyYXNlckF1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcXVlc3Rpb252bzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBDdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA9IDA7XHJcbiAgICBDdXJyZW50VG9wSW5kZXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgRnJhbWVBcnJheSA9IFtdO1xyXG4gICAgVGlsZUFycmF5ID0gW107XHJcblxyXG4gICAgc3RhcnRVcGRhdGUgPSBmYWxzZTtcclxuICAgIGlzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAgIHByZXZUb3VjaCA9IG5ldyBjYy5WZWMyO1xyXG4gICAgdG91Y2hUaWxlUG9zID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgY3VycmVudFRpbGVJbmRleCA9IC0xO1xyXG4gICAgcHJldlBlbnNpbFNlbGVjdGlvbiA9IDA7XHJcbiAgICBjdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gMTtcclxuICAgIGN1cnJlbnRUb29sSW5kZXggPSAxO1xyXG4gICAgY3VycmVudFBhdHRlcm5GcmFtZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSAwO1xyXG5cclxuICAgIGN1cnJlbnREcmF3aW5nU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgICBpc0R1YWxTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUGVyc2lzdGVudFNjcm9sbCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBQZXJzaXN0ZW50U2Nyb2xsLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBQZXJzaXN0ZW50U2Nyb2xsLmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgICAgICB0aGlzLm9uQ29sb3JDbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlVG9vbCgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hCZWdpbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5faW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50ID0gXCIsIHRoaXMuY291bnQpO1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBvbkR1YWxTeW1ldHJ5Q2FsbGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNEdWFsU3ltZXRyeUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uUXVhZFN5bWV0cnlDYWxsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0R1YWxTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfb25Ub3VjaEJlZ2luKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hNb3ZlZChldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG5cclxuICAgICAgICBsZXQgRGlzdGFuY2UgPSB0aGlzLnByZXZUb3VjaC55IC0gcG9pbnQueTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRpbGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5UaWxlQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24oZWxlbWVudC5nZXRQb3NpdGlvbigpLngsIGVsZW1lbnQuZ2V0UG9zaXRpb24oKS55IC0gRGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG5cclxuICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydFVwZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaWxlUG9zLnkgIT0gMCAmJiAhdGhpcy5pc1Njcm9sbGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWZmVmFsID0gKHRoaXMudG91Y2hUaWxlUG9zLnkgPiAwID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSA0MCAqIGRpZmZWYWw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoVGlsZVBvcy55IDwgNDAgJiYgdGhpcy50b3VjaFRpbGVQb3MueSA+IC00MCkge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IHRoaXMudG91Y2hUaWxlUG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gdGhpcy50b3VjaFRpbGVQb3MueSAtIGRpZmY7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgZWxlbWVudC5nZXRQb3NpdGlvbigpLnkgLSBkaWZmKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gdGhpcy5GcmFtZUFycmF5O1xyXG4gICAgICAgIHRoaXMuY2hlY2tJZlRpbGVGaWxsZWRPbkJvdHRvbSh0aGlzLlRpbGVBcnJheVt0aGlzLlRpbGVBcnJheS5sZW5ndGggLSAxXSwgY3VycmVudEFycmF5KTtcclxuICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrVG9SZW1vdmVGcm9tQm90dG9tKHRoaXMuVGlsZUFycmF5W3RoaXMuVGlsZUFycmF5Lmxlbmd0aCAtIDFdLCBjdXJyZW50QXJyYXkpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tUb1JlbW92ZUZyb21Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlsZSgpIHtcclxuICAgICAgICB2YXIgcG9zWSA9IDA7XHJcbiAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QXJyYXkgPSB0aGlzLkZyYW1lQXJyYXk7XHJcbiAgICAgICAgbGV0IGxhc3RUaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5hZGRDaGlsZChkYXRhKTtcclxuICAgICAgICAgICAgZGF0YS5zZXRQb3NpdGlvbigwLCBwb3NZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldFRpbGVTZWxlY3Rpb25DbGFzc1JlZihkYXRhKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVtpXSwgaSk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuc2V0TG9ja2VkKGN1cnJlbnRBcnJheVtpXS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBwb3NZID0gcG9zWSAtIGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlID0gaTtcclxuICAgICAgICAgICAgbGFzdFRpbGUgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYoaT09MTApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gZGF0YS5nZXRQb3NpdGlvbigpLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUrKztcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1RvUmVtb3ZlRnJvbUJvdHRvbShsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0VG9DZW50ZXJZUG9zKGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSArIGxhc3RUaWxlLmhlaWdodCk7XHJcbiAgICAgICAgaWYgKHBvcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUNoaWxkKGxhc3RUaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVG9SZW1vdmVGcm9tVG9wKGxhc3RUaWxlLCBjdXJyZW50QXJyYXkpIHtcclxuICAgICAgICBsZXQgcG9zID0gQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRUb0NlbnRlcllQb3MobGFzdFRpbGUuZ2V0UG9zaXRpb24oKS55IC0gbGFzdFRpbGUuaGVpZ2h0KTtcclxuICAgICAgICBpZiAocG9zID4gdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPj0gY3VycmVudEFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVDaGlsZChsYXN0VGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZUaWxlRmlsbGVkT25Cb3R0b20obGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIGlmIChwb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPj0gY3VycmVudEFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvc1kgPSBsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkgLSBsYXN0VGlsZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5hZGRDaGlsZChkYXRhKTtcclxuICAgICAgICAgICAgZGF0YS5zZXRQb3NpdGlvbigwLCBwb3NZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldFRpbGVTZWxlY3Rpb25DbGFzc1JlZihkYXRhKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlXSwgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuc2V0TG9ja2VkKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlXS5pc0xvY2tlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlRpbGVBcnJheS5wdXNoKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja0lmVGlsZUZpbGxlZE9uQm90dG9tKHRoaXMuVGlsZUFycmF5W3RoaXMuVGlsZUFycmF5Lmxlbmd0aCAtIDFdLCBjdXJyZW50QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrSWZUaWxlRmlsbGVkT25Ub3AobGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIGlmIChwb3MgPCB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zWSA9IGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSArIGxhc3RUaWxlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TY3JvbGxTZWxlY3Rpb25QcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmFkZENoaWxkKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0VGlsZVNlbGVjdGlvbkNsYXNzUmVmKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuaW5pdGlhbGlzZURhdGEoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudFRvcEluZGV4VmFsdWVdLCB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5zZXRMb2NrZWQoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudFRvcEluZGV4VmFsdWVdLmlzTG9ja2VkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnVuc2hpZnQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRpbGVTZWxlY3RlZChyZWYpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Nyb2xsQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJlYSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnJpZ2h0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbGVtZW50LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgY2MuUmVjdChwb3MueCwgcG9zLnkgLSBlbGVtZW50LmhlaWdodCAqIDAuNSwgZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiID0gbmV3IGNjLlZlYzIodGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5nZXRDaGlsZEJ5TmFtZShcInBvaW50XCIpLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgICAgIGIgPSB0aGlzLnJpZ2h0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYS5jb250YWlucyhiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hUaWxlUG9zLnkgPSBlbGVtZW50LmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlZiA9IChlbGVtZW50LmdldENvbXBvbmVudChUaWxlU2VsZWN0aW9uKSBhcyBUaWxlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRSZWYuaXNMb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXR0ZXJuKGVsZW1lbnRSZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBpcyBsb2NrZWQgLS0gcml0ZXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXJlZi5pc0xvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXR0ZXJuKHJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlzIGxvY2tlZCAtLSByaXRlc2hcIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IHJlZi5ub2RlLmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGF0dGVybihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gZWxlbWVudC5wYXR0ZXJuRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSBlbGVtZW50LmluZGV4O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoZWxlbWVudC5pbmRleCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IHRoaXMucHJldlBlbnNpbFNlbGVjdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRUb29sKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sb3JDbGlja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZUluZGV4ID0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1I7XHJcbiAgICAgICAgdGhpcy5GcmFtZUFycmF5ID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheTtcclxuICAgICAgICB0aGlzLlRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUaWxlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSA9IHRoaXMuRnJhbWVBcnJheVswXS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5Ub29sQXJyYXlbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVkgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICBlbGVtZW50MS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZS8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSk7XHJcblxyXG4gICAgfVxyXG4gICAgb25QYXR0ZXJuQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZUluZGV4ID0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTjtcclxuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXk7XHJcbiAgICAgICAgdGhpcy5UaWxlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkVGlsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbMF0uUGF0dGVybkZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJ0aWNsZSgwKTtcclxuICAgIH1cclxuICAgIG9uU3BhcmtsZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGFydFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGVJbmRleCA9IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEU7XHJcbiAgICAgICAgdGhpcy5GcmFtZUFycmF5ID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5O1xyXG4gICAgICAgIHRoaXMuVGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmFkZFRpbGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gdGhpcy5GcmFtZUFycmF5WzBdLlNwYXJrbGVGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGFydGljbGUoaW5kZXgpIHtcclxuICAgICAgICAvL3NldCBjb2xvciBvZiBwYXJ0aWNsZVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3JQYXJ0aWNsZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnN0YXJ0Q29sb3IgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3QuZW5kQ29sb3IgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTikge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5QYXR0ZXJuUGFydGljbGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zdGFydENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5lbmRDb2xvciA9IENvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5TcGFya2xlUGFydGljbGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zdGFydENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5lbmRDb2xvciA9IENvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBjb2xvciBvZiB0b29sXHJcbiAgICAgICAgY29uc3QgZWxlbWVudDEgPSB0aGlzLlRvb2xBcnJheVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvb2xJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JPZlRvb2woZWxlbWVudDEsIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpc2VUb29sKCkge1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0VG9vbCgpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvb2xBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50MSA9IHRoaXMuVG9vbEFycmF5W2ldO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb2xvck9mVG9vbChlbGVtZW50MSwgaSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG9vbHNDbGlja2VkKHJlZiwgdGFnKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJldlBlbnNpbFNlbGVjdGlvbiA9IHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPSBDb25zdGFudC5Ub29sc1RhZ1t0YWddO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5lcmFzZXJBdWQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50b29sc0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQUkFZIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgdGhpcy5vbkNvbG9yQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIHRoaXMub25QYXR0ZXJuQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIHRoaXMub25TcGFya2xlQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hMaWdodFRvb2woKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvck9mVG9vbChyZWYudGFyZ2V0LCB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24sIHRoaXMuY3VycmVudFRvb2xJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlnaExpZ2h0VG9vbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG9vbEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLlRvb2xBcnJheVtpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChpICE9IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHQxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0MVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY2FsZSA9IDEuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29sb3JPZlRvb2woZWxlbWVudCwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgIC8vIHx8IFxyXG4gICAgICAgICAgICAvLyB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgLy8gICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMnx8XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVl8fFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVswXS5Db2xvckZyYW1lTGlzdEFycmF5W2luZGV4XS5jb2xvci8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVswXS5Db2xvckZyYW1lTGlzdEFycmF5W2luZGV4XS5jb2xvcik7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMKVxyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzJdLlNwYXJrbGVGcmFtZUxpc3RBcnJheVtpbmRleF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTilcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVsxXS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXlbaW5kZXhdLlBhdHRlcm5GcmFtZTtcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2xvck9mVG9vbChlbGVtZW50LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcclxuICAgICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMIHx8XHJcbiAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSB8fFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlNwYXJrbGVGcmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlBhdHRlcm5GcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXNlRHJhd2luZyhyZWYpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0ID0gcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVW5kb0NsaWNrZWQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmVyYXNlckF1ZCwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsW3RoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmRyYXdpbmdEYXRhQXJyYXlbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGlsZCA9PSB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmRyYXdpbmdEYXRhQXJyYXlbaV1bal0uY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheVtpXS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YS5wYXJlbnQucmVtb3ZlQ2hpbGQoZGF0YS5jaGlsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc291bmRidXR0b24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnZvLGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIH0sdGhpcy5xdWVzdGlvbnZvLmR1cmF0aW9uKzAuMSk7XHJcbiAgICB9XHJcbn1cclxuIl19
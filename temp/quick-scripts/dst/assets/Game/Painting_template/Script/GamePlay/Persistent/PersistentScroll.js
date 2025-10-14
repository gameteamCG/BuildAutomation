
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
        _this.auestionaudio = null;
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
    PersistentScroll.prototype.playsoundbutton = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("panel").children[1].getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.auestionaudio, false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("panel").children[1].getComponent(cc.Button).interactable = true;
        }, this.auestionaudio.duration + 0.1);
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
    ], PersistentScroll.prototype, "auestionaudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXFBlcnNpc3RlbnRcXFBlcnNpc3RlbnRTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0RBQStDO0FBRS9DLGtEQUFpRDtBQUNqRCw4Q0FBeUM7QUFDekMsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxVQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHdkIsdUJBQWtCLEdBQW1CLElBQUksQ0FBQztRQUcxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUN2QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7OERBQ3ZDO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7b0RBQzlCO0lBUmYsY0FBYztRQURuQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7T0FDcEIsY0FBYyxDQVNuQjtJQUFELHFCQUFDO0NBVEQsQUFTQyxJQUFBO0FBRUQ7SUFBQTtRQUVJLGlCQUFZLEdBQW1CLElBQUksQ0FBQztRQUdwQyx5QkFBb0IsR0FBbUIsSUFBSSxDQUFD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LE9BQU87T0FDYSxnQkFBZ0IsQ0F5Z0JwQztJQUFELHVCQUFDO0NBemdCRCxBQXlnQkMsQ0F6Z0I2QyxFQUFFLENBQUMsU0FBUyxHQXlnQnpEO2tCQXpnQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uLy4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uLy4uL0NvbW1vbi9Db25maWdDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBUaWxlU2VsZWN0aW9uIGZyb20gXCIuLi9UaWxlU2VsZWN0aW9uXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJDb2xvckZyYW1lTGlzdFwiKVxyXG5jbGFzcyBDb2xvckZyYW1lTGlzdCB7XHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImNvbG9yXCIgfSlcclxuICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiY29sb3JQYXJ0aWNsZUZyYW1lXCIgfSlcclxuICAgIGNvbG9yUGFydGljbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwibG9ja2VkXCIgfSlcclxuICAgIGlzTG9ja2VkID0gZmFsc2U7XHJcbn1cclxuQGNjY2xhc3MoXCJQYXR0ZXJuRnJhbWVMaXN0XCIpXHJcbmNsYXNzIFBhdHRlcm5GcmFtZUxpc3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiUGF0dGVybkZyYW1lXCIgfSlcclxuICAgIFBhdHRlcm5GcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlBhdHRlcm5QYXJ0aWNsZUZyYW1lXCIgfSlcclxuICAgIFBhdHRlcm5QYXJ0aWNsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJsb2NrZWRcIiB9KVxyXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcclxufVxyXG5AY2NjbGFzcyhcIlNwYXJrbGVGcmFtZUxpc3RcIilcclxuY2xhc3MgU3BhcmtsZUZyYW1lTGlzdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJTcGFya2xlRnJhbWVcIiB9KVxyXG4gICAgU3BhcmtsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiU3BhcmtsZVBhcnRpY2xlRnJhbWVcIiB9KVxyXG4gICAgU3BhcmtsZVBhcnRpY2xlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImxvY2tlZFwiIH0pXHJcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5AY2NjbGFzcyhcIlRpbGVTZWxlY3Rpb25MaXN0XCIpXHJcbmNsYXNzIFRpbGVTZWxlY3Rpb25MaXN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJEcmF3aW5nbWFza1wiIH0pXHJcbiAgICBEcmF3aW5nbWFza1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiU2Nyb2xsU2VsZWN0aW9uXCIgfSlcclxuICAgIFNjcm9sbFNlbGVjdGlvblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDb2xvckZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJDb2xvckZyYW1lTGlzdEFycmF5XCIgfSlcclxuICAgIENvbG9yRnJhbWVMaXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQYXR0ZXJuRnJhbWVMaXN0LCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlBhdHRlcm5GcmFtZUxpc3RBcnJheVwiIH0pXHJcbiAgICBQYXR0ZXJuRnJhbWVMaXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcGFya2xlRnJhbWVMaXN0LCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNwYXJrbGVGcmFtZUxpc3RBcnJheVwiIH0pXHJcbiAgICBTcGFya2xlRnJhbWVMaXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcInR5cGVcIiB9KVxyXG4gICAgdHlwZSA9IFwiXCI7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTY3JvbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShUaWxlU2VsZWN0aW9uTGlzdClcclxuICAgIFRpbGVTZWxlY3Rpb25MaXN0QXJyYXk6IFRpbGVTZWxlY3Rpb25MaXN0W10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJpZ2h0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUb29sQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEdWFsU3ltZXRyeSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFF1YWRTeW1ldHJ5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ29sb3IpXHJcbiAgICAvLyBjb2xvclBpY2tlcjogY2MuQ29sb3JbXSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgcGFydGljbGVFZmZlY3Q6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWVzdGlvbmF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjYW1lcmFBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgdG9vbHNBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2xvd0F1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzY3JvbGxBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZXJhc2VyQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEN1cnJlbnRCb3R0b21JbmRleFZhbHVlID0gMDtcclxuICAgIEN1cnJlbnRUb3BJbmRleFZhbHVlID0gMDtcclxuXHJcbiAgICBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBGcmFtZUFycmF5ID0gW107XHJcbiAgICBUaWxlQXJyYXkgPSBbXTtcclxuXHJcbiAgICBzdGFydFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgaXNTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICAgcHJldlRvdWNoID0gbmV3IGNjLlZlYzI7XHJcbiAgICB0b3VjaFRpbGVQb3MgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuXHJcbiAgICBjdXJyZW50VGlsZUluZGV4ID0gLTE7XHJcbiAgICBwcmV2UGVuc2lsU2VsZWN0aW9uID0gMDtcclxuICAgIGN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPSAwO1xyXG4gICAgY3VycmVudFRvb2xJbmRleCA9IDA7XHJcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lID0gbnVsbDtcclxuICAgIGN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgY3VycmVudERyYXdpbmdTY3JpcHQgPSBudWxsO1xyXG5cclxuICAgIGlzRHVhbFN5bWV0cnlDbGlja2VkID0gZmFsc2U7XHJcbiAgICBpc1F1YWRTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQZXJzaXN0ZW50U2Nyb2xsID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFBlcnNpc3RlbnRTY3JvbGwuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nLS0xMDBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIFBlcnNpc3RlbnRTY3JvbGwuaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcyA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG4gICAgICAgIHRoaXMub25Db2xvckNsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpc2VUb29sKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgPSBcIiwgdGhpcy5jb3VudCk7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHVhbFN5bWV0cnlDYWxsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0R1YWxTeW1ldHJ5Q2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1F1YWRTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgb25RdWFkU3ltZXRyeUNhbGxlZCgpIHtcclxuICAgICAgICB0aGlzLmlzRHVhbFN5bWV0cnlDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1F1YWRTeW1ldHJ5Q2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4oZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG5cclxuICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaE1vdmVkKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcblxyXG4gICAgICAgIGxldCBEaXN0YW5jZSA9IHRoaXMucHJldlRvdWNoLnkgLSBwb2ludC55O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVGlsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLlRpbGVBcnJheVtpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRQb3NpdGlvbihlbGVtZW50LmdldFBvc2l0aW9uKCkueCwgZWxlbWVudC5nZXRQb3NpdGlvbigpLnkgLSBEaXN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldlRvdWNoID0gcG9pbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0VXBkYXRlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbGVQb3MueSAhPSAwICYmICF0aGlzLmlzU2Nyb2xsZWQpIHtcclxuICAgICAgICAgICAgbGV0IGRpZmZWYWwgPSAodGhpcy50b3VjaFRpbGVQb3MueSA+IDAgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IDQwICogZGlmZlZhbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG91Y2hUaWxlUG9zLnkgPCA0MCAmJiB0aGlzLnRvdWNoVGlsZVBvcy55ID4gLTQwKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmID0gdGhpcy50b3VjaFRpbGVQb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hUaWxlUG9zLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hUaWxlUG9zLnkgPSB0aGlzLnRvdWNoVGlsZVBvcy55IC0gZGlmZjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLCBlbGVtZW50LmdldFBvc2l0aW9uKCkueSAtIGRpZmYpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QXJyYXkgPSB0aGlzLkZyYW1lQXJyYXk7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmVGlsZUZpbGxlZE9uQm90dG9tKHRoaXMuVGlsZUFycmF5W3RoaXMuVGlsZUFycmF5Lmxlbmd0aCAtIDFdLCBjdXJyZW50QXJyYXkpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tJZlRpbGVGaWxsZWRPblRvcCh0aGlzLlRpbGVBcnJheVswXSwgY3VycmVudEFycmF5KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tUb1JlbW92ZUZyb21Cb3R0b20odGhpcy5UaWxlQXJyYXlbdGhpcy5UaWxlQXJyYXkubGVuZ3RoIC0gMV0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1RvUmVtb3ZlRnJvbVRvcCh0aGlzLlRpbGVBcnJheVswXSwgY3VycmVudEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUaWxlKCkge1xyXG4gICAgICAgIHZhciBwb3NZID0gMDtcclxuICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRBcnJheSA9IHRoaXMuRnJhbWVBcnJheTtcclxuICAgICAgICBsZXQgbGFzdFRpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TY3JvbGxTZWxlY3Rpb25QcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmFkZENoaWxkKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0VGlsZVNlbGVjdGlvbkNsYXNzUmVmKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuaW5pdGlhbGlzZURhdGEoY3VycmVudEFycmF5W2ldLCBpKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5zZXRMb2NrZWQoY3VycmVudEFycmF5W2ldLmlzTG9ja2VkKTtcclxuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkucHVzaChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHBvc1kgPSBwb3NZIC0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSBpO1xyXG4gICAgICAgICAgICBsYXN0VGlsZSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBpZihpPT0xMClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG91Y2hUaWxlUG9zLnkgPSBkYXRhLmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSsrO1xyXG4gICAgICAgIHRoaXMuc3RhcnRVcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVG9SZW1vdmVGcm9tQm90dG9tKGxhc3RUaWxlLCBjdXJyZW50QXJyYXkpIHtcclxuICAgICAgICBsZXQgcG9zID0gQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRUb0NlbnRlcllQb3MobGFzdFRpbGUuZ2V0UG9zaXRpb24oKS55ICsgbGFzdFRpbGUuaGVpZ2h0KTtcclxuICAgICAgICBpZiAocG9zIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlIDwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikucmVtb3ZlQ2hpbGQobGFzdFRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLlRpbGVBcnJheS5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUb1JlbW92ZUZyb21Ub3AobGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkgLSBsYXN0VGlsZS5oZWlnaHQpO1xyXG4gICAgICAgIGlmIChwb3MgPiB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA+PSBjdXJyZW50QXJyYXkubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUNoaWxkKGxhc3RUaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZlRpbGVGaWxsZWRPbkJvdHRvbShsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0VG9DZW50ZXJZUG9zKGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgaWYgKHBvcyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA+PSBjdXJyZW50QXJyYXkubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zWSA9IGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSAtIGxhc3RUaWxlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TY3JvbGxTZWxlY3Rpb25QcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmFkZENoaWxkKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0VGlsZVNlbGVjdGlvbkNsYXNzUmVmKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuaW5pdGlhbGlzZURhdGEoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWVdLCB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5zZXRMb2NrZWQoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWVdLmlzTG9ja2VkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Cb3R0b20odGhpcy5UaWxlQXJyYXlbdGhpcy5UaWxlQXJyYXkubGVuZ3RoIC0gMV0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tJZlRpbGVGaWxsZWRPblRvcChsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0VG9DZW50ZXJZUG9zKGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgaWYgKHBvcyA8IHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlIDwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3NZID0gbGFzdFRpbGUuZ2V0UG9zaXRpb24oKS55ICsgbGFzdFRpbGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVt0aGlzLmN1cnJlbnRUaWxlSW5kZXhdLlNjcm9sbFNlbGVjdGlvblByZWZhYilcclxuICAgICAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuYWRkQ2hpbGQoZGF0YSk7XHJcbiAgICAgICAgICAgIGRhdGEuc2V0UG9zaXRpb24oMCwgcG9zWSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YVJlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYoZGF0YSk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5pbml0aWFsaXNlRGF0YShjdXJyZW50QXJyYXlbdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZV0sIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLnNldExvY2tlZChjdXJyZW50QXJyYXlbdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZV0uaXNMb2NrZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkudW5zaGlmdChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlRpbGVGaWxsZWRPblRvcCh0aGlzLlRpbGVBcnJheVswXSwgY3VycmVudEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVGlsZVNlbGVjdGVkKHJlZikge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY3JvbGxBdWQsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGxldCBhcmVhID0gZWxlbWVudC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMucmlnaHROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVsZW1lbnQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBjYy5SZWN0KHBvcy54LCBwb3MueSAtIGVsZW1lbnQuaGVpZ2h0ICogMC41LCBlbGVtZW50LndpZHRoLCBlbGVtZW50LmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSBuZXcgY2MuVmVjMih0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwb2ludFwiKS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICAgICAgYiA9IHRoaXMucmlnaHROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhLmNvbnRhaW5zKGIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IGVsZW1lbnQuZ2V0UG9zaXRpb24oKS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVmID0gKGVsZW1lbnQuZ2V0Q29tcG9uZW50KFRpbGVTZWxlY3Rpb24pIGFzIFRpbGVTZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFJlZi5pc0xvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4oZWxlbWVudFJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlzIGxvY2tlZCAtLSByaXRlc2hcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghcmVmLmlzTG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4ocmVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaXMgbG9ja2VkIC0tIHJpdGVzaFwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gcmVmLm5vZGUuZ2V0UG9zaXRpb24oKS55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYXR0ZXJuKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSBlbGVtZW50LnBhdHRlcm5GcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IGVsZW1lbnQuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJ0aWNsZShlbGVtZW50LmluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gdGhpcy5wcmV2UGVuc2lsU2VsZWN0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFRvb2woKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xvckNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlSW5kZXggPSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUjtcclxuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5Db2xvckZyYW1lTGlzdEFycmF5O1xyXG4gICAgICAgIHRoaXMuVGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmFkZFRpbGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gdGhpcy5GcmFtZUFycmF5WzBdLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJ0aWNsZSgwKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudDEgPSB0aGlzLlRvb2xBcnJheVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTCB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQxLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5jdXJyZW50UGF0dGVybkZyYW1lKTtcclxuXHJcbiAgICB9XHJcbiAgICBvblBhdHRlcm5DbGlja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlSW5kZXggPSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOO1xyXG4gICAgICAgIHRoaXMuRnJhbWVBcnJheSA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVt0aGlzLmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheTtcclxuICAgICAgICB0aGlzLlRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUaWxlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSA9IHRoaXMuRnJhbWVBcnJheVswXS5QYXR0ZXJuRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVBhcnRpY2xlKDApO1xyXG4gICAgfVxyXG4gICAgb25TcGFya2xlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZUluZGV4ID0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRTtcclxuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TcGFya2xlRnJhbWVMaXN0QXJyYXk7XHJcbiAgICAgICAgdGhpcy5UaWxlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkVGlsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbMF0uU3BhcmtsZUZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJ0aWNsZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYXJ0aWNsZShpbmRleCkge1xyXG4gICAgICAgIC8vc2V0IGNvbG9yIG9mIHBhcnRpY2xlXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUikge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvclBhcnRpY2xlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3RhcnRDb2xvciA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5lbmRDb2xvciA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlBhdHRlcm5QYXJ0aWNsZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnN0YXJ0Q29sb3IgPSBDb21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LmVuZENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3Quc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlNwYXJrbGVQYXJ0aWNsZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnN0YXJ0Q29sb3IgPSBDb21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LmVuZENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2V0IGNvbG9yIG9mIHRvb2xcclxuICAgICAgICBjb25zdCBlbGVtZW50MSA9IHRoaXMuVG9vbEFycmF5W3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG9vbEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvck9mVG9vbChlbGVtZW50MSwgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGlzZVRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRUb29sKCk7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG9vbEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5Ub29sQXJyYXlbaV07XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENvbG9yT2ZUb29sKGVsZW1lbnQxLCBpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub29sc0NsaWNrZWQocmVmLCB0YWcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2UGVuc2lsU2VsZWN0aW9uID0gdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IENvbnN0YW50LlRvb2xzVGFnW3RhZ107XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmVyYXNlckF1ZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRvb2xzQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVkgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICB0aGlzLm9uQ29sb3JDbGlja2VkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTilcclxuICAgICAgICAgICAgdGhpcy5vblBhdHRlcm5DbGlja2VkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcclxuICAgICAgICAgICAgdGhpcy5vblNwYXJrbGVDbGlja2VkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0VG9vbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yT2ZUb29sKHJlZi50YXJnZXQsIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiwgdGhpcy5jdXJyZW50VG9vbEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWdoTGlnaHRUb29sKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub29sQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuVG9vbEFycmF5W2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNjYWxlID0gMTtcclxuICAgICAgICAgICAgaWYgKGkgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImxheWVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodDFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImxheWVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHQxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNjYWxlID0gMS4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb2xvck9mVG9vbChlbGVtZW50LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0hcclxuICAgICAgICAgICAgLy8gfHwgXHJcbiAgICAgICAgICAgIC8vIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTCB8fFxyXG4gICAgICAgICAgICAvLyAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyfHxcclxuICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWXx8XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzBdLkNvbG9yRnJhbWVMaXN0QXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzBdLkNvbG9yRnJhbWVMaXN0QXJyYXlbaW5kZXhdLmNvbG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbMl0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2luZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQVRURVJOKVxyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzFdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtpbmRleF0uUGF0dGVybkZyYW1lO1xyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbG9yT2ZUb29sKGVsZW1lbnQsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyIHx8XHJcbiAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlNQUkFZIHx8XHJcbiAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvci8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTilcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uUGF0dGVybkZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpc2VEcmF3aW5nKHJlZikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQgPSByZWY7XHJcbiAgICB9XHJcblxyXG4gICAgb25VbmRvQ2xpY2tlZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXJhc2VyQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWxbdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5jdXJyZW50c3RlbnNpbC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5kcmF3aW5nRGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNoaWxkID09IHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheVtpXVtqXS5jaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5kcmF3aW5nRGF0YUFycmF5W2ldLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhLnBhcmVudC5yZW1vdmVDaGlsZChkYXRhLmNoaWxkKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZ1NjcmlwdC5jdXJyZW50c3RlbnNpbC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5c291bmRidXR0b24oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYW5lbFwiKS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVlc3Rpb25hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlXHJcbiAgICAgICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYW5lbFwiKS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSwgdGhpcy5hdWVzdGlvbmF1ZGlvLmR1cmF0aW9uICsgMC4xKTtcclxuICAgIH1cclxufVxyXG4iXX0=
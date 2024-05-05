// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CommonFun from "../../Common/CommonFun";
import configData from "../../Common/ConfigController";
import { Constant } from "../../Common/Constant";
import Global from "../../Common/Global";
import TileSelection from "../TileSelection";

const { ccclass, property } = cc._decorator;

@ccclass("ColorFrameList")
class ColorFrameList {
    @property({ visible: true, tooltip: "color" })
    color = new cc.Color();

    @property({ type: cc.SpriteFrame, visible: true, tooltip: "colorParticleFrame" })
    colorParticleFrame: cc.SpriteFrame = null;

    @property({ visible: true, tooltip: "locked" })
    isLocked = false;
}
@ccclass("PatternFrameList")
class PatternFrameList {
    @property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternFrame" })
    PatternFrame: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternParticleFrame" })
    PatternParticleFrame: cc.SpriteFrame = null;

    @property({ visible: true, tooltip: "locked" })
    isLocked = false;
}
@ccclass("SparkleFrameList")
class SparkleFrameList {
    @property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleFrame" })
    SparkleFrame: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleParticleFrame" })
    SparkleParticleFrame: cc.SpriteFrame = null;

    @property({ visible: true, tooltip: "locked" })
    isLocked = false;
}

@ccclass("TileSelectionList")
class TileSelectionList {
    @property({ type: cc.Prefab, visible: true, tooltip: "Drawingmask" })
    DrawingmaskPrefab: cc.Prefab = null;

    @property({ type: cc.Prefab, visible: true, tooltip: "ScrollSelection" })
    ScrollSelectionPrefab: cc.Prefab = null;

    @property({ type: ColorFrameList, visible: true, tooltip: "ColorFrameListArray" })
    ColorFrameListArray = [];

    @property({ type: PatternFrameList, visible: true, tooltip: "PatternFrameListArray" })
    PatternFrameListArray = [];

    @property({ type: SparkleFrameList, visible: true, tooltip: "SparkleFrameListArray" })
    SparkleFrameListArray = [];

    @property({ visible: true, tooltip: "type" })
    type = "";
}

@ccclass
export default class PersistentScroll extends cc.Component {

    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    tickBtn: cc.Node = null;

    @property(TileSelectionList)
    TileSelectionListArray: TileSelectionList[] = [];

    @property(cc.Node)
    rightNode: cc.Node = null;

    @property(cc.Node)
    ToolArray = [];


    @property(cc.Node)
    DualSymetry = null;
    @property(cc.Node)
    QuadSymetry = null;

    // @property(cc.Color)
    // colorPicker: cc.Color[] = null;

    @property(cc.ParticleSystem)
    particleEffect: cc.ParticleSystem = null;

    @property(cc.AudioClip)
    cameraAud: cc.AudioClip = null;
    @property(cc.AudioClip)
    toolsAud: cc.AudioClip = null;
    @property(cc.AudioClip)
    glowAud: cc.AudioClip = null;
    @property(cc.AudioClip)
    scrollAud: cc.AudioClip = null;
    @property(cc.AudioClip)
    eraserAud: cc.AudioClip = null;

    CurrentBottomIndexValue = 0;
    CurrentTopIndexValue = 0;

    count: number = 0;

    FrameArray = [];
    TileArray = [];

    startUpdate = false;
    isScrolled = false;
    prevTouch = new cc.Vec2;
    touchTilePos = new cc.Vec2(0, 0);

    currentTileIndex = -1;
    prevPensilSelection = 0;
    currentPensilSelection = 0;
    currentToolIndex = 0;
    currentPatternFrame = null;
    currentPatternFrameIndex = 0;

    currentDrawingScript = null;

    isDualSymetryClicked = false;
    isQuadSymetryClicked = false;

    private static instance: PersistentScroll = null;
    static get Instance() {
        return PersistentScroll.instance
    }

    onLoad() {
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
    }

    start() {
        cc.game.addPersistRootNode(this.node);

        Global.instance.PersistentScrollInstance = this;

        PersistentScroll.instance = this;

        this.touchTilePos = new cc.Vec2(0, 0);
        this.onColorClicked();
        this.initialiseTool();


        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);

        this.currentPensilSelection = Constant.ToolsTag.BRUSH;

        // this._instance = this;

        console.log("count = ", this.count);
        this.count++;
    }

    onDualSymetryCalled() {
        this.isDualSymetryClicked = true;
        this.isQuadSymetryClicked = false;
    }
    onQuadSymetryCalled() {
        this.isDualSymetryClicked = false;
        this.isQuadSymetryClicked = true;
    }


    _onTouchBegin(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.prevTouch = point;

        this.isScrolled = false;
    }

    _onTouchMoved(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);

        let Distance = this.prevTouch.y - point.y;

        for (let i = 0; i < this.TileArray.length; i++) {
            const element = this.TileArray[i];
            element.setPosition(element.getPosition().x, element.getPosition().y - Distance);
        }
        this.prevTouch = point;

        this.isScrolled = true;
    }

    _onTouchEnd(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);

    }

    update(dt) {
        if (!this.startUpdate)
            return;


        if (this.touchTilePos.y != 0 && !this.isScrolled) {
            let diffVal = (this.touchTilePos.y > 0 ? 1 : -1);
            let diff = 40 * diffVal;
            if (this.touchTilePos.y < 40 && this.touchTilePos.y > -40) {
                diff = this.touchTilePos.y;
                this.touchTilePos.y = 0;
            }
            else
                this.touchTilePos.y = this.touchTilePos.y - diff;
            for (let i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                const element = this.rightNode.getChildByName("scroll").children[i];
                element.setPosition(new cc.Vec2(0, element.getPosition().y - diff));
            }
        }


        let currentArray = this.FrameArray;
        this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);


        this.checkToRemoveFromBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkToRemoveFromTop(this.TileArray[0], currentArray);
    }

    addTile() {
        var posY = 0;
        this.CurrentTopIndexValue = 0;

        let currentArray = this.FrameArray;
        let lastTile = null;

        for (let i = 0; i < currentArray.length; i++) {

            let data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab)
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);

            let dataRef = CommonFun.instance.getTileSelectionClassRef(data);
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
    }

    checkToRemoveFromBottom(lastTile, currentArray) {
        let pos = CommonFun.instance.convertToCenterYPos(lastTile.getPosition().y + lastTile.height);
        if (pos < 0) {
            this.CurrentBottomIndexValue--;
            if (this.CurrentBottomIndexValue < 0)
                this.CurrentBottomIndexValue = currentArray.length - 1;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.pop();
        }
    }

    checkToRemoveFromTop(lastTile, currentArray) {
        let pos = CommonFun.instance.convertToCenterYPos(lastTile.getPosition().y - lastTile.height);
        if (pos > this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue++;
            if (this.CurrentTopIndexValue >= currentArray.length)
                this.CurrentTopIndexValue = 0;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.shift();
        }
    }

    checkIfTileFilledOnBottom(lastTile, currentArray) {
        let pos = CommonFun.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos > 0) {
            this.CurrentBottomIndexValue++;
            if (this.CurrentBottomIndexValue >= currentArray.length)
                this.CurrentBottomIndexValue = 0;

            let posY = lastTile.getPosition().y - lastTile.height;
            let data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab)
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);

            let dataRef = CommonFun.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentBottomIndexValue], this.CurrentBottomIndexValue);
            dataRef.setLocked(currentArray[this.CurrentBottomIndexValue].isLocked);

            this.TileArray.push(data);

            this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        }
    }
    checkIfTileFilledOnTop(lastTile, currentArray) {
        let pos = CommonFun.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos < this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue--;
            if (this.CurrentTopIndexValue < 0)
                this.CurrentTopIndexValue = currentArray.length - 1;

            let posY = lastTile.getPosition().y + lastTile.height;
            let data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab)
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);

            let dataRef = CommonFun.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentTopIndexValue], this.CurrentTopIndexValue);
            dataRef.setLocked(currentArray[this.CurrentTopIndexValue].isLocked);

            this.TileArray.unshift(data);

            this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);
        }
    }


    onTileSelected(ref) {
        cc.audioEngine.playEffect(this.scrollAud, false);
        if (this.isScrolled) {
            for (let i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                const element = this.rightNode.getChildByName("scroll").children[i];
                let area = element.getBoundingBox();
                var pos = this.rightNode.convertToNodeSpaceAR(element.getPosition());
                var a = new cc.Rect(pos.x, pos.y - element.height * 0.5, element.width, element.height);

                var b = new cc.Vec2(this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().x,
                    this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().y);
                b = this.rightNode.convertToNodeSpaceAR(b);

                if (a.contains(b)) {
                    this.isScrolled = false;
                    this.touchTilePos.y = element.getPosition().y;
                    let elementRef = (element.getComponent(TileSelection) as TileSelection);
                    if (!elementRef.isLocked) {
                        this.changePattern(elementRef);
                    }
                    else {
                        console.log("Selected is locked -- ritesh")
                    }
                }
            }
        }
        else {
            if (!ref.isLocked) {
                this.changePattern(ref);
            }
            else {
                console.log("Selected is locked -- ritesh")
            }

            this.touchTilePos.y = ref.node.getPosition().y;
        }
    }

    changePattern(element) {
        this.currentPatternFrame = element.patternFrame;
        this.currentPatternFrameIndex = element.index;
        this.changeParticle(element.index);

        if (this.currentPensilSelection == Constant.ToolsTag.ERASER) {
            this.currentPensilSelection = this.prevPensilSelection;
            this.highLightTool();
        }
    }

    onColorClicked() {
        if (this.currentTileIndex == Constant.COLORTAG.COLOR)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant.COLORTAG.COLOR;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].ColorFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();

        this.currentPatternFrame = this.FrameArray[0].color;
        this.currentPatternFrameIndex = 0;

        this.changeParticle(0);

        const element1 = this.ToolArray[this.currentPensilSelection];
        if (this.currentPensilSelection == Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant.ToolsTag.PAINT)
            element1.getChildByName("mask").getChildByName("bg").color = this.currentPatternFrame//CommonFun.instance.hexToRgb(this.currentPatternFrame);

    }
    onPatternClicked() {
        if (this.currentTileIndex == Constant.COLORTAG.PATTERN)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant.COLORTAG.PATTERN;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].PatternFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();

        this.currentPatternFrame = this.FrameArray[0].PatternFrame;
        this.currentPatternFrameIndex = 0;

        this.changeParticle(0);
    }
    onSparkleClicked() {
        if (this.currentTileIndex == Constant.COLORTAG.SPARKLE)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant.COLORTAG.SPARKLE;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].SparkleFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();

        this.currentPatternFrame = this.FrameArray[0].SparkleFrame;
        this.currentPatternFrameIndex = 0;

        this.changeParticle(0);
    }

    changeParticle(index) {
        //set color of particle
        if (this.currentTileIndex == Constant.COLORTAG.COLOR) {
            this.particleEffect.spriteFrame = this.FrameArray[index].colorParticleFrame;
            this.particleEffect.startColor = this.FrameArray[index].color//CommonFun.instance.hexToRgb(this.FrameArray[index].color);
            this.particleEffect.endColor = this.FrameArray[index].color//CommonFun.instance.hexToRgb(this.FrameArray[index].color);
        }
        if (this.currentTileIndex == Constant.COLORTAG.PATTERN) {
            this.particleEffect.spriteFrame = this.FrameArray[index].PatternParticleFrame;
            this.particleEffect.startColor = CommonFun.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun.instance.hexToRgb("#FFFFFF");
        }
        if (this.currentTileIndex == Constant.COLORTAG.SPARKLE) {
            this.particleEffect.spriteFrame = this.FrameArray[index].SparkleParticleFrame;
            this.particleEffect.startColor = CommonFun.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun.instance.hexToRgb("#FFFFFF");
        }

        //set color of tool
        const element1 = this.ToolArray[this.currentPensilSelection];
        this.currentToolIndex = index;
        this.updateColorOfTool(element1, this.currentPensilSelection, index);
    }

    initialiseTool() {
        this.highLightTool();


        for (let i = 0; i < this.ToolArray.length; i++) {
            const element1 = this.ToolArray[i];
            this.initColorOfTool(element1, i, 0);
        }
    }

    onToolsClicked(ref, tag) {

        this.prevPensilSelection = this.currentPensilSelection;
        this.currentPensilSelection = Constant.ToolsTag[tag];
        if (this.currentPensilSelection == Constant.ToolsTag.ERASER) {
            cc.audioEngine.playEffect(this.eraserAud, false);
        }
        else {
            cc.audioEngine.playEffect(this.toolsAud, false);
        }

        if (this.currentPensilSelection == Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant.ToolsTag.PAINT)
            this.onColorClicked();

        if (this.currentPensilSelection == Constant.ToolsTag.PATTERN)
            this.onPatternClicked();

        if (this.currentPensilSelection == Constant.ToolsTag.SPARKEL)
            this.onSparkleClicked();

        this.highLightTool();

        this.updateColorOfTool(ref.target, this.currentPensilSelection, this.currentToolIndex);
    }

    highLightTool() {
        for (let i = 0; i < this.ToolArray.length; i++) {
            const element = this.ToolArray[i];
            element.scale = 1;
            if (i != Constant.ToolsTag.ERASER) {
                element.getChildByName("mask").getChildByName("layer").active = false;
                element.getChildByName("highLight1").active = false;
            }
            element.getChildByName("highLight").active = false;
            if (i == this.currentPensilSelection) {
                if (i != Constant.ToolsTag.ERASER) {
                    element.getChildByName("mask").getChildByName("layer").active = false;
                    element.getChildByName("highLight1").active = true;
                }
                element.getChildByName("highLight").active = true;
                element.scale = 1.1;
            }
        }
    }

    initColorOfTool(element, value, index) {
        if (value == Constant.ToolsTag.BRUSH
            // || 
            // value == Constant.ToolsTag.PENCIL ||
            //     value == Constant.ToolsTag.BRUSH2||
            //         value == Constant.ToolsTag.SPRAY||
            //             value == Constant.ToolsTag.PAINT
        )
            element.getChildByName("mask").getChildByName("bg").color = this.TileSelectionListArray[0].ColorFrameListArray[index].color//CommonFun.instance.hexToRgb(this.TileSelectionListArray[0].ColorFrameListArray[index].color);

        if (value == Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[2].SparkleFrameListArray[index].SparkleFrame;

        if (value == Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[1].PatternFrameListArray[index].PatternFrame;

    }
    updateColorOfTool(element, value, index) {
        if (value == Constant.ToolsTag.BRUSH ||
            value == Constant.ToolsTag.PENCIL ||
            value == Constant.ToolsTag.BRUSH2 ||
            value == Constant.ToolsTag.SPRAY ||
            value == Constant.ToolsTag.PAINT)
            element.getChildByName("mask").getChildByName("bg").color = this.FrameArray[index].color//CommonFun.instance.hexToRgb(this.FrameArray[index].color);

        if (value == Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].SparkleFrame;

        if (value == Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].PatternFrame;
    }

    initialiseDrawing(ref) {
        this.currentDrawingScript = ref;
    }

    onUndoClicked() {
        cc.audioEngine.playEffect(this.eraserAud, false);
        if (this.currentDrawingScript.currentstensil.length > 0) {
            let data = this.currentDrawingScript.currentstensil[this.currentDrawingScript.currentstensil.length - 1];

            for (let i = 0; i < this.currentDrawingScript.drawingDataArray.length; i++) {
                for (let j = 0; j < this.currentDrawingScript.drawingDataArray[i].length; j++) {
                    if (data.child == this.currentDrawingScript.drawingDataArray[i][j].child)
                        this.currentDrawingScript.drawingDataArray[i].pop();
                }

            }



            data.parent.removeChild(data.child);
            this.currentDrawingScript.currentstensil.pop();
        }
    }
}

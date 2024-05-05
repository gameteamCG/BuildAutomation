// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CommonFun from "../Common/CommonFun";
import { Constant } from "../Common/Constant";
import Global from "../Common/Global";
import Drawingmask from "./Drawingmask";
import PersistentScroll from "./Persistent/PersistentScroll";

const { ccclass, property } = cc._decorator;

@ccclass("DrawingSplitData")
class DrawingSplitData {
    @property({ type: cc.Node, visible: true, tooltip: "DrawingSplitData" })
    DrawingSplitData: cc.Node = null;
}


@ccclass
export default class DrawingTable extends cc.Component {

    @property(DrawingSplitData)
    DrawingSplitDataArray: DrawingSplitData[] = [];

    currentChild = null;
    currentMask = null;

    parentRef = null;
    parentNode = null;

    persistentScrollNode = null;
    persistentScrollScript = null;

    prevTouch = new cc.Vec2;


    currentstensil = [];
    // draggedstensil = [];
    // pointposition = [];

    overAllData = [];
    currentData = {
        currentTool: 0,
        drawArray: [],
        currentChildIndex: 0,
        currentPatternFrameIndex: 0,
        currentTileIndex: 0
    };


    drawingDataArray = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    }

    start() {
        this.persistentScrollScript = Global.instance.PersistentScrollInstance;
        this.persistentScrollNode = Global.instance.PersistentScrollInstance.node;
        this.persistentScrollScript.initialiseDrawing(this);
    }
    initTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    }

    // update (dt) {}

    initialiseRef(ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;

        for (let i = 0; i < this.DrawingSplitDataArray.length; i++) {
            this.drawingDataArray.push([]);
        }
    }

    _onTouchBegin(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);

        for (let i = 0; i < this.DrawingSplitDataArray.length; i++) {
            const element = this.DrawingSplitDataArray[i].DrawingSplitData;
            let collider = this.getPolygonData(element);

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
    }

    _onTouchMoved(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _onTouchEnd(event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        PersistentScroll.Instance.hand.opacity = 255;
        PersistentScroll.Instance.tickBtn.getComponent(cc.Button).interactable = true;

        this._addCircle(point);
        if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.BRUSH ||
            this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PATTERN ||
            this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.SPARKEL)
            cc.audioEngine.playEffect(PersistentScroll.Instance.glowAud, false);


        // if(this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PAINT)
        //     this.draggedstensil.push(this.currentMask);
        // this.currentstensil.push(this.draggedstensil);
        //new
        let myData = {
            currentTool: this.currentData.currentTool,
            currentPatternFrameIndex: this.currentData.currentPatternFrameIndex,
            currentTileIndex: this.currentData.currentTileIndex,
            child: this.currentMask,
        };
        this.drawingDataArray[this.currentData.currentChildIndex].push(myData);
        //new

        // this.currentData.drawArray.push(this.pointposition);
        // this.overAllData.push(this.currentData);



        if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.ERASER)
            return;

        var point1 = event.touch.getLocation();
        point1 = this.persistentScrollNode.convertToNodeSpaceAR(point1);
        this.persistentScrollScript.particleEffect.node.setPosition(point1);
        this.persistentScrollScript.particleEffect.resetSystem();
    }



    _addCircle(point) {

        var pos1 = new cc.Vec2(this.prevTouch.x - point.x, this.prevTouch.y - point.y);
        let forwardVector = pos1.normalize();

        let splitVal = 5;
        if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PENCIL)
            splitVal = 2;
        let distance = splitVal;

        let Distance = CommonFun.instance.getDistance(this.prevTouch.x, this.prevTouch.y, point.x, point.y);
        let val = Distance / splitVal;


        // this.pointposition.push(new cc.Vec2(this.prevTouch.x,this.prevTouch.y));

        for (let i = 0; i <= val; i++) {

            if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.BRUSH
                || this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PENCIL
                || this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.SPARKEL
                || this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PATTERN
                || this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.ERASER) {
                let stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.circle(this.prevTouch.x, this.prevTouch.y,
                    Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                stencil.fill();
                // this.draggedstensil.push(stencil);

                if (this.persistentScrollScript.isDualSymetryClicked) {
                    let stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y,
                        Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);
                }
                else if (this.persistentScrollScript.isQuadSymetryClicked) {
                    let stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y,
                        Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);

                    let stencil2 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil2.circle(this.prevTouch.x * -1, this.prevTouch.y * -1,
                        Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil2.fill();
                    // this.draggedstensil.push(stencil2);

                    let stencil3 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil3.circle(this.prevTouch.x, this.prevTouch.y * -1,
                        Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil3.fill();
                    // this.draggedstensil.push(stencil3);
                }
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.BRUSH2) {
                let stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.rect(this.prevTouch.x - (Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2),
                    this.prevTouch.y - (Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]),
                    Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2,
                    Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] * 2);
                stencil.fill();
                // this.draggedstensil.push(stencil);
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.SPRAY) {
                for (let i = 0; i < 5; i++) {
                    let pt = Constant.circlerandPoint(this.prevTouch.x, this.prevTouch.y, 20);
                    let stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil.circle(pt.x, pt.y, Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil.fill();
                    // this.draggedstensil.push(stencil);
                }
            }

            this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1,
                this.prevTouch.y + (forwardVector.y * distance) * -1);
        }
        this.prevTouch = point;
    }

    checkMasking() {
        let currentTileIndex = 0;
        if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.ERASER)
            currentTileIndex = 0;
        else
            currentTileIndex = this.persistentScrollScript.currentTileIndex;

        this.currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[currentTileIndex].DrawingmaskPrefab);
        this.currentChild.addChild(this.currentMask);

        let DrawingmaskClassRef = CommonFun.instance.getDrawingmaskClassRef(this.currentMask);
        DrawingmaskClassRef.initialiseRef(this);
        DrawingmaskClassRef.initialisePatternData(this.persistentScrollScript);

        this.currentData.currentPatternFrameIndex = this.persistentScrollScript.currentPatternFrameIndex;
        this.currentData.currentTileIndex = currentTileIndex;

        let data = {
            child: this.currentMask,
            parent: this.currentChild
        }
        this.currentstensil.push(data);
    }


    getPolygonData(element) {
        return element.getComponent(cc.PolygonCollider);
    }

    drawData(dataArray) {
        if (dataArray == null)
            return;

        this.drawingDataArray = dataArray;

        //new
        for (let i = 0; i < dataArray.length; i++) {
            const element = dataArray[i];
            if (element.length > 0) {
                const currentChild = this.DrawingSplitDataArray[i].DrawingSplitData;

                let currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].DrawingmaskPrefab);
                currentChild.addChild(currentMask);

                let DrawingmaskClassRef = CommonFun.instance.getDrawingmaskClassRef(currentMask);
                DrawingmaskClassRef.initialiseRef(this);

                if (element[0].currentTileIndex == Constant.COLORTAG.COLOR && element[0].currentTool != Constant.ToolsTag.ERASER)
                    currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].ColorFrameListArray[element[0].currentPatternFrameIndex].color;

                if (element[0].currentTileIndex == Constant.COLORTAG.PATTERN)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].PatternFrameListArray[element[0].currentPatternFrameIndex].PatternFrame;

                if (element[0].currentTileIndex == Constant.COLORTAG.SPARKLE)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].SparkleFrameListArray[element[0].currentPatternFrameIndex].SparkleFrame;

                currentMask.getComponent(cc.Mask).inverted = true;
            }
        }
        return;
        //new














        this.overAllData = dataArray;

        for (let j = 0; j < dataArray.length; j++) {
            const element = dataArray[j];

            const currentChild = this.DrawingSplitDataArray[element.currentChildIndex].DrawingSplitData;

            let currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].DrawingmaskPrefab);
            currentChild.addChild(currentMask);

            let DrawingmaskClassRef = CommonFun.instance.getDrawingmaskClassRef(currentMask);
            DrawingmaskClassRef.initialiseRef(this);


            if (element.currentTileIndex == Constant.COLORTAG.COLOR && element.currentTool != Constant.ToolsTag.ERASER)
                currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].ColorFrameListArray[element.currentPatternFrameIndex].color;

            if (element.currentTileIndex == Constant.COLORTAG.PATTERN)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].PatternFrameListArray[element.currentPatternFrameIndex].PatternFrame;

            if (element.currentTileIndex == Constant.COLORTAG.SPARKLE)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].SparkleFrameListArray[element.currentPatternFrameIndex].SparkleFrame;

            if (element.currentTileIndex == Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;


            if (element.currentTool == Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;



            for (let i = 0; i < element.drawArray.length; i++) {
                for (let k = 0; k < element.drawArray[i].length; k++) {
                    if (k == 0) {
                        this.prevTouch = element.drawArray[i][k];
                    }

                    var pos1 = new cc.Vec2(this.prevTouch.x - element.drawArray[i][k].x, this.prevTouch.y - element.drawArray[i][k].y);
                    let forwardVector = pos1.normalize();

                    let splitVal = 5;
                    if (this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PENCIL)
                        splitVal = 2;
                    let distance = splitVal;

                    let Distance = CommonFun.instance.getDistance(this.prevTouch.x, this.prevTouch.y, element.drawArray[i][k].x, element.drawArray[i][k].y);
                    let val = Distance / splitVal;

                    for (let i = 0; i <= val; i++) {

                        if (element.currentTool == Constant.ToolsTag.BRUSH
                            || element.currentTool == Constant.ToolsTag.PENCIL
                            || element.currentTool == Constant.ToolsTag.SPARKEL
                            || element.currentTool == Constant.ToolsTag.PATTERN
                            || element.currentTool == Constant.ToolsTag.ERASER) {
                            let stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant.ToolsTag.BRUSH2) {
                            let stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.rect(this.prevTouch.x - (Constant.CurrentToolsTagSize[element.currentTool] / 2),
                                this.prevTouch.y - (Constant.CurrentToolsTagSize[element.currentTool]),
                                Constant.CurrentToolsTagSize[element.currentTool] / 2,
                                Constant.CurrentToolsTagSize[element.currentTool] * 2);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant.ToolsTag.SPRAY) {
                            let stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }

                        this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1,
                            this.prevTouch.y + (forwardVector.y * distance) * -1);
                    }
                    this.prevTouch = element.drawArray[i][k];
                }
            }


        }
    }

}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CommonFun from "../Common/CommonFun";
import { Constant } from "../Common/Constant";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileSelection extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    parentRef = null;
    parentNode = null;

    patternFrame = null;

    currentTimeout = null;
    index = 0;

    isLocked = false;

    start () {
    }

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    }
    

    _onTouchBegin (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    }

    _onTouchMoved (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    }

    _onTouchEnd (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);

        this.parentRef.onTileSelected(this);
    }

    // update (dt) {}

    initialiseRef(ParentRef){
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    }
    initialiseData(data,index){
        this.index = index;
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.COLOR)
            this.patternFrame = data.color;
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.PATTERN)
            this.patternFrame = data.PatternFrame;
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.SPARKLE)
            this.patternFrame = data.SparkleFrame;

        
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.COLOR)
            this.node.color = this.patternFrame//CommonFun.instance.hexToRgb(this.patternFrame);
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.PATTERN)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if(this.parentRef.currentTileIndex == Constant.COLORTAG.SPARKLE)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
    }

    setLocked(value){
        this.isLocked = value;
        this.node.getChildByName("lockNode").active = value;
    }
}

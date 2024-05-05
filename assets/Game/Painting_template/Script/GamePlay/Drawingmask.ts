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
export default class Drawingmask extends cc.Component {
    

    parentRef = null;
    parentNode = null;

    patternFrame = null;
    
    touches: cc.Vec2[] = []

    start () {

    }

    // update (dt) {}

    initialiseRef(ParentRef){
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    }
    initialisePatternData(persistentScrollScript){
        this.patternFrame = persistentScrollScript.currentPatternFrame;

        if(persistentScrollScript.currentPensilSelection == Constant.ToolsTag.ERASER)
            return;

        if(persistentScrollScript.currentTileIndex == Constant.COLORTAG.COLOR)
            this.node.getChildByName("img").color = this.patternFrame//CommonFun.instance.hexToRgb(this.patternFrame);

        if(persistentScrollScript.currentTileIndex == Constant.COLORTAG.PATTERN || 
                persistentScrollScript.currentTileIndex == Constant.COLORTAG.SPARKLE)
            this.node.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.patternFrame;

        if(persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PAINT)
            this.node.getComponent(cc.Mask).inverted = true;

    }
    getPatternFrame(){
        return this.patternFrame;
    }
}

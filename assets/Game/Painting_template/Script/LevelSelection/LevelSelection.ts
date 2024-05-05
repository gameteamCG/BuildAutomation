// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CommonFun from "../Common/CommonFun";
import { Constant } from "../Common/Constant";
import Global from "../Common/Global";
import PersistentScroll from "../GamePlay/Persistent/PersistentScroll";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelSelection extends cc.Component {

    @property(cc.Node)
    lvlArray = [];
    @property(cc.AudioClip)
    clickAud: cc.AudioClip = null;

    @property(cc.Prefab)
    DrawingDataArray: cc.Prefab[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.addDrawing();
        this.scheduleOnce(() => {
            this.PlayEffects();
        }, 1);
        this.schedule(() => {
            this.PlayEffects();
        }, 7);
    }

    // update (dt) {}
    addDrawing() {

        for (let i = 0; i < this.lvlArray.length; i++) {
            let currentDrawing = cc.instantiate(this.DrawingDataArray[i]);
            this.lvlArray[i].addChild(currentDrawing);
            currentDrawing.setPosition(new cc.Vec2(0, 0));
            let currentDrawingeClassRef = CommonFun.instance.getDrawingTableClassRef(currentDrawing);
            currentDrawingeClassRef.initialiseRef(this);
            setTimeout(() => {
                let data = Constant.getLevelData(i);
                currentDrawingeClassRef.drawData(data);
            }, 10);
            currentDrawing.setScale(0.2);

        }

    }

    onLvlClicked(ref, tag) {

        cc.audioEngine.playEffect(this.clickAud, false);
        CommonFun.instance.currentLvl = parseInt(tag);
        console.log("levelStarted--" + (CommonFun.instance.currentLvl + 1));
        // console.log("current level = ", CommonFun.instance.currentLvl);

        cc.director.loadScene("GamePlay");
    }



    PlayEffects() {
        // console.log("islogging");
        for (let i = 0; i < this.lvlArray.length; i++) {
            let delay = this.getRandomNumber(3, 9);
            delay *= 0.1;
            cc.tween(this.lvlArray[i]).to(delay, { scale: 1.2 }, { easing: "backInOut" })
                .to(delay, { scale: 1 }, { easing: "backInOut" }).start();
        }
    }


    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;

    }

    OnBackButton() {
        console.log("gameEnded--true");
        console.log("gameExit--true");
    }
}

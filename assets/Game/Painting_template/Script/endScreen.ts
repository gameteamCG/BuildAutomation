// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class endScreen extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.SpriteFrame)
    private podarEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private jaipuriaEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private tlcEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private supercubEnd: cc.SpriteFrame = null;

    onLoad() {
        this.node.getChildByName("bgimg").getComponent(cc.Sprite).spriteFrame = globalVariables.Instance.introBG;
        console.log("showedScreen--wellDone");
        this.scheduleOnce(() => {
            console.log("gameEnded--true");
        }, 2);
    }

    start() {
        if (globalVariables.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (globalVariables.Instance.jockeyName == "bag" || globalVariables.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
        }
        else if (globalVariables.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (globalVariables.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }

        this.node.getChildByName("jockey").getChildByName(globalVariables.Instance.jockeyName).active = true;

    }

    // update (dt) {}
}

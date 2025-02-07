import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    private star: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private yeah: cc.AudioClip[] = [];

    @property(cc.SpriteFrame)
    private podarEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private jaipuriaEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private tlcEnd: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private supercubEnd: cc.SpriteFrame = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(() => {
                this.node.getChildByName("end").active = true;
            }, 2);
        }

        this.node.getComponent(cc.Sprite).spriteFrame = startGame.Instance.introBG;
    }

    start() {
        console.log("showedScreen--Congratulations");
        startGame.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(() => {
            this.node.getChildByName("awesome").getComponent(cc.Animation).play();
        }, 0.3);

        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = this.star[0];
            this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 0.8);

        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = this.star[0];
            this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.3);

        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = this.star[0];
            this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.8);

        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = this.yeah[0];
            this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
        }, 2.3);


    }

    OnEndBtn(_event: cc.Event) {
        window.close();
    }



    // update (dt) {}
}

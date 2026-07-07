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

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
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
            this.node.getChildByName("end").active = true;
        }, 2);
        this.scheduleOnce(() => {
            this.node.getChildByName("1").active = true;
            cc.audioEngine.playEffect(this.star[0], false);
            this.scheduleOnce(() => {
                this.node.getChildByName("2").active = true;
                cc.audioEngine.playEffect(this.star[0], false);
                this.scheduleOnce(() => {
                    this.node.getChildByName("3").active = true;
                    cc.audioEngine.playEffect(this.star[0], false);

                }, 0.8)
            }, 0.4)
        }, 0.1)

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

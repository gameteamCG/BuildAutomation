import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    private popSound: cc.AudioClip = null;

    @property(cc.AudioClip)
    private star: cc.AudioClip = null;

    @property(cc.AudioClip)
    private yeah: cc.AudioClip = null;

    start() {
        console.log("showedScreen--Congratulations");
        startGame.Instance.node.getChildByName("progress").opacity = 0;
        startGame.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, "possitive6", true);
        this.scheduleOnce(() => {
            cc.tween(this.node.getChildByName("amazing")).to(0.5, { scale: 0.8, y: -100 }, { easing: "sineInOut" }).start();
        }, 0.3);

        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.star, false)
            cc.tween(this.node.getChildByName("1"))
                .to(0.5, { scale: 0.5 }, { easing: "sineInOut" }).start();
        }, 0.8);

        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.star, false)
            cc.tween(this.node.getChildByName("2"))
                .to(0.5, { scale: 0.4 }, { easing: "sineInOut" }).start();
        }, 1.3);

        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.star, false)
            cc.tween(this.node.getChildByName("3"))
                .to(0.5, { scale: 0.4 }, { easing: "sineInOut" }).start();
        }, 1.8);
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.yeah, false)
            this.node.getChildByName("confetti1").setPosition(-500, 0);
            this.node.getChildByName("confetti1").getComponent(cc.Animation).play();
            this.node.getChildByName("confetti2").setPosition(500, 0);
            this.node.getChildByName("confetti2").getComponent(cc.Animation).play();
            console.log("gameEnded--" + true);
        }, 2.5);
    }
}

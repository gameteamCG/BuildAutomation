const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    ExplanationVos: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    exitVO: cc.AudioClip = null

    onLoad() {
        cc.director.preloadScene("1");
    }

    start() {
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.scheduleOnce(() => {
            this.node.getChildByName("1").active = false;
            this.node.getChildByName("2").active = true;
            this.node.getChildByName("box").getChildByName("1").active = false;
            this.node.getChildByName("box").getChildByName("2").active = true;
            cc.audioEngine.playEffect(this.ExplanationVos[1], false);
            this.scheduleOnce(() => {
                this.node.getChildByName("2").active = false;
                this.node.getChildByName("3").active = true;
                this.node.getChildByName("box").getChildByName("2").active = false;
                this.node.getChildByName("box").getChildByName("3").active = true;
                cc.audioEngine.playEffect(this.ExplanationVos[2], false);
                this.scheduleOnce(() => {
                    this.node.getChildByName("3").active = false;
                    this.node.getChildByName("4").active = true;
                    this.node.getChildByName("box").getChildByName("3").active = false;
                    this.node.getChildByName("box").getChildByName("4").active = true;
                    cc.audioEngine.playEffect(this.ExplanationVos[3], false);
                    this.scheduleOnce(() => {
                        this.callEnd();
                    }, this.ExplanationVos[3].duration);
                }, this.ExplanationVos[2].duration);
            }, this.ExplanationVos[1].duration);
        }, this.ExplanationVos[0].duration);
    }

    callEnd() {
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                cc.director.loadScene("1");
            }, 0.8)
        }, 1)
    }

    skipGame() {
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                cc.director.loadScene("1");
            }, 0.8)
        }, 1)
    }
}

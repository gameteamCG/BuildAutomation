// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import startGame from "../../Framework/Scripts/StartGame";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    videoPlayerNode: cc.Node = null;
    @property(cc.Node)
    videoPlayerTools: cc.Node = null;
    @property(cc.Node)
    curtain: cc.Node = null;
    @property(cc.AudioClip)
    helloAudio: cc.AudioClip = null;
    @property(cc.AudioClip)
    voAudio: cc.AudioClip = null;
    @property(cc.AudioClip)
    btnClick: cc.AudioClip = null;

    private jockeyName: string = null;

    anim1Name: string = "hello Everyone";
    anim2Name: string = "talk action loop";



    onLoad() {
        console.log("loading--100");
        console.log("loaderComplete--true");
        // this.playAnimation();
        this.scheduleOnce(() => {
            if (startGame.Instance.jockeyName == "tlc") {
                this.node.getChildByName("tlc").active = true;
            }
        }, 0.5);

    }

    playAnimation() {
        cc.tween(this.node.children[0]).to(0.5, { x: 0 }, { easing: "backInOut" }).start();
        let jockeyNode: cc.Node = this.node.children[0].getChildByName(this.jockeyName);
        jockeyNode.active = true;
        this.scheduleOnce(() => {
            jockeyNode.getComponent(sp.Skeleton).setAnimation(0, this.anim1Name, false);
            cc.audioEngine.playEffect(startGame.Instance.introAudio1, false);
            this.scheduleOnce(() => {
                jockeyNode.getComponent(sp.Skeleton).setAnimation(0, this.anim2Name, true);
                cc.audioEngine.playEffect(startGame.Instance.introAudio2, false);
                this.scheduleOnce(() => {
                    jockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    cc.tween(this.node.children[0]).to(0.5, { opacity: 0 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        this.curtain.getComponent(cc.Animation).play();
                        this.videoPlayerNode.active = true;
                        this.videoPlayerTools.active = true;
                        this.node.active = false;
                    }, 0.5);
                }, startGame.Instance.introAudio2.duration);
            }, startGame.Instance.introAudio1.duration + 0.5);
            // this.scheduleOnce(() => {
            //     this.node.children[1].active = false;
            //     this.node.children[2].active = true;
            //     cc.audioEngine.playEffect(this.voAudio, false);
            //     this.scheduleOnce(() => {
            //         this.Play();
            //     }, this.voAudio.duration + 0.5);
            // }, this.helloAudio.duration + 0.2);

        }, 0.5);
    }
    // Play(_event: cc.Event) {
    //     this.curtain.getComponent(cc.Animation).play();
    //     _event.target.getComponent(cc.Button).interactable = false;
    //     this.node.active = false;
    //     this.videoPlayerNode.active = true;
    //     this.videoPlayerTools.active = true;
    // }

    Play() {
        this.videoPlayerNode.getComponent(cc.VideoPlayer).remoteURL = startGame.Instance.videoLink;
        this.jockeyName = startGame.Instance.jockeyName;
        this.node.getChildByName("tlc").active = false;
        cc.audioEngine.playEffect(this.btnClick, false);
        this.node.getChildByName("play").getComponent(cc.Button).interactable = false;
        cc.tween(this.node.getChildByName("title")).to(1, { y: 800 }, { easing: "backInOut" }).start();
        cc.tween(this.node.getChildByName("play")).to(1, { y: -800 }, { easing: "backInOut" }).start();

        if (startGame.Instance.introAudio1 && startGame.Instance.introAudio2) {
            this.scheduleOnce(() => {
                this.playAnimation();
            }, 0.5);
        }
        else {
            this.scheduleOnce(() => {
                this.curtain.getComponent(cc.Animation).play();
                this.videoPlayerNode.active = true;
                this.videoPlayerTools.active = true;
                this.node.active = false;
            }, 0.5);
        }
    }

    // update (dt) {}
}

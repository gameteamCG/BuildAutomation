// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:

import startGame from "../../../Framework/Scripts/StartGame";

// import startGame from "../../Framework/Scripts/StartGame";

// import startGame from "../../../Framework/Scripts/StartGame";

//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

const closeWindow = () => {
  window.open(location.href, "_self", "");
  window.close();
};

@ccclass
export default class GameEnd extends cc.Component {
  @property(cc.AudioClip)
  private popSound: cc.AudioClip = null;

  @property(cc.AudioClip)
  private star: cc.AudioClip = null;

  @property(cc.AudioClip)
  private yeah: cc.AudioClip = null;

  private fantastic: cc.Node = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    this.fantastic = this.node.getChildByName("Fantastic");
    startGame.Instance.node.getChildByName("progress").opacity = 0;
    startGame.Instance.JockeyNode.getChildByName(startGame.Instance.jockeyName).active = false;
    console.log("showedScreen--Congratulations");
    // this.scheduleOnce(() => {
    //   cc.tween(this.node.getChildByName("Fantastic"))
    //     .to(0.5, { scale: 0.8 }, { easing: "sineInOut" })
    //     .start();
    // }, 0.3);

    this.scheduleOnce(() => {
      this.node.getComponent(cc.AudioSource).clip = this.star;
      this.node.getComponent(cc.AudioSource).play();
      cc.tween(this.fantastic.getChildByName("Star1"))
        .to(0.5, { scale: 0.6 }, { easing: "quartOut" })
        .start();
    }, 0.8);

    this.scheduleOnce(() => {
      this.node.getComponent(cc.AudioSource).clip = this.star;
      this.node.getComponent(cc.AudioSource).play();
      cc.tween(this.fantastic.getChildByName("Star2"))
        .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
        .start();
    }, 1.3);

    this.scheduleOnce(() => {
      this.node.getComponent(cc.AudioSource).clip = this.star;
      this.node.getComponent(cc.AudioSource).play();
      cc.tween(this.fantastic.getChildByName("Star3"))
        .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
        .start();
    }, 1.8);
    this.scheduleOnce(() => {
      this.node.getComponent(cc.AudioSource).clip = this.yeah;
      this.node.getComponent(cc.AudioSource).play();
      console.log("gameEnded--" + true);
    }, 2.5);

    // this.scheduleOnce(() => {
    //   let node = this.node.getChildByName("end");
    //   node.active = true;
    // }, 3);
  }

  public EndButton() {
    // cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
    closeWindow();
  }
}

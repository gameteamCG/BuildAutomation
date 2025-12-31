// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

export enum JOCKEY_TYPE {
  POSITIVE,
  NEGATIVE,
}

@ccclass
export default class JockeyController extends cc.Component {
  @property(cc.AudioClip)
  public positiveVos: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  public negativeVos: cc.AudioClip[] = [];

  public positiveAnims: string[] = [];
  public negativeAnims: string[] = [];

  private static instance: JockeyController = null;

  private jockey: cc.Node = null;

  public static get JOCKEY() {
    return JockeyController.instance;
  }

  protected onLoad(): void {
    JockeyController.instance = this;
  }

  protected start(): void {
    this.jockey = this.node;
    this.positiveAnims = [
      "positive_1",
      "positive_2",
      "positive_3",
      "positive_4",
      "positive_5",
    ];
    this.negativeAnims = [
      "negative_1",
      "negative_2",
      "negative_3",
      "negative_4",
      "negative_5",
    ];
  }

  public callJockey(type: JOCKEY_TYPE, onCompleteAction?: Function) {
    let animArr: string[];
    let audioZone: cc.AudioClip[];
    let animNum = this.getRandomIntInRange(0, 4);
    switch (type) {
      case JOCKEY_TYPE.POSITIVE:
        animArr = this.positiveAnims;
        audioZone = this.positiveVos;
        break;
      case JOCKEY_TYPE.NEGATIVE:
        animArr = this.negativeAnims;
        audioZone = this.negativeVos;
        break;
    }

    cc.tween(this.jockey)
      .to(0.5, { x: 450 }, { easing: "sineInOut" })
      .call(() => {
        let comp = this.jockey
          .getComponent(sp.Skeleton)
          .setAnimation(0, animArr[animNum], false);
        cc.audioEngine.playEffect(audioZone[animNum], false);
      })
      .delay(audioZone[animNum].duration)
      .to(0.5, { x: 1500 }, { easing: "sineInOut" })
      .call(() => {
        let comp = this.jockey
          .getComponent(sp.Skeleton)
          .setAnimation(0, "idle", false);
        if (onCompleteAction) {
          onCompleteAction();
        }
      })
      .start();
  }

  getRandomIntInRange(min, max) {
    // RNG generator, MIN and MAX inclusive
    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error("Both min and max must be numbers");
    }
    if (min > max) {
      throw new Error("min must be less than or equal to max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

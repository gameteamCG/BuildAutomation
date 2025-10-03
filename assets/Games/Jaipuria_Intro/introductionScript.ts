const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.AudioClip)
  introVO: cc.AudioClip = null;

  @property(cc.AudioClip)
  exitVO: cc.AudioClip = null;

  @property(cc.RichText)
  richText: cc.RichText = null;

  @property
  typingSpeed: number = 0.1;
  private currentIndex: number = 0;
  private currentIntro: number = 0;
  private currentText: string = "";
  delay: number[] = [];
  duration: number[] = [];
  text: string;
  TextArray: string[] = [];

  onLoad() {
    cc.director.preloadScene("1");
    this.duration = [5.6, 6.2, 3.8, 20];
    this.TextArray = [
      "Today we will learn about the costumes worn all around the world.",
      "People in different parts of the world wear different types of clothes.",
      "These special clothes are called costumes.",
      "Today, we will look at some of the costumes worn in different countries like Kilt in Scotland, Hulpil in Mexico, Kimono in Japan, Saree in India, Hanbok in Korea and Agbada in Africa.",
    ];
  }

  typeLetter() {
    if (this.currentIndex < this.text.length) {
      this.currentText += this.text[this.currentIndex];
      this.richText.string = this.currentText;
      this.currentIndex++;
    } else {
      this.unschedule(this.typeLetter);
    }
  }

  resetText() {
    this.currentIntro++;
    this.richText.string = "";
    this.currentIndex = 0;
    this.currentText = "";
    this.unschedule(this.typeLetter);
    this.text = this.TextArray[this.currentIntro];
  }

  callCurrentText() {
    this.schedule(this.typeLetter, this.typingSpeed);
    this.node
      .getChildByName("jockey")
      .getComponent(sp.Skeleton)
      .setAnimation(0, "talk action loop", true);
    this.scheduleOnce(() => {
      this.node
        .getChildByName("jockey")
        .getComponent(sp.Skeleton)
        .setAnimation(0, "idle", true);
      this.resetText();
      if (this.currentIntro == this.duration.length) {
        this.callEnd();
      } else {
        this.callCurrentText();
      }
    }, this.duration[this.currentIntro]);
  }

  start() {
    this.text = this.TextArray[this.currentIntro];
    this.callCurrentText();
    this.node.getChildByName("spine").active = true;
    cc.audioEngine.playEffect(this.introVO, false);
  }

  callEnd() {
    cc.audioEngine.playEffect(this.exitVO, false);
    this.node
      .getChildByName("transition")
      .getComponent(cc.Animation)
      .play("anim");
    this.scheduleOnce(() => {
      this.node
        .getChildByName("transition")
        .getComponent(cc.Animation)
        .play("anim2");
      this.scheduleOnce(() => {
        cc.director.loadScene("1");
      }, 0.8);
    }, 2.5);
  }

  skipGame() {
    cc.audioEngine.stopAllEffects();
    this.node
      .getChildByName("jockey")
      .getComponent(sp.Skeleton)
      .setAnimation(0, "idle", true);
    this.unscheduleAllCallbacks();
    this.node
      .getChildByName("transition")
      .getComponent(cc.Animation)
      .play("anim");
    this.scheduleOnce(() => {
      this.node
        .getChildByName("transition")
        .getComponent(cc.Animation)
        .play("anim2");
      this.scheduleOnce(() => {
        this.node.getChildByName("spine").active = false;
        this.node.children[0].children[0].active = false;
        cc.director.loadScene("1");
      }, 0.8);
    }, 2.5);
  }
}

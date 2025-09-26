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
    this.duration = [4.5, 24.5, 10.0, 5.5, 6.5, 8.2];
    this.TextArray = [
      "Today, let's learn about straight and curved lines.",
      "Look at the screen. Here, you can see two lines one is marked as a straight line and the other as a curved line. A straight line is the shortest distance between two points. It does not bend. A curved line is not straight it bends or changes direction.",
      "Straight lines can be of three types:\nHorizontal or sleeping line – this line goes straight across from left to right.",
      "Vertical or standing line – this line goes straight up and down.",
      "Slanting line – this line is tilted; it is neither horizontal nor vertical.",
      "We see these types of lines around us every day — in books, buildings, roads, and nature.",
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

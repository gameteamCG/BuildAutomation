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
    this.duration = [5.7, 8.0, 5.3, 7.0, 6.3, 5.6, 6.0, 9.9];
    this.TextArray = [
      "Today, we will learn about the different parts of a day.",
      "A day has four main parts — morning, noon, evening, and night.",
      "In the morning, the sun rises and we wake up.",
      "At noon, the sun is high in the sky and it’s the middle of the day.",
      "In the evening, the sun sets and it starts getting dark.",
      "At night, the stars come out and we go to sleep.",
      "We do different activities at different times of the day.",
      "For example, we go to school in the morning, eat lunch at noon, play in the evening, and sleep at night.",
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

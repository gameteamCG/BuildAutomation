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
    private currentText: string = '';
    delay: number[] = [];
    duration: number[] = [];
    text: string;
    TextArray: string[] = []

    onLoad() {
        cc.director.preloadScene("1");
        this.duration = [4.8, 9.7, 3.8, 3.9, 5.3, 4.0, 4.2, 8.3, 7.2]
        this.TextArray = [
            "Let’s learn about something very important - water!",
            "Water is a precious resource. All living things like plants, animals, and people need water to live.",
            "We use water in many ways every day.",
            "Drinking – we drink clean water to stay healthy.",
            "Cooking – we use water to cook food like rice, dal, and soup.",
            "Bathing – water keeps our body clean and fresh.",
            "Washing clothes – we wash our clothes with water to keep them neat.",
            "Water is also home to many animals like fish, whales, dolphins, and octopuses.",
            "So, we must not waste water. \n Let’s use it carefully and keep it clean."
        ]
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
        this.currentText = '';
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    }

    callCurrentText() {
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(() => {
            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.resetText();
            if (this.currentIntro == this.duration.length) {
                this.callEnd();
            }
            else {
                this.callCurrentText();
            }
        }, this.duration[this.currentIntro])
    }

    start() {
        this.text = this.TextArray[this.currentIntro];
        this.callCurrentText();
        this.node.getChildByName("spine").active = true;
        cc.audioEngine.playEffect(this.introVO, false);
    }

    callEnd() {
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                cc.director.loadScene("1");
            }, 0.8)
        }, 2.5)
    }

    skipGame() {
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                this.node.getChildByName("spine").active = false;
                this.node.children[0].children[0].active = false;
                cc.director.loadScene("1");
            }, 0.8)
        }, 2.5)
    }
}
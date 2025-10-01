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
        this.duration = [5.0, 13.4, 8.3, 9.1, 5.9, 10.1, 17.0, 12.0, 10.8, 10.2, 11.7, 11.2]
        this.TextArray = [
            "Today, we will learn about the different seasons in a year.",
            "The year is divided into different seasons, and each season has its own special weather and characteristics.\nWorldwide, there are four main seasons:",
            "Winter – In this season, it is very cold, and in some places, it even snows.",
            "Spring – This season comes after winter. New leaves grow, and flowers bloom.",
            "Summer – During this season the weather is very hot.",
            "Autumn – This season comes before winter. Trees shed their leaves and the weather becomes pleasant.",
            "In Bharat, there are six seasons, also called ritus:\nShishir or winter – The weather is very cold in this season. It falls in January and February.",
            "Vasanta or spring  – In this season, new leaves grow and flowers bloom. It falls in March and April.",
            "Grishma or summer – The weather is very hot in this season. It falls in May and June.",
            "Varsha or rainy – This is the rainy season. It falls in July and August.",
            "Sharad or autumn  – In this season, leaves fall from the trees. It falls in September and October.",
            "Hemanta or pre-winter – The weather is slightly cold in this season. It falls in November and December."
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
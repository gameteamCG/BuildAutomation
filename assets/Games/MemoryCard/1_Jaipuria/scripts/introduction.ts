const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    ExplanationVos: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    exitVO: cc.AudioClip = null

    @property(cc.RichText)
    richText: cc.RichText = null;

    @property
    typingSpeed: number = 0.1;
    private currentIndex: number = 0;
    private currentIntro: number = 0;
    private currentText: string = '';
    durationArray: number[] = [];
    delay: number[] = [];
    text: string;
    TextArray: string[] = []

    onLoad() {
        cc.director.preloadScene("1");
        this.durationArray = [2, 4.5, 5.5, 3.5, 8, 6, 6.2, 4.2, 4, 2];
        this.delay = [1, 0, 0, 0, 2, 2, 1.7, 1.7, 1.5, 2];
        this.TextArray = [
            "Read the following sentences",
            "I will grow a nice, strong plant before nani visits us.",
            "Nia took the tiny seed that nani gave her and put it in a big, round pot.",
            "The seed turned into a healthy plant.",
            "The words, nice, strong, tiny, and healthy in the lines read describe the qualities of the plant.",
            "The words, big and round in the second line describe the qualities of the pot.",
            "They describe the qualities of naming words. These are called describing words.",
            "Do you know colours and numbers can also be describing words",
            "red, one, pink, three are also few examples of describing words",
            "red, one, pink, three are also few examples of describing words",
        ]


    }

    typeLetter() {
        // if (this.currentIndex < this.text.length) {
        //     this.currentText += this.text[this.currentIndex];
        //     this.richText.string = this.currentText;
        //     this.currentIndex++;
        // } else {
        //     this.unschedule(this.typeLetter);
        // }
    }

    resetText() {
        this.currentIntro++;
        //this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    }

    callCurrentText() {
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(() => {
            console.log(this.currentIntro, "--", this.durationArray[this.currentIntro], this.delay[this.currentIntro])
            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.resetText();
            if (this.currentIntro == this.TextArray.length) {
                this.callEnd();
            }
            else {
                this.callCurrentText();
            }
        }, this.durationArray[this.currentIntro] + this.delay[this.currentIntro])
    }

    start() {
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        // this.text = this.TextArray[this.currentIntro];
        this.node.getChildByName("spine").active = true;
        this.callCurrentText();
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
                cc.director.loadScene("1");
            }, 0.8)
        }, 2.5)
    }
}

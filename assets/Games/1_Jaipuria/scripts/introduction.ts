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
        this.durationArray = [10.128, 2.832, 4.128, 4.608, 7.608, 3.888, 4.056, 3.576, 2.256, 5.496, 4.728, 8.184
            , 6.168, 1.992, 2.832];
        this.delay = [1.5, 1.5, 1.5, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 1.5, 1.5];
        this.TextArray = [
            "Naming Words and Special Names",
            "Read these sentences from the story.",
            "She had to draw different places of Bharat.",
            "On adding the tens with tens and ones with ones, we get:",
            "2 tens + 13 ones (7 ones + 6 ones) give us 13 ones.",
            "Since 13 ones is 1 tens and 3 ones.",
            "2 tens + 1 tens = 3 tens.",
            "So the total is 3 tens and 3 ones",
            "Method 2: Column method",
            "To add 27 and 6, first write the numbers in the column form.",
            "Then add the ones, 7 + 6 = 13.",
            "Carry over the 1 to tens place and then add, 2 + 1 (carried over) = 3.",
            "So, the total is: 27 + 6 = 33.",
            "Let's try another one!",
            "Addition of 45 and 9."
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
        //this.currentText = '';
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
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.text = this.TextArray[this.currentIntro];
        this.node.getChildByName("spine").active = true;
        //this.callCurrentText();
        this.scheduleOnce(() => {
            this.callEnd();
        }, this.ExplanationVos[0].duration);
    }

    callEnd() {
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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

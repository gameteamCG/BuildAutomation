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
            , 6.168, 1.992, 2.832, 4.608, 6.696, 4.512, 4.416, 3.456, 5.112, 7.2, 5.232, 6.072];
        this.delay = [1.5, 1.5, 1.5, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1.5, 1.5];
        this.TextArray = [
            "Today, we will learn how to add a 2-digit number with a 1-digit number with carry over. There are various methods to do this:",
            "Method 1: Using base ten blocks",
            "Let us look at the addition of 27 and 6.",
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
            "Addition of 45 and 9.",
            // "Method 1: Using Base Ten Blocks",
            "On adding the tens with tens and ones with ones, we get:",
            "4 tens + 14 ones (9 ones + 5 ones) give us 14 ones.",
            "Since 14 ones = 1 ten and 4 ones.",
            "4 tens + 1 tens = 5 tens.",
            "The total is: 5 tens and 4 ones.",
            // "Method 2: Column Method",
            "To add 45 and 9, first write the numbers in column form.",
            "Add the ones: 5 + 9 = 14 (write 4, carry forward 1).",
            "Add the tens: 4 + 1 (carried over) = 5.",
            "So, the total is: 45 + 9 = 54."
        ]


    }

    // typeLetter() {
    //     if (this.currentIndex < this.text.length) {
    //         this.currentText += this.text[this.currentIndex];
    //         this.richText.string = this.currentText;
    //         this.currentIndex++;
    //     } else {
    //         this.unschedule(this.typeLetter);
    //     }
    // }

    // resetText() {
    //     this.currentIntro++;
    //     this.richText.string = "";
    //     this.currentIndex = 0;
    //     this.currentText = '';
    //     this.unschedule(this.typeLetter);
    //     this.text = this.TextArray[this.currentIntro];
    // }

    // callCurrentText() {
    //     this.schedule(this.typeLetter, this.typingSpeed);
    //     this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
    //     this.scheduleOnce(() => {
    //         console.log(this.currentIntro, "--", this.durationArray[this.currentIntro], this.delay[this.currentIntro])
    //         this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
    //         this.resetText();
    //         if (this.currentIntro == this.TextArray.length) {
    //             this.callEnd();
    //         }
    //         else {
    //             this.callCurrentText();
    //         }
    //     }, this.durationArray[this.currentIntro] + this.delay[this.currentIntro])
    // }

    start() {
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        // this.text = this.TextArray[this.currentIntro];
        // this.node.getChildByName("spine").active = true;
        // this.callCurrentText();
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.ExplanationVos[1], false);
            this.richText.string = "પરિવારના સભ્યો";
            this.node.getChildByName("1").active = false;
            this.node.getChildByName("2").active = true;
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.ExplanationVos[2], false);
                this.richText.string = "👨 Father – પરિવારનું ધ્યાન રાખે છે.";
                this.node.getChildByName("2").active = false;
                this.node.getChildByName("3").active = true;
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.ExplanationVos[3], false);
                    this.richText.string = "👩 Mother - બધાનો પ્રેમ અને કાળજી રાખે છે.";
                    this.node.getChildByName("3").active = false;
                    this.node.getChildByName("4").active = true;
                    this.scheduleOnce(() => {
                        cc.audioEngine.playEffect(this.ExplanationVos[4], false);
                        this.richText.string = "👦 Brother - મારો ભાઈ મારો મિત્ર છે.";
                        this.node.getChildByName("4").active = false;
                        this.node.getChildByName("5").active = true;
                        this.scheduleOnce(() => {
                            cc.audioEngine.playEffect(this.ExplanationVos[5], false);
                            this.richText.string = "👧 Sister - મારી બહેન મારી મિત્ર છે.";
                            this.node.getChildByName("5").active = false;
                            this.node.getChildByName("6").active = true;
                            this.scheduleOnce(() => {
                                cc.audioEngine.playEffect(this.ExplanationVos[6], false);
                                this.richText.string = "👴 Grandfather - વાર્તાઓ કહે છે અને શીખવે છે.";
                                this.node.getChildByName("6").active = false;
                                this.node.getChildByName("7").active = true;
                                this.scheduleOnce(() => {
                                    cc.audioEngine.playEffect(this.ExplanationVos[7], false);
                                    this.richText.string = "👵 Grandmother - પ્રેમ અને કાળજી લે છે.";
                                    this.node.getChildByName("7").active = false;
                                    this.node.getChildByName("8").active = true;
                                    this.scheduleOnce(() => {
                                        cc.audioEngine.playEffect(this.ExplanationVos[8], false);
                                        this.richText.string = "અમારું કુટુંબ ખાસ અને મહત્વપૂર્ણ છે!";
                                        this.node.getChildByName("8").active = false;
                                        this.node.getChildByName("9").active = true;
                                        this.scheduleOnce(() => {
                                            this.callEnd();
                                        }, this.ExplanationVos[8].duration);

                                    }, this.ExplanationVos[7].duration);

                                }, this.ExplanationVos[6].duration);

                            }, this.ExplanationVos[5].duration);

                        }, this.ExplanationVos[4].duration);
                    }, this.ExplanationVos[3].duration);

                }, this.ExplanationVos[2].duration);

            }, this.ExplanationVos[1].duration);
        }, this.ExplanationVos[0].duration);
        // this.scheduleOnce(() => {
        //     this.callEnd();
        // }, this.ExplanationVos[0].duration);
    }

    callEnd() {
        // cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                cc.director.loadScene("1");
            }, 0.8)
        }, 1)
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
        }, 1)
    }
}

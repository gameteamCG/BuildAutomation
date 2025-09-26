

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    IntroVO: cc.AudioClip = null

    @property(cc.AudioClip)
    ExplanationVos: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    ExplanationVos2: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    ExplanationVos3: cc.AudioClip[] = [];

    @property(cc.Node)
    examples: cc.Node[] = [];

    @property(cc.Label)
    richText: cc.Label = null;

    text: string;
    TextArray: string[] = []
    @property
    typingSpeed: number = 0.1;

    private currentIndex: number = 0;

    private currentText: string = '';

    private currentAnimal: number = 0;

    onLoad() {
        cc.director.preloadScene("1");
        this.TextArray = [
            "There are a few properties or rules we should remember in addition.",
            "Property 1: On adding 1 to any number, we get the number that is next to it in counting.It is also known as the successor of that number.",
            "For example: 4 + 1 = 5. (5 is the successor of 4).",
            "7 + 1 = 8. (8 is the successor of 7).",
            "Property 2: On adding 0 to any number, the number remains the same.",
            "4 + 0 = 4.",
            "9 + 0 = 9.",
            "Property 3: On adding two numbers in any order, the results remain the same.",
            "2 + 1 = 3 or 1 + 2 = 3.",
            "5 + 3 = 8 or 3 + 5 = 8."
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
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
        this.unschedule(this.typeLetter);
    }

    start() {
        this.StartIntro();
    }

    StartIntro() {
        cc.audioEngine.playEffect(this.IntroVO, false);
        this.text = this.TextArray[0];
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            this.resetText();
            this.scheduleOnce(() => {
                this.Intro1();
            }, 1)
        }, this.IntroVO.duration + 1.5)
    }

    Intro1() {
        this.examples[this.currentAnimal].children[0].active = true;
        this.resetText();
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.text = "Birds are animals we often see flying in the sky."
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            this.resetText();
            this.text = "They have wings and feathers, and most birds can fly.";
            this.schedule(this.typeLetter, this.typingSpeed);
            cc.audioEngine.playEffect(this.ExplanationVos[1], false);
            this.examples[this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(this.examples[this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                this.examples[this.currentAnimal].getChildByName("arrow2").active = true;
                cc.tween(this.examples[this.currentAnimal].getChildByName("2"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            }, 0.7)
            this.scheduleOnce(() => {
                this.resetText();
                cc.audioEngine.playEffect(this.ExplanationVos[2], false);
                this.text = "Birds eat with their beaks because they don't have teeth.";
                this.schedule(this.typeLetter, this.typingSpeed);
                this.examples[this.currentAnimal].getChildByName("arrow3").active = true;
                cc.tween(this.examples[this.currentAnimal].getChildByName("3"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    this.resetText();
                    this.text = "They also have two legs. Not all birds can fly."
                    this.schedule(this.typeLetter, this.typingSpeed);
                    cc.audioEngine.playEffect(this.ExplanationVos[3], false);
                    this.examples[this.currentAnimal].getChildByName("arrow4").active = true;
                    cc.tween(this.examples[this.currentAnimal].getChildByName("4"))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        this.resetText();
                        this.text = "Sparrow and pigeon are some examples of birds."
                        this.schedule(this.typeLetter, this.typingSpeed);
                        cc.audioEngine.playEffect(this.ExplanationVos[4], false);
                        this.examples[this.currentAnimal].active = false;
                        cc.tween(this.node.getChildByName("examples1").children[0])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(this.node.getChildByName("examples1").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        this.scheduleOnce(() => {
                            cc.tween(this.node.getChildByName("examples1").children[1])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                            cc.tween(this.node.getChildByName("examples1").children[3])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        }, 1)
                        this.scheduleOnce(() => {
                            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            this.examples[this.currentAnimal].active = false;
                            this.currentAnimal++;
                            this.resetText();
                            this.Intro2();
                        }, this.ExplanationVos[4].duration + 1.3)
                    }, this.ExplanationVos[3].duration + 0.3)
                }, this.ExplanationVos[2].duration + 1.3)
            }, this.ExplanationVos[1].duration + 1.3)
        }, this.ExplanationVos[0].duration + 1)
    }
    Intro2() {
        this.examples[this.currentAnimal].active = true;
        this.node.getChildByName("examples1").active = false;
        this.examples[this.currentAnimal].children[0].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.resetText();
        cc.audioEngine.playEffect(this.ExplanationVos2[0], false);
        this.text = "Insects are tiny animals with six legs."
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            this.examples[this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(this.examples[this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }, 2)
        this.scheduleOnce(() => {
            this.resetText();
            cc.audioEngine.playEffect(this.ExplanationVos2[1], false);
            this.text = "Some insects have wings and can fly."
            this.schedule(this.typeLetter, this.typingSpeed);
            this.examples[this.currentAnimal].getChildByName("arrow2").active = true;
            cc.tween(this.examples[this.currentAnimal].getChildByName("2"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                this.resetText();
                cc.audioEngine.playEffect(this.ExplanationVos2[3], false);
                this.text = "Mosquito, beetle and ant are some examples of insects."
                this.schedule(this.typeLetter, this.typingSpeed);
                this.examples[this.currentAnimal].active = false;
                cc.tween(this.node.getChildByName("examples2").children[0])
                    .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                cc.tween(this.node.getChildByName("examples2").children[3])
                    .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    cc.tween(this.node.getChildByName("examples2").children[1])
                        .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    cc.tween(this.node.getChildByName("examples2").children[4])
                        .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        cc.tween(this.node.getChildByName("examples2").children[2])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        cc.tween(this.node.getChildByName("examples2").children[5])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    }, 1)
                }, 1.5)
                this.scheduleOnce(() => {
                    this.node.getChildByName("examples2").active = false;
                    this.resetText();
                    cc.audioEngine.playEffect(this.ExplanationVos2[2], false);
                    this.text = "Animals like spiders and ticks are not insects, since they have eight legs."
                    this.schedule(this.typeLetter, this.typingSpeed);
                    this.scheduleOnce(() => {
                        this.examples[this.currentAnimal].active = false;
                        cc.tween(this.node.getChildByName("examples4").children[0])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        cc.tween(this.node.getChildByName("examples4").children[2])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        this.scheduleOnce(() => {
                            cc.tween(this.node.getChildByName("examples4").children[1])
                                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                            cc.tween(this.node.getChildByName("examples4").children[3])
                                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        }, 0.7)
                    }, 1)
                    this.scheduleOnce(() => {
                        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        this.examples[this.currentAnimal].active = false;
                        this.currentAnimal++;
                        this.resetText();
                        this.Intro3();
                    }, this.ExplanationVos2[2].duration + 1)
                }, this.ExplanationVos2[3].duration + 1)
            }, this.ExplanationVos2[1].duration + 0.7)
        }, this.ExplanationVos2[0].duration + 0.7)
    }
    Intro3() {
        this.examples[this.currentAnimal].active = true;
        this.node.getChildByName("examples4").active = false;
        this.examples[this.currentAnimal].children[0].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.resetText();
        this.text = "Reptiles are animals with scales instead of hair or feathers."
        this.schedule(this.typeLetter, this.typingSpeed);
        cc.audioEngine.playEffect(this.ExplanationVos3[0], false);
        this.scheduleOnce(() => {
            this.examples[this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(this.examples[this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }, 2)
        this.scheduleOnce(() => {
            this.resetText();
            this.text = "They live in many places, like on land, in trees, underground, or in water."
            this.schedule(this.typeLetter, this.typingSpeed);
            cc.audioEngine.playEffect(this.ExplanationVos3[1], false);
            this.examples[this.currentAnimal].active = false;
            this.node.getChildByName("exmaples5").active = true;
            this.scheduleOnce(() => {
                cc.tween(this.node.getChildByName("exmaples5").children[0])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                cc.tween(this.node.getChildByName("exmaples5").children[4])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    cc.tween(this.node.getChildByName("exmaples5").children[1])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    cc.tween(this.node.getChildByName("exmaples5").children[5])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        cc.tween(this.node.getChildByName("exmaples5").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(this.node.getChildByName("exmaples5").children[6])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        this.scheduleOnce(() => {
                            cc.tween(this.node.getChildByName("exmaples5").children[3])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                            cc.tween(this.node.getChildByName("exmaples5").children[7])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        }, 1)
                    }, 1)
                }, 1.5)
            }, 2)
            this.scheduleOnce(() => {
                this.node.getChildByName("exmaples5").active = false;
                this.resetText();
                this.text = "Snake, crocodile and lizard are some examples of reptiles."
                this.schedule(this.typeLetter, this.typingSpeed);
                cc.audioEngine.playEffect(this.ExplanationVos3[2], false);
                this.examples[this.currentAnimal].active = false;
                cc.tween(this.node.getChildByName("exmaples3").children[0])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                cc.tween(this.node.getChildByName("exmaples3").children[3])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    cc.tween(this.node.getChildByName("exmaples3").children[1])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    cc.tween(this.node.getChildByName("exmaples3").children[4])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        cc.tween(this.node.getChildByName("exmaples3").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(this.node.getChildByName("exmaples3").children[5])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    }, 1)
                }, 0.7)
                this.scheduleOnce(() => {
                    this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.scheduleOnce(() => {
                        this.node.getChildByName("exmaples3").active = false;
                        this.resetText();
                        this.text = "Let's put to practice what we've just learnt.";
                        this.schedule(this.typeLetter, this.typingSpeed);
                        this.scheduleOnce(() => {
                            cc.director.loadScene("1");
                        }, 0.7)
                    }, 0.5)
                }, this.ExplanationVos3[2].duration + 1)
            }, this.ExplanationVos3[1].duration + 1)
        }, this.ExplanationVos3[0].duration + 1)
    }

    skipGame(event: cc.Event) {
        cc.audioEngine.stopAllEffects();
        cc.director.loadScene("1");
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.unschedule(this.typeLetter);
    }

}
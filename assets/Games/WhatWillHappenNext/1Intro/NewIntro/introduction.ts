const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    exitVO: cc.AudioClip = null;

    @property(cc.AudioClip)
    ExplanationVos: cc.AudioClip[] = [];

    @property(cc.Node)
    examples: cc.Node[] = [];

    @property(cc.Label)
    richText: cc.Label = null;

    text: string[];

    @property
    typingSpeed: number = 0.1;

    private currentIndex: number = 0;
    private currentText: string = '';
    private currentIntro: number = 0;

    onLoad() {
        cc.director.preloadScene("1");
        this.text = [
            "We measure things to know how heavy-light, tall-short, thick-thin, or more-less they are. There are many ways to measure things. Let us learn about them.",
            "The capacity of an object refers to the maximum amount that it can hold.",
            "For example: This jug can hold 3 bottles of water, making it capable of holding more water than each individual bottle.",
            "Let's consider another example: There are 4 different containers - a can, bottle, glass and jug.",
            "Which container holds the least amount of milk?",
            "The answer is the glass, as its capacity is smaller than the rest.",
            "Which container holds the maximum amount of milk?",
            "The can holds the most, as its capacity is the largest among the four.",
            "Which container has the second-largest capacity?",
            "The jug has the second-largest capacity after the can."
        ]
    }

    typeLetter() {
        if (this.currentIndex < this.text[this.currentIntro].length) {
            this.currentText += this.text[this.currentIntro][this.currentIndex];
            this.richText.string = this.currentText;
            this.currentIndex++;
        } else {
            this.unschedule(this.typeLetter);
        }
    }

    resetText() {
        this.currentIntro++;
        console.log(this.currentIntro);
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
    }

    start() {
        this.Intro1();
    }


    Intro1() {
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            cc.tween(this.examples[this.currentIntro].getChildByName("1").children[0])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                cc.tween(this.examples[this.currentIntro].getChildByName("1").children[1])
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    this.examples[this.currentIntro].getChildByName("1").active = false;
                    cc.tween(this.examples[this.currentIntro].getChildByName("2").children[0])
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        cc.tween(this.examples[this.currentIntro].getChildByName("2").children[1])
                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                        this.scheduleOnce(() => {
                            this.examples[this.currentIntro].getChildByName("2").active = false;
                            cc.tween(this.examples[this.currentIntro].getChildByName("3").children[0])
                                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                            this.scheduleOnce(() => {
                                cc.tween(this.examples[this.currentIntro].getChildByName("3").children[1])
                                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                this.scheduleOnce(() => {
                                    this.examples[this.currentIntro].getChildByName("3").active = false;
                                    cc.tween(this.examples[this.currentIntro].getChildByName("4").children[0])
                                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                    this.scheduleOnce(() => {
                                        cc.tween(this.examples[this.currentIntro].getChildByName("4").children[1])
                                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                        this.scheduleOnce(() => {
                                            this.examples[this.currentIntro].getChildByName("4").active = false;
                                            this.scheduleOnce(() => {
                                                this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                                this.examples[this.currentIntro].active = false;
                                                this.resetText();
                                                this.Intro2();
                                            }, 5)
                                        }, 1)
                                    }, 0.5)
                                }, 1)
                            }, 0.5)
                        }, 1)
                    }, 0.5)
                }, 1.5)
            }, 0.5)
        }, 1.7)
    }

    Intro2() {
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.examples[this.currentIntro].active = false;
            this.resetText();
            this.Intro3();
        }, this.ExplanationVos[this.currentIntro].duration + 0.5)
    }

    Intro3() {
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            cc.tween(this.examples[this.currentIntro].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                cc.tween(this.examples[this.currentIntro].getChildByName("2"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    this.examples[this.currentIntro].getChildByName("3").children.forEach(elem => {
                        cc.tween(elem)
                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    },)
                    this.scheduleOnce(() => {
                        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        this.examples[this.currentIntro].active = false;
                        this.resetText();
                        this.Intro4();
                    }, this.ExplanationVos[this.currentIntro].duration - 2)
                }, 1)
            }, 0.5)
        }, 0.8)
    }

    Intro4() {
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            cc.tween(this.examples[this.currentIntro].getChildByName("1"))
                .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                cc.tween(this.examples[this.currentIntro].getChildByName("2"))
                    .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    cc.tween(this.examples[this.currentIntro].getChildByName("3"))
                        .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                    this.scheduleOnce(() => {
                        cc.tween(this.examples[this.currentIntro].getChildByName("4"))
                            .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                        this.scheduleOnce(() => {
                            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            this.resetText();
                            this.Intro5();
                        }, 2.5)
                    }, 0.8)
                }, 0.5)
            }, 0.5)
        }, 5)
    }

    Intro5() {
        cc.audioEngine.playEffect(this.ExplanationVos[4], false);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(() => {
            this.resetText();
            this.schedule(this.typeLetter, this.typingSpeed);
            cc.audioEngine.playEffect(this.ExplanationVos[5], false);
            this.scheduleOnce(() => {
                cc.tween(this.examples[3].getChildByName("3").children[0])
                    .to(0.3, { scale: 1.4 }, { easing: "sineInOut" })
                    .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                    .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                    .start();
                this.scheduleOnce(() => {
                    this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.resetText();
                    this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
                    this.schedule(this.typeLetter, this.typingSpeed);
                    cc.audioEngine.playEffect(this.ExplanationVos[6], false);
                    this.scheduleOnce(() => {
                        this.resetText();
                        this.schedule(this.typeLetter, this.typingSpeed);
                        cc.audioEngine.playEffect(this.ExplanationVos[7], false);
                        this.scheduleOnce(() => {
                            cc.tween(this.examples[3].getChildByName("1").children[0])
                                .to(0.3, { scale: 1.3 }, { easing: "sineInOut" })
                                .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                                .start();
                            this.scheduleOnce(() => {
                                this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                this.resetText();
                                this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
                                this.schedule(this.typeLetter, this.typingSpeed);
                                cc.audioEngine.playEffect(this.ExplanationVos[8], false);
                                this.scheduleOnce(() => {
                                    this.resetText();
                                    this.schedule(this.typeLetter, this.typingSpeed);
                                    cc.audioEngine.playEffect(this.ExplanationVos[9], false);
                                    this.scheduleOnce(() => {
                                        cc.tween(this.examples[3].getChildByName("4").children[0])
                                            .to(0.3, { scale: 1.4 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                            .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                                            .start();
                                        this.scheduleOnce(() => {
                                            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                            this.callEnd();
                                        }, this.ExplanationVos[9].duration + 1)
                                    }, 0.7)
                                }, this.ExplanationVos[4].duration + 1)
                            }, this.ExplanationVos[7].duration + 1)
                        }, 0.7)
                    }, this.ExplanationVos[4].duration + 1)
                }, this.ExplanationVos[5].duration + 0.5)
            }, 0.7)
        }, this.ExplanationVos[4].duration + 1)
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
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        cc.audioEngine.stopAllEffects();
        this.callEnd();
    }

}

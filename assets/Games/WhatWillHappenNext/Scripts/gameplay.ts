
import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    private extraImg: cc.SpriteFrame = null;

    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;

    @property(cc.AudioClip)
    private popSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private popSound2: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private questionSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private positiveSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private negativeSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private positiveAudio: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private negativeAudio: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private stallionPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private stallionNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private bagPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private bagNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private cryonPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private cryonNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private tlcPositive: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private tlcNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private supercubPositive: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private supercubNegative: cc.AudioClip[] = [];

    @property(cc.Material)
    defaultMat: cc.Material = null;

    @property(cc.Material)
    greyMat: cc.Material = null;

    private isFirstClick: boolean = false;
    private canTouch: boolean = false;
    private answerArray: string[] = [];
    private maxLevel: number = 7;
    wrongAnswerCount: number = 0;
    star1Log: boolean = false;
    star2Log: boolean = false;
    star3Log: boolean = false;
    currentJcokey: cc.Node = null;

    correctAudio: cc.AudioClip = null;

    private optionsNode: cc.Node = null;
    private questionBoxPosY: number = 0;

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    onDisable() {
        this.unscheduleAllCallbacks();
    }

    onLoad() {
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        const bgNode = this.node.getChildByName("bg");
        if (bgNode && bgNode.getComponent(cc.Sprite)) {
            bgNode.getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        }

        const currentQuestion = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1];

        if (startGame.Instance.isDemoGame) {
            cc.loader.load(currentQuestion.questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });
            cc.loader.load(currentQuestion.correctAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.correctAudio = audioClip;
            });
            if (currentQuestion.commonOptionImageName != "") {
                cc.loader.load(currentQuestion.commonOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    const qBox = this.node.getChildByName("QuestionBox");
                    if (qBox && qBox.getComponent(cc.Sprite)) {
                        qBox.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    const optionParent = this.node.getChildByName("Option");
                    for (let i = 0; i < currentQuestion.numberOfOptions; i++) {
                        const optChild = optionParent?.getChildByName((i + 1).toString());
                        if (optChild && optChild.getComponent(cc.Sprite)) {
                            optChild.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }

            cc.loader.load(currentQuestion.questionImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                const thirdObj = this.node.getChildByName("QuestionBox")?.getChildByName("ThirdObject");
                if (thirdObj && thirdObj.getComponent(cc.Sprite)) {
                    thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
            });

            for (let i = 0; i < currentQuestion.numberOfOptions; i++) {
                if (!currentQuestion.isOptionText) {
                    cc.loader.load(currentQuestion.options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        const imgNode = this.node.getChildByName("Option")?.getChildByName((i + 1).toString())?.getChildByName("img");
                        if (imgNode && imgNode.getComponent(cc.Sprite)) {
                            imgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                } else {
                    const textNode = this.node.getChildByName("Option")?.getChildByName((i + 1).toString())?.getChildByName("text");
                    if (textNode && textNode.getComponent(cc.Label)) {
                        textNode.getComponent(cc.Label).string = currentQuestion.options[i];
                    }
                }
            }
        } else {
            this.loadAudioClip(currentQuestion.questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            this.loadAudioClip(currentQuestion.correctAudioName, (AudioClip) => {
                this.correctAudio = AudioClip;
            });
            if (currentQuestion.commonOptionImageName != "") {
                this.loadSpriteFrame(currentQuestion.commonOptionImageName, (spriteFrame) => {
                    const qBox = this.node.getChildByName("QuestionBox");
                    if (qBox && qBox.getComponent(cc.Sprite)) {
                        qBox.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    const optionParent = this.node.getChildByName("Option");
                    for (let i = 0; i < currentQuestion.numberOfOptions; i++) {
                        const optChild = optionParent?.getChildByName((i + 1).toString());
                        if (optChild && optChild.getComponent(cc.Sprite)) {
                            optChild.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }
            this.loadSpriteFrame(currentQuestion.questionImageName, (spriteFrame) => {
                const thirdObj = this.node.getChildByName("QuestionBox")?.getChildByName("ThirdObject");
                if (thirdObj && thirdObj.getComponent(cc.Sprite)) {
                    thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
            });

            for (let i = 0; i < currentQuestion.numberOfOptions; i++) {
                if (!currentQuestion.isOptionText) {
                    this.loadSpriteFrame(currentQuestion.options[i], (spriteFrame) => {
                        const imgNode = this.node.getChildByName("Option")?.getChildByName((i + 1).toString())?.getChildByName("img");
                        if (imgNode && imgNode.getComponent(cc.Sprite)) {
                            imgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                } else {
                    const textNode = this.node.getChildByName("Option")?.getChildByName((i + 1).toString())?.getChildByName("text");
                    if (textNode && textNode.getComponent(cc.Label)) {
                        textNode.getComponent(cc.Label).string = currentQuestion.options[i];
                    }
                }
            }
        }

        if (startGame.Instance.jockey) {
            this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        }
    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        const progressNode = startGame.Instance.node.getChildByName("progress");
        if (progressNode) progressNode.opacity = 255;

        this.answerArray = [startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum];
        this.callThirdObjectIn();

        const jName = startGame.Instance.jockeyName;
        if (jName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        } else if (jName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        } else if (jName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        } else if (jName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        } else if (jName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        return Math.round(_number);
    }

    GenerateOptions() {
        const templateNode = this.node.getChildByName("template");
        const optionContainer = this.node.getChildByName("Option");
        if (!templateNode || !optionContainer) return;

        const count = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions;
        for (let i = 0; i < count; i++) {
            let option = cc.instantiate(templateNode);
            option.name = (i + 1).toString();
            option.setParent(optionContainer);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        templateNode.destroy();
    }

    callThirdObjectIn() {
        const questionPanel = this.node.getChildByName("questionPanel");
        if (!questionPanel) return;

        this.questionBoxPosY = questionPanel.y;
        questionPanel.setPosition(cc.v2(0, 1500));
        cc.tween(questionPanel).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();

        const qTextLabel = questionPanel.getChildByName("text")?.getComponent(cc.Label);
        if (qTextLabel) {
            qTextLabel.string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;
        }

        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();

        let posX = -237;
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            posX = -300;
        }

        this.scheduleOnce(() => {
            const questionBox = this.node.getChildByName("QuestionBox");
            if (questionBox) {
                const textLabel = questionBox.getChildByName("text")?.getComponent(cc.Label);
                const thirdObjSprite = questionBox.getChildByName("ThirdObject")?.getComponent(cc.Sprite);

                if (textLabel) {
                    const spriteName = thirdObjSprite?.spriteFrame?.name;
                    const fallbackName = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]?.questionImageName || "";
                    textLabel.string = spriteName || fallbackName;
                }

                this.scheduleOnce(() => {
                    if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
                    cc.tween(questionBox).to(1, { scale: 1 }, { easing: "sineInOut" }).start();
                }, 0.1);

                this.scheduleOnce(() => {
                    cc.tween(questionBox).to(0.5, { x: posX }, { easing: "sineInOut" }).start();
                    this.canTouch = true;
                    this.callOptionIn();
                }, 1);
            }
        }, 1);
    }

    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    }

    callOptionIn() {
        let delay: number = 0.5;
        const optNode = this.node.getChildByName("Option");
        if (!optNode) return;

        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            optNode.setPosition(150, -70);
        }

        const totalChildren = optNode.children.length;
        for (let i = 1; i <= totalChildren; i++) {
            const child = optNode.children[i - 1];
            if (!child) continue;

            child.scale = 0;
            child.opacity = 255;

            this.scheduleOnce(() => {
                if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
                const targetChild = optNode.getChildByName(i.toString());
                if (targetChild) {
                    cc.tween(targetChild).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                }
                if (i === totalChildren) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        }
    }

    PlayQuestionAudio() {
        const optionNode = this.node.getChildByName("Option");
        if (!optionNode) return;

        optionNode.children.forEach(element => {
            const btn = element.getComponent(cc.Button);
            if (btn) btn.interactable = false;
        });

        if (this.currentJcokey) {
            this.currentJcokey.active = true;
        }

        const isSpecialJockey = startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub";
        const currentQ = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1];

        if (!isSpecialJockey) {
            if (currentQ.shouldPlayQuestionAudio && this.questionSound[0]) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            optionNode.children.forEach(element => {
                const btn = element.getComponent(cc.Button);
                if (btn) btn.interactable = true;
            });
            if (globalVariables.Instance.currentLevel == 1) {
                this.setupTutorialHand();
            }
        } else {
            let intoAnim = "intro";
            if (startGame.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            } else {
                this.currentJcokey.setPosition(450, -370);
            }

            const skeleton = this.currentJcokey?.getComponent(sp.Skeleton);
            if (!skeleton) return;

            skeleton.setAnimation(0, intoAnim, false);
            const animDuration = skeleton.findAnimation(intoAnim)?.duration || 0.5;

            this.scheduleOnce(() => {
                if (!currentQ.shouldPlayQuestionAudio) {
                    optionNode.children.forEach(element => {
                        const btn = element.getComponent(cc.Button);
                        if (btn) btn.interactable = true;
                    });
                    if (globalVariables.Instance.currentLevel == 1) {
                        this.setupTutorialHand();
                    }
                } else {
                    if (this.questionSound[0]) {
                        cc.audioEngine.playEffect(this.questionSound[0], false);
                    }
                    skeleton.setAnimation(0, "intro_loop", true);
                    const qSoundDuration = this.questionSound[0]?.duration || 1;

                    this.scheduleOnce(() => {
                        skeleton.setAnimation(0, "intro_end", false);
                        const endDuration = skeleton.findAnimation("intro_end")?.duration || 0.5;

                        this.scheduleOnce(() => {
                            skeleton.setAnimation(0, "idle", true);
                            optionNode.children.forEach(element => {
                                const btn = element.getComponent(cc.Button);
                                if (btn) btn.interactable = true;
                            });
                            if (globalVariables.Instance.currentLevel == 1) {
                                this.setupTutorialHand();
                            }
                        }, endDuration);
                    }, qSoundDuration);
                }
            }, animDuration);
        }
    }

    private setupTutorialHand() {
        const hand = this.node.getChildByName("hand");
        const targetOption = this.node.getChildByName("Option")?.getChildByName(this.answerArray[0]);
        if (hand && targetOption) {
            hand.setParent(targetOption);
            hand.setPosition(50, -50);
            hand.angle = 30;
            hand.setParentWithSamePos(this.node);
            const anim = hand.getComponent(cc.Animation);
            if (anim) anim.play();
        }
    }

    OnButtonClick(_event: cc.Event) {
        const optionNode = this.node.getChildByName("Option");
        if (optionNode) {
            optionNode.children.forEach(elem => {
                const btn = elem.getComponent(cc.Button);
                if (btn) btn.interactable = false;
            });
        }

        if (!this.canTouch) return;

        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }

        if (globalVariables.Instance.currentLevel == 1) {
            const hand = this.node.getChildByName("hand");
            if (hand) hand.active = false;
        }

        const _node = _event.target as cc.Node;
        if (!_node) return;

        if (_node.name == this.answerArray[0]) {
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);

            const qPanel = this.node.getChildByName("questionPanel");
            if (qPanel) {
                cc.tween(qPanel).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                const soundBtn = qPanel.getChildByName("sound")?.getComponent(cc.Button);
                if (soundBtn) soundBtn.interactable = false;
            }

            this.destroyOption();
            if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
            this.scheduleOnce(() => {
                this.callPositiveRection(_node);
            }, 0);
        } else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    }

    callNextLevel() {
        console.log("levelComplete--" + globalVariables.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(() => {
                cc.director.loadScene("endScreen");
            }, 1);
        } else {
            this.scheduleOnce(() => {
                globalVariables.Instance.currentLevel++;
                cc.director.loadScene("1");
            }, 1);
        }
    }

    callStarsEared() {
        if (!this.star1Log && globalVariables.Instance.currentLevel == 1) {
            this.star1Log = true;
            console.log("starsEarned--1");
        }
        if (!this.star2Log && globalVariables.Instance.currentLevel == 4) {
            this.star2Log = true;
            console.log("starsEarned--2");
        }
        if (!this.star3Log && globalVariables.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    }

    callPositiveRection(_node: cc.Node) {
        if (!_node || !_node.isValid) return;

        if (this.correctAudio) {
            cc.audioEngine.playEffect(this.correctAudio, false);
        }

        cc.tween(_node).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        if (_node.children[0]) {
            cc.tween(_node.children[0]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
            cc.tween(_node.children[0]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();

        this.scheduleOnce(() => {
            const confetti = this.node.getChildByName("confetti");
            if (confetti) {
                confetti.setPosition(_node.x, _node.y);
                const anim = confetti.getComponent(cc.Animation);
                if (anim) anim.play();
            }
            if (this.positiveSound[0]) {
                cc.audioEngine.playEffect(this.positiveSound[0], false);
            }
            this.scheduleOnce(() => {
                ProgressBar.Instance.createStarTrails(6, this.node);
                this.scheduleOnce(() => {
                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                    this.scheduleOnce(() => {
                        this.callJockey();
                    }, 1);
                }, 1.5);
            }, 0.7);
        }, 0.5);
    }

    callJockey() {
        if (!this.currentJcokey || !this.currentJcokey.isValid) return;

        let anim: string[] = [];
        const jName = startGame.Instance.jockeyName;

        if (jName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        } else if (jName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        } else if (jName == "supercub" || jName == "bag" || jName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        } else if (jName == "Singham") {
            anim = ["dance", "thumbs_up"];
        } else if (jName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        } else if (jName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }

        if (anim.length === 0) {
            this.callNextLevel();
            return;
        }

        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        const skeleton = this.currentJcokey.getComponent(sp.Skeleton);

        if (globalVariables.Instance.currentLevel % 2 == 0 && jName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        } else if (jName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            skeleton?.setAnimation(0, anim[currentClipNum], false);
        } else if (jName != "tlc" && jName != "supercub") {
            skeleton?.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
        }

        const audioDuration = this.positiveAudio[currentClipNum]?.duration || 1;

        if (jName != "tlc" && jName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();

            this.scheduleOnce(() => {
                skeleton?.setAnimation(0, anim[currentClipNum], false);
                if (this.positiveAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                }
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                    if (jName != "stallion") {
                        skeleton?.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
                    }
                    this.callNextLevel();
                }, audioDuration);
            }, 0.5);
        } else if (jName == "tlc") {
            skeleton?.setAnimation(0, anim[currentClipNum], false);
            if (this.positiveAudio[currentClipNum]) {
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            }
            this.scheduleOnce(() => {
                skeleton?.setAnimation(0, "intro_out", false);
                const outDuration = skeleton?.findAnimation("intro_out")?.duration || 0.5;
                this.scheduleOnce(() => {
                    this.currentJcokey.active = false;
                    this.callNextLevel();
                }, outDuration);
            }, audioDuration);
        } else if (jName == "supercub") {
            const isSpecialAnim = anim[currentClipNum] == "positive_1" || anim[currentClipNum] == "positive_2";
            if (isSpecialAnim) {
                skeleton?.setAnimation(0, anim[currentClipNum] + "_start", false);
                const startDuration = skeleton?.findAnimation(anim[currentClipNum] + "_start")?.duration || 0.5;

                this.scheduleOnce(() => {
                    skeleton?.setAnimation(0, anim[currentClipNum] + "_loop", true);
                    if (this.positiveAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                    }
                    this.scheduleOnce(() => {
                        skeleton?.setAnimation(0, anim[currentClipNum] + "_end", false);
                        const endDuration = skeleton?.findAnimation(anim[currentClipNum] + "_end")?.duration || 0.5;
                        this.scheduleOnce(() => {
                            skeleton?.setAnimation(0, "run", false);
                            cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                            this.callNextLevel();
                        }, endDuration);
                    }, audioDuration);
                }, startDuration);
            } else {
                skeleton?.setAnimation(0, anim[currentClipNum], false);
                if (this.positiveAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                }
                this.scheduleOnce(() => {
                    skeleton?.setAnimation(0, "run", false);
                    cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                    this.callNextLevel();
                }, audioDuration);
            }
        }
    }

    callNegativeRection(_node: cc.Node, _event: cc.Event) {
        if (!_node || !_node.isValid) return;

        const spriteComp = _node.children[0]?.getComponent(cc.Sprite);
        if (spriteComp && this.greyMat) {
            spriteComp.setMaterial(0, this.greyMat);
        }

        if (this.negativeSound[0]) {
            cc.audioEngine.playEffect(this.negativeSound[0], false);
        }

        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }

        this.scheduleOnce(() => {
            let anim: string[] = [];
            const jName = startGame.Instance.jockeyName;

            if (jName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            } else if (jName == "tlc" || jName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            } else if (jName == "supercub" || jName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            } else if (jName == "Singham") {
                anim = ["no"];
            } else if (jName == "Mighty_Raju") {
                anim = ["try_again"];
            } else if (jName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }

            if (anim.length === 0) return;

            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            const skeleton = this.currentJcokey?.getComponent(sp.Skeleton);

            if (jName == "stallion") {
                this.currentJcokey.scaleX = 0.65;
                skeleton?.setAnimation(0, anim[currentClipNum], false);
            } else if (jName != "tlc" && jName != "supercub") {
                skeleton?.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
            }

            const audioDuration = this.negativeAudio[currentClipNum]?.duration || 1;

            if (jName != "tlc" && jName != "supercub") {
                this.currentJcokey.setPosition(1200, -350);
                cc.tween(this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
                this.scheduleOnce(() => {
                    skeleton?.setAnimation(0, anim[currentClipNum], false);
                    if (this.negativeAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    }
                    this.scheduleOnce(() => {
                        cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                        if (jName != "stallion") {
                            skeleton?.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
                        }
                        this.enableOptionButtons();
                    }, audioDuration);
                }, 0.5);
            } else if (jName == "tlc") {
                skeleton?.setAnimation(0, anim[currentClipNum], false);
                if (this.negativeAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                }
                this.scheduleOnce(() => {
                    skeleton?.setAnimation(0, "idle", true);
                    this.enableOptionButtons();
                }, audioDuration);
            } else if (jName == "supercub") {
                const isSpecialAnim = anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2";
                if (isSpecialAnim) {
                    skeleton?.setAnimation(0, anim[currentClipNum] + "_start", false);
                    const startDuration = skeleton?.findAnimation(anim[currentClipNum] + "_start")?.duration || 0.5;

                    this.scheduleOnce(() => {
                        skeleton?.setAnimation(0, anim[currentClipNum] + "_loop", true);
                        if (this.negativeAudio[currentClipNum]) {
                            cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                        }
                        this.scheduleOnce(() => {
                            skeleton?.setAnimation(0, anim[currentClipNum] + "_end", false);
                            this.enableOptionButtons();
                            const endDuration = skeleton?.findAnimation(anim[currentClipNum] + "_end")?.duration || 0.5;
                            this.scheduleOnce(() => {
                                skeleton?.setAnimation(0, "idle", true);
                            }, endDuration);
                        }, audioDuration);
                    }, startDuration);
                } else {
                    skeleton?.setAnimation(0, anim[currentClipNum], false);
                    if (this.negativeAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    }
                    this.scheduleOnce(() => {
                        skeleton?.setAnimation(0, "idle", true);
                        this.enableOptionButtons();
                    }, audioDuration);
                }
            }
        }, 0.7);

        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" })
            .call(() => {
                if (_node.children[0] && this.defaultMat) {
                    _node.children[0].getComponent(cc.Sprite)?.setMaterial(0, this.defaultMat);
                }
            })
            .start();
    }

    private enableOptionButtons() {
        const optionNode = this.node.getChildByName("Option");
        if (optionNode) {
            optionNode.children.forEach(elem => {
                const btn = elem.getComponent(cc.Button);
                if (btn) btn.interactable = true;
            });
        }
    }

    destroyOption() {
        const optionNode = this.node.getChildByName("Option");
        if (!optionNode) return;

        for (let i = optionNode.children.length - 1; i >= 0; i--) {
            const child = optionNode.children[i];
            if (child && child.name !== this.answerArray[0]) {
                child.destroy();
            }
        }
    }

    loadSpriteFrame(imageName: string, callback: (spriteFrame: cc.SpriteFrame) => void) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    }

    loadAudioClip(audioName: string, callback: (spriteFrame: cc.AudioClip) => void) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, (err, spriteFrame) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    }

    OptionsLayoutVertical() {
        const optionsLayout = this.optionsNode;
        if (!optionsLayout) return;

        const optionNodes = optionsLayout.children;
        const paddingBetweenOptions = 10;
        let totalHeight = 0;
        let maxWidth = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            totalHeight += option.height + paddingBetweenOptions;
            if (option.width > maxWidth) {
                maxWidth = option.width;
            }
        }

        let availableHeight = optionsLayout.height;
        let totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        let scaleFactor = Math.min(1, availableHeight / (totalHeightWithPadding || 1));
        let accumulatedHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionScaleFactor = scaleFactor;

            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            let posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;

            for (let subChild of option.children) {
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }

        optionsLayout.width = maxWidth * scaleFactor;
    }

    reverseOptionsLayout() {
        const optionsLayout = this.optionsNode;
        if (!optionsLayout) return;

        const optionNodes = optionsLayout.children;
        let newPositions = [];

        for (let i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }

        for (let i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
        }
    }
}
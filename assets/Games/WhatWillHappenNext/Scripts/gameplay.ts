import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    HorizntalOptionNode: cc.Prefab = null;

    @property(cc.Prefab)
    VerticalOptionNode: cc.Prefab = null;

    @property(cc.SpriteFrame)
    private extraImg: cc.SpriteFrame = null;

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

    @property(cc.AudioClip)
    private tlc_birdFlying: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Pos1: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Pos2: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Neg1: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Neg2: cc.AudioClip = null;

    @property(cc.Material)
    defaultMat: cc.Material = null;

    @property(cc.Material)
    greyMat: cc.Material = null;

    @property(cc.Font)
    private podar_font: cc.Font = null;

    @property(cc.Font)
    private jaipuria_font: cc.Font = null;

    @property(cc.Font)
    private tlc_font: cc.Font = null;

    @property(cc.Font)
    private supercub_font: cc.Font = null;

    private isFirstClick: boolean = false;
    private canTouch: boolean = false;
    private answerArray: string[] = [];
    private maxLevel: number = 7;
    wrongAnswerCount: number = 0;
    star1Log: boolean = false;
    star2Log: boolean = false;
    star3Log: boolean = false;
    currentJcokey: cc.Node = null;

    correctAudio: cc.AudioClip[] = [];

    private optionsNode: cc.Node = null;
    private questionBoxPosY: number = 0;

    totalAnswers: number = 0;
    correctAnswerCount: number = 0;
    isOptionBG: boolean = false;
    TotalOptions: number = 0;
    positionArray: cc.Vec2[] = [];
    isDone: boolean[] = [];
    isLastTween: boolean = false;

    onLoad() {
        let currentLevelIdx = globalVariables.Instance.currentLevel - 1;
        let questionData = startGame.Instance?.questions ? startGame.Instance.questions[currentLevelIdx] : null;

        if (!questionData) {
            cc.error("Question data missing for level: " + globalVariables.Instance.currentLevel);
            return;
        }

        // Font Handling
        let templateText = this.node.getChildByName("template")?.getChildByName("text")?.getComponent(cc.Label);
        let questionPanelText = this.node.getChildByName("questionPanel")?.getChildByName("text")?.getComponent(cc.Label);

        if (templateText && questionPanelText) {
            if (startGame.Instance.jockeyName == "Podar" && this.podar_font) {
                templateText.font = this.podar_font;
                questionPanelText.font = this.podar_font;
            } else if (startGame.Instance.jockeyName == "tlc" && this.tlc_font) {
                templateText.font = this.tlc_font;
                questionPanelText.font = this.tlc_font;
            } else if (startGame.Instance.jockeyName == "supercub" && this.supercub_font) {
                templateText.font = this.supercub_font;
                questionPanelText.font = this.supercub_font;
            } else if ((startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") && this.jaipuria_font) {
                templateText.font = this.jaipuria_font;
                questionPanelText.font = this.jaipuria_font;
            }
        }

        this.TotalOptions = questionData.numberOfOptions || 0;
        this.optionsNode = this.node.getChildByName("Option");

        let qBox = this.node.getChildByName("QuestionBox");
        if (qBox) qBox.zIndex = 1;

        if (questionData.isOptionBG) {
            this.isOptionBG = true;
        }

        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels || 7;

        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }

        let bgNode = this.node.getChildByName("bg");
        if (bgNode && startGame.Instance.mainBg) {
            bgNode.getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        }

        if (questionData.correctAnswerNum) {
            for (let i = 0; i < questionData.correctAnswerNum.length; i++) {
                this.answerArray[i] = questionData.correctAnswerNum[i];
            }
        }

        // Assets Loading
        if (startGame.Instance.isDemoGame) {
            if (questionData.questionAudioName) {
                cc.loader.load(questionData.questionAudioName, (err, audioClip) => {
                    if (!err) this.questionSound[0] = audioClip;
                });
            }

            if (startGame.Instance.templateType != "SimpleTap" && questionData.questionImageName) {
                cc.loader.load(questionData.questionImageName, (err, texture) => {
                    if (!err && qBox) {
                        let thirdObj = qBox.getChildByName("ThirdObject");
                        if (thirdObj) thirdObj.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                    }
                });
            }

            if (questionData.commonOptionImageName && questionData.commonOptionImageName != "") {
                cc.loader.load(questionData.commonOptionImageName, (err, texture) => {
                    if (!err) {
                        const spriteFrame = new cc.SpriteFrame(texture);
                        for (let i = 0; i < questionData.numberOfOptions; i++) {
                            let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                            if (optChild) optChild.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }

            for (let i = 0; i < questionData.numberOfOptions; i++) {
                if (!questionData.isOptionText && questionData.options[i]) {
                    cc.loader.load(questionData.options[i], (err, texture) => {
                        if (!err) {
                            let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                            if (optChild) optChild.getChildByName("img").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                        }
                    });
                } else if (questionData.options[i]) {
                    let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                    if (optChild) optChild.getChildByName("text").getComponent(cc.Label).string = questionData.options[i];
                }
            }

            if (questionData.correctAudios) {
                for (let i = 0; i < questionData.correctAudios.length; i++) {
                    cc.loader.load(questionData.correctAudios[i], (err, audioClip) => {
                        if (!err) this.correctAudio[i] = audioClip;
                    });
                }
            }
        } else {
            if (questionData.questionAudioName) {
                this.loadAudioClip(questionData.questionAudioName, (AudioClip) => {
                    this.questionSound[0] = AudioClip;
                });
            }

            if (startGame.Instance.templateType != "SimpleTap" && questionData.questionImageName) {
                this.loadSpriteFrame(questionData.questionImageName, (spriteFrame) => {
                    if (qBox) {
                        let thirdObj = qBox.getChildByName("ThirdObject");
                        if (thirdObj) thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            if (questionData.commonOptionImageName && questionData.commonOptionImageName != "") {
                this.loadSpriteFrame(questionData.commonOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < questionData.numberOfOptions; i++) {
                        let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                        if (optChild) optChild.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            for (let i = 0; i < questionData.numberOfOptions; i++) {
                if (!questionData.isOptionText && questionData.options[i]) {
                    this.loadSpriteFrame(questionData.options[i], (spriteFrame) => {
                        let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                        if (optChild) optChild.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                } else if (questionData.options[i]) {
                    let optChild = this.optionsNode?.getChildByName((i + 1).toString());
                    if (optChild) optChild.getChildByName("text").getComponent(cc.Label).string = questionData.options[i];
                }
            }

            if (questionData.correctAudios) {
                for (let i = 0; i < questionData.correctAudios.length; i++) {
                    this.loadAudioClip(questionData.correctAudios[i], (AudioClip) => {
                        this.correctAudio[i] = AudioClip;
                    });
                }
            }
        }

        // Jockey Initialization Fix
        if (startGame.Instance.jockey && startGame.Instance.jockeyName) {
            this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        }
        if (!this.currentJcokey && startGame.Instance.jockey?.childrenCount > 0) {
            this.currentJcokey = startGame.Instance.jockey.children[0];
        }
    }

    start() {
        if (ProgressBar.Instance) {
            ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        }

        let progressNode = startGame.Instance.node?.getChildByName("progress");
        if (progressNode) progressNode.opacity = 255;

        let currentQuestion = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1];
        this.totalAnswers = currentQuestion?.correctAnswerNum ? currentQuestion.correctAnswerNum.length : 0;

        this.callQuestionBar();

        if (startGame.Instance.templateType == "SimpleTap") {
            this.setOptionsLayout("horizontal");
            this.callOptionIn();
        } else if (startGame.Instance.templateType == "TapToCollect") {
            this.setOptionsLayout("grid");
            this.callThirdObjectIn();
        } else if (startGame.Instance.templateType == "ObjectsTweenIn") {
            this.setOptionsLayout("horizontal");
            this.callThirdObjectIn();
        }

        // Setup Audio mapping for Jockeys
        if (startGame.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        } else if (startGame.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        } else if (startGame.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        } else if (startGame.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        } else if (startGame.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    GenerateOptions() {
        let template = this.node.getChildByName("template");
        let optionParent = this.node.getChildByName("Option");

        if (!template || !optionParent) return;

        for (let i = 0; i < this.TotalOptions; i++) {
            let option = cc.instantiate(template);
            option.name = (i + 1).toString();
            option.setParent(optionParent);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;

            let bg = option.getChildByName("bg");
            if (bg) bg.active = this.isOptionBG;

            this.isDone[i] = false;
        }
        template.destroy();
    }

    callQuestionBar() {
        let qPanel = this.node.getChildByName("questionPanel");
        if (!qPanel) return;

        this.questionBoxPosY = qPanel.y;
        qPanel.setPosition(cc.v2(0, 1500));
        cc.tween(qPanel).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();

        let lbl = qPanel.getChildByName("text")?.getComponent(cc.Label);
        let qData = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1];
        if (lbl && qData) lbl.string = qData.questionText;
    }

    setOptionsLayout(type: string) {
        if (type == "horizontal") {
            this.OptionsLayoutHorizontal();
        } else if (type == "vertical") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
        } else if (type == "grid") {
            this.arrangeGridChildren();
        }
    }

    callThirdObjectIn() {
        let qBox = this.node.getChildByName("QuestionBox");
        let qBox1 = this.node.getChildByName("QuestionBox1");

        if (startGame.Instance.templateType == "TapToCollect") {
            if (qBox) qBox.setPosition(cc.v2(-300, -200));
            if (qBox1) qBox1.setPosition(cc.v2(-300, -200));

            this.scheduleOnce(() => {
                this.scheduleOnce(() => {
                    if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
                    if (qBox) cc.tween(qBox).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                }, 0.1);
                this.scheduleOnce(() => {
                    this.callOptionIn();
                }, 0.5);
            }, 1);
        } else if (startGame.Instance.templateType == "ObjectsTweenIn" && qBox) {
            if (this.optionsNode) this.optionsNode.y += 100;
            qBox.setPosition(cc.v2(1500, -250));
            qBox.scale = 1;

            this.scheduleOnce(() => {
                this.scheduleOnce(() => {
                    cc.tween(qBox).to(0.5, { x: 0 }, { easing: "sineInOut" }).start();
                    this.callOptionOutFromObject();
                }, 1);
            }, 1);
        }
    }

    PlayQuestionAudio() {
        this.canTouch = false;

        if (this.currentJcokey) {
            this.currentJcokey.active = true;
        } else {
            this.canTouch = true;
            return;
        }

        let qData = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1];

        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (qData?.shouldPlayQuestionAudio && this.questionSound[0]) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables.Instance.currentLevel == 1) {
                this.showHandAnimation();
            }
        } else {
            let intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);

            if (startGame.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }

            if (startGame.Instance.jockeyName == "tlc" && this.tlc_birdFlying) {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }

            let skeleton = this.currentJcokey.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, intoAnim, false);

                let introDuration = skeleton.findAnimation(intoAnim)?.duration || 1;
                this.scheduleOnce(() => {
                    if (!qData?.shouldPlayQuestionAudio) {
                        this.canTouch = true;
                        if (globalVariables.Instance.currentLevel == 1) {
                            this.showHandAnimation();
                        }
                    } else {
                        if (this.questionSound[0]) cc.audioEngine.playEffect(this.questionSound[0], false);
                        skeleton.setAnimation(0, "intro_loop", true);

                        let qSoundDuration = this.questionSound[0]?.duration || 1;
                        this.scheduleOnce(() => {
                            skeleton.setAnimation(0, "intro_end", false);
                            let endDuration = skeleton.findAnimation("intro_end")?.duration || 1;

                            this.scheduleOnce(() => {
                                skeleton.setAnimation(0, "idle", true);
                                this.canTouch = true;
                                if (globalVariables.Instance.currentLevel == 1) {
                                    this.showHandAnimation();
                                }
                            }, endDuration);
                        }, qSoundDuration);
                    }
                }, introDuration);
            }
        }
    }

    private showHandAnimation() {
        let hand = this.node.getChildByName("hand");
        let targetOpt = this.node.getChildByName("Option")?.getChildByName(this.answerArray[0]);

        if (hand && targetOpt) {
            hand.setParent(targetOpt);
            hand.setPosition(0, -70);
            hand.setParentWithSamePos(this.node);
            let anim = hand.getComponent(cc.Animation);
            if (anim) anim.play();
        }
    }

    callOptionIn() {
        let delay: number = 0.5;
        let optContainer = this.node.getChildByName("Option");
        if (!optContainer) return;

        if (startGame.Instance.jockeyName == "supercub" || startGame.Instance.jockeyName == "tlc") {
            optContainer.setPosition(optContainer.x - 80, optContainer.y);
        }

        for (let i = 1; i <= optContainer.children.length; i++) {
            let child = optContainer.children[i - 1];
            child.scale = 0;
            child.opacity = 255;

            this.scheduleOnce(() => {
                if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
                let objScale = startGame.Instance.templateType == "SimpleTap" ? 1 : (startGame.Instance.templateType == "TapToCollect" ? 0.5 : 0.7);

                if (!this.isOptionBG) {
                    optContainer.children.forEach((element) => {
                        let img = element.getChildByName("img");
                        if (img) img.scale = 1.4;
                    });
                }

                cc.tween(child).to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();

                if (i == optContainer.children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        }
    }

    callOptionOutFromObject() {
        let delay: number = 0.5;
        let optContainer = this.node.getChildByName("Option");
        let qBox = this.node.getChildByName("QuestionBox");
        if (!optContainer || !qBox) return;

        for (let i = 1; i <= optContainer.children.length; i++) {
            let child = optContainer.children[i - 1];
            child.scale = 0;
            child.opacity = 255;
            child.setPosition(0 - 100, qBox.getPosition().y - 100);

            this.scheduleOnce(() => {
                if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
                let objScale = 0.7;

                if (!this.isOptionBG) {
                    optContainer.children.forEach((element) => {
                        let img = element.getChildByName("img");
                        if (img) img.scale = 1.4;
                    });
                }

                cc.tween(child).to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();

                let pos: cc.Vec2 = child.getPosition();
                if (this.positionArray[i - 1]) {
                    cc.tween(child).bezierTo(1, cc.v2(pos.x, pos.y + 200), cc.v2(this.positionArray[i - 1].x / 1.5, pos.y + 400), cc.v2(this.positionArray[i - 1].x, this.positionArray[i - 1].y)).start();
                }

                if (i == optContainer.children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        }
    }

    OnButtonClick(_event: cc.Event) {
        if (!this.canTouch || !_event?.target) return;

        let index = parseInt(_event.target.name) - 1;
        if (this.isDone[index]) return;

        if (!this.isFirstClick) {
            this.isFirstClick = true;
        }

        let hand = this.node.getChildByName("hand");
        if (hand && globalVariables.Instance.currentLevel == 1) {
            hand.active = false;
        }

        let _node = _event.target;
        let iscorrect: boolean = false;

        for (let i = 0; i < this.answerArray.length; i++) {
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[index] = true;
                break;
            }
        }

        if (iscorrect) {
            this.canTouch = false;
            cc.audioEngine.stopAllEffects();
            if (this.popSound[0]) cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
        } else {
            this.wrongAnswerCount++;
            this.callNegativeRection(_node, _event);
        }
    }

    // --- POSITIVE REACTION / JOCKEY VISIBLE FIX ---
    callJockey() {
        if (!this.currentJcokey) {
            this.callNextLevel();
            return;
        }

        this.currentJcokey.active = true;

        let animList: string[] = [];
        let jName = startGame.Instance.jockeyName;

        if (jName == "Podar") animList = ["possitive", "possitive2", "possitive3"];
        else if (jName == "tlc") animList = ["positive_1", "positive_2", "positive_3"];
        else if (jName == "supercub") animList = ["positive_1", "positive_2"];
        else if (jName == "bag") animList = ["positive_1", "positive_2"];
        else if (jName == "cryon") animList = ["positive_1", "positive_2"];
        else if (jName == "stallion") animList = ["positive_1", "positive_2"];
        else animList = ["positive_1", "positive_2"];

        let clipNum = this.getRandomNumber(0, animList.length - 1);
        let skeleton = this.currentJcokey.getComponent(sp.Skeleton);

        // Slide In Jockey Animation
        let startX = (globalVariables.Instance.currentLevel % 2 == 0) ? 1200 : -1200;
        let targetX = (globalVariables.Instance.currentLevel % 2 == 0) ? 450 : -450;

        this.currentJcokey.setPosition(startX, -350);
        cc.tween(this.currentJcokey)
            .to(0.5, { x: targetX }, { easing: "quartInOut" })
            .call(() => {
                if (skeleton) skeleton.setAnimation(0, animList[clipNum], false);
                if (this.positiveAudio && this.positiveAudio[clipNum]) {
                    cc.audioEngine.playEffect(this.positiveAudio[clipNum], false);
                }

                let audioDuration = (this.positiveAudio && this.positiveAudio[clipNum]) ? this.positiveAudio[clipNum].duration : 1.5;

                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey)
                        .to(0.5, { x: startX }, { easing: "quartInOut" })
                        .call(() => {
                            this.callNextLevel();
                        }).start();
                }, audioDuration);
            }).start();
    }

    // --- NEGATIVE REACTION / JOCKEY VISIBLE FIX ---
    callNegativeRection(_node: cc.Node, _event: cc.Event) {
        this.canTouch = false;

        if (this.negativeSound[0]) {
            cc.audioEngine.playEffect(this.negativeSound[0], false);
        }

        let targetVisual = this.isOptionBG ? _node.getChildByName("bg") : _node.getChildByName("img");
        if (targetVisual) targetVisual.color = cc.Color.RED;

        // Red Shake animation on wrong option
        cc.tween(_node)
            .to(0.1, { x: _node.x - 10 })
            .to(0.1, { x: _node.x + 10 })
            .to(0.1, { x: _node.x - 10 })
            .to(0.1, { x: _node.x })
            .call(() => {
                if (targetVisual) targetVisual.color = cc.Color.WHITE;
            }).start();

        // Show Jockey for Negative Reaction
        if (this.currentJcokey) {
            this.currentJcokey.active = true;

            let negAnimList: string[] = [];
            let jName = startGame.Instance.jockeyName;

            if (jName == "Podar") negAnimList = ["negetive", "negetive2"];
            else if (jName == "tlc") negAnimList = ["negative_1", "negative_2"];
            else if (jName == "supercub") negAnimList = ["negative_1", "negative_2"];
            else if (jName == "bag") negAnimList = ["negative_1", "negative_2"];
            else if (jName == "cryon") negAnimList = ["negative_1", "negative_2"];
            else if (jName == "stallion") negAnimList = ["negative_1", "negative_2"];
            else negAnimList = ["negative_1"];

            let clipNum = this.getRandomNumber(0, negAnimList.length - 1);
            let skeleton = this.currentJcokey.getComponent(sp.Skeleton);

            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey)
                .to(0.5, { x: 400 }, { easing: "quartInOut" })
                .call(() => {
                    if (skeleton) skeleton.setAnimation(0, negAnimList[clipNum], false);
                    if (this.negativeAudio && this.negativeAudio[clipNum]) {
                        cc.audioEngine.playEffect(this.negativeAudio[clipNum], false);
                    }

                    let audioDuration = (this.negativeAudio && this.negativeAudio[clipNum]) ? this.negativeAudio[clipNum].duration : 1.5;

                    this.scheduleOnce(() => {
                        cc.tween(this.currentJcokey)
                            .to(0.5, { x: 1200 }, { easing: "quartInOut" })
                            .call(() => {
                                this.canTouch = true;
                            }).start();
                    }, audioDuration);
                }).start();
        } else {
            this.canTouch = true;
        }
    }

    callPositiveFeedback(_node: cc.Node) {
        let voIndex = this.answerArray.indexOf(_node.name);
        if (voIndex === -1) voIndex = 0;

        if (this.correctAudio[voIndex]) {
            cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
        }

        let img = _node.getChildByName("img");
        if (img) img.color = cc.Color.GRAY;
        let tick = _node.getChildByName("tick");
        if (tick) tick.active = true;

        let duration = this.correctAudio[voIndex]?.duration || 0.5;
        this.scheduleOnce(() => {
            let confetti = this.node.getChildByName("confetti");
            if (confetti) {
                confetti.setPosition(_node.x, _node.y);
                let anim = confetti.getComponent(cc.Animation);
                if (anim) anim.play();
            }

            if (this.positiveSound[0]) cc.audioEngine.playEffect(this.positiveSound[0], false);

            this.scheduleOnce(() => {
                this.correctAnswerCount++;

                if (this.correctAnswerCount == this.totalAnswers) {
                    this.canTouch = false;
                    if (ProgressBar.Instance) {
                        ProgressBar.Instance.createStarTrails(6, this.node);
                        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                    }
                    this.callJockey();
                } else {
                    this.canTouch = true;
                }
            }, 0.5);
        }, duration);
    }

    callNextLevel() {
        this.callStarsEared();
        this.scheduleOnce(() => {
            if (globalVariables.Instance.currentLevel == this.maxLevel) {
                cc.director.loadScene("endScreen");
            } else {
                globalVariables.Instance.currentLevel++;
                cc.director.loadScene("1");
            }
        }, 0.5);
    }

    callStarsEared() {
        if (!this.star1Log && globalVariables.Instance.currentLevel == 1) this.star1Log = true;
        if (!this.star2Log && globalVariables.Instance.currentLevel == 4) this.star2Log = true;
        if (!this.star3Log && globalVariables.Instance.currentLevel == this.maxLevel) this.star3Log = true;
    }

    loadSpriteFrame(imageName: string, callback: (spriteFrame: cc.SpriteFrame) => void) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err) callback(spriteFrame);
        });
    }

    loadAudioClip(audioName: string, callback: (audioClip: cc.AudioClip) => void) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, (err, audioClip) => {
            if (!err) callback(audioClip);
        });
    }

    OptionsLayoutHorizontal() {
        if (!this.optionsNode) return;
        let optionNodes = this.optionsNode.children;
        const paddingBetweenOptions = 10;
        let totalWidth = 0;
        let maxHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            totalWidth += option.width + paddingBetweenOptions;
            if (option.height > maxHeight) maxHeight = option.height;
        }

        let availableWidth = this.optionsNode.width;
        let totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        let scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);

        let accumulatedWidth = 0;
        this.positionArray = [];

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionScaleFactor = scaleFactor;
            if (optionNodes.length == 2 && startGame.Instance.templateType == "ObjectsTweenIn" && !this.isLastTween) {
                optionScaleFactor *= 0.7;
            }

            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            let posX = accumulatedWidth + (option.width * option.anchorX);
            let optionX = posX - (this.optionsNode.width * this.optionsNode.anchorX);

            if (!this.isLastTween) {
                option.x = optionX;
            } else {
                cc.tween(option).to(0.5, { x: optionX }, { easing: "sineInOut" }).start();
            }

            accumulatedWidth += option.width + paddingBetweenOptions;
            this.positionArray.push(option.getPosition());
        }
    }

    OptionsLayoutVertical() {
        if (!this.optionsNode) return;
        let optionNodes = this.optionsNode.children;
        const paddingBetweenOptions = 10;
        let totalHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            totalHeight += optionNodes[i].height + paddingBetweenOptions;
        }

        let availableHeight = this.optionsNode.height;
        let scaleFactor = Math.min(1, availableHeight / totalHeight);
        let accumulatedHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            option.width *= scaleFactor;
            option.height *= scaleFactor;

            let posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (this.optionsNode.height * this.optionsNode.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;
        }
    }

    arrangeGridChildren() {
        if (!this.optionsNode) return;
        let children = this.optionsNode.children;
        let maxColumns = 2;
        let spacing = -200;
        let totalRows = Math.ceil(children.length / maxColumns);
        let rowHeight = children.length > 0 ? children[0].height + spacing : 0;
        let startY = (totalRows - 1) * rowHeight / 2;

        for (let i = 0; i < children.length; i++) {
            let column = i % maxColumns;
            let row = Math.floor(i / maxColumns);
            let child = children[i];
            child.x = column * (child.width + spacing);
            child.y = startY - row * rowHeight;
        }
    }

    reverseOptionsLayout() {
        if (!this.optionsNode) return;
        let children = this.optionsNode.children;
        let newPositions = children.map(c => c.y).reverse();
        for (let i = 0; i < children.length; i++) {
            children[i].y = newPositions[i];
        }
    }

    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    }
}
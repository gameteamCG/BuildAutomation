import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";
import TVInputManager from "./TVInputManager";

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

    correctAudio: cc.AudioClip[] = [];

    private optionsNode: cc.Node = null;
    private ans = ["Mango", "Nest", "Orange", "Parrot", "Queen", "Rose"]
    private questionBoxPosY: number = 0;

    totalAnswers: number = 0;
    correctAnswerCount: number = 0;
    isOptionBG: boolean = false;
    TotalOptions: number = 0;
    positionArray: cc.Vec2[] = [];
    isDone: boolean[] = [];
    isLastTween: boolean = false;

    onLoad() {

        this.TotalOptions = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions;
        this.optionsNode = this.node.getChildByName("Option");
        this.node.getChildByName("QuestionBox").zIndex = 1;
        if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionBG) {
            this.isOptionBG = true;
        }
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;

        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answerArray[i] = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i];
        }

        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });

            if (startGame.Instance.templateType != "SimpleTap") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios.length; i++) {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.correctAudio[i] = audioClip;
                });
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });


            if (startGame.Instance.templateType != "SimpleTap") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (spriteFrame) => {
                    this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios.length; i++) {
                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[i], (AudioClip) => {
                    this.correctAudio[i] = AudioClip;
                });
            }

        }
        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
    }

    start() {

        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        this.totalAnswers = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length;

        this.callQuestionBar();
        if (startGame.Instance.templateType == "SimpleTap") {
            this.setOptionsLayout("horizontal");
            this.callOptionIn();
        }
        else if (startGame.Instance.templateType == "TapToCollect") {
            this.setOptionsLayout("grid");
            this.callThirdObjectIn();
        }
        else if (startGame.Instance.templateType == "ObjectsTweenIn") {
            this.setOptionsLayout("horizontal");
            this.callThirdObjectIn();
        }

    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    GenerateOptions() {
        for (let i = 0; i < this.TotalOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
            if (this.isOptionBG) {
                option.getChildByName("bg").active = true;
            }
            else {
                option.getChildByName("bg").active = false;
            }
            this.isDone[i] = false;
        }
        this.node.getChildByName("template").destroy();
    }

    callQuestionBar() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;
    }

    setOptionsLayout(type: string) {
        if (type == "horizontal") {
            this.OptionsLayoutHorizontal();
        }
        else if (type == "vertical") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
        }
        else if (type == "grid") {
            this.arrangeGridChildren();
        }
    }



    callThirdObjectIn() {
        if (startGame.Instance.templateType == "TapToCollect") {
            this.node.getChildByName("QuestionBox").setPosition(cc.v2(-300, -200));
            this.node.getChildByName("QuestionBox1").setPosition(cc.v2(-300, -200));
            this.scheduleOnce(() => {
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.popSound[0], false);
                    cc.tween(this.node.getChildByName("QuestionBox"))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                }, 0.1);
                this.scheduleOnce(() => {
                    this.callOptionIn();
                }, 0.5);
            }, 1);
        }
        else if (startGame.Instance.templateType == "ObjectsTweenIn") {
            this.optionsNode.y = this.optionsNode.y + 100;
            this.node.getChildByName("QuestionBox").setPosition(cc.v2(1500, -250));
            this.node.getChildByName("QuestionBox").scale = 1;
            this.scheduleOnce(() => {
                this.scheduleOnce(() => {
                    cc.tween(this.node.getChildByName("QuestionBox"))
                        .to(0.5, { x: 0 }, { easing: "sineInOut" }).start();
                    this.callOptionOutFromObject();
                }, 1);
            }, 1);
        }
    }

    OnVOButton(_event: cc.Event) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionSound[0], false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(() => {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            this.setupTVFocus("Option");
        }, this.questionSound[0].duration)
    }

    callOptionIn() {
        let delay: number = 0.5;
        if (startGame.Instance.jockeyName == "supercub" || startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("Option").setPosition(this.node.getChildByName("Option").x - 80, this.node.getChildByName("Option").y);
        }
        for (let i = 1; i <= this.optionsNode.children.length; i++) {
            this.node.getChildByName("Option").children[i - 1].scale = 0;
            this.node.getChildByName("Option").children[i - 1].opacity = 255;
            this.scheduleOnce(() => {
                let objScale: number = 0;
                cc.audioEngine.playEffect(this.popSound[0], false);
                if (startGame.Instance.templateType == "SimpleTap") {
                    objScale = 1;
                }
                else if (startGame.Instance.templateType == "TapToCollect") {
                    objScale = 0.5;
                }
                else {
                    objScale = 0.7;
                }
                if (!this.isOptionBG) {
                    this.node.getChildByName("Option").children.forEach((element) => {
                        element.getChildByName("img").scale = 1.4;
                    })
                }
                cc.tween(this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();
                if (i == this.node.getChildByName("Option").children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
            let optionNodes = this.node.getChildByName("Option").children;
            optionNodes.forEach((element, idx) => {
                let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" });
                if (idx === optionNodes.length - 1) {
                    t = t.call(() => {
                        this.setupTVFocus("Option");
                    });
                }
                t.start();
            });
        }
    }

    callOptionOutFromObject() {
        let delay: number = 0.5;
        for (let i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            this.node.getChildByName("Option").children[i - 1].scale = 0;
            this.node.getChildByName("Option").children[i - 1].opacity = 255;
            this.node.getChildByName("Option").children[i - 1].setPosition(0 - 100, this.node.getChildByName("QuestionBox").getPosition().y - 100);
            this.scheduleOnce(() => {
                let objScale: number = 0;
                cc.audioEngine.playEffect(this.popSound[0], false);
                objScale = 0.7;
                if (!this.isOptionBG) {
                    this.node.getChildByName("Option").children.forEach((element) => {
                        element.getChildByName("img").scale = 1.4;
                    })
                }
                cc.tween(this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();

                let pos: cc.Vec2 = this.node.getChildByName("Option").getChildByName(i.toString()).getPosition();
                cc.tween(this.node.getChildByName("Option").getChildByName(i.toString())).bezierTo(1, cc.v2(pos.x, pos.y + 200), cc.v2(this.positionArray[i - 1].x / 1.5, pos.y + 400), cc.v2(this.positionArray[i - 1].x, this.positionArray[i - 1].y)).start();

                if (i == this.node.getChildByName("Option").children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        }
    }

    PlayQuestionAudio() {
        this.canTouch = false;
        TVInputManager.Instance.setCanSelect(this.canTouch)
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            TVInputManager.Instance.setCanSelect(this.canTouch)
            if (globalVariables.Instance.currentLevel == 1) {
                let hand = this.node.getChildByName("hand");
                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                hand.setPosition(0, -70);
                hand.setParentWithSamePos(this.node);
                hand.getComponent(cc.Animation).play();
            }
        }
        else if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            let intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (startGame.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, intoAnim, false);
            this.scheduleOnce(() => {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    this.canTouch = true;
                    TVInputManager.Instance.setCanSelect(this.canTouch)
                    if (globalVariables.Instance.currentLevel == 1) {
                        let hand = this.node.getChildByName("hand");
                        hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                        hand.setPosition(0, -70);
                        hand.setParentWithSamePos(this.node);
                        hand.getComponent(cc.Animation).play();
                    }
                }
                else {
                    cc.audioEngine.playEffect(this.questionSound[0], false);
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_loop", true);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_end", false);
                        this.scheduleOnce(() => {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            this.canTouch = true;
                            TVInputManager.Instance.setCanSelect(this.canTouch)
                            if (globalVariables.Instance.currentLevel == 1) {
                                let hand = this.node.getChildByName("hand");
                                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                                hand.setPosition(0, -70);
                                hand.setParentWithSamePos(this.node);
                                hand.getComponent(cc.Animation).play();
                            }
                        }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, this.questionSound[0].duration);
                }

            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
    }

    OnButtonClick(_event: cc.Event) {
        if (!this.canTouch) {
            return;
        }
        if (TVInputManager.Instance) {
            TVInputManager.Instance.setCanSelect(this.canTouch)
        }
        if (this.isDone[parseInt(_event.target.name) - 1]) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        let _node = _event.target;
        let iscorrect: boolean = false;
        for (let i = 0; i < this.answerArray.length; i++) {
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[parseInt(_node.name) - 1] = true;
                break;
            }
        }
        if (iscorrect) {
            this.canTouch = false;
            TVInputManager.Instance.setCanSelect(this.canTouch)
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            //this.destroyOption();
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    }
    private setupTVFocus(activeContainerName: string) {
        let backBtn = startGame.Instance.node.getChildByName("back");
        let musicBtn = startGame.Instance.node.getChildByName("music");
        let soundBtn = this.node.getChildByName("questionPanel").getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
            let btn = node.getComponent(cc.Button);
            return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
        });
        let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);
        if (cc.director.getScene().name == "1") {
            TVInputManager.Instance.init(nodes, 0);
        }
        else {
            TVInputManager.Instance.init(nodes, -1);
        }
        TVInputManager.Instance.setCanSelect(this.canTouch);
    }
    callNextLevel() {
        console.log("levelComplete--" + globalVariables.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(() => {
                cc.director.loadScene("endScreen");
            }, this.positiveAudio[0].duration - 0.5)
        }
        else {
            this.scheduleOnce(() => {
                globalVariables.Instance.currentLevel++;
                cc.director.loadScene("1");
            }, this.positiveAudio[0].duration - 0.5)
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
        _node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.extraImg;
        cc.audioEngine.playEffect(this.correctAudio[parseInt(_node.name) - 1], false);

        cc.tween(_node).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(() => {
            this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(this.positiveSound[0], false);
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

    callPositiveFeedback(_node: cc.Node) {
        let voIndex: number = this.answerArray.indexOf(_node.name);
        switch (startGame.Instance.templateType) {
            case "SimpleTap":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.ans[globalVariables.Instance.currentLevel - 1]
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(() => {
                    this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
                    this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                    cc.audioEngine.playEffect(this.positiveSound[0], false);
                    this.scheduleOnce(() => {
                        this.canTouch = true;
                        TVInputManager.Instance.setCanSelect(this.canTouch)
                        this.correctAnswerCount++;
                        if (this.correctAnswerCount == this.totalAnswers) {
                            for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
                                if (this.isDone[i] == false) {
                                    this.node.getChildByName("Option").children[i].destroy();
                                }
                            }
                            this.scheduleOnce(() => {
                                this.node.getChildByName("Option").children.forEach(elem => {
                                    elem.getChildByName("img").color = cc.Color.WHITE;
                                });
                                this.isLastTween = true;
                                this.OptionsLayoutHorizontal();
                                this.canTouch = false;
                                TVInputManager.Instance.setCanSelect(this.canTouch)
                                ProgressBar.Instance.createStarTrails(6, this.node);
                                this.scheduleOnce(() => {
                                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                                    this.scheduleOnce(() => {
                                        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                                        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                                        this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "TapToCollect":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                this.scheduleOnce(() => {
                    this.node.getChildByName("QuestionBox1").zIndex = 1;
                    this.node.getChildByName("QuestionBox").zIndex = 1;
                    this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
                    this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                    cc.audioEngine.playEffect(this.positiveSound[0], false);
                    this.scheduleOnce(() => {
                        let imgScale: number = _node.getChildByName("img").scale / 2;
                        let imgName: string = _node.getChildByName("img").name + this.correctAnswerCount + 1;
                        _node.getChildByName("img").name = imgName;
                        _node.getChildByName(imgName).setParentWithSamePos(this.node.getChildByName("QuestionBox1"));
                        let pos: cc.Vec2 = this.node.getChildByName("QuestionBox1").getChildByName(imgName).getPosition();
                        let thirdBox: cc.Node = this.node.getChildByName("QuestionBox1").getChildByName("ThirdObject");
                        let xRandom: number = this.getRandomNumber(-thirdBox.width / 4, thirdBox.width / 4);
                        this.node.getChildByName("QuestionBox1").getChildByName(imgName).scale = imgScale;
                        cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(xRandom / 2, pos.y + 200), cc.v2(xRandom, thirdBox.height / 2 - 50)).start();
                        cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).delay(0.5).to(0.7, { scale: imgScale * 0.5 }, { easing: "sineInOut" }).start();

                        this.scheduleOnce(() => {
                            _node.destroy();
                            this.canTouch = true;
                            TVInputManager.Instance.setCanSelect(this.canTouch)
                            this.correctAnswerCount++;
                            if (this.correctAnswerCount == this.totalAnswers) {
                                this.canTouch = false;
                                TVInputManager.Instance.setCanSelect(this.canTouch)
                                ProgressBar.Instance.createStarTrails(6, this.node);
                                this.scheduleOnce(() => {
                                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                                    this.scheduleOnce(() => {
                                        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                                        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                                        this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }
                        }, 0.5);
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "ObjectsTweenIn":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(() => {
                    this.node.getChildByName("confetti").setPosition(_node.x, _node.y + 100);
                    this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                    cc.audioEngine.playEffect(this.positiveSound[0], false);
                    this.scheduleOnce(() => {
                        this.canTouch = true;
                        TVInputManager.Instance.setCanSelect(this.canTouch)
                        this.correctAnswerCount++;
                        if (this.correctAnswerCount == this.totalAnswers) {
                            for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
                                if (this.isDone[i] == false) {
                                    this.node.getChildByName("Option").children[i].destroy();
                                }
                            }
                            this.canTouch = false;
                            TVInputManager.Instance.setCanSelect(this.canTouch)
                            this.scheduleOnce(() => {
                                this.node.getChildByName("Option").children.forEach(elem => {
                                    elem.getChildByName("img").color = cc.Color.WHITE;
                                });
                                this.isLastTween = true;
                                this.OptionsLayoutHorizontal();
                                ProgressBar.Instance.createStarTrails(6, this.node);
                                this.scheduleOnce(() => {
                                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                                    this.scheduleOnce(() => {
                                        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                                        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                                        this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            default:
                break;
        }
    }


    callJockey() {
        let anim: string[] = [];
        anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-350, 350];
        this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
        cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (startGame.Instance.jockeyName != "stallion") {
                    if (startGame.Instance.jockeyName == "Podar") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                this.callNextLevel();
            }, this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    }


    callNegativeRection(_node: cc.Node, _event) {
        this.canTouch = false;
        TVInputManager.Instance.setCanSelect(this.canTouch)
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        this.scheduleOnce(() => {
            let anim: string[] = [];
            anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey).to(0.5, { x: 350 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                    if (startGame.Instance.jockeyName != "stallion") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                    this.canTouch = true;
                    TVInputManager.Instance.setCanSelect(this.canTouch)
                }, this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7);

        if (this.isOptionBG) {
            _node.getChildByName("bg").color = cc.Color.RED;
        }
        else {
            _node.getChildByName("img").color = cc.Color.RED;
        }
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10, opacity: 180 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10, opacity: 255 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x, opacity: 255 }, { easing: "sineInOut" }).call(() => {
                _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.defaultMat);
                _node.getChildByName("img").color = cc.Color.WHITE;
                _node.getChildByName("bg").color = cc.Color.WHITE;
            })
            .start();
    }

    destroyOption() {
        for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            if (this.node.getChildByName("Option").children[i].name != this.answerArray[0]) {
                this.node.getChildByName("Option").children[i].destroy();
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

    OptionsLayoutHorizontal() {
        let optionsLayout = this.optionsNode;
        let optionNodes = optionsLayout.children;
        const paddingBetweenOptions = 10;

        let totalWidth = 0;
        let maxHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionWidth = option.width;
            let optionHeight = option.height;

            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }

        let availableWidth = optionsLayout.width;
        let totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        let scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);

        let accumulatedWidth = 0;
        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionScaleFactor = scaleFactor;
            if (optionNodes.length == 2 && startGame.Instance.templateType == "ObjectsTweenIn" && !this.isLastTween) {
                optionScaleFactor = optionScaleFactor * 0.7;
            }
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            let posX = accumulatedWidth + (option.width * option.anchorX);
            if (!this.isLastTween) {
                option.x = posX - (optionsLayout.width * optionsLayout.anchorX);
            }
            else {
                let optionX = posX - (optionsLayout.width * optionsLayout.anchorX);
                cc.tween(option).to(0.5, { x: optionX }, { easing: "sineInOut" }).start();
            }




            accumulatedWidth += option.width + paddingBetweenOptions;
            this.positionArray.push(option.getPosition());
            for (let subChild of option.children) {
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }

        optionsLayout.height = maxHeight * scaleFactor;

        if (optionNodes.length == 2) {
            if (!this.isLastTween) {
                let distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                optionNodes[0].x = 0 - distanceBetweenOptions / 2;
                optionNodes[1].x = 0 + distanceBetweenOptions / 2;
                optionNodes[0].y = optionNodes[0].y - 50;
                optionNodes[1].y = optionNodes[1].y - 50;
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }
            else {
                let distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                let optionX0 = 0 - distanceBetweenOptions / 2;
                let optionX1 = 0 + distanceBetweenOptions / 2;
                cc.tween(optionNodes[0]).to(0.5, { x: optionX0 }, { easing: "sineInOut" }).start();
                cc.tween(optionNodes[1]).to(0.5, { x: optionX1 }, { easing: "sineInOut" }).start();
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }

        }
        else if (optionNodes.length == 1) {
            if (!this.isLastTween) {
                optionNodes[0].x = 0;
            }
            else {
                cc.tween(optionNodes[0]).to(0.5, { x: 0 }, { easing: "sineInOut" }).start();
            }
        }
    }

    OptionsLayoutVertical() {
        let optionsLayout = this.optionsNode;
        let optionNodes = optionsLayout.children;

        const paddingBetweenOptions = 10;

        let totalHeight = 0;
        let maxWidth = 0;
        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionWidth = option.width;
            let optionHeight = option.height;

            totalHeight += optionHeight + paddingBetweenOptions;
            if (optionWidth > maxWidth) {
                maxWidth = optionWidth;
            }
        }

        let availableHeight = optionsLayout.height;
        let totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        let scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);

        let accumulatedHeight = 0;
        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];

            let optionScaleFactor = scaleFactor;
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            let posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
            this.positionArray.push(option.getPosition());

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

    arrangeGridChildren() {
        let children = this.optionsNode.children;
        let maxColumns = 2;
        let _optionCount: number = this.totalAnswers;
        let spacing: number = -200;
        if (_optionCount == 4) {
            maxColumns = 2;
        }
        let totalRows = Math.ceil(children.length / maxColumns);

        let rowHeight = 0;
        if (children.length > 0) {
            rowHeight = children[0].height + spacing; // Assuming all children have the same height
        }

        let startY = (totalRows - 1) * rowHeight / 2;

        for (let i = 0; i < children.length; i++) {
            let column = i % maxColumns;
            let row = Math.floor(i / maxColumns);

            let totalWidth = 0;
            for (let j = 0; j < maxColumns && (row * maxColumns + j) < children.length; j++) {
                totalWidth += children[row * maxColumns + j].width;
            }
            totalWidth += spacing * (Math.min(children.length - row * maxColumns, maxColumns) - 1);

            let startX = -totalWidth / 2;

            let child = children[i];
            child.x = 200 + startX + column * (child.width + spacing) + child.width / 2;
            child.y = startY - row * rowHeight;
            if (this.TotalOptions == 2) {
                child.y = child.y - 30;
            }
            else {
                child.y = child.y - 70;
            }

        }
    }

    OptionsLayoutGrid() {
        let numCols: number;
        let numRows: number;
        if (this.TotalOptions == 2) {
            numCols = 2;
            numRows = 1;
        }
        else if (this.TotalOptions == 3) {
            numCols = 2;
            numRows = 2;
        }
        else if (this.TotalOptions == 4) {
            numCols = 2;
            numRows = 2;
        }

        let paddingBetweenOptions = 120;

        let optionNodes = this.optionsNode;

        const optionWidth = 150; // Width of each option
        const optionHeight = 150; // Height of each option

        const gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        const gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);

        let currentRow = 0;
        let currentCol = 0;

        for (let i = 0; i < optionNodes.children.length; i++) {
            let option = this.optionsNode.children[i];
            let posX = currentCol * (optionWidth + paddingBetweenOptions);
            let posY = currentRow * (optionHeight + paddingBetweenOptions);

            // Update position of the option
            if (this.TotalOptions == 2) {
                option.setPosition(cc.v2(posX + 50, posY));
            }
            else if (this.TotalOptions == 3) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }
            else if (this.TotalOptions == 4) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }


            this.positionArray.push(option.getPosition());

            currentCol++;
            if (currentCol >= numCols) {
                currentCol = 0;
                currentRow++;
            }
            if (this.TotalOptions == 3 && i == 2) {
                option.setPosition(cc.v2(2 * (posX + 100), posY - 180));
            }
        }
        this.optionsNode.width = gridWidth;
        this.optionsNode.height = gridHeight;


    }

    reverseOptionsLayout() {
        let optionsLayout = this.optionsNode;
        let optionNodes = optionsLayout.children;

        let newPositions = [];

        for (let i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }
        for (let i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
        }
    }

    update() {

    }


}
import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";
import optionscript from "./optionscript";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    playerNode: cc.Node = null;
    @property(cc.AudioClip)
    jumpSFX: cc.AudioClip = null;
    @property(cc.AudioClip)
    correctSFX: cc.AudioClip = null;
    @property(cc.AudioClip)
    wrongSFX: cc.AudioClip = null;
    @property(cc.AudioClip)
    blinkSFX: cc.AudioClip = null;
    @property(cc.AudioClip)
    walkSFX: cc.AudioClip = null;

    @property(cc.Prefab)
    HorizntalOptionNode: cc.Prefab = null;

    @property(cc.Prefab)
    VerticalOptionNode: cc.Prefab = null;

    @property(cc.SpriteFrame)
    private extraImg: cc.SpriteFrame = null;

    @property(cc.AudioClip)
    private popSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private honeyFilling: cc.AudioClip = null;

    @property(cc.AudioClip)
    private honeyprogressFilling: cc.AudioClip = null;

    @property(cc.AudioClip)
    private beeFlying: cc.AudioClip = null;

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

    @property(cc.Node)
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
        this.optionsNode.children.forEach((elem) => {
            elem.children.forEach((Elem) => {
                Elem.active = true;
            })
        })
        // this.optionsNode.children[0].children[0].active = false;
        // this.optionsNode.children[1].children[0].active = false;
        // this.optionsNode.children[2].children[0].active = false;
        if (startGame.Instance.jockeyName == "Podar") {
            this.optionsNode.children.forEach((element) => {
                element.getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            });
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.optionsNode.children.forEach((element) => {
                element.getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            });
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }

        this.TotalOptions = 4;


        this.optionsNode = this.node.getChildByName("Option");
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        //this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;

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

            for (let i = 0; i < this.TotalOptions; i++) {
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

            for (let i = 0; i < this.TotalOptions; i++) {
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
        this.canTouch = true;
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;

        this.totalAnswers = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length;

        this.callQuestionBar();

        if (startGame.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        else if (startGame.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }



    callQuestionBar() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

        this.scheduleOnce(() => {
            this.callOptionIn();
        }, 1);
    }



    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    }

    callOptionIn() {
        this.optionsNode.children.forEach((elem) => {
            elem.children[1].opacity = 255;
            elem.children[2].opacity = 255;
            cc.audioEngine.playEffect(this.popSound[0], false);
            cc.tween(elem.children[1])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            cc.tween(elem.children[2])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        });

        this.scheduleOnce(() => {
            this.PlayQuestionAudio();
        }, 0.5);
    }



    PlayQuestionAudio() {
        this.canTouch = false;
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
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
            if (startGame.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, intoAnim, false);
            this.scheduleOnce(() => {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    this.canTouch = true;
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
        console.log("canTouch--" + this.canTouch)
        if (!this.canTouch) {
            return;
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
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    }

    callNextLevel() {
        this.optionsNode.children[0].children[0].active = false;
        this.optionsNode.children[1].children[0].active = false;
        this.optionsNode.children[2].children[0].active = false;
        this.optionsNode.children[3].children[0].active = false;

        this.optionsNode.children.forEach((elem) => {
            elem.children.forEach((Elem) => {
                Elem.active = false;
            })
        })

        console.log("levelComplete--" + globalVariables.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(() => {
                cc.director.loadScene("endScreen");
            }, this.positiveAudio[0].duration - 0.5)
        }
        else {
            //play player walk
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.walkSFX, false);
                this.node.getChildByName("bg").children[0].getComponent(cc.Animation).play();
                this.playerNode.getChildByName("idle").active = true;
                this.playerNode.getChildByName("correct").active = false;
                cc.tween(this.playerNode).to(0.7, { x: 0 }).start();
                cc.tween(this.playerNode).to(0.116, { angle: -8 }, { easing: "sineInOut" }).to(0.116, { angle: 0 }, { easing: "sineInOut" }).to(0.116, { angle: 8 }, { easing: "sineInOut" })
                    .to(0.116, { angle: 0 }, { easing: "sineInOut" }).to(0.116, { angle: -8 }, { easing: "sineInOut" }).to(0.116, { angle: 0 }, { easing: "sineInOut" }).start();
                this.scheduleOnce(() => {
                    globalVariables.Instance.currentLevel++;
                    cc.director.loadScene("1");
                }, 1)
            }, this.positiveAudio[0].duration - 0.5);
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
                this.callJockey();
            }, 0.7);
        }, 0.5);
    }

    callPositiveFeedback(_node: cc.Node) {
        let voIndex: number = this.answerArray.indexOf(_node.name);
        cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
        _node.getChildByName("img").color = cc.Color.GREEN;
        this.optionsNode.children.forEach(element => {
            if (element != _node) {
                element.active = false;
            }

        });
        this.scheduleOnce(() => {
            this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(this.positiveSound[0], false);
            this.scheduleOnce(() => {
                this.canTouch = true;
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
                        this.canTouch = false;
                        this.callPositiveReaction(_node);
                        this.scheduleOnce(() => {
                            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                            this.callJockey();
                        }, 3.5);
                    }, 1);
                }
            }, 0.5);
        }, this.correctAudio[voIndex].duration);
    }


    callJockey() {
        let anim: string[] = [];
        if (startGame.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (startGame.Instance.jockeyName == "bag") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (startGame.Instance.jockeyName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (startGame.Instance.jockeyName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (startGame.Instance.jockeyName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        if (globalVariables.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.jockeyName == "Podar") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
        }
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
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
        else if (startGame.Instance.jockeyName == "tlc") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_out", false);
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
                this.scheduleOnce(() => {
                    this.currentJcokey.active = false;
                    this.callNextLevel();
                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" || anim[currentClipNum] == "positive_2") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(this.supercub_Pos2, false);
                        }
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                        this.scheduleOnce(() => {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                            cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                            this.callNextLevel();
                        }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration)
                    }, this.positiveAudio[currentClipNum].duration);

                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                    cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                    this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }

        }
    }


    callNegativeRection(_node: cc.Node, _event) {
        this.canTouch = false;
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        if (this.isOptionBG) {
            _node.getChildByName("bg").color = cc.Color.RED;
        }
        else {
            _node.getChildByName("img").color = cc.Color.RED;
        }

        this.callNegativeReaction(_node);


        this.scheduleOnce(() => {
            let anim: string[] = [];
            if (startGame.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (startGame.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (startGame.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (startGame.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }

            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            if (startGame.Instance.jockeyName == "stallion") {
                this.currentJcokey.scaleX = 0.65;
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
                this.currentJcokey.setPosition(1200, -350);
                cc.tween(this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                        if (startGame.Instance.jockeyName != "stallion") {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        this.canTouch = true;
                    }, this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.canTouch = true;
                }, this.negativeAudio[currentClipNum].duration);
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2") {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                        this.scheduleOnce(() => {
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(this.supercub_Neg2, false);
                            }
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                            this.canTouch = true;
                            this.scheduleOnce(() => {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, this.negativeAudio[currentClipNum].duration);

                    }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        this.canTouch = true;
                    }, this.negativeAudio[currentClipNum].duration);
                }

            }
            _node.getChildByName("img").color = cc.Color.WHITE;
            // this.scheduleOnce(() => {
            //     cc.tween(this.node.getChildByName("honeybee")).to(0.5, { x: 0, y: -500 }, { easing: "quartInOut" }).start();
            //     this.scheduleOnce(() => {
            //         this.node.getChildByName("honeybee").getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
            //     }, 0.5);
            // }, 2);

        }, 3.5);
    }

    callNegativeReaction(_node: cc.Node) {
        let _player = this.node.getChildByName("player");
        _player.setParentWithSamePos(this.node.getChildByName("Hole").getChildByName(_node.name).getChildByName("node"));
        let _currentPosition: cc.Vec2 = _player.getPosition();
        cc.tween(_player).to(0.5, { x: 0 }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.jumpSFX, false);
            cc.tween(_player).to(0.5, { scale: 1.1 }, { easing: "quartInOut" }).to(0.5, { scale: 1 }, { easing: "quartInOut" }).start();
            cc.tween(_player).to(1, { y: -250 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.wrongSFX, false);
                _player.getChildByName("idle").active = false;
                _player.getChildByName("leg").active = false;
                _player.getChildByName("wrong").active = true;
                cc.tween(_player).to(0.5, { scale: 1.1 }, { easing: "quartInOut" }).to(0.5, { scale: 1 }, { easing: "quartInOut" }).start();
                cc.tween(_player).to(1, { y: _currentPosition.y }, { easing: "quartInOut" }).start();
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.blinkSFX, false);
                    cc.tween(_player).to(0.2, { scale: 1.2 }, { easing: "quartInOut" }).to(0.2, { scale: 1 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1.2 }, { easing: "quartInOut" }).to(0.2, { scale: 1 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1.2 }, { easing: "quartInOut" }).to(0.2, { scale: 1 }, { easing: "quartInOut" }).start();
                    this.scheduleOnce(() => {
                        _player.getChildByName("idle").active = true;
                        _player.getChildByName("leg").active = true;
                        _player.getChildByName("wrong").active = false;
                        _player.setParentWithSamePos(this.node);
                    }, 1.1);
                }, 1);
            }, 1);
        }, 0.5);

    }
    callPositiveReaction(_node: cc.Node) {
        let _player = this.node.getChildByName("player");
        _player.setParentWithSamePos(this.node.getChildByName("Hole").getChildByName(_node.name).getChildByName("node"));
        let _currentPosition: cc.Vec2 = _player.getPosition();
        cc.tween(_player).to(0.5, { x: 0 }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.jumpSFX, false);
            cc.tween(_player).to(0.5, { scale: 1.1 }, { easing: "quartInOut" }).to(0.5, { scale: 1 }, { easing: "quartInOut" }).start();
            cc.tween(_player).to(1, { y: -250 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.correctSFX, false);
                _player.getChildByName("idle").active = false;
                _player.getChildByName("correct").active = true;
                cc.tween(_player).to(0.5, { scale: 1.1 }, { easing: "quartInOut" }).to(0.5, { scale: 1 }, { easing: "quartInOut" }).start();
                cc.tween(_player).to(1, { y: _currentPosition.y }, { easing: "quartInOut" }).start();
                this.scheduleOnce(() => {
                    _player.setParentWithSamePos(this.node);
                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                }, 1.1);
            }, 1);
        }, 0.5);

    }

    OldcallBeeNegativeReaction(_node: cc.Node) {
        // let honeyBee: cc.Node = this.node.getChildByName("honeybee");
        // //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        // if (_node.name == "1") {
        //     cc.tween(honeyBee).to(0.5, { x: -320, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[0].children[1].opacity = 0;
        //         this.optionsNode.children[0].children[2].opacity = 0;
        //         this.optionsNode.children[0].children[0].getComponent(sp.Skeleton).setAnimation(0, "red Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
        // else if (_node.name == "2") {
        //     cc.tween(honeyBee).to(0.5, { x: 30, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[1].children[1].opacity = 0;
        //         this.optionsNode.children[1].children[2].opacity = 0;
        //         this.optionsNode.children[1].children[0].getComponent(sp.Skeleton).setAnimation(0, "blue Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
        // else if (_node.name == "3") {
        //     cc.tween(honeyBee).to(0.5, { x: 320, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[2].children[1].opacity = 0;
        //         this.optionsNode.children[2].children[2].opacity = 0;
        //         this.optionsNode.children[2].children[0].getComponent(sp.Skeleton).setAnimation(0, "yellow Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
    }
    OldcallBeePositiveReaction(_node: cc.Node) {
        // let honeyBee: cc.Node = this.node.getChildByName("honeybee");
        // //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        // if (_node.name == "1") {
        //     cc.tween(honeyBee).to(0.5, { x: -320, y: -150 }, { easing: "quartInOut" }).start();
        // }
        // else if (_node.name == "2") {
        //     cc.tween(honeyBee).to(0.5, { x: 30, y: -150 }, { easing: "quartInOut" }).start();
        // }
        // else if (_node.name == "3") {
        //     cc.tween(honeyBee).to(0.5, { x: 420, y: -120 }, { easing: "quartInOut" }).start();
        // }


        // this.scheduleOnce(() => {
        //     //cc.audioEngine.stopEffect(beeId);
        //     cc.audioEngine.playEffect(this.honeyFilling, false);
        //     honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_Filled bucket", true);
        //     this.scheduleOnce(() => {
        //         //let beeId2 = cc.audioEngine.playEffect(this.beeFlying, true);
        //         cc.tween(honeyBee)
        //             .to(1, { x: -450, y: -325, scale: 0.3 }, { easing: "quartInOut" })
        //             .to(0.5, { x: -570, y: -325 }, { easing: "quartInOut" }).start();
        //         this.scheduleOnce(() => {
        //             //cc.audioEngine.stopEffect(beeId2);
        //             cc.audioEngine.playEffect(this.honeyprogressFilling, false);
        //             ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
        //             this.scheduleOnce(() => {
        //                 //let beeId3 = cc.audioEngine.playEffect(this.beeFlying, true);
        //                 honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
        //                 cc.tween(honeyBee)
        //                     .to(0.5, { x: 0, y: -500, scale: 0.7 }, { easing: "quartInOut" }).start();

        //                 this.scheduleOnce(() => {
        //                     //cc.audioEngine.stopEffect(beeId3);
        //                 }, 0.5);
        //             }, 0.5);
        //         }, 1.5);
        //     }, 0.5);
        // }, 0.5);
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

    update() {

    }

}
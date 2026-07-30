import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import TVInputManager from "../../../Framework/Scripts/TVInputManager";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;
    @property(cc.AudioClip)
    private popSound: cc.AudioClip[] = [];
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
    private tlc_birdFlying: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Pos1: cc.AudioClip = null;
    @property(cc.AudioClip)
    private supercub_Pos2: cc.AudioClip = null;

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

    onLoad() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;



        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.correctAudio = audioClip;
            });
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
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
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudioName, (AudioClip) => {
                this.correctAudio = AudioClip;
            });
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (spriteFrame) => {
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });

            }
            this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (spriteFrame) => {
                this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });

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
        }
        //startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        // this.setAnswerArray();
        this.answerArray = [startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum];
        // this.OptionsLayout();
        this.callThirdObjectIn();
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    GenerateOptions() {
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        this.node.getChildByName("template").destroy();
    }

    callThirdObjectIn() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        // this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();
        let posX = -237;
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            posX = -300;
        }
        this.scheduleOnce(() => {
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.popSound[0], false);
                cc.tween(this.node.getChildByName("QuestionBox"))
                    .to(1, { scale: 1 }, { easing: "sineInOut" }).start();
            }, 0.1);
            this.scheduleOnce(() => {
                cc.tween(this.node.getChildByName("QuestionBox"))
                    .to(0.5, { x: posX }, { easing: "sineInOut" }).start();
                this.callOptionIn();
            }, 1);
        }, 1);
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
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("Option").setPosition(150, -70);
        }
        for (let i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            this.node.getChildByName("Option").children[i - 1].scale = 0;
            this.node.getChildByName("Option").children[i - 1].opacity = 255;
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.popSound[0], false);
                cc.tween(this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                if (i == this.node.getChildByName("Option").children.length) {
                    this.scheduleOnce(() => {
                        this.canTouch = true;
                        if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canTouch);
                        this.setupTVFocus("Option");
                        this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        }
    }

    PlayQuestionAudio() {
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            if (globalVariables.Instance.currentLevel == 1) {
                let hand = this.node.getChildByName("hand");
                console.log("answer array num = ", this.answerArray[0]);
                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                hand.setPosition(50, -50);
                hand.angle = 30;
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
                    if (globalVariables.Instance.currentLevel == 1) {
                        let hand = this.node.getChildByName("hand");
                        console.log("answer array num = ", this.answerArray[0]);
                        hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                        hand.setPosition(50, -50);
                        hand.angle = 30;
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
                            if (globalVariables.Instance.currentLevel == 1) {
                                let hand = this.node.getChildByName("hand");
                                console.log("answer array num = ", this.answerArray[0]);
                                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                                hand.setPosition(50, -50);
                                hand.angle = 30;
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
        this.canTouch = false;
        TVInputManager.Instance.setCanSelect(this.canTouch);
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        let _node = _event.target;
        if (_node.name == this.answerArray[0]) {
            cc.audioEngine.stopAllEffects();
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
            this.setupTVFocus2();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
            this.destroyOption();
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.scheduleOnce(() => {
                this.callPositiveRection(_node);
            }, 0);
        }
        else {
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
            }, 1)
        }
        else {
            this.scheduleOnce(() => {
                globalVariables.Instance.currentLevel++;
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                cc.director.loadScene("1");
            }, 1)
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

    setAnswerArray() {
        if (globalVariables.Instance.currentLevel == 1) {
            this.answerArray = ["1"];
        }
        else if (globalVariables.Instance.currentLevel == 2) {
            this.answerArray = ["2"];
        }
        else if (globalVariables.Instance.currentLevel == 3) {
            this.answerArray = ["1"];
        }
        else if (globalVariables.Instance.currentLevel == 4) {
            this.answerArray = ["1"];
        }
        else if (globalVariables.Instance.currentLevel == 5) {
            this.answerArray = ["2"];
        }
        else if (globalVariables.Instance.currentLevel == 6) {
            this.answerArray = ["1"];
        }
        else if (globalVariables.Instance.currentLevel == 7) {
            this.answerArray = ["2"];
        }
    }

    callPositiveRection(_node: cc.Node) {
        // _node.getComponent(cc.Sprite).spriteFrame = this.extraImg;
        cc.audioEngine.playEffect(this.correctAudio, false);
        // cc.tween(_node).to(0.5, { scale: 1.5, x: 0, y: 0 }, { easing: "sineInOut" }).start();
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


    callJockey() {
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
        cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, this.positiveAudio[globalVariables.Instance.currentLevel % 6].name, false);
            cc.audioEngine.playEffect(this.positiveAudio[globalVariables.Instance.currentLevel % 6], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (startGame.Instance.jockeyName != "stallion") {
                    if (startGame.Instance.jockeyName != "Podar") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                    else {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                this.callNextLevel();
            }, this.positiveAudio[globalVariables.Instance.currentLevel % 6].duration);
        }, 0.5);
    }


    callNegativeRection(_node: cc.Node, _event) {
        _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        this.scheduleOnce(() => {
            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, this.negativeAudio[this.wrongAnswerCount % 2].name, false);
                cc.audioEngine.playEffect(this.negativeAudio[this.wrongAnswerCount % 2], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                    if (startGame.Instance.jockeyName != "stallion") {
                        if (startGame.Instance.jockeyName != "Podar") {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                    }
                    this.canTouch = true;
                    TVInputManager.Instance.setCanSelect(this.canTouch);
                }, this.negativeAudio[this.wrongAnswerCount % 2].duration);
            }, 0.5);
        }, 0.7)

        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" }).call(() => {
                _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.defaultMat);
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

    OptionsLayoutVertical() {
        let optionsLayout = this.optionsNode;
        let optionNodes = optionsLayout.children;

        const paddingBetweenOptions = 10;

        let totalHeight = 0;
        let maxWidth = 0;

        // Calculate the total height and the maximum width of the options
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

        // Position each option node vertically
        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];

            // Calculate the scale factor for the option
            let optionScaleFactor = scaleFactor;

            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            // Calculate position based on anchor and scaled size
            let posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);

            accumulatedHeight += option.height + paddingBetweenOptions;

            // Scale and position children nodes proportionally
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
        let optionsLayout = this.optionsNode;
        let optionNodes = optionsLayout.children;

        // Create an array to hold the new positions
        let newPositions = [];

        // Calculate new positions in reverse order
        for (let i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }

        // Update the positions of the options
        for (let i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
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
            return (!btn || btn.interactable !== false);
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
    private setupTVFocus2() {
        let backBtn = startGame.Instance.node.getChildByName("back");
        let musicBtn = startGame.Instance.node.getChildByName("music");
        let soundBtn = this.node.getChildByName("questionPanel").getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        let nodes = [backBtn, soundBtn, musicBtn].filter(n => !!n);
        if (cc.director.getScene().name == "1") {
            TVInputManager.Instance.init(nodes, 0);
        }
        else {
            TVInputManager.Instance.init(nodes, -1);
        }
        TVInputManager.Instance.setCanSelect(this.canTouch);
    }

}
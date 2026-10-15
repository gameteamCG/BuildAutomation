import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameplay extends cc.Component {


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

    @property(cc.Node)
    private optionsNode: cc.Node = null;
    @property(cc.Node)
    private dropZones: cc.Node = null;


    private questionBoxPosY: number = 0;

    touches: cc.Vec2[] = [];

    canMove: boolean = false;
    private collider: cc.Node = null;
    droppedBool: boolean[] = [];

    private answeredCount: number = 0;
    private totalAnswers: number = 0;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        else {
            // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        this.totalAnswers = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions;
        this.UpdateJSONData();
    }

    UpdateJSONData() {
        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations.length; i++) {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.correctAudio[i] = audioClip;
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        this.dropZones.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        this.optionsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isLeftOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.dropZones.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.dropZones.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i];
                }
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isRightOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.optionsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.optionsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i];
                }
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations.length; i++) {
                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations[i], (AudioClip) => {
                    this.correctAudio[i] = AudioClip;
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        this.dropZones.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        this.optionsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isRightOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i], (spriteFrame) => {
                        this.optionsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.optionsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i];
                }
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isLeftOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i], (spriteFrame) => {
                        this.dropZones.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.dropZones.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i];
                }
            }
        }

        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);

        this.callThirdObjectIn();

    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        this.answerArray[0] = "1";
    }

    SubscribeEvents() {
        this.collider = this.node.getChildByName("collider");
        for (let i = 0; i < this.dropZones.children.length; i++) {
            this.droppedBool[i] = false;
        }
        this.optionsNode.children.forEach(element => {
            element.on('touchstart', function (event) {
                this.TouchStart(element, event);
            }, this);
        });
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    GenerateOptions() {
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
            let dropNode = cc.instantiate(this.node.getChildByName("template"));
            dropNode.name = (i + 1).toString();
            dropNode.setParent(this.dropZones);
            dropNode.setPosition(cc.v2(0, 0));
            dropNode.opacity = 0;
        }
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.optionsNode);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }

        console.log("dropZones = ", this.dropZones.name);
        // console.log("optionsNode = ", this.optionsNode.children.length);
        this.node.getChildByName("template").destroy();
    }

    callThirdObjectIn() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        // this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

        this.OptionsLayoutVertical(this.optionsNode);
        this.OptionsLayoutVertical(this.dropZones);
        this.reverseOptionsLayout(this.optionsNode);
        this.reverseOptionsLayout(this.dropZones);
        // let posX = -237;
        // if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
        //     posX = -300;
        // }

        this.scheduleOnce(() => {
            let delay = 0.5;
            for (let i = 1; i <= this.dropZones.children.length; i++) {
                this.dropZones.children[i - 1].scale = 0;
                this.dropZones.children[i - 1].opacity = 255;
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.popSound[0], false);
                    cc.tween(this.dropZones.getChildByName(i.toString()))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    if (i == this.dropZones.children.length) {
                        this.scheduleOnce(() => {
                            this.callOptionIn();
                        }, 0.5);
                    }
                }, delay);
                delay += 0.3;
            }
        }, 1);
    }

    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    }

    callOptionIn() {
        let delay: number = 0.5;
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            this.optionsNode.children.forEach(element => {
                element.setPosition(190, element.getPosition().y);
            });
        }
        for (let i = 1; i <= this.optionsNode.children.length; i++) {
            this.optionsNode.children[i - 1].scale = 0;
            this.optionsNode.children[i - 1].opacity = 255;
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.popSound[0], false);
                cc.tween(this.optionsNode.getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                if (i == this.optionsNode.children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                        this.SubscribeEvents();
                    }, 0.5);
                }
            }, delay);
            delay += 0.3
        }
    }

    PlayHandAnimation() {
        let hand = this.node.getChildByName("hand");
        let pos2: cc.Vec2 = this.optionsNode.getChildByName("1").getPosition();
        hand.setPosition(pos2);
        hand.getComponent(cc.Animation).play();
    }

    PlayQuestionAudio() {
        this.canMove = false;
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canMove = true;
            if (globalVariables.Instance.currentLevel == 1) {
                this.PlayHandAnimation();
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
                    this.canMove = true;
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                }
                else {
                    cc.audioEngine.playEffect(this.questionSound[0], false);
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_loop", true);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_end", false);
                        this.scheduleOnce(() => {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            this.canMove = true;
                        }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, this.questionSound[0].duration);
                }

            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }

    }

    callNextLevel() {
        if (this.answeredCount >= this.totalAnswers) {
            console.log("levelComplete--" + globalVariables.Instance.currentLevel);
            ProgressBar.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(() => {
                ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                this.scheduleOnce(() => {
                    this.callStarsEared();
                    if (globalVariables.Instance.currentLevel == this.maxLevel) {
                        cc.director.loadScene("endScreen");
                    }
                    else {
                        globalVariables.Instance.currentLevel++;
                        cc.director.loadScene("1");
                    }
                }, 1);
            }, 1.5);
        }
        else {
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
            this.dropZones.active = true;
            this.optionsNode.active = true;
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = true;
            this.node.getChildByName("overlay").active = false;
            this.node.getChildByName("overlay").children.forEach(element => {
                if (element.name != "bg") {
                    element.destroy();
                }
            });
            this.canMove = true;

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

    callPositiveRection(_node1: cc.Node, _node2: cc.Node) {
        let _clone1: cc.Node = cc.instantiate(_node1);
        let _clone2: cc.Node = cc.instantiate(_node2);
        this.node.getChildByName("overlay").active = true;
        _clone1.setParent(this.node.getChildByName("overlay"));
        _clone2.setParent(this.node.getChildByName("overlay"));
        _node1.destroy();
        _node2.destroy();
        this.dropZones.active = false;
        this.optionsNode.active = false;
        cc.tween(_clone1).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1.children[1]).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1).to(0.5, { x: -170, y: 0 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2.children[1]).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2).to(0.5, { x: 170, y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.positiveSound[0], false);
        }, 0.2)
        this.scheduleOnce(() => {
            let audioNum: number = parseInt(_clone1.name);
            audioNum -= 1;
            cc.audioEngine.playEffect(this.correctAudio[audioNum], false);
            this.node.getChildByName("confetti").setPosition(0, 0);
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            this.scheduleOnce(() => {
                this.callJockey();
            }, 0.7);
        }, 1);
    }


    callJockey() {
        let anim: string[] = [];
        anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
        cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                this.callNextLevel();
            }, this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    }


    callNegativeRection(_node: cc.Node) {
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        this.scheduleOnce(() => {
            let anim: string[] = [];
            anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                    this.canMove = true;
                }, this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7)

        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" }).call(() => {
            })
            .start();
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

    OptionsLayoutVertical(_node: cc.Node) {
        let optionsLayout = _node;
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

    reverseOptionsLayout(_node: cc.Node) {
        let optionsLayout = _node;
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
        let pos = optionsLayout.getPosition();
        optionsLayout.setPosition(0, 0);


        for (let i = 0; i < optionNodes.length; i++) {
            if (optionNodes.length > 1) {
                optionNodes[i].setPosition(pos.x, optionNodes[i].y + pos.y);
            }
            else if (optionNodes.length == 1) {
                optionNodes[i].setPosition(pos.x, pos.y);
            }
            let _polygon = optionNodes[i].getComponent(cc.PolygonCollider);
            _polygon.points[0].x = -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[0].y = -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[1].x = optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[1].y = -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[2].x = optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[2].y = optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[3].x = -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[3].y = optionNodes[i].getChildByName("img").height / 2;
        }

        if (_node.name == this.optionsNode.name) {
            const children = optionsLayout.children;

            // Create an array to store the original positions
            const originalPositions = [];

            // Store the original positions of the children nodes
            for (let i = 0; i < children.length; i++) {
                originalPositions.push(children[i].position.clone());
            }

            // Shuffle the positions randomly
            for (let i = children.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = children[i].position.clone();
                children[i].setPosition(children[j].position);
                children[j].setPosition(temp);
            }
        }
    }



    TouchStart(_node: cc.Node, _event: any) {
        if (!this.canMove) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        this.node.getChildByName("hand").opacity = 0;
        this.Feedback(_node, this.dropZones.children[parseInt(_node.name) - 1], (parseInt(_node.name) - 1));
    }

    Feedback(_node: cc.Node, _dropNode: cc.Node, number: number) {
        console.log("feedback called!!!!!");
        this.canMove = false;
        if (_node.name == _dropNode.name) {
            this.answeredCount++;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveRection(_dropNode, _node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node);
        }
    }


}
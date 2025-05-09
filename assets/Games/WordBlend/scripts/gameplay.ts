import ProgressBar from "../../../Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";

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

    @property(cc.Node)
    options: cc.Node = null;
    @property(cc.Node)
    wordsNode: cc.Node = null;
    @property(cc.Node)
    myOptions: cc.Node = null;

    correctAnswer: string = "1";

    @property(cc.AudioClip)
    correctAction: cc.AudioClip = null;
    @property(cc.AudioClip)
    incorrectButton: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    rotateAction: cc.AudioClip = null;
    @property(cc.AudioClip)
    swipeAction: cc.AudioClip = null;

    puzzleQuestionVo: cc.AudioClip = null;
    puzzleVoIteration: cc.AudioClip = null;
    wordVoQuestion: cc.AudioClip = null;
    wordVoIteration: cc.AudioClip = null;
    @property(cc.AudioClip)
    jockeyCorrect2: cc.AudioClip = null;
    @property(cc.AudioClip)
    wrongAnswer: cc.AudioClip = null;

    // @property(cc.SpriteFrame)
    temporarySprites: cc.SpriteFrame[] = [];


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

    private isSecondInteraction: boolean = true;
    private interactionType: string = "1";


    currentJockey: cc.Node = null;



    private interactable;
    private selectable = false;
    private wordCurrentSeleced: cc.Node;
    private wordCurrentSelecedPos: cc.Vec2;

    private questionPlaying = false;

    private correctWordSeq: string[] = ["132"];
    private currWordSeq: string = "";

    private currScene: number = 1;
    private colorValue: cc.Color = null;

    private sheduleQuestionClip;
    onLoad() {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }

        this.isSecondInteraction = startGame.Instance.questions[startGame.Instance.currentLevel - 1].needReiteration;
        this.interactionType = startGame.Instance.questions[startGame.Instance.currentLevel - 1].interactionType;
        if (this.isSecondInteraction) {
            // for (let i = 0; startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     this.currWordSeq += (i + 1).toString();
            // }
            if (this.interactionType == "1") {
                this.GenerateOptions(this.myOptions, "template1");
                this.correctAnswer = startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAnswer;
            }
            else {
                this.GenerateOptions(this.wordsNode, "template2");
                this.correctWordSeq[0] = startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAnswer;
            }

        }

    }
    resetInteraction() {
        this.unschedule(this.sheduleQuestionClip);
        this.scheduleOnce(this.sheduleQuestionClip, 10);
    }
    start() {
        if (startGame.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (startGame.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }

        this.UpdateJsonData();

        startGame.Instance.node.getChildByName("progress").opacity = 255;

        this.colorValue = this.options.color;
        this.currScene = startGame.Instance.currentLevel;
        ProgressBar.Instance.ProgressFill(this.currScene - 1, false);
        console.log("levelStarted--" + this.currScene);
        if (this.currScene >= startGame.Instance.totalLevels) {
            cc.director.preloadScene("GameEnd");
        }
        else {
            cc.director.preloadScene((this.currScene + 1).toString());
        }
        startGame.Instance.clickEvent = false;
        let canvas = cc.find("Canvas");
        canvas.on('touchstart', function (event) {
            if (!startGame.Instance.clickEvent) {
                {
                    startGame.Instance.clickEvent = true;
                    console.log("firstClick--" + this.currScene);
                }
            }
        }, this);


        this.scheduleOnce(() => {
            this.InitiateGame();
        }, 1);


    }

    UpdateJsonData() {
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;

        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.puzzleQuestionVo = audioClip;
            });

            if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonPuzzleImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }

            for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].puzzles[i], (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }

            cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.puzzleVoIteration = audioClip;
            });

            cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName2, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.wordVoQuestion = audioClip;
            });

            if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (this.interactionType == "1") {
                            this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            this.currWordSeq += (i + 1).toString();
                            this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[startGame.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        if (this.interactionType == "1") {
                            this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this.interactionType == "1") {
                        this.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
                    }
                }
            }
            cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.wordVoIteration = audioClip;
            });

        }
        else {
            this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.puzzleQuestionVo = AudioClip;
            });
            if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonPuzzleImageName, (spriteFrame) => {
                    this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].puzzles[i], (spriteFrame) => {
                    this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAudioName, (AudioClip) => {
                this.puzzleVoIteration = AudioClip;
            });
            this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName2, (AudioClip) => {
                this.wordVoQuestion = AudioClip;
            });
            if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].commonOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (this.interactionType == "1") {
                            this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            this.currWordSeq += (i + 1).toString();
                            this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[startGame.Instance.currentLevel - 1].isOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i], (spriteFrame) => {
                        if (this.interactionType == "1") {
                            this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this.interactionType == "1") {
                        this.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
                    }

                }
            }
            this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName, (AudioClip) => {
                this.wordVoIteration = AudioClip;
            });
        }
        this.currentJockey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        this.currentJockey.active = true;
    }

    UpdateOptions() {
        this.options.active = false;
        this.node.getChildByName("hint").active = false;
        let _width = 250;
        let _height = 250;
        if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfPuzzles == 4) {
            _width = 250;
            _height = 250;
        }
        else if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfPuzzles == 9) {
            _width = 166;
            _height = 166;
        }

        for (let i = 0; i < this.options.children.length; i++) {
            this.options.children[i].width = _width;
            this.options.children[i].height = _height;
            if (i >= startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfPuzzles) {
                this.options.children[i].destroy();
            }
        }

    }

    InitiateGame() {
        //repeat method
        this.UpdateOptions();
        this.sheduleQuestionClip = () => {
            if (this.interactable) { cc.audioEngine.playEffect(this.puzzleQuestionVo, false); }
            this.options.children.forEach((_child) => {
                if (_child.angle % 360 != 0) {
                    cc.tween(_child)
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .start()
                }
            })
            this.scheduleOnce(() => { this.resetInteraction(); }, 0);
        };

        this.scheduleOnce(() => {
            this.SetFrameOptions();
        }, 0.1);

        this.wordsNode.children.forEach((element) => {
            element.on('touchstart', (_event) => { this.wordTouchStart(_event); });
            element.on('touchmove', (_event) => { this.wordTouchMove(_event); });
            element.on('touchend', (_event) => { this.wordTouchEnd(_event); });
        });
    }

    SetFrameOptions() {
        this.options.active = true;
        if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].isHintRequired) {
            this.node.getChildByName("hint").active = true;
        }
        if (this.options.childrenCount == 4) {
            this.options.children[0].setPosition(-this.options.children[0].width / 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(this.options.children[1].width / 2, this.options.children[1].height / 2);
            this.options.children[2].setPosition(-this.options.children[2].width / 2, -this.options.children[2].height / 2);
            this.options.children[3].setPosition(this.options.children[3].width / 2, -this.options.children[3].height / 2);
        } else if (this.options.childrenCount == 9) {
            let threshHold: number = 1

            this.options.children[0].setPosition(-(this.options.children[0].width) + threshHold, this.options.children[0].height - threshHold);
            this.options.children[1].setPosition(0, this.options.children[1].height - threshHold);
            this.options.children[2].setPosition(this.options.children[2].width - threshHold, this.options.children[2].height - threshHold);

            this.options.children[3].setPosition(-(this.options.children[3].width) + threshHold, 0);
            this.options.children[4].setPosition(0, 0);
            this.options.children[5].setPosition(this.options.children[5].width - threshHold, 0);

            this.options.children[6].setPosition(-(this.options.children[6].width) + threshHold, -(this.options.children[6].height) + threshHold);
            this.options.children[7].setPosition(0, -(this.options.children[7].height) + threshHold);
            this.options.children[8].setPosition(this.options.children[8].width - threshHold, -(this.options.children[8].height) + threshHold);
        } else if (this.options.childrenCount == 6) {
            this.options.children[0].setPosition(-this.options.children[0].width + 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(0, this.options.children[1].height / 2);
            this.options.children[2].setPosition(this.options.children[2].width - 2, this.options.children[2].height / 2);
            this.options.children[3].setPosition(-this.options.children[3].width + 2, -this.options.children[3].height / 2);
            this.options.children[4].setPosition(0, -this.options.children[4].height / 2);
            this.options.children[5].setPosition(this.options.children[3].width - 2, -this.options.children[3].height / 2);




        } else if (this.options.childrenCount == 16) {



            var threshHold: number = 62.5

            this.options.children[0].setPosition(-this.options.children[0].width - threshHold, this.options.children[0].height + threshHold);

            this.options.children[1].setPosition(-this.options.children[1].width / 2, this.options.children[1].height + threshHold);

            this.options.children[2].setPosition(this.options.children[2].width / 2, this.options.children[2].height + threshHold);

            this.options.children[3].setPosition(this.options.children[3].width + threshHold, this.options.children[3].height + threshHold);

            this.options.children[4].setPosition(-this.options.children[4].width - threshHold, this.options.children[4].height / 2);
            this.options.children[5].setPosition(-this.options.children[5].width / 2, this.options.children[5].height / 2);

            this.options.children[6].setPosition(this.options.children[6].width / 2, this.options.children[6].height / 2);

            this.options.children[7].setPosition(this.options.children[7].width + threshHold, this.options.children[7].height / 2);

            this.options.children[8].setPosition(-(this.options.children[8].width + threshHold), -this.options.children[8].height / 2);

            this.options.children[9].setPosition(-(this.options.children[9].width / 2), -this.options.children[9].height / 2);

            this.options.children[10].setPosition((this.options.children[10].width / 2), -this.options.children[10].height / 2);


            this.options.children[11].setPosition((this.options.children[11].width + threshHold), -this.options.children[11].height / 2);

            this.options.children[12].setPosition(-(this.options.children[12].width + threshHold), -this.options.children[12].height - threshHold);

            this.options.children[13].setPosition(-(this.options.children[13].width / 2), -this.options.children[13].height - threshHold);

            this.options.children[14].setPosition((this.options.children[14].width / 2), -this.options.children[14].height - threshHold);

            this.options.children[15].setPosition((this.options.children[15].width + threshHold), -this.options.children[15].height - threshHold);

        }

        for (let i = 0; i < this.options.childrenCount; i++) {
            let clone = cc.instantiate(this.options.children[i]);
            clone.setParent(this.node.getChildByName("hint").getChildByName("hint"));
            clone.setPosition(this.options.children[i].getPosition());
        }

        let _randomNumber: number = 1;
        this.options.children.forEach(element => {
            element.active = true;
            _randomNumber = this.getRandomNumber(_randomNumber);
            element.angle = -(90 * _randomNumber);

        });
        this.options.scale = 0.8;
        this.options.opacity = 100;
        this.node.getChildByName("hint").opacity = 100;
        this.node.getChildByName("hint").scale = 0;
        cc.tween(this.options)
            .to(0.8, { scale: 1, opacity: 255 })
            .call(() => {
                cc.tween(this.node.getChildByName("hint"))
                    .to(0.5, { scale: 0.3, opacity: 255 })
                    .call(() => {
                        let duration = 0;
                        if (this.puzzleQuestionVo) {
                            duration = this.puzzleQuestionVo.duration - 0.3;
                            cc.audioEngine.playEffect(this.puzzleQuestionVo, false);
                        }
                        let handNode = this.node.getChildByName("handClick");
                        if (this.currScene <= 3) {
                            handNode.active = true;
                            handNode.getComponent(cc.Animation).play();
                            handNode.getComponent(cc.Animation).on("finished", () => {

                            })

                        }
                        this.scheduleOnce(() => {



                            this.scheduleOnce(() => {
                                this.interactable = true;
                                this.scheduleOnce(this.sheduleQuestionClip, 10);
                                this.resetInteraction();
                                if (this.currScene < 4)
                                    this.rotatePuzzleImage(this.options.getChildByName("1"));
                            }, 0.2)
                        }, duration);
                    })
                    .start();
            })
            .start();
    }

    optionClicked(_event: cc.Event) {
        this.resetInteraction();
        let handNode = this.node.getChildByName("handClick");
        handNode.active = false;
        if (!startGame.Instance.clickEvent) {
            {
                startGame.Instance.clickEvent = true;


                console.log("firstClick--" + this.currScene);
            }
        }
        if (this.interactable) {

            this.rotatePuzzleImage(_event.target);
        }
    }
    repeatQuestionClicked(_event: cc.Event) {
        if (!this.questionPlaying) {
            _event.target.getComponent(cc.Button).interactable = false;
            this.questionPlaying = true;
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(() => {
                this.questionPlaying = false;
                _event.target.getComponent(cc.Button).interactable = true;
            }, this.wordVoIteration.duration);
        }
    }
    rotatePuzzleImage(_node: cc.Node) {
        this.interactable = false;
        let child = _node;
        const angle = child.angle;
        cc.audioEngine.playEffect(this.rotateAction, false);
        cc.tween(child)
            .to(0.2, { angle: angle - 90 })
            .call(() => { this.optionsAligned() })
            .start()
    }
    optionsAligned() {
        let levelPassed = true;
        this.options.children.forEach((_child) => {
            if (_child.angle % 360 != 0) {
                levelPassed = false;
            }
        })
        if (levelPassed) {
            //if the items have been aligned 
            this.options.color = cc.Color.GREEN;
            cc.audioEngine.playEffect(this.correctAction, false);
            this.scheduleOnce(() => {
                // cc.audioEngine.playEffect(this.jockeyCorrect2, false);
            }, this.correctAction.duration - 1);
            this.node.getChildByName("hint").active = false;
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            console.log("correctAnswer--" + this.currScene);
            cc.tween(this.options).to(0.3, { x: 0, y: 0, scaleX: 1, scaleY: 1 }).start();

            this.scheduleOnce(() => {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(this.puzzleVoIteration, false);
                this.scheduleOnce(() => {
                    this.options.color = cc.Color.WHITE;
                    // this.wordAppear();

                    if (this.isSecondInteraction) {
                        //check what interaction it is and call the respective function
                        //show question panel
                        cc.audioEngine.playEffect(this.wordVoQuestion, false);
                        this.interactionType == "1" ? this.OptionsAppear() : this.wordAppear();
                    }
                    else {
                        this.CallJockey();
                    }
                }, this.puzzleVoIteration.duration);
            }, 0.5);
        } else {
            this.interactable = true;
        }
    }

    CallJockey() {
        let anim: string[] = [];
        if (startGame.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
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
        // console.log("anim length = ", anim.length);
        let currentClipNum: number = this.getRandomNumberp(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        let pos: number[] = [-1600, 1600];
        let jockeytween: number[] = [-450, 450];
        if (startGame.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[startGame.Instance.currentLevel % 2], this.currentJockey.y);
        if (startGame.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[startGame.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJockey).to(0.5, { x: pos[startGame.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (startGame.Instance.jockeyName != "stallion") {
                    if (startGame.Instance.jockeyName == "Podar") {
                        this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                this.levelFinished();
            }, this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    }

    callNegativeRection() {
        this.scheduleOnce(() => {
            let anim: string[] = [];
            if (startGame.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4"];
            }
            else if (startGame.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
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

            let currentClipNum: number = this.getRandomNumberp(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (startGame.Instance.jockeyName == "stallion") {
                this.currentJockey.scaleX = 0.65;
                this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (startGame.Instance.jockeyName == "Podar") {
                this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            let pos: number = 1600;
            let jockeytween: number = 450;
            if (startGame.Instance.jockeyName == "supercub") {
                pos = 1900;
                jockeytween = 870;
            }
            this.currentJockey.setPosition(pos, -350);
            cc.tween(this.currentJockey).to(0.5, { x: jockeytween }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJockey).to(0.5, { x: pos }, { easing: "quartInOut" }).start();
                    if (startGame.Instance.jockeyName != "stallion") {
                        if (startGame.Instance.jockeyName != "Podar") {
                            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    this.myOptions.children.forEach(elem => {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7);
    }


    OptionsAppear() {

        cc.tween(this.options).to(0.3, { x: this.options.x - 200, y: 0, scaleX: 1, scaleY: 1 }).start();

        cc.tween(this.myOptions).to(0.3, { y: 0 }).start();
        this.scheduleOnce(() => {

            this.myOptions.active = true;
        }, 0.5);


        this.wordsNode.children.forEach((_child, index) => {
            _child.scale = 0;
            this.scheduleOnce(() => {
                cc.tween(_child).to(0.8, { scale: 1 }).start()
            }, 0.5 * index);
        });

    }
    onButtonClick(_event: cc.Event) {
        let _node: cc.Node = _event.target;

        if (_node.name === this.correctAnswer) {

            this.myOptions.children.forEach(element => {
                if (element.name != _node.name) {
                    element.active = false;
                }
            });

            cc.tween(_node).to(1, { y: 0 }, { easing: "sineInOut" }).start();

            console.log("correctAnswer--" + this.currScene);
            // console.log("correctAnswer--" + this.currScene);
            // cc.audioEngine.playEffect(this.correctButton, false);
            this.options.color = cc.Color.GREEN;
            _node.color = cc.Color.GREEN;


            cc.tween(_node).to(0.1, { scaleX: 0.7, scaleY: 0.8, color: cc.Color.GREEN }).to(0.1, { scaleX: 1, scaleY: 1, color: this.colorValue }).start();

            this.myOptions.children.forEach(element => {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(() => {
                this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                this.CallJockey();
            }, this.wordVoIteration.duration);
        }

        else {
            console.log("wrongAnswer--" + this.currScene);
            cc.audioEngine.playEffect(this.wrongAnswer, false);
            this.callNegativeRection();
            this.myOptions.children.forEach(element => {
                element.getComponent(cc.Button).interactable = false;
            });

            cc.tween(_node).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).to(0.1, { angle: -10 })
                .to(0.1, { angle: 0 }).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).start();


            cc.tween(_node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();

            cc.tween(this.options).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).start();


        }

    }



    wordAppear() {
        this.selectable = false;
        cc.tween(this.options).to(1, { scale: this.options.scale - 0.2 }, { easing: "sineInOut" }).start();
        cc.tween(this.options).to(1, { x: 0, y: 100 }, { easing: "sineInOut" }).start();
        this.wordsNode.children.forEach((_child, index) => {
            _child.scale = 0;
            this.scheduleOnce(() => {
                cc.tween(_child).to(0.3, { scale: 1 }).start()
            }, 0.5 * index);
        })
        this.wordsNode.active = true;
        // cc.audioEngine.playEffect(this.wordVoQuestion, false);
        this.scheduleOnce(() => {
            let pos: cc.Vec2 = cc.v2(this.wordsNode.children[0].getPosition().x, this.wordsNode.children[0].getPosition().y - 250);
            let pos2: cc.Vec2 = cc.v2(this.wordsNode.children[1].getPosition().x, this.wordsNode.children[1].getPosition().y - 250);
            let handNode = this.node.getChildByName("handClick1");
            handNode.setPosition(pos);
            handNode.active = true;
            handNode.getComponent(cc.Animation).play();
            cc.tween(handNode).to(1, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" }).start();
            this.scheduleOnce(() => {
                handNode.active = false;
                // this.selectable= true;
                // this.scheduleOnce(() => {
                //     this.wordSwap(this.node.getChildByName("words").children[0], this.node.getChildByName("words").children[1], -250, 0);
                // }, 0);
                this.EndDrag();
            }, 1);
        }, this.wordVoQuestion.duration - 1);
    }

    wordSwap(_node1: cc.Node, _node2: cc.Node, x1: number, x2: number) {
        this.EndDrag();
        this.currWordSeq = this.currWordSeq.replace(_node1.name, "x");
        this.currWordSeq = this.currWordSeq.replace(_node2.name, _node1.name);
        this.currWordSeq = this.currWordSeq.replace("x", _node2.name);
        cc.audioEngine.playEffect(this.swipeAction, false);

        let word = "";
        for (let i = 0; i < this.currWordSeq.length; i++) {
            word += this.wordsNode.getChildByName(this.currWordSeq[i]).children[0].getComponent(cc.Label).string;
        }
        // console.log("word--" + word);

        cc.tween(_node1)
            .to(0.1, { x: x2 })
            .start()
        cc.tween(_node2)
            .to(0.1, { x: x1 })
            .call(() => {
                // console.log(this.currWordSeq, this.correctWordSeq[0], this.currScene);
                if (word == this.correctWordSeq[0]) {
                    // console.log("words aligned");
                    this.selectable = false;
                    this.scheduleOnce(() => {
                        // this.levelFinished();

                        cc.audioEngine.playEffect(this.wordVoIteration, false);
                        this.scheduleOnce(() => {
                            this.CallJockey();
                        }, this.wordVoIteration.duration);
                    }, this.swipeAction.duration);
                }
            })
            .start();

    }
    EndDrag() {
        this.wordCurrentSeleced = null;
        this.wordCurrentSelecedPos = null;
        this.selectable = true;
    }
    wordTouchStart(_event: cc.Event) {
        // console.log(this.selectable);
        if (this.selectable) {
            // console.log("start event");
            this.wordCurrentSeleced = _event.target;
            this.wordCurrentSelecedPos = this.wordCurrentSeleced.getPosition(cc.v2());
            this.selectable = false;
        }
    }
    wordTouchMove(_event) {
        //check if the same object is moving which started first
        if (this.wordCurrentSeleced && _event.target.name == this.wordCurrentSeleced.name) {
            this.wordCurrentSeleced.x += _event.touch.getDelta().x;
            if (this.wordCurrentSeleced.x > 800 || this.wordCurrentSeleced.x < -800) {
                // console.log("reset position");
                cc.tween(this.wordCurrentSeleced)
                    .to(0.1, { x: this.wordCurrentSelecedPos.x })
                    .call(() => {
                        this.EndDrag();
                    })
                    .start();
            }
            let collisionWith: cc.Node = null;
            this.wordsNode.children.forEach((_child) => {
                if (_child.name == _event.target.name) { return; }
                if (_child.getBoundingBox().contains(_event.target.getPosition())) { collisionWith = _child; }
            });
            if (collisionWith) {
                // console.log("collision with ", collisionWith.name);
                this.wordSwap(collisionWith, this.wordCurrentSeleced, collisionWith.x, this.wordCurrentSelecedPos.x);
            }
        }
    }
    wordTouchEnd(_event) {
        if (_event.target.name == this.wordCurrentSeleced?.name) {
            // console.log("End event");
            cc.tween(this.wordCurrentSeleced)
                .to(0.2, { x: this.wordCurrentSelecedPos.x })
                .start()
            this.selectable = true;
        }
    }
    private levelFinished() {
        cc.audioEngine.playEffect(this.correctAction, false);
        this.node.getChildByName("confetti").active = true;
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();


        console.log('levelComplete--' + this.currScene);
        startGame.Instance.currentLevel++;
        this.scheduleOnce(() => {
            ProgressBar.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(() => {
                ProgressBar.Instance.ProgressFill(this.currScene);
                this.scheduleOnce(() => {
                    if (this.currScene < startGame.Instance.totalLevels) {
                        cc.director.loadScene("1");
                    } else {
                        cc.director.loadScene("GameEnd");
                    }
                }, 0.8);
            }, 1.2);

        }, 1.5);



    }

    private getRandomNumber(_number: number) {
        _number = Math.random();
        _number = cc.misc.lerp(1, 3, _number);
        _number = Math.round(_number);
        return _number;
    }
    private getRandomNumberp(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
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

    GenerateOptions(_node: cc.Node = this.myOptions, _template: string = "template1") {
        for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName(_template));
            option.name = (i + 1).toString();
            option.setParent(_node);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 255;
            option.active = true;
        }
        this.node.getChildByName(_template).destroy();
        if (_template == "template1") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
            if (startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions == 2) {
                this.myOptions.children[0].setPosition(0, 120);
                this.myOptions.children[1].setPosition(0, -120);
            }
        }
        else {
            this.scheduleOnce(() => {
                this.OptionsLayout();
                this.arrangeChildren(this.wordsNode, 30);
            }, 1);
        }
    }

    OptionsLayout() {
        let optionsLayout = this.wordsNode;
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

            // Calculate the scale factor for the option
            let optionScaleFactor = scaleFactor;

            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            // Calculate position based on anchor and scaled size
            let posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);

            accumulatedWidth += option.width + paddingBetweenOptions;

            // Scale and position children nodes proportionally
            for (let subChild of option.children) {
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }

        optionsLayout.height = maxHeight * scaleFactor;
    }
    arrangeChildren(centerNode: cc.Node, spacing: number) {
        let children = centerNode.children;
        let totalWidth = 0;

        // Calculate total width required
        for (let child of children) {
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children

        // Starting X position
        let startX = -totalWidth / 2;

        // Arrange children
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    }

    OptionsLayoutVertical() {
        let optionsLayout = this.myOptions;
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
        let optionsLayout = this.myOptions;
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

}

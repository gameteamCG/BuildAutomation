
import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    private extraImg: cc.SpriteFrame = null;

    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;


    @property(cc.AudioClip)
    private SFXs: cc.AudioClip[] = [];

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

    spriteArray: cc.SpriteFrame[] = [];
    textArray: string[] = [];
    positionArray: cc.Vec2[] = [];
    cardTapped: boolean = false;
    card1: cc.Node = null;
    card2: cc.Node = null;
    correctAnswerCount: number = 0;
    TotalOptions: number = 0;

    // LIFE-CYCLE CALLBACKS:

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

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].backCardImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].backCardImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length * 2; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].frontCardImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].frontCardImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length * 2; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("front").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length; i++) {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterationAudios[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.correctAudio[i] = audioClip;
                });
            }

            // cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });

            let counter: number = 1;

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        //this.spriteArray.push(spriteFrame);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    //this.textArray.push(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }
                this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("label").name = counter.toString();
                counter++;
            }
            let counter1: number = 1;
            let AnswerStartIndex: number = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length
            for (let i = AnswerStartIndex; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers.length + AnswerStartIndex; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isAnswerText) {
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i - AnswerStartIndex], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        //this.spriteArray.push(spriteFrame);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i - AnswerStartIndex];
                    //this.textArray.push(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i]);
                }
                this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("label").name = counter1.toString();
                counter1++;

            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].backCardImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].backCardImageName, (spriteFrame) => {
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length * 2; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].frontCardImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].frontCardImageName, (spriteFrame) => {
                    this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length * 2; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("front").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length; i++) {

                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterationAudios[i], (AudioClip) => {
                    this.correctAudio[i] = AudioClip;
                });
            }

            // this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (spriteFrame) => {
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
            let counter: number = 1;
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length; i++) {
                console.log("Option loop");
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
                        //this.spriteArray.push(spriteFrame);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                    //this.textArray.push(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                }
                this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("label").name = counter.toString();
                counter++;

            }
            let counter1: number = 1;
            let AnswerStartIndex: number = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length
            for (let i = AnswerStartIndex; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers.length + AnswerStartIndex; i++) {
                console.log("Answer loop");
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isAnswerText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i - AnswerStartIndex], (spriteFrame) => {
                        //this.spriteArray.push(spriteFrame);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i - AnswerStartIndex];
                    //this.textArray.push(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].answers[i]);
                }
                console.log("Options : ", this.node.getChildByName("Option"));
                this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("label").name = counter1.toString();
                counter1++;
            }
        }
        // startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        this.currentJcokey.active = true;
    }

    start() {
        console.log("ImageArray : ", this.spriteArray);
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        this.TotalOptions = this.node.getChildByName("Option").children.length;
        // this.setAnswerArray();
        // this.OptionsLayout();
        //this.callThirdObjectIn();

        this.canTouch = false;


        this.callOptionIn();

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

    }
    arr: number[] = [];
    shufflePositions() {

        for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            this.positionArray.push(this.node.getChildByName("Option").children[i].getPosition());
            this.arr.push(i);
        }

        this.shuffle(this.arr);
        for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            this.node.getChildByName("Option").children[i].setPosition(this.positionArray[this.arr[i]]);
        }
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    // declare the function 

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Usage 



    GenerateOptions() {
        let parentNode: cc.Node = this.node.getChildByName("Option");
        let rows = 2;
        let columns: number = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options.length;
        let offsetX: number = 50;
        let offsetY: number = 50;
        let objWidth: number = 195;
        let objHeight: number = 295;
        let totalWidth: number = columns * (objHeight + offsetX);
        let totalHeight: number = rows * (objWidth + offsetX);
        let scaleFactor: number = 1;

        let spacing: number = 0;
        if (columns == 3) {
            spacing = 50;
        }
        else if (columns == 4) {
            spacing = 150;
        }
        else if (columns == 5) {
            spacing = 200;
        }


        if (totalHeight > parentNode.height || totalWidth > parentNode.width) {
            if (totalWidth > parentNode.width) {
                scaleFactor = parentNode.width / totalWidth;
                console.log("2 : ", totalWidth, parentNode.width, scaleFactor);
            }
            if (totalHeight > parentNode.height) {
                scaleFactor = parentNode.height / totalHeight;
                console.log("1 : ", totalHeight, parentNode.height, scaleFactor);
            }
            //console.log("scaleFactor : ", scaleFactor);
            offsetX = offsetX * scaleFactor;
            offsetY = offsetY * scaleFactor;
            objWidth = objWidth * scaleFactor;
            objHeight = objHeight * scaleFactor;
        }
        let startX: number = -(columns * ((objWidth) + offsetX) / 4) - spacing;
        let startY: number = (rows * ((objHeight) + offsetY) / 4);
        let counter: number = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let option = cc.instantiate(this.node.getChildByName("template"));
                option.setParent(parentNode);
                option.setPosition(cc.v2(startX, startY));
                option.scale = scaleFactor;
                option.opacity = 255;
                option.active = true;
                counter++;
                console.log("counter : ", counter);
                option.name = counter.toString();
                startX += (objWidth) + offsetX;
                option.opacity = 0;
            }
            startY -= (objHeight) + offsetY;
            startX = -(columns * ((objWidth) + offsetX) / 4) - spacing;
        }
        this.node.getChildByName("template").destroy();
    }

    callThirdObjectIn() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        //this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

        this.callOptionIn();
    }

    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    }

    callOptionIn() {
        this.shufflePositions();
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            // this.node.getChildByName("Option").setPosition(-100, 0);
        }
        for (let i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            this.node.getChildByName("Option").children[i - 1].opacity = 255;
        }
        this.moveCards();
        this.scheduleOnce(() => {
            // this.moveCards();
            this.PlayQuestionAudio();
        }, 0.5);
    }

    moveCards() {
        for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            cc.tween(this.node.getChildByName("Option").children[i])
                .to(0.3, { x: 0, y: 0 })
                .to(0.2, { angle: -15 })
                .to(0.2, { angle: 15 })
                .to(0.2, { angle: 0 })
                .to(0.3, { x: this.positionArray[this.arr[i]].x, y: this.positionArray[this.arr[i]].y }).start();
        }
        this.scheduleOnce(() => {
            // if (globalVariables.Instance.currentLevel == 1) {
            //     let hand = this.node.getChildByName("hand");
            //     console.log("answer array num = ", this.answerArray[0]);
            //     hand.setParent(this.node.getChildByName("Option").getChildByName("1"));
            //     hand.setPosition(0, -30);
            //     hand.setParentWithSamePos(this.node);
            //     hand.getComponent(cc.Animation).play();
            // }
        }, 1.5);
    }

    PlayQuestionAudio() {
        this.canTouch = true;
        this.node.getChildByName("Option").children.forEach(element => {
            element.getComponent(cc.Button).interactable = false;
        });
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.node.getChildByName("Option").children.forEach(element => {
                element.getComponent(cc.Button).interactable = true;
            });
            if (globalVariables.Instance.currentLevel == 1) {
                let hand = this.node.getChildByName("hand");
                console.log("answer array num = ", this.answerArray[0]);
                hand.setParent(this.node.getChildByName("Option").getChildByName("1"));
                hand.setPosition(0, -30);
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
                    this.node.getChildByName("Option").children.forEach(element => {
                        element.getComponent(cc.Button).interactable = true;
                    });
                    if (globalVariables.Instance.currentLevel == 1) {
                        let hand = this.node.getChildByName("hand");
                        console.log("answer array num = ", this.answerArray[0]);
                        hand.setParent(this.node.getChildByName("Option").getChildByName("1"));
                        hand.setPosition(0, -30);
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
                            this.node.getChildByName("Option").children.forEach(element => {
                                element.getComponent(cc.Button).interactable = true;
                            });
                            if (globalVariables.Instance.currentLevel == 1) {
                                let hand = this.node.getChildByName("hand");
                                console.log("answer array num = ", this.answerArray[0]);
                                hand.setParent(this.node.getChildByName("Option").getChildByName("1"));
                                hand.setPosition(0, -30);
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
        // this.node.getChildByName("Option").children.forEach(elem => {
        //     elem.getComponent(cc.Button).interactable = false;
        // });
        if (!this.canTouch) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        cc.audioEngine.playEffect(this.SFXs[0], false);
        let _node = _event.target;
        if (this.cardTapped) {
            this.card2 = _node;
            _node.getChildByName("front").active = false;
            this.cardTapped = false;
            if (this.card1.children[3].name == this.card2.children[3].name && this.card1 != this.card2) {
                cc.audioEngine.playEffect(this.SFXs[2], false);
                this.canTouch = false;
                this.node.getChildByName("Option").children.forEach(elem => {
                    elem.getComponent(cc.Button).interactable = false;
                });
                this.correctAnswerCount += 1;
                let card1Name: string = this.card1.name;
                let card2Name: string = this.card2.name;
                this.scheduleOnce(() => {
                    this.card1.setParent(this.node.getChildByName("Panel"));
                    this.card2.setParent(this.node.getChildByName("Panel"));
                    this.node.getChildByName("Panel").getChildByName(card1Name).setPosition(-150, 0);
                    this.node.getChildByName("Panel").getChildByName(card2Name).setPosition(150, 0);
                    this.node.getChildByName("Panel").getChildByName(card1Name).scale = 0;
                    this.node.getChildByName("Panel").getChildByName(card2Name).scale = 0;
                    cc.tween(this.node.getChildByName("Panel").getChildByName(card1Name)).to(0.5, { scale: 1.3 }).start();
                    cc.tween(this.node.getChildByName("Panel").getChildByName(card2Name)).to(0.5, { scale: 1.3 }).start();
                    this.scheduleOnce(() => {
                        let audioIndex: number = 0;
                        if (parseInt(card1Name) < parseInt(card2Name)) {
                            audioIndex = parseInt(card1Name) - 1;
                        }
                        else {
                            audioIndex = parseInt(card2Name) - 1;
                        }
                        console.log("AudioIndex : ", audioIndex);
                        cc.audioEngine.playEffect(this.correctAudio[audioIndex], false);
                        this.scheduleOnce(() => {
                            this.node.getChildByName("Panel").getChildByName(card1Name).destroy();
                            this.node.getChildByName("Panel").getChildByName(card2Name).destroy();
                            this.canTouch = true;
                            this.node.getChildByName("Option").children.forEach(elem => {
                                elem.getComponent(cc.Button).interactable = true;
                            });
                            if (this.correctAnswerCount == this.TotalOptions / 2) {
                                this.canTouch = false;
                                this.node.getChildByName("Option").children.forEach(elem => {
                                    elem.getComponent(cc.Button).interactable = false;
                                });
                                cc.audioEngine.stopAllEffects();
                                console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
                                this.callPositiveRection(_node);
                            }
                        }, this.correctAudio[audioIndex].duration + 0.5);
                    }, 0.5);
                }, 0.5);

            }
            else {
                let delay = 0.5;
                if (this.card1 == this.card2) {
                    delay = 0;
                }
                this.canTouch = false;
                this.node.getChildByName("Option").children.forEach(elem => {
                    elem.getComponent(cc.Button).interactable = false;
                });
                this.scheduleOnce(() => {
                    _node.parent.children.forEach((Element) => {
                        Element.getChildByName("front").active = true;
                    })
                    this.card1 = null;
                    this.card2 = null;
                    cc.audioEngine.playEffect(this.SFXs[1], false);
                    this.canTouch = true;
                    this.node.getChildByName("Option").children.forEach(elem => {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, delay);
            }
        }
        else {
            _node.getChildByName("front").active = false;
            this.cardTapped = true;
            this.card1 = _node;
        }
        // if (_node.name == this.answerArray[0]) {

        // }
        // else {
        //     this.wrongAnswerCount++;
        //     console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
        //     this.callNegativeRection(_node, _event);
        // }
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
        // cc.tween(_node).to(0.5, { scale: 1.5, x: 0, y: 0 }, { easing: "sineInOut" }).start();
        cc.tween(_node).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(() => {
            //this.node.getChildByName("confetti").setPosition(0, 0);
            //this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            // cc.audioEngine.playEffect(this.positiveSound[0], false);
            //this.scheduleOnce(() => {
            ProgressBar.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(() => {
                ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                this.scheduleOnce(() => {
                    this.callJockey();
                }, 1);
            }, 1.5);
            //}, 0.7);
        }, 0.5);
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
        // console.log("anim length = ", anim.length);
        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (globalVariables.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.jockeyName != "Podar") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
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
                        if (startGame.Instance.jockeyName != "Podar") {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                //bird flying out sound
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
                            //console.log("characterDisappear--Podar_Jumbo");
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
                    //console.log("characterDisappear--Podar_Jumbo");
                    this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }

        }


    }


    callNegativeRection(_node: cc.Node, _event) {
        _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
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

            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (startGame.Instance.jockeyName == "stallion") {
                this.currentJcokey.scaleX = 0.65;
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
                if (startGame.Instance.jockeyName != "Podar") {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                }
                else {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                }
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
                            if (startGame.Instance.jockeyName != "Podar") {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            }
                            else {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                            }
                        }
                        //console.log("characterDisappear--Podar_Jumbo");
                        this.node.getChildByName("Option").children.forEach(elem => {
                            elem.getComponent(cc.Button).interactable = true;
                        });
                    }, this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.node.getChildByName("Option").children.forEach(elem => {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, this.negativeAudio[currentClipNum].duration);
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2") {
                    //play bulb break if needed
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
                            this.node.getChildByName("Option").children.forEach(elem => {
                                elem.getComponent(cc.Button).interactable = true;
                            });
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
                        this.node.getChildByName("Option").children.forEach(elem => {
                            elem.getComponent(cc.Button).interactable = true;
                        });
                    }, this.negativeAudio[currentClipNum].duration);
                }

            }
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



}
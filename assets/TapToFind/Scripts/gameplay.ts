// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { IData } from "./IData";
import globalVariables from "./globalVariables";
import startGame from "./StartGame";
import { googleAnalytics } from "./ga";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.JsonAsset)
    //private npcJson : cc.JsonAsset = null;

    // private data: IData[] = [new IData];
    private answerObject: string[] = [];
    private question: string = "";
    private questionSound: string;
    private textArray: string[] = [];
    private maxOptions: number = 7;
    private SubImage: number = 0;
    private wrongAnswerLimit: number = 7;
    private answers: number[] = [];
    private positionType: string = "custom";
    private feedbacktype: string[] = [];
    private scaleArray: number[] = [];


    private optionImages: string[] = [];
    private correctAudios: string[] = [];
    private positiveAudios: cc.AudioClip[] = [];
    private negativeSound: cc.AudioClip;
    private positiveSound: cc.AudioClip;

    private timer: number = 0;
    private isClicked: boolean = false;
    private totalAnswers: number = 0;
    private correctAnswerCount: number = 0;
    private wrongAnswerCount: number = 0;
    private isDone: boolean[] = [];

    private createdOptions: cc.Node[] = [];
    private createdAnswers: cc.Node[] = [];

    private offsetX: number = 0;
    private totalLevels: number = 6;

    private viewPortWidth: number = 720;
    private viewPortHeight: number = 1280;

    private canTouch: boolean = true;
    private isChar1: boolean = true;
    private isFirstClick: boolean = false;
    private isWrong: boolean = false;

    private defaultTime: number = 15;

    private value: number;

    questionAudioFile: cc.AudioClip = null;
    correctAudiosFile: cc.AudioClip[] = [];
    answerObjectFile: cc.SpriteFrame = null;
    optionImagesFile: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    private commonOptionImg: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private whiteTick: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private yellowTick: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private rightMark: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private wrongMark: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private ring: cc.SpriteFrame = null;
    @property(cc.AudioClip)
    private positiveSfx: cc.AudioClip = null;
    @property(cc.AudioClip)
    private negativeSfx: cc.AudioClip = null;

    //private negativeAudios:cc.AudioClip[]=[];
    //private optionAnimations:string[]=[];
    //private optionAudios:string[]=[];


    //private ga = require("ga");









    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;

    }

    // LoadQuestion() {
    //     //console.log(gaData);





    //     cc.resources.load("storyBoard", Object, (_error, _jsonFile) => {
    //         if (_error) {
    //             console.error(_error.message || _error);
    //             return;
    //         }
    //         let _jsonData: object = _jsonFile["json"];
    //         this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
    //     });





    // }

    private PlayQuestion(_data: IData): number {

        return 1;
    }



    onLoad() {
    }

    start() {



        //ga.name;


        // ga('event', "Tap", {
        //     'event_category': "Link",
        //     'event_label': "Create Game",
        //     'value': <1>
        // });


        this.value = this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").getComponent(cc.Sprite).fillRange;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").color = new cc.Color(222, 83, 83);
        this.setRing();
        this.node.getChildByName("progressBarRound").y = globalVariables.Instance.canvasTopY - 60;
        this.canTouch = true;
        console.log("levelStarted--" + globalVariables.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        //console.log("levelStarted--" + cc.director.getScene().name);
        if (globalVariables.Instance.currentLevel == this.totalLevels) {
            //console.log("Congratulations.........!!!!!!!!!!!!!!!!");
            cc.director.preloadScene("endScreen");
        }
        else {
            //console.log("loaddddddddd@@@@@@@@@@@",parseInt(cc.director.getScene().name));
            //cc.director.preloadScene((parseInt(cc.director.getScene().name)+1).toString());

        }



        this.fetchData();




        this.scheduleOnce(() => {
            //this.node.getChildByName("template").destroy();
            if (this.answerObject[0] != "") {
                this.createAnswerObject();
            }
            this.node.getChildByName("Question").x = this.viewPortWidth * 2;
            this.node.getChildByName("Question").getComponent(cc.Label).string = this.question;
            cc.tween(this.node.getChildByName("Question"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            this.createOptionObject(this.maxOptions);
        }, 0.3);

        this.scheduleOnce(() => {
            for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
                this.isDone[i] = false;
            }

            this.node.getChildByName("Options").children.forEach(element => {
                element.on('touchstart', function (event) {
                    if (this.canTouch) {
                        this.TouchStart(element, event);
                    }
                }, this);
            });

            this.scheduleOnce(function () {
                // Here this refers to component
                this.isClicked = true;
                //console.log("Timer == ",this.timer);
            }, 1);

        }, 0.4);






        this.scheduleOnce(() => {
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.questionAudioFile, false);
            }, 0.6);
        }, 0.7);





    }
    fetchData() {
        this.correctAnswerCount = 0;
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions;/////

        this.maxOptions = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions;
        this.SubImage = 0;
        if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName != "") {
            this.SubImage = 1;
        }
        this.wrongAnswerLimit = 2;
        this.answers = [];
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answers.push((parseInt(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i]) - 1));
        }
        // this.answers = this.data[globalVariables.Instance.currentLevel - 1].answers;
        this.positionType = "custom";
        this.feedbacktype = ["confetti"];
        this.totalAnswers = this.answers.length;
        this.question = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;
        this.questionSound = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName;
        this.textArray = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].optionTexts;
        this.answerObject = [startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName];
        this.optionImages = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].optionImages;
        this.correctAudios = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios;
        //console.log("positions :"+this.data[0].positions);
        this.LoadDataFromResources();
    }

    LoadDataFromResources() {
        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionAudioFile = audioClip;
            });

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.answerObjectFile = spriteFrame;
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionImage) {
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].optionImages[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.optionImagesFile[i] = spriteFrame;
                    });
                }

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios.length; i++) {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.correctAudiosFile[i] = audioClip;
                });
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionAudioFile = AudioClip;
            });


            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (spriteFrame) => {
                    this.answerObjectFile = spriteFrame;
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionImage) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].optionImages[i], (spriteFrame) => {
                        this.optionImagesFile[i] = spriteFrame;
                    });
                }

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios.length; i++) {
                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[i], (AudioClip) => {
                    this.correctAudiosFile[i] = AudioClip;
                });
            }

        }
    }






    CheckForIsDone(_node: cc.Node) {
        for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name == _node.name) {
                this.isDone[i] = true;
            }
        }
    }

    TouchStart(_node: cc.Node, _event: any) {
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        //console.log("touch start : ");
        let isStop: boolean = false;

        for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name == this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
                isStop = true;
                break;
            }
        }

        if (!isStop) {
            let isCorrect: boolean = false;
            let audioIDNum = 0;
            for (let i = 0; i < this.answers.length; i++) {
                if ((parseInt(_node.name) - 1) == this.answers[i]) {
                    audioIDNum = i;
                    isCorrect = true;
                    break;
                }
            }

            if (isCorrect) {
                // if(globalVariables.Instance.currentLevel==1){ // game specific condition
                //     this.node.getChildByName("extraNode").getChildByName("hand").active=false;
                //     if(_node.name=="1"){
                //         this.scaleTween.stop();
                //     }
                //     else if(_node.name=="2"){
                //         this.scaleTween1.stop();
                //     }
                // }


                console.log("correctAnswer--" + globalVariables.Instance.currentLevel);

                cc.audioEngine.playEffect(this.correctAudiosFile[audioIDNum], false);
                this.wrongAnswerCount = 0;
                //console.log("correct is clicked = ",_node.name);


                // cc.tween(_node)
                //     .to(0.2, { x: _node.x }, { easing: 'sineInOut' })
                //     .to(0.2, { x: 360 }, { easing: 'sineInOut' }).start();

                // cc.tween(_node)
                //     .to(0.2, { y: _node.y }, { easing: 'sineInOut' })
                //     .to(0.2, { y: 640 }, { easing: 'sineInOut' }).start();

                if (this.feedbacktype.length == 1) {
                    //this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    //this.node.getComponent(cc.AudioSource).play();
                    cc.audioEngine.playEffect(this.positiveSfx, false);
                    //this.scheduleOnce(() => {
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    //}, 0.5);

                }
                else if (this.feedbacktype.length == 2) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[1]);
                    }, 0.8);
                }
                else if (this.feedbacktype.length == 3) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[1]);
                    }, 0.5);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[2]);
                    }, 0.7);
                }



                this.CheckForIsDone(_node);
                this.correctAnswerCount += 1;
            }
            else {
                //console.log("wrong is clicked = ",this.isDone);
                console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
                this.callNegativeFeedback(_node);
            }

            //is levelend
            let levelend: boolean = false

            // for(let i=0;i<this.answers.length;i++){
            //     if(!this.node.getChildByName("Options").children[this.answers[i]].activeInHierarchy){
            //         levelend=true;
            //     }
            //     else{
            //         levelend=false;
            //         break;
            //     }
            // }

            //for level one specific case


            if (this.correctAnswerCount == this.totalAnswers) {
                globalVariables.Instance.rightAnswerCount += 1;
                levelend = true;
                this.canTouch = false;
                //console.log("Level Completed...!!!!!!!!!");
                if (globalVariables.Instance.currentLevel == this.totalLevels) {
                    this.setProgressBar();
                    // gtag('event', "LevelCompleted_" + globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    console.log("levelComplete--" + globalVariables.Instance.currentLevel);
                    globalVariables.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                    // this.scheduleOnce(() => {
                    //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                    //     this.node.getComponent(cc.AudioSource).play();
                    // }, 3);
                    this.scheduleOnce(() => {
                        this.destroyAnswers();
                        this.destroyOptions();
                        cc.director.loadScene("endScreen");
                    }, 1);
                    //this.callPositiveReaction();

                }
                else {
                    console.log("levelComplete--" + globalVariables.Instance.currentLevel);
                    // gtag('event', "LevelCompleted_" + globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    this.setProgressBar();
                    globalVariables.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    globalVariables.Instance.currentLevel += 1;
                    this.canTouch = false;
                    this.setScreen();
                    //console.log("currentLevel : ",globalVariables.Instance.currentLevel);
                    // this.scheduleOnce(()=>{
                    //     this.callPositiveReaction();
                    // },1);
                }
            }


        }







    }

    setScreen() {
        // cc.director.loadScene("1");
        // return;
        console.log("levelStarted--" + globalVariables.Instance.currentLevel);
        // gtag('event', "LevelStarted_" + globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        this.scheduleOnce(() => {

            //this.node.getChildByName("Question").getComponent(cc.Label).string = "";
            this.destroyAnswers();
            this.destroyOptions();

            this.scheduleOnce(() => {
                this.canTouch = true;
                this.isWrong = false;
                this.fetchData();
                this.setRing();

                this.scheduleOnce(() => {
                    //this.node.getChildByName("template").destroy();
                    if (this.answerObject[0] != "") {
                        this.createAnswerObject();
                    }
                    this.node.getChildByName("Question").x = this.viewPortWidth * 2;
                    this.node.getChildByName("Question").getComponent(cc.Label).string = this.question;
                    this.setMultipleAnswerEnvironment();
                    cc.tween(this.node.getChildByName("Question"))
                        .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
                    this.createOptionObject(this.maxOptions);
                }, 0.3);

                this.scheduleOnce(() => {
                    for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
                        this.isDone[i] = false;
                    }

                    this.node.getChildByName("Options").children.forEach(element => {
                        element.on('touchstart', function (event) {
                            if (this.canTouch) {
                                this.TouchStart(element, event);
                            }
                        }, this);
                    });

                    this.scheduleOnce(function () {
                        // Here this refers to component
                        this.isClicked = true;
                        //console.log("Timer == ",this.timer);
                    }, 1);

                }, 0.4);

                this.scheduleOnce(() => {
                    this.scheduleOnce(() => {
                        cc.audioEngine.playEffect(this.questionAudioFile, false);
                    }, 0.6);
                }, 0.7);

            }, 0.7);

        }, 2);



    }


    createAnswerObject() {
        //console.log("created Answers before : "+this.createdAnswers)
        for (let i = 0; i < this.answerObject.length; i++) {
            this.createdAnswers[i] = new cc.Node;
            //let answerNode = new cc.Node;
            this.createdAnswers[i].parent = this.node;
            this.createdAnswers[i].name = "Ans" + i;
            this.createdAnswers[i].x = this.viewPortWidth * 2;

            this.createdAnswers[i].y = 150;
            this.createdAnswers[i].addComponent(cc.Sprite);
            // this.updateSprites(this.answerObject[i], this.createdAnswers[i]);
            this.createdAnswers[i].getComponent(cc.Sprite).spriteFrame = this.answerObjectFile;
            this.createdAnswers[i].width = 300;
            this.createdAnswers[i].height = 300;

            cc.tween(this.createdAnswers[i])
                .to(0.5, { x: 1 }, { easing: 'sineInOut' }).start();
            cc.tween(this.createdAnswers[i])
                .to(0.5, { opacity: 255 }, { easing: 'sineInOut' }).start();
        }

    }

    createOptionObject(numOfOptions) {
        let posX: number[] = [215, 495, 215, 495];
        let posY: number[] = [750, 750, 470, 470];
        switch (this.positionType) {
            case "custom": {
                for (let i = 0; i < numOfOptions; i++) {
                    //console.log("created options :::::", this.createdOptions);
                    this.createdOptions[i] = cc.instantiate(this.node.getChildByName("template"));
                    this.createdOptions[i].name = (i + 1).toString();
                    //console.log("this.createdOptions[i].name : ",this.createdOptions[i].name);
                    this.createdOptions[i].opacity = 0;
                    //(i+1).toString();
                    if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                        this.createdOptions[i].children[0].getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].optionTexts[i]
                    }
                    this.node.getChildByName("Options").insertChild(this.createdOptions[i], i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale = 0.5;
                    this.createdOptions[i].x = this.viewPortWidth * 2;
                    if (this.SubImage == 1) {
                        posY[i] -= 280;
                    }
                    this.createdOptions[i].y = posY[i];
                    this.createdOptions[i].active = true;
                    if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionImage) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i]);
                        this.createdOptions[i].getComponent(cc.Sprite).spriteFrame = this.commonOptionImg;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = 0;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 95;
                    }
                    else if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionImage && startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 65;
                        // this.createdOptions[i].getChildByName("subSprite").width = 350;
                        // this.createdOptions[i].getChildByName("subSprite").height = 350;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 75;
                    }
                    else if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionImage && !startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 0;
                        // this.createdOptions[i].getChildByName("subSprite").width = 500;
                        // this.createdOptions[i].getChildByName("subSprite").height = 500;
                        // this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = null;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 75;
                    }


                    cc.tween(this.createdOptions[i])
                        .to(0.5, { x: posX[i] }, { easing: 'sineInOut' }).start();
                    cc.tween(this.createdOptions[i])
                        .to(0.5, { opacity: 255 }, { easing: 'sineInOut' }).start();
                    if (this.answers.length <= 1) {
                        this.createdOptions[i].getChildByName("tick").active = false;
                    }
                    else {
                        this.createdOptions[i].getChildByName("tick").active = true;
                    }

                    //this.UpdateAnimations(this.optionImages[i], this.createdOptions[i]);
                    //this.createdOptions[i].getComponent(cc.Sprite).spriteFrame=this.optionImages[i];

                    //console.log("Positions : ",this.createdOptions[i].x,this.createdOptions[i].y);
                    //console.log("created options : *********",this.createdOptions[i].x,this.createdOptions[i].y);
                }
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    }

    destroyOptions() {
        for (let i = 0; i < this.maxOptions; i++) {
            cc.tween(this.createdOptions[i])
                .to(0.5, { x: -this.viewPortWidth }, { easing: 'sineInOut' }).start();
            cc.tween(this.createdOptions[i])
                .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
        }

        this.scheduleOnce(() => {
            for (let i = 0; i < this.maxOptions; i++) {
                this.createdOptions[i].destroy();
            }
        }, 0.5);
    }

    destroyAnswers() {
        cc.tween(this.node.getChildByName("Question"))
            .to(0.5, { x: -this.viewPortWidth }, { easing: 'sineInOut' }).start();
        if (this.createdAnswers.length > 0) {
            for (let i = 0; i < this.answerObject.length; i++) {
                //this.createdAnswers[i].destroy();
                cc.tween(this.createdAnswers[i])
                    .to(0.5, { x: -this.viewPortWidth + 100 }, { easing: 'sineInOut' }).start();
                cc.tween(this.createdAnswers[i])
                    .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
            this.scheduleOnce(() => {
                for (let i = 0; i < this.answerObject.length; i++) {
                    this.createdAnswers[i].destroy();
                }
            }, 0.5);
        }

    }

    setMultipleAnswerEnvironment() {
        this.node.getChildByName("Question").getChildByName("subQuestion").getComponent(cc.Label).string = "";
        if (this.answers.length <= 1) {
            return;
        }
        else {
            let subquestionString = "Select upto " + this.answers.length + " Options";
            this.node.getChildByName("Question").getChildByName("subQuestion").getComponent(cc.Label).string = subquestionString;
        }
    }

    callNegativeFeedback(node1: cc.Node) {
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        //let tween1 =  cc.tween(node1)
        node1.color = new cc.Color(232, 30, 43);
        cc.tween(node1)
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' }).start();

        this.scheduleOnce(() => {
            this.canTouch = true;
        }, 0.8);

        //call negative audio 

        // this.node.getComponent(cc.AudioSource).clip = this.negativeSound;
        // this.node.getComponent(cc.AudioSource).play();
        cc.audioEngine.playEffect(this.negativeSfx, false);



        this.scheduleOnce(() => {
            //tween1.stop();
            if (this.wrongAnswerCount >= this.wrongAnswerLimit) {
                this.wrongAnswerCount = 0;
                this.canTouch = false;
                //this.callNegativeReaction();
                this.hilightLeftAnswers();
                if (globalVariables.Instance.currentLevel == this.totalLevels) {
                    globalVariables.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    this.destroyAnswers();
                    this.destroyOptions();
                    cc.director.loadScene("endScreen");
                }
                else {
                    this.isWrong = true;
                    globalVariables.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    this.setProgressBar();
                    globalVariables.Instance.currentLevel += 1;
                    this.setScreen();
                }
            }
        }, 0.8);

    }

    callPositiveFeedback(node1: cc.Node, feedbackName) {
        switch (feedbackName) {
            case "confetti": {
                //this.node.getChildByName("Options").getChildByName("particle").setPosition(node1.x,node1.y);
                node1.color = new cc.Color(71, 255, 0);
                this.node.getChildByName("Options").getChildByName("Animal").scale = 1;
                this.node.getChildByName("Options").getChildByName("Animal").setPosition(node1.x, node1.y);
                let randomNum = this.getRandomNumber(0, 1);
                console.log("randomNum", randomNum);
                if (randomNum == 1) {
                    this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play("confetti");
                }
                else {
                    this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play("confetti2");
                }
                this.scheduleOnce(() => {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    this.node.getChildByName("Options").getChildByName("Animal").setPosition(-500, -500);
                }, 1);

                //extra code 
                if (node1.getChildByName("tick").active) {
                    // this.updateSprites("/whiteTick", node1.getChildByName("tick"));
                    node1.getChildByName("tick").getComponent(cc.Sprite).spriteFrame = this.whiteTick;
                }

                cc.tween(this.node.getChildByName("Options").getChildByName("Animal"))
                    .to(0.5, { opacity: 255 }, { easing: 'sineInOut' })
                    .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "destroy": {
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_right": {
                cc.tween(node1)
                    .to(0.9, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.9, { x: this.viewPortWidth + 100 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_left": {
                cc.tween(node1)
                    .to(0.2, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.2, { x: -100 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_top": {
                cc.tween(node1)
                    .to(2, { y: this.viewPortHeight + 100 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .repeatForever(
                        cc.tween().to(0.2, { x: node1.x + 30 }, { easing: 'sineInOut' })
                            .to(0.2, { x: node1.x }, { easing: 'sineInOut' })
                    ).start();
                break;
            }
            case "movement_bottom": {
                //game specific code
                if (globalVariables.Instance.currentLevel == 4) {
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                        .to(0.5, { x: -280 }, { easing: 'sineInOut' }).start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: 'sineInOut' })
                    .to(0.5, { y: node1.y - 50 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: 'sineInOut' }).start();//bounceIn
                break;
            }
            case "movement_Animation": {
                //game specific code
                if (globalVariables.Instance.currentLevel == 1) {
                    node1.x = node1.x + 10;
                    node1.y = node1.y + 50;
                }
                if (globalVariables.Instance.currentLevel == 3) {
                    node1.x = node1.x + 20;
                    node1.y = node1.y + 20;
                    node1.scale = node1.scale - 0.2;
                }
                if (globalVariables.Instance.currentLevel == 5) {
                    // node1.x=node1.x+20;
                    // node1.y=node1.y+20;
                    node1.scale = node1.scale + 0.4;
                }
                let animationClip: cc.AnimationClip //= this.optionAnimations[parseInt(node1.name)-1];
                node1.addComponent(cc.Animation);
                node1.getComponent(cc.Animation).addClip(animationClip);
                node1.getComponent(cc.Animation).play(animationClip.name);
                //node1.getComponent(cc.Animation).on('finished',  this.finishedAnim,    this);
                break;
            }
            case "movement_Scale": {
                let outlineScale = node1.scale + (node1.scale * 30 / 100);
                // if(node1.scale<=0.7){
                //     outlineScale = node1.scale+(node1.scale/2);
                // } 
                // else if(node1.scale>=0.7&&node1.scale<=0.9){
                //     outlineScale = node1.scale;
                // } 
                // else{
                //     outlineScale = node1.scale-0.4;
                // }

                //node1.getChildByName("outline").getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                node1.getChildByName("outline").scale = outlineScale;
                cc.tween(node1.getChildByName("outline"))
                    .to(0.3, { scale: outlineScale + 0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: outlineScale }, { easing: 'sineInOut' }).start();
                break;
            }
            case "frameChange": {
                //node1.getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                cc.tween(node1)
                    .to(0.3, { scale: node1.scale + 0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: node1.scale }, { easing: 'sineInOut' }).start();
                break;
            }
            case "shake": {
                let tween1 = cc.tween(node1)
                    .repeatForever(
                        cc.tween().to(0.1, { x: node1.x }, { easing: 'sineInOut' })
                            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
                    )
                    .start();

                this.scheduleOnce(() => {
                    tween1.stop();
                }, 1);
                break;
            }
            case "movement_center": {
                this.scheduleOnce(() => {
                    this.destroyOtherOptions();
                }, 0);
                if (node1.name == "2") {
                    cc.tween(node1)
                        .to(1, { x: node1.x - 325 }, { easing: 'sineInOut' }).start();
                }
                else if (node1.name == "1") {
                    cc.tween(node1)
                        .to(1, { x: node1.x + 325 }, { easing: 'sineInOut' }).start();
                }
                break;
            }
            default: {
                //statements; 
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
        }
    }

    destroyOtherOptions() {
        for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name && (!this.isDone[i])) {
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
        }
    }





    update(dt) {
        //console.log("ga.Name"+GA.Name);
        if (this.isClicked) {
            this.timer += dt;
            //console.log("isClicked : ",this.timer,this.isClicked);
        }
        //console.log("currentLevel is",globalVariables.Instance.currentLevel);
        this.value = this.timer / this.defaultTime;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").getComponent(cc.Sprite).fillRange = this.value;



        //console.log("value $$$$$$$$$$$ : "+this.value,this.timer);
        if (this.timer >= this.defaultTime) {
            globalVariables.Instance.totalTimer += this.timer;
            this.timer = 0;
            this.isClicked = false;
            this.isWrong = true;
            this.setProgressBar();
            this.hilightLeftAnswers();


            if (globalVariables.Instance.currentLevel == this.totalLevels) {
                this.destroyAnswers();
                this.destroyOptions();
                cc.director.loadScene("endScreen");
            }
            else {
                globalVariables.Instance.currentLevel += 1;
                this.setScreen();
            }

        }
    }



    finishedAnim(event: cc.Event) {
        //this.node.getChildByName("Options").getChildByName("particle").setPosition(this.node.getChildByName("bg").getChildByName("oneMany").x,this.node.getChildByName("bg").getChildByName("oneMany").y);





    }

    callPositiveReaction() {

        //if(randomnumber == 1)
        //{

        if (globalVariables.Instance.currentLevel == 2 || globalVariables.Instance.currentLevel == 6) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction1");//left
            this.node.getChildByName("Jockey").x = -475;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            this.scheduleOnce(() => {
                this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }
        else if (globalVariables.Instance.currentLevel == 3 || globalVariables.Instance.currentLevel == 7) {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("positiveReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: 475 }).start();
            this.scheduleOnce(() => {
                this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");//right
            }, 0.4);

            this.scheduleOnce(() => {
                this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                this.node.getComponent(cc.AudioSource).play();
            }, 1);
        }
        else if (globalVariables.Instance.currentLevel == 4 || globalVariables.Instance.currentLevel == 8) {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("positiveReaction2");
            this.node.getChildByName("Jockey").x = -939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: -475 }).start();
            this.scheduleOnce(() => {
                this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");//right
            }, 0.4);
            this.scheduleOnce(() => {
                this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }
        else if (globalVariables.Instance.currentLevel == 5) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction1");//right
            this.node.getChildByName("Jockey").x = 475;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.scheduleOnce(() => {
                this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }


        this.node.getChildByName("Jockey").getComponent(cc.Animation).on('finished', this.finishanimation, this);
    }

    callNegativeReaction() {
        this.canTouch = false;
        let randomnumber = this.getRandomNumber(0, 1);
        let currentAudioClip: cc.AudioClip //= this.negativeAudios[randomnumber];
        if (randomnumber == 0) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").x = -475;
            this.node.getChildByName("Jockey").y = -101;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction1");
        }
        else {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("negativeReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: 475 }).start();
            this.scheduleOnce(() => {
                this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            }, 0.4);
        }


        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            this.node.getComponent(cc.AudioSource).play();
        }, 0.9);

        this.node.getChildByName("Jockey").getComponent(cc.Animation).on('finished', this.negativefinishanimation, this);
        //this.node.getChildByName("Jockey").getComponent(dragonBones.Armature)
    }


    finishanimation() {
        if (this.isChar1) {
            console.log("characterDisappear--Gopal");
            this.isChar1 = false;
        }
        else {
            console.log("characterDisappear--Mili");
        }

        this.scheduleOnce(() => {
            this.scheduleOnce(() => {
                if (globalVariables.Instance.currentLevel <= 7) {
                    cc.director.loadScene((parseInt(cc.director.getScene().name) + 1).toString());
                }
                else {
                    cc.director.loadScene("endScreen");
                }
            }, 0.3);
        }, 1);
        this.node.getChildByName("Jockey").active = false;
        this.node.getChildByName("Jockey").getComponent(cc.Animation).off('finished', this.finishanimation, this);
    }
    negativefinishanimation() {
        if (this.isChar1) {
            console.log("characterDisappear--Gopal");
            this.isChar1 = false;
        }
        else {
            console.log("characterDisappear--Mili");
        }
        this.node.getChildByName("Jockey").active = false;
        this.canTouch = true;
        this.node.getChildByName("Jockey").getComponent(cc.Animation).off('finished', this.negativefinishanimation, this);
    }

    increaseprogress() {
        globalVariables.Instance.fillRange = globalVariables.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill")).to(0.5, { width: globalVariables.Instance.fillRange }).start();
        this.scheduleOnce(() => {
            this.ShowStar();
        }, 0.5);
    }

    ShowStar() {
        if (this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * 1 / this.totalLevels)) {
            console.log("starsEarned--1");
            this.node.getChildByName("progressBar").getChildByName("star").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star")).to(0.5, { scale: 0.3 }).start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * Math.ceil(this.totalLevels / 2) / this.totalLevels)) {
            console.log("starsEarned--2");
            this.node.getChildByName("progressBar").getChildByName("star2").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star2").active = true;
            this.node.getChildByName("progressBar").getChildByName("star3").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star3").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star2")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star3")).to(0.5, { scale: 0.3 }).start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill").width == 394) {
            console.log("starsEarned--3");
            this.node.getChildByName("progressBar").getChildByName("star4").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star5").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star6").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star4").active = true;
            this.node.getChildByName("progressBar").getChildByName("star5").active = true;
            this.node.getChildByName("progressBar").getChildByName("star6").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star4")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star5")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star6")).to(0.5, { scale: 0.3 }).start();
        }
    }

    setProgressBar() {
        this.node.getChildByName("progressBarRound").y = globalVariables.Instance.canvasTopY - 60;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").active = false;
        if (globalVariables.Instance.currentLevel == 1) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound1"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound1").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine1").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound1"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound1").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
                let rawNode = this.node.getChildByName("progressBarRound").getChildByName("rawRound1");
            }
            else {
                console.log("isright level 1")
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound1"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound1").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables.Instance.currentLevel == 2) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound2"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound2").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine2").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound2"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound2").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound2"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound2").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables.Instance.currentLevel == 3) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound3"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound3").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine3").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound3"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound3").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound3"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound3").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables.Instance.currentLevel == 4) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound4"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound4").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine4").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound4"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound4").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound4"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound4").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables.Instance.currentLevel == 5) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound5"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound5").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine5").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound5"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound5").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound5"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound5").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables.Instance.currentLevel == 6) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound6"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound6").active = true;
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound6"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound6").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound6"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound6").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
    }

    // updateSprites(_spriteName: string, _node: cc.Node) {
    //     cc.loader.loadRes(_spriteName, cc.SpriteFrame, function (err, spriteFrame: cc.SpriteFrame) {
    //         if (err) {
    //             cc.warn(err.message || err);
    //             return;
    //         }
    //         //console.log(_spriteName);
    //         _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    //     }.bind(this));
    // }

    setRing() {
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").active = true;
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound1").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound1").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound1").y);
        }
        else if (globalVariables.Instance.currentLevel == 2) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound2").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound2").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound2").y);
        }
        else if (globalVariables.Instance.currentLevel == 3) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound3").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound3").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound3").y);
        }
        else if (globalVariables.Instance.currentLevel == 4) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound4").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound4").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound4").y);
        }
        else if (globalVariables.Instance.currentLevel == 5) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound5").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound5").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound5").y);
        }
        else if (globalVariables.Instance.currentLevel == 6) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound6").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound6").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound6").y);
        }
    }

    hilightLeftAnswers() {
        for (let i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            for (let j = 0; j < this.answers.length; j++) {
                if ((parseInt(this.node.getChildByName("Options").children[i].name) - 1) == this.answers[j]) {
                    this.node.getChildByName("Options").children[i].color = new cc.Color(71, 255, 0);
                    //console.log("Inside hilightLeftAnswers : "+this.node.getChildByName("Options").children[i].name);
                    if (this.node.getChildByName("Options").children[i].getChildByName("tick").active) {
                        // this.updateSprites("/whiteTick", this.node.getChildByName("Options").children[i].getChildByName("tick"));
                        this.node.getChildByName("Options").children[i].getChildByName("tick").getComponent(cc.Sprite).spriteFrame = this.whiteTick;
                    }
                    break;
                }
            }
        }
        // for(let i=0;i<this.answers.length;i++){
        //     if((parseInt(_node.name)-1)==this.answers[i]){
        //         isCorrect=true;
        //         break;
        //     }
        // }

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

}

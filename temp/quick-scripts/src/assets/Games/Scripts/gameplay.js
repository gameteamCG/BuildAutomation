"use strict";
cc._RF.push(module, 'fa156p3gAtEIKy7RL2BRjec', 'gameplay');
// Games/Scripts/gameplay.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var IData_1 = require("./IData");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.questionAudio = [];
        _this.positiveFeedbackSound = [];
        _this.negativeFeedbackSound = [];
        _this.ReinforementSound = [];
        _this.optionSounds = [];
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.particlesSound = null;
        _this.data = [new IData_1.IData];
        _this.question = "";
        _this.textArray = [];
        _this.maxOptions = 7;
        _this.SubImage = 0;
        _this.wrongAnswerLimit = 7;
        _this.answers = [];
        _this.positionType = "custom";
        _this.feedbacktype = [];
        _this.scaleArray = [];
        _this.optionImages = [];
        _this.positiveAudios = [];
        _this.isClicked = false;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.wrongAnswerCount = 0;
        _this.isDone = [];
        _this.createdOptions = [];
        _this.offsetX = 0;
        _this.totalLevels = 5;
        _this.answerValues = [];
        _this.viewPortWidth = 720;
        _this.viewPortHeight = 1280;
        _this.canTouch = true;
        _this.isChar1 = true;
        _this.isFirstClick = false;
        _this.isWrong = false;
        _this.defaultTime = 15;
        _this.touchDone = [];
        _this.popupTime = 0;
        return _this;
    }
    //private negativeAudios:cc.AudioClip[]=[];
    //private optionAnimations:string[]=[];
    //private optionAudios:string[]=[];
    //private ga = require("ga");
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.Updatedata = function () {
        this.LoadQuestion();
        this.scheduleOnce(function () {
            //console.log("total options/answers = ",this.data[globalVariables.Instance.currentLevel-1].positions);
        }, 0.2);
    };
    NewClass.prototype.LoadQuestion = function () {
        var _this = this;
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            var _jsonData = _jsonFile["json"];
            _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            // this.loadData();
        });
    };
    NewClass.prototype.loadData = function () {
        for (var i = 0; i < 7; i++) {
            cc.resources.load(this.data[i].answerObject);
            cc.resources.load(this.data[i].optionAnimationImages);
        }
    };
    NewClass.prototype.PlayQuestion = function (_data) {
        return 1;
    };
    NewClass.prototype.onLoad = function () {
        var _this = this;
        // this.fetchData();
        this.scheduleOnce(function () {
            _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, 0.5);
        this.node.getChildByName("ThirdNode").active = true;
        //this.answerValues = globalVariables.Instance.answerValues;
        this.Updatedata();
        var jockeyNode = this.node.getChildByName("podium").getChildByName("Puzzle");
        jockeyNode.getComponent(cc.Animation).play("titleAnim");
        jockeyNode.getComponent(cc.Animation).on("finished", (function () {
            // jockeyNode.width = 250;
            // jockeyNode.height = 250;
            _this.jockeyReposition(_this.node.getChildByName("podium"));
        }), this);
        cc.director.preloadScene("endScreen");
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.callStartGame();
        }, 2);
    };
    NewClass.prototype.callStartGame = function () {
        var _this = this;
        this.setMultipleAnswerEnvironment();
        // console.log("start : ");
        for (var i = 0; i < this.totalLevels; i++) {
            this.answerValues[i] = false;
        }
        this.setProgressBar();
        //ga.name;
        // ga('event', "Tap", {
        //     'event_category': "Link",
        //     'event_label': "Create Game",
        //     'value': <1>
        // });
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        //console.log("levelStarted--" + cc.director.getScene().name);
        if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
            //console.log("Congratulations.........!!!!!!!!!!!!!!!!");
            // cc.director.preloadScene("endScreen");
        }
        else {
            //console.log("loaddddddddd@@@@@@@@@@@",parseInt(cc.director.getScene().name));
            //cc.director.preloadScene((parseInt(cc.director.getScene().name)+1).toString());
        }
        this.scheduleOnce(function () {
            _this.fetchData();
        }, 0.2);
        this.scheduleOnce(function () {
            //this.node.getChildByName("template").destroy();
            _this.setMultipleAnswerEnvironment();
            _this.createAnswerObject();
            // cc.tween(this.node.getChildByName("Question"))
            //     .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            _this.scheduleOnce(function () {
                //this.AnswerNode.x = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x;
                //this.AnswerNode.y = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y;
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                _this.createOptionObject(_this.maxOptions);
                _this.playSound(_this.popSound);
                _this.scheduleOnce(function () {
                    for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) {
                        _this.isDone[i] = false;
                    }
                    _this.node.getChildByName("Options").children.forEach(function (element) {
                        element.on('touchstart', function (event) {
                            if (this.canTouch) {
                                this.TouchStart(element, event);
                            }
                        }, _this);
                    });
                }, 0.4);
            }, 0);
        }, 0.3);
        this.scheduleOnce(function () {
            //this.scheduleOnce(() => {
            _this.playSound(_this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1]);
            //}, 0.6);
        }, 0.7);
    };
    NewClass.prototype.callJockey = function () {
        var _this = this;
        cc.tween(this.node.getChildByName("Jockey"))
            .to(0.5, { x: 475 }, { easing: 'sineInOut' }).start();
        this.scheduleOnce(function () {
            if (globalVariables_1.default.Instance.currentLevel % 2 == 0) {
                _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
                _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, "dance", false);
            }
            else {
                _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
                _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, "thumbs_up", false);
            }
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("Jockey"))
                    .to(0.5, { x: 1600 }, { easing: 'sineInOut' }).start();
            }, _this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration);
        }, 0.5);
    };
    NewClass.prototype.fetchData = function () {
        this.correctAnswerCount = 0;
        this.maxOptions = this.data[globalVariables_1.default.Instance.currentLevel - 1].totalOptions;
        this.SubImage = this.data[globalVariables_1.default.Instance.currentLevel - 1].SubImage;
        this.wrongAnswerLimit = this.data[globalVariables_1.default.Instance.currentLevel - 1].wrongAnswersLimit;
        this.answers = this.data[globalVariables_1.default.Instance.currentLevel - 1].answers;
        this.scaleArray = this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray;
        this.positionType = this.data[globalVariables_1.default.Instance.currentLevel - 1].positionType;
        this.feedbacktype = this.data[globalVariables_1.default.Instance.currentLevel - 1].feedbacktype;
        this.totalAnswers = this.answers.length;
        this.question = this.data[globalVariables_1.default.Instance.currentLevel - 1].question;
        this.questionSound = this.data[globalVariables_1.default.Instance.currentLevel - 1].questionSound;
        this.textArray = this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray;
        this.answerObject = this.data[globalVariables_1.default.Instance.currentLevel - 1].answerObject;
        this.optionImages = this.data[globalVariables_1.default.Instance.currentLevel - 1].optionAnimationImages;
    };
    NewClass.prototype.CheckForIsDone = function (_node) {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name == _node.name) {
                this.isDone[i] = true;
            }
        }
    };
    NewClass.prototype.TouchStart = function (_node, _event) {
        var _this = this;
        // console.log("Inside touchstart : ")
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        //console.log("touch start : ");
        var isStop = false;
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name == this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
                isStop = true;
                break;
            }
        }
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name == this.touchDone[i]) {
                isStop = true;
                break;
            }
        }
        if (!isStop) {
            var isCorrect = false;
            for (var i = 0; i < this.answers.length; i++) {
                if ((parseInt(_node.name) - 1) == this.answers[i]) {
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
                var audioSource = this.node.getChildByName("audioNode").getComponent(cc.AudioSource);
                audioSource.clip = this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
                audioSource.play();
                // this.scheduleOnce(()=>{
                //     audioSource.clip = this.ReinforementSound[globalVariables.Instance.currentLevel-2];
                //     audioSource.play();
                // },this.positiveFeedbackSound[globalVariables.Instance.currentLevel-1].duration);
                console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
                this.wrongAnswerCount = 0;
                //console.log("correct is clicked = ",_node.name);
                this.callJockeyAnim(0);
                // cc.tween(_node)
                //     .to(0.2, { x: _node.x }, { easing: 'sineInOut' })
                //     .to(0.2, { x: 360 }, { easing: 'sineInOut' }).start();
                // cc.tween(_node)
                //     .to(0.2, { y: _node.y }, { easing: 'sineInOut' })
                //     .to(0.2, { y: 640 }, { easing: 'sineInOut' }).start();
                if (this.feedbacktype.length == 1) {
                    //this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    //this.node.getComponent(cc.AudioSource).play();
                    //this.playAudio("/sounds/CorrectAnswer");
                    this.playSound(this.rightSound);
                    //this.scheduleOnce(() => {
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    //}, 0.5);
                }
                else if (this.feedbacktype.length == 2) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.8);
                }
                else if (this.feedbacktype.length == 3) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.5);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[2]);
                    }, 0.7);
                }
                this.CheckForIsDone(_node);
                this.correctAnswerCount += 1;
            }
            else {
                var audioSource = this.node.getChildByName("audioNode").getComponent(cc.AudioSource);
                audioSource.clip = this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
                audioSource.play();
                //console.log("wrong is clicked = ",this.isDone);
                console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
                this.callNegativeFeedback(_node);
                this.callJockeyAnim(1);
            }
            //is levelend
            var levelend = false;
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
                globalVariables_1.default.Instance.rightAnswerCount += 1;
                this.answerValues[globalVariables_1.default.Instance.currentLevel - 1] = true;
                levelend = true;
                this.canTouch = false;
                //console.log("Level Completed...!!!!!!!!!");
                if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
                    this.setProgressBar();
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    this.isClicked = false;
                    //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                    // this.scheduleOnce(() => {
                    //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                    //     this.node.getComponent(cc.AudioSource).play();
                    // }, 3);
                    this.scheduleOnce(function () {
                        _this.setProgressBar();
                        _this.scheduleOnce(function () {
                            _this.destroyOptions();
                            // this.setReinforsementScreen("positive");
                            _this.scheduleOnce(function () {
                                // cc.tween(this.node.getChildByName("podium"))
                                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                                _this.destroyRightOptions();
                                _this.destroyAnswers();
                                _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                                _this.node.getChildByName("bg").getChildByName("glow").active = false;
                                _this.scheduleOnce(function () {
                                    // this.canTouch = true;
                                    _this.isWrong = false;
                                    globalVariables_1.default.Instance.answerArray = _this.answerValues;
                                    _this.scheduleOnce(function () {
                                        console.log("levelComplete--" + (globalVariables_1.default.Instance.currentLevel));
                                        cc.director.loadScene("endScreen");
                                    }, 2);
                                }, 0.5);
                            }, _this.popupTime + 0.5);
                        }, 2);
                    }, 1);
                    //this.callPositiveReaction();
                }
                else {
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    this.isClicked = false;
                    this.canTouch = false;
                    globalVariables_1.default.Instance.currentLevel += 1;
                    this.setProgressBar();
                    this.scheduleOnce(function () {
                        _this.setScreen("positive");
                    }, 3);
                    //console.log("currentLevel : ",globalVariables.Instance.currentLevel);
                    // this.scheduleOnce(()=>{
                    //     this.callPositiveReaction();
                    // },1);
                }
            }
        }
    };
    NewClass.prototype.playSound = function (name) {
        this.node.getComponent(cc.AudioSource).clip = name;
        this.node.getComponent(cc.AudioSource).play();
    };
    NewClass.prototype.playQuestionSound = function (name) {
        this.node.getComponent(cc.AudioSource).clip = this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1];
        this.node.getComponent(cc.AudioSource).play();
    };
    NewClass.prototype.setScreen = function (type1) {
        var _this = this;
        this.touchDone = [];
        console.log("levelComplete--" + (globalVariables_1.default.Instance.currentLevel - 1));
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        this.scheduleOnce(function () {
            //this.node.getChildByName("Question").getComponent(cc.Label).string = "";
            //this.destroyAnswers();
            _this.destroyOptions();
            // this.setReinforsementScreen(type1);
            _this.scheduleOnce(function () {
                // cc.tween(this.node.getChildByName("podium"))
                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                _this.destroyRightOptions();
                _this.destroyAnswers();
                _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                _this.node.getChildByName("bg").getChildByName("glow").active = false;
                _this.scheduleOnce(function () {
                    // this.canTouch = true;
                    _this.isFirstClick = false;
                    _this.isWrong = false;
                    _this.fetchData();
                    _this.createAnswerObject();
                    _this.setMultipleAnswerEnvironment();
                    _this.scheduleOnce(function () {
                        _this.createOptionObject(_this.maxOptions);
                        _this.playSound(_this.popSound);
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                        _this.scheduleOnce(function () {
                            for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) {
                                _this.isDone[i] = false;
                            }
                            _this.node.getChildByName("Options").children.forEach(function (element) {
                                element.on('touchstart', function (event) {
                                    if (this.canTouch) {
                                        this.TouchStart(element, event);
                                    }
                                }, _this);
                            });
                            _this.scheduleOnce(function () {
                                // Here this refers to component
                                this.isClicked = true;
                            }, 1);
                            _this.scheduleOnce(function () {
                                this.playSound(this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1]);
                            }, _this.popSound.duration);
                        }, 0.1);
                    }, 0.4);
                }, 0.5);
            }, _this.popupTime + 0.5);
        }, 2);
    };
    NewClass.prototype.setReinforsementScreen = function (type) {
        var _this = this;
        if (type == "positive") {
            this.popupTime = this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration + this.magicalSound.duration;
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzlePositive");
            this.node.getChildByName("bg").getChildByName("glow").active = true;
            this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).play();
            this.playSound(this.magicalSound);
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: 'sineInOut' }).start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name && (this.isDone[i])) {
                    this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: 'sineInOut' }).start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2]);
                _this.callJockey();
            }, this.magicalSound.duration);
        }
        else if ("negative") {
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzleNegative");
            this.popupTime = this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 1].duration;
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: 'sineInOut' }).start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name && (this.isDone[i])) {
                    this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: 'sineInOut' }).start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 2]);
            }, 0.5);
        }
        else if ("none") {
            this.popupTime = 0;
        }
    };
    NewClass.prototype.createAnswerObject = function () {
        var _this = this;
        // console.log(`winSize: `+(cc.winSize.width/cc.winSize.height));
        //let answerNode = new cc.Node;
        this.AnswerNode = this.node.getChildByName("ThirdNode");
        this.AnswerNode.opacity = 255;
        this.AnswerNode.scale = 0;
        this.AnswerNode.x = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].answerpositions[0].x);
        this.AnswerNode.y = this.convertYPos(cc.winSize.height * this.data[globalVariables_1.default.Instance.currentLevel - 1].answerpositions[0].y);
        // this.updateSprites(this.answerObject,this.node.getChildByName("ThirdNode").getChildByName("AnswerNode"));
        this.AnswerNode.getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = this.question;
        // console.log(`QUESTION: `+this.question+`  `+this.AnswerNode.getChildByName(`AnswerNode`).getChildByName(`Question`));
        //this.playSound(this.popSound);
        var _scale = 0.8;
        if (cc.winSize.height < 720) {
            _scale = 0.8;
        }
        cc.tween(this.AnswerNode)
            .to(1, { scale: _scale }, { easing: 'sineInOut' }).call(function () {
            _this.canTouch = true;
        }).start();
    };
    NewClass.prototype.createOptionObject = function (numOfOptions) {
        // console.log("optionOBJECT ::",numOfOptions);
        switch (this.positionType) {
            case "custom": {
                for (var i = 0; i < numOfOptions; i++) {
                    this.createdOptions[i] = cc.instantiate(this.node.getChildByName("template"));
                    this.createdOptions[i].name = (i + 1).toString();
                    // console.log("created options :::::", this.createdOptions[i].name);
                    this.createdOptions[i].opacity = 0;
                    this.createdOptions[i].children[0].getComponent(cc.Label).string = this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray[i]; //(i+1).toString();
                    this.node.getChildByName("Options").insertChild(this.createdOptions[i], i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale = 0;
                    this.createdOptions[i].opacity = 255;
                    this.createdOptions[i].x = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].positions[i].x);
                    this.createdOptions[i].y = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].positions[i].y);
                    this.createdOptions[i].active = true;
                    if (this.SubImage == 0) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i]);
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = 0;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                    }
                    else if (this.SubImage == 1) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite"));
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = -170;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                    }
                    this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite").width = 550;
                    this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite").height = 550;
                    cc.tween(this.createdOptions[i])
                        .to(1, { scale: this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray[i] }, { easing: 'sineInOut' }).start();
                    // if(this.answers.length<=1){
                    //     this.createdOptions[i].getChildByName("tick").active = false;
                    // }
                    // else{
                    //     this.createdOptions[i].getChildByName("tick").active = true;
                    // }
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
    };
    NewClass.prototype.destroyOptions = function () {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.node.getChildByName("Options").children[i].name && (!this_1.isDone[i])) {
                cc.tween(this_1.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).call(function () {
                    _this.createdOptions[i].destroy();
                }).start();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.maxOptions; i++) {
            _loop_1(i);
        }
        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(!this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     } 
        // }, 0.5);
    };
    NewClass.prototype.destroyRightOptions = function () {
        var _this = this;
        var _loop_2 = function (i) {
            if (this_2.node.getChildByName("Options").children[i].name && (this_2.isDone[i])) {
                cc.tween(this_2.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).call(function () {
                    _this.createdOptions[i].destroy();
                }).start();
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.maxOptions; i++) {
            _loop_2(i);
        }
        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     } 
        // }, 0.5);
    };
    NewClass.prototype.destroyAnswers = function () {
        if (this.AnswerNode) {
            cc.tween(this.AnswerNode)
                .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(function () {
                // this.AnswerNode.destroy();
            }, 0.5);
        }
    };
    NewClass.prototype.setMultipleAnswerEnvironment = function () {
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = "";
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = this.question;
        // if(this.SubImage==1){
        //     return;
        // }
        // else{
        //     this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string=this.question;
        // }
    };
    NewClass.prototype.callNegativeFeedback = function (node1) {
        var _this = this;
        this.touchDone.push(node1.name);
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        //let tween1 =  cc.tween(node1)
        //node1.color = new cc.Color(232, 30, 43);
        var optionsNode = node1.parent;
        // optionsNode.children.forEach(element => {
        //     if(element.name == this.answers[0].toString()){
        //         console.log(`RIGHT`);
        //         element.getChildByName("right").active = true;
        //         cc.tween(element.getChildByName("right")).to(0.1,{opacity:0})
        //         .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        //     }
        // });
        // console.log(`njnnnn `+(this.answers[0]+1);
        optionsNode.getChildByName((this.answers[0] + 1).toString()).getChildByName("right").active = true;
        cc.tween(optionsNode.getChildByName((this.answers[0] + 1).toString()).getChildByName("right")).to(0.15, { opacity: 0 })
            .to(0.15, { opacity: 255 }).to(0.15, { opacity: 0 }).to(0.15, { opacity: 255 }).start();
        // if(node1.name == `1`){
        //     optionsNode.getChildByName(`2`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`2`).getChildByName("right")).to(0.15,{opacity:0})
        //     .to(0.15,{opacity:255}).to(0.15,{opacity:0}).to(0.15,{opacity:255}).start();
        // }
        // else{
        //     optionsNode.getChildByName(`1`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`1`).getChildByName("right")).to(0.1,{opacity:0})
        //     .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        // }
        node1.getChildByName("right").active = false;
        node1.getChildByName("wrong").active = true;
        node1.getChildByName("image").getChildByName("subSprite").getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        node1.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.tween(node1)
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' }).start();
        //call negative audio 
        // this.node.getComponent(cc.AudioSource).clip = this.negativeSound;
        // this.node.getComponent(cc.AudioSource).play();
        //this.playAudio("/sounds/incorrectAnswer");
        this.playSound(this.wrongSound);
        // this.scheduleOnce(() => {
        //     //this.playSound(this.negativeFeedback[globalVariables.Instance.currentLevel-1]);
        //     this.canTouch = true;
        // }, 0.8);
        // this.scheduleOnce(() => {
        //     this.canTouch = true;
        // }, this.negativeFeedback[globalVariables.Instance.currentLevel-1].duration);
        this.scheduleOnce(function () {
            //tween1.stop();
            if (_this.wrongAnswerCount >= _this.wrongAnswerLimit) {
                _this.wrongAnswerCount = 0;
                _this.canTouch = false;
                //this.callNegativeReaction();
                _this.hilightLeftAnswers();
                if (globalVariables_1.default.Instance.currentLevel == _this.totalLevels) {
                    _this.isClicked = false;
                    _this.setProgressBar();
                    //this.node.getChildByName("Options").getChildByName(this.answers[0].toString());
                    _this.isDone[_this.answers[0]] = true;
                    _this.scheduleOnce(function () {
                        _this.destroyOptions();
                        // this.setReinforsementScreen("negative");
                        _this.scheduleOnce(function () {
                            // cc.tween(this.node.getChildByName("podium"))
                            //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                            _this.destroyRightOptions();
                            _this.destroyAnswers();
                            _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                            _this.node.getChildByName("bg").getChildByName("glow").active = false;
                            _this.scheduleOnce(function () {
                                // this.canTouch = true;
                                _this.isWrong = false;
                                globalVariables_1.default.Instance.answerArray = _this.answerValues;
                                console.log("levelComplete--" + (globalVariables_1.default.Instance.currentLevel));
                                cc.director.loadScene("endScreen");
                            }, 0.5);
                        }, _this.popupTime + 0.5);
                    }, 2);
                }
                else {
                    _this.isWrong = true;
                    _this.isClicked = false;
                    globalVariables_1.default.Instance.currentLevel += 1;
                    _this.setProgressBar();
                    _this.isDone[_this.answers[0]] = true;
                    // this.setScreen("negative"); 
                    _this.scheduleOnce(function () {
                        _this.setScreen("negative");
                    }, 3);
                }
            }
        }, 0.8);
    };
    NewClass.prototype.callPositiveFeedback = function (node1, feedbackName) {
        var _this = this;
        switch (feedbackName) {
            case "confetti": {
                //this.node.getChildByName("Options").getChildByName("particle").setPosition(node1.x,node1.y);
                //node1.color = new cc.Color(71, 255, 0);
                node1.getChildByName("wrong").active = false;
                node1.getChildByName("right").active = true;
                this.node.getChildByName("Options").getChildByName("Animal").scale = 1;
                this.node.getChildByName("Options").getChildByName("Animal").setPosition(node1.x, node1.y);
                this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    _this.node.getChildByName("Options").getChildByName("Animal").setPosition(-500, -500);
                }, 1);
                //extra code 
                // if(node1.getChildByName("tick").active){
                //     this.updateSprites("/whiteTick",node1.getChildByName("tick"));
                // }
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
                    .repeatForever(cc.tween().to(0.2, { x: node1.x + 30 }, { easing: 'sineInOut' })
                    .to(0.2, { x: node1.x }, { easing: 'sineInOut' })).start();
                break;
            }
            case "movement_bottom": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 4) {
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                        .to(0.5, { x: -280 }, { easing: 'sineInOut' }).start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: 'sineInOut' })
                    .to(0.5, { y: node1.y - 50 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: 'sineInOut' }).start(); //bounceIn
                break;
            }
            case "movement_Animation": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 1) {
                    node1.x = node1.x + 10;
                    node1.y = node1.y + 50;
                }
                if (globalVariables_1.default.Instance.currentLevel == 3) {
                    node1.x = node1.x + 20;
                    node1.y = node1.y + 20;
                    node1.scale = node1.scale - 0.2;
                }
                if (globalVariables_1.default.Instance.currentLevel == 5) {
                    // node1.x=node1.x+20;
                    // node1.y=node1.y+20;
                    node1.scale = node1.scale + 0.4;
                }
                var animationClip = void 0; //= this.optionAnimations[parseInt(node1.name)-1];
                node1.addComponent(cc.Animation);
                node1.getComponent(cc.Animation).addClip(animationClip);
                node1.getComponent(cc.Animation).play(animationClip.name);
                //node1.getComponent(cc.Animation).on('finished',  this.finishedAnim,    this);
                break;
            }
            case "movement_Scale": {
                var outlineScale = node1.scale + (node1.scale * 30 / 100);
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
                var tween1_1 = cc.tween(node1)
                    .repeatForever(cc.tween().to(0.1, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' }))
                    .start();
                this.scheduleOnce(function () {
                    tween1_1.stop();
                }, 1);
                break;
            }
            case "movement_center": {
                this.scheduleOnce(function () {
                    _this.destroyOtherOptions();
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
    };
    NewClass.prototype.destroyOtherOptions = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name && (!this.isDone[i])) {
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.finishedAnim = function (event) {
        //this.node.getChildByName("Options").getChildByName("particle").setPosition(this.node.getChildByName("bg").getChildByName("oneMany").x,this.node.getChildByName("bg").getChildByName("oneMany").y);
    };
    NewClass.prototype.callNegativeReaction = function () {
        var _this = this;
        this.canTouch = false;
        var randomnumber = this.getRandomNumber(0, 1);
        var currentAudioClip; //= this.negativeAudios[randomnumber];
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
            this.scheduleOnce(function () {
                _this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            }, 0.4);
        }
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            _this.node.getComponent(cc.AudioSource).play();
        }, 0.9);
    };
    NewClass.prototype.increaseprogress = function () {
        var _this = this;
        globalVariables_1.default.Instance.fillRange = globalVariables_1.default.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill")).to(0.5, { width: globalVariables_1.default.Instance.fillRange }).start();
        this.scheduleOnce(function () {
            _this.ShowStar();
        }, 0.5);
    };
    NewClass.prototype.ShowStar = function () {
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
    };
    NewClass.prototype.setProgressBar = function () {
        var progressBar = this.node.getChildByName("ThirdNode").getChildByName("progressBar");
        // console.log("answerValues : ", this.answerValues)
        for (var i = 0; i < this.totalLevels; i++) {
            if (this.answerValues[i] == true) {
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
            }
            else {
                if (globalVariables_1.default.Instance.currentLevel == i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = true;
                }
                else if (globalVariables_1.default.Instance.currentLevel > i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = true;
                }
                else if (globalVariables_1.default.Instance.currentLevel < i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = true;
                }
            }
        }
    };
    NewClass.prototype.updateSprites = function (_spriteName, _node) {
        cc.resources.load(_spriteName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            //console.log(_spriteName);
            _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
    };
    NewClass.prototype.UpdateAnimations = function (_spriteName, _node) {
        cc.resources.load(_spriteName, cc.AnimationClip, function (err, animation) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            _node.getComponent(cc.Animation).addClip(animation);
            _node.getComponent(cc.Animation).play(animation.name);
            // _updateFrame = spriteFrame;
        }.bind(this));
    };
    NewClass.prototype.playAudio = function (_audioPath) {
        var clip = null;
        // let audioClip: cc.AudioClip = null;
        cc.resources.load(_audioPath, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            // this.audioManager.play(audioClip.name, audioClip, false, "VO");
            // cc.audioEngine.play(audioClip, false, 1);
            cc.audioEngine.playEffect(audioClip, false);
            // console.log("audioClip name = ", audioClip.name);
            clip = audioClip;
        }.bind(this));
    };
    NewClass.prototype.hilightLeftAnswers = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            for (var j = 0; j < this.answers.length; j++) {
                if ((parseInt(this.node.getChildByName("Options").children[i].name) - 1) == this.answers[j]) {
                    //this.node.getChildByName("Options").children[i].color = new cc.Color(71, 255, 0);
                    //console.log("Inside hilightLeftAnswers : "+this.node.getChildByName("Options").children[i].name);
                    // if(this.node.getChildByName("Options").children[i].getChildByName("tick").active){
                    //     this.updateSprites("/whiteTick",this.node.getChildByName("Options").children[i].getChildByName("tick"));
                    // }
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
    };
    NewClass.prototype.convertXPos = function (x) {
        var val = x - cc.winSize.width / 2;
        return val;
    };
    NewClass.prototype.convertYPos = function (y) {
        var val = y - cc.winSize.height / 2;
        return val;
    };
    NewClass.prototype.jockeyReposition = function (_node) {
        _node.children[0].getComponent(cc.Animation).play();
        cc.tween(_node).to(1, { x: -450, y: -280, scale: 0.9 }).start();
    };
    NewClass.prototype.callJockeyAnim = function (num) {
        var _this = this;
        var jockeyNode = this.node.getChildByName("podium").getChildByName("Puzzle");
        var options2 = this.node.getChildByName("Options2");
        if (num == 0) {
            // console.log(`GOOD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            jockeyNode.getComponent(cc.Animation).on("finished", (function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            }), this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", (function () {
                    jockeyNode.getComponent(cc.Animation).play("puzzleIdle");
                }), _this);
                _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
            }, jockeyNode.getComponent(cc.Animation).getClips()[1].duration + this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
        else {
            // console.log(`BAD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            jockeyNode.getComponent(cc.Animation).on("finished", (function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            }), this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", (function () {
                    jockeyNode.getComponent(cc.Animation).play("puzzleIdle");
                }), _this);
                _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
            }, jockeyNode.getComponent(cc.Animation).getClips()[3].duration + this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
    };
    NewClass.prototype.playDustAnim = function (num) {
        // console.log(`playParticles`);
    };
    NewClass.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };
    NewClass.prototype.getRandomFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    NewClass.prototype.playDustAnim2 = function (num1, num2, _node) {
        var _this = this;
        // console.trace(`deDust2`);
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var jockey = this.node.getChildByName("podium").getChildByName("Puzzle");
        jockey.getComponent(cc.AudioSource).clip = this.particlesSound;
        this.scheduleOnce(function () {
            jockey.getComponent(cc.AudioSource).play();
        }, 0.75);
        // jockey.getComponent(cc.AudioSource).play();
        // console.log(`POS`+startPos);
        var colorsArray = ["#C042FF", "#FF0049", "#FCC000"];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_3 = function (i) {
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = (-450 + 640) + 20;
            particles.y = (-280 + 360) + 70;
            // particles.position = jockey.getParent().convertToWorldSpaceAR(jockey.getParent().position);
            // particles.x += 420;
            // particles.y += 220;
            particles.addComponent(cc.Sprite).spriteFrame = this_3.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_3.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_3.getRandomInt(0, colorsArray.length)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_3.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = this_3.getRandomFloat(0.1, 0.5);
            trail.getComponent(cc.MotionStreak).stroke = this_3.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            // console.log(particles);
            this_3.scheduleOnce(function () {
                var rngParticlesSize = _this.getRandomInt(75, 125);
                _this.scheduleOnce(function () {
                    cc.tween(particles).to(0.5, { width: rngParticlesSize, height: rngParticlesSize }, { easing: "backOut" }).start();
                }, 0.5);
                cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, 3 * cc.winSize.width / 4), _this.getRandomNumber(cc.winSize.height / 4, 3 * cc.winSize.height / 4))).call(function () {
                    var _loop_4 = function (j) {
                        var bullets = cc.instantiate(new cc.Node);
                        var bTrails = cc.instantiate(new cc.Node);
                        bullets.addComponent(cc.Sprite).spriteFrame = _this.dustImg;
                        bTrails.parent = bullets;
                        bTrails.addComponent(cc.MotionStreak).preview;
                        bTrails.getComponent(cc.MotionStreak).texture = _this.dustTrailImg;
                        bTrails.getComponent(cc.MotionStreak).enabled = true;
                        bTrails.getComponent(cc.MotionStreak).minSeg = _this.getRandomFloat(0.1, 0.5);
                        bTrails.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(10, 25);
                        bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        bTrails.getComponent(cc.MotionStreak).enabled = true;
                        bTrails.getComponent(cc.MotionStreak).fastMode = true;
                        bullets.width = 0;
                        bullets.height = 0;
                        // bullets.angle = this.getRandomNumber(0, 359);
                        bullets.name = "bullets" + j;
                        bullets.parent = particles;
                        bullets.x = 0;
                        bullets.y = 0;
                        bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomInt(0, colorsArray.length)]);
                        // bullets.color = particles.color;
                        var rngSize = _this.getRandomNumber(100, 200);
                        cc.tween(bullets).to(0.25, { width: rngSize, height: rngSize }, { easing: "backOut" }).start();
                        cc.tween(bullets).to(0.5, { x: _this.getRandomNumber(bullets.x - _this.getRandomNumber(100, 500), bullets.x + _this.getRandomNumber(100, 500)), y: _this.getRandomNumber(bullets.y - _this.getRandomNumber(100, 500), bullets.y + _this.getRandomNumber(100, 500)) }).start();
                        cc.tween(bullets).to(0.1, { opacity: 200 }).to(0.1, { opacity: 255 }).to(0.1, { opacity: 200 }).to(0.1, { opacity: 255 }).to(0.1, { opacity: 200, scale: 0 }).call(function () {
                            bullets.destroy();
                            particles.destroy();
                        }).start();
                    };
                    for (var j = 0; j < num2; j++) {
                        _loop_4(j);
                    }
                }).start();
            }, 0.1 * (i + 1));
        };
        var this_3 = this;
        for (var i = 0; i < num1; i++) {
            _loop_3(i);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "magicalSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "questionAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveFeedbackSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeFeedbackSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ReinforementSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "rightSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "optionSounds", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "dustImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], NewClass.prototype, "dustTrailImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "particlesSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
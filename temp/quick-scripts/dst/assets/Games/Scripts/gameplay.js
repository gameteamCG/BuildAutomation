
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.data = [new IData_1.IData()];
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
            _this.node
                .getChildByName("curtain")
                .getComponent(cc.Animation)
                .play();
        }, 0.5);
        this.node.getChildByName("ThirdNode").active = true;
        //this.answerValues = globalVariables.Instance.answerValues;
        this.Updatedata();
        var jockeyNode = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
        jockeyNode.getComponent(cc.Animation).play("titleAnim");
        jockeyNode.getComponent(cc.Animation).on("finished", function () {
            // jockeyNode.width = 250;
            // jockeyNode.height = 250;
            _this.jockeyReposition(_this.node.getChildByName("podium"));
        }, this);
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
                    _this.node
                        .getChildByName("Options")
                        .children.forEach(function (element) {
                        element.on("touchstart", function (event) {
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
            .to(0.5, { x: 475 }, { easing: "sineInOut" })
            .start();
        this.scheduleOnce(function () {
            if (globalVariables_1.default.Instance.currentLevel % 2 == 0) {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton).paused = false;
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "dance", false);
            }
            else {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton).paused = false;
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "thumbs_up", false);
            }
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("Jockey"))
                    .to(0.5, { x: 1600 }, { easing: "sineInOut" })
                    .start();
            }, _this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration);
        }, 0.5);
    };
    NewClass.prototype.fetchData = function () {
        this.correctAnswerCount = 0;
        this.maxOptions =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].totalOptions;
        this.SubImage =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].SubImage;
        this.wrongAnswerLimit =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].wrongAnswersLimit;
        this.answers =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].answers;
        this.scaleArray =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray;
        this.positionType =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].positionType;
        this.feedbacktype =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].feedbacktype;
        this.totalAnswers = this.answers.length;
        this.question =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].question;
        this.questionSound =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].questionSound;
        this.textArray =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray;
        this.answerObject =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].answerObject;
        this.optionImages =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].optionAnimationImages;
    };
    NewClass.prototype.CheckForIsDone = function (_node) {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name ==
                _node.name) {
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
            if (_node.name ==
                this.node.getChildByName("Options").children[i].name &&
                this.isDone[i]) {
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
                if (parseInt(_node.name) - 1 == this.answers[i]) {
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
                var audioSource = this.node
                    .getChildByName("audioNode")
                    .getComponent(cc.AudioSource);
                audioSource.clip =
                    this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
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
                    this.node.getComponent(cc.AudioSource).clip =
                        this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.8);
                }
                else if (this.feedbacktype.length == 3) {
                    this.node.getComponent(cc.AudioSource).clip =
                        this.positiveSound;
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
                var audioSource = this.node
                    .getChildByName("audioNode")
                    .getComponent(cc.AudioSource);
                audioSource.clip =
                    this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
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
                this.answerValues[globalVariables_1.default.Instance.currentLevel - 1] =
                    true;
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
                                _this.node
                                    .getChildByName("bg")
                                    .getChildByName("glow")
                                    .getComponent(cc.Animation)
                                    .stop();
                                _this.node
                                    .getChildByName("bg")
                                    .getChildByName("glow").active = false;
                                _this.scheduleOnce(function () {
                                    // this.canTouch = true;
                                    _this.isWrong = false;
                                    globalVariables_1.default.Instance.answerArray =
                                        _this.answerValues;
                                    _this.scheduleOnce(function () {
                                        console.log("levelComplete--" +
                                            globalVariables_1.default.Instance
                                                .currentLevel);
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
        this.node.getComponent(cc.AudioSource).clip =
            this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1];
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
                _this.node
                    .getChildByName("bg")
                    .getChildByName("glow")
                    .getComponent(cc.Animation)
                    .stop();
                _this.node.getChildByName("bg").getChildByName("glow").active =
                    false;
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
                            for (var i = 0; i <
                                _this.node.getChildByName("Options").children
                                    .length; i++) {
                                _this.isDone[i] = false;
                            }
                            _this.node
                                .getChildByName("Options")
                                .children.forEach(function (element) {
                                element.on("touchstart", function (event) {
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
                                this.playSound(this.questionAudio[globalVariables_1.default.Instance.currentLevel -
                                    1]);
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
            this.popupTime =
                this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration + this.magicalSound.duration;
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("podium")
                .getChildByName("Puzzle")
                .getComponent(cc.Animation)
                .play("puzzlePositive");
            this.node.getChildByName("bg").getChildByName("glow").active = true;
            this.node
                .getChildByName("bg")
                .getChildByName("glow")
                .getComponent(cc.Animation)
                .play();
            this.playSound(this.magicalSound);
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: "sineInOut" })
                .start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: "sineInOut" })
                .start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name &&
                    this.isDone[i]) {
                    this.node
                        .getChildByName("Options")
                        .children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: "sineInOut" })
                        .start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2]);
                _this.callJockey();
            }, this.magicalSound.duration);
        }
        else if (type == "negative") {
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("podium")
                .getChildByName("Puzzle")
                .getComponent(cc.Animation)
                .play("puzzleNegative");
            this.popupTime =
                this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 1].duration;
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: "sineInOut" })
                .start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: "sineInOut" })
                .start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name &&
                    this.isDone[i]) {
                    this.node
                        .getChildByName("Options")
                        .children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: "sineInOut" })
                        .start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 2]);
            }, 0.5);
        }
        else if (type == "none") {
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
        this.AnswerNode.x = this.convertXPos(cc.winSize.width *
            this.data[globalVariables_1.default.Instance.currentLevel - 1]
                .answerpositions[0].x);
        this.AnswerNode.y = this.convertYPos(cc.winSize.height *
            this.data[globalVariables_1.default.Instance.currentLevel - 1]
                .answerpositions[0].y);
        // this.updateSprites(this.answerObject,this.node.getChildByName("ThirdNode").getChildByName("AnswerNode"));
        this.AnswerNode.getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = this.question;
        // console.log(`QUESTION: `+this.question+`  `+this.AnswerNode.getChildByName(`AnswerNode`).getChildByName(`Question`));
        //this.playSound(this.popSound);
        var _scale = 0.8;
        if (cc.winSize.height < 720) {
            _scale = 0.8;
        }
        cc.tween(this.AnswerNode)
            .to(1, { scale: _scale }, { easing: "sineInOut" })
            .call(function () {
            _this.canTouch = true;
        })
            .start();
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
                    this.createdOptions[i].children[0].getComponent(cc.Label).string =
                        this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray[i]; //(i+1).toString();
                    this.node
                        .getChildByName("Options")
                        .insertChild(this.createdOptions[i], i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale = 0;
                    this.createdOptions[i].opacity = 255;
                    this.createdOptions[i].x = this.convertXPos(cc.winSize.width *
                        this.data[globalVariables_1.default.Instance.currentLevel - 1]
                            .positions[i].x);
                    this.createdOptions[i].y = this.convertXPos(cc.winSize.width *
                        this.data[globalVariables_1.default.Instance.currentLevel - 1]
                            .positions[i].y);
                    this.createdOptions[i].active = true;
                    if (this.SubImage == 0) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i]);
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = 0;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                    }
                    else if (this.SubImage == 1) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite"));
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = -170;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                    }
                    this.optionImages[i],
                        (this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite").width = 550);
                    this.optionImages[i],
                        (this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite").height = 550);
                    cc.tween(this.createdOptions[i])
                        .to(1, {
                        scale: this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray[i],
                    }, { easing: "sineInOut" })
                        .start();
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
            if (this_1.node.getChildByName("Options").children[i].name &&
                !this_1.isDone[i]) {
                cc.tween(this_1.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                    .call(function () {
                    _this.createdOptions[i].destroy();
                })
                    .start();
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
            if (this_2.node.getChildByName("Options").children[i].name &&
                this_2.isDone[i]) {
                cc.tween(this_2.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                    .call(function () {
                    _this.createdOptions[i].destroy();
                })
                    .start();
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
                .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .start();
            this.scheduleOnce(function () {
                // this.AnswerNode.destroy();
            }, 0.5);
        }
    };
    NewClass.prototype.setMultipleAnswerEnvironment = function () {
        this.node
            .getChildByName("ThirdNode")
            .getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = "";
        this.node
            .getChildByName("ThirdNode")
            .getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = this.question;
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
        optionsNode
            .getChildByName((this.answers[0] + 1).toString())
            .getChildByName("right").active = true;
        cc.tween(optionsNode
            .getChildByName((this.answers[0] + 1).toString())
            .getChildByName("right"))
            .to(0.15, { opacity: 0 })
            .to(0.15, { opacity: 255 })
            .to(0.15, { opacity: 0 })
            .to(0.15, { opacity: 255 })
            .start();
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
        node1
            .getChildByName("image")
            .getChildByName("subSprite")
            .getComponent(cc.Sprite)
            .setMaterial(0, this.greyMat);
        node1.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.tween(node1)
            .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x - 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x - 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x }, { easing: "sineInOut" })
            .start();
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
                            _this.node
                                .getChildByName("bg")
                                .getChildByName("glow")
                                .getComponent(cc.Animation)
                                .stop();
                            _this.node
                                .getChildByName("bg")
                                .getChildByName("glow").active = false;
                            _this.scheduleOnce(function () {
                                // this.canTouch = true;
                                _this.isWrong = false;
                                globalVariables_1.default.Instance.answerArray =
                                    _this.answerValues;
                                console.log("levelComplete--" +
                                    globalVariables_1.default.Instance.currentLevel);
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
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal").scale = 1;
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal")
                    .setPosition(node1.x, node1.y);
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal")
                    .getComponent(cc.Animation)
                    .play();
                this.scheduleOnce(function () {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    _this.node
                        .getChildByName("Options")
                        .getChildByName("Animal")
                        .setPosition(-500, -500);
                }, 1);
                //extra code
                // if(node1.getChildByName("tick").active){
                //     this.updateSprites("/whiteTick",node1.getChildByName("tick"));
                // }
                cc.tween(this.node.getChildByName("Options").getChildByName("Animal"))
                    .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                    .to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "destroy": {
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: "sineInOut" })
                    .to(0.9, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_right": {
                cc.tween(node1)
                    .to(0.9, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.9, { x: this.viewPortWidth + 100 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_left": {
                cc.tween(node1)
                    .to(0.2, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.2, { x: -100 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_top": {
                cc.tween(node1)
                    .to(2, { y: this.viewPortHeight + 100 }, { easing: "sineInOut" })
                    .start();
                cc.tween(node1)
                    .repeatForever(cc
                    .tween()
                    .to(0.2, { x: node1.x + 30 }, { easing: "sineInOut" })
                    .to(0.2, { x: node1.x }, { easing: "sineInOut" }))
                    .start();
                break;
            }
            case "movement_bottom": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 4) {
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                        .to(0.5, { x: -280 }, { easing: "sineInOut" })
                        .start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: "sineInOut" })
                    .to(0.5, { y: node1.y - 50 }, { easing: "sineInOut" })
                    .start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: "sineInOut" })
                    .start(); //bounceIn
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
                var outlineScale = node1.scale + (node1.scale * 30) / 100;
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
                    .to(0.3, { scale: outlineScale + 0.1 }, { easing: "sineInOut" })
                    .to(0.3, { scale: outlineScale }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "frameChange": {
                //node1.getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                cc.tween(node1)
                    .to(0.3, { scale: node1.scale + 0.1 }, { easing: "sineInOut" })
                    .to(0.3, { scale: node1.scale }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "shake": {
                var tween1_1 = cc
                    .tween(node1)
                    .repeatForever(cc
                    .tween()
                    .to(0.1, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" }))
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
                        .to(1, { x: node1.x - 325 }, { easing: "sineInOut" })
                        .start();
                }
                else if (node1.name == "1") {
                    cc.tween(node1)
                        .to(1, { x: node1.x + 325 }, { easing: "sineInOut" })
                        .start();
                }
                break;
            }
            default: {
                //statements;
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: "sineInOut" })
                    .to(0.9, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
        }
    };
    NewClass.prototype.destroyOtherOptions = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name &&
                !this.isDone[i]) {
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
            }
        }
    };
    NewClass.prototype.update = function (dt) { };
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
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .play("negativeReaction1");
        }
        else {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .play("negativeReaction2");
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .pause("negativeReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            cc.tween(this.node.getChildByName("Jockey"))
                .to(0.3, { x: 475 })
                .start();
            this.scheduleOnce(function () {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(cc.Animation)
                    .play("negativeReaction2");
            }, 0.4);
        }
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            _this.node.getComponent(cc.AudioSource).play();
        }, 0.9);
    };
    NewClass.prototype.increaseprogress = function () {
        var _this = this;
        globalVariables_1.default.Instance.fillRange =
            globalVariables_1.default.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill"))
            .to(0.5, { width: globalVariables_1.default.Instance.fillRange })
            .start();
        this.scheduleOnce(function () {
            _this.ShowStar();
        }, 0.5);
    };
    NewClass.prototype.ShowStar = function () {
        if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width ==
            (394 * 1) / this.totalLevels) {
            console.log("starsEarned--1");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width ==
            (394 * Math.ceil(this.totalLevels / 2)) / this.totalLevels) {
            console.log("starsEarned--2");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star2").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star2").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star3").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star3").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star2"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star3"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width == 394) {
            console.log("starsEarned--3");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star4").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star5").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star6").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star4").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star5").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star6").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star4"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star5"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star6"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
    };
    NewClass.prototype.setProgressBar = function () {
        var progressBar = this.node
            .getChildByName("ThirdNode")
            .getChildByName("progressBar");
        // console.log("answerValues : ", this.answerValues)
        for (var i = 0; i < this.totalLevels; i++) {
            if (this.answerValues[i] == true) {
                progressBar.children[i].getChildByName("unattemptedQ").active =
                    false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
            }
            else {
                if (globalVariables_1.default.Instance.currentLevel == i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        true;
                }
                else if (globalVariables_1.default.Instance.currentLevel > i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        true;
                }
                else if (globalVariables_1.default.Instance.currentLevel < i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        false;
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
                if (parseInt(this.node.getChildByName("Options").children[i].name) -
                    1 ==
                    this.answers[j]) {
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
        var jockeyNode = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
        var options2 = this.node.getChildByName("Options2");
        if (num == 0) {
            // console.log(`GOOD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            jockeyNode.getComponent(cc.Animation).on("finished", function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            }, this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", function () {
                    jockeyNode
                        .getComponent(cc.Animation)
                        .play("puzzleIdle");
                }, _this);
                _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
            }, jockeyNode.getComponent(cc.Animation).getClips()[1].duration + this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
        else {
            // console.log(`BAD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            jockeyNode.getComponent(cc.Animation).on("finished", function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            }, this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", function () {
                    jockeyNode
                        .getComponent(cc.Animation)
                        .play("puzzleIdle");
                }, _this);
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
        var jockey = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
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
            var particles = cc.instantiate(new cc.Node());
            var trail = cc.instantiate(new cc.Node());
            particles.parent = _node;
            trail.parent = particles;
            particles.x = -450 + 640 + 20;
            particles.y = -280 + 360 + 70;
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
                    cc.tween(particles)
                        .to(0.5, {
                        width: rngParticlesSize,
                        height: rngParticlesSize,
                    }, { easing: "backOut" })
                        .start();
                }, 0.5);
                cc.tween(particles)
                    .bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, (3 * cc.winSize.width) / 4), _this.getRandomNumber(cc.winSize.height / 4, (3 * cc.winSize.height) / 4)))
                    .call(function () {
                    var _loop_4 = function (j) {
                        var bullets = cc.instantiate(new cc.Node());
                        var bTrails = cc.instantiate(new cc.Node());
                        bullets.addComponent(cc.Sprite).spriteFrame =
                            _this.dustImg;
                        bTrails.parent = bullets;
                        bTrails.addComponent(cc.MotionStreak).preview;
                        bTrails.getComponent(cc.MotionStreak).texture =
                            _this.dustTrailImg;
                        bTrails.getComponent(cc.MotionStreak).enabled =
                            true;
                        bTrails.getComponent(cc.MotionStreak).minSeg =
                            _this.getRandomFloat(0.1, 0.5);
                        bTrails.getComponent(cc.MotionStreak).stroke =
                            _this.getRandomNumber(10, 25);
                        bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        bTrails.getComponent(cc.MotionStreak).color =
                            new cc.Color(255, 255, 255);
                        bTrails.getComponent(cc.MotionStreak).enabled =
                            true;
                        bTrails.getComponent(cc.MotionStreak).fastMode =
                            true;
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
                        cc.tween(bullets)
                            .to(0.25, { width: rngSize, height: rngSize }, { easing: "backOut" })
                            .start();
                        cc.tween(bullets)
                            .to(0.5, {
                            x: _this.getRandomNumber(bullets.x -
                                _this.getRandomNumber(100, 500), bullets.x +
                                _this.getRandomNumber(100, 500)),
                            y: _this.getRandomNumber(bullets.y -
                                _this.getRandomNumber(100, 500), bullets.y +
                                _this.getRandomNumber(100, 500)),
                        })
                            .start();
                        cc.tween(bullets)
                            .to(0.1, { opacity: 200 })
                            .to(0.1, { opacity: 255 })
                            .to(0.1, { opacity: 200 })
                            .to(0.1, { opacity: 255 })
                            .to(0.1, { opacity: 200, scale: 0 })
                            .call(function () {
                            bullets.destroy();
                            particles.destroy();
                        })
                            .start();
                    };
                    for (var j = 0; j < num2; j++) {
                        _loop_4(j);
                    }
                })
                    .start();
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGdhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUFnQztBQUNoQyxxREFBZ0Q7QUFHMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzMURDO1FBOTBEQSxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsMkJBQXFCLEdBQW1CLEVBQUUsQ0FBQztRQUczQywyQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBRzNDLHVCQUFpQixHQUFtQixFQUFFLENBQUM7UUFTdkMsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBU2xDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLENBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsUUFBUSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLG9CQUFjLEdBQW1CLEVBQUUsQ0FBQztR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QUFDO2dEQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDRTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBekNoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBczFENUI7SUFBRCxlQUFDO0NBdDFERCxBQXMxREMsQ0F0MURxQyxFQUFFLENBQUMsU0FBUyxHQXMxRGpEO2tCQXQxRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBJRGF0YSB9IGZyb20gXCIuL0lEYXRhXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljcyB9IGZyb20gXCIuL2dhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0bWFnaWNhbFNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRxdWVzdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHBvc2l0aXZlRmVlZGJhY2tTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRuZWdhdGl2ZUZlZWRiYWNrU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0UmVpbmZvcmVtZW50U291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cmlnaHRTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHdyb25nU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRvcHRpb25Tb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuXHRkZWZhdWx0TWF0OiBjYy5NYXRlcmlhbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG5cdGdyZXlNYXQ6IGNjLk1hdGVyaWFsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0ZHVzdEltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuVGV4dHVyZTJEKVxyXG5cdGR1c3RUcmFpbEltZzogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwYXJ0aWNsZXNTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBkYXRhOiBJRGF0YVtdID0gW25ldyBJRGF0YSgpXTtcclxuXHRwcml2YXRlIGFuc3dlck9iamVjdDogc3RyaW5nO1xyXG5cdHByaXZhdGUgcXVlc3Rpb246IHN0cmluZyA9IFwiXCI7XHJcblx0cHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB0ZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XHJcblx0cHJpdmF0ZSBtYXhPcHRpb25zOiBudW1iZXIgPSA3O1xyXG5cdHByaXZhdGUgU3ViSW1hZ2U6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3cm9uZ0Fuc3dlckxpbWl0OiBudW1iZXIgPSA3O1xyXG5cdHByaXZhdGUgYW5zd2VyczogbnVtYmVyW10gPSBbXTtcclxuXHRwcml2YXRlIHBvc2l0aW9uVHlwZTogc3RyaW5nID0gXCJjdXN0b21cIjtcclxuXHRwcml2YXRlIGZlZWRiYWNrdHlwZTogc3RyaW5nW10gPSBbXTtcclxuXHRwcml2YXRlIHNjYWxlQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG5cdHByaXZhdGUgb3B0aW9uSW1hZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgcG9zaXRpdmVBdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblx0cHJpdmF0ZSBuZWdhdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblx0cHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG5cdHByaXZhdGUgaXNDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgaXNEb25lOiBib29sZWFuW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVkT3B0aW9uczogY2MuTm9kZVtdID0gW107XHJcblx0cHJpdmF0ZSBBbnN3ZXJOb2RlOiBjYy5Ob2RlO1xyXG5cclxuXHRwcml2YXRlIG9mZnNldFg6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB0b3RhbExldmVsczogbnVtYmVyID0gNTtcclxuXHRwcml2YXRlIGFuc3dlclZhbHVlczogYm9vbGVhbltdID0gW107XHJcblxyXG5cdHByaXZhdGUgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gNzIwO1xyXG5cdHByaXZhdGUgdmlld1BvcnRIZWlnaHQ6IG51bWJlciA9IDEyODA7XHJcblxyXG5cdHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgaXNDaGFyMTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHJpdmF0ZSBpc0ZpcnN0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGlzV3Jvbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBkZWZhdWx0VGltZTogbnVtYmVyID0gMTU7XHJcblxyXG5cdHByaXZhdGUgdmFsdWU6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSB0b3VjaERvbmU6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdC8vcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvczpjYy5BdWRpb0NsaXBbXT1bXTtcclxuXHQvL3ByaXZhdGUgb3B0aW9uQW5pbWF0aW9uczpzdHJpbmdbXT1bXTtcclxuXHQvL3ByaXZhdGUgb3B0aW9uQXVkaW9zOnN0cmluZ1tdPVtdO1xyXG5cclxuXHQvL3ByaXZhdGUgZ2EgPSByZXF1aXJlKFwiZ2FcIik7XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG5cdFx0X251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcblx0XHRyZXR1cm4gX251bWJlcjtcclxuXHR9XHJcblxyXG5cdFVwZGF0ZWRhdGEoKSB7XHJcblx0XHR0aGlzLkxvYWRRdWVzdGlvbigpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwidG90YWwgb3B0aW9ucy9hbnN3ZXJzID0gXCIsdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0ucG9zaXRpb25zKTtcclxuXHRcdH0sIDAuMik7XHJcblx0fVxyXG5cclxuXHRMb2FkUXVlc3Rpb24oKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKGdhRGF0YSk7XHJcblx0XHRjYy5yZXNvdXJjZXMubG9hZChcInN0b3J5Qm9hcmRcIiwgT2JqZWN0LCAoX2Vycm9yLCBfanNvbkZpbGUpID0+IHtcclxuXHRcdFx0aWYgKF9lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IF9qc29uRGF0YTogb2JqZWN0ID0gX2pzb25GaWxlW1wianNvblwiXTtcclxuXHRcdFx0dGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfanNvbkRhdGFbXCJkYXRhXCJdKSk7XHJcblx0XHRcdC8vIHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bG9hZERhdGEoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG5cdFx0XHRjYy5yZXNvdXJjZXMubG9hZCh0aGlzLmRhdGFbaV0uYW5zd2VyT2JqZWN0KTtcclxuXHRcdFx0Y2MucmVzb3VyY2VzLmxvYWQodGhpcy5kYXRhW2ldLm9wdGlvbkFuaW1hdGlvbkltYWdlcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIFBsYXlRdWVzdGlvbihfZGF0YTogSURhdGEpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fVxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyB0aGlzLmZldGNoRGF0YSgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vdGhpcy5hbnN3ZXJWYWx1ZXMgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyVmFsdWVzO1xyXG5cdFx0dGhpcy5VcGRhdGVkYXRhKCk7XHJcblxyXG5cdFx0bGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFB1enpsZWApO1xyXG5cdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGB0aXRsZUFuaW1gKTtcclxuXHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXHJcblx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHQvLyBqb2NrZXlOb2RlLndpZHRoID0gMjUwO1xyXG5cdFx0XHRcdC8vIGpvY2tleU5vZGUuaGVpZ2h0ID0gMjUwO1xyXG5cdFx0XHRcdHRoaXMuam9ja2V5UmVwb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpc1xyXG5cdFx0KTtcclxuXHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5jYWxsU3RhcnRHYW1lKCk7XHJcblx0XHR9LCAyKTtcclxuXHR9XHJcblxyXG5cdGNhbGxTdGFydEdhbWUoKSB7XHJcblx0XHR0aGlzLnNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwic3RhcnQgOiBcIik7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxMZXZlbHM7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFuc3dlclZhbHVlc1tpXSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG5cdFx0Ly9nYS5uYW1lO1xyXG5cclxuXHRcdC8vIGdhKCdldmVudCcsIFwiVGFwXCIsIHtcclxuXHRcdC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkxpbmtcIixcclxuXHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkNyZWF0ZSBHYW1lXCIsXHJcblx0XHQvLyAgICAgJ3ZhbHVlJzogPDE+XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG5cdFx0Ly8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuXHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIFN0YXJ0ZWRcIixcclxuXHRcdC8vICAgICAndmFsdWUnOiAxXHJcblx0XHQvLyB9KTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuXHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISFcIik7XHJcblx0XHRcdC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJsb2FkZGRkZGRkZGRAQEBAQEBAQEBAQFwiLHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSkpO1xyXG5cdFx0XHQvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgocGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSsxKS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuZmV0Y2hEYXRhKCk7XHJcblx0XHR9LCAwLjIpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG5cdFx0XHR0aGlzLmNyZWF0ZUFuc3dlck9iamVjdCgpO1xyXG5cdFx0XHQvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuXHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHQvL3RoaXMuQW5zd2VyTm9kZS54ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLng7XHJcblx0XHRcdFx0Ly90aGlzLkFuc3dlck5vZGUueSA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmFuc3dlcnBvc2l0aW9uc1swXS55O1xyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHQvLyBjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcblx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeTogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuXHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jYW5Ub3VjaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgMC40KTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9LCAwLjMpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMucGxheVNvdW5kKFxyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25BdWRpb1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuXHRcdFx0KTtcclxuXHRcdFx0Ly99LCAwLjYpO1xyXG5cdFx0fSwgMC43KTtcclxuXHR9XHJcblxyXG5cdGNhbGxKb2NrZXkoKSB7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikpXHJcblx0XHRcdC50bygwLjUsIHsgeDogNDc1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYGRhbmNlYCwgZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYHRodW1ic191cGAsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAxNjAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDJdLmR1cmF0aW9uKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRmZXRjaERhdGEoKSB7XHJcblx0XHR0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCA9IDA7XHJcblx0XHR0aGlzLm1heE9wdGlvbnMgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnRvdGFsT3B0aW9ucztcclxuXHRcdHRoaXMuU3ViSW1hZ2UgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLlN1YkltYWdlO1xyXG5cdFx0dGhpcy53cm9uZ0Fuc3dlckxpbWl0ID1cclxuXHRcdFx0dGhpcy5kYXRhW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0ud3JvbmdBbnN3ZXJzTGltaXQ7XHJcblx0XHR0aGlzLmFuc3dlcnMgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlcnM7XHJcblx0XHR0aGlzLnNjYWxlQXJyYXkgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnNjYWxlQXJyYXk7XHJcblx0XHR0aGlzLnBvc2l0aW9uVHlwZSA9XHJcblx0XHRcdHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucG9zaXRpb25UeXBlO1xyXG5cdFx0dGhpcy5mZWVkYmFja3R5cGUgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmZlZWRiYWNrdHlwZTtcclxuXHRcdHRoaXMudG90YWxBbnN3ZXJzID0gdGhpcy5hbnN3ZXJzLmxlbmd0aDtcclxuXHRcdHRoaXMucXVlc3Rpb24gPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uO1xyXG5cdFx0dGhpcy5xdWVzdGlvblNvdW5kID1cclxuXHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvblNvdW5kO1xyXG5cdFx0dGhpcy50ZXh0QXJyYXkgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnRleHRBcnJheTtcclxuXHRcdHRoaXMuYW5zd2VyT2JqZWN0ID1cclxuXHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5hbnN3ZXJPYmplY3Q7XHJcblx0XHR0aGlzLm9wdGlvbkltYWdlcyA9XHJcblx0XHRcdHRoaXMuZGF0YVtcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRdLm9wdGlvbkFuaW1hdGlvbkltYWdlcztcclxuXHR9XHJcblxyXG5cdENoZWNrRm9ySXNEb25lKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSA9PVxyXG5cdFx0XHRcdF9ub2RlLm5hbWVcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRUb3VjaFN0YXJ0KF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJJbnNpZGUgdG91Y2hzdGFydCA6IFwiKVxyXG5cdFx0aWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG5cdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdH1cclxuXHRcdC8vY29uc29sZS5sb2coXCJ0b3VjaCBzdGFydCA6IFwiKTtcclxuXHRcdGxldCBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdF9ub2RlLm5hbWUgPT1cclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdHRoaXMuaXNEb25lW2ldXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlzU3RvcCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKF9ub2RlLm5hbWUgPT0gdGhpcy50b3VjaERvbmVbaV0pIHtcclxuXHRcdFx0XHRpc1N0b3AgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc1N0b3ApIHtcclxuXHRcdFx0bGV0IGlzQ29ycmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwYXJzZUludChfbm9kZS5uYW1lKSAtIDEgPT0gdGhpcy5hbnN3ZXJzW2ldKSB7XHJcblx0XHRcdFx0XHRpc0NvcnJlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXNDb3JyZWN0KSB7XHJcblx0XHRcdFx0Ly8gaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09MSl7IC8vIGdhbWUgc3BlY2lmaWMgY29uZGl0aW9uXHJcblx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHRcdC8vICAgICBpZihfbm9kZS5uYW1lPT1cIjFcIil7XHJcblx0XHRcdFx0Ly8gICAgICAgICB0aGlzLnNjYWxlVHdlZW4uc3RvcCgpO1xyXG5cdFx0XHRcdC8vICAgICB9XHJcblx0XHRcdFx0Ly8gICAgIGVsc2UgaWYoX25vZGUubmFtZT09XCIyXCIpe1xyXG5cdFx0XHRcdC8vICAgICAgICAgdGhpcy5zY2FsZVR3ZWVuMS5zdG9wKCk7XHJcblx0XHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0bGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYGF1ZGlvTm9kZWApXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHRcdFx0XHRhdWRpb1NvdXJjZS5jbGlwID1cclxuXHRcdFx0XHRcdHRoaXMucG9zaXRpdmVGZWVkYmFja1NvdW5kW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0XHRhdWRpb1NvdXJjZS5wbGF5KCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHRcdFx0XHQvLyAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuUmVpbmZvcmVtZW50U291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0yXTtcclxuXHRcdFx0XHQvLyAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG5cdFx0XHRcdC8vIH0sdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDA7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNvcnJlY3QgaXMgY2xpY2tlZCA9IFwiLF9ub2RlLm5hbWUpO1xyXG5cdFx0XHRcdHRoaXMuY2FsbEpvY2tleUFuaW0oMCk7XHJcblxyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHRcdC8vICAgICAudG8oMC4yLCB7IHg6IF9ub2RlLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcblx0XHRcdFx0Ly8gICAgIC50bygwLjIsIHsgeDogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjYy50d2Vlbihfbm9kZSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuMiwgeyB5OiBfbm9kZS55IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG5cdFx0XHRcdC8vICAgICAudG8oMC4yLCB7IHk6IDY0MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdC8vdGhpcy5wbGF5QXVkaW8oXCIvc291bmRzL0NvcnJlY3RBbnN3ZXJcIik7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnJpZ2h0U291bmQpO1xyXG5cdFx0XHRcdFx0Ly90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcblx0XHRcdFx0XHQvL30sIDAuNSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmZlZWRiYWNrdHlwZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9XHJcblx0XHRcdFx0XHRcdHRoaXMucG9zaXRpdmVTb3VuZDtcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzBdKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMV0pO1xyXG5cdFx0XHRcdFx0fSwgMC44KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aCA9PSAzKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID1cclxuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcblx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsyXSk7XHJcblx0XHRcdFx0XHR9LCAwLjcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5DaGVja0ZvcklzRG9uZShfbm9kZSk7XHJcblx0XHRcdFx0dGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgKz0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShgYXVkaW9Ob2RlYClcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG5cdFx0XHRcdGF1ZGlvU291cmNlLmNsaXAgPVxyXG5cdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdGF1ZGlvU291cmNlLnBsYXkoKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwid3JvbmcgaXMgY2xpY2tlZCA9IFwiLHRoaXMuaXNEb25lKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFwid3JvbmdBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcblx0XHRcdFx0dGhpcy5jYWxsSm9ja2V5QW5pbSgxKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9pcyBsZXZlbGVuZFxyXG5cdFx0XHRsZXQgbGV2ZWxlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHQvLyAgICAgaWYoIXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5bdGhpcy5hbnN3ZXJzW2ldXS5hY3RpdmVJbkhpZXJhcmNoeSl7XHJcblx0XHRcdC8vICAgICAgICAgbGV2ZWxlbmQ9dHJ1ZTtcclxuXHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0Ly8gICAgIGVsc2V7XHJcblx0XHRcdC8vICAgICAgICAgbGV2ZWxlbmQ9ZmFsc2U7XHJcblx0XHRcdC8vICAgICAgICAgYnJlYWs7XHJcblx0XHRcdC8vICAgICB9XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdC8vZm9yIGxldmVsIG9uZSBzcGVjaWZpYyBjYXNlXHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudCArPSAxO1xyXG5cdFx0XHRcdHRoaXMuYW5zd2VyVmFsdWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSA9XHJcblx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdGxldmVsZW5kID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkxldmVsIENvbXBsZXRlZC4uLiEhISEhISEhIVwiKTtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHQvLyBndGFnKCdldmVudCcsIFwiTGV2ZWxDb21wbGV0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG5cdFx0XHRcdFx0Ly8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuXHRcdFx0XHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIENvbXBsZXRlZFwiLFxyXG5cdFx0XHRcdFx0Ly8gICAgICd2YWx1ZSc6IDFcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLi4uLi4uLi4uISEhISEhISEhISEhISEhISBnYW1lIGZpbmlzaGVkXCIpO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdC8vIH0sIDMpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKFwicG9zaXRpdmVcIik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveUFuc3dlcnMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3RvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmlzV3JvbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmFuc3dlckFycmF5ID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlclZhbHVlcztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJsZXZlbENvbXBsZXRlLS1cIiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMik7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdFx0XHRcdFx0fSwgMik7XHJcblx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdC8vdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbigpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0XHRcdFx0Ly8gZ3RhZygnZXZlbnQnLCBcIkxldmVsQ29tcGxldGVkX1wiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuXHRcdFx0XHRcdC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcblx0XHRcdFx0XHQvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBDb21wbGV0ZWRcIixcclxuXHRcdFx0XHRcdC8vICAgICAndmFsdWUnOiAxXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCArPSAxO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFNjcmVlbihcInBvc2l0aXZlXCIpO1xyXG5cdFx0XHRcdFx0fSwgMyk7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY3VycmVudExldmVsIDogXCIsZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMuY2FsbFBvc2l0aXZlUmVhY3Rpb24oKTtcclxuXHRcdFx0XHRcdC8vIH0sMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwbGF5U291bmQobmFtZTogY2MuQXVkaW9DbGlwKSB7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gbmFtZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHR9XHJcblxyXG5cdHBsYXlRdWVzdGlvblNvdW5kKG5hbWU6IGNjLkF1ZGlvQ2xpcCkge1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9XHJcblx0XHRcdHRoaXMucXVlc3Rpb25BdWRpb1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRzZXRTY3JlZW4odHlwZTE6IHN0cmluZykge1xyXG5cdFx0dGhpcy50b3VjaERvbmUgPSBbXTtcclxuXHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcImxldmVsQ29tcGxldGUtLVwiICsgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxKVxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0Ly8gZ3RhZygnZXZlbnQnLCBcIkxldmVsU3RhcnRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcblx0XHQvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJJbWFnZVwiLFxyXG5cdFx0Ly8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgU3RhcnRlZFwiLFxyXG5cdFx0Ly8gICAgICd2YWx1ZSc6IDFcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuXHRcdFx0Ly90aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcblx0XHRcdHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuXHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKHR5cGUxKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiAtMTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcblx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHQuc3RvcCgpO1xyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1dyb25nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmZldGNoRGF0YSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVBbnN3ZXJPYmplY3QoKTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZU9wdGlvbk9iamVjdCh0aGlzLm1heE9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB5OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5vbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmNhblRvdWNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBIZXJlIHRoaXMgcmVmZXJzIHRvIGNvbXBvbmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheVNvdW5kKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uQXVkaW9bXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5wb3BTb3VuZC5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHRcdH0sIDAuMSk7XHJcblx0XHRcdFx0XHR9LCAwLjQpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdH0sIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb3B1cFRpbWUgPSAwO1xyXG5cclxuXHRzZXRSZWluZm9yc2VtZW50U2NyZWVuKHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKHR5cGUgPT0gXCJwb3NpdGl2ZVwiKSB7XHJcblx0XHRcdHRoaXMucG9wdXBUaW1lID1cclxuXHRcdFx0XHR0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAyXHJcblx0XHRcdFx0XS5kdXJhdGlvbiArIHRoaXMubWFnaWNhbFNvdW5kLmR1cmF0aW9uO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtNDAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlB1enpsZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KFwicHV6emxlUG9zaXRpdmVcIik7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheSgpO1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5U291bmQodGhpcy5tYWdpY2FsU291bmQpO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiZcclxuXHRcdFx0XHRcdHRoaXMuaXNEb25lW2ldXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgeDogMjUwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB5OiAtMjAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5U291bmQoXHJcblx0XHRcdFx0XHR0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDJcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuY2FsbEpvY2tleSgpO1xyXG5cdFx0XHR9LCB0aGlzLm1hZ2ljYWxTb3VuZC5kdXJhdGlvbik7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gXCJuZWdhdGl2ZVwiKSB7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHg6IC00MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUHV6emxlXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoXCJwdXp6bGVOZWdhdGl2ZVwiKTtcclxuXHRcdFx0dGhpcy5wb3B1cFRpbWUgPVxyXG5cdFx0XHRcdHRoaXMuUmVpbmZvcmVtZW50U291bmRbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uZHVyYXRpb247XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG5cdFx0XHRcdC50bygwLjUsIHsgeTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpXHJcblx0XHRcdFx0XHRcdC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAyNTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHk6IC0yMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXlTb3VuZChcclxuXHRcdFx0XHRcdHRoaXMuUmVpbmZvcmVtZW50U291bmRbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAyXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSwgMC41KTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSBcIm5vbmVcIikge1xyXG5cdFx0XHR0aGlzLnBvcHVwVGltZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbnN3ZXJPYmplY3QoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhgd2luU2l6ZTogYCsoY2Mud2luU2l6ZS53aWR0aC9jYy53aW5TaXplLmhlaWdodCkpO1xyXG5cdFx0Ly9sZXQgYW5zd2VyTm9kZSA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlLm9wYWNpdHkgPSAyNTU7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUuc2NhbGUgPSAwO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlLnggPSB0aGlzLmNvbnZlcnRYUG9zKFxyXG5cdFx0XHRjYy53aW5TaXplLndpZHRoICpcclxuXHRcdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblx0XHRcdFx0XHQuYW5zd2VycG9zaXRpb25zWzBdLnhcclxuXHRcdCk7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUueSA9IHRoaXMuY29udmVydFlQb3MoXHJcblx0XHRcdGNjLndpblNpemUuaGVpZ2h0ICpcclxuXHRcdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblx0XHRcdFx0XHQuYW5zd2VycG9zaXRpb25zWzBdLnlcclxuXHRcdCk7XHJcblx0XHQvLyB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5hbnN3ZXJPYmplY3QsdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKSk7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUuZ2V0Q2hpbGRCeU5hbWUoYEFuc3dlck5vZGVgKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYClcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbjtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBRVUVTVElPTjogYCt0aGlzLnF1ZXN0aW9uK2AgIGArdGhpcy5BbnN3ZXJOb2RlLmdldENoaWxkQnlOYW1lKGBBbnN3ZXJOb2RlYCkuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYCkpO1xyXG5cdFx0Ly90aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdGxldCBfc2NhbGUgPSAwLjg7XHJcblx0XHRpZiAoY2Mud2luU2l6ZS5oZWlnaHQgPCA3MjApIHtcclxuXHRcdFx0X3NjYWxlID0gMC44O1xyXG5cdFx0fVxyXG5cdFx0Y2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHQudG8oMSwgeyBzY2FsZTogX3NjYWxlIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVPcHRpb25PYmplY3QobnVtT2ZPcHRpb25zKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbk9CSkVDVCA6OlwiLG51bU9mT3B0aW9ucyk7XHJcblx0XHRzd2l0Y2ggKHRoaXMucG9zaXRpb25UeXBlKSB7XHJcblx0XHRcdGNhc2UgXCJjdXN0b21cIjoge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0gPSBjYy5pbnN0YW50aWF0ZShcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgb3B0aW9ucyA6Ojo6OlwiLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5vcGFjaXR5ID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRjYy5MYWJlbFxyXG5cdFx0XHRcdFx0KS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS50ZXh0QXJyYXlbaV07IC8vKGkrMSkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpXHJcblx0XHRcdFx0XHRcdC5pbnNlcnRDaGlsZCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLCBpKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLm9mZnNldFggPSAzMDtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uc2NhbGUgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gdGhpcy5jb252ZXJ0WFBvcyhcclxuXHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS53aWR0aCAqXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG5cdFx0XHRcdFx0XHRcdFx0LnBvc2l0aW9uc1tpXS54XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55ID0gdGhpcy5jb252ZXJ0WFBvcyhcclxuXHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS53aWR0aCAqXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG5cdFx0XHRcdFx0XHRcdFx0LnBvc2l0aW9uc1tpXS55XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuU3ViSW1hZ2UgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNwcml0ZXMoXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHQvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAwO1xyXG5cdFx0XHRcdFx0XHQvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA5MDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5TdWJJbWFnZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlU3ByaXRlcyhcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9wdGlvbkltYWdlc1tpXSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikueSA9IC0xNzA7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDcwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikud2lkdGggPSA1NTApO1xyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuaGVpZ2h0ID0gNTUwKTtcclxuXHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogdGhpcy5kYXRhW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdFx0XS5zY2FsZUFycmF5W2ldLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Ly8gaWYodGhpcy5hbnN3ZXJzLmxlbmd0aDw9MSl7XHJcblx0XHRcdFx0XHQvLyAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyBlbHNle1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdFx0Ly90aGlzLlVwZGF0ZUFuaW1hdGlvbnModGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pO1xyXG5cdFx0XHRcdFx0Ly90aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXRoaXMub3B0aW9uSW1hZ2VzW2ldO1xyXG5cclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJQb3NpdGlvbnMgOiBcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjcmVhdGVkIG9wdGlvbnMgOiAqKioqKioqKipcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdC8vc3RhdGVtZW50cztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveU9wdGlvbnMoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4T3B0aW9uczsgaSsrKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiZcclxuXHRcdFx0XHQhdGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuXHRcdC8vICAgICAgICAgaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lJiYoIXRoaXMuaXNEb25lW2ldKSl7XHJcblx0XHQvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuXHRcdC8vICAgICAgICAgfVxyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95UmlnaHRPcHRpb25zKCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmXHJcblx0XHRcdFx0dGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuXHRcdC8vICAgICAgICAgaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lJiYodGhpcy5pc0RvbmVbaV0pKXtcclxuXHRcdC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZGVzdHJveSgpO1xyXG5cdFx0Ly8gICAgICAgICB9XHJcblx0XHQvLyAgICAgfVxyXG5cdFx0Ly8gfSwgMC41KTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lBbnN3ZXJzKCkge1xyXG5cdFx0aWYgKHRoaXMuQW5zd2VyTm9kZSkge1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHRoaXMuQW5zd2VyTm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdH0sIDAuNSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCkge1xyXG5cdFx0dGhpcy5ub2RlXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpXHJcblx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcblx0XHR0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkFuc3dlck5vZGVcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIilcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbjtcclxuXHRcdC8vIGlmKHRoaXMuU3ViSW1hZ2U9PTEpe1xyXG5cdFx0Ly8gICAgIHJldHVybjtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2V7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMucXVlc3Rpb247XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRjYWxsTmVnYXRpdmVGZWVkYmFjayhub2RlMTogY2MuTm9kZSkge1xyXG5cdFx0dGhpcy50b3VjaERvbmUucHVzaChub2RlMS5uYW1lKTtcclxuXHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCArPSAxO1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0Ly9sZXQgdHdlZW4xID0gIGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0Ly9ub2RlMS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMzIsIDMwLCA0Myk7XHJcblx0XHRsZXQgb3B0aW9uc05vZGUgPSBub2RlMS5wYXJlbnQ7XHJcblx0XHQvLyBvcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0Ly8gICAgIGlmKGVsZW1lbnQubmFtZSA9PSB0aGlzLmFuc3dlcnNbMF0udG9TdHJpbmcoKSl7XHJcblx0XHQvLyAgICAgICAgIGNvbnNvbGUubG9nKGBSSUdIVGApO1xyXG5cdFx0Ly8gICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vICAgICAgICAgY2MudHdlZW4oZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpKS50bygwLjEse29wYWNpdHk6MH0pXHJcblx0XHQvLyAgICAgICAgIC50bygwLjEse29wYWNpdHk6MjU1fSkudG8oMC4xLHtvcGFjaXR5OjB9KS50bygwLjEse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuXHRcdC8vICAgICB9XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBuam5ubm4gYCsodGhpcy5hbnN3ZXJzWzBdKzEpO1xyXG5cdFx0b3B0aW9uc05vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKCh0aGlzLmFuc3dlcnNbMF0gKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2MudHdlZW4oXHJcblx0XHRcdG9wdGlvbnNOb2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKCh0aGlzLmFuc3dlcnNbMF0gKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpXHJcblx0XHQpXHJcblx0XHRcdC50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSlcclxuXHRcdFx0LnRvKDAuMTUsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdC50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSlcclxuXHRcdFx0LnRvKDAuMTUsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Ly8gaWYobm9kZTEubmFtZSA9PSBgMWApe1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xNSx7b3BhY2l0eTowfSlcclxuXHRcdC8vICAgICAudG8oMC4xNSx7b3BhY2l0eToyNTV9KS50bygwLjE1LHtvcGFjaXR5OjB9KS50bygwLjE1LHtvcGFjaXR5OjI1NX0pLnN0YXJ0KCk7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNle1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAxYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAxYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xLHtvcGFjaXR5OjB9KVxyXG5cdFx0Ly8gICAgIC50bygwLjEse29wYWNpdHk6MjU1fSkudG8oMC4xLHtvcGFjaXR5OjB9KS50bygwLjEse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuXHRcdC8vIH1cclxuXHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRub2RlMS5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRub2RlMVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIilcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcblx0XHRcdC5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG5cdFx0bm9kZTEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmV5TWF0KTtcclxuXHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggLSAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdC8vY2FsbCBuZWdhdGl2ZSBhdWRpb1xyXG5cclxuXHRcdC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLm5lZ2F0aXZlU291bmQ7XHJcblx0XHQvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHQvL3RoaXMucGxheUF1ZGlvKFwiL3NvdW5kcy9pbmNvcnJlY3RBbnN3ZXJcIik7XHJcblxyXG5cdFx0dGhpcy5wbGF5U291bmQodGhpcy53cm9uZ1NvdW5kKTtcclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgLy90aGlzLnBsYXlTb3VuZCh0aGlzLm5lZ2F0aXZlRmVlZGJhY2tbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXSk7XHJcblx0XHQvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHQvLyB9LCAwLjgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdC8vICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdC8vIH0sIHRoaXMubmVnYXRpdmVGZWVkYmFja1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmR1cmF0aW9uKTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdC8vdHdlZW4xLnN0b3AoKTtcclxuXHRcdFx0aWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSB0aGlzLndyb25nQW5zd2VyTGltaXQpIHtcclxuXHRcdFx0XHR0aGlzLndyb25nQW5zd2VyQ291bnQgPSAwO1xyXG5cdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0XHQvL3RoaXMuY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKTtcclxuXHRcdFx0XHR0aGlzLmhpbGlnaHRMZWZ0QW5zd2VycygpO1xyXG5cdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJzWzBdLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0RvbmVbdGhpcy5hbnN3ZXJzWzBdXSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKFwibmVnYXRpdmVcIik7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcblx0XHRcdFx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95UmlnaHRPcHRpb25zKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0b3AoKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc1dyb25nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlclZhbHVlcztcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxldmVsQ29tcGxldGUtLVwiICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzV3JvbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0UHJvZ3Jlc3NCYXIoKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEb25lW3RoaXMuYW5zd2Vyc1swXV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuXHRcdFx0XHRcdH0sIDMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgMC44KTtcclxuXHR9XHJcblxyXG5cdGNhbGxQb3NpdGl2ZUZlZWRiYWNrKG5vZGUxOiBjYy5Ob2RlLCBmZWVkYmFja05hbWUpIHtcclxuXHRcdHN3aXRjaCAoZmVlZGJhY2tOYW1lKSB7XHJcblx0XHRcdGNhc2UgXCJjb25mZXR0aVwiOiB7XHJcblx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24obm9kZTEueCxub2RlMS55KTtcclxuXHRcdFx0XHQvL25vZGUxLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAyNTUsIDApO1xyXG5cdFx0XHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0bm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLnNjYWxlID0gMTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKVxyXG5cdFx0XHRcdFx0LnNldFBvc2l0aW9uKG5vZGUxLngsIG5vZGUxLnkpO1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuZGVzdHJveTtcclxuXHRcdFx0XHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKC01MDAsLTUwMCk7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIilcclxuXHRcdFx0XHRcdFx0LnNldFBvc2l0aW9uKC01MDAsIC01MDApO1xyXG5cdFx0XHRcdH0sIDEpO1xyXG5cclxuXHRcdFx0XHQvL2V4dHJhIGNvZGVcclxuXHRcdFx0XHQvLyBpZihub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKXtcclxuXHRcdFx0XHQvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLG5vZGUxLmdldENoaWxkQnlOYW1lKFwidGlja1wiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIilcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiZGVzdHJveVwiOiB7XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIm1vdmVtZW50X3JpZ2h0XCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHQwLjksXHJcblx0XHRcdFx0XHRcdHsgeDogdGhpcy52aWV3UG9ydFdpZHRoICsgMTAwIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9sZWZ0XCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjIsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuMiwgeyB4OiAtMTAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwibW92ZW1lbnRfdG9wXCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0eyB5OiB0aGlzLnZpZXdQb3J0SGVpZ2h0ICsgMTAwIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0LnJlcGVhdEZvcmV2ZXIoXHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LnR3ZWVuKClcclxuXHRcdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0XHQwLjIsXHJcblx0XHRcdFx0XHRcdFx0XHR7IHg6IG5vZGUxLnggKyAzMCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQudG8oMC4yLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9ib3R0b21cIjoge1xyXG5cdFx0XHRcdC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicGxhdGVcIilcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtMjgwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgeTogbm9kZTEueSArIDEwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB5OiBub2RlMS55IC0gNTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTsgLy9ib3VuY2VJblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9BbmltYXRpb25cIjoge1xyXG5cdFx0XHRcdC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG5cdFx0XHRcdFx0bm9kZTEueCA9IG5vZGUxLnggKyAxMDtcclxuXHRcdFx0XHRcdG5vZGUxLnkgPSBub2RlMS55ICsgNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuXHRcdFx0XHRcdG5vZGUxLnggPSBub2RlMS54ICsgMjA7XHJcblx0XHRcdFx0XHRub2RlMS55ID0gbm9kZTEueSArIDIwO1xyXG5cdFx0XHRcdFx0bm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSAtIDAuMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNSkge1xyXG5cdFx0XHRcdFx0Ly8gbm9kZTEueD1ub2RlMS54KzIwO1xyXG5cdFx0XHRcdFx0Ly8gbm9kZTEueT1ub2RlMS55KzIwO1xyXG5cdFx0XHRcdFx0bm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSArIDAuNDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGFuaW1hdGlvbkNsaXA6IGNjLkFuaW1hdGlvbkNsaXA7IC8vPSB0aGlzLm9wdGlvbkFuaW1hdGlvbnNbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcblx0XHRcdFx0bm9kZTEuYWRkQ29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblx0XHRcdFx0bm9kZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuYWRkQ2xpcChhbmltYXRpb25DbGlwKTtcclxuXHRcdFx0XHRub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbkNsaXAubmFtZSk7XHJcblx0XHRcdFx0Ly9ub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbignZmluaXNoZWQnLCAgdGhpcy5maW5pc2hlZEFuaW0sICAgIHRoaXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9TY2FsZVwiOiB7XHJcblx0XHRcdFx0bGV0IG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlICsgKG5vZGUxLnNjYWxlICogMzApIC8gMTAwO1xyXG5cdFx0XHRcdC8vIGlmKG5vZGUxLnNjYWxlPD0wLjcpe1xyXG5cdFx0XHRcdC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZSsobm9kZTEuc2NhbGUvMik7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGVsc2UgaWYobm9kZTEuc2NhbGU+PTAuNyYmbm9kZTEuc2NhbGU8PTAuOSl7XHJcblx0XHRcdFx0Ly8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBlbHNle1xyXG5cdFx0XHRcdC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZS0wLjQ7XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHQvL25vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG5cdFx0XHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5zY2FsZSA9IG91dGxpbmVTY2FsZTtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMS5nZXRDaGlsZEJ5TmFtZShcIm91dGxpbmVcIikpXHJcblx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdDAuMyxcclxuXHRcdFx0XHRcdFx0eyBzY2FsZTogb3V0bGluZVNjYWxlICsgMC4xIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50bygwLjMsIHsgc2NhbGU6IG91dGxpbmVTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcImZyYW1lQ2hhbmdlXCI6IHtcclxuXHRcdFx0XHQvL25vZGUxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5vcHRpb25JbWFnZXNGcmFtZTJbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdDAuMyxcclxuXHRcdFx0XHRcdFx0eyBzY2FsZTogbm9kZTEuc2NhbGUgKyAwLjEgfSxcclxuXHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRvKDAuMywgeyBzY2FsZTogbm9kZTEuc2NhbGUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJzaGFrZVwiOiB7XHJcblx0XHRcdFx0bGV0IHR3ZWVuMSA9IGNjXHJcblx0XHRcdFx0XHQudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQucmVwZWF0Rm9yZXZlcihcclxuXHRcdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0XHQudHdlZW4oKVxyXG5cdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHRcdDAuMSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgeDogbm9kZTEueCArIDEwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHR3ZWVuMS5zdG9wKCk7XHJcblx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIm1vdmVtZW50X2NlbnRlclwiOiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kZXN0cm95T3RoZXJPcHRpb25zKCk7XHJcblx0XHRcdFx0fSwgMCk7XHJcblx0XHRcdFx0aWYgKG5vZGUxLm5hbWUgPT0gXCIyXCIpIHtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0XHQudG8oMSwgeyB4OiBub2RlMS54IC0gMzI1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAobm9kZTEubmFtZSA9PSBcIjFcIikge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHRcdC50bygxLCB7IHg6IG5vZGUxLnggKyAzMjUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0XHQvL3N0YXRlbWVudHM7XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lPdGhlck9wdGlvbnMoKSB7XHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdCF0aGlzLmlzRG9uZVtpXVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcblx0XHRcdFx0XHQudG8oMC40LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZHQpIHt9XHJcblxyXG5cdGZpbmlzaGVkQW5pbShldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25lTWFueVwiKS54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25lTWFueVwiKS55KTtcclxuXHR9XHJcblxyXG5cdGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0bGV0IHJhbmRvbW51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDEpO1xyXG5cdFx0bGV0IGN1cnJlbnRBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcDsgLy89IHRoaXMubmVnYXRpdmVBdWRpb3NbcmFuZG9tbnVtYmVyXTtcclxuXHRcdGlmIChyYW5kb21udW1iZXIgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tR29wYWxcIik7XHJcblx0XHRcdHRoaXMuaXNDaGFyMSA9IHRydWU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IC00NzU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTEwMTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IC0xLjU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjFcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuXHRcdFx0dGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGF1c2UoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSA5Mzk7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTE0MTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IDEuNTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG5cdFx0XHRcdC50bygwLjMsIHsgeDogNDc1IH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHQucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG5cdFx0XHR9LCAwLjQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IGN1cnJlbnRBdWRpb0NsaXA7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdH0sIDAuOSk7XHJcblx0fVxyXG5cclxuXHRpbmNyZWFzZXByb2dyZXNzKCkge1xyXG5cdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmZpbGxSYW5nZSA9XHJcblx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKiAoMzk0IC8gdGhpcy50b3RhbExldmVscyk7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikpXHJcblx0XHRcdC50bygwLjUsIHsgd2lkdGg6IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5maWxsUmFuZ2UgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuU2hvd1N0YXIoKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRTaG93U3RhcigpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpXHJcblx0XHRcdFx0LndpZHRoID09XHJcblx0XHRcdCgzOTQgKiAxKSAvIHRoaXMudG90YWxMZXZlbHNcclxuXHRcdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpXHJcblx0XHRcdClcclxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjMgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKVxyXG5cdFx0XHRcdC53aWR0aCA9PVxyXG5cdFx0XHQoMzk0ICogTWF0aC5jZWlsKHRoaXMudG90YWxMZXZlbHMgLyAyKSkgLyB0aGlzLnRvdGFsTGV2ZWxzXHJcblx0XHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIilcclxuXHRcdFx0KVxyXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuMyB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpXHJcblx0XHRcdFx0LndpZHRoID09IDM5NFxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIilcclxuXHRcdFx0KVxyXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuMyB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpXHJcblx0XHRcdClcclxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjMgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRQcm9ncmVzc0JhcigpIHtcclxuXHRcdGxldCBwcm9ncmVzc0JhciA9IHRoaXMubm9kZVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIik7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImFuc3dlclZhbHVlcyA6IFwiLCB0aGlzLmFuc3dlclZhbHVlcylcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcblx0XHRcdGlmICh0aGlzLmFuc3dlclZhbHVlc1tpXSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ1bmF0dGVtcHRlZFFcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSBpICsgMSkge1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0XHRcdFx0XCJ1bmF0dGVtcHRlZFFcIlxyXG5cdFx0XHRcdFx0KS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA+IGkgKyAxKSB7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHRmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRcdFx0XHRcInVuYXR0ZW1wdGVkUVwiXHJcblx0XHRcdFx0XHQpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHRmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIDwgaSArIDEpIHtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXHJcblx0XHRcdFx0XHRcdFwidW5hdHRlbXB0ZWRRXCJcclxuXHRcdFx0XHRcdCkuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNwcml0ZXMoX3Nwcml0ZU5hbWU6IHN0cmluZywgX25vZGU6IGNjLk5vZGUpIHtcclxuXHRcdGNjLnJlc291cmNlcy5sb2FkKFxyXG5cdFx0XHRfc3ByaXRlTmFtZSxcclxuXHRcdFx0Y2MuU3ByaXRlRnJhbWUsXHJcblx0XHRcdGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLndhcm4oZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhfc3ByaXRlTmFtZSk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0VXBkYXRlQW5pbWF0aW9ucyhfc3ByaXRlTmFtZTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0Y2MucmVzb3VyY2VzLmxvYWQoXHJcblx0XHRcdF9zcHJpdGVOYW1lLFxyXG5cdFx0XHRjYy5BbmltYXRpb25DbGlwLFxyXG5cdFx0XHRmdW5jdGlvbiAoZXJyLCBhbmltYXRpb246IGNjLkFuaW1hdGlvbkNsaXApIHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy53YXJuKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmFkZENsaXAoYW5pbWF0aW9uKTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbi5uYW1lKTtcclxuXHRcdFx0XHQvLyBfdXBkYXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGxheUF1ZGlvKF9hdWRpb1BhdGg6IHN0cmluZykge1xyXG5cdFx0bGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0XHQvLyBsZXQgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdFx0Y2MucmVzb3VyY2VzLmxvYWQoXHJcblx0XHRcdF9hdWRpb1BhdGgsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0ZnVuY3Rpb24gKGVyciwgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXApIHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy53YXJuKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHRoaXMuYXVkaW9NYW5hZ2VyLnBsYXkoYXVkaW9DbGlwLm5hbWUsIGF1ZGlvQ2xpcCwgZmFsc2UsIFwiVk9cIik7XHJcblx0XHRcdFx0Ly8gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiYXVkaW9DbGlwIG5hbWUgPSBcIiwgYXVkaW9DbGlwLm5hbWUpO1xyXG5cdFx0XHRcdGNsaXAgPSBhdWRpb0NsaXA7XHJcblx0XHRcdH0uYmluZCh0aGlzKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGhpbGlnaHRMZWZ0QW5zd2VycygpIHtcclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0aSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRpKytcclxuXHRcdCkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHBhcnNlSW50KFxyXG5cdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWVcclxuXHRcdFx0XHRcdCkgLVxyXG5cdFx0XHRcdFx0XHQxID09XHJcblx0XHRcdFx0XHR0aGlzLmFuc3dlcnNbal1cclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5jb2xvciA9IG5ldyBjYy5Db2xvcig3MSwgMjU1LCAwKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJJbnNpZGUgaGlsaWdodExlZnRBbnN3ZXJzIDogXCIrdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lKTtcclxuXHRcdFx0XHRcdC8vIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSl7XHJcblx0XHRcdFx0XHQvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpKTtcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gZm9yKGxldCBpPTA7aTx0aGlzLmFuc3dlcnMubGVuZ3RoO2krKyl7XHJcblx0XHQvLyAgICAgaWYoKHBhcnNlSW50KF9ub2RlLm5hbWUpLTEpPT10aGlzLmFuc3dlcnNbaV0pe1xyXG5cdFx0Ly8gICAgICAgICBpc0NvcnJlY3Q9dHJ1ZTtcclxuXHRcdC8vICAgICAgICAgYnJlYWs7XHJcblx0XHQvLyAgICAgfVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0Y29udmVydFhQb3MoeCkge1xyXG5cdFx0dmFyIHZhbCA9IHggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG5cclxuXHRjb252ZXJ0WVBvcyh5KSB7XHJcblx0XHR2YXIgdmFsID0geSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG5cclxuXHRqb2NrZXlSZXBvc2l0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRfbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblx0XHRjYy50d2Vlbihfbm9kZSkudG8oMSwgeyB4OiAtNDUwLCB5OiAtMjgwLCBzY2FsZTogMC45IH0pLnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRjYWxsSm9ja2V5QW5pbShudW06IG51bWJlcikge1xyXG5cdFx0bGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFB1enpsZWApO1xyXG5cdFx0bGV0IG9wdGlvbnMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBPcHRpb25zMmApO1xyXG5cdFx0aWYgKG51bSA9PSAwKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGBHT09EYCk7XHJcblx0XHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlQ29ycmVjdGApO1xyXG5cdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFxyXG5cdFx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVDb3JyZWN0YCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVTdGFyc2ApO1xyXG5cclxuXHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFxyXG5cdFx0XHRcdFx0YGZpbmlzaGVkYCxcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0am9ja2V5Tm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdC5wbGF5KGBwdXp6bGVJZGxlYCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGhpc1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5wbGF5RHVzdEFuaW0yKFxyXG5cdFx0XHRcdFx0TWF0aC5yb3VuZCh0aGlzLmdldFJhbmRvbUludCg1LCA4KSksXHJcblx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbUludCgxNSwgMjApLFxyXG5cdFx0XHRcdFx0b3B0aW9uczJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LCBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldENsaXBzKClbMV0uZHVyYXRpb24gKyB0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coYEJBRGApO1xyXG5cdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVdyb25nYCk7XHJcblx0XHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXHJcblx0XHRcdFx0YGZpbmlzaGVkYCxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVdyb25nYCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVN0YXJzYCk7XHJcblx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihcclxuXHRcdFx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGpvY2tleU5vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdFx0XHQucGxheShgcHV6emxlSWRsZWApO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRoaXNcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMucGxheUR1c3RBbmltMihcclxuXHRcdFx0XHRcdE1hdGgucm91bmQodGhpcy5nZXRSYW5kb21JbnQoNSwgOCkpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21JbnQoMTUsIDIwKSxcclxuXHRcdFx0XHRcdG9wdGlvbnMyXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSwgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRDbGlwcygpWzNdLmR1cmF0aW9uICsgdGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHBsYXlEdXN0QW5pbShudW06IG51bWJlcikge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coYHBsYXlQYXJ0aWNsZXNgKTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG5cdFx0bWluID0gTWF0aC5jZWlsKG1pbik7XHJcblx0XHRtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxyXG5cdH1cclxuXHJcblx0Z2V0UmFuZG9tRmxvYXQobWluLCBtYXgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcblx0fVxyXG5cclxuXHRwbGF5RHVzdEFuaW0yKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCBfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0Ly8gY29uc29sZS50cmFjZShgZGVEdXN0MmApO1xyXG5cdFx0Ly8gZGVjbGFyZSBhIGNjLnNwcml0ZUZyYW1lIGFib3ZlIGZvciBwYXJ0aWNsZXMgaW1nXHJcblx0XHQvLyBkZWNsYXJlIGEgY2MuVGV4dHVyZTJEIGFib3ZlIGZvciB0cmFpbCBpbWdcclxuXHRcdC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgcGFydGljbGVzIHNvdW5kRnhcclxuXHRcdC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgdHJhaWwgc291bmRGeFxyXG5cdFx0bGV0IGpvY2tleSA9IHRoaXMubm9kZVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShgUHV6emxlYCk7XHJcblx0XHRqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZXNTb3VuZDtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0am9ja2V5LmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cdFx0fSwgMC43NSk7XHJcblx0XHQvLyBqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhgUE9TYCtzdGFydFBvcyk7XHJcblx0XHRsZXQgY29sb3JzQXJyYXk6IHN0cmluZ1tdID0gW2AjQzA0MkZGYCwgYCNGRjAwNDlgLCBgI0ZDQzAwMGBdO1xyXG5cdFx0bGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTE7XHJcblx0XHRsZXQgX29mZnNldCA9IDUwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW0xOyBpKyspIHtcclxuXHRcdFx0Ly8gbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuXHRcdFx0Ly8gbGV0IHJuZ1kgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuXHRcdFx0bGV0IHBhcnRpY2xlcyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKCkpO1xyXG5cdFx0XHRsZXQgdHJhaWwgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSgpKTtcclxuXHRcdFx0cGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xyXG5cdFx0XHR0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcblx0XHRcdHBhcnRpY2xlcy54ID0gLTQ1MCArIDY0MCArIDIwO1xyXG5cdFx0XHRwYXJ0aWNsZXMueSA9IC0yODAgKyAzNjAgKyA3MDtcclxuXHRcdFx0Ly8gcGFydGljbGVzLnBvc2l0aW9uID0gam9ja2V5LmdldFBhcmVudCgpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihqb2NrZXkuZ2V0UGFyZW50KCkucG9zaXRpb24pO1xyXG5cdFx0XHQvLyBwYXJ0aWNsZXMueCArPSA0MjA7XHJcblx0XHRcdC8vIHBhcnRpY2xlcy55ICs9IDIyMDtcclxuXHRcdFx0cGFydGljbGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5kdXN0SW1nO1xyXG5cdFx0XHQvLyBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZVNvdW5kcztcclxuXHRcdFx0cGFydGljbGVzLndpZHRoID0gMDtcclxuXHRcdFx0cGFydGljbGVzLmhlaWdodCA9IHBhcnRpY2xlcy53aWR0aDtcclxuXHRcdFx0cGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzU5KTtcclxuXHRcdFx0cGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG5cdFx0XHRwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuXHRcdFx0cGFydGljbGVzLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdHBhcnRpY2xlcy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgoXHJcblx0XHRcdFx0cGFydGljbGVzLmNvbG9yLFxyXG5cdFx0XHRcdGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGNvbG9yc0FycmF5Lmxlbmd0aCldXHJcblx0XHRcdCk7XHJcblx0XHRcdHRyYWlsLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnRleHR1cmUgPSB0aGlzLmR1c3RUcmFpbEltZztcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IHRoaXMuZ2V0UmFuZG9tRmxvYXQoXHJcblx0XHRcdFx0MC4xLFxyXG5cdFx0XHRcdDAuNVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHQxMCxcclxuXHRcdFx0XHQyNVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoXHJcblx0XHRcdFx0MjU1LFxyXG5cdFx0XHRcdDI1NSxcclxuXHRcdFx0XHQyNTVcclxuXHRcdFx0KTtcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGFydGljbGVzKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBybmdQYXJ0aWNsZXNTaXplID0gdGhpcy5nZXRSYW5kb21JbnQoNzUsIDEyNSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHBhcnRpY2xlcylcclxuXHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdDAuNSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogcm5nUGFydGljbGVzU2l6ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogcm5nUGFydGljbGVzU2l6ZSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBgYmFja091dGAgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0Y2MudHdlZW4ocGFydGljbGVzKVxyXG5cdFx0XHRcdFx0LmJlemllclRvKFxyXG5cdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCwgY2Mud2luU2l6ZS53aWR0aCksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnksIGNjLndpblNpemUuaGVpZ2h0KVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHRcdFx0XHRcdGNjLndpblNpemUud2lkdGggLyA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0KDMgKiBjYy53aW5TaXplLndpZHRoKSAvIDRcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS5oZWlnaHQgLyA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0KDMgKiBjYy53aW5TaXplLmhlaWdodCkgLyA0XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbnVtMjsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGJ1bGxldHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSgpKTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYlRyYWlscyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKCkpO1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kdXN0SW1nO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMucGFyZW50ID0gYnVsbGV0cztcclxuXHRcdFx0XHRcdFx0XHRiVHJhaWxzLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcblx0XHRcdFx0XHRcdFx0YlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZHVzdFRyYWlsSW1nO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9XHJcblx0XHRcdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tRmxvYXQoMC4xLCAwLjUpO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwLCAyNSk7XHJcblx0XHRcdFx0XHRcdFx0YlRyYWlscy5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRjYy5Nb3Rpb25TdHJlYWtcclxuXHRcdFx0XHRcdFx0XHQpLmZhZGVUaW1lID0gMC4yO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPVxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9XHJcblx0XHRcdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFzdE1vZGUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0dHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLndpZHRoID0gMDtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLmhlaWdodCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0Ly8gYnVsbGV0cy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM1OSk7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0cy5uYW1lID0gYGJ1bGxldHNgICsgajtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLnBhcmVudCA9IHBhcnRpY2xlcztcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLnggPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldHMueSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0cy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgoXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJ0aWNsZXMuY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcnNBcnJheVtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21JbnQoMCwgY29sb3JzQXJyYXkubGVuZ3RoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gYnVsbGV0cy5jb2xvciA9IHBhcnRpY2xlcy5jb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcm5nU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgMjAwKTtcclxuXHRcdFx0XHRcdFx0XHRjYy50d2VlbihidWxsZXRzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQwLjI1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHdpZHRoOiBybmdTaXplLCBoZWlnaHQ6IHJuZ1NpemUgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IGBiYWNrT3V0YCB9XHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRjYy50d2VlbihidWxsZXRzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKDAuNSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRidWxsZXRzLnggLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLCA1MDApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJ1bGxldHMueCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsIDUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eTogdGhpcy5nZXRSYW5kb21OdW1iZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnVsbGV0cy55IC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgNTAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRidWxsZXRzLnkgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLCA1MDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0Y2MudHdlZW4oYnVsbGV0cylcclxuXHRcdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjAwIH0pXHJcblx0XHRcdFx0XHRcdFx0XHQudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKDAuMSwgeyBvcGFjaXR5OiAyMDAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHRcdFx0XHQudG8oMC4xLCB7IG9wYWNpdHk6IDIwMCwgc2NhbGU6IDAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnVsbGV0cy5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgMC4xICogKGkgKyAxKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
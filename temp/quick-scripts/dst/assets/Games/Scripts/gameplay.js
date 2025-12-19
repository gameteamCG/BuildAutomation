
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
        else if (type == "negative") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGdhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUFnQztBQUNoQyxxREFBZ0Q7QUFHMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1MkNDO1FBOTFDRyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsMkJBQXFCLEdBQW1CLEVBQUUsQ0FBQztRQUczQywyQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBRzNDLHVCQUFpQixHQUFtQixFQUFFLENBQUM7UUFTdkMsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBU2xDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQztRQUU1QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUNoQyxrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixnQkFBVSxHQUFhLEVBQUUsQ0FBQztRQUcxQixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFLcEMs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YyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdHO0lBQ0wsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEYsb0RBQW9EO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQy9ELFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDbEU7aUJBQ0k7Z0JBQ0QsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDakU7cUJBQ0ksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDcEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDbEU7cUJBQ0ksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDcEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxj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UyxHQXUyQ2pEO2tCQXYyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBJRGF0YSB9IGZyb20gXCIuL0lEYXRhXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljcyB9IGZyb20gXCIuL2dhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBtYWdpY2FsU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcXVlc3Rpb25BdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcG9zaXRpdmVGZWVkYmFja1NvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBuZWdhdGl2ZUZlZWRiYWNrU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFJlaW5mb3JlbWVudFNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICByaWdodFNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdyb25nU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgb3B0aW9uU291bmRzOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIGRlZmF1bHRNYXQ6IGNjLk1hdGVyaWFsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIGdyZXlNYXQ6IGNjLk1hdGVyaWFsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGR1c3RJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dHVyZTJEKVxyXG4gICAgZHVzdFRyYWlsSW1nOiBjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwYXJ0aWNsZXNTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IElEYXRhW10gPSBbbmV3IElEYXRhXTtcclxuICAgIHByaXZhdGUgYW5zd2VyT2JqZWN0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWF4T3B0aW9uczogbnVtYmVyID0gNztcclxuICAgIHByaXZhdGUgU3ViSW1hZ2U6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdyb25nQW5zd2VyTGltaXQ6IG51bWJlciA9IDc7XHJcbiAgICBwcml2YXRlIGFuc3dlcnM6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uVHlwZTogc3RyaW5nID0gXCJjdXN0b21cIjtcclxuICAgIHByaXZhdGUgZmVlZGJhY2t0eXBlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY2FsZUFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG9wdGlvbkltYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGlzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvcnJlY3RBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNEb25lOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZWRPcHRpb25zOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgQW5zd2VyTm9kZTogY2MuTm9kZTtcclxuXHJcbiAgICBwcml2YXRlIG9mZnNldFg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA1O1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJWYWx1ZXM6IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gNzIwO1xyXG4gICAgcHJpdmF0ZSB2aWV3UG9ydEhlaWdodDogbnVtYmVyID0gMTI4MDtcclxuXHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNDaGFyMTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1dyb25nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0VGltZTogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hEb25lOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvczpjYy5BdWRpb0NsaXBbXT1bXTtcclxuICAgIC8vcHJpdmF0ZSBvcHRpb25BbmltYXRpb25zOnN0cmluZ1tdPVtdO1xyXG4gICAgLy9wcml2YXRlIG9wdGlvbkF1ZGlvczpzdHJpbmdbXT1bXTtcclxuXHJcblxyXG4gICAgLy9wcml2YXRlIGdhID0gcmVxdWlyZShcImdhXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gX251bWJlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlZGF0YSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5Mb2FkUXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3RhbCBvcHRpb25zL2Fuc3dlcnMgPSBcIix0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5wb3NpdGlvbnMpO1xyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZ2FEYXRhKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInN0b3J5Qm9hcmRcIiwgT2JqZWN0LCAoX2Vycm9yLCBfanNvbkZpbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKF9lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihfZXJyb3IubWVzc2FnZSB8fCBfZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBfanNvbkRhdGE6IG9iamVjdCA9IF9qc29uRmlsZVtcImpzb25cIl07XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX2pzb25EYXRhW1wiZGF0YVwiXSkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodGhpcy5kYXRhW2ldLmFuc3dlck9iamVjdCk7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHRoaXMuZGF0YVtpXS5vcHRpb25BbmltYXRpb25JbWFnZXMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQbGF5UXVlc3Rpb24oX2RhdGE6IElEYXRhKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5mZXRjaERhdGEoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLmFuc3dlclZhbHVlcyA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJWYWx1ZXM7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVkYXRhKCk7XHJcblxyXG4gICAgICAgIGxldCBqb2NrZXlOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKS5nZXRDaGlsZEJ5TmFtZShgUHV6emxlYCk7XHJcbiAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGB0aXRsZUFuaW1gKTtcclxuICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKGBmaW5pc2hlZGAsICgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGpvY2tleU5vZGUud2lkdGggPSAyNTA7XHJcbiAgICAgICAgICAgIC8vIGpvY2tleU5vZGUuaGVpZ2h0ID0gMjUwO1xyXG4gICAgICAgICAgICB0aGlzLmpvY2tleVJlcG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKSk7XHJcbiAgICAgICAgfSksIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxTdGFydEdhbWUoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgOiBcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTGV2ZWxzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJWYWx1ZXNbaV0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIC8vZ2EubmFtZTtcclxuXHJcblxyXG4gICAgICAgIC8vIGdhKCdldmVudCcsIFwiVGFwXCIsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJMaW5rXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiQ3JlYXRlIEdhbWVcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogPDE+XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgU3RhcnRlZFwiLFxyXG4gICAgICAgIC8vICAgICAndmFsdWUnOiAxXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkZGRkZGRkZGRAQEBAQEBAQEBAQFwiLHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSkpO1xyXG4gICAgICAgICAgICAvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgocGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSsxKS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgIH0sIDAuMik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFuc3dlck9iamVjdCgpO1xyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5BbnN3ZXJOb2RlLnggPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueDtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5BbnN3ZXJOb2RlLnkgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC41LCB7IHg6IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmFuc3dlcnBvc2l0aW9uc1swXS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeTogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvbk9iamVjdCh0aGlzLm1heE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5wb3BTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEb25lW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ub3VjaFN0YXJ0KGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjQpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9LCAwLjMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnF1ZXN0aW9uQXVkaW9bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdKTtcclxuICAgICAgICAgICAgLy99LCAwLjYpO1xyXG4gICAgICAgIH0sIDAuNyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxKb2NrZXkoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IDQ3NSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgZGFuY2VgLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgdGh1bWJzX3VwYCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IDE2MDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVGZWVkYmFja1NvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAyXS5kdXJhdGlvbilcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhPcHRpb25zID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS50b3RhbE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5TdWJJbWFnZSA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uU3ViSW1hZ2U7XHJcbiAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckxpbWl0ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS53cm9uZ0Fuc3dlcnNMaW1pdDtcclxuICAgICAgICB0aGlzLmFuc3dlcnMgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlcnM7XHJcbiAgICAgICAgdGhpcy5zY2FsZUFycmF5ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zY2FsZUFycmF5O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25UeXBlID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wb3NpdGlvblR5cGU7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja3R5cGUgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmZlZWRiYWNrdHlwZTtcclxuICAgICAgICB0aGlzLnRvdGFsQW5zd2VycyA9IHRoaXMuYW5zd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvblNvdW5kO1xyXG4gICAgICAgIHRoaXMudGV4dEFycmF5ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS50ZXh0QXJyYXk7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3QgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlck9iamVjdDtcclxuICAgICAgICB0aGlzLm9wdGlvbkltYWdlcyA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uQW5pbWF0aW9uSW1hZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIENoZWNrRm9ySXNEb25lKF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgPT0gX25vZGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRvdWNoU3RhcnQoX25vZGU6IGNjLk5vZGUsIF9ldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbnNpZGUgdG91Y2hzdGFydCA6IFwiKVxyXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaCBzdGFydCA6IFwiKTtcclxuICAgICAgICBsZXQgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoX25vZGUubmFtZSA9PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiYgdGhpcy5pc0RvbmVbaV0pIHtcclxuICAgICAgICAgICAgICAgIGlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChfbm9kZS5uYW1lID09IHRoaXMudG91Y2hEb25lW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNTdG9wKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0NvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgocGFyc2VJbnQoX25vZGUubmFtZSkgLSAxKSA9PSB0aGlzLmFuc3dlcnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsPT0xKXsgLy8gZ2FtZSBzcGVjaWZpYyBjb25kaXRpb25cclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleHRyYU5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihfbm9kZS5uYW1lPT1cIjFcIil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NhbGVUd2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2UgaWYoX25vZGUubmFtZT09XCIyXCIpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjYWxlVHdlZW4xLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYGF1ZGlvTm9kZWApLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy5SZWluZm9yZW1lbnRTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTJdO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0sdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjb3JyZWN0IGlzIGNsaWNrZWQgPSBcIixfbm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleUFuaW0oMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeDogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKF9ub2RlKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeTogX25vZGUueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC4yLCB7IHk6IDY0MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnBsYXlBdWRpbyhcIi9zb3VuZHMvQ29ycmVjdEFuc3dlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnJpZ2h0U291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvL30sIDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucG9zaXRpdmVTb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC43KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNoZWNrRm9ySXNEb25lKF9ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuc3dlckNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYGF1ZGlvTm9kZWApLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndyb25nIGlzIGNsaWNrZWQgPSBcIix0aGlzLmlzRG9uZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXlBbmltKDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2lzIGxldmVsZW5kXHJcbiAgICAgICAgICAgIGxldCBsZXZlbGVuZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAvLyBmb3IobGV0IGk9MDtpPHRoaXMuYW5zd2Vycy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGlmKCF0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW3RoaXMuYW5zd2Vyc1tpXV0uYWN0aXZlSW5IaWVyYXJjaHkpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldmVsZW5kPXRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBlbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldmVsZW5kPWZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvL2ZvciBsZXZlbCBvbmUgc3BlY2lmaWMgY2FzZVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCA9PSB0aGlzLnRvdGFsQW5zd2Vycykge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnJpZ2h0QW5zd2VyQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyVmFsdWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTGV2ZWwgQ29tcGxldGVkLi4uISEhISEhISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBndGFnKCdldmVudCcsIFwiTGV2ZWxDb21wbGV0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgQ29tcGxldGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICd2YWx1ZSc6IDFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISEgZ2FtZSBmaW5pc2hlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0UmVpbmZvcnNlbWVudFNjcmVlbihcInBvc2l0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiAtMTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSA9IHRoaXMuYW5zd2VyVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnBvcHVwVGltZSArIDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY2FsbFBvc2l0aXZlUmVhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbENvbXBsZXRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBDb21wbGV0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oXCJwb3NpdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudExldmVsIDogXCIsZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlTb3VuZChuYW1lOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gbmFtZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVF1ZXN0aW9uU291bmQobmFtZTogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucXVlc3Rpb25BdWRpb1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmVlbih0eXBlMTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaERvbmUgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgLy8gZ3RhZygnZXZlbnQnLCBcIkxldmVsU3RhcnRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcbiAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBTdGFydGVkXCIsXHJcbiAgICAgICAgLy8gICAgICd2YWx1ZSc6IDFcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgLy90aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKHR5cGUxKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQW5zd2VyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvbk9iamVjdCh0aGlzLm1heE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB5OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ub3VjaFN0YXJ0KGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSB0aGlzIHJlZmVycyB0byBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnF1ZXN0aW9uQXVkaW9bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMucG9wU291bmQuZHVyYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3B1cFRpbWUgKyAwLjUpO1xyXG5cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvcHVwVGltZSA9IDA7XHJcblxyXG4gICAgc2V0UmVpbmZvcnNlbWVudFNjcmVlbih0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodHlwZSA9PSBcInBvc2l0aXZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFRpbWUgPSB0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMl0uZHVyYXRpb24gKyB0aGlzLm1hZ2ljYWxTb3VuZC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtNDAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikuZ2V0Q2hpbGRCeU5hbWUoXCJQdXp6bGVcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInB1enpsZVBvc2l0aXZlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKHRoaXMubWFnaWNhbFNvdW5kKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4T3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmICh0aGlzLmlzRG9uZVtpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAyNTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAtMjAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEuMiB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMl0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubWFnaWNhbFNvdW5kLmR1cmF0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09IFwibmVnYXRpdmVcIikge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IC00MDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKS5nZXRDaGlsZEJ5TmFtZShcIlB1enpsZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicHV6emxlTmVnYXRpdmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBUaW1lID0gdGhpcy5SZWluZm9yZW1lbnRTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb247XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJiAodGhpcy5pc0RvbmVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMjUwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogLTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5SZWluZm9yZW1lbnRTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMl0pO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbnN3ZXJPYmplY3QoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHdpblNpemU6IGArKGNjLndpblNpemUud2lkdGgvY2Mud2luU2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAvL2xldCBhbnN3ZXJOb2RlID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpO1xyXG4gICAgICAgIHRoaXMuQW5zd2VyTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuQW5zd2VyTm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlLnggPSB0aGlzLmNvbnZlcnRYUG9zKGNjLndpblNpemUud2lkdGggKiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlcnBvc2l0aW9uc1swXS54KTtcclxuICAgICAgICB0aGlzLkFuc3dlck5vZGUueSA9IHRoaXMuY29udmVydFlQb3MoY2Mud2luU2l6ZS5oZWlnaHQgKiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlcnBvc2l0aW9uc1swXS55KTtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5hbnN3ZXJPYmplY3QsdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKSk7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlLmdldENoaWxkQnlOYW1lKGBBbnN3ZXJOb2RlYCkuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYCkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBRVUVTVElPTjogYCt0aGlzLnF1ZXN0aW9uK2AgIGArdGhpcy5BbnN3ZXJOb2RlLmdldENoaWxkQnlOYW1lKGBBbnN3ZXJOb2RlYCkuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYCkpO1xyXG4gICAgICAgIC8vdGhpcy5wbGF5U291bmQodGhpcy5wb3BTb3VuZCk7XHJcbiAgICAgICAgbGV0IF9zY2FsZSA9IDAuODtcclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS5oZWlnaHQgPCA3MjApIHtcclxuICAgICAgICAgICAgX3NjYWxlID0gMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiBfc2NhbGUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT3B0aW9uT2JqZWN0KG51bU9mT3B0aW9ucykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3B0aW9uT0JKRUNUIDo6XCIsbnVtT2ZPcHRpb25zKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21cIjoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZk9wdGlvbnM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgb3B0aW9ucyA6Ojo6OlwiLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0udGV4dEFycmF5W2ldLy8oaSsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuaW5zZXJ0Q2hpbGQodGhpcy5jcmVhdGVkT3B0aW9uc1tpXSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFggPSAzMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gdGhpcy5jb252ZXJ0WFBvcyhjYy53aW5TaXplLndpZHRoICogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wb3NpdGlvbnNbaV0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55ID0gdGhpcy5jb252ZXJ0WFBvcyhjYy53aW5TaXplLndpZHRoICogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wb3NpdGlvbnNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlN1YkltYWdlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTcHJpdGVzKHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gOTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuU3ViSW1hZ2UgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikueSA9IC0xNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDcwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLndpZHRoID0gNTUwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuaGVpZ2h0ID0gNTUwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zY2FsZUFycmF5W2ldIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuYW5zd2Vycy5sZW5ndGg8PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5VcGRhdGVBbmltYXRpb25zKHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dGhpcy5vcHRpb25JbWFnZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQb3NpdGlvbnMgOiBcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlZCBvcHRpb25zIDogKioqKioqKioqXCIsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54LHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU9wdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmICghdGhpcy5pc0RvbmVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT0wO2k8dGhpcy5tYXhPcHRpb25zO2krKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUmJighdGhpcy5pc0RvbmVbaV0pKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSBcclxuICAgICAgICAvLyB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lSaWdodE9wdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmICh0aGlzLmlzRG9uZVtpXSkpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSYmKHRoaXMuaXNEb25lW2ldKSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0gXHJcbiAgICAgICAgLy8gfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95QW5zd2VycygpIHtcclxuICAgICAgICBpZiAodGhpcy5BbnN3ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkFuc3dlck5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkFuc3dlck5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgLy8gaWYodGhpcy5TdWJJbWFnZT09MSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxOZWdhdGl2ZUZlZWRiYWNrKG5vZGUxOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaERvbmUucHVzaChub2RlMS5uYW1lKTtcclxuICAgICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQgKz0gMTtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgLy9sZXQgdHdlZW4xID0gIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgIC8vbm9kZTEuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjMyLCAzMCwgNDMpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTm9kZSA9IG5vZGUxLnBhcmVudDtcclxuICAgICAgICAvLyBvcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihlbGVtZW50Lm5hbWUgPT0gdGhpcy5hbnN3ZXJzWzBdLnRvU3RyaW5nKCkpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYFJJR0hUYCk7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xLHtvcGFjaXR5OjB9KVxyXG4gICAgICAgIC8vICAgICAgICAgLnRvKDAuMSx7b3BhY2l0eToyNTV9KS50bygwLjEse29wYWNpdHk6MH0pLnRvKDAuMSx7b3BhY2l0eToyNTV9KS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG5qbm5ubiBgKyh0aGlzLmFuc3dlcnNbMF0rMSk7XHJcbiAgICAgICAgb3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKHRoaXMuYW5zd2Vyc1swXSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2VlbihvcHRpb25zTm9kZS5nZXRDaGlsZEJ5TmFtZSgodGhpcy5hbnN3ZXJzWzBdICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7IG9wYWNpdHk6IDI1NSB9KS50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSkudG8oMC4xNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICAvLyBpZihub2RlMS5uYW1lID09IGAxYCl7XHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBjYy50d2VlbihvcHRpb25zTm9kZS5nZXRDaGlsZEJ5TmFtZShgMmApLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikpLnRvKDAuMTUse29wYWNpdHk6MH0pXHJcbiAgICAgICAgLy8gICAgIC50bygwLjE1LHtvcGFjaXR5OjI1NX0pLnRvKDAuMTUse29wYWNpdHk6MH0pLnRvKDAuMTUse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYDFgKS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAxYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xLHtvcGFjaXR5OjB9KVxyXG4gICAgICAgIC8vICAgICAudG8oMC4xLHtvcGFjaXR5OjI1NX0pLnRvKDAuMSx7b3BhY2l0eTowfSkudG8oMC4xLHtvcGFjaXR5OjI1NX0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmV5TWF0KTtcclxuICAgICAgICBub2RlMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54IC0gMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54ICsgMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCAtIDEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9jYWxsIG5lZ2F0aXZlIGF1ZGlvIFxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5uZWdhdGl2ZVNvdW5kO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL3RoaXMucGxheUF1ZGlvKFwiL3NvdW5kcy9pbmNvcnJlY3RBbnN3ZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGxheVNvdW5kKHRoaXMud3JvbmdTb3VuZCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLnBsYXlTb3VuZCh0aGlzLm5lZ2F0aXZlRmVlZGJhY2tbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIC8vIH0sIDAuOCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgLy8gfSwgdGhpcy5uZWdhdGl2ZUZlZWRiYWNrW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uZHVyYXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdHdlZW4xLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSB0aGlzLndyb25nQW5zd2VyTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlsaWdodExlZnRBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2Vyc1swXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRG9uZVt0aGlzLmFuc3dlcnNbMF1dID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKFwibmVnYXRpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC41LCB7IHg6IC0xMjAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95UmlnaHRPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSA9IHRoaXMuYW5zd2VyVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5wb3B1cFRpbWUgKyAwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEb25lW3RoaXMuYW5zd2Vyc1swXV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U2NyZWVuKFwibmVnYXRpdmVcIik7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuOCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxQb3NpdGl2ZUZlZWRiYWNrKG5vZGUxOiBjYy5Ob2RlLCBmZWVkYmFja05hbWUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChmZWVkYmFja05hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZldHRpXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKG5vZGUxLngsbm9kZTEueSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAyNTUsIDApO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKS5zZXRQb3NpdGlvbihub2RlMS54LCBub2RlMS55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmRlc3Ryb3k7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24oLTUwMCwtNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLnNldFBvc2l0aW9uKC01MDAsIC01MDApO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9leHRyYSBjb2RlIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYobm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLG5vZGUxLmdldENoaWxkQnlOYW1lKFwidGlja1wiKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X3JpZ2h0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IHg6IHRoaXMudmlld1BvcnRXaWR0aCArIDEwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9sZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IC0xMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfdG9wXCI6IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygyLCB7IHk6IHRoaXMudmlld1BvcnRIZWlnaHQgKyAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjIsIHsgeDogbm9kZTEueCArIDMwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9ib3R0b21cIjoge1xyXG4gICAgICAgICAgICAgICAgLy9nYW1lIHNwZWNpZmljIGNvZGVcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInBsYXRlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IC0yODAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IG5vZGUxLnkgKyAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiBub2RlMS55IC0gNTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IGFuZ2xlOiAzNjAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7Ly9ib3VuY2VJblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X0FuaW1hdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICAvL2dhbWUgc3BlY2lmaWMgY29kZVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnggPSBub2RlMS54ICsgMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueSA9IG5vZGUxLnkgKyA1MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS54ID0gbm9kZTEueCArIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnkgPSBub2RlMS55ICsgMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSAtIDAuMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub2RlMS54PW5vZGUxLngrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZTEueT1ub2RlMS55KzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnNjYWxlID0gbm9kZTEuc2NhbGUgKyAwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uQ2xpcDogY2MuQW5pbWF0aW9uQ2xpcCAvLz0gdGhpcy5vcHRpb25BbmltYXRpb25zW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuYWRkQ29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICBub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5hZGRDbGlwKGFuaW1hdGlvbkNsaXApO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmltYXRpb25DbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy9ub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbignZmluaXNoZWQnLCAgdGhpcy5maW5pc2hlZEFuaW0sICAgIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X1NjYWxlXCI6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZSArIChub2RlMS5zY2FsZSAqIDMwIC8gMTAwKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKG5vZGUxLnNjYWxlPD0wLjcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlKyhub2RlMS5zY2FsZS8yKTtcclxuICAgICAgICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmKG5vZGUxLnNjYWxlPj0wLjcmJm5vZGUxLnNjYWxlPD0wLjkpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBcclxuICAgICAgICAgICAgICAgIC8vIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb3V0bGluZVNjYWxlID0gbm9kZTEuc2NhbGUtMC40O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJvdXRsaW5lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5vcHRpb25JbWFnZXNGcmFtZTJbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcbiAgICAgICAgICAgICAgICBub2RlMS5nZXRDaGlsZEJ5TmFtZShcIm91dGxpbmVcIikuc2NhbGUgPSBvdXRsaW5lU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMS5nZXRDaGlsZEJ5TmFtZShcIm91dGxpbmVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogb3V0bGluZVNjYWxlICsgMC4xIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG91dGxpbmVTY2FsZSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcmFtZUNoYW5nZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5vcHRpb25JbWFnZXNGcmFtZTJbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiBub2RlMS5zY2FsZSArIDAuMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiBub2RlMS5zY2FsZSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFrZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHdlZW4xID0gY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuMS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9jZW50ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU90aGVyT3B0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZTEubmFtZSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiBub2RlMS54IC0gMzI1IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZTEubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiBub2RlMS54ICsgMzI1IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgb3BhY2l0eTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T3RoZXJPcHRpb25zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmICghdGhpcy5pc0RvbmVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hlZEFuaW0oZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvbmVNYW55XCIpLngsdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvbmVNYW55XCIpLnkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxsTmVnYXRpdmVSZWFjdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByYW5kb21udW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAxKTtcclxuICAgICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwIC8vPSB0aGlzLm5lZ2F0aXZlQXVkaW9zW3JhbmRvbW51bWJlcl07XHJcbiAgICAgICAgaWYgKHJhbmRvbW51bWJlciA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Hb3BhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gLTQ3NTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gLTEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJuZWdhdGl2ZVJlYWN0aW9uMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1NaWxpXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wYXVzZShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IDkzOTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTQxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVZID0gMS41O1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikpLnRvKDAuMywgeyB4OiA0NzUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IGN1cnJlbnRBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9LCAwLjkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlcHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmZpbGxSYW5nZSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKiAoMzk0IC8gdGhpcy50b3RhbExldmVscyk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpKS50bygwLjUsIHsgd2lkdGg6IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5maWxsUmFuZ2UgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2hvd1N0YXIoKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dTdGFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gKDM5NCAqIDEgLyB0aGlzLnRvdGFsTGV2ZWxzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gKDM5NCAqIE1hdGguY2VpbCh0aGlzLnRvdGFsTGV2ZWxzIC8gMikgLyB0aGlzLnRvdGFsTGV2ZWxzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIyXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIyXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gMzk0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjVcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjZcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5zd2VyVmFsdWVzIDogXCIsIHRoaXMuYW5zd2VyVmFsdWVzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlclZhbHVlc1tpXSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInVuYXR0ZW1wdGVkUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPiBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPCBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ1bmF0dGVtcHRlZFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTcHJpdGVzKF9zcHJpdGVOYW1lOiBzdHJpbmcsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoX3Nwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coX3Nwcml0ZU5hbWUpO1xyXG4gICAgICAgICAgICBfbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlQW5pbWF0aW9ucyhfc3ByaXRlTmFtZTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKF9zcHJpdGVOYW1lLCBjYy5BbmltYXRpb25DbGlwLCBmdW5jdGlvbiAoZXJyLCBhbmltYXRpb246IGNjLkFuaW1hdGlvbkNsaXApIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmFkZENsaXAoYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgX25vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmltYXRpb24ubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIF91cGRhdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUF1ZGlvKF9hdWRpb1BhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgICAgIC8vIGxldCBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoX2F1ZGlvUGF0aCwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpb01hbmFnZXIucGxheShhdWRpb0NsaXAubmFtZSwgYXVkaW9DbGlwLCBmYWxzZSwgXCJWT1wiKTtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpb0NsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhdWRpb0NsaXAgbmFtZSA9IFwiLCBhdWRpb0NsaXAubmFtZSk7XHJcbiAgICAgICAgICAgIGNsaXAgPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWxpZ2h0TGVmdEFuc3dlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hbnN3ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBhcnNlSW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSkgLSAxKSA9PSB0aGlzLmFuc3dlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uY29sb3IgPSBuZXcgY2MuQ29sb3IoNzEsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkluc2lkZSBoaWxpZ2h0TGVmdEFuc3dlcnMgOiBcIit0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlU3ByaXRlcyhcIi93aGl0ZVRpY2tcIix0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICBpZigocGFyc2VJbnQoX25vZGUubmFtZSktMSk9PXRoaXMuYW5zd2Vyc1tpXSl7XHJcbiAgICAgICAgLy8gICAgICAgICBpc0NvcnJlY3Q9dHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0WFBvcyh4KSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IHggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRZUG9zKHkpIHtcclxuICAgICAgICB2YXIgdmFsID0geSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGpvY2tleVJlcG9zaXRpb24oX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBfbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDEsIHsgeDogLTQ1MCwgeTogLTI4MCwgc2NhbGU6IDAuOSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxKb2NrZXlBbmltKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApLmdldENoaWxkQnlOYW1lKGBQdXp6bGVgKTtcclxuICAgICAgICBsZXQgb3B0aW9uczIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYE9wdGlvbnMyYCk7XHJcbiAgICAgICAgaWYgKG51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBHT09EYCk7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlQ29ycmVjdGApO1xyXG4gICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKGBmaW5pc2hlZGAsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUNvcnJlY3RgKTtcclxuICAgICAgICAgICAgfSksIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVTdGFyc2ApO1xyXG5cclxuICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oYGZpbmlzaGVkYCwgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUlkbGVgKTtcclxuICAgICAgICAgICAgICAgIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUR1c3RBbmltMihNYXRoLnJvdW5kKHRoaXMuZ2V0UmFuZG9tSW50KDUsIDgpKSwgdGhpcy5nZXRSYW5kb21JbnQoMTUsIDIwKSwgb3B0aW9uczIpO1xyXG4gICAgICAgICAgICB9LCBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldENsaXBzKClbMV0uZHVyYXRpb24gKyB0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEJBRGApO1xyXG4gICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVdyb25nYCk7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oYGZpbmlzaGVkYCwgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlV3JvbmdgKTtcclxuICAgICAgICAgICAgfSksIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVN0YXJzYCk7XHJcbiAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKGBmaW5pc2hlZGAsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVJZGxlYCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlEdXN0QW5pbTIoTWF0aC5yb3VuZCh0aGlzLmdldFJhbmRvbUludCg1LCA4KSksIHRoaXMuZ2V0UmFuZG9tSW50KDE1LCAyMCksIG9wdGlvbnMyKTtcclxuICAgICAgICAgICAgfSwgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRDbGlwcygpWzNdLmR1cmF0aW9uICsgdGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5RHVzdEFuaW0obnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcGxheVBhcnRpY2xlc2ApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21GbG9hdChtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUR1c3RBbmltMihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKGBkZUR1c3QyYCk7XHJcbiAgICAgICAgLy8gZGVjbGFyZSBhIGNjLnNwcml0ZUZyYW1lIGFib3ZlIGZvciBwYXJ0aWNsZXMgaW1nXHJcbiAgICAgICAgLy8gZGVjbGFyZSBhIGNjLlRleHR1cmUyRCBhYm92ZSBmb3IgdHJhaWwgaW1nXHJcbiAgICAgICAgLy8gZGVjbGFyZSBhbnkgY2MuQXVkaW9DbGlwIGFib3ZlIGZvciBwYXJ0aWNsZXMgc291bmRGeFxyXG4gICAgICAgIC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgdHJhaWwgc291bmRGeFxyXG4gICAgICAgIGxldCBqb2NrZXkgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApLmdldENoaWxkQnlOYW1lKGBQdXp6bGVgKTtcclxuICAgICAgICBqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZXNTb3VuZDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGpvY2tleS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9LCAwLjc1KTtcclxuICAgICAgICAvLyBqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFBPU2Arc3RhcnRQb3MpO1xyXG4gICAgICAgIGxldCBjb2xvcnNBcnJheTogc3RyaW5nW10gPSBbYCNDMDQyRkZgLCBgI0ZGMDA0OWAsIGAjRkNDMDAwYF07XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTE7XHJcbiAgICAgICAgbGV0IF9vZmZzZXQgPSA1MFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBybmdYID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBybmdZID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xyXG4gICAgICAgICAgICB0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy54ID0gKC00NTAgKyA2NDApICsgMjA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy55ID0gKC0yODAgKyAzNjApICsgNzA7XHJcbiAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5wb3NpdGlvbiA9IGpvY2tleS5nZXRQYXJlbnQoKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoam9ja2V5LmdldFBhcmVudCgpLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gcGFydGljbGVzLnggKz0gNDIwO1xyXG4gICAgICAgICAgICAvLyBwYXJ0aWNsZXMueSArPSAyMjA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVzdEltZztcclxuICAgICAgICAgICAgLy8gcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSBwYXJ0aWNsZXMud2lkdGg7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM1OSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy56SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCArIGk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKHBhcnRpY2xlcy5jb2xvciwgY29sb3JzQXJyYXlbdGhpcy5nZXRSYW5kb21JbnQoMCwgY29sb3JzQXJyYXkubGVuZ3RoKV0pO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy5kdXN0VHJhaWxJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSB0aGlzLmdldFJhbmRvbUZsb2F0KDAuMSwgMC41KTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMTAsIDI1KTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFkZVRpbWUgPSAwLjI7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFzdE1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJ0aWNsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm5nUGFydGljbGVzU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tSW50KDc1LCAxMjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNSwgeyB3aWR0aDogcm5nUGFydGljbGVzU2l6ZSwgaGVpZ2h0OiBybmdQYXJ0aWNsZXNTaXplIH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDEsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLngsIGNjLndpblNpemUud2lkdGgpLCB0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueSwgY2Mud2luU2l6ZS5oZWlnaHQpKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihjYy53aW5TaXplLndpZHRoIC8gNCwgMyAqIGNjLndpblNpemUud2lkdGggLyA0KSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoY2Mud2luU2l6ZS5oZWlnaHQgLyA0LCAzICogY2Mud2luU2l6ZS5oZWlnaHQgLyA0KSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYlRyYWlscyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmR1c3RJbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLnBhcmVudCA9IGJ1bGxldHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnRleHR1cmUgPSB0aGlzLmR1c3RUcmFpbEltZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IHRoaXMuZ2V0UmFuZG9tRmxvYXQoMC4xLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwgMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLndpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1bGxldHMuYW5nbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5uYW1lID0gYGJ1bGxldHNgICsgajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMucGFyZW50ID0gcGFydGljbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChwYXJ0aWNsZXMuY29sb3IsIGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGNvbG9yc0FycmF5Lmxlbmd0aCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1bGxldHMuY29sb3IgPSBwYXJ0aWNsZXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm5nU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldHMpLnRvKDAuMjUsIHsgd2lkdGg6IHJuZ1NpemUsIGhlaWdodDogcm5nU2l6ZSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihidWxsZXRzKS50bygwLjUsIHsgeDogdGhpcy5nZXRSYW5kb21OdW1iZXIoYnVsbGV0cy54IC0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLCA1MDApLCBidWxsZXRzLnggKyB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsIDUwMCkpLCB5OiB0aGlzLmdldFJhbmRvbU51bWJlcihidWxsZXRzLnkgLSB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsIDUwMCksIGJ1bGxldHMueSArIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgNTAwKSkgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldHMpLnRvKDAuMSwgeyBvcGFjaXR5OiAyMDAgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygwLjEsIHsgb3BhY2l0eTogMjAwIH0pLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDIwMCwgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9LCAwLjEgKiAoaSArIDEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
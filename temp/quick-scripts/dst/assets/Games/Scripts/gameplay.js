
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGdhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUFnQztBQUNoQyxxREFBZ0Q7QUFHMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5MkNDO1FBaDJDRyxtQkFBYSxHQUFvQixFQUFFLENBQUM7UUFHcEMsMkJBQXFCLEdBQWtCLEVBQUUsQ0FBQztRQUcxQywyQkFBcUIsR0FBa0IsRUFBRSxDQUFDO1FBRzFDLHVCQUFpQixHQUFrQixFQUFFLENBQUM7UUFTdEMsa0JBQVksR0FBa0IsRUFBRSxDQUFDO1FBU2pDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUdqQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFTLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQztRQUV6QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGVBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsZ0JBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFRLENBQUMsQ0FBQztRQUNsQixzQkFBZ0IsR0FBUSxDQUFDLENBQUM7UUFDMUIsYUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixrQkFBWSxHQUFRLFFBQVEsQ0FBQztRQUM3QixrQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixnQkFBVSxHQUFVLEVBQUUsQ0FBQztRQUd2QixrQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixvQkFBYyxHQUFnQixFQUFFLENBQUM7UUFLakMs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QUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0c7SUFDTCxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RixvREFBb0Q7UUFDcEQsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksRUFBQztnQkFDMUIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNsRTtpQkFDRztnQkFDQSxJQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFDO29CQUMxQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNoRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN0RSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNoRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNqRTtxQkFDSSxJQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDO29CQUM5QyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNoRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN0RSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUMvRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNsRTtxQkFDSSxJQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDO29CQUM5QyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNoRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNoRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUMvRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFN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ZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgSURhdGEgfSBmcm9tIFwiLi9JRGF0YVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3MgfSBmcm9tIFwiLi9nYVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG1hZ2ljYWxTb3VuZCA6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcG9wU291bmQgOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHF1ZXN0aW9uQXVkaW8gOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwb3NpdGl2ZUZlZWRiYWNrU291bmQgOiBjYy5BdWRpb0NsaXBbXT1bXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbmVnYXRpdmVGZWVkYmFja1NvdW5kIDogY2MuQXVkaW9DbGlwW109W107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFJlaW5mb3JlbWVudFNvdW5kIDogY2MuQXVkaW9DbGlwW109W107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHJpZ2h0U291bmQgOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdyb25nU291bmQgOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG9wdGlvblNvdW5kcyA6IGNjLkF1ZGlvQ2xpcFtdPVtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIGRlZmF1bHRNYXQgOiBjYy5NYXRlcmlhbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXHJcbiAgICBncmV5TWF0IDogY2MuTWF0ZXJpYWw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZHVzdEltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5UZXh0dXJlMkQpXHJcbiAgICBkdXN0VHJhaWxJbWc6Y2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcGFydGljbGVzU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOklEYXRhW109W25ldyBJRGF0YV07XHJcbiAgICBwcml2YXRlIGFuc3dlck9iamVjdDpzdHJpbmc7ICAgIFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25Tb3VuZDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRBcnJheTpzdHJpbmdbXT1bXTtcclxuICAgIHByaXZhdGUgbWF4T3B0aW9uczpudW1iZXI9NztcclxuICAgIHByaXZhdGUgU3ViSW1hZ2U6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIHdyb25nQW5zd2VyTGltaXQ6bnVtYmVyPTc7XHJcbiAgICBwcml2YXRlIGFuc3dlcnM6bnVtYmVyW109W107XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uVHlwZTpzdHJpbmc9XCJjdXN0b21cIjtcclxuICAgIHByaXZhdGUgZmVlZGJhY2t0eXBlOnN0cmluZ1tdPVtdO1xyXG4gICAgcHJpdmF0ZSBzY2FsZUFycmF5Om51bWJlcltdPVtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG9wdGlvbkltYWdlczpzdHJpbmdbXT1bXTtcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpb3M6Y2MuQXVkaW9DbGlwW109W107XHJcbiAgICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6Y2MuQXVkaW9DbGlwO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOmNjLkF1ZGlvQ2xpcDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIGlzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbEFuc3dlcnM6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29ycmVjdEFuc3dlckNvdW50Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdyb25nQW5zd2VyQ291bnQ6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNEb25lOmJvb2xlYW5bXT1bXTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZWRPcHRpb25zOmNjLk5vZGVbXT1bXTtcclxuICAgIHByaXZhdGUgQW5zd2VyTm9kZTpjYy5Ob2RlO1xyXG5cclxuICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIGFuc3dlclZhbHVlczogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSB2aWV3UG9ydFdpZHRoOiBudW1iZXIgPSA3MjA7XHJcbiAgICBwcml2YXRlIHZpZXdQb3J0SGVpZ2h0OiBudW1iZXIgPSAxMjgwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpc0NoYXIxOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzV3Jvbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGRlZmF1bHRUaW1lOiBudW1iZXIgPSAxNTtcclxuXHJcbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaERvbmU6c3RyaW5nW109W107XHJcbiAgICBcclxuICAgIC8vcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvczpjYy5BdWRpb0NsaXBbXT1bXTtcclxuICAgIC8vcHJpdmF0ZSBvcHRpb25BbmltYXRpb25zOnN0cmluZ1tdPVtdO1xyXG4gICAgLy9wcml2YXRlIG9wdGlvbkF1ZGlvczpzdHJpbmdbXT1bXTtcclxuICAgIFxyXG5cclxuICAgIC8vcHJpdmF0ZSBnYSA9IHJlcXVpcmUoXCJnYVwiKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46bnVtYmVyLG1heDpudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZWRhdGEoKXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkxvYWRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdGFsIG9wdGlvbnMvYW5zd2VycyA9IFwiLHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgfSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkUXVlc3Rpb24oKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdhRGF0YSk7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJzdG9yeUJvYXJkXCIsIE9iamVjdCwgKF9lcnJvciwgX2pzb25GaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgX2pzb25EYXRhOiBvYmplY3QgPSBfanNvbkZpbGVbXCJqc29uXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9qc29uRGF0YVtcImRhdGFcIl0pKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHRoaXMuZGF0YVtpXS5hbnN3ZXJPYmplY3QpO1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh0aGlzLmRhdGFbaV0ub3B0aW9uQW5pbWF0aW9uSW1hZ2VzKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUGxheVF1ZXN0aW9uKF9kYXRhOiBJRGF0YSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIH0sMC41KTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMuYW5zd2VyVmFsdWVzID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmFuc3dlclZhbHVlcztcclxuICAgICAgICB0aGlzLlVwZGF0ZWRhdGEoKTtcclxuXHJcbiAgICAgICAgbGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApLmdldENoaWxkQnlOYW1lKGBQdXp6bGVgKTtcclxuICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHRpdGxlQW5pbWApO1xyXG4gICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oYGZpbmlzaGVkYCwgKCgpPT57XHJcbiAgICAgICAgICAgIC8vIGpvY2tleU5vZGUud2lkdGggPSAyNTA7XHJcbiAgICAgICAgICAgIC8vIGpvY2tleU5vZGUuaGVpZ2h0ID0gMjUwO1xyXG4gICAgICAgICAgICB0aGlzLmpvY2tleVJlcG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKSk7XHJcbiAgICAgICAgfSksdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxTdGFydEdhbWUoKTtcclxuICAgICAgICB9LDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxTdGFydEdhbWUoKXtcclxuICAgICAgICB0aGlzLnNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IDogXCIpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50b3RhbExldmVscztpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJWYWx1ZXNbaV09ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAvL2dhLm5hbWU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGdhKCdldmVudCcsIFwiVGFwXCIsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJMaW5rXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiQ3JlYXRlIEdhbWVcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogPDE+XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAvLyBndGFnKCdldmVudCcsIFwiTGV2ZWxTdGFydGVkX1wiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJJbWFnZVwiLFxyXG4gICAgICAgIC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIFN0YXJ0ZWRcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsPT10aGlzLnRvdGFsTGV2ZWxzKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvYWRkZGRkZGRkZEBAQEBAQEBAQEBAXCIscGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSk7XHJcbiAgICAgICAgICAgIC8vY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKChwYXJzZUludChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpKzEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcclxuICAgICAgICB9LCAwLjIpO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBbnN3ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikpXHJcbiAgICAgICAgICAgIC8vICAgICAudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuQW5zd2VyTm9kZS54ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLng7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuQW5zd2VyTm9kZS55ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC41LCB7IHk6IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmFuc3dlcnBvc2l0aW9uc1swXS55IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKHRoaXMucG9wU291bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FuVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgfSwwKTtcclxuICAgICAgICB9LCAwLjMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5xdWVzdGlvbkF1ZGlvW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0pO1xyXG4gICAgICAgICAgICAvL30sIDAuNik7XHJcbiAgICAgICAgfSwgMC43KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEpvY2tleSgpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiA0NzUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCUyPT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGBkYW5jZWAsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHRodW1ic191cGAsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMTYwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSx0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTJdLmR1cmF0aW9uKVxyXG4gICAgICAgIH0sIDAuNSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YSgpe1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLm1heE9wdGlvbnMgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS50b3RhbE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5TdWJJbWFnZSA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLlN1YkltYWdlIDtcclxuICAgICAgICB0aGlzLndyb25nQW5zd2VyTGltaXQgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS53cm9uZ0Fuc3dlcnNMaW1pdDtcclxuICAgICAgICB0aGlzLmFuc3dlcnMgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJzO1xyXG4gICAgICAgIHRoaXMuc2NhbGVBcnJheSA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLnNjYWxlQXJyYXk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR5cGUgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5wb3NpdGlvblR5cGU7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja3R5cGUgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5mZWVkYmFja3R5cGU7XHJcbiAgICAgICAgdGhpcy50b3RhbEFuc3dlcnMgPSB0aGlzLmFuc3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb249dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0ucXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kPXRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLnF1ZXN0aW9uU291bmQ7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJyYXkgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS50ZXh0QXJyYXk7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3QgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJPYmplY3Q7XHJcbiAgICAgICAgdGhpcy5vcHRpb25JbWFnZXMgPSB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5vcHRpb25BbmltYXRpb25JbWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgQ2hlY2tGb3JJc0RvbmUoX25vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWU9PV9ub2RlLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV09dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBUb3VjaFN0YXJ0KF9ub2RlOmNjLk5vZGUsX2V2ZW50OmFueSl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbnNpZGUgdG91Y2hzdGFydCA6IFwiKVxyXG4gICAgICAgIGlmKCF0aGlzLmlzRmlyc3RDbGljayl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoIHN0YXJ0IDogXCIpO1xyXG4gICAgICAgIGxldCBpc1N0b3A6Ym9vbGVhbj1mYWxzZTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZihfbm9kZS5uYW1lPT10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUmJnRoaXMuaXNEb25lW2ldKXtcclxuICAgICAgICAgICAgICAgIGlzU3RvcD10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoX25vZGUubmFtZT09dGhpcy50b3VjaERvbmVbaV0pe1xyXG4gICAgICAgICAgICAgICAgaXNTdG9wPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWlzU3RvcCl7XHJcbiAgICAgICAgICAgIGxldCBpc0NvcnJlY3Q6Ym9vbGVhbj1mYWxzZTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFuc3dlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZigocGFyc2VJbnQoX25vZGUubmFtZSktMSk9PXRoaXMuYW5zd2Vyc1tpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDb3JyZWN0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZihpc0NvcnJlY3Qpe1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09MSl7IC8vIGdhbWUgc3BlY2lmaWMgY29uZGl0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXh0cmFOb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYoX25vZGUubmFtZT09XCIxXCIpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjYWxlVHdlZW4uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIGlmKF9ub2RlLm5hbWU9PVwiMlwiKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2FsZVR3ZWVuMS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBhdWRpb05vZGVgKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMucG9zaXRpdmVGZWVkYmFja1NvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV07XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLlJlaW5mb3JlbWVudFNvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMl07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSx0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY29ycmVjdCBpcyBjbGlja2VkID0gXCIsX25vZGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXlBbmltKDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC4yLCB7IHg6IF9ub2RlLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyB4OiAzNjAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyB5OiBfbm9kZS55IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeTogNjQwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5QXVkaW8oXCIvc291bmRzL0NvcnJlY3RBbnN3ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5yaWdodFNvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoPT0zKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQ2hlY2tGb3JJc0RvbmUoX25vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBhdWRpb05vZGVgKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMubmVnYXRpdmVGZWVkYmFja1NvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV07XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid3JvbmcgaXMgY2xpY2tlZCA9IFwiLHRoaXMuaXNEb25lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXlBbmltKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy9pcyBsZXZlbGVuZFxyXG4gICAgICAgICAgICBsZXQgbGV2ZWxlbmQ6Ym9vbGVhbj1mYWxzZVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvLyAgICAgaWYoIXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5bdGhpcy5hbnN3ZXJzW2ldXS5hY3RpdmVJbkhpZXJhcmNoeSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vZm9yIGxldmVsIG9uZSBzcGVjaWZpYyBjYXNlXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKXtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50Kz0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJWYWx1ZXNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTGV2ZWwgQ29tcGxldGVkLi4uISEhISEhISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09dGhpcy50b3RhbExldmVscyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbENvbXBsZXRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBDb21wbGV0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLi4uLi4uLi4uISEhISEhISEhISEhISEhISBnYW1lIGZpbmlzaGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFJlaW5mb3JzZW1lbnRTY3JlZW4oXCJwb3NpdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95UmlnaHRPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV3Jvbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSA9IHRoaXMuYW5zd2VyVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIisoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnBvcHVwVGltZSswLjUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbENvbXBsZXRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBDb21wbGV0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oXCJwb3NpdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50TGV2ZWwgOiBcIixnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbGxQb3NpdGl2ZVJlYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheVNvdW5kKG5hbWUgOiBjYy5BdWRpb0NsaXApe1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UXVlc3Rpb25Tb3VuZChuYW1lIDogY2MuQXVkaW9DbGlwKXtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5xdWVzdGlvbkF1ZGlvW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmVlbih0eXBlMTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMudG91Y2hEb25lID0gW107XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIisoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgU3RhcnRlZFwiLFxyXG4gICAgICAgIC8vICAgICAndmFsdWUnOiAxXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0UmVpbmZvcnNlbWVudFNjcmVlbih0eXBlMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC41LCB7IHg6IC0xMjAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95UmlnaHRPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQW5zd2VyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5wb3BTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeTogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRG9uZVtpXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FuVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ub3VjaFN0YXJ0KGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIHRoaXMgcmVmZXJzIHRvIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQodGhpcy5xdWVzdGlvbkF1ZGlvW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5wb3BTb3VuZC5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNCk7XHJcbiAgICAgICAgICAgICAgICB9LDAuNSlcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3B1cFRpbWUrMC41KTtcclxuXHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3B1cFRpbWUgPSAwO1xyXG5cclxuICAgIHNldFJlaW5mb3JzZW1lbnRTY3JlZW4odHlwZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHR5cGU9PVwicG9zaXRpdmVcIil7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBUaW1lID0gdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0yXS5kdXJhdGlvbit0aGlzLm1hZ2ljYWxTb3VuZC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtNDAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikuZ2V0Q2hpbGRCeU5hbWUoXCJQdXp6bGVcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInB1enpsZVBvc2l0aXZlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gdHJ1ZTsgICAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLm1hZ2ljYWxTb3VuZCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSYmKHRoaXMuaXNEb25lW2ldKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMjUwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogLTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTJdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMubWFnaWNhbFNvdW5kLmR1cmF0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKFwibmVnYXRpdmVcIil7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogLTQwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpLmdldENoaWxkQnlOYW1lKFwiUHV6emxlXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwdXp6bGVOZWdhdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFRpbWUgPSB0aGlzLlJlaW5mb3JlbWVudFNvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uZHVyYXRpb247XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSYmKHRoaXMuaXNEb25lW2ldKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMjUwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogLTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCh0aGlzLlJlaW5mb3JlbWVudFNvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMl0pO1xyXG4gICAgICAgICAgICB9LDAuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihcIm5vbmVcIil7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5zd2VyT2JqZWN0KCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHdpblNpemU6IGArKGNjLndpblNpemUud2lkdGgvY2Mud2luU2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAvL2xldCBhbnN3ZXJOb2RlID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpO1xyXG4gICAgICAgIHRoaXMuQW5zd2VyTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuQW5zd2VyTm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlLnggPSB0aGlzLmNvbnZlcnRYUG9zKGNjLndpblNpemUud2lkdGggKiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCk7XHJcbiAgICAgICAgdGhpcy5BbnN3ZXJOb2RlLnkgPSB0aGlzLmNvbnZlcnRZUG9zKGNjLndpblNpemUuaGVpZ2h0ICogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnkpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLmFuc3dlck9iamVjdCx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpKTtcclxuICAgICAgICB0aGlzLkFuc3dlck5vZGUuZ2V0Q2hpbGRCeU5hbWUoYEFuc3dlck5vZGVgKS5nZXRDaGlsZEJ5TmFtZShgUXVlc3Rpb25gKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFFVRVNUSU9OOiBgK3RoaXMucXVlc3Rpb24rYCAgYCt0aGlzLkFuc3dlck5vZGUuZ2V0Q2hpbGRCeU5hbWUoYEFuc3dlck5vZGVgKS5nZXRDaGlsZEJ5TmFtZShgUXVlc3Rpb25gKSk7XHJcbiAgICAgICAgLy90aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuICAgICAgICBsZXQgX3NjYWxlID0gMC44O1xyXG4gICAgICAgIGlmKGNjLndpblNpemUuaGVpZ2h0IDwgNzIwKXtcclxuICAgICAgICAgICAgX3NjYWxlID0gMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiBfc2NhbGV9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT3B0aW9uT2JqZWN0KG51bU9mT3B0aW9ucyl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcHRpb25PQkpFQ1QgOjpcIixudW1PZk9wdGlvbnMpO1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnBvc2l0aW9uVHlwZSkgeyBcclxuICAgICAgICAgICAgY2FzZSBcImN1c3RvbVwiOiB7IFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxudW1PZk9wdGlvbnM7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldPWNjLmluc3RhbnRpYXRlKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWU9KGkrMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgb3B0aW9ucyA6Ojo6OlwiLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ub3BhY2l0eT0wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0udGV4dEFycmF5W2ldLy8oaSsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuaW5zZXJ0Q2hpbGQodGhpcy5jcmVhdGVkT3B0aW9uc1tpXSxpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uc2NhbGU9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm9wYWNpdHk9MjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCA9IHRoaXMuY29udmVydFhQb3MoY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLnBvc2l0aW9uc1tpXS54KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnkgID0gdGhpcy5jb252ZXJ0WFBvcyhjYy53aW5TaXplLndpZHRoICogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0ucG9zaXRpb25zW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5TdWJJbWFnZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gOTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5TdWJJbWFnZT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLm9wdGlvbkltYWdlc1tpXSx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAtMTcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA3MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLndpZHRoID0gNTUwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKS5oZWlnaHQgPSA1NTA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLnNjYWxlQXJyYXlbaV0gfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5hbnN3ZXJzLmxlbmd0aDw9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuVXBkYXRlQW5pbWF0aW9ucyh0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXRoaXMub3B0aW9uSW1hZ2VzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUG9zaXRpb25zIDogXCIsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54LHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNyZWF0ZWQgb3B0aW9ucyA6ICoqKioqKioqKlwiLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHsgXHJcbiAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T3B0aW9ucygpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5tYXhPcHRpb25zO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSYmKCF0aGlzLmlzRG9uZVtpXSkpe1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT0wO2k8dGhpcy5tYXhPcHRpb25zO2krKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUmJighdGhpcy5pc0RvbmVbaV0pKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSBcclxuICAgICAgICAvLyB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lSaWdodE9wdGlvbnMoKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubWF4T3B0aW9ucztpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUmJih0aGlzLmlzRG9uZVtpXSkpe1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT0wO2k8dGhpcy5tYXhPcHRpb25zO2krKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUmJih0aGlzLmlzRG9uZVtpXSkpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IFxyXG4gICAgICAgIC8vIH0sIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlc3Ryb3lBbnN3ZXJzKCl7XHJcbiAgICAgICAgaWYodGhpcy5BbnN3ZXJOb2RlKXtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLkFuc3dlck5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9dGhpcy5xdWVzdGlvbjtcclxuICAgICAgICAvLyBpZih0aGlzLlN1YkltYWdlPT0xKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9dGhpcy5xdWVzdGlvbjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbE5lZ2F0aXZlRmVlZGJhY2sobm9kZTE6Y2MuTm9kZSl7XHJcbiAgICAgICAgdGhpcy50b3VjaERvbmUucHVzaChub2RlMS5uYW1lKTtcclxuICAgICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQgKz0gMTtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgLy9sZXQgdHdlZW4xID0gIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgIC8vbm9kZTEuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjMyLCAzMCwgNDMpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTm9kZSA9IG5vZGUxLnBhcmVudDtcclxuICAgICAgICAvLyBvcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihlbGVtZW50Lm5hbWUgPT0gdGhpcy5hbnN3ZXJzWzBdLnRvU3RyaW5nKCkpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYFJJR0hUYCk7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xLHtvcGFjaXR5OjB9KVxyXG4gICAgICAgIC8vICAgICAgICAgLnRvKDAuMSx7b3BhY2l0eToyNTV9KS50bygwLjEse29wYWNpdHk6MH0pLnRvKDAuMSx7b3BhY2l0eToyNTV9KS5zdGFydCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG5qbm5ubiBgKyh0aGlzLmFuc3dlcnNbMF0rMSk7XHJcbiAgICAgICAgb3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKHRoaXMuYW5zd2Vyc1swXSsxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKCh0aGlzLmFuc3dlcnNbMF0rMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xNSx7b3BhY2l0eTowfSlcclxuICAgICAgICAgICAgLnRvKDAuMTUse29wYWNpdHk6MjU1fSkudG8oMC4xNSx7b3BhY2l0eTowfSkudG8oMC4xNSx7b3BhY2l0eToyNTV9KS5zdGFydCgpO1xyXG4gICAgICAgIC8vIGlmKG5vZGUxLm5hbWUgPT0gYDFgKXtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYDJgKS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xNSx7b3BhY2l0eTowfSlcclxuICAgICAgICAvLyAgICAgLnRvKDAuMTUse29wYWNpdHk6MjU1fSkudG8oMC4xNSx7b3BhY2l0eTowfSkudG8oMC4xNSx7b3BhY2l0eToyNTV9KS5zdGFydCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zTm9kZS5nZXRDaGlsZEJ5TmFtZShgMWApLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4ob3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYDFgKS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpKS50bygwLjEse29wYWNpdHk6MH0pXHJcbiAgICAgICAgLy8gICAgIC50bygwLjEse29wYWNpdHk6MjU1fSkudG8oMC4xLHtvcGFjaXR5OjB9KS50bygwLjEse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBub2RlMS5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG4gICAgICAgIG5vZGUxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54KzEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueC0xMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54KzEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueC0xMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7ICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vY2FsbCBuZWdhdGl2ZSBhdWRpbyBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5uZWdhdGl2ZVNvdW5kO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL3RoaXMucGxheUF1ZGlvKFwiL3NvdW5kcy9pbmNvcnJlY3RBbnN3ZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGxheVNvdW5kKHRoaXMud3JvbmdTb3VuZCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLnBsYXlTb3VuZCh0aGlzLm5lZ2F0aXZlRmVlZGJhY2tbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIC8vIH0sIDAuOCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgLy8gfSwgdGhpcy5uZWdhdGl2ZUZlZWRiYWNrW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uZHVyYXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdHdlZW4xLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYodGhpcy53cm9uZ0Fuc3dlckNvdW50Pj10aGlzLndyb25nQW5zd2VyTGltaXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jYWxsTmVnYXRpdmVSZWFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWxpZ2h0TGVmdEFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw9PXRoaXMudG90YWxMZXZlbHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlcnNbMF0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbdGhpcy5hbnN3ZXJzWzBdXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95T3B0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFJlaW5mb3JzZW1lbnRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkgPSB0aGlzLmFuc3dlclZhbHVlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiKyhnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMucG9wdXBUaW1lKzAuNSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV3Jvbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbdGhpcy5hbnN3ZXJzWzBdXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U2NyZWVuKFwibmVnYXRpdmVcIik7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuKFwibmVnYXRpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuOCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFBvc2l0aXZlRmVlZGJhY2sobm9kZTE6Y2MuTm9kZSwgZmVlZGJhY2tOYW1lKXtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2goZmVlZGJhY2tOYW1lKSB7IFxyXG4gICAgICAgICAgICBjYXNlIFwiY29uZmV0dGlcIjogeyBcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKG5vZGUxLngsbm9kZTEueSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAyNTUsIDApO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2NhbGU9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2V0UG9zaXRpb24obm9kZTEueCxub2RlMS55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmRlc3Ryb3k7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24oLTUwMCwtNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLnNldFBvc2l0aW9uKC01MDAsLTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2V4dHJhIGNvZGUgXHJcbiAgICAgICAgICAgICAgICAvLyBpZihub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd2hpdGVUaWNrXCIsbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIFwiZGVzdHJveVwiOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgb3BhY2l0eTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X3JpZ2h0XCI6IHsgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyB4OiB0aGlzLnZpZXdQb3J0V2lkdGgrMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X2xlZnRcIjogeyBcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IC0xMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X3RvcFwiOiB7IFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDIsIHsgeTogdGhpcy52aWV3UG9ydEhlaWdodCsxMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMiwgeyB4OiBub2RlMS54KzMwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfYm90dG9tXCI6IHsgXHJcbiAgICAgICAgICAgICAgICAvL2dhbWUgc3BlY2lmaWMgY29kZVxyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09NCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IC0yODAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IG5vZGUxLnkgKyAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiBub2RlMS55LTUwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpOy8vYm91bmNlSW5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X0FuaW1hdGlvblwiOiB7IFxyXG4gICAgICAgICAgICAgICAgLy9nYW1lIHNwZWNpZmljIGNvZGVcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLng9bm9kZTEueCsxMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS55PW5vZGUxLnkrNTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsPT0zKXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS54PW5vZGUxLngrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueT1ub2RlMS55KzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnNjYWxlPW5vZGUxLnNjYWxlLTAuMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw9PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGUxLng9bm9kZTEueCsyMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub2RlMS55PW5vZGUxLnkrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEuc2NhbGU9bm9kZTEuc2NhbGUrMC40O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbkNsaXAgOiBjYy5BbmltYXRpb25DbGlwIC8vPSB0aGlzLm9wdGlvbkFuaW1hdGlvbnNbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcbiAgICAgICAgICAgICAgICBub2RlMS5hZGRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmFkZENsaXAoYW5pbWF0aW9uQ2xpcCk7XHJcbiAgICAgICAgICAgICAgICBub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbkNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKCdmaW5pc2hlZCcsICB0aGlzLmZpbmlzaGVkQW5pbSwgICAgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfU2NhbGVcIjp7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3V0bGluZVNjYWxlID0gbm9kZTEuc2NhbGUrKG5vZGUxLnNjYWxlKjMwLzEwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihub2RlMS5zY2FsZTw9MC43KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZSsobm9kZTEuc2NhbGUvMik7XHJcbiAgICAgICAgICAgICAgICAvLyB9IFxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZihub2RlMS5zY2FsZT49MC43JiZub2RlMS5zY2FsZTw9MC45KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAgICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlLTAuNDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJvdXRsaW5lXCIpLnNjYWxlID0gb3V0bGluZVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJvdXRsaW5lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG91dGxpbmVTY2FsZSswLjEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogb3V0bGluZVNjYWxlIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcmFtZUNoYW5nZVwiOiB7IFxyXG4gICAgICAgICAgICAgICAgLy9ub2RlMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogbm9kZTEuc2NhbGUrMC4xIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG5vZGUxLnNjYWxlIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFrZVwiOntcclxuICAgICAgICAgICAgICAgIGxldCB0d2VlbjEgPSAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54KzEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuMS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9jZW50ZXJcIjp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95T3RoZXJPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB9LDApO1xyXG4gICAgICAgICAgICAgICAgaWYobm9kZTEubmFtZT09XCIyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHg6IG5vZGUxLngtMzI1IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihub2RlMS5uYW1lPT1cIjFcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgeDogbm9kZTEueCszMjUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7IFxyXG4gICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU90aGVyT3B0aW9ucygpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lJiYoIXRoaXMuaXNEb25lW2ldKSl7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoZWRBbmltKGV2ZW50OmNjLkV2ZW50KXtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uZU1hbnlcIikueCx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uZU1hbnlcIikueSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJhbmRvbW51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsMSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBdWRpb0NsaXAgOiBjYy5BdWRpb0NsaXAgLy89IHRoaXMubmVnYXRpdmVBdWRpb3NbcmFuZG9tbnVtYmVyXTtcclxuICAgICAgICBpZihyYW5kb21udW1iZXI9PTApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tR29wYWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFyMT10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSAtNDc1O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xMDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAtMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVZID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24xXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKFwibmVnYXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gOTM5O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xNDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKSkudG8oMC4zLCB7IHg6IDQ3NSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSBjdXJyZW50QXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgfSwgMC45KTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZXByb2dyZXNzKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuZmlsbFJhbmdlID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAqICgzOTQgLyB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikpLnRvKDAuNSwgeyB3aWR0aDogZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmZpbGxSYW5nZSB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TaG93U3RhcigpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1N0YXIoKXtcclxuICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gKDM5NCAqIDEvdGhpcy50b3RhbExldmVscykpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKS53aWR0aCA9PSAoMzk0ICogTWF0aC5jZWlsKHRoaXMudG90YWxMZXZlbHMgLyAyKSAvIHRoaXMudG90YWxMZXZlbHMpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gMzk0KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNFwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjVcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjZcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNFwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3Jlc3NCYXIoKXtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlclZhbHVlcyA6IFwiLCB0aGlzLmFuc3dlclZhbHVlcylcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRvdGFsTGV2ZWxzO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYW5zd2VyVmFsdWVzW2ldPT10cnVlKXtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09aSsxKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInVuYXR0ZW1wdGVkUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIndyb25nUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw+aSsxKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInVuYXR0ZW1wdGVkUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw8aSsxKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIndyb25nUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3ByaXRlcyhfc3ByaXRlTmFtZTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKF9zcHJpdGVOYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKF9zcHJpdGVOYW1lKTtcclxuICAgICAgICAgICAgX25vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZUFuaW1hdGlvbnMoX3Nwcml0ZU5hbWU6IHN0cmluZywgX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChfc3ByaXRlTmFtZSwgY2MuQW5pbWF0aW9uQ2xpcCwgZnVuY3Rpb24gKGVyciwgYW5pbWF0aW9uOiBjYy5BbmltYXRpb25DbGlwKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5hZGRDbGlwKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIF9ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYW5pbWF0aW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAvLyBfdXBkYXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBdWRpbyhfYXVkaW9QYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgICAgICAvLyBsZXQgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKF9hdWRpb1BhdGgsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW9NYW5hZ2VyLnBsYXkoYXVkaW9DbGlwLm5hbWUsIGF1ZGlvQ2xpcCwgZmFsc2UsIFwiVk9cIik7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW9DbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoYXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXVkaW9DbGlwIG5hbWUgPSBcIiwgYXVkaW9DbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICBjbGlwID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlsaWdodExlZnRBbnN3ZXJzKCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuYW5zd2Vycy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKChwYXJzZUludCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUpLTEpPT10aGlzLmFuc3dlcnNbal0pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5jb2xvciA9IG5ldyBjYy5Db2xvcig3MSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW5zaWRlIGhpbGlnaHRMZWZ0QW5zd2VycyA6IFwiK3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTx0aGlzLmFuc3dlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIGlmKChwYXJzZUludChfbm9kZS5uYW1lKS0xKT09dGhpcy5hbnN3ZXJzW2ldKXtcclxuICAgICAgICAvLyAgICAgICAgIGlzQ29ycmVjdD10cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFhQb3MoeCl7XHJcbiAgICAgICAgdmFyIHZhbCA9IHggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRZUG9zKHkpe1xyXG4gICAgICAgIHZhciB2YWwgPSB5IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgam9ja2V5UmVwb3NpdGlvbihfbm9kZTpjYy5Ob2RlKXtcclxuICAgICAgICBfbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDEsIHt4OiAtNDUwLHk6IC0yODAsIHNjYWxlOiAwLjl9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxKb2NrZXlBbmltKG51bTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBqb2NrZXlOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKS5nZXRDaGlsZEJ5TmFtZShgUHV6emxlYCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBPcHRpb25zMmApO1xyXG4gICAgICAgIGlmKG51bSA9PSAwKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEdPT0RgKTtcclxuICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVDb3JyZWN0YCk7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oYGZpbmlzaGVkYCwgKCgpPT57XHJcbiAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUNvcnJlY3RgKTtcclxuICAgICAgICAgICAgfSksIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlU3RhcnNgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihgZmluaXNoZWRgLCAoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUlkbGVgKTtcclxuICAgICAgICAgICAgICAgIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUR1c3RBbmltMihNYXRoLnJvdW5kKHRoaXMuZ2V0UmFuZG9tSW50KDUsOCkpLCB0aGlzLmdldFJhbmRvbUludCgxNSwgMjApLCBvcHRpb25zMik7XHJcbiAgICAgICAgICAgIH0sam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRDbGlwcygpWzFdLmR1cmF0aW9uK3RoaXMucG9zaXRpdmVGZWVkYmFja1NvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQkFEYCk7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlV3JvbmdgKTtcclxuICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihgZmluaXNoZWRgLCAoKCk9PntcclxuICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlV3JvbmdgKTtcclxuICAgICAgICAgICAgfSksIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVTdGFyc2ApO1xyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihgZmluaXNoZWRgLCAoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUlkbGVgKTtcclxuICAgICAgICAgICAgICAgIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUR1c3RBbmltMihNYXRoLnJvdW5kKHRoaXMuZ2V0UmFuZG9tSW50KDUsOCkpLCB0aGlzLmdldFJhbmRvbUludCgxNSwgMjApLCBvcHRpb25zMik7XHJcbiAgICAgICAgICAgIH0sam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRDbGlwcygpWzNdLmR1cmF0aW9uK3RoaXMubmVnYXRpdmVGZWVkYmFja1NvdW5kW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsYXlEdXN0QW5pbShudW06bnVtYmVyKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcGxheVBhcnRpY2xlc2ApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjsgXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUR1c3RBbmltMihudW0xOm51bWJlciwgbnVtMjpudW1iZXIsIF9ub2RlOmNjLk5vZGUpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUudHJhY2UoYGRlRHVzdDJgKTtcclxuICAgICAgICAvLyBkZWNsYXJlIGEgY2Muc3ByaXRlRnJhbWUgYWJvdmUgZm9yIHBhcnRpY2xlcyBpbWdcclxuICAgICAgICAvLyBkZWNsYXJlIGEgY2MuVGV4dHVyZTJEIGFib3ZlIGZvciB0cmFpbCBpbWdcclxuICAgICAgICAvLyBkZWNsYXJlIGFueSBjYy5BdWRpb0NsaXAgYWJvdmUgZm9yIHBhcnRpY2xlcyBzb3VuZEZ4XHJcbiAgICAgICAgLy8gZGVjbGFyZSBhbnkgY2MuQXVkaW9DbGlwIGFib3ZlIGZvciB0cmFpbCBzb3VuZEZ4XHJcbiAgICAgICAgbGV0IGpvY2tleSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgcG9kaXVtYCkuZ2V0Q2hpbGRCeU5hbWUoYFB1enpsZWApO1xyXG4gICAgICAgIGpvY2tleS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBhcnRpY2xlc1NvdW5kO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIGpvY2tleS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9LDAuNzUpO1xyXG4gICAgICAgIC8vIGpvY2tleS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgUE9TYCtzdGFydFBvcyk7XHJcbiAgICAgICAgbGV0IGNvbG9yc0FycmF5OnN0cmluZyBbXSA9IFtgI0MwNDJGRmAsIGAjRkYwMDQ5YCwgYCNGQ0MwMDBgXTtcclxuICAgICAgICBsZXQgcm5nX051bU9mUGFydGljbGVzID0gbnVtMTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bTE7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGxldCBybmdYID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBybmdZID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xyXG4gICAgICAgICAgICB0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy54ID0gKC00NTAgKyA2NDApICsgMjA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy55ID0gKC0yODAgKyAzNjApICsgNzA7XHJcbiAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5wb3NpdGlvbiA9IGpvY2tleS5nZXRQYXJlbnQoKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoam9ja2V5LmdldFBhcmVudCgpLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gcGFydGljbGVzLnggKz0gNDIwO1xyXG4gICAgICAgICAgICAvLyBwYXJ0aWNsZXMueSArPSAyMjA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVzdEltZztcclxuICAgICAgICAgICAgLy8gcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSBwYXJ0aWNsZXMud2lkdGg7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM1OSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy56SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCtpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgcGFydGljbGVzLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChwYXJ0aWNsZXMuY29sb3IsIGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGNvbG9yc0FycmF5Lmxlbmd0aCldKTtcclxuICAgICAgICAgICAgdHJhaWwuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykucHJldmlldztcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMuZHVzdFRyYWlsSW1nO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID0gdGhpcy5nZXRSYW5kb21GbG9hdCgwLjEsIDAuNSk7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwLCAyNSk7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnRpY2xlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcm5nUGFydGljbGVzU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tSW50KDc1LDEyNSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjUsIHt3aWR0aDogcm5nUGFydGljbGVzU2l6ZSwgaGVpZ2h0OiBybmdQYXJ0aWNsZXNTaXplfSx7ZWFzaW5nOmBiYWNrT3V0YH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9LDAuNSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDEsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54LCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnksIGNjLndpblNpemUuaGVpZ2h0KSksIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGNjLndpblNpemUud2lkdGgvNCwgMyogY2Mud2luU2l6ZS53aWR0aC80KSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoY2Mud2luU2l6ZS5oZWlnaHQvNCwgMyogY2Mud2luU2l6ZS5oZWlnaHQvNCkpKS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBudW0yOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYlRyYWlscyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmR1c3RJbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLnBhcmVudCA9IGJ1bGxldHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnRleHR1cmUgPSB0aGlzLmR1c3RUcmFpbEltZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IHRoaXMuZ2V0UmFuZG9tRmxvYXQoMC4xLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwgMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFzdE1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy53aWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidWxsZXRzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzU5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMubmFtZSA9IGBidWxsZXRzYCtqOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMucGFyZW50ID0gcGFydGljbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChwYXJ0aWNsZXMuY29sb3IsIGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGNvbG9yc0FycmF5Lmxlbmd0aCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1bGxldHMuY29sb3IgPSBwYXJ0aWNsZXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm5nU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldHMpLnRvKDAuMjUsIHt3aWR0aDogcm5nU2l6ZSwgaGVpZ2h0OiBybmdTaXplfSx7ZWFzaW5nOiBgYmFja091dGB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0cykudG8oMC41LCB7eDogdGhpcy5nZXRSYW5kb21OdW1iZXIoYnVsbGV0cy54IC0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLDUwMCksIGJ1bGxldHMueCArIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApKSwgeTogdGhpcy5nZXRSYW5kb21OdW1iZXIoYnVsbGV0cy55IC0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLDUwMCksIGJ1bGxldHMueSArIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApKX0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihidWxsZXRzKS50bygwLjEse29wYWNpdHk6IDIwMH0pLnRvKDAuMSx7b3BhY2l0eTogMjU1fSkudG8oMC4xLHtvcGFjaXR5OiAyMDB9KS50bygwLjEse29wYWNpdHk6IDI1NX0pLnRvKDAuMSx7b3BhY2l0eTogMjAwLCBzY2FsZTogMH0pLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sMC4xKihpKzEpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
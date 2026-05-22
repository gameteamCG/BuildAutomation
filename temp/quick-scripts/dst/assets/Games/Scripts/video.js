
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/video.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '959f7A5jptMGpxTvBXeyZrl', 'video');
// Games/Scripts/video.ts

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
var StartGame_1 = require("../../Framework/Scripts/StartGame");
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QuestionData = /** @class */ (function () {
    function QuestionData() {
        // @property(Number)
        this.questionTime = 0;
        // @property(Boolean)
        this.isoptionText = false;
        // @property(Boolean)
        this.isquestionText = false;
        // @property(cc.SpriteFrame)
        this.questionImg = null;
        // @property(cc.AudioClip)
        this.questionAudio = null;
        // @property(String)
        this.questionText = "";
        // @property(cc.SpriteFrame)
        this.optionImgs = [];
        // @property(String)
        this.optionTexts = [];
        // @property(cc.AudioClip)
        this.reiterationAudio = null;
        this.correctAudio = null;
        // @property(cc.AudioClip)
        this.wrongAudio = null;
        // @property(Number)
        this.correctAnswer = 1;
    }
    QuestionData = __decorate([
        ccclass("QuestionData")
    ], QuestionData);
    return QuestionData;
}());
var video = /** @class */ (function (_super) {
    __extends(video, _super);
    function video() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tools = null;
        _this.questionNode = null;
        _this.character = null;
        _this.starsPanel = null;
        _this.bgMusic = null;
        _this.correctSound = null;
        _this.starSprites = [];
        _this.jaipuria_font = null;
        _this.podar_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.positiveVO = [];
        _this.duration = 0;
        _this.slider = null;
        _this.toolActivater = null;
        _this.questions = [];
        _this.isSliding = false;
        _this.currentTime = 0;
        _this.timers = [];
        _this.totalQuestions = 0;
        _this.questionAppeared = [];
        _this.currentQuestion = 0;
        _this.answeredQuestion = [];
        _this.isPause = false;
        _this.isPlay = true;
        _this.isOnSlider = false;
        _this.canNextQuestion = true;
        _this.attemps = 0;
        _this.videoCompleted = false;
        _this.gameStarted = true;
        _this.correctAnim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        _this.wrongAnim = ["negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3"];
        _this.puzzleCorrectAnim = ["positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3"];
        _this.puzzleNegativeAnim = ["negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1"];
        _this.supercubCorrectAnim = ["positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5"];
        _this.supercubNegativeAnim = ["negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4"];
        _this.podarCorrectAnim = ["possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6", "possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        _this.podarNegativeAnim = ["negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6", "negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    video.prototype.onLoad = function () {
        console.log("video onload");
        this.node.getComponent(cc.VideoPlayer).stop();
        this.UpdateQuestions();
        this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
        console.log("this.questions.length ::", this.questions.length);
        for (var i = 0; i < this.questions.length; i++) {
            this.timers[i] = this.questions[i].questionTime;
            console.log("question timer = ", this.timers[i]);
            this.totalQuestions++;
            this.questionAppeared[i] = false;
            this.answeredQuestion[i] = false;
            console.log("this.questionAppeared :::::::::", this.questionAppeared);
        }
        this.slider.children[2].on("touchstart", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchmove", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchend", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);
        this.slider.children[2].on("touchcancel", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);
        this.slider.children[0].on("touchstart", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchmove", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchend", function () {
            this.UpdateSlider();
        }, this);
    };
    video.prototype.UpdateQuestions = function () {
        var _this = this;
        console.log("UpdateQuestions ::");
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.tlc_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.supercub_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.jaipuria_font;
            });
        }
        var _loop_1 = function (i) {
            console.log("startGame.Instance.TotalLevels", StartGame_1.default.Instance.TotalLevels);
            this_1.questions[i] = new QuestionData();
            this_1.questions[i].questionTime = parseInt(StartGame_1.default.Instance.questions[i].QuestionAppearTime);
            this_1.questions[i].isoptionText = StartGame_1.default.Instance.questions[i].IsOptionText;
            this_1.questions[i].isquestionText = StartGame_1.default.Instance.questions[i].IsQuestionText;
            this_1.questions[i].correctAnswer = parseInt(StartGame_1.default.Instance.questions[i].CorrectAnswer);
            if (!this_1.questions[i].isquestionText) {
                //load the question image
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.questions[i].questionImg = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].QuestionImageName, function (spriteFrame) {
                        _this.questions[i].questionImg = spriteFrame;
                    });
                }
            }
            else {
                this_1.questions[i].questionText = StartGame_1.default.Instance.questions[i].QuestionText;
            }
            if (!this_1.questions[i].isoptionText) {
                var _loop_2 = function (j) {
                    if (StartGame_1.default.Instance.isDemoGame) {
                        cc.loader.load(StartGame_1.default.Instance.questions[i].Options[j], function (err, texture) {
                            if (err) {
                                console.error("Failed to load image:", err);
                                return;
                            }
                            var spriteFrame = new cc.SpriteFrame(texture);
                            _this.questions[i].optionImgs[j] = spriteFrame;
                        });
                    }
                    else {
                        this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].Options[j], function (spriteFrame) {
                            _this.questions[i].optionImgs[j] = spriteFrame;
                        });
                    }
                };
                //load the option images
                for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) {
                    _loop_2(j);
                }
            }
            else {
                //load the option texts
                for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) {
                    this_1.questions[i].optionTexts[j] = StartGame_1.default.Instance.questions[i].Options[j];
                }
            }
            if (StartGame_1.default.Instance.isDemoGame) {
                cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].questionAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].reiterationAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].CorrectAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].correctAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].WrongAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].wrongAudio = audioClip;
                });
            }
            else {
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].QuestionAudioName, function (audioClip) {
                    _this.questions[i].questionAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function (audioClip) {
                    _this.questions[i].reiterationAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].CorrectAudioName, function (audioClip) {
                    _this.questions[i].correctAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].WrongAudioName, function (audioClip) {
                    _this.questions[i].wrongAudio = audioClip;
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < StartGame_1.default.Instance.TotalLevels; i++) {
            _loop_1(i);
        }
    };
    video.prototype.start = function () {
        var _this = this;
        console.log("video start");
        this.scheduleOnce(function () {
            _this.playVideo1();
        }, 0.5);
        console.log("starsEarned--1");
        for (var i = 2; i <= StartGame_1.default.Instance.questions.length; i++) {
            var star = cc.instantiate(this.starsPanel.children[0]);
            star.parent = this.starsPanel;
            star.name = i.toString();
            star.setPosition(0, 0);
        }
        this.OptionsLayout();
        if (StartGame_1.default.Instance.jockeyName == "puzzle") {
            this.correctAnim = this.puzzleCorrectAnim;
            this.wrongAnim = this.puzzleNegativeAnim;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.correctAnim = this.supercubCorrectAnim;
            this.wrongAnim = this.supercubNegativeAnim;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.correctAnim = this.podarCorrectAnim;
            this.wrongAnim = this.podarNegativeAnim;
        }
    };
    video.prototype.playVideo1 = function () {
        var _this = this;
        console.log("playVideo1 ::::::::::::");
        // this.node.on('completed', function () {
        console.log("playVideo2 ::::::::::::");
        if (this.gameStarted) {
            this.checkOnMissingQuestions();
            console.log("checkOnMissingQuestions 1");
            console.log("starsEarned--2");
            console.log("video completed");
            this.tools.active = false;
            this.videoCompleted = true;
        }
        // cc.director.loadScene("1");
        // this.node.destroy();
        // }, this);
        this.node.on('playing', function () {
            var _this = this;
            this.isPlay = true;
            this.isPause = false;
            // console.log("Duration = ", this.node.getComponent(cc.VideoPlayer).getDuration());
            this.scheduleOnce(function () {
                _this.ActivateTools(false);
            }, 2);
        }, this);
        // this.node.getComponent(cc.VideoPlayer).pause();
        this.node.getComponent(cc.VideoPlayer).volume = 0;
        // this.node.getComponent(cc.VideoPlayer).resume();
        // this.node.getComponent(cc.VideoPlayer).pause();
        this.node.getComponent(cc.VideoPlayer).play();
        this.scheduleOnce(function () {
            // this.ActivateTools(false);
            _this.node.getComponent(cc.VideoPlayer).volume = 1;
            _this.UpdateSlider();
            _this.scheduleOnce(function () {
                _this.gameStarted = true;
            }, 1);
            // this.isSliding = true;
        }, 1);
        // this.scheduleOnce(() => {
        //     this.tools.active = true;
        // }, 5);
    };
    video.prototype.ActivateTools = function (_activate) {
        var _this = this;
        if (_activate === void 0) { _activate = true; }
        if (_activate) {
            this.toolActivater.active = false;
            this.tools.opacity = 255;
            this.scheduleOnce(function () {
                if (_this.tools.opacity == 255 && !_this.isPause && !_this.isOnSlider) {
                    _this.ActivateTools(false);
                }
            }, 2);
        }
        else {
            this.toolActivater.active = true;
            this.tools.opacity = 0;
        }
    };
    video.prototype.starUpdate = function (_current, _answered, _correct) {
        if (_answered === void 0) { _answered = false; }
        if (_correct === void 0) { _correct = true; }
        for (var i = 0; i < this.starsPanel.children.length; i++) {
            if (i == _current) {
                this.starsPanel.children[i].opacity = 255;
                if (!_answered) {
                    this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[0];
                }
                else if (_answered) {
                    if (_correct) {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[2];
                    }
                    else {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[1];
                    }
                }
                break;
            }
        }
    };
    video.prototype.ResumePlayButton = function () {
        cc.audioEngine.stopMusic();
        this.isPlay = true;
        this.isPause = false;
        this.node.getComponent(cc.VideoPlayer).resume();
        this.tools.getChildByName("resume").active = false;
        this.tools.getChildByName("pause").active = true;
    };
    video.prototype.PauseButton = function () {
        this.isPlay = false;
        this.isPause = true;
        this.node.getComponent(cc.VideoPlayer).pause();
        this.tools.getChildByName("resume").active = true;
        this.tools.getChildByName("pause").active = false;
        this.ActivateTools();
    };
    video.prototype.UpdateSlider = function () {
        var _this = this;
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        console.log("updateslider : ", Math.round(this.node.getComponent(cc.VideoPlayer).currentTime));
        this.scheduleOnce(function () {
            _this.isSliding = true;
            _this.node.getComponent(cc.VideoPlayer).pause();
            _this.node.getComponent(cc.VideoPlayer).resume();
            _this.tools.getChildByName("resume").active = false;
            _this.tools.getChildByName("pause").active = true;
        }, 0.2);
    };
    video.prototype.UpdateSlider2 = function () {
        var _this = this;
        // console.log("updateslider : ");
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.VideoPlayer).resume();
        }, 0.2);
        // this.scheduleOnce(() => {
        //     this.isSliding = true;
        //     this.node.getComponent(cc.VideoPlayer).pause();
        //     this.node.getComponent(cc.VideoPlayer).resume();
        //     this.tools.getChildByName("resume").active = false;
        //     this.tools.getChildByName("pause").active = true;
        // }, 0.1);
    };
    video.prototype.SliderButton = function () {
        this.isOnSlider = true;
        // console.log("is slider button working!!!!!!!");
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
    };
    video.prototype.OnQuestionAnswered = function (_event) {
        var _this = this;
        var input = _event.target.name;
        this.attemps++;
        if (parseInt(input) == this.questions[this.currentQuestion - 1].correctAnswer) {
            // this.character.getComponent(cc.Animation).play("correct");
            console.log("correctAnswer--" + this.currentQuestion);
            console.log("levelComplete--" + this.currentQuestion);
            _event.target.getChildByName("green").active = true;
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.questions[this.currentQuestion - 1].reiterationAudio != null) {
                this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].reiterationAudio, false);
                }, 0.5);
            }
            _event.target.getParent().children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            // let num: number = this.getRandomNumber(0, this.correctAnim.length - 1)
            var num_1 = this.currentQuestion - 1;
            if (num_1 > this.correctAnim.length - 1) {
                num_1 -= (this.correctAnim.length - 1);
                if (num_1 > this.correctAnim.length - 1) {
                    num_1 -= (this.correctAnim.length - 1);
                    if (num_1 > this.correctAnim.length - 1) {
                        num_1 -= (this.correctAnim.length - 1);
                    }
                }
            }
            this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].correctAudio, false);
                _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, _this.correctAnim[num_1], false);
                if (_this.attemps <= 1) {
                    _this.starUpdate(_this.currentQuestion - 1, true, true);
                }
                else {
                    _this.starUpdate(_this.currentQuestion - 1, true, false);
                }
                _this.scheduleOnce(function () {
                    _this.attemps = 0;
                    _this.questionNode.active = false;
                    _event.target.getParent().children.forEach(function (element) {
                        // this.character.getComponent(cc.Animation).play("tweenOut");
                        cc.tween(_this.character.getChildByName("anim")).to(0.5, { x: -600 }, { easing: "backInOut" }).start();
                        element.getChildByName("green").active = false;
                        element.getChildByName("red").active = false;
                        element.getComponent(cc.Button).interactable = true;
                    });
                    _this.canNextQuestion = true;
                    if (_this.videoCompleted) {
                        _this.checkOnMissingQuestions();
                        console.log("checkOnMissingQuestions 2");
                    }
                    else {
                        _this.ResumePlayButton();
                    }
                }, _this.getAnimDuration(_this.correctAnim[num_1]));
            }, this.questions[this.currentQuestion - 1].reiterationAudio.duration + 0.5);
        }
        else {
            console.log("wrongAnswer--" + this.currentQuestion);
            // console.log("levelComplete--" + this.currentQuestion);
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].wrongAudio, false);
            // this.character.getComponent(cc.Animation).play("wrong");
            // let num: number = this.getRandomNumber(0, this.wrongAnim.length - 1);
            var num = this.currentQuestion - 1;
            if (num > this.wrongAnim.length - 1) {
                num -= (this.wrongAnim.length - 1);
            }
            this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            // this.character.getChildByName("anim").getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            this.scheduleOnce(function () {
                // this.character.getComponent(cc.Animation).play("Idle");
                _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }, this.getAnimDuration(this.wrongAnim[num]));
            _event.target.getChildByName("red").active = true;
            _event.target.getComponent(cc.Button).interactable = false;
        }
    };
    video.prototype.OnSoundButton = function () {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
    };
    video.prototype.checkOnMissingQuestions = function () {
        var _this = this;
        console.log("this.questionAppeared.length ::::", this.questionAppeared.length);
        var isEnd = true;
        for (var i = 0; i < this.questionAppeared.length; i++) {
            if (!this.questionAppeared[i]) {
                isEnd = false;
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                console.log("levelStarted--" + this.currentQuestion);
                this.questionNode.active = true;
                break;
            }
        }
        if (isEnd) {
            this.character.active = false;
            this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(function () {
                _this.node.getParent().getChildByName("gameEnd").active = true;
                console.log("starsEarned--3");
                console.log("showedScreen--Excellent");
                console.log("gameEnded--true");
                if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "crayon") {
                    _this.node.getParent().getChildByName("gameEnd").getChildByName("jaipuria").active = true;
                }
                else {
                    _this.node.getParent().getChildByName("gameEnd").getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
                }
                _this.scheduleOnce(function () {
                    _this.node.active = false;
                    if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "crayon") {
                        _this.node.getParent().getChildByName("gameEnd").getChildByName("end").active = true;
                    }
                }, 2);
            }, this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).currentClip.duration);
        }
    };
    video.prototype.questionSetup = function () {
        var _this = this;
        console.log("questionSetup :::::::::");
        var current = this.currentQuestion;
        this.starUpdate(this.currentQuestion);
        // this.character.getComponent(cc.Animation).play("tweenIn");
        this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim")).to(0.5, { x: 0 }, { easing: "backInOut" }).start();
        var id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        cc.audioEngine.setVolume(id, 0.1);
        if (this.questions[this.currentQuestion].isquestionText) {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).string = this.questions[this.currentQuestion].questionText;
            this.questionNode.getChildByName("questionBox").getChildByName("img").active = false;
            this.questionNode.getChildByName("questionBox").getChildByName("text").active = true;
        }
        else {
            this.questionNode.getChildByName("questionBox").getChildByName("text").active = false;
            this.questionNode.getChildByName("questionBox").getChildByName("img").active = true;
            this.questionNode.getChildByName("questionBox").getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.questions[this.currentQuestion].questionImg;
        }
        console.log("############", this.questions[this.currentQuestion].isoptionText);
        if (this.questions[this.currentQuestion].isoptionText) {
            console.log("11111111111111111");
            var i_1 = 0;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.active = false;
                if (i_1 <= (_this.questions[_this.currentQuestion].optionTexts.length - 1)) {
                    element.active = true;
                    element.getChildByName("text").getComponent(cc.Label).string = _this.questions[_this.currentQuestion].optionTexts[i_1];
                    element.getChildByName("img").active = false;
                    element.getChildByName("text").active = true;
                }
                i_1++;
            });
        }
        else {
            console.log("222222222222222222");
            var i_2 = 0;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.active = false;
                console.log("element ::::::::::::::", _this.currentQuestion, _this.questions[_this.currentQuestion].optionImgs.length);
                if (i_2 <= (_this.questions[_this.currentQuestion].optionImgs.length - 1)) {
                    element.active = true;
                    element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = _this.questions[_this.currentQuestion].optionImgs[i_2];
                    element.getChildByName("text").active = false;
                    element.getChildByName("img").active = true;
                    console.log("element ::::::::::::::", element);
                }
                i_2++;
            });
        }
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questions[current].questionAudio, false);
            _this.character.getComponent(cc.Animation).play("Idle");
            _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            _this.questionNode.getChildByName("options1").active = true;
            _this.questionNode.getChildByName("questionBox").active = true;
            console.log(_this.questionNode.getChildByName("options1"), "&&&&&");
        }, 0.5);
    };
    video.prototype.update = function () {
        if (this.isSliding) {
            var currentTime = this.node.getComponent(cc.VideoPlayer).currentTime;
            var duration = this.node.getComponent(cc.VideoPlayer).getDuration();
            var value = currentTime / duration;
            this.slider.getComponent(cc.Slider).progress = value;
            this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        }
        for (var i = 0; i < this.questions.length; i++) {
            if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) == this.timers[i] && !this.questionAppeared[i]
                && this.canNextQuestion && this.gameStarted) {
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
            }
        }
    };
    // Show loading animation.
    video.prototype.getAnimDuration = function (animName) {
        console.log("animation name = ", animName);
        var num = this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).findAnimation(animName).duration;
        return num;
    };
    video.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    video.prototype.OnEnd = function () {
        window.close();
    };
    video.prototype.OptionsLayout = function () {
        var optionsLayout = this.starsPanel;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }
        var availableWidth = optionsLayout.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);
            accumulatedWidth += option.width + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
    };
    video.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    video.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    __decorate([
        property(cc.Node)
    ], video.prototype, "tools", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "questionNode", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "character", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "starsPanel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "correctSound", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], video.prototype, "starSprites", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "positiveVO", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "slider", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "toolActivater", void 0);
    __decorate([
        property(QuestionData)
    ], video.prototype, "questions", void 0);
    video = __decorate([
        ccclass
    ], video);
    return video;
}(cc.Component));
exports.default = video;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF4QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVksQ0F3QmpCO0lBQUQsbUJBQUM7Q0F4QkQsQUF3QkMsSUFB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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsWUFBWSxDQUFDOzRDQUNRO0lBckNkLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E0dEJ6QjtJQUFELFlBQUM7Q0E1dEJELEFBNHRCQyxDQTV0QmtDLEVBQUUsQ0FBQyxTQUFTLEdBNHRCOUM7a0JBNXRCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJRdWVzdGlvbkRhdGFcIilcclxuY2xhc3MgUXVlc3Rpb25EYXRhIHtcclxuICAgIC8vIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBxdWVzdGlvblRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzb3B0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc3F1ZXN0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcXVlc3Rpb25JbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBxdWVzdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KFN0cmluZylcclxuICAgIHF1ZXN0aW9uVGV4dDogc3RyaW5nID0gXCJcIjtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG9wdGlvbkltZ3M6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIC8vIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBvcHRpb25UZXh0czogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICByZWl0ZXJhdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgY29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdyb25nQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgY29ycmVjdEFuc3dlcjogbnVtYmVyID0gMTtcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2aWRlbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b29sczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHF1ZXN0aW9uTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0YXJzUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29ycmVjdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgc3RhclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBvc2l0aXZlVk86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgZHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNsaWRlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgdG9vbEFjdGl2YXRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFF1ZXN0aW9uRGF0YSlcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzU2xpZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVyczogbnVtYmVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uQXBwZWFyZWQ6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFuc3dlcmVkUXVlc3Rpb246IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1BsYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpc09uU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbk5leHRRdWVzdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGF0dGVtcHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHZpZGVvQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGdhbWVTdGFydGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICBwcml2YXRlIHdyb25nQW5pbTogc3RyaW5nW10gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcblxyXG4gICAgcHJpdmF0ZSBwdXp6bGVDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIl07XHJcbiAgICBwcml2YXRlIHB1enpsZU5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCJdO1xyXG5cclxuICAgIHByaXZhdGUgc3VwZXJjdWJDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICBwcml2YXRlIHN1cGVyY3ViTmVnYXRpdmVBbmltOiBzdHJpbmdbXSA9IFtcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuXHJcbiAgICBwcml2YXRlIHBvZGFyQ29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1wicG9zc2l0aXZlMVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCIsIFwicG9zc2l0aXZlMVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xyXG4gICAgcHJpdmF0ZSBwb2Rhck5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXCJuZWdldGl2ZTFcIiwgXCJuZWdldGl2ZTJcIiwgXCJuZWdldGl2ZTNcIiwgXCJuZWdldGl2ZTRcIiwgXCJuZWdldGl2ZTVcIiwgXCJuZWdldGl2ZTZcIiwgXCJuZWdldGl2ZTFcIiwgXCJuZWdldGl2ZTJcIiwgXCJuZWdldGl2ZTNcIiwgXCJuZWdldGl2ZTRcIiwgXCJuZWdldGl2ZTVcIiwgXCJuZWdldGl2ZTZcIl07XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmlkZW8gb25sb2FkXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnN0b3AoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVF1ZXN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucXVlc3Rpb25zLmxlbmd0aCA6OlwiLCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lcnNbaV0gPSB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvblRpbWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb24gdGltZXIgPSBcIiwgdGhpcy50aW1lcnNbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zKys7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlcmVkUXVlc3Rpb25baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnF1ZXN0aW9uQXBwZWFyZWQgOjo6Ojo6Ojo6XCIsIHRoaXMucXVlc3Rpb25BcHBlYXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPblNsaWRlciA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc09uU2xpZGVyID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXCJ0b3VjaGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPblNsaWRlciA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGVRdWVzdGlvbnMgOjpcIik7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVsc1wiLCBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHMpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXSA9IG5ldyBRdWVzdGlvbkRhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UaW1lID0gcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkFwcGVhclRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5pc29wdGlvblRleHQgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLklzT3B0aW9uVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uaXNxdWVzdGlvblRleHQgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLklzUXVlc3Rpb25UZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QW5zd2VyID0gcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uc1tpXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgLy9sb2FkIHRoZSBxdWVzdGlvbiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uSW1nID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uSW1nID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvblRleHQgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgLy9sb2FkIHRoZSBvcHRpb24gaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnNbal0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25JbWdzW2pdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25JbWdzW2pdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vbG9hZCB0aGUgb3B0aW9uIHRleHRzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvblRleHRzW2pdID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucmVpdGVyYXRpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uV3JvbmdBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLndyb25nQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUmVpdGVyYXRpb25BdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5yZWl0ZXJhdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Xcm9uZ0F1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLndyb25nQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZpZGVvIHN0YXJ0XCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8xKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLnN0YXJzUGFuZWw7XHJcbiAgICAgICAgICAgIHN0YXIubmFtZSA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc3Rhci5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0KCk7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicHV6emxlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMucHV6emxlQ29ycmVjdEFuaW07XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdBbmltID0gdGhpcy5wdXp6bGVOZWdhdGl2ZUFuaW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5zdXBlcmN1YkNvcnJlY3RBbmltO1xyXG4gICAgICAgICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMuc3VwZXJjdWJOZWdhdGl2ZUFuaW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5wb2RhckNvcnJlY3RBbmltO1xyXG4gICAgICAgICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMucG9kYXJOZWdhdGl2ZUFuaW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlWaWRlbzEoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5VmlkZW8xIDo6Ojo6Ojo6Ojo6OlwiKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oJ2NvbXBsZXRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXlWaWRlbzIgOjo6Ojo6Ojo6Ojo6XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09uTWlzc2luZ1F1ZXN0aW9ucyAxXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZGVvIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy50b29scy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdwbGF5aW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkR1cmF0aW9uID0gXCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuQWN0aXZhdGVUb29scyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50b29scy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIH0sIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIEFjdGl2YXRlVG9vbHMoX2FjdGl2YXRlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChfYWN0aXZhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xzLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvb2xzLm9wYWNpdHkgPT0gMjU1ICYmICF0aGlzLmlzUGF1c2UgJiYgIXRoaXMuaXNPblNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWN0aXZhdGVUb29scyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xBY3RpdmF0ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b29scy5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhclVwZGF0ZShfY3VycmVudDogbnVtYmVyLCBfYW5zd2VyZWQ6IGJvb2xlYW4gPSBmYWxzZSwgX2NvcnJlY3Q6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gX2N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfYW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJTcHJpdGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhclNwcml0ZXNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJTcHJpdGVzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBSZXN1bWVQbGF5QnV0dG9uKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuICAgICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgUGF1c2VCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkFjdGl2YXRlVG9vbHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgVXBkYXRlU2xpZGVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkgKiB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZXNsaWRlciA6IFwiLCBNYXRoLnJvdW5kKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInBhdXNlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVTbGlkZXIyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlc2xpZGVyIDogXCIpO1xyXG4gICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkgKiB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgICAgIH0sIDAuMilcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIH0sIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2xpZGVyQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNPblNsaWRlciA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpcyBzbGlkZXIgYnV0dG9uIHdvcmtpbmchISEhISEhXCIpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9IHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG4gICAgfVxyXG5cclxuICAgIE9uUXVlc3Rpb25BbnN3ZXJlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGlucHV0OiBzdHJpbmcgPSBfZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5hdHRlbXBzKys7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0KSA9PSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLmNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNvcnJlY3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJncmVlblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnJlaXRlcmF0aW9uQXVkaW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0UGFyZW50KCkuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBsZXQgbnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICAgICAgICAgIGlmIChudW0gPiB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG51bSAtPSAodGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gPiB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0gLT0gKHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0gLT0gKHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5jb3JyZWN0QXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy5jb3JyZWN0QW5pbVtudW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRlbXBzIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhclVwZGF0ZSh0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDEsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGVtcHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0UGFyZW50KCkuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuT3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpLnRvKDAuNSwgeyB4OiAtNjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJncmVlblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWRlb0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMgMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVzdW1lUGxheUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKHRoaXMuY29ycmVjdEFuaW1bbnVtXSkpO1xyXG5cclxuICAgICAgICAgICAgfSwgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0ud3JvbmdBdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwid3JvbmdcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBudW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxO1xyXG4gICAgICAgICAgICBpZiAobnVtID4gdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbnVtIC09ICh0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLndyb25nQW5pbVtudW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLndyb25nQW5pbVtudW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJJZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKHRoaXMud3JvbmdBbmltW251bV0pKTtcclxuICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25Tb3VuZEJ1dHRvbigpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5xdWVzdGlvbkF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnF1ZXN0aW9uQXBwZWFyZWQubGVuZ3RoIDo6OjpcIiwgdGhpcy5xdWVzdGlvbkFwcGVhcmVkLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGlzRW5kOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uQXBwZWFyZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0pIHtcclxuICAgICAgICAgICAgICAgIGlzRW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2YXRlIHRoZSBxdWVzdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbdGhpcy5jdXJyZW50UXVlc3Rpb25dID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUGF1c2VCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25TZXR1cCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuUmV2ZXJzZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1FeGNlbGxlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3JheW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3JheW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmN1cnJlbnRDbGlwLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcXVlc3Rpb25TZXR1cCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uU2V0dXAgOjo6Ojo6Ojo6XCIpO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50UXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uKTtcclxuICAgICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidHdlZW5JblwiKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpLnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdNdXNpYywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgMC4xKTtcclxuICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmlzcXVlc3Rpb25UZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb25JbWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjXCIsIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc29wdGlvblRleHQpO1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0uaXNvcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTExMTExMTExMTExMTExMTFcIik7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9ICh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjIyMjIyMjIyMjIyMjIyMjIyXCIpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgOjo6Ojo6Ojo6Ojo6OjpcIiwgdGhpcy5jdXJyZW50UXVlc3Rpb24sIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25JbWdzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbkltZ3MubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25JbWdzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgOjo6Ojo6Ojo6Ojo6OjpcIiwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1tjdXJyZW50XS5xdWVzdGlvbkF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJJZGxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIiksIFwiJiYmJiZcIik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjdXJyZW50VGltZSAvIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSkgPT0gdGhpcy50aW1lcnNbaV0gJiYgIXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXVxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5jYW5OZXh0UXVlc3Rpb24gJiYgdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uU2V0dXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gU2hvdyBsb2FkaW5nIGFuaW1hdGlvbi5cclxuXHJcbiAgICBnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmltYXRpb24gbmFtZSA9IFwiLCBhbmltTmFtZSk7XHJcbiAgICAgICAgbGV0IG51bTogbnVtYmVyID0gdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbU5hbWUpLmR1cmF0aW9uO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gX251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBPbkVuZCgpIHtcclxuICAgICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5zdGFyc1BhbmVsO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBvcHRpb25XaWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKG9wdGlvbkhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXZhaWxhYmxlV2lkdGggPSBvcHRpb25zTGF5b3V0LndpZHRoO1xyXG4gICAgICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPSB0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxXaWR0aFdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICAgICAgbGV0IGFjY3VtdWxhdGVkV2lkdGggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIChvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi54ID0gcG9zWCAtIChvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYKTtcclxuXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5oZWlnaHQgPSBtYXhIZWlnaHQgKiBzY2FsZUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59Il19
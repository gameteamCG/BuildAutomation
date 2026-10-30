
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
//uncomment lines having "this.forwardBtn.active = true;" for activating the frwrd / skip buttons
var StartGame_1 = require("../../Framework/Scripts/StartGame");
var TVInputManager_1 = require("./TVInputManager");
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
        _this.skipSeconds = 15;
        _this.positiveVO = [];
        _this.duration = 0;
        _this.slider = null;
        _this.toolActivater = null;
        _this.isVisited = false;
        _this.questions = [];
        _this.isSliding = false;
        _this.hideToolsCallback = null;
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
        _this.gameStarted = false;
        _this.canTouch = false;
        _this.forwardBtn = null;
        _this.backwardBtn = null;
        _this.correctAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
        ];
        _this.wrongAnim = [
            "negative_1",
            "negative_2",
            "negative_1",
            "negative_2",
        ];
        _this.puzzleCorrectAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
        ];
        _this.puzzleNegativeAnim = [
            "negative_1",
            "negative_2",
            "negative_1",
            "negative_2",
        ];
        _this.supercubCorrectAnim = [
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        _this.supercubNegativeAnim = [
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
        ];
        _this.podarCorrectAnim = [
            "possitive1",
            "possitive2",
            "possitive3",
            "possitive4",
            "possitive5",
            "possitive6",
            "possitive1",
            "possitive2",
            "possitive3",
            "possitive4",
            "possitive5",
            "possitive6",
        ];
        _this.podarNegativeAnim = [
            "negetive1",
            "negetive2",
            "negetive3",
            "negetive4",
            "negetive5",
            "negetive6",
            "negetive1",
            "negetive2",
            "negetive3",
            "negetive4",
            "negetive5",
            "negetive6",
        ];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    video.prototype.onLoad = function () {
        var _this = this;
        this.forwardBtn = cc.find("Canvas/skipAhead");
        this.backwardBtn = cc.find("Canvas/skipBack");
        this.UpdateQuestions();
        this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
        this.scheduleOnce(function () {
            for (var i = 0; i < _this.questions.length; i++) {
                _this.timers[i] = _this.questions[i].questionTime;
                console.log("question timer = ", _this.timers[i]);
                _this.totalQuestions++;
                _this.questionAppeared[i] = false;
                _this.answeredQuestion[i] = false;
            }
        }, 1);
        this.slider.children[2].on("touchstart", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        // this.slider.children[2].on("tv-select", function () {
        //     this.isSliding = false;
        //     this.isOnSlider = true;
        //     this.SliderButton();
        // }, this);
        var video = this.node.getComponent(cc.VideoPlayer);
        var duration = video.getDuration();
        console.log("Duration:", this.node.getComponent(cc.VideoPlayer).getDuration());
        var showSkipButtons = duration > 30;
        if (this.forwardBtn) {
            this.forwardBtn.active = showSkipButtons;
        }
        if (this.backwardBtn) {
            this.backwardBtn.active = showSkipButtons;
        }
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
        // this.slider.children[0].on("tv-select", function () {
        //     this.isSliding = false;
        // }, this);
        this.slider.children[0].on("touchmove", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchend", function () {
            this.UpdateSlider();
        }, this);
    };
    video.prototype.UpdateQuestions = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.tlc_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.supercub_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.jaipuria_font;
            });
        }
        var _loop_1 = function (i) {
            this_1.questions[i] = new QuestionData();
            this_1.questions[i].questionTime = parseInt(StartGame_1.default.Instance.questions[i].QuestionAppearTime);
            this_1.questions[i].isoptionText =
                StartGame_1.default.Instance.questions[i].IsOptionText;
            this_1.questions[i].isquestionText =
                StartGame_1.default.Instance.questions[i].IsQuestionText;
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
                this_1.questions[i].questionText =
                    StartGame_1.default.Instance.questions[i].QuestionText;
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
                    this_1.questions[i].optionTexts[j] =
                        StartGame_1.default.Instance.questions[i].Options[j];
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
        this.playVideo1();
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
    video.prototype.SkipForward = function (_event) {
        var _this = this;
        // console.log("SkipForward called");
        // console.log("_event:", _event);
        // console.log("Current Time:", this.node.getComponent(cc.VideoPlayer).currentTime);
        if (_event) {
            _event.target.getComponent(cc.Button).interactable = false;
        }
        var video = this.node.getComponent(cc.VideoPlayer);
        var duration = video.getDuration();
        var newTime = Math.min(video.currentTime + this.skipSeconds, duration);
        video.currentTime = newTime;
        this.slider.getComponent(cc.Slider).progress = newTime / duration;
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(function () {
            if (_event) {
                _event.target.getComponent(cc.Button).interactable = true;
                _event.target.scale = 1;
            }
            if (!_this.questionNode.active) {
                _this.setupTVFocus2();
            }
        }, 0.1);
    };
    video.prototype.SkipBackward = function (_event) {
        var _this = this;
        // console.log("SkipBackward called");
        // console.log("_event:", _event);
        // console.log("Current Time:", this.node.getComponent(cc.VideoPlayer).currentTime);
        if (_event) {
            _event.target.getComponent(cc.Button).interactable = false;
        }
        var video = this.node.getComponent(cc.VideoPlayer);
        var newTime = Math.max(video.currentTime - this.skipSeconds, 0);
        video.currentTime = newTime;
        this.slider.getComponent(cc.Slider).progress =
            newTime / video.getDuration();
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(function () {
            if (_event) {
                _event.target.getComponent(cc.Button).interactable = true;
                _event.target.scale = 1;
            }
            if (!_this.questionNode.active) {
                _this.setupTVFocus2();
            }
        }, 0.1);
    };
    video.prototype.playVideo1 = function () {
        var _this = this;
        this.node.on("completed", function () {
            if (this.gameStarted) {
                this.checkOnMissingQuestions();
                console.log("video completed");
                this.tools.active = false;
                this.videoCompleted = true;
                if (this.forwardBtn)
                    this.forwardBtn.active = false;
                if (this.backwardBtn)
                    this.backwardBtn.active = false;
            }
        }, this);
        this.node.on("playing", function () {
            var _this = this;
            //console.log("aaaaaaggggggggggggggggggggggggggg")
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
            _this.node.getComponent(cc.VideoPlayer).volume = 1;
            _this.scheduleOnce(function () {
                _this.gameStarted = true;
            }, 1);
        }, 1);
        // this.scheduleOnce(() => {
        //     this.tools.active = true;
        // }, 5);
    };
    video.prototype.OnTVNavigation = function () {
        if (this.tools.opacity == 0) {
            this.ActivateTools(true);
            if (!this.questionNode.active) {
                this.setupTVFocus2();
            }
        }
    };
    video.prototype.ActivateTools = function (_activate) {
        if (_activate === void 0) { _activate = true; }
        if (_activate) {
            this.toolActivater.active = false;
            this.tools.opacity = 255;
            // if (this.forwardBtn) this.forwardBtn.active = true;
            // if (this.backwardBtn) this.backwardBtn.active = true;
            // Existing timer code...
        }
        else {
            // if (this.forwardBtn) this.forwardBtn.active = false;
            // if (this.backwardBtn) this.backwardBtn.active = false;
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
                    this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame =
                        this.starSprites[0];
                }
                else if (_answered) {
                    if (_correct) {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame =
                            this.starSprites[2];
                    }
                    else {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame =
                            this.starSprites[1];
                    }
                }
                break;
            }
        }
    };
    video.prototype.ResumePlayButton = function (_event) {
        //console.trace("RESUME CALLED");
        var _this = this;
        cc.audioEngine.stopMusic();
        this.isPlay = true;
        this.isPause = false;
        this.node.getComponent(cc.VideoPlayer).resume();
        this.tools.getChildByName("resume").active = false;
        this.tools.getChildByName("pause").active = true;
        // if (this.forwardBtn) this.forwardBtn.active = true;
        // if (this.backwardBtn) this.backwardBtn.active = true;
        this.scheduleOnce(function () {
            if (!_this.questionNode.active) {
                _this.setupTVFocus2();
            }
        }, 0);
    };
    video.prototype.PauseButton = function (_event) {
        var _this = this;
        //console.trace("PAUSE CALLED");
        this.isPlay = false;
        this.isPause = true;
        this.node.getComponent(cc.VideoPlayer).pause();
        this.tools.getChildByName("resume").active = true;
        this.tools.getChildByName("pause").active = false;
        // if (this.forwardBtn) this.forwardBtn.active = false;
        // if (this.backwardBtn) this.backwardBtn.active = false;
        this.ActivateTools();
        this.scheduleOnce(function () {
            if (!_this.questionNode.active) {
                _this.setupTVFocus2();
            }
        }, 0);
    };
    video.prototype.UpdateSlider = function () {
        var _this = this;
        this.isSliding = false;
        this.currentTime =
            this.node.getComponent(cc.VideoPlayer).getDuration() *
                this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
        console.log("updateslider : ", Math.round(this.node.getComponent(cc.VideoPlayer).currentTime));
        this.scheduleOnce(function () {
            _this.isSliding = true;
            _this.tools.getChildByName("resume").active = false;
            _this.tools.getChildByName("pause").active = true;
            if (!_this.questionNode.active) {
                _this.setupTVFocus2();
            }
        }, 0.2);
    };
    video.prototype.UpdateSlider2 = function () {
        var _this = this;
        // console.log("updateslider : ");
        this.isSliding = false;
        this.currentTime =
            this.node.getComponent(cc.VideoPlayer).getDuration() *
                this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
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
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
    };
    video.prototype.OnQuestionAnswered = function (_event) {
        var _this = this;
        this.canTouch = true;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        var input = _event.target.name;
        this.attemps++;
        if (parseInt(input) == this.questions[this.currentQuestion - 1].correctAnswer) {
            this.setupTVFocus0();
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
            this.scheduleOnce(function () {
                _event.target.scale = 1;
            }, 0.1);
            // let num: number = this.getRandomNumber(0, this.correctAnim.length - 1)
            var num_1 = this.currentQuestion - 1;
            if (num_1 > this.correctAnim.length - 1) {
                num_1 -= this.correctAnim.length - 1;
                if (num_1 > this.correctAnim.length - 1) {
                    num_1 -= this.correctAnim.length - 1;
                    if (num_1 > this.correctAnim.length - 1) {
                        num_1 -= this.correctAnim.length - 1;
                    }
                }
            }
            this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].correctAudio, false);
                _this.character
                    .getChildByName("anim")
                    .getChildByName(StartGame_1.default.Instance.jockeyName)
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, _this.correctAnim[num_1], false);
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
                        cc.tween(_this.character.getChildByName("anim"))
                            .to(0.5, { x: -600 }, { easing: "backInOut" })
                            .start();
                        element.getChildByName("green").active = false;
                        element.getChildByName("red").active = false;
                        element.getComponent(cc.Button).interactable = true;
                    });
                    _this.canNextQuestion = true;
                    if (_this.videoCompleted) {
                        _this.checkOnMissingQuestions();
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
                num -= this.wrongAnim.length - 1;
            }
            this.character
                .getChildByName("anim")
                .getChildByName(StartGame_1.default.Instance.jockeyName)
                .getComponent(sp.Skeleton)
                .setAnimation(0, this.wrongAnim[num], false);
            // this.character.getChildByName("anim").getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            this.scheduleOnce(function () {
                // this.character.getComponent(cc.Animation).play("Idle");
                _this.character
                    .getChildByName("anim")
                    .getChildByName(StartGame_1.default.Instance.jockeyName)
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }, this.getAnimDuration(this.wrongAnim[num]));
            _event.target.getChildByName("red").active = true;
            _event.target.getComponent(cc.Button).interactable = false;
        }
    };
    video.prototype.OnSoundButton = function (_event) {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            _this.setupTVFocus3();
        }, this.questions[this.currentQuestion - 1].questionAudio.duration);
    };
    video.prototype.setupTVFocus3 = function () {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.questionNode.getChildByName("sound");
        var optionButtons = this.questionNode
            .getChildByName("options1")
            .children.filter(function (node) {
            var btn = node.getComponent(cc.Button);
            return node.active && node.opacity > 0 && btn && btn.interactable;
        });
        var nodes = __spreadArrays(optionButtons, [soundBtn, backBtn, musicBtn]).filter(function (n) { return n; });
        // setupTVFocus3
        //console.log("setupTVFocus3:", nodes.map(n => n.name));
        if (this.currentQuestion == 1 && !this.isVisited) {
            this.isVisited = true;
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(true);
    };
    video.prototype.setupTVFocus0 = function () {
        TVInputManager_1.default.Instance.callEnd();
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [backBtn, musicBtn].filter(function (n) { return !!n; });
        TVInputManager_1.default.Instance.init(nodes, -1);
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    video.prototype.checkOnMissingQuestions = function () {
        var _this = this;
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
                this.PauseButton();
                this.questionNode.active = true;
                this.forwardBtn.active = false;
                this.backwardBtn.active = false;
                this.scheduleOnce(function () {
                    _this.setupTVFocus3();
                }, 1);
                break;
            }
        }
        if (isEnd) {
            this.character.active = false;
            this.node
                .getParent()
                .getChildByName("curtain")
                .getComponent(cc.Animation)
                .play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(function () {
                _this.node.getParent().getChildByName("gameEnd").active = true;
                console.log("starsEarned--3");
                console.log("showedScreen--Excellent");
                console.log("gameEnded--true");
                if (StartGame_1.default.Instance.jockeyName == "bag" ||
                    StartGame_1.default.Instance.jockeyName == "crayon") {
                    _this.node
                        .getParent()
                        .getChildByName("gameEnd")
                        .getChildByName("jaipuria").active = true;
                }
                else {
                    _this.node
                        .getParent()
                        .getChildByName("gameEnd")
                        .getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
                }
                _this.scheduleOnce(function () {
                    _this.node.active = false;
                    if (StartGame_1.default.Instance.jockeyName == "bag" ||
                        StartGame_1.default.Instance.jockeyName == "crayon") {
                        _this.node
                            .getParent()
                            .getChildByName("gameEnd")
                            .getChildByName("end").active = true;
                    }
                }, 2);
            }, this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).currentClip.duration);
        }
    };
    video.prototype.setupTVFocus2 = function () {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = StartGame_1.default.Instance.node.getChildByName("sound");
        var pauseBtn = this.tools.getChildByName("pause");
        var resumeBtn = this.tools.getChildByName("resume");
        var forwardBtn = cc.find("Canvas/skipAhead");
        var backwardBtn = cc.find("Canvas/skipBack");
        //let sliderHandle = this.slider.getChildByName("Handle");
        //console.log("Pause scale before init:", pauseBtn.scale);
        var nodes = [];
        if (pauseBtn && pauseBtn.active && pauseBtn.opacity > 0)
            nodes.push(pauseBtn);
        if (forwardBtn && forwardBtn.active && forwardBtn.opacity > 0)
            nodes.push(forwardBtn);
        if (backwardBtn && backwardBtn.active && backwardBtn.opacity > 0)
            nodes.push(backwardBtn);
        if (resumeBtn && resumeBtn.active && resumeBtn.opacity > 0)
            nodes.push(resumeBtn);
        //nodes.push(sliderHandle);
        if (backBtn)
            nodes.push(backBtn);
        if (soundBtn)
            nodes.push(soundBtn);
        if (musicBtn)
            nodes.push(musicBtn);
        // setupTVFocus3
        //console.log("setupTVFocus2:", nodes.map(n => n.name));
        if (pauseBtn)
            pauseBtn.scale = 1;
        if (resumeBtn)
            resumeBtn.scale = 1;
        if (forwardBtn)
            forwardBtn.scale = 1;
        if (backwardBtn)
            backwardBtn.scale = 1;
        if (backBtn)
            backBtn.scale = 1;
        if (musicBtn)
            musicBtn.scale = 1;
        if (soundBtn)
            soundBtn.scale = 1;
        TVInputManager_1.default.Instance.init(nodes, -1);
        TVInputManager_1.default.Instance.setCanSelect(true);
    };
    video.prototype.questionSetup = function () {
        var _this = this;
        var current = this.currentQuestion;
        this.starUpdate(this.currentQuestion);
        // this.character.getComponent(cc.Animation).play("tweenIn");
        this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName)
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim"))
            .to(0.5, { x: 0 }, { easing: "backInOut" })
            .start();
        // let id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        //cc.audioEngine.setVolume(id, 0.1);
        if (this.questions[this.currentQuestion].isquestionText) {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).string =
                this.questions[this.currentQuestion].questionText;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img").active = false;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text").active = true;
        }
        else {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text").active = false;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img").active = true;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img")
                .getComponent(cc.Sprite).spriteFrame =
                this.questions[this.currentQuestion].questionImg;
        }
        if (this.questions[this.currentQuestion].isoptionText) {
            var i_1 = 0;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.active = false;
                if (i_1 <=
                    _this.questions[_this.currentQuestion].optionTexts.length - 1) {
                    element.active = true;
                    element.getChildByName("text").getComponent(cc.Label).string =
                        _this.questions[_this.currentQuestion].optionTexts[i_1];
                    element.getChildByName("img").active = false;
                    element.getChildByName("text").active = true;
                }
                i_1++;
            });
        }
        else {
            var i_2 = 0;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.active = false;
                if (i_2 <= _this.questions[_this.currentQuestion].optionImgs.length - 1) {
                    element.active = true;
                    element.getChildByName("img").getComponent(cc.Sprite).spriteFrame =
                        _this.questions[_this.currentQuestion].optionImgs[i_2];
                    element.getChildByName("text").active = false;
                    element.getChildByName("img").active = true;
                }
                i_2++;
            });
        }
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questions[current].questionAudio, false);
            _this.character.getComponent(cc.Animation).play("Idle");
            _this.character
                .getChildByName("anim")
                .getChildByName(StartGame_1.default.Instance.jockeyName)
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
            _this.questionNode.getChildByName("options1").active = true;
            _this.questionNode.getChildByName("questionBox").active = true;
        }, 0.5);
    };
    video.prototype.update = function () {
        if (this.isSliding) {
            var currentTime = this.node.getComponent(cc.VideoPlayer).currentTime;
            var duration = this.node.getComponent(cc.VideoPlayer).getDuration();
            var value = currentTime / duration;
            this.slider.getComponent(cc.Slider).progress = value;
            this.slider.getChildByName("high").width =
                this.slider.getChildByName("Handle").getPosition().x + 472.5;
        }
        for (var i = 0; i < this.questions.length; i++) {
            if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) ==
                this.timers[i] &&
                !this.questionAppeared[i] &&
                this.canNextQuestion &&
                this.gameStarted) {
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
                this.forwardBtn.active = false;
                this.backwardBtn.active = false;
            }
        }
    };
    // Show loading animation.
    video.prototype.getAnimDuration = function (animName) {
        console.log("animation name = ", animName);
        var num = this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName)
            .getComponent(sp.Skeleton)
            .findAnimation(animName).duration;
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
            var posX = accumulatedWidth + option.width * option.anchorX;
            option.x = posX - optionsLayout.width * optionsLayout.anchorX;
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
        property(Number)
    ], video.prototype, "skipSeconds", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRixpR0FBaUc7QUFDakcsK0RBQTBEO0FBQzFELG1EQUE4QztBQUU5QyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0Usb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF4QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVks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QUM7d0NBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7OENBQ1E7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLFlBQVksQ0FBQzs0Q0FDUTtJQXRDWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdXJDekI7SUFBRCxZQUFDO0NBdnJDRCxBQXVyQ0MsQ0F2ckNrQyxFQUFFLENBQUMsU0FBUyxHQXVyQzlDO2tCQXZyQ29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vdW5jb21tZW50IGxpbmVzIGhhdmluZyBcInRoaXMuZm9yd2FyZEJ0bi5hY3RpdmUgPSB0cnVlO1wiIGZvciBhY3RpdmF0aW5nIHRoZSBmcndyZCAvIHNraXAgYnV0dG9uc1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5jYy5tYWNyby5FTkFCTEVfVFJBTlNQQVJFTlRfQ0FOVkFTID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlF1ZXN0aW9uRGF0YVwiKVxyXG5jbGFzcyBRdWVzdGlvbkRhdGEge1xyXG4gIC8vIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgcXVlc3Rpb25UaW1lOiBudW1iZXIgPSAwO1xyXG4gIC8vIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gIGlzb3B0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gIGlzcXVlc3Rpb25UZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHF1ZXN0aW9uSW1nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBxdWVzdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIC8vIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBvcHRpb25JbWdzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KFN0cmluZylcclxuICBvcHRpb25UZXh0czogc3RyaW5nW10gPSBbXTtcclxuICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHJlaXRlcmF0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgY29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgd3JvbmdBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAvLyBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIGNvcnJlY3RBbnN3ZXI6IG51bWJlciA9IDE7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmlkZW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvb2xzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcXVlc3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXJzUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIGNvcnJlY3RTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgc3RhclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIHNraXBTZWNvbmRzOiBudW1iZXIgPSAxNTtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHBvc2l0aXZlVk86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHNsaWRlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHJpdmF0ZSB0b29sQWN0aXZhdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBwcml2YXRlIGlzVmlzaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBwcm9wZXJ0eShRdWVzdGlvbkRhdGEpXHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzU2xpZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaGlkZVRvb2xzQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcclxuICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdGltZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBxdWVzdGlvbkFwcGVhcmVkOiBib29sZWFuW10gPSBbXTtcclxuICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGFuc3dlcmVkUXVlc3Rpb246IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGlzUGxheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBpc09uU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBjYW5OZXh0UXVlc3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHByaXZhdGUgYXR0ZW1wczogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHZpZGVvQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGZvcndhcmRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgYmFja3dhcmRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgY29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1xyXG4gICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICBcInBvc2l0aXZlXzJcIixcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgXTtcclxuICBwcml2YXRlIHdyb25nQW5pbTogc3RyaW5nW10gPSBbXHJcbiAgICBcIm5lZ2F0aXZlXzFcIixcclxuICAgIFwibmVnYXRpdmVfMlwiLFxyXG4gICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzJcIixcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHB1enpsZUNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gIF07XHJcbiAgcHJpdmF0ZSBwdXp6bGVOZWdhdGl2ZUFuaW06IHN0cmluZ1tdID0gW1xyXG4gICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzJcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBzdXBlcmN1YkNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICBcInBvc2l0aXZlXzVcIixcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICBcInBvc2l0aXZlXzVcIixcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICBcInBvc2l0aXZlXzVcIixcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICBcInBvc2l0aXZlXzVcIixcclxuICBdO1xyXG4gIHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZUFuaW06IHN0cmluZ1tdID0gW1xyXG4gICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzRcIixcclxuICAgIFwibmVnYXRpdmVfM1wiLFxyXG4gICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzRcIixcclxuICAgIFwibmVnYXRpdmVfM1wiLFxyXG4gICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgcG9kYXJDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXHJcbiAgICBcInBvc3NpdGl2ZTFcIixcclxuICAgIFwicG9zc2l0aXZlMlwiLFxyXG4gICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICBcInBvc3NpdGl2ZTRcIixcclxuICAgIFwicG9zc2l0aXZlNVwiLFxyXG4gICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgICBcInBvc3NpdGl2ZTFcIixcclxuICAgIFwicG9zc2l0aXZlMlwiLFxyXG4gICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICBcInBvc3NpdGl2ZTRcIixcclxuICAgIFwicG9zc2l0aXZlNVwiLFxyXG4gICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgXTtcclxuICBwcml2YXRlIHBvZGFyTmVnYXRpdmVBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwibmVnZXRpdmUxXCIsXHJcbiAgICBcIm5lZ2V0aXZlMlwiLFxyXG4gICAgXCJuZWdldGl2ZTNcIixcclxuICAgIFwibmVnZXRpdmU0XCIsXHJcbiAgICBcIm5lZ2V0aXZlNVwiLFxyXG4gICAgXCJuZWdldGl2ZTZcIixcclxuICAgIFwibmVnZXRpdmUxXCIsXHJcbiAgICBcIm5lZ2V0aXZlMlwiLFxyXG4gICAgXCJuZWdldGl2ZTNcIixcclxuICAgIFwibmVnZXRpdmU0XCIsXHJcbiAgICBcIm5lZ2V0aXZlNVwiLFxyXG4gICAgXCJuZWdldGl2ZTZcIixcclxuICBdO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5mb3J3YXJkQnRuID0gY2MuZmluZChcIkNhbnZhcy9za2lwQWhlYWRcIik7XHJcbiAgICB0aGlzLmJhY2t3YXJkQnRuID0gY2MuZmluZChcIkNhbnZhcy9za2lwQmFja1wiKTtcclxuICAgIHRoaXMuVXBkYXRlUXVlc3Rpb25zKCk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGltZXJzW2ldID0gdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UaW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb24gdGltZXIgPSBcIiwgdGhpcy50aW1lcnNbaV0pO1xyXG4gICAgICAgIHRoaXMudG90YWxRdWVzdGlvbnMrKztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuc3dlcmVkUXVlc3Rpb25baV0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMSk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNPblNsaWRlciA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcInR2LXNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuU2xpZGVyQnV0dG9uKCk7XHJcbiAgICAvLyB9LCB0aGlzKTtcclxuICAgIGxldCB2aWRlbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpO1xyXG4gICAgbGV0IGR1cmF0aW9uID0gdmlkZW8uZ2V0RHVyYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIkR1cmF0aW9uOlwiLFxyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpXHJcbiAgICApO1xyXG4gICAgbGV0IHNob3dTa2lwQnV0dG9ucyA9IGR1cmF0aW9uID4gMzA7XHJcblxyXG4gICAgaWYgKHRoaXMuZm9yd2FyZEJ0bikge1xyXG4gICAgICB0aGlzLmZvcndhcmRCdG4uYWN0aXZlID0gc2hvd1NraXBCdXR0b25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmJhY2t3YXJkQnRuKSB7XHJcbiAgICAgIHRoaXMuYmFja3dhcmRCdG4uYWN0aXZlID0gc2hvd1NraXBCdXR0b25zO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFxyXG4gICAgICBcInRvdWNobW92ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcbiAgICAgIFwidG91Y2hlbmRcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc09uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuICAgICAgXCJ0b3VjaGNhbmNlbFwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcclxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gICAgLy8gdGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXCJ0di1zZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAvLyB9LCB0aGlzKTtcclxuICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFxyXG4gICAgICBcInRvdWNobW92ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFxyXG4gICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlUXVlc3Rpb25zKCkge1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cclxuICAgICAgICAgICAgdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cclxuICAgICAgICAgICAgdGhpcy50bGNfZm9udDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG4gICAgICAgIC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgICB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG4gICAgICAgIC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgICB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25zW2ldID0gbmV3IFF1ZXN0aW9uRGF0YSgpO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvblRpbWUgPSBwYXJzZUludChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXBwZWFyVGltZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5pc29wdGlvblRleHQgPVxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uSXNPcHRpb25UZXh0O1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5pc3F1ZXN0aW9uVGV4dCA9XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Jc1F1ZXN0aW9uVGV4dDtcclxuICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEFuc3dlciA9IHBhcnNlSW50KFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uQ29ycmVjdEFuc3dlclxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXRoaXMucXVlc3Rpb25zW2ldLmlzcXVlc3Rpb25UZXh0KSB7XHJcbiAgICAgICAgLy9sb2FkIHRoZSBxdWVzdGlvbiBpbWFnZVxyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uSW1nID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkltZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvblRleHQgPVxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvblRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uc1tpXS5pc29wdGlvblRleHQpIHtcclxuICAgICAgICAvL2xvYWQgdGhlIG9wdGlvbiBpbWFnZXNcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgICAgaiA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICBqKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnNbal0sXHJcbiAgICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9uSW1nc1tqXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXSxcclxuICAgICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvbkltZ3Nbal0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbG9hZCB0aGUgb3B0aW9uIHRleHRzXHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgIGogPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgaisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25UZXh0c1tqXSA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUmVpdGVyYXRpb25BdWRpb05hbWUsXHJcbiAgICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucmVpdGVyYXRpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Xcm9uZ0F1ZGlvTmFtZSxcclxuICAgICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS53cm9uZ0F1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAgIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUmVpdGVyYXRpb25BdWRpb05hbWUsXHJcbiAgICAgICAgICAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJlaXRlcmF0aW9uQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBdWRpb05hbWUsXHJcbiAgICAgICAgICAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uV3JvbmdBdWRpb05hbWUsXHJcbiAgICAgICAgICAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLndyb25nQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnBsYXlWaWRlbzEoKTtcclxuICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBzdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuWzBdKTtcclxuICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLnN0YXJzUGFuZWw7XHJcbiAgICAgIHN0YXIubmFtZSA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgc3Rhci5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuT3B0aW9uc0xheW91dCgpO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicHV6emxlXCIpIHtcclxuICAgICAgdGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMucHV6emxlQ29ycmVjdEFuaW07XHJcbiAgICAgIHRoaXMud3JvbmdBbmltID0gdGhpcy5wdXp6bGVOZWdhdGl2ZUFuaW07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5zdXBlcmN1YkNvcnJlY3RBbmltO1xyXG4gICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMuc3VwZXJjdWJOZWdhdGl2ZUFuaW07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5wb2RhckNvcnJlY3RBbmltO1xyXG4gICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMucG9kYXJOZWdhdGl2ZUFuaW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFNraXBGb3J3YXJkKF9ldmVudD86IGNjLkV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNraXBGb3J3YXJkIGNhbGxlZFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiX2V2ZW50OlwiLCBfZXZlbnQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJDdXJyZW50IFRpbWU6XCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lKTtcclxuICAgIGlmIChfZXZlbnQpIHtcclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmlkZW8gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKTtcclxuXHJcbiAgICBsZXQgZHVyYXRpb24gPSB2aWRlby5nZXREdXJhdGlvbigpO1xyXG4gICAgbGV0IG5ld1RpbWUgPSBNYXRoLm1pbih2aWRlby5jdXJyZW50VGltZSArIHRoaXMuc2tpcFNlY29uZHMsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB2aWRlby5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IG5ld1RpbWUgLyBkdXJhdGlvbjtcclxuICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcbiAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKF9ldmVudCkge1xyXG4gICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnNldHVwVFZGb2N1czIoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMC4xKTtcclxuICB9XHJcbiAgU2tpcEJhY2t3YXJkKF9ldmVudD86IGNjLkV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNraXBCYWNrd2FyZCBjYWxsZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9ldmVudDpcIiwgX2V2ZW50KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ3VycmVudCBUaW1lOlwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSk7XHJcbiAgICBpZiAoX2V2ZW50KSB7XHJcbiAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZpZGVvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcik7XHJcblxyXG4gICAgbGV0IG5ld1RpbWUgPSBNYXRoLm1heCh2aWRlby5jdXJyZW50VGltZSAtIHRoaXMuc2tpcFNlY29uZHMsIDApO1xyXG5cclxuICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcclxuXHJcbiAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9XHJcbiAgICAgIG5ld1RpbWUgLyB2aWRlby5nZXREdXJhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcbiAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKF9ldmVudCkge1xyXG4gICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnNldHVwVFZGb2N1czIoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMC4xKTtcclxuICB9XHJcbiAgcGxheVZpZGVvMSgpIHtcclxuICAgIHRoaXMubm9kZS5vbihcclxuICAgICAgXCJjb21wbGV0ZWRcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGFydGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZGVvIGNvbXBsZXRlZFwiKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnRvb2xzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy52aWRlb0NvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuZm9yd2FyZEJ0bikgdGhpcy5mb3J3YXJkQnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYmFja3dhcmRCdG4pIHRoaXMuYmFja3dhcmRCdG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubm9kZS5vbihcclxuICAgICAgXCJwbGF5aW5nXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWFhYWFhZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnXCIpXHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRHVyYXRpb24gPSBcIiwgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuZ2V0RHVyYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5BY3RpdmF0ZVRvb2xzKGZhbHNlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS52b2x1bWUgPSAwO1xyXG4gICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG5cclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnZvbHVtZSA9IDE7XHJcblxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfSwgMSk7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy50b29scy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gfSwgNSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBPblRWTmF2aWdhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnRvb2xzLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICB0aGlzLkFjdGl2YXRlVG9vbHModHJ1ZSk7XHJcbiAgICAgIGlmICghdGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQWN0aXZhdGVUb29scyhfYWN0aXZhdGU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBpZiAoX2FjdGl2YXRlKSB7XHJcbiAgICAgIHRoaXMudG9vbEFjdGl2YXRlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b29scy5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgLy8gaWYgKHRoaXMuZm9yd2FyZEJ0bikgdGhpcy5mb3J3YXJkQnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIGlmICh0aGlzLmJhY2t3YXJkQnRuKSB0aGlzLmJhY2t3YXJkQnRuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAvLyBFeGlzdGluZyB0aW1lciBjb2RlLi4uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiAodGhpcy5mb3J3YXJkQnRuKSB0aGlzLmZvcndhcmRCdG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIC8vIGlmICh0aGlzLmJhY2t3YXJkQnRuKSB0aGlzLmJhY2t3YXJkQnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudG9vbHMub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFyVXBkYXRlKFxyXG4gICAgX2N1cnJlbnQ6IG51bWJlcixcclxuICAgIF9hbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgX2NvcnJlY3Q6IGJvb2xlYW4gPSB0cnVlXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSBfY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIGlmICghX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICBpZiAoX2NvcnJlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzJdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUmVzdW1lUGxheUJ1dHRvbihfZXZlbnQ/OiBjYy5FdmVudCkge1xyXG4gICAgLy9jb25zb2xlLnRyYWNlKFwiUkVTVU1FIENBTExFRFwiKTtcclxuXHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuXHJcbiAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHJcbiAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInBhdXNlXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuZm9yd2FyZEJ0bikgdGhpcy5mb3J3YXJkQnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyBpZiAodGhpcy5iYWNrd2FyZEJ0bikgdGhpcy5iYWNrd2FyZEJ0bi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnNldHVwVFZGb2N1czIoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIFBhdXNlQnV0dG9uKF9ldmVudD86IGNjLkV2ZW50KSB7XHJcbiAgICAvL2NvbnNvbGUudHJhY2UoXCJQQVVTRSBDQUxMRURcIik7XHJcbiAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG5cclxuICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBpZiAodGhpcy5mb3J3YXJkQnRuKSB0aGlzLmZvcndhcmRCdG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyBpZiAodGhpcy5iYWNrd2FyZEJ0bikgdGhpcy5iYWNrd2FyZEJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLkFjdGl2YXRlVG9vbHMoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlU2xpZGVyKCkge1xyXG4gICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgPVxyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpICpcclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5zdG9wKCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSA9IHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wbGF5KCk7XHJcbiAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPVxyXG4gICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcInVwZGF0ZXNsaWRlciA6IFwiLFxyXG4gICAgICBNYXRoLnJvdW5kKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lKVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInBhdXNlXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMucXVlc3Rpb25Ob2RlLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzMigpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlU2xpZGVyMigpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlc2xpZGVyIDogXCIpO1xyXG4gICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgPVxyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpICpcclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5zdG9wKCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSA9IHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wbGF5KCk7XHJcbiAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPVxyXG4gICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICB9LCAwLjIpO1xyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgLy8gICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInBhdXNlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyB9LCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgU2xpZGVyQnV0dG9uKCkge1xyXG4gICAgdGhpcy5pc09uU2xpZGVyID0gdHJ1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXMgc2xpZGVyIGJ1dHRvbiB3b3JraW5nISEhISEhIVwiKTtcclxuICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcbiAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG4gIH1cclxuXHJcbiAgT25RdWVzdGlvbkFuc3dlcmVkKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgbGV0IGlucHV0OiBzdHJpbmcgPSBfZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICB0aGlzLmF0dGVtcHMrKztcclxuICAgIGlmIChcclxuICAgICAgcGFyc2VJbnQoaW5wdXQpID09IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uY29ycmVjdEFuc3dlclxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0dXBUVkZvY3VzMCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTb3VuZCwgZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnJlaXRlcmF0aW9uQXVkaW8sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgfSwgMC4xKTtcclxuICAgICAgLy8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKVxyXG4gICAgICBsZXQgbnVtID0gdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxO1xyXG4gICAgICBpZiAobnVtID4gdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgbnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAobnVtID4gdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBudW0gLT0gdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBudW0gLT0gdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uY29ycmVjdEF1ZGlvLFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCB0aGlzLmNvcnJlY3RBbmltW251bV0sIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5hdHRlbXBzIDw9IDEpIHtcclxuICAgICAgICAgIHRoaXMuc3RhclVwZGF0ZSh0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDEsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXR0ZW1wcyA9IDA7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0UGFyZW50KCkuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidHdlZW5PdXRcIik7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKSlcclxuICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IC02MDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImdyZWVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbGVtZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLnZpZGVvQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lUGxheUJ1dHRvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKHRoaXMuY29ycmVjdEFuaW1bbnVtXSkpO1xyXG4gICAgICB9LCB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnJlaXRlcmF0aW9uQXVkaW8uZHVyYXRpb24gKyAwLjUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3cm9uZ0Fuc3dlci0tXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS53cm9uZ0F1ZGlvLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ3cm9uZ1wiKTtcclxuICAgICAgLy8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICAgIGlmIChudW0gPiB0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgbnVtIC09IHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhcmFjdGVyXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG4gICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGVcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24odGhpcy53cm9uZ0FuaW1bbnVtXSkpO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPblNvdW5kQnV0dG9uKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnF1ZXN0aW9uQXVkaW8sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMzKCk7XHJcbiAgICB9LCB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnF1ZXN0aW9uQXVkaW8uZHVyYXRpb24pO1xyXG4gIH1cclxuICBwcml2YXRlIHNldHVwVFZGb2N1czMoKSB7XHJcbiAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICBsZXQgc291bmRCdG4gPSB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpO1xyXG5cclxuICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHJldHVybiBub2RlLmFjdGl2ZSAmJiBub2RlLm9wYWNpdHkgPiAwICYmIGJ0biAmJiBidG4uaW50ZXJhY3RhYmxlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgc291bmRCdG4sIGJhY2tCdG4sIG11c2ljQnRuXS5maWx0ZXIoXHJcbiAgICAgIChuKSA9PiBuXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHNldHVwVFZGb2N1czNcclxuICAgIC8vY29uc29sZS5sb2coXCJzZXR1cFRWRm9jdXMzOlwiLCBub2Rlcy5tYXAobiA9PiBuLm5hbWUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT0gMSAmJiAhdGhpcy5pc1Zpc2l0ZWQpIHtcclxuICAgICAgdGhpcy5pc1Zpc2l0ZWQgPSB0cnVlO1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMsIC0xKTtcclxuICAgIH1cclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBUVkZvY3VzMCgpIHtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmNhbGxFbmQoKTtcclxuICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuXS5maWx0ZXIoKG4pID0+ICEhbik7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgfVxyXG4gIGNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCkge1xyXG4gICAgbGV0IGlzRW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbkFwcGVhcmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghdGhpcy5xdWVzdGlvbkFwcGVhcmVkW2ldKSB7XHJcbiAgICAgICAgaXNFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5jYW5OZXh0UXVlc3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbdGhpcy5jdXJyZW50UXVlc3Rpb25dID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLlBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNldHVwKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5QYXVzZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkQnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFja3dhcmRCdG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMzKCk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc0VuZCkge1xyXG4gICAgICB0aGlzLmNoYXJhY3Rlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldFBhcmVudCgpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIC5wbGF5KCkud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5SZXZlcnNlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUV4Y2VsbGVudFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyYXlvblwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldFBhcmVudCgpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIilcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRQYXJlbnQoKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3JheW9uXCJcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAuZ2V0UGFyZW50KClcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICAgIH0sIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuY3VycmVudENsaXAuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIHNldHVwVFZGb2N1czIoKSB7XHJcbiAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICBsZXQgc291bmRCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpO1xyXG5cclxuICAgIGxldCBwYXVzZUJ0biA9IHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKTtcclxuICAgIGxldCByZXN1bWVCdG4gPSB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpO1xyXG4gICAgbGV0IGZvcndhcmRCdG4gPSBjYy5maW5kKFwiQ2FudmFzL3NraXBBaGVhZFwiKTtcclxuICAgIGxldCBiYWNrd2FyZEJ0biA9IGNjLmZpbmQoXCJDYW52YXMvc2tpcEJhY2tcIik7XHJcbiAgICAvL2xldCBzbGlkZXJIYW5kbGUgPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJQYXVzZSBzY2FsZSBiZWZvcmUgaW5pdDpcIiwgcGF1c2VCdG4uc2NhbGUpO1xyXG4gICAgbGV0IG5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBpZiAocGF1c2VCdG4gJiYgcGF1c2VCdG4uYWN0aXZlICYmIHBhdXNlQnRuLm9wYWNpdHkgPiAwKVxyXG4gICAgICBub2Rlcy5wdXNoKHBhdXNlQnRuKTtcclxuICAgIGlmIChmb3J3YXJkQnRuICYmIGZvcndhcmRCdG4uYWN0aXZlICYmIGZvcndhcmRCdG4ub3BhY2l0eSA+IDApXHJcbiAgICAgIG5vZGVzLnB1c2goZm9yd2FyZEJ0bik7XHJcbiAgICBpZiAoYmFja3dhcmRCdG4gJiYgYmFja3dhcmRCdG4uYWN0aXZlICYmIGJhY2t3YXJkQnRuLm9wYWNpdHkgPiAwKVxyXG4gICAgICBub2Rlcy5wdXNoKGJhY2t3YXJkQnRuKTtcclxuXHJcbiAgICBpZiAocmVzdW1lQnRuICYmIHJlc3VtZUJ0bi5hY3RpdmUgJiYgcmVzdW1lQnRuLm9wYWNpdHkgPiAwKVxyXG4gICAgICBub2Rlcy5wdXNoKHJlc3VtZUJ0bik7XHJcbiAgICAvL25vZGVzLnB1c2goc2xpZGVySGFuZGxlKTtcclxuXHJcbiAgICBpZiAoYmFja0J0bikgbm9kZXMucHVzaChiYWNrQnRuKTtcclxuICAgIGlmIChzb3VuZEJ0bikgbm9kZXMucHVzaChzb3VuZEJ0bik7XHJcbiAgICBpZiAobXVzaWNCdG4pIG5vZGVzLnB1c2gobXVzaWNCdG4pO1xyXG5cclxuICAgIC8vIHNldHVwVFZGb2N1czNcclxuICAgIC8vY29uc29sZS5sb2coXCJzZXR1cFRWRm9jdXMyOlwiLCBub2Rlcy5tYXAobiA9PiBuLm5hbWUpKTtcclxuICAgIGlmIChwYXVzZUJ0bikgcGF1c2VCdG4uc2NhbGUgPSAxO1xyXG4gICAgaWYgKHJlc3VtZUJ0bikgcmVzdW1lQnRuLnNjYWxlID0gMTtcclxuICAgIGlmIChmb3J3YXJkQnRuKSBmb3J3YXJkQnRuLnNjYWxlID0gMTtcclxuICAgIGlmIChiYWNrd2FyZEJ0bikgYmFja3dhcmRCdG4uc2NhbGUgPSAxO1xyXG4gICAgaWYgKGJhY2tCdG4pIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgaWYgKG11c2ljQnRuKSBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICBpZiAoc291bmRCdG4pIHNvdW5kQnRuLnNjYWxlID0gMTtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMsIC0xKTtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0cnVlKTtcclxuICB9XHJcbiAgcXVlc3Rpb25TZXR1cCgpIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuSW5cIik7XHJcbiAgICB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICBjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpXHJcbiAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIC8vIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnTXVzaWMsIHRydWUpO1xyXG4gICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvL2NjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgMC4xKTtcclxuICAgIGlmICh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0uaXNxdWVzdGlvblRleHQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvblRleHQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb25JbWc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc29wdGlvblRleHQpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGkgPD1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvblRleHRzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChpIDw9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25JbWdzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uSW1nc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbY3VycmVudF0ucXVlc3Rpb25BdWRpbywgZmFsc2UpO1xyXG4gICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZVwiKTtcclxuICAgICAgdGhpcy5jaGFyYWN0ZXJcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSwgMC41KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmlzU2xpZGluZykge1xyXG4gICAgICBsZXQgY3VycmVudFRpbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZTtcclxuICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuZ2V0RHVyYXRpb24oKTtcclxuICAgICAgbGV0IHZhbHVlID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGgucm91bmQodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUpID09XHJcbiAgICAgICAgICB0aGlzLnRpbWVyc1tpXSAmJlxyXG4gICAgICAgICF0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0gJiZcclxuICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiAmJlxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZhdGUgdGhlIHF1ZXN0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5QYXVzZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25TZXR1cCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcndhcmRCdG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWNrd2FyZEJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyBsb2FkaW5nIGFuaW1hdGlvbi5cclxuXHJcbiAgZ2V0QW5pbUR1cmF0aW9uKGFuaW1OYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpb24gbmFtZSA9IFwiLCBhbmltTmFtZSk7XHJcbiAgICBsZXQgbnVtOiBudW1iZXIgPSB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLmZpbmRBbmltYXRpb24oYW5pbU5hbWUpLmR1cmF0aW9uO1xyXG4gICAgcmV0dXJuIG51bTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICByZXR1cm4gX251bWJlcjtcclxuICB9XHJcblxyXG4gIE9uRW5kKCkge1xyXG4gICAgd2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLnN0YXJzUGFuZWw7XHJcbiAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcclxuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgdG90YWxXaWR0aCArPSBvcHRpb25XaWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbkhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgIG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdmFpbGFibGVXaWR0aCA9IG9wdGlvbnNMYXlvdXQud2lkdGg7XHJcbiAgICBsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID1cclxuICAgICAgdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxXaWR0aFdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICBsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXHJcbiAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxyXG4gICAgICBvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgIG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxyXG4gICAgICBsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyBvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWDtcclxuICAgICAgb3B0aW9uLnggPSBwb3NYIC0gb3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWDtcclxuXHJcbiAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcbiAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zTGF5b3V0LmhlaWdodCA9IG1heEhlaWdodCAqIHNjYWxlRmFjdG9yO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG4gICAgICBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGxvYWRBdWRpb0NsaXAoXHJcbiAgICBhdWRpb05hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==

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
        _this.levelEndAudio = null;
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
        _this.gameStarted = false;
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
        var _this = this;
        this.UpdateQuestions();
        this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
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
        this.playVideo1();
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
        this.node.on('completed', function () {
            if (this.gameStarted) {
                this.checkOnMissingQuestions();
                console.log("video completed");
                this.tools.active = false;
                this.videoCompleted = true;
            }
            // cc.director.loadScene("1");
            // this.node.destroy();
        }, this);
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
            _event.target.getChildByName("green").active = true;
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.questions[this.currentQuestion - 1].reiterationAudio != null) {
                this.scheduleOnce(function () {
                    _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, _this.correctAnim[num_1], false);
                    _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setCompleteListener(function () {
                        _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", false);
                    });
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
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.levelEndAudio, false);
                }, _this.questions[_this.currentQuestion - 1].correctAudio.duration);
                // this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, this.correctAnim[num], false);
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
                    }
                    else {
                        _this.ResumePlayButton();
                    }
                }, _this.getAnimDuration(_this.correctAnim[num_1]));
            }, this.questions[this.currentQuestion - 1].reiterationAudio.duration + 0.5);
        }
        else {
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
                this.questionNode.active = true;
                break;
            }
        }
        if (isEnd) {
            this.character.active = false;
            this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(function () {
                _this.node.getParent().getChildByName("gameEnd").active = true;
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
        if (this.questions[this.currentQuestion].isoptionText) {
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
            var i_2 = 0;
            this.questionNode.getChildByName("options1").children.forEach(function (element) {
                element.active = false;
                if (i_2 <= (_this.questions[_this.currentQuestion].optionImgs.length - 1)) {
                    element.active = true;
                    element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = _this.questions[_this.currentQuestion].optionImgs[i_2];
                    element.getChildByName("text").active = false;
                    element.getChildByName("img").active = true;
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
        property(cc.AudioClip)
    ], video.prototype, "levelEndAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF4QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVksQ0F3QmpCO0lBQUQsbUJBQUM7Q0F4QkQsQUF3QkMsSUFB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LFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFBQSxpQkE2SEM7UUE1SEcsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JILElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNqRSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuSCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDakUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEgsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekYsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEgsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQztTQUNOO2dDQUNRLENBQUM7WUFDTixPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUYsT0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUUsT0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDbEYsT0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDbkMseUJBQXlCO2dCQUN6QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQzNFLElBQUksR0FBRyxFQUFFOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzVDLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDO2lCQUVOO3FCQUNJO29CQUNELE9BQUssZUFBZSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLFdBQVc7d0JBQ2hGLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDaEQsQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtpQkFDSTtnQkFDRCxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUNqRjtZQUNELElBQUksQ0FBQyxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7d0NBRXhCLENBQUM7b0JBQ04sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7d0JBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTzs0QkFDcEUsSUFBSSxHQUFHLEVBQUU7Z0NBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDNUMsT0FBTzs2QkFDVjs0QkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQzt3QkFDbEQsQ0FBQyxDQUFDLENBQUM7cUJBRU47eUJBQ0k7d0JBQ0QsT0FBSyxlQUFlLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLFdBQVc7NEJBQ3pFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQzt3QkFDbEQsQ0FBQyxDQUFDLENBQUM7cUJBQ047O2dCQWpCTCx3QkFBd0I7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQTlELENBQUM7aUJBaUJUO2FBQ0o7aUJBQ0k7Z0JBQ0QsdUJBQXVCO2dCQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JFLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRjthQUNKO1lBQ0QsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO29CQUM3RSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLFVBQUMsR0FBRyxFQUFFLFNBQVM7b0JBQ2hGLElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzVDLE9BQU87cUJBQ1Y7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO29CQUM1RSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO29CQUMxRSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFDSTtnQkFDRCxPQUFLLGFBQWEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTO29CQUM1RSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQUssYUFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLFNBQVM7b0JBQy9FLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFLLGFBQWEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxTQUFTO29CQUMzRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQUssYUFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsVUFBQyxTQUFTO29CQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxDQUFDO2FBQ047OztRQWxHTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtvQkFBOUMsQ0FBQztTQW1HVDtJQUNMLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQzVDO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQzlDO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFBQSxpQkF1Q0M7UUF0Q0csSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM5QjtZQUNELDhCQUE4QjtZQUM5Qix1QkFBdUI7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQUEsaUJBT3ZCO1lBTkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsb0ZBQW9GO1lBQ3BGLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEQsbURBQW1EO1FBQ25ELGtEQUFrRDtRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTix5QkFBeUI7UUFDN0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxTQUFTO0lBQ2IsQ0FBQztJQUVELDZCQUFhLEdBQWIsVUFBYyxTQUF5QjtRQUF2QyxpQkFjQztRQWRhLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQ25DLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2hFLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzdCO1lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ1I7YUFDSTtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLFFBQWdCLEVBQUUsU0FBMEIsRUFBRSxRQUF3QjtRQUFwRCwwQkFBQSxFQUFBLGlCQUEwQjtRQUFFLHlCQUFBLEVBQUEsZUFBd0I7UUFDN0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6RjtxQkFDSSxJQUFJLFNBQVMsRUFBRTtvQkFDaEIsSUFBSSxRQUFRLEVBQUU7d0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDekY7eUJBQ0k7d0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDekY7aUJBQ0o7Z0JBQ0QsTUFBTTthQUNUO1NBQ0o7SUFFTCxDQUFDO0lBRUQsZ0NBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdELDRCQUFZLEdBQVo7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3ZILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9DLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFBQSxpQkFrQkM7UUFqQkcsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdkgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHNEQUFzRDtRQUN0RCx1REFBdUQ7UUFDdkQsMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCxXQUFXO0lBQ2YsQ0FBQztJQUVELDRCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUcsQ0FBQztJQUVELGtDQUFrQixHQUFsQixVQUFtQixNQUFnQjtRQUFuQyxpQkFvRkM7UUFuRkcsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUMzRSw2REFBNkQ7WUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwRCxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksSUFBSSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDNUosS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUM7d0JBQzlILEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNqSixDQUFDLENBQUMsQ0FBQTtvQkFDRixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNILHlFQUF5RTtZQUN6RSxJQUFJLEtBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLEtBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ25DLEtBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLEtBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ25DLEtBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN4QztpQkFDSjthQUNKO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4RixLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRSwrSkFBK0o7Z0JBQy9KLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6RDtxQkFDSTtvQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUM5Qyw4REFBOEQ7d0JBQzlELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUMvQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3hELENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUM1QixJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3JCLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO3FCQUNsQzt5QkFDSTt3QkFDRCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztxQkFDM0I7Z0JBQ0wsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEY7YUFDSTtZQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RiwyREFBMkQ7WUFDM0Qsd0VBQXdFO1lBQ3hFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUosK0dBQStHO1lBQy9HLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsMERBQTBEO2dCQUMxRCxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoSixDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzlEO0lBRUwsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHVDQUF1QixHQUF2QjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLEtBQUssR0FBWSxJQUFJLENBQUM7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEMsTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqSCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsRUFBRTtvQkFDckYsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzVGO3FCQUNJO29CQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUMvRztnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLEVBQUU7d0JBQ3JGLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUN2RjtnQkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkc7SUFDTCxDQUFDO0lBRUQsNkJBQWEsR0FBYjtRQUFBLGlCQXdEQztRQXZERyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1SSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25HLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3pKLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3hGO2FBQ0k7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0RixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwRixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDO1NBQ2hLO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDbkQsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN0QixPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQztvQkFDbkgsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM3QyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ2hEO2dCQUNELEdBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN0QixPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDLENBQUMsQ0FBQztvQkFDdkgsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM5QyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQy9DO2dCQUNELEdBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUdELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVJLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDM0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwRSxJQUFJLEtBQUssR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzNHO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7bUJBQzFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDbkM7U0FDSjtJQUNMLENBQUM7SUFPRCwwQkFBMEI7SUFFMUIsK0JBQWUsR0FBZixVQUFnQixRQUFnQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakssT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU8sK0JBQWUsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLEdBQVc7UUFDNUMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQ0ksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQU0scUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUVqQyxVQUFVLElBQUksV0FBVyxHQUFHLHFCQUFxQixDQUFDO1lBQ2xELElBQUksWUFBWSxHQUFHLFNBQVMsRUFBRTtnQkFDMUIsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUM1QjtTQUNKO1FBRUQsSUFBSSxjQUFjLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLHFCQUFxQixHQUFHLFVBQVUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUM7UUFDMUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLHFCQUFxQixDQUFDLENBQUM7UUFFdEUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVCLDRDQUE0QztZQUM1QyxJQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztZQUVwQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQztZQUNsQyxNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO1lBRW5DLHFEQUFxRDtZQUNyRCxJQUFJLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEUsZ0JBQWdCLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztZQUV6RCxtREFBbUQ7WUFDbkQsS0FBcUIsVUFBZSxFQUFmLEtBQUEsTUFBTSxDQUFDLFFBQVEsRUFBZixjQUFlLEVBQWYsSUFBZSxFQUFFO2dCQUFqQyxJQUFJLFFBQVEsU0FBQTtnQkFDYixRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDO2dCQUNwQyxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDbkQsQ0FBQztJQUVELCtCQUFlLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxRQUErQztRQUM5RSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUN0RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw2QkFBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUE2QztRQUMxRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztZQUNsRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuc0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1k7SUFJbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxZQUFZLENBQUM7NENBQ1E7SUF4Q2QsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJzQnpCO0lBQUQsWUFBQztDQTNzQkQsQUEyc0JDLENBM3NCa0MsRUFBRSxDQUFDLFNBQVMsR0Eyc0I5QztrQkEzc0JvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jYy5tYWNyby5FTkFCTEVfVFJBTlNQQVJFTlRfQ0FOVkFTID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlF1ZXN0aW9uRGF0YVwiKVxyXG5jbGFzcyBRdWVzdGlvbkRhdGEge1xyXG4gICAgLy8gQHByb3BlcnR5KE51bWJlcilcclxuICAgIHF1ZXN0aW9uVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8vIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNvcHRpb25UZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzcXVlc3Rpb25UZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBxdWVzdGlvbkltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHF1ZXN0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgb3B0aW9uSW1nczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgLy8gQHByb3BlcnR5KFN0cmluZylcclxuICAgIG9wdGlvblRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHJlaXRlcmF0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgd3JvbmdBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBjb3JyZWN0QW5zd2VyOiBudW1iZXIgPSAxO1xyXG59XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHZpZGVvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvb2xzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXVlc3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhcnNQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzdGFyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcG9zaXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbGV2ZWxFbmRBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2xpZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0b29sQWN0aXZhdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUXVlc3Rpb25EYXRhKVxyXG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaXNTbGlkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGltZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFF1ZXN0aW9uczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25BcHBlYXJlZDogYm9vbGVhbltdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYW5zd2VyZWRRdWVzdGlvbjogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzUGxheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzT25TbGlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuTmV4dFF1ZXN0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgYXR0ZW1wczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdmlkZW9Db21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICBwcml2YXRlIHdyb25nQW5pbTogc3RyaW5nW10gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcblxyXG4gICAgcHJpdmF0ZSBwdXp6bGVDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIl07XHJcbiAgICBwcml2YXRlIHB1enpsZU5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8xXCJdO1xyXG5cclxuICAgIHByaXZhdGUgc3VwZXJjdWJDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICBwcml2YXRlIHN1cGVyY3ViTmVnYXRpdmVBbmltOiBzdHJpbmdbXSA9IFtcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuXHJcbiAgICBwcml2YXRlIHBvZGFyQ29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1wicG9zc2l0aXZlMVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCIsIFwicG9zc2l0aXZlMVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xyXG4gICAgcHJpdmF0ZSBwb2Rhck5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXCJuZWdldGl2ZTFcIiwgXCJuZWdldGl2ZTJcIiwgXCJuZWdldGl2ZTNcIiwgXCJuZWdldGl2ZTRcIiwgXCJuZWdldGl2ZTVcIiwgXCJuZWdldGl2ZTZcIiwgXCJuZWdldGl2ZTFcIiwgXCJuZWdldGl2ZTJcIiwgXCJuZWdldGl2ZTNcIiwgXCJuZWdldGl2ZTRcIiwgXCJuZWdldGl2ZTVcIiwgXCJuZWdldGl2ZTZcIl07XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLlVwZGF0ZVF1ZXN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJzW2ldID0gdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UaW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWVzdGlvbiB0aW1lciA9IFwiLCB0aGlzLnRpbWVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyZWRRdWVzdGlvbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc09uU2xpZGVyID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcInRvdWNoY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZVF1ZXN0aW9ucygpIHtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldID0gbmV3IFF1ZXN0aW9uRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvblRpbWUgPSBwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXBwZWFyVGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uSXNPcHRpb25UZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5pc3F1ZXN0aW9uVGV4dCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uSXNRdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RBbnN3ZXIgPSBwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25zW2ldLmlzcXVlc3Rpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2xvYWQgdGhlIHF1ZXN0aW9uIGltYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25JbWcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25JbWcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGV4dCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25UZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWVzdGlvbnNbaV0uaXNvcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2xvYWQgdGhlIG9wdGlvbiBpbWFnZXNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvbkltZ3Nbal0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvbkltZ3Nbal0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9sb2FkIHRoZSBvcHRpb24gdGV4dHNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9uVGV4dHNbal0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnNbal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlJlaXRlcmF0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5yZWl0ZXJhdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Xcm9uZ0F1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJlaXRlcmF0aW9uQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLldyb25nQXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheVZpZGVvMSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICBzdGFyLnBhcmVudCA9IHRoaXMuc3RhcnNQYW5lbDtcclxuICAgICAgICAgICAgc3Rhci5uYW1lID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBzdGFyLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwdXp6bGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5wdXp6bGVDb3JyZWN0QW5pbTtcclxuICAgICAgICAgICAgdGhpcy53cm9uZ0FuaW0gPSB0aGlzLnB1enpsZU5lZ2F0aXZlQW5pbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuaW0gPSB0aGlzLnN1cGVyY3ViQ29ycmVjdEFuaW07XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdBbmltID0gdGhpcy5zdXBlcmN1Yk5lZ2F0aXZlQW5pbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuaW0gPSB0aGlzLnBvZGFyQ29ycmVjdEFuaW07XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdBbmltID0gdGhpcy5wb2Rhck5lZ2F0aXZlQW5pbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVZpZGVvMSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ2NvbXBsZXRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlkZW8gY29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b29scy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9Db21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigncGxheWluZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEdXJhdGlvbiA9IFwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3RpdmF0ZVRvb2xzKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS52b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9LCA1KTtcclxuICAgIH1cclxuXHJcbiAgICBBY3RpdmF0ZVRvb2xzKF9hY3RpdmF0ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAoX2FjdGl2YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbEFjdGl2YXRlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b29scy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b29scy5vcGFjaXR5ID09IDI1NSAmJiAhdGhpcy5pc1BhdXNlICYmICF0aGlzLmlzT25TbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHMub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJVcGRhdGUoX2N1cnJlbnQ6IG51bWJlciwgX2Fuc3dlcmVkOiBib29sZWFuID0gZmFsc2UsIF9jb3JyZWN0OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IF9jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGlmICghX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFyU3ByaXRlc1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9hbnN3ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJTcHJpdGVzWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFyU3ByaXRlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmVzdW1lUGxheUJ1dHRvbigpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFBhdXNlQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BY3RpdmF0ZVRvb2xzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFVwZGF0ZVNsaWRlcigpIHtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpICogdGhpcy5zbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID0gdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVzbGlkZXIgOiBcIiwgTWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJwYXVzZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlU2xpZGVyMigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZXNsaWRlciA6IFwiKTtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpICogdGhpcy5zbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID0gdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzU2xpZGluZyA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIFNsaWRlckJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXMgc2xpZGVyIGJ1dHRvbiB3b3JraW5nISEhISEhIVwiKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgIH1cclxuXHJcbiAgICBPblF1ZXN0aW9uQW5zd2VyZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBpbnB1dDogc3RyaW5nID0gX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuYXR0ZW1wcysrO1xyXG4gICAgICAgIGlmIChwYXJzZUludChpbnB1dCkgPT0gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb3JyZWN0XCIpO1xyXG4gICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuY29ycmVjdEFuaW1bbnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnJlaXRlcmF0aW9uQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBudW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMTtcclxuICAgICAgICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbnVtIC09ICh0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bSAtPSAodGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gdGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSAtPSAodGhpcy5jb3JyZWN0QW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLmNvcnJlY3RBdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sZXZlbEVuZEF1ZGlvLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5jb3JyZWN0QXVkaW8uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLmNvcnJlY3RBbmltW251bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dGVtcHMgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhclVwZGF0ZSh0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDEsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0ZW1wcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidHdlZW5PdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcmFjdGVyLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKSkudG8oMC41LCB7IHg6IC02MDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImdyZWVuXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5OZXh0UXVlc3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVzdW1lUGxheUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKHRoaXMuY29ycmVjdEFuaW1bbnVtXSkpO1xyXG5cclxuICAgICAgICAgICAgfSwgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS53cm9uZ0F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ3cm9uZ1wiKTtcclxuICAgICAgICAgICAgLy8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICAgICAgICAgIGlmIChudW0gPiB0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBudW0gLT0gKHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMud3JvbmdBbmltW251bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMud3JvbmdBbmltW251bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24odGhpcy53cm9uZ0FuaW1bbnVtXSkpO1xyXG4gICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBPblNvdW5kQnV0dG9uKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnF1ZXN0aW9uQXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja09uTWlzc2luZ1F1ZXN0aW9ucygpIHtcclxuICAgICAgICBsZXQgaXNFbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbkFwcGVhcmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWVzdGlvbkFwcGVhcmVkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpc0VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uU2V0dXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKS53cmFwTW9kZSA9IGNjLldyYXBNb2RlLlJldmVyc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1FeGNlbGxlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3JheW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3JheW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmN1cnJlbnRDbGlwLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcXVlc3Rpb25TZXR1cCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgICAgIHRoaXMuc3RhclVwZGF0ZSh0aGlzLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuSW5cIik7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpKS50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnTXVzaWMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIDAuMSk7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uSW1nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc29wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25UZXh0cy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25UZXh0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25JbWdzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uSW1nc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1tjdXJyZW50XS5xdWVzdGlvbkF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJJZGxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjdXJyZW50VGltZSAvIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPSB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcIkhhbmRsZVwiKS5nZXRQb3NpdGlvbigpLnggKyA0NzIuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSkgPT0gdGhpcy50aW1lcnNbaV0gJiYgIXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXVxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5jYW5OZXh0UXVlc3Rpb24gJiYgdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uU2V0dXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gU2hvdyBsb2FkaW5nIGFuaW1hdGlvbi5cclxuXHJcbiAgICBnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmltYXRpb24gbmFtZSA9IFwiLCBhbmltTmFtZSk7XHJcbiAgICAgICAgbGV0IG51bTogbnVtYmVyID0gdGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbU5hbWUpLmR1cmF0aW9uO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gX251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBPbkVuZCgpIHtcclxuICAgICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5zdGFyc1BhbmVsO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBvcHRpb25XaWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKG9wdGlvbkhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXZhaWxhYmxlV2lkdGggPSBvcHRpb25zTGF5b3V0LndpZHRoO1xyXG4gICAgICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPSB0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxXaWR0aFdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICAgICAgbGV0IGFjY3VtdWxhdGVkV2lkdGggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIChvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi54ID0gcG9zWCAtIChvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYKTtcclxuXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5oZWlnaHQgPSBtYXhIZWlnaHQgKiBzY2FsZUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59Il19
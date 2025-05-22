
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
        _this.gameStarted = false;
        _this.correctAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        _this.wrongAnim = [
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
        ];
        _this.puzzleCorrectAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_1",
            "positive_2",
            "positive_3",
        ];
        _this.puzzleNegativeAnim = [
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
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
        this.node.on("completed", function () {
            if (this.gameStarted) {
                this.checkOnMissingQuestions();
                console.log("video completed");
                this.tools.active = false;
                this.videoCompleted = true;
            }
            // cc.director.loadScene("1");
            // this.node.destroy();
        }, this);
        this.node.on("playing", function () {
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
                if (_this.tools.opacity == 255 &&
                    !_this.isPause &&
                    !_this.isOnSlider) {
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
        var input = _event.target.name;
        this.attemps++;
        if (parseInt(input) ==
            this.questions[this.currentQuestion - 1].correctAnswer) {
            // this.character.getComponent(cc.Animation).play("correct");
            _event.target.getChildByName("green").active = true;
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.questions[this.currentQuestion - 1].reiterationAudio !=
                null) {
                this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1]
                        .reiterationAudio, false);
                }, 0.5);
            }
            _event.target.getParent().children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
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
            this.node
                .getParent()
                .getChildByName("curtain")
                .getComponent(cc.Animation)
                .play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(function () {
                cc.find("Canvas/gameEnd").active = true;
                // this.node.getParent().getChildByName("gameEnd").active = true;
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
                    // this.node
                    // 	.getParent()
                    // 	.getChildByName("gameEnd")
                    // 	.getChildByName(startGame.Instance.jockeyName).active =
                    // 	true;
                }
                _this.scheduleOnce(function () {
                    _this.node.active = false;
                    if (StartGame_1.default.Instance.jockeyName == "boy" ||
                        StartGame_1.default.Instance.jockeyName == "girl") {
                        _this.node
                            .getParent()
                            .getChildByName("gameEnd")
                            .getChildByName("end").active = true;
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
        this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName)
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim"))
            .to(0.5, { x: 0 }, { easing: "backInOut" })
            .start();
        var id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        cc.audioEngine.setVolume(id, 0.1);
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
                    _this.questions[_this.currentQuestion].optionTexts
                        .length -
                        1) {
                    element.active = true;
                    element
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
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
                if (i_2 <=
                    _this.questions[_this.currentQuestion].optionImgs.length -
                        1) {
                    element.active = true;
                    element
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame =
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
            if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) == this.timers[i] &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0Msb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF4QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVksQ0F3QmpCO0lBQUQsbUJBQUM7Q0F4QkQsQUF3QkMsSUFB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QyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLFlBQVksQ0FBQzs0Q0FDUTtJQW5DWCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBeWdDekI7SUFBRCxZQUFDO0NBemdDRCxBQXlnQ0MsQ0F6Z0NrQyxFQUFFLENBQUMsU0FBUyxHQXlnQzlDO2tCQXpnQ29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbmNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgPSB0cnVlO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUXVlc3Rpb25EYXRhXCIpXHJcbmNsYXNzIFF1ZXN0aW9uRGF0YSB7XHJcblx0Ly8gQHByb3BlcnR5KE51bWJlcilcclxuXHRxdWVzdGlvblRpbWU6IG51bWJlciA9IDA7XHJcblx0Ly8gQHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNvcHRpb25UZXh0OiBib29sZWFuID0gZmFsc2U7XHJcblx0Ly8gQHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNxdWVzdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHQvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0cXVlc3Rpb25JbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHQvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHF1ZXN0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0Ly8gQHByb3BlcnR5KFN0cmluZylcclxuXHRxdWVzdGlvblRleHQ6IHN0cmluZyA9IFwiXCI7XHJcblx0Ly8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdG9wdGlvbkltZ3M6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHQvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG5cdG9wdGlvblRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cmVpdGVyYXRpb25BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0Ly8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHR3cm9uZ0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdC8vIEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0Y29ycmVjdEFuc3dlcjogbnVtYmVyID0gMTtcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2aWRlbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0dG9vbHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHF1ZXN0aW9uTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0Y2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRzdGFyc1BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdGJnTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdHN0YXJTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwb3NpdGl2ZVZPOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRzbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHByaXZhdGUgdG9vbEFjdGl2YXRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShRdWVzdGlvbkRhdGEpXHJcblx0cXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGlzU2xpZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgdGltZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cdHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBxdWVzdGlvbkFwcGVhcmVkOiBib29sZWFuW10gPSBbXTtcclxuXHRwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGFuc3dlcmVkUXVlc3Rpb246IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGlzUGxheTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHJpdmF0ZSBpc09uU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBjYW5OZXh0UXVlc3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgYXR0ZW1wczogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHZpZGVvQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuXHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdF07XHJcblx0cHJpdmF0ZSB3cm9uZ0FuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzJcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XHRcIm5lZ2F0aXZlXzVcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8yXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV81XCIsXHJcblx0XTtcclxuXHJcblx0cHJpdmF0ZSBwdXp6bGVDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XTtcclxuXHRwcml2YXRlIHB1enpsZU5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRdO1xyXG5cclxuXHRwcml2YXRlIHN1cGVyY3ViQ29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdF07XHJcblx0cHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8zXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzRcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8zXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzRcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XTtcclxuXHJcblx0cHJpdmF0ZSBwb2RhckNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuXHRcdFwicG9zc2l0aXZlMVwiLFxyXG5cdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcInBvc3NpdGl2ZTNcIixcclxuXHRcdFwicG9zc2l0aXZlNFwiLFxyXG5cdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcInBvc3NpdGl2ZTZcIixcclxuXHRcdFwicG9zc2l0aXZlMVwiLFxyXG5cdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcInBvc3NpdGl2ZTNcIixcclxuXHRcdFwicG9zc2l0aXZlNFwiLFxyXG5cdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcInBvc3NpdGl2ZTZcIixcclxuXHRdO1xyXG5cdHByaXZhdGUgcG9kYXJOZWdhdGl2ZUFuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJuZWdldGl2ZTFcIixcclxuXHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdFx0XCJuZWdldGl2ZTFcIixcclxuXHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdF07XHJcblxyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLlVwZGF0ZVF1ZXN0aW9ucygpO1xyXG5cdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLnRpbWVyc1tpXSA9IHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGltZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInF1ZXN0aW9uIHRpbWVyID0gXCIsIHRoaXMudGltZXJzW2ldKTtcclxuXHRcdFx0XHR0aGlzLnRvdGFsUXVlc3Rpb25zKys7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbkFwcGVhcmVkW2ldID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5hbnN3ZXJlZFF1ZXN0aW9uW2ldID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sIDEpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcblx0XHRcdFwidG91Y2hzdGFydFwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFxyXG5cdFx0XHRcInRvdWNobW92ZVwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcblx0XHRcdFwidG91Y2hlbmRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcblx0XHRcdFx0dGhpcy5pc09uU2xpZGVyID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXNcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpc1xyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcclxuXHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXHJcblx0XHRcdFwidG91Y2htb3ZlXCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXHJcblx0XHRcdFwidG91Y2hlbmRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXNcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVRdWVzdGlvbnMoKSB7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG5cdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBvZGFyX2ZvbnQ7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG5cdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRsY19mb250O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcblx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfZm9udDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcblx0XHRcdFx0XHRcdHRoaXMuamFpcHVyaWFfZm9udDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzOyBpKyspIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0gPSBuZXcgUXVlc3Rpb25EYXRhKCk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGltZSA9IHBhcnNlSW50KFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BcHBlYXJUaW1lXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCA9XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Jc09wdGlvblRleHQ7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLmlzcXVlc3Rpb25UZXh0ID1cclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLklzUXVlc3Rpb25UZXh0O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QW5zd2VyID0gcGFyc2VJbnQoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QW5zd2VyXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmICghdGhpcy5xdWVzdGlvbnNbaV0uaXNxdWVzdGlvblRleHQpIHtcclxuXHRcdFx0XHQvL2xvYWQgdGhlIHF1ZXN0aW9uIGltYWdlXHJcblx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25JbWcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uSW1nID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGV4dCA9XHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uVGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCkge1xyXG5cdFx0XHRcdC8vbG9hZCB0aGUgb3B0aW9uIGltYWdlc1xyXG5cdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRsZXQgaiA9IDA7XHJcblx0XHRcdFx0XHRqIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zLmxlbmd0aDtcclxuXHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXSxcclxuXHRcdFx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25JbWdzW2pdID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdLFxyXG5cdFx0XHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9uSW1nc1tqXSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly9sb2FkIHRoZSBvcHRpb24gdGV4dHNcclxuXHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0bGV0IGogPSAwO1xyXG5cdFx0XHRcdFx0aiA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9ucy5sZW5ndGg7XHJcblx0XHRcdFx0XHRqKytcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvblRleHRzW2pdID1cclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BdWRpb05hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5yZWl0ZXJhdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBdWRpb05hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLldyb25nQXVkaW9OYW1lLFxyXG5cdFx0XHRcdFx0KGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLndyb25nQXVkaW8gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdFx0KGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucmVpdGVyYXRpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uQ29ycmVjdEF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Xcm9uZ0F1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHRoaXMucGxheVZpZGVvMSgpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDI7IGkgPD0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgc3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlblswXSk7XHJcblx0XHRcdHN0YXIucGFyZW50ID0gdGhpcy5zdGFyc1BhbmVsO1xyXG5cdFx0XHRzdGFyLm5hbWUgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHN0YXIuc2V0UG9zaXRpb24oMCwgMCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInB1enpsZVwiKSB7XHJcblx0XHRcdHRoaXMuY29ycmVjdEFuaW0gPSB0aGlzLnB1enpsZUNvcnJlY3RBbmltO1xyXG5cdFx0XHR0aGlzLndyb25nQW5pbSA9IHRoaXMucHV6emxlTmVnYXRpdmVBbmltO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMuc3VwZXJjdWJDb3JyZWN0QW5pbTtcclxuXHRcdFx0dGhpcy53cm9uZ0FuaW0gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmVBbmltO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0dGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMucG9kYXJDb3JyZWN0QW5pbTtcclxuXHRcdFx0dGhpcy53cm9uZ0FuaW0gPSB0aGlzLnBvZGFyTmVnYXRpdmVBbmltO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cGxheVZpZGVvMSgpIHtcclxuXHRcdHRoaXMubm9kZS5vbihcclxuXHRcdFx0XCJjb21wbGV0ZWRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdhbWVTdGFydGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInZpZGVvIGNvbXBsZXRlZFwiKTtcclxuXHRcdFx0XHRcdHRoaXMudG9vbHMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ29tcGxldGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0XHQvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5vbihcclxuXHRcdFx0XCJwbGF5aW5nXCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzUGxheSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJEdXJhdGlvbiA9IFwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG5cdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0Ly8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnZvbHVtZSA9IDA7XHJcblx0XHQvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly8gdGhpcy5BY3RpdmF0ZVRvb2xzKGZhbHNlKTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikudm9sdW1lID0gMTtcclxuXHRcdFx0dGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdFx0Ly8gdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG5cdFx0fSwgMSk7XHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgdGhpcy50b29scy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gfSwgNSk7XHJcblx0fVxyXG5cclxuXHRBY3RpdmF0ZVRvb2xzKF9hY3RpdmF0ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHRcdGlmIChfYWN0aXZhdGUpIHtcclxuXHRcdFx0dGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnRvb2xzLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHR0aGlzLnRvb2xzLm9wYWNpdHkgPT0gMjU1ICYmXHJcblx0XHRcdFx0XHQhdGhpcy5pc1BhdXNlICYmXHJcblx0XHRcdFx0XHQhdGhpcy5pc09uU2xpZGVyXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRvb2xBY3RpdmF0ZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy50b29scy5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXJVcGRhdGUoXHJcblx0XHRfY3VycmVudDogbnVtYmVyLFxyXG5cdFx0X2Fuc3dlcmVkOiBib29sZWFuID0gZmFsc2UsXHJcblx0XHRfY29ycmVjdDogYm9vbGVhbiA9IHRydWVcclxuXHQpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IF9jdXJyZW50KSB7XHJcblx0XHRcdFx0dGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdFx0aWYgKCFfYW5zd2VyZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdGNjLlNwcml0ZVxyXG5cdFx0XHRcdFx0KS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhclNwcml0ZXNbMF07XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfYW5zd2VyZWQpIHtcclxuXHRcdFx0XHRcdGlmIChfY29ycmVjdCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRcdGNjLlNwcml0ZVxyXG5cdFx0XHRcdFx0XHQpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFyU3ByaXRlc1syXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0Y2MuU3ByaXRlXHJcblx0XHRcdFx0XHRcdCkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJTcHJpdGVzWzFdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UmVzdW1lUGxheUJ1dHRvbigpIHtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG5cdFx0dGhpcy5pc1BsYXkgPSB0cnVlO1xyXG5cdFx0dGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHR9XHJcblx0UGF1c2VCdXR0b24oKSB7XHJcblx0XHR0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoKTtcclxuXHR9XHJcblxyXG5cdFVwZGF0ZVNsaWRlcigpIHtcclxuXHRcdHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmN1cnJlbnRUaW1lID1cclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuZ2V0RHVyYXRpb24oKSAqXHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuc3RvcCgpO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG5cdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuXHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XCJ1cGRhdGVzbGlkZXIgOiBcIixcclxuXHRcdFx0TWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSlcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG5cdFx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH0sIDAuMik7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVTbGlkZXIyKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ1cGRhdGVzbGlkZXIgOiBcIik7XHJcblx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkgKlxyXG5cdFx0XHR0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnN0b3AoKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuXHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdH0sIDAuMik7XHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcblx0XHQvLyAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdC8vICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIH0sIDAuMSk7XHJcblx0fVxyXG5cclxuXHRTbGlkZXJCdXR0b24oKSB7XHJcblx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpcyBzbGlkZXIgYnV0dG9uIHdvcmtpbmchISEhISEhXCIpO1xyXG5cdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuXHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0fVxyXG5cclxuXHRPblF1ZXN0aW9uQW5zd2VyZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSBfZXZlbnQudGFyZ2V0Lm5hbWU7XHJcblx0XHR0aGlzLmF0dGVtcHMrKztcclxuXHRcdGlmIChcclxuXHRcdFx0cGFyc2VJbnQoaW5wdXQpID09XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uY29ycmVjdEFuc3dlclxyXG5cdFx0KSB7XHJcblx0XHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb3JyZWN0XCIpO1xyXG5cdFx0XHRfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTb3VuZCwgZmFsc2UpO1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvICE9XHJcblx0XHRcdFx0bnVsbFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdXHJcblx0XHRcdFx0XHRcdFx0LnJlaXRlcmF0aW9uQXVkaW8sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH1cclxuXHRcdFx0X2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0ZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIGxldCBudW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSlcclxuXHRcdFx0bGV0IG51bSA9IHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMTtcclxuXHRcdFx0aWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdG51bSAtPSB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0aWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0bnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdGlmIChudW0gPiB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0bnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLmNvcnJlY3RBdWRpbyxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJhY3RlclxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy5jb3JyZWN0QW5pbVtudW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuYXR0ZW1wcyA8PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMSwgdHJ1ZSwgZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmF0dGVtcHMgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRfZXZlbnQudGFyZ2V0LmdldFBhcmVudCgpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuT3V0XCIpO1xyXG5cdFx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpXHJcblx0XHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtNjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJncmVlblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbk5leHRRdWVzdGlvbiA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy52aWRlb0NvbXBsZXRlZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlJlc3VtZVBsYXlCdXR0b24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB0aGlzLmdldEFuaW1EdXJhdGlvbih0aGlzLmNvcnJlY3RBbmltW251bV0pKTtcclxuXHRcdFx0fSwgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS53cm9uZ0F1ZGlvLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCk7XHJcblx0XHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ3cm9uZ1wiKTtcclxuXHRcdFx0Ly8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSk7XHJcblx0XHRcdGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcblx0XHRcdGlmIChudW0gPiB0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0bnVtIC09IHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY2hhcmFjdGVyXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHQvLyB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGVcIik7XHJcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0fSwgdGhpcy5nZXRBbmltRHVyYXRpb24odGhpcy53cm9uZ0FuaW1bbnVtXSkpO1xyXG5cdFx0XHRfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPblNvdW5kQnV0dG9uKCkge1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0ucXVlc3Rpb25BdWRpbyxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjaGVja09uTWlzc2luZ1F1ZXN0aW9ucygpIHtcclxuXHRcdGxldCBpc0VuZDogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25BcHBlYXJlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoIXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSkge1xyXG5cdFx0XHRcdGlzRW5kID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiYWN0aXZhdGUgdGhlIHF1ZXN0aW9uXCIpO1xyXG5cdFx0XHRcdHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5QYXVzZUJ1dHRvbigpO1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25TZXR1cCgpO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGlzRW5kKSB7XHJcblx0XHRcdHRoaXMuY2hhcmFjdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0UGFyZW50KClcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoKS53cmFwTW9kZSA9IGNjLldyYXBNb2RlLlJldmVyc2U7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRjYy5maW5kKFwiQ2FudmFzL2dhbWVFbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUV4Y2VsbGVudFwiKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyYXlvblwiXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldFBhcmVudCgpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5ub2RlXHJcblx0XHRcdFx0XHQvLyBcdC5nZXRQYXJlbnQoKVxyXG5cdFx0XHRcdFx0Ly8gXHQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpXHJcblx0XHRcdFx0XHQvLyBcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID1cclxuXHRcdFx0XHRcdC8vIFx0dHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiIHx8XHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldFBhcmVudCgpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHR9LCB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmN1cnJlbnRDbGlwLmR1cmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHF1ZXN0aW9uU2V0dXAoKSB7XHJcblx0XHRsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uO1xyXG5cdFx0dGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uKTtcclxuXHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0d2VlbkluXCIpO1xyXG5cdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpXHJcblx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0Y2MudHdlZW4odGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpKVxyXG5cdFx0XHQudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ011c2ljLCB0cnVlKTtcclxuXHRcdHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCAwLjEpO1xyXG5cdFx0aWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uVGV4dDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbkltZztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmlzb3B0aW9uVGV4dCkge1xyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuXHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0aSA8PVxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHNcclxuXHRcdFx0XHRcdFx0XHQubGVuZ3RoIC1cclxuXHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvblRleHRzW2ldO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGkgPD1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbkltZ3MubGVuZ3RoIC1cclxuXHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uSW1nc1tpXTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbY3VycmVudF0ucXVlc3Rpb25BdWRpbyxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZVwiKTtcclxuXHRcdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fSwgMC41KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLmlzU2xpZGluZykge1xyXG5cdFx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdGNjLlZpZGVvUGxheWVyXHJcblx0XHRcdCkuY3VycmVudFRpbWU7XHJcblx0XHRcdGxldCBkdXJhdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCk7XHJcblx0XHRcdGxldCB2YWx1ZSA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcblx0XHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRNYXRoLnJvdW5kKFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWVcclxuXHRcdFx0XHQpID09IHRoaXMudGltZXJzW2ldICYmXHJcblx0XHRcdFx0IXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSAmJlxyXG5cdFx0XHRcdHRoaXMuY2FuTmV4dFF1ZXN0aW9uICYmXHJcblx0XHRcdFx0dGhpcy5nYW1lU3RhcnRlZFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcblx0XHRcdFx0dGhpcy5jYW5OZXh0UXVlc3Rpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbdGhpcy5jdXJyZW50UXVlc3Rpb25dID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLlBhdXNlQnV0dG9uKCk7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvblNldHVwKCk7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBTaG93IGxvYWRpbmcgYW5pbWF0aW9uLlxyXG5cclxuXHRnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFuaW1hdGlvbiBuYW1lID0gXCIsIGFuaW1OYW1lKTtcclxuXHRcdGxldCBudW06IG51bWJlciA9IHRoaXMuY2hhcmFjdGVyXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHQuZmluZEFuaW1hdGlvbihhbmltTmFtZSkuZHVyYXRpb247XHJcblx0XHRyZXR1cm4gbnVtO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0X251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuXHRcdHJldHVybiBfbnVtYmVyO1xyXG5cdH1cclxuXHJcblx0T25FbmQoKSB7XHJcblx0XHR3aW5kb3cuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdE9wdGlvbnNMYXlvdXQoKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuc3RhcnNQYW5lbDtcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG5cdFx0Y29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG5cdFx0bGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cdFx0bGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblx0XHRcdGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuXHRcdFx0bGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG5cdFx0XHR0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0XHRpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0bWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuXHRcdGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxyXG5cdFx0XHR0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0bGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuXHRcdGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0bGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSB0aGUgb3B0aW9uXHJcblx0XHRcdG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0b3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcblx0XHRcdGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYO1xyXG5cdFx0XHRvcHRpb24ueCA9IHBvc1ggLSBvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYO1xyXG5cclxuXHRcdFx0YWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuXHRcdFx0Zm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0c3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcblx0fVxyXG5cclxuXHRsb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRpbWFnZU5hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcblx0XHRcdGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblx0bG9hZEF1ZGlvQ2xpcChcclxuXHRcdGF1ZGlvTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0KGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soYXVkaW9DbGlwKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
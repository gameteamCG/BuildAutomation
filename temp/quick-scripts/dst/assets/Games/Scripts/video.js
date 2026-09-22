
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
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_1",
            "negative_2",
            "negative_3",
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
        if (parseInt(input) == this.questions[this.currentQuestion - 1].correctAnswer) {
            // this.character.getComponent(cc.Animation).play("correct");
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
    video.prototype.OnSoundButton = function (event) {
        // cc.audioEngine.stopAllEffects();
        // cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
        // this.timer = 0;
        event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
        this.scheduleOnce(function () {
            event.target.getComponent(cc.Button).interactable = true;
        }, this.questions[this.currentQuestion - 1].duration);
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
                _this.node.getParent().getChildByName("gameEnd").active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0Usb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBRTVCLENBQUM7SUF6QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVksQ0F5QmpCO0lBQUQsbUJBQUM7Q0F6QkQsQUF5QkMsSUFB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ImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJRdWVzdGlvbkRhdGFcIilcclxuY2xhc3MgUXVlc3Rpb25EYXRhIHtcclxuICAvLyBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIHF1ZXN0aW9uVGltZTogbnVtYmVyID0gMDtcclxuICAvLyBAcHJvcGVydHkoQm9vbGVhbilcclxuICBpc29wdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBAcHJvcGVydHkoQm9vbGVhbilcclxuICBpc3F1ZXN0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBxdWVzdGlvbkltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcXVlc3Rpb25BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG4gIHF1ZXN0aW9uVGV4dDogc3RyaW5nID0gXCJcIjtcclxuICAvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgb3B0aW9uSW1nczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gIC8vIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgb3B0aW9uVGV4dHM6IHN0cmluZ1tdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICByZWl0ZXJhdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHdyb25nQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgLy8gQHByb3BlcnR5KE51bWJlcilcclxuICBjb3JyZWN0QW5zd2VyOiBudW1iZXIgPSAxO1xyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmlkZW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvb2xzOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBxdWVzdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc3RhcnNQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBiZ011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgY29ycmVjdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBzdGFyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcG9zaXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgZHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc2xpZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcml2YXRlIHRvb2xBY3RpdmF0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoUXVlc3Rpb25EYXRhKVxyXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1NsaWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHRpbWVyczogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIHRvdGFsUXVlc3Rpb25zOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgcXVlc3Rpb25BcHBlYXJlZDogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBhbnN3ZXJlZFF1ZXN0aW9uOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1BsYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHByaXZhdGUgaXNPblNsaWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY2FuTmV4dFF1ZXN0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIGF0dGVtcHM6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSB2aWRlb0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXHJcbiAgICBcInBvc2l0aXZlXzFcIixcclxuICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICBcInBvc2l0aXZlXzRcIixcclxuICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICBcInBvc2l0aXZlXzJcIixcclxuICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICBcInBvc2l0aXZlXzVcIixcclxuICBdO1xyXG4gIHByaXZhdGUgd3JvbmdBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHB1enpsZUNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICBdO1xyXG4gIHByaXZhdGUgcHV6emxlTmVnYXRpdmVBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzFcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzFcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzFcIixcclxuICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgc3VwZXJjdWJDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICBcInBvc2l0aXZlXzNcIixcclxuICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgXTtcclxuICBwcml2YXRlIHN1cGVyY3ViTmVnYXRpdmVBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIFwibmVnYXRpdmVfM1wiLFxyXG4gICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzRcIixcclxuICAgIFwibmVnYXRpdmVfM1wiLFxyXG4gICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICBcIm5lZ2F0aXZlXzRcIixcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHBvZGFyQ29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1xyXG4gICAgXCJwb3NzaXRpdmUxXCIsXHJcbiAgICBcInBvc3NpdGl2ZTJcIixcclxuICAgIFwicG9zc2l0aXZlM1wiLFxyXG4gICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICBcInBvc3NpdGl2ZTVcIixcclxuICAgIFwicG9zc2l0aXZlNlwiLFxyXG4gICAgXCJwb3NzaXRpdmUxXCIsXHJcbiAgICBcInBvc3NpdGl2ZTJcIixcclxuICAgIFwicG9zc2l0aXZlM1wiLFxyXG4gICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICBcInBvc3NpdGl2ZTVcIixcclxuICAgIFwicG9zc2l0aXZlNlwiLFxyXG4gIF07XHJcbiAgcHJpdmF0ZSBwb2Rhck5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXHJcbiAgICBcIm5lZ2V0aXZlMVwiLFxyXG4gICAgXCJuZWdldGl2ZTJcIixcclxuICAgIFwibmVnZXRpdmUzXCIsXHJcbiAgICBcIm5lZ2V0aXZlNFwiLFxyXG4gICAgXCJuZWdldGl2ZTVcIixcclxuICAgIFwibmVnZXRpdmU2XCIsXHJcbiAgICBcIm5lZ2V0aXZlMVwiLFxyXG4gICAgXCJuZWdldGl2ZTJcIixcclxuICAgIFwibmVnZXRpdmUzXCIsXHJcbiAgICBcIm5lZ2V0aXZlNFwiLFxyXG4gICAgXCJuZWdldGl2ZTVcIixcclxuICAgIFwibmVnZXRpdmU2XCIsXHJcbiAgXTtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuVXBkYXRlUXVlc3Rpb25zKCk7XHJcbiAgICB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGltZXJzW2ldID0gdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UaW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb24gdGltZXIgPSBcIiwgdGhpcy50aW1lcnNbaV0pO1xyXG4gICAgICAgIHRoaXMudG90YWxRdWVzdGlvbnMrKztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuc3dlcmVkUXVlc3Rpb25baV0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMSk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNPblNsaWRlciA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcbiAgICAgIFwidG91Y2htb3ZlXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNPblNsaWRlciA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuICAgICAgXCJ0b3VjaGVuZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgICB0aGlzLmlzT25TbGlkZXIgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFxyXG4gICAgICBcInRvdWNoY2FuY2VsXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuaXNPblNsaWRlciA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuWzBdLm9uKFxyXG4gICAgICBcInRvdWNoc3RhcnRcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcclxuICAgICAgXCJ0b3VjaG1vdmVcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcclxuICAgICAgXCJ0b3VjaGVuZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIFVwZGF0ZVF1ZXN0aW9ucygpIHtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcbiAgICAgICAgICAgIHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcbiAgICAgICAgLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcbiAgICAgICAgICAgIHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cclxuICAgICAgICAgICAgdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cclxuICAgICAgICAgICAgdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1tpXSA9IG5ldyBRdWVzdGlvbkRhdGEoKTtcclxuICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UaW1lID0gcGFyc2VJbnQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkFwcGVhclRpbWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uaXNvcHRpb25UZXh0ID1cclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLklzT3B0aW9uVGV4dDtcclxuICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uaXNxdWVzdGlvblRleHQgPVxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uSXNRdWVzdGlvblRleHQ7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RBbnN3ZXIgPSBwYXJzZUludChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBbnN3ZXJcclxuICAgICAgKTtcclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uc1tpXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG4gICAgICAgIC8vbG9hZCB0aGUgcXVlc3Rpb24gaW1hZ2VcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkltZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkltYWdlTmFtZSxcclxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25JbWcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25UZXh0ID1cclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25UZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5xdWVzdGlvbnNbaV0uaXNvcHRpb25UZXh0KSB7XHJcbiAgICAgICAgLy9sb2FkIHRoZSBvcHRpb24gaW1hZ2VzXHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgIGogPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgaisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdLFxyXG4gICAgICAgICAgICAgIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvbkltZ3Nbal0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnNbal0sXHJcbiAgICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25JbWdzW2pdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2xvYWQgdGhlIG9wdGlvbiB0ZXh0c1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICBqIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zLmxlbmd0aDtcclxuICAgICAgICAgIGorK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9uVGV4dHNbal0gPVxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLk9wdGlvbnNbal07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlJlaXRlcmF0aW9uQXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJlaXRlcmF0aW9uQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uQ29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uV3JvbmdBdWRpb05hbWUsXHJcbiAgICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgICAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uQXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlJlaXRlcmF0aW9uQXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5yZWl0ZXJhdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLldyb25nQXVkaW9OYW1lLFxyXG4gICAgICAgICAgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS53cm9uZ0F1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5wbGF5VmlkZW8xKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBzdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuWzBdKTtcclxuICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLnN0YXJzUGFuZWw7XHJcbiAgICAgIHN0YXIubmFtZSA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgc3Rhci5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuT3B0aW9uc0xheW91dCgpO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicHV6emxlXCIpIHtcclxuICAgICAgdGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMucHV6emxlQ29ycmVjdEFuaW07XHJcbiAgICAgIHRoaXMud3JvbmdBbmltID0gdGhpcy5wdXp6bGVOZWdhdGl2ZUFuaW07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5zdXBlcmN1YkNvcnJlY3RBbmltO1xyXG4gICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMuc3VwZXJjdWJOZWdhdGl2ZUFuaW07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLmNvcnJlY3RBbmltID0gdGhpcy5wb2RhckNvcnJlY3RBbmltO1xyXG4gICAgICB0aGlzLndyb25nQW5pbSA9IHRoaXMucG9kYXJOZWdhdGl2ZUFuaW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwbGF5VmlkZW8xKCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKFxyXG4gICAgICBcImNvbXBsZXRlZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlkZW8gY29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgdGhpcy50b29scy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudmlkZW9Db21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ub2RlLm9uKFxyXG4gICAgICBcInBsYXlpbmdcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkR1cmF0aW9uID0gXCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuQWN0aXZhdGVUb29scyhmYWxzZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wYXVzZSgpO1xyXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikudm9sdW1lID0gMDtcclxuICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5wbGF5KCk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAvLyB0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS52b2x1bWUgPSAxO1xyXG4gICAgICB0aGlzLlVwZGF0ZVNsaWRlcigpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgICAvLyB0aGlzLmlzU2xpZGluZyA9IHRydWU7XHJcbiAgICB9LCAxKTtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICB0aGlzLnRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyB9LCA1KTtcclxuICB9XHJcblxyXG4gIEFjdGl2YXRlVG9vbHMoX2FjdGl2YXRlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKF9hY3RpdmF0ZSkge1xyXG4gICAgICB0aGlzLnRvb2xBY3RpdmF0ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudG9vbHMub3BhY2l0eSA9IDI1NTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRvb2xzLm9wYWNpdHkgPT0gMjU1ICYmICF0aGlzLmlzUGF1c2UgJiYgIXRoaXMuaXNPblNsaWRlcikge1xyXG4gICAgICAgICAgdGhpcy5BY3RpdmF0ZVRvb2xzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudG9vbHMub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFyVXBkYXRlKFxyXG4gICAgX2N1cnJlbnQ6IG51bWJlcixcclxuICAgIF9hbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgX2NvcnJlY3Q6IGJvb2xlYW4gPSB0cnVlXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSBfY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIGlmICghX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoX2Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICBpZiAoX2NvcnJlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzJdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICB0aGlzLnN0YXJTcHJpdGVzWzFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUmVzdW1lUGxheUJ1dHRvbigpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgdGhpcy5pc1BsYXkgPSB0cnVlO1xyXG4gICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuICAgIHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgUGF1c2VCdXR0b24oKSB7XHJcbiAgICB0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcbiAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkFjdGl2YXRlVG9vbHMoKTtcclxuICB9XHJcblxyXG4gIFVwZGF0ZVNsaWRlcigpIHtcclxuICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRUaW1lID1cclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuZ2V0RHVyYXRpb24oKSAqXHJcbiAgICAgIHRoaXMuc2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuc3RvcCgpO1xyXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG4gICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJ1cGRhdGVzbGlkZXIgOiBcIixcclxuICAgICAgTWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSlcclxuICAgICk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDAuMik7XHJcbiAgfVxyXG5cclxuICBVcGRhdGVTbGlkZXIyKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVzbGlkZXIgOiBcIik7XHJcbiAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50VGltZSA9XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkgKlxyXG4gICAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnN0b3AoKTtcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcbiAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuICAgIH0sIDAuMik7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcbiAgICAvLyAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIH0sIDAuMSk7XHJcbiAgfVxyXG5cclxuICBTbGlkZXJCdXR0b24oKSB7XHJcbiAgICB0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJpcyBzbGlkZXIgYnV0dG9uIHdvcmtpbmchISEhISEhXCIpO1xyXG4gICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuICAgICAgdGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcbiAgfVxyXG5cclxuICBPblF1ZXN0aW9uQW5zd2VyZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgbGV0IGlucHV0OiBzdHJpbmcgPSBfZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICB0aGlzLmF0dGVtcHMrKztcclxuICAgIGlmIChcclxuICAgICAgcGFyc2VJbnQoaW5wdXQpID09IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uY29ycmVjdEFuc3dlclxyXG4gICAgKSB7XHJcbiAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb3JyZWN0XCIpO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTb3VuZCwgZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnJlaXRlcmF0aW9uQXVkaW8sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGxldCBudW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSlcclxuICAgICAgbGV0IG51bSA9IHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMTtcclxuICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIG51bSAtPSB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgbnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIGlmIChudW0gPiB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgbnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLmNvcnJlY3RBdWRpbyxcclxuICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgdGhpcy5jb3JyZWN0QW5pbVtudW1dLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0ZW1wcyA8PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmF0dGVtcHMgPSAwO1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldFBhcmVudCgpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuT3V0XCIpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtNjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJncmVlblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICBpZiAodGhpcy52aWRlb0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZVBsYXlCdXR0b24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbih0aGlzLmNvcnJlY3RBbmltW251bV0pKTtcclxuICAgICAgfSwgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS53cm9uZ0F1ZGlvLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ3cm9uZ1wiKTtcclxuICAgICAgLy8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICAgIGlmIChudW0gPiB0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgbnVtIC09IHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhcmFjdGVyXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG4gICAgICAvLyB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGVcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24odGhpcy53cm9uZ0FuaW1bbnVtXSkpO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPblNvdW5kQnV0dG9uKGV2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5xdWVzdGlvbkF1ZGlvLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gdGhpcy50aW1lciA9IDA7XHJcbiAgICBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLnF1ZXN0aW9uQXVkaW8sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH0sIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tPbk1pc3NpbmdRdWVzdGlvbnMoKSB7XHJcbiAgICBsZXQgaXNFbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uQXBwZWFyZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbaV0pIHtcclxuICAgICAgICBpc0VuZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gaTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2YXRlIHRoZSBxdWVzdGlvblwiKTtcclxuICAgICAgICB0aGlzLmNhbk5leHRRdWVzdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25BcHBlYXJlZFt0aGlzLmN1cnJlbnRRdWVzdGlvbl0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUGF1c2VCdXR0b24oKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uU2V0dXAoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbisrO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc0VuZCkge1xyXG4gICAgICB0aGlzLmNoYXJhY3Rlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldFBhcmVudCgpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIC5wbGF5KCkud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5SZXZlcnNlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1FeGNlbGxlbnRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRW5kZWQtLXRydWVcIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcmF5b25cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRQYXJlbnQoKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImphaXB1cmlhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAuZ2V0UGFyZW50KClcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyYXlvblwiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgLmdldFBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgICB9LCB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmN1cnJlbnRDbGlwLmR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHF1ZXN0aW9uU2V0dXAoKSB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgdGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uKTtcclxuICAgIC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0d2VlbkluXCIpO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpKVxyXG4gICAgICAudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ011c2ljLCB0cnVlKTtcclxuICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCAwLjEpO1xyXG4gICAgaWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbkltZztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmlzb3B0aW9uVGV4dCkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuICAgICAgICAuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaSA8PVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25UZXh0c1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG4gICAgICAgIC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKGkgPD0gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbkltZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25JbWdzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uc1tjdXJyZW50XS5xdWVzdGlvbkF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJJZGxlXCIpO1xyXG4gICAgICB0aGlzLmNoYXJhY3RlclxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNTbGlkaW5nKSB7XHJcbiAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lO1xyXG4gICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpO1xyXG4gICAgICBsZXQgdmFsdWUgPSBjdXJyZW50VGltZSAvIGR1cmF0aW9uO1xyXG4gICAgICB0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnNsaWRlci5nZXRDaGlsZEJ5TmFtZShcImhpZ2hcIikud2lkdGggPVxyXG4gICAgICAgIHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgTWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSkgPT1cclxuICAgICAgICAgIHRoaXMudGltZXJzW2ldICYmXHJcbiAgICAgICAgIXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSAmJlxyXG4gICAgICAgIHRoaXMuY2FuTmV4dFF1ZXN0aW9uICYmXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5jYW5OZXh0UXVlc3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbdGhpcy5jdXJyZW50UXVlc3Rpb25dID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLlBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNldHVwKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IGxvYWRpbmcgYW5pbWF0aW9uLlxyXG5cclxuICBnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGlvbiBuYW1lID0gXCIsIGFuaW1OYW1lKTtcclxuICAgIGxldCBudW06IG51bWJlciA9IHRoaXMuY2hhcmFjdGVyXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuZmluZEFuaW1hdGlvbihhbmltTmFtZSkuZHVyYXRpb247XHJcbiAgICByZXR1cm4gbnVtO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgIHJldHVybiBfbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgT25FbmQoKSB7XHJcbiAgICB3aW5kb3cuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIE9wdGlvbnNMYXlvdXQoKSB7XHJcbiAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuc3RhcnNQYW5lbDtcclxuICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICB0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxyXG4gICAgICB0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgIGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYO1xyXG4gICAgICBvcHRpb24ueCA9IHBvc1ggLSBvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYO1xyXG5cclxuICAgICAgYWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcbiAgfVxyXG5cclxuICBsb2FkU3ByaXRlRnJhbWUoXHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcbiAgICAgIGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
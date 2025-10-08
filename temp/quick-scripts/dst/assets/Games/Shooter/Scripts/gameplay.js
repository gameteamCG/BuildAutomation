
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Shooter/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4e51CcXJH24gA96gBaxOm', 'gameplay');
// Games/Shooter/Scripts/gameplay.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HorizntalOptionNode = null;
        _this.VerticalOptionNode = null;
        _this.extraImg = null;
        _this.popSound = [];
        _this.honeyFilling = null;
        _this.honeyprogressFilling = null;
        _this.beeFlying = null;
        _this.questionSound = [];
        _this.positiveSound = [];
        _this.negativeSound = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.stallionPositive = [];
        _this.stallionNegative = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.tlcPositive = [];
        _this.tlcNegative = [];
        _this.supercubPositive = [];
        _this.supercubNegative = [];
        _this.puzzlePositive = [];
        _this.puzzleNegative = [];
        _this.tlc_birdFlying = null;
        _this.supercub_Pos1 = null;
        _this.supercub_Pos2 = null;
        _this.supercub_Neg1 = null;
        _this.supercub_Neg2 = null;
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.puzzle_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = [];
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.isOptionBG = false;
        _this.TotalOptions = 0;
        _this.positionArray = [];
        _this.isDone = [];
        _this.isLastTween = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.optionsNode.children.forEach(function (elem) {
            elem.children.forEach(function (Elem) {
                Elem.active = true;
            });
        });
        this.optionsNode.children[0].children[0].active = false;
        this.optionsNode.children[1].children[0].active = false;
        this.optionsNode.children[2].children[0].active = false;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.optionsNode.children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.podar_font;
            });
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon" || StartGame_1.default.Instance.jockeyName == "tortoise") {
            this.optionsNode.children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.jaipuria_font;
            });
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            this.optionsNode.children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.puzzle_font;
            });
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.puzzle_font;
        }
        this.TotalOptions = 3;
        this.optionsNode = this.node.getChildByName("Option");
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answerArray[i] = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
        }
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_1 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    _this.correctAudio[i] = audioClip;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_2.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                this_3.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (AudioClip) {
                    _this.correctAudio[i] = AudioClip;
                });
            };
            var this_3 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_4(i);
            }
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    NewClass.prototype.start = function () {
        this.canTouch = true;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.totalAnswers = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length;
        this.callQuestionBar();
        if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "tortoise") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            this.positiveAudio = this.puzzlePositive;
            this.negativeAudio = this.puzzleNegative;
        }
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.callQuestionBar = function () {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.scheduleOnce(function () {
            _this.callOptionIn();
        }, 1);
    };
    NewClass.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        this.optionsNode.children[0].children[0].active = true;
        this.optionsNode.children[1].children[0].active = true;
        this.optionsNode.children[2].children[0].active = true;
        this.optionsNode.children[0].children[0].getComponent(sp.Skeleton).setAnimation(0, "red Flower open", false);
        this.optionsNode.children[1].children[0].getComponent(sp.Skeleton).setAnimation(0, "blue Flower open", false);
        this.optionsNode.children[2].children[0].getComponent(sp.Skeleton).setAnimation(0, "yellow Flower open", false);
        this.scheduleOnce(function () {
            _this.optionsNode.children[0].children[0].getComponent(sp.Skeleton).setAnimation(0, "red Flower idle", true);
            _this.optionsNode.children[1].children[0].getComponent(sp.Skeleton).setAnimation(0, "blue Flower idle", true);
            _this.optionsNode.children[2].children[0].getComponent(sp.Skeleton).setAnimation(0, "yellow Flower idle", true);
            _this.optionsNode.children.forEach(function (elem) {
                elem.children[1].opacity = 255;
                elem.children[2].opacity = 255;
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(elem.children[1])
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                cc.tween(elem.children[2])
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            });
            _this.scheduleOnce(function () {
                _this.PlayQuestionAudio();
            }, 0.5);
        }, 0.5);
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canTouch = false;
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                var hand = this.node.getChildByName("hand");
                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                hand.setPosition(0, -70);
                hand.setParentWithSamePos(this.node);
                hand.getComponent(cc.Animation).play();
            }
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc" || StartGame_1.default.Instance.jockeyName == "supercub") {
            var intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    _this.canTouch = true;
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        var hand = _this.node.getChildByName("hand");
                        hand.setParent(_this.node.getChildByName("Option").getChildByName(_this.answerArray[0]));
                        hand.setPosition(0, -70);
                        hand.setParentWithSamePos(_this.node);
                        hand.getComponent(cc.Animation).play();
                    }
                }
                else {
                    cc.audioEngine.playEffect(_this.questionSound[0], false);
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_loop", true);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            _this.canTouch = true;
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                var hand = _this.node.getChildByName("hand");
                                hand.setParent(_this.node.getChildByName("Option").getChildByName(_this.answerArray[0]));
                                hand.setPosition(0, -70);
                                hand.setParentWithSamePos(_this.node);
                                hand.getComponent(cc.Animation).play();
                            }
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, _this.questionSound[0].duration);
                }
            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
    };
    NewClass.prototype.OnButtonClick = function (_event) {
        console.log("canTouch--" + this.canTouch);
        if (!this.canTouch) {
            return;
        }
        if (this.isDone[parseInt(_event.target.name) - 1]) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        var _node = _event.target;
        var iscorrect = false;
        for (var i = 0; i < this.answerArray.length; i++) {
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[parseInt(_node.name) - 1] = true;
                break;
            }
        }
        if (iscorrect) {
            this.canTouch = false;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    };
    NewClass.prototype.callNextLevel = function () {
        this.optionsNode.children[0].children[0].active = false;
        this.optionsNode.children[1].children[0].active = false;
        this.optionsNode.children[2].children[0].active = false;
        this.optionsNode.children.forEach(function (elem) {
            elem.children.forEach(function (Elem) {
                Elem.active = false;
            });
        });
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(function () {
                cc.director.loadScene("endScreen");
            }, this.positiveAudio[0].duration - 0.5);
        }
        else {
            this.scheduleOnce(function () {
                globalVariables_1.default.Instance.currentLevel++;
                cc.director.loadScene("1");
            }, this.positiveAudio[0].duration - 0.5);
        }
    };
    NewClass.prototype.callStarsEared = function () {
        if (!this.star1Log && globalVariables_1.default.Instance.currentLevel == 1) {
            this.star1Log = true;
            console.log("starsEarned--1");
        }
        if (!this.star2Log && globalVariables_1.default.Instance.currentLevel == 4) {
            this.star2Log = true;
            console.log("starsEarned--2");
        }
        if (!this.star3Log && globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    };
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        _node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.extraImg;
        cc.audioEngine.playEffect(this.correctAudio[parseInt(_node.name) - 1], false);
        cc.tween(_node).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_node.children[0]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(function () {
            _this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
            _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(_this.positiveSound[0], false);
            _this.scheduleOnce(function () {
                _this.callJockey();
            }, 0.7);
        }, 0.5);
    };
    NewClass.prototype.callPositiveFeedback = function (_node) {
        var _this = this;
        var voIndex = this.answerArray.indexOf(_node.name);
        cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
        _node.getChildByName("img").color = cc.Color.GRAY;
        this.scheduleOnce(function () {
            _this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
            _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(_this.positiveSound[0], false);
            _this.scheduleOnce(function () {
                _this.canTouch = true;
                _this.correctAnswerCount++;
                if (_this.correctAnswerCount == _this.totalAnswers) {
                    for (var i = 0; i < _this.node.getChildByName("Option").children.length; i++) {
                        if (_this.isDone[i] == false) {
                            _this.node.getChildByName("Option").children[i].destroy();
                        }
                    }
                    _this.scheduleOnce(function () {
                        _this.node.getChildByName("Option").children.forEach(function (elem) {
                            elem.getChildByName("img").color = cc.Color.WHITE;
                        });
                        _this.isLastTween = true;
                        _this.canTouch = false;
                        _this.callBeePositiveReaction(_node);
                        _this.scheduleOnce(function () {
                            cc.tween(_this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                            _this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                            _this.callJockey();
                        }, 3.5);
                    }, 1);
                }
            }, 0.5);
        }, this.correctAudio[voIndex].duration);
    };
    NewClass.prototype.callJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "tortoise") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
        }
        if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
            this.scheduleOnce(function () {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                        else {
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                    }
                    _this.callNextLevel();
                }, _this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(function () {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_out", false);
                cc.audioEngine.playEffect(_this.tlc_birdFlying, false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey.active = false;
                    _this.callNextLevel();
                }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" || anim[currentClipNum] == "positive_2") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(function () {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(_this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(_this.supercub_Pos2, false);
                        }
                        _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                            cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                            _this.callNextLevel();
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                    }, _this.positiveAudio[currentClipNum].duration);
                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(function () {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                    cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                    _this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }
        }
    };
    NewClass.prototype.callNegativeRection = function (_node, _event) {
        var _this = this;
        this.canTouch = false;
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        if (this.isOptionBG) {
            _node.getChildByName("bg").color = cc.Color.RED;
        }
        else {
            _node.getChildByName("img").color = cc.Color.RED;
        }
        this.callBeeNegativeReaction(_node);
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "tortoise") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
                anim = ["negative_1", "negative_2"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
                _this.scheduleOnce(function () {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        cc.tween(_this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                        if (StartGame_1.default.Instance.jockeyName != "stallion") {
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        _this.canTouch = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    _this.canTouch = true;
                }, _this.negativeAudio[currentClipNum].duration);
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2") {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                        _this.scheduleOnce(function () {
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(_this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(_this.supercub_Neg2, false);
                            }
                            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.canTouch = true;
                            _this.scheduleOnce(function () {
                                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, _this.negativeAudio[currentClipNum].duration);
                    }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        _this.canTouch = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
            _node.getChildByName("img").color = cc.Color.WHITE;
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("honeybee")).to(0.5, { x: 0, y: -500 }, { easing: "quartInOut" }).start();
                _this.scheduleOnce(function () {
                    _this.node.getChildByName("honeybee").getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
                }, 0.5);
            }, 2);
        }, 2.7);
    };
    NewClass.prototype.callBeeNegativeReaction = function (_node) {
        var _this = this;
        var honeyBee = this.node.getChildByName("honeybee");
        //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        if (_node.name == "1") {
            cc.tween(honeyBee).to(0.5, { x: -320, y: -360 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(function () {
                //cc.audioEngine.stopEffect(beeId);
                _this.optionsNode.children[0].children[1].opacity = 0;
                _this.optionsNode.children[0].children[2].opacity = 0;
                _this.optionsNode.children[0].children[0].getComponent(sp.Skeleton).setAnimation(0, "red Flower close", false);
                honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
            }, 0.5);
        }
        else if (_node.name == "2") {
            cc.tween(honeyBee).to(0.5, { x: 30, y: -360 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(function () {
                //cc.audioEngine.stopEffect(beeId);
                _this.optionsNode.children[1].children[1].opacity = 0;
                _this.optionsNode.children[1].children[2].opacity = 0;
                _this.optionsNode.children[1].children[0].getComponent(sp.Skeleton).setAnimation(0, "blue Flower close", false);
                honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
            }, 0.5);
        }
        else if (_node.name == "3") {
            cc.tween(honeyBee).to(0.5, { x: 320, y: -360 }, { easing: "quartInOut" }).start();
            this.scheduleOnce(function () {
                //cc.audioEngine.stopEffect(beeId);
                _this.optionsNode.children[2].children[1].opacity = 0;
                _this.optionsNode.children[2].children[2].opacity = 0;
                _this.optionsNode.children[2].children[0].getComponent(sp.Skeleton).setAnimation(0, "yellow Flower close", false);
                honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
            }, 0.5);
        }
    };
    NewClass.prototype.callBeePositiveReaction = function (_node) {
        var _this = this;
        var honeyBee = this.node.getChildByName("honeybee");
        //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        if (_node.name == "1") {
            cc.tween(honeyBee).to(0.5, { x: -320, y: -150 }, { easing: "quartInOut" }).start();
        }
        else if (_node.name == "2") {
            cc.tween(honeyBee).to(0.5, { x: 30, y: -150 }, { easing: "quartInOut" }).start();
        }
        else if (_node.name == "3") {
            cc.tween(honeyBee).to(0.5, { x: 420, y: -120 }, { easing: "quartInOut" }).start();
        }
        this.scheduleOnce(function () {
            //cc.audioEngine.stopEffect(beeId);
            cc.audioEngine.playEffect(_this.honeyFilling, false);
            honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_Filled bucket", true);
            _this.scheduleOnce(function () {
                //let beeId2 = cc.audioEngine.playEffect(this.beeFlying, true);
                cc.tween(honeyBee)
                    .to(1, { x: -450, y: -325, scale: 0.3 }, { easing: "quartInOut" })
                    .to(0.5, { x: -570, y: -325 }, { easing: "quartInOut" }).start();
                _this.scheduleOnce(function () {
                    //cc.audioEngine.stopEffect(beeId2);
                    cc.audioEngine.playEffect(_this.honeyprogressFilling, false);
                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                    _this.scheduleOnce(function () {
                        //let beeId3 = cc.audioEngine.playEffect(this.beeFlying, true);
                        honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
                        cc.tween(honeyBee)
                            .to(0.5, { x: 0, y: -500, scale: 0.7 }, { easing: "quartInOut" }).start();
                        _this.scheduleOnce(function () {
                            //cc.audioEngine.stopEffect(beeId3);
                        }, 0.5);
                    }, 0.5);
                }, 1.5);
            }, 0.5);
        }, 0.5);
    };
    NewClass.prototype.destroyOption = function () {
        for (var i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            if (this.node.getChildByName("Option").children[i].name != this.answerArray[0]) {
                this.node.getChildByName("Option").children[i].destroy();
            }
        }
    };
    NewClass.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.update = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "HorizntalOptionNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "VerticalOptionNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "extraImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "honeyFilling", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "honeyprogressFilling", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "beeFlying", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "questionSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "puzzlePositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "puzzleNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlc_birdFlying", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Pos1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Pos2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Neg1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Neg2", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "puzzle_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "optionsNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TaG9vdGVyL1NjcmlwdHMvZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrMkJDO1FBLzFCRyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRzlCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQywwQkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBRzFDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFFdEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxvQkFB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T0FDYSxRQUFRLENBazJCNUI7SUFBRCxlQUFDO0NBbDJCRCxBQWsyQkMsQ0FsMkJxQyxFQUFFLENBQUMsU0FBUyxHQWsyQmpEO2tCQWwyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgSG9yaXpudGFsT3B0aW9uTm9kZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgVmVydGljYWxPcHRpb25Ob2RlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgZXh0cmFJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBob25leUZpbGxpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgaG9uZXlwcm9ncmVzc0ZpbGxpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgYmVlRmx5aW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdGFsbGlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHN0YWxsaW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgYmFnTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHRsY1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB0bGNOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHB1enpsZVBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBwdXp6bGVOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB0bGNfYmlyZEZseWluZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9Qb3MxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9Qb3MyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxuICAgIGRlZmF1bHRNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcbiAgICBncmV5TWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxuICAgIHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSBwdXp6bGVfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYW5zd2VyQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcbiAgICB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xuICAgIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRKY29rZXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBvcHRpb25zTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcblxuICAgIHRvdGFsQW5zd2VyczogbnVtYmVyID0gMDtcbiAgICBjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XG4gICAgaXNPcHRpb25CRzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFRvdGFsT3B0aW9uczogbnVtYmVyID0gMDtcbiAgICBwb3NpdGlvbkFycmF5OiBjYy5WZWMyW10gPSBbXTtcbiAgICBpc0RvbmU6IGJvb2xlYW5bXSA9IFtdO1xuICAgIGlzTGFzdFR3ZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgZWxlbS5jaGlsZHJlbi5mb3JFYWNoKChFbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgRWxlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnB1enpsZV9mb250O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnB1enpsZV9mb250O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5Ub3RhbE9wdGlvbnMgPSAzO1xuICAgICAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpO1xuICAgICAgICB0aGlzLm1heExldmVsID0gc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzO1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBbnN3ZXJOdW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyQXJyYXlbaV0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvc1tpXSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zW2ldLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gQXVkaW9DbGlwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5ID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEpO1xuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgdGhpcy50b3RhbEFuc3dlcnMgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDtcblxuICAgICAgICB0aGlzLmNhbGxRdWVzdGlvbkJhcigpO1xuXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5wdXp6bGVQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMucHV6emxlTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcbiAgICB9XG5cblxuXG4gICAgY2FsbFF1ZXN0aW9uQmFyKCkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQm94UG9zWSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikueTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5zZXRQb3NpdGlvbihjYy52MigwLCAxNTAwKSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpLnRvKDEsIHsgeTogdGhpcy5xdWVzdGlvbkJveFBvc1kgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25UZXh0O1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsbE9wdGlvbkluKCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuXG5cbiAgICBPblZPQnV0dG9uKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICBpZiAodGhpcy5xdWVzdGlvblNvdW5kWzBdKVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjYWxsT3B0aW9uSW4oKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInJlZCBGbG93ZXIgb3BlblwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJibHVlIEZsb3dlciBvcGVuXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInllbGxvdyBGbG93ZXIgb3BlblwiLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInJlZCBGbG93ZXIgaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJibHVlIEZsb3dlciBpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInllbGxvdyBGbG93ZXIgaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICBlbGVtLmNoaWxkcmVuWzJdLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZWxlbS5jaGlsZHJlblsxXSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZW0uY2hpbGRyZW5bMl0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xuICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgfSwgMC41KTtcblxuXG5cblxuXG4gICAgfVxuXG5cblxuICAgIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJiBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XG4gICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pKTtcbiAgICAgICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XG4gICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGxldCBpbnRvQW5pbSA9IFwiaW50cm9cIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig0NTAsIC0zNzApO1xuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xuICAgICAgICAgICAgICAgIGludG9BbmltID0gXCJpbnRyb18xXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDg3MCwgLTM3MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50bGNfYmlyZEZseWluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGludG9BbmltLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oMCwgLTcwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpbnRyb19sb29wXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpbnRyb19lbmRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oMCwgLTcwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oaW50b0FuaW0pLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9uQnV0dG9uQ2xpY2soX2V2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhblRvdWNoLS1cIiArIHRoaXMuY2FuVG91Y2gpXG4gICAgICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRG9uZVtwYXJzZUludChfZXZlbnQudGFyZ2V0Lm5hbWUpIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgX25vZGUgPSBfZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgaXNjb3JyZWN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5hbnN3ZXJBcnJheVtpXSkge1xuICAgICAgICAgICAgICAgIGlzY29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbcGFyc2VJbnQoX25vZGUubmFtZSkgLSAxXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzY29ycmVjdCkge1xuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGUsIF9ldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsTmV4dExldmVsKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgZWxlbS5jaGlsZHJlbi5mb3JFYWNoKChFbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgRWxlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLmNhbGxTdGFyc0VhcmVkKCk7XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XG4gICAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bMF0uZHVyYXRpb24gLSAwLjUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XG4gICAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bMF0uZHVyYXRpb24gLSAwLjUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsU3RhcnNFYXJlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdGFyMUxvZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGFyMkxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhcjNMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXIzTG9nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmV4dHJhSW1nO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvW3BhcnNlSW50KF9ub2RlLm5hbWUpIC0gMV0sIGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuNSwgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDQwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbihfbm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IHdpZHRoOiAzMjAsIGhlaWdodDogMzIwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKF9ub2RlLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLnNldFBvc2l0aW9uKF9ub2RlLngsIF9ub2RlLnkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlU291bmRbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXkoKTtcbiAgICAgICAgICAgIH0sIDAuNyk7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG4gICAgY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHZvSW5kZXg6IG51bWJlciA9IHRoaXMuYW5zd2VyQXJyYXkuaW5kZXhPZihfbm9kZS5uYW1lKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XSwgZmFsc2UpO1xuICAgICAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLnNldFBvc2l0aW9uKF9ub2RlLngsIF9ub2RlLnkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlU291bmRbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCA9PSB0aGlzLnRvdGFsQW5zd2Vycykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEb25lW2ldID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMYXN0VHdlZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmVlUG9zaXRpdmVSZWFjdGlvbihfbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSkudG8oMSwgeyB5OiAxNTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMuNSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLmR1cmF0aW9uKTtcbiAgICB9XG5cblxuICAgIGNhbGxKb2NrZXkoKSB7XG4gICAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zc2l0aXZlXCIsIFwicG9zc2l0aXZlMlwiLCBcInBvc3NpdGl2ZTNcIiwgXCJwb3NzaXRpdmU0XCIsIFwicG9zc2l0aXZlNVwiLCBcInBvc3NpdGl2ZTZcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfNlwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gLTAuNjU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24ocG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgLTM1MCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbltnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fb3V0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGxjX2JpcmRGbHlpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihcImludHJvX291dFwiKS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzFcIiB8fCBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfUG9zMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfUG9zMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSkudG8oMiwgeyB4OiAtMTAwMCB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbE5leHRMZXZlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIikuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDIsIHsgeDogLTEwMDAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsbE5lZ2F0aXZlUmVjdGlvbihfbm9kZTogY2MuTm9kZSwgX2V2ZW50KSB7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlU291bmRbMF0sIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSA2KSB7XG4gICAgICAgICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uQkcpIHtcbiAgICAgICAgICAgIF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbEJlZU5lZ2F0aXZlUmVhY3Rpb24oX25vZGUpO1xuXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2V0aXZlXCIsIFwibmVnZXRpdmUyXCIsIFwibmVnZXRpdmUzXCIsIFwibmVnZXRpdmU0XCIsIFwibmVnZXRpdmU1XCIsIFwibmVnZXRpdmU2XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibm9cIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1widHJ5X2FnYWluXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJiBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oMTIwMCwgLTM1MCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygwLjUsIHsgeDogNDAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDAuNSwgeyB4OiAxMjAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiIHx8IGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfTmVnMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfTmVnMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIpLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvbmV5YmVlXCIpKS50bygwLjUsIHsgeDogMCwgeTogLTUwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvbmV5YmVlXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQmVlIGZseV9lbXB0eSBidWNrZXRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgIH0sIDIpO1xuXG4gICAgICAgIH0sIDIuNyk7XG4gICAgfVxuXG5cbiAgICBjYWxsQmVlTmVnYXRpdmVSZWFjdGlvbihfbm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgaG9uZXlCZWU6IGNjLk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob25leWJlZVwiKTtcbiAgICAgICAgLy9sZXQgYmVlSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmVlRmx5aW5nLCB0cnVlKTtcbiAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogLTMyMCwgeTogLTM2MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYmVlSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwicmVkIEZsb3dlciBjbG9zZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaG9uZXlCZWUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJCZWUgZmx5X3NhZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX25vZGUubmFtZSA9PSBcIjJcIikge1xuICAgICAgICAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiAzMCwgeTogLTM2MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYmVlSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYmx1ZSBGbG93ZXIgY2xvc2VcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGhvbmV5QmVlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQmVlIGZseV9zYWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9ub2RlLm5hbWUgPT0gXCIzXCIpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogMzIwLCB5OiAtMzYwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChiZWVJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzJdLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ5ZWxsb3cgRmxvd2VyIGNsb3NlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfc2FkXCIsIHRydWUpO1xuICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxCZWVQb3NpdGl2ZVJlYWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBob25leUJlZTogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvbmV5YmVlXCIpO1xuICAgICAgICAvL2xldCBiZWVJZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5iZWVGbHlpbmcsIHRydWUpO1xuICAgICAgICBpZiAoX25vZGUubmFtZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiAtMzIwLCB5OiAtMTUwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9ub2RlLm5hbWUgPT0gXCIyXCIpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogMzAsIHk6IC0xNTAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX25vZGUubmFtZSA9PSBcIjNcIikge1xuICAgICAgICAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiA0MjAsIHk6IC0xMjAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChiZWVJZCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaG9uZXlGaWxsaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfRmlsbGVkIGJ1Y2tldFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2xldCBiZWVJZDIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmVlRmx5aW5nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihob25leUJlZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgeDogLTQ1MCwgeTogLTMyNSwgc2NhbGU6IDAuMyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtNTcwLCB5OiAtMzI1IH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGJlZUlkMik7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob25leXByb2dyZXNzRmlsbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IGJlZUlkMyA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5iZWVGbHlpbmcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9uZXlCZWUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJCZWUgZmx5X2VtcHR5IGJ1Y2tldFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGhvbmV5QmVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCwgeTogLTUwMCwgc2NhbGU6IDAuNyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChiZWVJZDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgICAgICB9LCAxLjUpO1xuICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cbiAgICBkZXN0cm95T3B0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5uYW1lICE9IHRoaXMuYW5zd2VyQXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxuXG59Il19
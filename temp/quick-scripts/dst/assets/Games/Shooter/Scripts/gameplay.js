
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
        _this.questionImages = [];
        _this.playerNode = null;
        _this.jumpSFX = null;
        _this.correctSFX = null;
        _this.wrongSFX = null;
        _this.blinkSFX = null;
        _this.walkSFX = null;
        _this.HorizntalOptionNode = null;
        _this.VerticalOptionNode = null;
        _this.extraImg = null;
        _this.optionsimg = [];
        _this.popSound = [];
        _this.honeyFilling = null;
        _this.honeyprogressFilling = null;
        _this.beeFlying = null;
        _this.popSound2 = [];
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
        _this.tlc_birdFlying = null;
        _this.supercub_Pos1 = null;
        _this.supercub_Pos2 = null;
        _this.supercub_Neg1 = null;
        _this.supercub_Neg2 = null;
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
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
        // this.optionsNode.children[0].children[0].active = false;
        // this.optionsNode.children[1].children[0].active = false;
        // this.optionsNode.children[2].children[0].active = false;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.optionsNode.children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.podar_font;
            });
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.optionsNode.children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.jaipuria_font;
            });
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.TotalOptions = 4;
        this.optionsNode = this.node.getChildByName("Option");
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        //this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAnswerNum.length; i++) {
            this.answerArray[i] =
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
        }
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
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
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.node
                        .getChildByName("Option")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
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
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .correctAudios.length; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_2.node
                        .getChildByName("Option")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
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
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .correctAudios.length; i++) {
                _loop_4(i);
            }
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    NewClass.prototype.start = function () {
        this.node
            .getChildByName("QPanel")
            .getChildByName("IMG")
            .getComponent(cc.Sprite).spriteFrame =
            this.questionImages[globalVariables_1.default.Instance.currentLevel - 1];
        this.canTouch = true;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.totalAnswers =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length;
        this.callQuestionBar();
        if (StartGame_1.default.Instance.jockeyName == "bag") {
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
        cc.tween(this.node.getChildByName("questionPanel"))
            .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
            .start();
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
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
        this.optionsNode.children.forEach(function (elem) {
            elem.children[1].opacity = 255;
            elem.children[2].opacity = 255;
            cc.audioEngine.playEffect(_this.popSound[0], false);
            cc.tween(elem.children[1])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                .start();
            cc.tween(elem.children[2])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                .start();
        });
        this.scheduleOnce(function () {
            _this.PlayQuestionAudio();
        }, 0.5);
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canTouch = false;
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                var hand = this.node.getChildByName("hand");
                hand.setParent(this.node
                    .getChildByName("Option")
                    .getChildByName(this.answerArray[0]));
                hand.setPosition(0, -70);
                hand.setParentWithSamePos(this.node);
                hand.getComponent(cc.Animation).play();
            }
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            var intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    _this.canTouch = true;
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        var hand = _this.node.getChildByName("hand");
                        hand.setParent(_this.node
                            .getChildByName("Option")
                            .getChildByName(_this.answerArray[0]));
                        hand.setPosition(0, -70);
                        hand.setParentWithSamePos(_this.node);
                        hand.getComponent(cc.Animation).play();
                    }
                }
                else {
                    cc.audioEngine.playEffect(_this.questionSound[0], false);
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "intro_loop", true);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "intro_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                            _this.canTouch = true;
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                var hand = _this.node.getChildByName("hand");
                                hand.setParent(_this.node
                                    .getChildByName("Option")
                                    .getChildByName(_this.answerArray[0]));
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
        var _this = this;
        this.optionsNode.children[0].children[0].active = false;
        this.optionsNode.children[1].children[0].active = false;
        this.optionsNode.children[2].children[0].active = false;
        this.optionsNode.children[3].children[0].active = false;
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
            //play player walk
            this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.walkSFX, false);
                _this.node
                    .getChildByName("bg")
                    .children[0].getComponent(cc.Animation)
                    .play();
                _this.playerNode.getChildByName("idle").active = true;
                _this.playerNode.getChildByName("correct").active = false;
                cc.tween(_this.playerNode).to(0.7, { x: 0 }).start();
                cc.tween(_this.playerNode)
                    .to(0.116, { angle: -8 }, { easing: "sineInOut" })
                    .to(0.116, { angle: 0 }, { easing: "sineInOut" })
                    .to(0.116, { angle: 8 }, { easing: "sineInOut" })
                    .to(0.116, { angle: 0 }, { easing: "sineInOut" })
                    .to(0.116, { angle: -8 }, { easing: "sineInOut" })
                    .to(0.116, { angle: 0 }, { easing: "sineInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    globalVariables_1.default.Instance.currentLevel++;
                    cc.director.loadScene("1");
                }, 1);
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
        if (!this.star3Log &&
            globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    };
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        _node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            this.extraImg;
        cc.audioEngine.playEffect(this.correctAudio[parseInt(_node.name) - 1], false);
        cc.tween(_node)
            .to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" })
            .start();
        cc.tween(_node.children[0])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_node.children[0])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
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
        _node.getChildByName("img").color = cc.Color.GREEN;
        this.optionsNode.children.forEach(function (element) {
            if (element != _node) {
                element.active = false;
            }
        });
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
                        _this.callPositiveReaction(_node);
                        _this.scheduleOnce(function () {
                            cc.tween(_this.node.getChildByName("questionPanel"))
                                .to(1, { y: 1500 }, { easing: "sineInOut" })
                                .start();
                            _this.node
                                .getChildByName("questionPanel")
                                .getChildByName("sound")
                                .getComponent(cc.Button).interactable = false;
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
            anim = [
                "possitive",
                "possitive2",
                "possitive3",
                "possitive4",
                "possitive5",
                "possitive6",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
                "positive_6",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
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
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 &&
            StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
        }
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey)
                .to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                .start();
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                        .start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idel", true);
                        }
                        else {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                    }
                    _this.callNextLevel();
                }, _this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "intro_out", false);
                cc.audioEngine.playEffect(_this.tlc_birdFlying, false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey.active = false;
                    _this.callNextLevel();
                }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" ||
                anim[currentClipNum] == "positive_2") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(_this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(_this.supercub_Pos2, false);
                        }
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "run", false);
                            cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                            _this.callNextLevel();
                        }, _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .findAnimation(anim[currentClipNum] + "_end").duration);
                    }, _this.positiveAudio[currentClipNum].duration);
                }, this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "run", false);
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
        this.callNegativeReaction(_node);
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = [
                    "negetive",
                    "negetive2",
                    "negetive3",
                    "negetive4",
                    "negetive5",
                    "negetive6",
                ];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3"];
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
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: 400 }, { easing: "quartInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        cc.tween(_this.currentJcokey)
                            .to(0.5, { x: 1200 }, { easing: "quartInOut" })
                            .start();
                        if (StartGame_1.default.Instance.jockeyName != "stallion") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        _this.canTouch = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                    _this.canTouch = true;
                }, _this.negativeAudio[currentClipNum].duration);
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" ||
                    anim[currentClipNum] == "negative_2") {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_start", false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                        _this.scheduleOnce(function () {
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(_this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(_this.supercub_Neg2, false);
                            }
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.canTouch = true;
                            _this.scheduleOnce(function () {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }, _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .findAnimation(anim[currentClipNum] + "_end").duration);
                        }, _this.negativeAudio[currentClipNum].duration);
                    }, _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                        _this.canTouch = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
            _node.getChildByName("img").color = cc.Color.WHITE;
            // this.scheduleOnce(() => {
            //     cc.tween(this.node.getChildByName("honeybee")).to(0.5, { x: 0, y: -500 }, { easing: "quartInOut" }).start();
            //     this.scheduleOnce(() => {
            //         this.node.getChildByName("honeybee").getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
            //     }, 0.5);
            // }, 2);
        }, 3.5);
    };
    NewClass.prototype.callNegativeReaction = function (_node) {
        var _this = this;
        var _player = this.node.getChildByName("player");
        _player.setParentWithSamePos(this.node
            .getChildByName("Hole")
            .getChildByName(_node.name)
            .getChildByName("node"));
        var _currentPosition = _player.getPosition();
        cc.tween(_player).to(0.5, { x: 0 }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.jumpSFX, false);
            cc.tween(_player)
                .to(0.5, { scale: 1.1 }, { easing: "quartInOut" })
                .to(0.5, { scale: 1 }, { easing: "quartInOut" })
                .start();
            cc.tween(_player).to(1, { y: -250 }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.wrongSFX, false);
                _player.getChildByName("idle").active = false;
                _player.getChildByName("leg").active = false;
                _player.getChildByName("wrong").active = true;
                cc.tween(_player)
                    .to(0.5, { scale: 1.1 }, { easing: "quartInOut" })
                    .to(0.5, { scale: 1 }, { easing: "quartInOut" })
                    .start();
                cc.tween(_player)
                    .to(1, { y: _currentPosition.y }, { easing: "quartInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.blinkSFX, false);
                    cc.tween(_player)
                        .to(0.2, { scale: 1.2 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1.2 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1.2 }, { easing: "quartInOut" })
                        .to(0.2, { scale: 1 }, { easing: "quartInOut" })
                        .start();
                    _this.scheduleOnce(function () {
                        _player.getChildByName("idle").active = true;
                        _player.getChildByName("leg").active = true;
                        _player.getChildByName("wrong").active = false;
                        _player.setParentWithSamePos(_this.node);
                    }, 1.1);
                }, 1);
            }, 1);
        }, 0.5);
    };
    NewClass.prototype.callPositiveReaction = function (_node) {
        var _this = this;
        var _player = this.node.getChildByName("player");
        _player.setParentWithSamePos(this.node
            .getChildByName("Hole")
            .getChildByName(_node.name)
            .getChildByName("node"));
        var _currentPosition = _player.getPosition();
        cc.tween(_player).to(0.5, { x: 0 }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.jumpSFX, false);
            cc.tween(_player)
                .to(0.5, { scale: 1.1 }, { easing: "quartInOut" })
                .to(0.5, { scale: 1 }, { easing: "quartInOut" })
                .start();
            cc.tween(_player).to(1, { y: -250 }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.correctSFX, false);
                _player.getChildByName("idle").active = false;
                _player.getChildByName("correct").active = true;
                cc.tween(_player)
                    .to(0.5, { scale: 1.1 }, { easing: "quartInOut" })
                    .to(0.5, { scale: 1 }, { easing: "quartInOut" })
                    .start();
                cc.tween(_player)
                    .to(1, { y: _currentPosition.y }, { easing: "quartInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    _player.setParentWithSamePos(_this.node);
                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                }, 1.1);
            }, 1);
        }, 0.5);
    };
    NewClass.prototype.OldcallBeeNegativeReaction = function (_node) {
        // let honeyBee: cc.Node = this.node.getChildByName("honeybee");
        // //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        // if (_node.name == "1") {
        //     cc.tween(honeyBee).to(0.5, { x: -320, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[0].children[1].opacity = 0;
        //         this.optionsNode.children[0].children[2].opacity = 0;
        //         this.optionsNode.children[0].children[0].getComponent(sp.Skeleton).setAnimation(0, "red Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
        // else if (_node.name == "2") {
        //     cc.tween(honeyBee).to(0.5, { x: 30, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[1].children[1].opacity = 0;
        //         this.optionsNode.children[1].children[2].opacity = 0;
        //         this.optionsNode.children[1].children[0].getComponent(sp.Skeleton).setAnimation(0, "blue Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
        // else if (_node.name == "3") {
        //     cc.tween(honeyBee).to(0.5, { x: 320, y: -360 }, { easing: "quartInOut" }).start();
        //     this.scheduleOnce(() => {
        //         //cc.audioEngine.stopEffect(beeId);
        //         this.optionsNode.children[2].children[1].opacity = 0;
        //         this.optionsNode.children[2].children[2].opacity = 0;
        //         this.optionsNode.children[2].children[0].getComponent(sp.Skeleton).setAnimation(0, "yellow Flower close", false);
        //         honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_sad", true);
        //     }, 0.5);
        // }
    };
    NewClass.prototype.OldcallBeePositiveReaction = function (_node) {
        // let honeyBee: cc.Node = this.node.getChildByName("honeybee");
        // //let beeId = cc.audioEngine.playEffect(this.beeFlying, true);
        // if (_node.name == "1") {
        //     cc.tween(honeyBee).to(0.5, { x: -320, y: -150 }, { easing: "quartInOut" }).start();
        // }
        // else if (_node.name == "2") {
        //     cc.tween(honeyBee).to(0.5, { x: 30, y: -150 }, { easing: "quartInOut" }).start();
        // }
        // else if (_node.name == "3") {
        //     cc.tween(honeyBee).to(0.5, { x: 420, y: -120 }, { easing: "quartInOut" }).start();
        // }
        // this.scheduleOnce(() => {
        //     //cc.audioEngine.stopEffect(beeId);
        //     cc.audioEngine.playEffect(this.honeyFilling, false);
        //     honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_Filled bucket", true);
        //     this.scheduleOnce(() => {
        //         //let beeId2 = cc.audioEngine.playEffect(this.beeFlying, true);
        //         cc.tween(honeyBee)
        //             .to(1, { x: -450, y: -325, scale: 0.3 }, { easing: "quartInOut" })
        //             .to(0.5, { x: -570, y: -325 }, { easing: "quartInOut" }).start();
        //         this.scheduleOnce(() => {
        //             //cc.audioEngine.stopEffect(beeId2);
        //             cc.audioEngine.playEffect(this.honeyprogressFilling, false);
        //             ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
        //             this.scheduleOnce(() => {
        //                 //let beeId3 = cc.audioEngine.playEffect(this.beeFlying, true);
        //                 honeyBee.getComponent(sp.Skeleton).setAnimation(0, "Bee fly_empty bucket", true);
        //                 cc.tween(honeyBee)
        //                     .to(0.5, { x: 0, y: -500, scale: 0.7 }, { easing: "quartInOut" }).start();
        //                 this.scheduleOnce(() => {
        //                     //cc.audioEngine.stopEffect(beeId3);
        //                 }, 0.5);
        //             }, 0.5);
        //         }, 1.5);
        //     }, 0.5);
        // }, 0.5);
    };
    NewClass.prototype.destroyOption = function () {
        for (var i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            if (this.node.getChildByName("Option").children[i].name !=
                this.answerArray[0]) {
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
    NewClass.prototype.update = function () { };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "questionImages", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "playerNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "correctSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "blinkSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "walkSFX", void 0);
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
        property(cc.SpriteFrame)
    ], NewClass.prototype, "optionsimg", void 0);
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
    ], NewClass.prototype, "popSound2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNob290ZXJcXFNjcmlwdHNcXGdhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QscURBQWdEO0FBRzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdXRDQztRQXJ0Q1Esb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBRzdDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3Qix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUc5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsMEJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUcxQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQW1CLEVBQUUsQ0FBQztRQUcvQixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWpDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBRXRDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBR3BDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUczQyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFHcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUVwQyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUE4a0MvQixDQUFDO0lBNWtDQyx5QkFBTSxHQUFOO1FBQUEsaUJBdUxDO1FBdExDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsMkRBQTJEO1FBQzNELDJEQUEyRDtRQUMzRCwyREFBMkQ7UUFDM0QsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ3hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxLQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUk7aUJBQ04sY0FBYyxDQUFDLGVBQWUsQ0FBQztpQkFDL0IsY0FBYyxDQUFDLE1BQU0sQ0FBQztpQkFDdEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNsRDthQUFNLElBQ0wsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFDdEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFDeEM7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN4QyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSTtvQkFDeEQsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxlQUFlLENBQUM7aUJBQy9CLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRFLGlHQUFpRztRQUVqRyxLQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDO1lBQ0QsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGdCQUFnQixDQUFDLE1BQU0sRUFDMUIsQ0FBQyxFQUFFLEVBQ0g7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDakIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGlCQUFpQixFQUNwQixVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUNiLElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pELE9BQU87aUJBQ1I7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDcEMsQ0FBQyxDQUNGLENBQUM7b0NBRU8sQ0FBQztnQkFDUixJQUNFLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMzQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksRUFDZDtvQkFDQSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNaLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQ1gsSUFBSSxHQUFHLEVBQUU7NEJBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDNUMsT0FBTzt5QkFDUjt3QkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxJQUFJOzZCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7NkJBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs2QkFDbEMsY0FBYyxDQUFDLEtBQUssQ0FBQzs2QkFDckIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUN2RCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFLLElBQUk7eUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzt5QkFDeEIsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNsQyxjQUFjLENBQUMsTUFBTSxDQUFDO3lCQUN0QixZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07d0JBQzlCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCOzs7WUFoQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFO3dCQUFqQyxDQUFDO2FBaUNUO29DQUdLLENBQUM7Z0JBTUwsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDbEIsVUFBQyxHQUFHLEVBQUUsU0FBUztvQkFDYixJQUFJLEdBQUcsRUFBRTt3QkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNqRCxPQUFPO3FCQUNSO29CQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNuQyxDQUFDLENBQ0YsQ0FBQzs7WUFsQkosS0FDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQztnQkFDRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztxQkFDcEUsYUFBYSxDQUFDLE1BQU0sRUFDdkIsQ0FBQyxFQUFFO3dCQUpDLENBQUM7YUFrQk47U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FDaEIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGlCQUFpQixFQUNwQixVQUFDLFNBQVM7Z0JBQ1IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDcEMsQ0FBQyxDQUNGLENBQUM7b0NBRU8sQ0FBQztnQkFDUixJQUNFLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMzQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksRUFDZDtvQkFDQSxPQUFLLGVBQWUsQ0FDbEIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDWixVQUFDLFdBQVc7d0JBQ1YsS0FBSSxDQUFDLElBQUk7NkJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzs2QkFDeEIsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOzZCQUNsQyxjQUFjLENBQUMsS0FBSyxDQUFDOzZCQUNyQixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQ3ZELENBQUMsQ0FDRixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQUssSUFBSTt5QkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO3lCQUN4QixjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xDLGNBQWMsQ0FBQyxNQUFNLENBQUM7eUJBQ3RCLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTt3QkFDOUIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7OztZQTNCSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUU7d0JBQWpDLENBQUM7YUE0QlQ7b0NBR0ssQ0FBQztnQkFNTCxPQUFLLGFBQWEsQ0FDaEIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDbEIsVUFBQyxTQUFTO29CQUNSLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNuQyxDQUFDLENBQ0YsQ0FBQzs7O1lBZEosS0FDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQztnQkFDRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztxQkFDcEUsYUFBYSxDQUFDLE1BQU0sRUFDdkIsQ0FBQyxFQUFFO3dCQUpDLENBQUM7YUFjTjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUMzRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixjQUFjLENBQUMsS0FBSyxDQUFDO2FBQ3JCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztZQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQy9CLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUM7UUFDRixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFakUsSUFBSSxDQUFDLFlBQVk7WUFDZixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBRTVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2QzthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzVDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDekM7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRU8sa0NBQWUsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLEdBQVc7UUFDOUMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDM0QsS0FBSyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxlQUFlLENBQUM7YUFDL0IsY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUN0QixZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDOUIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUM5QyxLQUFLLEVBQUUsQ0FBQztZQUNYLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDOUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUFBLGlCQXlGQztRQXhGQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSztZQUN0QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUMzQztZQUNBLElBQ0UsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLHVCQUF1QixFQUMxQjtnQkFDQSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsSUFBSTtxQkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO3FCQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN2QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hDO1NBQ0Y7YUFBTSxJQUNMLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQzNDO1lBQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtnQkFDL0MsUUFBUSxHQUFHLFNBQVMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7Z0JBQzFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxJQUFJLENBQUMsYUFBYTtpQkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsSUFDRSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDM0IseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyx1QkFBdUIsRUFDekI7b0JBQ0EsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTt3QkFDOUMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQ1osS0FBSSxDQUFDLElBQUk7NkJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzs2QkFDeEIsY0FBYyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdkMsQ0FBQzt3QkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDeEM7aUJBQ0Y7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEQsS0FBSSxDQUFDLGFBQWE7eUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2QyxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNoQixLQUFJLENBQUMsYUFBYTs2QkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2hCLEtBQUksQ0FBQyxhQUFhO2lDQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lDQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NEJBQ3JCLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtnQ0FDOUMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzVDLElBQUksQ0FBQyxTQUFTLENBQ1osS0FBSSxDQUFDLElBQUk7cUNBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQztxQ0FDeEIsY0FBYyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdkMsQ0FBQztnQ0FDRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDeEM7d0JBQ0gsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZGLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxNQUFnQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDakQ7UUFDRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksU0FBUyxHQUFZLEtBQUssQ0FBQztRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLE1BQU07YUFDUDtTQUNGO1FBQ0QsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUFBLGlCQTJDQztRQTFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUV4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLElBQUk7cUJBQ04sY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUN0QyxJQUFJLEVBQUUsQ0FBQztnQkFDVixLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQztxQkFDdEIsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUNqRCxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUNoRCxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUNoRCxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUNoRCxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7cUJBQ2pELEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7cUJBQ2hELEtBQUssRUFBRSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFDRSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2QseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQ3REO1lBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixLQUFjO1FBQWxDLGlCQXlCQztRQXhCQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNDLEtBQUssQ0FDTixDQUFDO1FBQ0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDN0QsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzdELEtBQUssRUFBRSxDQUFDO1FBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDOUMsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx1Q0FBb0IsR0FBcEIsVUFBcUIsS0FBYztRQUFuQyxpQkErQ0M7UUE5Q0MsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN4QyxJQUFJLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLEtBQUksQ0FBQyxrQkFBa0IsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO29CQUNoRCxLQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDdEQsQ0FBQyxFQUFFLEVBQ0g7d0JBQ0EsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTs0QkFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUMxRDtxQkFDRjtvQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNoQixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTs0QkFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ3BELENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxLQUFJLENBQUMsWUFBWSxDQUFDOzRCQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lDQUNoRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lDQUMzQyxLQUFLLEVBQUUsQ0FBQzs0QkFDWCxLQUFJLENBQUMsSUFBSTtpQ0FDTixjQUFjLENBQUMsZUFBZSxDQUFDO2lDQUMvQixjQUFjLENBQUMsT0FBTyxDQUFDO2lDQUN2QixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7NEJBQ2hELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDUDtZQUNILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBaU1DO1FBaE1DLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDNUMsSUFBSSxHQUFHO2dCQUNMLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2FBQ2IsQ0FBQztTQUNIO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQ2pELElBQUksR0FBRztnQkFDTCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiLENBQUM7U0FDSDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUN0RCxJQUFJLEdBQUc7Z0JBQ0wsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2FBQ2IsQ0FBQztTQUNIO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQ2pELElBQUksR0FBRztnQkFDTCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7YUFDYixDQUFDO1NBQ0g7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDbkQsSUFBSSxHQUFHO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiLENBQUM7U0FDSDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtZQUNyRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFhLEVBQUU7WUFDekQsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3RELElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxjQUFjLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEdBQUcsR0FBYSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFDRSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDOUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFDM0M7WUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztTQUNuQzthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWE7aUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFDTCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSztZQUN0QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUMzQztZQUNBLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtnQkFDNUMsSUFBSSxDQUFDLGFBQWE7cUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBQ0QsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSztZQUN0QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUMzQztZQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUM1QixHQUFHLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUM5QyxDQUFDLEdBQUcsQ0FDTCxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUN6QixFQUFFLENBQ0QsR0FBRyxFQUNILEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFDN0QsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQ3pCO2lCQUNBLEtBQUssRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGFBQWE7cUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7eUJBQ3pCLEVBQUUsQ0FDRCxHQUFHLEVBQ0gsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FDekI7eUJBQ0EsS0FBSyxFQUFFLENBQUM7b0JBQ1gsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO3dCQUMvQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7NEJBQzVDLEtBQUksQ0FBQyxhQUFhO2lDQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lDQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDbEM7NkJBQU07NEJBQ0wsS0FBSSxDQUFDLGFBQWE7aUNBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUNBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUNsQztxQkFDRjtvQkFDRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQ2pELElBQUksQ0FBQyxhQUFhO2lCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNsQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZGLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3RELElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFlBQVk7Z0JBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxZQUFZLEVBQ3BDO2dCQUNBLElBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxZQUFZLENBQ2Y7b0JBQ0UsS0FBSSxDQUFDLGFBQWE7eUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEtBQUssQ0FDTixDQUFDO29CQUNGLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFlBQVksRUFBRTs0QkFDeEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDdEQ7NkJBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksWUFBWSxFQUFFOzRCQUMvQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO3lCQUN0RDt3QkFDRCxLQUFJLENBQUMsYUFBYTs2QkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUN6RCxLQUFJLENBQUMsWUFBWSxDQUNmOzRCQUNFLEtBQUksQ0FBQyxhQUFhO2lDQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lDQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3pELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxFQUNELEtBQUksQ0FBQyxhQUFhOzZCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FDekQsQ0FBQztvQkFDSixDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUNELElBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FDM0QsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsS0FBSSxDQUFDLGFBQWE7eUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNGO0lBQ0gsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixLQUFjLEVBQUUsTUFBTTtRQUExQyxpQkEySkM7UUExSkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNqRDthQUFNO1lBQ0wsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUM1QyxJQUFJLEdBQUc7b0JBQ0wsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7aUJBQ1osQ0FBQzthQUNIO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDakQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRDtpQkFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3RELElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDakQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRDtpQkFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQ25ELElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDbkQ7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUNyRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLGFBQWEsRUFBRTtnQkFDekQsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO2dCQUN0RCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDckM7WUFFRCxJQUFJLGNBQWMsR0FBVyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtnQkFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsYUFBYTtxQkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakQ7aUJBQU0sSUFDTCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSztnQkFDdEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFDM0M7Z0JBQ0EsS0FBSSxDQUFDLGFBQWE7cUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSztnQkFDdEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFDM0M7Z0JBQ0EsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztxQkFDekIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQztxQkFDN0MsS0FBSyxFQUFFLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsS0FBSSxDQUFDLGFBQWE7eUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7NkJBQ3pCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7NkJBQzlDLEtBQUssRUFBRSxDQUFDO3dCQUNYLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTs0QkFDL0MsS0FBSSxDQUFDLGFBQWE7aUNBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUNBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUNsQzt3QkFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNUO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDakQsS0FBSSxDQUFDLGFBQWE7cUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixLQUFJLENBQUMsYUFBYTt5QkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtpQkFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3RELElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFlBQVk7b0JBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxZQUFZLEVBQ3BDO29CQUNBLEtBQUksQ0FBQyxhQUFhO3lCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzNELEtBQUksQ0FBQyxZQUFZLENBQ2Y7d0JBQ0UsS0FBSSxDQUFDLGFBQWE7NkJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDekQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEtBQUssQ0FDTixDQUFDO3dCQUNGLEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFlBQVksRUFBRTtnQ0FDeEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzs2QkFDdEQ7aUNBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksWUFBWSxFQUFFO2dDQUMvQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDOzZCQUN0RDs0QkFDRCxLQUFJLENBQUMsYUFBYTtpQ0FDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0FDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUN6RCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDckIsS0FBSSxDQUFDLFlBQVksQ0FDZjtnQ0FDRSxLQUFJLENBQUMsYUFBYTtxQ0FDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQ0FDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQ25DLENBQUMsRUFDRCxLQUFJLENBQUMsYUFBYTtpQ0FDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0FDekIsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQ3pELENBQUM7d0JBQ0osQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xELENBQUMsRUFDRCxLQUFJLENBQUMsYUFBYTt5QkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDekIsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQzNELENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLGFBQWE7eUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNoQixLQUFJLENBQUMsYUFBYTs2QkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDakQ7YUFDRjtZQUNELEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25ELDRCQUE0QjtZQUM1QixtSEFBbUg7WUFDbkgsZ0NBQWdDO1lBQ2hDLHdIQUF3SDtZQUN4SCxlQUFlO1lBQ2YsU0FBUztRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx1Q0FBb0IsR0FBcEIsVUFBcUIsS0FBYztRQUFuQyxpQkFnREM7UUEvQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxNQUFNLENBQUM7YUFDdEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDMUIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUMxQixDQUFDO1FBQ0YsSUFBSSxnQkFBZ0IsR0FBWSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7aUJBQ2pELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7aUJBQy9DLEtBQUssRUFBRSxDQUFDO1lBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2RSxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUNqRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUMvQyxLQUFLLEVBQUUsQ0FBQztnQkFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUMxRCxLQUFLLEVBQUUsQ0FBQztnQkFDWCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUNqRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUMvQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUNqRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUMvQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUNqRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3lCQUMvQyxLQUFLLEVBQUUsQ0FBQztvQkFDWCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNoQixPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDNUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUMvQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELHVDQUFvQixHQUFwQixVQUFxQixLQUFjO1FBQW5DLGlCQW9DQztRQW5DQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsb0JBQW9CLENBQzFCLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUN0QixjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUMxQixjQUFjLENBQUMsTUFBTSxDQUFDLENBQzFCLENBQUM7UUFDRixJQUFJLGdCQUFnQixHQUFZLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0RCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQztpQkFDakQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQztpQkFDL0MsS0FBSyxFQUFFLENBQUM7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUNqRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUMvQyxLQUFLLEVBQUUsQ0FBQztnQkFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUMxRCxLQUFLLEVBQUUsQ0FBQztnQkFDWCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQy9CLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDdEMsQ0FBQztnQkFDSixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsNkNBQTBCLEdBQTFCLFVBQTJCLEtBQWM7UUFDdkMsZ0VBQWdFO1FBQ2hFLGlFQUFpRTtRQUNqRSwyQkFBMkI7UUFDM0IsMEZBQTBGO1FBQzFGLGdDQUFnQztRQUNoQyw4Q0FBOEM7UUFDOUMsZ0VBQWdFO1FBQ2hFLGdFQUFnRTtRQUNoRSx5SEFBeUg7UUFDekgsbUZBQW1GO1FBQ25GLGVBQWU7UUFDZixJQUFJO1FBQ0osZ0NBQWdDO1FBQ2hDLHdGQUF3RjtRQUN4RixnQ0FBZ0M7UUFDaEMsOENBQThDO1FBQzlDLGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsMEhBQTBIO1FBQzFILG1GQUFtRjtRQUNuRixlQUFlO1FBQ2YsSUFBSTtRQUNKLGdDQUFnQztRQUNoQyx5RkFBeUY7UUFDekYsZ0NBQWdDO1FBQ2hDLDhDQUE4QztRQUM5QyxnRUFBZ0U7UUFDaEUsZ0VBQWdFO1FBQ2hFLDRIQUE0SDtRQUM1SCxtRkFBbUY7UUFDbkYsZUFBZTtRQUNmLElBQUk7SUFDTixDQUFDO0lBQ0QsNkNBQTBCLEdBQTFCLFVBQTJCLEtBQWM7UUFDdkMsZ0VBQWdFO1FBQ2hFLGlFQUFpRTtRQUNqRSwyQkFBMkI7UUFDM0IsMEZBQTBGO1FBQzFGLElBQUk7UUFDSixnQ0FBZ0M7UUFDaEMsd0ZBQXdGO1FBQ3hGLElBQUk7UUFDSixnQ0FBZ0M7UUFDaEMseUZBQXlGO1FBQ3pGLElBQUk7UUFDSiw0QkFBNEI7UUFDNUIsMENBQTBDO1FBQzFDLDJEQUEyRDtRQUMzRCx5RkFBeUY7UUFDekYsZ0NBQWdDO1FBQ2hDLDBFQUEwRTtRQUMxRSw2QkFBNkI7UUFDN0IsaUZBQWlGO1FBQ2pGLGdGQUFnRjtRQUNoRixvQ0FBb0M7UUFDcEMsbURBQW1EO1FBQ25ELDJFQUEyRTtRQUMzRSx3RkFBd0Y7UUFDeEYsd0NBQXdDO1FBQ3hDLGtGQUFrRjtRQUNsRixvR0FBb0c7UUFDcEcscUNBQXFDO1FBQ3JDLGlHQUFpRztRQUNqRyw0Q0FBNEM7UUFDNUMsMkRBQTJEO1FBQzNELDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixXQUFXO0lBQ2IsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDRSxLQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDdEQsQ0FBQyxFQUFFLEVBQ0g7WUFDQSxJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNuQjtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDMUQ7U0FDRjtJQUNILENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQ0UsU0FBaUIsRUFDakIsUUFBK0M7UUFFL0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2YsU0FBUyxHQUFHLFNBQVMsRUFDckIsRUFBRSxDQUFDLFdBQVcsRUFDZCxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ2YsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1I7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsZ0NBQWEsR0FBYixVQUNFLFNBQWlCLEVBQ2pCLFFBQTZDO1FBRTdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNmLFNBQVMsR0FBRyxTQUFTLEVBQ3JCLEVBQUUsQ0FBQyxTQUFTLEVBQ1osVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNSO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBcHRDWDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNvQjtJQUc3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNpQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2lCO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ2U7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDbUI7SUFHMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswREFDMkI7SUFHbEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDZ0I7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDZ0I7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDcUI7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDUztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNNO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFldEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDa0I7SUEvSGpCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1dEM1QjtJQUFELGVBQUM7Q0F2dENELEFBdXRDQyxDQXZ0Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBdXRDakQ7a0JBdnRDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2NrZXkgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9Kb2NrZXlzL1NjcmlwdHMvSm9ja2V5XCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcbmltcG9ydCBvcHRpb25zY3JpcHQgZnJvbSBcIi4vb3B0aW9uc2NyaXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgcHVibGljIHF1ZXN0aW9uSW1hZ2VzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBqdW1wU0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBjb3JyZWN0U0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICB3cm9uZ1NGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgYmxpbmtTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHdhbGtTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgSG9yaXpudGFsT3B0aW9uTm9kZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBWZXJ0aWNhbE9wdGlvbk5vZGU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBwcml2YXRlIGV4dHJhSW1nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgcHJpdmF0ZSBvcHRpb25zaW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGhvbmV5RmlsbGluZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGhvbmV5cHJvZ3Jlc3NGaWxsaW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgYmVlRmx5aW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgcG9wU291bmQyOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgcXVlc3Rpb25Tb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHBvc2l0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBuZWdhdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdGFsbGlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgc3RhbGxpb25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGJhZ1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgYmFnTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgY3J5b25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHRsY1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHRsY05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgdGxjX2JpcmRGbHlpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9Qb3MxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHN1cGVyY3ViX1BvczI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgc3VwZXJjdWJfTmVnMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcbiAgZGVmYXVsdE1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcbiAgZ3JleU1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxuICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRm9udClcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuRm9udClcbiAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Gb250KVxuICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuXG4gIHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbnN3ZXJBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcbiAgd3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcbiAgc3RhcjFMb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhcjNMb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VycmVudEpjb2tleTogY2MuTm9kZSA9IG51bGw7XG5cbiAgY29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwcml2YXRlIG9wdGlvbnNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcblxuICB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XG4gIGNvcnJlY3RBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcbiAgaXNPcHRpb25CRzogYm9vbGVhbiA9IGZhbHNlO1xuICBUb3RhbE9wdGlvbnM6IG51bWJlciA9IDA7XG4gIHBvc2l0aW9uQXJyYXk6IGNjLlZlYzJbXSA9IFtdO1xuICBpc0RvbmU6IGJvb2xlYW5bXSA9IFtdO1xuICBpc0xhc3RUd2VlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uY2hpbGRyZW4uZm9yRWFjaCgoRWxlbSkgPT4ge1xuICAgICAgICBFbGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cbiAgICAgICAgICB0aGlzLnBvZGFyX2ZvbnQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXG4gICAgKSB7XG4gICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cbiAgICAgICAgICB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcbiAgICB9XG5cbiAgICB0aGlzLlRvdGFsT3B0aW9ucyA9IDQ7XG5cbiAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpO1xuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG5cbiAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcblxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBpIDxcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgIC5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgdGhpcy5hbnN3ZXJBcnJheVtpXSA9XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgXS5jb3JyZWN0QW5zd2VyTnVtW2ldO1xuICAgIH1cblxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xuICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLnF1ZXN0aW9uQXVkaW9OYW1lLFxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gYXVkaW9DbGlwO1xuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxuICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgaSA8XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3MubGVuZ3RoO1xuICAgICAgICBpKytcbiAgICAgICkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmNvcnJlY3RBdWRpb3NbaV0sXG4gICAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLnF1ZXN0aW9uQXVkaW9OYW1lLFxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGkgPFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9zLmxlbmd0aDtcbiAgICAgICAgaSsrXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgIF0uY29ycmVjdEF1ZGlvc1tpXSxcbiAgICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1tpXSA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUsXG4gICAgKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUVBhbmVsXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJJTUdcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICB0aGlzLnF1ZXN0aW9uSW1hZ2VzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcbiAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMSxcbiAgICApO1xuICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcblxuICAgIHRoaXMudG90YWxBbnN3ZXJzID1cbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICBdLmNvcnJlY3RBbnN3ZXJOdW0ubGVuZ3RoO1xuXG4gICAgdGhpcy5jYWxsUXVlc3Rpb25CYXIoKTtcblxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5iYWdOZWdhdGl2ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMudGxjUG9zaXRpdmU7XG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViUG9zaXRpdmU7XG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvblBvc2l0aXZlO1xuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvbk5lZ2F0aXZlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XG4gICAgcmV0dXJuIF9udW1iZXI7XG4gIH1cblxuICBjYWxsUXVlc3Rpb25CYXIoKSB7XG4gICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5zZXRQb3NpdGlvbihjYy52MigwLCAxNTAwKSk7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSlcbiAgICAgIC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgXS5xdWVzdGlvblRleHQ7XG5cbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxPcHRpb25JbigpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgT25WT0J1dHRvbigpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgIGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xuICB9XG5cbiAgY2FsbE9wdGlvbkluKCkge1xuICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMjU1O1xuICAgICAgZWxlbS5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMjU1O1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICBjYy50d2VlbihlbGVtLmNoaWxkcmVuWzFdKVxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgICAgY2MudHdlZW4oZWxlbS5jaGlsZHJlblsyXSlcbiAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMuUGxheVF1ZXN0aW9uQXVkaW8oKTtcbiAgICB9LCAwLjUpO1xuICB9XG5cbiAgUGxheVF1ZXN0aW9uQXVkaW8oKSB7XG4gICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xuICAgICAgKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xuICAgICAgICBoYW5kLnNldFBhcmVudChcbiAgICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pLFxuICAgICAgICApO1xuICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XG4gICAgICAgIGhhbmQuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcbiAgICAgICAgaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIlxuICAgICkge1xuICAgICAgbGV0IGludG9BbmltID0gXCJpbnRyb1wiO1xuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDQ1MCwgLTM3MCk7XG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgIGludG9BbmltID0gXCJpbnRyb18xXCI7XG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig4NzAsIC0zNzApO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRsY19iaXJkRmx5aW5nLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBpbnRvQW5pbSwgZmFsc2UpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgIF0uc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW9cbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnQoXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZSk7XG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fbG9vcFwiLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImludHJvX2VuZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xuICAgICAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50KFxuICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJBcnJheVswXSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XG4gICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcbiAgICAgICAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgT25CdXR0b25DbGljayhfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJjYW5Ub3VjaC0tXCIgKyB0aGlzLmNhblRvdWNoKTtcbiAgICBpZiAoIXRoaXMuY2FuVG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEb25lW3BhcnNlSW50KF9ldmVudC50YXJnZXQubmFtZSkgLSAxXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XG4gICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgfVxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGxldCBfbm9kZSA9IF9ldmVudC50YXJnZXQ7XG4gICAgbGV0IGlzY29ycmVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5hbnN3ZXJBcnJheVtpXSkge1xuICAgICAgICBpc2NvcnJlY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRG9uZVtwYXJzZUludChfbm9kZS5uYW1lKSAtIDFdID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc2NvcnJlY3QpIHtcbiAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcbiAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQrKztcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGUsIF9ldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2FsbE5leHRMZXZlbCgpIHtcbiAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLmNoaWxkcmVuLmZvckVhY2goKEVsZW0pID0+IHtcbiAgICAgICAgRWxlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgIHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcbiAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1swXS5kdXJhdGlvbiAtIDAuNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vcGxheSBwbGF5ZXIgd2Fsa1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud2Fsa1NGWCwgZmFsc2UpO1xuICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxuICAgICAgICAgIC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxuICAgICAgICAgIC5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcImlkbGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiY29ycmVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5wbGF5ZXJOb2RlKS50bygwLjcsIHsgeDogMCB9KS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBsYXllck5vZGUpXG4gICAgICAgICAgLnRvKDAuMTE2LCB7IGFuZ2xlOiAtOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAgIC50bygwLjExNiwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAgIC50bygwLjExNiwgeyBhbmdsZTogOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAgIC50bygwLjExNiwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAgIC50bygwLjExNiwgeyBhbmdsZTogLTggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcbiAgICAgICAgICAudG8oMC4xMTYsIHsgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcbiAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1swXS5kdXJhdGlvbiAtIDAuNSk7XG4gICAgfVxuICB9XG5cbiAgY2FsbFN0YXJzRWFyZWQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgdGhpcy5zdGFyMUxvZyA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhcjJMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XG4gICAgICB0aGlzLnN0YXIyTG9nID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICF0aGlzLnN0YXIzTG9nICYmXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWxcbiAgICApIHtcbiAgICAgIHRoaXMuc3RhcjNMb2cgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcbiAgICB9XG4gIH1cblxuICBjYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XG4gICAgX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICB0aGlzLmV4dHJhSW1nO1xuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXG4gICAgICB0aGlzLmNvcnJlY3RBdWRpb1twYXJzZUludChfbm9kZS5uYW1lKSAtIDFdLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICBjYy50d2Vlbihfbm9kZSlcbiAgICAgIC50bygwLjUsIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA0MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcbiAgICAgIC5zdGFydCgpO1xuICAgIGNjLnR3ZWVuKF9ub2RlLmNoaWxkcmVuWzBdKVxuICAgICAgLnRvKDAuNSwgeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDMyMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgLnN0YXJ0KCk7XG4gICAgY2MudHdlZW4oX25vZGUuY2hpbGRyZW5bMF0pXG4gICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICBjYy50d2Vlbihfbm9kZSkudG8oMC41LCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55KTtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xuICAgICAgfSwgMC43KTtcbiAgICB9LCAwLjUpO1xuICB9XG5cbiAgY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGU6IGNjLk5vZGUpIHtcbiAgICBsZXQgdm9JbmRleDogbnVtYmVyID0gdGhpcy5hbnN3ZXJBcnJheS5pbmRleE9mKF9ub2RlLm5hbWUpO1xuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0sIGZhbHNlKTtcbiAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT0gX25vZGUpIHtcbiAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55KTtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG9uZVtpXSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICBlbGVtLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNMYXN0VHdlZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbihfbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgeTogMTUwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwic291bmRcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgfSwgMy41KTtcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSwgMC41KTtcbiAgICB9LCB0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XS5kdXJhdGlvbik7XG4gIH1cblxuICBjYWxsSm9ja2V5KCkge1xuICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zc2l0aXZlXCIsXG4gICAgICAgIFwicG9zc2l0aXZlMlwiLFxuICAgICAgICBcInBvc3NpdGl2ZTNcIixcbiAgICAgICAgXCJwb3NzaXRpdmU0XCIsXG4gICAgICAgIFwicG9zc2l0aXZlNVwiLFxuICAgICAgICBcInBvc3NpdGl2ZTZcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XG4gICAgICBhbmltID0gW1xuICAgICAgICBcInBvc2l0aXZlXzFcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxuICAgICAgICBcInBvc2l0aXZlXzRcIixcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNlwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xuICAgICAgYW5pbSA9IFtcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxuICAgICAgICBcInBvc2l0aXZlXzNcIixcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxuICAgICAgICBcInBvc2l0aXZlXzJcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxuICAgICAgICBcInBvc2l0aXZlXzVcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxuICAgICAgICBcInBvc2l0aXZlXzJcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxuICAgICAgICBcInBvc2l0aXZlXzVcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xuICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcbiAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xuICAgIH1cbiAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XG4gICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTEyMDAsIDEyMDBdO1xuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcbiAgICBpZiAoXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCJcbiAgICApIHtcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zY2FsZVggPSAtMC42NTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcbiAgICApIHtcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxuICAgICkge1xuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKFxuICAgICAgICBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLFxuICAgICAgICAtMzUwLFxuICAgICAgKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LFxuICAgICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9LFxuICAgICAgICApXG4gICAgICAgIC5zdGFydCgpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXG4gICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXG4gICAgICAgICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuICAgICAgfSwgMC41KTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fb3V0XCIsIGZhbHNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRsY19iaXJkRmx5aW5nLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oXCJpbnRyb19vdXRcIikuZHVyYXRpb24pO1xuICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIgfHxcbiAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8yXCJcbiAgICAgICkge1xuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXG4gICAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMVwiKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN1cGVyY3ViX1BvczEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIikge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdXBlcmN1Yl9Qb3MyLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgIC5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIpLmR1cmF0aW9uLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIpLmR1cmF0aW9uLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XG4gICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGU6IGNjLk5vZGUsIF9ldmVudCkge1xuICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTb3VuZFswXSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLndyb25nQW5zd2VyQ291bnQgPj0gNikge1xuICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPcHRpb25CRykge1xuICAgICAgX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICB9IGVsc2Uge1xuICAgICAgX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxsTmVnYXRpdmVSZWFjdGlvbihfbm9kZSk7XG5cbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcbiAgICAgICAgICBcIm5lZ2V0aXZlXCIsXG4gICAgICAgICAgXCJuZWdldGl2ZTJcIixcbiAgICAgICAgICBcIm5lZ2V0aXZlM1wiLFxuICAgICAgICAgIFwibmVnZXRpdmU0XCIsXG4gICAgICAgICAgXCJuZWdldGl2ZTVcIixcbiAgICAgICAgICBcIm5lZ2V0aXZlNlwiLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcIm5vXCJdO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcbiAgICAgIH1cblxuICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDEyMDAsIC0zNTApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXG4gICAgICAgICAgLnRvKDAuNSwgeyB4OiA0MDAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxuICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IDEyMDAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiIHx8XG4gICAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcbiAgICAgICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiKSB7XG4gICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfTmVnMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCIpIHtcbiAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdXBlcmN1Yl9OZWcyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbixcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob25leWJlZVwiKSkudG8oMC41LCB7IHg6IDAsIHk6IC01MDAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob25leWJlZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfZW1wdHkgYnVja2V0XCIsIHRydWUpO1xuICAgICAgLy8gICAgIH0sIDAuNSk7XG4gICAgICAvLyB9LCAyKTtcbiAgICB9LCAzLjUpO1xuICB9XG5cbiAgY2FsbE5lZ2F0aXZlUmVhY3Rpb24oX25vZGU6IGNjLk5vZGUpIHtcbiAgICBsZXQgX3BsYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKTtcbiAgICBfcGxheWVyLnNldFBhcmVudFdpdGhTYW1lUG9zKFxuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkhvbGVcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKF9ub2RlLm5hbWUpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVcIiksXG4gICAgKTtcbiAgICBsZXQgX2N1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IF9wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICBjYy50d2VlbihfcGxheWVyKS50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcFNGWCwgZmFsc2UpO1xuICAgICAgY2MudHdlZW4oX3BsYXllcilcbiAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKF9wbGF5ZXIpLnRvKDEsIHsgeTogLTI1MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndyb25nU0ZYLCBmYWxzZSk7XG4gICAgICAgIF9wbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJpZGxlXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfcGxheWVyLmdldENoaWxkQnlOYW1lKFwibGVnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfcGxheWVyLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4oX3BsYXllcilcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjEgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcbiAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4oX3BsYXllcilcbiAgICAgICAgICAudG8oMSwgeyB5OiBfY3VycmVudFBvc2l0aW9uLnkgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmxpbmtTRlgsIGZhbHNlKTtcbiAgICAgICAgICBjYy50d2VlbihfcGxheWVyKVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMiB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgX3BsYXllci5nZXRDaGlsZEJ5TmFtZShcImlkbGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIF9wbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsZWdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIF9wbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIF9wbGF5ZXIuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcbiAgICAgICAgICB9LCAxLjEpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0sIDEpO1xuICAgIH0sIDAuNSk7XG4gIH1cbiAgY2FsbFBvc2l0aXZlUmVhY3Rpb24oX25vZGU6IGNjLk5vZGUpIHtcbiAgICBsZXQgX3BsYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKTtcbiAgICBfcGxheWVyLnNldFBhcmVudFdpdGhTYW1lUG9zKFxuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkhvbGVcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKF9ub2RlLm5hbWUpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVcIiksXG4gICAgKTtcbiAgICBsZXQgX2N1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IF9wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICBjYy50d2VlbihfcGxheWVyKS50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcFNGWCwgZmFsc2UpO1xuICAgICAgY2MudHdlZW4oX3BsYXllcilcbiAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKF9wbGF5ZXIpLnRvKDEsIHsgeTogLTI1MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTRlgsIGZhbHNlKTtcbiAgICAgICAgX3BsYXllci5nZXRDaGlsZEJ5TmFtZShcImlkbGVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF9wbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3JyZWN0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKF9wbGF5ZXIpXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKF9wbGF5ZXIpXG4gICAgICAgICAgLnRvKDEsIHsgeTogX2N1cnJlbnRQb3NpdGlvbi55IH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgX3BsYXllci5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xuICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgMS4xKTtcbiAgICAgIH0sIDEpO1xuICAgIH0sIDAuNSk7XG4gIH1cblxuICBPbGRjYWxsQmVlTmVnYXRpdmVSZWFjdGlvbihfbm9kZTogY2MuTm9kZSkge1xuICAgIC8vIGxldCBob25leUJlZTogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvbmV5YmVlXCIpO1xuICAgIC8vIC8vbGV0IGJlZUlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJlZUZseWluZywgdHJ1ZSk7XG4gICAgLy8gaWYgKF9ub2RlLm5hbWUgPT0gXCIxXCIpIHtcbiAgICAvLyAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiAtMzIwLCB5OiAtMzYwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYmVlSWQpO1xuICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMDtcbiAgICAvLyAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0ub3BhY2l0eSA9IDA7XG4gICAgLy8gICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwicmVkIEZsb3dlciBjbG9zZVwiLCBmYWxzZSk7XG4gICAgLy8gICAgICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfc2FkXCIsIHRydWUpO1xuICAgIC8vICAgICB9LCAwLjUpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChfbm9kZS5uYW1lID09IFwiMlwiKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogMzAsIHk6IC0zNjAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChiZWVJZCk7XG4gICAgLy8gICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLm9wYWNpdHkgPSAwO1xuICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMDtcbiAgICAvLyAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJibHVlIEZsb3dlciBjbG9zZVwiLCBmYWxzZSk7XG4gICAgLy8gICAgICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfc2FkXCIsIHRydWUpO1xuICAgIC8vICAgICB9LCAwLjUpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChfbm9kZS5uYW1lID09IFwiM1wiKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogMzIwLCB5OiAtMzYwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYmVlSWQpO1xuICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMDtcbiAgICAvLyAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMl0ub3BhY2l0eSA9IDA7XG4gICAgLy8gICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwieWVsbG93IEZsb3dlciBjbG9zZVwiLCBmYWxzZSk7XG4gICAgLy8gICAgICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfc2FkXCIsIHRydWUpO1xuICAgIC8vICAgICB9LCAwLjUpO1xuICAgIC8vIH1cbiAgfVxuICBPbGRjYWxsQmVlUG9zaXRpdmVSZWFjdGlvbihfbm9kZTogY2MuTm9kZSkge1xuICAgIC8vIGxldCBob25leUJlZTogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvbmV5YmVlXCIpO1xuICAgIC8vIC8vbGV0IGJlZUlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJlZUZseWluZywgdHJ1ZSk7XG4gICAgLy8gaWYgKF9ub2RlLm5hbWUgPT0gXCIxXCIpIHtcbiAgICAvLyAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiAtMzIwLCB5OiAtMTUwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChfbm9kZS5uYW1lID09IFwiMlwiKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKGhvbmV5QmVlKS50bygwLjUsIHsgeDogMzAsIHk6IC0xNTAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKF9ub2RlLm5hbWUgPT0gXCIzXCIpIHtcbiAgICAvLyAgICAgY2MudHdlZW4oaG9uZXlCZWUpLnRvKDAuNSwgeyB4OiA0MjAsIHk6IC0xMjAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGJlZUlkKTtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvbmV5RmlsbGluZywgZmFsc2UpO1xuICAgIC8vICAgICBob25leUJlZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkJlZSBmbHlfRmlsbGVkIGJ1Y2tldFwiLCB0cnVlKTtcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy9sZXQgYmVlSWQyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJlZUZseWluZywgdHJ1ZSk7XG4gICAgLy8gICAgICAgICBjYy50d2Vlbihob25leUJlZSlcbiAgICAvLyAgICAgICAgICAgICAudG8oMSwgeyB4OiAtNDUwLCB5OiAtMzI1LCBzY2FsZTogMC4zIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxuICAgIC8vICAgICAgICAgICAgIC50bygwLjUsIHsgeDogLTU3MCwgeTogLTMyNSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYmVlSWQyKTtcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaG9uZXlwcm9ncmVzc0ZpbGxpbmcsIGZhbHNlKTtcbiAgICAvLyAgICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAvL2xldCBiZWVJZDMgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmVlRmx5aW5nLCB0cnVlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgaG9uZXlCZWUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJCZWUgZmx5X2VtcHR5IGJ1Y2tldFwiLCB0cnVlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oaG9uZXlCZWUpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IDAsIHk6IC01MDAsIHNjYWxlOiAwLjcgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChiZWVJZDMpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgIC8vICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgLy8gICAgICAgICB9LCAxLjUpO1xuICAgIC8vICAgICB9LCAwLjUpO1xuICAgIC8vIH0sIDAuNSk7XG4gIH1cblxuICBkZXN0cm95T3B0aW9uKCkge1xuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0ubmFtZSAhPVxuICAgICAgICB0aGlzLmFuc3dlckFycmF5WzBdXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkU3ByaXRlRnJhbWUoXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQsXG4gICkge1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxuICAgICAgXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXG4gICAgICBjYy5TcHJpdGVGcmFtZSxcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cbiAgbG9hZEF1ZGlvQ2xpcChcbiAgICBhdWRpb05hbWU6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQsXG4gICkge1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxuICAgICAgXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXG4gICAgICBjYy5BdWRpb0NsaXAsXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKCkge31cbn1cbiJdfQ==
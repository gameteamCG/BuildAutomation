
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4e51CcXJH24gA96gBaxOm', 'gameplay');
// Games/WhatWillHappenNext/Scripts/gameplay.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extraImg = null;
        _this.dropNode = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.popSound = [];
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
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.tlcPositive = [];
        _this.tlcNegative = [];
        _this.supercubPositive = [];
        _this.supercubNegative = [];
        _this.tlc_birdFlying = null;
        _this.supercub_Pos1 = null;
        _this.supercub_Pos2 = null;
        _this.supercub_Neg1 = null;
        _this.supercub_Neg2 = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.canPlay = false;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.audioanswerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = [];
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        _this.positionArray = [];
        _this.correctAnswerCount = 0;
        _this.totalAnswers = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAnswerNum.length; i++) {
            this.answerArray[i] =
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
            this.audioanswerArray[i] =
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
            //console.log("AnswerArray : ", this.answerArray)
        }
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        else {
            //cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node
                    .getChildByName("QuestionBox")
                    .getChildByName("ThirdObject")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            var _loop_1 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
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
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this_1.node
                        .getChildByName("Option")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
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
            //console.log("correctAudios : ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios);
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionImageName, function (spriteFrame) {
                _this.node
                    .getChildByName("QuestionBox")
                    .getChildByName("ThirdObject")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
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
        //startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        //this.currentJcokey.active = true;
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        // this.OptionsLayout();
        this.totalAnswers = this.answerArray.length;
        this.OptionsLayoutGrid();
        this.reverseOptionsLayout();
        this.callThirdObjectIn();
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
    NewClass.prototype.GenerateOptions = function () {
        var _this = this;
        var _loop_5 = function (i) {
            var option = cc.instantiate(this_4.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this_4.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
            option.width = 250;
            option.height = 250;
            option.off(cc.Node.EventType.TOUCH_START);
            option.on(cc.Node.EventType.TOUCH_END, function () {
                console.log("OPTION CLICKED:", option.name);
                _this.OnOptionTapped(option);
            }, this_4);
            option.on("tv-select", function () {
                console.log("TV SELECT OPTION:", option.name);
                _this.OnOptionTapped(option);
            }, this_4);
        };
        var this_4 = this;
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .numberOfOptions; i++) {
            _loop_5(i);
        }
        this.node.getChildByName("template").destroy();
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        // this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel"))
            .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
            .start();
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.node.getChildByName("QuestionBox").setPosition(cc.v2(-1500, -200));
        this.node.getChildByName("QuestionBox").scale = 1;
        this.scheduleOnce(function () {
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("QuestionBox"))
                    .to(0.5, { x: -300 }, { easing: "sineInOut" })
                    .start();
            }, 0.1);
            _this.scheduleOnce(function () {
                var QuestionBox1 = cc.instantiate(_this.node.getChildByName("QuestionBox"));
                QuestionBox1.name = "QuestionBox1";
                QuestionBox1.setParent(_this.node);
                _this.node.getChildByName("QuestionBox1").setPosition(cc.v2(-300, -200));
                _this.scheduleOnce(function () {
                    _this.callOptionIn();
                }, 0.2);
            }, 0.5);
        }, 1);
    };
    NewClass.prototype.playButtonSound = function (_event) {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionSound[0], false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            _this.setupTVFocus("Option");
        }, this.questionSound[0].duration);
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canTouch = false;
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
        console.log("Jockey coming");
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            this.canPlay = true;
            if (TVInputManager_1.default.Instance)
                TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
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
                            _this.canPlay = true;
                            if (TVInputManager_1.default.Instance)
                                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, _this.questionSound[0].duration);
                }
            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var hand = this.node.getChildByName("hand");
        var originalHandParent = hand.parent;
        var originalHandPosition = hand.getPosition().clone();
        if (StartGame_1.default.Instance.jockeyName == "supercub" ||
            StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("Option")
                .setPosition(this.node.getChildByName("Option").x - 200, this.node.getChildByName("Option").y);
            this.node
                .getChildByName("QuestionBox")
                .setPosition(this.node.getChildByName("QuestionBox").x - 120, this.node.getChildByName("QuestionBox").y);
            this.node
                .getChildByName("QuestionBox1")
                .setPosition(this.node.getChildByName("QuestionBox1").x - 120, this.node.getChildByName("QuestionBox1").y);
        }
        var delay = 0.5;
        var ObjScale = 1;
        var _loop_6 = function (i) {
            this_5.node.getChildByName("Option").children[i - 1].scale = 0;
            this_5.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_5.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: ObjScale }, { easing: "sineInOut" })
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        if (globalVariables_1.default.Instance.currentLevel == 1) {
                            var hand_1 = _this.node.getChildByName("hand");
                            hand_1.setParent(_this.node
                                .getChildByName("Option")
                                .getChildByName(_this.answerArray[0]));
                            hand_1.setPosition(0, -30);
                            hand_1.setParentWithSamePos(_this.node);
                            var waitTime = 0;
                            if (StartGame_1.default.Instance.jockeyName == "tlc" ||
                                StartGame_1.default.Instance.jockeyName == "supercub") {
                                waitTime = 2;
                            }
                            // Hand tutorial animation — level 1 only
                            _this.scheduleOnce(function () {
                                hand_1.getComponent(cc.Animation).play("handAnimation");
                                _this.scheduleOnce(function () {
                                    hand_1.getComponent(cc.Animation).play("handAnimation");
                                    _this.scheduleOnce(function () {
                                        hand_1.getComponent(cc.Animation).play("handAnimation");
                                        _this.scheduleOnce(function () {
                                            hand_1.active = false;
                                        }, 1);
                                    }, 1);
                                }, 1);
                            }, waitTime);
                        }
                        // --- These must run for EVERY level, not just level 1 ---
                        _this.PlayQuestionAudio();
                        _this.canTouch = true;
                        _this.canPlay = true;
                        if (TVInputManager_1.default.Instance) {
                            TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                        }
                        // ---------------------------------------------------------
                        // Setup TV Focus
                        _this.scheduleOnce(function () {
                            _this.setupTVFocus("Option");
                        }, 1);
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_5 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            _loop_6(i);
        }
        // const gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
    };
    NewClass.prototype.OnButtonClick = function (_event) { };
    NewClass.prototype.OnOptionTapped = function (_node) {
        if (!this.canTouch) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        var isCorrect = false;
        for (var i = 0; i < this.answerArray.length; i++) {
            if (_node.name == this.answerArray[i]) {
                isCorrect = true;
                console.log("before array--", this.answerArray);
                console.log("correctAnswer--", this.answerArray[i]);
                this.answerArray.splice(i, 1);
                console.log("After array--", this.answerArray);
                break;
            }
        }
        if (isCorrect) {
            cc.audioEngine.stopAllEffects();
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: 1500 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = false;
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveRection(_node.getChildByName("img"));
        }
        else {
            console.log("❌ WRONG ANSWER:", _node.name);
            this.canTouch = false;
            this.canPlay = false;
            if (TVInputManager_1.default.Instance) {
                TVInputManager_1.default.Instance.setCanSelect(false);
            }
            this.wrongAnswerCount++;
            this.callNegativeRection(_node.getChildByName("img"), null);
        }
    };
    NewClass.prototype.callNextLevel = function () {
        cc.tween(this.node.getChildByName("QuestionBox"))
            .to(0.5, { x: -1500 }, { easing: "sineInOut" })
            .start();
        cc.tween(this.node.getChildByName("QuestionBox1"))
            .to(0.5, { x: -1500 }, { easing: "sineInOut" })
            .start();
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(function () {
                cc.director.loadScene("endScreen");
            }, 1);
        }
        else {
            this.scheduleOnce(function () {
                globalVariables_1.default.Instance.currentLevel++;
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                cc.director.loadScene("1");
            }, 1);
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
        this.canTouch = false;
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
        var voIndex = this.audioanswerArray.indexOf(_node.parent.name);
        console.log("voIndex : ", voIndex);
        //this.scheduleOnce(() => {
        this.node
            .getChildByName("confetti")
            .setPosition(this.node.getChildByName("QuestionBox").x, this.node.getChildByName("QuestionBox").y);
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();
        cc.audioEngine.playEffect(this.positiveSound[0], false);
        var parentNode = _node.parent;
        //this.scheduleOnce(() => {
        var imgName = _node.name + this.correctAnswerCount + 1;
        _node.name = imgName;
        _node.setParentWithSamePos(this.node.getChildByName("QuestionBox"));
        this.node.getChildByName("Option").active = false;
        var pos = this.node
            .getChildByName("QuestionBox")
            .getChildByName(imgName)
            .getPosition();
        var thirdBox = this.node
            .getChildByName("QuestionBox")
            .getChildByName("ThirdObject");
        var xRandom = this.getRandomNumber(-thirdBox.width / 4, thirdBox.width / 4);
        this.node.getChildByName("QuestionBox").getChildByName(imgName).scale =
            this.node.getChildByName("QuestionBox").getChildByName(imgName).scale -
                this.node.getChildByName("QuestionBox").getChildByName(imgName).scale *
                    0.2;
        this.scheduleOnce(function () {
            cc.tween(_this.node.getChildByName("QuestionBox").getChildByName(imgName))
                .bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(xRandom / 2, pos.y + 200), cc.v2(xRandom, thirdBox.height / 2 - 50))
                .start();
            cc.tween(_this.node.getChildByName("QuestionBox").getChildByName(imgName))
                .to(0.7, { scale: 0.3 }, { easing: "sineInOut" })
                .start();
            _this.scheduleOnce(function () {
                //console.log("correctAudio : ", this.correctAudio)
                cc.audioEngine.playEffect(_this.correctAudio[voIndex], false);
                parentNode.destroy();
                _this.canTouch = true;
                _this.canPlay = true;
                if (TVInputManager_1.default.Instance)
                    TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                _this.correctAnswerCount++;
                console.log("TotalAnswers--" + _this.totalAnswers, _this.correctAnswerCount);
                if (_this.correctAnswerCount == _this.totalAnswers) {
                    _this.canTouch = false;
                    _this.canPlay = false;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                    _this.destroyOption();
                    _this.scheduleOnce(function () {
                        ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                        _this.scheduleOnce(function () {
                            ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                            _this.scheduleOnce(function () {
                                cc.tween(_this.node.getChildByName("questionPanel"))
                                    .to(1, { y: 1500 }, { easing: "sineInOut" })
                                    .start();
                                _this.node
                                    .getChildByName("questionPanel")
                                    .getChildByName("sound")
                                    .getComponent(cc.Button).interactable = false;
                                console.log("correctAnswerCount--" + _this.correctAnswerCount, _this.totalAnswers);
                                _this.callJockey();
                            }, 1);
                        }, 1.5);
                    }, _this.correctAudio[voIndex].duration);
                }
            }, 0.5);
        }, 0.3);
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
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
                "positive_6",
                "positive_7",
                "positive_8",
                "positive_9",
                "positive_10",
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
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        //this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
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
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idel", true);
        }
        else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
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
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
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
                //bird flying out sound
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
                            //console.log("characterDisappear--Podar_Jumbo");
                            _this.callNextLevel();
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                    }, _this.positiveAudio[currentClipNum].duration);
                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
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
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }
        }
    };
    NewClass.prototype.callNegativeRection = function (_node, _event) {
        var _this = this;
        _node.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
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
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
                anim = [
                    "negative_1",
                    "negative_2",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                    "negative_6",
                    "negative_7",
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
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
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
            //console.log("characterAppear--Podar_Jumbo");
            //this.currentJcokey.setPosition(1200, -350);
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            else {
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
                        //console.log("characterDisappear--Podar_Jumbo");
                        _this.canTouch = true;
                        _this.canPlay = true;
                        if (TVInputManager_1.default.Instance)
                            TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
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
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                }, _this.negativeAudio[currentClipNum].duration);
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" ||
                    anim[currentClipNum] == "negative_2") {
                    //play bulb break if needed
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
                            _this.canPlay = true;
                            if (TVInputManager_1.default.Instance)
                                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                            _this.scheduleOnce(function () {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, _this.negativeAudio[currentClipNum].duration);
                    }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
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
                        _this.canPlay = true;
                        if (TVInputManager_1.default.Instance)
                            TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
        }, 0.7);
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" })
            .call(function () {
            _node.getComponent(cc.Sprite).setMaterial(0, _this.defaultMat);
        })
            .start();
    };
    NewClass.prototype.destroyOption = function () {
        for (var i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            //if (this.node.getChildByName("Option").children[i].name != this.answerArray[0]) {
            this.node.getChildByName("Option").children[i].destroy();
            //}
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
    NewClass.prototype.OptionsLayoutVertical = function () {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        var maxWidth = 0;
        // Calculate the total height and the maximum width of the options
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalHeight += optionHeight + paddingBetweenOptions;
            if (optionWidth > maxWidth) {
                maxWidth = optionWidth;
            }
        }
        var availableHeight = optionsLayout.height;
        var totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);
        var accumulatedHeight = 0;
        // Position each option node vertically
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posY = accumulatedHeight + option.height * option.anchorY;
            option.y = posY - optionsLayout.height * optionsLayout.anchorY;
            accumulatedHeight += option.height + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.width = maxWidth * scaleFactor;
    };
    NewClass.prototype.OptionsLayoutGrid = function () {
        //console.log("OptionsLayoutGrid");
        var numCols = 2;
        var numRows = 2;
        var paddingBetweenOptions = 120;
        var optionNodes = this.optionsNode;
        var optionWidth = 150; // Width of each option
        var optionHeight = 150; // Height of each option
        // const gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        // const gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);
        var gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        var gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);
        console.log(gridWidth);
        var currentRow = 0;
        var currentCol = 0;
        for (var i = 0; i < optionNodes.children.length; i++) {
            var option = this.optionsNode.children[i];
            //console.log(i, optionNodes.children.length);
            // Calculate position based on grid layout
            var posX = currentCol * (optionWidth + paddingBetweenOptions);
            var posY = currentRow * (optionHeight + paddingBetweenOptions);
            // Update position of the option
            option.setPosition(cc.v2(posX - 100, posY - 100));
            //this.positionArray.push(option.getPosition());
            currentCol++;
            if (currentCol >= numCols) {
                currentCol = 0;
                currentRow++;
            }
        }
        // Set the size of the options container to fit the grid
    };
    NewClass.prototype.reverseOptionsLayout = function () {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        // Create an array to hold the new positions
        var newPositions = [];
        // Calculate new positions in reverse order
        for (var i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }
        // Update the positions of the options
        for (var i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
            this.positionArray.push(cc.v2(optionNodes[i].x, optionNodes[i].y));
        }
    };
    NewClass.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node
            .getChildByName("questionPanel")
            .getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var optionButtons = this.node
            .getChildByName(activeContainerName)
            .children.filter(function (node) {
            var btn = node.getComponent(cc.Button);
            return (node.active &&
                node.opacity > 0 &&
                (!btn || btn.interactable !== false));
        });
        var nodes = __spreadArrays(optionButtons, [backBtn, soundBtn, musicBtn]).filter(function (n) { return !!n; });
        // pick a sensible default — e.g. first option, or correct answer index
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "extraImg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dropNode", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
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
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
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
        property(cc.Font)
    ], NewClass.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "supercub_font", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFxRjtBQUVyRixrRUFBNkQ7QUFDN0QscURBQWdEO0FBQ2hELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTg4Q0M7UUE1OENTLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR3hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHakIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFtQixFQUFFLENBQUM7UUFHOUIsZUFBUyxHQUFtQixFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRzNDLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUdwQixpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLHNCQUFn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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9ja2V5IGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvSm9ja2V5cy9TY3JpcHRzL0pvY2tleVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgVFZJbnB1dE1hbmFnZXIgZnJvbSBcIi4vVFZJbnB1dE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHByaXZhdGUgZXh0cmFJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZHJvcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvcFNvdW5kMjogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgbmVnYXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHN0YWxsaW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICBkZWZhdWx0TWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICBncmV5TWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgdGxjX2JpcmRGbHlpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9Qb3MxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9Qb3MyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIGNhblBsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBpc0ZpcnN0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhbnN3ZXJBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGF1ZGlvYW5zd2VyQXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuICB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGN1cnJlbnRKY29rZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcclxuXHJcbiAgcG9zaXRpb25BcnJheTogY2MuVmVjMltdID0gW107XHJcbiAgY29ycmVjdEFuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHRvdGFsQW5zd2VyczogbnVtYmVyID0gMTtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgaSA8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgLmNvcnJlY3RBbnN3ZXJOdW0ubGVuZ3RoO1xyXG4gICAgICBpKytcclxuICAgICkge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5W2ldID1cclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICBdLmNvcnJlY3RBbnN3ZXJOdW1baV07XHJcbiAgICAgIHRoaXMuYXVkaW9hbnN3ZXJBcnJheVtpXSA9XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgXS5jb3JyZWN0QW5zd2VyTnVtW2ldO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiQW5zd2VyQXJyYXkgOiBcIiwgdGhpcy5hbnN3ZXJBcnJheSlcclxuICAgIH1cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpO1xyXG4gICAgdGhpcy5HZW5lcmF0ZU9wdGlvbnMoKTtcclxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLnF1ZXN0aW9uQXVkaW9OYW1lLFxyXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICBpIDxcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgICBdLm51bWJlck9mT3B0aW9ucztcclxuICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3B0aW9uIGltZyA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiB0ZXh0ID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBpIDxcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3MubGVuZ3RoO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmNvcnJlY3RBdWRpb3NbaV0sXHJcbiAgICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiY29ycmVjdEF1ZGlvcyA6IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zKTtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgaSA8XHJcbiAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgICAgXS5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIilcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGkgPFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvcy5sZW5ndGg7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmNvcnJlY3RBdWRpb3NbaV0sXHJcbiAgICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPSBcIlBvZGFyXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZVxyXG4gICAgKTtcclxuICAgIC8vdGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICk7XHJcbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAvLyB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsQW5zd2VycyA9IHRoaXMuYW5zd2VyQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMuT3B0aW9uc0xheW91dEdyaWQoKTtcclxuICAgIHRoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQoKTtcclxuICAgIHRoaXMuY2FsbFRoaXJkT2JqZWN0SW4oKTtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xyXG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMudGxjUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3VwZXJjdWJOZWdhdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcclxuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5jcnlvbk5lZ2F0aXZlO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvblBvc2l0aXZlO1xyXG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uTmVnYXRpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgfVxyXG5cclxuICBHZW5lcmF0ZU9wdGlvbnMoKSB7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgIGkrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcblxyXG4gICAgICBvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgb3B0aW9uLnNldFBhcmVudCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikpO1xyXG4gICAgICBvcHRpb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xyXG4gICAgICBvcHRpb24ub3BhY2l0eSA9IDA7XHJcbiAgICAgIG9wdGlvbi53aWR0aCA9IDI1MDtcclxuICAgICAgb3B0aW9uLmhlaWdodCA9IDI1MDtcclxuXHJcbiAgICAgIG9wdGlvbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG5cclxuICAgICAgb3B0aW9uLm9uKFxyXG4gICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk9QVElPTiBDTElDS0VEOlwiLCBvcHRpb24ubmFtZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5Pbk9wdGlvblRhcHBlZChvcHRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgb3B0aW9uLm9uKFxyXG4gICAgICAgIFwidHYtc2VsZWN0XCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUViBTRUxFQ1QgT1BUSU9OOlwiLCBvcHRpb24ubmFtZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5Pbk9wdGlvblRhcHBlZChvcHRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNhbGxUaGlyZE9iamVjdEluKCkge1xyXG4gICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikub3BhY2l0eSA9IDI1NTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpXHJcbiAgICAgIC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgIF0ucXVlc3Rpb25UZXh0O1xyXG5cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLnNldFBvc2l0aW9uKGNjLnYyKC0xNTAwLCAtMjAwKSk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS5zY2FsZSA9IDE7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKSlcclxuICAgICAgICAgIC50bygwLjUsIHsgeDogLTMwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIH0sIDAuMSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBsZXQgUXVlc3Rpb25Cb3gxID0gY2MuaW5zdGFudGlhdGUoXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgUXVlc3Rpb25Cb3gxLm5hbWUgPSBcIlF1ZXN0aW9uQm94MVwiO1xyXG4gICAgICAgIFF1ZXN0aW9uQm94MS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIikuc2V0UG9zaXRpb24oY2MudjIoLTMwMCwgLTIwMCkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcbiAgICAgICAgfSwgMC4yKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgcGxheUJ1dHRvblNvdW5kKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJPcHRpb25cIik7XHJcbiAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgUGxheVF1ZXN0aW9uQXVkaW8oKSB7XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkpvY2tleSBjb21pbmdcIik7XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuICAgICkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG4gICAgICApIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICBpZiAoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpXHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBpbnRvQW5pbSA9IFwiaW50cm9cIjtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDQ1MCwgLTM3MCk7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpbnRvQW5pbSA9IFwiaW50cm9fMVwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig4NzAsIC0zNzApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRsY19iaXJkRmx5aW5nLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGludG9BbmltLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW9cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jYW5QbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImludHJvX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImludHJvX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblBsYXkpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsT3B0aW9uSW4oKSB7XHJcbiAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcblxyXG4gICAgbGV0IG9yaWdpbmFsSGFuZFBhcmVudCA9IGhhbmQucGFyZW50O1xyXG4gICAgbGV0IG9yaWdpbmFsSGFuZFBvc2l0aW9uID0gaGFuZC5nZXRQb3NpdGlvbigpLmNsb25lKCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLnggLSAyMDAsXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikueVxyXG4gICAgICAgICk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikueCAtIDEyMCxcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLnlcclxuICAgICAgICApO1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIilcclxuICAgICAgICAuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIikueCAtIDEyMCxcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGxldCBkZWxheTogbnVtYmVyID0gMC41O1xyXG4gICAgbGV0IE9ialNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGkgPSAxO1xyXG4gICAgICBpIDw9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgIGkrK1xyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpIC0gMV0uc2NhbGUgPSAwO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICBjYy50d2VlbihcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogT2JqU2NhbGUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIGlmIChpID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oMCwgLTMwKTtcclxuICAgICAgICAgICAgICBoYW5kLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgIGxldCB3YWl0VGltZSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIlxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgd2FpdFRpbWUgPSAyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy8gSGFuZCB0dXRvcmlhbCBhbmltYXRpb24g4oCUIGxldmVsIDEgb25seVxyXG4gICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhhbmRBbmltYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhhbmRBbmltYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJoYW5kQW5pbWF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgfSwgd2FpdFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gVGhlc2UgbXVzdCBydW4gZm9yIEVWRVJZIGxldmVsLCBub3QganVzdCBsZXZlbCAxIC0tLVxyXG4gICAgICAgICAgICB0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5QbGF5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblBsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0dXAgVFYgRm9jdXNcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwiT3B0aW9uXCIpO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICAgIGRlbGF5ICs9IDAuNTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGdyaWRXaWR0aCA9IG9wdGlvbldpZHRoICogbnVtQ29scyArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyAqIChudW1Db2xzIC0gMSk7XHJcbiAgfVxyXG5cclxuICBPbkJ1dHRvbkNsaWNrKF9ldmVudDogY2MuRXZlbnQpIHt9XHJcblxyXG4gIE9uT3B0aW9uVGFwcGVkKF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuVG91Y2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc0NvcnJlY3QgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2VyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5hbnN3ZXJBcnJheVtpXSkge1xyXG4gICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIGFycmF5LS1cIiwgdGhpcy5hbnN3ZXJBcnJheSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiwgdGhpcy5hbnN3ZXJBcnJheVtpXSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5zd2VyQXJyYXkuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFmdGVyIGFycmF5LS1cIiwgdGhpcy5hbnN3ZXJBcnJheSk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG5cclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSlcclxuICAgICAgICAudG8oMSwgeyB5OiAxNTAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwic291bmRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuY2FsbFBvc2l0aXZlUmVjdGlvbihfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuKdjCBXUk9ORyBBTlNXRVI6XCIsIF9ub2RlLm5hbWUpO1xyXG5cclxuICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkge1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdChmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xyXG5cclxuICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxOZXh0TGV2ZWwoKSB7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiAtMTUwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiAtMTUwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgIHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbFN0YXJzRWFyZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhcjFMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgIHRoaXMuc3RhcjFMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXIyTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICB0aGlzLnN0YXIyTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuc3RhcjNMb2cgJiZcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zdGFyM0xvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcblxyXG4gICAgbGV0IHZvSW5kZXg6IG51bWJlciA9IHRoaXMuYXVkaW9hbnN3ZXJBcnJheS5pbmRleE9mKF9ub2RlLnBhcmVudC5uYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKFwidm9JbmRleCA6IFwiLCB2b0luZGV4KTtcclxuICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcbiAgICAgIC5zZXRQb3NpdGlvbihcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS54LFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLnlcclxuICAgICAgKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICBsZXQgcGFyZW50Tm9kZTogY2MuTm9kZSA9IF9ub2RlLnBhcmVudDtcclxuICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgbGV0IGltZ05hbWU6IHN0cmluZyA9IF9ub2RlLm5hbWUgKyB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCArIDE7XHJcbiAgICBfbm9kZS5uYW1lID0gaW1nTmFtZTtcclxuICAgIF9ub2RlLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGxldCBwb3M6IGNjLlZlYzIgPSB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKGltZ05hbWUpXHJcbiAgICAgIC5nZXRQb3NpdGlvbigpO1xyXG4gICAgbGV0IHRoaXJkQm94OiBjYy5Ob2RlID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpO1xyXG4gICAgbGV0IHhSYW5kb206IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFxyXG4gICAgICAtdGhpcmRCb3gud2lkdGggLyA0LFxyXG4gICAgICB0aGlyZEJveC53aWR0aCAvIDRcclxuICAgICk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKS5zY2FsZSA9XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKGltZ05hbWUpLnNjYWxlIC1cclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoaW1nTmFtZSkuc2NhbGUgKlxyXG4gICAgICAgIDAuMjtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoaW1nTmFtZSkpXHJcbiAgICAgICAgLmJlemllclRvKFxyXG4gICAgICAgICAgMSxcclxuICAgICAgICAgIGNjLnYyKHBvcy54IC8gMiwgcG9zLnkgKyAyMDApLFxyXG4gICAgICAgICAgY2MudjIoeFJhbmRvbSAvIDIsIHBvcy55ICsgMjAwKSxcclxuICAgICAgICAgIGNjLnYyKHhSYW5kb20sIHRoaXJkQm94LmhlaWdodCAvIDIgLSA1MClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKGltZ05hbWUpKVxyXG4gICAgICAgIC50bygwLjcsIHsgc2NhbGU6IDAuMyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvcnJlY3RBdWRpbyA6IFwiLCB0aGlzLmNvcnJlY3RBdWRpbylcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLCBmYWxzZSk7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYW5QbGF5ID0gdHJ1ZTtcclxuICAgICAgICBpZiAoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpXHJcbiAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJUb3RhbEFuc3dlcnMtLVwiICsgdGhpcy50b3RhbEFuc3dlcnMsXHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb24oKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSlcclxuICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgeTogMTUwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICBcImNvcnJlY3RBbnN3ZXJDb3VudC0tXCIgKyB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCxcclxuICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEFuc3dlcnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXkoKTtcclxuICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDAuNSk7XHJcbiAgICB9LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEpvY2tleSgpIHtcclxuICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zc2l0aXZlXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUyXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU1XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgICBcInBvc2l0aXZlXzZcIixcclxuICAgICAgICBcInBvc2l0aXZlXzdcIixcclxuICAgICAgICBcInBvc2l0aXZlXzhcIixcclxuICAgICAgICBcInBvc2l0aXZlXzlcIixcclxuICAgICAgICBcInBvc2l0aXZlXzEwXCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgICBcInBvc2l0aXZlXzZcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcbiAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcclxuICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xMjAwLCAxMjAwXTtcclxuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgLy90aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24ocG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgLTM1MCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiZcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IC0wLjY1O1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sXHJcbiAgICAgICAgLTM1MFxyXG4gICAgICApO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgLnRvKFxyXG4gICAgICAgICAgMC41LFxyXG4gICAgICAgICAgeyB4OiBqb2NrZXl0d2VlbltnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcclxuICAgICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuICAgICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICAgIDAuNSxcclxuICAgICAgICAgICAgICB7IHg6IHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcclxuICAgICAgICAgICAgICB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvL2JpcmQgZmx5aW5nIG91dCBzb3VuZFxyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpbnRyb19vdXRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50bGNfYmlyZEZseWluZywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG4gICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oXCJpbnRyb19vdXRcIikuZHVyYXRpb24pO1xyXG4gICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzFcIiB8fFxyXG4gICAgICAgIGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9sb29wXCIsIHRydWUpO1xyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzFcIikge1xyXG4gICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdXBlcmN1Yl9Qb3MxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8yXCIpIHtcclxuICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfUG9zMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwicnVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDIsIHsgeDogLTEwMDAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbik7XHJcbiAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIikuZHVyYXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDIsIHsgeDogLTEwMDAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGU6IGNjLk5vZGUsIF9ldmVudCkge1xyXG4gICAgX25vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmV5TWF0KTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy53cm9uZ0Fuc3dlckNvdW50ID49IDYpIHtcclxuICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMTtcclxuICAgIH1cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICBhbmltID0gW1xyXG4gICAgICAgICAgXCJuZWdldGl2ZVwiLFxyXG4gICAgICAgICAgXCJuZWdldGl2ZTJcIixcclxuICAgICAgICAgIFwibmVnZXRpdmUzXCIsXHJcbiAgICAgICAgICBcIm5lZ2V0aXZlNFwiLFxyXG4gICAgICAgICAgXCJuZWdldGl2ZTVcIixcclxuICAgICAgICAgIFwibmVnZXRpdmU2XCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcclxuICAgICAgICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV81XCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzZcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfN1wiLFxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgIC8vdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDEyMDAsIC0zNTApO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDEyMDAsIC0zNTApO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuICAgICAgICAgIC50bygwLjUsIHsgeDogNDAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG4gICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAxMjAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpXHJcbiAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKVxyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIiB8fFxyXG4gICAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vcGxheSBidWxiIGJyZWFrIGlmIG5lZWRlZFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VwZXJjdWJfTmVnMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdXBlcmN1Yl9OZWcyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIikuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSlcclxuICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMC43KTtcclxuXHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBfbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmRlZmF1bHRNYXQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lPcHRpb24oKSB7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBpKytcclxuICAgICkge1xyXG4gICAgICAvL2lmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0ubmFtZSAhPSB0aGlzLmFuc3dlckFycmF5WzBdKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcbiAgICAgIC8vfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG4gICAgICBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGxvYWRBdWRpb0NsaXAoXHJcbiAgICBhdWRpb05hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgT3B0aW9uc0xheW91dFZlcnRpY2FsKCkge1xyXG4gICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG4gICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcbiAgICBsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG4gICAgbGV0IG1heFdpZHRoID0gMDtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodCBhbmQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIG9wdGlvbnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgdG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICAgIG1heFdpZHRoID0gb3B0aW9uV2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gb3B0aW9uc0xheW91dC5oZWlnaHQ7XHJcbiAgICBsZXQgdG90YWxIZWlnaHRXaXRoUGFkZGluZyA9XHJcbiAgICAgIHRvdGFsSGVpZ2h0ICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlSGVpZ2h0IC8gdG90YWxIZWlnaHRXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgbGV0IGFjY3VtdWxhdGVkSGVpZ2h0ID0gMDtcclxuXHJcbiAgICAvLyBQb3NpdGlvbiBlYWNoIG9wdGlvbiBub2RlIHZlcnRpY2FsbHlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgIGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyBvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclk7XHJcbiAgICAgIG9wdGlvbi55ID0gcG9zWSAtIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZO1xyXG5cclxuICAgICAgYWNjdW11bGF0ZWRIZWlnaHQgKz0gb3B0aW9uLmhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHJcbiAgICAgIC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG4gICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uc0xheW91dC53aWR0aCA9IG1heFdpZHRoICogc2NhbGVGYWN0b3I7XHJcbiAgfVxyXG5cclxuICBPcHRpb25zTGF5b3V0R3JpZCgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJPcHRpb25zTGF5b3V0R3JpZFwiKTtcclxuICAgIGxldCBudW1Db2xzID0gMjtcclxuICAgIGxldCBudW1Sb3dzID0gMjtcclxuICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEyMDtcclxuXHJcbiAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbldpZHRoID0gMTUwOyAvLyBXaWR0aCBvZiBlYWNoIG9wdGlvblxyXG4gICAgY29uc3Qgb3B0aW9uSGVpZ2h0ID0gMTUwOyAvLyBIZWlnaHQgb2YgZWFjaCBvcHRpb25cclxuXHJcbiAgICAvLyBjb25zdCBncmlkV2lkdGggPSBvcHRpb25XaWR0aCAqIG51bUNvbHMgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgKiAobnVtQ29scyAtIDEpO1xyXG4gICAgLy8gY29uc3QgZ3JpZEhlaWdodCA9IG9wdGlvbkhlaWdodCAqIG51bVJvd3MgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgKiAobnVtUm93cyAtIDEpO1xyXG5cclxuICAgIGNvbnN0IGdyaWRXaWR0aCA9XHJcbiAgICAgIG9wdGlvbldpZHRoICogbnVtQ29scyArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyAqIChudW1Db2xzIC0gMSk7XHJcbiAgICBjb25zdCBncmlkSGVpZ2h0ID1cclxuICAgICAgb3B0aW9uSGVpZ2h0ICogbnVtUm93cyArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyAqIChudW1Sb3dzIC0gMSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZ3JpZFdpZHRoKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFJvdyA9IDA7XHJcbiAgICBsZXQgY3VycmVudENvbCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpLCBvcHRpb25Ob2Rlcy5jaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gZ3JpZCBsYXlvdXRcclxuICAgICAgbGV0IHBvc1ggPSBjdXJyZW50Q29sICogKG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zKTtcclxuICAgICAgbGV0IHBvc1kgPSBjdXJyZW50Um93ICogKG9wdGlvbkhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgcG9zaXRpb24gb2YgdGhlIG9wdGlvblxyXG4gICAgICBvcHRpb24uc2V0UG9zaXRpb24oY2MudjIocG9zWCAtIDEwMCwgcG9zWSAtIDEwMCkpO1xyXG4gICAgICAvL3RoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbi5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgIGN1cnJlbnRDb2wrKztcclxuICAgICAgaWYgKGN1cnJlbnRDb2wgPj0gbnVtQ29scykge1xyXG4gICAgICAgIGN1cnJlbnRDb2wgPSAwO1xyXG4gICAgICAgIGN1cnJlbnRSb3crKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgc2l6ZSBvZiB0aGUgb3B0aW9ucyBjb250YWluZXIgdG8gZml0IHRoZSBncmlkXHJcbiAgfVxyXG5cclxuICByZXZlcnNlT3B0aW9uc0xheW91dCgpIHtcclxuICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIG5ldyBwb3NpdGlvbnNcclxuICAgIGxldCBuZXdQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICBmb3IgKGxldCBpID0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgbmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgb3B0aW9uTm9kZXNbaV0ueSA9IG5ld1Bvc2l0aW9uc1tpXTtcclxuICAgICAgdGhpcy5wb3NpdGlvbkFycmF5LnB1c2goY2MudjIob3B0aW9uTm9kZXNbaV0ueCwgb3B0aW9uTm9kZXNbaV0ueSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMoYWN0aXZlQ29udGFpbmVyTmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICBsZXQgc291bmRCdG4gPSB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKTtcclxuICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG5cclxuICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShhY3RpdmVDb250YWluZXJOYW1lKVxyXG4gICAgICAuY2hpbGRyZW4uZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIG5vZGUuYWN0aXZlICYmXHJcbiAgICAgICAgICBub2RlLm9wYWNpdHkgPiAwICYmXHJcbiAgICAgICAgICAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIoXHJcbiAgICAgIChuKSA9PiAhIW5cclxuICAgICk7XHJcblxyXG4gICAgLy8gcGljayBhIHNlbnNpYmxlIGRlZmF1bHQg4oCUIGUuZy4gZmlyc3Qgb3B0aW9uLCBvciBjb3JyZWN0IGFuc3dlciBpbmRleFxyXG5cclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==

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
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.popSound = [];
        _this.questionSound = [];
        _this.positiveSound = [];
        _this.negativeSound = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = null;
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
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
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio = audioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node
                        .getChildByName("QuestionBox")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (AudioClip) {
                _this.correctAudio = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("QuestionBox")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            var _loop_2 = function (i) {
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
                _loop_2(i);
            }
        }
        //startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.answerArray = [
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAnswerNum,
        ];
        this.callThirdObjectIn();
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
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    NewClass.prototype.setupTVFocus2 = function () {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [backBtn, musicBtn].filter(function (n) { return !!n; });
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            TVInputManager_1.default.Instance.init(nodes, 1);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.GenerateOptions = function () {
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .numberOfOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        this.node.getChildByName("template").destroy();
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        // this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();
        var posX = -237;
        if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            posX = -300;
        }
        this.scheduleOnce(function () {
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("QuestionBox"))
                    .to(1, { scale: 1 }, { easing: "sineInOut" })
                    .start();
            }, 0.1);
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("QuestionBox"))
                    .to(0.5, { x: posX }, { easing: "sineInOut" })
                    .start();
                _this.callOptionIn();
            }, 1);
        }, 1);
    };
    NewClass.prototype.OnVOButton = function (_event) {
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
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("Option").setPosition(150, -70);
        }
        var _loop_3 = function (i) {
            this_3.node.getChildByName("Option").children[i - 1].scale = 0;
            this_3.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_3.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                        _this.canTouch = true;
                        if (TVInputManager_1.default.Instance) {
                            TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
                        }
                        _this.setupTVFocus("Option");
                    }, 1);
                }
            }, delay);
            delay += 0.5;
        };
        var this_3 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            _loop_3(i);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                var hand = this.node.getChildByName("hand");
                console.log("answer array num = ", this.answerArray[0]);
                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                hand.setPosition(50, -50);
                hand.angle = 30;
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
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        var hand = _this.node.getChildByName("hand");
                        console.log("answer array num = ", _this.answerArray[0]);
                        hand.setParent(_this.node
                            .getChildByName("Option")
                            .getChildByName(_this.answerArray[0]));
                        hand.setPosition(50, -50);
                        hand.angle = 30;
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
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                var hand = _this.node.getChildByName("hand");
                                console.log("answer array num = ", _this.answerArray[0]);
                                hand.setParent(_this.node
                                    .getChildByName("Option")
                                    .getChildByName(_this.answerArray[0]));
                                hand.setPosition(50, -50);
                                hand.angle = 30;
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
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        var _node = _event.target;
        if (_node.name == this.answerArray[0]) {
            this.setupTVFocus2();
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = false;
            this.destroyOption();
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.scheduleOnce(function () {
                _this.callPositiveRection(_node);
            }, 0.3);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    };
    NewClass.prototype.callNextLevel = function () {
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
    NewClass.prototype.setAnswerArray = function () {
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 2) {
            this.answerArray = ["2"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 3) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 4) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 5) {
            this.answerArray = ["2"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 6) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 7) {
            this.answerArray = ["2"];
        }
    };
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAudio, false);
        var qBox = this.node.getChildByName("QuestionBox");
        var worldPos = qBox.parent.convertToWorldSpaceAR(qBox.getPosition());
        var localPos = _node.parent.convertToNodeSpaceAR(worldPos);
        cc.tween(_node)
            .to(0.5, { width: qBox.width, height: qBox.height, y: localPos.y }, { easing: "sineInOut" })
            .start();
        var inner = _node.children[0];
        cc.tween(inner)
            .to(0.5, { width: qBox.width * 0.8, height: qBox.height * 0.8, scale: 1 }, { easing: "sineInOut" })
            .start();
        this.scheduleOnce(function () {
            var confetti = _this.node.getChildByName("confetti");
            var confettiPos = _this.node.convertToNodeSpaceAR(_node.parent.convertToWorldSpaceAR(_node.getPosition()));
            confetti.setPosition(confettiPos);
            confetti.getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(_this.positiveSound[0], false);
            _this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                _this.scheduleOnce(function () {
                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                    _this.scheduleOnce(function () {
                        _this.callJockey();
                    }, 1);
                }, 1.5);
            }, 0.7);
        }, 0.5);
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
                "positive_4",
                "positive_5",
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
        var jockeytween = [-350, 350];
        //console.log("characterAppear--Podar_Jumbo");
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
            if (StartGame_1.default.Instance.jockeyName != "Podar") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
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
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idel", true);
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
        _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
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
                    "negative_3",
                    "negative_4",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                    "negative_4",
                    "negative_5",
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
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                if (StartGame_1.default.Instance.jockeyName != "Podar") {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idel", true);
                }
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: 350 }, { easing: "quartInOut" })
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
                            if (StartGame_1.default.Instance.jockeyName != "Podar") {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }
                            else {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idel", true);
                            }
                        }
                        _this.canTouch = true;
                        TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
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
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, anim[currentClipNum] + "_end", false);
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
            _node.children[0]
                .getComponent(cc.Sprite)
                .setMaterial(0, _this.defaultMat);
        })
            .start();
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
        }
    };
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
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
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
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QscURBQWdEO0FBQ2hELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlwQ0M7UUF2cENTLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFtQixFQUFFLENBQUM7UUFFOUIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUczQyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFFcEIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENB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QUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ007SUE5QlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlwQzVCO0lBQUQsZUFBQztDQXpwQ0QsQUF5cENDLENBenBDcUMsRUFBRSxDQUFDLFNBQVMsR0F5cENqRDtrQkF6cENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc2Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgVFZJbnB1dE1hbmFnZXIgZnJvbSBcIi4vVFZJbnB1dE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvcFNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG4gIGRlZmF1bHRNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG4gIGdyZXlNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpc0ZpcnN0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhbnN3ZXJBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIG1heExldmVsOiBudW1iZXIgPSA3O1xyXG4gIHdyb25nQW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgc3RhcjFMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyMkxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0YXIzTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY3VycmVudEpjb2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25zTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcXVlc3Rpb25Cb3hQb3NZOiBudW1iZXIgPSAwO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uc05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIik7XHJcbiAgICB0aGlzLkdlbmVyYXRlT3B0aW9ucygpO1xyXG4gICAgdGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscztcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IFwiXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5jb21tb25PcHRpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICBpIDxcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgICBdLm51bWJlck9mT3B0aW9ucztcclxuICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3B0aW9uIGltZyA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiB0ZXh0ID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgIGkgPFxyXG4gICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICAgIF0ubnVtYmVyT2ZPcHRpb25zO1xyXG4gICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLnF1ZXN0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGkgPFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAubnVtYmVyT2ZPcHRpb25zO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uaXNPcHRpb25UZXh0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXHJcbiAgICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9zdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9IFwiUG9kYXJcIjtcclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkuZ2V0Q2hpbGRCeU5hbWUoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICApO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAuY29ycmVjdEFuc3dlck51bSxcclxuICAgIF07XHJcbiAgICB0aGlzLmNhbGxUaGlyZE9iamVjdEluKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpO1xyXG4gICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICBsZXQgb3B0aW9uQnV0dG9ucyA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoYWN0aXZlQ29udGFpbmVyTmFtZSlcclxuICAgICAgLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBub2RlLmFjdGl2ZSAmJlxyXG4gICAgICAgICAgbm9kZS5vcGFjaXR5ID4gMCAmJlxyXG4gICAgICAgICAgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIoXHJcbiAgICAgIChuKSA9PiAhIW5cclxuICAgICk7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMsIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4gICAgfVxyXG4gICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMyKCkge1xyXG4gICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICBsZXQgbXVzaWNCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG5dLmZpbHRlcigobikgPT4gISFuKTtcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICB9XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgfVxyXG5cclxuICBHZW5lcmF0ZU9wdGlvbnMoKSB7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgIGkrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcbiAgICAgIG9wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICBvcHRpb24uc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKSk7XHJcbiAgICAgIG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNhbGxUaGlyZE9iamVjdEluKCkge1xyXG4gICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuXHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgXS5xdWVzdGlvblRleHQ7XHJcblxyXG4gICAgdGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwoKTtcclxuICAgIHRoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQoKTtcclxuICAgIGxldCBwb3NYID0gLTIzNztcclxuICAgIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCJcclxuICAgICkge1xyXG4gICAgICBwb3NYID0gLTMwMDtcclxuICAgIH1cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpKVxyXG4gICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9LCAwLjEpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHg6IHBvc1ggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBPblZPQnV0dG9uKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJPcHRpb25cIik7XHJcbiAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbE9wdGlvbkluKCkge1xyXG4gICAgbGV0IGRlbGF5OiBudW1iZXIgPSAwLjU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLnNldFBvc2l0aW9uKDE1MCwgLTcwKTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gMTtcclxuICAgICAgaSA8PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBpKytcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLnNjYWxlID0gMDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2kgLSAxXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgY2MudHdlZW4oXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoaS50b1N0cmluZygpKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIGlmIChpID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwiT3B0aW9uXCIpO1xyXG4gICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICAgIGRlbGF5ICs9IDAuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgdGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW9cclxuICAgICAgKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyIGFycmF5IG51bSA9IFwiLCB0aGlzLmFuc3dlckFycmF5WzBdKTtcclxuICAgICAgICBoYW5kLnNldFBhcmVudChcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGFuZC5zZXRQb3NpdGlvbig1MCwgLTUwKTtcclxuICAgICAgICBoYW5kLmFuZ2xlID0gMzA7XHJcbiAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBpbnRvQW5pbSA9IFwiaW50cm9cIjtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDQ1MCwgLTM3MCk7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpbnRvQW5pbSA9IFwiaW50cm9fMVwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig4NzAsIC0zNzApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBpbnRvQW5pbSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXIgYXJyYXkgbnVtID0gXCIsIHRoaXMuYW5zd2VyQXJyYXlbMF0pO1xyXG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudChcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oNTAsIC01MCk7XHJcbiAgICAgICAgICAgIGhhbmQuYW5nbGUgPSAzMDtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fZW5kXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyIGFycmF5IG51bSA9IFwiLCB0aGlzLmFuc3dlckFycmF5WzBdKTtcclxuICAgICAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50KFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJBcnJheVswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDUwLCAtNTApO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5hbmdsZSA9IDMwO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPbkJ1dHRvbkNsaWNrKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IF9ub2RlID0gX2V2ZW50LnRhcmdldDtcclxuICAgIGlmIChfbm9kZS5uYW1lID09IHRoaXMuYW5zd2VyQXJyYXlbMF0pIHtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMyKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZXN0cm95T3B0aW9uKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlKTtcclxuICAgICAgfSwgMC4zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGUsIF9ldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsTmV4dExldmVsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgdGhpcy5jYWxsU3RhcnNFYXJlZCgpO1xyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICB9LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsU3RhcnNFYXJlZCgpIHtcclxuICAgIGlmICghdGhpcy5zdGFyMUxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgdGhpcy5zdGFyMUxvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhcjJMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XHJcbiAgICAgIHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zdGFyM0xvZyAmJlxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWxcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXIzTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFuc3dlckFycmF5KCkge1xyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMVwiXTtcclxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAyKSB7XHJcbiAgICAgIHRoaXMuYW5zd2VyQXJyYXkgPSBbXCIyXCJdO1xyXG4gICAgfSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuICAgICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcIjFcIl07XHJcbiAgICB9IGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMVwiXTtcclxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgIHRoaXMuYW5zd2VyQXJyYXkgPSBbXCIyXCJdO1xyXG4gICAgfSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDYpIHtcclxuICAgICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcIjFcIl07XHJcbiAgICB9IGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNykge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMlwiXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxQb3NpdGl2ZVJlY3Rpb24oX25vZGU6IGNjLk5vZGUpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW8sIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBxQm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIik7XHJcblxyXG4gICAgY29uc3Qgd29ybGRQb3MgPSBxQm94LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocUJveC5nZXRQb3NpdGlvbigpKTtcclxuICAgIGNvbnN0IGxvY2FsUG9zID0gX25vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuNSxcclxuICAgICAgICB7IHdpZHRoOiBxQm94LndpZHRoLCBoZWlnaHQ6IHFCb3guaGVpZ2h0LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG4gICAgICApXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGNvbnN0IGlubmVyID0gX25vZGUuY2hpbGRyZW5bMF07XHJcbiAgICBjYy50d2Vlbihpbm5lcilcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuNSxcclxuICAgICAgICB7IHdpZHRoOiBxQm94LndpZHRoICogMC44LCBoZWlnaHQ6IHFCb3guaGVpZ2h0ICogMC44LCBzY2FsZTogMSB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZldHRpID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIik7XHJcbiAgICAgIGNvbnN0IGNvbmZldHRpUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgIF9ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoX25vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgKTtcclxuICAgICAgY29uZmV0dGkuc2V0UG9zaXRpb24oY29uZmV0dGlQb3MpO1xyXG4gICAgICBjb25mZXR0aS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9LCAxLjUpO1xyXG4gICAgICB9LCAwLjcpO1xyXG4gICAgfSwgMC41KTtcclxuICB9XHJcblxyXG4gIGNhbGxKb2NrZXkoKSB7XHJcbiAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc3NpdGl2ZVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlMlwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlM1wiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNFwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV83XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV84XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV85XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xMFwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG4gICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG4gICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XHJcbiAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy0zNTAsIDM1MF07XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgIGlmIChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJlxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbihcclxuICAgICAgICBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLFxyXG4gICAgICAgIC0zNTBcclxuICAgICAgKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG4gICAgICAgIC50byhcclxuICAgICAgICAgIDAuNSxcclxuICAgICAgICAgIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgICB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgICAgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgICAgICAgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fb3V0XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fb3V0XCIpLmR1cmF0aW9uKTtcclxuICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIgfHxcclxuICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIlxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIikuZHVyYXRpb24pO1xyXG4gICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIpLmR1cmF0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgIHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG4gICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQpIHtcclxuICAgIF9ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSA2KSB7XHJcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcclxuICAgICAgICAgIFwibmVnZXRpdmVcIixcclxuICAgICAgICAgIFwibmVnZXRpdmUyXCIsXHJcbiAgICAgICAgICBcIm5lZ2V0aXZlM1wiLFxyXG4gICAgICAgICAgXCJuZWdldGl2ZTRcIixcclxuICAgICAgICAgIFwibmVnZXRpdmU1XCIsXHJcbiAgICAgICAgICBcIm5lZ2V0aXZlNlwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzRcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfNVwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzVcIixcclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5vXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJ0cnlfYWdhaW5cIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbigxMjAwLCAtMzUwKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHg6IDM1MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG4gICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMTIwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIiB8fFxyXG4gICAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vcGxheSBidWxiIGJyZWFrIGlmIG5lZWRlZFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIikuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMC43KTtcclxuXHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBfbm9kZS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAuc2V0TWF0ZXJpYWwoMCwgdGhpcy5kZWZhdWx0TWF0KTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95T3B0aW9uKCkge1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgaSsrXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5uYW1lICE9XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJBcnJheVswXVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkU3ByaXRlRnJhbWUoXHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcbiAgICAgIGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcbiAgICAgIGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBPcHRpb25zTGF5b3V0VmVydGljYWwoKSB7XHJcbiAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMub3B0aW9uc05vZGU7XHJcbiAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XHJcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICB0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25XaWR0aCA+IG1heFdpZHRoKSB7XHJcbiAgICAgICAgbWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdmFpbGFibGVIZWlnaHQgPSBvcHRpb25zTGF5b3V0LmhlaWdodDtcclxuICAgIGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID1cclxuICAgICAgdG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICBsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xyXG5cclxuICAgIC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG4gICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cclxuICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuICAgICAgbGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIG9wdGlvbi5oZWlnaHQgKiBvcHRpb24uYW5jaG9yWTtcclxuICAgICAgb3B0aW9uLnkgPSBwb3NZIC0gb3B0aW9uc0xheW91dC5oZWlnaHQgKiBvcHRpb25zTGF5b3V0LmFuY2hvclk7XHJcblxyXG4gICAgICBhY2N1bXVsYXRlZEhlaWdodCArPSBvcHRpb24uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcbiAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuICB9XHJcblxyXG4gIHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG4gICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgdG8gaG9sZCB0aGUgbmV3IHBvc2l0aW9uc1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zIGluIHJldmVyc2Ugb3JkZXJcclxuICAgIGZvciAobGV0IGkgPSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBuZXdQb3NpdGlvbnMucHVzaChvcHRpb25Ob2Rlc1tpXS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3B0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBvcHRpb25Ob2Rlc1tpXS55ID0gbmV3UG9zaXRpb25zW2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=

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
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.TotalOptions =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions;
        //if (startGame.Instance.optionLayout == "horizontal") {
        //let optionsLayoutNode = cc.instantiate(this.HorizntalOptionNode);
        // optionsLayoutNode.setParent(this.node);
        // optionsLayoutNode.name = "Option"
        // optionsLayoutNode.setSiblingIndex(5);
        // optionsLayoutNode.setPosition(cc.v2(0, 0));
        //}
        // else if (startGame.Instance.optionLayout == "vertical") {
        //     let optionsLayoutNode = cc.instantiate(this.VerticalOptionNode);
        //     optionsLayoutNode.setParent(this.node);
        //     optionsLayoutNode.name = "Option"
        //     optionsLayoutNode.setSiblingIndex(5);
        // }
        this.optionsNode = this.node.getChildByName("Option");
        //console.log("optionsNode--" + this.optionsNode);
        this.node.getChildByName("QuestionBox").zIndex = 1;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionBG) {
            this.isOptionBG = true;
        }
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answerArray[i] =
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
        }
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            if (StartGame_1.default.Instance.templateType != "SimpleTap") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (err, texture) {
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
            }
            // for (let i = 0; i < this.TotalOptions; i++) {
            //     if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
            //         cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
            //             if (err) {
            //                 console.error("Failed to load image:", err);
            //                 return;
            //             }
            //             const spriteFrame = new cc.SpriteFrame(texture);
            //             this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //         });
            //     }
            // }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
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
                            .getChildByName("bg")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
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
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
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
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
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
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            if (StartGame_1.default.Instance.templateType != "SimpleTap") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("QuestionBox")
                        .getChildByName("ThirdObject")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
            //         this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
            //             this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //         });
            //     }
            // }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("bg")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
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
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                this_3.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (AudioClip) {
                    _this.correctAudio[i] = AudioClip;
                });
            };
            var this_3 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_4(i);
            }
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        // this.currentJcokey.active = true;
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        // this.OptionsLayout();
        //console.log("AnswerArray = ", this.answerArray);
        this.totalAnswers =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length;
        this.callQuestionBar();
        if (StartGame_1.default.Instance.templateType == "SimpleTap") {
            this.setOptionsLayout("horizontal");
            this.callOptionIn();
        }
        else if (StartGame_1.default.Instance.templateType == "TapToCollect") {
            this.setOptionsLayout("grid");
            this.callThirdObjectIn();
        }
        else if (StartGame_1.default.Instance.templateType == "ObjectsTweenIn") {
            this.setOptionsLayout("horizontal");
            this.callThirdObjectIn();
        }
        if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
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
        //console.log("Total Options : ", this.TotalOptions)
        for (var i = 0; i < this.TotalOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
            //console.log("isOptionBG--" + this.isOptionBG);
            if (this.isOptionBG) {
                option.getChildByName("bg").active = true;
            }
            else {
                option.getChildByName("bg").active = false;
            }
            this.isDone[i] = false;
        }
        this.node.getChildByName("template").destroy();
        //console.log("isDone : ", this.isDone);
    };
    NewClass.prototype.callQuestionBar = function () {
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
    };
    NewClass.prototype.setOptionsLayout = function (type) {
        if (type == "horizontal") {
            this.OptionsLayoutHorizontal();
        }
        else if (type == "vertical") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
        }
        else if (type == "grid") {
            this.arrangeGridChildren();
            //this.reverseOptionsLayout();
        }
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        //console.log("thirdObjectAppear--" + startGame.Instance.thirdObjectType);
        if (StartGame_1.default.Instance.templateType == "TapToCollect") {
            this.node
                .getChildByName("QuestionBox")
                .setPosition(cc.v2(-300, -200));
            this.node
                .getChildByName("QuestionBox1")
                .setPosition(cc.v2(-300, -200));
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                    cc.tween(_this.node.getChildByName("QuestionBox"))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                        .start();
                }, 0.1);
                _this.scheduleOnce(function () {
                    _this.callOptionIn();
                }, 0.5);
            }, 1);
        }
        else if (StartGame_1.default.Instance.templateType == "ObjectsTweenIn") {
            this.optionsNode.y = this.optionsNode.y + 100;
            this.node
                .getChildByName("QuestionBox")
                .setPosition(cc.v2(1500, -250));
            this.node.getChildByName("QuestionBox").scale = 1;
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.tween(_this.node.getChildByName("QuestionBox"))
                        .to(0.5, { x: 0 }, { easing: "sineInOut" })
                        .start();
                    _this.callOptionOutFromObject();
                }, 1);
            }, 1);
        }
    };
    NewClass.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        if (StartGame_1.default.Instance.jockeyName == "supercub" ||
            StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("Option")
                .setPosition(this.node.getChildByName("Option").x - 80, this.node.getChildByName("Option").y);
        }
        var _loop_5 = function (i) {
            this_4.node.getChildByName("Option").children[i - 1].scale = 0;
            this_4.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_4.scheduleOnce(function () {
                var objScale = 0;
                cc.audioEngine.playEffect(_this.popSound[0], false);
                if (StartGame_1.default.Instance.templateType == "SimpleTap") {
                    objScale = 1;
                }
                else if (StartGame_1.default.Instance.templateType == "TapToCollect") {
                    objScale = 0.5;
                }
                else {
                    objScale = 0.7;
                }
                //console.log("isOptionBg");
                if (!_this.isOptionBG) {
                    _this.node
                        .getChildByName("Option")
                        .children.forEach(function (element) {
                        element.getChildByName("img").scale = 1.4;
                    });
                }
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" })
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_4 = this;
        for (var i = 1; i <= this.optionsNode.children.length; i++) {
            _loop_5(i);
        }
        // this.scheduleOnce(() => {
        //     console.log("ABCD.............", this.node.getChildByName("Option").children[0].scale, this.node.getChildByName("Option").children[0].getChildByName("bg").scale, this.node.getChildByName("Option").children[0].getChildByName("img").scale)
        // }, 3);
    };
    NewClass.prototype.callOptionOutFromObject = function () {
        var _this = this;
        // console.log("callOptionOutFromObject--", this.positionArray);
        // for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
        //     console.log("name of: " + i + " th children is: " + this.node.getChildByName("Option").children[i].name);
        // }
        var delay = 0.5;
        var _loop_6 = function (i) {
            // console.log("New i", i, this.positionArray.length);
            this_5.node.getChildByName("Option").children[i - 1].scale = 0;
            this_5.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_5.node
                .getChildByName("Option")
                .children[i - 1].setPosition(0 - 100, this_5.node.getChildByName("QuestionBox").getPosition().y -
                100);
            this_5.scheduleOnce(function () {
                var objScale = 0;
                cc.audioEngine.playEffect(_this.popSound[0], false);
                objScale = 0.7;
                if (!_this.isOptionBG) {
                    _this.node
                        .getChildByName("Option")
                        .children.forEach(function (element) {
                        element.getChildByName("img").scale = 1.4;
                    });
                }
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" })
                    .start();
                var pos = _this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString())
                    .getPosition();
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .bezierTo(1, cc.v2(pos.x, pos.y + 200), cc.v2(_this.positionArray[i - 1].x / 1.5, pos.y + 400), cc.v2(_this.positionArray[i - 1].x, _this.positionArray[i - 1].y))
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_5 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            _loop_6(i);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canTouch = false;
        //console.log("Jockey coming");
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                //console.log("answerArray : ", this.answerArray[0])
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
        //console.log("canTouch--" + this.canTouch)
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
            //console.log("this.answerArray[i]--" + this.answerArray[0], _node.name);
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[parseInt(_node.name) - 1] = true;
                //console.log("iscorrect--");
                break;
            }
        }
        if (iscorrect) {
            this.canTouch = false;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            //this.destroyOption();
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
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
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
        //console.log("correctAudio--" + this.correctAudio.name);
        cc.audioEngine.playEffect(this.correctAudio[parseInt(_node.name) - 1], false);
        // cc.tween(_node).to(0.5, { scale: 1.5, x: 0, y: 0 }, { easing: "sineInOut" }).start();
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
            _this.node
                .getChildByName("confetti")
                .getComponent(cc.Animation)
                .play();
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
    NewClass.prototype.callPositiveFeedback = function (_node) {
        var _this = this;
        var voIndex = this.answerArray.indexOf(_node.name);
        switch (StartGame_1.default.Instance.templateType) {
            case "SimpleTap":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(function () {
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        _this.canTouch = true;
                        _this.correctAnswerCount++;
                        if (_this.correctAnswerCount == _this.totalAnswers) {
                            for (var i = 0; i <
                                _this.node.getChildByName("Option").children
                                    .length; i++) {
                                if (_this.isDone[i] == false) {
                                    _this.node
                                        .getChildByName("Option")
                                        .children[i].destroy();
                                }
                            }
                            _this.scheduleOnce(function () {
                                _this.node
                                    .getChildByName("Option")
                                    .children.forEach(function (elem) {
                                    elem.getChildByName("img").color =
                                        cc.Color.WHITE;
                                });
                                _this.isLastTween = true;
                                _this.OptionsLayoutHorizontal();
                                _this.canTouch = false;
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
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "TapToCollect":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                this.scheduleOnce(function () {
                    _this.node.getChildByName("QuestionBox1").zIndex = 1;
                    _this.node.getChildByName("QuestionBox").zIndex = 1;
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        var imgScale = _node.getChildByName("img").scale / 2;
                        //console.log("Scale : ", imgScale);
                        var imgName = _node.getChildByName("img").name +
                            _this.correctAnswerCount +
                            1;
                        _node.getChildByName("img").name = imgName;
                        _node
                            .getChildByName(imgName)
                            .setParentWithSamePos(_this.node.getChildByName("QuestionBox1"));
                        var pos = _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName)
                            .getPosition();
                        var thirdBox = _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName("ThirdObject");
                        var xRandom = _this.getRandomNumber(-thirdBox.width / 4, thirdBox.width / 4);
                        _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName).scale = imgScale;
                        //cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(xRandom, thirdBox.height / 2 - 50)).start();
                        //cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).delay(0.5).to(0.7, { scale: 0 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName))
                            .bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(xRandom / 2, pos.y + 200), cc.v2(xRandom, thirdBox.height / 2 - 50))
                            .start();
                        cc.tween(_this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName))
                            .delay(0.5)
                            .to(0.7, { scale: imgScale * 0.5 }, { easing: "sineInOut" })
                            .start();
                        _this.scheduleOnce(function () {
                            _node.destroy();
                            _this.canTouch = true;
                            _this.correctAnswerCount++;
                            if (_this.correctAnswerCount == _this.totalAnswers) {
                                _this.canTouch = false;
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
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }
                        }, 0.5);
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "ObjectsTweenIn":
                //console.log("answer arrray index : ", this.answerArray.indexOf(_node.name));
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(function () {
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y + 100);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        //_node.destroy();
                        _this.canTouch = true;
                        _this.correctAnswerCount++;
                        if (_this.correctAnswerCount == _this.totalAnswers) {
                            for (var i = 0; i <
                                _this.node.getChildByName("Option").children
                                    .length; i++) {
                                if (_this.isDone[i] == false) {
                                    _this.node
                                        .getChildByName("Option")
                                        .children[i].destroy();
                                }
                            }
                            _this.canTouch = false;
                            _this.scheduleOnce(function () {
                                _this.node
                                    .getChildByName("Option")
                                    .children.forEach(function (elem) {
                                    elem.getChildByName("img").color =
                                        cc.Color.WHITE;
                                });
                                _this.isLastTween = true;
                                _this.OptionsLayoutHorizontal();
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
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            default:
                break;
        }
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
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
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
        else if (StartGame_1.default.Instance.jockeyName == "boy") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
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
                .to(0.5, {
                x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2],
            }, { easing: "quartInOut" })
                .start();
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, {
                        x: pos[globalVariables_1.default.Instance.currentLevel % 2],
                    }, { easing: "quartInOut" })
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
                            cc.tween(_this.currentJcokey)
                                .to(2, { x: -1000 })
                                .start();
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
        this.canTouch = false;
        //_node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
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
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag" ||
                StartGame_1.default.Instance.jockeyName == "penguin" ||
                StartGame_1.default.Instance.jockeyName == "tortoise" ||
                StartGame_1.default.Instance.jockeyName == "muskaan" ||
                StartGame_1.default.Instance.jockeyName == "corny") {
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
            else if (StartGame_1.default.Instance.jockeyName == "boy") {
                anim = [
                    "negative_1",
                    "negative_2",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                ];
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
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
        }, 0.7);
        if (this.isOptionBG) {
            _node.getChildByName("bg").color = cc.Color.RED;
        }
        else {
            _node.getChildByName("img").color = cc.Color.RED;
        }
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10, opacity: 180 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10, opacity: 255 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x, opacity: 255 }, { easing: "sineInOut" })
            .call(function () {
            _node.children[0]
                .getComponent(cc.Sprite)
                .setMaterial(0, _this.defaultMat);
            _node.getChildByName("img").color = cc.Color.WHITE;
            _node.getChildByName("bg").color = cc.Color.WHITE;
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
    NewClass.prototype.OptionsLayoutHorizontal = function () {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        // console.log("optionNodes--" + optionNodes.length, optionsLayout.width);
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
            if (optionNodes.length == 2 &&
                StartGame_1.default.Instance.templateType == "ObjectsTweenIn" &&
                !this.isLastTween) {
                optionScaleFactor = optionScaleFactor * 0.7;
            }
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + option.width * option.anchorX;
            if (!this.isLastTween) {
                option.x = posX - optionsLayout.width * optionsLayout.anchorX;
            }
            else {
                var optionX = posX - optionsLayout.width * optionsLayout.anchorX;
                cc.tween(option)
                    .to(0.5, { x: optionX }, { easing: "sineInOut" })
                    .start();
            }
            accumulatedWidth += option.width + paddingBetweenOptions;
            this.positionArray.push(option.getPosition());
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
                //console.log("subChild--", subChild.name);
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
        if (optionNodes.length == 2) {
            if (!this.isLastTween) {
                var distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                optionNodes[0].x = 0 - distanceBetweenOptions / 2;
                optionNodes[1].x = 0 + distanceBetweenOptions / 2;
                optionNodes[0].y = optionNodes[0].y - 50;
                optionNodes[1].y = optionNodes[1].y - 50;
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }
            else {
                var distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                var optionX0 = 0 - distanceBetweenOptions / 2;
                var optionX1 = 0 + distanceBetweenOptions / 2;
                cc.tween(optionNodes[0])
                    .to(0.5, { x: optionX0 }, { easing: "sineInOut" })
                    .start();
                cc.tween(optionNodes[1])
                    .to(0.5, { x: optionX1 }, { easing: "sineInOut" })
                    .start();
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }
        }
        else if (optionNodes.length == 1) {
            if (!this.isLastTween) {
                optionNodes[0].x = 0;
            }
            else {
                cc.tween(optionNodes[0])
                    .to(0.5, { x: 0 }, { easing: "sineInOut" })
                    .start();
            }
        }
        // console.log("positionArray--", this.positionArray);
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
            this.positionArray.push(option.getPosition());
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
    NewClass.prototype.arrangeGridChildren = function () {
        var children = this.optionsNode.children;
        var maxColumns = 2;
        var _optionCount = this.totalAnswers;
        var spacing = -200;
        if (_optionCount == 4) {
            maxColumns = 2;
        }
        var totalRows = Math.ceil(children.length / maxColumns);
        var rowHeight = 0;
        if (children.length > 0) {
            rowHeight = children[0].height + spacing; // Assuming all children have the same height
        }
        var startY = ((totalRows - 1) * rowHeight) / 2;
        for (var i = 0; i < children.length; i++) {
            var column = i % maxColumns;
            var row = Math.floor(i / maxColumns);
            var totalWidth = 0;
            // Calculate the total width of the current row
            for (var j = 0; j < maxColumns && row * maxColumns + j < children.length; j++) {
                totalWidth += children[row * maxColumns + j].width;
            }
            totalWidth +=
                spacing *
                    (Math.min(children.length - row * maxColumns, maxColumns) - 1);
            var startX = -totalWidth / 2;
            var child = children[i];
            child.x =
                200 +
                    startX +
                    column * (child.width + spacing) +
                    child.width / 2;
            child.y = startY - row * rowHeight;
            if (this.TotalOptions == 2) {
                child.y = child.y - 30;
            }
            else {
                child.y = child.y - 70;
            }
        }
    };
    NewClass.prototype.OptionsLayoutGrid = function () {
        //console.log("OptionsLayoutGrid");
        var numCols;
        var numRows;
        if (this.TotalOptions == 2) {
            numCols = 2;
            numRows = 1;
        }
        else if (this.TotalOptions == 3) {
            numCols = 2;
            numRows = 2;
        }
        else if (this.TotalOptions == 4) {
            numCols = 2;
            numRows = 2;
        }
        var paddingBetweenOptions = 120;
        var optionNodes = this.optionsNode;
        var optionWidth = 150; // Width of each option
        var optionHeight = 150; // Height of each option
        var gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        var gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);
        var currentRow = 0;
        var currentCol = 0;
        for (var i = 0; i < optionNodes.children.length; i++) {
            var option = this.optionsNode.children[i];
            //console.log(i, optionNodes.children.length);
            // Calculate position based on grid layout
            var posX = currentCol * (optionWidth + paddingBetweenOptions);
            var posY = currentRow * (optionHeight + paddingBetweenOptions);
            // Update position of the option
            if (this.TotalOptions == 2) {
                option.setPosition(cc.v2(posX + 50, posY));
            }
            else if (this.TotalOptions == 3) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }
            else if (this.TotalOptions == 4) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }
            this.positionArray.push(option.getPosition());
            currentCol++;
            if (currentCol >= numCols) {
                currentCol = 0;
                currentRow++;
            }
            if (this.TotalOptions == 3 && i == 2) {
                option.setPosition(cc.v2(2 * (posX + 100), posY - 180));
            }
        }
        // Set the size of the options container to fit the grid
        this.optionsNode.width = gridWidth;
        this.optionsNode.height = gridHeight;
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
    NewClass.prototype.update = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2OURDO1FBMzlEQSx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFFdEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFHcEMsbUJBQWEsR0FBaUIsSUFBSSxD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QUMsU0FBUyxDQUFDOzhDQUNlO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ2dCO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRTlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ3FCO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDTTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBckZsQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNjlENUI7SUFBRCxlQUFDO0NBNzlERCxBQTY5REMsQ0E3OURxQyxFQUFFLENBQUMsU0FBUyxHQTY5RGpEO2tCQTc5RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9ja2V5IGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvSm9ja2V5cy9TY3JpcHRzL0pvY2tleVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcblx0SG9yaXpudGFsT3B0aW9uTm9kZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLlByZWZhYilcclxuXHRWZXJ0aWNhbE9wdGlvbk5vZGU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuXHRwcml2YXRlIGV4dHJhSW1nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHBvcFNvdW5kMjogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgbmVnYXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHN0YWxsaW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjX2JpcmRGbHlpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9Qb3MxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9Qb3MyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9OZWcxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9OZWcyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXHJcblx0ZGVmYXVsdE1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXHJcblx0Z3JleU1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBjYW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgYW5zd2VyQXJyYXk6IHN0cmluZ1tdID0gW107XHJcblx0cHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuXHR3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcblx0c3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGN1cnJlbnRKY29rZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdHByaXZhdGUgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcclxuXHJcblx0dG90YWxBbnN3ZXJzOiBudW1iZXIgPSAwO1xyXG5cdGNvcnJlY3RBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuXHRpc09wdGlvbkJHOiBib29sZWFuID0gZmFsc2U7XHJcblx0VG90YWxPcHRpb25zOiBudW1iZXIgPSAwO1xyXG5cdHBvc2l0aW9uQXJyYXk6IGNjLlZlYzJbXSA9IFtdO1xyXG5cdGlzRG9uZTogYm9vbGVhbltdID0gW107XHJcblx0aXNMYXN0VHdlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuVG90YWxPcHRpb25zID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHJcblx0XHQvL2lmIChzdGFydEdhbWUuSW5zdGFuY2Uub3B0aW9uTGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHQvL2xldCBvcHRpb25zTGF5b3V0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuSG9yaXpudGFsT3B0aW9uTm9kZSk7XHJcblx0XHQvLyBvcHRpb25zTGF5b3V0Tm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuXHRcdC8vIG9wdGlvbnNMYXlvdXROb2RlLm5hbWUgPSBcIk9wdGlvblwiXHJcblx0XHQvLyBvcHRpb25zTGF5b3V0Tm9kZS5zZXRTaWJsaW5nSW5kZXgoNSk7XHJcblx0XHQvLyBvcHRpb25zTGF5b3V0Tm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcblx0XHQvL31cclxuXHRcdC8vIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5vcHRpb25MYXlvdXQgPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHQvLyAgICAgbGV0IG9wdGlvbnNMYXlvdXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5WZXJ0aWNhbE9wdGlvbk5vZGUpO1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNMYXlvdXROb2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNMYXlvdXROb2RlLm5hbWUgPSBcIk9wdGlvblwiXHJcblx0XHQvLyAgICAgb3B0aW9uc0xheW91dE5vZGUuc2V0U2libGluZ0luZGV4KDUpO1xyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5vcHRpb25zTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJvcHRpb25zTm9kZS0tXCIgKyB0aGlzLm9wdGlvbnNOb2RlKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLnpJbmRleCA9IDE7XHJcblx0XHRpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5pc09wdGlvbkJHXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5pc09wdGlvbkJHID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuR2VuZXJhdGVPcHRpb25zKCk7XHJcblx0XHR0aGlzLm1heExldmVsID0gc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzO1xyXG5cdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG5cdFx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xyXG5cclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0aSA8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5hbnN3ZXJBcnJheVtpXSA9XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb3JyZWN0QW5zd2VyTnVtW2ldO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLnF1ZXN0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvblNvdW5kWzBdID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlICE9IFwiU2ltcGxlVGFwXCIpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLnF1ZXN0aW9uSW1hZ2VOYW1lLFxyXG5cdFx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcblx0XHRcdC8vICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG5cdFx0XHQvLyAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgaWYgKGVycikge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICB9XHJcblx0XHRcdC8vICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHQvLyAgICAgfVxyXG5cdFx0XHQvLyB9XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG5cdFx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHRcdFx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5udW1iZXJPZk9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc09wdGlvblRleHRcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwib3B0aW9uIGltZyA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuXHRcdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ub3B0aW9uc1tpXSxcclxuXHRcdFx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJvcHRpb24gdGV4dCA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ub3B0aW9uc1tpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoXHJcblx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdGkgPFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29ycmVjdEF1ZGlvcy5sZW5ndGg7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uY29ycmVjdEF1ZGlvc1tpXSxcclxuXHRcdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLnF1ZXN0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IEF1ZGlvQ2xpcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5xdWVzdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcblx0XHRcdC8vICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG5cdFx0XHQvLyAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHQvLyAgICAgfVxyXG5cdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGkgPFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdF0ubnVtYmVyT2ZPcHRpb25zO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0c3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHRcdFx0XHRpKytcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmlzT3B0aW9uVGV4dFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS5vcHRpb25zW2ldLFxyXG5cdFx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRdLm9wdGlvbnNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvcnJlY3RBdWRpb3MubGVuZ3RoO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5jb3JyZWN0QXVkaW9zW2ldLFxyXG5cdFx0XHRcdFx0KEF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcnJlY3RBdWRpb1tpXSA9IEF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZVxyXG5cdFx0KTtcclxuXHRcdC8vIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0c3RhcnQoKSB7XHJcblx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcblx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHQpO1xyXG5cdFx0c3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuXHRcdC8vIHRoaXMuT3B0aW9uc0xheW91dCgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIkFuc3dlckFycmF5ID0gXCIsIHRoaXMuYW5zd2VyQXJyYXkpO1xyXG5cdFx0dGhpcy50b3RhbEFuc3dlcnMgPVxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5jYWxsUXVlc3Rpb25CYXIoKTtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiU2ltcGxlVGFwXCIpIHtcclxuXHRcdFx0dGhpcy5zZXRPcHRpb25zTGF5b3V0KFwiaG9yaXpvbnRhbFwiKTtcclxuXHRcdFx0dGhpcy5jYWxsT3B0aW9uSW4oKTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIlRhcFRvQ29sbGVjdFwiKSB7XHJcblx0XHRcdHRoaXMuc2V0T3B0aW9uc0xheW91dChcImdyaWRcIik7XHJcblx0XHRcdHRoaXMuY2FsbFRoaXJkT2JqZWN0SW4oKTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIk9iamVjdHNUd2VlbkluXCIpIHtcclxuXHRcdFx0dGhpcy5zZXRPcHRpb25zTGF5b3V0KFwiaG9yaXpvbnRhbFwiKTtcclxuXHRcdFx0dGhpcy5jYWxsVGhpcmRPYmplY3RJbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcclxuXHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5iYWdOZWdhdGl2ZTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XHJcblx0XHRcdHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25Qb3NpdGl2ZTtcclxuXHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvbk5lZ2F0aXZlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0X251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuXHRcdHJldHVybiBfbnVtYmVyO1xyXG5cdH1cclxuXHJcblx0R2VuZXJhdGVPcHRpb25zKCkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIlRvdGFsIE9wdGlvbnMgOiBcIiwgdGhpcy5Ub3RhbE9wdGlvbnMpXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpKTtcclxuXHRcdFx0b3B0aW9uLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdG9wdGlvbi5zZXRQYXJlbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpKTtcclxuXHRcdFx0b3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuXHRcdFx0b3B0aW9uLm9wYWNpdHkgPSAwO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiaXNPcHRpb25CRy0tXCIgKyB0aGlzLmlzT3B0aW9uQkcpO1xyXG5cdFx0XHRpZiAodGhpcy5pc09wdGlvbkJHKSB7XHJcblx0XHRcdFx0b3B0aW9uLmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvcHRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmlzRG9uZVtpXSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZGVzdHJveSgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImlzRG9uZSA6IFwiLCB0aGlzLmlzRG9uZSk7XHJcblx0fVxyXG5cclxuXHRjYWxsUXVlc3Rpb25CYXIoKSB7XHJcblx0XHR0aGlzLnF1ZXN0aW9uQm94UG9zWSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikueTtcclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuc2V0UG9zaXRpb24oY2MudjIoMCwgMTUwMCkpO1xyXG5cdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSlcclxuXHRcdFx0LnRvKDEsIHsgeTogdGhpcy5xdWVzdGlvbkJveFBvc1kgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5xdWVzdGlvblRleHQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcHRpb25zTGF5b3V0KHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKHR5cGUgPT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0dGhpcy5PcHRpb25zTGF5b3V0SG9yaXpvbnRhbCgpO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHR0aGlzLk9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpO1xyXG5cdFx0XHR0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gXCJncmlkXCIpIHtcclxuXHRcdFx0dGhpcy5hcnJhbmdlR3JpZENoaWxkcmVuKCk7XHJcblx0XHRcdC8vdGhpcy5yZXZlcnNlT3B0aW9uc0xheW91dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbFRoaXJkT2JqZWN0SW4oKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwidGhpcmRPYmplY3RBcHBlYXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLnRoaXJkT2JqZWN0VHlwZSk7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIlRhcFRvQ29sbGVjdFwiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LnNldFBvc2l0aW9uKGNjLnYyKC0zMDAsIC0yMDApKTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpXHJcblx0XHRcdFx0LnNldFBvc2l0aW9uKGNjLnYyKC0zMDAsIC0yMDApKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikpXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0fSwgMC4xKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxPcHRpb25JbigpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH0sIDEpO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiT2JqZWN0c1R3ZWVuSW5cIikge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnNOb2RlLnkgPSB0aGlzLm9wdGlvbnNOb2RlLnkgKyAxMDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LnNldFBvc2l0aW9uKGNjLnYyKDE1MDAsIC0yNTApKTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuc2NhbGUgPSAxO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikpXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdHRoaXMuY2FsbE9wdGlvbk91dEZyb21PYmplY3QoKTtcclxuXHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0fSwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPblZPQnV0dG9uKCkge1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pXHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjYWxsT3B0aW9uSW4oKSB7XHJcblx0XHRsZXQgZGVsYXk6IG51bWJlciA9IDAuNTtcclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHQuc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikueCAtIDgwLFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLnlcclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2kgLSAxXS5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0bGV0IG9ialNjYWxlOiBudW1iZXIgPSAwO1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiU2ltcGxlVGFwXCIpIHtcclxuXHRcdFx0XHRcdG9ialNjYWxlID0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJUYXBUb0NvbGxlY3RcIikge1xyXG5cdFx0XHRcdFx0b2JqU2NhbGUgPSAwLjU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9ialNjYWxlID0gMC43O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiaXNPcHRpb25CZ1wiKTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNPcHRpb25CRykge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgPSAxLjQ7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiBvYmpTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XHJcblx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgZGVsYXkpO1xyXG5cdFx0XHRkZWxheSArPSAwLjU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0Ly8gICAgIGNvbnNvbGUubG9nKFwiQUJDRC4uLi4uLi4uLi4uLi5cIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuWzBdLnNjYWxlLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5zY2FsZSwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnNjYWxlKVxyXG5cdFx0Ly8gfSwgMyk7XHJcblx0fVxyXG5cclxuXHRjYWxsT3B0aW9uT3V0RnJvbU9iamVjdCgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiY2FsbE9wdGlvbk91dEZyb21PYmplY3QtLVwiLCB0aGlzLnBvc2l0aW9uQXJyYXkpO1xyXG5cdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhcIm5hbWUgb2Y6IFwiICsgaSArIFwiIHRoIGNoaWxkcmVuIGlzOiBcIiArIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5uYW1lKTtcclxuXHRcdC8vIH1cclxuXHRcdGxldCBkZWxheTogbnVtYmVyID0gMC41O1xyXG5cdFx0Zm9yIChcclxuXHRcdFx0bGV0IGkgPSAxO1xyXG5cdFx0XHRpIDw9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGkrK1xyXG5cdFx0KSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiTmV3IGlcIiwgaSwgdGhpcy5wb3NpdGlvbkFycmF5Lmxlbmd0aCk7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpIC0gMV0uc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdC5jaGlsZHJlbltpIC0gMV0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0XHQwIC0gMTAwLFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0UG9zaXRpb24oKS55IC1cclxuXHRcdFx0XHRcdFx0MTAwXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBvYmpTY2FsZTogbnVtYmVyID0gMDtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRvYmpTY2FsZSA9IDAuNztcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNPcHRpb25CRykge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgPSAxLjQ7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiBvYmpTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRcdGxldCBwb3M6IGNjLlZlYzIgPSB0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdC5nZXRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoaS50b1N0cmluZygpKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHRcdC5iZXppZXJUbyhcclxuXHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0Y2MudjIocG9zLngsIHBvcy55ICsgMjAwKSxcclxuXHRcdFx0XHRcdFx0Y2MudjIodGhpcy5wb3NpdGlvbkFycmF5W2kgLSAxXS54IC8gMS41LCBwb3MueSArIDQwMCksXHJcblx0XHRcdFx0XHRcdGNjLnYyKFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheVtpIC0gMV0ueCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXlbaSAtIDFdLnlcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRcdGlmIChpID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG5cdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0ZGVsYXkgKz0gMC41O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UGxheVF1ZXN0aW9uQXVkaW8oKSB7XHJcblx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiSm9ja2V5IGNvbWluZ1wiKTtcclxuXHRcdHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG5cdFx0KSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiYW5zd2VyQXJyYXkgOiBcIiwgdGhpcy5hbnN3ZXJBcnJheVswXSlcclxuXHRcdFx0XHRsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcblx0XHRcdFx0aGFuZC5zZXRQYXJlbnQoXHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0aGFuZC5zZXRQb3NpdGlvbigwLCAtNzApO1xyXG5cdFx0XHRcdGhhbmQuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcclxuXHRcdFx0XHRoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHRsZXQgaW50b0FuaW0gPSBcImludHJvXCI7XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig0NTAsIC0zNzApO1xyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0aW50b0FuaW0gPSBcImludHJvXzFcIjtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oODcwLCAtMzcwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50bGNfYmlyZEZseWluZywgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBpbnRvQW5pbSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG5cdFx0XHRcdFx0XHRoYW5kLnNldFBhcmVudChcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGhhbmQuc2V0UG9zaXRpb24oMCwgLTcwKTtcclxuXHRcdFx0XHRcdFx0aGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG5cdFx0XHRcdFx0XHRoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fbG9vcFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fZW5kXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmQuc2V0UGFyZW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oXCJpbnRyb19lbmRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oaW50b0FuaW0pLmR1cmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE9uQnV0dG9uQ2xpY2soX2V2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNhblRvdWNoLS1cIiArIHRoaXMuY2FuVG91Y2gpXHJcblx0XHRpZiAoIXRoaXMuY2FuVG91Y2gpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXNEb25lW3BhcnNlSW50KF9ldmVudC50YXJnZXQubmFtZSkgLSAxXSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcblx0XHRcdHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0bGV0IF9ub2RlID0gX2V2ZW50LnRhcmdldDtcclxuXHRcdGxldCBpc2NvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwidGhpcy5hbnN3ZXJBcnJheVtpXS0tXCIgKyB0aGlzLmFuc3dlckFycmF5WzBdLCBfbm9kZS5uYW1lKTtcclxuXHRcdFx0aWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5hbnN3ZXJBcnJheVtpXSkge1xyXG5cdFx0XHRcdGlzY29ycmVjdCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5pc0RvbmVbcGFyc2VJbnQoX25vZGUubmFtZSkgLSAxXSA9IHRydWU7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImlzY29ycmVjdC0tXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoaXNjb3JyZWN0KSB7XHJcblx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly90aGlzLmRlc3Ryb3lPcHRpb24oKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy53cm9uZ0Fuc3dlckNvdW50Kys7XHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFwid3JvbmdBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGUsIF9ldmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYWxsTmV4dExldmVsKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0dGhpcy5jYWxsU3RhcnNFYXJlZCgpO1xyXG5cdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bMF0uZHVyYXRpb24gLSAwLjUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcclxuXHRcdFx0XHQvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuXHRcdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG5cdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bMF0uZHVyYXRpb24gLSAwLjUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbFN0YXJzRWFyZWQoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RhcjFMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcblx0XHRcdHRoaXMuc3RhcjFMb2cgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLnN0YXIyTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG5cdFx0XHR0aGlzLnN0YXIyTG9nID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuXHRcdH1cclxuXHRcdGlmIChcclxuXHRcdFx0IXRoaXMuc3RhcjNMb2cgJiZcclxuXHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5zdGFyM0xvZyA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0dGhpcy5leHRyYUltZztcclxuXHRcdC8vY29uc29sZS5sb2coXCJjb3JyZWN0QXVkaW8tLVwiICsgdGhpcy5jb3JyZWN0QXVkaW8ubmFtZSk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHR0aGlzLmNvcnJlY3RBdWRpb1twYXJzZUludChfbm9kZS5uYW1lKSAtIDFdLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHRcdC8vIGNjLnR3ZWVuKF9ub2RlKS50bygwLjUsIHsgc2NhbGU6IDEuNSwgeDogMCwgeTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX25vZGUpXHJcblx0XHRcdC50bygwLjUsIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA0MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy50d2Vlbihfbm9kZS5jaGlsZHJlblswXSlcclxuXHRcdFx0LnRvKDAuNSwgeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDMyMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9ub2RlLmNoaWxkcmVuWzBdKVxyXG5cdFx0XHQudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX25vZGUpLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLnNldFBvc2l0aW9uKF9ub2RlLngsIF9ub2RlLnkpO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5jcmVhdGVTdGFyVHJhaWxzKDYsIHRoaXMubm9kZSk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxKb2NrZXkoKTtcclxuXHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdH0sIDEuNSk7XHJcblx0XHRcdH0sIDAuNyk7XHJcblx0XHR9LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0Y2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGU6IGNjLk5vZGUpIHtcclxuXHRcdGxldCB2b0luZGV4OiBudW1iZXIgPSB0aGlzLmFuc3dlckFycmF5LmluZGV4T2YoX25vZGUubmFtZSk7XHJcblx0XHRzd2l0Y2ggKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcIlNpbXBsZVRhcFwiOlxyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0sIGZhbHNlKTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcblx0XHRcdFx0XHRcdC5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55KTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCsrO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0aSA8XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNEb25lW2ldID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLkNvbG9yLldISVRFO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXNMYXN0VHdlZW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5PcHRpb25zTGF5b3V0SG9yaXpvbnRhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0NixcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwicXVlc3Rpb25QYW5lbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IHk6IDE1MDAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MuQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlckNvdW50LS1cIiArIHRoaXMuY29ycmVjdEFuc3dlckNvdW50LCB0aGlzLnRvdGFsQW5zd2Vycyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jYWxsSm9ja2V5KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSwgMS41KTtcclxuXHRcdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHR9LCB0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XS5kdXJhdGlvbik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJUYXBUb0NvbGxlY3RcIjpcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLCBmYWxzZSk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpLnpJbmRleCA9IDE7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS56SW5kZXggPSAxO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcblx0XHRcdFx0XHRcdC5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55KTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBpbWdTY2FsZTogbnVtYmVyID1cclxuXHRcdFx0XHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5zY2FsZSAvIDI7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJTY2FsZSA6IFwiLCBpbWdTY2FsZSk7XHJcblx0XHRcdFx0XHRcdGxldCBpbWdOYW1lOiBzdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLm5hbWUgK1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdEFuc3dlckNvdW50ICtcclxuXHRcdFx0XHRcdFx0XHQxO1xyXG5cdFx0XHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5uYW1lID0gaW1nTmFtZTtcclxuXHRcdFx0XHRcdFx0X25vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoaW1nTmFtZSlcclxuXHRcdFx0XHRcdFx0XHQuc2V0UGFyZW50V2l0aFNhbWVQb3MoXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIilcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRsZXQgcG9zOiBjYy5WZWMyID0gdGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGltZ05hbWUpXHJcblx0XHRcdFx0XHRcdFx0LmdldFBvc2l0aW9uKCk7XHJcblx0XHRcdFx0XHRcdGxldCB0aGlyZEJveDogY2MuTm9kZSA9IHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpO1xyXG5cdFx0XHRcdFx0XHRsZXQgeFJhbmRvbTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoXHJcblx0XHRcdFx0XHRcdFx0LXRoaXJkQm94LndpZHRoIC8gNCxcclxuXHRcdFx0XHRcdFx0XHR0aGlyZEJveC53aWR0aCAvIDRcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGltZ05hbWUpLnNjYWxlID0gaW1nU2NhbGU7XHJcblx0XHRcdFx0XHRcdC8vY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpLmdldENoaWxkQnlOYW1lKGltZ05hbWUpKS5iZXppZXJUbygxLCBjYy52Mihwb3MueCAvIDIsIHBvcy55ICsgMjAwKSwgY2MudjIocG9zLnggLyA0LCBwb3MueSksIGNjLnYyKHhSYW5kb20sIHRoaXJkQm94LmhlaWdodCAvIDIgLSA1MCkpLnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdC8vY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpLmdldENoaWxkQnlOYW1lKGltZ05hbWUpKS5kZWxheSgwLjUpLnRvKDAuNywgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGltZ05hbWUpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQuYmV6aWVyVG8oXHJcblx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksXHJcblx0XHRcdFx0XHRcdFx0XHRjYy52Mih4UmFuZG9tIC8gMiwgcG9zLnkgKyAyMDApLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MudjIoeFJhbmRvbSwgdGhpcmRCb3guaGVpZ2h0IC8gMiAtIDUwKVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0LmRlbGF5KDAuNSlcclxuXHRcdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0XHQwLjcsXHJcblx0XHRcdFx0XHRcdFx0XHR7IHNjYWxlOiBpbWdTY2FsZSAqIDAuNSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRfbm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb3JyZWN0QW5zd2VyQ291bnQrKztcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInF1ZXN0aW9uUGFuZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyB5OiAxNTAwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic291bmRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXJDb3VudC0tXCIgKyB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCwgdGhpcy50b3RhbEFuc3dlcnMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FsbEpvY2tleSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDEuNSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHR9LCB0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XS5kdXJhdGlvbik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJPYmplY3RzVHdlZW5JblwiOlxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJhbnN3ZXIgYXJycmF5IGluZGV4IDogXCIsIHRoaXMuYW5zd2VyQXJyYXkuaW5kZXhPZihfbm9kZS5uYW1lKSk7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XSwgZmFsc2UpO1xyXG5cdFx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIilcclxuXHRcdFx0XHRcdFx0LnNldFBvc2l0aW9uKF9ub2RlLngsIF9ub2RlLnkgKyAxMDApO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHQucGxheSgpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly9fbm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCsrO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0aSA8XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNEb25lW2ldID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmlzTGFzdFR3ZWVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuT3B0aW9uc0xheW91dEhvcml6b250YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInF1ZXN0aW9uUGFuZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyB5OiAxNTAwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic291bmRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXJDb3VudC0tXCIgKyB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCwgdGhpcy50b3RhbEFuc3dlcnMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FsbEpvY2tleSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDEuNSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0fSwgdGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbEpvY2tleSgpIHtcclxuXHRcdGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zc2l0aXZlXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmUzXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU0XCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU2XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzZcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8xXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV80XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIm11c2thYW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdCkge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYm95XCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XTtcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG5cdFx0bGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcblx0XHRsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XHJcblx0XHRsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdGlmIChcclxuXHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gLTAuNjU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG5cdFx0KSB7XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHRwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLFxyXG5cdFx0XHRcdC0zNTBcclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdDAuNSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eDogam9ja2V5dHdlZW5bXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcblx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHQwLjUsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0eDogcG9zW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMlxyXG5cdFx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0fSwgMC41KTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHQvL2JpcmQgZmx5aW5nIG91dCBzb3VuZFxyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpbnRyb19vdXRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50bGNfYmlyZEZseWluZywgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG5cdFx0XHRcdH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oXCJpbnRyb19vdXRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzFcIiB8fFxyXG5cdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9sb29wXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzFcIikge1xyXG5cdFx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1cGVyY3ViX1BvczEsXHJcblx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdXBlcmN1Yl9Qb3MyLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKDIsIHsgeDogLTEwMDAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG5cdFx0XHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwicnVuXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSkudG8oMiwgeyB4OiAtMTAwMCB9KS5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbE5lZ2F0aXZlUmVjdGlvbihfbm9kZTogY2MuTm9kZSwgX2V2ZW50KSB7XHJcblx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHQvL19ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0aWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSA2KSB7XHJcblx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDE7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcdFwibmVnZXRpdmVcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJub1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1widHJ5X2FnYWluXCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XHRcdFx0XCJuZWdhdGl2ZV8yXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XHRcdFx0XCJuZWdhdGl2ZV81XCIsXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGFuaW0ubGVuZ3RoIC0gMVxyXG5cdFx0XHQpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zY2FsZVggPSAwLjY1O1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbigxMjAwLCAtMzUwKTtcclxuXHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHg6IDQwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdFx0XHRcdC50bygwLjUsIHsgeDogMTIwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHR9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIiB8fFxyXG5cdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCJcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdC8vcGxheSBidWxiIGJyZWFrIGlmIG5lZWRlZFxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oXHJcblx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIsXHJcblx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1cGVyY3ViX05lZzEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfTmVnMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCAwLjcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzT3B0aW9uQkcpIHtcclxuXHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG5cdFx0fVxyXG5cdFx0Y2MudHdlZW4oX25vZGUpXHJcblx0XHRcdC50bygwLjIsIHsgeDogX25vZGUueCAtIDEwLCBvcGFjaXR5OiAxODAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAsIG9wYWNpdHk6IDUwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC50bygwLjIsIHsgeDogX25vZGUueCAtIDEwLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAsIG9wYWNpdHk6IDUwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC50bygwLjIsIHsgeDogX25vZGUueCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRfbm9kZS5jaGlsZHJlblswXVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcblx0XHRcdFx0XHQuc2V0TWF0ZXJpYWwoMCwgdGhpcy5kZWZhdWx0TWF0KTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG5cdFx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95T3B0aW9uKCkge1xyXG5cdFx0Zm9yIChcclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5uYW1lICE9XHJcblx0XHRcdFx0dGhpcy5hbnN3ZXJBcnJheVswXVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRpbWFnZU5hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcblx0XHRcdGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblx0bG9hZEF1ZGlvQ2xpcChcclxuXHRcdGF1ZGlvTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRPcHRpb25zTGF5b3V0SG9yaXpvbnRhbCgpIHtcclxuXHRcdGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbk5vZGVzLS1cIiArIG9wdGlvbk5vZGVzLmxlbmd0aCwgb3B0aW9uc0xheW91dC53aWR0aCk7XHJcblxyXG5cdFx0Y29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG5cdFx0bGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cdFx0bGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblx0XHRcdGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuXHRcdFx0bGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG5cdFx0XHR0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0XHRpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0bWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuXHRcdGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxyXG5cdFx0XHR0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0bGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuXHRcdGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0bGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRvcHRpb25Ob2Rlcy5sZW5ndGggPT0gMiAmJlxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJPYmplY3RzVHdlZW5JblwiICYmXHJcblx0XHRcdFx0IXRoaXMuaXNMYXN0VHdlZW5cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0b3B0aW9uU2NhbGVGYWN0b3IgPSBvcHRpb25TY2FsZUZhY3RvciAqIDAuNztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gU2NhbGUgdGhlIG9wdGlvblxyXG5cdFx0XHRvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxyXG5cdFx0XHRsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyBvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWDtcclxuXHRcdFx0aWYgKCF0aGlzLmlzTGFzdFR3ZWVuKSB7XHJcblx0XHRcdFx0b3B0aW9uLnggPSBwb3NYIC0gb3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgb3B0aW9uWCA9XHJcblx0XHRcdFx0XHRwb3NYIC0gb3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWDtcclxuXHRcdFx0XHRjYy50d2VlbihvcHRpb24pXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHg6IG9wdGlvblggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhY2N1bXVsYXRlZFdpZHRoICs9IG9wdGlvbi53aWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHRcdFx0dGhpcy5wb3NpdGlvbkFycmF5LnB1c2gob3B0aW9uLmdldFBvc2l0aW9uKCkpO1xyXG5cclxuXHRcdFx0Ly8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcblx0XHRcdGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG5cdFx0XHRcdHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInN1YkNoaWxkLS1cIiwgc3ViQ2hpbGQubmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zTGF5b3V0LmhlaWdodCA9IG1heEhlaWdodCAqIHNjYWxlRmFjdG9yO1xyXG5cclxuXHRcdGlmIChvcHRpb25Ob2Rlcy5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNMYXN0VHdlZW4pIHtcclxuXHRcdFx0XHRsZXQgZGlzdGFuY2VCZXR3ZWVuT3B0aW9ucyA9XHJcblx0XHRcdFx0XHRvcHRpb25Ob2Rlc1sxXS54IC0gb3B0aW9uTm9kZXNbMF0ueDtcclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1swXS54ID0gMCAtIGRpc3RhbmNlQmV0d2Vlbk9wdGlvbnMgLyAyO1xyXG5cdFx0XHRcdG9wdGlvbk5vZGVzWzFdLnggPSAwICsgZGlzdGFuY2VCZXR3ZWVuT3B0aW9ucyAvIDI7XHJcblx0XHRcdFx0b3B0aW9uTm9kZXNbMF0ueSA9IG9wdGlvbk5vZGVzWzBdLnkgLSA1MDtcclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1sxXS55ID0gb3B0aW9uTm9kZXNbMV0ueSAtIDUwO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheSA9IFtdO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbk5vZGVzWzBdLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbk5vZGVzWzFdLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBkaXN0YW5jZUJldHdlZW5PcHRpb25zID1cclxuXHRcdFx0XHRcdG9wdGlvbk5vZGVzWzFdLnggLSBvcHRpb25Ob2Rlc1swXS54O1xyXG5cdFx0XHRcdGxldCBvcHRpb25YMCA9IDAgLSBkaXN0YW5jZUJldHdlZW5PcHRpb25zIC8gMjtcclxuXHRcdFx0XHRsZXQgb3B0aW9uWDEgPSAwICsgZGlzdGFuY2VCZXR3ZWVuT3B0aW9ucyAvIDI7XHJcblx0XHRcdFx0Y2MudHdlZW4ob3B0aW9uTm9kZXNbMF0pXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHg6IG9wdGlvblgwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRjYy50d2VlbihvcHRpb25Ob2Rlc1sxXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgeDogb3B0aW9uWDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheSA9IFtdO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbk5vZGVzWzBdLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbk5vZGVzWzFdLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKG9wdGlvbk5vZGVzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdGlmICghdGhpcy5pc0xhc3RUd2Vlbikge1xyXG5cdFx0XHRcdG9wdGlvbk5vZGVzWzBdLnggPSAwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG9wdGlvbk5vZGVzWzBdKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKFwicG9zaXRpb25BcnJheS0tXCIsIHRoaXMucG9zaXRpb25BcnJheSk7XHJcblx0fVxyXG5cclxuXHRPcHRpb25zTGF5b3V0VmVydGljYWwoKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMub3B0aW9uc05vZGU7XHJcblx0XHRsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuXHRcdGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuXHRcdGxldCB0b3RhbEhlaWdodCA9IDA7XHJcblx0XHRsZXQgbWF4V2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblx0XHRcdGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuXHRcdFx0bGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG5cdFx0XHR0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRcdGlmIChvcHRpb25XaWR0aCA+IG1heFdpZHRoKSB7XHJcblx0XHRcdFx0bWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhdmFpbGFibGVIZWlnaHQgPSBvcHRpb25zTGF5b3V0LmhlaWdodDtcclxuXHRcdGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID1cclxuXHRcdFx0dG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcclxuXHJcblx0XHRsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xyXG5cclxuXHRcdC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG5cdFx0XHRsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIFNjYWxlIHRoZSBvcHRpb25cclxuXHRcdFx0b3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuXHRcdFx0bGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIG9wdGlvbi5oZWlnaHQgKiBvcHRpb24uYW5jaG9yWTtcclxuXHRcdFx0b3B0aW9uLnkgPSBwb3NZIC0gb3B0aW9uc0xheW91dC5oZWlnaHQgKiBvcHRpb25zTGF5b3V0LmFuY2hvclk7XHJcblx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbi5nZXRQb3NpdGlvbigpKTtcclxuXHJcblx0XHRcdGFjY3VtdWxhdGVkSGVpZ2h0ICs9IG9wdGlvbi5oZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuXHRcdFx0Zm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0c3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnNMYXlvdXQud2lkdGggPSBtYXhXaWR0aCAqIHNjYWxlRmFjdG9yO1xyXG5cdH1cclxuXHJcblx0YXJyYW5nZUdyaWRDaGlsZHJlbigpIHtcclxuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW47XHJcblx0XHRsZXQgbWF4Q29sdW1ucyA9IDI7XHJcblx0XHRsZXQgX29wdGlvbkNvdW50OiBudW1iZXIgPSB0aGlzLnRvdGFsQW5zd2VycztcclxuXHRcdGxldCBzcGFjaW5nOiBudW1iZXIgPSAtMjAwO1xyXG5cdFx0aWYgKF9vcHRpb25Db3VudCA9PSA0KSB7XHJcblx0XHRcdG1heENvbHVtbnMgPSAyO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHRvdGFsUm93cyA9IE1hdGguY2VpbChjaGlsZHJlbi5sZW5ndGggLyBtYXhDb2x1bW5zKTtcclxuXHJcblx0XHRsZXQgcm93SGVpZ2h0ID0gMDtcclxuXHRcdGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJvd0hlaWdodCA9IGNoaWxkcmVuWzBdLmhlaWdodCArIHNwYWNpbmc7IC8vIEFzc3VtaW5nIGFsbCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGhlaWdodFxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzdGFydFkgPSAoKHRvdGFsUm93cyAtIDEpICogcm93SGVpZ2h0KSAvIDI7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgY29sdW1uID0gaSAlIG1heENvbHVtbnM7XHJcblx0XHRcdGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBtYXhDb2x1bW5zKTtcclxuXHJcblx0XHRcdGxldCB0b3RhbFdpZHRoID0gMDtcclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgY3VycmVudCByb3dcclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaiA9IDA7XHJcblx0XHRcdFx0aiA8IG1heENvbHVtbnMgJiYgcm93ICogbWF4Q29sdW1ucyArIGogPCBjaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdFx0aisrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRvdGFsV2lkdGggKz0gY2hpbGRyZW5bcm93ICogbWF4Q29sdW1ucyArIGpdLndpZHRoO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRvdGFsV2lkdGggKz1cclxuXHRcdFx0XHRzcGFjaW5nICpcclxuXHRcdFx0XHQoTWF0aC5taW4oY2hpbGRyZW4ubGVuZ3RoIC0gcm93ICogbWF4Q29sdW1ucywgbWF4Q29sdW1ucykgLSAxKTtcclxuXHJcblx0XHRcdGxldCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDI7XHJcblxyXG5cdFx0XHRsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHRcdFx0Y2hpbGQueCA9XHJcblx0XHRcdFx0MjAwICtcclxuXHRcdFx0XHRzdGFydFggK1xyXG5cdFx0XHRcdGNvbHVtbiAqIChjaGlsZC53aWR0aCArIHNwYWNpbmcpICtcclxuXHRcdFx0XHRjaGlsZC53aWR0aCAvIDI7XHJcblx0XHRcdGNoaWxkLnkgPSBzdGFydFkgLSByb3cgKiByb3dIZWlnaHQ7XHJcblx0XHRcdGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAyKSB7XHJcblx0XHRcdFx0Y2hpbGQueSA9IGNoaWxkLnkgLSAzMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjaGlsZC55ID0gY2hpbGQueSAtIDcwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPcHRpb25zTGF5b3V0R3JpZCgpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJPcHRpb25zTGF5b3V0R3JpZFwiKTtcclxuXHRcdGxldCBudW1Db2xzOiBudW1iZXI7XHJcblx0XHRsZXQgbnVtUm93czogbnVtYmVyO1xyXG5cdFx0aWYgKHRoaXMuVG90YWxPcHRpb25zID09IDIpIHtcclxuXHRcdFx0bnVtQ29scyA9IDI7XHJcblx0XHRcdG51bVJvd3MgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAzKSB7XHJcblx0XHRcdG51bUNvbHMgPSAyO1xyXG5cdFx0XHRudW1Sb3dzID0gMjtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gNCkge1xyXG5cdFx0XHRudW1Db2xzID0gMjtcclxuXHRcdFx0bnVtUm93cyA9IDI7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEyMDtcclxuXHJcblx0XHRsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG5cclxuXHRcdGNvbnN0IG9wdGlvbldpZHRoID0gMTUwOyAvLyBXaWR0aCBvZiBlYWNoIG9wdGlvblxyXG5cdFx0Y29uc3Qgb3B0aW9uSGVpZ2h0ID0gMTUwOyAvLyBIZWlnaHQgb2YgZWFjaCBvcHRpb25cclxuXHJcblx0XHRjb25zdCBncmlkV2lkdGggPVxyXG5cdFx0XHRvcHRpb25XaWR0aCAqIG51bUNvbHMgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgKiAobnVtQ29scyAtIDEpO1xyXG5cdFx0Y29uc3QgZ3JpZEhlaWdodCA9XHJcblx0XHRcdG9wdGlvbkhlaWdodCAqIG51bVJvd3MgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgKiAobnVtUm93cyAtIDEpO1xyXG5cclxuXHRcdGxldCBjdXJyZW50Um93ID0gMDtcclxuXHRcdGxldCBjdXJyZW50Q29sID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKGksIG9wdGlvbk5vZGVzLmNoaWxkcmVuLmxlbmd0aCk7XHJcblx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBncmlkIGxheW91dFxyXG5cdFx0XHRsZXQgcG9zWCA9IGN1cnJlbnRDb2wgKiAob3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMpO1xyXG5cdFx0XHRsZXQgcG9zWSA9IGN1cnJlbnRSb3cgKiAob3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zKTtcclxuXHJcblx0XHRcdC8vIFVwZGF0ZSBwb3NpdGlvbiBvZiB0aGUgb3B0aW9uXHJcblx0XHRcdGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAyKSB7XHJcblx0XHRcdFx0b3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKHBvc1ggKyA1MCwgcG9zWSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuVG90YWxPcHRpb25zID09IDMpIHtcclxuXHRcdFx0XHRvcHRpb24uc2V0UG9zaXRpb24oY2MudjIocG9zWCArIDUwLCBwb3NZIC0gMTgwKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gNCkge1xyXG5cdFx0XHRcdG9wdGlvbi5zZXRQb3NpdGlvbihjYy52Mihwb3NYICsgNTAsIHBvc1kgLSAxODApKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5wb3NpdGlvbkFycmF5LnB1c2gob3B0aW9uLmdldFBvc2l0aW9uKCkpO1xyXG5cclxuXHRcdFx0Y3VycmVudENvbCsrO1xyXG5cdFx0XHRpZiAoY3VycmVudENvbCA+PSBudW1Db2xzKSB7XHJcblx0XHRcdFx0Y3VycmVudENvbCA9IDA7XHJcblx0XHRcdFx0Y3VycmVudFJvdysrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAzICYmIGkgPT0gMikge1xyXG5cdFx0XHRcdG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigyICogKHBvc1ggKyAxMDApLCBwb3NZIC0gMTgwKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBTZXQgdGhlIHNpemUgb2YgdGhlIG9wdGlvbnMgY29udGFpbmVyIHRvIGZpdCB0aGUgZ3JpZFxyXG5cdFx0dGhpcy5vcHRpb25zTm9kZS53aWR0aCA9IGdyaWRXaWR0aDtcclxuXHRcdHRoaXMub3B0aW9uc05vZGUuaGVpZ2h0ID0gZ3JpZEhlaWdodDtcclxuXHR9XHJcblxyXG5cdHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xyXG5cdFx0bGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG5cdFx0bGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcblx0XHQvLyBDcmVhdGUgYW4gYXJyYXkgdG8gaG9sZCB0aGUgbmV3IHBvc2l0aW9uc1xyXG5cdFx0bGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zIGluIHJldmVyc2Ugb3JkZXJcclxuXHRcdGZvciAobGV0IGkgPSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRuZXdQb3NpdGlvbnMucHVzaChvcHRpb25Ob2Rlc1tpXS55KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBVcGRhdGUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3B0aW9uc1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRvcHRpb25Ob2Rlc1tpXS55ID0gbmV3UG9zaXRpb25zW2ldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge31cclxufVxyXG4iXX0=
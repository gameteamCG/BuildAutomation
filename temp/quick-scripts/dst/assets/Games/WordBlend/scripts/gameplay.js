
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b0c1F+W1KLotXneaw3WMc', 'gameplay');
// Games/WordBlend/scripts/gameplay.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.options = null;
        _this.wordsNode = null;
        _this.myOptions = null;
        _this.correctAnswer = "1";
        _this.correctAction = null;
        _this.incorrectButton = [];
        _this.rotateAction = null;
        _this.swipeAction = null;
        _this.puzzleQuestionVo = null;
        _this.puzzleVoIteration = null;
        _this.wordVoQuestion = null;
        _this.wordVoIteration = null;
        _this.jockeyCorrect2 = null;
        _this.wrongAnswer = null;
        // @property(cc.SpriteFrame)
        _this.temporarySprites = [];
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
        _this.isSecondInteraction = true;
        _this.interactionType = "1";
        _this.currentJockey = null;
        _this.selectable = false;
        _this.questionPlaying = false;
        _this.correctWordSeq = ["132"];
        _this.currWordSeq = "";
        _this.currScene = 1;
        _this.colorValue = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }
        this.isSecondInteraction =
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].needReiteration;
        this.interactionType =
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].interactionType;
        if (this.isSecondInteraction) {
            // for (let i = 0; startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     this.currWordSeq += (i + 1).toString();
            // }
            if (this.interactionType == "1") {
                this.GenerateOptions(this.myOptions, "template1");
                this.correctAnswer =
                    StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
            else {
                this.GenerateOptions(this.wordsNode, "template2");
                this.correctWordSeq[0] =
                    StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
        }
    };
    NewClass.prototype.resetInteraction = function () {
        this.unschedule(this.sheduleQuestionClip);
        this.scheduleOnce(this.sheduleQuestionClip, 10);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        this.UpdateJsonData();
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.colorValue = this.options.color;
        this.currScene = StartGame_1.default.Instance.currentLevel;
        ProgressBar_1.default.Instance.ProgressFill(this.currScene - 1, false);
        console.log("levelStarted--" + this.currScene);
        if (this.currScene >= StartGame_1.default.Instance.totalLevels) {
            cc.director.preloadScene("GameEnd");
        }
        else {
            cc.director.preloadScene((this.currScene + 1).toString());
        }
        StartGame_1.default.Instance.clickEvent = false;
        var canvas = cc.find("Canvas");
        canvas.on("touchstart", function (event) {
            if (!StartGame_1.default.Instance.clickEvent) {
                {
                    StartGame_1.default.Instance.clickEvent = true;
                    console.log("firstClick--" + this.currScene);
                }
            }
        }, this);
        this.scheduleOnce(function () {
            _this.InitiateGame();
        }, 1);
    };
    NewClass.prototype.UpdateJsonData = function () {
        var _this = this;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleQuestionVo = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node
                        .getChildByName("frame")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node
                        .getChildByName("frame")
                        .getChildByName((i + 1).toString())
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleVoIteration = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoQuestion = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        else {
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                    });
                }
                else {
                    if (this_1.interactionType == "1") {
                        this_1.myOptions
                            .getChildByName((i + 1).toString())
                            .getChildByName("text")
                            .getComponent(cc.Label).string =
                            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_1.wordsNode
                            .getChildByName((i + 1).toString())
                            .getChildByName("text")
                            .getComponent(cc.Label).string =
                            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_2(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoIteration = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.puzzleQuestionVo = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("frame")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (spriteFrame) {
                    _this.node
                        .getChildByName("frame")
                        .getChildByName((i + 1).toString())
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_2 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_3(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (AudioClip) {
                _this.puzzleVoIteration = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (AudioClip) {
                _this.wordVoQuestion = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                        else {
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame =
                                spriteFrame;
                        }
                    });
                }
                else {
                    if (this_3.interactionType == "1") {
                        this_3.myOptions
                            .getChildByName((i + 1).toString())
                            .getChildByName("text")
                            .getComponent(cc.Label).string =
                            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_3.wordsNode
                            .getChildByName((i + 1).toString())
                            .getChildByName("text")
                            .getComponent(cc.Label).string =
                            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_3 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (AudioClip) {
                _this.wordVoIteration = AudioClip;
            });
        }
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJockey.active = true;
    };
    NewClass.prototype.UpdateOptions = function () {
        this.options.active = false;
        this.node.getChildByName("hint").active = false;
        var _width = 250;
        var _height = 250;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
            .numberOfPuzzles == 4) {
            _width = 250;
            _height = 250;
        }
        else if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
            .numberOfPuzzles == 9) {
            _width = 166;
            _height = 166;
        }
        for (var i = 0; i < this.options.children.length; i++) {
            this.options.children[i].width = _width;
            this.options.children[i].height = _height;
            if (i >=
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles) {
                this.options.children[i].destroy();
            }
        }
    };
    NewClass.prototype.InitiateGame = function () {
        var _this = this;
        //repeat method
        this.UpdateOptions();
        this.sheduleQuestionClip = function () {
            if (_this.interactable) {
                cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
            }
            _this.options.children.forEach(function (_child) {
                if (_child.angle % 360 != 0) {
                    cc.tween(_child)
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .start();
                }
            });
            _this.scheduleOnce(function () {
                _this.resetInteraction();
            }, 0);
        };
        this.scheduleOnce(function () {
            _this.SetFrameOptions();
        }, 0.1);
        this.wordsNode.children.forEach(function (element) {
            element.on("touchstart", function (_event) {
                _this.wordTouchStart(_event);
            });
            element.on("touchmove", function (_event) {
                _this.wordTouchMove(_event);
            });
            element.on("touchend", function (_event) {
                _this.wordTouchEnd(_event);
            });
        });
    };
    NewClass.prototype.SetFrameOptions = function () {
        var _this = this;
        this.options.active = true;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
            .isHintRequired) {
            this.node.getChildByName("hint").active = true;
        }
        if (this.options.childrenCount == 4) {
            this.options.children[0].setPosition(-this.options.children[0].width / 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(this.options.children[1].width / 2, this.options.children[1].height / 2);
            this.options.children[2].setPosition(-this.options.children[2].width / 2, -this.options.children[2].height / 2);
            this.options.children[3].setPosition(this.options.children[3].width / 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 9) {
            var threshHold_1 = 1;
            this.options.children[0].setPosition(-this.options.children[0].width + threshHold_1, this.options.children[0].height - threshHold_1);
            this.options.children[1].setPosition(0, this.options.children[1].height - threshHold_1);
            this.options.children[2].setPosition(this.options.children[2].width - threshHold_1, this.options.children[2].height - threshHold_1);
            this.options.children[3].setPosition(-this.options.children[3].width + threshHold_1, 0);
            this.options.children[4].setPosition(0, 0);
            this.options.children[5].setPosition(this.options.children[5].width - threshHold_1, 0);
            this.options.children[6].setPosition(-this.options.children[6].width + threshHold_1, -this.options.children[6].height + threshHold_1);
            this.options.children[7].setPosition(0, -this.options.children[7].height + threshHold_1);
            this.options.children[8].setPosition(this.options.children[8].width - threshHold_1, -this.options.children[8].height + threshHold_1);
        }
        else if (this.options.childrenCount == 6) {
            this.options.children[0].setPosition(-this.options.children[0].width + 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(0, this.options.children[1].height / 2);
            this.options.children[2].setPosition(this.options.children[2].width - 2, this.options.children[2].height / 2);
            this.options.children[3].setPosition(-this.options.children[3].width + 2, -this.options.children[3].height / 2);
            this.options.children[4].setPosition(0, -this.options.children[4].height / 2);
            this.options.children[5].setPosition(this.options.children[3].width - 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 16) {
            var threshHold = 62.5;
            this.options.children[0].setPosition(-this.options.children[0].width - threshHold, this.options.children[0].height + threshHold);
            this.options.children[1].setPosition(-this.options.children[1].width / 2, this.options.children[1].height + threshHold);
            this.options.children[2].setPosition(this.options.children[2].width / 2, this.options.children[2].height + threshHold);
            this.options.children[3].setPosition(this.options.children[3].width + threshHold, this.options.children[3].height + threshHold);
            this.options.children[4].setPosition(-this.options.children[4].width - threshHold, this.options.children[4].height / 2);
            this.options.children[5].setPosition(-this.options.children[5].width / 2, this.options.children[5].height / 2);
            this.options.children[6].setPosition(this.options.children[6].width / 2, this.options.children[6].height / 2);
            this.options.children[7].setPosition(this.options.children[7].width + threshHold, this.options.children[7].height / 2);
            this.options.children[8].setPosition(-(this.options.children[8].width + threshHold), -this.options.children[8].height / 2);
            this.options.children[9].setPosition(-(this.options.children[9].width / 2), -this.options.children[9].height / 2);
            this.options.children[10].setPosition(this.options.children[10].width / 2, -this.options.children[10].height / 2);
            this.options.children[11].setPosition(this.options.children[11].width + threshHold, -this.options.children[11].height / 2);
            this.options.children[12].setPosition(-(this.options.children[12].width + threshHold), -this.options.children[12].height - threshHold);
            this.options.children[13].setPosition(-(this.options.children[13].width / 2), -this.options.children[13].height - threshHold);
            this.options.children[14].setPosition(this.options.children[14].width / 2, -this.options.children[14].height - threshHold);
            this.options.children[15].setPosition(this.options.children[15].width + threshHold, -this.options.children[15].height - threshHold);
        }
        for (var i = 0; i < this.options.childrenCount; i++) {
            var clone = cc.instantiate(this.options.children[i]);
            clone.setParent(this.node.getChildByName("hint").getChildByName("hint"));
            clone.setPosition(this.options.children[i].getPosition());
        }
        var _randomNumber = 1;
        this.options.children.forEach(function (element) {
            element.active = true;
            _randomNumber = _this.getRandomNumber(_randomNumber);
            element.angle = -(90 * _randomNumber);
        });
        this.options.scale = 0.8;
        this.options.opacity = 100;
        this.node.getChildByName("hint").opacity = 100;
        this.node.getChildByName("hint").scale = 0;
        cc.tween(this.options)
            .to(0.8, { scale: 1, opacity: 255 })
            .call(function () {
            cc.tween(_this.node.getChildByName("hint"))
                .to(0.5, { scale: 0.3, opacity: 255 })
                .call(function () {
                var duration = 0;
                if (_this.puzzleQuestionVo) {
                    duration = _this.puzzleQuestionVo.duration - 0.3;
                    cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
                }
                var handNode = _this.node.getChildByName("handClick");
                if (_this.currScene <= 3) {
                    handNode.active = true;
                    handNode.getComponent(cc.Animation).play();
                    handNode
                        .getComponent(cc.Animation)
                        .on("finished", function () { });
                }
                _this.scheduleOnce(function () {
                    _this.scheduleOnce(function () {
                        _this.interactable = true;
                        _this.scheduleOnce(_this.sheduleQuestionClip, 10);
                        _this.resetInteraction();
                        if (_this.currScene < 4)
                            _this.rotatePuzzleImage(_this.options.getChildByName("1"));
                    }, 0.2);
                }, duration);
            })
                .start();
        })
            .start();
    };
    NewClass.prototype.optionClicked = function (_event) {
        this.resetInteraction();
        var handNode = this.node.getChildByName("handClick");
        handNode.active = false;
        if (!StartGame_1.default.Instance.clickEvent) {
            {
                StartGame_1.default.Instance.clickEvent = true;
                console.log("firstClick--" + this.currScene);
            }
        }
        if (this.interactable) {
            this.rotatePuzzleImage(_event.target);
        }
    };
    NewClass.prototype.repeatQuestionClicked = function (_event) {
        var _this = this;
        if (!this.questionPlaying) {
            _event.target.getComponent(cc.Button).interactable = false;
            this.questionPlaying = true;
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.questionPlaying = false;
                _event.target.getComponent(cc.Button).interactable = true;
            }, this.wordVoIteration.duration);
        }
    };
    NewClass.prototype.rotatePuzzleImage = function (_node) {
        var _this = this;
        this.interactable = false;
        var child = _node;
        var angle = child.angle;
        cc.audioEngine.playEffect(this.rotateAction, false);
        cc.tween(child)
            .to(0.1, { scale: 0.5 }, { easing: "sineInOut" })
            .to(0.1, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(child)
            .to(0.2, { angle: angle - 90 }, { easing: "sineInOut" })
            .call(function () {
            _this.optionsAligned();
        })
            .start();
    };
    NewClass.prototype.optionsAligned = function () {
        var _this = this;
        var levelPassed = true;
        this.options.children.forEach(function (_child) {
            if (_child.angle % 360 != 0) {
                levelPassed = false;
            }
        });
        if (levelPassed) {
            //if the items have been aligned
            this.options.color = cc.Color.GREEN;
            cc.audioEngine.playEffect(this.correctAction, false);
            this.scheduleOnce(function () {
                // cc.audioEngine.playEffect(this.jockeyCorrect2, false);
            }, this.correctAction.duration - 1);
            this.node.getChildByName("hint").active = false;
            this.node
                .getChildByName("confetti")
                .getComponent(cc.Animation)
                .play();
            console.log("correctAnswer--" + this.currScene);
            cc.tween(this.options)
                .to(0.3, { x: 0, y: 0, scaleX: 1, scaleY: 1 })
                .start();
            this.scheduleOnce(function () {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(_this.puzzleVoIteration, false);
                _this.scheduleOnce(function () {
                    _this.options.color = cc.Color.WHITE;
                    // this.wordAppear();
                    if (_this.isSecondInteraction) {
                        //check what interaction it is and call the respective function
                        //show question panel
                        cc.audioEngine.playEffect(_this.wordVoQuestion, false);
                        _this.interactionType == "1"
                            ? _this.OptionsAppear()
                            : _this.wordAppear();
                    }
                    else {
                        _this.CallJockey();
                    }
                }, _this.puzzleVoIteration.duration);
            }, 0.5);
        }
        else {
            this.interactable = true;
        }
    };
    NewClass.prototype.CallJockey = function () {
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
            anim = ["positive_3", "positive_4", "positive_5"];
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
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumberp(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[StartGame_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (StartGame_1.default.Instance.currentLevel % 2 == 0 &&
            StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey)
            .to(0.5, { x: jockeytween[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
            .start();
        this.scheduleOnce(function () {
            _this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey)
                    .to(0.5, { x: pos[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                    .start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.levelFinished();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    NewClass.prototype.callNegativeRection = function () {
        var _this = this;
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
                anim = ["negative_3", "negative_4"];
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
            var currentClipNum = _this.getRandomNumberp(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJockey.scaleX = 0.65;
                _this.currentJockey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJockey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
            else {
                _this.currentJockey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            var pos = 1600;
            var jockeytween = 450;
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                pos = 1900;
                jockeytween = 870;
            }
            _this.currentJockey.setPosition(pos, -350);
            cc.tween(_this.currentJockey)
                .to(0.5, { x: jockeytween }, { easing: "quartInOut" })
                .start();
            _this.scheduleOnce(function () {
                _this.currentJockey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey)
                        .to(0.5, { x: pos }, { easing: "quartInOut" })
                        .start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJockey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJockey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idel", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.myOptions.children.forEach(function (elem) {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, _this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7);
    };
    NewClass.prototype.OptionsAppear = function () {
        var _this = this;
        cc.tween(this.options)
            .to(0.3, { x: this.options.x - 200, y: 0, scaleX: 1, scaleY: 1 })
            .start();
        cc.tween(this.myOptions).to(0.3, { y: 0 }).start();
        this.scheduleOnce(function () {
            _this.myOptions.active = true;
        }, 0.5);
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.8, { scale: 1 }).start();
            }, 0.5 * index);
        });
    };
    NewClass.prototype.onButtonClick = function (_event) {
        var _this = this;
        var _node = _event.target;
        if (_node.name === this.correctAnswer) {
            this.myOptions.children.forEach(function (element) {
                if (element.name != _node.name) {
                    element.active = false;
                }
            });
            cc.tween(_node).to(1, { y: 0 }, { easing: "sineInOut" }).start();
            console.log("correctAnswer--" + this.currScene);
            // console.log("correctAnswer--" + this.currScene);
            // cc.audioEngine.playEffect(this.correctButton, false);
            this.options.color = cc.Color.GREEN;
            _node.color = cc.Color.GREEN;
            cc.tween(_node)
                .to(0.1, { scaleX: 0.7, scaleY: 0.8, color: cc.Color.GREEN })
                .to(0.1, { scaleX: 1, scaleY: 1, color: this.colorValue })
                .start();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.node
                    .getChildByName("confetti")
                    .getComponent(cc.Animation)
                    .play();
                _this.CallJockey();
            }, this.wordVoIteration.duration);
        }
        else {
            console.log("wrongAnswer--" + this.currScene);
            cc.audioEngine.playEffect(this.wrongAnswer, false);
            this.callNegativeRection();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.tween(_node)
                .to(0.1, { angle: 10 })
                .to(0.1, { angle: 0 })
                .to(0.1, { angle: -10 })
                .to(0.1, { angle: 0 })
                .to(0.1, { angle: 10 })
                .to(0.1, { angle: 0 })
                .start();
            cc.tween(_node)
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .start();
            cc.tween(this.options)
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue })
                .start();
        }
    };
    NewClass.prototype.wordAppear = function () {
        var _this = this;
        this.selectable = false;
        cc.tween(this.options)
            .to(1, { scale: this.options.scale - 0.2 }, { easing: "sineInOut" })
            .start();
        cc.tween(this.options)
            .to(1, { x: 0, y: 100 }, { easing: "sineInOut" })
            .start();
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.3, { scale: 1 }).start();
            }, 0.5 * index);
        });
        this.wordsNode.active = true;
        // cc.audioEngine.playEffect(this.wordVoQuestion, false);
        this.scheduleOnce(function () {
            var pos = cc.v2(_this.wordsNode.children[0].getPosition().x, _this.wordsNode.children[0].getPosition().y - 250);
            var pos2 = cc.v2(_this.wordsNode.children[1].getPosition().x, _this.wordsNode.children[1].getPosition().y - 250);
            var handNode = _this.node.getChildByName("handClick1");
            handNode.setPosition(pos);
            handNode.active = true;
            handNode.getComponent(cc.Animation).play();
            cc.tween(handNode)
                .to(1, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" })
                .start();
            _this.scheduleOnce(function () {
                handNode.active = false;
                // this.selectable= true;
                // this.scheduleOnce(() => {
                //     this.wordSwap(this.node.getChildByName("words").children[0], this.node.getChildByName("words").children[1], -250, 0);
                // }, 0);
                _this.EndDrag();
            }, 1);
        }, this.wordVoQuestion.duration - 1);
    };
    NewClass.prototype.wordSwap = function (_node1, _node2, x1, x2) {
        var _this = this;
        this.EndDrag();
        this.currWordSeq = this.currWordSeq.replace(_node1.name, "x");
        this.currWordSeq = this.currWordSeq.replace(_node2.name, _node1.name);
        this.currWordSeq = this.currWordSeq.replace("x", _node2.name);
        cc.audioEngine.playEffect(this.swipeAction, false);
        var word = "";
        for (var i = 0; i < this.currWordSeq.length; i++) {
            word += this.wordsNode
                .getChildByName(this.currWordSeq[i])
                .children[0].getComponent(cc.Label).string;
        }
        // console.log("word--" + word);
        cc.tween(_node1).to(0.1, { x: x2 }).start();
        cc.tween(_node2)
            .to(0.1, { x: x1 })
            .call(function () {
            // console.log(this.currWordSeq, this.correctWordSeq[0], this.currScene);
            if (word == _this.correctWordSeq[0]) {
                // console.log("words aligned");
                _this.selectable = false;
                _this.scheduleOnce(function () {
                    // this.levelFinished();
                    cc.audioEngine.playEffect(_this.wordVoIteration, false);
                    _this.scheduleOnce(function () {
                        _this.CallJockey();
                    }, _this.wordVoIteration.duration);
                }, _this.swipeAction.duration);
            }
        })
            .start();
    };
    NewClass.prototype.EndDrag = function () {
        this.wordCurrentSeleced = null;
        this.wordCurrentSelecedPos = null;
        this.selectable = true;
    };
    NewClass.prototype.wordTouchStart = function (_event) {
        // console.log(this.selectable);
        if (this.selectable) {
            // console.log("start event");
            this.wordCurrentSeleced = _event.target;
            this.wordCurrentSelecedPos = this.wordCurrentSeleced.getPosition(cc.v2());
            this.selectable = false;
        }
    };
    NewClass.prototype.wordTouchMove = function (_event) {
        var _this = this;
        //check if the same object is moving which started first
        if (this.wordCurrentSeleced &&
            _event.target.name == this.wordCurrentSeleced.name) {
            this.wordCurrentSeleced.x += _event.touch.getDelta().x;
            if (this.wordCurrentSeleced.x > 800 ||
                this.wordCurrentSeleced.x < -800) {
                // console.log("reset position");
                cc.tween(this.wordCurrentSeleced)
                    .to(0.1, { x: this.wordCurrentSelecedPos.x })
                    .call(function () {
                    _this.EndDrag();
                })
                    .start();
            }
            var collisionWith_1 = null;
            this.wordsNode.children.forEach(function (_child) {
                if (_child.name == _event.target.name) {
                    return;
                }
                if (_child
                    .getBoundingBox()
                    .contains(_event.target.getPosition())) {
                    collisionWith_1 = _child;
                }
            });
            if (collisionWith_1) {
                // console.log("collision with ", collisionWith.name);
                this.wordSwap(collisionWith_1, this.wordCurrentSeleced, collisionWith_1.x, this.wordCurrentSelecedPos.x);
            }
        }
    };
    NewClass.prototype.wordTouchEnd = function (_event) {
        var _a;
        if (_event.target.name == ((_a = this.wordCurrentSeleced) === null || _a === void 0 ? void 0 : _a.name)) {
            // console.log("End event");
            cc.tween(this.wordCurrentSeleced)
                .to(0.2, { x: this.wordCurrentSelecedPos.x })
                .start();
            this.selectable = true;
        }
    };
    NewClass.prototype.levelFinished = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAction, false);
        this.node.getChildByName("confetti").active = true;
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();
        console.log("levelComplete--" + this.currScene);
        StartGame_1.default.Instance.currentLevel++;
        this.scheduleOnce(function () {
            ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
            _this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.ProgressFill(_this.currScene);
                _this.scheduleOnce(function () {
                    if (_this.currScene < StartGame_1.default.Instance.totalLevels) {
                        cc.director.loadScene("1");
                    }
                    else {
                        cc.director.loadScene("GameEnd");
                    }
                }, 0.8);
            }, 1.2);
        }, 1.5);
    };
    NewClass.prototype.getRandomNumber = function (_number) {
        _number = Math.random();
        _number = cc.misc.lerp(1, 3, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.getRandomNumberp = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
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
    NewClass.prototype.GenerateOptions = function (_node, _template) {
        var _this = this;
        if (_node === void 0) { _node = this.myOptions; }
        if (_template === void 0) { _template = "template1"; }
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .numberOfOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName(_template));
            option.name = (i + 1).toString();
            option.setParent(_node);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 255;
            option.active = true;
        }
        this.node.getChildByName(_template).destroy();
        if (_template == "template1") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions == 2) {
                this.myOptions.children[0].setPosition(0, 120);
                this.myOptions.children[1].setPosition(0, -120);
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.OptionsLayout();
                _this.arrangeChildren(_this.wordsNode, 30);
            }, 1);
        }
    };
    NewClass.prototype.OptionsLayout = function () {
        var optionsLayout = this.wordsNode;
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
    NewClass.prototype.arrangeChildren = function (centerNode, spacing) {
        var children = centerNode.children;
        var totalWidth = 0;
        // Calculate total width required
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children
        // Starting X position
        var startX = -totalWidth / 2;
        // Arrange children
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    };
    NewClass.prototype.OptionsLayoutVertical = function () {
        var optionsLayout = this.myOptions;
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
        var optionsLayout = this.myOptions;
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
        property(cc.Node)
    ], NewClass.prototype, "options", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "wordsNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "myOptions", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "correctAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "incorrectButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "rotateAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "swipeAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jockeyCorrect2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongAnswer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdvcmRCbGVuZFxcc2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQWlHO0FBQ2pHLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlvREM7UUEvbkRRLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUN2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsNEJBQTRCO1FBQzVCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFHaEMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixH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QUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQXhFMUIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlvRDVCO0lBQUQsZUFBQztDQWpvREQsQUFpb0RDLENBam9EcUMsRUFBRSxDQUFDLFNBQVMsR0Fpb0RqRDtrQkFqb0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkZvbnQpXHJcblx0cHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkZvbnQpXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0b3B0aW9uczogY2MuTm9kZSA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0d29yZHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRteU9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRjb3JyZWN0QWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0aW5jb3JyZWN0QnV0dG9uOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cm90YXRlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0c3dpcGVBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cdHB1enpsZVF1ZXN0aW9uVm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0cHV6emxlVm9JdGVyYXRpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0d29yZFZvUXVlc3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0d29yZFZvSXRlcmF0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0am9ja2V5Q29ycmVjdDI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHR3cm9uZ0Fuc3dlcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0Ly8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdHRlbXBvcmFyeVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHN0YWxsaW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGlzU2Vjb25kSW50ZXJhY3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgaW50ZXJhY3Rpb25UeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcblx0Y3VycmVudEpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgaW50ZXJhY3RhYmxlO1xyXG5cdHByaXZhdGUgc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cdHByaXZhdGUgd29yZEN1cnJlbnRTZWxlY2VkOiBjYy5Ob2RlO1xyXG5cdHByaXZhdGUgd29yZEN1cnJlbnRTZWxlY2VkUG9zOiBjYy5WZWMyO1xyXG5cclxuXHRwcml2YXRlIHF1ZXN0aW9uUGxheWluZyA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGNvcnJlY3RXb3JkU2VxOiBzdHJpbmdbXSA9IFtcIjEzMlwiXTtcclxuXHRwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHRwcml2YXRlIGN1cnJTY2VuZTogbnVtYmVyID0gMTtcclxuXHRwcml2YXRlIGNvbG9yVmFsdWU6IGNjLkNvbG9yID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBzaGVkdWxlUXVlc3Rpb25DbGlwO1xyXG5cdG9uTG9hZCgpIHtcclxuXHRcdC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG5cdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuXHRcdC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuXHRcdC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG5cdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbiA9XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5uZWVkUmVpdGVyYXRpb247XHJcblx0XHR0aGlzLmludGVyYWN0aW9uVHlwZSA9XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5pbnRlcmFjdGlvblR5cGU7XHJcblx0XHRpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XHJcblx0XHRcdC8vIGZvciAobGV0IGkgPSAwOyBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHQvLyAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0aWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcblx0XHRcdFx0dGhpcy5HZW5lcmF0ZU9wdGlvbnModGhpcy5teU9wdGlvbnMsIFwidGVtcGxhdGUxXCIpO1xyXG5cdFx0XHRcdHRoaXMuY29ycmVjdEFuc3dlciA9XHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5jb3JyZWN0QW5zd2VyO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMud29yZHNOb2RlLCBcInRlbXBsYXRlMlwiKTtcclxuXHRcdFx0XHR0aGlzLmNvcnJlY3RXb3JkU2VxWzBdID1cclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvcnJlY3RBbnN3ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmVzZXRJbnRlcmFjdGlvbigpIHtcclxuXHRcdHRoaXMudW5zY2hlZHVsZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXApO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwLCAxMCk7XHJcblx0fVxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIm11c2thYW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XHJcblx0XHRcdHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25OZWdhdGl2ZTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5VcGRhdGVKc29uRGF0YSgpO1xyXG5cclxuXHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuXHJcblx0XHR0aGlzLmNvbG9yVmFsdWUgPSB0aGlzLm9wdGlvbnMuY29sb3I7XHJcblx0XHR0aGlzLmN1cnJTY2VuZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWw7XHJcblx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUgLSAxLCBmYWxzZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcblx0XHRpZiAodGhpcy5jdXJyU2NlbmUgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzKSB7XHJcblx0XHRcdGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkdhbWVFbmRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoKHRoaXMuY3VyclNjZW5lICsgMSkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IGZhbHNlO1xyXG5cdFx0bGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblx0XHRjYW52YXMub24oXHJcblx0XHRcdFwidG91Y2hzdGFydFwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXNcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkluaXRpYXRlR2FtZSgpO1xyXG5cdFx0fSwgMSk7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVKc29uRGF0YSgpIHtcclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucHV6emxlUXVlc3Rpb25WbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vblB1enpsZUltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5udW1iZXJPZlB1enpsZXM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0ucHV6emxlc1tpXSxcclxuXHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvcnJlY3RBdWRpb05hbWUsXHJcblx0XHRcdFx0KGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnB1enpsZVZvSXRlcmF0aW9uID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ucXVlc3Rpb25BdWRpb05hbWUyLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy53b3JkVm9RdWVzdGlvbiA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGkgPFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdF0ubnVtYmVyT2ZPcHRpb25zO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubXlPcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJXb3JkU2VxICs9IChpICsgMSkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud29yZHNOb2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImN1cnJXb3JkU2VxLS1cIiArIHRoaXMuY3VycldvcmRTZXEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHRcdFx0XHRpKytcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmlzT3B0aW9uVGV4dFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS5vcHRpb25zW2ldLFxyXG5cdFx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubXlPcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy53b3Jkc05vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubXlPcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm9wdGlvbnNbaV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndvcmRzTm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdFx0XS5vcHRpb25zW2ldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLnJlaXRlcmF0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy53b3JkVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ucXVlc3Rpb25BdWRpb05hbWUsXHJcblx0XHRcdFx0KEF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wdXp6bGVRdWVzdGlvblZvID0gQXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29tbW9uUHV6emxlSW1hZ2VOYW1lICE9IFwiXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5jb21tb25QdXp6bGVJbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAoXHJcblx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdGkgPFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ubnVtYmVyT2ZQdXp6bGVzO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLnB1enpsZXNbaV0sXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29ycmVjdEF1ZGlvTmFtZSxcclxuXHRcdFx0XHQoQXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnB1enpsZVZvSXRlcmF0aW9uID0gQXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ucXVlc3Rpb25BdWRpb05hbWUyLFxyXG5cdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdHRoaXMud29yZFZvUXVlc3Rpb24gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm15T3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLndvcmRzTm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5udW1iZXJPZk9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc09wdGlvblRleHRcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ub3B0aW9uc1tpXSxcclxuXHRcdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm15T3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud29yZHNOb2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm15T3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdFx0XS5vcHRpb25zW2ldO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy53b3Jkc05vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdF0ub3B0aW9uc1tpXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ucmVpdGVyYXRpb25BdWRpb05hbWUsXHJcblx0XHRcdFx0KEF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy53b3JkVm9JdGVyYXRpb24gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jdXJyZW50Sm9ja2V5ID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWVcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN1cnJlbnRKb2NrZXkuYWN0aXZlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdFVwZGF0ZU9wdGlvbnMoKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0bGV0IF93aWR0aCA9IDI1MDtcclxuXHRcdGxldCBfaGVpZ2h0ID0gMjUwO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG5cdFx0XHRcdC5udW1iZXJPZlB1enpsZXMgPT0gNFxyXG5cdFx0KSB7XHJcblx0XHRcdF93aWR0aCA9IDI1MDtcclxuXHRcdFx0X2hlaWdodCA9IDI1MDtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblx0XHRcdFx0Lm51bWJlck9mUHV6emxlcyA9PSA5XHJcblx0XHQpIHtcclxuXHRcdFx0X3dpZHRoID0gMTY2O1xyXG5cdFx0XHRfaGVpZ2h0ID0gMTY2O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXS53aWR0aCA9IF93aWR0aDtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmhlaWdodCA9IF9oZWlnaHQ7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRpID49XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5udW1iZXJPZlB1enpsZXNcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0SW5pdGlhdGVHYW1lKCkge1xyXG5cdFx0Ly9yZXBlYXQgbWV0aG9kXHJcblx0XHR0aGlzLlVwZGF0ZU9wdGlvbnMoKTtcclxuXHRcdHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuaW50ZXJhY3RhYmxlKSB7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcblx0XHRcdFx0aWYgKF9jaGlsZC5hbmdsZSAlIDM2MCAhPSAwKSB7XHJcblx0XHRcdFx0XHRjYy50d2VlbihfY2hpbGQpXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcblx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5TZXRGcmFtZU9wdGlvbnMoKTtcclxuXHRcdH0sIDAuMSk7XHJcblxyXG5cdFx0dGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRlbGVtZW50Lm9uKFwidG91Y2hzdGFydFwiLCAoX2V2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy53b3JkVG91Y2hTdGFydChfZXZlbnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZWxlbWVudC5vbihcInRvdWNobW92ZVwiLCAoX2V2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy53b3JkVG91Y2hNb3ZlKF9ldmVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRlbGVtZW50Lm9uKFwidG91Y2hlbmRcIiwgKF9ldmVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMud29yZFRvdWNoRW5kKF9ldmVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRTZXRGcmFtZU9wdGlvbnMoKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuXHRcdFx0XHQuaXNIaW50UmVxdWlyZWRcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNCkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCAvIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS53aWR0aCAvIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0IC8gMlxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLndpZHRoIC8gMixcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gOSkge1xyXG5cdFx0XHRsZXQgdGhyZXNoSG9sZDogbnVtYmVyID0gMTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoICsgdGhyZXNoSG9sZCxcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uaGVpZ2h0IC0gdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC0gdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC0gdGhyZXNoSG9sZCxcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0IC0gdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyB0aHJlc2hIb2xkLFxyXG5cdFx0XHRcdDBcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC0gdGhyZXNoSG9sZCxcclxuXHRcdFx0XHQwXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS53aWR0aCArIHRocmVzaEhvbGQsXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5oZWlnaHQgKyB0aHJlc2hIb2xkXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0ICsgdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoIC0gdGhyZXNoSG9sZCxcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCArIHRocmVzaEhvbGRcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNikge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCArIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyAyLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMlxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAtIDIsXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5oZWlnaHQgLyAyXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50ID09IDE2KSB7XHJcblx0XHRcdHZhciB0aHJlc2hIb2xkOiBudW1iZXIgPSA2Mi41O1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0ud2lkdGggLSB0aHJlc2hIb2xkLFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgKyB0aHJlc2hIb2xkXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS53aWR0aCAvIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCArIHRocmVzaEhvbGRcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgKyB0aHJlc2hIb2xkXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLndpZHRoICsgdGhyZXNoSG9sZCxcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0ICsgdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0ud2lkdGggLSB0aHJlc2hIb2xkLFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5oZWlnaHQgLyAyXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC8gMixcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uaGVpZ2h0IC8gMlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzZdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS53aWR0aCAvIDIsXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzZdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10ud2lkdGggKyB0aHJlc2hIb2xkLFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5oZWlnaHQgLyAyXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0ud2lkdGggKyB0aHJlc2hIb2xkKSxcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHQtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS53aWR0aCAvIDIpLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0uaGVpZ2h0IC8gMlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTBdLndpZHRoIC8gMixcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5oZWlnaHQgLyAyXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMV0ud2lkdGggKyB0aHJlc2hIb2xkLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLmhlaWdodCAvIDJcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMl0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0LSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLndpZHRoICsgdGhyZXNoSG9sZCksXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblsxMl0uaGVpZ2h0IC0gdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbihcclxuXHRcdFx0XHQtKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10ud2lkdGggLyAyKSxcclxuXHRcdFx0XHQtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5oZWlnaHQgLSB0aHJlc2hIb2xkXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0ud2lkdGggLyAyLFxyXG5cdFx0XHRcdC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLmhlaWdodCAtIHRocmVzaEhvbGRcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS53aWR0aCArIHRocmVzaEhvbGQsXHJcblx0XHRcdFx0LXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uaGVpZ2h0IC0gdGhyZXNoSG9sZFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0pO1xyXG5cdFx0XHRjbG9uZS5zZXRQYXJlbnQoXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIilcclxuXHRcdFx0KTtcclxuXHRcdFx0Y2xvbmUuc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBfcmFuZG9tTnVtYmVyOiBudW1iZXIgPSAxO1xyXG5cdFx0dGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0ZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRfcmFuZG9tTnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX3JhbmRvbU51bWJlcik7XHJcblx0XHRcdGVsZW1lbnQuYW5nbGUgPSAtKDkwICogX3JhbmRvbU51bWJlcik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMub3B0aW9ucy5zY2FsZSA9IDAuODtcclxuXHRcdHRoaXMub3B0aW9ucy5vcGFjaXR5ID0gMTAwO1xyXG5cdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5vcGFjaXR5ID0gMTAwO1xyXG5cdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5zY2FsZSA9IDA7XHJcblx0XHRjYy50d2Vlbih0aGlzLm9wdGlvbnMpXHJcblx0XHRcdC50bygwLjgsIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDI1NSB9KVxyXG5cdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuMywgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBkdXJhdGlvbiA9IDA7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnB1enpsZVF1ZXN0aW9uVm8pIHtcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA9IHRoaXMucHV6emxlUXVlc3Rpb25Wby5kdXJhdGlvbiAtIDAuMztcclxuXHRcdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wdXp6bGVRdWVzdGlvblZvLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBoYW5kTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRDbGlja1wiKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY3VyclNjZW5lIDw9IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRoYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGhhbmROb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHRcdFx0XHRcdFx0XHRoYW5kTm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHRcdFx0XHQub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCwgMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXNldEludGVyYWN0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jdXJyU2NlbmUgPCA0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnJvdGF0ZVB1enpsZUltYWdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIjFcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9LCAwLjIpO1xyXG5cdFx0XHRcdFx0XHR9LCBkdXJhdGlvbik7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcblx0XHR0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcclxuXHRcdGxldCBoYW5kTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRDbGlja1wiKTtcclxuXHRcdGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0aWYgKCFzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCkge1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pbnRlcmFjdGFibGUpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGVQdXp6bGVJbWFnZShfZXZlbnQudGFyZ2V0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmVwZWF0UXVlc3Rpb25DbGlja2VkKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdGlmICghdGhpcy5xdWVzdGlvblBsYXlpbmcpIHtcclxuXHRcdFx0X2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5xdWVzdGlvblBsYXlpbmcgPSB0cnVlO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9uUGxheWluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuXHRcdFx0fSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyb3RhdGVQdXp6bGVJbWFnZShfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0dGhpcy5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdGxldCBjaGlsZCA9IF9ub2RlO1xyXG5cdFx0Y29uc3QgYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yb3RhdGVBY3Rpb24sIGZhbHNlKTtcclxuXHRcdGNjLnR3ZWVuKGNoaWxkKVxyXG5cdFx0XHQudG8oMC4xLCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKGNoaWxkKVxyXG5cdFx0XHQudG8oMC4yLCB7IGFuZ2xlOiBhbmdsZSAtIDkwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnNBbGlnbmVkKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHRvcHRpb25zQWxpZ25lZCgpIHtcclxuXHRcdGxldCBsZXZlbFBhc3NlZCA9IHRydWU7XHJcblx0XHR0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcblx0XHRcdGlmIChfY2hpbGQuYW5nbGUgJSAzNjAgIT0gMCkge1xyXG5cdFx0XHRcdGxldmVsUGFzc2VkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKGxldmVsUGFzc2VkKSB7XHJcblx0XHRcdC8vaWYgdGhlIGl0ZW1zIGhhdmUgYmVlbiBhbGlnbmVkXHJcblx0XHRcdHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEFjdGlvbiwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmpvY2tleUNvcnJlY3QyLCBmYWxzZSk7XHJcblx0XHRcdH0sIHRoaXMuY29ycmVjdEFjdGlvbi5kdXJhdGlvbiAtIDEpO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuXHRcdFx0XHQudG8oMC4zLCB7IHg6IDAsIHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHV6emxlVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHRcdC8vIHRoaXMud29yZEFwcGVhcigpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0Ly9jaGVjayB3aGF0IGludGVyYWN0aW9uIGl0IGlzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlIGZ1bmN0aW9uXHJcblx0XHRcdFx0XHRcdC8vc2hvdyBxdWVzdGlvbiBwYW5lbFxyXG5cdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvUXVlc3Rpb24sIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCJcclxuXHRcdFx0XHRcdFx0XHQ/IHRoaXMuT3B0aW9uc0FwcGVhcigpXHJcblx0XHRcdFx0XHRcdFx0OiB0aGlzLndvcmRBcHBlYXIoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuQ2FsbEpvY2tleSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHRoaXMucHV6emxlVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG5cdFx0XHR9LCAwLjUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Q2FsbEpvY2tleSgpIHtcclxuXHRcdGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zc2l0aXZlXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmUzXCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU0XCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcdFx0XCJwb3NzaXRpdmU2XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzZcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIm11c2thYW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdCkge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuXHRcdGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcclxuXHRcdGxldCBwb3M6IG51bWJlcltdID0gWy0xNjAwLCAxNjAwXTtcclxuXHRcdGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0cG9zID0gWzE5MDAsIDE5MDBdO1xyXG5cdFx0XHRqb2NrZXl0d2VlbiA9IFs4NzAsIDg3MF07XHJcblx0XHR9XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdHRoaXMuY3VycmVudEpvY2tleS5zZXRQb3NpdGlvbihcclxuXHRcdFx0cG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSxcclxuXHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5LnlcclxuXHRcdCk7XHJcblx0XHRpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiZcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IC0wLjY1O1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XHJcblx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5XHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXHJcblx0XHRcdC50byhcclxuXHRcdFx0XHQwLjUsXHJcblx0XHRcdFx0eyB4OiBqb2NrZXl0d2VlbltzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcclxuXHRcdFx0XHR7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKb2NrZXlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXHJcblx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdDAuNSxcclxuXHRcdFx0XHRcdFx0eyB4OiBwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKb2NrZXlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0XHR0aGlzLmxldmVsRmluaXNoZWQoKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHR9LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0Y2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0bGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZVwiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTJcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmUzXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlNFwiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTVcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmU2XCIsXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJub1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1widHJ5X2FnYWluXCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcnAoXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRhbmltLmxlbmd0aCAtIDFcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKb2NrZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50Sm9ja2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHBvczogbnVtYmVyID0gMTYwMDtcclxuXHRcdFx0bGV0IGpvY2tleXR3ZWVuOiBudW1iZXIgPSA0NTA7XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0XHRwb3MgPSAxOTAwO1xyXG5cdFx0XHRcdGpvY2tleXR3ZWVuID0gODcwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY3VycmVudEpvY2tleS5zZXRQb3NpdGlvbihwb3MsIC0zNTApO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbiB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgeDogcG9zIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpvY2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0XHRcdHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0ZWxlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdH0sIDAuNSk7XHJcblx0XHR9LCAwLjcpO1xyXG5cdH1cclxuXHJcblx0T3B0aW9uc0FwcGVhcigpIHtcclxuXHRcdGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuXHRcdFx0LnRvKDAuMywgeyB4OiB0aGlzLm9wdGlvbnMueCAtIDIwMCwgeTogMCwgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0Y2MudHdlZW4odGhpcy5teU9wdGlvbnMpLnRvKDAuMywgeyB5OiAwIH0pLnN0YXJ0KCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubXlPcHRpb25zLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9LCAwLjUpO1xyXG5cclxuXHRcdHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0X2NoaWxkLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcblx0XHRcdH0sIDAuNSAqIGluZGV4KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkJ1dHRvbkNsaWNrKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdGxldCBfbm9kZTogY2MuTm9kZSA9IF9ldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0aWYgKF9ub2RlLm5hbWUgPT09IHRoaXMuY29ycmVjdEFuc3dlcikge1xyXG5cdFx0XHR0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQubmFtZSAhPSBfbm9kZS5uYW1lKSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjYy50d2Vlbihfbm9kZSkudG8oMSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG5cdFx0XHQvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEJ1dHRvbiwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuXHRcdFx0X25vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuXHJcblx0XHRcdGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHRcdC50bygwLjEsIHsgc2NhbGVYOiAwLjcsIHNjYWxlWTogMC44LCBjb2xvcjogY2MuQ29sb3IuR1JFRU4gfSlcclxuXHRcdFx0XHQudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLCBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHR0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0ZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIilcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdFx0XHR0aGlzLkNhbGxKb2NrZXkoKTtcclxuXHRcdFx0fSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ3cm9uZ0Fuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53cm9uZ0Fuc3dlciwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuXHRcdFx0dGhpcy5teU9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y2MudHdlZW4oX25vZGUpXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBhbmdsZTogMTAgfSlcclxuXHRcdFx0XHQudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBhbmdsZTogLTEwIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBhbmdsZTogMCB9KVxyXG5cdFx0XHRcdC50bygwLjEsIHsgYW5nbGU6IDEwIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBhbmdsZTogMCB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0Y2MudHdlZW4oX25vZGUpXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSlcclxuXHRcdFx0XHQudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSlcclxuXHRcdFx0XHQudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KVxyXG5cdFx0XHRcdC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG5cdFx0XHRcdC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm9wdGlvbnMpXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcblx0XHRcdFx0LnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR3b3JkQXBwZWFyKCkge1xyXG5cdFx0dGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcblx0XHRjYy50d2Vlbih0aGlzLm9wdGlvbnMpXHJcblx0XHRcdC50bygxLCB7IHNjYWxlOiB0aGlzLm9wdGlvbnMuc2NhbGUgLSAwLjIgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy50d2Vlbih0aGlzLm9wdGlvbnMpXHJcblx0XHRcdC50bygxLCB7IHg6IDAsIHk6IDEwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0X2NoaWxkLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLnR3ZWVuKF9jaGlsZCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcblx0XHRcdH0sIDAuNSAqIGluZGV4KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53b3Jkc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9RdWVzdGlvbiwgZmFsc2UpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIoXHJcblx0XHRcdFx0dGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMF0uZ2V0UG9zaXRpb24oKS54LFxyXG5cdFx0XHRcdHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzBdLmdldFBvc2l0aW9uKCkueSAtIDI1MFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRsZXQgcG9zMjogY2MuVmVjMiA9IGNjLnYyKFxyXG5cdFx0XHRcdHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzFdLmdldFBvc2l0aW9uKCkueCxcclxuXHRcdFx0XHR0aGlzLndvcmRzTm9kZS5jaGlsZHJlblsxXS5nZXRQb3NpdGlvbigpLnkgLSAyNTBcclxuXHRcdFx0KTtcclxuXHRcdFx0bGV0IGhhbmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZENsaWNrMVwiKTtcclxuXHRcdFx0aGFuZE5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuXHRcdFx0aGFuZE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0aGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cdFx0XHRjYy50d2VlbihoYW5kTm9kZSlcclxuXHRcdFx0XHQudG8oMSwgeyB4OiBwb3MyLngsIHk6IHBvczIueSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0aGFuZE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZWxlY3RhYmxlPSB0cnVlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHQvLyAgICAgdGhpcy53b3JkU3dhcCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3b3Jkc1wiKS5jaGlsZHJlblswXSwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMV0sIC0yNTAsIDApO1xyXG5cdFx0XHRcdC8vIH0sIDApO1xyXG5cdFx0XHRcdHRoaXMuRW5kRHJhZygpO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdH0sIHRoaXMud29yZFZvUXVlc3Rpb24uZHVyYXRpb24gLSAxKTtcclxuXHR9XHJcblxyXG5cdHdvcmRTd2FwKF9ub2RlMTogY2MuTm9kZSwgX25vZGUyOiBjYy5Ob2RlLCB4MTogbnVtYmVyLCB4MjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLkVuZERyYWcoKTtcclxuXHRcdHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcclxuXHRcdHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUyLm5hbWUsIF9ub2RlMS5uYW1lKTtcclxuXHRcdHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoXCJ4XCIsIF9ub2RlMi5uYW1lKTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xyXG5cclxuXHRcdGxldCB3b3JkID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyV29yZFNlcS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR3b3JkICs9IHRoaXMud29yZHNOb2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHRoaXMuY3VycldvcmRTZXFbaV0pXHJcblx0XHRcdFx0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ3b3JkLS1cIiArIHdvcmQpO1xyXG5cclxuXHRcdGNjLnR3ZWVuKF9ub2RlMSkudG8oMC4xLCB7IHg6IHgyIH0pLnN0YXJ0KCk7XHJcblx0XHRjYy50d2Vlbihfbm9kZTIpXHJcblx0XHRcdC50bygwLjEsIHsgeDogeDEgfSlcclxuXHRcdFx0LmNhbGwoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycldvcmRTZXEsIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0sIHRoaXMuY3VyclNjZW5lKTtcclxuXHRcdFx0XHRpZiAod29yZCA9PSB0aGlzLmNvcnJlY3RXb3JkU2VxWzBdKSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIndvcmRzIGFsaWduZWRcIik7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5sZXZlbEZpbmlzaGVkKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLkNhbGxKb2NrZXkoKTtcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5zd2lwZUFjdGlvbi5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHR9XHJcblx0RW5kRHJhZygpIHtcclxuXHRcdHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gbnVsbDtcclxuXHRcdHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zID0gbnVsbDtcclxuXHRcdHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XHJcblx0fVxyXG5cdHdvcmRUb3VjaFN0YXJ0KF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0YWJsZSk7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RhYmxlKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZXZlbnRcIik7XHJcblx0XHRcdHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gX2V2ZW50LnRhcmdldDtcclxuXHRcdFx0dGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC5nZXRQb3NpdGlvbihcclxuXHRcdFx0XHRjYy52MigpXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3b3JkVG91Y2hNb3ZlKF9ldmVudCkge1xyXG5cdFx0Ly9jaGVjayBpZiB0aGUgc2FtZSBvYmplY3QgaXMgbW92aW5nIHdoaWNoIHN0YXJ0ZWQgZmlyc3RcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy53b3JkQ3VycmVudFNlbGVjZWQgJiZcclxuXHRcdFx0X2V2ZW50LnRhcmdldC5uYW1lID09IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLm5hbWVcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ICs9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpLng7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ID4gODAwIHx8XHJcblx0XHRcdFx0dGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCA8IC04MDBcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJyZXNldCBwb3NpdGlvblwiKTtcclxuXHRcdFx0XHRjYy50d2Vlbih0aGlzLndvcmRDdXJyZW50U2VsZWNlZClcclxuXHRcdFx0XHRcdC50bygwLjEsIHsgeDogdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MueCB9KVxyXG5cdFx0XHRcdFx0LmNhbGwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLkVuZERyYWcoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY29sbGlzaW9uV2l0aDogY2MuTm9kZSA9IG51bGw7XHJcblx0XHRcdHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChfY2hpbGQubmFtZSA9PSBfZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0X2NoaWxkXHJcblx0XHRcdFx0XHRcdC5nZXRCb3VuZGluZ0JveCgpXHJcblx0XHRcdFx0XHRcdC5jb250YWlucyhfZXZlbnQudGFyZ2V0LmdldFBvc2l0aW9uKCkpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRjb2xsaXNpb25XaXRoID0gX2NoaWxkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmIChjb2xsaXNpb25XaXRoKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJjb2xsaXNpb24gd2l0aCBcIiwgY29sbGlzaW9uV2l0aC5uYW1lKTtcclxuXHRcdFx0XHR0aGlzLndvcmRTd2FwKFxyXG5cdFx0XHRcdFx0Y29sbGlzaW9uV2l0aCxcclxuXHRcdFx0XHRcdHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLFxyXG5cdFx0XHRcdFx0Y29sbGlzaW9uV2l0aC54LFxyXG5cdFx0XHRcdFx0dGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MueFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0d29yZFRvdWNoRW5kKF9ldmVudCkge1xyXG5cdFx0aWYgKF9ldmVudC50YXJnZXQubmFtZSA9PSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZD8ubmFtZSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIkVuZCBldmVudFwiKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy53b3JkQ3VycmVudFNlbGVjZWQpXHJcblx0XHRcdFx0LnRvKDAuMiwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgbGV2ZWxGaW5pc2hlZCgpIHtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcblx0XHRzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoNiwgdGhpcy5ub2RlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJTY2VuZSk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VyclNjZW5lIDwgc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzKSB7XHJcblx0XHRcdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lRW5kXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDAuOCk7XHJcblx0XHRcdH0sIDEuMik7XHJcblx0XHR9LCAxLjUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIoX251bWJlcjogbnVtYmVyKSB7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdF9udW1iZXIgPSBjYy5taXNjLmxlcnAoMSwgMywgX251bWJlcik7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuXHRcdHJldHVybiBfbnVtYmVyO1xyXG5cdH1cclxuXHRwcml2YXRlIGdldFJhbmRvbU51bWJlcnAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0X251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuXHRcdHJldHVybiBfbnVtYmVyO1xyXG5cdH1cclxuXHJcblx0bG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0aW1hZ2VOYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG5cdFx0XHRjYy5TcHJpdGVGcmFtZSxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxvYWRBdWRpb0NsaXAoXHJcblx0XHRhdWRpb05hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG5cdFx0XHRjYy5BdWRpb0NsaXAsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0R2VuZXJhdGVPcHRpb25zKFxyXG5cdFx0X25vZGU6IGNjLk5vZGUgPSB0aGlzLm15T3B0aW9ucyxcclxuXHRcdF90ZW1wbGF0ZTogc3RyaW5nID0gXCJ0ZW1wbGF0ZTFcIlxyXG5cdCkge1xyXG5cdFx0Zm9yIChcclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRpIDxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuXHRcdFx0XHQubnVtYmVyT2ZPcHRpb25zO1xyXG5cdFx0XHRpKytcclxuXHRcdCkge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkpO1xyXG5cdFx0XHRvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcclxuXHRcdFx0b3B0aW9uLnNldFBhcmVudChfbm9kZSk7XHJcblx0XHRcdG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcblx0XHRcdG9wdGlvbi5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHRvcHRpb24uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShfdGVtcGxhdGUpLmRlc3Ryb3koKTtcclxuXHRcdGlmIChfdGVtcGxhdGUgPT0gXCJ0ZW1wbGF0ZTFcIikge1xyXG5cdFx0XHR0aGlzLk9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpO1xyXG5cdFx0XHR0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucyA9PSAyXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMubXlPcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKDAsIDEyMCk7XHJcblx0XHRcdFx0dGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oMCwgLTEyMCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuXHRcdFx0XHR0aGlzLmFycmFuZ2VDaGlsZHJlbih0aGlzLndvcmRzTm9kZSwgMzApO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE9wdGlvbnNMYXlvdXQoKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMud29yZHNOb2RlO1xyXG5cdFx0bGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcblx0XHRjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcblx0XHRsZXQgdG90YWxXaWR0aCA9IDA7XHJcblx0XHRsZXQgbWF4SGVpZ2h0ID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuXHRcdFx0bGV0IG9wdGlvbldpZHRoID0gb3B0aW9uLndpZHRoO1xyXG5cdFx0XHRsZXQgb3B0aW9uSGVpZ2h0ID0gb3B0aW9uLmhlaWdodDtcclxuXHJcblx0XHRcdHRvdGFsV2lkdGggKz0gb3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRcdGlmIChvcHRpb25IZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRtYXhIZWlnaHQgPSBvcHRpb25IZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYXZhaWxhYmxlV2lkdGggPSBvcHRpb25zTGF5b3V0LndpZHRoO1xyXG5cdFx0bGV0IHRvdGFsV2lkdGhXaXRoUGFkZGluZyA9XHJcblx0XHRcdHRvdGFsV2lkdGggKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XHJcblxyXG5cdFx0bGV0IGFjY3VtdWxhdGVkV2lkdGggPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG5cdFx0XHRsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIFNjYWxlIHRoZSBvcHRpb25cclxuXHRcdFx0b3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuXHRcdFx0bGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgb3B0aW9uLndpZHRoICogb3B0aW9uLmFuY2hvclg7XHJcblx0XHRcdG9wdGlvbi54ID0gcG9zWCAtIG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclg7XHJcblxyXG5cdFx0XHRhY2N1bXVsYXRlZFdpZHRoICs9IG9wdGlvbi53aWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHJcblx0XHRcdC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG5cdFx0XHRmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9uc0xheW91dC5oZWlnaHQgPSBtYXhIZWlnaHQgKiBzY2FsZUZhY3RvcjtcclxuXHR9XHJcblx0YXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2VudGVyTm9kZS5jaGlsZHJlbjtcclxuXHRcdGxldCB0b3RhbFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcclxuXHRcdGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcblx0XHRcdHRvdGFsV2lkdGggKz0gY2hpbGQud2lkdGg7XHJcblx0XHR9XHJcblx0XHR0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxyXG5cclxuXHRcdC8vIFN0YXJ0aW5nIFggcG9zaXRpb25cclxuXHRcdGxldCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDI7XHJcblxyXG5cdFx0Ly8gQXJyYW5nZSBjaGlsZHJlblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHRcdFx0Y2hpbGQueCA9IHN0YXJ0WCArIGNoaWxkLndpZHRoIC8gMjtcclxuXHRcdFx0c3RhcnRYICs9IGNoaWxkLndpZHRoICsgc3BhY2luZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcclxuXHRcdGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5teU9wdGlvbnM7XHJcblx0XHRsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuXHRcdGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuXHRcdGxldCB0b3RhbEhlaWdodCA9IDA7XHJcblx0XHRsZXQgbWF4V2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblx0XHRcdGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuXHRcdFx0bGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG5cdFx0XHR0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRcdGlmIChvcHRpb25XaWR0aCA+IG1heFdpZHRoKSB7XHJcblx0XHRcdFx0bWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhdmFpbGFibGVIZWlnaHQgPSBvcHRpb25zTGF5b3V0LmhlaWdodDtcclxuXHRcdGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID1cclxuXHRcdFx0dG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcclxuXHJcblx0XHRsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xyXG5cclxuXHRcdC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG5cdFx0XHRsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIFNjYWxlIHRoZSBvcHRpb25cclxuXHRcdFx0b3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuXHRcdFx0bGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIG9wdGlvbi5oZWlnaHQgKiBvcHRpb24uYW5jaG9yWTtcclxuXHRcdFx0b3B0aW9uLnkgPSBwb3NZIC0gb3B0aW9uc0xheW91dC5oZWlnaHQgKiBvcHRpb25zTGF5b3V0LmFuY2hvclk7XHJcblxyXG5cdFx0XHRhY2N1bXVsYXRlZEhlaWdodCArPSBvcHRpb24uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuXHRcdFx0Ly8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcblx0XHRcdGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG5cdFx0XHRcdHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuXHR9XHJcblxyXG5cdHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xyXG5cdFx0bGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm15T3B0aW9ucztcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIG5ldyBwb3NpdGlvbnNcclxuXHRcdGxldCBuZXdQb3NpdGlvbnMgPSBbXTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcblx0XHRmb3IgKGxldCBpID0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0bmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b3B0aW9uTm9kZXNbaV0ueSA9IG5ld1Bvc2l0aW9uc1tpXTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19
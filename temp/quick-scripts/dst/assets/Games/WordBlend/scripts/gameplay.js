
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
        if (StartGame_1.default.Instance.jockeyName == "bag") {
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
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleQuestionVo = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .commonPuzzleImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .commonPuzzleImageName, function (err, texture) {
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
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .puzzles[i], function (err, texture) {
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
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfPuzzles; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleVoIteration = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionAudioName2, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoQuestion = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                            .numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                        .options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
                _loop_2(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .reiterationAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoIteration = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.puzzleQuestionVo = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .commonPuzzleImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .commonPuzzleImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("frame")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .puzzles[i], function (spriteFrame) {
                    _this.node
                        .getChildByName("frame")
                        .getChildByName((i + 1).toString())
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_2 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfPuzzles; i++) {
                _loop_3(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (AudioClip) {
                _this.puzzleVoIteration = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionAudioName2, function (AudioClip) {
                _this.wordVoQuestion = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .commonOptionImageName, function (spriteFrame) {
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                            .numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                        .options[i], function (spriteFrame) {
                        if (_this.interactionType == "1") {
                            _this.myOptions
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode
                                .getChildByName((i + 1).toString())
                                .getChildByName("img")
                                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .reiterationAudioName, function (AudioClip) {
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
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfPuzzles) {
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
                    handNode.getComponent(cc.Animation).on("finished", function () { });
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
            .to(0.2, { angle: angle - 90 })
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
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
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
            anim = ["positive_3", "positive_4", "positive_5"];
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
                anim = ["negative_3", "negative_4"];
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
                _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
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
            if (this.wordCurrentSeleced.x > 800 || this.wordCurrentSeleced.x < -800) {
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
                if (_child.getBoundingBox().contains(_event.target.getPosition())) {
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
    NewClass.prototype.onSoundButtonClick = function () {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.puzzleQuestionVo, false);
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
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .numberOfOptions == 2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdvcmRCbGVuZFxcc2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQWlHO0FBQ2pHLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdrREM7UUE5akRTLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUN2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsNEJBQTRCO1FBQzVCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFHaEMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixH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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBT2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQU1qQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQXhFM0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdrRDVCO0lBQUQsZUFBQztDQWhrREQsQUFna0RDLENBaGtEcUMsRUFBRSxDQUFDLFNBQVMsR0Fna0RqRDtrQkFoa0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkZvbnQpXG4gIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Gb250KVxuICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRm9udClcbiAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Gb250KVxuICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBvcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHdvcmRzTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBteU9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyA9IFwiMVwiO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGNvcnJlY3RBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGluY29ycmVjdEJ1dHRvbjogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcm90YXRlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBzd2lwZUFjdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICBwdXp6bGVRdWVzdGlvblZvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBwdXp6bGVWb0l0ZXJhdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgd29yZFZvUXVlc3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHdvcmRWb0l0ZXJhdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgam9ja2V5Q29ycmVjdDI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHdyb25nQW5zd2VyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgdGVtcG9yYXJ5U3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdGFsbGlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgc3RhbGxpb25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGJhZ1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgYmFnTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgY3J5b25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHRsY1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHRsY05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIHByaXZhdGUgaXNTZWNvbmRJbnRlcmFjdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgaW50ZXJhY3Rpb25UeXBlOiBzdHJpbmcgPSBcIjFcIjtcblxuICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcblxuICBwcml2YXRlIGludGVyYWN0YWJsZTtcbiAgcHJpdmF0ZSBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgd29yZEN1cnJlbnRTZWxlY2VkOiBjYy5Ob2RlO1xuICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZFBvczogY2MuVmVjMjtcblxuICBwcml2YXRlIHF1ZXN0aW9uUGxheWluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29ycmVjdFdvcmRTZXE6IHN0cmluZ1tdID0gW1wiMTMyXCJdO1xuICBwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xuXG4gIHByaXZhdGUgY3VyclNjZW5lOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIGNvbG9yVmFsdWU6IGNjLkNvbG9yID0gbnVsbDtcblxuICBwcml2YXRlIHNoZWR1bGVRdWVzdGlvbkNsaXA7XG4gIG9uTG9hZCgpIHtcbiAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xuICAgIC8vIH1cblxuICAgIHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbiA9XG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgXS5uZWVkUmVpdGVyYXRpb247XG4gICAgdGhpcy5pbnRlcmFjdGlvblR5cGUgPVxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgIF0uaW50ZXJhY3Rpb25UeXBlO1xuICAgIGlmICh0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24pIHtcbiAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgLy8gICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMubXlPcHRpb25zLCBcInRlbXBsYXRlMVwiKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID1cbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmNvcnJlY3RBbnN3ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLkdlbmVyYXRlT3B0aW9ucyh0aGlzLndvcmRzTm9kZSwgXCJ0ZW1wbGF0ZTJcIik7XG4gICAgICAgIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0gPVxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgIF0uY29ycmVjdEFuc3dlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVzZXRJbnRlcmFjdGlvbigpIHtcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAsIDEwKTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvblBvc2l0aXZlO1xuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvbk5lZ2F0aXZlO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3VwZXJjdWJQb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3VwZXJjdWJOZWdhdGl2ZTtcbiAgICB9XG5cbiAgICB0aGlzLlVwZGF0ZUpzb25EYXRhKCk7XG5cbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAyNTU7XG5cbiAgICB0aGlzLmNvbG9yVmFsdWUgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5jdXJyU2NlbmUgPSBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsO1xuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJTY2VuZSAtIDEsIGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgaWYgKHRoaXMuY3VyclNjZW5lID49IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCh0aGlzLmN1cnJTY2VuZSArIDEpLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IGZhbHNlO1xuICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgIGNhbnZhcy5vbihcbiAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXMsXG4gICAgKTtcblxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMuSW5pdGlhdGVHYW1lKCk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBVcGRhdGVKc29uRGF0YSgpIHtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xuXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBhdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLmNvbW1vblB1enpsZUltYWdlTmFtZSAhPSBcIlwiXG4gICAgICApIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAgIC5jb21tb25QdXp6bGVJbWFnZU5hbWUsXG4gICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgaSA8XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLm51bWJlck9mUHV6emxlcztcbiAgICAgICAgaSsrXG4gICAgICApIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAgIC5wdXp6bGVzW2ldLFxuICAgICAgICAgIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZVwiKVxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHV6emxlVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUyLFxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy53b3JkVm9RdWVzdGlvbiA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IFwiXCJcbiAgICAgICkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgICAgLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcbiAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgIGkgPFxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XG4gICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy53b3Jkc05vZGVcbiAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJXb3JkU2VxLS1cIiArIHRoaXMuY3VycldvcmRTZXEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGkgPFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XG4gICAgICAgIGkrK1xuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAgIC5pc09wdGlvblRleHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgICAgICAub3B0aW9uc1tpXSxcbiAgICAgICAgICAgIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZVxuICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgIHRoaXMubXlPcHRpb25zXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud29yZHNOb2RlXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucmVpdGVyYXRpb25BdWRpb05hbWUsXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBBdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIlxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgICAuY29tbW9uUHV6emxlSW1hZ2VOYW1lLFxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGkgPFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5udW1iZXJPZlB1enpsZXM7XG4gICAgICAgIGkrK1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgICAucHV6emxlc1tpXSxcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZVwiKVxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9OYW1lLFxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgdGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLnF1ZXN0aW9uQXVkaW9OYW1lMixcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIHRoaXMud29yZFZvUXVlc3Rpb24gPSBBdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgICAuY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICBpIDxcbiAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAgICAgICAubnVtYmVyT2ZPcHRpb25zO1xuICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBpIDxcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAubnVtYmVyT2ZPcHRpb25zO1xuICAgICAgICBpKytcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgICAuaXNPcHRpb25UZXh0XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAgICAgLm9wdGlvbnNbaV0sXG4gICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlXG4gICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgdGhpcy5teU9wdGlvbnNcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53b3Jkc05vZGVcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucmVpdGVyYXRpb25BdWRpb05hbWUsXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEpvY2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkuZ2V0Q2hpbGRCeU5hbWUoXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSxcbiAgICApO1xuICAgIHRoaXMuY3VycmVudEpvY2tleS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgVXBkYXRlT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgX3dpZHRoID0gMjUwO1xuICAgIGxldCBfaGVpZ2h0ID0gMjUwO1xuICAgIGlmIChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgIC5udW1iZXJPZlB1enpsZXMgPT0gNFxuICAgICkge1xuICAgICAgX3dpZHRoID0gMjUwO1xuICAgICAgX2hlaWdodCA9IDI1MDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgLm51bWJlck9mUHV6emxlcyA9PSA5XG4gICAgKSB7XG4gICAgICBfd2lkdGggPSAxNjY7XG4gICAgICBfaGVpZ2h0ID0gMTY2O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0ud2lkdGggPSBfd2lkdGg7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uaGVpZ2h0ID0gX2hlaWdodDtcbiAgICAgIGlmIChcbiAgICAgICAgaSA+PVxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5udW1iZXJPZlB1enpsZXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEluaXRpYXRlR2FtZSgpIHtcbiAgICAvL3JlcGVhdCBtZXRob2RcbiAgICB0aGlzLlVwZGF0ZU9wdGlvbnMoKTtcbiAgICB0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKF9jaGlsZC5hbmdsZSAlIDM2MCAhPSAwKSB7XG4gICAgICAgICAgY2MudHdlZW4oX2NoaWxkKVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxMDAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDEwMCB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICB0aGlzLlNldEZyYW1lT3B0aW9ucygpO1xuICAgIH0sIDAuMSk7XG5cbiAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9uKFwidG91Y2hzdGFydFwiLCAoX2V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMud29yZFRvdWNoU3RhcnQoX2V2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5vbihcInRvdWNobW92ZVwiLCAoX2V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMud29yZFRvdWNoTW92ZShfZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50Lm9uKFwidG91Y2hlbmRcIiwgKF9ldmVudCkgPT4ge1xuICAgICAgICB0aGlzLndvcmRUb3VjaEVuZChfZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBTZXRGcmFtZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zLmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgLmlzSGludFJlcXVpcmVkXG4gICAgKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA0KSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0ud2lkdGggLyAyLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5oZWlnaHQgLyAyLFxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5zZXRQb3NpdGlvbihcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAvIDIsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAvIDIsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA5KSB7XG4gICAgICBsZXQgdGhyZXNoSG9sZDogbnVtYmVyID0gMTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoICsgdGhyZXNoSG9sZCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAtIHRocmVzaEhvbGQsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC0gdGhyZXNoSG9sZCxcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIHRocmVzaEhvbGQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLSB0aHJlc2hIb2xkLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLndpZHRoICsgdGhyZXNoSG9sZCxcbiAgICAgICAgMCxcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS53aWR0aCAtIHRocmVzaEhvbGQsXG4gICAgICAgIDAsXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uc2V0UG9zaXRpb24oXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggKyB0aHJlc2hIb2xkLFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzZdLmhlaWdodCArIHRocmVzaEhvbGQsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLnNldFBvc2l0aW9uKFxuICAgICAgICAwLFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLmhlaWdodCArIHRocmVzaEhvbGQsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLnNldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0ud2lkdGggLSB0aHJlc2hIb2xkLFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCArIHRocmVzaEhvbGQsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNikge1xuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoICsgMixcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAvIDIsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIDIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLyAyLFxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbihcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCArIDIsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oXG4gICAgICAgIDAsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAtIDIsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSAxNikge1xuICAgICAgdmFyIHRocmVzaEhvbGQ6IG51bWJlciA9IDYyLjU7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbihcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCAtIHRocmVzaEhvbGQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgKyB0aHJlc2hIb2xkLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCArIHRocmVzaEhvbGQsXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgKyB0aHJlc2hIb2xkLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyB0aHJlc2hIb2xkLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0ICsgdGhyZXNoSG9sZCxcbiAgICAgICk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5zZXRQb3NpdGlvbihcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS53aWR0aCAtIHRocmVzaEhvbGQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5oZWlnaHQgLyAyLFxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS5zZXRQb3NpdGlvbihcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS5oZWlnaHQgLyAyLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzZdLnNldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggLyAyLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5zZXRQb3NpdGlvbihcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLndpZHRoICsgdGhyZXNoSG9sZCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLmhlaWdodCAvIDIsXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uc2V0UG9zaXRpb24oXG4gICAgICAgIC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoICsgdGhyZXNoSG9sZCksXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5zZXRQb3NpdGlvbihcbiAgICAgICAgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0ud2lkdGggLyAyKSxcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5oZWlnaHQgLyAyLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5zZXRQb3NpdGlvbihcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS53aWR0aCAvIDIsXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTBdLmhlaWdodCAvIDIsXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLnNldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLndpZHRoICsgdGhyZXNoSG9sZCxcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxMV0uaGVpZ2h0IC8gMixcbiAgICAgICk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMl0uc2V0UG9zaXRpb24oXG4gICAgICAgIC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS53aWR0aCArIHRocmVzaEhvbGQpLFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS5oZWlnaHQgLSB0aHJlc2hIb2xkLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbihcbiAgICAgICAgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTNdLndpZHRoIC8gMiksXG4gICAgICAgIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTNdLmhlaWdodCAtIHRocmVzaEhvbGQsXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLnNldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLndpZHRoIC8gMixcbiAgICAgICAgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0uaGVpZ2h0IC0gdGhyZXNoSG9sZCxcbiAgICAgICk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uc2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0ud2lkdGggKyB0aHJlc2hIb2xkLFxuICAgICAgICAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS5oZWlnaHQgLSB0aHJlc2hIb2xkLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXSk7XG4gICAgICBjbG9uZS5zZXRQYXJlbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikpO1xuICAgICAgY2xvbmUuc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIGxldCBfcmFuZG9tTnVtYmVyOiBudW1iZXIgPSAxO1xuICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICBfcmFuZG9tTnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX3JhbmRvbU51bWJlcik7XG4gICAgICBlbGVtZW50LmFuZ2xlID0gLSg5MCAqIF9yYW5kb21OdW1iZXIpO1xuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucy5zY2FsZSA9IDAuODtcbiAgICB0aGlzLm9wdGlvbnMub3BhY2l0eSA9IDEwMDtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLm9wYWNpdHkgPSAxMDA7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5zY2FsZSA9IDA7XG4gICAgY2MudHdlZW4odGhpcy5vcHRpb25zKVxuICAgICAgLnRvKDAuOCwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikpXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zLCBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlUXVlc3Rpb25Wbykge1xuICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMucHV6emxlUXVlc3Rpb25Wby5kdXJhdGlvbiAtIDAuMztcbiAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoYW5kTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRDbGlja1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8PSAzKSB7XG4gICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGhhbmROb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwLCAxMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyclNjZW5lIDwgNClcbiAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUHV6emxlSW1hZ2UodGhpcy5vcHRpb25zLmdldENoaWxkQnlOYW1lKFwiMVwiKSk7XG4gICAgICAgICAgICAgIH0sIDAuMik7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIG9wdGlvbkNsaWNrZWQoX2V2ZW50OiBjYy5FdmVudCkge1xuICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgIGxldCBoYW5kTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRDbGlja1wiKTtcbiAgICBoYW5kTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XG4gICAgICB7XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50ID0gdHJ1ZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUpIHtcbiAgICAgIHRoaXMucm90YXRlUHV6emxlSW1hZ2UoX2V2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9XG4gIHJlcGVhdFF1ZXN0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnF1ZXN0aW9uUGxheWluZykge1xuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMucXVlc3Rpb25QbGF5aW5nID0gdHJ1ZTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5xdWVzdGlvblBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgfSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByb3RhdGVQdXp6bGVJbWFnZShfbm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgbGV0IGNoaWxkID0gX25vZGU7XG4gICAgY29uc3QgYW5nbGUgPSBjaGlsZC5hbmdsZTtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucm90YXRlQWN0aW9uLCBmYWxzZSk7XG4gICAgY2MudHdlZW4oY2hpbGQpXG4gICAgICAudG8oMC4yLCB7IGFuZ2xlOiBhbmdsZSAtIDkwIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9uc0FsaWduZWQoKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuICBvcHRpb25zQWxpZ25lZCgpIHtcbiAgICBsZXQgbGV2ZWxQYXNzZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQpID0+IHtcbiAgICAgIGlmIChfY2hpbGQuYW5nbGUgJSAzNjAgIT0gMCkge1xuICAgICAgICBsZXZlbFBhc3NlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsZXZlbFBhc3NlZCkge1xuICAgICAgLy9pZiB0aGUgaXRlbXMgaGF2ZSBiZWVuIGFsaWduZWRcbiAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBY3Rpb24sIGZhbHNlKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmpvY2tleUNvcnJlY3QyLCBmYWxzZSk7XG4gICAgICB9LCB0aGlzLmNvcnJlY3RBY3Rpb24uZHVyYXRpb24gLSAxKTtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zKVxuICAgICAgICAudG8oMC4zLCB7IHg6IDAsIHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxIH0pXG4gICAgICAgIC5zdGFydCgpO1xuXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgLy8gdGhpcy53b3JkQXBwZWFyKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAvL2NoZWNrIHdoYXQgaW50ZXJhY3Rpb24gaXQgaXMgYW5kIGNhbGwgdGhlIHJlc3BlY3RpdmUgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vc2hvdyBxdWVzdGlvbiBwYW5lbFxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndvcmRWb1F1ZXN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIlxuICAgICAgICAgICAgICA/IHRoaXMuT3B0aW9uc0FwcGVhcigpXG4gICAgICAgICAgICAgIDogdGhpcy53b3JkQXBwZWFyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5wdXp6bGVWb0l0ZXJhdGlvbi5kdXJhdGlvbik7XG4gICAgICB9LCAwLjUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQ2FsbEpvY2tleSgpIHtcbiAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICBhbmltID0gW1xuICAgICAgICBcInBvc3NpdGl2ZVwiLFxuICAgICAgICBcInBvc3NpdGl2ZTJcIixcbiAgICAgICAgXCJwb3NzaXRpdmUzXCIsXG4gICAgICAgIFwicG9zc2l0aXZlNFwiLFxuICAgICAgICBcInBvc3NpdGl2ZTVcIixcbiAgICAgICAgXCJwb3NzaXRpdmU2XCIsXG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xuICAgICAgYW5pbSA9IFtcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxuICAgICAgICBcInBvc2l0aXZlXzNcIixcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxuICAgICAgICBcInBvc2l0aXZlXzZcIixcbiAgICAgICAgXCJwb3NpdGl2ZV83XCIsXG4gICAgICAgIFwicG9zaXRpdmVfOFwiLFxuICAgICAgICBcInBvc2l0aXZlXzlcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8xMFwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxuICAgICAgICBcInBvc2l0aXZlXzJcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxuICAgICAgICBcInBvc2l0aXZlXzVcIixcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICBhbmltID0gW1wicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgYW5pbSA9IFtcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxuICAgICAgICBcInBvc2l0aXZlXzNcIixcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgYW5pbSA9IFtcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxuICAgICAgICBcInBvc2l0aXZlXzNcIixcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XG4gICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xuICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XG4gICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICBwb3MgPSBbMTkwMCwgMTkwMF07XG4gICAgICBqb2NrZXl0d2VlbiA9IFs4NzAsIDg3MF07XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgIHRoaXMuY3VycmVudEpvY2tleS5zZXRQb3NpdGlvbihcbiAgICAgIHBvc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXkueSxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiZcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIlxuICAgICkge1xuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IC0wLjY1O1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgIH1cbiAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXG4gICAgICAudG8oXG4gICAgICAgIDAuNSxcbiAgICAgICAgeyB4OiBqb2NrZXl0d2VlbltzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcbiAgICAgICAgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0sXG4gICAgICApXG4gICAgICAuc3RhcnQoKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSlcbiAgICAgICAgICAudG8oXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICB7IHg6IHBvc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcbiAgICAgICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9LFxuICAgICAgICAgIClcbiAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcbiAgICAgICAgdGhpcy5sZXZlbEZpbmlzaGVkKCk7XG4gICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICB9LCAwLjUpO1xuICB9XG5cbiAgY2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcbiAgICAgICAgICBcIm5lZ2V0aXZlXCIsXG4gICAgICAgICAgXCJuZWdldGl2ZTJcIixcbiAgICAgICAgICBcIm5lZ2V0aXZlM1wiLFxuICAgICAgICAgIFwibmVnZXRpdmU0XCIsXG4gICAgICAgICAgXCJuZWdldGl2ZTVcIixcbiAgICAgICAgICBcIm5lZ2V0aXZlNlwiLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XG4gICAgICAgIGFuaW0gPSBbXG4gICAgICAgICAgXCJuZWdhdGl2ZV8xXCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV8yXCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV8zXCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV80XCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV81XCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV82XCIsXG4gICAgICAgICAgXCJuZWdhdGl2ZV83XCIsXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XG4gICAgICAgIGFuaW0gPSBbXCJub1wiXTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XG4gICAgICAgIGFuaW0gPSBbXCJ0cnlfYWdhaW5cIl07XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XG4gICAgICB9XG5cbiAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBsZXQgcG9zOiBudW1iZXIgPSAxNjAwO1xuICAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXIgPSA0NTA7XG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgIHBvcyA9IDE5MDA7XG4gICAgICAgIGpvY2tleXR3ZWVuID0gODcwO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvcywgLTM1MCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXG4gICAgICAgIC50bygwLjUsIHsgeDogam9ja2V5dHdlZW4gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IHBvcyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGVsZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICB9LCAwLjUpO1xuICAgIH0sIDAuNyk7XG4gIH1cblxuICBPcHRpb25zQXBwZWFyKCkge1xuICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcbiAgICAgIC50bygwLjMsIHsgeDogdGhpcy5vcHRpb25zLnggLSAyMDAsIHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxIH0pXG4gICAgICAuc3RhcnQoKTtcblxuICAgIGNjLnR3ZWVuKHRoaXMubXlPcHRpb25zKS50bygwLjMsIHsgeTogMCB9KS5zdGFydCgpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMubXlPcHRpb25zLmFjdGl2ZSA9IHRydWU7XG4gICAgfSwgMC41KTtcblxuICAgIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XG4gICAgICB9LCAwLjUgKiBpbmRleCk7XG4gICAgfSk7XG4gIH1cbiAgb25CdXR0b25DbGljayhfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgbGV0IF9ub2RlOiBjYy5Ob2RlID0gX2V2ZW50LnRhcmdldDtcblxuICAgIGlmIChfbm9kZS5uYW1lID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAhPSBfbm9kZS5uYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygxLCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcblxuICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEJ1dHRvbiwgZmFsc2UpO1xuICAgICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICBfbm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuXG4gICAgICBjYy50d2Vlbihfbm9kZSlcbiAgICAgICAgLnRvKDAuMSwgeyBzY2FsZVg6IDAuNywgc2NhbGVZOiAwLjgsIGNvbG9yOiBjYy5Db2xvci5HUkVFTiB9KVxuICAgICAgICAudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLCBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXG4gICAgICAgIC5zdGFydCgpO1xuXG4gICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XG4gICAgICB9LCB0aGlzLndvcmRWb0l0ZXJhdGlvbi5kdXJhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndyb25nQW5zd2VyLCBmYWxzZSk7XG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcbiAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBjYy50d2Vlbihfbm9kZSlcbiAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMTAgfSlcbiAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxuICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAtMTAgfSlcbiAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxuICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAxMCB9KVxuICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXG4gICAgICAgIC5zdGFydCgpO1xuXG4gICAgICBjYy50d2Vlbihfbm9kZSlcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KVxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSlcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IHRoaXMuY29sb3JWYWx1ZSB9KVxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSlcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiB0aGlzLmNvbG9yVmFsdWUgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgd29yZEFwcGVhcigpIHtcbiAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpXG4gICAgICAudG8oMSwgeyBzY2FsZTogdGhpcy5vcHRpb25zLnNjYWxlIC0gMC4yIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpXG4gICAgICAudG8oMSwgeyB4OiAwLCB5OiAxMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcbiAgICAgIC5zdGFydCgpO1xuICAgIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XG4gICAgICB9LCAwLjUgKiBpbmRleCk7XG4gICAgfSk7XG4gICAgdGhpcy53b3Jkc05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvUXVlc3Rpb24sIGZhbHNlKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIoXG4gICAgICAgIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzBdLmdldFBvc2l0aW9uKCkueCxcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMF0uZ2V0UG9zaXRpb24oKS55IC0gMjUwLFxuICAgICAgKTtcbiAgICAgIGxldCBwb3MyOiBjYy5WZWMyID0gY2MudjIoXG4gICAgICAgIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzFdLmdldFBvc2l0aW9uKCkueCxcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMV0uZ2V0UG9zaXRpb24oKS55IC0gMjUwLFxuICAgICAgKTtcbiAgICAgIGxldCBoYW5kTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRDbGljazFcIik7XG4gICAgICBoYW5kTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgaGFuZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGhhbmROb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgIGNjLnR3ZWVuKGhhbmROb2RlKVxuICAgICAgICAudG8oMSwgeyB4OiBwb3MyLngsIHk6IHBvczIueSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgaGFuZE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0YWJsZT0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy53b3JkU3dhcCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3b3Jkc1wiKS5jaGlsZHJlblswXSwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMV0sIC0yNTAsIDApO1xuICAgICAgICAvLyB9LCAwKTtcbiAgICAgICAgdGhpcy5FbmREcmFnKCk7XG4gICAgICB9LCAxKTtcbiAgICB9LCB0aGlzLndvcmRWb1F1ZXN0aW9uLmR1cmF0aW9uIC0gMSk7XG4gIH1cblxuICB3b3JkU3dhcChfbm9kZTE6IGNjLk5vZGUsIF9ub2RlMjogY2MuTm9kZSwgeDE6IG51bWJlciwgeDI6IG51bWJlcikge1xuICAgIHRoaXMuRW5kRHJhZygpO1xuICAgIHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcbiAgICB0aGlzLmN1cnJXb3JkU2VxID0gdGhpcy5jdXJyV29yZFNlcS5yZXBsYWNlKF9ub2RlMi5uYW1lLCBfbm9kZTEubmFtZSk7XG4gICAgdGhpcy5jdXJyV29yZFNlcSA9IHRoaXMuY3VycldvcmRTZXEucmVwbGFjZShcInhcIiwgX25vZGUyLm5hbWUpO1xuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xuXG4gICAgbGV0IHdvcmQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyV29yZFNlcS5sZW5ndGg7IGkrKykge1xuICAgICAgd29yZCArPSB0aGlzLndvcmRzTm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jdXJyV29yZFNlcVtpXSlcbiAgICAgICAgLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIndvcmQtLVwiICsgd29yZCk7XG5cbiAgICBjYy50d2Vlbihfbm9kZTEpLnRvKDAuMSwgeyB4OiB4MiB9KS5zdGFydCgpO1xuICAgIGNjLnR3ZWVuKF9ub2RlMilcbiAgICAgIC50bygwLjEsIHsgeDogeDEgfSlcbiAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyV29yZFNlcSwgdGhpcy5jb3JyZWN0V29yZFNlcVswXSwgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICBpZiAod29yZCA9PSB0aGlzLmNvcnJlY3RXb3JkU2VxWzBdKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3b3JkcyBhbGlnbmVkXCIpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubGV2ZWxGaW5pc2hlZCgpO1xuXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgfSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xuICAgICAgICAgIH0sIHRoaXMuc3dpcGVBY3Rpb24uZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cbiAgRW5kRHJhZygpIHtcbiAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZCA9IG51bGw7XG4gICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XG4gIH1cbiAgd29yZFRvdWNoU3RhcnQoX2V2ZW50OiBjYy5FdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0YWJsZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBldmVudFwiKTtcbiAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gX2V2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zID0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQuZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd29yZFRvdWNoTW92ZShfZXZlbnQpIHtcbiAgICAvL2NoZWNrIGlmIHRoZSBzYW1lIG9iamVjdCBpcyBtb3Zpbmcgd2hpY2ggc3RhcnRlZCBmaXJzdFxuICAgIGlmIChcbiAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkICYmXG4gICAgICBfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQubmFtZVxuICAgICkge1xuICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCArPSBfZXZlbnQudG91Y2guZ2V0RGVsdGEoKS54O1xuICAgICAgaWYgKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLnggPiA4MDAgfHwgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCA8IC04MDApIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNldCBwb3NpdGlvblwiKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy53b3JkQ3VycmVudFNlbGVjZWQpXG4gICAgICAgICAgLnRvKDAuMSwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXG4gICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5FbmREcmFnKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGxldCBjb2xsaXNpb25XaXRoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCkgPT4ge1xuICAgICAgICBpZiAoX2NoaWxkLm5hbWUgPT0gX2V2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfY2hpbGQuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyhfZXZlbnQudGFyZ2V0LmdldFBvc2l0aW9uKCkpKSB7XG4gICAgICAgICAgY29sbGlzaW9uV2l0aCA9IF9jaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoY29sbGlzaW9uV2l0aCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpc2lvbiB3aXRoIFwiLCBjb2xsaXNpb25XaXRoLm5hbWUpO1xuICAgICAgICB0aGlzLndvcmRTd2FwKFxuICAgICAgICAgIGNvbGxpc2lvbldpdGgsXG4gICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQsXG4gICAgICAgICAgY29sbGlzaW9uV2l0aC54LFxuICAgICAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLngsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdvcmRUb3VjaEVuZChfZXZlbnQpIHtcbiAgICBpZiAoX2V2ZW50LnRhcmdldC5uYW1lID09IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkPy5uYW1lKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkVuZCBldmVudFwiKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkKVxuICAgICAgICAudG8oMC4yLCB7IHg6IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLnggfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgICB0aGlzLnNlbGVjdGFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGxldmVsRmluaXNoZWQoKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBY3Rpb24sIGZhbHNlKTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcblxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoNiwgdGhpcy5ub2RlKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDAuOCk7XG4gICAgICB9LCAxLjIpO1xuICAgIH0sIDEuNSk7XG4gIH1cblxuICBvblNvdW5kQnV0dG9uQ2xpY2soKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHV6emxlUXVlc3Rpb25WbywgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIoX251bWJlcjogbnVtYmVyKSB7XG4gICAgX251bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycCgxLCAzLCBfbnVtYmVyKTtcbiAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcbiAgICByZXR1cm4gX251bWJlcjtcbiAgfVxuICBwcml2YXRlIGdldFJhbmRvbU51bWJlcnAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcbiAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcbiAgICByZXR1cm4gX251bWJlcjtcbiAgfVxuXG4gIGxvYWRTcHJpdGVGcmFtZShcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcbiAgKSB7XG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcbiAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuICBsb2FkQXVkaW9DbGlwKFxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCxcbiAgKSB7XG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICBcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSxcbiAgICAgIGNjLkF1ZGlvQ2xpcCxcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBHZW5lcmF0ZU9wdGlvbnMoXG4gICAgX25vZGU6IGNjLk5vZGUgPSB0aGlzLm15T3B0aW9ucyxcbiAgICBfdGVtcGxhdGU6IHN0cmluZyA9IFwidGVtcGxhdGUxXCIsXG4gICkge1xuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBpIDxcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoX3RlbXBsYXRlKSk7XG4gICAgICBvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIG9wdGlvbi5zZXRQYXJlbnQoX25vZGUpO1xuICAgICAgb3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMjU1O1xuICAgICAgb3B0aW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShfdGVtcGxhdGUpLmRlc3Ryb3koKTtcbiAgICBpZiAoX3RlbXBsYXRlID09IFwidGVtcGxhdGUxXCIpIHtcbiAgICAgIHRoaXMuT3B0aW9uc0xheW91dFZlcnRpY2FsKCk7XG4gICAgICB0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLm51bWJlck9mT3B0aW9ucyA9PSAyXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oMCwgMTIwKTtcbiAgICAgICAgdGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oMCwgLTEyMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0KCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMud29yZHNOb2RlLCAzMCk7XG4gICAgICB9LCAxKTtcbiAgICB9XG4gIH1cblxuICBPcHRpb25zTGF5b3V0KCkge1xuICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy53b3Jkc05vZGU7XG4gICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcblxuICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xuXG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xuICAgICAgbGV0IG9wdGlvbldpZHRoID0gb3B0aW9uLndpZHRoO1xuICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XG5cbiAgICAgIHRvdGFsV2lkdGggKz0gb3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXZhaWxhYmxlV2lkdGggPSBvcHRpb25zTGF5b3V0LndpZHRoO1xuICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxuICAgICAgdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XG5cbiAgICBsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxuICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XG5cbiAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cbiAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgIG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXG4gICAgICBsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyBvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWDtcbiAgICAgIG9wdGlvbi54ID0gcG9zWCAtIG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclg7XG5cbiAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuXG4gICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcbiAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xuICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XG4gIH1cbiAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xuICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIHdpZHRoIHJlcXVpcmVkXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRvdGFsV2lkdGggKz0gY2hpbGQud2lkdGg7XG4gICAgfVxuICAgIHRvdGFsV2lkdGggKz0gc3BhY2luZyAqIChjaGlsZHJlbi5sZW5ndGggLSAxKTsgLy8gQWRkIHNwYWNlcyBiZXR3ZWVuIGNoaWxkcmVuXG5cbiAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXG4gICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcblxuICAgIC8vIEFycmFuZ2UgY2hpbGRyZW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XG4gICAgICBzdGFydFggKz0gY2hpbGQud2lkdGggKyBzcGFjaW5nO1xuICAgIH1cbiAgfVxuXG4gIE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcbiAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xuICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XG5cbiAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcblxuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgbGV0IG1heFdpZHRoID0gMDtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcbiAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcbiAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xuXG4gICAgICB0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICBtYXhXaWR0aCA9IG9wdGlvbldpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdmFpbGFibGVIZWlnaHQgPSBvcHRpb25zTGF5b3V0LmhlaWdodDtcbiAgICBsZXQgdG90YWxIZWlnaHRXaXRoUGFkZGluZyA9XG4gICAgICB0b3RhbEhlaWdodCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcblxuICAgIGxldCBhY2N1bXVsYXRlZEhlaWdodCA9IDA7XG5cbiAgICAvLyBQb3NpdGlvbiBlYWNoIG9wdGlvbiBub2RlIHZlcnRpY2FsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXG4gICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcblxuICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxuICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcbiAgICAgIGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyBvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclk7XG4gICAgICBvcHRpb24ueSA9IHBvc1kgLSBvcHRpb25zTGF5b3V0LmhlaWdodCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWTtcblxuICAgICAgYWNjdW11bGF0ZWRIZWlnaHQgKz0gb3B0aW9uLmhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcblxuICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XG4gICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcbiAgfVxuXG4gIHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xuICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5teU9wdGlvbnM7XG4gICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcblxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIHRoZSBuZXcgcG9zaXRpb25zXG4gICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBwb3NpdGlvbnMgaW4gcmV2ZXJzZSBvcmRlclxuICAgIGZvciAobGV0IGkgPSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25Ob2Rlc1tpXS55ID0gbmV3UG9zaXRpb25zW2ldO1xuICAgIH1cbiAgfVxufVxuIl19
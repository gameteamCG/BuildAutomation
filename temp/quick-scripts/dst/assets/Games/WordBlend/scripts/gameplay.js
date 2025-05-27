
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
        this.isSecondInteraction = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].needReiteration;
        this.interactionType = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].interactionType;
        if (this.isSecondInteraction) {
            // for (let i = 0; startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     this.currWordSeq += (i + 1).toString();
            // }
            if (this.interactionType == "1") {
                this.GenerateOptions(this.myOptions, "template1");
                this.correctAnswer = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
            else {
                this.GenerateOptions(this.wordsNode, "template2");
                this.correctWordSeq[0] = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
        }
    };
    NewClass.prototype.resetInteraction = function () {
        this.unschedule(this.sheduleQuestionClip);
        this.scheduleOnce(this.sheduleQuestionClip, 10);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
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
        canvas.on('touchstart', function (event) {
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
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
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
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
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
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_1.interactionType == "1") {
                        this_1.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_1.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
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
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (spriteFrame) {
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_2 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
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
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_3.interactionType == "1") {
                        this_3.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_3.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_3 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
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
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 4) {
            _width = 250;
            _height = 250;
        }
        else if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 9) {
            _width = 166;
            _height = 166;
        }
        for (var i = 0; i < this.options.children.length; i++) {
            this.options.children[i].width = _width;
            this.options.children[i].height = _height;
            if (i >= StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles) {
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
            _this.scheduleOnce(function () { _this.resetInteraction(); }, 0);
        };
        this.scheduleOnce(function () {
            _this.SetFrameOptions();
        }, 0.1);
        this.wordsNode.children.forEach(function (element) {
            element.on('touchstart', function (_event) { _this.wordTouchStart(_event); });
            element.on('touchmove', function (_event) { _this.wordTouchMove(_event); });
            element.on('touchend', function (_event) { _this.wordTouchEnd(_event); });
        });
    };
    NewClass.prototype.SetFrameOptions = function () {
        var _this = this;
        this.options.active = true;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isHintRequired) {
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
            this.options.children[0].setPosition(-(this.options.children[0].width) + threshHold_1, this.options.children[0].height - threshHold_1);
            this.options.children[1].setPosition(0, this.options.children[1].height - threshHold_1);
            this.options.children[2].setPosition(this.options.children[2].width - threshHold_1, this.options.children[2].height - threshHold_1);
            this.options.children[3].setPosition(-(this.options.children[3].width) + threshHold_1, 0);
            this.options.children[4].setPosition(0, 0);
            this.options.children[5].setPosition(this.options.children[5].width - threshHold_1, 0);
            this.options.children[6].setPosition(-(this.options.children[6].width) + threshHold_1, -(this.options.children[6].height) + threshHold_1);
            this.options.children[7].setPosition(0, -(this.options.children[7].height) + threshHold_1);
            this.options.children[8].setPosition(this.options.children[8].width - threshHold_1, -(this.options.children[8].height) + threshHold_1);
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
            this.options.children[10].setPosition((this.options.children[10].width / 2), -this.options.children[10].height / 2);
            this.options.children[11].setPosition((this.options.children[11].width + threshHold), -this.options.children[11].height / 2);
            this.options.children[12].setPosition(-(this.options.children[12].width + threshHold), -this.options.children[12].height - threshHold);
            this.options.children[13].setPosition(-(this.options.children[13].width / 2), -this.options.children[13].height - threshHold);
            this.options.children[14].setPosition((this.options.children[14].width / 2), -this.options.children[14].height - threshHold);
            this.options.children[15].setPosition((this.options.children[15].width + threshHold), -this.options.children[15].height - threshHold);
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
                    handNode.getComponent(cc.Animation).on("finished", function () {
                    });
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
            .call(function () { _this.optionsAligned(); })
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
            cc.tween(this.options).to(0.3, { x: 0, y: 0, scaleX: 1, scaleY: 1 }).start();
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
                        _this.interactionType == "1" ? _this.OptionsAppear() : _this.wordAppear();
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
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
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
        if (StartGame_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
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
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            var pos = 1600;
            var jockeytween = 450;
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                pos = 1900;
                jockeytween = 870;
            }
            _this.currentJockey.setPosition(pos, -350);
            cc.tween(_this.currentJockey).to(0.5, { x: jockeytween }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey).to(0.5, { x: pos }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
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
        cc.tween(this.options).to(0.3, { x: this.options.x - 200, y: 0, scaleX: 1, scaleY: 1 }).start();
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
            cc.tween(_node).to(0.1, { scaleX: 0.7, scaleY: 0.8, color: cc.Color.GREEN }).to(0.1, { scaleX: 1, scaleY: 1, color: this.colorValue }).start();
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
            cc.tween(_node).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).to(0.1, { angle: -10 })
                .to(0.1, { angle: 0 }).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).start();
            cc.tween(_node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(this.options).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).start();
        }
    };
    NewClass.prototype.wordAppear = function () {
        var _this = this;
        this.selectable = false;
        cc.tween(this.options).to(1, { scale: this.options.scale - 0.2 }, { easing: "sineInOut" }).start();
        cc.tween(this.options).to(1, { x: 0, y: 100 }, { easing: "sineInOut" }).start();
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
            cc.tween(handNode).to(1, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" }).start();
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
            word += this.wordsNode.getChildByName(this.currWordSeq[i]).children[0].getComponent(cc.Label).string;
        }
        // console.log("word--" + word);
        cc.tween(_node1)
            .to(0.1, { x: x2 })
            .start();
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
        if (this.wordCurrentSeleced && _event.target.name == this.wordCurrentSeleced.name) {
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
        console.log('levelComplete--' + this.currScene);
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
        for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
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
            var posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdvcmRCbGVuZFxcc2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQWlHO0FBQ2pHLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9xQ0M7UUFqcUNXLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUN2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsNEJBQTRCO1FBQzVCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFJaEMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixH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SSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFVLENBQUMsQ0FBQztTQUN0STthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FLbEg7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUl6QyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUE7WUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFeEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUVoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4SCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTNILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUdwSCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFOUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRTdILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztTQUV6STtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FB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LENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUdoRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDL0csRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFcEgsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3ZILEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUd6SDtJQUVMLENBQUM7SUFJRCw2QkFBVSxHQUFWO1FBQUEsaUJBNkJDO1FBNUJHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUMxQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xELENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IseURBQXlEO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEdBQUcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkgsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hILElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdkIsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BGLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLHlCQUF5QjtnQkFDekIsNEJBQTRCO2dCQUM1Qiw0SEFBNEg7Z0JBQzVILFNBQVM7Z0JBQ1QsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLE1BQWUsRUFBRSxNQUFlLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFBakUsaUJBbUNDO1FBbENHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRW5ELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN4RztRQUNELGdDQUFnQztRQUVoQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNYLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbEIsS0FBSyxFQUFFLENBQUE7UUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNYLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbEIsSUFBSSxDQUFDO1lBQ0YseUVBQXlFO1lBQ3pFLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLGdDQUFnQztnQkFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2Qsd0JBQXdCO29CQUV4QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELGlDQUFjLEdBQWQsVUFBZSxNQUFnQjtRQUMzQixnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUFwQixpQkF1QkM7UUF0Qkcsd0RBQXdEO1FBQ3hELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7WUFDL0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JFLGlDQUFpQztnQkFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7cUJBQzVCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUM1QyxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7YUFDaEI7WUFDRCxJQUFJLGVBQWEsR0FBWSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtnQkFDbkMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUFFLE9BQU87aUJBQUU7Z0JBQ2xELElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7b0JBQUUsZUFBYSxHQUFHLE1BQU0sQ0FBQztpQkFBRTtZQUNsRyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksZUFBYSxFQUFFO2dCQUNmLHNEQUFzRDtnQkFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLGVBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hHO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLE1BQU07O1FBQ2YsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksV0FBSSxJQUFJLENBQUMsa0JBQWtCLDBDQUFFLElBQUksQ0FBQSxFQUFFO1lBQ3JELDRCQUE0QjtZQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztpQkFDNUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzVDLEtBQUssRUFBRSxDQUFBO1lBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQ08sZ0NBQWEsR0FBckI7UUFBQSxpQkF5QkM7UUF4QkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFHdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLElBQUksS0FBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7d0JBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDcEM7Z0JBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVosQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBSVosQ0FBQztJQUVPLGtDQUFlLEdBQXZCLFVBQXdCLE9BQWU7UUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ08sbUNBQWdCLEdBQXhCLFVBQXlCLEdBQVcsRUFBRSxHQUFXO1FBQzdDLElBQUksT0FBTyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixTQUFpQixFQUFFLFFBQStDO1FBQzlFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ3RFLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLFFBQTZDO1FBQzFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ3BFLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsS0FBK0IsRUFBRSxTQUErQjtRQUFoRixpQkF3QkM7UUF4QmUsc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsU0FBUztRQUFFLDBCQUFBLEVBQUEsdUJBQStCO1FBQzVFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4RyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlDLElBQUksU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUMxQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtnQkFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7YUFDSTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7SUFDTCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUV6QyxJQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUVqQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFakMsVUFBVSxJQUFJLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztZQUNsRCxJQUFJLFlBQVksR0FBRyxTQUFTLEVBQUU7Z0JBQzFCLFNBQVMsR0FBRyxZQUFZLENBQUM7YUFDNUI7U0FDSjtRQUVELElBQUksY0FBYyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxxQkFBcUIsR0FBRyxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO1FBQzFGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXRFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1Qiw0Q0FBNEM7WUFDNUMsSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUM7WUFFcEMsbUJBQW1CO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLElBQUksaUJBQWlCLENBQUM7WUFDbEMsTUFBTSxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQztZQUVuQyxxREFBcUQ7WUFDckQsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhFLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUM7WUFFekQsbURBQW1EO1lBQ25ELEtBQXFCLFVBQWUsRUFBZixLQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQWYsY0FBZSxFQUFmLElBQWUsRUFBRTtnQkFBakMsSUFBSSxRQUFRLFNBQUE7Z0JBQ2IsUUFBUSxDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztnQkFDaEMsUUFBUSxDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztnQkFDaEMsUUFBUSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQztnQkFDcEMsUUFBUSxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQzthQUN4QztTQUNKO1FBRUQsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ25ELENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLFVBQW1CLEVBQUUsT0FBZTtRQUNoRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUVuQixpQ0FBaUM7UUFDakMsS0FBa0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7WUFBdkIsSUFBSSxLQUFLLGlCQUFBO1lBQ1YsVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtRQUU3RSxzQkFBc0I7UUFDdEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLG1CQUFtQjtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELHdDQUFxQixHQUFyQjtRQUNJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUV6QyxJQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUVqQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLGtFQUFrRTtRQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRWpDLFdBQVcsSUFBSSxZQUFZLEdBQUcscUJBQXFCLENBQUM7WUFDcEQsSUFBSSxXQUFXLEdBQUcsUUFBUSxFQUFFO2dCQUN4QixRQUFRLEdBQUcsV0FBVyxDQUFDO2FBQzFCO1NBQ0o7UUFFRCxJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksc0JBQXNCLEdBQUcsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztRQUM1RixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztRQUV4RSxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUUxQix1Q0FBdUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVCLDRDQUE0QztZQUM1QyxJQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztZQUVwQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQztZQUNsQyxNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO1lBRW5DLHFEQUFxRDtZQUNyRCxJQUFJLElBQUksR0FBRyxpQkFBaUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakUsaUJBQWlCLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQztZQUUzRCxtREFBbUQ7WUFDbkQsS0FBcUIsVUFBZSxFQUFmLEtBQUEsTUFBTSxDQUFDLFFBQVEsRUFBZixjQUFlLEVBQWYsSUFBZSxFQUFFO2dCQUFqQyxJQUFJLFFBQVEsU0FBQTtnQkFDYixRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDO2dCQUNwQyxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDakQsQ0FBQztJQUVELHVDQUFvQixHQUFwQjtRQUNJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUV6Qyw0Q0FBNEM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXRCLDJDQUEyQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxzQ0FBc0M7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBL3BDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBSzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFPakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDYTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBT2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRTlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBMUU3QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb3FDNUI7SUFBRCxlQUFDO0NBcHFDRCxBQW9xQ0MsQ0FwcUNxQyxFQUFFLENBQUMsU0FBUyxHQW9xQ2pEO2tCQXBxQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd29yZHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXlPcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29ycmVjdEFjdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBpbmNvcnJlY3RCdXR0b246IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcm90YXRlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHN3aXBlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHB1enpsZVF1ZXN0aW9uVm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwdXp6bGVWb0l0ZXJhdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHdvcmRWb1F1ZXN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgd29yZFZvSXRlcmF0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGpvY2tleUNvcnJlY3QyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdyb25nQW5zd2VyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHRlbXBvcmFyeVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhbGxpb25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdGxjUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB0bGNOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzU2Vjb25kSW50ZXJhY3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpbnRlcmFjdGlvblR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG5cclxuXHJcbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJhY3RhYmxlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgd29yZEN1cnJlbnRTZWxlY2VkUG9zOiBjYy5WZWMyO1xyXG5cclxuICAgIHByaXZhdGUgcXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjb3JyZWN0V29yZFNlcTogc3RyaW5nW10gPSBbXCIxMzJcIl07XHJcbiAgICBwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgY3VyclNjZW5lOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBjb2xvclZhbHVlOiBjYy5Db2xvciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGVkdWxlUXVlc3Rpb25DbGlwO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5uZWVkUmVpdGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblR5cGUgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pbnRlcmFjdGlvblR5cGU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZU9wdGlvbnModGhpcy5teU9wdGlvbnMsIFwidGVtcGxhdGUxXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMud29yZHNOb2RlLCBcInRlbXBsYXRlMlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXNldEludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXApO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCwgMTApO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25OZWdhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlVwZGF0ZUpzb25EYXRhKCk7XHJcblxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclZhbHVlID0gdGhpcy5vcHRpb25zLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VyclNjZW5lID0gc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUgLSAxLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA+PSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgodGhpcy5jdXJyU2NlbmUgKyAxKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCkge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhdGVHYW1lKCk7XHJcbiAgICAgICAgfSwgMSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVKc29uRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5tYWluQmc7XHJcblxyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVRdWVzdGlvblZvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uUHV6emxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wdXp6bGVzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucHV6emxlVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUyLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb1F1ZXN0aW9uID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycldvcmRTZXEtLVwiICsgdGhpcy5jdXJyV29yZFNlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnJlaXRlcmF0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uUHV6emxlSW1hZ2VOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnB1enpsZXNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVZvSXRlcmF0aW9uID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lMiwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9RdWVzdGlvbiA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9JdGVyYXRpb24gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBfd2lkdGggPSAyNTA7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAyNTA7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA0KSB7XHJcbiAgICAgICAgICAgIF93aWR0aCA9IDI1MDtcclxuICAgICAgICAgICAgX2hlaWdodCA9IDI1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzID09IDkpIHtcclxuICAgICAgICAgICAgX3dpZHRoID0gMTY2O1xyXG4gICAgICAgICAgICBfaGVpZ2h0ID0gMTY2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uaGVpZ2h0ID0gX2hlaWdodDtcclxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBJbml0aWF0ZUdhbWUoKSB7XHJcbiAgICAgICAgLy9yZXBlYXQgbWV0aG9kXHJcbiAgICAgICAgdGhpcy5VcGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUpIHsgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTsgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLmFuZ2xlICUgMzYwICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihfY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7IH0sIDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TZXRGcmFtZU9wdGlvbnMoKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG5cclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCAoX2V2ZW50KSA9PiB7IHRoaXMud29yZFRvdWNoU3RhcnQoX2V2ZW50KTsgfSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hNb3ZlKF9ldmVudCk7IH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaGVuZCcsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hFbmQoX2V2ZW50KTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0RnJhbWVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc0hpbnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAvIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggLyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gOSkge1xyXG4gICAgICAgICAgICBsZXQgdGhyZXNoSG9sZDogbnVtYmVyID0gMVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoKSArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCkgKyB0aHJlc2hIb2xkLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC0gdGhyZXNoSG9sZCwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGgpICsgdGhyZXNoSG9sZCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24oMCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoIC0gdGhyZXNoSG9sZCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCArIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oMCwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAtIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gMTYpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHRocmVzaEhvbGQ6IG51bWJlciA9IDYyLjVcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCArIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCArIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5oZWlnaHQgKyB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS53aWR0aCAvIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLndpZHRoICsgdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLmhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0uaGVpZ2h0IC8gMik7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMl0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLnNldFBvc2l0aW9uKCh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLndpZHRoIC8gMiksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IF9yYW5kb21OdW1iZXI6IG51bWJlciA9IDE7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3JhbmRvbU51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9yYW5kb21OdW1iZXIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFuZ2xlID0gLSg5MCAqIF9yYW5kb21OdW1iZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLnRvKDAuOCwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1enpsZVF1ZXN0aW9uVm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5wdXp6bGVRdWVzdGlvblZvLmR1cmF0aW9uIC0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyU2NlbmUgPCA0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIjFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGhhbmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZENsaWNrXCIpO1xyXG4gICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQdXp6bGVJbWFnZShfZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBlYXRRdWVzdGlvbkNsaWNrZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvblBsYXlpbmcpIHtcclxuICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGVQdXp6bGVJbWFnZShfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gX25vZGU7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucm90YXRlQWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgYW5nbGU6IGFuZ2xlIC0gOTAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLm9wdGlvbnNBbGlnbmVkKCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG9wdGlvbnNBbGlnbmVkKCkge1xyXG4gICAgICAgIGxldCBsZXZlbFBhc3NlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2NoaWxkLmFuZ2xlICUgMzYwICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldmVsUGFzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChsZXZlbFBhc3NlZCkge1xyXG4gICAgICAgICAgICAvL2lmIHRoZSBpdGVtcyBoYXZlIGJlZW4gYWxpZ25lZCBcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qb2NrZXlDb3JyZWN0MiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmNvcnJlY3RBY3Rpb24uZHVyYXRpb24gLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDAuMywgeyB4OiAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMud29yZEFwcGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgd2hhdCBpbnRlcmFjdGlvbiBpdCBpcyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3cgcXVlc3Rpb24gcGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndvcmRWb1F1ZXN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiID8gdGhpcy5PcHRpb25zQXBwZWFyKCkgOiB0aGlzLndvcmRBcHBlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHV6emxlVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2FsbEpvY2tleSgpIHtcclxuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NzaXRpdmVcIiwgXCJwb3NzaXRpdmUyXCIsIFwicG9zc2l0aXZlM1wiLCBcInBvc3NpdGl2ZTRcIiwgXCJwb3NzaXRpdmU1XCIsIFwicG9zc2l0aXZlNlwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV82XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcclxuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdldGl2ZVwiLCBcIm5lZ2V0aXZlMlwiLCBcIm5lZ2V0aXZlM1wiLCBcIm5lZ2V0aXZlNFwiLCBcIm5lZ2V0aXZlNVwiLCBcIm5lZ2V0aXZlNlwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1widHJ5X2FnYWluXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVycCgwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9IDE2MDA7XHJcbiAgICAgICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyID0gNDUwO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSAxOTAwO1xyXG4gICAgICAgICAgICAgICAgam9ja2V5dHdlZW4gPSA4NzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvcywgLTM1MCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IHBvcyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0sIDAuNyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIE9wdGlvbnNBcHBlYXIoKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMC4zLCB7IHg6IHRoaXMub3B0aW9ucy54IC0gMjAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm15T3B0aW9ucykudG8oMC4zLCB7IHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC41ICogaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IF9ldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmIChfbm9kZS5uYW1lID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lICE9IF9ub2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygxLCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QnV0dG9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgICAgICBfbm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjEsIHsgc2NhbGVYOiAwLjcsIHNjYWxlWTogMC44LCBjb2xvcjogY2MuQ29sb3IuR1JFRU4gfSkudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLCBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndyb25nQW5zd2VyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IGFuZ2xlOiAxMCB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtMTAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAxMCB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IHRoaXMuY29sb3JWYWx1ZSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgd29yZEFwcGVhcigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDEsIHsgc2NhbGU6IHRoaXMub3B0aW9ucy5zY2FsZSAtIDAuMiB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyB4OiAwLCB5OiAxMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC41ICogaW5kZXgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvUXVlc3Rpb24sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBjYy52Mih0aGlzLndvcmRzTm9kZS5jaGlsZHJlblswXS5nZXRQb3NpdGlvbigpLngsIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzBdLmdldFBvc2l0aW9uKCkueSAtIDI1MCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MyOiBjYy5WZWMyID0gY2MudjIodGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMV0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLndvcmRzTm9kZS5jaGlsZHJlblsxXS5nZXRQb3NpdGlvbigpLnkgLSAyNTApO1xyXG4gICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2sxXCIpO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhhbmROb2RlKS50bygxLCB7IHg6IHBvczIueCwgeTogcG9zMi55IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RhYmxlPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMud29yZFN3YXAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMF0sIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndvcmRzXCIpLmNoaWxkcmVuWzFdLCAtMjUwLCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FbmREcmFnKCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0sIHRoaXMud29yZFZvUXVlc3Rpb24uZHVyYXRpb24gLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JkU3dhcChfbm9kZTE6IGNjLk5vZGUsIF9ub2RlMjogY2MuTm9kZSwgeDE6IG51bWJlciwgeDI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRW5kRHJhZygpO1xyXG4gICAgICAgIHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcclxuICAgICAgICB0aGlzLmN1cnJXb3JkU2VxID0gdGhpcy5jdXJyV29yZFNlcS5yZXBsYWNlKF9ub2RlMi5uYW1lLCBfbm9kZTEubmFtZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyV29yZFNlcSA9IHRoaXMuY3VycldvcmRTZXEucmVwbGFjZShcInhcIiwgX25vZGUyLm5hbWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgd29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJXb3JkU2VxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdvcmQgKz0gdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jdXJyV29yZFNlcVtpXSkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid29yZC0tXCIgKyB3b3JkKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUxKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgyIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUyKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgxIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycldvcmRTZXEsIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0sIHRoaXMuY3VyclNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JkID09IHRoaXMuY29ycmVjdFdvcmRTZXFbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndvcmRzIGFsaWduZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxldmVsRmluaXNoZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnN3aXBlQWN0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgRW5kRHJhZygpIHtcclxuICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB3b3JkVG91Y2hTdGFydChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RhYmxlKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZXZlbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gX2V2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC5nZXRQb3NpdGlvbihjYy52MigpKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd29yZFRvdWNoTW92ZShfZXZlbnQpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBzYW1lIG9iamVjdCBpcyBtb3Zpbmcgd2hpY2ggc3RhcnRlZCBmaXJzdFxyXG4gICAgICAgIGlmICh0aGlzLndvcmRDdXJyZW50U2VsZWNlZCAmJiBfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ICs9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpLng7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ID4gODAwIHx8IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLnggPCAtODAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc2V0IHBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy53b3JkQ3VycmVudFNlbGVjZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVuZERyYWcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2xsaXNpb25XaXRoOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLm5hbWUgPT0gX2V2ZW50LnRhcmdldC5uYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZC5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKF9ldmVudC50YXJnZXQuZ2V0UG9zaXRpb24oKSkpIHsgY29sbGlzaW9uV2l0aCA9IF9jaGlsZDsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbldpdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlzaW9uIHdpdGggXCIsIGNvbGxpc2lvbldpdGgubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRTd2FwKGNvbGxpc2lvbldpdGgsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLCBjb2xsaXNpb25XaXRoLngsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLngpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd29yZFRvdWNoRW5kKF9ldmVudCkge1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQ/Lm5hbWUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbmQgZXZlbnRcIik7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbGV2ZWxGaW5pc2hlZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEFjdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xldmVsQ29tcGxldGUtLScgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC44KTtcclxuICAgICAgICAgICAgfSwgMS4yKTtcclxuXHJcbiAgICAgICAgfSwgMS41KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKDEsIDMsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXJwKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZU9wdGlvbnMoX25vZGU6IGNjLk5vZGUgPSB0aGlzLm15T3B0aW9ucywgX3RlbXBsYXRlOiBzdHJpbmcgPSBcInRlbXBsYXRlMVwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkpO1xyXG4gICAgICAgICAgICBvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldFBhcmVudChfbm9kZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBvcHRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkuZGVzdHJveSgpO1xyXG4gICAgICAgIGlmIChfdGVtcGxhdGUgPT0gXCJ0ZW1wbGF0ZTFcIikge1xyXG4gICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oMCwgMTIwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIC0xMjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMud29yZHNOb2RlLCAzMCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy53b3Jkc05vZGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBvcHRpb25IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdmFpbGFibGVXaWR0aCA9IG9wdGlvbnNMYXlvdXQud2lkdGg7XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGhXaXRoUGFkZGluZyA9IHRvdGFsV2lkdGggKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuICAgICAgICBsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgKG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYKTtcclxuICAgICAgICAgICAgb3B0aW9uLnggPSBwb3NYIC0gKG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclgpO1xyXG5cclxuICAgICAgICAgICAgYWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LmhlaWdodCA9IG1heEhlaWdodCAqIHNjYWxlRmFjdG9yO1xyXG4gICAgfVxyXG4gICAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxyXG5cclxuICAgICAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8gQXJyYW5nZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHN0YXJ0WCArPSBjaGlsZC53aWR0aCArIHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZUhlaWdodCA9IG9wdGlvbnNMYXlvdXQuaGVpZ2h0O1xyXG4gICAgICAgIGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID0gdG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlSGVpZ2h0IC8gdG90YWxIZWlnaHRXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgICAgICAgIGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyAob3B0aW9uLmhlaWdodCAqIG9wdGlvbi5hbmNob3JZKTtcclxuICAgICAgICAgICAgb3B0aW9uLnkgPSBwb3NZIC0gKG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZKTtcclxuXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkSGVpZ2h0ICs9IG9wdGlvbi5oZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlT3B0aW9uc0xheW91dCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIHRoZSBuZXcgcG9zaXRpb25zXHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9ucy5wdXNoKG9wdGlvbk5vZGVzW2ldLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGVzW2ldLnkgPSBuZXdQb3NpdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
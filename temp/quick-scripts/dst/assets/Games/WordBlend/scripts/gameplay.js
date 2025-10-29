
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
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
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
            if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                word += this.wordsNode.getChildByName(this.currWordSeq[i]).name;
            }
            else {
                word += this.wordsNode.getChildByName(this.currWordSeq[i]).children[0].getComponent(cc.Label).string;
            }
            console.log(word, "word @@@@@@@@@@");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9Xb3JkQmxlbmQvc2NyaXB0cy9nYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzR0FBaUc7QUFDakcsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMHFDQztRQXZxQ1csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUd0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMscUJBQWUsR0FBbUIsRUFBRSxDQUFDO1FBRXJDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0Qyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFFckMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyw0QkFBNEI7UUFDNUIsc0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUloQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsc0JBQWdCLEdBQW1C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QUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBVSxDQUFDLENBQUM7WUFDbkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBVSxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBRWhJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFVLENBQUMsQ0FBQztTQUN0STthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FLbEg7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUl6QyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUE7WUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFeEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUVoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4SCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTNILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUdwSCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMs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RUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUExRTdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwcUM1QjtJQUFELGVBQUM7Q0ExcUNELEFBMHFDQyxDQTFxQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMHFDakQ7a0JBMXFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxuICAgIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3B0aW9uczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd29yZHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBteU9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCIxXCI7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGNvcnJlY3RBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBpbmNvcnJlY3RCdXR0b246IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICByb3RhdGVBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzd2lwZUFjdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHB1enpsZVF1ZXN0aW9uVm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgcHV6emxlVm9JdGVyYXRpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgd29yZFZvUXVlc3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgd29yZFZvSXRlcmF0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgam9ja2V5Q29ycmVjdDI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICB3cm9uZ0Fuc3dlcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICB0ZW1wb3JhcnlTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdGFsbGlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJhZ1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgY3J5b25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIHByaXZhdGUgaXNTZWNvbmRJbnRlcmFjdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpbnRlcmFjdGlvblR5cGU6IHN0cmluZyA9IFwiMVwiO1xuXG5cbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcblxuXG5cbiAgICBwcml2YXRlIGludGVyYWN0YWJsZTtcbiAgICBwcml2YXRlIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZDogY2MuTm9kZTtcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZFBvczogY2MuVmVjMjtcblxuICAgIHByaXZhdGUgcXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGNvcnJlY3RXb3JkU2VxOiBzdHJpbmdbXSA9IFtcIjEzMlwiXTtcbiAgICBwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBjdXJyU2NlbmU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBjb2xvclZhbHVlOiBjYy5Db2xvciA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNoZWR1bGVRdWVzdGlvbkNsaXA7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5uZWVkUmVpdGVyYXRpb247XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25UeXBlID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaW50ZXJhY3Rpb25UeXBlO1xuICAgICAgICBpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJXb3JkU2VxICs9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMubXlPcHRpb25zLCBcInRlbXBsYXRlMVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZU9wdGlvbnModGhpcy53b3Jkc05vZGUsIFwidGVtcGxhdGUyXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXNldEludGVyYWN0aW9uKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwLCAxMCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlVwZGF0ZUpzb25EYXRhKCk7XG5cbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgIHRoaXMuY29sb3JWYWx1ZSA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdXJyU2NlbmUgPSBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsO1xuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUgLSAxLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgaWYgKHRoaXMuY3VyclNjZW5lID49IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgodGhpcy5jdXJyU2NlbmUgKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhdGVHYW1lKCk7XG4gICAgICAgIH0sIDEpO1xuXG5cbiAgICB9XG5cbiAgICBVcGRhdGVKc29uRGF0YSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xuXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVRdWVzdGlvblZvID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wdXp6bGVzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHV6emxlVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUyLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud29yZFZvUXVlc3Rpb24gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucHV6emxlc1tpXSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lMiwgKEF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud29yZFZvUXVlc3Rpb24gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycldvcmRTZXEtLVwiICsgdGhpcy5jdXJyV29yZFNlcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnJlaXRlcmF0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9JdGVyYXRpb24gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgVXBkYXRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX3dpZHRoID0gMjUwO1xuICAgICAgICBsZXQgX2hlaWdodCA9IDI1MDtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA0KSB7XG4gICAgICAgICAgICBfd2lkdGggPSAyNTA7XG4gICAgICAgICAgICBfaGVpZ2h0ID0gMjUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA5KSB7XG4gICAgICAgICAgICBfd2lkdGggPSAxNjY7XG4gICAgICAgICAgICBfaGVpZ2h0ID0gMTY2O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXS53aWR0aCA9IF93aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXS5oZWlnaHQgPSBfaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgSW5pdGlhdGVHYW1lKCkge1xuICAgICAgICAvL3JlcGVhdCBtZXRob2RcbiAgICAgICAgdGhpcy5VcGRhdGVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkgeyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHV6emxlUXVlc3Rpb25WbywgZmFsc2UpOyB9XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZC5hbmdsZSAlIDM2MCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxMDAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDEwMCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7IH0sIDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2V0RnJhbWVPcHRpb25zKCk7XG4gICAgICAgIH0sIDAuMSk7XG5cbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hTdGFydChfZXZlbnQpOyB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hNb3ZlKF9ldmVudCk7IH0pO1xuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hlbmQnLCAoX2V2ZW50KSA9PiB7IHRoaXMud29yZFRvdWNoRW5kKF9ldmVudCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTZXRGcmFtZU9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNIaW50UmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAvIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gOSkge1xuICAgICAgICAgICAgbGV0IHRocmVzaEhvbGQ6IG51bWJlciA9IDFcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoKSArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5zZXRQb3NpdGlvbigwLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGgpICsgdGhyZXNoSG9sZCwgMCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC0gdGhyZXNoSG9sZCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS53aWR0aCkgKyB0aHJlc2hIb2xkLCAtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5oZWlnaHQpICsgdGhyZXNoSG9sZCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24oMCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS53aWR0aCAtIHRocmVzaEhvbGQsIC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCkgKyB0aHJlc2hIb2xkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA2KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCArIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5zZXRQb3NpdGlvbigwLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC0gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKDAsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLndpZHRoIC0gMiwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5oZWlnaHQgLyAyKTtcblxuXG5cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50ID09IDE2KSB7XG5cblxuXG4gICAgICAgICAgICB2YXIgdGhyZXNoSG9sZDogbnVtYmVyID0gNjIuNVxuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCAtIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgKyB0aHJlc2hIb2xkKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyB0aHJlc2hIb2xkLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10ud2lkdGggKyB0aHJlc2hIb2xkLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCAvIDIpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5oZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS53aWR0aCAvIDIpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5oZWlnaHQgLyAyKTtcblxuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLnNldFBvc2l0aW9uKCh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLmhlaWdodCAvIDIpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0ud2lkdGggKyB0aHJlc2hIb2xkKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGNsb25lLnNldFBhcmVudCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmdldENoaWxkQnlOYW1lKFwiaGludFwiKSk7XG4gICAgICAgICAgICBjbG9uZS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX3JhbmRvbU51bWJlcjogbnVtYmVyID0gMTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBfcmFuZG9tTnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX3JhbmRvbU51bWJlcik7XG4gICAgICAgICAgICBlbGVtZW50LmFuZ2xlID0gLSg5MCAqIF9yYW5kb21OdW1iZXIpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMuc2NhbGUgPSAwLjg7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuc2NhbGUgPSAwO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAudG8oMC44LCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjMsIG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlUXVlc3Rpb25Wbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5wdXp6bGVRdWVzdGlvblZvLmR1cmF0aW9uIC0gMC4zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXp6bGVRdWVzdGlvblZvLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyU2NlbmUgPD0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmROb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFwiZmluaXNoZWRcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8IDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIjFcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb3B0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XG4gICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkge1xuXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKF9ldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcGVhdFF1ZXN0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvblBsYXlpbmcpIHtcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvblBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLndvcmRWb0l0ZXJhdGlvbi5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcm90YXRlUHV6emxlSW1hZ2UoX25vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNoaWxkID0gX25vZGU7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gY2hpbGQuYW5nbGU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yb3RhdGVBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpXG4gICAgICAgICAgICAudG8oMC4yLCB7IGFuZ2xlOiBhbmdsZSAtIDkwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMub3B0aW9uc0FsaWduZWQoKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG4gICAgb3B0aW9uc0FsaWduZWQoKSB7XG4gICAgICAgIGxldCBsZXZlbFBhc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChfY2hpbGQuYW5nbGUgJSAzNjAgIT0gMCkge1xuICAgICAgICAgICAgICAgIGxldmVsUGFzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChsZXZlbFBhc3NlZCkge1xuICAgICAgICAgICAgLy9pZiB0aGUgaXRlbXMgaGF2ZSBiZWVuIGFsaWduZWQgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmpvY2tleUNvcnJlY3QyLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCB0aGlzLmNvcnJlY3RBY3Rpb24uZHVyYXRpb24gLSAxKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zKS50bygwLjMsIHsgeDogMCwgeTogMCwgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSkuc3RhcnQoKTtcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy53b3JkQXBwZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayB3aGF0IGludGVyYWN0aW9uIGl0IGlzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3cgcXVlc3Rpb24gcGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9RdWVzdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIgPyB0aGlzLk9wdGlvbnNBcHBlYXIoKSA6IHRoaXMud29yZEFwcGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnB1enpsZVZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDYWxsSm9ja2V5KCkge1xuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc3NpdGl2ZVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzZcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XG4gICAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xuICAgICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTYwMCwgMTYwMF07XG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xuICAgICAgICAgICAgcG9zID0gWzE5MDAsIDE5MDBdO1xuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJiBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zY2FsZVggPSAtMC42NTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zY2FsZVggPSAwLjY1O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbltzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogcG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG4gICAgY2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2V0aXZlXCIsIFwibmVnZXRpdmUyXCIsIFwibmVnZXRpdmUzXCIsIFwibmVnZXRpdmU0XCIsIFwibmVnZXRpdmU1XCIsIFwibmVnZXRpdmU2XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibm9cIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1widHJ5X2FnYWluXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVycCgwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9IDE2MDA7XG4gICAgICAgICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlciA9IDQ1MDtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBwb3MgPSAxOTAwO1xuICAgICAgICAgICAgICAgIGpvY2tleXR3ZWVuID0gODcwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvcywgLTM1MCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbiB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IHBvcyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0sIDAuNyk7XG4gICAgfVxuXG5cbiAgICBPcHRpb25zQXBwZWFyKCkge1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMC4zLCB7IHg6IHRoaXMub3B0aW9ucy54IC0gMjAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubXlPcHRpb25zKS50bygwLjMsIHsgeTogMCB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIDAuNSk7XG5cblxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBfY2hpbGQuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDAuNSAqIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgb25CdXR0b25DbGljayhfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IF9ldmVudC50YXJnZXQ7XG5cbiAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT09IHRoaXMuY29ycmVjdEFuc3dlcikge1xuXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgIT0gX25vZGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RCdXR0b24sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgX25vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcblxuXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IHNjYWxlWDogMC43LCBzY2FsZVk6IDAuOCwgY29sb3I6IGNjLkNvbG9yLkdSRUVOIH0pLnRvKDAuMSwgeyBzY2FsZVg6IDEsIHNjYWxlWTogMSwgY29sb3I6IHRoaXMuY29sb3JWYWx1ZSB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgfSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53cm9uZ0Fuc3dlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuMSwgeyBhbmdsZTogMTAgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTEwIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KS50bygwLjEsIHsgYW5nbGU6IDEwIH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KS5zdGFydCgpO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgd29yZEFwcGVhcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyBzY2FsZTogdGhpcy5vcHRpb25zLnNjYWxlIC0gMC4yIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyB4OiAwLCB5OiAxMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgX2NoaWxkLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihfY2hpbGQpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAwLjUgKiBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMud29yZHNOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9RdWVzdGlvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIodGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMF0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLndvcmRzTm9kZS5jaGlsZHJlblswXS5nZXRQb3NpdGlvbigpLnkgLSAyNTApO1xuICAgICAgICAgICAgbGV0IHBvczI6IGNjLlZlYzIgPSBjYy52Mih0aGlzLndvcmRzTm9kZS5jaGlsZHJlblsxXS5nZXRQb3NpdGlvbigpLngsIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzFdLmdldFBvc2l0aW9uKCkueSAtIDI1MCk7XG4gICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2sxXCIpO1xuICAgICAgICAgICAgaGFuZE5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBoYW5kTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICBjYy50d2VlbihoYW5kTm9kZSkudG8oMSwgeyB4OiBwb3MyLngsIHk6IHBvczIueSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0YWJsZT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMud29yZFN3YXAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMF0sIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndvcmRzXCIpLmNoaWxkcmVuWzFdLCAtMjUwLCAwKTtcbiAgICAgICAgICAgICAgICAvLyB9LCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLkVuZERyYWcoKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9LCB0aGlzLndvcmRWb1F1ZXN0aW9uLmR1cmF0aW9uIC0gMSk7XG4gICAgfVxuXG4gICAgd29yZFN3YXAoX25vZGUxOiBjYy5Ob2RlLCBfbm9kZTI6IGNjLk5vZGUsIHgxOiBudW1iZXIsIHgyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5FbmREcmFnKCk7XG4gICAgICAgIHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcbiAgICAgICAgdGhpcy5jdXJyV29yZFNlcSA9IHRoaXMuY3VycldvcmRTZXEucmVwbGFjZShfbm9kZTIubmFtZSwgX25vZGUxLm5hbWUpO1xuICAgICAgICB0aGlzLmN1cnJXb3JkU2VxID0gdGhpcy5jdXJyV29yZFNlcS5yZXBsYWNlKFwieFwiLCBfbm9kZTIubmFtZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xuXG4gICAgICAgIGxldCB3b3JkID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJXb3JkU2VxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xuICAgICAgICAgICAgICAgIHdvcmQgKz0gdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jdXJyV29yZFNlcVtpXSkubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdvcmQgKz0gdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jdXJyV29yZFNlcVtpXSkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JkLCBcIndvcmQgQEBAQEBAQEBAQFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndvcmQtLVwiICsgd29yZCk7XG5cbiAgICAgICAgY2MudHdlZW4oX25vZGUxKVxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiB4MiB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4oX25vZGUyKVxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiB4MSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycldvcmRTZXEsIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0sIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgICAgICAgICBpZiAod29yZCA9PSB0aGlzLmNvcnJlY3RXb3JkU2VxWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid29yZHMgYWxpZ25lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGV2ZWxGaW5pc2hlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLndvcmRWb0l0ZXJhdGlvbi5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc3dpcGVBY3Rpb24uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgIH1cbiAgICBFbmREcmFnKCkge1xuICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZCA9IG51bGw7XG4gICAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgd29yZFRvdWNoU3RhcnQoX2V2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGFibGUpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGV2ZW50XCIpO1xuICAgICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQgPSBfZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC5nZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdvcmRUb3VjaE1vdmUoX2V2ZW50KSB7XG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIHNhbWUgb2JqZWN0IGlzIG1vdmluZyB3aGljaCBzdGFydGVkIGZpcnN0XG4gICAgICAgIGlmICh0aGlzLndvcmRDdXJyZW50U2VsZWNlZCAmJiBfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQubmFtZSkge1xuICAgICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCArPSBfZXZlbnQudG91Y2guZ2V0RGVsdGEoKS54O1xuICAgICAgICAgICAgaWYgKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLnggPiA4MDAgfHwgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCA8IC04MDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc2V0IHBvc2l0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHg6IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLnggfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FbmREcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbGxpc2lvbldpdGg6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZC5uYW1lID09IF9ldmVudC50YXJnZXQubmFtZSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMoX2V2ZW50LnRhcmdldC5nZXRQb3NpdGlvbigpKSkgeyBjb2xsaXNpb25XaXRoID0gX2NoaWxkOyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25XaXRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaXNpb24gd2l0aCBcIiwgY29sbGlzaW9uV2l0aC5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRTd2FwKGNvbGxpc2lvbldpdGgsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLCBjb2xsaXNpb25XaXRoLngsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLngpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHdvcmRUb3VjaEVuZChfZXZlbnQpIHtcbiAgICAgICAgaWYgKF9ldmVudC50YXJnZXQubmFtZSA9PSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZD8ubmFtZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbmQgZXZlbnRcIik7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLndvcmRDdXJyZW50U2VsZWNlZClcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLnggfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGxldmVsRmluaXNoZWQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdsZXZlbENvbXBsZXRlLS0nICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKys7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoNiwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyclNjZW5lIDwgc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDAuOCk7XG4gICAgICAgICAgICB9LCAxLjIpO1xuXG4gICAgICAgIH0sIDEuNSk7XG5cblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIoX251bWJlcjogbnVtYmVyKSB7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKDEsIDMsIF9udW1iZXIpO1xuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVycChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcbiAgICB9XG5cbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBHZW5lcmF0ZU9wdGlvbnMoX25vZGU6IGNjLk5vZGUgPSB0aGlzLm15T3B0aW9ucywgX3RlbXBsYXRlOiBzdHJpbmcgPSBcInRlbXBsYXRlMVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoX3RlbXBsYXRlKSk7XG4gICAgICAgICAgICBvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRQYXJlbnQoX25vZGUpO1xuICAgICAgICAgICAgb3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgb3B0aW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkuZGVzdHJveSgpO1xuICAgICAgICBpZiAoX3RlbXBsYXRlID09IFwidGVtcGxhdGUxXCIpIHtcbiAgICAgICAgICAgIHRoaXMuT3B0aW9uc0xheW91dFZlcnRpY2FsKCk7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbigwLCAxMjApO1xuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIC0xMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuT3B0aW9uc0xheW91dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMud29yZHNOb2RlLCAzMCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9wdGlvbnNMYXlvdXQoKSB7XG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy53b3Jkc05vZGU7XG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XG5cbiAgICAgICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XG5cbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XG4gICAgICAgICAgICBsZXQgb3B0aW9uSGVpZ2h0ID0gb3B0aW9uLmhlaWdodDtcblxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBvcHRpb25XaWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChvcHRpb25IZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBvcHRpb25IZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXZhaWxhYmxlV2lkdGggPSBvcHRpb25zTGF5b3V0LndpZHRoO1xuICAgICAgICBsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID0gdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xuXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxuICAgICAgICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XG5cbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cbiAgICAgICAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgIG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXG4gICAgICAgICAgICBsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyAob3B0aW9uLndpZHRoICogb3B0aW9uLmFuY2hvclgpO1xuICAgICAgICAgICAgb3B0aW9uLnggPSBwb3NYIC0gKG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclgpO1xuXG4gICAgICAgICAgICBhY2N1bXVsYXRlZFdpZHRoICs9IG9wdGlvbi53aWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcblxuICAgICAgICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XG4gICAgICAgICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc0xheW91dC5oZWlnaHQgPSBtYXhIZWlnaHQgKiBzY2FsZUZhY3RvcjtcbiAgICB9XG4gICAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjZW50ZXJOb2RlLmNoaWxkcmVuO1xuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsIHdpZHRoIHJlcXVpcmVkXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRvdGFsV2lkdGggKz0gc3BhY2luZyAqIChjaGlsZHJlbi5sZW5ndGggLSAxKTsgLy8gQWRkIHNwYWNlcyBiZXR3ZWVuIGNoaWxkcmVuXG5cbiAgICAgICAgLy8gU3RhcnRpbmcgWCBwb3NpdGlvblxuICAgICAgICBsZXQgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyO1xuXG4gICAgICAgIC8vIEFycmFuZ2UgY2hpbGRyZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjaGlsZC54ID0gc3RhcnRYICsgY2hpbGQud2lkdGggLyAyO1xuICAgICAgICAgICAgc3RhcnRYICs9IGNoaWxkLndpZHRoICsgc3BhY2luZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm15T3B0aW9ucztcbiAgICAgICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcblxuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4V2lkdGggPSAwO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XG4gICAgICAgICAgICBsZXQgb3B0aW9uSGVpZ2h0ID0gb3B0aW9uLmhlaWdodDtcblxuICAgICAgICAgICAgdG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuICAgICAgICAgICAgaWYgKG9wdGlvbldpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IG9wdGlvbldpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF2YWlsYWJsZUhlaWdodCA9IG9wdGlvbnNMYXlvdXQuaGVpZ2h0O1xuICAgICAgICBsZXQgdG90YWxIZWlnaHRXaXRoUGFkZGluZyA9IHRvdGFsSGVpZ2h0ICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcblxuICAgICAgICBsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXG4gICAgICAgICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcblxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcbiAgICAgICAgICAgIGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyAob3B0aW9uLmhlaWdodCAqIG9wdGlvbi5hbmNob3JZKTtcbiAgICAgICAgICAgIG9wdGlvbi55ID0gcG9zWSAtIChvcHRpb25zTGF5b3V0LmhlaWdodCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWSk7XG5cbiAgICAgICAgICAgIGFjY3VtdWxhdGVkSGVpZ2h0ICs9IG9wdGlvbi5oZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG5cbiAgICAgICAgICAgIC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNMYXlvdXQud2lkdGggPSBtYXhXaWR0aCAqIHNjYWxlRmFjdG9yO1xuICAgIH1cblxuICAgIHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIHRoZSBuZXcgcG9zaXRpb25zXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbnMgPSBbXTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXG4gICAgICAgIGZvciAobGV0IGkgPSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb25Ob2Rlc1tpXS55ID0gbmV3UG9zaXRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
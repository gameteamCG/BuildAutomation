
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/Gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9a049SRptFP5H77C66Ty44', 'Gameplay');
// Games/TapToFind/Scripts/Gameplay.ts

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
// import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gameplay = /** @class */ (function (_super) {
    __extends(Gameplay, _super);
    function Gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.supercub_font = null;
        _this.tlc_font = null;
        _this.options = null;
        _this.optionsLayout = "layout3";
        _this.correctAnswer = [];
        _this.canTouch = true;
        _this.correctCounter = 0;
        _this.numberofOptions = 5;
        _this.pop_audio = null;
        _this.positive_audio = null;
        _this.negative_audio = null;
        _this.fruitsAndVegetableVo = [];
        _this.questionAudio = null;
        _this.correctAudio = null;
        _this.wrongAudio = null;
        _this.reiterationAudio = [];
        _this.currentJockey = null;
        _this.maxLevel = 0;
        _this.fruitsAndVegNames = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Gameplay.prototype.onLoad = function () {
        // this.options = this.node.getChildByName(this.optionsLayout);
        // this.generateOptions(this.node.getChildByName(this.optionsLayout + "_template"), this.options, this.numberofOptions);
    };
    Gameplay.prototype.LoadQuestion = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        var str = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswerNum;
        this.correctAnswer = str.split('').map(function (char) { return parseInt(char); });
        this.optionsLayout = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionLayout;
        this.numberofOptions = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions;
        this.options = this.node.getChildByName(this.optionsLayout);
        this.generateOptions(this.node.getChildByName(this.optionsLayout + "_template"), this.options, this.numberofOptions);
        this.maxLevel = StartGame_1.default.Instance.TotalLevels;
        if (StartGame_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        console.log("levelStarted--" + StartGame_1.default.Instance.currentLevel);
        // this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].wrongAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wrongAudio = audioClip;
            });
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName[i], function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    _this.reiterationAudio[i] = audioClip;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName.length; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this_1.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                }
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].optionsBg[i], function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_1 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionBgName, function (spriteFrame) {
                _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionAudio = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (AudioClip) {
                _this.correctAudio = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].wrongAudioName, function (AudioClip) {
                _this.wrongAudio = AudioClip;
            });
            var _loop_3 = function (i) {
                this_2.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName[i], function (AudioClip) {
                    _this.reiterationAudio[i] = AudioClip;
                });
            };
            var this_2 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName.length; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_3.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                }
                this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].optionsBg[i], function (spriteFrame) {
                    _this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_3 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_4(i);
            }
        }
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJockey.active = true;
    };
    Gameplay.prototype.start = function () {
        var _this = this;
        this.LoadQuestion();
        ProgressBar_1.default.Instance.ProgressFill(StartGame_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.fruitsAndVegNames = ["Grapes", "Apple", "Capsicum", "Potato", "Carrot"];
        this.scheduleOnce(function () {
            if (_this.questionAudio) {
                if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    cc.audioEngine.playEffect(_this.questionAudio, false);
                }
            }
            if (_this.optionsLayout == "layout1") {
                var delay = 0;
                var _loop_5 = function (i) {
                    _this.options.children[i].active = false;
                    _this.options.children[i].opacity = 255;
                    _this.options.setPosition(0, 0);
                    _this.scheduleOnce(function () {
                        var element = _this.options.children[i];
                        var pos = element.getPosition();
                        element.setPosition(pos.x, pos.y - 850);
                        element.active = true;
                        cc.audioEngine.playEffect(_this.pop_audio, false);
                        cc.tween(element).to(0.65, { y: pos.y - 50 }, { easing: "sineInOut" }).start();
                    }, delay);
                    delay += 0.35;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_5(i);
                }
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout1, _this);
                });
            }
            else if (_this.optionsLayout == "layout2") {
                // this.OptionsLayout();
                _this.node.getChildByName("basket").active = true;
                _this.node.getChildByName("rope").active = true;
                // this.arrangeChildren(this.options, 80); // 10 is an example spacing value
                var delay = 0;
                var _loop_6 = function (i) {
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.pop_audio, false);
                        cc.tween(_this.options.children[i]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
                    }, delay);
                    delay += 0.25;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_6(i);
                }
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout2, _this);
                });
            }
            else if (_this.optionsLayout == "layout3") {
                var delay = 0;
                var _loop_7 = function (i) {
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.pop_audio, false);
                        cc.tween(_this.options.children[i]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
                    }, delay);
                    delay += 0.25;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_7(i);
                }
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout3, _this);
                });
            }
            _this.scheduleOnce(function () {
                if (StartGame_1.default.Instance.currentLevel == 1) {
                    var hand = _this.node.getChildByName("hand");
                    hand.setParent(_this.options.getChildByName(_this.correctAnswer[0].toString()));
                    hand.setPosition(50, -100);
                    hand.angle = 40;
                    hand.setParentWithSamePos(_this.node);
                    hand.active = true;
                    hand.getComponent(cc.Animation).play();
                }
            }, 1);
        }, 1);
    };
    Gameplay.prototype.PlayQVoButton = function (_event) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionAudio, false);
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
        }, this.questionAudio.duration);
        _event.target.getComponent(cc.Button).interactable = false;
    };
    Gameplay.prototype.generateOptions = function (_template, _optionParent, _optionCount) {
        for (var i = 0; i < _optionCount; i++) {
            var _option = cc.instantiate(_template);
            _option.parent = _optionParent;
            _option.setPosition(0, 0);
            _option.active = true;
            _option.opacity = 0;
            _option.name = (i + 1).toString();
        }
        if (this.optionsLayout == "layout3") {
            this.arrangeGridChildren(this.options, 5, _optionCount);
        }
        else {
            this.arrangeChildren(this.options, 80);
        }
        if (this.optionsLayout == "layout1") {
            var _laypout1posY = [-150, 100, -100, 0, 50];
            for (var i = 0; i < _optionParent.children.length; i++) {
                _optionParent.children[i].setPosition(_optionParent.children[i].x, _laypout1posY[i]);
            }
        }
        _template.destroy();
    };
    Gameplay.prototype.onTouchStart_layout1 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) {
            if (node.name == this.correctAnswer[i].toString()) {
                correct = true;
                audioNum = i;
                break;
            }
        }
        if (correct) {
            cc.audioEngine.playEffect(this.positive_audio, false);
            console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
            this.node.getChildByName("questionPanel").children[1].getComponent(cc.Label).string = this.fruitsAndVegNames[StartGame_1.default.Instance.currentLevel - 1];
            this.correctCounter++;
            cc.tween(node)
                .to(1, { y: 1200 }, { easing: "sineInOut" })
                .call(function () {
                if (_this.reiterationAudio[audioNum]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false);
                }
                else if (_this.reiterationAudio[0]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
                }
                node.active = false;
                if (_this.correctCounter == _this.correctAnswer.length) {
                    console.log("all the options are answered correctly");
                    cc.tween(_this.options).bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200)).start();
                    _this.LoadNextQuestion();
                }
                else {
                    _this.canTouch = true;
                }
            }).start();
        }
        else {
            //play negative audio
            // cc.audioEngine.playEffect(this.negative_audio, false);
            this.callNegativeRection();
            console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
            var posX = node.getPosition().x;
            cc.tween(node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(node).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).call(function () {
                // this.canTouch = true;
            }).start();
        }
    };
    Gameplay.prototype.onTouchStart_layout2 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) {
            if (node.name == this.correctAnswer[i].toString()) {
                correct = true;
                audioNum = i;
                break;
            }
        }
        if (correct) {
            cc.audioEngine.playEffect(this.positive_audio, false);
            console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
            this.node.getChildByName("questionPanel").children[1].getComponent(cc.Label).string = this.fruitsAndVegNames[StartGame_1.default.Instance.currentLevel - 1];
            node.getComponent(cc.Animation).stop();
            node.angle = 0;
            this.correctCounter++;
            var _clone_1 = cc.instantiate(node);
            _clone_1.parent = node;
            _clone_1.setPosition(0, 0);
            var _parentNode = this.node.getChildByName("basket").getChildByName("answered").getChildByName(this.correctCounter.toString());
            _clone_1.setParentWithSamePos(_parentNode);
            node.active = false;
            _clone_1.getComponent(cc.Animation).stop();
            _clone_1.angle = 0;
            var pos = _clone_1.getPosition();
            cc.tween(_clone_1).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(0, 0)).start();
            this.scheduleOnce(function () {
                _clone_1.getComponent(cc.Animation).stop();
                _clone_1.angle = 0;
                if (_this.reiterationAudio[audioNum]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false);
                }
                else if (_this.reiterationAudio[0]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
                }
                if (_this.correctCounter == _this.correctAnswer.length) {
                    console.log("all the options are answered correctly");
                    cc.tween(_this.options).to(1, { x: -1500 }, { easing: "backInOut" }).start();
                    _this.LoadNextQuestion();
                    // cc.tween(this.options).bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200)).start();
                }
                else {
                    _this.canTouch = true;
                }
            }, 1);
            // cc.tween(_clone)
            //     .to(1, { x: 0, y: 0 }, { easing: "sineInOut" })
            //     .call(() => {
            //     }).start();
        }
        else {
            //play negative audio
            // cc.audioEngine.playEffect(this.negative_audio, false);
            this.callNegativeRection();
            console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
            var posX = node.getPosition().x;
            cc.tween(node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(node).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).call(function () {
                // this.canTouch = true;
            }).start();
        }
    };
    Gameplay.prototype.onTouchStart_layout3 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) {
            if (node.name == this.correctAnswer[i].toString()) {
                correct = true;
                audioNum = i;
                break;
            }
        }
        if (correct) {
            cc.audioEngine.playEffect(this.positive_audio, false);
            console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
            this.node.getChildByName("questionPanel").children[1].getComponent(cc.Label).string = this.fruitsAndVegNames[StartGame_1.default.Instance.currentLevel - 1];
            this.correctCounter++;
            var _clone = cc.instantiate(node);
            _clone.parent = node;
            _clone.setPosition(0, 0);
            _clone.setParentWithSamePos(this.node);
            _clone.children[0].active = true;
            _clone.children[0].opacity = 0;
            node.active = false;
            cc.tween(_clone.children[0])
                .to(1, { opacity: 255 }, { easing: "sineInOut" })
                .call(function () {
                if (_this.reiterationAudio[audioNum]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false);
                }
                else if (_this.reiterationAudio[0]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
                }
                if (_this.correctCounter == _this.correctAnswer.length) {
                    console.log("all the options are answered correctly");
                    _this.LoadNextQuestion();
                    // cc.tween(this.options).bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200)).start();
                }
                else {
                    _this.canTouch = true;
                }
            }).start();
        }
        else {
            // cc.audioEngine.playEffect(this.negative_audio, false);
            this.callNegativeRection();
            console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
            //play negative audio
            var posX = node.getPosition().x;
            cc.tween(node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(node).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX }).call(function () {
                // this.canTouch = true;
            }).start();
        }
    };
    Gameplay.prototype.LoadNextQuestion = function () {
        var _this = this;
        this.node.getChildByName("confetti").active = true;
        ProgressBar_1.default.Instance.createStarTrails(6, this.node);
        this.scheduleOnce(function () {
            ProgressBar_1.default.Instance.ProgressFill(StartGame_1.default.Instance.currentLevel);
            cc.audioEngine.playEffect(_this.fruitsAndVegetableVo[StartGame_1.default.Instance.currentLevel - 1], false);
            _this.scheduleOnce(function () {
                _this.callJockey();
            }, _this.fruitsAndVegetableVo[StartGame_1.default.Instance.currentLevel - 1].duration);
        }, 1.8);
    };
    Gameplay.prototype.callNextLevel = function () {
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        if (StartGame_1.default.Instance.currentLevel >= StartGame_1.default.Instance.TotalLevels) {
            cc.director.loadScene("gameEnd");
        }
        else {
            StartGame_1.default.Instance.currentLevel++;
            cc.director.loadScene("1");
        }
    };
    Gameplay.prototype.callJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_3", "positive_4", "positive_5"];
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
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
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
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.correctAudio, false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.callNextLevel();
            }, _this.correctAudio.duration);
        }, 0.5);
    };
    Gameplay.prototype.callNegativeRection = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.negative_audio, false);
        // if (this.wrongAnswerCount >= 6) {
        //     this.wrongAnswerCount = 1;
        // }
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = ["negative_1", "negative_2"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4", "negative_3", "negative_4"];
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
            _this.currentJockey.setPosition(1600, _this.currentJockey.y);
            var posX = 400;
            var posX_init = 1600;
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                _this.currentJockey.setPosition(1900, _this.currentJockey.y);
                posX = 870;
                posX_init = 1900;
            }
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJockey.scaleX = 0.65;
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            else {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            cc.tween(_this.currentJockey).to(0.5, { x: posX }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.wrongAudio, false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey).to(0.5, { x: posX_init }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.canTouch = true;
                    if (_this.questionAudio) {
                        cc.audioEngine.playEffect(_this.questionAudio, false);
                    }
                }, _this.wrongAudio.duration);
            }, 0.5);
        }, 0.7);
    };
    Gameplay.prototype.arrangeChildren = function (centerNode, spacing) {
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
    Gameplay.prototype.arrangeGridChildren = function (centerNode, spacing, _optionCount) {
        var children = centerNode.children;
        var maxColumns = 3;
        if (_optionCount == 4) {
            maxColumns = 2;
        }
        var totalRows = Math.ceil(children.length / maxColumns);
        var rowHeight = 0;
        if (children.length > 0) {
            rowHeight = children[0].height + spacing; // Assuming all children have the same height
        }
        var startY = (totalRows - 1) * rowHeight / 2;
        for (var i = 0; i < children.length; i++) {
            var column = i % maxColumns;
            var row = Math.floor(i / maxColumns);
            var totalWidth = 0;
            // Calculate the total width of the current row
            for (var j = 0; j < maxColumns && (row * maxColumns + j) < children.length; j++) {
                totalWidth += children[row * maxColumns + j].width;
            }
            totalWidth += spacing * (Math.min(children.length - row * maxColumns, maxColumns) - 1);
            var startX = -totalWidth / 2;
            var child = children[i];
            child.x = startX + column * (child.width + spacing) + child.width / 2;
            child.y = startY - row * rowHeight;
        }
    };
    Gameplay.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    Gameplay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    Gameplay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "pop_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positive_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "negative_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "fruitsAndVegetableVo", void 0);
    Gameplay = __decorate([
        ccclass
    ], Gameplay);
    return Gameplay;
}(cc.Component));
exports.default = Gameplay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFRhcFRvRmluZFxcU2NyaXB0c1xcR2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0ZBQXdGO0FBQ3hGLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtdkJDO1FBL3VCVyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxTQUFTLENBQUM7UUFFMUMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUNqQyxvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUNuQixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUdwQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRzVCLDBCQUFvQixHQUFtQixFQUFFLENBQUM7UUFFMUMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUU5QyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHVCQUFpQixHQUFhLEVBQUUsQ0FBQzs7SUE0c0JyQyxDQUFDO0lBM3NCRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLCtEQUErRDtRQUMvRCx3SEFBd0g7SUFDNUgsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkEwSUM7UUF6SUcsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3JIO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ25IO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNySCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3hIO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNySCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3JILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEg7UUFDRCxJQUFJLEdBQUcsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzdGLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xELEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRSxrR0FBa0c7UUFJbEcsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTztnQkFDMUcsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDNUMsT0FBTztpQkFDVjtnQkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUNyRixDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztnQkFDL0csSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakQsT0FBTztpQkFDVjtnQkFDRCxLQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztnQkFDOUcsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakQsT0FBTztpQkFDVjtnQkFDRCxLQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLFNBQVM7Z0JBQzVHLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pELE9BQU87aUJBQ1Y7Z0JBQ0QsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7b0NBQ00sQ0FBQztnQkFDTixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLFNBQVM7b0JBQ3JILElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2pELE9BQU87cUJBQ1Y7b0JBQ0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7O1lBUFAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBN0csQ0FBQzthQVFUO29DQUNRLENBQUM7Z0JBQ04sSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO29CQUNqRixvSEFBb0g7b0JBQ3BILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQ3RHLElBQUksR0FBRyxFQUFFOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzVDLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQzVILENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELHFIQUFxSDtvQkFDckgsT0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2TDtnQkFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO29CQUN4RyxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELElBQU0sV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ3RHLENBQUMsQ0FBQyxDQUFDOzs7WUF2QlAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRTt3QkFBakcsQ0FBQzthQXdCVDtTQUNKO2FBQ0k7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQUMsV0FBVztnQkFDL0csS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsU0FBUztnQkFDOUcsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxTQUFTO2dCQUM3RyxLQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsVUFBQyxTQUFTO2dCQUMzRyxLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztvQ0FDTSxDQUFDO2dCQUNOLE9BQUssYUFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxTQUFTO29CQUNwSCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQzs7O1lBSFAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBN0csQ0FBQzthQUlUO29DQUVRLENBQUM7Z0JBQ04sSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO29CQUNqRixPQUFLLGVBQWUsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLFdBQVc7d0JBQzNHLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDNUgsQ0FBQyxDQUFDLENBQUM7aUJBQ047cUJBRUk7b0JBQ0QsT0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2TDtnQkFDRCxPQUFLLGVBQWUsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLFdBQVc7b0JBQzdHLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUN0RyxDQUFDLENBQUMsQ0FBQzs7O1lBWlAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRTt3QkFBakcsQ0FBQzthQWFUO1NBQ0o7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBMkVDO1FBekVHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNqRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDcEIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFO29CQUMzRixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1lBQ0QsSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dDQUNMLENBQUM7b0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbkYsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNWLEtBQUssSUFBSSxJQUFJLENBQUM7O2dCQVpsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBNUMsQ0FBQztpQkFhVDtnQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO29CQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBRUksSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtnQkFDdEMsd0JBQXdCO2dCQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNqRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyw0RUFBNEU7Z0JBQzVFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzt3Q0FDTCxDQUFDO29CQUNOLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbEcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNWLEtBQUssSUFBSSxJQUFJLENBQUM7O2dCQUxsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBNUMsQ0FBQztpQkFNVDtnQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO29CQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQ0ksSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtnQkFDdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dDQUNMLENBQUM7b0JBQ04sS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNsRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ1YsS0FBSyxJQUFJLElBQUksQ0FBQzs7Z0JBTGxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFOzRCQUE1QyxDQUFDO2lCQU1UO2dCQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQ2pDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO29CQUN0QyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDMUM7WUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBR0QsZ0NBQWEsR0FBYixVQUFjLE1BQWdCO1FBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFFL0QsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsU0FBa0IsRUFBRSxhQUFzQixFQUFFLFlBQW9CO1FBQzVFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0Q7YUFDSTtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxTQUFTLEVBQUU7WUFDakMsSUFBSSxhQUFhLEdBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEY7U0FDSjtRQUNELFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUd4QixDQUFDO0lBRUQsdUNBQW9CLEdBQXBCLFVBQXFCLEtBQTBCO1FBQS9DLGlCQXdEQztRQXZERyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFDO1FBQzdCLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2pKLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDVCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMzQyxJQUFJLENBQUM7Z0JBQ0YsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDckU7cUJBQ0ksSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQy9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDOUQ7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO29CQUN0RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM3RixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDM0I7cUJBQ0k7b0JBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7YUFDSTtZQUNELHFCQUFxQjtZQUNyQix5REFBeUQ7WUFDekQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDakosRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckosRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztpQkFDbEYsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDO2lCQUM3RixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN2Qix3QkFBd0I7WUFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FFbEI7SUFDTCxDQUFDO0lBRUQsdUNBQW9CLEdBQXBCLFVBQXFCLEtBQTBCO1FBQS9DLGlCQTJFQztRQTFFRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFDO1FBQzdCLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO2FBQ1Q7U0FDSjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBRWpKLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksUUFBTSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsUUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckIsUUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxXQUFXLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDeEksUUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLFFBQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pDLFFBQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLFFBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxRQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDekMsUUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3JFO3FCQUNJLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzlEO2dCQUNELElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO29CQUN0RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDNUUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLGdHQUFnRztpQkFDbkc7cUJBQ0k7b0JBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sbUJBQW1CO1lBQ25CLHNEQUFzRDtZQUN0RCxvQkFBb0I7WUFFcEIsa0JBQWtCO1NBQ3JCO2FBQ0k7WUFDRCxxQkFBcUI7WUFDckIseURBQXlEO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pKLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JKLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUM7aUJBQ2xGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUs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QUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JKLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUM7aUJBQ2xGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztpQkFDN0YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkIsd0JBQXdCO1lBQzVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NB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QyxFQUFFLENBQUMsU0FBUyxHQW12QmpEO2tCQW52Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG4vLyBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzYmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVwbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb3B0aW9uc0xheW91dDogc3RyaW5nID0gXCJsYXlvdXQzXCI7XHJcblxyXG4gICAgY29ycmVjdEFuc3dlcjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvcnJlY3RDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW1iZXJvZk9wdGlvbnM6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBvcF9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwb3NpdGl2ZV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBuZWdhdGl2ZV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBmcnVpdHNBbmRWZWdldGFibGVWbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgd3JvbmdBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmVpdGVyYXRpb25BdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG1heExldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgZnJ1aXRzQW5kVmVnTmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKHRoaXMub3B0aW9uc0xheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKHRoaXMub3B0aW9uc0xheW91dCArIFwiX3RlbXBsYXRlXCIpLCB0aGlzLm9wdGlvbnMsIHRoaXMubnVtYmVyb2ZPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkUXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXQxX3RlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDJfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGF5b3V0M190ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDFfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDJfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDNfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXQxX3RlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDJfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGF5b3V0M190ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXQxX3RlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxheW91dDJfdGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGF5b3V0M190ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RyID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bTtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBzdHIuc3BsaXQoJycpLm1hcChjaGFyID0+IHBhcnNlSW50KGNoYXIpKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNMYXlvdXQgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkxheW91dDtcclxuICAgICAgICB0aGlzLm51bWJlcm9mT3B0aW9ucyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9ucztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5vcHRpb25zTGF5b3V0KTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5vcHRpb25zTGF5b3V0ICsgXCJfdGVtcGxhdGVcIiksIHRoaXMub3B0aW9ucywgdGhpcy5udW1iZXJvZk9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ud3JvbmdBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucmVpdGVyYXRpb25BdWRpb05hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnJlaXRlcmF0aW9uQXVkaW9OYW1lW2ldLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcHRpb24gaW1nID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcHRpb24gdGV4dCA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc0JnW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkJnTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXVkaW8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ud3JvbmdBdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JvbmdBdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucmVpdGVyYXRpb25BdWRpb05hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvTmFtZVtpXSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25BdWRpb1tpXSA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zQmdbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5Mb2FkUXVlc3Rpb24oKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEpO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLmZydWl0c0FuZFZlZ05hbWVzID0gW1wiR3JhcGVzXCIsIFwiQXBwbGVcIiwgXCJDYXBzaWN1bVwiLCBcIlBvdGF0b1wiLCBcIkNhcnJvdFwiXVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zTGF5b3V0ID09IFwibGF5b3V0MVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsYXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBlbGVtZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24ocG9zLngsIHBvcy55IC0gODUwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZW1lbnQpLnRvKDAuNjUsIHsgeTogcG9zLnkgLSA1MCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAwLjM1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnRfbGF5b3V0MSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zTGF5b3V0ID09IFwibGF5b3V0MlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2tldFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicm9wZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hcnJhbmdlQ2hpbGRyZW4odGhpcy5vcHRpb25zLCA4MCk7IC8vIDEwIGlzIGFuIGV4YW1wbGUgc3BhY2luZyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAwLjI1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnRfbGF5b3V0MiwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnNMYXlvdXQgPT0gXCJsYXlvdXQzXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcF9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgKz0gMC4yNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0X2xheW91dDMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kLnNldFBhcmVudCh0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jb3JyZWN0QW5zd2VyWzBdLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDUwLCAtMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kLmFuZ2xlID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFBsYXlRVm9CdXR0b24oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uQXVkaW8sIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMucXVlc3Rpb25BdWRpby5kdXJhdGlvbilcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZU9wdGlvbnMoX3RlbXBsYXRlOiBjYy5Ob2RlLCBfb3B0aW9uUGFyZW50OiBjYy5Ob2RlLCBfb3B0aW9uQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX29wdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IF9vcHRpb246IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShfdGVtcGxhdGUpO1xyXG4gICAgICAgICAgICBfb3B0aW9uLnBhcmVudCA9IF9vcHRpb25QYXJlbnQ7XHJcbiAgICAgICAgICAgIF9vcHRpb24uc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIF9vcHRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX29wdGlvbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgX29wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zTGF5b3V0ID09IFwibGF5b3V0M1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYW5nZUdyaWRDaGlsZHJlbih0aGlzLm9wdGlvbnMsIDUsIF9vcHRpb25Db3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFycmFuZ2VDaGlsZHJlbih0aGlzLm9wdGlvbnMsIDgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc0xheW91dCA9PSBcImxheW91dDFcIikge1xyXG4gICAgICAgICAgICBsZXQgX2xheXBvdXQxcG9zWTogbnVtYmVyW10gPSBbLTE1MCwgMTAwLCAtMTAwLCAwLCA1MF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX29wdGlvblBhcmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgX29wdGlvblBhcmVudC5jaGlsZHJlbltpXS5zZXRQb3NpdGlvbihfb3B0aW9uUGFyZW50LmNoaWxkcmVuW2ldLngsIF9sYXlwb3V0MXBvc1lbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90ZW1wbGF0ZS5kZXN0cm95KCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnRfbGF5b3V0MShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBjb3JyZWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGF1ZGlvTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JyZWN0QW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT0gdGhpcy5jb3JyZWN0QW5zd2VyW2ldLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9OdW0gPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZnJ1aXRzQW5kVmVnTmFtZXNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50ZXIrKztcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IDEyMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVpdGVyYXRpb25BdWRpb1thdWRpb051bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdENvdW50ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCB0aGUgb3B0aW9ucyBhcmUgYW5zd2VyZWQgY29ycmVjdGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLmJlemllclRvKDEsIGNjLnYyKC0xMDAsIDMwMCksIGNjLnYyKDAsIDApLCBjYy52MigxMDAsIC0xMjAwKSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2FkTmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9wbGF5IG5lZ2F0aXZlIGF1ZGlvXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3cm9uZ0Fuc3dlci0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBub2RlLmdldFBvc2l0aW9uKCkueDtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSkudG8oMC4xLCB7IHg6IHBvc1ggfSkudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSkudG8oMC4xLCB7IHg6IHBvc1ggfSkudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydF9sYXlvdXQyKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGNvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgYXVkaW9OdW06IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcnJlY3RBbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PSB0aGlzLmNvcnJlY3RBbnN3ZXJbaV0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhdWRpb051bSA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZnJ1aXRzQW5kVmVnTmFtZXNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgbm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50ZXIrKztcclxuICAgICAgICAgICAgbGV0IF9jbG9uZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgICAgICBfY2xvbmUucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgX2Nsb25lLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICBsZXQgX3BhcmVudE5vZGU6IGNjLk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNrZXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhbnN3ZXJlZFwiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmNvcnJlY3RDb3VudGVyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBfY2xvbmUuc2V0UGFyZW50V2l0aFNhbWVQb3MoX3BhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfY2xvbmUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgICAgICBfY2xvbmUuYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gX2Nsb25lLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9jbG9uZSkuYmV6aWVyVG8oMSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKHBvcy54IC8gNCwgcG9zLnkpLCBjYy52MigwLCAwKSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX2Nsb25lLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIF9jbG9uZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RDb3VudGVyID09IHRoaXMuY29ycmVjdEFuc3dlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCB0aGUgb3B0aW9ucyBhcmUgYW5zd2VyZWQgY29ycmVjdGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyB4OiAtMTUwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTG9hZE5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykuYmV6aWVyVG8oMSwgY2MudjIoLTEwMCwgMzAwKSwgY2MudjIoMCwgMCksIGNjLnYyKDEwMCwgLTEyMDApKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAvLyBjYy50d2VlbihfY2xvbmUpXHJcbiAgICAgICAgICAgIC8vICAgICAudG8oMSwgeyB4OiAwLCB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vcGxheSBuZWdhdGl2ZSBhdWRpb1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmdBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gbm9kZS5nZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjEsIHsgeDogcG9zWCAtIDIwIH0pLnRvKDAuMSwgeyB4OiBwb3NYIH0pLnRvKDAuMSwgeyB4OiBwb3NYICsgMjAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgeDogcG9zWCB9KS50bygwLjEsIHsgeDogcG9zWCAtIDIwIH0pLnRvKDAuMSwgeyB4OiBwb3NYIH0pLnRvKDAuMSwgeyB4OiBwb3NYICsgMjAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgeDogcG9zWCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydF9sYXlvdXQzKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGNvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgYXVkaW9OdW06IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcnJlY3RBbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PSB0aGlzLmNvcnJlY3RBbnN3ZXJbaV0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhdWRpb051bSA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29ycmVjdCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5mcnVpdHNBbmRWZWdOYW1lc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50ZXIrKztcclxuICAgICAgICAgICAgbGV0IF9jbG9uZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgICAgICBfY2xvbmUucGFyZW50ID0gbm9kZTtcclxuICAgICAgICAgICAgX2Nsb25lLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICBfY2xvbmUuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgX2Nsb25lLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9jbG9uZS5jaGlsZHJlblswXS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9jbG9uZS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bYXVkaW9OdW1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdENvdW50ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCB0aGUgb3B0aW9ucyBhcmUgYW5zd2VyZWQgY29ycmVjdGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5vcHRpb25zKS5iZXppZXJUbygxLCBjYy52MigtMTAwLCAzMDApLCBjYy52MigwLCAwKSwgY2MudjIoMTAwLCAtMTIwMCkpLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAvL3BsYXkgbmVnYXRpdmUgYXVkaW9cclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBub2RlLmdldFBvc2l0aW9uKCkueDtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSkudG8oMC4xLCB7IHg6IHBvc1ggfSkudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSkudG8oMC4xLCB7IHg6IHBvc1ggfSkudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBMb2FkTmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZnJ1aXRzQW5kVmVnZXRhYmxlVm9bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmZydWl0c0FuZFZlZ2V0YWJsZVZvW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMS44KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsTmV4dExldmVsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAvL3BsYXlqb2NrZXlcclxuICAgICAgICAvLyBhZnRlciBqb2NrZXkgY2FsbCBiZWxvdyBhbmltYXRpb25cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEpvY2tleSgpIHtcclxuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzZcIiwgXCJwb3NpdGl2ZV83XCIsIFwicG9zaXRpdmVfOFwiLCBcInBvc2l0aXZlXzlcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfNlwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcclxuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogcG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvLmR1cmF0aW9uKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLndyb25nQW5zd2VyQ291bnQgPj0gNikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQgPSAxO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5vXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKDE2MDAsIHRoaXMuY3VycmVudEpvY2tleS55KTtcclxuICAgICAgICAgICAgbGV0IHBvc1g6IG51bWJlciA9IDQwMDtcclxuICAgICAgICAgICAgbGV0IHBvc1hfaW5pdDogbnVtYmVyID0gMTYwMDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKDE5MDAsIHRoaXMuY3VycmVudEpvY2tleS55KTtcclxuICAgICAgICAgICAgICAgIHBvc1ggPSA4NzA7XHJcbiAgICAgICAgICAgICAgICBwb3NYX2luaXQgPSAxOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zY2FsZVggPSAwLjY1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3NYIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53cm9uZ0F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogcG9zWF9pbml0IH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25BdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMud3JvbmdBdWRpby5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfSwgMC43KVxyXG4gICAgfVxyXG5cclxuICAgIGFycmFuZ2VDaGlsZHJlbihjZW50ZXJOb2RlOiBjYy5Ob2RlLCBzcGFjaW5nOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjZW50ZXJOb2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsIHdpZHRoIHJlcXVpcmVkXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBjaGlsZC53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxXaWR0aCArPSBzcGFjaW5nICogKGNoaWxkcmVuLmxlbmd0aCAtIDEpOyAvLyBBZGQgc3BhY2VzIGJldHdlZW4gY2hpbGRyZW5cclxuXHJcbiAgICAgICAgLy8gU3RhcnRpbmcgWCBwb3NpdGlvblxyXG4gICAgICAgIGxldCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgIC8vIEFycmFuZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjaGlsZC54ID0gc3RhcnRYICsgY2hpbGQud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBzdGFydFggKz0gY2hpbGQud2lkdGggKyBzcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnJhbmdlR3JpZENoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlciwgX29wdGlvbkNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjZW50ZXJOb2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBtYXhDb2x1bW5zID0gMztcclxuICAgICAgICBpZiAoX29wdGlvbkNvdW50ID09IDQpIHtcclxuICAgICAgICAgICAgbWF4Q29sdW1ucyA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbFJvd3MgPSBNYXRoLmNlaWwoY2hpbGRyZW4ubGVuZ3RoIC8gbWF4Q29sdW1ucyk7XHJcblxyXG4gICAgICAgIGxldCByb3dIZWlnaHQgPSAwO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IGNoaWxkcmVuWzBdLmhlaWdodCArIHNwYWNpbmc7IC8vIEFzc3VtaW5nIGFsbCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh0b3RhbFJvd3MgLSAxKSAqIHJvd0hlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGkgJSBtYXhDb2x1bW5zO1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbWF4Q29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggb2YgdGhlIGN1cnJlbnQgcm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4Q29sdW1ucyAmJiAocm93ICogbWF4Q29sdW1ucyArIGopIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gY2hpbGRyZW5bcm93ICogbWF4Q29sdW1ucyArIGpdLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gc3BhY2luZyAqIChNYXRoLm1pbihjaGlsZHJlbi5sZW5ndGggLSByb3cgKiBtYXhDb2x1bW5zLCBtYXhDb2x1bW5zKSAtIDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjaGlsZC54ID0gc3RhcnRYICsgY29sdW1uICogKGNoaWxkLndpZHRoICsgc3BhY2luZykgKyBjaGlsZC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNoaWxkLnkgPSBzdGFydFkgLSByb3cgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soYXVkaW9DbGlwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
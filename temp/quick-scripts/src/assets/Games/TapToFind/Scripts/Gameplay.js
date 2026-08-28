"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gameplay = /** @class */ (function (_super) {
    __extends(Gameplay, _super);
    function Gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.supercub_font = null;
        _this.tlc_font = null;
        _this.postive_VO = [];
        _this.negative_VO = [];
        _this.options = null;
        _this.optionsLayout = "layout3";
        _this.correctAnswer = [];
        _this.canTouch = true;
        _this.correctCounter = 0;
        _this.numberofOptions = 5;
        _this.pop_audio = null;
        _this.positive_audio = null;
        _this.negative_audio = null;
        _this.questionAudio = null;
        _this.correctAudio = null;
        _this.wrongAudio = null;
        _this.reiterationAudio = [];
        _this.canPlay = false;
        _this.currentJockey = null;
        _this.maxLevel = 0;
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
                        cc.tween(element).to(0.65, { y: pos.y }, { easing: "sineInOut" }).start();
                    }, delay);
                    delay += 0.35;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_5(i);
                }
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout1, _this);
                    element.on(cc.Node.EventType.TOUCH_END, _this.onTouchStart_layout1, _this);
                });
                _this.scheduleOnce(function () {
                    _this.canPlay = true;
                    _this.setupTVFocus("layout1");
                }, delay + 0.65); // शेवटच्या option च्या tween ची duration
            }
            else if (_this.optionsLayout == "layout2") {
                // this.OptionsLayout();
                if (StartGame_1.default.Instance.currentLevel == 6) {
                    _this.node.getChildByName("layout2").setPosition(-2.282, 110);
                    _this.node.getChildByName("plate").active = true;
                }
                else {
                    _this.node.getChildByName("basket").active = true;
                }
                //this.node.getChildByName("rope").active = true;
                _this.arrangeChildren(_this.options, 20); // 10 is an example spacing value
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
                    element.on(cc.Node.EventType.TOUCH_END, _this.onTouchStart_layout2, _this);
                });
                _this.scheduleOnce(function () {
                    _this.canPlay = true;
                    _this.setupTVFocus("layout2");
                }, delay + 0.5);
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
                    element.on(cc.Node.EventType.TOUCH_END, _this.onTouchStart_layout3, _this);
                });
                _this.scheduleOnce(function () {
                    _this.canPlay = true;
                    _this.setupTVFocus("layout3");
                }, delay + 0.5);
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
    Gameplay.prototype.playButtonSound = function (event) {
        if (!this.canTouch) {
            return;
        }
        event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.questionAudio, false);
        this.scheduleOnce(function () {
            event.target.getComponent(cc.Button).interactable = true;
        }, this.questionAudio.duration);
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
            this.arrangeGridChildren(this.options, 80, _optionCount);
            // if (startGame.Instance.currentLevel == 6) {
            //     this.node.getChildByName("layout3").getChildByName("plate").active = true;
            //     console.log("-------------------");
            //     this.arrangeGridChildren(this.options, 10, _optionCount);
            // }
        }
        else {
            this.arrangeChildren(this.options, 80);
        }
        if (this.optionsLayout == "layout1") {
            var _laypout1posY = [-150, 100, -150, 100, 50];
            if (StartGame_1.default.Instance.currentLevel == 5) {
                _laypout1posY = [-250, -100, -250, -100, -250];
            }
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
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
            this.correctCounter++;
            cc.tween(node)
                .to(1, { x: -1200 }, { easing: "sineInOut" })
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
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
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
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
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
        console.log("OPTION TOUCH:", event.target.name);
        if (!this.canTouch) {
            console.log("canTouch FALSE");
            return;
        }
        if (!this.canTouch) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
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
            _this.scheduleOnce(function () {
                _this.callJockey();
            }, 1);
        }, 1.5);
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
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
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
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-350, 350];
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
            // cc.audioEngine.playEffect(this.correctAudio, false);
            cc.audioEngine.playEffect(_this.postive_VO[currentClipNum], false);
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
                _this.callNextLevel();
            }, _this.currentJockey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum]).duration);
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
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
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
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            _this.currentJockey.setPosition(1600, _this.currentJockey.y);
            var posX = 350;
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
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            cc.tween(_this.currentJockey).to(0.5, { x: posX }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                // cc.audioEngine.playEffect(this.wrongAudio, false);
                cc.audioEngine.playEffect(_this.negative_VO[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey).to(0.5, { x: posX_init }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                        else {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.canTouch = true;
                    _this.canPlay = true;
                    if (TVInputManager_1.default.Instance)
                        TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                    if (_this.questionAudio) {
                        cc.audioEngine.playEffect(_this.questionAudio, false);
                    }
                }, _this.currentJockey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum]).duration);
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
    Gameplay.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node.getChildByName("qBar").getChildByName("SoundButton (1)");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        // let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
        //     let btn = node.getComponent(cc.Button);
        //     return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
        // });
        var optionButtons = this.node.getChildByName(activeContainerName).children.filter(function (node) {
            return node.active && node.opacity > 0;
        });
        var nodes = __spreadArrays(optionButtons, [backBtn, soundBtn, musicBtn]).filter(function (n) { return !!n; });
        // pick a sensible default — e.g. first option, or correct answer index
        if (cc.director.getScene().name == "1") {
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
    ], Gameplay.prototype, "postive_VO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "negative_VO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "pop_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positive_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "negative_audio", void 0);
    Gameplay = __decorate([
        ccclass
    ], Gameplay);
    return Gameplay;
}(cc.Component));
exports.default = Gameplay;
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
// import startGame from "../../../Framework/Scripts/StartGame";
// import TVInputManager from "./TVInputManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class Gameplay extends cc.Component {
//     @property(cc.Font)
//     private podar_font: cc.Font = null;
//     @property(cc.Font)
//     private jaipuria_font: cc.Font = null;
//     @property(cc.Font)
//     private supercub_font: cc.Font = null;
//     @property(cc.Font)
//     private tlc_font: cc.Font = null;
//     @property(cc.AudioClip)
//     private postive_VO: cc.AudioClip[] = [];
//     @property(cc.AudioClip)
//     private negative_VO: cc.AudioClip[] = [];
//     private options: cc.Node = null;
//     private optionsLayout: string = "layout3";
//     correctAnswer: number[] = [];
//     private canTouch: boolean = false; // Initially false until animations finish
//     correctCounter: number = 0;
//     private numberofOptions: number = 5;
//     @property(cc.AudioClip)
//     pop_audio: cc.AudioClip = null;
//     @property(cc.AudioClip)
//     positive_audio: cc.AudioClip = null;
//     @property(cc.AudioClip)
//     negative_audio: cc.AudioClip = null;
//     private questionAudio: cc.AudioClip = null;
//     private correctAudio: cc.AudioClip = null;
//     private wrongAudio: cc.AudioClip = null;
//     private reiterationAudio: cc.AudioClip[] = [];
//     canPlay: boolean = false;
//     currentJockey: cc.Node = null;
//     maxLevel: number = 0;
//     onLoad() {
//         // Essential initialization if needed
//     }
//     LoadQuestion() {
//         if (startGame.Instance.jockeyName == "Podar") {
//             this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
//             this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
//             this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
//         }
//         else if (startGame.Instance.jockeyName == "tlc") {
//             this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
//             this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
//             this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
//         }
//         else if (startGame.Instance.jockeyName == "supercub") {
//             this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
//             this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
//             this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
//         }
//         else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
//             this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
//             this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
//             this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
//         }
//         let str = startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAnswerNum;
//         this.correctAnswer = str.split('').map(char => parseInt(char));
//         this.optionsLayout = startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionLayout;
//         this.numberofOptions = startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions;
//         this.options = this.node.getChildByName(this.optionsLayout);
//         this.generateOptions(this.node.getChildByName(this.optionsLayout + "_template"), this.options, this.numberofOptions);
//         this.maxLevel = startGame.Instance.TotalLevels;
//         if (startGame.Instance.currentLevel == this.maxLevel) {
//             cc.director.preloadScene("gameEnd");
//         }
//         console.log(`levelStarted--` + startGame.Instance.currentLevel);
//         if (startGame.Instance.isDemoGame) {
//             cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionBgName, (err, texture) => {
//                 if (!err) {
//                     const spriteFrame = new cc.SpriteFrame(texture);
//                     this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
//                 }
//             });
//             cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
//                 if (!err) this.questionAudio = audioClip;
//             });
//             cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAudioName, (err, audioClip) => {
//                 if (!err) this.correctAudio = audioClip;
//             });
//             cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].wrongAudioName, (err, audioClip) => {
//                 if (!err) this.wrongAudio = audioClip;
//             });
//             for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName.length; i++) {
//                 cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName[i], (err, audioClip) => {
//                     if (!err) this.reiterationAudio[i] = audioClip;
//                 });
//             }
//             for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
//                 if (!startGame.Instance.questions[startGame.Instance.currentLevel - 1].isOptionText) {
//                     cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i], (err, texture) => {
//                         if (!err) {
//                             const spriteFrame = new cc.SpriteFrame(texture);
//                             this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
//                         }
//                     });
//                 }
//                 else {
//                     this.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
//                 }
//                 cc.loader.load(startGame.Instance.questions[startGame.Instance.currentLevel - 1].optionsBg[i], (err, texture) => {
//                     if (!err) {
//                         const spriteFrame = new cc.SpriteFrame(texture);
//                         this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
//                     }
//                 });
//             }
//         }
//         else {
//             this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionBgName, (spriteFrame) => {
//                 this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
//             });
//             this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
//                 this.questionAudio = AudioClip;
//             });
//             this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].correctAudioName, (AudioClip) => {
//                 this.correctAudio = AudioClip;
//             });
//             this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].wrongAudioName, (AudioClip) => {
//                 this.wrongAudio = AudioClip;
//             });
//             for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName.length; i++) {
//                 this.loadAudioClip(startGame.Instance.questions[startGame.Instance.currentLevel - 1].reiterationAudioName[i], (AudioClip) => {
//                     this.reiterationAudio[i] = AudioClip;
//                 });
//             }
//             for (let i = 0; i < startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
//                 if (!startGame.Instance.questions[startGame.Instance.currentLevel - 1].isOptionText) {
//                     this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i], (spriteFrame) => {
//                         this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
//                     });
//                 }
//                 else {
//                     this.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[startGame.Instance.currentLevel - 1].options[i];
//                 }
//                 this.loadSpriteFrame(startGame.Instance.questions[startGame.Instance.currentLevel - 1].optionsBg[i], (spriteFrame) => {
//                     this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
//                 });
//             }
//         }
//         this.currentJockey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
//         this.currentJockey.active = true;
//     }
//     start() {
//         this.LoadQuestion();
//         ProgressBar.Instance.ProgressFill(startGame.Instance.currentLevel - 1);
//         startGame.Instance.node.getChildByName("progress").opacity = 255;
//         this.scheduleOnce(() => {
//             if (this.questionAudio && startGame.Instance.questions[startGame.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
//                 cc.audioEngine.playEffect(this.questionAudio, false);
//             }
//             let animDelay = 0;
//             if (this.optionsLayout == "layout1") {
//                 for (let i = 0; i < this.options.children.length; i++) {
//                     this.options.children[i].active = false;
//                     this.options.children[i].opacity = 255;
//                     this.options.setPosition(0, 0);
//                     this.scheduleOnce(() => {
//                         let element = this.options.children[i];
//                         let pos = element.getPosition();
//                         element.setPosition(pos.x, pos.y - 850);
//                         element.active = true;
//                         cc.audioEngine.playEffect(this.pop_audio, false);
//                         cc.tween(element).to(0.65, { y: pos.y }, { easing: "sineInOut" }).start();
//                     }, animDelay);
//                     animDelay += 0.35;
//                 }
//             }
//             else if (this.optionsLayout == "layout2") {
//                 if (startGame.Instance.currentLevel == 6) {
//                     this.node.getChildByName("layout2").setPosition(-2.282, 110);
//                     this.node.getChildByName("plate").active = true;
//                 } else {
//                     this.node.getChildByName("basket").active = true;
//                 }
//                 this.arrangeChildren(this.options, 20);
//                 for (let i = 0; i < this.options.children.length; i++) {
//                     this.scheduleOnce(() => {
//                         cc.audioEngine.playEffect(this.pop_audio, false);
//                         cc.tween(this.options.children[i]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
//                     }, animDelay);
//                     animDelay += 0.25;
//                 }
//             }
//             else if (this.optionsLayout == "layout3") {
//                 for (let i = 0; i < this.options.children.length; i++) {
//                     this.scheduleOnce(() => {
//                         cc.audioEngine.playEffect(this.pop_audio, false);
//                         cc.tween(this.options.children[i]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
//                     }, animDelay);
//                     animDelay += 0.25;
//                 }
//             }
//             // Bind Touch and Key Events properly for options
//             this.options.children.forEach(element => {
//                 element.off(cc.Node.EventType.TOUCH_END); // remove old listener if any
//                 element.on(cc.Node.EventType.TOUCH_END, (evt: cc.Event.EventTouch) => {
//                     this.handleOptionSelect(evt.target);
//                 }, this);
//             });
//             // Enable Controls after animation completes
//             this.scheduleOnce(() => {
//                 this.canTouch = true;
//                 this.canPlay = true;
//                 this.setupTVFocus(this.optionsLayout);
//             }, animDelay + 0.5);
//             // Hand animation logic
//             this.scheduleOnce(() => {
//                 if (startGame.Instance.currentLevel == 1) {
//                     let hand = this.node.getChildByName("hand");
//                     let targetOpt = this.options.getChildByName(this.correctAnswer[0].toString());
//                     if (targetOpt) {
//                         hand.setParent(targetOpt);
//                         hand.setPosition(50, -100);
//                         hand.angle = 40;
//                         hand.setParentWithSamePos(this.node);
//                         hand.active = true;
//                         hand.getComponent(cc.Animation).play();
//                     }
//                 }
//             }, 1);
//         }, 1);
//     }
//     playButtonSound(event: cc.Event) {
//         if (!this.canTouch) return;
//         event.target.getComponent(cc.Button).interactable = false;
//         cc.audioEngine.playEffect(this.questionAudio, false);
//         this.scheduleOnce(() => {
//             event.target.getComponent(cc.Button).interactable = true;
//         }, this.questionAudio.duration);
//     }
//     generateOptions(_template: cc.Node, _optionParent: cc.Node, _optionCount: number) {
//         for (let i = 0; i < _optionCount; i++) {
//             let _option: cc.Node = cc.instantiate(_template);
//             _option.parent = _optionParent;
//             _option.setPosition(0, 0);
//             _option.active = true;
//             _option.opacity = 0;
//             _option.name = (i + 1).toString();
//             _option.children.forEach(child => {
//                 child['_touchListener'] = null; // Ignore child touch intercept
//             });
//         }
//         if (this.optionsLayout == "layout3") {
//             this.arrangeGridChildren(this.options, 80, _optionCount);
//         } else {
//             this.arrangeChildren(this.options, 80);
//         }
//         if (this.optionsLayout == "layout1") {
//             let _laypout1posY: number[] = [-150, 100, -150, 100, 50];
//             if (startGame.Instance.currentLevel == 5) {
//                 _laypout1posY = [-250, -100, -250, -100, -250];
//             }
//             for (let i = 0; i < _optionParent.children.length; i++) {
//                 _optionParent.children[i].setPosition(_optionParent.children[i].x, _laypout1posY[i]);
//             }
//         }
//         _template.destroy();
//     }
//     /**
//      * Common Handler for Mouse Click, Touch, Keyboard Select & TV Remote
//      */
//     public handleOptionSelect(node: cc.Node) {
//         console.log("Option selected via Touch/Keyboard:", node.name);
//         if (!this.canTouch || !node || !node.active) {
//             console.log("Selection blocked: canTouch is FALSE or Node invalid");
//             return;
//         }
//         let hand = this.node.getChildByName("hand");
//         if (hand) hand.active = false;
//         this.canTouch = false;
//         this.canPlay = false;
//         if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(false);
//         let correct: boolean = false;
//         let audioNum: number = 0;
//         for (let i = 0; i < this.correctAnswer.length; i++) {
//             if (node.name == this.correctAnswer[i].toString()) {
//                 correct = true;
//                 audioNum = i;
//                 break;
//             }
//         }
//         if (correct) {
//             this.handleCorrectAnswer(node, audioNum);
//         } else {
//             this.handleWrongAnswer(node);
//         }
//     }
//     private handleCorrectAnswer(node: cc.Node, audioNum: number) {
//         cc.audioEngine.playEffect(this.positive_audio, false);
//         this.correctCounter++;
//         if (this.optionsLayout == "layout1") {
//             cc.tween(node)
//                 .to(1, { x: -1200 }, { easing: "sineInOut" })
//                 .call(() => {
//                     this.playReiterationAudio(audioNum);
//                     node.active = false;
//                     this.checkNextQuestionOrUnlock();
//                 }).start();
//         }
//         else if (this.optionsLayout == "layout2") {
//             node.getComponent(cc.Animation)?.stop();
//             node.angle = 0;
//             let _clone: cc.Node = cc.instantiate(node);
//             _clone.parent = node;
//             _clone.setPosition(0, 0);
//             let _parentNode: cc.Node = this.node.getChildByName("basket").getChildByName("answered").getChildByName(this.correctCounter.toString());
//             _clone.setParentWithSamePos(_parentNode);
//             node.active = false;
//             _clone.getComponent(cc.Animation)?.stop();
//             _clone.angle = 0;
//             let pos = _clone.getPosition();
//             cc.tween(_clone).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(0, 0)).start();
//             this.scheduleOnce(() => {
//                 _clone.getComponent(cc.Animation)?.stop();
//                 _clone.angle = 0;
//                 this.playReiterationAudio(audioNum);
//                 if (this.correctCounter == this.correctAnswer.length) {
//                     cc.tween(this.options).to(1, { x: -1500 }, { easing: "backInOut" }).start();
//                     this.LoadNextQuestion();
//                 } else {
//                     this.enableTouchAgain();
//                 }
//             }, 1);
//         }
//         else if (this.optionsLayout == "layout3") {
//             let _clone: cc.Node = cc.instantiate(node);
//             _clone.parent = node;
//             _clone.setPosition(0, 0);
//             _clone.setParentWithSamePos(this.node);
//             _clone.children[0].active = true;
//             _clone.children[0].opacity = 0;
//             node.active = false;
//             cc.tween(_clone.children[0])
//                 .to(1, { opacity: 255 }, { easing: "sineInOut" })
//                 .call(() => {
//                     this.playReiterationAudio(audioNum);
//                     this.checkNextQuestionOrUnlock();
//                 }).start();
//         }
//     }
//     private playReiterationAudio(audioNum: number) {
//         if (this.reiterationAudio[audioNum]) {
//             cc.audioEngine.playEffect(this.reiterationAudio[audioNum], false);
//         } else if (this.reiterationAudio[0]) {
//             cc.audioEngine.playEffect(this.reiterationAudio[0], false);
//         }
//     }
//     private checkNextQuestionOrUnlock() {
//         if (this.correctCounter == this.correctAnswer.length) {
//             if (this.optionsLayout == "layout1") {
//                 cc.tween(this.options).bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200)).start();
//             }
//             this.LoadNextQuestion();
//         } else {
//             this.enableTouchAgain();
//         }
//     }
//     private enableTouchAgain() {
//         this.canTouch = true;
//         this.canPlay = true;
//         if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(true);
//     }
//     private handleWrongAnswer(node: cc.Node) {
//         this.callNegativeRection();
//         let posX = node.getPosition().x;
//         cc.tween(node)
//             .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
//             .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
//             .to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE })
//             .start();
//         cc.tween(node)
//             .to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
//             .to(0.1, { x: posX }).to(0.1, { x: posX - 20 }).to(0.1, { x: posX }).to(0.1, { x: posX + 20 })
//             .to(0.1, { x: posX }).start();
//     }
//     LoadNextQuestion() {
//         this.node.getChildByName("confetti").active = true;
//         ProgressBar.Instance.createStarTrails(6, this.node);
//         this.scheduleOnce(() => {
//             ProgressBar.Instance.ProgressFill(startGame.Instance.currentLevel);
//             this.scheduleOnce(() => {
//                 this.callJockey();
//             }, 1);
//         }, 1.5);
//     }
//     callNextLevel() {
//         if (startGame.Instance.currentLevel >= startGame.Instance.TotalLevels) {
//             cc.director.loadScene("gameEnd");
//         } else {
//             startGame.Instance.currentLevel++;
//             cc.director.loadScene("1");
//         }
//     }
//     callJockey() {
//         let anim: string[] = [];
//         if (startGame.Instance.jockeyName == "Podar") anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
//         else if (startGame.Instance.jockeyName == "tlc") anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
//         else if (startGame.Instance.jockeyName == "supercub") anim = ["positive_3", "positive_4", "positive_3", "positive_4", "positive_5"];
//         else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
//         else if (startGame.Instance.jockeyName == "Singham") anim = ["dance", "thumbs_up"];
//         else if (startGame.Instance.jockeyName == "Mighty_Raju") anim = ["celebration", "well_done"];
//         else if (startGame.Instance.jockeyName == "Puzzle") anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
//         else if (startGame.Instance.jockeyName == "stallion") anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
//         let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
//         let pos: number[] = [-1600, 1600];
//         let jockeytween: number[] = [-350, 350];
//         if (startGame.Instance.jockeyName == "supercub") {
//             pos = [1900, 1900];
//             jockeytween = [870, 870];
//         }
//         this.currentJockey.setPosition(pos[startGame.Instance.currentLevel % 2], this.currentJockey.y);
//         if (startGame.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
//             this.currentJockey.scaleX = -0.65;
//         } else if (startGame.Instance.jockeyName == "stallion") {
//             this.currentJockey.scaleX = 0.65;
//             this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
//         } else if (startGame.Instance.jockeyName == "Podar") {
//             this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
//         } else {
//             this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
//         }
//         cc.tween(this.currentJockey).to(0.5, { x: jockeytween[startGame.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
//         this.scheduleOnce(() => {
//             this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
//             cc.audioEngine.playEffect(this.postive_VO[currentClipNum], false);
//             this.scheduleOnce(() => {
//                 cc.tween(this.currentJockey).to(0.5, { x: pos[startGame.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
//                 if (startGame.Instance.jockeyName != "stallion") {
//                     let idleName = startGame.Instance.jockeyName == "Podar" ? "idel" : "idle";
//                     this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, idleName, true);
//                 }
//                 this.callNextLevel();
//             }, this.currentJockey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum]).duration);
//         }, 0.5);
//     }
//     callNegativeRection() {
//         cc.audioEngine.playEffect(this.negative_audio, false);
//         this.scheduleOnce(() => {
//             let anim: string[] = [];
//             if (startGame.Instance.jockeyName == "Podar") anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
//             else if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "bag") anim = ["negative_1", "negative_2", "negative_3"];
//             else if (startGame.Instance.jockeyName == "supercub") anim = ["negative_3", "negative_4", "negative_3", "negative_4"];
//             else if (startGame.Instance.jockeyName == "cryon") anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
//             else if (startGame.Instance.jockeyName == "Singham") anim = ["no"];
//             else if (startGame.Instance.jockeyName == "Mighty_Raju") anim = ["try_again"];
//             else if (startGame.Instance.jockeyName == "Puzzle") anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
//             else if (startGame.Instance.jockeyName == "stallion") anim = ["negative_1", "negative_2"];
//             let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
//             this.currentJockey.setPosition(1600, this.currentJockey.y);
//             let posX: number = 350;
//             let posX_init: number = 1600;
//             if (startGame.Instance.jockeyName == "supercub") {
//                 this.currentJockey.setPosition(1900, this.currentJockey.y);
//                 posX = 870;
//                 posX_init = 1900;
//             }
//             if (startGame.Instance.jockeyName == "stallion") {
//                 this.currentJockey.scaleX = 0.65;
//                 this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
//             } else {
//                 let idleName = startGame.Instance.jockeyName == "Podar" ? "idel" : "idle";
//                 this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, idleName, true);
//             }
//             cc.tween(this.currentJockey).to(0.5, { x: posX }, { easing: "quartInOut" }).start();
//             this.scheduleOnce(() => {
//                 this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
//                 cc.audioEngine.playEffect(this.negative_VO[currentClipNum], false);
//                 this.scheduleOnce(() => {
//                     cc.tween(this.currentJockey).to(0.5, { x: posX_init }, { easing: "quartInOut" }).start();
//                     if (startGame.Instance.jockeyName != "stallion") {
//                         let idleName = startGame.Instance.jockeyName == "Podar" ? "idel" : "idle";
//                         this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, idleName, true);
//                     }
//                     this.enableTouchAgain();
//                     if (this.questionAudio) {
//                         cc.audioEngine.playEffect(this.questionAudio, false);
//                     }
//                 }, this.currentJockey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum]).duration);
//             }, 0.5);
//         }, 0.7);
//     }
//     arrangeChildren(centerNode: cc.Node, spacing: number) {
//         let children = centerNode.children;
//         let totalWidth = 0;
//         for (let child of children) totalWidth += child.width;
//         totalWidth += spacing * (children.length - 1);
//         let startX = -totalWidth / 2;
//         for (let i = 0; i < children.length; i++) {
//             let child = children[i];
//             child.x = startX + child.width / 2;
//             startX += child.width + spacing;
//         }
//     }
//     arrangeGridChildren(centerNode: cc.Node, spacing: number, _optionCount: number) {
//         let children = centerNode.children;
//         let maxColumns = _optionCount == 4 ? 2 : 3;
//         let totalRows = Math.ceil(children.length / maxColumns);
//         let rowHeight = children.length > 0 ? children[0].height + spacing : 0;
//         let startY = (totalRows - 1) * rowHeight / 2;
//         for (let i = 0; i < children.length; i++) {
//             let column = i % maxColumns;
//             let row = Math.floor(i / maxColumns);
//             let totalWidth = 0;
//             for (let j = 0; j < maxColumns && (row * maxColumns + j) < children.length; j++) {
//                 totalWidth += children[row * maxColumns + j].width;
//             }
//             totalWidth += spacing * (Math.min(children.length - row * maxColumns, maxColumns) - 1);
//             let startX = -totalWidth / 2;
//             let child = children[i];
//             child.x = startX + column * (child.width + spacing) + child.width / 2;
//             child.y = startY - row * rowHeight;
//         }
//     }
//     private getRandomNumber(min: number, max: number): number {
//         let _number: number = Math.random();
//         _number = cc.misc.lerp(min, max, _number);
//         return Math.round(_number);
//     }
//     loadSpriteFrame(imageName: string, callback: (spriteFrame: cc.SpriteFrame) => void) {
//         cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, (err, spriteFrame) => {
//             if (!err) callback(spriteFrame);
//         });
//     }
//     loadAudioClip(audioName: string, callback: (spriteFrame: cc.AudioClip) => void) {
//         cc.loader.loadRes("audios/" + audioName, cc.AudioClip, (err, audioClip) => {
//             if (!err) callback(audioClip);
//         });
//     }
//     private setupTVFocus(activeContainerName: string) {
//         let backBtn = startGame.Instance.node.getChildByName("back");
//         let musicBtn = startGame.Instance.node.getChildByName("music");
//         let soundBtn = this.node.getChildByName("qBar")?.getChildByName("SoundButton (1)");
//         if (backBtn) backBtn.scale = 1;
//         if (musicBtn) musicBtn.scale = 1;
//         let activeContainer = this.node.getChildByName(activeContainerName);
//         if (!activeContainer) return;
//         let optionButtons = activeContainer.children.filter(node => node.active && node.opacity > 0);
//         let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);
//         if (TVInputManager.Instance) {
//             let defaultIdx = cc.director.getScene().name == "1" ? 0 : -1;
//             TVInputManager.Instance.init(nodes, defaultIdx);
//             TVInputManager.Instance.setCanSelect(this.canPlay);
//         }
//     }
// }

cc._RF.pop();
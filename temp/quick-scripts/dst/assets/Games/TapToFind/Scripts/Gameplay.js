
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
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gameplay = /** @class */ (function (_super) {
    __extends(Gameplay, _super);
    function Gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postive_VO = [];
        _this.negative_VO = [];
        _this.pop_audio = null;
        _this.positive_audio = null;
        _this.negative_audio = null;
        _this.questionAudio = [];
        _this.correctAudio = null;
        _this.wrongAudio = null;
        _this.reiterationAudio = [];
        _this.options = null;
        _this.optionsLayout = "layout3";
        _this.correctAnswer = [];
        _this.canTouch = false;
        _this.correctCounter = 0;
        _this.numberofOptions = 5;
        _this.currentJockey = null;
        _this.maxLevel = 0;
        _this.isVisied = false;
        return _this;
    }
    Gameplay.prototype.onLoad = function () { };
    Gameplay.prototype.LoadQuestion = function () {
        var _this = this;
        var str = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
            .correctAnswerNum;
        this.correctAnswer = str.split("").map(function (char) { return parseInt(char); });
        this.optionsLayout =
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionLayout;
        this.numberofOptions =
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions;
        this.options = this.node.getChildByName(this.optionsLayout);
        this.generateOptions(this.node.getChildByName(this.optionsLayout + "_template"), this.options, this.numberofOptions);
        this.maxLevel = StartGame_1.default.Instance.TotalLevels;
        if (StartGame_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        console.log("levelStarted--" + StartGame_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionBgName, function (err, texture) {
                if (err) {
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
                    spriteFrame;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (err, audioClip) {
                if (err) {
                    return;
                }
                _this.correctAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .wrongAudioName, function (err, audioClip) {
                if (err) {
                    return;
                }
                _this.wrongAudio = audioClip;
            });
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .reiterationAudioName[i], function (err, audioClip) {
                    if (err) {
                        return;
                    }
                    _this.reiterationAudio[i] = audioClip;
                });
            };
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .reiterationAudioName.length; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                        .options[i], function (err, texture) {
                        if (err) {
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.options
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.options
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                }
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .optionsBg[i], function (err, texture) {
                    if (err) {
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.options
                        .getChildByName((i + 1).toString())
                        .getChildByName("img2")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_1 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .questionBgName, function (spriteFrame) {
                _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
                    spriteFrame;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (AudioClip) {
                _this.correctAudio = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                .wrongAudioName, function (AudioClip) {
                _this.wrongAudio = AudioClip;
            });
            var _loop_3 = function (i) {
                this_2.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .reiterationAudioName[i], function (AudioClip) {
                    _this.reiterationAudio[i] = AudioClip;
                });
            };
            var this_2 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .reiterationAudioName.length; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                        .options[i], function (spriteFrame) {
                        _this.options
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_3.options
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                }
                this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .optionsBg[i], function (spriteFrame) {
                    _this.options
                        .getChildByName((i + 1).toString())
                        .getChildByName("img2")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_3 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
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
                        cc.tween(element)
                            .to(0.65, { y: pos.y }, { easing: "sineInOut" })
                            .start();
                    }, delay);
                    delay += 0.35;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_5(i);
                }
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questionAudio[StartGame_1.default.Instance.currentLevel - 1], false);
                    _this.setupTVFocus(_this.optionsLayout);
                }, 1.7);
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout1, _this);
                    element.on("tv-select", _this.onTouchStart_layout1, _this);
                });
            }
            else if (_this.optionsLayout == "layout2") {
                _this.node.getChildByName("basket").active = true;
                _this.node.getChildByName("rope").active = true;
                var delay = 0;
                var _loop_6 = function (i) {
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.pop_audio, false);
                        cc.tween(_this.options.children[i])
                            .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                            .start();
                    }, delay);
                    delay += 0.25;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_6(i);
                }
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questionAudio[StartGame_1.default.Instance.currentLevel - 1], false);
                    _this.setupTVFocus(_this.optionsLayout);
                }, 1.7);
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout2, _this);
                    element.on("tv-select", _this.onTouchStart_layout2, _this);
                });
            }
            else if (_this.optionsLayout == "layout3") {
                var delay = 0;
                var _loop_7 = function (i) {
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.pop_audio, false);
                        cc.tween(_this.options.children[i])
                            .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                            .start();
                    }, delay);
                    delay += 0.25;
                };
                for (var i = 0; i < _this.options.children.length; i++) {
                    _loop_7(i);
                }
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questionAudio[StartGame_1.default.Instance.currentLevel - 1], false);
                    _this.setupTVFocus(_this.optionsLayout);
                }, 1.7);
                _this.options.children.forEach(function (element) {
                    element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout3, _this);
                    element.on("tv-select", _this.onTouchStart_layout3, _this);
                });
            }
            _this.scheduleOnce(function () {
                if (StartGame_1.default.Instance.currentLevel == 1) {
                    console.log(_this.options.getChildByName(_this.correctAnswer[0].toString()).name);
                    var hand_1 = _this.node.getChildByName("hand");
                    hand_1.setParent(_this.options.getChildByName(_this.correctAnswer[0].toString()));
                    hand_1.setPosition(50, -50);
                    hand_1.angle = 40;
                    hand_1.active = true;
                    hand_1.getComponent(cc.Animation).play();
                    _this.scheduleOnce(function () {
                        hand_1.setParentWithSamePos(_this.node);
                    }, 0.3);
                }
            }, 1);
        }, 1);
    };
    Gameplay.prototype.PlayQVoButton = function (_event) {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionAudio[StartGame_1.default.Instance.currentLevel - 1], false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            _this.setupTVFocus(_this.optionsLayout);
        }, this.questionAudio[StartGame_1.default.Instance.currentLevel - 1].duration);
    };
    Gameplay.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node
            .getChildByName("questionPanel")
            .getChildByName("purple sound");
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
        if (StartGame_1.default.Instance.currentLevel == 1 && !this.isVisied) {
            this.isVisied = true;
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        this.canTouch = true;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    Gameplay.prototype.setupTVFocus2 = function () {
        TVInputManager_1.default.Instance.callEnd();
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [backBtn, musicBtn].filter(function (n) { return !!n; });
        TVInputManager_1.default.Instance.init(nodes, -1);
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
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
            this.arrangeGridChildren(this.options, 70, _optionCount);
        }
        if (this.optionsLayout == "layout1") {
            var _laypout1posX = [-465, -165, 135, 435];
            var _laypout1posY = [-150, 100, -150, 100];
            for (var i = 0; i < _optionParent.children.length; i++) {
                _optionParent.children[i].setPosition(_laypout1posX[i], _laypout1posY[i]);
            }
            if (StartGame_1.default.Instance.currentLevel == 5) {
                var _laypout1posX_1 = [-465, -165, 135, 435];
                var _laypout1posY_1 = [-100, -100, -100, -100];
                for (var i = 0; i < _optionParent.children.length; i++) {
                    _optionParent.children[i].setPosition(_laypout1posX_1[i], _laypout1posY_1[i]);
                }
            }
        }
        if (this.optionsLayout == "layout2") {
            var _laypout1posX = [-380, 0, 450, 0];
            var _laypout1posY = [-20, -30, -20, 0];
            for (var i = 0; i < _optionParent.children.length; i++) {
                _optionParent.children[i].setPosition(_laypout1posX[i], _laypout1posY[i]);
            }
        }
        _template.destroy();
    };
    Gameplay.prototype.onTouchStart_layout1 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("hand").active = false;
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
            this.canTouch = false;
            TVInputManager_1.default.Instance.setCanSelect(false);
            this.correctCounter++;
            console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
            cc.audioEngine.playEffect(this.positive_audio, false);
            cc.tween(node)
                .to(0.8, { y: 1200 }, { easing: "sineInOut" })
                .call(function () {
                node.active = false;
                if (_this.correctCounter < _this.correctAnswer.length) {
                    var clip = _this.reiterationAudio[audioNum] || _this.reiterationAudio[0];
                    cc.audioEngine.playEffect(clip, false);
                    _this.scheduleOnce(function () {
                        _this.canTouch = true;
                        TVInputManager_1.default.Instance.setCanSelect(true);
                    }, 0.5);
                }
                else {
                    cc.tween(_this.options)
                        .bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200))
                        .call(function () {
                        _this.LoadNextQuestion();
                    })
                        .start();
                }
            })
                .start();
        }
        else {
            this.callNegativeRection();
            var originalColor_1 = node.color.clone();
            cc.tween(node)
                .to(0.1, { color: cc.Color.RED })
                .delay(0.15)
                .to(0.1, { color: originalColor_1 })
                .call(function () {
                node.color = originalColor_1;
            })
                .start();
        }
    };
    Gameplay.prototype.onTouchStart_layout2 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("hand").active = false;
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
            var _parentNode = this.node
                .getChildByName("basket")
                .getChildByName("answered")
                .getChildByName(this.correctCounter.toString());
            _clone_1.setParentWithSamePos(_parentNode);
            node.active = false;
            _clone_1.getComponent(cc.Animation).stop();
            _clone_1.angle = 0;
            var pos = _clone_1.getPosition();
            cc.tween(_clone_1)
                .bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(0, 0))
                .start();
            this.scheduleOnce(function () {
                _clone_1.getComponent(cc.Animation).stop();
                _clone_1.angle = 0;
                cc.audioEngine.stopAllEffects();
                if (_this.reiterationAudio[audioNum]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false);
                }
                else if (_this.reiterationAudio[0]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
                }
                if (_this.correctCounter == _this.correctAnswer.length) {
                    cc.tween(_this.options)
                        .to(1, { x: -1500 }, { easing: "backInOut" })
                        .start();
                    _this.LoadNextQuestion();
                }
                else {
                    _this.canTouch = true;
                    TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
                }
            }, 1);
        }
        else {
            this.callNegativeRection();
            console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
            var posX = node.getPosition().x;
            cc.tween(node)
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .start();
            cc.tween(node)
                .to(0.1, { x: posX - 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX - 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX })
                .call(function () { })
                .start();
        }
    };
    Gameplay.prototype.onTouchStart_layout3 = function (event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("hand").active = false;
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
            _clone.children[2].active = false;
            _clone.children[1].active = true;
            node.active = false;
            cc.tween(_clone.children[1])
                .to(1, { opacity: 255 }, { easing: "sineInOut" })
                .call(function () {
                if (_this.reiterationAudio[audioNum]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false);
                }
                else if (_this.reiterationAudio[0]) {
                    cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
                }
                if (_this.correctCounter == _this.correctAnswer.length) {
                    _this.LoadNextQuestion();
                }
            })
                .start();
        }
        else {
            this.callNegativeRection();
            console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
            var posX = node.getPosition().x;
            cc.tween(node)
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE })
                .start();
            cc.tween(node)
                .to(0.1, { x: posX - 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX - 20 })
                .to(0.1, { x: posX })
                .to(0.1, { x: posX + 20 })
                .to(0.1, { x: posX })
                .call(function () { })
                .start();
        }
    };
    Gameplay.prototype.LoadNextQuestion = function () {
        var _this = this;
        this.setupTVFocus2();
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
                "positive_3",
                "positive_4",
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
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        var pos = [-1600, 1600];
        var jockeytween = [-350, 350];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
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
            // cc.audioEngine.playEffect(this.correctAudio, false);
            cc.audioEngine.playEffect(_this.postive_VO[currentClipNum], false);
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
                _this.callNextLevel();
            }, _this.currentJockey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum]).duration);
        }, 0.5);
    };
    Gameplay.prototype.callNegativeRection = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.negative_audio, false);
        this.scheduleOnce(function () {
            var anim = [];
            anim = [
                "negative_1",
                "negative_2",
                "negative_3",
                "negative_4",
                "negative_5",
                "negative_6",
                "negative_7",
            ];
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            _this.currentJockey.setPosition(1600, _this.currentJockey.y);
            var posX = 350;
            var posX_init = 1600;
            cc.tween(_this.currentJockey)
                .to(0.5, { x: posX }, { easing: "quartInOut" })
                .start();
            _this.scheduleOnce(function () {
                _this.currentJockey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negative_VO[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey)
                        .to(0.5, { x: posX_init }, { easing: "quartInOut" })
                        .start();
                    _this.currentJockey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                    _this.scheduleOnce(function () {
                        _this.canTouch = true;
                        TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
                    }, 0.5);
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
    // loadSpriteFrame(imageName: string, callback: (spriteFrame: cc.SpriteFrame) => void) {
    //     cc.loader.loadRes(imageName, cc.SpriteFrame, (err, spriteFrame) => {
    //         if (err) {
    //             cc.error("Failed to load sprite:", imageName, err);
    //             return;
    //         }
    //         callback(spriteFrame);
    //     });
    // }
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
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "questionAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFRhcFRvRmluZFxcU2NyaXB0c1xcR2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdTlCQztRQXI5QlMsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBRWhDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFDdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixtQkFBYSxHQUFXLFNBQVMsQ0FBQztRQUMxQyxtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQ2xDLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRXBDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUF3VnJCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBdW1CNUIsQ0FBQztJQTc3QkMseUJBQU0sR0FBTixjQUFVLENBQUM7SUFFWCwrQkFBWSxHQUFaO1FBQUEsaUJBbU5DO1FBbE5DLElBQUksR0FBRyxHQUNMLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxt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LENBQUM7Z0RBQ2lCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDYTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBWnhCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1OUI1QjtJQUFELGVBQUM7Q0F2OUJELEFBdTlCQyxDQXY5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdTlCakQ7a0JBdjlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NCYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3N0aXZlX1ZPOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBuZWdhdGl2ZV9WTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHBvcF9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHBvc2l0aXZlX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgbmVnYXRpdmVfYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHF1ZXN0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgcHJpdmF0ZSBjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB3cm9uZ0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIHByaXZhdGUgcmVpdGVyYXRpb25BdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBwcml2YXRlIG9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgb3B0aW9uc0xheW91dDogc3RyaW5nID0gXCJsYXlvdXQzXCI7XHJcbiAgY29ycmVjdEFuc3dlcjogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29ycmVjdENvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBudW1iZXJvZk9wdGlvbnM6IG51bWJlciA9IDU7XHJcblxyXG4gIGN1cnJlbnRKb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1heExldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICBvbkxvYWQoKSB7fVxyXG5cclxuICBMb2FkUXVlc3Rpb24oKSB7XHJcbiAgICBsZXQgc3RyID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAuY29ycmVjdEFuc3dlck51bTtcclxuICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IHN0ci5zcGxpdChcIlwiKS5tYXAoKGNoYXIpID0+IHBhcnNlSW50KGNoYXIpKTtcclxuICAgIHRoaXMub3B0aW9uc0xheW91dCA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgXS5xdWVzdGlvbkxheW91dDtcclxuICAgIHRoaXMubnVtYmVyb2ZPcHRpb25zID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICBdLm51bWJlck9mT3B0aW9ucztcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLm9wdGlvbnNMYXlvdXQpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnMoXHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLm9wdGlvbnNMYXlvdXQgKyBcIl90ZW1wbGF0ZVwiKSxcclxuICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICB0aGlzLm51bWJlcm9mT3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkJnTmFtZSxcclxuICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb05hbWUsXHJcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC53cm9uZ0F1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy53cm9uZ0F1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5yZWl0ZXJhdGlvbkF1ZGlvTmFtZS5sZW5ndGg7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgICAgLnJlaXRlcmF0aW9uQXVkaW9OYW1lW2ldLFxyXG4gICAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgICAuaXNPcHRpb25UZXh0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgICAgICAub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgICAgLm9wdGlvbnNCZ1tpXSxcclxuICAgICAgICAgIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWcyXCIpXHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkJnTmFtZSxcclxuICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLndyb25nQXVkaW9OYW1lLFxyXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIHRoaXMud3JvbmdBdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGkgPFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucmVpdGVyYXRpb25BdWRpb05hbWUubGVuZ3RoO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgICAucmVpdGVyYXRpb25BdWRpb05hbWVbaV0sXHJcbiAgICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25BdWRpb1tpXSA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBpIDxcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLm51bWJlck9mT3B0aW9ucztcclxuICAgICAgICBpKytcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAgIC5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgICAgIC5vcHRpb25zW2ldLFxyXG4gICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgICAub3B0aW9uc0JnW2ldLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nMlwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpvY2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkuZ2V0Q2hpbGRCeU5hbWUoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lXHJcbiAgICApO1xyXG4gICAgdGhpcy5jdXJyZW50Sm9ja2V5LmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuTG9hZFF1ZXN0aW9uKCk7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEpO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zTGF5b3V0ID09IFwibGF5b3V0MVwiKSB7XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZWxlbWVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSAtIDg1MCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcF9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihlbGVtZW50KVxyXG4gICAgICAgICAgICAgIC50bygwLjY1LCB7IHk6IHBvcy55IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICBkZWxheSArPSAwLjM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXVkaW9bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKHRoaXMub3B0aW9uc0xheW91dCk7XHJcbiAgICAgICAgfSwgMS43KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5vbihcclxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0X2xheW91dDEsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBlbGVtZW50Lm9uKFwidHYtc2VsZWN0XCIsIHRoaXMub25Ub3VjaFN0YXJ0X2xheW91dDEsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uc0xheW91dCA9PSBcImxheW91dDJcIikge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2tldFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvcGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGVsYXkgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICBkZWxheSArPSAwLjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXVkaW9bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKHRoaXMub3B0aW9uc0xheW91dCk7XHJcbiAgICAgICAgfSwgMS43KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5vbihcclxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0X2xheW91dDIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBlbGVtZW50Lm9uKFwidHYtc2VsZWN0XCIsIHRoaXMub25Ub3VjaFN0YXJ0X2xheW91dDIsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uc0xheW91dCA9PSBcImxheW91dDNcIikge1xyXG4gICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcF9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgIGRlbGF5ICs9IDAuMjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25BdWRpb1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXModGhpcy5vcHRpb25zTGF5b3V0KTtcclxuICAgICAgICB9LCAxLjcpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50Lm9uKFxyXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcclxuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnRfbGF5b3V0MyxcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGVsZW1lbnQub24oXCJ0di1zZWxlY3RcIiwgdGhpcy5vblRvdWNoU3RhcnRfbGF5b3V0MywgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jb3JyZWN0QW5zd2VyWzBdLnRvU3RyaW5nKCkpLm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICBoYW5kLnNldFBhcmVudChcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmdldENoaWxkQnlOYW1lKHRoaXMuY29ycmVjdEFuc3dlclswXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oNTAsIC01MCk7XHJcbiAgICAgICAgICBoYW5kLmFuZ2xlID0gNDA7XHJcbiAgICAgICAgICBoYW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBQbGF5UVZvQnV0dG9uKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG4gICAgICB0aGlzLnF1ZXN0aW9uQXVkaW9bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgX2V2ZW50LnRhcmdldC5zY2FsZSA9IDE7XHJcbiAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKHRoaXMub3B0aW9uc0xheW91dCk7XHJcbiAgICB9LCB0aGlzLnF1ZXN0aW9uQXVkaW9bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uKTtcclxuICB9XHJcbiAgaXNWaXNpZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInB1cnBsZSBzb3VuZFwiKTtcclxuICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgbGV0IG9wdGlvbkJ1dHRvbnMgPSB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKGFjdGl2ZUNvbnRhaW5lck5hbWUpXHJcbiAgICAgIC5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IHtcclxuICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbm9kZS5hY3RpdmUgJiZcclxuICAgICAgICAgIG5vZGUub3BhY2l0eSA+IDAgJiZcclxuICAgICAgICAgICghYnRuIHx8IGJ0bi5pbnRlcmFjdGFibGUgIT09IGZhbHNlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgbGV0IG5vZGVzID0gWy4uLm9wdGlvbkJ1dHRvbnMsIGJhY2tCdG4sIHNvdW5kQnRuLCBtdXNpY0J0bl0uZmlsdGVyKFxyXG4gICAgICAobikgPT4gISFuXHJcbiAgICApO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSAmJiAhdGhpcy5pc1Zpc2llZCkge1xyXG4gICAgICB0aGlzLmlzVmlzaWVkID0gdHJ1ZTtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBUVkZvY3VzMigpIHtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmNhbGxFbmQoKTtcclxuICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuXS5maWx0ZXIoKG4pID0+ICEhbik7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZU9wdGlvbnMoXHJcbiAgICBfdGVtcGxhdGU6IGNjLk5vZGUsXHJcbiAgICBfb3B0aW9uUGFyZW50OiBjYy5Ob2RlLFxyXG4gICAgX29wdGlvbkNvdW50OiBudW1iZXJcclxuICApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX29wdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgbGV0IF9vcHRpb246IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShfdGVtcGxhdGUpO1xyXG4gICAgICBfb3B0aW9uLnBhcmVudCA9IF9vcHRpb25QYXJlbnQ7XHJcbiAgICAgIF9vcHRpb24uc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgIF9vcHRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgX29wdGlvbi5vcGFjaXR5ID0gMDtcclxuICAgICAgX29wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9uc0xheW91dCA9PSBcImxheW91dDNcIikge1xyXG4gICAgICB0aGlzLmFycmFuZ2VHcmlkQ2hpbGRyZW4odGhpcy5vcHRpb25zLCA3MCwgX29wdGlvbkNvdW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnNMYXlvdXQgPT0gXCJsYXlvdXQxXCIpIHtcclxuICAgICAgbGV0IF9sYXlwb3V0MXBvc1g6IG51bWJlcltdID0gWy00NjUsIC0xNjUsIDEzNSwgNDM1XTtcclxuICAgICAgbGV0IF9sYXlwb3V0MXBvc1k6IG51bWJlcltdID0gWy0xNTAsIDEwMCwgLTE1MCwgMTAwXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfb3B0aW9uUGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgX29wdGlvblBhcmVudC5jaGlsZHJlbltpXS5zZXRQb3NpdGlvbihcclxuICAgICAgICAgIF9sYXlwb3V0MXBvc1hbaV0sXHJcbiAgICAgICAgICBfbGF5cG91dDFwb3NZW2ldXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgICAgbGV0IF9sYXlwb3V0MXBvc1g6IG51bWJlcltdID0gWy00NjUsIC0xNjUsIDEzNSwgNDM1XTtcclxuICAgICAgICBsZXQgX2xheXBvdXQxcG9zWTogbnVtYmVyW10gPSBbLTEwMCwgLTEwMCwgLTEwMCwgLTEwMF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfb3B0aW9uUGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBfb3B0aW9uUGFyZW50LmNoaWxkcmVuW2ldLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgICBfbGF5cG91dDFwb3NYW2ldLFxyXG4gICAgICAgICAgICBfbGF5cG91dDFwb3NZW2ldXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9uc0xheW91dCA9PSBcImxheW91dDJcIikge1xyXG4gICAgICBsZXQgX2xheXBvdXQxcG9zWDogbnVtYmVyW10gPSBbLTM4MCwgMCwgNDUwLCAwXTtcclxuICAgICAgbGV0IF9sYXlwb3V0MXBvc1k6IG51bWJlcltdID0gWy0yMCwgLTMwLCAtMjAsIDBdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9vcHRpb25QYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBfb3B0aW9uUGFyZW50LmNoaWxkcmVuW2ldLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgX2xheXBvdXQxcG9zWFtpXSxcclxuICAgICAgICAgIF9sYXlwb3V0MXBvc1lbaV1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfdGVtcGxhdGUuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaFN0YXJ0X2xheW91dDEoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGNvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBhdWRpb051bTogbnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JyZWN0QW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChub2RlLm5hbWUgPT0gdGhpcy5jb3JyZWN0QW5zd2VyW2ldLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBhdWRpb051bSA9IGk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb3JyZWN0KSB7XHJcbiAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KGZhbHNlKTtcclxuICAgICAgdGhpcy5jb3JyZWN0Q291bnRlcisrO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgIC50bygwLjgsIHsgeTogMTIwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0Q291bnRlciA8IHRoaXMuY29ycmVjdEFuc3dlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGNsaXAgPVxyXG4gICAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25BdWRpb1thdWRpb051bV0gfHwgdGhpcy5yZWl0ZXJhdGlvbkF1ZGlvWzBdO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0cnVlKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgICAuYmV6aWVyVG8oMSwgY2MudjIoLTEwMCwgMzAwKSwgY2MudjIoMCwgMCksIGNjLnYyKDEwMCwgLTEyMDApKVxyXG4gICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9hZE5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICBjb25zdCBvcmlnaW5hbENvbG9yID0gbm9kZS5jb2xvci5jbG9uZSgpO1xyXG4gICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgIC5kZWxheSgwLjE1KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IG9yaWdpbmFsQ29sb3IgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBub2RlLmNvbG9yID0gb3JpZ2luYWxDb2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvblRvdWNoU3RhcnRfbGF5b3V0MihldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgaWYgKCF0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICBsZXQgY29ycmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGV0IGF1ZGlvTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcnJlY3RBbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG5vZGUubmFtZSA9PSB0aGlzLmNvcnJlY3RBbnN3ZXJbaV0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgIGNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIGF1ZGlvTnVtID0gaTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3JyZWN0KSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICBub2RlLmFuZ2xlID0gMDtcclxuICAgICAgdGhpcy5jb3JyZWN0Q291bnRlcisrO1xyXG4gICAgICBsZXQgX2Nsb25lOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XHJcbiAgICAgIF9jbG9uZS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICBfY2xvbmUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgIGxldCBfcGFyZW50Tm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJhc2tldFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFuc3dlcmVkXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMuY29ycmVjdENvdW50ZXIudG9TdHJpbmcoKSk7XHJcbiAgICAgIF9jbG9uZS5zZXRQYXJlbnRXaXRoU2FtZVBvcyhfcGFyZW50Tm9kZSk7XHJcbiAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIF9jbG9uZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgIF9jbG9uZS5hbmdsZSA9IDA7XHJcbiAgICAgIGxldCBwb3MgPSBfY2xvbmUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgY2MudHdlZW4oX2Nsb25lKVxyXG4gICAgICAgIC5iZXppZXJUbyhcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICBjYy52Mihwb3MueCAvIDIsIHBvcy55ICsgMjAwKSxcclxuICAgICAgICAgIGNjLnYyKHBvcy54IC8gNCwgcG9zLnkpLFxyXG4gICAgICAgICAgY2MudjIoMCwgMClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBfY2xvbmUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgIF9jbG9uZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBpZiAodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSkge1xyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bYXVkaW9OdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0pIHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RDb3VudGVyID09IHRoaXMuY29ycmVjdEFuc3dlci5sZW5ndGgpIHtcclxuICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLnRvKDEsIHsgeDogLTE1MDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICBsZXQgcG9zWCA9IG5vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSlcclxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSlcclxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogcG9zWCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogcG9zWCAtIDIwIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYICsgMjAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7fSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25Ub3VjaFN0YXJ0X2xheW91dDMoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGNvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBhdWRpb051bTogbnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JyZWN0QW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChub2RlLm5hbWUgPT0gdGhpcy5jb3JyZWN0QW5zd2VyW2ldLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBhdWRpb051bSA9IGk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb3JyZWN0KSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMuY29ycmVjdENvdW50ZXIrKztcclxuICAgICAgbGV0IF9jbG9uZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICBfY2xvbmUucGFyZW50ID0gbm9kZTtcclxuICAgICAgX2Nsb25lLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICBfY2xvbmUuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcclxuICAgICAgX2Nsb25lLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBfY2xvbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgY2MudHdlZW4oX2Nsb25lLmNoaWxkcmVuWzFdKVxyXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bYXVkaW9OdW1dKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbkF1ZGlvW2F1ZGlvTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlaXRlcmF0aW9uQXVkaW9bMF0sIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RDb3VudGVyID09IHRoaXMuY29ycmVjdEFuc3dlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5Mb2FkTmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICBsZXQgcG9zWCA9IG5vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSlcclxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSlcclxuICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIC0gMjAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggKyAyMCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogcG9zWCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgeDogcG9zWCAtIDIwIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYIH0pXHJcbiAgICAgICAgLnRvKDAuMSwgeyB4OiBwb3NYICsgMjAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IHg6IHBvc1ggfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7fSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIExvYWROZXh0UXVlc3Rpb24oKSB7XHJcbiAgICB0aGlzLnNldHVwVFZGb2N1czIoKTtcclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoNiwgdGhpcy5ub2RlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfSwgMS41KTtcclxuICB9XHJcblxyXG4gIGNhbGxOZXh0TGV2ZWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHMpIHtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxKb2NrZXkoKSB7XHJcbiAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc3NpdGl2ZVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlMlwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlM1wiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNFwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG4gICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgICBcInBvc2l0aXZlXzZcIixcclxuICAgICAgICBcInBvc2l0aXZlXzdcIixcclxuICAgICAgICBcInBvc2l0aXZlXzhcIixcclxuICAgICAgICBcInBvc2l0aXZlXzlcIixcclxuICAgICAgICBcInBvc2l0aXZlXzEwXCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcclxuICAgIH1cclxuICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xNjAwLCAxNjAwXTtcclxuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTM1MCwgMzUwXTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgcG9zID0gWzE5MDAsIDE5MDBdO1xyXG4gICAgICBqb2NrZXl0d2VlbiA9IFs4NzAsIDg3MF07XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24oXHJcbiAgICAgIHBvc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sXHJcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleS55XHJcbiAgICApO1xyXG4gICAgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zY2FsZVggPSAtMC42NTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zY2FsZVggPSAwLjY1O1xyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgMC41LFxyXG4gICAgICAgIHsgeDogam9ja2V5dHdlZW5bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW8sIGZhbHNlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc3RpdmVfVk9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpXHJcbiAgICAgICAgICAudG8oXHJcbiAgICAgICAgICAgIDAuNSxcclxuICAgICAgICAgICAgeyB4OiBwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgfSwgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSkuZHVyYXRpb24pO1xyXG4gICAgfSwgMC41KTtcclxuICB9XHJcblxyXG4gIGNhbGxOZWdhdGl2ZVJlY3Rpb24oKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVfYXVkaW8sIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV81XCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV82XCIsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV83XCIsXHJcbiAgICAgIF07XHJcbiAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKDE2MDAsIHRoaXMuY3VycmVudEpvY2tleS55KTtcclxuICAgICAgbGV0IHBvc1g6IG51bWJlciA9IDM1MDtcclxuICAgICAgbGV0IHBvc1hfaW5pdDogbnVtYmVyID0gMTYwMDtcclxuICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KVxyXG4gICAgICAgIC50bygwLjUsIHsgeDogcG9zWCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVfVk9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IHBvc1hfaW5pdCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0sIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0pLmR1cmF0aW9uKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH0sIDAuNyk7XHJcbiAgfVxyXG5cclxuICBhcnJhbmdlQ2hpbGRyZW4oY2VudGVyTm9kZTogY2MuTm9kZSwgc3BhY2luZzogbnVtYmVyKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBjZW50ZXJOb2RlLmNoaWxkcmVuO1xyXG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCB3aWR0aCByZXF1aXJlZFxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgdG90YWxXaWR0aCArPSBjaGlsZC53aWR0aDtcclxuICAgIH1cclxuICAgIHRvdGFsV2lkdGggKz0gc3BhY2luZyAqIChjaGlsZHJlbi5sZW5ndGggLSAxKTsgLy8gQWRkIHNwYWNlcyBiZXR3ZWVuIGNoaWxkcmVuXHJcblxyXG4gICAgLy8gU3RhcnRpbmcgWCBwb3NpdGlvblxyXG4gICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAvLyBBcnJhbmdlIGNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBjaGlsZC54ID0gc3RhcnRYICsgY2hpbGQud2lkdGggLyAyO1xyXG4gICAgICBzdGFydFggKz0gY2hpbGQud2lkdGggKyBzcGFjaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXJyYW5nZUdyaWRDaGlsZHJlbihcclxuICAgIGNlbnRlck5vZGU6IGNjLk5vZGUsXHJcbiAgICBzcGFjaW5nOiBudW1iZXIsXHJcbiAgICBfb3B0aW9uQ291bnQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gY2VudGVyTm9kZS5jaGlsZHJlbjtcclxuICAgIGxldCBtYXhDb2x1bW5zID0gMztcclxuICAgIGlmIChfb3B0aW9uQ291bnQgPT0gNCkge1xyXG4gICAgICBtYXhDb2x1bW5zID0gMjtcclxuICAgIH1cclxuICAgIGxldCB0b3RhbFJvd3MgPSBNYXRoLmNlaWwoY2hpbGRyZW4ubGVuZ3RoIC8gbWF4Q29sdW1ucyk7XHJcblxyXG4gICAgbGV0IHJvd0hlaWdodCA9IDA7XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICByb3dIZWlnaHQgPSBjaGlsZHJlblswXS5oZWlnaHQgKyBzcGFjaW5nOyAvLyBBc3N1bWluZyBhbGwgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RhcnRZID0gKCh0b3RhbFJvd3MgLSAxKSAqIHJvd0hlaWdodCkgLyAyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvbHVtbiA9IGkgJSBtYXhDb2x1bW5zO1xyXG4gICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbWF4Q29sdW1ucyk7XHJcblxyXG4gICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggb2YgdGhlIGN1cnJlbnQgcm93XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGogPCBtYXhDb2x1bW5zICYmIHJvdyAqIG1heENvbHVtbnMgKyBqIDwgY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGorK1xyXG4gICAgICApIHtcclxuICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkcmVuW3JvdyAqIG1heENvbHVtbnMgKyBqXS53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICB0b3RhbFdpZHRoICs9XHJcbiAgICAgICAgc3BhY2luZyAqXHJcbiAgICAgICAgKE1hdGgubWluKGNoaWxkcmVuLmxlbmd0aCAtIHJvdyAqIG1heENvbHVtbnMsIG1heENvbHVtbnMpIC0gMSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyO1xyXG5cclxuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjb2x1bW4gKiAoY2hpbGQud2lkdGggKyBzcGFjaW5nKSArIGNoaWxkLndpZHRoIC8gMjtcclxuICAgICAgY2hpbGQueSA9IHN0YXJ0WSAtIHJvdyAqIHJvd0hlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICByZXR1cm4gX251bWJlcjtcclxuICB9XHJcblxyXG4gIGxvYWRTcHJpdGVGcmFtZShcclxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgLy8gICAgIGNjLmxvYWRlci5sb2FkUmVzKGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgLy8gICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzcHJpdGU6XCIsIGltYWdlTmFtZSwgZXJyKTtcclxuICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
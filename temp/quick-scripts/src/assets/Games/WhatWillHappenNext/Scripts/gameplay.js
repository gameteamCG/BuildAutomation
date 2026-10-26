"use strict";
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
        _this.extraImg = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
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
    NewClass.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    NewClass.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    NewClass.prototype.onLoad = function () {
        var _this = this;
        var _a, _b, _c, _d;
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        var bgNode = this.node.getChildByName("bg");
        if (bgNode && bgNode.getComponent(cc.Sprite)) {
            bgNode.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        }
        var currentQuestion = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1];
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(currentQuestion.questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            cc.loader.load(currentQuestion.correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio = audioClip;
            });
            if (currentQuestion.commonOptionImageName != "") {
                cc.loader.load(currentQuestion.commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    var qBox = _this.node.getChildByName("QuestionBox");
                    if (qBox && qBox.getComponent(cc.Sprite)) {
                        qBox.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    var optionParent = _this.node.getChildByName("Option");
                    for (var i = 0; i < currentQuestion.numberOfOptions; i++) {
                        var optChild = optionParent === null || optionParent === void 0 ? void 0 : optionParent.getChildByName((i + 1).toString());
                        if (optChild && optChild.getComponent(cc.Sprite)) {
                            optChild.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }
            cc.loader.load(currentQuestion.questionImageName, function (err, texture) {
                var _a;
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                var thirdObj = (_a = _this.node.getChildByName("QuestionBox")) === null || _a === void 0 ? void 0 : _a.getChildByName("ThirdObject");
                if (thirdObj && thirdObj.getComponent(cc.Sprite)) {
                    thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
            });
            var _loop_1 = function (i) {
                if (!currentQuestion.isOptionText) {
                    cc.loader.load(currentQuestion.options[i], function (err, texture) {
                        var _a, _b;
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        var imgNode = (_b = (_a = _this.node.getChildByName("Option")) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString())) === null || _b === void 0 ? void 0 : _b.getChildByName("img");
                        if (imgNode && imgNode.getComponent(cc.Sprite)) {
                            imgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    var textNode = (_b = (_a = this_1.node.getChildByName("Option")) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString())) === null || _b === void 0 ? void 0 : _b.getChildByName("text");
                    if (textNode && textNode.getComponent(cc.Label)) {
                        textNode.getComponent(cc.Label).string = currentQuestion.options[i];
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < currentQuestion.numberOfOptions; i++) {
                _loop_1(i);
            }
        }
        else {
            this.loadAudioClip(currentQuestion.questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            this.loadAudioClip(currentQuestion.correctAudioName, function (AudioClip) {
                _this.correctAudio = AudioClip;
            });
            if (currentQuestion.commonOptionImageName != "") {
                this.loadSpriteFrame(currentQuestion.commonOptionImageName, function (spriteFrame) {
                    var qBox = _this.node.getChildByName("QuestionBox");
                    if (qBox && qBox.getComponent(cc.Sprite)) {
                        qBox.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    var optionParent = _this.node.getChildByName("Option");
                    for (var i = 0; i < currentQuestion.numberOfOptions; i++) {
                        var optChild = optionParent === null || optionParent === void 0 ? void 0 : optionParent.getChildByName((i + 1).toString());
                        if (optChild && optChild.getComponent(cc.Sprite)) {
                            optChild.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }
            this.loadSpriteFrame(currentQuestion.questionImageName, function (spriteFrame) {
                var _a;
                var thirdObj = (_a = _this.node.getChildByName("QuestionBox")) === null || _a === void 0 ? void 0 : _a.getChildByName("ThirdObject");
                if (thirdObj && thirdObj.getComponent(cc.Sprite)) {
                    thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
            });
            var _loop_2 = function (i) {
                if (!currentQuestion.isOptionText) {
                    this_2.loadSpriteFrame(currentQuestion.options[i], function (spriteFrame) {
                        var _a, _b;
                        var imgNode = (_b = (_a = _this.node.getChildByName("Option")) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString())) === null || _b === void 0 ? void 0 : _b.getChildByName("img");
                        if (imgNode && imgNode.getComponent(cc.Sprite)) {
                            imgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    var textNode = (_d = (_c = this_2.node.getChildByName("Option")) === null || _c === void 0 ? void 0 : _c.getChildByName((i + 1).toString())) === null || _d === void 0 ? void 0 : _d.getChildByName("text");
                    if (textNode && textNode.getComponent(cc.Label)) {
                        textNode.getComponent(cc.Label).string = currentQuestion.options[i];
                    }
                }
            };
            var this_2 = this;
            for (var i = 0; i < currentQuestion.numberOfOptions; i++) {
                _loop_2(i);
            }
        }
        if (StartGame_1.default.Instance.jockey) {
            this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        }
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        var progressNode = StartGame_1.default.Instance.node.getChildByName("progress");
        if (progressNode)
            progressNode.opacity = 255;
        this.answerArray = [StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum];
        this.callThirdObjectIn();
        var jName = StartGame_1.default.Instance.jockeyName;
        if (jName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (jName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (jName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (jName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (jName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        return Math.round(_number);
    };
    NewClass.prototype.GenerateOptions = function () {
        var templateNode = this.node.getChildByName("template");
        var optionContainer = this.node.getChildByName("Option");
        if (!templateNode || !optionContainer)
            return;
        var count = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions;
        for (var i = 0; i < count; i++) {
            var option = cc.instantiate(templateNode);
            option.name = (i + 1).toString();
            option.setParent(optionContainer);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        templateNode.destroy();
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        var _a;
        var questionPanel = this.node.getChildByName("questionPanel");
        if (!questionPanel)
            return;
        this.questionBoxPosY = questionPanel.y;
        questionPanel.setPosition(cc.v2(0, 1500));
        cc.tween(questionPanel).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        var qTextLabel = (_a = questionPanel.getChildByName("text")) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Label);
        if (qTextLabel) {
            qTextLabel.string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        }
        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();
        var posX = -237;
        if (StartGame_1.default.Instance.jockeyName == "tlc" || StartGame_1.default.Instance.jockeyName == "supercub") {
            posX = -300;
        }
        this.scheduleOnce(function () {
            var _a, _b, _c, _d;
            var questionBox = _this.node.getChildByName("QuestionBox");
            if (questionBox) {
                var textLabel = (_a = questionBox.getChildByName("text")) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Label);
                var thirdObjSprite = (_b = questionBox.getChildByName("ThirdObject")) === null || _b === void 0 ? void 0 : _b.getComponent(cc.Sprite);
                if (textLabel) {
                    var spriteName = (_c = thirdObjSprite === null || thirdObjSprite === void 0 ? void 0 : thirdObjSprite.spriteFrame) === null || _c === void 0 ? void 0 : _c.name;
                    var fallbackName = ((_d = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]) === null || _d === void 0 ? void 0 : _d.questionImageName) || "";
                    textLabel.string = spriteName || fallbackName;
                }
                _this.scheduleOnce(function () {
                    if (_this.popSound[0])
                        cc.audioEngine.playEffect(_this.popSound[0], false);
                    cc.tween(questionBox).to(1, { scale: 1 }, { easing: "sineInOut" }).start();
                }, 0.1);
                _this.scheduleOnce(function () {
                    cc.tween(questionBox).to(0.5, { x: posX }, { easing: "sineInOut" }).start();
                    _this.canTouch = true;
                    _this.callOptionIn();
                }, 1);
            }
        }, 1);
    };
    NewClass.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        var optNode = this.node.getChildByName("Option");
        if (!optNode)
            return;
        if (StartGame_1.default.Instance.jockeyName == "tlc" || StartGame_1.default.Instance.jockeyName == "supercub") {
            optNode.setPosition(150, -70);
        }
        var totalChildren = optNode.children.length;
        var _loop_3 = function (i) {
            var child = optNode.children[i - 1];
            if (!child)
                return "continue";
            child.scale = 0;
            child.opacity = 255;
            this_3.scheduleOnce(function () {
                if (_this.popSound[0])
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                var targetChild = optNode.getChildByName(i.toString());
                if (targetChild) {
                    cc.tween(targetChild).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                }
                if (i === totalChildren) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_3 = this;
        for (var i = 1; i <= totalChildren; i++) {
            _loop_3(i);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        var _a, _b;
        var optionNode = this.node.getChildByName("Option");
        if (!optionNode)
            return;
        optionNode.children.forEach(function (element) {
            var btn = element.getComponent(cc.Button);
            if (btn)
                btn.interactable = false;
        });
        if (this.currentJcokey) {
            this.currentJcokey.active = true;
        }
        var isSpecialJockey = StartGame_1.default.Instance.jockeyName == "tlc" || StartGame_1.default.Instance.jockeyName == "supercub";
        var currentQ = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1];
        if (!isSpecialJockey) {
            if (currentQ.shouldPlayQuestionAudio && this.questionSound[0]) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            optionNode.children.forEach(function (element) {
                var btn = element.getComponent(cc.Button);
                if (btn)
                    btn.interactable = true;
            });
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                this.setupTutorialHand();
            }
        }
        else {
            var intoAnim = "intro";
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            else {
                this.currentJcokey.setPosition(450, -370);
            }
            var skeleton_1 = (_a = this.currentJcokey) === null || _a === void 0 ? void 0 : _a.getComponent(sp.Skeleton);
            if (!skeleton_1)
                return;
            skeleton_1.setAnimation(0, intoAnim, false);
            var animDuration = ((_b = skeleton_1.findAnimation(intoAnim)) === null || _b === void 0 ? void 0 : _b.duration) || 0.5;
            this.scheduleOnce(function () {
                var _a;
                if (!currentQ.shouldPlayQuestionAudio) {
                    optionNode.children.forEach(function (element) {
                        var btn = element.getComponent(cc.Button);
                        if (btn)
                            btn.interactable = true;
                    });
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        _this.setupTutorialHand();
                    }
                }
                else {
                    if (_this.questionSound[0]) {
                        cc.audioEngine.playEffect(_this.questionSound[0], false);
                    }
                    skeleton_1.setAnimation(0, "intro_loop", true);
                    var qSoundDuration = ((_a = _this.questionSound[0]) === null || _a === void 0 ? void 0 : _a.duration) || 1;
                    _this.scheduleOnce(function () {
                        var _a;
                        skeleton_1.setAnimation(0, "intro_end", false);
                        var endDuration = ((_a = skeleton_1.findAnimation("intro_end")) === null || _a === void 0 ? void 0 : _a.duration) || 0.5;
                        _this.scheduleOnce(function () {
                            skeleton_1.setAnimation(0, "idle", true);
                            optionNode.children.forEach(function (element) {
                                var btn = element.getComponent(cc.Button);
                                if (btn)
                                    btn.interactable = true;
                            });
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                _this.setupTutorialHand();
                            }
                        }, endDuration);
                    }, qSoundDuration);
                }
            }, animDuration);
        }
    };
    NewClass.prototype.setupTutorialHand = function () {
        var _a;
        var hand = this.node.getChildByName("hand");
        var targetOption = (_a = this.node.getChildByName("Option")) === null || _a === void 0 ? void 0 : _a.getChildByName(this.answerArray[0]);
        if (hand && targetOption) {
            hand.setParent(targetOption);
            hand.setPosition(50, -50);
            hand.angle = 30;
            hand.setParentWithSamePos(this.node);
            var anim = hand.getComponent(cc.Animation);
            if (anim)
                anim.play();
        }
    };
    NewClass.prototype.OnButtonClick = function (_event) {
        var _this = this;
        var _a;
        var optionNode = this.node.getChildByName("Option");
        if (optionNode) {
            optionNode.children.forEach(function (elem) {
                var btn = elem.getComponent(cc.Button);
                if (btn)
                    btn.interactable = false;
            });
        }
        if (!this.canTouch)
            return;
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            var hand = this.node.getChildByName("hand");
            if (hand)
                hand.active = false;
        }
        var _node = _event.target;
        if (!_node)
            return;
        if (_node.name == this.answerArray[0]) {
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            var qPanel = this.node.getChildByName("questionPanel");
            if (qPanel) {
                cc.tween(qPanel).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                var soundBtn = (_a = qPanel.getChildByName("sound")) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Button);
                if (soundBtn)
                    soundBtn.interactable = false;
            }
            this.destroyOption();
            if (this.popSound[0])
                cc.audioEngine.playEffect(this.popSound[0], false);
            this.scheduleOnce(function () {
                _this.callPositiveRection(_node);
            }, 0);
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
        if (!this.star3Log && globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    };
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        if (!_node || !_node.isValid)
            return;
        if (this.correctAudio) {
            cc.audioEngine.playEffect(this.correctAudio, false);
        }
        cc.tween(_node).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        if (_node.children[0]) {
            cc.tween(_node.children[0]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
            cc.tween(_node.children[0]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(function () {
            var confetti = _this.node.getChildByName("confetti");
            if (confetti) {
                confetti.setPosition(_node.x, _node.y);
                var anim = confetti.getComponent(cc.Animation);
                if (anim)
                    anim.play();
            }
            if (_this.positiveSound[0]) {
                cc.audioEngine.playEffect(_this.positiveSound[0], false);
            }
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
        var _a, _b;
        if (!this.currentJcokey || !this.currentJcokey.isValid)
            return;
        var anim = [];
        var jName = StartGame_1.default.Instance.jockeyName;
        if (jName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (jName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (jName == "supercub" || jName == "bag" || jName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (jName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (jName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (jName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        if (anim.length === 0) {
            this.callNextLevel();
            return;
        }
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        var skeleton = this.currentJcokey.getComponent(sp.Skeleton);
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && jName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (jName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
        }
        else if (jName != "tlc" && jName != "supercub") {
            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
        }
        var audioDuration = ((_a = this.positiveAudio[currentClipNum]) === null || _a === void 0 ? void 0 : _a.duration) || 1;
        if (jName != "tlc" && jName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
            this.scheduleOnce(function () {
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
                if (_this.positiveAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                }
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                    if (jName != "stallion") {
                        skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
                    }
                    _this.callNextLevel();
                }, audioDuration);
            }, 0.5);
        }
        else if (jName == "tlc") {
            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
            if (this.positiveAudio[currentClipNum]) {
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            }
            this.scheduleOnce(function () {
                var _a;
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "intro_out", false);
                var outDuration = ((_a = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findAnimation("intro_out")) === null || _a === void 0 ? void 0 : _a.duration) || 0.5;
                _this.scheduleOnce(function () {
                    _this.currentJcokey.active = false;
                    _this.callNextLevel();
                }, outDuration);
            }, audioDuration);
        }
        else if (jName == "supercub") {
            var isSpecialAnim = anim[currentClipNum] == "positive_1" || anim[currentClipNum] == "positive_2";
            if (isSpecialAnim) {
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_start", false);
                var startDuration = ((_b = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findAnimation(anim[currentClipNum] + "_start")) === null || _b === void 0 ? void 0 : _b.duration) || 0.5;
                this.scheduleOnce(function () {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_loop", true);
                    if (_this.positiveAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                    }
                    _this.scheduleOnce(function () {
                        var _a;
                        skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_end", false);
                        var endDuration = ((_a = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findAnimation(anim[currentClipNum] + "_end")) === null || _a === void 0 ? void 0 : _a.duration) || 0.5;
                        _this.scheduleOnce(function () {
                            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "run", false);
                            cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                            _this.callNextLevel();
                        }, endDuration);
                    }, audioDuration);
                }, startDuration);
            }
            else {
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
                if (this.positiveAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                }
                this.scheduleOnce(function () {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "run", false);
                    cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                    _this.callNextLevel();
                }, audioDuration);
            }
        }
    };
    NewClass.prototype.callNegativeRection = function (_node, _event) {
        var _this = this;
        var _a;
        if (!_node || !_node.isValid)
            return;
        var spriteComp = (_a = _node.children[0]) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Sprite);
        if (spriteComp && this.greyMat) {
            spriteComp.setMaterial(0, this.greyMat);
        }
        if (this.negativeSound[0]) {
            cc.audioEngine.playEffect(this.negativeSound[0], false);
        }
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        this.scheduleOnce(function () {
            var _a, _b, _c;
            var anim = [];
            var jName = StartGame_1.default.Instance.jockeyName;
            if (jName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (jName == "tlc" || jName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (jName == "supercub" || jName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (jName == "Singham") {
                anim = ["no"];
            }
            else if (jName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (jName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }
            if (anim.length === 0)
                return;
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            var skeleton = (_a = _this.currentJcokey) === null || _a === void 0 ? void 0 : _a.getComponent(sp.Skeleton);
            if (jName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
            }
            else if (jName != "tlc" && jName != "supercub") {
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
            }
            var audioDuration = ((_b = _this.negativeAudio[currentClipNum]) === null || _b === void 0 ? void 0 : _b.duration) || 1;
            if (jName != "tlc" && jName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
                _this.scheduleOnce(function () {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
                    if (_this.negativeAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    }
                    _this.scheduleOnce(function () {
                        cc.tween(_this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                        if (jName != "stallion") {
                            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, jName == "Podar" ? "idel" : "idle", true);
                        }
                        _this.enableOptionButtons();
                    }, audioDuration);
                }, 0.5);
            }
            else if (jName == "tlc") {
                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
                if (_this.negativeAudio[currentClipNum]) {
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                }
                _this.scheduleOnce(function () {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "idle", true);
                    _this.enableOptionButtons();
                }, audioDuration);
            }
            else if (jName == "supercub") {
                var isSpecialAnim = anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2";
                if (isSpecialAnim) {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_start", false);
                    var startDuration = ((_c = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findAnimation(anim[currentClipNum] + "_start")) === null || _c === void 0 ? void 0 : _c.duration) || 0.5;
                    _this.scheduleOnce(function () {
                        skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_loop", true);
                        if (_this.negativeAudio[currentClipNum]) {
                            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                        }
                        _this.scheduleOnce(function () {
                            var _a;
                            skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.enableOptionButtons();
                            var endDuration = ((_a = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findAnimation(anim[currentClipNum] + "_end")) === null || _a === void 0 ? void 0 : _a.duration) || 0.5;
                            _this.scheduleOnce(function () {
                                skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "idle", true);
                            }, endDuration);
                        }, audioDuration);
                    }, startDuration);
                }
                else {
                    skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, anim[currentClipNum], false);
                    if (_this.negativeAudio[currentClipNum]) {
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    }
                    _this.scheduleOnce(function () {
                        skeleton === null || skeleton === void 0 ? void 0 : skeleton.setAnimation(0, "idle", true);
                        _this.enableOptionButtons();
                    }, audioDuration);
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
            var _a;
            if (_node.children[0] && _this.defaultMat) {
                (_a = _node.children[0].getComponent(cc.Sprite)) === null || _a === void 0 ? void 0 : _a.setMaterial(0, _this.defaultMat);
            }
        })
            .start();
    };
    NewClass.prototype.enableOptionButtons = function () {
        var optionNode = this.node.getChildByName("Option");
        if (optionNode) {
            optionNode.children.forEach(function (elem) {
                var btn = elem.getComponent(cc.Button);
                if (btn)
                    btn.interactable = true;
            });
        }
    };
    NewClass.prototype.destroyOption = function () {
        var optionNode = this.node.getChildByName("Option");
        if (!optionNode)
            return;
        for (var i = optionNode.children.length - 1; i >= 0; i--) {
            var child = optionNode.children[i];
            if (child && child.name !== this.answerArray[0]) {
                child.destroy();
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
        if (!optionsLayout)
            return;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        var maxWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            totalHeight += option.height + paddingBetweenOptions;
            if (option.width > maxWidth) {
                maxWidth = option.width;
            }
        }
        var availableHeight = optionsLayout.height;
        var totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableHeight / (totalHeightWithPadding || 1));
        var accumulatedHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionScaleFactor = scaleFactor;
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            var posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;
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
        if (!optionsLayout)
            return;
        var optionNodes = optionsLayout.children;
        var newPositions = [];
        for (var i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }
        for (var i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "extraImg", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "tlc_font", void 0);
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
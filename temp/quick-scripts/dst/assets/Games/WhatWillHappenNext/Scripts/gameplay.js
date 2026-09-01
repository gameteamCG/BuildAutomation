
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var currentLevelIdx = globalVariables_1.default.Instance.currentLevel - 1;
        var questionData = ((_a = StartGame_1.default.Instance) === null || _a === void 0 ? void 0 : _a.questions) ? StartGame_1.default.Instance.questions[currentLevelIdx] : null;
        if (!questionData) {
            cc.error("Question data missing for level: " + globalVariables_1.default.Instance.currentLevel);
            return;
        }
        // Font Handling
        var templateText = (_c = (_b = this.node.getChildByName("template")) === null || _b === void 0 ? void 0 : _b.getChildByName("text")) === null || _c === void 0 ? void 0 : _c.getComponent(cc.Label);
        var questionPanelText = (_e = (_d = this.node.getChildByName("questionPanel")) === null || _d === void 0 ? void 0 : _d.getChildByName("text")) === null || _e === void 0 ? void 0 : _e.getComponent(cc.Label);
        if (templateText && questionPanelText) {
            if (StartGame_1.default.Instance.jockeyName == "Podar" && this.podar_font) {
                templateText.font = this.podar_font;
                questionPanelText.font = this.podar_font;
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc" && this.tlc_font) {
                templateText.font = this.tlc_font;
                questionPanelText.font = this.tlc_font;
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub" && this.supercub_font) {
                templateText.font = this.supercub_font;
                questionPanelText.font = this.supercub_font;
            }
            else if ((StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") && this.jaipuria_font) {
                templateText.font = this.jaipuria_font;
                questionPanelText.font = this.jaipuria_font;
            }
        }
        this.TotalOptions = questionData.numberOfOptions || 0;
        this.optionsNode = this.node.getChildByName("Option");
        var qBox = this.node.getChildByName("QuestionBox");
        if (qBox)
            qBox.zIndex = 1;
        if (questionData.isOptionBG) {
            this.isOptionBG = true;
        }
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels || 7;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        var bgNode = this.node.getChildByName("bg");
        if (bgNode && StartGame_1.default.Instance.mainBg) {
            bgNode.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        }
        if (questionData.correctAnswerNum) {
            for (var i = 0; i < questionData.correctAnswerNum.length; i++) {
                this.answerArray[i] = questionData.correctAnswerNum[i];
            }
        }
        // Assets Loading
        if (StartGame_1.default.Instance.isDemoGame) {
            if (questionData.questionAudioName) {
                cc.loader.load(questionData.questionAudioName, function (err, audioClip) {
                    if (!err)
                        _this.questionSound[0] = audioClip;
                });
            }
            if (StartGame_1.default.Instance.templateType != "SimpleTap" && questionData.questionImageName) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (!err && qBox) {
                        var thirdObj = qBox.getChildByName("ThirdObject");
                        if (thirdObj)
                            thirdObj.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                    }
                });
            }
            if (questionData.commonOptionImageName && questionData.commonOptionImageName != "") {
                cc.loader.load(questionData.commonOptionImageName, function (err, texture) {
                    var _a;
                    if (!err) {
                        var spriteFrame = new cc.SpriteFrame(texture);
                        for (var i = 0; i < questionData.numberOfOptions; i++) {
                            var optChild = (_a = _this.optionsNode) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString());
                            if (optChild)
                                optChild.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    }
                });
            }
            var _loop_1 = function (i) {
                if (!questionData.isOptionText && questionData.options[i]) {
                    cc.loader.load(questionData.options[i], function (err, texture) {
                        var _a;
                        if (!err) {
                            var optChild = (_a = _this.optionsNode) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString());
                            if (optChild)
                                optChild.getChildByName("img").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                        }
                    });
                }
                else if (questionData.options[i]) {
                    var optChild = (_f = this_1.optionsNode) === null || _f === void 0 ? void 0 : _f.getChildByName((i + 1).toString());
                    if (optChild)
                        optChild.getChildByName("text").getComponent(cc.Label).string = questionData.options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i < questionData.numberOfOptions; i++) {
                _loop_1(i);
            }
            if (questionData.correctAudios) {
                var _loop_2 = function (i) {
                    cc.loader.load(questionData.correctAudios[i], function (err, audioClip) {
                        if (!err)
                            _this.correctAudio[i] = audioClip;
                    });
                };
                for (var i = 0; i < questionData.correctAudios.length; i++) {
                    _loop_2(i);
                }
            }
        }
        else {
            if (questionData.questionAudioName) {
                this.loadAudioClip(questionData.questionAudioName, function (AudioClip) {
                    _this.questionSound[0] = AudioClip;
                });
            }
            if (StartGame_1.default.Instance.templateType != "SimpleTap" && questionData.questionImageName) {
                this.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    if (qBox) {
                        var thirdObj = qBox.getChildByName("ThirdObject");
                        if (thirdObj)
                            thirdObj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (questionData.commonOptionImageName && questionData.commonOptionImageName != "") {
                this.loadSpriteFrame(questionData.commonOptionImageName, function (spriteFrame) {
                    var _a;
                    for (var i = 0; i < questionData.numberOfOptions; i++) {
                        var optChild = (_a = _this.optionsNode) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString());
                        if (optChild)
                            optChild.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            var _loop_3 = function (i) {
                if (!questionData.isOptionText && questionData.options[i]) {
                    this_2.loadSpriteFrame(questionData.options[i], function (spriteFrame) {
                        var _a;
                        var optChild = (_a = _this.optionsNode) === null || _a === void 0 ? void 0 : _a.getChildByName((i + 1).toString());
                        if (optChild)
                            optChild.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else if (questionData.options[i]) {
                    var optChild = (_g = this_2.optionsNode) === null || _g === void 0 ? void 0 : _g.getChildByName((i + 1).toString());
                    if (optChild)
                        optChild.getChildByName("text").getComponent(cc.Label).string = questionData.options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i < questionData.numberOfOptions; i++) {
                _loop_3(i);
            }
            if (questionData.correctAudios) {
                var _loop_4 = function (i) {
                    this_3.loadAudioClip(questionData.correctAudios[i], function (AudioClip) {
                        _this.correctAudio[i] = AudioClip;
                    });
                };
                var this_3 = this;
                for (var i = 0; i < questionData.correctAudios.length; i++) {
                    _loop_4(i);
                }
            }
        }
        // Jockey Initialization Fix
        if (StartGame_1.default.Instance.jockey && StartGame_1.default.Instance.jockeyName) {
            this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        }
        if (!this.currentJcokey && ((_h = StartGame_1.default.Instance.jockey) === null || _h === void 0 ? void 0 : _h.childrenCount) > 0) {
            this.currentJcokey = StartGame_1.default.Instance.jockey.children[0];
        }
    };
    NewClass.prototype.start = function () {
        var _a;
        if (ProgressBar_1.default.Instance) {
            ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        }
        var progressNode = (_a = StartGame_1.default.Instance.node) === null || _a === void 0 ? void 0 : _a.getChildByName("progress");
        if (progressNode)
            progressNode.opacity = 255;
        var currentQuestion = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1];
        this.totalAnswers = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.correctAnswerNum) ? currentQuestion.correctAnswerNum.length : 0;
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
        // Setup Audio mapping for Jockeys
        if (StartGame_1.default.Instance.jockeyName == "bag") {
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
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    NewClass.prototype.GenerateOptions = function () {
        var template = this.node.getChildByName("template");
        var optionParent = this.node.getChildByName("Option");
        if (!template || !optionParent)
            return;
        for (var i = 0; i < this.TotalOptions; i++) {
            var option = cc.instantiate(template);
            option.name = (i + 1).toString();
            option.setParent(optionParent);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
            var bg = option.getChildByName("bg");
            if (bg)
                bg.active = this.isOptionBG;
            this.isDone[i] = false;
        }
        template.destroy();
    };
    NewClass.prototype.callQuestionBar = function () {
        var _a;
        var qPanel = this.node.getChildByName("questionPanel");
        if (!qPanel)
            return;
        this.questionBoxPosY = qPanel.y;
        qPanel.setPosition(cc.v2(0, 1500));
        cc.tween(qPanel).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        var lbl = (_a = qPanel.getChildByName("text")) === null || _a === void 0 ? void 0 : _a.getComponent(cc.Label);
        var qData = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1];
        if (lbl && qData)
            lbl.string = qData.questionText;
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
        }
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        var qBox = this.node.getChildByName("QuestionBox");
        var qBox1 = this.node.getChildByName("QuestionBox1");
        if (StartGame_1.default.Instance.templateType == "TapToCollect") {
            if (qBox)
                qBox.setPosition(cc.v2(-300, -200));
            if (qBox1)
                qBox1.setPosition(cc.v2(-300, -200));
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    if (_this.popSound[0])
                        cc.audioEngine.playEffect(_this.popSound[0], false);
                    if (qBox)
                        cc.tween(qBox).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                }, 0.1);
                _this.scheduleOnce(function () {
                    _this.callOptionIn();
                }, 0.5);
            }, 1);
        }
        else if (StartGame_1.default.Instance.templateType == "ObjectsTweenIn" && qBox) {
            if (this.optionsNode)
                this.optionsNode.y += 100;
            qBox.setPosition(cc.v2(1500, -250));
            qBox.scale = 1;
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.tween(qBox).to(0.5, { x: 0 }, { easing: "sineInOut" }).start();
                    _this.callOptionOutFromObject();
                }, 1);
            }, 1);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        var _a;
        this.canTouch = false;
        if (this.currentJcokey) {
            this.currentJcokey.active = true;
        }
        else {
            this.canTouch = true;
            return;
        }
        var qData = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1];
        if (StartGame_1.default.Instance.jockeyName != "tlc" && StartGame_1.default.Instance.jockeyName != "supercub") {
            if ((qData === null || qData === void 0 ? void 0 : qData.shouldPlayQuestionAudio) && this.questionSound[0]) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                this.showHandAnimation();
            }
        }
        else {
            var intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            if (StartGame_1.default.Instance.jockeyName == "tlc" && this.tlc_birdFlying) {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            var skeleton_1 = this.currentJcokey.getComponent(sp.Skeleton);
            if (skeleton_1) {
                skeleton_1.setAnimation(0, intoAnim, false);
                var introDuration = ((_a = skeleton_1.findAnimation(intoAnim)) === null || _a === void 0 ? void 0 : _a.duration) || 1;
                this.scheduleOnce(function () {
                    var _a;
                    if (!(qData === null || qData === void 0 ? void 0 : qData.shouldPlayQuestionAudio)) {
                        _this.canTouch = true;
                        if (globalVariables_1.default.Instance.currentLevel == 1) {
                            _this.showHandAnimation();
                        }
                    }
                    else {
                        if (_this.questionSound[0])
                            cc.audioEngine.playEffect(_this.questionSound[0], false);
                        skeleton_1.setAnimation(0, "intro_loop", true);
                        var qSoundDuration = ((_a = _this.questionSound[0]) === null || _a === void 0 ? void 0 : _a.duration) || 1;
                        _this.scheduleOnce(function () {
                            var _a;
                            skeleton_1.setAnimation(0, "intro_end", false);
                            var endDuration = ((_a = skeleton_1.findAnimation("intro_end")) === null || _a === void 0 ? void 0 : _a.duration) || 1;
                            _this.scheduleOnce(function () {
                                skeleton_1.setAnimation(0, "idle", true);
                                _this.canTouch = true;
                                if (globalVariables_1.default.Instance.currentLevel == 1) {
                                    _this.showHandAnimation();
                                }
                            }, endDuration);
                        }, qSoundDuration);
                    }
                }, introDuration);
            }
        }
    };
    NewClass.prototype.showHandAnimation = function () {
        var _a;
        var hand = this.node.getChildByName("hand");
        var targetOpt = (_a = this.node.getChildByName("Option")) === null || _a === void 0 ? void 0 : _a.getChildByName(this.answerArray[0]);
        if (hand && targetOpt) {
            hand.setParent(targetOpt);
            hand.setPosition(0, -70);
            hand.setParentWithSamePos(this.node);
            var anim = hand.getComponent(cc.Animation);
            if (anim)
                anim.play();
        }
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        var optContainer = this.node.getChildByName("Option");
        if (!optContainer)
            return;
        if (StartGame_1.default.Instance.jockeyName == "supercub" || StartGame_1.default.Instance.jockeyName == "tlc") {
            optContainer.setPosition(optContainer.x - 80, optContainer.y);
        }
        var _loop_5 = function (i) {
            var child = optContainer.children[i - 1];
            child.scale = 0;
            child.opacity = 255;
            this_4.scheduleOnce(function () {
                if (_this.popSound[0])
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                var objScale = StartGame_1.default.Instance.templateType == "SimpleTap" ? 1 : (StartGame_1.default.Instance.templateType == "TapToCollect" ? 0.5 : 0.7);
                if (!_this.isOptionBG) {
                    optContainer.children.forEach(function (element) {
                        var img = element.getChildByName("img");
                        if (img)
                            img.scale = 1.4;
                    });
                }
                cc.tween(child).to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();
                if (i == optContainer.children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_4 = this;
        for (var i = 1; i <= optContainer.children.length; i++) {
            _loop_5(i);
        }
    };
    NewClass.prototype.callOptionOutFromObject = function () {
        var _this = this;
        var delay = 0.5;
        var optContainer = this.node.getChildByName("Option");
        var qBox = this.node.getChildByName("QuestionBox");
        if (!optContainer || !qBox)
            return;
        var _loop_6 = function (i) {
            var child = optContainer.children[i - 1];
            child.scale = 0;
            child.opacity = 255;
            child.setPosition(0 - 100, qBox.getPosition().y - 100);
            this_5.scheduleOnce(function () {
                if (_this.popSound[0])
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                var objScale = 0.7;
                if (!_this.isOptionBG) {
                    optContainer.children.forEach(function (element) {
                        var img = element.getChildByName("img");
                        if (img)
                            img.scale = 1.4;
                    });
                }
                cc.tween(child).to(0.5, { scale: objScale }, { easing: "sineInOut" }).start();
                var pos = child.getPosition();
                if (_this.positionArray[i - 1]) {
                    cc.tween(child).bezierTo(1, cc.v2(pos.x, pos.y + 200), cc.v2(_this.positionArray[i - 1].x / 1.5, pos.y + 400), cc.v2(_this.positionArray[i - 1].x, _this.positionArray[i - 1].y)).start();
                }
                if (i == optContainer.children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_5 = this;
        for (var i = 1; i <= optContainer.children.length; i++) {
            _loop_6(i);
        }
    };
    NewClass.prototype.OnButtonClick = function (_event) {
        if (!this.canTouch || !(_event === null || _event === void 0 ? void 0 : _event.target))
            return;
        var index = parseInt(_event.target.name) - 1;
        if (this.isDone[index])
            return;
        if (!this.isFirstClick) {
            this.isFirstClick = true;
        }
        var hand = this.node.getChildByName("hand");
        if (hand && globalVariables_1.default.Instance.currentLevel == 1) {
            hand.active = false;
        }
        var _node = _event.target;
        var iscorrect = false;
        for (var i = 0; i < this.answerArray.length; i++) {
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[index] = true;
                break;
            }
        }
        if (iscorrect) {
            this.canTouch = false;
            cc.audioEngine.stopAllEffects();
            if (this.popSound[0])
                cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
        }
        else {
            this.wrongAnswerCount++;
            this.callNegativeRection(_node, _event);
        }
    };
    // --- POSITIVE REACTION / JOCKEY VISIBLE FIX ---
    NewClass.prototype.callJockey = function () {
        var _this = this;
        if (!this.currentJcokey) {
            this.callNextLevel();
            return;
        }
        this.currentJcokey.active = true;
        var animList = [];
        var jName = StartGame_1.default.Instance.jockeyName;
        if (jName == "Podar")
            animList = ["possitive", "possitive2", "possitive3"];
        else if (jName == "tlc")
            animList = ["positive_1", "positive_2", "positive_3"];
        else if (jName == "supercub")
            animList = ["positive_1", "positive_2"];
        else if (jName == "bag")
            animList = ["positive_1", "positive_2"];
        else if (jName == "cryon")
            animList = ["positive_1", "positive_2"];
        else if (jName == "stallion")
            animList = ["positive_1", "positive_2"];
        else
            animList = ["positive_1", "positive_2"];
        var clipNum = this.getRandomNumber(0, animList.length - 1);
        var skeleton = this.currentJcokey.getComponent(sp.Skeleton);
        // Slide In Jockey Animation
        var startX = (globalVariables_1.default.Instance.currentLevel % 2 == 0) ? 1200 : -1200;
        var targetX = (globalVariables_1.default.Instance.currentLevel % 2 == 0) ? 450 : -450;
        this.currentJcokey.setPosition(startX, -350);
        cc.tween(this.currentJcokey)
            .to(0.5, { x: targetX }, { easing: "quartInOut" })
            .call(function () {
            if (skeleton)
                skeleton.setAnimation(0, animList[clipNum], false);
            if (_this.positiveAudio && _this.positiveAudio[clipNum]) {
                cc.audioEngine.playEffect(_this.positiveAudio[clipNum], false);
            }
            var audioDuration = (_this.positiveAudio && _this.positiveAudio[clipNum]) ? _this.positiveAudio[clipNum].duration : 1.5;
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: startX }, { easing: "quartInOut" })
                    .call(function () {
                    _this.callNextLevel();
                }).start();
            }, audioDuration);
        }).start();
    };
    // --- NEGATIVE REACTION / JOCKEY VISIBLE FIX ---
    NewClass.prototype.callNegativeRection = function (_node, _event) {
        var _this = this;
        this.canTouch = false;
        if (this.negativeSound[0]) {
            cc.audioEngine.playEffect(this.negativeSound[0], false);
        }
        var targetVisual = this.isOptionBG ? _node.getChildByName("bg") : _node.getChildByName("img");
        if (targetVisual)
            targetVisual.color = cc.Color.RED;
        // Red Shake animation on wrong option
        cc.tween(_node)
            .to(0.1, { x: _node.x - 10 })
            .to(0.1, { x: _node.x + 10 })
            .to(0.1, { x: _node.x - 10 })
            .to(0.1, { x: _node.x })
            .call(function () {
            if (targetVisual)
                targetVisual.color = cc.Color.WHITE;
        }).start();
        // Show Jockey for Negative Reaction
        if (this.currentJcokey) {
            this.currentJcokey.active = true;
            var negAnimList_1 = [];
            var jName = StartGame_1.default.Instance.jockeyName;
            if (jName == "Podar")
                negAnimList_1 = ["negetive", "negetive2"];
            else if (jName == "tlc")
                negAnimList_1 = ["negative_1", "negative_2"];
            else if (jName == "supercub")
                negAnimList_1 = ["negative_1", "negative_2"];
            else if (jName == "bag")
                negAnimList_1 = ["negative_1", "negative_2"];
            else if (jName == "cryon")
                negAnimList_1 = ["negative_1", "negative_2"];
            else if (jName == "stallion")
                negAnimList_1 = ["negative_1", "negative_2"];
            else
                negAnimList_1 = ["negative_1"];
            var clipNum_1 = this.getRandomNumber(0, negAnimList_1.length - 1);
            var skeleton_2 = this.currentJcokey.getComponent(sp.Skeleton);
            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey)
                .to(0.5, { x: 400 }, { easing: "quartInOut" })
                .call(function () {
                if (skeleton_2)
                    skeleton_2.setAnimation(0, negAnimList_1[clipNum_1], false);
                if (_this.negativeAudio && _this.negativeAudio[clipNum_1]) {
                    cc.audioEngine.playEffect(_this.negativeAudio[clipNum_1], false);
                }
                var audioDuration = (_this.negativeAudio && _this.negativeAudio[clipNum_1]) ? _this.negativeAudio[clipNum_1].duration : 1.5;
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, { x: 1200 }, { easing: "quartInOut" })
                        .call(function () {
                        _this.canTouch = true;
                    }).start();
                }, audioDuration);
            }).start();
        }
        else {
            this.canTouch = true;
        }
    };
    NewClass.prototype.callPositiveFeedback = function (_node) {
        var _this = this;
        var _a;
        var voIndex = this.answerArray.indexOf(_node.name);
        if (voIndex === -1)
            voIndex = 0;
        if (this.correctAudio[voIndex]) {
            cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
        }
        var img = _node.getChildByName("img");
        if (img)
            img.color = cc.Color.GRAY;
        var tick = _node.getChildByName("tick");
        if (tick)
            tick.active = true;
        var duration = ((_a = this.correctAudio[voIndex]) === null || _a === void 0 ? void 0 : _a.duration) || 0.5;
        this.scheduleOnce(function () {
            var confetti = _this.node.getChildByName("confetti");
            if (confetti) {
                confetti.setPosition(_node.x, _node.y);
                var anim = confetti.getComponent(cc.Animation);
                if (anim)
                    anim.play();
            }
            if (_this.positiveSound[0])
                cc.audioEngine.playEffect(_this.positiveSound[0], false);
            _this.scheduleOnce(function () {
                _this.correctAnswerCount++;
                if (_this.correctAnswerCount == _this.totalAnswers) {
                    _this.canTouch = false;
                    if (ProgressBar_1.default.Instance) {
                        ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                    }
                    _this.callJockey();
                }
                else {
                    _this.canTouch = true;
                }
            }, 0.5);
        }, duration);
    };
    NewClass.prototype.callNextLevel = function () {
        var _this = this;
        this.callStarsEared();
        this.scheduleOnce(function () {
            if (globalVariables_1.default.Instance.currentLevel == _this.maxLevel) {
                cc.director.loadScene("endScreen");
            }
            else {
                globalVariables_1.default.Instance.currentLevel++;
                cc.director.loadScene("1");
            }
        }, 0.5);
    };
    NewClass.prototype.callStarsEared = function () {
        if (!this.star1Log && globalVariables_1.default.Instance.currentLevel == 1)
            this.star1Log = true;
        if (!this.star2Log && globalVariables_1.default.Instance.currentLevel == 4)
            this.star2Log = true;
        if (!this.star3Log && globalVariables_1.default.Instance.currentLevel == this.maxLevel)
            this.star3Log = true;
    };
    NewClass.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (!err)
                callback(spriteFrame);
        });
    };
    NewClass.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (!err)
                callback(audioClip);
        });
    };
    NewClass.prototype.OptionsLayoutHorizontal = function () {
        if (!this.optionsNode)
            return;
        var optionNodes = this.optionsNode.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            totalWidth += option.width + paddingBetweenOptions;
            if (option.height > maxHeight)
                maxHeight = option.height;
        }
        var availableWidth = this.optionsNode.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        this.positionArray = [];
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionScaleFactor = scaleFactor;
            if (optionNodes.length == 2 && StartGame_1.default.Instance.templateType == "ObjectsTweenIn" && !this.isLastTween) {
                optionScaleFactor *= 0.7;
            }
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            var posX = accumulatedWidth + (option.width * option.anchorX);
            var optionX = posX - (this.optionsNode.width * this.optionsNode.anchorX);
            if (!this.isLastTween) {
                option.x = optionX;
            }
            else {
                cc.tween(option).to(0.5, { x: optionX }, { easing: "sineInOut" }).start();
            }
            accumulatedWidth += option.width + paddingBetweenOptions;
            this.positionArray.push(option.getPosition());
        }
    };
    NewClass.prototype.OptionsLayoutVertical = function () {
        if (!this.optionsNode)
            return;
        var optionNodes = this.optionsNode.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            totalHeight += optionNodes[i].height + paddingBetweenOptions;
        }
        var availableHeight = this.optionsNode.height;
        var scaleFactor = Math.min(1, availableHeight / totalHeight);
        var accumulatedHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            option.width *= scaleFactor;
            option.height *= scaleFactor;
            var posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (this.optionsNode.height * this.optionsNode.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;
        }
    };
    NewClass.prototype.arrangeGridChildren = function () {
        if (!this.optionsNode)
            return;
        var children = this.optionsNode.children;
        var maxColumns = 2;
        var spacing = -200;
        var totalRows = Math.ceil(children.length / maxColumns);
        var rowHeight = children.length > 0 ? children[0].height + spacing : 0;
        var startY = (totalRows - 1) * rowHeight / 2;
        for (var i = 0; i < children.length; i++) {
            var column = i % maxColumns;
            var row = Math.floor(i / maxColumns);
            var child = children[i];
            child.x = column * (child.width + spacing);
            child.y = startY - row * rowHeight;
        }
    };
    NewClass.prototype.reverseOptionsLayout = function () {
        if (!this.optionsNode)
            return;
        var children = this.optionsNode.children;
        var newPositions = children.map(function (c) { return c.y; }).reverse();
        for (var i = 0; i < children.length; i++) {
            children[i].y = newPositions[i];
        }
    };
    NewClass.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpM0JDO1FBOTJCRyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFHcEMsbUJBQWEsR0FBaUIsSUFBSSxD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LENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNxQjtJQUc1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ007SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQTdGckIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWkzQjVCO0lBQUQsZUFBQztDQWozQkQsQUFpM0JDLENBajNCcUMsRUFBRSxDQUFDLFNBQVMsR0FpM0JqRDtrQkFqM0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvY2tleSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL0pvY2tleXMvU2NyaXB0cy9Kb2NrZXlcIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgSG9yaXpudGFsT3B0aW9uTm9kZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgVmVydGljYWxPcHRpb25Ob2RlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgZXh0cmFJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwb3BTb3VuZDI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcXVlc3Rpb25Tb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhbGxpb25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdGxjUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHRsY19iaXJkRmx5aW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViX1BvczE6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJfUG9zMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9OZWcxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViX05lZzI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG4gICAgZGVmYXVsdE1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIGdyZXlNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFuc3dlckFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuICAgIHdyb25nQW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGFyMUxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXIzTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBvcHRpb25zTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XHJcbiAgICBjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBpc09wdGlvbkJHOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBUb3RhbE9wdGlvbnM6IG51bWJlciA9IDA7XHJcbiAgICBwb3NpdGlvbkFycmF5OiBjYy5WZWMyW10gPSBbXTtcclxuICAgIGlzRG9uZTogYm9vbGVhbltdID0gW107XHJcbiAgICBpc0xhc3RUd2VlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudExldmVsSWR4ID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDE7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IHN0YXJ0R2FtZS5JbnN0YW5jZT8ucXVlc3Rpb25zID8gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tjdXJyZW50TGV2ZWxJZHhdIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCFxdWVzdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJRdWVzdGlvbiBkYXRhIG1pc3NpbmcgZm9yIGxldmVsOiBcIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGb250IEhhbmRsaW5nXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlVGV4dCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpPy5nZXRDaGlsZEJ5TmFtZShcInRleHRcIik/LmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uUGFuZWxUZXh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKT8uZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpPy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICBpZiAodGVtcGxhdGVUZXh0ICYmIHF1ZXN0aW9uUGFuZWxUZXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIgJiYgdGhpcy5wb2Rhcl9mb250KSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVRleHQuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uUGFuZWxUZXh0LmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiAmJiB0aGlzLnRsY19mb250KSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVRleHQuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvblBhbmVsVGV4dC5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIgJiYgdGhpcy5zdXBlcmN1Yl9mb250KSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVRleHQuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uUGFuZWxUZXh0LmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSAmJiB0aGlzLmphaXB1cmlhX2ZvbnQpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVGV4dC5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25QYW5lbFRleHQuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Ub3RhbE9wdGlvbnMgPSBxdWVzdGlvbkRhdGEubnVtYmVyT2ZPcHRpb25zIHx8IDA7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IHFCb3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKTtcclxuICAgICAgICBpZiAocUJveCkgcUJveC56SW5kZXggPSAxO1xyXG5cclxuICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmlzT3B0aW9uQkcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc09wdGlvbkJHID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscyB8fCA3O1xyXG5cclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiZ05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICBpZiAoYmdOb2RlICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5tYWluQmcpIHtcclxuICAgICAgICAgICAgYmdOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlck51bSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckFycmF5W2ldID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXJOdW1baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFzc2V0cyBMb2FkaW5nXHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucXVlc3Rpb25BdWRpb05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgcUJveCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhpcmRPYmogPSBxQm94LmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZE9iaikgdGhpcmRPYmouZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICYmIHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdENoaWxkID0gdGhpcy5vcHRpb25zTm9kZT8uZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRDaGlsZCkgb3B0Q2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25EYXRhLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXF1ZXN0aW9uRGF0YS5pc09wdGlvblRleHQgJiYgcXVlc3Rpb25EYXRhLm9wdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEub3B0aW9uc1tpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdENoaWxkID0gdGhpcy5vcHRpb25zTm9kZT8uZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRDaGlsZCkgb3B0Q2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlc3Rpb25EYXRhLm9wdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0Q2hpbGQgPSB0aGlzLm9wdGlvbnNOb2RlPy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRDaGlsZCkgb3B0Q2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcXVlc3Rpb25EYXRhLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9zW2ldLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocUJveCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhpcmRPYmogPSBxQm94LmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZE9iaikgdGhpcmRPYmouZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgJiYgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0Q2hpbGQgPSB0aGlzLm9wdGlvbnNOb2RlPy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0Q2hpbGQpIG9wdENoaWxkLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkRhdGEubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghcXVlc3Rpb25EYXRhLmlzT3B0aW9uVGV4dCAmJiBxdWVzdGlvbkRhdGEub3B0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdENoaWxkID0gdGhpcy5vcHRpb25zTm9kZT8uZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdENoaWxkKSBvcHRDaGlsZC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVzdGlvbkRhdGEub3B0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRDaGlsZCA9IHRoaXMub3B0aW9uc05vZGU/LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdENoaWxkKSBvcHRDaGlsZC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBxdWVzdGlvbkRhdGEub3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9zW2ldLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBKb2NrZXkgSW5pdGlhbGl6YXRpb24gRml4XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5ID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50SmNva2V5ICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXk/LmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmIChQcm9ncmVzc0Jhci5JbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb2dyZXNzTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlPy5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpO1xyXG4gICAgICAgIGlmIChwcm9ncmVzc05vZGUpIHByb2dyZXNzTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAgICAgdGhpcy50b3RhbEFuc3dlcnMgPSBjdXJyZW50UXVlc3Rpb24/LmNvcnJlY3RBbnN3ZXJOdW0gPyBjdXJyZW50UXVlc3Rpb24uY29ycmVjdEFuc3dlck51bS5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxRdWVzdGlvbkJhcigpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIlNpbXBsZVRhcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uc0xheW91dChcImhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiVGFwVG9Db2xsZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zTGF5b3V0KFwiZ3JpZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsVGhpcmRPYmplY3RJbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIk9iamVjdHNUd2VlbkluXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zTGF5b3V0KFwiaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsVGhpcmRPYmplY3RJbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0dXAgQXVkaW8gbWFwcGluZyBmb3IgSm9ja2V5c1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMudGxjUG9zaXRpdmU7XHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdGFsbGlvblBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGVPcHRpb25zKCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25QYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIik7XHJcblxyXG4gICAgICAgIGlmICghdGVtcGxhdGUgfHwgIW9wdGlvblBhcmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgb3B0aW9uLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRQYXJlbnQob3B0aW9uUGFyZW50KTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgb3B0aW9uLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJnID0gb3B0aW9uLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgICAgIGlmIChiZykgYmcuYWN0aXZlID0gdGhpcy5pc09wdGlvbkJHO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcGxhdGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxRdWVzdGlvbkJhcigpIHtcclxuICAgICAgICBsZXQgcVBhbmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKTtcclxuICAgICAgICBpZiAoIXFQYW5lbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXN0aW9uQm94UG9zWSA9IHFQYW5lbC55O1xyXG4gICAgICAgIHFQYW5lbC5zZXRQb3NpdGlvbihjYy52MigwLCAxNTAwKSk7XHJcbiAgICAgICAgY2MudHdlZW4ocVBhbmVsKS50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBsZXQgbGJsID0gcVBhbmVsLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKT8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsZXQgcURhdGEgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgICAgICBpZiAobGJsICYmIHFEYXRhKSBsYmwuc3RyaW5nID0gcURhdGEucXVlc3Rpb25UZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wdGlvbnNMYXlvdXQodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlcnNlT3B0aW9uc0xheW91dCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImdyaWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFycmFuZ2VHcmlkQ2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFRoaXJkT2JqZWN0SW4oKSB7XHJcbiAgICAgICAgbGV0IHFCb3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKTtcclxuICAgICAgICBsZXQgcUJveDEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIik7XHJcblxyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiVGFwVG9Db2xsZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHFCb3gpIHFCb3guc2V0UG9zaXRpb24oY2MudjIoLTMwMCwgLTIwMCkpO1xyXG4gICAgICAgICAgICBpZiAocUJveDEpIHFCb3gxLnNldFBvc2l0aW9uKGNjLnYyKC0zMDAsIC0yMDApKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BTb3VuZFswXSkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHFCb3gpIGNjLnR3ZWVuKHFCb3gpLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxPcHRpb25JbigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiT2JqZWN0c1R3ZWVuSW5cIiAmJiBxQm94KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNOb2RlKSB0aGlzLm9wdGlvbnNOb2RlLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICBxQm94LnNldFBvc2l0aW9uKGNjLnYyKDE1MDAsIC0yNTApKTtcclxuICAgICAgICAgICAgcUJveC5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocUJveCkudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxPcHRpb25PdXRGcm9tT2JqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEpjb2tleSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHFEYXRhID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcblxyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICBpZiAocURhdGE/LnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvICYmIHRoaXMucXVlc3Rpb25Tb3VuZFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGludG9BbmltID0gXCJpbnRyb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oNDUwLCAtMzcwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgICAgIGludG9BbmltID0gXCJpbnRyb18xXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oODcwLCAtMzcwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgJiYgdGhpcy50bGNfYmlyZEZseWluZykge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRsY19iaXJkRmx5aW5nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBza2VsZXRvbiA9IHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBpbnRvQW5pbSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbnRyb0R1cmF0aW9uID0gc2tlbGV0b24uZmluZEFuaW1hdGlvbihpbnRvQW5pbSk/LmR1cmF0aW9uIHx8IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxRGF0YT8uc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImludHJvX2xvb3BcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcVNvdW5kRHVyYXRpb24gPSB0aGlzLnF1ZXN0aW9uU291bmRbMF0/LmR1cmF0aW9uIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImludHJvX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kRHVyYXRpb24gPSBza2VsZXRvbi5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpPy5kdXJhdGlvbiB8fCAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVuZER1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcVNvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGludHJvRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0hhbmRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXRPcHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIik/LmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pO1xyXG5cclxuICAgICAgICBpZiAoaGFuZCAmJiB0YXJnZXRPcHQpIHtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnQodGFyZ2V0T3B0KTtcclxuICAgICAgICAgICAgaGFuZC5zZXRQb3NpdGlvbigwLCAtNzApO1xyXG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltID0gaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsT3B0aW9uSW4oKSB7XHJcbiAgICAgICAgbGV0IGRlbGF5OiBudW1iZXIgPSAwLjU7XHJcbiAgICAgICAgbGV0IG9wdENvbnRhaW5lciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKTtcclxuICAgICAgICBpZiAoIW9wdENvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgb3B0Q29udGFpbmVyLnNldFBvc2l0aW9uKG9wdENvbnRhaW5lci54IC0gODAsIG9wdENvbnRhaW5lci55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG9wdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBvcHRDb250YWluZXIuY2hpbGRyZW5baSAtIDFdO1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BTb3VuZFswXSkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqU2NhbGUgPSBzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiU2ltcGxlVGFwXCIgPyAxIDogKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJUYXBUb0NvbGxlY3RcIiA/IDAuNSA6IDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3B0aW9uQkcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRDb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZykgaW1nLnNjYWxlID0gMS40O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjUsIHsgc2NhbGU6IG9ialNjYWxlIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gb3B0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgZGVsYXkgKz0gMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsT3B0aW9uT3V0RnJvbU9iamVjdCgpIHtcclxuICAgICAgICBsZXQgZGVsYXk6IG51bWJlciA9IDAuNTtcclxuICAgICAgICBsZXQgb3B0Q29udGFpbmVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpO1xyXG4gICAgICAgIGxldCBxQm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIik7XHJcbiAgICAgICAgaWYgKCFvcHRDb250YWluZXIgfHwgIXFCb3gpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gb3B0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG9wdENvbnRhaW5lci5jaGlsZHJlbltpIC0gMV07XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oMCAtIDEwMCwgcUJveC5nZXRQb3NpdGlvbigpLnkgLSAxMDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wU291bmRbMF0pIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ialNjYWxlID0gMC43O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc09wdGlvbkJHKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0Q29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWcpIGltZy5zY2FsZSA9IDEuNDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC41LCB7IHNjYWxlOiBvYmpTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBjaGlsZC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25BcnJheVtpIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuYmV6aWVyVG8oMSwgY2MudjIocG9zLngsIHBvcy55ICsgMjAwKSwgY2MudjIodGhpcy5wb3NpdGlvbkFycmF5W2kgLSAxXS54IC8gMS41LCBwb3MueSArIDQwMCksIGNjLnYyKHRoaXMucG9zaXRpb25BcnJheVtpIC0gMV0ueCwgdGhpcy5wb3NpdGlvbkFycmF5W2kgLSAxXS55KSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBvcHRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgICAgICBkZWxheSArPSAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9uQnV0dG9uQ2xpY2soX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ub3VjaCB8fCAhX2V2ZW50Py50YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoX2V2ZW50LnRhcmdldC5uYW1lKSAtIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lW2luZGV4XSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICBpZiAoaGFuZCAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBfbm9kZSA9IF9ldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGlzY29ycmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2VyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5hbnN3ZXJBcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgaXNjb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb25lW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzY29ycmVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcFNvdW5kWzBdKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbihfbm9kZSwgX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFBPU0lUSVZFIFJFQUNUSU9OIC8gSk9DS0VZIFZJU0lCTEUgRklYIC0tLVxyXG4gICAgY2FsbEpvY2tleSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudEpjb2tleSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBhbmltTGlzdDogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBsZXQgak5hbWUgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGpOYW1lID09IFwiUG9kYXJcIikgYW5pbUxpc3QgPSBbXCJwb3NzaXRpdmVcIiwgXCJwb3NzaXRpdmUyXCIsIFwicG9zc2l0aXZlM1wiXTtcclxuICAgICAgICBlbHNlIGlmIChqTmFtZSA9PSBcInRsY1wiKSBhbmltTGlzdCA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiXTtcclxuICAgICAgICBlbHNlIGlmIChqTmFtZSA9PSBcInN1cGVyY3ViXCIpIGFuaW1MaXN0ID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIl07XHJcbiAgICAgICAgZWxzZSBpZiAoak5hbWUgPT0gXCJiYWdcIikgYW5pbUxpc3QgPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiXTtcclxuICAgICAgICBlbHNlIGlmIChqTmFtZSA9PSBcImNyeW9uXCIpIGFuaW1MaXN0ID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIl07XHJcbiAgICAgICAgZWxzZSBpZiAoak5hbWUgPT0gXCJzdGFsbGlvblwiKSBhbmltTGlzdCA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCJdO1xyXG4gICAgICAgIGVsc2UgYW5pbUxpc3QgPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiXTtcclxuXHJcbiAgICAgICAgbGV0IGNsaXBOdW0gPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICBsZXQgc2tlbGV0b24gPSB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgLy8gU2xpZGUgSW4gSm9ja2V5IEFuaW1hdGlvblxyXG4gICAgICAgIGxldCBzdGFydFggPSAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkgPyAxMjAwIDogLTEyMDA7XHJcbiAgICAgICAgbGV0IHRhcmdldFggPSAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkgPyA0NTAgOiAtNDUwO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oc3RhcnRYLCAtMzUwKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgeDogdGFyZ2V0WCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNrZWxldG9uKSBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbUxpc3RbY2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aXZlQXVkaW8gJiYgdGhpcy5wb3NpdGl2ZUF1ZGlvW2NsaXBOdW1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9EdXJhdGlvbiA9ICh0aGlzLnBvc2l0aXZlQXVkaW8gJiYgdGhpcy5wb3NpdGl2ZUF1ZGlvW2NsaXBOdW1dKSA/IHRoaXMucG9zaXRpdmVBdWRpb1tjbGlwTnVtXS5kdXJhdGlvbiA6IDEuNTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IHN0YXJ0WCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCBhdWRpb0R1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gTkVHQVRJVkUgUkVBQ1RJT04gLyBKT0NLRVkgVklTSUJMRSBGSVggLS0tXHJcbiAgICBjYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5uZWdhdGl2ZVNvdW5kWzBdKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0VmlzdWFsID0gdGhpcy5pc09wdGlvbkJHID8gX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSA6IF9ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpO1xyXG4gICAgICAgIGlmICh0YXJnZXRWaXN1YWwpIHRhcmdldFZpc3VhbC5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuXHJcbiAgICAgICAgLy8gUmVkIFNoYWtlIGFuaW1hdGlvbiBvbiB3cm9uZyBvcHRpb25cclxuICAgICAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBfbm9kZS54IC0gMTAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBfbm9kZS54ICsgMTAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBfbm9kZS54IC0gMTAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBfbm9kZS54IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWaXN1YWwpIHRhcmdldFZpc3VhbC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyBTaG93IEpvY2tleSBmb3IgTmVnYXRpdmUgUmVhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SmNva2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5lZ0FuaW1MaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgak5hbWUgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChqTmFtZSA9PSBcIlBvZGFyXCIpIG5lZ0FuaW1MaXN0ID0gW1wibmVnZXRpdmVcIiwgXCJuZWdldGl2ZTJcIl07XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpOYW1lID09IFwidGxjXCIpIG5lZ0FuaW1MaXN0ID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpOYW1lID09IFwic3VwZXJjdWJcIikgbmVnQW5pbUxpc3QgPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoak5hbWUgPT0gXCJiYWdcIikgbmVnQW5pbUxpc3QgPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoak5hbWUgPT0gXCJjcnlvblwiKSBuZWdBbmltTGlzdCA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChqTmFtZSA9PSBcInN0YWxsaW9uXCIpIG5lZ0FuaW1MaXN0ID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgICAgICAgIGVsc2UgbmVnQW5pbUxpc3QgPSBbXCJuZWdhdGl2ZV8xXCJdO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsaXBOdW0gPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBuZWdBbmltTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgbGV0IHNrZWxldG9uID0gdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oMTIwMCwgLTM1MCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogNDAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbikgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIG5lZ0FuaW1MaXN0W2NsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmVnYXRpdmVBdWRpbyAmJiB0aGlzLm5lZ2F0aXZlQXVkaW9bY2xpcE51bV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0R1cmF0aW9uID0gKHRoaXMubmVnYXRpdmVBdWRpbyAmJiB0aGlzLm5lZ2F0aXZlQXVkaW9bY2xpcE51bV0pID8gdGhpcy5uZWdhdGl2ZUF1ZGlvW2NsaXBOdW1dLmR1cmF0aW9uIDogMS41O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMTIwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgYXVkaW9EdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCB2b0luZGV4ID0gdGhpcy5hbnN3ZXJBcnJheS5pbmRleE9mKF9ub2RlLm5hbWUpO1xyXG4gICAgICAgIGlmICh2b0luZGV4ID09PSAtMSkgdm9JbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW1nID0gX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XHJcbiAgICAgICAgaWYgKGltZykgaW1nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuICAgICAgICBsZXQgdGljayA9IF9ub2RlLmdldENoaWxkQnlOYW1lKFwidGlja1wiKTtcclxuICAgICAgICBpZiAodGljaykgdGljay5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XT8uZHVyYXRpb24gfHwgMC41O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbmZldHRpID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIik7XHJcbiAgICAgICAgICAgIGlmIChjb25mZXR0aSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmV0dGkuc2V0UG9zaXRpb24oX25vZGUueCwgX25vZGUueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGNvbmZldHRpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGl2ZVNvdW5kWzBdKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFByb2dyZXNzQmFyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoNiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxKb2NrZXkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxOZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsU3RhcnNFYXJlZCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFN0YXJzRWFyZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkgdGhpcy5zdGFyMUxvZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXIyTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkgdGhpcy5zdGFyMkxvZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXIzTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkgdGhpcy5zdGFyM0xvZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIE9wdGlvbnNMYXlvdXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uaGVpZ2h0ID4gbWF4SGVpZ2h0KSBtYXhIZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gdGhpcy5vcHRpb25zTm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID0gdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uTm9kZXMubGVuZ3RoID09IDIgJiYgc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIk9iamVjdHNUd2VlbkluXCIgJiYgIXRoaXMuaXNMYXN0VHdlZW4pIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvblNjYWxlRmFjdG9yICo9IDAuNztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgKG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvblggPSBwb3NYIC0gKHRoaXMub3B0aW9uc05vZGUud2lkdGggKiB0aGlzLm9wdGlvbnNOb2RlLmFuY2hvclgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTGFzdFR3ZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24ueCA9IG9wdGlvblg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihvcHRpb24pLnRvKDAuNSwgeyB4OiBvcHRpb25YIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb24uZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9uc05vZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG4gICAgICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxIZWlnaHQgKz0gb3B0aW9uTm9kZXNbaV0uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZUhlaWdodCA9IHRoaXMub3B0aW9uc05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZUhlaWdodCAvIHRvdGFsSGVpZ2h0KTtcclxuICAgICAgICBsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IHNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIChvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclkpO1xyXG4gICAgICAgICAgICBvcHRpb24ueSA9IHBvc1kgLSAodGhpcy5vcHRpb25zTm9kZS5oZWlnaHQgKiB0aGlzLm9wdGlvbnNOb2RlLmFuY2hvclkpO1xyXG4gICAgICAgICAgICBhY2N1bXVsYXRlZEhlaWdodCArPSBvcHRpb24uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnJhbmdlR3JpZENoaWxkcmVuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IG1heENvbHVtbnMgPSAyO1xyXG4gICAgICAgIGxldCBzcGFjaW5nID0gLTIwMDtcclxuICAgICAgICBsZXQgdG90YWxSb3dzID0gTWF0aC5jZWlsKGNoaWxkcmVuLmxlbmd0aCAvIG1heENvbHVtbnMpO1xyXG4gICAgICAgIGxldCByb3dIZWlnaHQgPSBjaGlsZHJlbi5sZW5ndGggPiAwID8gY2hpbGRyZW5bMF0uaGVpZ2h0ICsgc3BhY2luZyA6IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh0b3RhbFJvd3MgLSAxKSAqIHJvd0hlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGkgJSBtYXhDb2x1bW5zO1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbWF4Q29sdW1ucyk7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjaGlsZC54ID0gY29sdW1uICogKGNoaWxkLndpZHRoICsgc3BhY2luZyk7XHJcbiAgICAgICAgICAgIGNoaWxkLnkgPSBzdGFydFkgLSByb3cgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9ucyA9IGNoaWxkcmVuLm1hcChjID0+IGMueSkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2hpbGRyZW5baV0ueSA9IG5ld1Bvc2l0aW9uc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25WT0J1dHRvbigpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
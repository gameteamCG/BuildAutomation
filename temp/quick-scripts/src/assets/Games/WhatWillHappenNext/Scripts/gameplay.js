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
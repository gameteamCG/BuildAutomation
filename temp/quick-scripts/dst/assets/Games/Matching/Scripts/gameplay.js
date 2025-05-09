
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Matching/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4e51CcXJH24gA96gBaxOm', 'gameplay');
// Games/Matching/Scripts/gameplay.ts

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
var gameplay = /** @class */ (function (_super) {
    __extends(gameplay, _super);
    function gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
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
        _this.dropZones = null;
        _this.questionBoxPosY = 0;
        _this.touches = [];
        _this.canMove = false;
        _this.collider = null;
        _this.droppedBool = [];
        _this.answeredCount = 0;
        _this.totalAnswers = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    gameplay.prototype.onLoad = function () {
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
        // let dropNode: cc.Node = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        else {
            // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        this.totalAnswers =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions;
        this.UpdateJSONData();
    };
    gameplay.prototype.UpdateJSONData = function () {
        var _this = this;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].reiterations[i], function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    _this.correctAudio[i] = audioClip;
                });
            };
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].reiterations.length; i++) {
                _loop_1(i);
            }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonLeftOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        _this.dropZones
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonRightOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        _this.optionsNode
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isLeftOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].leftoptions[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.dropZones
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this_1.dropZones
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].leftoptions[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                _loop_2(i);
            }
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isRightOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].rightoptions[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.optionsNode
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this_2.optionsNode
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].rightoptions[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                _loop_3(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_4 = function (i) {
                this_3.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].reiterations[i], function (AudioClip) {
                    _this.correctAudio[i] = AudioClip;
                });
            };
            var this_3 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].reiterations.length; i++) {
                _loop_4(i);
            }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonLeftOptionImageName, function (spriteFrame) {
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        _this.dropZones
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonRightOptionImageName, function (spriteFrame) {
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        _this.optionsNode
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            var _loop_5 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isRightOptionText) {
                    this_4.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].rightoptions[i], function (spriteFrame) {
                        _this.optionsNode
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    });
                }
                else {
                    this_4.optionsNode
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].rightoptions[i];
                }
            };
            var this_4 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                _loop_5(i);
            }
            var _loop_6 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isLeftOptionText) {
                    this_5.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].leftoptions[i], function (spriteFrame) {
                        _this.dropZones
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    });
                }
                else {
                    this_5.dropZones
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].leftoptions[i];
                }
            };
            var this_5 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                _loop_6(i);
            }
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.callThirdObjectIn();
    };
    gameplay.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        // this.answerArray = [startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum];
        this.answerArray[0] = "1";
        // this.OptionsLayout();
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
    };
    gameplay.prototype.SubscribeEvents = function () {
        var _this = this;
        this.collider = this.node.getChildByName("collider");
        for (var i = 0; i < this.dropZones.children.length; i++) {
            this.droppedBool[i] = false;
        }
        this.optionsNode.children.forEach(function (element) {
            element
                .getChildByName("line")
                .getComponent(cc.Graphics).strokeColor = element.color;
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .moveTo(0, 0);
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .lineTo(0.1, 0);
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .lineTo(-0.11, 0);
            element.getChildByName("line").getComponent(cc.Graphics).stroke();
            element
                .getChildByName("line")
                .getComponent(cc.Graphics).lineWidth = 10;
            element.on("touchstart", function (event) {
                this.TouchStart(element, event);
            }, _this);
            element.on("touchmove", function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on("touchend", function (event) {
                this.TouchEnd(element, event);
            }, _this);
            element.on("touchcancel", function (event) {
                this.TouchEnd(element, event);
            }, _this);
        });
        this.dropZones.children.forEach(function (element) {
            element
                .getChildByName("line")
                .getComponent(cc.Graphics).strokeColor = element.color;
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .moveTo(0, 0);
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .lineTo(0.1, 0);
            element
                .getChildByName("line")
                .getComponent(cc.Graphics)
                .lineTo(-0.11, 0);
            element.getChildByName("line").getComponent(cc.Graphics).stroke();
            element
                .getChildByName("line")
                .getComponent(cc.Graphics).lineWidth = 10;
            element.on("touchstart", function (event) {
                this.TouchStart1(element, event);
            }, _this);
            element.on("touchmove", function (event) {
                this.TouchMove1(element, event);
            }, _this);
            element.on("touchend", function (event) {
                this.TouchEnd(element, event);
            }, _this);
            element.on("touchcancel", function (event) {
                this.TouchEnd(element, event);
            }, _this);
        });
    };
    gameplay.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    gameplay.prototype.GenerateOptions = function () {
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
            var dropNode = cc.instantiate(this.node.getChildByName("template"));
            dropNode.name = (i + 1).toString();
            dropNode.setParent(this.dropZones);
            dropNode.setPosition(cc.v2(0, 0));
            dropNode.opacity = 0;
        }
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfRightOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.optionsNode);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        console.log("dropZones = ", this.dropZones.name);
        // console.log("optionsNode = ", this.optionsNode.children.length);
        this.node.getChildByName("template").destroy();
    };
    gameplay.prototype.callThirdObjectIn = function () {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        // this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel"))
            .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
            .start();
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.OptionsLayoutVertical(this.optionsNode);
        this.OptionsLayoutVertical(this.dropZones);
        this.reverseOptionsLayout(this.optionsNode);
        this.reverseOptionsLayout(this.dropZones);
        // let posX = -237;
        // if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
        //     posX = -300;
        // }
        this.scheduleOnce(function () {
            var delay = 0.5;
            var _loop_7 = function (i) {
                _this.dropZones.children[i - 1].scale = 0;
                _this.dropZones.children[i - 1].opacity = 255;
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                    cc.tween(_this.dropZones.getChildByName(i.toString()))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                        .start();
                    if (i == _this.dropZones.children.length) {
                        _this.scheduleOnce(function () {
                            _this.callOptionIn();
                        }, 0.5);
                    }
                }, delay);
                delay += 0.3;
            };
            for (var i = 1; i <= _this.dropZones.children.length; i++) {
                _loop_7(i);
            }
        }, 1);
    };
    gameplay.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    };
    gameplay.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            this.optionsNode.children.forEach(function (element) {
                element.setPosition(190, element.getPosition().y);
            });
        }
        var _loop_8 = function (i) {
            this_6.optionsNode.children[i - 1].scale = 0;
            this_6.optionsNode.children[i - 1].opacity = 255;
            this_6.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.optionsNode.getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                    .start();
                if (i == _this.optionsNode.children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                        _this.SubscribeEvents();
                    }, 0.5);
                }
            }, delay);
            delay += 0.3;
        };
        var this_6 = this;
        for (var i = 1; i <= this.optionsNode.children.length; i++) {
            _loop_8(i);
        }
    };
    gameplay.prototype.PlayHandAnimation = function () {
        var _this = this;
        var hand = this.node.getChildByName("hand");
        var pos1 = this.dropZones.getChildByName("1").getPosition();
        var pos2 = this.optionsNode.getChildByName("1").getPosition();
        // hand.setParent(this.dropZones.getChildByName("1"));
        hand.setPosition(pos1);
        cc.tween(hand)
            .to(2, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" })
            .start();
        hand.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            if (hand.activeInHierarchy && hand.opacity == 255) {
                _this.PlayHandAnimation();
            }
        }, 2);
    };
    gameplay.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canMove = false;
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canMove = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                // PLAY CONNECT HAND ANIMATION
                this.PlayHandAnimation();
            }
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            var intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    _this.canMove = true;
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        // PLAY CONNECT HAND ANIMATION
                        _this.PlayHandAnimation();
                    }
                }
                else {
                    cc.audioEngine.playEffect(_this.questionSound[0], false);
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "intro_loop", true);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "intro_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                            _this.canMove = true;
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                // PLAY CONNECT HAND ANIMATION
                                _this.PlayHandAnimation();
                            }
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, _this.questionSound[0].duration);
                }
            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
    };
    gameplay.prototype.callNextLevel = function () {
        var _this = this;
        if (this.answeredCount >= this.totalAnswers) {
            console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
            ProgressBar_1.default.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                _this.scheduleOnce(function () {
                    _this.callStarsEared();
                    if (globalVariables_1.default.Instance.currentLevel == _this.maxLevel) {
                        cc.director.loadScene("endScreen");
                    }
                    else {
                        globalVariables_1.default.Instance.currentLevel++;
                        cc.director.loadScene("1");
                    }
                }, 1);
            }, 1.5);
        }
        else {
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
                .start();
            this.dropZones.active = true;
            this.optionsNode.active = true;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = true;
            this.node.getChildByName("overlay").active = false;
            this.node.getChildByName("overlay").children.forEach(function (element) {
                if (element.name != "bg") {
                    element.destroy();
                }
            });
            this.canMove = true;
        }
    };
    gameplay.prototype.callStarsEared = function () {
        if (!this.star1Log && globalVariables_1.default.Instance.currentLevel == 1) {
            this.star1Log = true;
            console.log("starsEarned--1");
        }
        if (!this.star2Log && globalVariables_1.default.Instance.currentLevel == 4) {
            this.star2Log = true;
            console.log("starsEarned--2");
        }
        if (!this.star3Log &&
            globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    };
    gameplay.prototype.callPositiveRection = function (_node1, _node2) {
        var _this = this;
        var _clone1 = cc.instantiate(_node1);
        var _clone2 = cc.instantiate(_node2);
        this.node.getChildByName("overlay").active = true;
        _clone1.setParent(this.node.getChildByName("overlay"));
        _clone2.setParent(this.node.getChildByName("overlay"));
        _node1.destroy();
        _node2.destroy();
        this.dropZones.active = false;
        this.optionsNode.active = false;
        cc.audioEngine.playEffect(this.positiveSound[0], false);
        cc.tween(_clone1)
            .to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone1.children[1])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone1.children[1])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone1.children[2])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone1.children[2])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone1)
            .to(0.5, { x: -160, y: 0 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2)
            .to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2.children[1])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2.children[1])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2.children[2])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2.children[2])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(_clone2)
            .to(0.5, { x: 160, y: 0 }, { easing: "sineInOut" })
            .start();
        this.scheduleOnce(function () {
            var audioNum = parseInt(_clone1.name);
            audioNum -= 1;
            console.log("audio Number = ", audioNum);
            cc.audioEngine.playEffect(_this.correctAudio[audioNum], false);
            _this.node.getChildByName("confetti").setPosition(0, 0);
            _this.node
                .getChildByName("confetti")
                .getComponent(cc.Animation)
                .play();
            _this.scheduleOnce(function () {
                _this.callJockey();
            }, 0.7);
        }, 0.5);
    };
    gameplay.prototype.callJockey = function () {
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
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
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
        else if (StartGame_1.default.Instance.jockeyName == "boy") {
            anim = ["positive_1", "positive_2", "positive_3"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "girl") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
                "positive_6",
            ];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 &&
            StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
        }
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey)
                .to(0.5, {
                x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2],
            }, { easing: "quartInOut" })
                .start();
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, {
                        x: pos[globalVariables_1.default.Instance.currentLevel % 2],
                    }, { easing: "quartInOut" })
                        .start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion" &&
                        StartGame_1.default.Instance.jockeyName != "Podar") {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                    }
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idel", true);
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.callNextLevel();
                }, _this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(function () {
                //bird flying out sound
                if (_this.answeredCount >= _this.totalAnswers) {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "intro_out", false);
                    cc.audioEngine.playEffect(_this.tlc_birdFlying, false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey.active = false;
                        _this.callNextLevel();
                    }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                    _this.callNextLevel();
                }
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" ||
                anim[currentClipNum] == "positive_2") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(_this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(_this.supercub_Pos2, false);
                        }
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_end", false);
                        _this.scheduleOnce(function () {
                            if (_this.answeredCount >= _this.totalAnswers) {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "run", false);
                                cc.tween(_this.currentJcokey)
                                    .to(2, { x: -1000 })
                                    .start();
                                _this.callNextLevel();
                            }
                            else {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                                _this.callNextLevel();
                            }
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                    }, _this.positiveAudio[currentClipNum].duration);
                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(function () {
                    if (_this.answeredCount >= _this.totalAnswers) {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "run", false);
                        cc.tween(_this.currentJcokey)
                            .to(2, { x: -1000 })
                            .start();
                        _this.callNextLevel();
                    }
                    else {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                        _this.callNextLevel();
                    }
                }, this.positiveAudio[currentClipNum].duration);
            }
        }
    };
    gameplay.prototype.callNegativeRection = function (_node) {
        var _this = this;
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
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
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
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
            else if (StartGame_1.default.Instance.jockeyName == "boy") {
                anim = ["negative_1", "negative_2"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "girl") {
                anim = [
                    "negative_1",
                    "negative_2",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                ];
            }
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            if (StartGame_1.default.Instance.jockeyName == "boy") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "adle", true);
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: 400 }, { easing: "quartInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        cc.tween(_this.currentJcokey)
                            .to(0.5, { x: 1200 }, { easing: "quartInOut" })
                            .start();
                        if (StartGame_1.default.Instance.jockeyName != "stallion" &&
                            StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        if (StartGame_1.default.Instance.jockeyName == "Podar") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idel", true);
                        }
                        //console.log("characterDisappear--Podar_Jumbo");
                        _this.canMove = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                    _this.canMove = true;
                }, _this.negativeAudio[currentClipNum].duration);
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" ||
                    anim[currentClipNum] == "negative_2") {
                    //play bulb break if needed
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_start", false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                        _this.scheduleOnce(function () {
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(_this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(_this.supercub_Neg2, false);
                            }
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.canMove = true;
                            _this.scheduleOnce(function () {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, _this.negativeAudio[currentClipNum].duration);
                    }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                        _this.canMove = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
        }, 0.7);
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" })
            .call(function () { })
            .start();
    };
    gameplay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    gameplay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    gameplay.prototype.OptionsLayoutVertical = function (_node) {
        var optionsLayout = _node;
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
    gameplay.prototype.reverseOptionsLayout = function (_node) {
        var optionsLayout = _node;
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
        var pos = optionsLayout.getPosition();
        optionsLayout.setPosition(0, 0);
        for (var i = 0; i < optionNodes.length; i++) {
            if (optionNodes.length > 1) {
                optionNodes[i].setPosition(pos.x, optionNodes[i].y + pos.y);
            }
            else if (optionNodes.length == 1) {
                optionNodes[i].setPosition(pos.x, pos.y);
            }
            var _polygon = optionNodes[i].getComponent(cc.PolygonCollider);
            _polygon.points[0].x =
                -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[0].y =
                -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[1].x =
                optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[1].y =
                -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[2].x =
                optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[2].y =
                optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[3].x =
                -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[3].y =
                optionNodes[i].getChildByName("img").height / 2;
        }
        if (_node.name == this.optionsNode.name) {
            var children = optionsLayout.children;
            // Create an array to store the original positions
            var originalPositions = [];
            // Store the original positions of the children nodes
            for (var i = 0; i < children.length; i++) {
                originalPositions.push(children[i].position.clone());
            }
            // Shuffle the positions randomly
            for (var i = children.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = children[i].position.clone();
                children[i].setPosition(children[j].position);
                children[j].setPosition(temp);
            }
        }
    };
    gameplay.prototype.TouchStart = function (_node, _event) {
        if (!this.canMove) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        this.node.getChildByName("hand").opacity = 0;
        //console.log("movement fix start : ",this.dropZones.getChildByName("1"));
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        var deltax = _event.touch.getLocationX();
        var deltay = _event.touch.getLocationY();
        this.collider.setPosition(deltax - 640, deltay - 400);
        this.touches.length = 0;
        this.touches.push(_event.touch.getLocation());
        if (_node.getParent() == this.optionsNode) {
            this.canMove = true;
        }
        else {
            this.canMove = false;
        }
    };
    gameplay.prototype.TouchMove = function (_node, _event) {
        this.node.getChildByName("hand").active = false;
        //console.log("Touch move : ");
        if (this.canMove) {
            var delta = _event.touch.getDelta();
            this.collider.x += delta.x;
            this.collider.y += delta.y;
            var touches = this.touches;
            touches.push(_event.touch.getLocation());
            var MIN_POINT_DISTANCE = 2;
            var graphics = _node
                .getChildByName("line")
                .getComponent(cc.Graphics);
            graphics.clear();
            var worldPos = this.node.convertToWorldSpaceAR(cc.v2(_node.getPosition().x, _node.getPosition().y));
            graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
            var lastIndex = 0;
            for (var i = 1, l = touches.length; i < l; i++) {
                if (touches[i].sub(touches[lastIndex]).mag() <
                    MIN_POINT_DISTANCE) {
                    continue;
                }
                lastIndex = i;
            }
            graphics.lineTo(touches[lastIndex].x - worldPos.x, touches[lastIndex].y - worldPos.y);
            graphics.stroke();
            for (var i = 0; i < this.dropZones.children.length; i++) {
                var _nodeWorldSpacePos = _node.parent.convertToWorldSpaceAR(this.collider.getPosition());
                var _actualPosition = this.dropZones.children[i].convertToNodeSpaceAR(_nodeWorldSpacePos);
                if (cc.Intersection.pointInPolygon(new cc.Vec2(_actualPosition.x, _actualPosition.y), this.dropZones.children[i].getComponent(cc.PolygonCollider).points) &&
                    (!this.droppedBool[i] ||
                        _node.name == this.dropZones.children[i].name)) {
                    //console.log("inside touch move @@@@@@@")
                    this.Feedback(_node, this.dropZones.children[i], i);
                    this.canMove = false;
                    break;
                }
                // if (this.collider.getBoundingBox().contains(this.dropZones.children[i].getPosition())) {
                //     this.Feedback(_node, this.dropZones.children[i], i);
                //     this.canMove = false;
                //     break;
                // }
            }
        }
    };
    gameplay.prototype.TouchEnd = function (_node, _event) {
        _node.getChildByName("line").getComponent(cc.Graphics).clear();
    };
    gameplay.prototype.TouchStart1 = function (_node, _event) {
        if (!this.canMove) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        this.node.getChildByName("hand").opacity = 0;
        var deltax = _event.touch.getLocationX();
        var deltay = _event.touch.getLocationY();
        this.collider.setPosition(deltax - 640, deltay - 400);
        this.touches.length = 0;
        this.touches.push(_event.touch.getLocation());
        if (_node.getParent() == this.dropZones) {
            this.canMove = true;
        }
        else {
            this.canMove = false;
        }
    };
    gameplay.prototype.TouchMove1 = function (_node, _event) {
        if (this.canMove) {
            var delta = _event.touch.getDelta();
            this.collider.x += delta.x;
            this.collider.y += delta.y;
            var touches = this.touches;
            touches.push(_event.touch.getLocation());
            var MIN_POINT_DISTANCE = 2;
            var graphics = _node
                .getChildByName("line")
                .getComponent(cc.Graphics);
            graphics.clear();
            var worldPos = this.node.convertToWorldSpaceAR(cc.v2(_node.getPosition().x, _node.getPosition().y));
            graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
            var lastIndex = 0;
            for (var i = 1, l = touches.length; i < l; i++) {
                if (touches[i].sub(touches[lastIndex]).mag() <
                    MIN_POINT_DISTANCE) {
                    continue;
                }
                lastIndex = i;
            }
            graphics.lineTo(touches[lastIndex].x - worldPos.x, touches[lastIndex].y - worldPos.y);
            graphics.stroke();
            for (var i = 0; i < this.optionsNode.children.length; i++) {
                var _nodeWorldSpacePos = _node.parent.convertToWorldSpaceAR(this.collider.getPosition());
                var _actualPosition = this.optionsNode.children[i].convertToNodeSpaceAR(_nodeWorldSpacePos);
                if (cc.Intersection.pointInPolygon(new cc.Vec2(_actualPosition.x, _actualPosition.y), this.optionsNode.children[i].getComponent(cc.PolygonCollider).points) &&
                    (!this.droppedBool[i] ||
                        _node.name == this.dropZones.children[i].name)) {
                    this.Feedback(this.optionsNode.children[i], _node, i);
                    this.canMove = false;
                    break;
                }
                // if (this.collider.getBoundingBox().contains(this.optionsNode.children[i].getPosition())) {
                //     this.Feedback(this.optionsNode.children[i], _node, i);
                //     this.canMove = false;
                //     break;
                // }
            }
        }
    };
    gameplay.prototype.Feedback = function (_node, _dropNode, number) {
        console.log("feedback called!!!!!");
        this.canMove = false;
        if (_node.name == _dropNode.name) {
            this.answeredCount++;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: 1500 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = false;
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveRection(_dropNode, _node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.callNegativeRection(_node);
        }
    };
    __decorate([
        property(cc.Font)
    ], gameplay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], gameplay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], gameplay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], gameplay.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "popSound2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "questionSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "positiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "negativeSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "stallionNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "tlcNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercubPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercubNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "tlc_birdFlying", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercub_Pos1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercub_Pos2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercub_Neg1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], gameplay.prototype, "supercub_Neg2", void 0);
    __decorate([
        property(cc.Material)
    ], gameplay.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], gameplay.prototype, "greyMat", void 0);
    __decorate([
        property(cc.Node)
    ], gameplay.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], gameplay.prototype, "dropZones", void 0);
    gameplay = __decorate([
        ccclass
    ], gameplay);
    return gameplay;
}(cc.Component));
exports.default = gameplay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1hdGNoaW5nXFxTY3JpcHRzXFxnYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRkFBcUY7QUFDckYsa0VBQTZEO0FBQzdELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWd5REM7UUE5eERRLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFtQixFQUFFLENBQUM7UUFHOUIsZUFBUyxHQUFtQixFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUVqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUV0QyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxtQkFB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Z3lEakQ7a0JBaHlEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2NrZXkgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9Kb2NrZXlzL1NjcmlwdHMvSm9ja2V5XCI7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NCYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lcGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KGNjLkZvbnQpXHJcblx0cHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3BTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHBvcFNvdW5kMjogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgbmVnYXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHN0YWxsaW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjX2JpcmRGbHlpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9Qb3MxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9Qb3MyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9OZWcxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdXBlcmN1Yl9OZWcyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXHJcblx0ZGVmYXVsdE1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXHJcblx0Z3JleU1hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGFuc3dlckFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgbWF4TGV2ZWw6IG51bWJlciA9IDc7XHJcblx0d3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuXHRzdGFyMUxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHN0YXIyTG9nOiBib29sZWFuID0gZmFsc2U7XHJcblx0c3RhcjNMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Y29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRwcml2YXRlIG9wdGlvbnNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRwcml2YXRlIGRyb3Bab25lczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgcXVlc3Rpb25Cb3hQb3NZOiBudW1iZXIgPSAwO1xyXG5cclxuXHR0b3VjaGVzOiBjYy5WZWMyW10gPSBbXTtcclxuXHJcblx0Y2FuTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgY29sbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cdGRyb3BwZWRCb29sOiBib29sZWFuW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBhbnN3ZXJlZENvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgdG90YWxBbnN3ZXJzOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG5cdFx0fVxyXG5cdFx0Ly8gbGV0IGRyb3BOb2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpO1xyXG5cdFx0dGhpcy5HZW5lcmF0ZU9wdGlvbnMoKTtcclxuXHRcdHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XHJcblx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcblx0XHRcdGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHRcdHRoaXMudG90YWxBbnN3ZXJzID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRdLm51bWJlck9mTGVmdE9wdGlvbnM7XHJcblx0XHR0aGlzLlVwZGF0ZUpTT05EYXRhKCk7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVKU09ORGF0YSgpIHtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLnF1ZXN0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvblNvdW5kWzBdID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5yZWl0ZXJhdGlvbnMubGVuZ3RoO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLnJlaXRlcmF0aW9uc1tpXSxcclxuXHRcdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvbW1vbkxlZnRPcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbkxlZnRPcHRpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm51bWJlck9mTGVmdE9wdGlvbnM7XHJcblx0XHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZHJvcFpvbmVzXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25SaWdodE9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uY29tbW9uUmlnaHRPcHRpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm51bWJlck9mUmlnaHRPcHRpb25zO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnNOb2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mTGVmdE9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc0xlZnRPcHRpb25UZXh0XHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiBpbWcgPSBcIiwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSk7XHJcblx0XHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRdLmxlZnRvcHRpb25zW2ldLFxyXG5cdFx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRyb3Bab25lc1xyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiB0ZXh0ID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG5cdFx0XHRcdFx0dGhpcy5kcm9wWm9uZXNcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ubGVmdG9wdGlvbnNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAoXHJcblx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdGkgPFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ubnVtYmVyT2ZSaWdodE9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc1JpZ2h0T3B0aW9uVGV4dFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJvcHRpb24gaW1nID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG5cdFx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS5yaWdodG9wdGlvbnNbaV0sXHJcblx0XHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3B0aW9uc05vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJvcHRpb24gdGV4dCA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuXHRcdFx0XHRcdHRoaXMub3B0aW9uc05vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ucmlnaHRvcHRpb25zW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ucXVlc3Rpb25BdWRpb05hbWUsXHJcblx0XHRcdFx0KEF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5yZWl0ZXJhdGlvbnMubGVuZ3RoO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5yZWl0ZXJhdGlvbnNbaV0sXHJcblx0XHRcdFx0XHQoQXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdEF1ZGlvW2ldID0gQXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvbW1vbkxlZnRPcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbkxlZnRPcHRpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0aSA8XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdFx0XS5udW1iZXJPZkxlZnRPcHRpb25zO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRyb3Bab25lc1xyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29tbW9uUmlnaHRPcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vblJpZ2h0T3B0aW9uSW1hZ2VOYW1lLFxyXG5cdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGkgPFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdF0ubnVtYmVyT2ZSaWdodE9wdGlvbnM7XHJcblx0XHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3B0aW9uc05vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0c3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mUmlnaHRPcHRpb25zO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uaXNSaWdodE9wdGlvblRleHRcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ucmlnaHRvcHRpb25zW2ldLFxyXG5cdFx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnNOb2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0c3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMub3B0aW9uc05vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ucmlnaHRvcHRpb25zW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLm51bWJlck9mTGVmdE9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc0xlZnRPcHRpb25UZXh0XHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRdLmxlZnRvcHRpb25zW2ldLFxyXG5cdFx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRyb3Bab25lc1xyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRyb3Bab25lc1xyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS5sZWZ0b3B0aW9uc1tpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNhbGxUaGlyZE9iamVjdEluKCk7XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuXHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdCk7XHJcblx0XHRzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAyNTU7XHJcblx0XHQvLyB0aGlzLmFuc3dlckFycmF5ID0gW3N0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBbnN3ZXJOdW1dO1xyXG5cdFx0dGhpcy5hbnN3ZXJBcnJheVswXSA9IFwiMVwiO1xyXG5cdFx0Ly8gdGhpcy5PcHRpb25zTGF5b3V0KCk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIm11c2thYW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XHJcblx0XHRcdHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25OZWdhdGl2ZTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRTdWJzY3JpYmVFdmVudHMoKSB7XHJcblx0XHR0aGlzLmNvbGxpZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29sbGlkZXJcIik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyb3Bab25lcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmRyb3BwZWRCb29sW2ldID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdGVsZW1lbnRcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuc3Ryb2tlQ29sb3IgPSBlbGVtZW50LmNvbG9yO1xyXG5cdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwibGluZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpXHJcblx0XHRcdFx0Lm1vdmVUbygwLCAwKTtcclxuXHRcdFx0ZWxlbWVudFxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKVxyXG5cdFx0XHRcdC5saW5lVG8oMC4xLCAwKTtcclxuXHRcdFx0ZWxlbWVudFxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKVxyXG5cdFx0XHRcdC5saW5lVG8oLTAuMTEsIDApO1xyXG5cdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLnN0cm9rZSgpO1xyXG5cdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwibGluZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmxpbmVXaWR0aCA9IDEwO1xyXG5cclxuXHRcdFx0ZWxlbWVudC5vbihcclxuXHRcdFx0XHRcInRvdWNoc3RhcnRcIixcclxuXHRcdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XCJ0b3VjaG1vdmVcIixcclxuXHRcdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRoaXNcclxuXHRcdFx0KTtcclxuXHRcdFx0ZWxlbWVudC5vbihcclxuXHRcdFx0XHRcInRvdWNoZW5kXCIsXHJcblx0XHRcdFx0ZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHR0aGlzLlRvdWNoRW5kKGVsZW1lbnQsIGV2ZW50KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRoaXNcclxuXHRcdFx0KTtcclxuXHRcdFx0ZWxlbWVudC5vbihcclxuXHRcdFx0XHRcInRvdWNoY2FuY2VsXCIsXHJcblx0XHRcdFx0ZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHR0aGlzLlRvdWNoRW5kKGVsZW1lbnQsIGV2ZW50KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRoaXNcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZHJvcFpvbmVzLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0ZWxlbWVudFxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5zdHJva2VDb2xvciA9IGVsZW1lbnQuY29sb3I7XHJcblx0XHRcdGVsZW1lbnRcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5HcmFwaGljcylcclxuXHRcdFx0XHQubW92ZVRvKDAsIDApO1xyXG5cdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwibGluZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpXHJcblx0XHRcdFx0LmxpbmVUbygwLjEsIDApO1xyXG5cdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwibGluZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpXHJcblx0XHRcdFx0LmxpbmVUbygtMC4xMSwgMCk7XHJcblx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuc3Ryb2tlKCk7XHJcblx0XHRcdGVsZW1lbnRcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5HcmFwaGljcykubGluZVdpZHRoID0gMTA7XHJcblxyXG5cdFx0XHRlbGVtZW50Lm9uKFxyXG5cdFx0XHRcdFwidG91Y2hzdGFydFwiLFxyXG5cdFx0XHRcdGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0dGhpcy5Ub3VjaFN0YXJ0MShlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XCJ0b3VjaG1vdmVcIixcclxuXHRcdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuVG91Y2hNb3ZlMShlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XCJ0b3VjaGVuZFwiLFxyXG5cdFx0XHRcdGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0dGhpcy5Ub3VjaEVuZChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxyXG5cdFx0XHRcdGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0dGhpcy5Ub3VjaEVuZChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG5cdFx0X251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcblx0XHRyZXR1cm4gX251bWJlcjtcclxuXHR9XHJcblxyXG5cdEdlbmVyYXRlT3B0aW9ucygpIHtcclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0aSA8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5udW1iZXJPZkxlZnRPcHRpb25zO1xyXG5cdFx0XHRpKytcclxuXHRcdCkge1xyXG5cdFx0XHRsZXQgZHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcblx0XHRcdGRyb3BOb2RlLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdGRyb3BOb2RlLnNldFBhcmVudCh0aGlzLmRyb3Bab25lcyk7XHJcblx0XHRcdGRyb3BOb2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuXHRcdFx0ZHJvcE5vZGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0ubnVtYmVyT2ZSaWdodE9wdGlvbnM7XHJcblx0XHRcdGkrK1xyXG5cdFx0KSB7XHJcblx0XHRcdGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcblx0XHRcdG9wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG5cdFx0XHRvcHRpb24uc2V0UGFyZW50KHRoaXMub3B0aW9uc05vZGUpO1xyXG5cdFx0XHRvcHRpb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xyXG5cdFx0XHRvcHRpb24ub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJkcm9wWm9uZXMgPSBcIiwgdGhpcy5kcm9wWm9uZXMubmFtZSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbnNOb2RlID0gXCIsIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG5cdGNhbGxUaGlyZE9iamVjdEluKCkge1xyXG5cdFx0dGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuXHRcdC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikub3BhY2l0eSA9IDI1NTtcclxuXHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpXHJcblx0XHRcdC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0dGhpcy5ub2RlXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0ucXVlc3Rpb25UZXh0O1xyXG5cclxuXHRcdHRoaXMuT3B0aW9uc0xheW91dFZlcnRpY2FsKHRoaXMub3B0aW9uc05vZGUpO1xyXG5cdFx0dGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwodGhpcy5kcm9wWm9uZXMpO1xyXG5cdFx0dGhpcy5yZXZlcnNlT3B0aW9uc0xheW91dCh0aGlzLm9wdGlvbnNOb2RlKTtcclxuXHRcdHRoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQodGhpcy5kcm9wWm9uZXMpO1xyXG5cdFx0Ly8gbGV0IHBvc1ggPSAtMjM3O1xyXG5cdFx0Ly8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHQvLyAgICAgcG9zWCA9IC0zMDA7XHJcblx0XHQvLyB9XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRsZXQgZGVsYXkgPSAwLjU7XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuZHJvcFpvbmVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5kcm9wWm9uZXMuY2hpbGRyZW5baSAtIDFdLnNjYWxlID0gMDtcclxuXHRcdFx0XHR0aGlzLmRyb3Bab25lcy5jaGlsZHJlbltpIC0gMV0ub3BhY2l0eSA9IDI1NTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMuZHJvcFpvbmVzLmdldENoaWxkQnlOYW1lKGkudG9TdHJpbmcoKSkpXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSB0aGlzLmRyb3Bab25lcy5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcblx0XHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgZGVsYXkpO1xyXG5cdFx0XHRcdGRlbGF5ICs9IDAuMztcclxuXHRcdFx0fVxyXG5cdFx0fSwgMSk7XHJcblx0fVxyXG5cclxuXHRPblZPQnV0dG9uKCkge1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pXHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjYWxsT3B0aW9uSW4oKSB7XHJcblx0XHRsZXQgZGVsYXk6IG51bWJlciA9IDAuNTtcclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRlbGVtZW50LnNldFBvc2l0aW9uKDE5MCwgZWxlbWVudC5nZXRQb3NpdGlvbigpLnkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpIC0gMV0uc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2kgLSAxXS5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5vcHRpb25zTm9kZS5nZXRDaGlsZEJ5TmFtZShpLnRvU3RyaW5nKCkpKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLlN1YnNjcmliZUV2ZW50cygpO1xyXG5cdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0ZGVsYXkgKz0gMC4zO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UGxheUhhbmRBbmltYXRpb24oKSB7XHJcblx0XHRsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcblx0XHRsZXQgcG9zMTogY2MuVmVjMiA9IHRoaXMuZHJvcFpvbmVzLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0bGV0IHBvczI6IGNjLlZlYzIgPSB0aGlzLm9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0Ly8gaGFuZC5zZXRQYXJlbnQodGhpcy5kcm9wWm9uZXMuZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpKTtcclxuXHRcdGhhbmQuc2V0UG9zaXRpb24ocG9zMSk7XHJcblx0XHRjYy50d2VlbihoYW5kKVxyXG5cdFx0XHQudG8oMiwgeyB4OiBwb3MyLngsIHk6IHBvczIueSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRpZiAoaGFuZC5hY3RpdmVJbkhpZXJhcmNoeSAmJiBoYW5kLm9wYWNpdHkgPT0gMjU1KSB7XHJcblx0XHRcdFx0dGhpcy5QbGF5SGFuZEFuaW1hdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAyKTtcclxuXHR9XHJcblxyXG5cdFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG5cdFx0dGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblx0XHR0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2FuTW92ZSA9IHRydWU7XHJcblx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0XHQvLyBQTEFZIENPTk5FQ1QgSEFORCBBTklNQVRJT05cclxuXHRcdFx0XHR0aGlzLlBsYXlIYW5kQW5pbWF0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiXHJcblx0XHQpIHtcclxuXHRcdFx0bGV0IGludG9BbmltID0gXCJpbnRyb1wiO1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oNDUwLCAtMzcwKTtcclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRcdGludG9BbmltID0gXCJpbnRyb18xXCI7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDg3MCwgLTM3MCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGxjX2JpcmRGbHlpbmcsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgaW50b0FuaW0sIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Nb3ZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUExBWSBDT05ORUNUIEhBTkQgQU5JTUFUSU9OXHJcblx0XHRcdFx0XHRcdHRoaXMuUGxheUhhbmRBbmltYXRpb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fbG9vcFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fZW5kXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuTW92ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gUExBWSBDT05ORUNUIEhBTkQgQU5JTUFUSU9OXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLlBsYXlIYW5kQW5pbWF0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYWxsTmV4dExldmVsKCkge1xyXG5cdFx0aWYgKHRoaXMuYW5zd2VyZWRDb3VudCA+PSB0aGlzLnRvdGFsQW5zd2Vycykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcImxldmVsQ29tcGxldGUtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5jcmVhdGVTdGFyVHJhaWxzKDYsIHRoaXMubm9kZSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxTdGFyc0VhcmVkKCk7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbFxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcclxuXHRcdFx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0fSwgMS41KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpXHJcblx0XHRcdFx0LnRvKDEsIHsgeTogdGhpcy5xdWVzdGlvbkJveFBvc1kgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0dGhpcy5kcm9wWm9uZXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5vcHRpb25zTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic291bmRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3ZlcmxheVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3ZlcmxheVwiKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQubmFtZSAhPSBcImJnXCIpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuY2FuTW92ZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYWxsU3RhcnNFYXJlZCgpIHtcclxuXHRcdGlmICghdGhpcy5zdGFyMUxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0dGhpcy5zdGFyMUxvZyA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuc3RhcjJMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XHJcblx0XHRcdHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhdGhpcy5zdGFyM0xvZyAmJlxyXG5cdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWxcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLnN0YXIzTG9nID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbGxQb3NpdGl2ZVJlY3Rpb24oX25vZGUxOiBjYy5Ob2RlLCBfbm9kZTI6IGNjLk5vZGUpIHtcclxuXHRcdGxldCBfY2xvbmUxOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoX25vZGUxKTtcclxuXHRcdGxldCBfY2xvbmUyOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoX25vZGUyKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm92ZXJsYXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdF9jbG9uZTEuc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm92ZXJsYXlcIikpO1xyXG5cdFx0X2Nsb25lMi5zZXRQYXJlbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3ZlcmxheVwiKSk7XHJcblx0XHRfbm9kZTEuZGVzdHJveSgpO1xyXG5cdFx0X25vZGUyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuZHJvcFpvbmVzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5vcHRpb25zTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRjYy50d2VlbihfY2xvbmUxKVxyXG5cdFx0XHQudG8oMC41LCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNDAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX2Nsb25lMS5jaGlsZHJlblsxXSlcclxuXHRcdFx0LnRvKDAuNSwgeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDMyMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9jbG9uZTEuY2hpbGRyZW5bMV0pXHJcblx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy50d2VlbihfY2xvbmUxLmNoaWxkcmVuWzJdKVxyXG5cdFx0XHQudG8oMC41LCB7IHdpZHRoOiAzMjAsIGhlaWdodDogMzIwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX2Nsb25lMS5jaGlsZHJlblsyXSlcclxuXHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9jbG9uZTEpXHJcblx0XHRcdC50bygwLjUsIHsgeDogLTE2MCwgeTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHJcblx0XHRjYy50d2VlbihfY2xvbmUyKVxyXG5cdFx0XHQudG8oMC41LCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNDAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX2Nsb25lMi5jaGlsZHJlblsxXSlcclxuXHRcdFx0LnRvKDAuNSwgeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDMyMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9jbG9uZTIuY2hpbGRyZW5bMV0pXHJcblx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy50d2VlbihfY2xvbmUyLmNoaWxkcmVuWzJdKVxyXG5cdFx0XHQudG8oMC41LCB7IHdpZHRoOiAzMjAsIGhlaWdodDogMzIwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX2Nsb25lMi5jaGlsZHJlblsyXSlcclxuXHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9jbG9uZTIpXHJcblx0XHRcdC50bygwLjUsIHsgeDogMTYwLCB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0bGV0IGF1ZGlvTnVtOiBudW1iZXIgPSBwYXJzZUludChfY2xvbmUxLm5hbWUpO1xyXG5cdFx0XHRhdWRpb051bSAtPSAxO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImF1ZGlvIE51bWJlciA9IFwiLCBhdWRpb051bSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9bYXVkaW9OdW1dLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNhbGxKb2NrZXkoKTtcclxuXHRcdFx0fSwgMC43KTtcclxuXHRcdH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRjYWxsSm9ja2V5KCkge1xyXG5cdFx0bGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NzaXRpdmVcIixcclxuXHRcdFx0XHRcInBvc3NpdGl2ZTJcIixcclxuXHRcdFx0XHRcInBvc3NpdGl2ZTNcIixcclxuXHRcdFx0XHRcInBvc3NpdGl2ZTRcIixcclxuXHRcdFx0XHRcInBvc3NpdGl2ZTVcIixcclxuXHRcdFx0XHRcInBvc3NpdGl2ZTZcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNlwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIlxyXG5cdFx0KSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8xXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV80XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG5cdFx0XHRhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG5cdFx0XHRhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJib3lcIikge1xyXG5cdFx0XHRhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCJdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImdpcmxcIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNlwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcblx0XHRsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcclxuXHRcdGxldCBwb3M6IG51bWJlcltdID0gWy0xMjAwLCAxMjAwXTtcclxuXHRcdGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIlxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zY2FsZVggPSAtMC42NTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zY2FsZVggPSAwLjY1O1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0cG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSxcclxuXHRcdFx0XHQtMzUwXHJcblx0XHRcdCk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHQwLjUsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHg6IGpvY2tleXR3ZWVuW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0MC41LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHg6IHBvc1tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJcclxuXHRcdFx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIgJiZcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJQb2RhclwiXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsTmV4dExldmVsKCk7XHJcblx0XHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdH0sIDAuNSk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9iaXJkIGZseWluZyBvdXQgc291bmRcclxuXHRcdFx0XHRpZiAodGhpcy5hbnN3ZXJlZENvdW50ID49IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImludHJvX291dFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGxjX2JpcmRGbHlpbmcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oXCJpbnRyb19vdXRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMVwiIHx8XHJcblx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8yXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfUG9zMSxcclxuXHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIikge1xyXG5cdFx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1cGVyY3ViX1BvczIsXHJcblx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfZW5kXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5hbnN3ZXJlZENvdW50ID49IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50bygyLCB7IHg6IC0xMDAwIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYWxsTmV4dExldmVsKCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5hbnN3ZXJlZENvdW50ID49IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHRcdFx0XHQudG8oMiwgeyB4OiAtMTAwMCB9KVxyXG5cdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0aWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSA2KSB7XHJcblx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDE7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcdFwibmVnZXRpdmVcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJub1wiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1widHJ5X2FnYWluXCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XHRcdFx0XCJuZWdhdGl2ZV8yXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XHRcdFx0XCJuZWdhdGl2ZV81XCIsXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGFuaW0ubGVuZ3RoIC0gMVxyXG5cdFx0XHQpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleS5zY2FsZVggPSAwLjY1O1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImFkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDEyMDAsIC0zNTApO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgeDogNDAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcblx0XHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAxMjAwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiICYmXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW5Nb3ZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbk1vdmUgPSB0cnVlO1xyXG5cdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMVwiIHx8XHJcblx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzJcIlxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Ly9wbGF5IGJ1bGIgYnJlYWsgaWYgbmVlZGVkXHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbihcclxuXHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIixcclxuXHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oXHJcblx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9sb29wXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0cnVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLFxyXG5cdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8xXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfTmVnMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzJcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdXBlcmN1Yl9OZWcyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYW5Nb3ZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbk1vdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCAwLjcpO1xyXG5cclxuXHRcdGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggLSAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggKyAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggLSAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggKyAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LmNhbGwoKCkgPT4ge30pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0bG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0aW1hZ2VOYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG5cdFx0XHRjYy5TcHJpdGVGcmFtZSxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxvYWRBdWRpb0NsaXAoXHJcblx0XHRhdWRpb05hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG5cdFx0XHRjYy5BdWRpb0NsaXAsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0T3B0aW9uc0xheW91dFZlcnRpY2FsKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IF9ub2RlO1xyXG5cdFx0bGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcblx0XHRjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcblx0XHRsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG5cdFx0bGV0IG1heFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodCBhbmQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIG9wdGlvbnNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cdFx0XHRsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcblx0XHRcdGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuXHRcdFx0dG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0XHRpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xyXG5cdFx0XHRcdG1heFdpZHRoID0gb3B0aW9uV2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gb3B0aW9uc0xheW91dC5oZWlnaHQ7XHJcblx0XHRsZXQgdG90YWxIZWlnaHRXaXRoUGFkZGluZyA9XHJcblx0XHRcdHRvdGFsSGVpZ2h0ICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0bGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlSGVpZ2h0IC8gdG90YWxIZWlnaHRXaXRoUGFkZGluZyk7XHJcblxyXG5cdFx0bGV0IGFjY3VtdWxhdGVkSGVpZ2h0ID0gMDtcclxuXHJcblx0XHQvLyBQb3NpdGlvbiBlYWNoIG9wdGlvbiBub2RlIHZlcnRpY2FsbHlcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0bGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSB0aGUgb3B0aW9uXHJcblx0XHRcdG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0b3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcblx0XHRcdGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyBvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclk7XHJcblx0XHRcdG9wdGlvbi55ID0gcG9zWSAtIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZO1xyXG5cclxuXHRcdFx0YWNjdW11bGF0ZWRIZWlnaHQgKz0gb3B0aW9uLmhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHJcblx0XHRcdC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG5cdFx0XHRmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9uc0xheW91dC53aWR0aCA9IG1heFdpZHRoICogc2NhbGVGYWN0b3I7XHJcblx0fVxyXG5cclxuXHRyZXZlcnNlT3B0aW9uc0xheW91dChfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0bGV0IG9wdGlvbnNMYXlvdXQgPSBfbm9kZTtcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIG5ldyBwb3NpdGlvbnNcclxuXHRcdGxldCBuZXdQb3NpdGlvbnMgPSBbXTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcblx0XHRmb3IgKGxldCBpID0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0bmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b3B0aW9uTm9kZXNbaV0ueSA9IG5ld1Bvc2l0aW9uc1tpXTtcclxuXHRcdH1cclxuXHRcdGxldCBwb3MgPSBvcHRpb25zTGF5b3V0LmdldFBvc2l0aW9uKCk7XHJcblx0XHRvcHRpb25zTGF5b3V0LnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKG9wdGlvbk5vZGVzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1tpXS5zZXRQb3NpdGlvbihwb3MueCwgb3B0aW9uTm9kZXNbaV0ueSArIHBvcy55KTtcclxuXHRcdFx0fSBlbHNlIGlmIChvcHRpb25Ob2Rlcy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdG9wdGlvbk5vZGVzW2ldLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IF9wb2x5Z29uID0gb3B0aW9uTm9kZXNbaV0uZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcblx0XHRcdF9wb2x5Z29uLnBvaW50c1swXS54ID1cclxuXHRcdFx0XHQtb3B0aW9uTm9kZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikud2lkdGggLyAyO1xyXG5cdFx0XHRfcG9seWdvbi5wb2ludHNbMF0ueSA9XHJcblx0XHRcdFx0LW9wdGlvbk5vZGVzW2ldLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmhlaWdodCAvIDI7XHJcblx0XHRcdF9wb2x5Z29uLnBvaW50c1sxXS54ID1cclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1tpXS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS53aWR0aCAvIDI7XHJcblx0XHRcdF9wb2x5Z29uLnBvaW50c1sxXS55ID1cclxuXHRcdFx0XHQtb3B0aW9uTm9kZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuaGVpZ2h0IC8gMjtcclxuXHRcdFx0X3BvbHlnb24ucG9pbnRzWzJdLnggPVxyXG5cdFx0XHRcdG9wdGlvbk5vZGVzW2ldLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLndpZHRoIC8gMjtcclxuXHRcdFx0X3BvbHlnb24ucG9pbnRzWzJdLnkgPVxyXG5cdFx0XHRcdG9wdGlvbk5vZGVzW2ldLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmhlaWdodCAvIDI7XHJcblx0XHRcdF9wb2x5Z29uLnBvaW50c1szXS54ID1cclxuXHRcdFx0XHQtb3B0aW9uTm9kZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikud2lkdGggLyAyO1xyXG5cdFx0XHRfcG9seWdvbi5wb2ludHNbM10ueSA9XHJcblx0XHRcdFx0b3B0aW9uTm9kZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuaGVpZ2h0IC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoX25vZGUubmFtZSA9PSB0aGlzLm9wdGlvbnNOb2RlLm5hbWUpIHtcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnNcclxuXHRcdFx0Y29uc3Qgb3JpZ2luYWxQb3NpdGlvbnMgPSBbXTtcclxuXHJcblx0XHRcdC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMgb2YgdGhlIGNoaWxkcmVuIG5vZGVzXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRvcmlnaW5hbFBvc2l0aW9ucy5wdXNoKGNoaWxkcmVuW2ldLnBvc2l0aW9uLmNsb25lKCkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBTaHVmZmxlIHRoZSBwb3NpdGlvbnMgcmFuZG9tbHlcclxuXHRcdFx0Zm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuXHRcdFx0XHRjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcblx0XHRcdFx0Y29uc3QgdGVtcCA9IGNoaWxkcmVuW2ldLnBvc2l0aW9uLmNsb25lKCk7XHJcblx0XHRcdFx0Y2hpbGRyZW5baV0uc2V0UG9zaXRpb24oY2hpbGRyZW5bal0ucG9zaXRpb24pO1xyXG5cdFx0XHRcdGNoaWxkcmVuW2pdLnNldFBvc2l0aW9uKHRlbXApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRUb3VjaFN0YXJ0KF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG5cdFx0aWYgKCF0aGlzLmNhbk1vdmUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG5cdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDA7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwibW92ZW1lbnQgZml4IHN0YXJ0IDogXCIsdGhpcy5kcm9wWm9uZXMuZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpKTtcclxuXHRcdGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuXHRcdFx0dGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblx0XHR9XHJcblx0XHR2YXIgZGVsdGF4ID0gX2V2ZW50LnRvdWNoLmdldExvY2F0aW9uWCgpO1xyXG5cdFx0dmFyIGRlbHRheSA9IF9ldmVudC50b3VjaC5nZXRMb2NhdGlvblkoKTtcclxuXHRcdHRoaXMuY29sbGlkZXIuc2V0UG9zaXRpb24oZGVsdGF4IC0gNjQwLCBkZWx0YXkgLSA0MDApO1xyXG5cdFx0dGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcblx0XHR0aGlzLnRvdWNoZXMucHVzaChfZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblx0XHRpZiAoX25vZGUuZ2V0UGFyZW50KCkgPT0gdGhpcy5vcHRpb25zTm9kZSkge1xyXG5cdFx0XHR0aGlzLmNhbk1vdmUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRUb3VjaE1vdmUoX25vZGU6IGNjLk5vZGUsIF9ldmVudDogYW55KSB7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIlRvdWNoIG1vdmUgOiBcIik7XHJcblx0XHRpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcblx0XHRcdHZhciBkZWx0YSA9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpO1xyXG5cclxuXHRcdFx0dGhpcy5jb2xsaWRlci54ICs9IGRlbHRhLng7XHJcblx0XHRcdHRoaXMuY29sbGlkZXIueSArPSBkZWx0YS55O1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoZXMgPSB0aGlzLnRvdWNoZXM7XHJcblx0XHRcdHRvdWNoZXMucHVzaChfZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblxyXG5cdFx0XHRjb25zdCBNSU5fUE9JTlRfRElTVEFOQ0UgPSAyO1xyXG5cdFx0XHRsZXQgZ3JhcGhpY3MgPSBfbm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuXHRcdFx0Z3JhcGhpY3MuY2xlYXIoKTtcclxuXHRcdFx0bGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcclxuXHRcdFx0XHRjYy52Mihfbm9kZS5nZXRQb3NpdGlvbigpLngsIF9ub2RlLmdldFBvc2l0aW9uKCkueSlcclxuXHRcdFx0KTtcclxuXHRcdFx0Z3JhcGhpY3MubW92ZVRvKFxyXG5cdFx0XHRcdHRvdWNoZXNbMF0ueCAtIHdvcmxkUG9zLngsXHJcblx0XHRcdFx0dG91Y2hlc1swXS55IC0gd29ybGRQb3MueVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRsZXQgbGFzdEluZGV4ID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDEsIGwgPSB0b3VjaGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHRvdWNoZXNbaV0uc3ViKHRvdWNoZXNbbGFzdEluZGV4XSkubWFnKCkgPFxyXG5cdFx0XHRcdFx0TUlOX1BPSU5UX0RJU1RBTkNFXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGFzdEluZGV4ID0gaTtcclxuXHRcdFx0fVxyXG5cdFx0XHRncmFwaGljcy5saW5lVG8oXHJcblx0XHRcdFx0dG91Y2hlc1tsYXN0SW5kZXhdLnggLSB3b3JsZFBvcy54LFxyXG5cdFx0XHRcdHRvdWNoZXNbbGFzdEluZGV4XS55IC0gd29ybGRQb3MueVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Z3JhcGhpY3Muc3Ryb2tlKCk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJvcFpvbmVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIF9ub2RlV29ybGRTcGFjZVBvcyA9IF9ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcblx0XHRcdFx0XHR0aGlzLmNvbGxpZGVyLmdldFBvc2l0aW9uKClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHZhciBfYWN0dWFsUG9zaXRpb24gPVxyXG5cdFx0XHRcdFx0dGhpcy5kcm9wWm9uZXMuY2hpbGRyZW5baV0uY29udmVydFRvTm9kZVNwYWNlQVIoXHJcblx0XHRcdFx0XHRcdF9ub2RlV29ybGRTcGFjZVBvc1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24oXHJcblx0XHRcdFx0XHRcdG5ldyBjYy5WZWMyKF9hY3R1YWxQb3NpdGlvbi54LCBfYWN0dWFsUG9zaXRpb24ueSksXHJcblx0XHRcdFx0XHRcdHRoaXMuZHJvcFpvbmVzLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcclxuXHRcdFx0XHRcdFx0XHRjYy5Qb2x5Z29uQ29sbGlkZXJcclxuXHRcdFx0XHRcdFx0KS5wb2ludHNcclxuXHRcdFx0XHRcdCkgJiZcclxuXHRcdFx0XHRcdCghdGhpcy5kcm9wcGVkQm9vbFtpXSB8fFxyXG5cdFx0XHRcdFx0XHRfbm9kZS5uYW1lID09IHRoaXMuZHJvcFpvbmVzLmNoaWxkcmVuW2ldLm5hbWUpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiaW5zaWRlIHRvdWNoIG1vdmUgQEBAQEBAQFwiKVxyXG5cdFx0XHRcdFx0dGhpcy5GZWVkYmFjayhfbm9kZSwgdGhpcy5kcm9wWm9uZXMuY2hpbGRyZW5baV0sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuY29sbGlkZXIuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyh0aGlzLmRyb3Bab25lcy5jaGlsZHJlbltpXS5nZXRQb3NpdGlvbigpKSkge1xyXG5cdFx0XHRcdC8vICAgICB0aGlzLkZlZWRiYWNrKF9ub2RlLCB0aGlzLmRyb3Bab25lcy5jaGlsZHJlbltpXSwgaSk7XHJcblx0XHRcdFx0Ly8gICAgIHRoaXMuY2FuTW92ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vICAgICBicmVhaztcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFRvdWNoRW5kKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG5cdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cdFRvdWNoU3RhcnQxKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG5cdFx0aWYgKCF0aGlzLmNhbk1vdmUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG5cdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDA7XHJcblx0XHR2YXIgZGVsdGF4ID0gX2V2ZW50LnRvdWNoLmdldExvY2F0aW9uWCgpO1xyXG5cdFx0dmFyIGRlbHRheSA9IF9ldmVudC50b3VjaC5nZXRMb2NhdGlvblkoKTtcclxuXHRcdHRoaXMuY29sbGlkZXIuc2V0UG9zaXRpb24oZGVsdGF4IC0gNjQwLCBkZWx0YXkgLSA0MDApO1xyXG5cdFx0dGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcblx0XHR0aGlzLnRvdWNoZXMucHVzaChfZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblx0XHRpZiAoX25vZGUuZ2V0UGFyZW50KCkgPT0gdGhpcy5kcm9wWm9uZXMpIHtcclxuXHRcdFx0dGhpcy5jYW5Nb3ZlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2FuTW92ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0VG91Y2hNb3ZlMShfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcclxuXHRcdGlmICh0aGlzLmNhbk1vdmUpIHtcclxuXHRcdFx0dmFyIGRlbHRhID0gX2V2ZW50LnRvdWNoLmdldERlbHRhKCk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbGxpZGVyLnggKz0gZGVsdGEueDtcclxuXHRcdFx0dGhpcy5jb2xsaWRlci55ICs9IGRlbHRhLnk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2hlcyA9IHRoaXMudG91Y2hlcztcclxuXHRcdFx0dG91Y2hlcy5wdXNoKF9ldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuXHJcblx0XHRcdGNvbnN0IE1JTl9QT0lOVF9ESVNUQU5DRSA9IDI7XHJcblx0XHRcdGxldCBncmFwaGljcyA9IF9ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwibGluZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cdFx0XHRncmFwaGljcy5jbGVhcigpO1xyXG5cdFx0XHRsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG5cdFx0XHRcdGNjLnYyKF9ub2RlLmdldFBvc2l0aW9uKCkueCwgX25vZGUuZ2V0UG9zaXRpb24oKS55KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRncmFwaGljcy5tb3ZlVG8oXHJcblx0XHRcdFx0dG91Y2hlc1swXS54IC0gd29ybGRQb3MueCxcclxuXHRcdFx0XHR0b3VjaGVzWzBdLnkgLSB3b3JsZFBvcy55XHJcblx0XHRcdCk7XHJcblx0XHRcdGxldCBsYXN0SW5kZXggPSAwO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMSwgbCA9IHRvdWNoZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0dG91Y2hlc1tpXS5zdWIodG91Y2hlc1tsYXN0SW5kZXhdKS5tYWcoKSA8XHJcblx0XHRcdFx0XHRNSU5fUE9JTlRfRElTVEFOQ0VcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsYXN0SW5kZXggPSBpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdyYXBoaWNzLmxpbmVUbyhcclxuXHRcdFx0XHR0b3VjaGVzW2xhc3RJbmRleF0ueCAtIHdvcmxkUG9zLngsXHJcblx0XHRcdFx0dG91Y2hlc1tsYXN0SW5kZXhdLnkgLSB3b3JsZFBvcy55XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRncmFwaGljcy5zdHJva2UoKTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIF9ub2RlV29ybGRTcGFjZVBvcyA9IF9ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcblx0XHRcdFx0XHR0aGlzLmNvbGxpZGVyLmdldFBvc2l0aW9uKClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHZhciBfYWN0dWFsUG9zaXRpb24gPVxyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuXHRcdFx0XHRcdFx0X25vZGVXb3JsZFNwYWNlUG9zXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihcclxuXHRcdFx0XHRcdFx0bmV3IGNjLlZlYzIoX2FjdHVhbFBvc2l0aW9uLngsIF9hY3R1YWxQb3NpdGlvbi55KSxcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0Y2MuUG9seWdvbkNvbGxpZGVyXHJcblx0XHRcdFx0XHRcdCkucG9pbnRzXHJcblx0XHRcdFx0XHQpICYmXHJcblx0XHRcdFx0XHQoIXRoaXMuZHJvcHBlZEJvb2xbaV0gfHxcclxuXHRcdFx0XHRcdFx0X25vZGUubmFtZSA9PSB0aGlzLmRyb3Bab25lcy5jaGlsZHJlbltpXS5uYW1lKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5GZWVkYmFjayh0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLCBfbm9kZSwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbk1vdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBpZiAodGhpcy5jb2xsaWRlci5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0uZ2V0UG9zaXRpb24oKSkpIHtcclxuXHRcdFx0XHQvLyAgICAgdGhpcy5GZWVkYmFjayh0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLCBfbm9kZSwgaSk7XHJcblx0XHRcdFx0Ly8gICAgIHRoaXMuY2FuTW92ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vICAgICBicmVhaztcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEZlZWRiYWNrKF9ub2RlOiBjYy5Ob2RlLCBfZHJvcE5vZGU6IGNjLk5vZGUsIG51bWJlcjogbnVtYmVyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImZlZWRiYWNrIGNhbGxlZCEhISEhXCIpO1xyXG5cdFx0dGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblx0XHRpZiAoX25vZGUubmFtZSA9PSBfZHJvcE5vZGUubmFtZSkge1xyXG5cdFx0XHR0aGlzLmFuc3dlcmVkQ291bnQrKztcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSlcclxuXHRcdFx0XHQudG8oMSwgeyB5OiAxNTAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuY2FsbFBvc2l0aXZlUmVjdGlvbihfZHJvcE5vZGUsIF9ub2RlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19
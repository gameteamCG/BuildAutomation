
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e3bW8I6hEkIM7HA9hU+qv', 'GameManager');
// Games/ArcheryGame/scripts/GameManager.ts

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
var JockeyController_1 = require("../../MainAssets/Scripts/JockeyController");
var Constants_1 = require("../utils/Constants");
var EventSystem_1 = require("../utils/EventSystem");
var Target_1 = require("./Target");
var globalVariables_1 = require("./globalVariables");
var AudioType;
(function (AudioType) {
    AudioType[AudioType["POSITIVE"] = 0] = "POSITIVE";
    AudioType[AudioType["NEGATIVE"] = 1] = "NEGATIVE";
})(AudioType || (AudioType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bridgeAppearSFX = null;
        _this.runningSFX = null;
        _this.wrongSFX = null;
        _this.targetHitSFX = null;
        _this.playerNode = null;
        _this.upDownAnim = null;
        _this.realArrow = null;
        _this.fakeArrowNode = null;
        _this.inputBlocker = null;
        _this.trajectoryNode = null;
        _this.questionLabel = null;
        _this.targets = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.audioSrc = null;
        _this.spineAnim = null;
        _this.scoreLabel = null;
        _this.trajLimit = null;
        _this.arrowHead = null;
        _this.trajectoryGrav = 1;
        _this.handIdleFrame = null;
        _this.handHoldFrame = null;
        _this.bowSpriteFrames = [];
        _this.arrowSpriteFrames = [];
        _this.backgroundSpriteFrames = [];
        _this.roughAreaNode = null;
        _this.bgNode = null;
        _this.questionSound = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.podarPositive = [];
        _this.podarNegative = [];
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.clockTick = null;
        _this.targetNode = null;
        _this.targetInitPos = null;
        _this.tutorialHand = null;
        _this.currLevel = 1;
        _this.questionSum = 0;
        _this.score = 0;
        _this.TotalOptions = 3;
        _this.optionsNode = null;
        _this.maxLevel = 1;
        _this.answerNum = 0;
        _this.tempname = "ABCD";
        _this.canTouch = false;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.defaultTime = 30;
        // @property(cc.Node)
        // public containerNode: cc.Node = null;
        _this.realArrowInstance = null;
        _this.power = 1000; // fixed, can be changed later
        _this.arrowRigidBody = null;
        _this.launch = false;
        _this.mainBgSprite = null;
        _this.playerAnim = null;
        _this.correctAudio = [];
        _this.currentJcokey = null;
        _this.timer = 0;
        _this.levelend = false;
        _this.lives = 3;
        _this.gameStarted = false;
        return _this;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.generateQuestion = function () {
        var num1 = Math.floor(Math.random() * 50);
        var num2 = Math.floor(Math.random() * 50);
        this.questionSum = num1 + num2;
        this.questionLabel.string = num1 + " + " + num2 + " = ?";
        this.createOptions();
    };
    GameManager.prototype.onLoad = function () {
        var _this = this;
        console.log("onload@@@@@@@@@@@@@@");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1, false);
        cc.director.getPhysicsManager().enabled = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.playerAnim = this.playerNode.getComponent(cc.Animation);
        EventSystem_1.default.on(Constants_1.GAME_EVENTS.HIT, this.onHit, this);
        EventSystem_1.default.on(Constants_1.GAME_EVENTS.MISS, this.onMiss, this);
        //this.generateQuestion();
        this.score = 0;
        this.arrowHead.active = false;
        this.tutorialHand = cc.find("Canvas/Gameplay/TutorialHand");
        cc.director.preloadScene("gameEnd");
        this.targetNode = cc.find("Canvas/Gameplay/Target");
        this.targetInitPos = this.targetNode.position;
        this.roughAreaNode.active = false;
        this.mainBgSprite = this.bgNode.getComponent(cc.Sprite);
        this.questionLabel.string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        // new code
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font =
                this.podar_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font =
                this.jaipuria_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.jaipuria_font;
            });
        }
        this.optionsNode = this.node.getChildByName("Target");
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
        //   this.answerArray[i] = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i];
        // }
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
            .correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("CorrectAnswer : ", this.answerNum, globalVariables_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_1 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
                console.log("QuestionSound onload: ", _this.questionSound[0]);
            });
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_2.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_2(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (AudioClip) {
                _this.correctAudio[0] = AudioClip;
            });
        }
        this.currentJcokey = StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJcokey.active = true;
    };
    GameManager.prototype.start = function () {
        var _this = this;
        this.startingMovement();
        console.log("start@@@@@@@@@@@@@@");
        this.value = this.node
            .getChildByName("timer")
            .getChildByName("timer1")
            .getComponent(cc.Sprite).fillRange;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        if (StartGame_1.default.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.positiveAudio = this.podarPositive;
            this.negativeAudio = this.podarNegative;
        }
        //this.playTutorialAnim();
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questionSound[0], false);
            _this.scheduleOnce(function () {
                _this.schedule(function () {
                    if (!this.levelend) {
                        this.timer += 1;
                    }
                }, 1);
                _this.gameStarted = true;
                _this.clocktick = cc.audioEngine.playEffect(_this.clockTick, true);
                _this.node.getChildByName("TutorialHand").active = true;
            }, _this.questionSound[0].duration);
        }, 1);
    };
    GameManager.prototype.setQuestionScreen = function () {
        var _this = this;
        this.node.getChildByName("Target").children.forEach(function (element) {
            element.getChildByName("text").getComponent(cc.Label).string = "";
            if (element.getChildByName("img").getComponent(cc.Sprite).spriteFrame) {
                element.getChildByName("img").getComponent(cc.Sprite).spriteFrame =
                    null;
            }
        });
        this.questionLabel.string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_3.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_3 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_3(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_4.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_4.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (AudioClip) {
                _this.correctAudio[0] = AudioClip;
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@", _this.correctAudio[0]);
            });
        }
        this.currentJcokey = StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questionSound[0], false);
            _this.scheduleOnce(function () {
                _this.levelend = false;
                _this.gameStarted = true;
                _this.resetTimer();
                _this.clocktick = cc.audioEngine.playEffect(_this.clockTick, true);
            }, _this.questionSound[0].duration);
        }, 1);
    };
    GameManager.prototype.genRandomNumber = function (low, high) {
        var min = Math.ceil(low);
        var max = Math.floor(high);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // can define other upper limit here
        return randomNumber;
    };
    GameManager.prototype.startingMovement = function () {
        var _this = this;
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        var id = cc.audioEngine.playEffect(this.runningSFX, false);
        cc.tween(this.playerNode)
            .to(1, { position: cc.v3(-419, -85, 0) }, { easing: "quartOut" })
            .call(function () {
            cc.audioEngine.stop(id);
        })
            // .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
            .start();
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
        }, 0.5);
    };
    GameManager.prototype.movePlayer = function () {
        var _this = this;
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        var id = cc.audioEngine.playEffect(this.runningSFX, false);
        cc.tween(this.playerNode)
            .by(0.25, { position: cc.v3(100, 0, 0) }, { easing: "quartOut" })
            .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
            .call(function () {
            cc.audioEngine.stop(id);
        })
            .start();
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
        }, 0.5);
    };
    GameManager.prototype.playSpineAnimAndIdle = function (animName, num, isCorrect) {
        var _this = this;
        this.spineAnim.setAnimation(0, "" + animName + num, false);
        this.spineAnim.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "" + animName + num) {
                // Play the idle animation (e.g., 'idle') once the primary animation completes
                _this.spineAnim.setAnimation(0, "idle", true);
                if (isCorrect) {
                    _this.levelend = true;
                    _this.gameStarted = false;
                    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", _this.levelend);
                    globalVariables_1.default.Instance.currentLevel++;
                    _this.setQuestionScreen();
                    _this.panning(); // contains all panning logic and stuff
                    _this.toggleFakeArrowVisibility(true);
                    //cc.director.loadScene("1");
                }
                // this.inputBlocker.active = false;
                _this.playerAnim.play();
                _this.scheduleOnce(function () {
                    _this.playerAnim.pause();
                }, 0.01);
                _this.toggleFakeArrowVisibility(true);
                if (!isCorrect) {
                    _this.inputBlocker.active = false;
                    _this.resetTargetColors();
                }
                // ideally fake arrow visibility should be toggled here, but let's see
            }
        });
    };
    GameManager.prototype.resetTargetColors = function () {
        this.targets.forEach(function (target) { return target.setDefColor(); });
    };
    GameManager.prototype.updateScore = function () {
        this.score++;
        this.scoreLabel.string = this.score.toFixed();
    };
    GameManager.prototype.createOptions = function () {
        var options = [];
        options[0] = this.questionSum;
        do {
            options[1] = this.genRandomNumber(1, 50);
        } while (options[1] === this.questionSum);
        do {
            options[2] = this.genRandomNumber(1, 50);
        } while (options[2] === options[1] || options[2] === this.questionSum);
        console.log("original array", options);
        var shuffledArr = this.shuffleOptions(__spreadArrays(options));
        console.log("shuffled array", shuffledArr);
        for (var i = 0; i < 3; i++) {
            this.targets[i].setValue(shuffledArr[i]);
        }
    };
    GameManager.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GameManager.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GameManager.prototype.openRoughArea = function () {
        this.roughAreaNode.active = true;
        GameManager_1.roughSheetMode = true;
    };
    GameManager.prototype.changeBowAndArrowSprite = function () {
        var bow = this.playerNode.getChildByName("Bow");
        var arrow = this.playerNode.getChildByName("FakeArrow");
        bow.getComponent(cc.Sprite).spriteFrame =
            this.bowSpriteFrames[this.currLevel - 1];
        arrow.getComponent(cc.Sprite).spriteFrame =
            this.arrowSpriteFrames[this.currLevel - 1];
    };
    GameManager.prototype.shuffleOptions = function (arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
        return arr;
    }; // Fisher Yates Shuffle for shuffling the options
    GameManager.prototype.afterReaction = function () {
        var _this = this;
        //console.log("this.node @@@@@@@", this.node)
        this.playerNode = this.node.getChildByName("Player");
        this.playerAnim = this.playerNode.getComponent(cc.Animation);
        this.playerAnim.play();
        this.scheduleOnce(function () {
            _this.playerAnim.pause();
        }, 0.01);
        this.toggleFakeArrowVisibility(true);
        this.inputBlocker.active = false;
        this.resetTargetColors();
    };
    GameManager.prototype.onHit = function (targetNode) {
        var _this = this;
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
            .correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("onHit targetNode : ", targetNode.value);
        console.log("onHit answerNum : ", this.questionSum);
        // this.commonActions();
        this.toggleLaunch(false);
        this.unschedule(this.changeArrowAngle);
        cc.audioEngine.playEffect(this.targetHitSFX, false);
        if (targetNode.value === this.questionSum) {
            console.log("Hooray, correct answer");
            //this.onRightAnswer();
            // let num = this.genRandomNumber(1, 10);
            // this.playSpineAnimAndIdle("positive_", num, true);
            // this.playAudio(AudioType.POSITIVE, num);
            //console.log("globalVariables.Instance.currentLevel #######", globalVariables.Instance.currentLevel)
            cc.audioEngine.playEffect(this.correctAudio[0], false);
            this.levelend = true;
            this.gameStarted = false;
            cc.audioEngine.stop(this.clocktick);
            this.updateScore();
            targetNode.setColor(cc.Color.GREEN);
            this.scheduleOnce(function () {
                _this.afterReaction();
            }, 2);
            this.scheduleOnce(function () {
                _this.callJockey();
            }, this.correctAudio[0].duration);
        }
        else {
            console.log("oh wrong answer, try again");
            // let num = this.genRandomNumber(1, 7);
            // this.playSpineAnimAndIdle("negative_", num, false);
            // this.playAudio(AudioType.NEGATIVE, num);
            this.canTouch = false;
            targetNode.setColor(cc.Color.RED);
            this.afterReaction();
            this.callNegativeRection();
        }
        this.destroyArrow(1);
    };
    GameManager.prototype.callJockey = function () {
        var _this = this;
        JockeyController_1.default.JOCKEY.callJockey(JockeyController_1.JOCKEY_TYPE.POSITIVE, function () {
            _this.callNextLevel();
        });
        return;
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
            ];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idel", true);
        }
        else {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
        }
        this.currentJcokey
            .getComponent(sp.Skeleton)
            .setAnimation(0, anim[currentClipNum], false);
        cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
            else {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            //console.log("characterDisappear--Podar_Jumbo");
            _this.callNextLevel();
        }, this.positiveAudio[currentClipNum].duration);
    };
    GameManager.prototype.callNextLevel = function () {
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        this.currLevel++;
        globalVariables_1.default.Instance.currentLevel++;
        ProgressBar_1.default.Instance.ProgressFill(this.currLevel - 1, false);
        console.log("this.currLevel : ", this.currLevel);
        if (this.currLevel >= StartGame_1.default.Instance.questions.length + 1) {
            console.log("endgame reached");
            this.inputBlocker.active = true;
            this.scheduleOnce(function () {
                cc.director.loadScene("gameEnd");
            }, 2);
        }
        else {
            this.setQuestionScreen();
            this.panning(); // contains all panning logic and stuff
        }
        this.toggleFakeArrowVisibility(true);
    };
    GameManager.prototype.callStarsEared = function () {
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
    GameManager.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    GameManager.prototype.callNegativeRection = function () {
        var _this = this;
        this.reduceLife();
        this.canTouch = false;
        //_node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        this.scheduleOnce(function () {
            JockeyController_1.default.JOCKEY.callJockey(JockeyController_1.JOCKEY_TYPE.NEGATIVE, function () {
                _this.canTouch = true;
            });
            // let anim: string[] = [];
            // if (startGame.Instance.jockeyName == "Podar") {
            //   anim = [
            //     "negetive",
            //     "negetive2",
            //     "negetive3",
            //     "negetive4",
            //     "negetive5",
            //     "negetive6",
            //   ];
            // } else if (startGame.Instance.jockeyName == "bag") {
            //   anim = ["negative_1", "negative_2", "negative_3"];
            // } else if (startGame.Instance.jockeyName == "cryon") {
            //   anim = ["negative_1", "negative_2", "negative_3"];
            // } else if (startGame.Instance.jockeyName == "Singham") {
            //   anim = ["no"];
            // } else if (startGame.Instance.jockeyName == "Mighty_Raju") {
            //   anim = ["try_again"];
            // } else if (startGame.Instance.jockeyName == "Puzzle") {
            //   anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            // }
            // let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            // if (startGame.Instance.jockeyName == "Podar") {
            //   this.currentJcokey
            //     .getComponent(sp.Skeleton)
            //     .setAnimation(0, "idel", true);
            // } else {
            //   this.currentJcokey
            //     .getComponent(sp.Skeleton)
            //     .setAnimation(0, "idle", true);
            // }
            // this.currentJcokey
            //   .getComponent(sp.Skeleton)
            //   .setAnimation(0, anim[currentClipNum], false);
            // cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
            // this.scheduleOnce(() => {
            //   if (startGame.Instance.jockeyName == "Podar") {
            //     this.currentJcokey
            //       .getComponent(sp.Skeleton)
            //       .setAnimation(0, "idel", true);
            //   } else {
            //     this.currentJcokey
            //       .getComponent(sp.Skeleton)
            //       .setAnimation(0, "idle", true);
            //   }
            //   this.canTouch = true;
            // }, this.negativeAudio[currentClipNum].duration);
        }, 0.7);
    };
    GameManager.prototype.onRightAnswer = function () {
        this.currLevel++;
        globalVariables_1.default.Instance.currentLevel++;
        ProgressBar_1.default.Instance.ProgressFill(this.currLevel, false);
        console.log("this.currLevel : ", this.currLevel);
        if (this.currLevel >= StartGame_1.default.Instance.questions.length + 1) {
            console.log("endgame reached");
            this.inputBlocker.active = true;
            this.scheduleOnce(function () {
                cc.director.loadScene("gameEnd");
            }, 2);
        }
        else {
            this.setQuestionScreen();
        }
        this.panning();
        this.toggleFakeArrowVisibility(true);
    };
    GameManager.prototype.destroyArrow = function (offset) {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.realArrowInstance != null) {
                _this.realArrowInstance.destroy();
                _this.realArrowInstance = null;
            }
        }, offset);
    };
    GameManager.prototype.panning = function () {
        // contains all the panning functions and methods
        var _this = this;
        cc.tween(this.node.getChildByName("Target"))
            .to(0.2, { opacity: 0 }, { easing: "smooth" })
            .start();
        this.node.getChildByName("BridgeComplete").active = true;
        this.node.getChildByName("BridgeComplete").opacity = 0;
        cc.audioEngine.playEffect(this.bridgeAppearSFX, false);
        cc.tween(this.node.getChildByName("BridgeComplete"))
            .to(1, { opacity: 255 }, { easing: "smooth" })
            .call(function () {
            _this.panBridge();
            _this.panBackground();
            _this.movePlayer();
            _this.panTarget();
        })
            .start();
        // this.changeBowAndArrowSprite();
    };
    GameManager.prototype.panBridge = function () {
        var bridge = this.node.getChildByName("Bridge");
        var bridge2 = this.node.getChildByName("BridgeComplete");
        var bridge_init_pos = bridge.getPosition();
        var bridge2_init_pos = bridge2.getPosition();
        cc.tween(bridge)
            .to(0.5, { x: -1500 }, { easing: "quartOut" })
            .call(function () {
            bridge.setPosition(bridge_init_pos);
        })
            .start();
        cc.tween(bridge2)
            .to(0.5, { x: bridge_init_pos.x }, { easing: "quartOut" })
            .call(function () {
            bridge2.setPosition(bridge2_init_pos);
            bridge2.active = false;
        })
            .start();
    };
    GameManager.prototype.panBackground = function () {
        var _this = this;
        var clone1 = cc.instantiate(this.bgNode);
        var clone2 = cc.instantiate(this.bgNode);
        this.bgNode.addChild(clone1);
        this.bgNode.addChild(clone2);
        clone2.position = new cc.Vec3(1920, 0);
        var comp2 = clone2.getComponent(cc.Sprite);
        //comp2.spriteFrame = this.backgroundSpriteFrames[this.currLevel - 1];
        comp2.spriteFrame = this.node
            .getChildByName("bg")
            .getComponent(cc.Sprite).spriteFrame;
        cc.tween(clone1)
            .to(0.5, { position: new cc.Vec3(-1920, 0) }, { easing: "quartOut" })
            .call(function () {
            clone1.destroy();
        })
            .start();
        cc.tween(clone2)
            .to(0.5, { position: new cc.Vec3(0, 0) }, { easing: "quartOut" })
            .call(function () {
            _this.mainBgSprite.spriteFrame = _this.node
                .getChildByName("bg")
                .getComponent(cc.Sprite).spriteFrame;
            _this.changeBowAndArrowSprite();
            clone2.destroy();
        })
            .start();
    };
    GameManager.prototype.panTarget = function () {
        var _this = this;
        var TargetEndPos = cc.find("Canvas/Gameplay/TargetEndPos");
        var TargetStartPos = cc.find("Canvas/Gameplay/TargetStartPos");
        cc.tween(this.targetNode)
            .call(function () {
            _this.targets.forEach(function (target) { return (target.node.active = false); });
        })
            .to(0.5, { position: TargetEndPos.position }, { easing: "quartOut" })
            .call(function () {
            _this.node.getChildByName("Target").opacity = 255;
            _this.targetNode.position = TargetStartPos.position;
        })
            .delay(0.2)
            .to(0.5, { position: this.targetInitPos }, { easing: "quartOut" })
            .call(function () {
            _this.node.getChildByName("Target").opacity = 255;
            _this.targets.forEach(function (target) { return (target.node.active = true); });
            _this.inputBlocker.active = false;
        })
            .start();
    };
    // public commonActions() {
    //   this.currLevel++;
    //   // *EXTERNAL
    //   ProgressBar.Instance.ProgressFill(this.currLevel, false);
    //   if (this.currLevel >= startGame.Instance.TotalLevels) {
    //     console.log("endgame reached");
    //     this.inputBlocker.active = true;
    //     this.scheduleOnce(() => {
    //       cc.director.loadScene("gameEnd");
    //     }, 2);
    //   }
    //   // this.scheduleOnce(() => {
    //   //   this.toggleFakeArrowVisibility(true);
    //   //   // this.inputBlocker.active = false;
    //   //   // this.generateQuestion();
    //   // }, 1);
    // }
    GameManager.prototype.onMiss = function () {
        var _this = this;
        // this.commonActions();
        this.scheduleOnce(function () {
            _this.toggleLaunch(false);
            _this.unschedule(_this.changeArrowAngle);
        }, 2);
        var num = this.genRandomNumber(1, 7);
        // this.playSpineAnimAndIdle("negative_", num, false);
        // this.playAudio(AudioType.NEGATIVE, num);
        this.afterReaction();
        this.callNegativeRection();
    };
    GameManager.prototype.changeArrowAngle = function () {
        if (this.realArrowInstance == null)
            return;
        if (this.launch) {
            var velocity = this.arrowRigidBody.linearVelocity;
            // Calculate the angle of the velocity vector
            var angleInRadians = Math.atan2(velocity.y, velocity.x);
            // Convert the angle from radians to degrees
            var angleInDegrees = cc.misc.radiansToDegrees(angleInRadians);
            // Apply the rotation to the arrow
            this.realArrowInstance.angle = angleInDegrees;
        }
    };
    GameManager.prototype.onTouchStart = function () {
        var _this = this;
        this.node.getChildByName("TutorialHand").active = false;
        if (!this.gameStarted) {
            return;
        }
        if (GameManager_1.roughSheetMode)
            return;
        this.stopTutorialAnim();
        this.playDefAnim();
        this.arrowHead.active = true;
        // this.tweenAnimation();
        this.trajectoryNode.active = true;
        this.inputBlocker.active = true;
        this.schedule(function () {
            _this.drawTrajectory();
        }, 0.01);
    };
    GameManager.prototype.onTouchEnd = function () {
        var _this = this;
        if (!this.gameStarted) {
            return;
        }
        if (GameManager_1.roughSheetMode)
            return;
        this.stopAnim();
        this.arrowHead.active = false;
        // this.toggleLaunch(true);
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            // this.node.getChildByName("Player").getChildByName("arrow").active = false;
            // this.node.getChildByName("Player").getChildByName("Bow").active = true;
            _this.createNewArrow();
            _this.toggleLaunch(true);
            // this.toggleFakeArrowVisibility(false);
            _this.launchArrow();
            _this.unschedule(_this.drawTrajectory);
            _this.trajectoryNode.active = false;
        }, 0.5);
        // this.launchArrow();
        // this.stopTween();
    };
    GameManager.prototype.toggleLaunch = function (val) {
        this.launch = val;
    };
    GameManager.prototype.playDefAnim = function () {
        this.playerAnim.play(this.upDownAnim.name);
        // this.tweenArrow();
    };
    GameManager.prototype.stopAnim = function () {
        this.playerAnim.stop();
        // this.node.getChildByName("Player").getChildByName("Bow").active = false;
        // this.node.getChildByName("Player").getChildByName("arrow").active = true;
    };
    GameManager.prototype.createNewArrow = function () {
        if (this.realArrowInstance != null) {
            console.log("instance not empty, destroying");
            this.realArrowInstance.destroy();
            this.realArrowInstance = null;
            this.inputBlocker.active = false;
        }
        this.realArrowInstance = cc.instantiate(this.realArrow);
        this.playerNode.addChild(this.realArrowInstance);
        this.realArrowInstance.position = this.fakeArrowNode.position;
        this.realArrowInstance.angle = this.fakeArrowNode.angle;
        this.arrowRigidBody = this.realArrowInstance.getComponent(cc.RigidBody);
        var realArrowSprite = this.realArrowInstance.getComponent(cc.Sprite);
        // realArrowSprite.spriteFrame = this.arrowSpriteFrames[this.currLevel - 1];
    };
    GameManager.prototype.toggleFakeArrowVisibility = function (val) {
        return;
        this.fakeArrowNode.active = val;
    };
    // *INFO: this function is completely hit and trial, so values will have to be changed here
    // to match the projectile path
    GameManager.prototype.drawTrajectory = function () {
        var graphics = this.trajectoryNode.getComponent(cc.Graphics);
        var arrowSprite = this.arrowHead;
        // Clear any previous drawing
        graphics.clear();
        // Set stroke color to red
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED; // Optional: Set fill color to red
        // Get the angle from the fake arrow node (before launch)
        var angleInRadians = cc.misc.degreesToRadians(this.fakeArrowNode.angle);
        // Calculate the direction vector based on the angle
        var direction = cc
            .v2(Math.cos(angleInRadians), Math.sin(angleInRadians))
            .normalize();
        // Initial velocity based on the direction and power
        var initialVelocity = direction.mul(this.power);
        // Get the starting position of the fake arrow node
        var startPos = this.fakeArrowNode.position;
        // Simulate gravity (as you are using physics, assume gravity is -320 by default)
        var gravity = cc.v2(0, -320 * this.trajectoryGrav); // Adjust gravity scale
        // Time step and total time for simulating the trajectory
        var timeStep = 0.01;
        var simulationTime = (2 * initialVelocity.y) / -gravity.y; // Total time of flight
        simulationTime = Math.max(simulationTime, 2); // Ensure simulation time is at least 2 seconds
        var limitPos = this.node.convertToWorldSpaceAR(this.trajLimit.position);
        // Start drawing the trajectory
        graphics.moveTo(startPos.x, startPos.y);
        var lastPosX = startPos.x;
        var lastPosY = startPos.y;
        var endPosX = startPos.x; // To store the final position of the trajectory
        var endPosY = startPos.y;
        for (var t = 0; t < simulationTime; t += timeStep) {
            // Calculate the position at time t
            var posX = startPos.x + initialVelocity.x * t;
            var posY = startPos.y + initialVelocity.y * t + 0.5 * gravity.y * t * t;
            // Draw a line to the predicted position
            var posExp = this.node.convertToWorldSpaceAR(this.trajLimit.position);
            if (posX >= posExp.x - 150) {
                var overshootX = posX - (limitPos.x - 150);
                var interpolationRatio = 1 - overshootX / (posX - lastPosX);
                var finalPosX = lastPosX + (posX - lastPosX) * interpolationRatio;
                var finalPosY = lastPosY + (posY - lastPosY) * interpolationRatio;
                graphics.lineTo(finalPosX, finalPosY);
                endPosX = finalPosX;
                endPosY = finalPosY;
                break;
            }
            graphics.lineTo(posX, posY);
            lastPosX = posX;
            lastPosY = posY;
            endPosX = posX;
            endPosY = posY;
        }
        graphics.stroke(); // Stroke the line
        // Set the arrow's position to the end of the trajectory
        arrowSprite.setPosition(endPosX, endPosY);
        var arrowAngleRadians = Math.atan2(direction.y, direction.x);
        var angleInDegrees = cc.misc.radiansToDegrees(arrowAngleRadians);
        arrowSprite.angle = angleInDegrees;
    };
    GameManager.prototype.launchArrow = function () {
        var _this = this;
        var angleInRadians = cc.misc.degreesToRadians(this.realArrowInstance.angle);
        var direction = cc.v2(Math.cos(angleInRadians), Math.sin(angleInRadians));
        direction = direction.normalize();
        this.arrowRigidBody.gravityScale = 2;
        this.arrowRigidBody.applyLinearImpulse(direction.mul(this.power), this.arrowRigidBody.getWorldCenter(), true);
        this.schedule(function () {
            _this.changeArrowAngle();
        }, 0.01);
    };
    GameManager.prototype.playTutorialAnim = function () {
        var _this = this;
        var tutorialHandSpriteComp = this.tutorialHand.getComponent(cc.Sprite);
        cc.tween(this.tutorialHand)
            .delay(0.5)
            .call(function () {
            tutorialHandSpriteComp.spriteFrame = _this.handHoldFrame;
        })
            .delay(2)
            .call(function () {
            tutorialHandSpriteComp.spriteFrame = _this.handIdleFrame;
        })
            .union()
            .repeatForever()
            .start();
    };
    GameManager.prototype.stopTutorialAnim = function () {
        cc.Tween.stopAllByTarget(this.tutorialHand);
        this.tutorialHand.active = false;
    };
    GameManager.prototype.playAudio = function (type, num) {
        if (num <= 0)
            return;
        switch (type) {
            case AudioType.POSITIVE:
                this.audioSrc.clip = this.positiveAudio[num - 1];
                break;
            case AudioType.NEGATIVE:
                this.audioSrc.clip = this.negativeAudio[num - 1];
                break;
        }
        this.audioSrc.play();
    };
    GameManager.prototype.playQuestionAudio = function () {
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    };
    GameManager.prototype.update = function () {
        if (!this.levelend) {
            this.value = this.timer / this.defaultTime;
            this.node
                .getChildByName("timer")
                .getChildByName("timer1")
                .getComponent(cc.Sprite).fillRange = this.value;
            if (this.timer >= this.defaultTime) {
                this.timer = 0;
                //this.levelend = true;
                this.reduceLife();
                this.resetTimer();
            }
        }
    };
    GameManager.prototype.reduceLife = function () {
        console.log("Reducelife $$$$$$$$$$$$$$$$: ", this.lives);
        var currentLifeNode;
        currentLifeNode = this.node
            .getChildByName("lives")
            .getChildByName(this.lives.toString());
        console.log("currentLifeNode : ", currentLifeNode);
        cc.tween(currentLifeNode)
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 })
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 })
            .call(function () {
            currentLifeNode.opacity = 0;
        })
            .start();
        this.lives -= 1;
        if (this.lives == 0) {
            this.resetGame();
        }
    };
    GameManager.prototype.resetGame = function () {
        globalVariables_1.default.Instance.currentLevel = 1;
        this.setQuestionScreen();
    };
    GameManager.prototype.resetTimer = function () {
        this.timer = 0;
        this.value = 0;
        this.value = this.timer / this.defaultTime;
        this.node
            .getChildByName("timer")
            .getChildByName("timer1")
            .getComponent(cc.Sprite).fillRange = this.value;
        cc.audioEngine.stop(this.clocktick);
    };
    var GameManager_1;
    GameManager.roughSheetMode = false;
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bridgeAppearSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "runningSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "wrongSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "targetHitSFX", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "playerNode", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], GameManager.prototype, "upDownAnim", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "realArrow", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fakeArrowNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "inputBlocker", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trajectoryNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "questionLabel", void 0);
    __decorate([
        property(Target_1.default)
    ], GameManager.prototype, "targets", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioSource)
    ], GameManager.prototype, "audioSrc", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameManager.prototype, "spineAnim", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trajLimit", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "arrowHead", void 0);
    __decorate([
        property(cc.Integer)
    ], GameManager.prototype, "trajectoryGrav", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "handIdleFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "handHoldFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "bowSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "arrowSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "backgroundSpriteFrames", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "roughAreaNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "bgNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "questionSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "podarPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "podarNegative", void 0);
    __decorate([
        property(cc.Font)
    ], GameManager.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], GameManager.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "clockTick", void 0);
    __decorate([
        property(cc.Integer)
    ], GameManager.prototype, "power", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCw4RUFFbUQ7QUFDbkQsZ0RBQTJEO0FBQzNELG9EQUEwQztBQUMxQyxtQ0FBOEI7QUFDOUIscURBQWdEO0FBRWhELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWcrQ0M7UUE5OUNRLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUdyQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQXFCLElBQUksQ0FBQztRQUdwQyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFHdkIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFhLElBQUksQ0FB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QjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNnQjtJQWdDdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQTdJVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZytDL0I7SUFBRCxrQkFBQztDQWgrQ0QsQUFnK0NDLENBaCtDd0MsRUFBRSxDQUFDLFNBQVMsR0FnK0NwRDtrQkFoK0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcbmltcG9ydCBKb2NrZXlDb250cm9sbGVyLCB7XG4gIEpPQ0tFWV9UWVBFLFxufSBmcm9tIFwiLi4vLi4vTWFpbkFzc2V0cy9TY3JpcHRzL0pvY2tleUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdBTUVfRVZFTlRTLCBMb2dUeXBlcyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XG5pbXBvcnQgVGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcblxuZW51bSBBdWRpb1R5cGUge1xuICBQT1NJVElWRSxcbiAgTkVHQVRJVkUsXG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHB1YmxpYyBicmlkZ2VBcHBlYXJTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHVibGljIHJ1bm5pbmdTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHVibGljIHdyb25nU0ZYOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHB1YmxpYyB0YXJnZXRIaXRTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHB1YmxpYyBwbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uQ2xpcClcbiAgcHVibGljIHVwRG93bkFuaW06IGNjLkFuaW1hdGlvbkNsaXAgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHB1YmxpYyByZWFsQXJyb3c6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHB1YmxpYyBmYWtlQXJyb3dOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcHVibGljIGlucHV0QmxvY2tlcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHB1YmxpYyB0cmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBwdWJsaWMgcXVlc3Rpb25MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShUYXJnZXQpXG4gIHB1YmxpYyB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHB1YmxpYyBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHB1YmxpYyBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcbiAgcHVibGljIGF1ZGlvU3JjOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICBwdWJsaWMgc3BpbmVBbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBwdWJsaWMgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwdWJsaWMgdHJhakxpbWl0OiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcHVibGljIGFycm93SGVhZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIHB1YmxpYyB0cmFqZWN0b3J5R3JhdjogbnVtYmVyID0gMTtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIHB1YmxpYyBoYW5kSWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBwdWJsaWMgaGFuZEhvbGRGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgcHVibGljIGJvd1Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgcHVibGljIGFycm93U3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBwdWJsaWMgYmFja2dyb3VuZFNwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwdWJsaWMgcm91Z2hBcmVhTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHB1YmxpYyBiZ05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgcXVlc3Rpb25Tb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGJhZ1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgYmFnTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHByaXZhdGUgY3J5b25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIHBvZGFyUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgcHJpdmF0ZSBwb2Rhck5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxuICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRm9udClcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBwcml2YXRlIGNsb2NrVGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICBwdWJsaWMgdGFyZ2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHVibGljIHRhcmdldEluaXRQb3M6IGNjLlZlYzMgPSBudWxsO1xuXG4gIHB1YmxpYyB0dXRvcmlhbEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gIHByaXZhdGUgY3VyckxldmVsID0gMTtcbiAgcHVibGljIHN0YXRpYyByb3VnaFNoZWV0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcXVlc3Rpb25TdW0gPSAwO1xuICBwcml2YXRlIHNjb3JlID0gMDtcbiAgcHJpdmF0ZSBUb3RhbE9wdGlvbnMgPSAzO1xuICBvcHRpb25zTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gIG1heExldmVsID0gMTtcbiAgYW5zd2VyTnVtOiBudW1iZXIgPSAwO1xuXG4gIHRlbXBuYW1lOiBzdHJpbmcgPSBcIkFCQ0RcIjtcbiAgcHJpdmF0ZSBjYW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXIyTG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXIzTG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZGVmYXVsdFRpbWU6IG51bWJlciA9IDMwO1xuXG4gIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAvLyBwdWJsaWMgY29udGFpbmVyTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSByZWFsQXJyb3dJbnN0YW5jZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIHB1YmxpYyBwb3dlcjogbnVtYmVyID0gMTAwMDsgLy8gZml4ZWQsIGNhbiBiZSBjaGFuZ2VkIGxhdGVyXG4gIHByaXZhdGUgYXJyb3dSaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG4gIHByaXZhdGUgbGF1bmNoOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtYWluQmdTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBwbGF5ZXJBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgY3VycmVudEpjb2tleTogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGxldmVsZW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XG4gIHByaXZhdGUgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjbG9ja3RpY2s6IGFueTtcblxuICBwdWJsaWMgZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcbiAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcbiAgICB0aGlzLnF1ZXN0aW9uU3VtID0gbnVtMSArIG51bTI7XG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9IGAke251bTF9ICsgJHtudW0yfSA9ID9gO1xuICAgIHRoaXMuY3JlYXRlT3B0aW9ucygpO1xuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25sb2FkQEBAQEBAQEBAQEBAQEBcIik7XG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgdGhpcy5wbGF5ZXJBbmltID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5ISVQsIHRoaXMub25IaXQsIHRoaXMpO1xuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5NSVNTLCB0aGlzLm9uTWlzcywgdGhpcyk7XG4gICAgLy90aGlzLmdlbmVyYXRlUXVlc3Rpb24oKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmFycm93SGVhZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnR1dG9yaWFsSGFuZCA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZXBsYXkvVHV0b3JpYWxIYW5kXCIpO1xuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XG4gICAgdGhpcy50YXJnZXROb2RlID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UYXJnZXRcIik7XG4gICAgdGhpcy50YXJnZXRJbml0UG9zID0gdGhpcy50YXJnZXROb2RlLnBvc2l0aW9uO1xuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm1haW5CZ1Nwcml0ZSA9IHRoaXMuYmdOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9XG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxuICAgICAgXS5xdWVzdGlvblRleHQ7XG5cbiAgICAvLyBuZXcgY29kZVxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cbiAgICAgICAgdGhpcy5wb2Rhcl9mb250O1xuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cbiAgICAgICAgICB0aGlzLnBvZGFyX2ZvbnQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXG4gICAgKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XG4gICAgICAgIHRoaXMuamFpcHVyaWFfZm9udDtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XG4gICAgICAgICAgdGhpcy5qYWlwdXJpYV9mb250O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKTtcblxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgdGhpcy5hbnN3ZXJBcnJheVtpXSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBbnN3ZXJOdW1baV07XG4gICAgLy8gfVxuXG4gICAgdGhpcy5hbnN3ZXJOdW0gPSBwYXJzZUludChcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgIC5jb3JyZWN0QW5zd2VyTnVtLFxuICAgICk7XG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IHRoaXMuYW5zd2VyTnVtO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIkNvcnJlY3RBbnN3ZXIgOiBcIixcbiAgICAgIHRoaXMuYW5zd2VyTnVtLFxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCxcbiAgICApO1xuXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBhdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvblNvdW5kIG9ubG9hZDogXCIsIHRoaXMucXVlc3Rpb25Tb3VuZFswXSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXG4gICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvciBpIDogXCIsIGkpO1xuICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9zWzBdLFxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZShcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lLFxuICAgICk7XG4gICAgdGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN0YXJ0aW5nTW92ZW1lbnQoKTtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0QEBAQEBAQEBAQEBAQEBcIik7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXJcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyMVwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZTtcblxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxLFxuICAgICk7XG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMucG9kYXJQb3NpdGl2ZTtcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMucG9kYXJOZWdhdGl2ZTtcbiAgICB9XG5cbiAgICAvL3RoaXMucGxheVR1dG9yaWFsQW5pbSgpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghdGhpcy5sZXZlbGVuZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb2NrdGljayA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbG9ja1RpY2ssIHRydWUpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUdXRvcmlhbEhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XG4gICAgfSwgMSk7XG4gIH1cblxuICBzZXRRdWVzdGlvblNjcmVlbigpIHtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC5zdHJpbmcgPVxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgIF0ucXVlc3Rpb25UZXh0O1xuXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBhdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2MubG9hZGVyLmxvYWQoXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXG4gICAgICAgIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBBdWRpb0NsaXA7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXG4gICAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvciBpIDogXCIsIGkpO1xuICAgICAgICAgIHRoaXMubm9kZVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9zWzBdLFxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5jb3JyZWN0QXVkaW9bMF0pO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SmNva2V5ID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSxcbiAgICApO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubGV2ZWxlbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgICB0aGlzLmNsb2NrdGljayA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbG9ja1RpY2ssIHRydWUpO1xuICAgICAgfSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5SYW5kb21OdW1iZXIobG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xuICAgIGxldCBtaW4gPSBNYXRoLmNlaWwobG93KTtcbiAgICBsZXQgbWF4ID0gTWF0aC5mbG9vcihoaWdoKTtcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gY2FuIGRlZmluZSBvdGhlciB1cHBlciBsaW1pdCBoZXJlXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydGluZ01vdmVtZW50KCkge1xuICAgIHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKVxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xuICAgIHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKVxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcblxuICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ydW5uaW5nU0ZYLCBmYWxzZSk7XG5cbiAgICBjYy50d2Vlbih0aGlzLnBsYXllck5vZGUpXG4gICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTQxOSwgLTg1LCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoaWQpO1xuICAgICAgfSlcbiAgICAgIC8vIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodEhhbmRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICB9LCAwLjUpO1xuICB9XG5cbiAgcHVibGljIG1vdmVQbGF5ZXIoKSB7XG4gICAgdGhpcy5ub2RlXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xuICAgIHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xuICAgIHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodEhhbmRcIilcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XG4gICAgdGhpcy5ub2RlXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xuXG4gICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJ1bm5pbmdTRlgsIGZhbHNlKTtcbiAgICBjYy50d2Vlbih0aGlzLnBsYXllck5vZGUpXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodEhhbmRcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICAgIHRoaXMubm9kZVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcbiAgICB9LCAwLjUpO1xuICB9XG5cbiAgcHVibGljIHBsYXlTcGluZUFuaW1BbmRJZGxlKFxuICAgIGFuaW1OYW1lOiBzdHJpbmcsXG4gICAgbnVtOiBudW1iZXIsXG4gICAgaXNDb3JyZWN0OiBib29sZWFuLFxuICApIHtcbiAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgYCR7YW5pbU5hbWV9JHtudW19YCwgZmFsc2UpO1xuICAgIHRoaXMuc3BpbmVBbmltLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcbiAgICAgIGlmICh0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBgJHthbmltTmFtZX0ke251bX1gKSB7XG4gICAgICAgIC8vIFBsYXkgdGhlIGlkbGUgYW5pbWF0aW9uIChlLmcuLCAnaWRsZScpIG9uY2UgdGhlIHByaW1hcnkgYW5pbWF0aW9uIGNvbXBsZXRlc1xuICAgICAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICAgICAgdGhpcy5sZXZlbGVuZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFwiLCB0aGlzLmxldmVsZW5kKTtcbiAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XG4gICAgICAgICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xuICAgICAgICAgIHRoaXMucGFubmluZygpOyAvLyBjb250YWlucyBhbGwgcGFubmluZyBsb2dpYyBhbmQgc3R1ZmZcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XG5cbiAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyQW5pbS5wbGF5KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllckFuaW0ucGF1c2UoKTtcbiAgICAgICAgfSwgMC4wMSk7XG4gICAgICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcbiAgICAgICAgaWYgKCFpc0NvcnJlY3QpIHtcbiAgICAgICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWRlYWxseSBmYWtlIGFycm93IHZpc2liaWxpdHkgc2hvdWxkIGJlIHRvZ2dsZWQgaGVyZSwgYnV0IGxldCdzIHNlZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0VGFyZ2V0Q29sb3JzKCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5zZXREZWZDb2xvcigpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTY29yZSgpIHtcbiAgICB0aGlzLnNjb3JlKys7XG4gICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9GaXhlZCgpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZU9wdGlvbnMoKSB7XG4gICAgbGV0IG9wdGlvbnM6IG51bWJlcltdID0gW107XG4gICAgb3B0aW9uc1swXSA9IHRoaXMucXVlc3Rpb25TdW07XG4gICAgZG8ge1xuICAgICAgb3B0aW9uc1sxXSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDUwKTtcbiAgICB9IHdoaWxlIChvcHRpb25zWzFdID09PSB0aGlzLnF1ZXN0aW9uU3VtKTtcbiAgICBkbyB7XG4gICAgICBvcHRpb25zWzJdID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgNTApO1xuICAgIH0gd2hpbGUgKG9wdGlvbnNbMl0gPT09IG9wdGlvbnNbMV0gfHwgb3B0aW9uc1syXSA9PT0gdGhpcy5xdWVzdGlvblN1bSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9yaWdpbmFsIGFycmF5XCIsIG9wdGlvbnMpO1xuXG4gICAgbGV0IHNodWZmbGVkQXJyID0gdGhpcy5zaHVmZmxlT3B0aW9ucyhbLi4ub3B0aW9uc10pO1xuXG4gICAgY29uc29sZS5sb2coXCJzaHVmZmxlZCBhcnJheVwiLCBzaHVmZmxlZEFycik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHRoaXMudGFyZ2V0c1tpXS5zZXRWYWx1ZShzaHVmZmxlZEFycltpXSk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNwcml0ZUZyYW1lKFxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkLFxuICApIHtcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcbiAgICAgIFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxuICAgICAgY2MuU3ByaXRlRnJhbWUsXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG4gIGxvYWRBdWRpb0NsaXAoXG4gICAgYXVkaW9OYW1lOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxuICApIHtcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxuICAgICAgY2MuQXVkaW9DbGlwLFxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUm91Z2hBcmVhKCkge1xuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIEdhbWVNYW5hZ2VyLnJvdWdoU2hlZXRNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VCb3dBbmRBcnJvd1Nwcml0ZSgpIHtcbiAgICBsZXQgYm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQm93XCIpO1xuICAgIGxldCBhcnJvdyA9IHRoaXMucGxheWVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZha2VBcnJvd1wiKTtcblxuICAgIGJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICB0aGlzLmJvd1Nwcml0ZUZyYW1lc1t0aGlzLmN1cnJMZXZlbCAtIDFdO1xuICAgIGFycm93LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcbiAgfVxuXG4gIHB1YmxpYyBzaHVmZmxlT3B0aW9ucyhhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9IC8vIEZpc2hlciBZYXRlcyBTaHVmZmxlIGZvciBzaHVmZmxpbmcgdGhlIG9wdGlvbnNcblxuICBhZnRlclJlYWN0aW9uKCkge1xuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzLm5vZGUgQEBAQEBAQFwiLCB0aGlzLm5vZGUpXG4gICAgdGhpcy5wbGF5ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpO1xuICAgIHRoaXMucGxheWVyQW5pbSA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyQW5pbS5wYXVzZSgpO1xuICAgIH0sIDAuMDEpO1xuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcbiAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XG4gIH1cblxuICBvbkhpdCh0YXJnZXROb2RlOiBUYXJnZXQpIHtcbiAgICB0aGlzLmFuc3dlck51bSA9IHBhcnNlSW50KFxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cbiAgICAgICAgLmNvcnJlY3RBbnN3ZXJOdW0sXG4gICAgKTtcbiAgICB0aGlzLnF1ZXN0aW9uU3VtID0gdGhpcy5hbnN3ZXJOdW07XG4gICAgY29uc29sZS5sb2coXCJvbkhpdCB0YXJnZXROb2RlIDogXCIsIHRhcmdldE5vZGUudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwib25IaXQgYW5zd2VyTnVtIDogXCIsIHRoaXMucXVlc3Rpb25TdW0pO1xuXG4gICAgLy8gdGhpcy5jb21tb25BY3Rpb25zKCk7XG4gICAgdGhpcy50b2dnbGVMYXVuY2goZmFsc2UpO1xuICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoYW5nZUFycm93QW5nbGUpO1xuXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRhcmdldEhpdFNGWCwgZmFsc2UpO1xuXG4gICAgaWYgKHRhcmdldE5vZGUudmFsdWUgPT09IHRoaXMucXVlc3Rpb25TdW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSG9vcmF5LCBjb3JyZWN0IGFuc3dlclwiKTtcbiAgICAgIC8vdGhpcy5vblJpZ2h0QW5zd2VyKCk7XG4gICAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgMTApO1xuICAgICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcInBvc2l0aXZlX1wiLCBudW0sIHRydWUpO1xuICAgICAgLy8gdGhpcy5wbGF5QXVkaW8oQXVkaW9UeXBlLlBPU0lUSVZFLCBudW0pO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgIyMjIyMjI1wiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBdWRpb1swXSwgZmFsc2UpO1xuICAgICAgdGhpcy5sZXZlbGVuZCA9IHRydWU7XG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY2xvY2t0aWNrKTtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgIHRhcmdldE5vZGUuc2V0Q29sb3IoY2MuQ29sb3IuR1JFRU4pO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLmFmdGVyUmVhY3Rpb24oKTtcbiAgICAgIH0sIDIpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbGxKb2NrZXkoKTtcbiAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvWzBdLmR1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJvaCB3cm9uZyBhbnN3ZXIsIHRyeSBhZ2FpblwiKTtcbiAgICAgIC8vIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcbiAgICAgIC8vIHRoaXMucGxheVNwaW5lQW5pbUFuZElkbGUoXCJuZWdhdGl2ZV9cIiwgbnVtLCBmYWxzZSk7XG4gICAgICAvLyB0aGlzLnBsYXlBdWRpbyhBdWRpb1R5cGUuTkVHQVRJVkUsIG51bSk7XG5cbiAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcbiAgICAgIHRhcmdldE5vZGUuc2V0Q29sb3IoY2MuQ29sb3IuUkVEKTtcbiAgICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xuICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveUFycm93KDEpO1xuICB9XG5cbiAgY2FsbEpvY2tleSgpIHtcbiAgICBKb2NrZXlDb250cm9sbGVyLkpPQ0tFWS5jYWxsSm9ja2V5KEpPQ0tFWV9UWVBFLlBPU0lUSVZFLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgYW5pbSA9IFtcbiAgICAgICAgXCJwb3NzaXRpdmVcIixcbiAgICAgICAgXCJwb3NzaXRpdmUyXCIsXG4gICAgICAgIFwicG9zc2l0aXZlM1wiLFxuICAgICAgICBcInBvc3NpdGl2ZTRcIixcbiAgICAgICAgXCJwb3NzaXRpdmU1XCIsXG4gICAgICAgIFwicG9zc2l0aXZlNlwiLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxuICAgICAgICBcInBvc2l0aXZlXzJcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxuICAgICAgICBcInBvc2l0aXZlXzVcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgIGFuaW0gPSBbXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxuICAgICAgICBcInBvc2l0aXZlXzJcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxuICAgICAgICBcInBvc2l0aXZlXzVcIixcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xuICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XG4gICAgICBhbmltID0gW1xuICAgICAgICBcInBvc2l0aXZlXzFcIixcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxuICAgICAgICBcInBvc2l0aXZlXzRcIixcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXG4gICAgICAgIFwicG9zaXRpdmVfNlwiLFxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XG4gICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xuICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xMjAwLCAxMjAwXTtcbiAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XG4gICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcbiAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgfVxuXG4gIGNhbGxOZXh0TGV2ZWwoKSB7XG4gICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgIHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcblxuICAgIHRoaXMuY3VyckxldmVsKys7XG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJMZXZlbCAtIDEsIGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VyckxldmVsIDogXCIsIHRoaXMuY3VyckxldmVsKTtcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGggKyAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVuZGdhbWUgcmVhY2hlZFwiKTtcbiAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVFbmRcIik7XG4gICAgICB9LCAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xuICAgICAgdGhpcy5wYW5uaW5nKCk7IC8vIGNvbnRhaW5zIGFsbCBwYW5uaW5nIGxvZ2ljIGFuZCBzdHVmZlxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XG4gIH1cblxuICBjYWxsU3RhcnNFYXJlZCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhcjFMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XG4gICAgICB0aGlzLnN0YXIxTG9nID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGFyMkxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcbiAgICAgIHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIXRoaXMuc3RhcjNMb2cgJiZcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbFxuICAgICkge1xuICAgICAgdGhpcy5zdGFyM0xvZyA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XG4gICAgcmV0dXJuIF9udW1iZXI7XG4gIH1cblxuICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xuICAgIHRoaXMucmVkdWNlTGlmZSgpO1xuICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcbiAgICAvL19ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgSm9ja2V5Q29udHJvbGxlci5KT0NLRVkuY2FsbEpvY2tleShKT0NLRVlfVFlQRS5ORUdBVElWRSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgLy8gbGV0IGFuaW06IHN0cmluZ1tdID0gW107XG4gICAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAvLyAgIGFuaW0gPSBbXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZVwiLFxuICAgICAgLy8gICAgIFwibmVnZXRpdmUyXCIsXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTNcIixcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlNFwiLFxuICAgICAgLy8gICAgIFwibmVnZXRpdmU1XCIsXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTZcIixcbiAgICAgIC8vICAgXTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgLy8gICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xuICAgICAgLy8gfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgIC8vICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcbiAgICAgIC8vICAgYW5pbSA9IFtcIm5vXCJdO1xuICAgICAgLy8gfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgIC8vICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xuICAgICAgLy8gICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCIsIFwibmVnYXRpdmVfNFwiXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgLy8gICB0aGlzLmN1cnJlbnRKY29rZXlcbiAgICAgIC8vICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLy8gICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5jdXJyZW50SmNva2V5XG4gICAgICAvLyAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC8vICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgLy8gICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgLy8gICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIC8vICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgLy8gICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgLy8gICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC8vICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHRoaXMuY3VycmVudEpjb2tleVxuICAgICAgLy8gICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC8vICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xuICAgICAgLy8gfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XG4gICAgfSwgMC43KTtcbiAgfVxuXG4gIHB1YmxpYyBvblJpZ2h0QW5zd2VyKCkge1xuICAgIHRoaXMuY3VyckxldmVsKys7XG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJMZXZlbCwgZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5jdXJyTGV2ZWwgOiBcIiwgdGhpcy5jdXJyTGV2ZWwpO1xuICAgIGlmICh0aGlzLmN1cnJMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aCArIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xuICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcbiAgICAgIH0sIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XG4gICAgfVxuICAgIHRoaXMucGFubmluZygpO1xuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95QXJyb3cob2Zmc2V0OiBudW1iZXIpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCBvZmZzZXQpO1xuICB9XG5cbiAgcHVibGljIHBhbm5pbmcoKSB7XG4gICAgLy8gY29udGFpbnMgYWxsIHRoZSBwYW5uaW5nIGZ1bmN0aW9ucyBhbmQgbWV0aG9kc1xuXG4gICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpKVxuICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcInNtb290aFwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpLm9wYWNpdHkgPSAwO1xuXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJyaWRnZUFwcGVhclNGWCwgZmFsc2UpO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpKVxuICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNtb290aFwiIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFuQnJpZGdlKCk7XG4gICAgICAgIHRoaXMucGFuQmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5wYW5UYXJnZXQoKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICAvLyB0aGlzLmNoYW5nZUJvd0FuZEFycm93U3ByaXRlKCk7XG4gIH1cblxuICBwdWJsaWMgcGFuQnJpZGdlKCkge1xuICAgIGxldCBicmlkZ2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VcIik7XG4gICAgbGV0IGJyaWRnZTIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKTtcblxuICAgIGxldCBicmlkZ2VfaW5pdF9wb3MgPSBicmlkZ2UuZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgYnJpZGdlMl9pbml0X3BvcyA9IGJyaWRnZTIuZ2V0UG9zaXRpb24oKTtcblxuICAgIGNjLnR3ZWVuKGJyaWRnZSlcbiAgICAgIC50bygwLjUsIHsgeDogLTE1MDAgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICBicmlkZ2Uuc2V0UG9zaXRpb24oYnJpZGdlX2luaXRfcG9zKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgICBjYy50d2VlbihicmlkZ2UyKVxuICAgICAgLnRvKDAuNSwgeyB4OiBicmlkZ2VfaW5pdF9wb3MueCB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIGJyaWRnZTIuc2V0UG9zaXRpb24oYnJpZGdlMl9pbml0X3Bvcyk7XG4gICAgICAgIGJyaWRnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICBwdWJsaWMgcGFuQmFja2dyb3VuZCgpIHtcbiAgICBsZXQgY2xvbmUxID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xuICAgIGxldCBjbG9uZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJnTm9kZSk7XG4gICAgdGhpcy5iZ05vZGUuYWRkQ2hpbGQoY2xvbmUxKTtcbiAgICB0aGlzLmJnTm9kZS5hZGRDaGlsZChjbG9uZTIpO1xuICAgIGNsb25lMi5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKDE5MjAsIDApO1xuICAgIGxldCBjb21wMiA9IGNsb25lMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAvL2NvbXAyLnNwcml0ZUZyYW1lID0gdGhpcy5iYWNrZ3JvdW5kU3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XG4gICAgY29tcDIuc3ByaXRlRnJhbWUgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG5cbiAgICBjYy50d2VlbihjbG9uZTEpXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMygtMTkyMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICBjbG9uZTEuZGVzdHJveSgpO1xuICAgICAgfSlcbiAgICAgIC5zdGFydCgpO1xuXG4gICAgY2MudHdlZW4oY2xvbmUyKVxuICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLm1haW5CZ1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xuICAgICAgICB0aGlzLmNoYW5nZUJvd0FuZEFycm93U3ByaXRlKCk7XG4gICAgICAgIGNsb25lMi5kZXN0cm95KCk7XG4gICAgICB9KVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICBwdWJsaWMgcGFuVGFyZ2V0KCkge1xuICAgIGxldCBUYXJnZXRFbmRQb3MgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldEVuZFBvc1wiKTtcbiAgICBsZXQgVGFyZ2V0U3RhcnRQb3MgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFN0YXJ0UG9zXCIpO1xuXG4gICAgY2MudHdlZW4odGhpcy50YXJnZXROb2RlKVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiAodGFyZ2V0Lm5vZGUuYWN0aXZlID0gZmFsc2UpKTtcbiAgICAgIH0pXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBUYXJnZXRFbmRQb3MucG9zaXRpb24gfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxuICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlLnBvc2l0aW9uID0gVGFyZ2V0U3RhcnRQb3MucG9zaXRpb247XG4gICAgICB9KVxuICAgICAgLmRlbGF5KDAuMilcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IHRoaXMudGFyZ2V0SW5pdFBvcyB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiAodGFyZ2V0Lm5vZGUuYWN0aXZlID0gdHJ1ZSkpO1xuICAgICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBjb21tb25BY3Rpb25zKCkge1xuICAvLyAgIHRoaXMuY3VyckxldmVsKys7XG4gIC8vICAgLy8gKkVYVEVSTkFMXG4gIC8vICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsLCBmYWxzZSk7XG4gIC8vICAgaWYgKHRoaXMuY3VyckxldmVsID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscykge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJlbmRnYW1lIHJlYWNoZWRcIik7XG4gIC8vICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xuICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAvLyAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xuICAvLyAgICAgfSwgMik7XG4gIC8vICAgfVxuICAvLyAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgLy8gICAvLyAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcbiAgLy8gICAvLyAgIC8vIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xuICAvLyAgIC8vICAgLy8gdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XG4gIC8vICAgLy8gfSwgMSk7XG4gIC8vIH1cblxuICBwdWJsaWMgb25NaXNzKCkge1xuICAgIC8vIHRoaXMuY29tbW9uQWN0aW9ucygpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlTGF1bmNoKGZhbHNlKTtcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoYW5nZUFycm93QW5nbGUpO1xuICAgIH0sIDIpO1xuICAgIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcbiAgICAvLyB0aGlzLnBsYXlTcGluZUFuaW1BbmRJZGxlKFwibmVnYXRpdmVfXCIsIG51bSwgZmFsc2UpO1xuICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5ORUdBVElWRSwgbnVtKTtcbiAgICB0aGlzLmFmdGVyUmVhY3Rpb24oKTtcbiAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VBcnJvd0FuZ2xlKCkge1xuICAgIGlmICh0aGlzLnJlYWxBcnJvd0luc3RhbmNlID09IG51bGwpIHJldHVybjtcbiAgICBpZiAodGhpcy5sYXVuY2gpIHtcbiAgICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy5hcnJvd1JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yXG4gICAgICBjb25zdCBhbmdsZUluUmFkaWFucyA9IE1hdGguYXRhbjIodmVsb2NpdHkueSwgdmVsb2NpdHkueCk7XG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIGFuZ2xlIGZyb20gcmFkaWFucyB0byBkZWdyZWVzXG4gICAgICBjb25zdCBhbmdsZUluRGVncmVlcyA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhhbmdsZUluUmFkaWFucyk7XG5cbiAgICAgIC8vIEFwcGx5IHRoZSByb3RhdGlvbiB0byB0aGUgYXJyb3dcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUgPSBhbmdsZUluRGVncmVlcztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Ub3VjaFN0YXJ0KCkge1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlR1dG9yaWFsSGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEdhbWVNYW5hZ2VyLnJvdWdoU2hlZXRNb2RlKSByZXR1cm47XG4gICAgdGhpcy5zdG9wVHV0b3JpYWxBbmltKCk7XG4gICAgdGhpcy5wbGF5RGVmQW5pbSgpO1xuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gdGhpcy50d2VlbkFuaW1hdGlvbigpO1xuICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3VHJhamVjdG9yeSgpO1xuICAgIH0sIDAuMDEpO1xuICB9XG5cbiAgcHVibGljIG9uVG91Y2hFbmQoKSB7XG4gICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChHYW1lTWFuYWdlci5yb3VnaFNoZWV0TW9kZSkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcEFuaW0oKTtcbiAgICB0aGlzLmFycm93SGVhZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnRvZ2dsZUxhdW5jaCh0cnVlKTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XG4gICAgdGhpcy5ub2RlXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIilcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XG4gICAgdGhpcy5ub2RlXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLm5vZGVcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xuICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JlYXRlTmV3QXJyb3coKTtcbiAgICAgIHRoaXMudG9nZ2xlTGF1bmNoKHRydWUpO1xuICAgICAgLy8gdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgIHRoaXMubGF1bmNoQXJyb3coKTtcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRyYXdUcmFqZWN0b3J5KTtcbiAgICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC41KTtcblxuICAgIC8vIHRoaXMubGF1bmNoQXJyb3coKTtcbiAgICAvLyB0aGlzLnN0b3BUd2VlbigpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUxhdW5jaCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxhdW5jaCA9IHZhbDtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5RGVmQW5pbSgpIHtcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSh0aGlzLnVwRG93bkFuaW0ubmFtZSk7XG4gICAgLy8gdGhpcy50d2VlbkFycm93KCk7XG4gIH1cblxuICBwdWJsaWMgc3RvcEFuaW0oKSB7XG4gICAgdGhpcy5wbGF5ZXJBbmltLnN0b3AoKTtcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVOZXdBcnJvdygpIHtcbiAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc3RhbmNlIG5vdCBlbXB0eSwgZGVzdHJveWluZ1wiKTtcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVhbEFycm93KTtcbiAgICB0aGlzLnBsYXllck5vZGUuYWRkQ2hpbGQodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSk7XG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMuZmFrZUFycm93Tm9kZS5wb3NpdGlvbjtcbiAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmFuZ2xlID0gdGhpcy5mYWtlQXJyb3dOb2RlLmFuZ2xlO1xuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkgPSB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIGxldCByZWFsQXJyb3dTcHJpdGUgPSB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIC8vIHJlYWxBcnJvd1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHZhbDogYm9vbGVhbikge1xuICAgIHJldHVybjtcbiAgICB0aGlzLmZha2VBcnJvd05vZGUuYWN0aXZlID0gdmFsO1xuICB9XG5cbiAgLy8gKklORk86IHRoaXMgZnVuY3Rpb24gaXMgY29tcGxldGVseSBoaXQgYW5kIHRyaWFsLCBzbyB2YWx1ZXMgd2lsbCBoYXZlIHRvIGJlIGNoYW5nZWQgaGVyZVxuICAvLyB0byBtYXRjaCB0aGUgcHJvamVjdGlsZSBwYXRoXG4gIHB1YmxpYyBkcmF3VHJhamVjdG9yeSgpIHtcbiAgICBjb25zdCBncmFwaGljcyA9IHRoaXMudHJhamVjdG9yeU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgIGNvbnN0IGFycm93U3ByaXRlID0gdGhpcy5hcnJvd0hlYWQ7XG5cbiAgICAvLyBDbGVhciBhbnkgcHJldmlvdXMgZHJhd2luZ1xuICAgIGdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAvLyBTZXQgc3Ryb2tlIGNvbG9yIHRvIHJlZFxuICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDsgLy8gT3B0aW9uYWw6IFNldCBmaWxsIGNvbG9yIHRvIHJlZFxuXG4gICAgLy8gR2V0IHRoZSBhbmdsZSBmcm9tIHRoZSBmYWtlIGFycm93IG5vZGUgKGJlZm9yZSBsYXVuY2gpXG4gICAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMuZmFrZUFycm93Tm9kZS5hbmdsZSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgYmFzZWQgb24gdGhlIGFuZ2xlXG4gICAgbGV0IGRpcmVjdGlvbiA9IGNjXG4gICAgICAudjIoTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLCBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gICAgICAubm9ybWFsaXplKCk7XG5cbiAgICAvLyBJbml0aWFsIHZlbG9jaXR5IGJhc2VkIG9uIHRoZSBkaXJlY3Rpb24gYW5kIHBvd2VyXG4gICAgbGV0IGluaXRpYWxWZWxvY2l0eSA9IGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlcik7XG5cbiAgICAvLyBHZXQgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBmYWtlIGFycm93IG5vZGVcbiAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmZha2VBcnJvd05vZGUucG9zaXRpb247XG5cbiAgICAvLyBTaW11bGF0ZSBncmF2aXR5IChhcyB5b3UgYXJlIHVzaW5nIHBoeXNpY3MsIGFzc3VtZSBncmF2aXR5IGlzIC0zMjAgYnkgZGVmYXVsdClcbiAgICBsZXQgZ3Jhdml0eSA9IGNjLnYyKDAsIC0zMjAgKiB0aGlzLnRyYWplY3RvcnlHcmF2KTsgLy8gQWRqdXN0IGdyYXZpdHkgc2NhbGVcblxuICAgIC8vIFRpbWUgc3RlcCBhbmQgdG90YWwgdGltZSBmb3Igc2ltdWxhdGluZyB0aGUgdHJhamVjdG9yeVxuICAgIGxldCB0aW1lU3RlcCA9IDAuMDE7XG4gICAgbGV0IHNpbXVsYXRpb25UaW1lID0gKDIgKiBpbml0aWFsVmVsb2NpdHkueSkgLyAtZ3Jhdml0eS55OyAvLyBUb3RhbCB0aW1lIG9mIGZsaWdodFxuICAgIHNpbXVsYXRpb25UaW1lID0gTWF0aC5tYXgoc2ltdWxhdGlvblRpbWUsIDIpOyAvLyBFbnN1cmUgc2ltdWxhdGlvbiB0aW1lIGlzIGF0IGxlYXN0IDIgc2Vjb25kc1xuXG4gICAgbGV0IGxpbWl0UG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnRyYWpMaW1pdC5wb3NpdGlvbik7XG5cbiAgICAvLyBTdGFydCBkcmF3aW5nIHRoZSB0cmFqZWN0b3J5XG4gICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xuXG4gICAgbGV0IGxhc3RQb3NYID0gc3RhcnRQb3MueDtcbiAgICBsZXQgbGFzdFBvc1kgPSBzdGFydFBvcy55O1xuXG4gICAgbGV0IGVuZFBvc1ggPSBzdGFydFBvcy54OyAvLyBUbyBzdG9yZSB0aGUgZmluYWwgcG9zaXRpb24gb2YgdGhlIHRyYWplY3RvcnlcbiAgICBsZXQgZW5kUG9zWSA9IHN0YXJ0UG9zLnk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHNpbXVsYXRpb25UaW1lOyB0ICs9IHRpbWVTdGVwKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHRpbWUgdFxuICAgICAgbGV0IHBvc1ggPSBzdGFydFBvcy54ICsgaW5pdGlhbFZlbG9jaXR5LnggKiB0O1xuICAgICAgbGV0IHBvc1kgPSBzdGFydFBvcy55ICsgaW5pdGlhbFZlbG9jaXR5LnkgKiB0ICsgMC41ICogZ3Jhdml0eS55ICogdCAqIHQ7XG5cbiAgICAgIC8vIERyYXcgYSBsaW5lIHRvIHRoZSBwcmVkaWN0ZWQgcG9zaXRpb25cbiAgICAgIGxldCBwb3NFeHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcbiAgICAgIGlmIChwb3NYID49IHBvc0V4cC54IC0gMTUwKSB7XG4gICAgICAgIGxldCBvdmVyc2hvb3RYID0gcG9zWCAtIChsaW1pdFBvcy54IC0gMTUwKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25SYXRpbyA9IDEgLSBvdmVyc2hvb3RYIC8gKHBvc1ggLSBsYXN0UG9zWCk7XG5cbiAgICAgICAgbGV0IGZpbmFsUG9zWCA9IGxhc3RQb3NYICsgKHBvc1ggLSBsYXN0UG9zWCkgKiBpbnRlcnBvbGF0aW9uUmF0aW87XG4gICAgICAgIGxldCBmaW5hbFBvc1kgPSBsYXN0UG9zWSArIChwb3NZIC0gbGFzdFBvc1kpICogaW50ZXJwb2xhdGlvblJhdGlvO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhmaW5hbFBvc1gsIGZpbmFsUG9zWSk7XG4gICAgICAgIGVuZFBvc1ggPSBmaW5hbFBvc1g7XG4gICAgICAgIGVuZFBvc1kgPSBmaW5hbFBvc1k7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZ3JhcGhpY3MubGluZVRvKHBvc1gsIHBvc1kpO1xuXG4gICAgICBsYXN0UG9zWCA9IHBvc1g7XG4gICAgICBsYXN0UG9zWSA9IHBvc1k7XG5cbiAgICAgIGVuZFBvc1ggPSBwb3NYO1xuICAgICAgZW5kUG9zWSA9IHBvc1k7XG4gICAgfVxuXG4gICAgZ3JhcGhpY3Muc3Ryb2tlKCk7IC8vIFN0cm9rZSB0aGUgbGluZVxuXG4gICAgLy8gU2V0IHRoZSBhcnJvdydzIHBvc2l0aW9uIHRvIHRoZSBlbmQgb2YgdGhlIHRyYWplY3RvcnlcbiAgICBhcnJvd1Nwcml0ZS5zZXRQb3NpdGlvbihlbmRQb3NYLCBlbmRQb3NZKTtcbiAgICBsZXQgYXJyb3dBbmdsZVJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvbi55LCBkaXJlY3Rpb24ueCk7XG4gICAgbGV0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFycm93QW5nbGVSYWRpYW5zKTtcblxuICAgIGFycm93U3ByaXRlLmFuZ2xlID0gYW5nbGVJbkRlZ3JlZXM7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXJyb3coKSB7XG4gICAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUpO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjYy52MihNYXRoLmNvcyhhbmdsZUluUmFkaWFucyksIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKSk7XG5cbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XG5cbiAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IDI7XG5cbiAgICB0aGlzLmFycm93UmlnaWRCb2R5LmFwcGx5TGluZWFySW1wdWxzZShcbiAgICAgIGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlciksXG4gICAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdldFdvcmxkQ2VudGVyKCksXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlQXJyb3dBbmdsZSgpO1xuICAgIH0sIDAuMDEpO1xuICB9XG5cbiAgcHVibGljIHBsYXlUdXRvcmlhbEFuaW0oKSB7XG4gICAgbGV0IHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAgPSB0aGlzLnR1dG9yaWFsSGFuZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBjYy50d2Vlbih0aGlzLnR1dG9yaWFsSGFuZClcbiAgICAgIC5kZWxheSgwLjUpXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbmRIb2xkRnJhbWU7XG4gICAgICB9KVxuICAgICAgLmRlbGF5KDIpXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbmRJZGxlRnJhbWU7XG4gICAgICB9KVxuICAgICAgLnVuaW9uKClcbiAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbiAgcHVibGljIHN0b3BUdXRvcmlhbEFuaW0oKSB7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudHV0b3JpYWxIYW5kKTtcbiAgICB0aGlzLnR1dG9yaWFsSGFuZC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5QXVkaW8odHlwZTogQXVkaW9UeXBlLCBudW06IG51bWJlcikge1xuICAgIGlmIChudW0gPD0gMCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEF1ZGlvVHlwZS5QT1NJVElWRTpcbiAgICAgICAgdGhpcy5hdWRpb1NyYy5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvW251bSAtIDFdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQXVkaW9UeXBlLk5FR0FUSVZFOlxuICAgICAgICB0aGlzLmF1ZGlvU3JjLmNsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9bbnVtIC0gMV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuYXVkaW9TcmMucGxheSgpO1xuICB9XG5cbiAgcHVibGljIHBsYXlRdWVzdGlvbkF1ZGlvKCkge1xuICAgIGlmICh0aGlzLnF1ZXN0aW9uU291bmRbMF0pIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5sZXZlbGVuZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGltZXIgLyB0aGlzLmRlZmF1bHRUaW1lO1xuICAgICAgdGhpcy5ub2RlXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyMVwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5kZWZhdWx0VGltZSkge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgLy90aGlzLmxldmVsZW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VMaWZlKCk7XG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZHVjZUxpZmUoKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWR1Y2VsaWZlICQkJCQkJCQkJCQkJCQkJCQ6IFwiLCB0aGlzLmxpdmVzKTtcbiAgICBsZXQgY3VycmVudExpZmVOb2RlOiBjYy5Ob2RlO1xuICAgIGN1cnJlbnRMaWZlTm9kZSA9IHRoaXMubm9kZVxuICAgICAgLmdldENoaWxkQnlOYW1lKFwibGl2ZXNcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZSh0aGlzLmxpdmVzLnRvU3RyaW5nKCkpO1xuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudExpZmVOb2RlIDogXCIsIGN1cnJlbnRMaWZlTm9kZSk7XG4gICAgY2MudHdlZW4oY3VycmVudExpZmVOb2RlKVxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxNTAgfSlcbiAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgY3VycmVudExpZmVOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgfSlcbiAgICAgIC5zdGFydCgpO1xuICAgIHRoaXMubGl2ZXMgLT0gMTtcbiAgICBpZiAodGhpcy5saXZlcyA9PSAwKSB7XG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0R2FtZSgpIHtcbiAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XG4gIH1cblxuICByZXNldFRpbWVyKCkge1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyIC8gdGhpcy5kZWZhdWx0VGltZTtcbiAgICB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lcjFcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSB0aGlzLnZhbHVlO1xuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbG9ja3RpY2spO1xuICB9XG59XG4iXX0=
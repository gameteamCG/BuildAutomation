
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCw4RUFFbUQ7QUFDbkQsZ0RBQTJEO0FBQzNELG9EQUEwQztBQUMxQyxtQ0FBOEI7QUFDOUIscURBQWdEO0FBRWhELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTQ5Q0M7UUExOUNRLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7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QUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNnQjtJQWdDdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQTFJVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNDlDL0I7SUFBRCxrQkFBQztDQTU5Q0QsQUE0OUNDLENBNTlDd0MsRUFBRSxDQUFDLFNBQVMsR0E0OUNwRDtrQkE1OUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgSm9ja2V5Q29udHJvbGxlciwge1xyXG4gIEpPQ0tFWV9UWVBFLFxyXG59IGZyb20gXCIuLi8uLi9NYWluQXNzZXRzL1NjcmlwdHMvSm9ja2V5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBHQU1FX0VWRU5UUywgTG9nVHlwZXMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XHJcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5lbnVtIEF1ZGlvVHlwZSB7XHJcbiAgUE9TSVRJVkUsXHJcbiAgTkVHQVRJVkUsXHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcnVubmluZ1NGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgd3JvbmdTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIHRhcmdldEhpdFNGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uQ2xpcClcclxuICBwdWJsaWMgdXBEb3duQW5pbTogY2MuQW5pbWF0aW9uQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgcHVibGljIHJlYWxBcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIGZha2VBcnJvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgaW5wdXRCbG9ja2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHRyYWplY3RvcnlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyBxdWVzdGlvbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShUYXJnZXQpXHJcbiAgcHVibGljIHRhcmdldHM6IFRhcmdldFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICBwdWJsaWMgYXVkaW9TcmM6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIHB1YmxpYyBzcGluZUFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyB0cmFqTGltaXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgYXJyb3dIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgcHVibGljIHRyYWplY3RvcnlHcmF2OiBudW1iZXIgPSAxO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGhhbmRJZGxlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBoYW5kSG9sZEZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgYm93U3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgYXJyb3dTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyByb3VnaEFyZWFOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9kYXJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvZGFyTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNsb2NrVGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgdGFyZ2V0SW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyB0dXRvcmlhbEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJMZXZlbCA9IDE7XHJcbiAgcHVibGljIHN0YXRpYyByb3VnaFNoZWV0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHF1ZXN0aW9uU3VtID0gMDtcclxuICBwcml2YXRlIHNjb3JlID0gMDtcclxuICBwcml2YXRlIFRvdGFsT3B0aW9ucyA9IDM7XHJcbiAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1heExldmVsID0gMTtcclxuICBhbnN3ZXJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gIHRlbXBuYW1lOiBzdHJpbmcgPSBcIkFCQ0RcIjtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBwdWJsaWMgY29udGFpbmVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcmVhbEFycm93SW5zdGFuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDEwMDA7IC8vIGZpeGVkLCBjYW4gYmUgY2hhbmdlZCBsYXRlclxyXG4gIHByaXZhdGUgYXJyb3dSaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXVuY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbWFpbkJnU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHBsYXllckFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsZXZlbGVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XHJcbiAgcHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjbG9ja3RpY2s6IGFueTtcclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUXVlc3Rpb24oKSB7XHJcbiAgICBsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcclxuICAgIGxldCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IG51bTEgKyBudW0yO1xyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9IGAke251bTF9ICsgJHtudW0yfSA9ID9gO1xyXG4gICAgdGhpcy5jcmVhdGVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9ubG9hZEBAQEBAQEBAQEBAQEBAXCIpO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMucGxheWVyQW5pbSA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5ISVQsIHRoaXMub25IaXQsIHRoaXMpO1xyXG4gICAgRVZFTlRTLm9uKEdBTUVfRVZFTlRTLk1JU1MsIHRoaXMub25NaXNzLCB0aGlzKTtcclxuICAgIC8vdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50dXRvcmlhbEhhbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1R1dG9yaWFsSGFuZFwiKTtcclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB0aGlzLnRhcmdldE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFwiKTtcclxuICAgIHRoaXMudGFyZ2V0SW5pdFBvcyA9IHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbjtcclxuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWFpbkJnU3ByaXRlID0gdGhpcy5iZ05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgXS5xdWVzdGlvblRleHQ7XHJcblxyXG4gICAgLy8gbmV3IGNvZGVcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgIHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgIHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpO1xyXG5cclxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0aGlzLmFuc3dlckFycmF5W2ldID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bVtpXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLmFuc3dlck51bSA9IHBhcnNlSW50KFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5jb3JyZWN0QW5zd2VyTnVtLFxyXG4gICAgKTtcclxuICAgIHRoaXMucXVlc3Rpb25TdW0gPSB0aGlzLmFuc3dlck51bTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJDb3JyZWN0QW5zd2VyIDogXCIsXHJcbiAgICAgIHRoaXMuYW5zd2VyTnVtLFxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxyXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvblNvdW5kIG9ubG9hZDogXCIsIHRoaXMucXVlc3Rpb25Tb3VuZFswXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJmb3IgaSA6IFwiLCBpKTtcclxuICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSxcclxuICAgICk7XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGFydGluZ01vdmVtZW50KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0QEBAQEBAQEBAQEBAQEBcIik7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlO1xyXG5cclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEsXHJcbiAgICApO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMucG9kYXJQb3NpdGl2ZTtcclxuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5wb2Rhck5lZ2F0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5wbGF5VHV0b3JpYWxBbmltKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5sZXZlbGVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jbG9ja3RpY2sgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xvY2tUaWNrLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUdXRvcmlhbEhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgc2V0UXVlc3Rpb25TY3JlZW4oKSB7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgIGlmIChlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnF1ZXN0aW9uTGFiZWwuc3RyaW5nID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICBdLnF1ZXN0aW9uVGV4dDtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxyXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uaXNPcHRpb25UZXh0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXHJcbiAgICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yIGkgOiBcIiwgaSk7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9zWzBdLFxyXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5jb3JyZWN0QXVkaW9bMF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZShcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUsXHJcbiAgICApO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sZXZlbGVuZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuY2xvY2t0aWNrID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsb2NrVGljaywgdHJ1ZSk7XHJcbiAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5SYW5kb21OdW1iZXIobG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xyXG4gICAgbGV0IG1pbiA9IE1hdGguY2VpbChsb3cpO1xyXG4gICAgbGV0IG1heCA9IE1hdGguZmxvb3IoaGlnaCk7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gY2FuIGRlZmluZSBvdGhlciB1cHBlciBsaW1pdCBoZXJlXHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0aW5nTW92ZW1lbnQoKSB7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucnVubmluZ1NGWCwgZmFsc2UpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC00MTksIC04NSwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICB9LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucnVubmluZ1NGWCwgZmFsc2UpO1xyXG4gICAgY2MudHdlZW4odGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgIH0sIDAuNSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheVNwaW5lQW5pbUFuZElkbGUoXHJcbiAgICBhbmltTmFtZTogc3RyaW5nLFxyXG4gICAgbnVtOiBudW1iZXIsXHJcbiAgICBpc0NvcnJlY3Q6IGJvb2xlYW4sXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgYCR7YW5pbU5hbWV9JHtudW19YCwgZmFsc2UpO1xyXG4gICAgdGhpcy5zcGluZUFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gYCR7YW5pbU5hbWV9JHtudW19YCkge1xyXG4gICAgICAgIC8vIFBsYXkgdGhlIGlkbGUgYW5pbWF0aW9uIChlLmcuLCAnaWRsZScpIG9uY2UgdGhlIHByaW1hcnkgYW5pbWF0aW9uIGNvbXBsZXRlc1xyXG4gICAgICAgIHRoaXMuc3BpbmVBbmltLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5sZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5sZXZlbGVuZCk7XHJcbiAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgICAgICB0aGlzLnBhbm5pbmcoKTsgLy8gY29udGFpbnMgYWxsIHBhbm5pbmcgbG9naWMgYW5kIHN0dWZmXHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGxheWVyQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgIH0sIDAuMDEpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAgICAgICBpZiAoIWlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlkZWFsbHkgZmFrZSBhcnJvdyB2aXNpYmlsaXR5IHNob3VsZCBiZSB0b2dnbGVkIGhlcmUsIGJ1dCBsZXQncyBzZWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRUYXJnZXRDb2xvcnMoKSB7XHJcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQuc2V0RGVmQ29sb3IoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICB0aGlzLnNjb3JlKys7XHJcbiAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZS50b0ZpeGVkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlT3B0aW9ucygpIHtcclxuICAgIGxldCBvcHRpb25zOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgb3B0aW9uc1swXSA9IHRoaXMucXVlc3Rpb25TdW07XHJcbiAgICBkbyB7XHJcbiAgICAgIG9wdGlvbnNbMV0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA1MCk7XHJcbiAgICB9IHdoaWxlIChvcHRpb25zWzFdID09PSB0aGlzLnF1ZXN0aW9uU3VtKTtcclxuICAgIGRvIHtcclxuICAgICAgb3B0aW9uc1syXSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDUwKTtcclxuICAgIH0gd2hpbGUgKG9wdGlvbnNbMl0gPT09IG9wdGlvbnNbMV0gfHwgb3B0aW9uc1syXSA9PT0gdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJvcmlnaW5hbCBhcnJheVwiLCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgc2h1ZmZsZWRBcnIgPSB0aGlzLnNodWZmbGVPcHRpb25zKFsuLi5vcHRpb25zXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzaHVmZmxlZCBhcnJheVwiLCBzaHVmZmxlZEFycik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICB0aGlzLnRhcmdldHNbaV0uc2V0VmFsdWUoc2h1ZmZsZWRBcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuUm91Z2hBcmVhKCkge1xyXG4gICAgdGhpcy5yb3VnaEFyZWFOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBHYW1lTWFuYWdlci5yb3VnaFNoZWV0TW9kZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlQm93QW5kQXJyb3dTcHJpdGUoKSB7XHJcbiAgICBsZXQgYm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQm93XCIpO1xyXG4gICAgbGV0IGFycm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmFrZUFycm93XCIpO1xyXG5cclxuICAgIGJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgICBhcnJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaHVmZmxlT3B0aW9ucyhhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9IC8vIEZpc2hlciBZYXRlcyBTaHVmZmxlIGZvciBzaHVmZmxpbmcgdGhlIG9wdGlvbnNcclxuXHJcbiAgYWZ0ZXJSZWFjdGlvbigpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzLm5vZGUgQEBAQEBAQFwiLCB0aGlzLm5vZGUpXHJcbiAgICB0aGlzLnBsYXllck5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIik7XHJcbiAgICB0aGlzLnBsYXllckFuaW0gPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllckFuaW0ucGF1c2UoKTtcclxuICAgIH0sIDAuMDEpO1xyXG4gICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XHJcbiAgfVxyXG5cclxuICBvbkhpdCh0YXJnZXROb2RlOiBUYXJnZXQpIHtcclxuICAgIHRoaXMuYW5zd2VyTnVtID0gcGFyc2VJbnQoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgLmNvcnJlY3RBbnN3ZXJOdW0sXHJcbiAgICApO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IHRoaXMuYW5zd2VyTnVtO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCB0YXJnZXROb2RlIDogXCIsIHRhcmdldE5vZGUudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCBhbnN3ZXJOdW0gOiBcIiwgdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG4gICAgLy8gdGhpcy5jb21tb25BY3Rpb25zKCk7XHJcbiAgICB0aGlzLnRvZ2dsZUxhdW5jaChmYWxzZSk7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGFuZ2VBcnJvd0FuZ2xlKTtcclxuXHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGFyZ2V0SGl0U0ZYLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUudmFsdWUgPT09IHRoaXMucXVlc3Rpb25TdW0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJIb29yYXksIGNvcnJlY3QgYW5zd2VyXCIpO1xyXG4gICAgICAvL3RoaXMub25SaWdodEFuc3dlcigpO1xyXG4gICAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgMTApO1xyXG4gICAgICAvLyB0aGlzLnBsYXlTcGluZUFuaW1BbmRJZGxlKFwicG9zaXRpdmVfXCIsIG51bSwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5QT1NJVElWRSwgbnVtKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgIyMjIyMjI1wiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKVxyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbG9ja3RpY2spO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgIHRhcmdldE5vZGUuc2V0Q29sb3IoY2MuQ29sb3IuR1JFRU4pO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZnRlclJlYWN0aW9uKCk7XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvWzBdLmR1cmF0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib2ggd3JvbmcgYW5zd2VyLCB0cnkgYWdhaW5cIik7XHJcbiAgICAgIC8vIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcclxuICAgICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcIm5lZ2F0aXZlX1wiLCBudW0sIGZhbHNlKTtcclxuICAgICAgLy8gdGhpcy5wbGF5QXVkaW8oQXVkaW9UeXBlLk5FR0FUSVZFLCBudW0pO1xyXG5cclxuICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICB0YXJnZXROb2RlLnNldENvbG9yKGNjLkNvbG9yLlJFRCk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xyXG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVzdHJveUFycm93KDEpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEpvY2tleSgpIHtcclxuICAgIEpvY2tleUNvbnRyb2xsZXIuSk9DS0VZLmNhbGxKb2NrZXkoSk9DS0VZX1RZUEUuUE9TSVRJVkUsICgpID0+IHtcclxuICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zc2l0aXZlXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUyXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU1XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcbiAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcclxuICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xMjAwLCAxMjAwXTtcclxuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbE5leHRMZXZlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgIHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsIC0gMSwgZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmN1cnJMZXZlbCA6IFwiLCB0aGlzLmN1cnJMZXZlbCk7XHJcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGggKyAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgfSwgMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgIHRoaXMucGFubmluZygpOyAvLyBjb250YWlucyBhbGwgcGFubmluZyBsb2dpYyBhbmQgc3R1ZmZcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNhbGxTdGFyc0VhcmVkKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLnN0YXIxTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zdGFyMkxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuICAgICAgdGhpcy5zdGFyMkxvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnN0YXIzTG9nICYmXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc3RhcjNMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgIHJldHVybiBfbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgY2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcclxuICAgIHRoaXMucmVkdWNlTGlmZSgpO1xyXG4gICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgLy9fbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBKb2NrZXlDb250cm9sbGVyLkpPQ0tFWS5jYWxsSm9ja2V5KEpPQ0tFWV9UWVBFLk5FR0FUSVZFLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAvLyAgIGFuaW0gPSBbXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlXCIsXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlMlwiLFxyXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTNcIixcclxuICAgICAgLy8gICAgIFwibmVnZXRpdmU0XCIsXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlNVwiLFxyXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTZcIixcclxuICAgICAgLy8gICBdO1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgLy8gICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAvLyAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgLy8gICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIC8vICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuICAgICAgLy8gfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgIC8vICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAvLyAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLy8gICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLy8gICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC8vICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAvLyAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgLy8gICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAvLyAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgIC8vICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC8vICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgLy8gfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICB9LCAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmlnaHRBbnN3ZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsLCBmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VyckxldmVsIDogXCIsIHRoaXMuY3VyckxldmVsKTtcclxuICAgIGlmICh0aGlzLmN1cnJMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbmRnYW1lIHJlYWNoZWRcIik7XHJcbiAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICB9LCAyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0UXVlc3Rpb25TY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFubmluZygpO1xyXG4gICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3lBcnJvdyhvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sIG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFubmluZygpIHtcclxuICAgIC8vIGNvbnRhaW5zIGFsbCB0aGUgcGFubmluZyBmdW5jdGlvbnMgYW5kIG1ldGhvZHNcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikpXHJcbiAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzbW9vdGhcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKSlcclxuICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNtb290aFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBhbkJyaWRnZSgpO1xyXG4gICAgICAgIHRoaXMucGFuQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXllcigpO1xyXG4gICAgICAgIHRoaXMucGFuVGFyZ2V0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gdGhpcy5jaGFuZ2VCb3dBbmRBcnJvd1Nwcml0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhbkJyaWRnZSgpIHtcclxuICAgIGxldCBicmlkZ2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VcIik7XHJcbiAgICBsZXQgYnJpZGdlMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpO1xyXG5cclxuICAgIGxldCBicmlkZ2VfaW5pdF9wb3MgPSBicmlkZ2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCBicmlkZ2UyX2luaXRfcG9zID0gYnJpZGdlMi5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIGNjLnR3ZWVuKGJyaWRnZSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiAtMTUwMCB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBicmlkZ2Uuc2V0UG9zaXRpb24oYnJpZGdlX2luaXRfcG9zKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICBjYy50d2VlbihicmlkZ2UyKVxyXG4gICAgICAudG8oMC41LCB7IHg6IGJyaWRnZV9pbml0X3Bvcy54IH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGJyaWRnZTIuc2V0UG9zaXRpb24oYnJpZGdlMl9pbml0X3Bvcyk7XHJcbiAgICAgICAgYnJpZGdlMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFuQmFja2dyb3VuZCgpIHtcclxuICAgIGxldCBjbG9uZTEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJnTm9kZSk7XHJcbiAgICBsZXQgY2xvbmUyID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xyXG4gICAgdGhpcy5iZ05vZGUuYWRkQ2hpbGQoY2xvbmUxKTtcclxuICAgIHRoaXMuYmdOb2RlLmFkZENoaWxkKGNsb25lMik7XHJcbiAgICBjbG9uZTIucG9zaXRpb24gPSBuZXcgY2MuVmVjMygxOTIwLCAwKTtcclxuICAgIGxldCBjb21wMiA9IGNsb25lMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIC8vY29tcDIuc3ByaXRlRnJhbWUgPSB0aGlzLmJhY2tncm91bmRTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICAgIGNvbXAyLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuXHJcbiAgICBjYy50d2VlbihjbG9uZTEpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKC0xOTIwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBjbG9uZTEuZGVzdHJveSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICBjYy50d2VlbihjbG9uZTIpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKDAsIDApIH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFpbkJnU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm93QW5kQXJyb3dTcHJpdGUoKTtcclxuICAgICAgICBjbG9uZTIuZGVzdHJveSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYW5UYXJnZXQoKSB7XHJcbiAgICBsZXQgVGFyZ2V0RW5kUG9zID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UYXJnZXRFbmRQb3NcIik7XHJcbiAgICBsZXQgVGFyZ2V0U3RhcnRQb3MgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFN0YXJ0UG9zXCIpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMudGFyZ2V0Tm9kZSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+ICh0YXJnZXQubm9kZS5hY3RpdmUgPSBmYWxzZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBUYXJnZXRFbmRQb3MucG9zaXRpb24gfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlLnBvc2l0aW9uID0gVGFyZ2V0U3RhcnRQb3MucG9zaXRpb247XHJcbiAgICAgIH0pXHJcbiAgICAgIC5kZWxheSgwLjIpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IHRoaXMudGFyZ2V0SW5pdFBvcyB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiAodGFyZ2V0Lm5vZGUuYWN0aXZlID0gdHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBjb21tb25BY3Rpb25zKCkge1xyXG4gIC8vICAgdGhpcy5jdXJyTGV2ZWwrKztcclxuICAvLyAgIC8vICpFWFRFUk5BTFxyXG4gIC8vICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsLCBmYWxzZSk7XHJcbiAgLy8gICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gIC8vICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgLy8gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAvLyAgICAgfSwgMik7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgLy8gICAvLyAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAvLyAgIC8vICAgLy8gdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgLy8gICAvLyAgIC8vIHRoaXMuZ2VuZXJhdGVRdWVzdGlvbigpO1xyXG4gIC8vICAgLy8gfSwgMSk7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgb25NaXNzKCkge1xyXG4gICAgLy8gdGhpcy5jb21tb25BY3Rpb25zKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlTGF1bmNoKGZhbHNlKTtcclxuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hhbmdlQXJyb3dBbmdsZSk7XHJcbiAgICB9LCAyKTtcclxuICAgIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcclxuICAgIC8vIHRoaXMucGxheVNwaW5lQW5pbUFuZElkbGUoXCJuZWdhdGl2ZV9cIiwgbnVtLCBmYWxzZSk7XHJcbiAgICAvLyB0aGlzLnBsYXlBdWRpbyhBdWRpb1R5cGUuTkVHQVRJVkUsIG51bSk7XHJcbiAgICB0aGlzLmFmdGVyUmVhY3Rpb24oKTtcclxuICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZUFycm93QW5nbGUoKSB7XHJcbiAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5sYXVuY2gpIHtcclxuICAgICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLmFycm93UmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgdGhlIGFuZ2xlIGZyb20gcmFkaWFucyB0byBkZWdyZWVzXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICAgIC8vIEFwcGx5IHRoZSByb3RhdGlvbiB0byB0aGUgYXJyb3dcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVG91Y2hTdGFydCgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlR1dG9yaWFsSGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcFR1dG9yaWFsQW5pbSgpO1xyXG4gICAgdGhpcy5wbGF5RGVmQW5pbSgpO1xyXG4gICAgdGhpcy5hcnJvd0hlYWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMudHdlZW5BbmltYXRpb24oKTtcclxuICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3VHJhamVjdG9yeSgpO1xyXG4gICAgfSwgMC4wMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ub3VjaEVuZCgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy50b2dnbGVMYXVuY2godHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jcmVhdGVOZXdBcnJvdygpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUxhdW5jaCh0cnVlKTtcclxuICAgICAgLy8gdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgdGhpcy5sYXVuY2hBcnJvdygpO1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kcmF3VHJhamVjdG9yeSk7XHJcbiAgICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIHRoaXMubGF1bmNoQXJyb3coKTtcclxuICAgIC8vIHRoaXMuc3RvcFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlTGF1bmNoKHZhbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5sYXVuY2ggPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheURlZkFuaW0oKSB7XHJcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSh0aGlzLnVwRG93bkFuaW0ubmFtZSk7XHJcbiAgICAvLyB0aGlzLnR3ZWVuQXJyb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wQW5pbSgpIHtcclxuICAgIHRoaXMucGxheWVyQW5pbS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZU5ld0Fycm93KCkge1xyXG4gICAgaWYgKHRoaXMucmVhbEFycm93SW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluc3RhbmNlIG5vdCBlbXB0eSwgZGVzdHJveWluZ1wiKTtcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlYWxBcnJvdyk7XHJcbiAgICB0aGlzLnBsYXllck5vZGUuYWRkQ2hpbGQodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSk7XHJcbiAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5mYWtlQXJyb3dOb2RlLnBvc2l0aW9uO1xyXG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IHRoaXMuZmFrZUFycm93Tm9kZS5hbmdsZTtcclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkgPSB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgbGV0IHJlYWxBcnJvd1Nwcml0ZSA9IHRoaXMucmVhbEFycm93SW5zdGFuY2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAvLyByZWFsQXJyb3dTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmFycm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybjtcclxuICAgIHRoaXMuZmFrZUFycm93Tm9kZS5hY3RpdmUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICAvLyAqSU5GTzogdGhpcyBmdW5jdGlvbiBpcyBjb21wbGV0ZWx5IGhpdCBhbmQgdHJpYWwsIHNvIHZhbHVlcyB3aWxsIGhhdmUgdG8gYmUgY2hhbmdlZCBoZXJlXHJcbiAgLy8gdG8gbWF0Y2ggdGhlIHByb2plY3RpbGUgcGF0aFxyXG4gIHB1YmxpYyBkcmF3VHJhamVjdG9yeSgpIHtcclxuICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy50cmFqZWN0b3J5Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgIGNvbnN0IGFycm93U3ByaXRlID0gdGhpcy5hcnJvd0hlYWQ7XHJcblxyXG4gICAgLy8gQ2xlYXIgYW55IHByZXZpb3VzIGRyYXdpbmdcclxuICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgLy8gU2V0IHN0cm9rZSBjb2xvciB0byByZWRcclxuICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEOyAvLyBPcHRpb25hbDogU2V0IGZpbGwgY29sb3IgdG8gcmVkXHJcblxyXG4gICAgLy8gR2V0IHRoZSBhbmdsZSBmcm9tIHRoZSBmYWtlIGFycm93IG5vZGUgKGJlZm9yZSBsYXVuY2gpXHJcbiAgICBsZXQgYW5nbGVJblJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5mYWtlQXJyb3dOb2RlLmFuZ2xlKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgYmFzZWQgb24gdGhlIGFuZ2xlXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gY2NcclxuICAgICAgLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKVxyXG4gICAgICAubm9ybWFsaXplKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCB2ZWxvY2l0eSBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uIGFuZCBwb3dlclxyXG4gICAgbGV0IGluaXRpYWxWZWxvY2l0eSA9IGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlcik7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgZmFrZSBhcnJvdyBub2RlXHJcbiAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmZha2VBcnJvd05vZGUucG9zaXRpb247XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgZ3Jhdml0eSAoYXMgeW91IGFyZSB1c2luZyBwaHlzaWNzLCBhc3N1bWUgZ3Jhdml0eSBpcyAtMzIwIGJ5IGRlZmF1bHQpXHJcbiAgICBsZXQgZ3Jhdml0eSA9IGNjLnYyKDAsIC0zMjAgKiB0aGlzLnRyYWplY3RvcnlHcmF2KTsgLy8gQWRqdXN0IGdyYXZpdHkgc2NhbGVcclxuXHJcbiAgICAvLyBUaW1lIHN0ZXAgYW5kIHRvdGFsIHRpbWUgZm9yIHNpbXVsYXRpbmcgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCB0aW1lU3RlcCA9IDAuMDE7XHJcbiAgICBsZXQgc2ltdWxhdGlvblRpbWUgPSAoMiAqIGluaXRpYWxWZWxvY2l0eS55KSAvIC1ncmF2aXR5Lnk7IC8vIFRvdGFsIHRpbWUgb2YgZmxpZ2h0XHJcbiAgICBzaW11bGF0aW9uVGltZSA9IE1hdGgubWF4KHNpbXVsYXRpb25UaW1lLCAyKTsgLy8gRW5zdXJlIHNpbXVsYXRpb24gdGltZSBpcyBhdCBsZWFzdCAyIHNlY29uZHNcclxuXHJcbiAgICBsZXQgbGltaXRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyBTdGFydCBkcmF3aW5nIHRoZSB0cmFqZWN0b3J5XHJcbiAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgbGV0IGxhc3RQb3NYID0gc3RhcnRQb3MueDtcclxuICAgIGxldCBsYXN0UG9zWSA9IHN0YXJ0UG9zLnk7XHJcblxyXG4gICAgbGV0IGVuZFBvc1ggPSBzdGFydFBvcy54OyAvLyBUbyBzdG9yZSB0aGUgZmluYWwgcG9zaXRpb24gb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCBlbmRQb3NZID0gc3RhcnRQb3MueTtcclxuXHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHNpbXVsYXRpb25UaW1lOyB0ICs9IHRpbWVTdGVwKSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgdGltZSB0XHJcbiAgICAgIGxldCBwb3NYID0gc3RhcnRQb3MueCArIGluaXRpYWxWZWxvY2l0eS54ICogdDtcclxuICAgICAgbGV0IHBvc1kgPSBzdGFydFBvcy55ICsgaW5pdGlhbFZlbG9jaXR5LnkgKiB0ICsgMC41ICogZ3Jhdml0eS55ICogdCAqIHQ7XHJcblxyXG4gICAgICAvLyBEcmF3IGEgbGluZSB0byB0aGUgcHJlZGljdGVkIHBvc2l0aW9uXHJcbiAgICAgIGxldCBwb3NFeHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuICAgICAgaWYgKHBvc1ggPj0gcG9zRXhwLnggLSAxNTApIHtcclxuICAgICAgICBsZXQgb3ZlcnNob290WCA9IHBvc1ggLSAobGltaXRQb3MueCAtIDE1MCk7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25SYXRpbyA9IDEgLSBvdmVyc2hvb3RYIC8gKHBvc1ggLSBsYXN0UG9zWCk7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbFBvc1ggPSBsYXN0UG9zWCArIChwb3NYIC0gbGFzdFBvc1gpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG4gICAgICAgIGxldCBmaW5hbFBvc1kgPSBsYXN0UG9zWSArIChwb3NZIC0gbGFzdFBvc1kpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG5cclxuICAgICAgICBncmFwaGljcy5saW5lVG8oZmluYWxQb3NYLCBmaW5hbFBvc1kpO1xyXG4gICAgICAgIGVuZFBvc1ggPSBmaW5hbFBvc1g7XHJcbiAgICAgICAgZW5kUG9zWSA9IGZpbmFsUG9zWTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBncmFwaGljcy5saW5lVG8ocG9zWCwgcG9zWSk7XHJcblxyXG4gICAgICBsYXN0UG9zWCA9IHBvc1g7XHJcbiAgICAgIGxhc3RQb3NZID0gcG9zWTtcclxuXHJcbiAgICAgIGVuZFBvc1ggPSBwb3NYO1xyXG4gICAgICBlbmRQb3NZID0gcG9zWTtcclxuICAgIH1cclxuXHJcbiAgICBncmFwaGljcy5zdHJva2UoKTsgLy8gU3Ryb2tlIHRoZSBsaW5lXHJcblxyXG4gICAgLy8gU2V0IHRoZSBhcnJvdydzIHBvc2l0aW9uIHRvIHRoZSBlbmQgb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGFycm93U3ByaXRlLnNldFBvc2l0aW9uKGVuZFBvc1gsIGVuZFBvc1kpO1xyXG4gICAgbGV0IGFycm93QW5nbGVSYWRpYW5zID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpO1xyXG4gICAgbGV0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFycm93QW5nbGVSYWRpYW5zKTtcclxuXHJcbiAgICBhcnJvd1Nwcml0ZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxhdW5jaEFycm93KCkge1xyXG4gICAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUpO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGNjLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKTtcclxuXHJcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hcnJvd1JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAyO1xyXG5cclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkuYXBwbHlMaW5lYXJJbXB1bHNlKFxyXG4gICAgICBkaXJlY3Rpb24ubXVsKHRoaXMucG93ZXIpLFxyXG4gICAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdldFdvcmxkQ2VudGVyKCksXHJcbiAgICAgIHRydWUsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZUFycm93QW5nbGUoKTtcclxuICAgIH0sIDAuMDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlUdXRvcmlhbEFuaW0oKSB7XHJcbiAgICBsZXQgdHV0b3JpYWxIYW5kU3ByaXRlQ29tcCA9IHRoaXMudHV0b3JpYWxIYW5kLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgY2MudHdlZW4odGhpcy50dXRvcmlhbEhhbmQpXHJcbiAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0dXRvcmlhbEhhbmRTcHJpdGVDb21wLnNwcml0ZUZyYW1lID0gdGhpcy5oYW5kSG9sZEZyYW1lO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoMilcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbmRJZGxlRnJhbWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC51bmlvbigpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcFR1dG9yaWFsQW5pbSgpIHtcclxuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnR1dG9yaWFsSGFuZCk7XHJcbiAgICB0aGlzLnR1dG9yaWFsSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5QXVkaW8odHlwZTogQXVkaW9UeXBlLCBudW06IG51bWJlcikge1xyXG4gICAgaWYgKG51bSA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQXVkaW9UeXBlLlBPU0lUSVZFOlxyXG4gICAgICAgIHRoaXMuYXVkaW9TcmMuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb1tudW0gLSAxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBdWRpb1R5cGUuTkVHQVRJVkU6XHJcbiAgICAgICAgdGhpcy5hdWRpb1NyYy5jbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvW251bSAtIDFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXVkaW9TcmMucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgaWYgKHRoaXMucXVlc3Rpb25Tb3VuZFswXSkge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmxldmVsZW5kKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyIC8gdGhpcy5kZWZhdWx0VGltZTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuZGVmYXVsdFRpbWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAvL3RoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVkdWNlTGlmZSgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWR1Y2VMaWZlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSZWR1Y2VsaWZlICQkJCQkJCQkJCQkJCQkJCQ6IFwiLCB0aGlzLmxpdmVzKTtcclxuICAgIGxldCBjdXJyZW50TGlmZU5vZGU6IGNjLk5vZGU7XHJcbiAgICBjdXJyZW50TGlmZU5vZGUgPSB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwibGl2ZXNcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMubGl2ZXMudG9TdHJpbmcoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRMaWZlTm9kZSA6IFwiLCBjdXJyZW50TGlmZU5vZGUpO1xyXG4gICAgY2MudHdlZW4oY3VycmVudExpZmVOb2RlKVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudExpZmVOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIHRoaXMubGl2ZXMgLT0gMTtcclxuICAgIGlmICh0aGlzLmxpdmVzID09IDApIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lcigpIHtcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50aW1lciAvIHRoaXMuZGVmYXVsdFRpbWU7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXIxXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSB0aGlzLnZhbHVlO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmNsb2NrdGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
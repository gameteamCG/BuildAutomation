
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
// import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
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
        this.questionLabel.string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        // new code
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font = _this.jaipuria_font;
            });
        }
        this.optionsNode = this.node.getChildByName("Target");
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
        //   this.answerArray[i] = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i];
        // }
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("CorrectAnswer : ", this.answerNum, globalVariables_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
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
                        _this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
                console.log("QuestionSound onload: ", _this.questionSound[0]);
            });
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_2.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_2(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[0], function (AudioClip) {
                _this.correctAudio[0] = AudioClip;
            });
        }
        this.currentJcokey = StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJcokey.active = true;
    };
    GameManager.prototype.start = function () {
        var _this = this;
        console.log("start@@@@@@@@@@@@@@");
        this.value = this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange;
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
                element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = null;
            }
        });
        this.questionLabel.string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
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
                        _this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_3.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_3 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_3(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_4.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_4.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[0], function (AudioClip) {
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
    GameManager.prototype.movePlayer = function () {
        var _this = this;
        this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
        this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
        this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
        this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
        cc.tween(this.playerNode)
            .by(0.25, { position: cc.v3(100, 0, 0) }, { easing: "quartOut" })
            .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
            .start();
        this.scheduleOnce(function () {
            _this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
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
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("onHit targetNode : ", targetNode.value);
        console.log("onHit answerNum : ", this.questionSum);
        // this.commonActions();
        this.toggleLaunch(false);
        this.unschedule(this.changeArrowAngle);
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
            targetNode.setColor(cc.Color.RED);
            this.afterReaction();
            this.callNegativeRection();
        }
        this.destroyArrow(1);
    };
    GameManager.prototype.callJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
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
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
    GameManager.prototype.onSoundButtonClick = function () {
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
        if (!this.star3Log && globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
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
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                if (StartGame_1.default.Instance.jockeyName == "Podar") {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                }
                else {
                    _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                }
                _this.canTouch = true;
            }, _this.negativeAudio[currentClipNum].duration);
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
        this.panBackground();
        this.movePlayer();
        this.panTarget();
        // this.changeBowAndArrowSprite();
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
        comp2.spriteFrame = this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame;
        cc.tween(clone1)
            .to(0.5, { position: new cc.Vec3(-1920, 0) }, { easing: "quartOut" })
            .call(function () {
            clone1.destroy();
        })
            .start();
        cc.tween(clone2)
            .to(0.5, { position: new cc.Vec3(0, 0) }, { easing: "quartOut" })
            .call(function () {
            _this.mainBgSprite.spriteFrame =
                _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame;
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
            _this.targetNode.position = TargetStartPos.position;
        })
            .delay(0.2)
            .to(0.5, { position: this.targetInitPos }, { easing: "quartOut" })
            .call(function () {
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
        this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
        this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
        this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
        this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
            _this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
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
    GameManager.prototype.update = function () {
        if (!this.levelend) {
            this.value = this.timer / this.defaultTime;
            this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange = this.value;
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
        currentLifeNode = this.node.getChildByName("lives").getChildByName(this.lives.toString());
        console.log("currentLifeNode : ", currentLifeNode);
        cc.tween(currentLifeNode)
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 })
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 }).call(function () {
            currentLifeNode.opacity = 0;
        }).start();
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
        this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange = this.value;
        cc.audioEngine.stop(this.clocktick);
    };
    var GameManager_1;
    GameManager.roughSheetMode = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQXdGO0FBQ3hGLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QsZ0RBQTJEO0FBQzNELG9EQUEwQztBQUMxQyxtQ0FBOEI7QUFDOUIscURBQWdEO0FBRWhELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlvQ0M7UUEvbkNRLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQXFCLElBQUksQ0FBQztRQUdwQyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFHdkIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFHM0IsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FB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UUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0RBQzRCO0lBR3JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ21CO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDb0I7SUFJM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDZ0I7SUFnQ3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ087SUFsSVQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlvQy9CO0lBQUQsa0JBQUM7Q0Fqb0NELEFBaW9DQyxDQWpvQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBaW9DcEQ7a0JBam9Db0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NiYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCB7IEdBTUVfRVZFTlRTLCBMb2dUeXBlcyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IEVWRU5UUyBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTeXN0ZW1cIjtcclxuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmVudW0gQXVkaW9UeXBlIHtcclxuICBQT1NJVElWRSxcclxuICBORUdBVElWRSxcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BbmltYXRpb25DbGlwKVxyXG4gIHB1YmxpYyB1cERvd25BbmltOiBjYy5BbmltYXRpb25DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBwdWJsaWMgcmVhbEFycm93OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgZmFrZUFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyBpbnB1dEJsb2NrZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgdHJhamVjdG9yeU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcHVibGljIHF1ZXN0aW9uTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KFRhcmdldClcclxuICBwdWJsaWMgdGFyZ2V0czogVGFyZ2V0W10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gIHB1YmxpYyBhdWRpb1NyYzogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgcHVibGljIHNwaW5lQW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcHVibGljIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHRyYWpMaW1pdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyBhcnJvd0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgdHJhamVjdG9yeUdyYXY6IG51bWJlciA9IDE7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgaGFuZElkbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGhhbmRIb2xkRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBib3dTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBhcnJvd1Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGJhY2tncm91bmRTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHJvdWdoQXJlYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgYmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9kYXJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvZGFyTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNsb2NrVGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgdGFyZ2V0SW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyB0dXRvcmlhbEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJMZXZlbCA9IDE7XHJcbiAgcHVibGljIHN0YXRpYyByb3VnaFNoZWV0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHF1ZXN0aW9uU3VtID0gMDtcclxuICBwcml2YXRlIHNjb3JlID0gMDtcclxuICBwcml2YXRlIFRvdGFsT3B0aW9ucyA9IDM7XHJcbiAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1heExldmVsID0gMTtcclxuICBhbnN3ZXJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gIHRlbXBuYW1lOiBzdHJpbmcgPSBcIkFCQ0RcIjtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBwdWJsaWMgY29udGFpbmVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcmVhbEFycm93SW5zdGFuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDEwMDA7IC8vIGZpeGVkLCBjYW4gYmUgY2hhbmdlZCBsYXRlclxyXG4gIHByaXZhdGUgYXJyb3dSaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXVuY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbWFpbkJnU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHBsYXllckFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsZXZlbGVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XHJcbiAgcHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjbG9ja3RpY2s6IGFueTtcclxuXHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xyXG4gICAgbGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCk7XHJcbiAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcclxuICAgIHRoaXMucXVlc3Rpb25TdW0gPSBudW0xICsgbnVtMjtcclxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC5zdHJpbmcgPSBgJHtudW0xfSArICR7bnVtMn0gPSA/YDtcclxuICAgIHRoaXMuY3JlYXRlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmxvYWRAQEBAQEBAQEBAQEBAQFwiKTtcclxuICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMSwgZmFsc2UpO1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMucGxheWVyQW5pbSA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5ISVQsIHRoaXMub25IaXQsIHRoaXMpO1xyXG4gICAgRVZFTlRTLm9uKEdBTUVfRVZFTlRTLk1JU1MsIHRoaXMub25NaXNzLCB0aGlzKTtcclxuICAgIC8vdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50dXRvcmlhbEhhbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1R1dG9yaWFsSGFuZFwiKTtcclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB0aGlzLnRhcmdldE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFwiKTtcclxuICAgIHRoaXMudGFyZ2V0SW5pdFBvcyA9IHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbjtcclxuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWFpbkJnU3ByaXRlID0gdGhpcy5iZ05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uVGV4dDtcclxuXHJcblxyXG4gICAgLy8gbmV3IGNvZGVcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMub3B0aW9uc05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIik7XHJcblxyXG4gICAgdGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscztcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGBsZXZlbFN0YXJ0ZWQtLWAgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5tYWluQmc7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIHRoaXMuYW5zd2VyQXJyYXlbaV0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtW2ldO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMuYW5zd2VyTnVtID0gcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bSk7XHJcbiAgICB0aGlzLnF1ZXN0aW9uU3VtID0gdGhpcy5hbnN3ZXJOdW07XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDb3JyZWN0QW5zd2VyIDogXCIsIHRoaXMuYW5zd2VyTnVtLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHJcblxyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbMF0sIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb25Tb3VuZCBvbmxvYWQ6IFwiLCB0aGlzLnF1ZXN0aW9uU291bmRbMF0pO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yIGkgOiBcIiwgaSk7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zWzBdLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuICAgIHRoaXMuY3VycmVudEpjb2tleS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzdGFydEBAQEBAQEBAQEBAQEBAXCIpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpLmdldENoaWxkQnlOYW1lKFwidGltZXIxXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZTtcclxuXHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEpO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcclxuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5iYWdOZWdhdGl2ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnBvZGFyUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMucG9kYXJOZWdhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMucGxheVR1dG9yaWFsQW5pbSgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMubGV2ZWxlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2xvY2t0aWNrID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsb2NrVGljaywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVHV0b3JpYWxIYW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICB9LCAxKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRRdWVzdGlvblNjcmVlbigpIHtcclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICBpZiAoZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnF1ZXN0aW9uTGFiZWwuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25UZXh0O1xyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbMF0sIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yIGkgOiBcIiwgaSk7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zWzBdLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5jb3JyZWN0QXVkaW9bMF0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGV2ZWxlbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgICAgICB0aGlzLmNsb2NrdGljayA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbG9ja1RpY2ssIHRydWUpO1xyXG4gICAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pXHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5SYW5kb21OdW1iZXIobG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xyXG4gICAgbGV0IG1pbiA9IE1hdGguY2VpbChsb3cpO1xyXG4gICAgbGV0IG1heCA9IE1hdGguZmxvb3IoaGlnaCk7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gY2FuIGRlZmluZSBvdGhlciB1cHBlciBsaW1pdCBoZXJlXHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xyXG4gICAgY2MudHdlZW4odGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICB9LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlTcGluZUFuaW1BbmRJZGxlKFxyXG4gICAgYW5pbU5hbWU6IHN0cmluZyxcclxuICAgIG51bTogbnVtYmVyLFxyXG4gICAgaXNDb3JyZWN0OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgYCR7YW5pbU5hbWV9JHtudW19YCwgZmFsc2UpO1xyXG4gICAgdGhpcy5zcGluZUFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gYCR7YW5pbU5hbWV9JHtudW19YCkge1xyXG4gICAgICAgIC8vIFBsYXkgdGhlIGlkbGUgYW5pbWF0aW9uIChlLmcuLCAnaWRsZScpIG9uY2UgdGhlIHByaW1hcnkgYW5pbWF0aW9uIGNvbXBsZXRlc1xyXG4gICAgICAgIHRoaXMuc3BpbmVBbmltLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5sZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5sZXZlbGVuZCk7XHJcbiAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgICAgICB0aGlzLnBhbm5pbmcoKTsgLy8gY29udGFpbnMgYWxsIHBhbm5pbmcgbG9naWMgYW5kIHN0dWZmXHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGxheWVyQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgIH0sIDAuMDEpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAgICAgICBpZiAoIWlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlkZWFsbHkgZmFrZSBhcnJvdyB2aXNpYmlsaXR5IHNob3VsZCBiZSB0b2dnbGVkIGhlcmUsIGJ1dCBsZXQncyBzZWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRUYXJnZXRDb2xvcnMoKSB7XHJcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQuc2V0RGVmQ29sb3IoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICB0aGlzLnNjb3JlKys7XHJcbiAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZS50b0ZpeGVkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlT3B0aW9ucygpIHtcclxuICAgIGxldCBvcHRpb25zOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgb3B0aW9uc1swXSA9IHRoaXMucXVlc3Rpb25TdW07XHJcbiAgICBkbyB7XHJcbiAgICAgIG9wdGlvbnNbMV0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA1MCk7XHJcbiAgICB9IHdoaWxlIChvcHRpb25zWzFdID09PSB0aGlzLnF1ZXN0aW9uU3VtKTtcclxuICAgIGRvIHtcclxuICAgICAgb3B0aW9uc1syXSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDUwKTtcclxuICAgIH0gd2hpbGUgKG9wdGlvbnNbMl0gPT09IG9wdGlvbnNbMV0gfHwgb3B0aW9uc1syXSA9PT0gdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJvcmlnaW5hbCBhcnJheVwiLCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgc2h1ZmZsZWRBcnIgPSB0aGlzLnNodWZmbGVPcHRpb25zKFsuLi5vcHRpb25zXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzaHVmZmxlZCBhcnJheVwiLCBzaHVmZmxlZEFycik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICB0aGlzLnRhcmdldHNbaV0uc2V0VmFsdWUoc2h1ZmZsZWRBcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvcGVuUm91Z2hBcmVhKCkge1xyXG4gICAgdGhpcy5yb3VnaEFyZWFOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBHYW1lTWFuYWdlci5yb3VnaFNoZWV0TW9kZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlQm93QW5kQXJyb3dTcHJpdGUoKSB7XHJcbiAgICBsZXQgYm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQm93XCIpO1xyXG4gICAgbGV0IGFycm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmFrZUFycm93XCIpO1xyXG5cclxuICAgIGJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgICBhcnJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaHVmZmxlT3B0aW9ucyhhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9IC8vIEZpc2hlciBZYXRlcyBTaHVmZmxlIGZvciBzaHVmZmxpbmcgdGhlIG9wdGlvbnNcclxuXHJcblxyXG4gIGFmdGVyUmVhY3Rpb24oKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5ub2RlIEBAQEBAQEBcIiwgdGhpcy5ub2RlKVxyXG4gICAgdGhpcy5wbGF5ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpO1xyXG4gICAgdGhpcy5wbGF5ZXJBbmltID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgdGhpcy5wbGF5ZXJBbmltLnBsYXkoKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXJBbmltLnBhdXNlKCk7XHJcbiAgICB9LCAwLjAxKTtcclxuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXNldFRhcmdldENvbG9ycygpO1xyXG4gIH1cclxuXHJcbiAgb25IaXQodGFyZ2V0Tm9kZTogVGFyZ2V0KSB7XHJcbiAgICB0aGlzLmFuc3dlck51bSA9IHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IHRoaXMuYW5zd2VyTnVtO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCB0YXJnZXROb2RlIDogXCIsIHRhcmdldE5vZGUudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCBhbnN3ZXJOdW0gOiBcIiwgdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG5cclxuICAgIC8vIHRoaXMuY29tbW9uQWN0aW9ucygpO1xyXG4gICAgdGhpcy50b2dnbGVMYXVuY2goZmFsc2UpO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hhbmdlQXJyb3dBbmdsZSk7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUudmFsdWUgPT09IHRoaXMucXVlc3Rpb25TdW0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJIb29yYXksIGNvcnJlY3QgYW5zd2VyXCIpO1xyXG4gICAgICAvL3RoaXMub25SaWdodEFuc3dlcigpO1xyXG4gICAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgMTApO1xyXG4gICAgICAvLyB0aGlzLnBsYXlTcGluZUFuaW1BbmRJZGxlKFwicG9zaXRpdmVfXCIsIG51bSwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5QT1NJVElWRSwgbnVtKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgIyMjIyMjI1wiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKVxyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbG9ja3RpY2spO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgIHRhcmdldE5vZGUuc2V0Q29sb3IoY2MuQ29sb3IuR1JFRU4pO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZnRlclJlYWN0aW9uKCk7XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvWzBdLmR1cmF0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib2ggd3JvbmcgYW5zd2VyLCB0cnkgYWdhaW5cIik7XHJcbiAgICAgIC8vIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcclxuICAgICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcIm5lZ2F0aXZlX1wiLCBudW0sIGZhbHNlKTtcclxuICAgICAgLy8gdGhpcy5wbGF5QXVkaW8oQXVkaW9UeXBlLk5FR0FUSVZFLCBudW0pO1xyXG4gICAgICB0YXJnZXROb2RlLnNldENvbG9yKGNjLkNvbG9yLlJFRCk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xyXG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVzdHJveUFycm93KDEpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNhbGxKb2NrZXkoKSB7XHJcbiAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc3NpdGl2ZVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfNlwiXTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG4gICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XHJcbiAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxOZXh0TGV2ZWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICB0aGlzLmNhbGxTdGFyc0VhcmVkKCk7XHJcblxyXG5cclxuICAgIHRoaXMuY3VyckxldmVsKys7XHJcbiAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyTGV2ZWwgLSAxLCBmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VyckxldmVsIDogXCIsIHRoaXMuY3VyckxldmVsKTtcclxuICAgIGlmICh0aGlzLmN1cnJMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbmRnYW1lIHJlYWNoZWRcIik7XHJcbiAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICB9LCAyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgIHRoaXMucGFubmluZygpOyAvLyBjb250YWlucyBhbGwgcGFubmluZyBsb2dpYyBhbmQgc3R1ZmZcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uU291bmRCdXR0b25DbGljaygpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY2FsbFN0YXJzRWFyZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhcjFMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgIHRoaXMuc3RhcjFMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXIyTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICB0aGlzLnN0YXIyTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zdGFyM0xvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgdGhpcy5zdGFyM0xvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcclxuICAgIHRoaXMucmVkdWNlTGlmZSgpO1xyXG4gICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgLy9fbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdldGl2ZVwiLCBcIm5lZ2V0aXZlMlwiLCBcIm5lZ2V0aXZlM1wiLCBcIm5lZ2V0aXZlNFwiLCBcIm5lZ2V0aXZlNVwiLCBcIm5lZ2V0aXZlNlwiXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5vXCJdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJ0cnlfYWdhaW5cIl07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICB9LCAwLjcpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgb25SaWdodEFuc3dlcigpIHtcclxuICAgIHRoaXMuY3VyckxldmVsKys7XHJcbiAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyTGV2ZWwsIGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5jdXJyTGV2ZWwgOiBcIiwgdGhpcy5jdXJyTGV2ZWwpO1xyXG4gICAgaWYgKHRoaXMuY3VyckxldmVsID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnMubGVuZ3RoICsgMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVuZGdhbWUgcmVhY2hlZFwiKTtcclxuICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0UXVlc3Rpb25TY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFubmluZygpO1xyXG4gICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3lBcnJvdyhvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sIG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFubmluZygpIHtcclxuICAgIC8vIGNvbnRhaW5zIGFsbCB0aGUgcGFubmluZyBmdW5jdGlvbnMgYW5kIG1ldGhvZHNcclxuICAgIHRoaXMucGFuQmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5tb3ZlUGxheWVyKCk7XHJcbiAgICB0aGlzLnBhblRhcmdldCgpO1xyXG4gICAgLy8gdGhpcy5jaGFuZ2VCb3dBbmRBcnJvd1Nwcml0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhbkJhY2tncm91bmQoKSB7XHJcbiAgICBsZXQgY2xvbmUxID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xyXG4gICAgbGV0IGNsb25lMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmdOb2RlKTtcclxuICAgIHRoaXMuYmdOb2RlLmFkZENoaWxkKGNsb25lMSk7XHJcbiAgICB0aGlzLmJnTm9kZS5hZGRDaGlsZChjbG9uZTIpO1xyXG4gICAgY2xvbmUyLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoMTkyMCwgMCk7XHJcbiAgICBsZXQgY29tcDIgPSBjbG9uZTIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAvL2NvbXAyLnNwcml0ZUZyYW1lID0gdGhpcy5iYWNrZ3JvdW5kU3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgICBjb21wMi5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xyXG5cclxuICAgIGNjLnR3ZWVuKGNsb25lMSlcclxuICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoLTE5MjAsIDApIH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGNsb25lMS5kZXN0cm95KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGNjLnR3ZWVuKGNsb25lMilcclxuICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYWluQmdTcHJpdGUuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VCb3dBbmRBcnJvd1Nwcml0ZSgpO1xyXG4gICAgICAgIGNsb25lMi5kZXN0cm95KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhblRhcmdldCgpIHtcclxuICAgIGxldCBUYXJnZXRFbmRQb3MgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldEVuZFBvc1wiKTtcclxuICAgIGxldCBUYXJnZXRTdGFydFBvcyA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZXBsYXkvVGFyZ2V0U3RhcnRQb3NcIik7XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy50YXJnZXROb2RlKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gKHRhcmdldC5ub2RlLmFjdGl2ZSA9IGZhbHNlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IFRhcmdldEVuZFBvcy5wb3NpdGlvbiB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUucG9zaXRpb24gPSBUYXJnZXRTdGFydFBvcy5wb3NpdGlvbjtcclxuICAgICAgfSlcclxuICAgICAgLmRlbGF5KDAuMilcclxuICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy50YXJnZXRJbml0UG9zIH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+ICh0YXJnZXQubm9kZS5hY3RpdmUgPSB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIGNvbW1vbkFjdGlvbnMoKSB7XHJcbiAgLy8gICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gIC8vICAgLy8gKkVYVEVSTkFMXHJcbiAgLy8gICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyTGV2ZWwsIGZhbHNlKTtcclxuICAvLyAgIGlmICh0aGlzLmN1cnJMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHMpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJlbmRnYW1lIHJlYWNoZWRcIik7XHJcbiAgLy8gICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAvLyAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gIC8vICAgICB9LCAyKTtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAvLyAgIC8vICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gIC8vICAgLy8gICAvLyB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAvLyAgIC8vICAgLy8gdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgLy8gICAvLyB9LCAxKTtcclxuICAvLyB9XHJcblxyXG4gIHB1YmxpYyBvbk1pc3MoKSB7XHJcbiAgICAvLyB0aGlzLmNvbW1vbkFjdGlvbnMoKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVMYXVuY2goZmFsc2UpO1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGFuZ2VBcnJvd0FuZ2xlKTtcclxuICAgIH0sIDIpO1xyXG4gICAgbGV0IG51bSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDcpO1xyXG4gICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcIm5lZ2F0aXZlX1wiLCBudW0sIGZhbHNlKTtcclxuICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5ORUdBVElWRSwgbnVtKTtcclxuICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xyXG4gICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VBcnJvd0FuZ2xlKCkge1xyXG4gICAgaWYgKHRoaXMucmVhbEFycm93SW5zdGFuY2UgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMubGF1bmNoKSB7XHJcbiAgICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy5hcnJvd1JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgYW5nbGUgb2YgdGhlIHZlbG9jaXR5IHZlY3RvclxyXG4gICAgICBjb25zdCBhbmdsZUluUmFkaWFucyA9IE1hdGguYXRhbjIodmVsb2NpdHkueSwgdmVsb2NpdHkueCk7XHJcblxyXG4gICAgICAvLyBDb252ZXJ0IHRoZSBhbmdsZSBmcm9tIHJhZGlhbnMgdG8gZGVncmVlc1xyXG4gICAgICBjb25zdCBhbmdsZUluRGVncmVlcyA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgICAvLyBBcHBseSB0aGUgcm90YXRpb24gdG8gdGhlIGFycm93XHJcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUgPSBhbmdsZUluRGVncmVlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblRvdWNoU3RhcnQoKSB7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUdXRvcmlhbEhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKEdhbWVNYW5hZ2VyLnJvdWdoU2hlZXRNb2RlKSByZXR1cm47XHJcbiAgICB0aGlzLnN0b3BUdXRvcmlhbEFuaW0oKTtcclxuICAgIHRoaXMucGxheURlZkFuaW0oKTtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyB0aGlzLnR3ZWVuQW5pbWF0aW9uKCk7XHJcbiAgICB0aGlzLnRyYWplY3RvcnlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhd1RyYWplY3RvcnkoKTtcclxuICAgIH0sIDAuMDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVG91Y2hFbmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKEdhbWVNYW5hZ2VyLnJvdWdoU2hlZXRNb2RlKSByZXR1cm47XHJcbiAgICB0aGlzLnN0b3BBbmltKCk7XHJcbiAgICB0aGlzLmFycm93SGVhZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMudG9nZ2xlTGF1bmNoKHRydWUpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzFfc2hvb3RcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jcmVhdGVOZXdBcnJvdygpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUxhdW5jaCh0cnVlKTtcclxuICAgICAgLy8gdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgdGhpcy5sYXVuY2hBcnJvdygpO1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kcmF3VHJhamVjdG9yeSk7XHJcbiAgICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIHRoaXMubGF1bmNoQXJyb3coKTtcclxuICAgIC8vIHRoaXMuc3RvcFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlTGF1bmNoKHZhbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5sYXVuY2ggPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheURlZkFuaW0oKSB7XHJcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSh0aGlzLnVwRG93bkFuaW0ubmFtZSk7XHJcbiAgICAvLyB0aGlzLnR3ZWVuQXJyb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wQW5pbSgpIHtcclxuICAgIHRoaXMucGxheWVyQW5pbS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZU5ld0Fycm93KCkge1xyXG4gICAgaWYgKHRoaXMucmVhbEFycm93SW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluc3RhbmNlIG5vdCBlbXB0eSwgZGVzdHJveWluZ1wiKTtcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlYWxBcnJvdyk7XHJcbiAgICB0aGlzLnBsYXllck5vZGUuYWRkQ2hpbGQodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSk7XHJcbiAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5mYWtlQXJyb3dOb2RlLnBvc2l0aW9uO1xyXG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IHRoaXMuZmFrZUFycm93Tm9kZS5hbmdsZTtcclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkgPSB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgbGV0IHJlYWxBcnJvd1Nwcml0ZSA9IHRoaXMucmVhbEFycm93SW5zdGFuY2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAvLyByZWFsQXJyb3dTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmFycm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybjtcclxuICAgIHRoaXMuZmFrZUFycm93Tm9kZS5hY3RpdmUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICAvLyAqSU5GTzogdGhpcyBmdW5jdGlvbiBpcyBjb21wbGV0ZWx5IGhpdCBhbmQgdHJpYWwsIHNvIHZhbHVlcyB3aWxsIGhhdmUgdG8gYmUgY2hhbmdlZCBoZXJlXHJcbiAgLy8gdG8gbWF0Y2ggdGhlIHByb2plY3RpbGUgcGF0aFxyXG4gIHB1YmxpYyBkcmF3VHJhamVjdG9yeSgpIHtcclxuICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy50cmFqZWN0b3J5Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgIGNvbnN0IGFycm93U3ByaXRlID0gdGhpcy5hcnJvd0hlYWQ7XHJcblxyXG4gICAgLy8gQ2xlYXIgYW55IHByZXZpb3VzIGRyYXdpbmdcclxuICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgLy8gU2V0IHN0cm9rZSBjb2xvciB0byByZWRcclxuICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEOyAvLyBPcHRpb25hbDogU2V0IGZpbGwgY29sb3IgdG8gcmVkXHJcblxyXG4gICAgLy8gR2V0IHRoZSBhbmdsZSBmcm9tIHRoZSBmYWtlIGFycm93IG5vZGUgKGJlZm9yZSBsYXVuY2gpXHJcbiAgICBsZXQgYW5nbGVJblJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5mYWtlQXJyb3dOb2RlLmFuZ2xlKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgYmFzZWQgb24gdGhlIGFuZ2xlXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gY2NcclxuICAgICAgLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKVxyXG4gICAgICAubm9ybWFsaXplKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCB2ZWxvY2l0eSBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uIGFuZCBwb3dlclxyXG4gICAgbGV0IGluaXRpYWxWZWxvY2l0eSA9IGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlcik7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgZmFrZSBhcnJvdyBub2RlXHJcbiAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmZha2VBcnJvd05vZGUucG9zaXRpb247XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgZ3Jhdml0eSAoYXMgeW91IGFyZSB1c2luZyBwaHlzaWNzLCBhc3N1bWUgZ3Jhdml0eSBpcyAtMzIwIGJ5IGRlZmF1bHQpXHJcbiAgICBsZXQgZ3Jhdml0eSA9IGNjLnYyKDAsIC0zMjAgKiB0aGlzLnRyYWplY3RvcnlHcmF2KTsgLy8gQWRqdXN0IGdyYXZpdHkgc2NhbGVcclxuXHJcbiAgICAvLyBUaW1lIHN0ZXAgYW5kIHRvdGFsIHRpbWUgZm9yIHNpbXVsYXRpbmcgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCB0aW1lU3RlcCA9IDAuMDE7XHJcbiAgICBsZXQgc2ltdWxhdGlvblRpbWUgPSAoMiAqIGluaXRpYWxWZWxvY2l0eS55KSAvIC1ncmF2aXR5Lnk7IC8vIFRvdGFsIHRpbWUgb2YgZmxpZ2h0XHJcbiAgICBzaW11bGF0aW9uVGltZSA9IE1hdGgubWF4KHNpbXVsYXRpb25UaW1lLCAyKTsgLy8gRW5zdXJlIHNpbXVsYXRpb24gdGltZSBpcyBhdCBsZWFzdCAyIHNlY29uZHNcclxuXHJcbiAgICBsZXQgbGltaXRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyBTdGFydCBkcmF3aW5nIHRoZSB0cmFqZWN0b3J5XHJcbiAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgbGV0IGxhc3RQb3NYID0gc3RhcnRQb3MueDtcclxuICAgIGxldCBsYXN0UG9zWSA9IHN0YXJ0UG9zLnk7XHJcblxyXG4gICAgbGV0IGVuZFBvc1ggPSBzdGFydFBvcy54OyAvLyBUbyBzdG9yZSB0aGUgZmluYWwgcG9zaXRpb24gb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCBlbmRQb3NZID0gc3RhcnRQb3MueTtcclxuXHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHNpbXVsYXRpb25UaW1lOyB0ICs9IHRpbWVTdGVwKSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgdGltZSB0XHJcbiAgICAgIGxldCBwb3NYID0gc3RhcnRQb3MueCArIGluaXRpYWxWZWxvY2l0eS54ICogdDtcclxuICAgICAgbGV0IHBvc1kgPSBzdGFydFBvcy55ICsgaW5pdGlhbFZlbG9jaXR5LnkgKiB0ICsgMC41ICogZ3Jhdml0eS55ICogdCAqIHQ7XHJcblxyXG4gICAgICAvLyBEcmF3IGEgbGluZSB0byB0aGUgcHJlZGljdGVkIHBvc2l0aW9uXHJcbiAgICAgIGxldCBwb3NFeHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuICAgICAgaWYgKHBvc1ggPj0gcG9zRXhwLnggLSAxNTApIHtcclxuICAgICAgICBsZXQgb3ZlcnNob290WCA9IHBvc1ggLSAobGltaXRQb3MueCAtIDE1MCk7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25SYXRpbyA9IDEgLSBvdmVyc2hvb3RYIC8gKHBvc1ggLSBsYXN0UG9zWCk7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbFBvc1ggPSBsYXN0UG9zWCArIChwb3NYIC0gbGFzdFBvc1gpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG4gICAgICAgIGxldCBmaW5hbFBvc1kgPSBsYXN0UG9zWSArIChwb3NZIC0gbGFzdFBvc1kpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG5cclxuICAgICAgICBncmFwaGljcy5saW5lVG8oZmluYWxQb3NYLCBmaW5hbFBvc1kpO1xyXG4gICAgICAgIGVuZFBvc1ggPSBmaW5hbFBvc1g7XHJcbiAgICAgICAgZW5kUG9zWSA9IGZpbmFsUG9zWTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBncmFwaGljcy5saW5lVG8ocG9zWCwgcG9zWSk7XHJcblxyXG4gICAgICBsYXN0UG9zWCA9IHBvc1g7XHJcbiAgICAgIGxhc3RQb3NZID0gcG9zWTtcclxuXHJcbiAgICAgIGVuZFBvc1ggPSBwb3NYO1xyXG4gICAgICBlbmRQb3NZID0gcG9zWTtcclxuICAgIH1cclxuXHJcbiAgICBncmFwaGljcy5zdHJva2UoKTsgLy8gU3Ryb2tlIHRoZSBsaW5lXHJcblxyXG4gICAgLy8gU2V0IHRoZSBhcnJvdydzIHBvc2l0aW9uIHRvIHRoZSBlbmQgb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGFycm93U3ByaXRlLnNldFBvc2l0aW9uKGVuZFBvc1gsIGVuZFBvc1kpO1xyXG4gICAgbGV0IGFycm93QW5nbGVSYWRpYW5zID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpO1xyXG4gICAgbGV0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFycm93QW5nbGVSYWRpYW5zKTtcclxuXHJcbiAgICBhcnJvd1Nwcml0ZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxhdW5jaEFycm93KCkge1xyXG4gICAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUpO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGNjLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKTtcclxuXHJcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hcnJvd1JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAyO1xyXG5cclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkuYXBwbHlMaW5lYXJJbXB1bHNlKFxyXG4gICAgICBkaXJlY3Rpb24ubXVsKHRoaXMucG93ZXIpLFxyXG4gICAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdldFdvcmxkQ2VudGVyKCksXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlQXJyb3dBbmdsZSgpO1xyXG4gICAgfSwgMC4wMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheVR1dG9yaWFsQW5pbSgpIHtcclxuICAgIGxldCB0dXRvcmlhbEhhbmRTcHJpdGVDb21wID0gdGhpcy50dXRvcmlhbEhhbmQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBjYy50d2Vlbih0aGlzLnR1dG9yaWFsSGFuZClcclxuICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbmRIb2xkRnJhbWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5kZWxheSgyKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdHV0b3JpYWxIYW5kU3ByaXRlQ29tcC5zcHJpdGVGcmFtZSA9IHRoaXMuaGFuZElkbGVGcmFtZTtcclxuICAgICAgfSlcclxuICAgICAgLnVuaW9uKClcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wVHV0b3JpYWxBbmltKCkge1xyXG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudHV0b3JpYWxIYW5kKTtcclxuICAgIHRoaXMudHV0b3JpYWxIYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlBdWRpbyh0eXBlOiBBdWRpb1R5cGUsIG51bTogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtIDw9IDApIHJldHVybjtcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBBdWRpb1R5cGUuUE9TSVRJVkU6XHJcbiAgICAgICAgdGhpcy5hdWRpb1NyYy5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvW251bSAtIDFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEF1ZGlvVHlwZS5ORUdBVElWRTpcclxuICAgICAgICB0aGlzLmF1ZGlvU3JjLmNsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9bbnVtIC0gMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdWRpb1NyYy5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcblxyXG5cclxuICAgIGlmICghdGhpcy5sZXZlbGVuZCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy50aW1lciAvIHRoaXMuZGVmYXVsdFRpbWU7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpLmdldENoaWxkQnlOYW1lKFwidGltZXIxXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMudmFsdWU7XHJcblxyXG5cclxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5kZWZhdWx0VGltZSkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vdGhpcy5sZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VMaWZlKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZWR1Y2VMaWZlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSZWR1Y2VsaWZlICQkJCQkJCQkJCQkJCQkJCQ6IFwiLCB0aGlzLmxpdmVzKTtcclxuICAgIGxldCBjdXJyZW50TGlmZU5vZGU6IGNjLk5vZGU7XHJcbiAgICBjdXJyZW50TGlmZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaXZlc1wiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmxpdmVzLnRvU3RyaW5nKCkpO1xyXG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50TGlmZU5vZGUgOiBcIiwgY3VycmVudExpZmVOb2RlKTtcclxuICAgIGNjLnR3ZWVuKGN1cnJlbnRMaWZlTm9kZSlcclxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxNTAgfSlcclxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxNTAgfSlcclxuICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudExpZmVOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgdGhpcy5saXZlcyAtPSAxO1xyXG4gICAgaWYgKHRoaXMubGl2ZXMgPT0gMCkge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgfVxyXG5cclxuICByZXNldFRpbWVyKCkge1xyXG4gICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB0aGlzLnZhbHVlID0gMDtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyIC8gdGhpcy5kZWZhdWx0VGltZTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpLmdldENoaWxkQnlOYW1lKFwidGltZXIxXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMudmFsdWU7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY2xvY2t0aWNrKTtcclxuICB9XHJcbn1cclxuIl19

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
        StartGame_1.default.Instance.JockeyNode.opacity = 255;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxnREFBMkQ7QUFDM0Qsb0RBQTBDO0FBQzFDLG1DQUE4QjtBQUM5QixxREFBZ0Q7QUFFaEQsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1osaURBQVEsQ0FBQTtJQUNSLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBOG5DQztRQTVuQ1EsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUczQixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FB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QUN1QjtJQUdoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytEQUM0QjtJQUdyRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNtQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ29CO0lBSTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ2dCO0lBZ0N2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNPO0lBbElULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4bkMvQjtJQUFELGtCQUFDO0NBOW5DRCxBQThuQ0MsQ0E5bkN3QyxFQUFFLENBQUMsU0FBUyxHQThuQ3BEO2tCQTluQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCB7IEdBTUVfRVZFTlRTLCBMb2dUeXBlcyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IEVWRU5UUyBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTeXN0ZW1cIjtcclxuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmVudW0gQXVkaW9UeXBlIHtcclxuICBQT1NJVElWRSxcclxuICBORUdBVElWRSxcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BbmltYXRpb25DbGlwKVxyXG4gIHB1YmxpYyB1cERvd25BbmltOiBjYy5BbmltYXRpb25DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBwdWJsaWMgcmVhbEFycm93OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgZmFrZUFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyBpbnB1dEJsb2NrZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgdHJhamVjdG9yeU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcHVibGljIHF1ZXN0aW9uTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KFRhcmdldClcclxuICBwdWJsaWMgdGFyZ2V0czogVGFyZ2V0W10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gIHB1YmxpYyBhdWRpb1NyYzogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgcHVibGljIHNwaW5lQW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcHVibGljIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHRyYWpMaW1pdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyBhcnJvd0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgdHJhamVjdG9yeUdyYXY6IG51bWJlciA9IDE7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgaGFuZElkbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGhhbmRIb2xkRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBib3dTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBhcnJvd1Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGJhY2tncm91bmRTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHJvdWdoQXJlYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgYmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHF1ZXN0aW9uU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9kYXJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvZGFyTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNsb2NrVGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgdGFyZ2V0SW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyB0dXRvcmlhbEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJMZXZlbCA9IDE7XHJcbiAgcHVibGljIHN0YXRpYyByb3VnaFNoZWV0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHF1ZXN0aW9uU3VtID0gMDtcclxuICBwcml2YXRlIHNjb3JlID0gMDtcclxuICBwcml2YXRlIFRvdGFsT3B0aW9ucyA9IDM7XHJcbiAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1heExldmVsID0gMTtcclxuICBhbnN3ZXJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gIHRlbXBuYW1lOiBzdHJpbmcgPSBcIkFCQ0RcIjtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBwdWJsaWMgY29udGFpbmVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcmVhbEFycm93SW5zdGFuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDEwMDA7IC8vIGZpeGVkLCBjYW4gYmUgY2hhbmdlZCBsYXRlclxyXG4gIHByaXZhdGUgYXJyb3dSaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXVuY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbWFpbkJnU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHBsYXllckFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsZXZlbGVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XHJcbiAgcHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjbG9ja3RpY2s6IGFueTtcclxuXHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xyXG4gICAgbGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCk7XHJcbiAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcclxuICAgIHRoaXMucXVlc3Rpb25TdW0gPSBudW0xICsgbnVtMjtcclxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC5zdHJpbmcgPSBgJHtudW0xfSArICR7bnVtMn0gPSA/YDtcclxuICAgIHRoaXMuY3JlYXRlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgIGNvbnNvbGUubG9nKFwib25sb2FkQEBAQEBAQEBAQEBAQEBcIik7XHJcbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEsIGZhbHNlKTtcclxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLnBsYXllckFuaW0gPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICBFVkVOVFMub24oR0FNRV9FVkVOVFMuSElULCB0aGlzLm9uSGl0LCB0aGlzKTtcclxuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5NSVNTLCB0aGlzLm9uTWlzcywgdGhpcyk7XHJcbiAgICAvL3RoaXMuZ2VuZXJhdGVRdWVzdGlvbigpO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB0aGlzLmFycm93SGVhZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMudHV0b3JpYWxIYW5kID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UdXRvcmlhbEhhbmRcIik7XHJcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgdGhpcy50YXJnZXROb2RlID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UYXJnZXRcIik7XHJcbiAgICB0aGlzLnRhcmdldEluaXRQb3MgPSB0aGlzLnRhcmdldE5vZGUucG9zaXRpb247XHJcbiAgICB0aGlzLnJvdWdoQXJlYU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1haW5CZ1Nwcml0ZSA9IHRoaXMuYmdOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvblRleHQ7XHJcblxyXG5cclxuICAgIC8vIG5ldyBjb2RlXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpO1xyXG5cclxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0aGlzLmFuc3dlckFycmF5W2ldID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bVtpXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLmFuc3dlck51bSA9IHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IHRoaXMuYW5zd2VyTnVtO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ29ycmVjdEFuc3dlciA6IFwiLCB0aGlzLmFuc3dlck51bSwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBhdWRpb0NsaXA7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zWzBdLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBhdWRpb0NsaXA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uU291bmQgb25sb2FkOiBcIiwgdGhpcy5xdWVzdGlvblNvdW5kWzBdKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvciBpIDogXCIsIGkpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvc1swXSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3RhcnRAQEBAQEBAQEBAQEBAQFwiKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lclwiKS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2U7XHJcblxyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxKTtcclxuICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuXHJcblxyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5wb2RhclBvc2l0aXZlO1xyXG4gICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnBvZGFyTmVnYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLnBsYXlUdXRvcmlhbEFuaW0oKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmxldmVsZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNsb2NrdGljayA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbG9ja1RpY2ssIHRydWUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlR1dG9yaWFsSGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pO1xyXG4gICAgfSwgMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0UXVlc3Rpb25TY3JlZW4oKSB7XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgaWYgKGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uVGV4dDtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBhdWRpb0NsaXA7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9zWzBdLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBhdWRpb0NsaXA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IEF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvciBpIDogXCIsIGkpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvc1swXSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAXCIsIHRoaXMuY29ycmVjdEF1ZGlvWzBdKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxldmVsZW5kID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5jbG9ja3RpY2sgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xvY2tUaWNrLCB0cnVlKTtcclxuICAgICAgfSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuUmFuZG9tTnVtYmVyKGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIpIHtcclxuICAgIGxldCBtaW4gPSBNYXRoLmNlaWwobG93KTtcclxuICAgIGxldCBtYXggPSBNYXRoLmZsb29yKGhpZ2gpO1xyXG4gICAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vIGNhbiBkZWZpbmUgb3RoZXIgdXBwZXIgbGltaXQgaGVyZVxyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlUGxheWVyKCkge1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzJfcnVuXCIsIHRydWUpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgLmJ5KDAuMjUsIHsgcG9zaXRpb246IGNjLnYzKDEwMCwgMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodEhhbmRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgfSwgMC41KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5U3BpbmVBbmltQW5kSWRsZShcclxuICAgIGFuaW1OYW1lOiBzdHJpbmcsXHJcbiAgICBudW06IG51bWJlcixcclxuICAgIGlzQ29ycmVjdDogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy5zcGluZUFuaW0uc2V0QW5pbWF0aW9uKDAsIGAke2FuaW1OYW1lfSR7bnVtfWAsIGZhbHNlKTtcclxuICAgIHRoaXMuc3BpbmVBbmltLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcclxuICAgICAgaWYgKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IGAke2FuaW1OYW1lfSR7bnVtfWApIHtcclxuICAgICAgICAvLyBQbGF5IHRoZSBpZGxlIGFuaW1hdGlvbiAoZS5nLiwgJ2lkbGUnKSBvbmNlIHRoZSBwcmltYXJ5IGFuaW1hdGlvbiBjb21wbGV0ZXNcclxuICAgICAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIGlmIChpc0NvcnJlY3QpIHtcclxuICAgICAgICAgIHRoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAXCIsIHRoaXMubGV2ZWxlbmQpO1xyXG4gICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xyXG4gICAgICAgICAgdGhpcy5wYW5uaW5nKCk7IC8vIGNvbnRhaW5zIGFsbCBwYW5uaW5nIGxvZ2ljIGFuZCBzdHVmZlxyXG4gICAgICAgICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG5cclxuICAgICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllckFuaW0ucGF1c2UoKTtcclxuICAgICAgICB9LCAwLjAxKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFpc0NvcnJlY3QpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5yZXNldFRhcmdldENvbG9ycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZGVhbGx5IGZha2UgYXJyb3cgdmlzaWJpbGl0eSBzaG91bGQgYmUgdG9nZ2xlZCBoZXJlLCBidXQgbGV0J3Mgc2VlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0VGFyZ2V0Q29sb3JzKCkge1xyXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnNldERlZkNvbG9yKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgdGhpcy5zY29yZSsrO1xyXG4gICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9GaXhlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZU9wdGlvbnMoKSB7XHJcbiAgICBsZXQgb3B0aW9uczogbnVtYmVyW10gPSBbXTtcclxuICAgIG9wdGlvbnNbMF0gPSB0aGlzLnF1ZXN0aW9uU3VtO1xyXG4gICAgZG8ge1xyXG4gICAgICBvcHRpb25zWzFdID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgNTApO1xyXG4gICAgfSB3aGlsZSAob3B0aW9uc1sxXSA9PT0gdGhpcy5xdWVzdGlvblN1bSk7XHJcbiAgICBkbyB7XHJcbiAgICAgIG9wdGlvbnNbMl0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA1MCk7XHJcbiAgICB9IHdoaWxlIChvcHRpb25zWzJdID09PSBvcHRpb25zWzFdIHx8IG9wdGlvbnNbMl0gPT09IHRoaXMucXVlc3Rpb25TdW0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwib3JpZ2luYWwgYXJyYXlcIiwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IHNodWZmbGVkQXJyID0gdGhpcy5zaHVmZmxlT3B0aW9ucyhbLi4ub3B0aW9uc10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwic2h1ZmZsZWQgYXJyYXlcIiwgc2h1ZmZsZWRBcnIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgdGhpcy50YXJnZXRzW2ldLnNldFZhbHVlKHNodWZmbGVkQXJyW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgb3BlblJvdWdoQXJlYSgpIHtcclxuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZUJvd0FuZEFycm93U3ByaXRlKCkge1xyXG4gICAgbGV0IGJvdyA9IHRoaXMucGxheWVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvd1wiKTtcclxuICAgIGxldCBhcnJvdyA9IHRoaXMucGxheWVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZha2VBcnJvd1wiKTtcclxuXHJcbiAgICBib3cuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICB0aGlzLmJvd1Nwcml0ZUZyYW1lc1t0aGlzLmN1cnJMZXZlbCAtIDFdO1xyXG4gICAgYXJyb3cuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICB0aGlzLmFycm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2h1ZmZsZU9wdGlvbnMoYXJyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfSAvLyBGaXNoZXIgWWF0ZXMgU2h1ZmZsZSBmb3Igc2h1ZmZsaW5nIHRoZSBvcHRpb25zXHJcblxyXG5cclxuICBhZnRlclJlYWN0aW9uKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMubm9kZSBAQEBAQEBAXCIsIHRoaXMubm9kZSlcclxuICAgIHRoaXMucGxheWVyTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKTtcclxuICAgIHRoaXMucGxheWVyQW5pbSA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIHRoaXMucGxheWVyQW5pbS5wbGF5KCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyQW5pbS5wYXVzZSgpO1xyXG4gICAgfSwgMC4wMSk7XHJcbiAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMucmVzZXRUYXJnZXRDb2xvcnMoKTtcclxuICB9XHJcblxyXG4gIG9uSGl0KHRhcmdldE5vZGU6IFRhcmdldCkge1xyXG4gICAgdGhpcy5hbnN3ZXJOdW0gPSBwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtKTtcclxuICAgIHRoaXMucXVlc3Rpb25TdW0gPSB0aGlzLmFuc3dlck51bTtcclxuICAgIGNvbnNvbGUubG9nKFwib25IaXQgdGFyZ2V0Tm9kZSA6IFwiLCB0YXJnZXROb2RlLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwib25IaXQgYW5zd2VyTnVtIDogXCIsIHRoaXMucXVlc3Rpb25TdW0pO1xyXG5cclxuXHJcbiAgICAvLyB0aGlzLmNvbW1vbkFjdGlvbnMoKTtcclxuICAgIHRoaXMudG9nZ2xlTGF1bmNoKGZhbHNlKTtcclxuICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoYW5nZUFycm93QW5nbGUpO1xyXG5cclxuICAgIGlmICh0YXJnZXROb2RlLnZhbHVlID09PSB0aGlzLnF1ZXN0aW9uU3VtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSG9vcmF5LCBjb3JyZWN0IGFuc3dlclwiKTtcclxuICAgICAgLy90aGlzLm9uUmlnaHRBbnN3ZXIoKTtcclxuICAgICAgLy8gbGV0IG51bSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDEwKTtcclxuICAgICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcInBvc2l0aXZlX1wiLCBudW0sIHRydWUpO1xyXG4gICAgICAvLyB0aGlzLnBsYXlBdWRpbyhBdWRpb1R5cGUuUE9TSVRJVkUsIG51bSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICMjIyMjIyNcIiwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbClcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBdWRpb1swXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxldmVsZW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY2xvY2t0aWNrKTtcclxuICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICB0YXJnZXROb2RlLnNldENvbG9yKGNjLkNvbG9yLkdSRUVOKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xyXG4gICAgICB9LCAyKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xyXG4gICAgICB9LCB0aGlzLmNvcnJlY3RBdWRpb1swXS5kdXJhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9oIHdyb25nIGFuc3dlciwgdHJ5IGFnYWluXCIpO1xyXG4gICAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgNyk7XHJcbiAgICAgIC8vIHRoaXMucGxheVNwaW5lQW5pbUFuZElkbGUoXCJuZWdhdGl2ZV9cIiwgbnVtLCBmYWxzZSk7XHJcbiAgICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5ORUdBVElWRSwgbnVtKTtcclxuICAgICAgdGFyZ2V0Tm9kZS5zZXRDb2xvcihjYy5Db2xvci5SRUQpO1xyXG4gICAgICB0aGlzLmFmdGVyUmVhY3Rpb24oKTtcclxuICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlc3Ryb3lBcnJvdygxKTtcclxuICB9XHJcblxyXG5cclxuICBjYWxsSm9ja2V5KCkge1xyXG4gICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJwb3NzaXRpdmVcIiwgXCJwb3NzaXRpdmUyXCIsIFwicG9zc2l0aXZlM1wiLCBcInBvc3NpdGl2ZTRcIiwgXCJwb3NzaXRpdmU1XCIsIFwicG9zc2l0aXZlNlwiXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzZcIl07XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xyXG4gICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTEyMDAsIDEyMDBdO1xyXG4gICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDUwLCA0NTBdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgIHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG4gICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBjYWxsTmV4dExldmVsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgdGhpcy5jYWxsU3RhcnNFYXJlZCgpO1xyXG5cclxuXHJcbiAgICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsIC0gMSwgZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmN1cnJMZXZlbCA6IFwiLCB0aGlzLmN1cnJMZXZlbCk7XHJcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGggKyAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgfSwgMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xyXG4gICAgICB0aGlzLnBhbm5pbmcoKTsgLy8gY29udGFpbnMgYWxsIHBhbm5pbmcgbG9naWMgYW5kIHN0dWZmXHJcbiAgICB9XHJcbiAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjYWxsU3RhcnNFYXJlZCgpIHtcclxuICAgIGlmICghdGhpcy5zdGFyMUxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgdGhpcy5zdGFyMUxvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhcjJMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XHJcbiAgICAgIHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXIzTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICB0aGlzLnN0YXIzTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICByZXR1cm4gX251bWJlcjtcclxuICB9XHJcblxyXG5cclxuICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xyXG4gICAgdGhpcy5yZWR1Y2VMaWZlKCk7XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAvL19ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2V0aXZlXCIsIFwibmVnZXRpdmUyXCIsIFwibmVnZXRpdmUzXCIsIFwibmVnZXRpdmU0XCIsIFwibmVnZXRpdmU1XCIsIFwibmVnZXRpdmU2XCJdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgIH0sIDAuNyk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvblJpZ2h0QW5zd2VyKCkge1xyXG4gICAgdGhpcy5jdXJyTGV2ZWwrKztcclxuICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJMZXZlbCwgZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmN1cnJMZXZlbCA6IFwiLCB0aGlzLmN1cnJMZXZlbCk7XHJcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGggKyAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgfSwgMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYW5uaW5nKCk7XHJcbiAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveUFycm93KG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnJlYWxBcnJvd0luc3RhbmNlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSwgb2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYW5uaW5nKCkge1xyXG4gICAgLy8gY29udGFpbnMgYWxsIHRoZSBwYW5uaW5nIGZ1bmN0aW9ucyBhbmQgbWV0aG9kc1xyXG4gICAgdGhpcy5wYW5CYWNrZ3JvdW5kKCk7XHJcbiAgICB0aGlzLm1vdmVQbGF5ZXIoKTtcclxuICAgIHRoaXMucGFuVGFyZ2V0KCk7XHJcbiAgICAvLyB0aGlzLmNoYW5nZUJvd0FuZEFycm93U3ByaXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFuQmFja2dyb3VuZCgpIHtcclxuICAgIGxldCBjbG9uZTEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJnTm9kZSk7XHJcbiAgICBsZXQgY2xvbmUyID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xyXG4gICAgdGhpcy5iZ05vZGUuYWRkQ2hpbGQoY2xvbmUxKTtcclxuICAgIHRoaXMuYmdOb2RlLmFkZENoaWxkKGNsb25lMik7XHJcbiAgICBjbG9uZTIucG9zaXRpb24gPSBuZXcgY2MuVmVjMygxOTIwLCAwKTtcclxuICAgIGxldCBjb21wMiA9IGNsb25lMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIC8vY29tcDIuc3ByaXRlRnJhbWUgPSB0aGlzLmJhY2tncm91bmRTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICAgIGNvbXAyLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgY2MudHdlZW4oY2xvbmUxKVxyXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMygtMTkyMCwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY2xvbmUxLmRlc3Ryb3koKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4oY2xvbmUyKVxyXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMygwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm1haW5CZ1Nwcml0ZS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJvd0FuZEFycm93U3ByaXRlKCk7XHJcbiAgICAgICAgY2xvbmUyLmRlc3Ryb3koKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFuVGFyZ2V0KCkge1xyXG4gICAgbGV0IFRhcmdldEVuZFBvcyA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZXBsYXkvVGFyZ2V0RW5kUG9zXCIpO1xyXG4gICAgbGV0IFRhcmdldFN0YXJ0UG9zID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UYXJnZXRTdGFydFBvc1wiKTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLnRhcmdldE5vZGUpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiAodGFyZ2V0Lm5vZGUuYWN0aXZlID0gZmFsc2UpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogVGFyZ2V0RW5kUG9zLnBvc2l0aW9uIH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbiA9IFRhcmdldFN0YXJ0UG9zLnBvc2l0aW9uO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoMC4yKVxyXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiB0aGlzLnRhcmdldEluaXRQb3MgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gKHRhcmdldC5ub2RlLmFjdGl2ZSA9IHRydWUpKTtcclxuICAgICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgY29tbW9uQWN0aW9ucygpIHtcclxuICAvLyAgIHRoaXMuY3VyckxldmVsKys7XHJcbiAgLy8gICAvLyAqRVhURVJOQUxcclxuICAvLyAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJMZXZlbCwgZmFsc2UpO1xyXG4gIC8vICAgaWYgKHRoaXMuY3VyckxldmVsID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscykge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImVuZGdhbWUgcmVhY2hlZFwiKTtcclxuICAvLyAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gIC8vICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgLy8gICAgIH0sIDIpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gIC8vICAgLy8gICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcbiAgLy8gICAvLyAgIC8vIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8vICAgLy8gICAvLyB0aGlzLmdlbmVyYXRlUXVlc3Rpb24oKTtcclxuICAvLyAgIC8vIH0sIDEpO1xyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIG9uTWlzcygpIHtcclxuICAgIC8vIHRoaXMuY29tbW9uQWN0aW9ucygpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRvZ2dsZUxhdW5jaChmYWxzZSk7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoYW5nZUFycm93QW5nbGUpO1xyXG4gICAgfSwgMik7XHJcbiAgICBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgNyk7XHJcbiAgICAvLyB0aGlzLnBsYXlTcGluZUFuaW1BbmRJZGxlKFwibmVnYXRpdmVfXCIsIG51bSwgZmFsc2UpO1xyXG4gICAgLy8gdGhpcy5wbGF5QXVkaW8oQXVkaW9UeXBlLk5FR0FUSVZFLCBudW0pO1xyXG4gICAgdGhpcy5hZnRlclJlYWN0aW9uKCk7XHJcbiAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGNoYW5nZUFycm93QW5nbGUoKSB7XHJcbiAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5sYXVuY2gpIHtcclxuICAgICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLmFycm93UmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgdGhlIGFuZ2xlIGZyb20gcmFkaWFucyB0byBkZWdyZWVzXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICAgIC8vIEFwcGx5IHRoZSByb3RhdGlvbiB0byB0aGUgYXJyb3dcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVG91Y2hTdGFydCgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlR1dG9yaWFsSGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcFR1dG9yaWFsQW5pbSgpO1xyXG4gICAgdGhpcy5wbGF5RGVmQW5pbSgpO1xyXG4gICAgdGhpcy5hcnJvd0hlYWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMudHdlZW5BbmltYXRpb24oKTtcclxuICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3VHJhamVjdG9yeSgpO1xyXG4gICAgfSwgMC4wMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ub3VjaEVuZCgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy50b2dnbGVMYXVuY2godHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzFfc2hvb3RcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzFfc2hvb3RcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImNoXzFfc2hvb3RcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIkJvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5ld0Fycm93KCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlTGF1bmNoKHRydWUpO1xyXG4gICAgICAvLyB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgICB0aGlzLmxhdW5jaEFycm93KCk7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRyYXdUcmFqZWN0b3J5KTtcclxuICAgICAgdGhpcy50cmFqZWN0b3J5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sIDAuNSk7XHJcblxyXG4gICAgLy8gdGhpcy5sYXVuY2hBcnJvdygpO1xyXG4gICAgLy8gdGhpcy5zdG9wVHdlZW4oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVMYXVuY2godmFsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxhdW5jaCA9IHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5RGVmQW5pbSgpIHtcclxuICAgIHRoaXMucGxheWVyQW5pbS5wbGF5KHRoaXMudXBEb3duQW5pbS5uYW1lKTtcclxuICAgIC8vIHRoaXMudHdlZW5BcnJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3BBbmltKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJBbmltLnN0b3AoKTtcclxuICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcIkJvd1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlTmV3QXJyb3coKSB7XHJcbiAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFuY2Ugbm90IGVtcHR5LCBkZXN0cm95aW5nXCIpO1xyXG4gICAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVhbEFycm93KTtcclxuICAgIHRoaXMucGxheWVyTm9kZS5hZGRDaGlsZCh0aGlzLnJlYWxBcnJvd0luc3RhbmNlKTtcclxuICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UucG9zaXRpb24gPSB0aGlzLmZha2VBcnJvd05vZGUucG9zaXRpb247XHJcbiAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmFuZ2xlID0gdGhpcy5mYWtlQXJyb3dOb2RlLmFuZ2xlO1xyXG4gICAgdGhpcy5hcnJvd1JpZ2lkQm9keSA9IHRoaXMucmVhbEFycm93SW5zdGFuY2UuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICBsZXQgcmVhbEFycm93U3ByaXRlID0gdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIC8vIHJlYWxBcnJvd1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHZhbDogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuO1xyXG4gICAgdGhpcy5mYWtlQXJyb3dOb2RlLmFjdGl2ZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIC8vICpJTkZPOiB0aGlzIGZ1bmN0aW9uIGlzIGNvbXBsZXRlbHkgaGl0IGFuZCB0cmlhbCwgc28gdmFsdWVzIHdpbGwgaGF2ZSB0byBiZSBjaGFuZ2VkIGhlcmVcclxuICAvLyB0byBtYXRjaCB0aGUgcHJvamVjdGlsZSBwYXRoXHJcbiAgcHVibGljIGRyYXdUcmFqZWN0b3J5KCkge1xyXG4gICAgY29uc3QgZ3JhcGhpY3MgPSB0aGlzLnRyYWplY3RvcnlOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcblxyXG4gICAgY29uc3QgYXJyb3dTcHJpdGUgPSB0aGlzLmFycm93SGVhZDtcclxuXHJcbiAgICAvLyBDbGVhciBhbnkgcHJldmlvdXMgZHJhd2luZ1xyXG4gICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICAvLyBTZXQgc3Ryb2tlIGNvbG9yIHRvIHJlZFxyXG4gICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7IC8vIE9wdGlvbmFsOiBTZXQgZmlsbCBjb2xvciB0byByZWRcclxuXHJcbiAgICAvLyBHZXQgdGhlIGFuZ2xlIGZyb20gdGhlIGZha2UgYXJyb3cgbm9kZSAoYmVmb3JlIGxhdW5jaClcclxuICAgIGxldCBhbmdsZUluUmFkaWFucyA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyh0aGlzLmZha2VBcnJvd05vZGUuYW5nbGUpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIHZlY3RvciBiYXNlZCBvbiB0aGUgYW5nbGVcclxuICAgIGxldCBkaXJlY3Rpb24gPSBjY1xyXG4gICAgICAudjIoTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLCBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXHJcbiAgICAgIC5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHZlbG9jaXR5IGJhc2VkIG9uIHRoZSBkaXJlY3Rpb24gYW5kIHBvd2VyXHJcbiAgICBsZXQgaW5pdGlhbFZlbG9jaXR5ID0gZGlyZWN0aW9uLm11bCh0aGlzLnBvd2VyKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBmYWtlIGFycm93IG5vZGVcclxuICAgIGxldCBzdGFydFBvcyA9IHRoaXMuZmFrZUFycm93Tm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBncmF2aXR5IChhcyB5b3UgYXJlIHVzaW5nIHBoeXNpY3MsIGFzc3VtZSBncmF2aXR5IGlzIC0zMjAgYnkgZGVmYXVsdClcclxuICAgIGxldCBncmF2aXR5ID0gY2MudjIoMCwgLTMyMCAqIHRoaXMudHJhamVjdG9yeUdyYXYpOyAvLyBBZGp1c3QgZ3Jhdml0eSBzY2FsZVxyXG5cclxuICAgIC8vIFRpbWUgc3RlcCBhbmQgdG90YWwgdGltZSBmb3Igc2ltdWxhdGluZyB0aGUgdHJhamVjdG9yeVxyXG4gICAgbGV0IHRpbWVTdGVwID0gMC4wMTtcclxuICAgIGxldCBzaW11bGF0aW9uVGltZSA9ICgyICogaW5pdGlhbFZlbG9jaXR5LnkpIC8gLWdyYXZpdHkueTsgLy8gVG90YWwgdGltZSBvZiBmbGlnaHRcclxuICAgIHNpbXVsYXRpb25UaW1lID0gTWF0aC5tYXgoc2ltdWxhdGlvblRpbWUsIDIpOyAvLyBFbnN1cmUgc2ltdWxhdGlvbiB0aW1lIGlzIGF0IGxlYXN0IDIgc2Vjb25kc1xyXG5cclxuICAgIGxldCBsaW1pdFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy50cmFqTGltaXQucG9zaXRpb24pO1xyXG5cclxuICAgIC8vIFN0YXJ0IGRyYXdpbmcgdGhlIHRyYWplY3RvcnlcclxuICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuXHJcbiAgICBsZXQgbGFzdFBvc1ggPSBzdGFydFBvcy54O1xyXG4gICAgbGV0IGxhc3RQb3NZID0gc3RhcnRQb3MueTtcclxuXHJcbiAgICBsZXQgZW5kUG9zWCA9IHN0YXJ0UG9zLng7IC8vIFRvIHN0b3JlIHRoZSBmaW5hbCBwb3NpdGlvbiBvZiB0aGUgdHJhamVjdG9yeVxyXG4gICAgbGV0IGVuZFBvc1kgPSBzdGFydFBvcy55O1xyXG5cclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgc2ltdWxhdGlvblRpbWU7IHQgKz0gdGltZVN0ZXApIHtcclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB0aW1lIHRcclxuICAgICAgbGV0IHBvc1ggPSBzdGFydFBvcy54ICsgaW5pdGlhbFZlbG9jaXR5LnggKiB0O1xyXG4gICAgICBsZXQgcG9zWSA9IHN0YXJ0UG9zLnkgKyBpbml0aWFsVmVsb2NpdHkueSAqIHQgKyAwLjUgKiBncmF2aXR5LnkgKiB0ICogdDtcclxuXHJcbiAgICAgIC8vIERyYXcgYSBsaW5lIHRvIHRoZSBwcmVkaWN0ZWQgcG9zaXRpb25cclxuICAgICAgbGV0IHBvc0V4cCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy50cmFqTGltaXQucG9zaXRpb24pO1xyXG4gICAgICBpZiAocG9zWCA+PSBwb3NFeHAueCAtIDE1MCkge1xyXG4gICAgICAgIGxldCBvdmVyc2hvb3RYID0gcG9zWCAtIChsaW1pdFBvcy54IC0gMTUwKTtcclxuICAgICAgICBsZXQgaW50ZXJwb2xhdGlvblJhdGlvID0gMSAtIG92ZXJzaG9vdFggLyAocG9zWCAtIGxhc3RQb3NYKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsUG9zWCA9IGxhc3RQb3NYICsgKHBvc1ggLSBsYXN0UG9zWCkgKiBpbnRlcnBvbGF0aW9uUmF0aW87XHJcbiAgICAgICAgbGV0IGZpbmFsUG9zWSA9IGxhc3RQb3NZICsgKHBvc1kgLSBsYXN0UG9zWSkgKiBpbnRlcnBvbGF0aW9uUmF0aW87XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhmaW5hbFBvc1gsIGZpbmFsUG9zWSk7XHJcbiAgICAgICAgZW5kUG9zWCA9IGZpbmFsUG9zWDtcclxuICAgICAgICBlbmRQb3NZID0gZmluYWxQb3NZO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb3NYLCBwb3NZKTtcclxuXHJcbiAgICAgIGxhc3RQb3NYID0gcG9zWDtcclxuICAgICAgbGFzdFBvc1kgPSBwb3NZO1xyXG5cclxuICAgICAgZW5kUG9zWCA9IHBvc1g7XHJcbiAgICAgIGVuZFBvc1kgPSBwb3NZO1xyXG4gICAgfVxyXG5cclxuICAgIGdyYXBoaWNzLnN0cm9rZSgpOyAvLyBTdHJva2UgdGhlIGxpbmVcclxuXHJcbiAgICAvLyBTZXQgdGhlIGFycm93J3MgcG9zaXRpb24gdG8gdGhlIGVuZCBvZiB0aGUgdHJhamVjdG9yeVxyXG4gICAgYXJyb3dTcHJpdGUuc2V0UG9zaXRpb24oZW5kUG9zWCwgZW5kUG9zWSk7XHJcbiAgICBsZXQgYXJyb3dBbmdsZVJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvbi55LCBkaXJlY3Rpb24ueCk7XHJcbiAgICBsZXQgYW5nbGVJbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoYXJyb3dBbmdsZVJhZGlhbnMpO1xyXG5cclxuICAgIGFycm93U3ByaXRlLmFuZ2xlID0gYW5nbGVJbkRlZ3JlZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGF1bmNoQXJyb3coKSB7XHJcbiAgICBsZXQgYW5nbGVJblJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gY2MudjIoTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLCBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpO1xyXG5cclxuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IDI7XHJcblxyXG4gICAgdGhpcy5hcnJvd1JpZ2lkQm9keS5hcHBseUxpbmVhckltcHVsc2UoXHJcbiAgICAgIGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlciksXHJcbiAgICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkuZ2V0V29ybGRDZW50ZXIoKSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGFuZ2VBcnJvd0FuZ2xlKCk7XHJcbiAgICB9LCAwLjAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5VHV0b3JpYWxBbmltKCkge1xyXG4gICAgbGV0IHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAgPSB0aGlzLnR1dG9yaWFsSGFuZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMudHV0b3JpYWxIYW5kKVxyXG4gICAgICAuZGVsYXkoMC41KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdHV0b3JpYWxIYW5kU3ByaXRlQ29tcC5zcHJpdGVGcmFtZSA9IHRoaXMuaGFuZEhvbGRGcmFtZTtcclxuICAgICAgfSlcclxuICAgICAgLmRlbGF5KDIpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0dXRvcmlhbEhhbmRTcHJpdGVDb21wLnNwcml0ZUZyYW1lID0gdGhpcy5oYW5kSWRsZUZyYW1lO1xyXG4gICAgICB9KVxyXG4gICAgICAudW5pb24oKVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3BUdXRvcmlhbEFuaW0oKSB7XHJcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy50dXRvcmlhbEhhbmQpO1xyXG4gICAgdGhpcy50dXRvcmlhbEhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheUF1ZGlvKHR5cGU6IEF1ZGlvVHlwZSwgbnVtOiBudW1iZXIpIHtcclxuICAgIGlmIChudW0gPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIEF1ZGlvVHlwZS5QT1NJVElWRTpcclxuICAgICAgICB0aGlzLmF1ZGlvU3JjLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9bbnVtIC0gMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQXVkaW9UeXBlLk5FR0FUSVZFOlxyXG4gICAgICAgIHRoaXMuYXVkaW9TcmMuY2xpcCA9IHRoaXMubmVnYXRpdmVBdWRpb1tudW0gLSAxXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF1ZGlvU3JjLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmxldmVsZW5kKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyIC8gdGhpcy5kZWZhdWx0VGltZTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGltZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lcjFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcclxuXHJcblxyXG4gICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmRlZmF1bHRUaW1lKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgLy90aGlzLmxldmVsZW5kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlZHVjZUxpZmUoKTtcclxuICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJlZHVjZUxpZmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlZHVjZWxpZmUgJCQkJCQkJCQkJCQkJCQkJDogXCIsIHRoaXMubGl2ZXMpO1xyXG4gICAgbGV0IGN1cnJlbnRMaWZlTm9kZTogY2MuTm9kZTtcclxuICAgIGN1cnJlbnRMaWZlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpdmVzXCIpLmdldENoaWxkQnlOYW1lKHRoaXMubGl2ZXMudG9TdHJpbmcoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRMaWZlTm9kZSA6IFwiLCBjdXJyZW50TGlmZU5vZGUpO1xyXG4gICAgY2MudHdlZW4oY3VycmVudExpZmVOb2RlKVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICBjdXJyZW50TGlmZU5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB0aGlzLmxpdmVzIC09IDE7XHJcbiAgICBpZiAodGhpcy5saXZlcyA9PSAwKSB7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldEdhbWUoKSB7XHJcbiAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gMTtcclxuICAgIHRoaXMuc2V0UXVlc3Rpb25TY3JlZW4oKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGltZXIoKSB7XHJcbiAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudGltZXIgLyB0aGlzLmRlZmF1bHRUaW1lO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGltZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lcjFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbG9ja3RpY2spO1xyXG4gIH1cclxufVxyXG4iXX0=
"use strict";
cc._RF.push(module, 'e2eeaL/HZ1Er6Xu7i+ADoHU', 'gameplay');
// Games/DragNDrop/Scripts/gameplay.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Option = null;
        _this.popSound = null;
        _this.buttonPress = null;
        // @property(cc.AudioClip)
        _this.questionSound = null;
        _this.postiveSound = null;
        _this.positiveAudio = [];
        _this.maxLevel = 7;
        _this.correctAnswerCount = 0;
        _this.incorrectAnswerCount = 0;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.wrongAnswerCount = 1;
        _this.timerCount = 16;
        _this.isTimerNeeded = true;
        _this.currentJockey = null;
        _this.timerSchedule = function () {
            --_this.curTimer;
            if (_this.curTimer == 0) {
                cc.audioEngine.playEffect(_this.questionSound, false);
                _this.scheduleOnce(function () {
                    _this.startTimer(10);
                }, _this.questionSound.duration);
            }
        };
        _this.curTimer = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.Option.getChildByName("Button").getChildByName("1").active = false;
        // else {
        //     cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        // }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.LoadQuestionData();
    };
    NewClass.prototype.LoadQuestionData = function () {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }
        var _this = this;
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        this.timerCount = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].timer + 1;
        this.node.getChildByName("questionPanel").getChildByName("3").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").children[0].getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].timer.toString();
        this.isTimerNeeded = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isTimerNeeded;
        if (!this.isTimerNeeded) {
            this.Option.getChildByName("Button").getChildByName("Timer 1").active = false;
        }
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node.getChildByName("Option").getChildByName("panel").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.node.getChildByName("Option").width = _this.node.getChildByName("Option").getChildByName("panel").width;
                _this.node.getChildByName("Option").height = _this.node.getChildByName("Option").getChildByName("panel").height;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound = AudioClip;
            });
            this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (spriteFrame) {
                _this.node.getChildByName("Option").getChildByName("panel").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.node.getChildByName("Option").width = _this.node.getChildByName("Option").getChildByName("panel").width;
                _this.node.getChildByName("Option").height = _this.node.getChildByName("Option").getChildByName("panel").height;
            });
        }
        //startGame.Instance.jockeyName = "Podar";
        // this.currentJockey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1, false);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.canTouch = true;
        // this.Option.getChildByName("Button").getChildByName("1").getComponent(cc.Button).interactable = false;
        this.callOptionIn();
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        StartGame_1.default.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        this.scheduleOnce(function () {
            cc.tween(_this.node.getChildByName("questionPanel"))
                .to(0.5, { y: 310 }, { easing: "sineInOut" }).start();
            cc.audioEngine.playEffect(_this.questionSound, false);
            cc.tween(_this.node.getChildByName("Option")).to(0.5, { x: 230 }, { easing: "sineInOut" }).start();
            // if (globalVariables.Instance.currentLevel == 1) {
            //     this.scheduleOnce(() => {
            //         this.node.getChildByName("hand").opacity = 255;
            //         this.node.getChildByName("hand").getComponent(cc.Animation).play("handiAnim2");
            //     }, 0.5);
            // }
            _this.scheduleOnce(function () {
                _this.Option.getChildByName("Button").getChildByName("1").getComponent(cc.Button).interactable = true;
            }, _this.questionSound.duration + 0.01);
            _this.scheduleOnce(function () {
                // this.node.getChildByName("questionPanel").getChildByName("2").getComponent(cc.Button).interactable = true;
                if (_this.isTimerNeeded) {
                    _this.timer();
                    _this.scheduleOnce(function () {
                        _this.OnButtonClick();
                    }, _this.timerCount);
                }
                else {
                    _this.Option.getChildByName("Button").getChildByName("tick").active = true;
                }
            }, _this.questionSound.duration);
        }, 1.2);
    };
    NewClass.prototype.timer = function () {
        var _this = this;
        // if (!this.canTouch) {
        if (this.timerCount > 0) {
            this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").children[0].getComponent(cc.Label).string = --this.timerCount + "";
            console.log();
            if (this.timerCount == 0) {
                this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").active = false;
                this.node.getChildByName("Option").getChildByName("Button").getChildByName("2").active = true;
            }
            else {
                this.scheduleOnce(function () {
                    _this.timer();
                }, 1);
            }
        }
        // }
    };
    NewClass.prototype.playButtonSound = function (event) {
        if (!this.canTouch) {
            return;
        }
        cc.audioEngine.playEffect(this.questionSound, false);
        event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            event.target.getComponent(cc.Button).interactable = true;
        }, this.questionSound.duration);
    };
    NewClass.prototype.callNextLevel = function () {
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.loadScene("endScreen");
        }
        else {
            globalVariables_1.default.Instance.currentLevel++;
            cc.director.loadScene("1");
        }
    };
    NewClass.prototype.OnButtonClick = function () {
        var _this = this;
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (!this.canTouch) {
            return;
        }
        this.Option.getChildByName("Button").getChildByName("tick").getComponent(cc.Button).interactable = false;
        this.Option.getChildByName("Button").getChildByName("tick").getComponent(cc.Animation).stop();
        this.canTouch = false;
        this.stopTimer();
        cc.audioEngine.playEffect(this.buttonPress, false);
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").getComponent(cc.Animation).stop();
            this.node.getChildByName("hand").opacity = 0;
        }
        this.Option.getChildByName("Button").getChildByName("2").active = true;
        this.Option.getChildByName("Button").getChildByName("1").active = false;
        cc.audioEngine.stopAllEffects();
        console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("questionPanel").children[1].getComponent(cc.Button).interactable = false;
        this.correctAnswerCount++;
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.postiveSound, false);
            _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            _this.scheduleOnce(function () {
                _this.callPositiveRection();
            }, _this.postiveSound.duration);
        }, 0.5);
    };
    NewClass.prototype.callPositiveRection = function () {
        var _this = this;
        if (globalVariables_1.default.Instance.currentLevel == 1 || globalVariables_1.default.Instance.currentLevel == 4 || globalVariables_1.default.Instance.currentLevel == 5) {
            ProgressBar_1.default.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                _this.callJockey();
            }, 1.5);
        }
        else {
            this.callJockey();
            ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
        }
    };
    NewClass.prototype.callJockey = function () {
        var _this = this;
        var boolean = [false, true, false, true, true, true];
        var anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        var num = globalVariables_1.default.Instance.currentLevel % 6;
        if (num >= 6) {
            num -= 6;
            if (num >= 6) {
                num -= 6;
            }
        }
        // startGame.Instance.jockey.setPosition[globalVariables.Instance.currentLevel % 2];
        StartGame_1.default.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, anim[num], false);
        cc.audioEngine.playEffect(this.positiveAudio[globalVariables_1.default.Instance.currentLevel % 6], false);
        this.scheduleOnce(function () {
            StartGame_1.default.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            cc.tween(_this.node.getChildByName("Option")).to(0.7, { x: 1400 }, { easing: "sineInOut" }).start();
            _this.callNextLevel();
        }, StartGame_1.default.Instance.jockey.getComponent(sp.Skeleton).findAnimation(anim[globalVariables_1.default.Instance.currentLevel % 6]).duration);
    };
    NewClass.prototype.startTimer = function (totalTime) {
        this.curTimer = totalTime;
        this.schedule(this.timerSchedule, 1, totalTime - 1);
    };
    NewClass.prototype.stopTimer = function () {
        this.unschedule(this.timerSchedule);
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Option", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "buttonPress", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "postiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
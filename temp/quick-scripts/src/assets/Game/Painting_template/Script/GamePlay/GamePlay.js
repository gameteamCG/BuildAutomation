"use strict";
cc._RF.push(module, '26a7fGjaTVL/ZE/X7RED3YG', 'GamePlay');
// Game/Painting_template/Script/GamePlay/GamePlay.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var globalVariables_1 = require("../globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawingData = /** @class */ (function () {
    function DrawingData() {
        this.DrawingDataPrefab = null;
    }
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "DrawingDataPrefab" })
    ], DrawingData.prototype, "DrawingDataPrefab", void 0);
    DrawingData = __decorate([
        ccclass("DrawingData")
    ], DrawingData);
    return DrawingData;
}());
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DrawingDataArray = [];
        _this.clickAud = null;
        _this.currentDrawing = null;
        _this.questionNode = null;
        _this.hand = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        // @property(String)
        _this.questions = [''];
        // @property(cc.SpriteFrame)
        _this.questionImage = [];
        _this.pictureImage = [];
        // @property(cc.AudioClip)
        _this.question_audios = [];
        _this.reiteration_Audio = [];
        _this.initialVO = null;
        _this.persistentScrollNode = null;
        _this.persistentScrollScript = null;
        _this.DrawingTableClassRef = null;
        _this.overAllData = [];
        _this.currentLevel = 0;
        _this.totalLevels = 0;
        _this.Ypos = 0;
        return _this;
    }
    GamePlay_1 = GamePlay;
    GamePlay.prototype.onLoad = function () {
        GamePlay_1.instance = this;
    };
    Object.defineProperty(GamePlay, "Instance", {
        get: function () {
            return GamePlay_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    GamePlay.prototype.start = function () {
    };
    GamePlay.prototype.LoadJsonData = function () {
        var _this = this;
        this.totalLevels = globalVariables_1.default.Instance.questions.length;
        var _loop_1 = function (i) {
            var questionData = globalVariables_1.default.Instance.questions[i];
            this_1.questions[i] = questionData.questionText;
            if (globalVariables_1.default.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.questionImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.questionAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.question_audios[i] = audioClip;
                });
                cc.loader.load(questionData.pictureImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.pictureImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.correctAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.reiteration_Audio[i] = audioClip;
                });
            }
            else {
                this_1.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    _this.questionImage[i] = spriteFrame;
                });
                this_1.loadAudioClip(questionData.questionAudioName, function (audioClip) {
                    _this.question_audios[i] = audioClip;
                });
                this_1.loadSpriteFrame(questionData.pictureImageName, function (spriteFrame) {
                    _this.pictureImage[i] = spriteFrame;
                });
                this_1.loadAudioClip(questionData.correctAudioName, function (audioClip) {
                    _this.reiteration_Audio[i] = audioClip;
                });
            }
        };
        var this_1 = this;
        // console.log("totalLevels--" + this.totalLevels);
        for (var i = 0; i < this.totalLevels; i++) {
            _loop_1(i);
        }
        if (globalVariables_1.default.Instance.jockeyName == "Podar") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.podar_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "tlc") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.tlc_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "supercub") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.supercub_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "bag" || globalVariables_1.default.Instance.jockeyName == "cryon") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.jaipuria_font;
        }
    };
    GamePlay.prototype.StartGame = function () {
        var _this = this;
        this.LoadJsonData();
        this.questionNode.setPosition(-60, this.questionNode.y);
        this.Ypos = this.questionNode.getPosition().y;
        this.questionNode.setPosition(-60, 1800);
        this.scheduleOnce(function () {
            _this.initialVO = globalVariables_1.default.Instance.initialVO;
            if (_this.initialVO) {
                cc.audioEngine.playEffect(_this.initialVO, false);
                _this.scheduleOnce(function () {
                    _this.checkNextLevel();
                }, _this.initialVO.duration);
            }
            else {
                _this.scheduleOnce(function () {
                    _this.checkNextLevel();
                }, 0.2);
            }
            _this.addDrawing();
            _this.node.getChildByName("image").setPosition(_this.node.getChildByName("image").getPosition().x, 138);
            _this.hand.setPosition(_this.node.getChildByName("backButton").getPosition().x + 100, _this.node.getChildByName("backButton").getPosition().y);
            _this.hand.opacity = 0;
            _this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;
        }, 1);
    };
    // update (dt) {}
    GamePlay.prototype.addDrawing = function () {
        var _this = this;
        this.currentDrawing = cc.instantiate(this.DrawingDataArray[CommonFun_1.default.instance.currentLvl].DrawingDataPrefab);
        this.node.addChild(this.currentDrawing);
        this.currentDrawing.setPosition(new cc.Vec2(CommonFun_1.default.instance.convertXPos(cc.winSize.width * 0.45, this.node), CommonFun_1.default.instance.convertYPos(cc.winSize.height * 0.5, this.node)));
        this.currentDrawing.setPosition(this.currentDrawing.getPosition().x + 50, this.currentDrawing.getPosition().y - 50);
        // console.log("pos = ", this.currentDrawing.getPosition().x);
        this.DrawingTableClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(this.currentDrawing);
        if (this.currentLevel > 0) {
            this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.pictureImage[this.currentLevel - 1];
        }
        // else {
        //     this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.questionImage[0];
        // }
        this.DrawingTableClassRef.initTouch();
        this.DrawingTableClassRef.initialiseRef(this);
        setTimeout(function () {
            var data = Constant_1.Constant.getLevelData(CommonFun_1.default.instance.currentLvl);
            _this.DrawingTableClassRef.drawData(data);
        }, 10);
    };
    GamePlay.prototype.saveData = function () {
        this.overAllData = [];
        this.overAllData = this.DrawingTableClassRef.overAllData;
        //new
        this.overAllData = this.DrawingTableClassRef.drawingDataArray;
        //new
        Constant_1.Constant.SaveLevelData(CommonFun_1.default.instance.currentLvl, this.overAllData);
        this.hand.opacity = 255;
    };
    GamePlay.prototype.onBackClicked = function () {
        // console.log("levelComplete--" + (CommonFun.instance.currentLvl + 1));
        cc.audioEngine.playEffect(this.clickAud, false);
        // console.log("gameExit--true");
        // this.persistentScrollNode.getChildByName("base").active = false;
        // this.saveData();
        // cc.director.loadScene("LevelSelection");
        this.checkNextLevel();
    };
    GamePlay.prototype.OnExitClicked = function () {
        cc.audioEngine.playEffect(this.clickAud, false);
        console.log("gameExit--true");
    };
    GamePlay.prototype.checkNextLevel = function () {
        var _this = this;
        var duration = 0;
        if (this.currentLevel != 0) {
            cc.audioEngine.playEffect(this.reiteration_Audio[this.currentLevel - 1], false);
            duration = this.reiteration_Audio[this.currentLevel - 1].duration;
            console.log("correctAnswer--" + (this.currentLevel));
            console.log("levelComplete--" + (this.currentLevel));
        }
        this.hand.opacity = 0;
        this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            cc.tween(_this.node.getChildByName("image")).to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                .to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(_this.node.getChildByName("image")).to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .to(0.5, { scale: 0.75 }, { easing: "sineInOut" }).start();
            cc.tween(_this.questionNode).to(0.5, { y: _this.Ypos }, { easing: "sineInOut" }).start();
            if (_this.currentLevel < _this.totalLevels) {
                console.log("levelStarted--" + (_this.currentLevel + 1));
                cc.audioEngine.stopAllEffects();
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.question_audios[_this.currentLevel], false);
                    _this.node.getChildByName("image").getComponent(cc.Sprite).spriteFrame = _this.questionImage[_this.currentLevel];
                    _this.currentLevel++;
                    _this.addDrawing();
                }, 0.5);
                _this.questionNode.children[0].getComponent(cc.Label).string = _this.questions[_this.currentLevel];
            }
            else {
                _this.node.getChildByName("image").active = false;
                _this.questionNode.getParent().active = false;
                cc.director.loadScene("gameEnded");
            }
        }, duration);
    };
    GamePlay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GamePlay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    GamePlay.prototype.onSlideDraged = function (ref) {
        // let progress = ref.progress*10;
        // // progress = parseInt(progress.toString());
        // // 10% of 500 100-200 150
        // let min = Constant.ToolsTagSize[this.currentPensilSelection].MIN;
        // let max = Constant.ToolsTagSize[this.currentPensilSelection].MAX;
        // let val = Constant.getCenterVal(min, max, 0, 10, progress);
        // val = parseInt(val.toString());
        // ref.node.getParent().getChildByName("val").getComponent(cc.Label).string = val;
        // Constant.CurrentToolsTagSize[this.currentPensilSelection] = val;
    };
    var GamePlay_1;
    GamePlay.instance = null;
    __decorate([
        property(DrawingData)
    ], GamePlay.prototype, "DrawingDataArray", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "clickAud", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "questionNode", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "supercub_font", void 0);
    GamePlay = GamePlay_1 = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();
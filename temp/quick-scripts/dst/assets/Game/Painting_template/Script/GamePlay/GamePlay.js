
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.question_audio_secondary = null;
        _this.currentDrawing = null;
        _this.questionNode = null;
        _this.hand = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        // @property(String)
        _this.questions = [""];
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
    GamePlay.prototype.start = function () { };
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
            this.questionNode.children[0].getComponent(cc.Label).font =
                this.podar_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "tlc") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.tlc_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "supercub") {
            this.questionNode.children[0].getComponent(cc.Label).font =
                this.supercub_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "bag" ||
            globalVariables_1.default.Instance.jockeyName == "cryon") {
            this.questionNode.children[0].getComponent(cc.Label).font =
                this.jaipuria_font;
        }
    };
    GamePlay.prototype.onSoundButtonClick = function () {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.question_audio_secondary, false);
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
            _this.node
                .getChildByName("image")
                .setPosition(_this.node.getChildByName("image").getPosition().x, 138);
            _this.hand.setPosition(_this.node.getChildByName("backButton").getPosition().x + 100, _this.node.getChildByName("backButton").getPosition().y);
            _this.hand.opacity = 0;
            _this.node
                .getChildByName("backButton")
                .getComponent(cc.Button).interactable = false;
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
            this.currentDrawing
                .getChildByName("splash")
                .getComponent(cc.Sprite).spriteFrame =
                this.pictureImage[this.currentLevel - 1];
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
            console.log("correctAnswer--" + this.currentLevel);
            console.log("levelComplete--" + this.currentLevel);
        }
        this.hand.opacity = 0;
        this.node
            .getChildByName("backButton")
            .getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            cc.tween(_this.node.getChildByName("image"))
                .to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                .start();
            cc.tween(_this.node.getChildByName("image"))
                .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .to(0.5, { scale: 0.75 }, { easing: "sineInOut" })
                .start();
            cc.tween(_this.questionNode)
                .to(0.5, { y: _this.Ypos }, { easing: "sineInOut" })
                .start();
            if (_this.currentLevel < _this.totalLevels) {
                console.log("levelStarted--" + (_this.currentLevel + 1));
                cc.audioEngine.stopAllEffects();
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.question_audios[_this.currentLevel], false);
                    _this.node
                        .getChildByName("image")
                        .getComponent(cc.Sprite).spriteFrame =
                        _this.questionImage[_this.currentLevel];
                    _this.currentLevel++;
                    _this.addDrawing();
                }, 0.5);
                _this.questionNode.children[0].getComponent(cc.Label).string =
                    _this.questions[_this.currentLevel];
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
        property(cc.AudioClip)
    ], GamePlay.prototype, "question_audio_secondary", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXEdhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFFOUMsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFRSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQURDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzswREFDdkM7SUFGaEMsV0FBVztRQURoQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ2pCLFdBQVcsQ0FHaEI7SUFBRCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdVVDO1FBclVDLHNCQUFnQixHQUFrQixFQUFFLENBQUM7UUFFckMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsOEJBQXdCLEdBQWlCLElBQUksQ0FBQztRQUU5QyxvQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR2IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUN0QyxvQkFBb0I7UUFDcEIsZUFB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LENBQUMsSUFBSSxDQUFDO2dEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBdkJuQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdVU1QjtJQUFELGVBQUM7Q0F2VUQsQUF1VUMsQ0F2VXFDLEVBQUUsQ0FBQyxTQUFTLEdBdVVqRDtrQkF2VW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4uL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkRyYXdpbmdEYXRhXCIpXHJcbmNsYXNzIERyYXdpbmdEYXRhIHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiRHJhd2luZ0RhdGFQcmVmYWJcIiB9KVxyXG4gIERyYXdpbmdEYXRhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KERyYXdpbmdEYXRhKVxyXG4gIERyYXdpbmdEYXRhQXJyYXk6IERyYXdpbmdEYXRhW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIGNsaWNrQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHF1ZXN0aW9uX2F1ZGlvX3NlY29uZGFyeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgY3VycmVudERyYXdpbmcgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBxdWVzdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG4gIHF1ZXN0aW9uczogc3RyaW5nW10gPSBbXCJcIl07XHJcbiAgLy8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHF1ZXN0aW9uSW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgcGljdHVyZUltYWdlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBxdWVzdGlvbl9hdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIHJlaXRlcmF0aW9uX0F1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBpbml0aWFsVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIHBlcnNpc3RlbnRTY3JvbGxOb2RlID0gbnVsbDtcclxuICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgRHJhd2luZ1RhYmxlQ2xhc3NSZWYgPSBudWxsO1xyXG4gIG92ZXJBbGxEYXRhID0gW107XHJcblxyXG4gIHByaXZhdGUgY3VycmVudExldmVsOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgWXBvczogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBHYW1lUGxheS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgcmV0dXJuIEdhbWVQbGF5Lmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7fVxyXG5cclxuICBMb2FkSnNvbkRhdGEoKSB7XHJcbiAgICB0aGlzLnRvdGFsTGV2ZWxzID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRvdGFsTGV2ZWxzLS1cIiArIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTGV2ZWxzOyBpKyspIHtcclxuICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5xdWVzdGlvbnNbaV07XHJcbiAgICAgIHRoaXMucXVlc3Rpb25zW2ldID0gcXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dDtcclxuXHJcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbkltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uX2F1ZGlvc1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucGljdHVyZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5waWN0dXJlSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbkltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbl9hdWRpb3NbaV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnBpY3R1cmVJbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5waWN0dXJlSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAocXVlc3Rpb25EYXRhLmNvcnJlY3RBdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25fQXVkaW9baV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcbiAgICAgICAgdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgfSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgIHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID1cclxuICAgICAgICB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNvdW5kQnV0dG9uQ2xpY2soKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uX2F1ZGlvX3NlY29uZGFyeSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgU3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5Mb2FkSnNvbkRhdGEoKTtcclxuICAgIHRoaXMucXVlc3Rpb25Ob2RlLnNldFBvc2l0aW9uKC02MCwgdGhpcy5xdWVzdGlvbk5vZGUueSk7XHJcbiAgICB0aGlzLllwb3MgPSB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRQb3NpdGlvbigpLnk7XHJcbiAgICB0aGlzLnF1ZXN0aW9uTm9kZS5zZXRQb3NpdGlvbigtNjAsIDE4MDApO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXRpYWxWTyA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5pbml0aWFsVk87XHJcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWTykge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5pbml0aWFsVk8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrTmV4dExldmVsKCk7XHJcbiAgICAgICAgfSwgdGhpcy5pbml0aWFsVk8uZHVyYXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKVxyXG4gICAgICAgIC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRQb3NpdGlvbigpLngsIDEzOCk7XHJcblxyXG4gICAgICB0aGlzLmhhbmQuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRQb3NpdGlvbigpLnggKyAxMDAsXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRQb3NpdGlvbigpLnlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5oYW5kLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgYWRkRHJhd2luZygpIHtcclxuICAgIHRoaXMuY3VycmVudERyYXdpbmcgPSBjYy5pbnN0YW50aWF0ZShcclxuICAgICAgdGhpcy5EcmF3aW5nRGF0YUFycmF5W0NvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsXS5EcmF3aW5nRGF0YVByZWZhYlxyXG4gICAgKTtcclxuICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmN1cnJlbnREcmF3aW5nKTtcclxuICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24oXHJcbiAgICAgIG5ldyBjYy5WZWMyKFxyXG4gICAgICAgIENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0WFBvcyhjYy53aW5TaXplLndpZHRoICogMC40NSwgdGhpcy5ub2RlKSxcclxuICAgICAgICBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFlQb3MoY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUsIHRoaXMubm9kZSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS54ICsgNTAsXHJcbiAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS55IC0gNTBcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInBvcyA9IFwiLCB0aGlzLmN1cnJlbnREcmF3aW5nLmdldFBvc2l0aW9uKCkueCk7XHJcbiAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdUYWJsZUNsYXNzUmVmKFxyXG4gICAgICB0aGlzLmN1cnJlbnREcmF3aW5nXHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID4gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREcmF3aW5nXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwic3BsYXNoXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICB0aGlzLnBpY3R1cmVJbWFnZVt0aGlzLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRDaGlsZEJ5TmFtZShcInNwbGFzaFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucXVlc3Rpb25JbWFnZVswXTtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYuaW5pdFRvdWNoKCk7XHJcbiAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSBDb25zdGFudC5nZXRMZXZlbERhdGEoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG4gICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmRyYXdEYXRhKGRhdGEpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoKSB7XHJcbiAgICB0aGlzLm92ZXJBbGxEYXRhID0gW107XHJcbiAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5vdmVyQWxsRGF0YTtcclxuICAgIC8vbmV3XHJcbiAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5kcmF3aW5nRGF0YUFycmF5O1xyXG4gICAgLy9uZXdcclxuICAgIENvbnN0YW50LlNhdmVMZXZlbERhdGEoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwsIHRoaXMub3ZlckFsbERhdGEpO1xyXG5cclxuICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMjU1O1xyXG4gIH1cclxuXHJcbiAgb25CYWNrQ2xpY2tlZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyAoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwgKyAxKSk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2tBdWQsIGZhbHNlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICAvLyB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxldmVsU2VsZWN0aW9uXCIpO1xyXG4gICAgdGhpcy5jaGVja05leHRMZXZlbCgpO1xyXG4gIH1cclxuXHJcbiAgT25FeGl0Q2xpY2tlZCgpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICB9XHJcblxyXG4gIGNoZWNrTmV4dExldmVsKCkge1xyXG4gICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsICE9IDApIHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuICAgICAgICB0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW3RoaXMuY3VycmVudExldmVsIC0gMV0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuICAgICAgZHVyYXRpb24gPSB0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW3RoaXMuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb247XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKSlcclxuICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC43NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLnF1ZXN0aW9uTm9kZSlcclxuICAgICAgICAudG8oMC41LCB7IHk6IHRoaXMuWXBvcyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy50b3RhbExldmVscykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fYXVkaW9zW3RoaXMuY3VycmVudExldmVsXSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkltYWdlW3RoaXMuY3VycmVudExldmVsXTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgICB0aGlzLmFkZERyYXdpbmcoKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudExldmVsXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRQYXJlbnQoKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGxvYWRTcHJpdGVGcmFtZShcclxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBsb2FkQXVkaW9DbGlwKFxyXG4gICAgYXVkaW9OYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWRcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY2FsbGJhY2soYXVkaW9DbGlwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TbGlkZURyYWdlZChyZWYpIHtcclxuICAgIC8vIGxldCBwcm9ncmVzcyA9IHJlZi5wcm9ncmVzcyoxMDtcclxuICAgIC8vIC8vIHByb2dyZXNzID0gcGFyc2VJbnQocHJvZ3Jlc3MudG9TdHJpbmcoKSk7XHJcbiAgICAvLyAvLyAxMCUgb2YgNTAwIDEwMC0yMDAgMTUwXHJcbiAgICAvLyBsZXQgbWluID0gQ29uc3RhbnQuVG9vbHNUYWdTaXplW3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0uTUlOO1xyXG4gICAgLy8gbGV0IG1heCA9IENvbnN0YW50LlRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dLk1BWDtcclxuICAgIC8vIGxldCB2YWwgPSBDb25zdGFudC5nZXRDZW50ZXJWYWwobWluLCBtYXgsIDAsIDEwLCBwcm9ncmVzcyk7XHJcbiAgICAvLyB2YWwgPSBwYXJzZUludCh2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAvLyByZWYubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbDtcclxuICAgIC8vIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSA9IHZhbDtcclxuICB9XHJcbn1cclxuIl19
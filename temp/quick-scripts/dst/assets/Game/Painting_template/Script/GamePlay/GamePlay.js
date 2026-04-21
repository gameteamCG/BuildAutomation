
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
        _this.currentDrawing = null;
        _this.questionNode = null;
        _this.hand = null;
        _this.hand2 = null;
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
    GamePlay.prototype.playQues = function (_event) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.question_audios[this.currentLevel - 1], false);
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
        this.DrawingTableClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(this.currentDrawing);
        if (this.currentLevel > 0) {
            this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.pictureImage[this.currentLevel - 1];
        }
        // else {
        //     this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.questionImage[0];
        // }
        this.currentDrawing.getPosition();
        this.DrawingTableClassRef.initTouch();
        this.DrawingTableClassRef.initialiseRef(this);
        console.log("pos = ", this.currentDrawing.getPosition().x, this.currentDrawing.getPosition().y);
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
        this.hand2.opacity = 0;
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
                    if (_this.currentLevel == 0) {
                        _this.hand2.getComponent(cc.Animation).play();
                    }
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
        property(cc.Node)
    ], GamePlay.prototype, "hand2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXEdhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFFOUMsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzswREFDdkM7SUFGbEMsV0FBVztRQURoQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ2pCLFdBQVcsQ0FHaEI7SUFBRCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa1NDO1FBaFNHLHNCQUFnQixHQUFrQixFQUFFLENBQUM7UUFFckMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR2QsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUN0QyxvQkFBb0I7UUFDcEIsZUFBUyxH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RSw4REFBOEQ7UUFDOUQsa0NBQWtDO1FBRWxDLGtGQUFrRjtRQUVsRixtRUFBbUU7SUFDdkUsQ0FBQzs7SUFuUGMsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUE1Q3pDO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQztzREFDZTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBSzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUF0QnJCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrUzVCO0lBQUQsZUFBQztDQWxTRCxBQWtTQyxDQWxTcUMsRUFBRSxDQUFDLFNBQVMsR0FrU2pEO2tCQWxTb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuL1BlcnNpc3RlbnQvUGVyc2lzdGVudFNjcm9sbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiRHJhd2luZ0RhdGFcIilcclxuY2xhc3MgRHJhd2luZ0RhdGEge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIkRyYXdpbmdEYXRhUHJlZmFiXCIgfSlcclxuICAgIERyYXdpbmdEYXRhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoRHJhd2luZ0RhdGEpXHJcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBEcmF3aW5nRGF0YVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2xpY2tBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudERyYXdpbmcgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXVlc3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KFN0cmluZylcclxuICAgIHF1ZXN0aW9uczogc3RyaW5nW10gPSBbJyddO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcXVlc3Rpb25JbWFnZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHBpY3R1cmVJbWFnZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHF1ZXN0aW9uX2F1ZGlvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICByZWl0ZXJhdGlvbl9BdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBpbml0aWFsVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcGVyc2lzdGVudFNjcm9sbE5vZGUgPSBudWxsO1xyXG4gICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IG51bGw7XHJcblxyXG4gICAgRHJhd2luZ1RhYmxlQ2xhc3NSZWYgPSBudWxsO1xyXG4gICAgb3ZlckFsbERhdGEgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBZcG9zOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZVBsYXkuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVQbGF5Lmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVF1ZXMoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uX2F1ZGlvc1t0aGlzLmN1cnJlbnRMZXZlbCAtIDFdLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZEpzb25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxMZXZlbHMgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvdGFsTGV2ZWxzLS1cIiArIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRhdGEgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXSA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX2F1ZGlvc1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnBpY3R1cmVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVJbWFnZVtpXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fYXVkaW9zW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEucGljdHVyZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLkxvYWRKc29uRGF0YSgpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLnNldFBvc2l0aW9uKC02MCwgdGhpcy5xdWVzdGlvbk5vZGUueSk7XHJcbiAgICAgICAgdGhpcy5ZcG9zID0gdGhpcy5xdWVzdGlvbk5vZGUuZ2V0UG9zaXRpb24oKS55O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLnNldFBvc2l0aW9uKC02MCwgMTgwMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWTyA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5pbml0aWFsVk87XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxWTykge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmluaXRpYWxWTywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuaW5pdGlhbFZPLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRQb3NpdGlvbigpLngsIDEzOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmQuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRQb3NpdGlvbigpLnggKyAxMDAsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tCdXR0b25cIikuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBhZGREcmF3aW5nKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkRyYXdpbmdEYXRhQXJyYXlbQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmxdLkRyYXdpbmdEYXRhUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5jdXJyZW50RHJhd2luZyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMihDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFhQb3MoY2Mud2luU2l6ZS53aWR0aCAqIDAuNDUsIHRoaXMubm9kZSksIENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0WVBvcyhjYy53aW5TaXplLmhlaWdodCAqIDAuNSwgdGhpcy5ub2RlKSkpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24odGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLnggKyA1MCwgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLnkgLSA1MCk7XHJcbiAgICAgICAgdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nVGFibGVDbGFzc1JlZih0aGlzLmN1cnJlbnREcmF3aW5nKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJzcGxhc2hcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY3R1cmVJbWFnZVt0aGlzLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRDaGlsZEJ5TmFtZShcInNwbGFzaFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucXVlc3Rpb25JbWFnZVswXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5pbml0VG91Y2goKTtcclxuICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3MgPSBcIiwgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLngsIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBDb25zdGFudC5nZXRMZXZlbERhdGEoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmRyYXdEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5vdmVyQWxsRGF0YSA9IHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYub3ZlckFsbERhdGE7XHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5kcmF3aW5nRGF0YUFycmF5O1xyXG4gICAgICAgIC8vbmV3XHJcbiAgICAgICAgQ29uc3RhbnQuU2F2ZUxldmVsRGF0YShDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCwgdGhpcy5vdmVyQWxsRGF0YSk7XHJcbiAgICAgICAgdGhpcy5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5oYW5kMi5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2tDbGlja2VkKCkge1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgKENvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsICsgMSkpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxldmVsU2VsZWN0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXRDbGlja2VkKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tOZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1t0aGlzLmN1cnJlbnRMZXZlbCAtIDFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1t0aGlzLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgKHRoaXMuY3VycmVudExldmVsKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpKS50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNzUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5xdWVzdGlvbk5vZGUpLnRvKDAuNSwgeyB5OiB0aGlzLllwb3MgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbl9hdWRpb3NbdGhpcy5jdXJyZW50TGV2ZWxdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnF1ZXN0aW9uSW1hZ2VbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGREcmF3aW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRMZXZlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmdldFBhcmVudCgpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soYXVkaW9DbGlwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TbGlkZURyYWdlZChyZWYpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IHByb2dyZXNzID0gcmVmLnByb2dyZXNzKjEwO1xyXG4gICAgICAgIC8vIC8vIHByb2dyZXNzID0gcGFyc2VJbnQocHJvZ3Jlc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gLy8gMTAlIG9mIDUwMCAxMDAtMjAwIDE1MFxyXG4gICAgICAgIC8vIGxldCBtaW4gPSBDb25zdGFudC5Ub29sc1RhZ1NpemVbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXS5NSU47XHJcbiAgICAgICAgLy8gbGV0IG1heCA9IENvbnN0YW50LlRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dLk1BWDtcclxuICAgICAgICAvLyBsZXQgdmFsID0gQ29uc3RhbnQuZ2V0Q2VudGVyVmFsKG1pbiwgbWF4LCAwLCAxMCwgcHJvZ3Jlc3MpO1xyXG4gICAgICAgIC8vIHZhbCA9IHBhcnNlSW50KHZhbC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgLy8gcmVmLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB2YWw7XHJcblxyXG4gICAgICAgIC8vIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSA9IHZhbDtcclxuICAgIH1cclxufVxyXG4iXX0=
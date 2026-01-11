
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
        _this.reiteration_VoiceOver = null;
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
            // Load reiteration from JSON
            if (questionData.reiteration !== undefined && questionData.reiteration !== "") {
                console.log("Reiteration loaded for question " + i + ": " + questionData.reiteration);
                // Load reiteration audio
                if (globalVariables_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.reiteration, function (err, audioClip) {
                        if (err) {
                            console.error("Failed to load reiteration audio:", err);
                            return;
                        }
                        _this.reiteration_VoiceOver = audioClip;
                    });
                }
                else {
                    this_1.loadAudioClip(questionData.reiteration, function (audioClip) {
                        _this.reiteration_VoiceOver = audioClip;
                    });
                }
            }
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
            // Play correct audio (reiteration_Audio) immediately
            cc.audioEngine.playEffect(this.reiteration_Audio[this.currentLevel - 1], false);
            duration = this.reiteration_Audio[this.currentLevel - 1].duration;
            console.log("correctAnswer--" + (this.currentLevel));
            console.log("levelComplete--" + (this.currentLevel));
            // Play reiteration audio after 0.5 second delay if available
            // this.scheduleOnce(() => {
            //     let currentQuestionData = globalVariables.Instance.questions[this.currentLevel - 1];
            //     if (currentQuestionData.reiteration !== undefined && currentQuestionData.reiteration !== "" && this.reiteration_VoiceOver) {
            //         cc.audioEngine.playEffect(this.reiteration_VoiceOver, false);
            //         console.log("Reiteration played for level " + this.currentLevel);
            //     }
            // }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXEdhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFFOUMsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzswREFDdkM7SUFGbEMsV0FBVztRQURoQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ2pCLFdBQVcsQ0FHaEI7SUFBRCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcVRDO1FBblRHLHNCQUFnQixHQUFrQixFQUFFLENBQUM7UUFFckMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDdEMsb0JBQW9CO1FBQ3BCLGVBQVMsR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FB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LEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsZ0NBQWEsR0FBYixVQUFjLEdBQUc7UUFFYixrQ0FBa0M7UUFDbEMsK0NBQStDO1FBQy9DLDRCQUE0QjtRQUM1QixvRUFBb0U7UUFDcEUsb0VBQW9FO1FBQ3BFLDhEQUE4RDtRQUM5RCxrQ0FBa0M7UUFFbEMsa0ZBQWtGO1FBRWxGLG1FQUFtRTtJQUN2RSxDQUFDOztJQXRRYyxpQkFBUSxHQUFhLElBQUksQ0FBQztJQTVDekM7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDO3NEQUNlO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFLOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFwQnJCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxVDVCO0lBQUQsZUFBQztDQXJURCxBQXFUQyxDQXJUcUMsRUFBRSxDQUFDLFNBQVMsR0FxVGpEO2tCQXJUb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuL1BlcnNpc3RlbnQvUGVyc2lzdGVudFNjcm9sbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiRHJhd2luZ0RhdGFcIilcclxuY2xhc3MgRHJhd2luZ0RhdGEge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIkRyYXdpbmdEYXRhUHJlZmFiXCIgfSlcclxuICAgIERyYXdpbmdEYXRhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoRHJhd2luZ0RhdGEpXHJcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBEcmF3aW5nRGF0YVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2xpY2tBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudERyYXdpbmcgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXVlc3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBxdWVzdGlvbnM6IHN0cmluZ1tdID0gWycnXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHF1ZXN0aW9uSW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwaWN0dXJlSW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBxdWVzdGlvbl9hdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgcmVpdGVyYXRpb25fQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBcclxuICAgIHJlaXRlcmF0aW9uX1ZvaWNlT3ZlcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBpbml0aWFsVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcGVyc2lzdGVudFNjcm9sbE5vZGUgPSBudWxsO1xyXG4gICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IG51bGw7XHJcblxyXG4gICAgRHJhd2luZ1RhYmxlQ2xhc3NSZWYgPSBudWxsO1xyXG4gICAgb3ZlckFsbERhdGEgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBZcG9zOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZVBsYXkuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVQbGF5Lmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZEpzb25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxMZXZlbHMgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvdGFsTGV2ZWxzLS1cIiArIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRhdGEgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXSA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBMb2FkIHJlaXRlcmF0aW9uIGZyb20gSlNPTlxyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uICE9PSB1bmRlZmluZWQgJiYgcXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlaXRlcmF0aW9uIGxvYWRlZCBmb3IgcXVlc3Rpb24gXCIgKyBpICsgXCI6IFwiICsgcXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vIExvYWQgcmVpdGVyYXRpb24gYXVkaW9cclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbiwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCByZWl0ZXJhdGlvbiBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlaXRlcmF0aW9uX1ZvaWNlT3ZlciA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbiwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlaXRlcmF0aW9uX1ZvaWNlT3ZlciA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX2F1ZGlvc1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnBpY3R1cmVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVJbWFnZVtpXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fYXVkaW9zW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEucGljdHVyZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLkxvYWRKc29uRGF0YSgpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLnNldFBvc2l0aW9uKC02MCwgdGhpcy5xdWVzdGlvbk5vZGUueSk7XHJcbiAgICAgICAgdGhpcy5ZcG9zID0gdGhpcy5xdWVzdGlvbk5vZGUuZ2V0UG9zaXRpb24oKS55O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLnNldFBvc2l0aW9uKC02MCwgMTgwMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWTyA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5pbml0aWFsVk87XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxWTykge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmluaXRpYWxWTywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuaW5pdGlhbFZPLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRQb3NpdGlvbigpLngsIDEzOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmQuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRQb3NpdGlvbigpLnggKyAxMDAsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tCdXR0b25cIikuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBhZGREcmF3aW5nKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkRyYXdpbmdEYXRhQXJyYXlbQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmxdLkRyYXdpbmdEYXRhUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5jdXJyZW50RHJhd2luZyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMihDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFhQb3MoY2Mud2luU2l6ZS53aWR0aCAqIDAuNDUsIHRoaXMubm9kZSksIENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0WVBvcyhjYy53aW5TaXplLmhlaWdodCAqIDAuNSwgdGhpcy5ub2RlKSkpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24odGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLnggKyA1MCwgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLnkgLSA1MCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3MgPSBcIiwgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRQb3NpdGlvbigpLngpO1xyXG4gICAgICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ1RhYmxlQ2xhc3NSZWYodGhpcy5jdXJyZW50RHJhd2luZyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nLmdldENoaWxkQnlOYW1lKFwic3BsYXNoXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5waWN0dXJlSW1hZ2VbdGhpcy5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJzcGxhc2hcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnF1ZXN0aW9uSW1hZ2VbMF07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYuaW5pdFRvdWNoKCk7XHJcbiAgICAgICAgdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IENvbnN0YW50LmdldExldmVsRGF0YShDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCk7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYuZHJhd0RhdGEoZGF0YSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMub3ZlckFsbERhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5vdmVyQWxsRGF0YTtcclxuICAgICAgICAvL25ld1xyXG4gICAgICAgIHRoaXMub3ZlckFsbERhdGEgPSB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmRyYXdpbmdEYXRhQXJyYXk7XHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBDb25zdGFudC5TYXZlTGV2ZWxEYXRhKENvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsLCB0aGlzLm92ZXJBbGxEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrQ2xpY2tlZCgpIHtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIChDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCArIDEpKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2tBdWQsIGZhbHNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMZXZlbFNlbGVjdGlvblwiKTtcclxuICAgICAgICB0aGlzLmNoZWNrTmV4dExldmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25FeGl0Q2xpY2tlZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2tBdWQsIGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTmV4dExldmVsKCkge1xyXG4gICAgICAgIGxldCBkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgIT0gMCkge1xyXG4gICAgICAgICAgICAvLyBQbGF5IGNvcnJlY3QgYXVkaW8gKHJlaXRlcmF0aW9uX0F1ZGlvKSBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVpdGVyYXRpb25fQXVkaW9bdGhpcy5jdXJyZW50TGV2ZWwgLSAxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMucmVpdGVyYXRpb25fQXVkaW9bdGhpcy5jdXJyZW50TGV2ZWwgLSAxXS5kdXJhdGlvbjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyAodGhpcy5jdXJyZW50TGV2ZWwpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFBsYXkgcmVpdGVyYXRpb24gYXVkaW8gYWZ0ZXIgMC41IHNlY29uZCBkZWxheSBpZiBhdmFpbGFibGVcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbkRhdGEgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucXVlc3Rpb25zW3RoaXMuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoY3VycmVudFF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRRdWVzdGlvbkRhdGEucmVpdGVyYXRpb24gIT09IFwiXCIgJiYgdGhpcy5yZWl0ZXJhdGlvbl9Wb2ljZU92ZXIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVpdGVyYXRpb25fVm9pY2VPdmVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJSZWl0ZXJhdGlvbiBwbGF5ZWQgZm9yIGxldmVsIFwiICsgdGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9LCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpKS50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNzUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5xdWVzdGlvbk5vZGUpLnRvKDAuNSwgeyB5OiB0aGlzLllwb3MgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uX2F1ZGlvc1t0aGlzLmN1cnJlbnRMZXZlbF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucXVlc3Rpb25JbWFnZVt0aGlzLmN1cnJlbnRMZXZlbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERyYXdpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudExldmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0UGFyZW50KCkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNsaWRlRHJhZ2VkKHJlZikge1xyXG5cclxuICAgICAgICAvLyBsZXQgcHJvZ3Jlc3MgPSByZWYucHJvZ3Jlc3MqMTA7XHJcbiAgICAgICAgLy8gLy8gcHJvZ3Jlc3MgPSBwYXJzZUludChwcm9ncmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAvLyAvLyAxMCUgb2YgNTAwIDEwMC0yMDAgMTUwXHJcbiAgICAgICAgLy8gbGV0IG1pbiA9IENvbnN0YW50LlRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dLk1JTjtcclxuICAgICAgICAvLyBsZXQgbWF4ID0gQ29uc3RhbnQuVG9vbHNUYWdTaXplW3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0uTUFYO1xyXG4gICAgICAgIC8vIGxldCB2YWwgPSBDb25zdGFudC5nZXRDZW50ZXJWYWwobWluLCBtYXgsIDAsIDEwLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdmFsID0gcGFyc2VJbnQodmFsLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyByZWYubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dID0gdmFsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
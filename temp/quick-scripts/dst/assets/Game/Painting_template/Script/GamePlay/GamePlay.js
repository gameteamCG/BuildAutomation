
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
    GamePlay.prototype.PlayQVoButton = function (_event) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.question_audios[0], false);
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
        }, this.question_audios[0].duration);
        _event.target.getComponent(cc.Button).interactable = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXEdhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFFOUMsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzswREFDdkM7SUFGbEMsV0FBVztRQURoQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ2pCLFdBQVcsQ0FHaEI7SUFBRCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaVNDO1FBL1JHLHNCQUFnQixHQUFrQixFQUFFLENBQUM7UUFFckMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDdEMsb0JBQW9CO1FBQ3BCLGVBQVMsR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FB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ZTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBSzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBcEJyQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaVM1QjtJQUFELGVBQUM7Q0FqU0QsQUFpU0MsQ0FqU3FDLEVBQUUsQ0FBQyxTQUFTLEdBaVNqRDtrQkFqU29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4uL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkRyYXdpbmdEYXRhXCIpXHJcbmNsYXNzIERyYXdpbmdEYXRhIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJEcmF3aW5nRGF0YVByZWZhYlwiIH0pXHJcbiAgICBEcmF3aW5nRGF0YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KERyYXdpbmdEYXRhKVxyXG4gICAgRHJhd2luZ0RhdGFBcnJheTogRHJhd2luZ0RhdGFbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsaWNrQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGN1cnJlbnREcmF3aW5nID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHF1ZXN0aW9uTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG4gICAgcXVlc3Rpb25zOiBzdHJpbmdbXSA9IFsnJ107XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBxdWVzdGlvbkltYWdlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgcGljdHVyZUltYWdlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcXVlc3Rpb25fYXVkaW9zOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHJlaXRlcmF0aW9uX0F1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIGluaXRpYWxWTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IG51bGw7XHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgICBEcmF3aW5nVGFibGVDbGFzc1JlZiA9IG51bGw7XHJcbiAgICBvdmVyQWxsRGF0YSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudExldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b3RhbExldmVsczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIFlwb3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHYW1lUGxheS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gR2FtZVBsYXkuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkSnNvbkRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbExldmVscyA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5xdWVzdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG90YWxMZXZlbHMtLVwiICsgdGhpcy50b3RhbExldmVscyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTGV2ZWxzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5xdWVzdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldID0gcXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dDtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25JbWFnZVtpXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fYXVkaW9zW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucGljdHVyZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGljdHVyZUltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25JbWFnZVtpXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9hdWRpb3NbaV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5waWN0dXJlSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVJbWFnZVtpXSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAocXVlc3Rpb25EYXRhLmNvcnJlY3RBdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW2ldID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuTG9hZEpzb25EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuc2V0UG9zaXRpb24oLTYwLCB0aGlzLnF1ZXN0aW9uTm9kZS55KTtcclxuICAgICAgICB0aGlzLllwb3MgPSB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRQb3NpdGlvbigpLnk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuc2V0UG9zaXRpb24oLTYwLCAxODAwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZPID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmluaXRpYWxWTztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFZPKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaW5pdGlhbFZPLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja05leHRMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5pbml0aWFsVk8uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGREcmF3aW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmdldFBvc2l0aW9uKCkueCwgMTM4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrQnV0dG9uXCIpLmdldFBvc2l0aW9uKCkueCArIDEwMCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIFBsYXlRVm9CdXR0b24oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uX2F1ZGlvc1swXSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcy5xdWVzdGlvbl9hdWRpb3NbMF0uZHVyYXRpb24pXHJcbiAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgYWRkRHJhd2luZygpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5EcmF3aW5nRGF0YUFycmF5W0NvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsXS5EcmF3aW5nRGF0YVByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRYUG9zKGNjLndpblNpemUud2lkdGggKiAwLjQ1LCB0aGlzLm5vZGUpLCBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFlQb3MoY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUsIHRoaXMubm9kZSkpKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nLnNldFBvc2l0aW9uKHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS54ICsgNTAsIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS55IC0gNTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zID0gXCIsIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS54KTtcclxuICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdUYWJsZUNsYXNzUmVmKHRoaXMuY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRDaGlsZEJ5TmFtZShcInNwbGFzaFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGljdHVyZUltYWdlW3RoaXMuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnREcmF3aW5nLmdldENoaWxkQnlOYW1lKFwic3BsYXNoXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5xdWVzdGlvbkltYWdlWzBdO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmluaXRUb3VjaCgpO1xyXG4gICAgICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBDb25zdGFudC5nZXRMZXZlbERhdGEoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmRyYXdEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5vdmVyQWxsRGF0YSA9IHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYub3ZlckFsbERhdGE7XHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5kcmF3aW5nRGF0YUFycmF5O1xyXG4gICAgICAgIC8vbmV3XHJcbiAgICAgICAgQ29uc3RhbnQuU2F2ZUxldmVsRGF0YShDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCwgdGhpcy5vdmVyQWxsRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja0NsaWNrZWQoKSB7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyAoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwgKyAxKSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICAgICAgICAvLyB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTGV2ZWxTZWxlY3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5jaGVja05leHRMZXZlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRXhpdENsaWNrZWQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja05leHRMZXZlbCgpIHtcclxuICAgICAgICBsZXQgZHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsICE9IDApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW3RoaXMuY3VycmVudExldmVsIC0gMV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgZHVyYXRpb24gPSB0aGlzLnJlaXRlcmF0aW9uX0F1ZGlvW3RoaXMuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb247XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyAodGhpcy5jdXJyZW50TGV2ZWwpKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgKHRoaXMuY3VycmVudExldmVsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpKS50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikpLnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC43NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnF1ZXN0aW9uTm9kZSkudG8oMC41LCB7IHk6IHRoaXMuWXBvcyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgKHRoaXMuY3VycmVudExldmVsICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25fYXVkaW9zW3RoaXMuY3VycmVudExldmVsXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5xdWVzdGlvbkltYWdlW3RoaXMuY3VycmVudExldmVsXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5nZXRQYXJlbnQoKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVFbmRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2xpZGVEcmFnZWQocmVmKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBwcm9ncmVzcyA9IHJlZi5wcm9ncmVzcyoxMDtcclxuICAgICAgICAvLyAvLyBwcm9ncmVzcyA9IHBhcnNlSW50KHByb2dyZXNzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIC8vIDEwJSBvZiA1MDAgMTAwLTIwMCAxNTBcclxuICAgICAgICAvLyBsZXQgbWluID0gQ29uc3RhbnQuVG9vbHNUYWdTaXplW3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0uTUlOO1xyXG4gICAgICAgIC8vIGxldCBtYXggPSBDb25zdGFudC5Ub29sc1RhZ1NpemVbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXS5NQVg7XHJcbiAgICAgICAgLy8gbGV0IHZhbCA9IENvbnN0YW50LmdldENlbnRlclZhbChtaW4sIG1heCwgMCwgMTAsIHByb2dyZXNzKTtcclxuICAgICAgICAvLyB2YWwgPSBwYXJzZUludCh2YWwudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIC8vIHJlZi5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKFwidmFsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdmFsO1xyXG5cclxuICAgICAgICAvLyBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gPSB2YWw7XHJcbiAgICB9XHJcbn1cclxuIl19
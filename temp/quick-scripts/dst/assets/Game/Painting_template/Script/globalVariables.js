
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25d577LK0hNiIdIeT/jFT5D', 'globalVariables');
// Game/Painting_template/Script/globalVariables.ts

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
var GamePlay_1 = require("./GamePlay/GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jockey = null;
        _this.playBtn_audio = null;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.loadingBar = null;
        _this.play_audio = null;
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        _this.totalLevels = 0;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.mainBg = null;
        _this.initialVO = null;
        return _this;
        // update (dt) {}
    }
    globalVariables_1 = globalVariables;
    globalVariables.prototype.onLoad = function () {
        globalVariables_1.instance = this;
    };
    Object.defineProperty(globalVariables, "Instance", {
        get: function () {
            return globalVariables_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    globalVariables.prototype.start = function () {
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        this.scheduleOnce(function () {
            _this.StartGame();
        }, 2);
        if (this.jockeyName == "Podar") {
            this.node
                .getChildByName("intro")
                .getChildByName("bg")
                .getChildByName("podar").active = true;
        }
        else if (this.jockeyName == "tlc") {
            this.node
                .getChildByName("intro")
                .getChildByName("bg")
                .getChildByName("tlc").active = true;
        }
        else if (this.jockeyName == "supercub") {
            this.node
                .getChildByName("intro")
                .getChildByName("bg")
                .getChildByName("supercub").active = true;
        }
        else if (this.jockeyName == "stallion") {
            this.node
                .getChildByName("intro")
                .getChildByName("bg")
                .getChildByName("stallion").active = true;
        }
        else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
            this.node
                .getChildByName("intro")
                .getChildByName("bg")
                .getChildByName("jaipuria").active = true;
        }
    };
    globalVariables.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, "");
    };
    globalVariables.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, "");
    };
    globalVariables.prototype.OnStartGame = function (_event) {
        cc.audioEngine.playEffect(this.play_audio, false);
        _event.target.getComponent(cc.Button).interactable = false;
        _event.target.active = false;
        this.loadSceneWithProgress();
    };
    globalVariables.prototype.loadSceneWithProgress = function () {
        var _this = this;
        if (this.loadingBar) {
            this.loadingBar.active = true;
        }
        this.scheduleOnce(function () {
            _this.node.getChildByName("intro").active = false;
            _this.node.getChildByName("base").opacity = 255;
            GamePlay_1.default.Instance.StartGame();
            _this.node.getChildByName("BG").active = false;
        }, 1.5);
        // cc.director.preloadScene(this.NextSceneName, (completedCount: number, totalCount: number) => {
        //     let progress = completedCount / totalCount;
        //     this.loadingBar.progress = progress;
        // }, () => {
        //     cc.director.loadScene(this.NextSceneName);
        // })
    };
    globalVariables.prototype.updateJSONdata = function () {
        var _this = this;
        this.node.getChildByName("base").opacity = 0;
        // this.scheduleOnce(() => {
        //     cc.loader.load("https://s3.ap-south-1.amazonaws.com/cgv2-prod-images.creativegalileo.com/HybridLZAssets/BTN-bg-orange.png", (err, texture) => {
        //         if (err) {
        //             console.error("Failed to load image:", err);
        //             return;
        //         }
        //         const spriteFrame = new cc.SpriteFrame(texture);
        //         cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //     });
        // }, 1);
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get("json");
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
            this.questions = jsonData.questionData;
            // console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node
                    .getChildByName("intro")
                    .getChildByName("bg")
                    .getChildByName("Title")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.bgmMusicName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.BGM_audio = audioClip;
                var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                cc.audioEngine.setVolume(id, _this.volume);
            });
            cc.loader.load(jsonData.additionalData.initialVOName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.initialVO = audioClip;
            });
            cc.loader.load(jsonData.additionalData.introBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node
                    .getChildByName("intro")
                    .getChildByName("bg")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.introBG = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.mainBg = spriteFrame;
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }
        else {
            cc.loader.loadRes("game_data", cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    _this.node
                        .getChildByName("intro")
                        .getChildByName("bg")
                        .getChildByName("Title")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    _this.node
                        .getChildByName("intro")
                        .getChildByName("bg")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    _this.introBG = spriteFrame;
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    _this.BGM_audio = AudioClip;
                    var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, _this.volume);
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.initialVOName), function (AudioClip) {
                    _this.initialVO = AudioClip;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    _this.mainBg = spriteFrame;
                    cc
                        .find("Canvas")
                        .getChildByName("bg")
                        .children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.questions.forEach(function (question) {
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    question.pictureImageName = _this.removeExtension(question.pictureImageName);
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
            });
        }
    };
    globalVariables.prototype.StartGame = function () {
        return;
        this.node.getChildByName("intro").active = false;
        this.node.getChildByName("base").opacity = 255;
        GamePlay_1.default.Instance.StartGame();
    };
    globalVariables.prototype.OnPlayBtn = function (_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        this.StartGame();
    };
    globalVariables.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    globalVariables.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    var globalVariables_1;
    globalVariables.instance = null;
    __decorate([
        property(cc.Node)
    ], globalVariables.prototype, "jockey", void 0);
    __decorate([
        property(cc.AudioClip)
    ], globalVariables.prototype, "playBtn_audio", void 0);
    __decorate([
        property(cc.Node)
    ], globalVariables.prototype, "loadingBar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], globalVariables.prototype, "play_audio", void 0);
    globalVariables = globalVariables_1 = __decorate([
        ccclass
    ], globalVariables);
    return globalVariables;
}(cc.Component));
exports.default = globalVariables;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcZ2xvYmFsVmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQTJCckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFxVUM7UUFuVUMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9DQUFvQztRQUM1QixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUNwQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQW1CLEVBQUUsQ0FBQztRQUUvQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDOztRQTBTL0IsaUJBQWlCO0lBQ25CLENBQUM7d0JBclVvQixlQUFlO0lBOEJsQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQkFBVywyQkFBUTthQUFuQjtZQUNFLE9BQU8saUJBQWUsQ0FBQyxRQUFRLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCwrQkFBSyxHQUFMO1FBQUEsaUJBc0NDO1FBckNDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMs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LElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDUjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7O0lBdFNjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQTFCaEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBEQUNZO0lBT25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDUztJQWZiLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FxVW5DO0lBQUQsc0JBQUM7Q0FyVUQsQUFxVUMsQ0FyVTRDLEVBQUUsQ0FBQyxTQUFTLEdBcVV4RDtrQkFyVW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXkvR2FtZVBsYXlcIjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgR2FtZUlEOiBzdHJpbmc7XHJcbiAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgaW50cm9CZ05hbWU6IHN0cmluZztcclxuICBiZ21NdXNpY05hbWU6IHN0cmluZztcclxuICBpbml0aWFsVk9OYW1lOiBzdHJpbmc7XHJcbiAgbWFpbkJnTmFtZTogc3RyaW5nO1xyXG4gIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XHJcbiAgcXVlc3Rpb25JbWFnZU5hbWU6IHN0cmluZztcclxuICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gIHBpY3R1cmVJbWFnZU5hbWU6IHN0cmluZztcclxuICBuZWVkTW9yZVRvb2xzOiBib29sZWFuO1xyXG4gIGNvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxWYXJpYWJsZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcGxheUJ0bl9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGxvYWRpbmdCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHBsYXlfYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIC8vIHByaXZhdGUgdG90YWxMZXZlbHM6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XHJcbiAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIHZvbHVtZTogbnVtYmVyID0gMC4xO1xyXG4gIG1haW5CZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gIGluaXRpYWxWTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IGdsb2JhbFZhcmlhYmxlcyA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgIGlmIChkZW1vID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIHRoaXMuaXNEZW1vR2FtZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXQgaXMgYSBkZW1vIGdhbWVcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUpTT05kYXRhKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuU3RhcnRHYW1lKCk7XHJcbiAgICB9LCAyKTtcclxuICAgIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RhclwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb1wiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInN1cGVyY3ViXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInN0YWxsaW9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImphaXB1cmlhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgXCJcIik7XHJcbiAgfVxyXG4gIHJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGF1ZGlvTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csIFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgT25TdGFydEdhbWUoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICBfZXZlbnQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRTY2VuZVdpdGhQcm9ncmVzcygpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmdCYXIpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICBHYW1lUGxheS5JbnN0YW5jZS5TdGFydEdhbWUoKTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQkdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAxLjUpO1xyXG4gICAgLy8gY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgLy8gICAgIGxldCBwcm9ncmVzcyA9IGNvbXBsZXRlZENvdW50IC8gdG90YWxDb3VudDtcclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgIC8vIH0sICgpID0+IHtcclxuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVKU09OZGF0YSgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikub3BhY2l0eSA9IDA7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWQoXCJodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZ3YyLXByb2QtaW1hZ2VzLmNyZWF0aXZlZ2FsaWxlby5jb20vSHlicmlkTFpBc3NldHMvQlROLWJnLW9yYW5nZS5wbmdcIiwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAvLyAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9LCAxKTtcclxuICAgIGlmICh0aGlzLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgJ2pzb24nIHBhcmFtZXRlciB2YWx1ZSBmcm9tIHRoZSBVUkxcclxuICAgICAgY29uc3QgZW5jb2RlZEpzb24gPSB1cmxQYXJhbXMuZ2V0KFwianNvblwiKTtcclxuXHJcbiAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXHJcbiAgICAgIGNvbnN0IGRlY29kZWRKc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRKc29uKTtcclxuXHJcbiAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcclxuICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZWRKc29uU3RyaW5nKTtcclxuICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQkdNIG11c2ljIG5hbWUgPSBcIiwganNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lKTtcclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMudGl0bGVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkJHTV9hdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAganNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW5pdGlhbFZPTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuaW5pdGlhbFZPID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIGNjXHJcbiAgICAgICAgICAuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuICAgICAgICAgIC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpXHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSksXHJcbiAgICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmluaXRpYWxWT05hbWUpLFxyXG4gICAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUpLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIGNjXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgIC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBxdWVzdGlvbi5waWN0dXJlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnBpY3R1cmVJbWFnZU5hbWUsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFN0YXJ0R2FtZSgpIHtcclxuICAgIHJldHVybjtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgR2FtZVBsYXkuSW5zdGFuY2UuU3RhcnRHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICB0aGlzLlN0YXJ0R2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
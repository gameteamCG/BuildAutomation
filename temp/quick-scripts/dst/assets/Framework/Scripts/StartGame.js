
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd21cdcOFCVMG565duKHxBWs', 'StartGame');
// Framework/Scripts/StartGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 1;
        _this.NextSceneName = "1";
        _this.TotalLevels = 7;
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.loadingBar = null;
        _this.activateHint = false;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        _this.totalLevels = 7;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.mainBg = null;
        return _this;
    }
    startGame_1 = startGame;
    Object.defineProperty(startGame, "Instance", {
        get: function () {
            return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    startGame.prototype.onLoad = function () {
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(function (element) {
            if (element.name == "jockey") {
                _this.JockeyNode = element;
            }
        });
        this.loadingBar = cc
            .find("Canvas/bg/jaipuria/loadingBar")
            .getComponent(cc.ProgressBar);
        this.loadingBar.node.active = false;
    };
    startGame.prototype.logData = function () {
        console.log("Game ID:", this.gameID);
        console.log("Total Levels:", this.totalLevels);
        console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        // Log question data
        this.questions.forEach(function (question, index) {
            console.log("Question " + (index + 1) + ":");
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            console.log("Correct Answer Number:", question.correctAnswerNum);
        });
    };
    startGame.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, "");
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, "");
    };
    startGame.prototype.updateJSONdata = function () {
        var _this = this;
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get("json");
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            this.gameID = jsonData.additionalData.GameID;
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            this.questions = jsonData.questionData;
            console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc
                    .find("Canvas")
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
            cc.loader.load(jsonData.additionalData.introBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc
                    .find("Canvas")
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
            });
            // Now you can use these variables within this script
            this.logData();
        }
        else {
            cc.loader.loadRes("game_data", cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                _this.gameID = jsonData.additionalData.GameID;
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    cc
                        .find("Canvas")
                        .getChildByName("bg")
                        .getChildByName("Title")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    cc
                        .find("Canvas")
                        .getChildByName("bg")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    _this.introBG = spriteFrame;
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    _this.BGM_audio = AudioClip;
                    var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, _this.volume);
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    _this.mainBg = spriteFrame;
                });
                _this.questions.forEach(function (question) {
                    question.options = question.options.map(function (option) {
                        return _this.removeExtension(option);
                    });
                });
                _this.logData();
            });
        }
    };
    startGame.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    startGame.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    startGame.prototype.start = function () {
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var isPremium = url.searchParams.get("isPremium");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        if (level != null) {
            this.NextSceneName = level;
            if (parseInt(this.NextSceneName) >= this.TotalLevels) {
                this.NextSceneName = this.TotalLevels.toString();
            }
        }
        if (mobile == "1") {
            this.hasMobile = true;
        }
        else {
            this.hasMobile = false;
        }
        if (access == "1") {
            this.hasAccess = true;
        }
        else {
            this.hasAccess = false;
        }
        if (!this.isPremiumGame) {
            this.hasAccess = true;
        }
        if (isPremium == "1") {
            this.isMusicOn = true;
        }
        else if (isPremium == "0") {
            this.isMusicOn = false;
        }
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id_1, this.volume);
        }
        var ageValue = parseInt(age);
        if (this.isAgeParameterNeeded) {
            if (ageValue <= this.LevelAgeParameters[0]) {
                this.levelType = "1";
            }
            else if (this.LevelAgeParameters.length > 1) {
                if (ageValue > this.LevelAgeParameters[0] &&
                    ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] &&
                        ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] &&
                            ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] &&
                                ageValue <= this.LevelAgeParameters[4]) {
                                this.levelType = "5";
                            }
                        }
                    }
                }
            }
        }
        // this.scheduleOnce(() => {
        //     console.log("jockey name = ", this.jockeyName);
        //     if (this.jockeyName == "Podar") {
        //         cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
        //     }
        //     else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
        //         cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
        //     }
        //     if (this.jockeyName != "bag" && this.jockeyName != "cryon") {
        //         this.scheduleOnce(() => {
        //             cc.director.loadScene(this.NextSceneName);
        //         }, 2);
        //     }
        // }, 1);
        this.scheduleOnce(function () {
            cc.director.loadScene(_this.NextSceneName);
        }, 2);
        // this.OnTimer();
    };
    startGame.prototype.onClickPlayBtn = function () {
        var _this = this;
        var playBtn = cc.find("Canvas/bg/jaipuria/playBtn");
        var playBtnAnimComp = playBtn.getComponent(cc.Animation);
        playBtnAnimComp.stop();
        // playBtnAnimComp.enabled = false;
        cc.tween(playBtn)
            .to(0.1, { scale: 0.8 }, { easing: "quadOut" })
            .to(0.2, { scale: 1.5 }, { easing: "quadOut" })
            .call(function () {
            // cc.director.loadScene(this.NextSceneName);
            playBtn.active = false;
            _this.loadSceneWithProgress();
        })
            .start();
    };
    startGame.prototype.loadSceneWithProgress = function () {
        var _this = this;
        if (this.loadingBar) {
            this.loadingBar.node.active = true;
        }
        cc.director.preloadScene(this.NextSceneName, function (completedCount, totalCount) {
            var progress = completedCount / totalCount;
            // update the progress bar here
            _this.loadingBar.progress = progress;
        }, function () {
            cc.director.loadScene(_this.NextSceneName);
        });
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            var id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
            console.log("soundSetting--true");
        }
        else {
            this.isMusicOn = false;
            event.target.children[0].active = true;
            cc.audioEngine.stopMusic();
            console.log("soundSetting--false");
        }
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
    startGame.prototype.update = function (dt) {
        //console.log("This totallevels : ", this.totalLevels);
    };
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "volume", void 0);
    __decorate([
        property(cc.String)
    ], startGame.prototype, "NextSceneName", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "TotalLevels", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
    startGame = startGame_1 = __decorate([
        ccclass
    ], startGame);
    return startGame;
}(cc.Component));
exports.default = startGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNmJDO1FBM2JDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsOEJBQThCO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFJVixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUUxQyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUV0QixZQUFNLEdBQVcsRUFBRSxD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QWdCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCx1REFBdUQ7SUFDekQsQ0FBQzs7SUF2WmMsa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFuQzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZDQUNFO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ087SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lEQUN3QjtJQVN6QztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUExQk4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZiN0I7SUFBRCxnQkFBQztDQTdiRCxBQTZiQyxDQTdic0MsRUFBRSxDQUFDLFNBQVMsR0E2YmxEO2tCQTdib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgR2FtZUlEOiBzdHJpbmc7XHJcbiAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgaW50cm9CZ05hbWU6IHN0cmluZztcclxuICBiZ21NdXNpY05hbWU6IHN0cmluZztcclxuICBtYWluQmdOYW1lOiBzdHJpbmc7XHJcbiAgSm9ja2V5TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25EYXRhIHtcclxuICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gIGlzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuICBvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG4gIGNvcnJlY3RBdWRpb3M6IHN0cmluZ1tdO1xyXG4gIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgdm9sdW1lOiBudW1iZXIgPSAxO1xyXG4gIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgTmV4dFNjZW5lTmFtZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBUb3RhbExldmVsczogbnVtYmVyID0gNztcclxuICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICBpc0FnZVBhcmFtZXRlck5lZWRlZCA9IHRydWU7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBMZXZlbEFnZVBhcmFtZXRlcnM6IG51bWJlcltdID0gWzMsIDUsIDddO1xyXG4gIGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGxldmVsVHlwZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgY3VycmVudExldmVsOiBzdHJpbmcgPSBcIjFcIjtcclxuICBoYXNBY2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoYXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtb2JpbGVOdW1iZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgaXNQcmVtaXVtR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAcHJvcGVydHkoQm9vbGVhbilcclxuICBpc01vYmlsZU51bWJlclByaW9yaXR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XHJcbiAgLy8gbW9iTnVtQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBmaXJzdENsaWNrOiBudW1iZXIgPSAxO1xyXG4gIGNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBzdGFydEdhbWUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgbG9hZGluZ0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBnYW1lSUQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIHRpdGxlSW1hZ2VOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG4gIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG4gIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgbWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICBzdGFydEdhbWUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nLS0xMDBcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xyXG4gICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgdGhpcy5Kb2NrZXlOb2RlID0gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nQmFyID0gY2NcclxuICAgICAgLmZpbmQoXCJDYW52YXMvYmcvamFpcHVyaWEvbG9hZGluZ0JhclwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgIHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9nRGF0YSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBJRDpcIiwgdGhpcy5nYW1lSUQpO1xyXG4gICAgY29uc29sZS5sb2coXCJUb3RhbCBMZXZlbHM6XCIsIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJCR00gYXVkaW8gbmFtZTpcIiwgdGhpcy5CR01fYXVkaW8ubmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJKb2NrZXkgTmFtZTpcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAvLyBMb2cgcXVlc3Rpb24gZGF0YVxyXG4gICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAyIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgcmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csIFwiXCIpO1xyXG4gIH1cclxuICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCBcIlwiKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUpTT05kYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoXCJqc29uXCIpO1xyXG5cclxuICAgICAgLy8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuICAgICAgY29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuICAgICAgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG4gICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJCR00gbXVzaWMgbmFtZSA9IFwiLCBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpO1xyXG5cclxuICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICB0aGlzLmxvZ0RhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgY2NcclxuICAgICAgICAgICAgICAuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjY1xyXG4gICAgICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLFxyXG4gICAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkJHTV9hdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2dEYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgdmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcclxuICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgIHZhciBhY2Nlc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFjY2Vzc1wiKTtcclxuICAgIHZhciBtb2JpbGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1vYmlsZVwiKTtcclxuICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICB2YXIgcHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicHJlbWl1bVwiKTtcclxuICAgIHZhciBpc1ByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzUHJlbWl1bVwiKTtcclxuXHJcbiAgICB2YXIgZGVtbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaXNkZW1vXCIpO1xyXG4gICAgaWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUpTT05kYXRhKCk7XHJcblxyXG4gICAgaWYgKHByZW1pdW0gIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByZW1pdW1MZXZlbCA9IHBhcnNlSW50KHByZW1pdW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxldmVsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcbiAgICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IHRoaXMuVG90YWxMZXZlbHMpIHtcclxuICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSB0aGlzLlRvdGFsTGV2ZWxzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcbiAgICAgIHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZW1pdW0gPT0gXCIxXCIpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChpc1ByZW1pdW0gPT0gXCIwXCIpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWdlVmFsdWU6IG51bWJlciA9IHBhcnNlSW50KGFnZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBZ2VQYXJhbWV0ZXJOZWVkZWQpIHtcclxuICAgICAgaWYgKGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJlxyXG4gICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiZcclxuICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiM1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdICYmXHJcbiAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM11cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJlxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbNF1cclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgLy8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyAgICAgICAgIH0sIDIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIDEpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICB9LCAyKTtcclxuXHJcbiAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tQbGF5QnRuKCkge1xyXG4gICAgbGV0IHBsYXlCdG4gPSBjYy5maW5kKFwiQ2FudmFzL2JnL2phaXB1cmlhL3BsYXlCdG5cIik7XHJcbiAgICBsZXQgcGxheUJ0bkFuaW1Db21wID0gcGxheUJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIHBsYXlCdG5BbmltQ29tcC5zdG9wKCk7XHJcbiAgICAvLyBwbGF5QnRuQW5pbUNvbXAuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgY2MudHdlZW4ocGxheUJ0bilcclxuICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjUgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICBwbGF5QnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNjZW5lV2l0aFByb2dyZXNzKCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ0Jhcikge1xyXG4gICAgICB0aGlzLmxvYWRpbmdCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxyXG4gICAgICB0aGlzLk5leHRTY2VuZU5hbWUsXHJcbiAgICAgIChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgYmFyIGhlcmVcclxuICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIE9uTXVzaWMoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE9uQmFjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJUaGlzIHRvdGFsbGV2ZWxzIDogXCIsIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gIH1cclxufVxyXG4iXX0=

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
var globalVariables_1 = require("../../Games/WhatWillHappenNext/Scripts/globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.NextSceneName = "1";
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.playBtn_audio = null;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.mainBg = null;
        _this.jockey = null;
        _this.playButton = null;
        _this.loadingBar = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.totalLevels = 7;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        return _this;
        // blobToDataURL(blobUrl, callback) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.onload = function () {
        //         var reader = new FileReader();
        //         reader.onloadend = function () {
        //             callback(reader.result);
        //         };
        //         reader.readAsDataURL(xhr.response);
        //     };
        //     xhr.open('GET', blobUrl);
        //     xhr.responseType = 'blob';
        //     xhr.send();
        // }
        // update (dt) {}
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
        // const storedJSONData = cc.sys.localStorage.getItem('gameData');
        // if (storedJSONData) {
        //     const jsonData = JSON.parse(storedJSONData);
        // }
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
            console.log("Question Image Name:", question.questionImageName);
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
            this.gameID = jsonData.additionalData.GameID;
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
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
            this.questions.forEach(function (question) {
                question.questionImageName = question.questionImageName;
                // question.option1ImageName = question.option1ImageName
                // question.option2ImageName = question.option2ImageName
            });
            // Now you can use these variables within this script
            // this.logData();
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
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.options = question.options.map(function (option) {
                        return _this.removeExtension(option);
                    });
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
            });
        }
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
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        globalVariables_1.default.Instance.currentLevel = 1;
        // if (level != null) {
        //     this.NextSceneName = level;
        //     globalVariables.Instance.currentLevel = parseInt(this.NextSceneName);
        //     if (parseInt(this.NextSceneName) >= 7) {
        //         this.NextSceneName = "7";
        //         globalVariables.Instance.currentLevel = 7;
        //     }
        // }
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
        cc.director.preloadScene("1");
        this.scheduleOnce(function () {
            console.log("jockey name = ", _this.jockeyName);
            if (_this.jockeyName == "Podar") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("podar").active = true;
            }
            else if (_this.jockeyName == "tlc") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("tlc").active = true;
            }
            else if (_this.jockeyName == "supercub") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("supercub").active = true;
            }
            else if (_this.jockeyName == "stallion") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("stallion").active = true;
            }
            else if (_this.jockeyName == "bag" ||
                _this.jockeyName == "cryon" ||
                _this.jockeyName == "boy" ||
                _this.jockeyName == "girl") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" &&
                _this.jockeyName != "cryon" &&
                _this.jockeyName != "boy" &&
                _this.jockeyName != "girl") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene("1");
                }, 2);
            }
        }, 1);
        // this.OnTimer();
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
    startGame.prototype.OnPlayBtn = function (_event) {
        var _this = this;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        this.playButton.active = false;
        this.loadingBar.node.active = true;
        cc.director.preloadScene(this.NextSceneName, function (current, total) {
            _this.loadingBar.progress = current / total;
        }, function () {
            // this.exitTransition.play();
            // this.scheduleOnce(() => {
            cc.director.loadScene(_this.NextSceneName);
            // }, this.exitTransition.defaultClip.duration / this.exitTransition.defaultClip.speed);
        });
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
    // OnTimer() {
    //     let delay = 1;
    //     for (let i = 0; i < 9999; i++) {
    //         this.scheduleOnce(() => {
    //             if (cc.director.getScene().name != "gameEnd") {
    //                 this.timer++;
    //             }
    //         }, delay);
    //         delay += 1;
    //     }
    // }
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
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "jockey", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "playButton", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], startGame.prototype, "loadingBar", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "totalLevels", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBNkIvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdoQkM7UUE5Z0JBLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQiw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsb0NBQW9DO1FBRXBDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBQ2xDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLDhCQUE4QjtRQUU5QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBSVYsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUVsQyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG9DQUFvQztRQUM1QixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUNwQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQW1CLEVBQUUsQ0FBQzs7UUFrYy9CLHFDQUFxQztRQUNyQyxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYiw4Q0FBOEM7UUFDOUMsU0FBUztRQUNULGdDQUFnQztRQUNoQyxpQ0FBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLElBQUk7UUFFSixpQkFBaUI7SUFDbEIsQ0FBQztrQkFoaEJvQixTQUFTO0lBaUU3QixzQkFBVyxxQkFBUTthQUFuQjtZQUNDLE9BQU8sV0FBUyxDQUFDLFFBQVEsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQUEsaUJBZ0JDO1FBZkEsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsV0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDbEMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFDMUI7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNILGtFQUFrRTtRQUVsRSx3QkFBd0I7UUFDeEIsbURBQW1EO1FBQ25ELElBQUk7SUFDTCxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQVksS0FBSyxHQUFHLENBQUMsT0FBRyxDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hFLGtFQUFrRTtZQUNsRSxrRUFBa0U7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxtQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQ2hDLHdCQUF3QjtRQUN4QixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx3Q0FBb0IsR0FBcEIsVUFBcUIsU0FBaUI7UUFDckMsd0JBQXdCO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFBQSxpQkF5S0M7UUF4S0EsNEJBQTRCO1FBQzVCLHNKQUFzSjtRQUN0SixxQkFBcUI7UUFDckIsMkRBQTJEO1FBQzNELHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osMkRBQTJEO1FBQzNELDRIQUE0SDtRQUM1SCxVQUFVO1FBQ1YsU0FBUztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlELDhDQUE4QztZQUM5QyxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLG1DQUFtQztZQUNuQyxJQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTFELGlEQUFpRDtZQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0Msc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBRXJELHVDQUF1QztZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FDVixtQkFBbUIsRUFDbkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3BDLENBQUM7WUFFRixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87Z0JBQ2hELElBQUksR0FBRyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVDLE9BQU87aUJBQ1A7Z0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxFQUFFO3FCQUNBLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQztxQkFDdkIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQ3BDLFVBQUMsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsSUFBSSxHQUFHLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakQsT0FBTztpQkFDUDtnQkFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQ0QsQ0FBQztZQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUNuQyxVQUFDLEdBQUcsRUFBRSxPQUFPO2dCQUNaLElBQUksR0FBRyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVDLE9BQU87aUJBQ1A7Z0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxFQUFFO3FCQUNBLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDcEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxLQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUM1QixDQUFDLENBQ0QsQ0FBQztZQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUNsQyxVQUFDLEdBQUcsRUFBRSxPQUFPO2dCQUNaLElBQUksR0FBRyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVDLE9BQU87aUJBQ1A7Z0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUMzQixDQUFDLENBQ0QsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDL0IsUUFBUSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDeEQsd0RBQXdEO2dCQUN4RCx3REFBd0Q7WUFDekQsQ0FBQyxDQUFDLENBQUM7WUFDSCxxREFBcUQ7WUFDckQsa0JBQWtCO1NBQ2xCO2FBQU07WUFDTixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUMzRCxJQUFJLEdBQUcsRUFBRTtvQkFDUixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzdCLE9BQU87aUJBQ1A7Z0JBRUQsSUFBTSxRQUFRLEdBQWUsU0FBUyxDQUFDLElBQWtCLENBQUM7Z0JBRTFELHNDQUFzQztnQkFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QyxLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO2dCQUVyRCx1Q0FBdUM7Z0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDdkMsbUVBQW1FO2dCQUNuRSxLQUFJLENBQUMsZUFBZSxDQUNuQixLQUFJLENBQUMsZUFBZSxDQUNuQixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FDdEMsRUFDRCxVQUFDLFdBQVc7b0JBQ1gsRUFBRTt5QkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUM7eUJBQ3BCLGNBQWMsQ0FBQyxPQUFPLENBQUM7eUJBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDckQsQ0FBQyxDQUNELENBQUM7Z0JBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUN6RCxVQUFDLFdBQVc7b0JBQ1gsRUFBRTt5QkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUM7eUJBQ3BCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQzVCLENBQUMsQ0FDRCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxhQUFhLENBQ2pCLEtBQUksQ0FBQyxvQkFBb0IsQ0FDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3BDLEVBQ0QsVUFBQyxTQUFTO29CQUNULEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQ0QsQ0FBQztnQkFDRixLQUFJLENBQUMsZUFBZSxDQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQ3hELFVBQUMsV0FBVztvQkFDWCxLQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDM0IsQ0FBQyxDQUNELENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO29CQUMvQixRQUFRLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FDaEQsUUFBUSxDQUFDLGlCQUFpQixDQUMxQixDQUFDO29CQUNGLFFBQVEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUNwRCxRQUFRLENBQUMscUJBQXFCLENBQzlCLENBQUM7b0JBQ0YsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07d0JBQzlDLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7b0JBQTVCLENBQTRCLENBQzVCLENBQUM7b0JBQ0YsK0VBQStFO29CQUMvRSwrRUFBK0U7Z0JBQ2hGLENBQUMsQ0FBQyxDQUFDO2dCQUNILHFEQUFxRDtnQkFDckQsMEZBQTBGO1lBQzNGLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUFBLGlCQThJQztRQTdJQSxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztRQUNELHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUMsdUJBQXVCO1FBQ3ZCLGtDQUFrQztRQUNsQyw0RUFBNEU7UUFDNUUsK0NBQStDO1FBQy9DLG9DQUFvQztRQUNwQyxxREFBcUQ7UUFDckQsUUFBUTtRQUNSLElBQUk7UUFFSixJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLElBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLFFBQVEsR0FBVyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUNyQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QyxJQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUNyQztvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztpQkFDckI7cUJBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDOUMsSUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt3QkFDckMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFDckM7d0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7cUJBQ3JCO3lCQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQzlDLElBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3JDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQ3JDOzRCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO3lCQUNyQjs2QkFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUM5QyxJQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUNyQztnQ0FDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs2QkFDckI7eUJBQ0Q7cUJBQ0Q7aUJBQ0Q7YUFDRDtTQUNEO1FBRUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUvQyxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUMvQixFQUFFO3FCQUNBLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDeEM7aUJBQU0sSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDcEMsRUFBRTtxQkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDO3FCQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUM7cUJBQ3BCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3RDO2lCQUFNLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3pDLEVBQUU7cUJBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQztxQkFDZCxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUNwQixjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUMzQztpQkFBTSxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO2dCQUN6QyxFQUFFO3FCQUNBLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDcEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDM0M7aUJBQU0sSUFDTixLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7Z0JBQ3hCLEtBQUksQ0FBQyxVQUFVLElBQUksT0FBTztnQkFDMUIsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLO2dCQUN4QixLQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFDeEI7Z0JBQ0QsRUFBRTtxQkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDO3FCQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUM7cUJBQ3BCLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzNDO1lBRUQsSUFDQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7Z0JBQ3hCLEtBQUksQ0FBQyxVQUFVLElBQUksT0FBTztnQkFDMUIsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLO2dCQUN4QixLQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFDeEI7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sa0JBQWtCO0lBQ25CLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsS0FBZTtRQUN0QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsTUFBZ0I7UUFBMUIsaUJBZ0JDO1FBZkEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDdkIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUMsQ0FBQyxFQUNEO1lBQ0MsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsd0ZBQXdGO1FBQ3pGLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyw4REFBOEQ7SUFDOUQsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFFUixJQUFJO0lBRUosbUNBQWUsR0FBZixVQUNDLFNBQWlCLEVBQ2pCLFFBQStDO1FBRS9DLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNoQixTQUFTLEdBQUcsU0FBUyxFQUNyQixFQUFFLENBQUMsV0FBVyxFQUNkLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDaEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1A7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUNDLFNBQWlCLEVBQ2pCLFFBQTZDO1FBRTdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNoQixTQUFTLEdBQUcsU0FBUyxFQUNyQixFQUFFLENBQUMsU0FBUyxFQUNaLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDaEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1A7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDOztJQTljYyxrQkFBUSxHQUFjLElBQUksQ0FBQztJQS9DMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NkNBQ0k7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5REFDd0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDWTtJQVFuQztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUFNekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ1M7SUFPbEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBNUNKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnaEI3QjtJQUFELGdCQUFDO0NBaGhCRCxBQWdoQkMsQ0FoaEJzQyxFQUFFLENBQUMsU0FBUyxHQWdoQmxEO2tCQWhoQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuLi8uLi9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvU2NyaXB0cy9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuXHRHYW1lSUQ6IHN0cmluZztcclxuXHR0b3RhbExldmVsOiBzdHJpbmc7XHJcblx0VGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuXHRpbnRyb0JnTmFtZTogc3RyaW5nO1xyXG5cdGJnbU11c2ljTmFtZTogc3RyaW5nO1xyXG5cdG1haW5CZ05hbWU6IHN0cmluZztcclxuXHRKb2NrZXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG5cdHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xyXG5cdHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcblx0cXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcclxuXHRzaG91bGRQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcclxuXHRjb21tb25PcHRpb25JbWFnZU5hbWU6IHN0cmluZztcclxuXHRpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcblx0bnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XHJcblx0b3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcclxuXHRjb3JyZWN0QXVkaW9OYW1lOiBzdHJpbmc7XHJcblx0Y29ycmVjdEFuc3dlck51bTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTXlKU09ORGF0YSB7XHJcblx0YWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG5cdHF1ZXN0aW9uRGF0YTogUXVlc3Rpb25EYXRhW107XHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0QkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0dm9sdW1lOiBudW1iZXIgPSAwLjE7XHJcblx0QHByb3BlcnR5KGNjLlN0cmluZylcclxuXHROZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcclxuXHRAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuXHRpc0FnZVBhcmFtZXRlck5lZWRlZCA9IHRydWU7XHJcblx0QHByb3BlcnR5KE51bWJlcilcclxuXHRMZXZlbEFnZVBhcmFtZXRlcnM6IG51bWJlcltdID0gWzMsIDUsIDddO1xyXG5cdGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwbGF5QnRuX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHRsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG5cdGN1cnJlbnRMZXZlbDogc3RyaW5nID0gXCIxXCI7XHJcblx0aGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcblx0aGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0bW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShCb29sZWFuKVxyXG5cdGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0QHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0cHJlbWl1bUxldmVsOiBudW1iZXIgPSAzO1xyXG5cdC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0am9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRwbGF5QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG5cdGxvYWRpbmdCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Zmlyc3RDbGljazogbnVtYmVyID0gMTtcclxuXHRjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0dG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcblx0Ly8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG5cdHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0aXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG5cdC8vIHByaXZhdGUgdG90YWxMZXZlbHM6IHN0cmluZyA9IFwiXCI7XHJcblx0cHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHRqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cdHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcblx0c3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Y2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHRcdHN0YXJ0R2FtZS5pbnN0YW5jZSA9IHRoaXM7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcblx0XHRjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XHJcblx0XHR0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRpZiAoZWxlbWVudC5uYW1lID09IFwiam9ja2V5XCIpIHtcclxuXHRcdFx0XHR0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIGNvbnN0IHN0b3JlZEpTT05EYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lRGF0YScpO1xyXG5cclxuXHRcdC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xyXG5cdFx0Ly8gICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShzdG9yZWRKU09ORGF0YSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRsb2dEYXRhKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJHYW1lIElEOlwiLCB0aGlzLmdhbWVJRCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlRvdGFsIExldmVsczpcIiwgdGhpcy50b3RhbExldmVscyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVGl0bGUgSW1hZ2UgTmFtZTpcIiwgdGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkpvY2tleSBOYW1lOlwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuXHRcdC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcblx0XHR0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coYFF1ZXN0aW9uICR7aW5kZXggKyAxfTpgKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJRdWVzdGlvbiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAyIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG5cdFx0cmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csIFwiXCIpO1xyXG5cdH1cclxuXHRyZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHQvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuXHRcdHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUpTT05kYXRhKCkge1xyXG5cdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0Ly8gICAgIGNjLmxvYWRlci5sb2FkKFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2d2Mi1wcm9kLWltYWdlcy5jcmVhdGl2ZWdhbGlsZW8uY29tL0h5YnJpZExaQXNzZXRzL0JUTi1iZy1vcmFuZ2UucG5nXCIsIChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdC8vICAgICAgICAgaWYgKGVycikge1xyXG5cdFx0Ly8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0Ly8gICAgICAgICAgICAgcmV0dXJuO1xyXG5cdFx0Ly8gICAgICAgICB9XHJcblx0XHQvLyAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0Ly8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0Ly8gICAgIH0pO1xyXG5cdFx0Ly8gfSwgMSk7XHJcblx0XHRpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG5cdFx0XHQvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcblx0XHRcdGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldChcImpzb25cIik7XHJcblxyXG5cdFx0XHQvLyBEZWNvZGUgdGhlIFVSTC1lbmNvZGVkIEpTT04gZGF0YVxyXG5cdFx0XHRjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XHJcblxyXG5cdFx0XHQvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0XHJcblx0XHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XHJcblx0XHRcdC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcblx0XHRcdHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG5cdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuXHRcdFx0dGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG5cdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XCJCR00gbXVzaWMgbmFtZSA9IFwiLFxyXG5cdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcblx0XHRcdFx0cXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUgPSBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZTtcclxuXHRcdFx0XHQvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZVxyXG5cdFx0XHRcdC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG5cdFx0XHQvLyB0aGlzLmxvZ0RhdGEoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcblx0XHRcdFx0Ly8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuXHRcdFx0XHR0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuXHRcdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdFx0dGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG5cdFx0XHRcdHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuXHRcdFx0XHQvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHRcdFx0XHQvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihcclxuXHRcdFx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUpLFxyXG5cdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuXHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0cXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcblx0XHRcdFx0Ly8gdGhpcy5sb2dEYXRhKCk7IC8vIFlvdSBjYW4gY2FsbCBhIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZGF0YSBvciB1c2UgaXQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhcnQoKSB7XHJcblx0XHR2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0dmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XHJcblx0XHR2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG5cdFx0dmFyIGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWdlXCIpO1xyXG5cdFx0dmFyIGFjY2VzcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWNjZXNzXCIpO1xyXG5cdFx0dmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG5cdFx0dmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcclxuXHRcdHZhciBwcmVtaXVtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJwcmVtaXVtXCIpO1xyXG5cdFx0dmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuXHRcdGlmIChkZW1vID09IFwidHJ1ZVwiKSB7XHJcblx0XHRcdHRoaXMuaXNEZW1vR2FtZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiSXQgaXMgYSBkZW1vIGdhbWVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG5cdFx0aWYgKHByZW1pdW0gIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnByZW1pdW1MZXZlbCA9IHBhcnNlSW50KHByZW1pdW0pO1xyXG5cdFx0fVxyXG5cdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcblx0XHQvLyBpZiAobGV2ZWwgIT0gbnVsbCkge1xyXG5cdFx0Ly8gICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG5cdFx0Ly8gICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSBwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG5cdFx0Ly8gICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IDcpIHtcclxuXHRcdC8vICAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gXCI3XCI7XHJcblx0XHQvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSA3O1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuXHRcdFx0dGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuXHRcdGlmIChpc0F1ZGlvID09IFwiZmFsc2VcIikge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcblx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xyXG5cdFx0XHRpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcclxuXHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdICYmXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0YWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSAmJlxyXG5cdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiZcclxuXHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdICYmXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XVxyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjVcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInBvZGFyXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhbGxpb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPT0gXCJib3lcIiB8fFxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSA9PSBcImdpcmxcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lICE9IFwiYmFnXCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJjcnlvblwiICYmXHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lICE9IFwiYm95XCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJnaXJsXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0XHR9LCAyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5PblRpbWVyKCk7XHJcblx0fVxyXG5cclxuXHRPbk11c2ljKGV2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcblx0XHRcdGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0bGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS10cnVlXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuXHRcdFx0ZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tZmFsc2VcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlCdG5fYXVkaW8sIGZhbHNlKTtcclxuXHRcdHRoaXMucGxheUJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXHJcblx0XHRcdHRoaXMuTmV4dFNjZW5lTmFtZSxcclxuXHRcdFx0KGN1cnJlbnQsIHRvdGFsKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzID0gY3VycmVudCAvIHRvdGFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdGhpcy5leGl0VHJhbnNpdGlvbi5wbGF5KCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG5cdFx0XHRcdC8vIH0sIHRoaXMuZXhpdFRyYW5zaXRpb24uZGVmYXVsdENsaXAuZHVyYXRpb24gLyB0aGlzLmV4aXRUcmFuc2l0aW9uLmRlZmF1bHRDbGlwLnNwZWVkKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdE9uQmFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcblx0fVxyXG5cclxuXHQvLyBPblRpbWVyKCkge1xyXG5cdC8vICAgICBsZXQgZGVsYXkgPSAxO1xyXG5cdC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk5OTk7IGkrKykge1xyXG5cdC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdC8vICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJnYW1lRW5kXCIpIHtcclxuXHQvLyAgICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xyXG5cdC8vICAgICAgICAgICAgIH1cclxuXHQvLyAgICAgICAgIH0sIGRlbGF5KTtcclxuXHQvLyAgICAgICAgIGRlbGF5ICs9IDE7XHJcblx0Ly8gICAgIH1cclxuXHJcblx0Ly8gfVxyXG5cclxuXHRsb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRpbWFnZU5hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcblx0XHRcdGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblx0bG9hZEF1ZGlvQ2xpcChcclxuXHRcdGF1ZGlvTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHQvLyBibG9iVG9EYXRhVVJMKGJsb2JVcmwsIGNhbGxiYWNrKSB7XHJcblx0Ly8gICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHQvLyAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdC8vICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyAgICAgICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcclxuXHQvLyAgICAgICAgIH07XHJcblx0Ly8gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xyXG5cdC8vICAgICB9O1xyXG5cdC8vICAgICB4aHIub3BlbignR0VUJywgYmxvYlVybCk7XHJcblx0Ly8gICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcblx0Ly8gICAgIHhoci5zZW5kKCk7XHJcblx0Ly8gfVxyXG5cclxuXHQvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
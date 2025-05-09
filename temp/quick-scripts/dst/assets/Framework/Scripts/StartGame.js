
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
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene("1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBNkIvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdnQkM7UUE5ZkEsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFZLEtBQUss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QkFBUSxHQUFjLElBQUksQ0FBQztJQTNDMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NkNBQ0k7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5REFDd0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDWTtJQVFuQztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUFNekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQVF2QjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7a0RBQ087SUF4Q0osU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWdnQjdCO0lBQUQsZ0JBQUM7Q0FoZ0JELEFBZ2dCQyxDQWhnQnNDLEVBQUUsQ0FBQyxTQUFTLEdBZ2dCbEQ7a0JBaGdCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4uLy4uL0dhbWVzL1doYXRXaWxsSGFwcGVuTmV4dC9TY3JpcHRzL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbnRlcmZhY2UgQWRkaXRpb25hbERhdGEge1xyXG5cdEdhbWVJRDogc3RyaW5nO1xyXG5cdHRvdGFsTGV2ZWw6IHN0cmluZztcclxuXHRUaXRsZUltYWdlTmFtZTogc3RyaW5nO1xyXG5cdGludHJvQmdOYW1lOiBzdHJpbmc7XHJcblx0YmdtTXVzaWNOYW1lOiBzdHJpbmc7XHJcblx0bWFpbkJnTmFtZTogc3RyaW5nO1xyXG5cdEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcblx0cXVlc3Rpb25UZXh0OiBzdHJpbmc7XHJcblx0cXVlc3Rpb25JbWFnZU5hbWU6IHN0cmluZztcclxuXHRxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG5cdHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG5cdGNvbW1vbk9wdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG5cdGlzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuXHRudW1iZXJPZk9wdGlvbnM6IG51bWJlcjtcclxuXHRvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG5cdGNvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxuXHRjb3JyZWN0QW5zd2VyTnVtOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNeUpTT05EYXRhIHtcclxuXHRhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGE7XHJcblx0cXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0R2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRCR01fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KE51bWJlcilcclxuXHR2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuXHRAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG5cdE5leHRTY2VuZU5hbWU6IHN0cmluZyA9IFwiMVwiO1xyXG5cdEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG5cdGlzQWdlUGFyYW1ldGVyTmVlZGVkID0gdHJ1ZTtcclxuXHRAcHJvcGVydHkoTnVtYmVyKVxyXG5cdExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcblx0aXNNdXNpY09uOiBib29sZWFuID0gdHJ1ZTtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cdGxldmVsVHlwZTogc3RyaW5nID0gXCIxXCI7XHJcblx0Y3VycmVudExldmVsOiBzdHJpbmcgPSBcIjFcIjtcclxuXHRoYXNBY2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRoYXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRtb2JpbGVOdW1iZXI6IHN0cmluZyA9IG51bGw7XHJcblx0QHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNQcmVtaXVtR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRAcHJvcGVydHkoQm9vbGVhbilcclxuXHRpc01vYmlsZU51bWJlclByaW9yaXR5OiBib29sZWFuID0gZmFsc2U7XHJcblx0QHByb3BlcnR5KE51bWJlcilcclxuXHRwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XHJcblx0Ly8gbW9iTnVtQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdG1haW5CZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Zmlyc3RDbGljazogbnVtYmVyID0gMTtcclxuXHRjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0dG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcblx0Ly8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG5cdHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0aXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG5cdC8vIHByaXZhdGUgdG90YWxMZXZlbHM6IHN0cmluZyA9IFwiXCI7XHJcblx0cHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHRqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cdHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcblx0c3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Y2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHRcdHN0YXJ0R2FtZS5pbnN0YW5jZSA9IHRoaXM7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcblx0XHRjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XHJcblx0XHR0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRpZiAoZWxlbWVudC5uYW1lID09IFwiam9ja2V5XCIpIHtcclxuXHRcdFx0XHR0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIGNvbnN0IHN0b3JlZEpTT05EYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lRGF0YScpO1xyXG5cclxuXHRcdC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xyXG5cdFx0Ly8gICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShzdG9yZWRKU09ORGF0YSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRsb2dEYXRhKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJHYW1lIElEOlwiLCB0aGlzLmdhbWVJRCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlRvdGFsIExldmVsczpcIiwgdGhpcy50b3RhbExldmVscyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVGl0bGUgSW1hZ2UgTmFtZTpcIiwgdGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkpvY2tleSBOYW1lOlwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuXHRcdC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcblx0XHR0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coYFF1ZXN0aW9uICR7aW5kZXggKyAxfTpgKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJRdWVzdGlvbiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAyIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG5cdFx0cmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csIFwiXCIpO1xyXG5cdH1cclxuXHRyZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHQvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuXHRcdHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUpTT05kYXRhKCkge1xyXG5cdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0Ly8gICAgIGNjLmxvYWRlci5sb2FkKFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2d2Mi1wcm9kLWltYWdlcy5jcmVhdGl2ZWdhbGlsZW8uY29tL0h5YnJpZExaQXNzZXRzL0JUTi1iZy1vcmFuZ2UucG5nXCIsIChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdC8vICAgICAgICAgaWYgKGVycikge1xyXG5cdFx0Ly8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG5cdFx0Ly8gICAgICAgICAgICAgcmV0dXJuO1xyXG5cdFx0Ly8gICAgICAgICB9XHJcblx0XHQvLyAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0Ly8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0Ly8gICAgIH0pO1xyXG5cdFx0Ly8gfSwgMSk7XHJcblx0XHRpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG5cdFx0XHQvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcblx0XHRcdGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldChcImpzb25cIik7XHJcblxyXG5cdFx0XHQvLyBEZWNvZGUgdGhlIFVSTC1lbmNvZGVkIEpTT04gZGF0YVxyXG5cdFx0XHRjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XHJcblxyXG5cdFx0XHQvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0XHJcblx0XHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XHJcblx0XHRcdC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcblx0XHRcdHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG5cdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuXHRcdFx0dGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG5cdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XCJCR00gbXVzaWMgbmFtZSA9IFwiLFxyXG5cdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcblx0XHRcdFx0cXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUgPSBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZTtcclxuXHRcdFx0XHQvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZVxyXG5cdFx0XHRcdC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG5cdFx0XHQvLyB0aGlzLmxvZ0RhdGEoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcblx0XHRcdFx0Ly8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuXHRcdFx0XHR0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuXHRcdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdFx0dGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG5cdFx0XHRcdHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuXHRcdFx0XHQvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHRcdFx0XHQvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihcclxuXHRcdFx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUpLFxyXG5cdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuXHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0cXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcblx0XHRcdFx0Ly8gdGhpcy5sb2dEYXRhKCk7IC8vIFlvdSBjYW4gY2FsbCBhIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZGF0YSBvciB1c2UgaXQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhcnQoKSB7XHJcblx0XHR2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0dmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XHJcblx0XHR2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG5cdFx0dmFyIGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWdlXCIpO1xyXG5cdFx0dmFyIGFjY2VzcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWNjZXNzXCIpO1xyXG5cdFx0dmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG5cdFx0dmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcclxuXHRcdHZhciBwcmVtaXVtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJwcmVtaXVtXCIpO1xyXG5cdFx0dmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuXHRcdGlmIChkZW1vID09IFwidHJ1ZVwiKSB7XHJcblx0XHRcdHRoaXMuaXNEZW1vR2FtZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiSXQgaXMgYSBkZW1vIGdhbWVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG5cdFx0aWYgKHByZW1pdW0gIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnByZW1pdW1MZXZlbCA9IHBhcnNlSW50KHByZW1pdW0pO1xyXG5cdFx0fVxyXG5cdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcblx0XHQvLyBpZiAobGV2ZWwgIT0gbnVsbCkge1xyXG5cdFx0Ly8gICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG5cdFx0Ly8gICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSBwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG5cdFx0Ly8gICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IDcpIHtcclxuXHRcdC8vICAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gXCI3XCI7XHJcblx0XHQvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSA3O1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuXHRcdFx0dGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuXHRcdGlmIChpc0F1ZGlvID09IFwiZmFsc2VcIikge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcblx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xyXG5cdFx0XHRpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcclxuXHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdICYmXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0YWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSAmJlxyXG5cdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiZcclxuXHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdICYmXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XVxyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjVcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInBvZGFyXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhbGxpb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPT0gXCJib3lcIiB8fFxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSA9PSBcImdpcmxcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lICE9IFwiYmFnXCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJjcnlvblwiICYmXHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lICE9IFwiYm95XCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJnaXJsXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0XHR9LCAyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5PblRpbWVyKCk7XHJcblx0fVxyXG5cclxuXHRPbk11c2ljKGV2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcblx0XHRcdGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0bGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS10cnVlXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuXHRcdFx0ZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tZmFsc2VcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0X2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcblx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG5cdH1cclxuXHJcblx0T25CYWNrKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIE9uVGltZXIoKSB7XHJcblx0Ly8gICAgIGxldCBkZWxheSA9IDE7XHJcblx0Ly8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XHJcblx0Ly8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0Ly8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImdhbWVFbmRcIikge1xyXG5cdC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XHJcblx0Ly8gICAgICAgICAgICAgfVxyXG5cdC8vICAgICAgICAgfSwgZGVsYXkpO1xyXG5cdC8vICAgICAgICAgZGVsYXkgKz0gMTtcclxuXHQvLyAgICAgfVxyXG5cclxuXHQvLyB9XHJcblxyXG5cdGxvYWRTcHJpdGVGcmFtZShcclxuXHRcdGltYWdlTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWRcclxuXHQpIHtcclxuXHRcdGNjLmxvYWRlci5sb2FkUmVzKFxyXG5cdFx0XHRcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuXHRcdFx0Y2MuU3ByaXRlRnJhbWUsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHRsb2FkQXVkaW9DbGlwKFxyXG5cdFx0YXVkaW9OYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWRcclxuXHQpIHtcclxuXHRcdGNjLmxvYWRlci5sb2FkUmVzKFxyXG5cdFx0XHRcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSxcclxuXHRcdFx0Y2MuQXVkaW9DbGlwLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIGJsb2JUb0RhdGFVUkwoYmxvYlVybCwgY2FsbGJhY2spIHtcclxuXHQvLyAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdC8vICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblx0Ly8gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vICAgICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xyXG5cdC8vICAgICAgICAgfTtcclxuXHQvLyAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XHJcblx0Ly8gICAgIH07XHJcblx0Ly8gICAgIHhoci5vcGVuKCdHRVQnLCBibG9iVXJsKTtcclxuXHQvLyAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuXHQvLyAgICAgeGhyLnNlbmQoKTtcclxuXHQvLyB9XHJcblxyXG5cdC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
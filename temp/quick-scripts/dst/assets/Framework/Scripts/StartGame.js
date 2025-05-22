
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
        _this.playBtn_audio = null;
        // currentHealth: number = 10;
        _this.playButton = null;
        _this.loadingBar = null;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.templateType = "";
        _this.optionLayout = "horizontal";
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
            this.optionLayout = jsonData.additionalData.optionLayout;
            this.templateType = jsonData.additionalData.templateType;
            //console.log("optionLayout @@@@@@@@@@@@@@@@ = ", this.optionLayout);
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
            if (this.templateType != "SimpleTap") {
                this.questions.forEach(function (question) {
                    question.questionImageName = question.questionImageName;
                    // question.option1ImageName = question.option1ImageName
                    // question.option2ImageName = question.option2ImageName
                });
            }
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
                _this.optionLayout = jsonData.additionalData.optionLayout;
                _this.templateType = jsonData.additionalData.templateType;
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
                    if (_this.templateType != "SimpleTap") {
                        question.questionImageName = _this.removeExtension(question.questionImageName);
                    }
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
        this.NextSceneName = "1";
        globalVariables_1.default.Instance.currentLevel = 1;
        // if (premium != null) {
        //     this.premiumLevel = parseInt(premium);
        // }
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
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" &&
                _this.jockeyName != "cryon" &&
                _this.jockeyName != "girl" &&
                _this.jockeyName != "boy") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene("1");
                }, 2);
            }
            // if () {
            // 	this.scheduleOnce(() => {
            // 		cc.director.loadScene("1");
            // 	}, 2);
            // }
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
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "playButton", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], startGame.prototype, "loadingBar", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBZ0MvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFoQkM7UUFuaEJBLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixpQkFBVyxHQUFXLENBQUMs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TXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFRdkI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1k7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNTO0lBL0NkLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxaEI3QjtJQUFELGdCQUFDO0NBcmhCRCxBQXFoQkMsQ0FyaEJzQyxFQUFFLENBQUMsU0FBUyxHQXFoQmxEO2tCQXJoQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuLi8uLi9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvU2NyaXB0cy9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuXHRHYW1lSUQ6IHN0cmluZztcclxuXHR0b3RhbExldmVsOiBzdHJpbmc7XHJcblx0VGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuXHRpbnRyb0JnTmFtZTogc3RyaW5nO1xyXG5cdGJnbU11c2ljTmFtZTogc3RyaW5nO1xyXG5cdG1haW5CZ05hbWU6IHN0cmluZztcclxuXHRKb2NrZXlOYW1lOiBzdHJpbmc7XHJcblx0b3B0aW9uTGF5b3V0OiBzdHJpbmc7XHJcblx0dGVtcGxhdGVUeXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG5cdHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xyXG5cdHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcblx0cXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcclxuXHRzaG91bGRQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcclxuXHRjb21tb25PcHRpb25JbWFnZU5hbWU6IHN0cmluZztcclxuXHRpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcblx0aXNPcHRpb25CRzogYm9vbGVhbjtcclxuXHRudW1iZXJPZk9wdGlvbnM6IG51bWJlcjtcclxuXHRvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG5cdGNvcnJlY3RBdWRpb3M6IHN0cmluZ1tdO1xyXG5cdGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG5cdGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuXHRxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRAcHJvcGVydHkoTnVtYmVyKVxyXG5cdHZvbHVtZTogbnVtYmVyID0gMC4xO1xyXG5cdEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcblx0TmV4dFNjZW5lTmFtZTogc3RyaW5nID0gXCIxXCI7XHJcblx0QHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcblx0aXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0TGV2ZWxBZ2VQYXJhbWV0ZXJzOiBudW1iZXJbXSA9IFszLCA1LCA3XTtcclxuXHRpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHRsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG5cdGN1cnJlbnRMZXZlbDogc3RyaW5nID0gXCIxXCI7XHJcblx0aGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcblx0aGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0bW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShCb29sZWFuKVxyXG5cdGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0QHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0cHJlbWl1bUxldmVsOiBudW1iZXIgPSAzO1xyXG5cdC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0am9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcblx0Y2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRAcHJvcGVydHkoTnVtYmVyKVxyXG5cdHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0Ly8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0cGxheUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuXHRsb2FkaW5nQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblx0dGltZXI6IG51bWJlciA9IDA7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBzdGFydEdhbWUgPSBudWxsO1xyXG5cclxuXHRwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGFjdGl2YXRlSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRpc0RlbW9HYW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGludHJvQkc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBnYW1lSUQ6IHN0cmluZyA9IFwiXCI7XHJcblx0Ly8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuXHRwcml2YXRlIHRpdGxlSW1hZ2VOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cdGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblx0dGVtcGxhdGVUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG5cdG9wdGlvbkxheW91dDogc3RyaW5nID0gXCJob3Jpem9udGFsXCI7XHJcblx0cXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuXHRzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG5cdFx0cmV0dXJuIHN0YXJ0R2FtZS5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHRjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cdFx0c3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuXHRcdHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdGlmIChlbGVtZW50Lm5hbWUgPT0gXCJqb2NrZXlcIikge1xyXG5cdFx0XHRcdHRoaXMuSm9ja2V5Tm9kZSA9IGVsZW1lbnQ7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gY29uc3Qgc3RvcmVkSlNPTkRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVEYXRhJyk7XHJcblxyXG5cdFx0Ly8gaWYgKHN0b3JlZEpTT05EYXRhKSB7XHJcblx0XHQvLyAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKHN0b3JlZEpTT05EYXRhKTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdGxvZ0RhdGEoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkdhbWUgSUQ6XCIsIHRoaXMuZ2FtZUlEKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVG90YWwgTGV2ZWxzOlwiLCB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiQkdNIGF1ZGlvIG5hbWU6XCIsIHRoaXMuQkdNX2F1ZGlvLm5hbWUpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJUaXRsZSBJbWFnZSBOYW1lOlwiLCB0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiSm9ja2V5IE5hbWU6XCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG5cdFx0Ly8gTG9nIHF1ZXN0aW9uIGRhdGFcclxuXHRcdHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhgUXVlc3Rpb24gJHtpbmRleCArIDF9OmApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJRdWVzdGlvbiBBdWRpbyBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiT3B0aW9uIDEgSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiT3B0aW9uIDIgSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQ29ycmVjdCBBbnN3ZXIgTnVtYmVyOlwiLCBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyTnVtKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0Ly8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcblx0XHRyZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgXCJcIik7XHJcblx0fVxyXG5cdHJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGF1ZGlvTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG5cdFx0cmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csIFwiXCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSlNPTmRhdGEoKSB7XHJcblx0XHRpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG5cdFx0XHQvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcblx0XHRcdGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldChcImpzb25cIik7XHJcblxyXG5cdFx0XHQvLyBEZWNvZGUgdGhlIFVSTC1lbmNvZGVkIEpTT04gZGF0YVxyXG5cdFx0XHRjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XHJcblxyXG5cdFx0XHQvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0XHJcblx0XHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XHJcblx0XHRcdC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcblx0XHRcdHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG5cdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuXHRcdFx0dGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG5cdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cdFx0XHR0aGlzLm9wdGlvbkxheW91dCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm9wdGlvbkxheW91dDtcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZVR5cGUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50ZW1wbGF0ZVR5cGU7XHJcblxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwib3B0aW9uTGF5b3V0IEBAQEBAQEBAQEBAQEBAQEAgPSBcIiwgdGhpcy5vcHRpb25MYXlvdXQpO1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XCJCR00gbXVzaWMgbmFtZSA9IFwiLFxyXG5cdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLFxyXG5cdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSxcclxuXHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuXHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWU7XHJcblx0XHRcdFx0XHQvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZVxyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG5cdFx0XHQvLyB0aGlzLmxvZ0RhdGEoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcblx0XHRcdFx0Ly8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuXHRcdFx0XHR0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuXHRcdFx0XHRsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcblx0XHRcdFx0dGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG5cdFx0XHRcdHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cdFx0XHRcdHRoaXMub3B0aW9uTGF5b3V0ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEub3B0aW9uTGF5b3V0O1xyXG5cdFx0XHRcdHRoaXMudGVtcGxhdGVUeXBlID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudGVtcGxhdGVUeXBlO1xyXG5cclxuXHRcdFx0XHQvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHRcdFx0XHQvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihcclxuXHRcdFx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUpLFxyXG5cdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdFx0cXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWVcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKFxyXG5cdFx0XHRcdFx0XHRxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWVcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRxdWVzdGlvbi5vcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT5cclxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuXHRcdFx0XHRcdC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG5cdFx0XHRcdC8vIHRoaXMubG9nRGF0YSgpOyAvLyBZb3UgY2FuIGNhbGwgYSBmdW5jdGlvbiB0byBsb2cgdGhlIGRhdGEgb3IgdXNlIGl0IGluIG90aGVyIGZ1bmN0aW9uc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0dmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG5cdFx0dmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcclxuXHRcdHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuXHRcdHZhciBhY2Nlc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFjY2Vzc1wiKTtcclxuXHRcdHZhciBtb2JpbGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1vYmlsZVwiKTtcclxuXHRcdHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcblx0XHR2YXIgcHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicHJlbWl1bVwiKTtcclxuXHRcdHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XHJcblx0XHRpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG5cdFx0XHR0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlSlNPTmRhdGEoKTtcclxuXHRcdHRoaXMuTmV4dFNjZW5lTmFtZSA9IFwiMVwiO1xyXG5cdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcblx0XHQvLyBpZiAocHJlbWl1bSAhPSBudWxsKSB7XHJcblx0XHQvLyAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGlmIChsZXZlbCAhPSBudWxsKSB7XHJcblx0XHQvLyAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcblx0XHQvLyAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcblx0XHQvLyAgICAgaWYgKHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSkgPj0gNykge1xyXG5cdFx0Ly8gICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBcIjdcIjtcclxuXHRcdC8vICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDc7XHJcblx0XHQvLyAgICAgfVxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdGlmIChtb2JpbGUgPT0gXCIxXCIpIHtcclxuXHRcdFx0dGhpcy5oYXNNb2JpbGUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5oYXNNb2JpbGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChhY2Nlc3MgPT0gXCIxXCIpIHtcclxuXHRcdFx0dGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5oYXNBY2Nlc3MgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuaXNQcmVtaXVtR2FtZSkge1xyXG5cdFx0XHR0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0aWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzQWdlUGFyYW1ldGVyTmVlZGVkKSB7XHJcblx0XHRcdGlmIChhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSkge1xyXG5cdFx0XHRcdHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0gJiZcclxuXHRcdFx0XHRcdGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdICYmXHJcblx0XHRcdFx0XHRcdGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjNcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMykge1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0YWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXSAmJlxyXG5cdFx0XHRcdFx0XHRcdGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGV2ZWxUeXBlID0gXCI0XCI7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHRcdGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10gJiZcclxuXHRcdFx0XHRcdFx0XHRcdGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzRdXHJcblx0XHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiNVwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInBvZGFyXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhbGxpb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCB0aGlzLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmXHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lICE9IFwiY3J5b25cIiAmJlxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSAhPSBcImdpcmxcIiAmJlxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSAhPSBcImJveVwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcblx0XHRcdFx0fSwgMik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaWYgKCkge1xyXG5cdFx0XHQvLyBcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly8gXHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcblx0XHRcdC8vIFx0fSwgMik7XHJcblx0XHRcdC8vIH1cclxuXHRcdH0sIDEpO1xyXG5cclxuXHRcdC8vIHRoaXMuT25UaW1lcigpO1xyXG5cdH1cclxuXHJcblx0T25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdGlmIChldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuXHRcdFx0dGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG5cdFx0XHRldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tdHJ1ZVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcblx0XHRcdGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLWZhbHNlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0T25QbGF5QnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcblx0XHR0aGlzLnBsYXlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLmxvYWRpbmdCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxyXG5cdFx0XHR0aGlzLk5leHRTY2VuZU5hbWUsXHJcblx0XHRcdChjdXJyZW50LCB0b3RhbCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzcyA9IGN1cnJlbnQgLyB0b3RhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdC8vIHRoaXMuZXhpdFRyYW5zaXRpb24ucGxheSgpO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuXHRcdFx0XHQvLyB9LCB0aGlzLmV4aXRUcmFuc2l0aW9uLmRlZmF1bHRDbGlwLmR1cmF0aW9uIC8gdGhpcy5leGl0VHJhbnNpdGlvbi5kZWZhdWx0Q2xpcC5zcGVlZCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRPbkJhY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gT25UaW1lcigpIHtcclxuXHQvLyAgICAgbGV0IGRlbGF5ID0gMTtcclxuXHQvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OTk5OyBpKyspIHtcclxuXHQvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHQvLyAgICAgICAgICAgICBpZiAoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lICE9IFwiZ2FtZUVuZFwiKSB7XHJcblx0Ly8gICAgICAgICAgICAgICAgIHRoaXMudGltZXIrKztcclxuXHQvLyAgICAgICAgICAgICB9XHJcblx0Ly8gICAgICAgICB9LCBkZWxheSk7XHJcblx0Ly8gICAgICAgICBkZWxheSArPSAxO1xyXG5cdC8vICAgICB9XHJcblxyXG5cdC8vIH1cclxuXHJcblx0bG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0aW1hZ2VOYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG5cdFx0XHRjYy5TcHJpdGVGcmFtZSxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxvYWRBdWRpb0NsaXAoXHJcblx0XHRhdWRpb05hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG5cdFx0XHRjYy5BdWRpb0NsaXAsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gYmxvYlRvRGF0YVVSTChibG9iVXJsLCBjYWxsYmFjaykge1xyXG5cdC8vICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0Ly8gICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHQvLyAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XHJcblx0Ly8gICAgICAgICB9O1xyXG5cdC8vICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcclxuXHQvLyAgICAgfTtcclxuXHQvLyAgICAgeGhyLm9wZW4oJ0dFVCcsIGJsb2JVcmwpO1xyXG5cdC8vICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG5cdC8vICAgICB4aHIuc2VuZCgpO1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
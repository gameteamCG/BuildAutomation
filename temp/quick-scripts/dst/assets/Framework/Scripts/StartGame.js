
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
        return imageName.replace(/\.png$/g, '');
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    };
    startGame.prototype.updateJSONdata = function () {
        var _this = this;
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get('json');
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
                cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
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
                    cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                    question.options = question.options.map(function (option) { return _this.removeExtension(option); });
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
                if (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4]) {
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
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
            }
            else if (_this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true;
            }
            else if (_this.jockeyName == "supercub") {
                cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true;
            }
            else if (_this.jockeyName == "stallion") {
                cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true;
            }
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" && _this.jockeyName != "cryon") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene("1");
                }, 2);
            }
            if (_this.jockeyName != "girl" && _this.jockeyName != "boy") {
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
        _event.target.active = false;
        _event.target.parent.getChildByName("loading").active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBZ0MvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTRiQztRQTFiRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBRXJCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1Qix3QkFBa0IsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQiw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsb0NBQW9DO1FBRXBDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7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S0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRS9DLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2hGO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzlFO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25GO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25GO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzdELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25GO1lBRUQsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMs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QyxDQTVic0MsRUFBRSxDQUFDLFNBQVMsR0E0YmxEO2tCQTVib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuLi8uLi9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvU2NyaXB0cy9nbG9iYWxWYXJpYWJsZXNcIjtcbmludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XG4gICAgR2FtZUlEOiBzdHJpbmc7XG4gICAgdG90YWxMZXZlbDogc3RyaW5nO1xuICAgIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XG4gICAgaW50cm9CZ05hbWU6IHN0cmluZztcbiAgICBiZ21NdXNpY05hbWU6IHN0cmluZztcbiAgICBtYWluQmdOYW1lOiBzdHJpbmc7XG4gICAgSm9ja2V5TmFtZTogc3RyaW5nO1xuICAgIG9wdGlvbkxheW91dDogc3RyaW5nO1xuICAgIHRlbXBsYXRlVHlwZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVlc3Rpb25EYXRhIHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBxdWVzdGlvbkltYWdlTmFtZTogc3RyaW5nO1xuICAgIHF1ZXN0aW9uQXVkaW9OYW1lOiBzdHJpbmc7XG4gICAgc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW86IGJvb2xlYW47XG4gICAgY29tbW9uT3B0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XG4gICAgaXNPcHRpb25UZXh0OiBib29sZWFuO1xuICAgIGlzT3B0aW9uQkc6IGJvb2xlYW47XG4gICAgbnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XG4gICAgb3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcbiAgICBjb3JyZWN0QXVkaW9zOiBzdHJpbmdbXTtcbiAgICBjb3JyZWN0QW5zd2VyTnVtOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNeUpTT05EYXRhIHtcbiAgICBhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGE7XG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIHZvbHVtZTogbnVtYmVyID0gMC4xO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgTmV4dFNjZW5lTmFtZTogc3RyaW5nID0gXCIxXCI7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgTGV2ZWxBZ2VQYXJhbWV0ZXJzOiBudW1iZXJbXSA9IFszLCA1LCA3XTtcbiAgICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBjdXJyZW50TGV2ZWw6IHN0cmluZyA9IFwiMVwiO1xuICAgIGhhc0FjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGhhc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG1vYmlsZU51bWJlcjogc3RyaW5nID0gbnVsbDtcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcbiAgICBpc1ByZW1pdW1HYW1lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoQm9vbGVhbilcbiAgICBpc01vYmlsZU51bWJlclByaW9yaXR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KE51bWJlcilcbiAgICBwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XG4gICAgLy8gbW9iTnVtQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBKb2NrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XG4gICAgY2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KE51bWJlcilcbiAgICB0b3RhbExldmVsczogbnVtYmVyID0gNztcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcGxheUJ0bl9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcblxuICAgIHRpbWVyOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHN0YXJ0R2FtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGludHJvQkc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSBnYW1lSUQ6IHN0cmluZyA9IFwiXCI7XG4gICAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHRpdGxlSW1hZ2VOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgdGVtcGxhdGVUeXBlOiBzdHJpbmcgPSBcIlwiO1xuICAgIG9wdGlvbkxheW91dDogc3RyaW5nID0gXCJob3Jpem9udGFsXCI7XG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xuXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0R2FtZS5pbnN0YW5jZVxuICAgIH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBzdGFydEdhbWUuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gXCJqb2NrZXlcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuSm9ja2V5Tm9kZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zdCBzdG9yZWRKU09ORGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZURhdGEnKTtcblxuICAgICAgICAvLyBpZiAoc3RvcmVkSlNPTkRhdGEpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShzdG9yZWRKU09ORGF0YSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBsb2dEYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgSUQ6XCIsIHRoaXMuZ2FtZUlEKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb3RhbCBMZXZlbHM6XCIsIHRoaXMudG90YWxMZXZlbHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaXRsZSBJbWFnZSBOYW1lOlwiLCB0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJKb2NrZXkgTmFtZTpcIiwgdGhpcy5qb2NrZXlOYW1lKTtcblxuICAgICAgICAvLyBMb2cgcXVlc3Rpb24gZGF0YVxuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMSBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT3B0aW9uIDIgSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cbiAgICAgICAgcmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csICcnKTtcbiAgICB9XG4gICAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cbiAgICAgICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csICcnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVKU09OZGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZEpzb24gPSB1cmxQYXJhbXMuZ2V0KCdqc29uJyk7XG5cbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XG4gICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xuICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XG4gICAgICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XG4gICAgICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MYXlvdXQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5vcHRpb25MYXlvdXQ7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlVHlwZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRlbXBsYXRlVHlwZTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9wdGlvbkxheW91dCBAQEBAQEBAQEBAQEBAQEBAID0gXCIsIHRoaXMub3B0aW9uTGF5b3V0KTtcblxuICAgICAgICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCR00gbXVzaWMgbmFtZSA9IFwiLCBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpO1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaChxdWVzdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XG4gICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lX2RhdGEnLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XG4gICAgICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxheW91dCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm9wdGlvbkxheW91dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlVHlwZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRlbXBsYXRlVHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbih0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAodGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaChxdWVzdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKG9wdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxuICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nRGF0YSgpOyAvLyBZb3UgY2FuIGNhbGwgYSBmdW5jdGlvbiB0byBsb2cgdGhlIGRhdGEgb3IgdXNlIGl0IGluIG90aGVyIGZ1bmN0aW9uc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgdmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcbiAgICAgICAgdmFyIGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWdlXCIpO1xuICAgICAgICB2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XG4gICAgICAgIHZhciBtb2JpbGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1vYmlsZVwiKTtcbiAgICAgICAgdmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcbiAgICAgICAgdmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XG4gICAgICAgIHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XG4gICAgICAgIGlmIChkZW1vID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlSlNPTmRhdGEoKTtcbiAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gXCIxXCI7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICAvLyBpZiAocHJlbWl1bSAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByZW1pdW1MZXZlbCA9IHBhcnNlSW50KHByZW1pdW0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChsZXZlbCAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBsZXZlbDtcbiAgICAgICAgLy8gICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSBwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpO1xuICAgICAgICAvLyAgICAgaWYgKHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSkgPj0gNykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IFwiN1wiO1xuICAgICAgICAvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSA3O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKG1vYmlsZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgdGhpcy5oYXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNNb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWNjZXNzID09IFwiMVwiKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xuICAgICAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcblxuICAgICAgICBpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xuICAgICAgICAgICAgaWYgKGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiM1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFsbGlvblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImphaXB1cmlhXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmpvY2tleU5hbWUgIT0gXCJiYWdcIiAmJiB0aGlzLmpvY2tleU5hbWUgIT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xuICAgICAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImdpcmxcIiAmJiB0aGlzLmpvY2tleU5hbWUgIT0gXCJib3lcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcbiAgICAgICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgLy8gdGhpcy5PblRpbWVyKCk7XG5cbiAgICB9XG5cbiAgICBPbk11c2ljKGV2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IHRydWU7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tdHJ1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLWZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT25QbGF5QnRuKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlCdG5fYXVkaW8sIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcbiAgICAgICAgX2V2ZW50LnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX2V2ZW50LnRhcmdldC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkaW5nXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgT25CYWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xuICAgIH1cblxuICAgIC8vIE9uVGltZXIoKSB7XG4gICAgLy8gICAgIGxldCBkZWxheSA9IDE7XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImdhbWVFbmRcIikge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSwgZGVsYXkpO1xuICAgIC8vICAgICAgICAgZGVsYXkgKz0gMTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIC8vIGJsb2JUb0RhdGFVUkwoYmxvYlVybCwgY2FsbGJhY2spIHtcbiAgICAvLyAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8vICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy8gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xuICAgIC8vICAgICAgICAgfTtcbiAgICAvLyAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIHhoci5vcGVuKCdHRVQnLCBibG9iVXJsKTtcbiAgICAvLyAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAvLyAgICAgeGhyLnNlbmQoKTtcbiAgICAvLyB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
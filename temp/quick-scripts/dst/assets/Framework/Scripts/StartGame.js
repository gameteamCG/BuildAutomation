
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
var TVInputManager_1 = require("../../Games/WhatWillHappenNext/Scripts/TVInputManager");
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
        _this.totalLevels = 9;
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
        var backBtn = this.node.getChildByName("back");
        var musicBtn = this.node.getChildByName("music");
        var nodes = [backBtn, musicBtn];
        this.scheduleOnce(function () {
            TVInputManager_1.default.Instance.init(nodes);
        }, 0.5);
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
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active =
                    true;
            }
            else if (_this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active =
                    true;
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
            if (_this.jockeyName != "bag" && _this.jockeyName != "cryon") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBQ3JGLHdGQUFtRjtBQWdDN0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUErZUM7UUE3ZUMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHL0IsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRXhDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG9DQUFvQztRQUVwQyxZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLGlCQUFX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QVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBUXZCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNZO0lBekNoQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK2U3QjtJQUFELGdCQUFDO0NBL2VELEFBK2VDLENBL2VzQyxFQUFFLENBQUMsU0FBUyxHQStlbEQ7a0JBL2VvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vLi4vR2FtZXMvV2hhdFdpbGxIYXBwZW5OZXh0L1NjcmlwdHMvZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBUVklucHV0TWFuYWdlciBmcm9tIFwiLi4vLi4vR2FtZXMvV2hhdFdpbGxIYXBwZW5OZXh0L1NjcmlwdHMvVFZJbnB1dE1hbmFnZXJcIjtcclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuICBHYW1lSUQ6IHN0cmluZztcclxuICB0b3RhbExldmVsOiBzdHJpbmc7XHJcbiAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICBpbnRyb0JnTmFtZTogc3RyaW5nO1xyXG4gIGJnbU11c2ljTmFtZTogc3RyaW5nO1xyXG4gIG1haW5CZ05hbWU6IHN0cmluZztcclxuICBKb2NrZXlOYW1lOiBzdHJpbmc7XHJcbiAgb3B0aW9uTGF5b3V0OiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVUeXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG4gIHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xyXG4gIHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgcXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcclxuICBzaG91bGRQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcclxuICBjb21tb25PcHRpb25JbWFnZU5hbWU6IHN0cmluZztcclxuICBpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcbiAgaXNPcHRpb25CRzogYm9vbGVhbjtcclxuICBudW1iZXJPZk9wdGlvbnM6IG51bWJlcjtcclxuICBvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG4gIGNvcnJlY3RBdWRpb3M6IHN0cmluZ1tdO1xyXG4gIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIHZvbHVtZTogbnVtYmVyID0gMC4xO1xyXG4gIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgTmV4dFNjZW5lTmFtZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG4gIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgTGV2ZWxBZ2VQYXJhbWV0ZXJzOiBudW1iZXJbXSA9IFszLCA1LCA3XTtcclxuICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG4gIGN1cnJlbnRMZXZlbDogc3RyaW5nID0gXCIxXCI7XHJcbiAgaGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gIGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgaXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgcHJlbWl1bUxldmVsOiBudW1iZXIgPSAzO1xyXG4gIC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgam9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgSm9ja2V5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgY2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA5O1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgLy8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG4gIC8vIHByaXZhdGUgdG90YWxMZXZlbHM6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHRlbXBsYXRlVHlwZTogc3RyaW5nID0gXCJcIjtcclxuICBvcHRpb25MYXlvdXQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgIHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IGJhY2tCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG5dO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgIH0sIDAuNSk7XHJcbiAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gXCJqb2NrZXlcIikge1xyXG4gICAgICAgIHRoaXMuSm9ja2V5Tm9kZSA9IGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY29uc3Qgc3RvcmVkSlNPTkRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVEYXRhJyk7XHJcblxyXG4gICAgLy8gaWYgKHN0b3JlZEpTT05EYXRhKSB7XHJcbiAgICAvLyAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKHN0b3JlZEpTT05EYXRhKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGxvZ0RhdGEoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdhbWUgSUQ6XCIsIHRoaXMuZ2FtZUlEKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVG90YWwgTGV2ZWxzOlwiLCB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQkdNIGF1ZGlvIG5hbWU6XCIsIHRoaXMuQkdNX2F1ZGlvLm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJUaXRsZSBJbWFnZSBOYW1lOlwiLCB0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSm9ja2V5IE5hbWU6XCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgLy8gTG9nIHF1ZXN0aW9uIGRhdGFcclxuICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb24gJHtpbmRleCArIDF9OmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbiBBdWRpbyBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiT3B0aW9uIDEgSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiT3B0aW9uIDIgSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ycmVjdCBBbnN3ZXIgTnVtYmVyOlwiLCBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyTnVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgXCJcIik7XHJcbiAgfVxyXG4gIHJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGF1ZGlvTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csIFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSlNPTmRhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICAvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcbiAgICAgIGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldChcImpzb25cIik7XHJcblxyXG4gICAgICAvLyBEZWNvZGUgdGhlIFVSTC1lbmNvZGVkIEpTT04gZGF0YVxyXG4gICAgICBjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XHJcblxyXG4gICAgICAvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0XHJcbiAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XHJcbiAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcbiAgICAgIHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG4gICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgIHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG4gICAgICB0aGlzLm9wdGlvbkxheW91dCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm9wdGlvbkxheW91dDtcclxuICAgICAgdGhpcy50ZW1wbGF0ZVR5cGUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50ZW1wbGF0ZVR5cGU7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uTGF5b3V0IEBAQEBAQEBAQEBAQEBAQEAgPSBcIiwgdGhpcy5vcHRpb25MYXlvdXQpO1xyXG5cclxuICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcbiAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJCR00gbXVzaWMgbmFtZSA9IFwiLCBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpO1xyXG5cclxuICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMudGVtcGxhdGVUeXBlICE9IFwiU2ltcGxlVGFwXCIpIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUgPSBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZTtcclxuICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lXHJcbiAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcbiAgICAgIC8vIHRoaXMubG9nRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJnYW1lX2RhdGFcIiwgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uQXNzZXQpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QganNvbkRhdGE6IE15SlNPTkRhdGEgPSBqc29uQXNzZXQuanNvbiBhcyBNeUpTT05EYXRhO1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgIHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG4gICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudG90YWxMZXZlbDtcclxuICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25MYXlvdXQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5vcHRpb25MYXlvdXQ7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVR5cGUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50ZW1wbGF0ZVR5cGU7XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG4gICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbih0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjY1xyXG4gICAgICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUpLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGNjXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSksXHJcbiAgICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUpLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcbiAgICAgICAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihcclxuICAgICAgICAgICAgcXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgIC8vIHRoaXMubG9nRGF0YSgpOyAvLyBZb3UgY2FuIGNhbGwgYSBmdW5jdGlvbiB0byBsb2cgdGhlIGRhdGEgb3IgdXNlIGl0IGluIG90aGVyIGZ1bmN0aW9uc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgdmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcclxuICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgIHZhciBhY2Nlc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFjY2Vzc1wiKTtcclxuICAgIHZhciBtb2JpbGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1vYmlsZVwiKTtcclxuICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICB2YXIgcHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicHJlbWl1bVwiKTtcclxuICAgIHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XHJcbiAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG4gICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlSlNPTmRhdGEoKTtcclxuICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IFwiMVwiO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAvLyBpZiAocHJlbWl1bSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChsZXZlbCAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcbiAgICAvLyAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyAgICAgaWYgKHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSkgPj0gNykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBcIjdcIjtcclxuICAgIC8vICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChtb2JpbGUgPT0gXCIxXCIpIHtcclxuICAgICAgdGhpcy5oYXNNb2JpbGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNNb2JpbGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhY2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNBY2Nlc3MgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNQcmVtaXVtR2FtZSkge1xyXG4gICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQWdlUGFyYW1ldGVyTmVlZGVkKSB7XHJcbiAgICAgIGlmIChhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0gJiZcclxuICAgICAgICAgIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdICYmXHJcbiAgICAgICAgICAgIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjNcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXSAmJlxyXG4gICAgICAgICAgICAgIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10gJiZcclxuICAgICAgICAgICAgICAgIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzRdXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNVwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInBvZGFyXCIpLmFjdGl2ZSA9XHJcbiAgICAgICAgICB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9XHJcbiAgICAgICAgICB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJzdXBlcmN1YlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFsbGlvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5qb2NrZXlOYW1lICE9IFwiYmFnXCIgJiYgdGhpcy5qb2NrZXlOYW1lICE9IFwiY3J5b25cIikge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICAgIH1cclxuICAgIH0sIDEpO1xyXG5cclxuICAgIC8vIHRoaXMuT25UaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tdHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLWZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgT25QbGF5QnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheUJ0bl9hdWRpbywgZmFsc2UpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgIF9ldmVudC50YXJnZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBfZXZlbnQudGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxvYWRpbmdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIE9uQmFjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgfVxyXG5cclxuICAvLyBPblRpbWVyKCkge1xyXG4gIC8vICAgICBsZXQgZGVsYXkgPSAxO1xyXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk5OTk7IGkrKykge1xyXG4gIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJnYW1lRW5kXCIpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH0sIGRlbGF5KTtcclxuICAvLyAgICAgICAgIGRlbGF5ICs9IDE7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gfVxyXG5cclxuICBsb2FkU3ByaXRlRnJhbWUoXHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG4gICAgICBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuICBsb2FkQXVkaW9DbGlwKFxyXG4gICAgYXVkaW9OYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQsXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcbiAgICAgIGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gYmxvYlRvRGF0YVVSTChibG9iVXJsLCBjYWxsYmFjaykge1xyXG4gIC8vICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgLy8gICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAvLyAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XHJcbiAgLy8gICAgICAgICB9O1xyXG4gIC8vICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgeGhyLm9wZW4oJ0dFVCcsIGJsb2JVcmwpO1xyXG4gIC8vICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gIC8vICAgICB4aHIuc2VuZCgpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
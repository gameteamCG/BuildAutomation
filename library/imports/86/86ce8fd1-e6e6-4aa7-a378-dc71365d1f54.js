"use strict";
cc._RF.push(module, '86ce8/R5uZKp6N43HE2XR9U', 'StartGame0');
// Games/Scripts/StartGame0.ts

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
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentScore = 0;
        _this.currentHealth = 10;
        _this.isLoaded = false;
        return _this;
        //update (dt) {}
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
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
        });
        cc.game.addPersistRootNode(this.node);
        //cc.game.removePersistRootNode(this.node);
        startGame_1.instance = this;
        //console.log("loading--100");
        //console.log("loaderComplete--true");
    };
    startGame.prototype.start = function () {
        console.log("logEvent--showedScreen--Title");
        //this.node.getComponent(cc.AudioSource).play();
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var level = url.searchParams.get("level");
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, 0.1);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id_1, 0.1);
        }
        var ageValue = parseInt(age);
        if (ageValue >= 6) {
            this.levelType = "4";
        }
        else if (ageValue == 5) {
            this.levelType = "3";
        }
        else if (ageValue == 4) {
            this.levelType = "2";
        }
        else {
            this.levelType = "1";
        }
        // this.node.getComponent(cc.AudioSource).clip = this.Intro_audio;
        // // this.node.getComponent(cc.AudioSource).play();
        // cc.audioEngine.playEffect(this.Intro_audio, false);
        // cc.audioEngine.
        //cc.director.loadScene("Intro2");
        if (parseInt(level)) {
            globalVariables_1.default.Instance.currentLevel = parseInt(level);
        }
        else {
            globalVariables_1.default.Instance.currentLevel = 1;
        }
        cc.director.preloadScene(globalVariables_1.default.Instance.currentLevel.toString());
        //cc.director.loadScene("endScreen");
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            var id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, 0.1);
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
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
    startGame = startGame_1 = __decorate([
        ccclass
    ], startGame);
    return startGame;
}(cc.Component));
exports.default = startGame;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1e168rfJYxHOoAcjwhWWx5T', 'audioManager');
// Game/Painting_template/Script/Common/audioManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var audioManager = /** @class */ (function () {
    function audioManager() {
        this.soundVolume = 1;
    }
    audioManager_1 = audioManager;
    Object.defineProperty(audioManager, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new audioManager_1();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // init AudioManager in GameRoot.
    audioManager.prototype.init = function () {
        var _this = this;
        this.checkSound();
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.disableSound();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            _this.checkSound();
        });
    };
    audioManager.prototype.playMusic = function (loop) {
        if (!cc.audioEngine.isMusicPlaying()) {
            var path = 'audio/music/';
            cc.resources.load(path + Constant_1.Constant.AUDIO_SOUND.BACKGROUND, cc.AudioClip, function (err, clip) {
                cc.audioEngine.playMusic(clip, true);
            });
            this.openMusic();
        }
    };
    /**
     * 播放音效
     * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
     */
    audioManager.prototype.playSound = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });
    };
    audioManager.prototype.playLoopSound = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, true);
        });
    };
    audioManager.prototype.stopLoopSound = function () {
        cc.audioEngine.stopAllEffects();
    };
    audioManager.prototype.loadAuido = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            //
        });
    };
    audioManager.prototype.getAudioLength = function (name, callbacks) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            callbacks(clip.duration);
        });
    };
    audioManager.prototype.setMusicVolume = function (flag) {
        cc.audioEngine.setMusicVolume(flag);
    };
    audioManager.prototype.setSoundVolume = function (flag) {
        cc.audioEngine.setEffectsVolume(flag);
    };
    audioManager.prototype.openMusic = function () {
        this.setMusicVolume(0.1);
    };
    audioManager.prototype.closeMusic = function () {
        this.setMusicVolume(0);
    };
    audioManager.prototype.openSound = function () {
        this.setSoundVolume(1);
    };
    audioManager.prototype.closeSound = function () {
        this.setSoundVolume(0);
    };
    audioManager.prototype.checkSound = function () {
        if (Constant_1.Constant.CheckSoundEnabled())
            this.enableSound();
        else
            this.disableSound();
    };
    audioManager.prototype.toggleGameSound = function () {
        if (Constant_1.Constant.ToggleSound())
            this.enableSound();
        else
            this.disableSound();
        return Constant_1.Constant.CheckSoundEnabled();
    };
    audioManager.prototype.enableSound = function () {
        this.openMusic();
        this.openSound();
    };
    audioManager.prototype.disableSound = function () {
        this.closeMusic();
        //this.closeSound();
    };
    var audioManager_1;
    audioManager = audioManager_1 = __decorate([
        ccclass
    ], audioManager);
    return audioManager;
}());
exports.default = audioManager;

cc._RF.pop();
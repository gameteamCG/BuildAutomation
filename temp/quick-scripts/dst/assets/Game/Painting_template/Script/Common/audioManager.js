
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/audioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxhdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRix1Q0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtRQWFJLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBK0c1QixDQUFDO3FCQTVIb0IsWUFBWTtJQUk3QixzQkFBVyx3QkFBUTthQUFuQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQVksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlELGlDQUFpQztJQUNqQywyQkFBSSxHQUFKO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFhO1FBQ25CLElBQUksQ0FB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aUJBQWlCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUVuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLG1CQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhCLE9BQU8sbUJBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsbUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixvQkFBb0I7SUFDeEIsQ0FBQzs7SUEzSGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0SGhDO0lBQUQsbUJBQUM7Q0E1SEQsQUE0SEMsSUFBQTtrQkE1SG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1ZGlvTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBhdWRpb01hbmFnZXI7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgYXVkaW9NYW5hZ2VyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdW5kVm9sdW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIGluaXQgQXVkaW9NYW5hZ2VyIGluIEdhbWVSb290LlxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrU291bmQoKTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1NvdW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsYXlNdXNpYyhsb29wOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gJ2F1ZGlvL211c2ljLyc7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBDb25zdGFudC5BVURJT19TT1VORC5CQUNLR1JPVU5ELCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDpn7PmlYjlkI3np7Dlj6/pgJrov4djb25zdGFudHMuQVVESU9fU09VTkQg6I635Y+WXHJcbiAgICAgKi9cclxuICAgIHBsYXlTb3VuZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUxvb3BTb3VuZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0b3BMb29wU291bmQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgbG9hZEF1aWRvKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnYXVkaW8vc291bmQvJztcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEF1ZGlvTGVuZ3RoKG5hbWU6IHN0cmluZywgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnYXVkaW8vc291bmQvJztcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcyhjbGlwLmR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0TXVzaWNWb2x1bWUoZmxhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoZmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U291bmRWb2x1bWUoZmxhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShmbGFnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSgwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3VuZFZvbHVtZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U291bmRWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTb3VuZCgpIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnQuQ2hlY2tTb3VuZEVuYWJsZWQoKSlcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVTb3VuZCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVHYW1lU291bmQoKSB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50LlRvZ2dsZVNvdW5kKCkpXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU291bmQoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVNvdW5kKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBDb25zdGFudC5DaGVja1NvdW5kRW5hYmxlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMub3Blbk11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuU291bmQoKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVTb3VuZCgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTXVzaWMoKTtcclxuICAgICAgICAvL3RoaXMuY2xvc2VTb3VuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
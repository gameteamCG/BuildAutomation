
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9Db21tb24vYXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7QUFFbEYsdUNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFhSSxnQkFBVyxHQUFXLENBQUMsQ0FBQztJQStHNUIsQ0FBQztxQkE1SG9CLFlBQVk7SUFJN0Isc0JBQVcsd0JBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QjtZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFZLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFJRCxpQ0FBaUM7SUFDakMsMkJBQUksR0FBSjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsSUFBYTtRQUNuQixJQUFJLENBQUMsRUFB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QixFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksSUFBSSxtQkFBUSxDQUFDLFdBQVcsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBRW5CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixPQUFPLG1CQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsb0JBQW9CO0lBQ3hCLENBQUM7O0lBM0hnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEhoQztJQUFELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7a0JBNUhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdWRpb01hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBhdWRpb01hbmFnZXI7XG5cbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGF1ZGlvTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICAvLyBpbml0IEF1ZGlvTWFuYWdlciBpbiBHYW1lUm9vdC5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNoZWNrU291bmQoKTtcblxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTb3VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGxheU11c2ljKGxvb3A6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9tdXNpYy8nO1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCArIENvbnN0YW50LkFVRElPX1NPVU5ELkJBQ0tHUk9VTkQsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCA6IGNjLkF1ZGlvQ2xpcCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5vcGVuTXVzaWMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumfs+aViFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIOmfs+aViOWQjeensOWPr+mAmui/h2NvbnN0YW50cy5BVURJT19TT1VORCDojrflj5ZcbiAgICAgKi9cbiAgICBwbGF5U291bmQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwYXRoID0gJ2F1ZGlvL3NvdW5kLyc7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwbGF5TG9vcFNvdW5kKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcExvb3BTb3VuZCgpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgIH1cbiAgICBcblxuICAgIGxvYWRBdWlkbyhuYW1lOiBzdHJpbmcpe1xuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldEF1ZGlvTGVuZ3RoKG5hbWU6IHN0cmluZywgY2FsbGJhY2tzKSB7XG4gICAgICAgIGxldCBwYXRoID0gJ2F1ZGlvL3NvdW5kLyc7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcyhjbGlwLmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzZXRNdXNpY1ZvbHVtZShmbGFnOiBudW1iZXIpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoZmxhZyk7XG4gICAgfVxuXG4gICAgc2V0U291bmRWb2x1bWUoZmxhZzogbnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoZmxhZyk7XG4gICAgfVxuXG4gICAgb3Blbk11c2ljKCkge1xuICAgICAgICB0aGlzLnNldE11c2ljVm9sdW1lKDAuMSk7XG4gICAgfVxuXG4gICAgY2xvc2VNdXNpYygpIHtcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSgwKTtcbiAgICB9XG5cbiAgICBvcGVuU291bmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U291bmRWb2x1bWUoMSk7XG4gICAgfVxuXG4gICAgY2xvc2VTb3VuZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTb3VuZFZvbHVtZSgwKTtcbiAgICB9XG5cbiAgICBjaGVja1NvdW5kKCkge1xuICAgICAgICBpZiAoQ29uc3RhbnQuQ2hlY2tTb3VuZEVuYWJsZWQoKSlcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU291bmQoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVHYW1lU291bmQoKSB7XG4gICAgICAgIGlmIChDb25zdGFudC5Ub2dnbGVTb3VuZCgpKVxuICAgICAgICAgICAgdGhpcy5lbmFibGVTb3VuZCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVTb3VuZCgpO1xuXG4gICAgICAgIHJldHVybiBDb25zdGFudC5DaGVja1NvdW5kRW5hYmxlZCgpO1xuICAgIH1cblxuICAgIGVuYWJsZVNvdW5kKCkge1xuICAgICAgICB0aGlzLm9wZW5NdXNpYygpO1xuICAgICAgICB0aGlzLm9wZW5Tb3VuZCgpO1xuICAgIH1cbiAgICBkaXNhYmxlU291bmQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNdXNpYygpO1xuICAgICAgICAvL3RoaXMuY2xvc2VTb3VuZCgpO1xuICAgIH1cbn1cbiJdfQ==
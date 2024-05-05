// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constant } from "./Constant";

const {ccclass, property} = cc._decorator;

@ccclass
export default class audioManager {

    private static _instance: audioManager;

    static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new audioManager();
        return this._instance;
    }

    soundVolume: number = 1;

    // init AudioManager in GameRoot.
    init() {
        this.checkSound();

        cc.game.on(cc.game.EVENT_HIDE, () => {
            this.disableSound();
        });

        cc.game.on(cc.game.EVENT_SHOW, () => {
            this.checkSound();
        });
    }
    
    playMusic(loop: boolean) {
        if (!cc.audioEngine.isMusicPlaying()) {
            let path = 'audio/music/';
            cc.resources.load(path + Constant.AUDIO_SOUND.BACKGROUND, cc.AudioClip, function (err, clip : cc.AudioClip) {
                cc.audioEngine.playMusic(clip, true);
            });
            this.openMusic();
        }
    }

    /**
     * 播放音效
     * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
     */
    playSound(name: string) {
        let path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip : cc.AudioClip) {
            cc.audioEngine.playEffect(clip, false);
        });
    }

    playLoopSound(name: string) {
        let path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip : cc.AudioClip) {
            cc.audioEngine.playEffect(clip, true);
        });
    }
    stopLoopSound(){
        cc.audioEngine.stopAllEffects();
    }
    

    loadAuido(name: string){
        let path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip : cc.AudioClip) {
            //
        });
    }


    getAudioLength(name: string, callbacks) {
        let path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip : cc.AudioClip) {
            callbacks(clip.duration);
        });
    }


    setMusicVolume(flag: number) {
        cc.audioEngine.setMusicVolume(flag);
    }

    setSoundVolume(flag: number) {
        cc.audioEngine.setEffectsVolume(flag);
    }

    openMusic() {
        this.setMusicVolume(0.1);
    }

    closeMusic() {
        this.setMusicVolume(0);
    }

    openSound() {
        this.setSoundVolume(1);
    }

    closeSound() {
        this.setSoundVolume(0);
    }

    checkSound() {
        if (Constant.CheckSoundEnabled())
            this.enableSound();
        else
            this.disableSound();
    }

    toggleGameSound() {
        if (Constant.ToggleSound())
            this.enableSound();
        else
            this.disableSound();

        return Constant.CheckSoundEnabled();
    }

    enableSound() {
        this.openMusic();
        this.openSound();
    }
    disableSound() {
        this.closeMusic();
        //this.closeSound();
    }
}

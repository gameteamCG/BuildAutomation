const { ccclass, property } = cc._decorator;

@ccclass
export default class Functionalities extends cc.Component {

    private isAudioTimeOut: boolean = false;

    StartAudioTimeOut(_audio: cc.AudioClip = null, _time: number = 5) {
        this.isAudioTimeOut = true;
        cc.audioEngine.playEffect(_audio, false);
        this.scheduleOnce(() => {
            this.RepeatAudio(_audio, _time);
        }, _time);
    }
    private RepeatAudio(_audio: cc.AudioClip, _time: number = 5) {
        if (this.isAudioTimeOut) {
            cc.audioEngine.playEffect(_audio, false);
            this.scheduleOnce(() => {
                if (this.isAudioTimeOut) {
                    this.RepeatAudio(_audio, _time);
                    cc.audioEngine.playEffect(_audio, false);
                }
            }, _time);
        }
    }


    StopAudioTimeOut() {
        this.isAudioTimeOut = false;
    }

    update(dt) {
    }
}

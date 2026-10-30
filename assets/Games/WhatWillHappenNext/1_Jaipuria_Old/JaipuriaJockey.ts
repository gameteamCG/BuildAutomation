const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    loading: cc.Node = null;
    @property(cc.AudioClip)
    play_audio: cc.AudioClip = null;

    OnStartGame(_event: cc.Event) {
        cc.audioEngine.playEffect(this.play_audio, false);
        this.loading.active = true;
        _event.target.active = false;
        _event.target.getComponent(cc.Button).interactable = false;
        cc.director.loadScene(this.NextSceneName);
    }

    // EndButton() {
    //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
    //     console.log("gameEnded--" + true);
    //     closeWindow();
    // }

    const closeWindow = () => {
        window.open(location.href, "_self", "");
        window.close()
    }


}

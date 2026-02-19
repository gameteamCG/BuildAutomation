// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GamePlay from "../../../../Game/Painting_template/Script/GamePlay/GamePlay";

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
        this.scheduleOnce(() => {
            this.node.active = false;
            this.node.getParent().getChildByName("base").opacity = 255;
            GamePlay.Instance.StartGame();
        }, 1.5)
    }
}

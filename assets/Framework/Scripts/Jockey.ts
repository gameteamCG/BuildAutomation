// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Jockey extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    private static instance: Jockey = null;
    static get Instance() {
        return Jockey.instance
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.game.addPersistRootNode(this.node);
        Jockey.instance = this;
    }

    start() {

    }

    CallJockey(_animName: string, _loop: boolean = false, _isMultipleAnim: boolean = false, _secondAnimName: string = null, _isSecondLoop: boolean = false, _waitTime = 0) {
        this.node.getComponent(sp.Skeleton).setAnimation(0, _animName, _loop);
        if (_isMultipleAnim) {
            this.node.getComponent(sp.Skeleton).addAnimation(0, _secondAnimName, _isSecondLoop, 8);
        }
    }
    // update (dt) {}
}

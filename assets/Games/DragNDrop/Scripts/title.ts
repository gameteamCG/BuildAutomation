import startGame from "../../../Framework/Scripts/StartGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    }

    start() {
        // cc.tween(this.node.getChildByName("title")).to(1, { scale: 1 }, { easing: "backOut" }).start();
    }

    // update (dt) {}
}

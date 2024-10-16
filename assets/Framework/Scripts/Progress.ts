// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Progress extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(Boolean)
    isVertical: boolean = false;
    @property(Number)
    totalQuestions: number = 5;
    @property(cc.ProgressBar)
    private progressFill: cc.ProgressBar = null;
    private static instance: Progress = null;


    static get Instance() {
        return Progress.instance;
    }

    onLoad() {
        Progress.instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    IncreaseProgress(_questionNumber: number, _easingType: string = "linear") {
        let value = _questionNumber / this.totalQuestions;
        cc.tween(this.progressFill).to(0.15, { progress: value }, { easing: _easingType }).start();

        if (_questionNumber == 1) {
            this.node.getComponent(cc.Animation).play("1");
        }
        else if ((this.totalQuestions % 2 == 0 && _questionNumber == this.totalQuestions / 2) || (this.totalQuestions % 2 != 0 && _questionNumber == (this.totalQuestions / 2) + 0.5)) {
            this.node.getComponent(cc.Animation).play("2");
        }
        else if (this.totalQuestions == _questionNumber) {
            this.node.getComponent(cc.Animation).play("3");
        }
    }

    start() {
    }

    // update (dt) {}
}

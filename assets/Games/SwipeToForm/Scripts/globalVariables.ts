// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class globalVariables extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    public animationEntry: string = "";
    public animationStayEffect: string = "";
    public animationExit: string = "";
    public currentLevel: number = 1;

    public totalQuestions: number = 3;
    public currentQuestion: number = 1;

    public increasetransition: number = 0;

    public fillRange: number = 1;
    public canvasTopY: number = 0;
    public canvasLeftX: number = 0;
    public canvasRightX: number = 0;
    public canvasBottomY: number = 0;

    private static instance: globalVariables = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        globalVariables.instance = this;
    }

    static get Instance() {
        return globalVariables.instance
    }

    start() {

    }


    update(dt) {

    }


}

const { ccclass, property } = cc._decorator;

@ccclass
export default class globalVariables extends cc.Component {



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
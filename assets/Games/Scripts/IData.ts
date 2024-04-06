// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class IData  {
    totalOptions : number = 0;
    SubImage: number = 0;
    wrongAnswersLimit : number = 0;
    question : string = "";
    questionSound : string = "";
    answerObject : string="";
    positionType : string = "";
    feedbacktype : string[]=[];
    scaleArray : number[]=[];
    answers : number[]=[];
    
    positions : cc.Vec2[]=[];
    answerpositions : cc.Vec2[]=[];
    optionAnimationImages:string[]=[];
    textArray : string[]=[];
}

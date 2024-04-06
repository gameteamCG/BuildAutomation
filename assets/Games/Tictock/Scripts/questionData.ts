const { ccclass, property } = cc._decorator;

@ccclass
class questionData {

    @property(Number)
    questionTime: number = 0;
    @property(Boolean)
    isoptionText: boolean = false;
    @property(Boolean)
    isquestionText: boolean = false;
    @property(cc.SpriteFrame)
    questionImg: cc.SpriteFrame = null;
    @property(String)
    questionText: string = "";
    @property(cc.SpriteFrame)
    optionImgs: cc.SpriteFrame[] = [];
    @property(String)
    optionTexts: string[] = [];
    @property(Number)
    correctAnswer: number = 1;
}

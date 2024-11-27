// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.preloadScene("1");
        cc.director.preloadScene("2");
        cc.director.preloadScene("3");
        cc.director.preloadScene("4");
        cc.director.preloadScene("5");
        cc.director.preloadScene("6");
        cc.director.preloadScene("7");
    }

    start () {
        // this.node.getChildByName("title").getComponent(cc.Animation).play();
    }

    // update (dt) {}
}

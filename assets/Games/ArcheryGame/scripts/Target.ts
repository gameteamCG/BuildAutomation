// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Target extends cc.Component {
  public value: number = 0;

  @property(cc.Label)
  public targetLabel: cc.Label = null;

  public defColor = new cc.Color(96, 45, 11);

  public setValue(val: number) {
    // this.value = val;
    // console.log("target node :", this.node.name)
    // this.targetLabel.string = this.value.toFixed();
    // this.targetLabel.node.color = this.defColor;
  }

  public setColor(color: cc.Color) {
    this.targetLabel.node.color = color;
  }

  public setDefColor() {
    this.targetLabel.node.color = this.defColor;
  }

  onLoad() {
    this.value = parseInt(this.node.name);
  }
}

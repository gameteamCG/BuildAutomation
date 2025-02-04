import startGame from "../../../Framework/Scripts/StartGame";
import GameManager from "./GameManager";
import Graphics from "./graphics";

const { ccclass, property } = cc._decorator;

@ccclass
export default class roughArea extends cc.Component {
  @property(cc.AudioClip)
  tapSound: cc.AudioClip = null;

  @property(cc.Prefab)
  graphicsPrefab: cc.Prefab = null;

  currentColor: cc.Color = cc.Color.BLACK;
  private static instance: roughArea = null;

  onLoad() {
    cc.game.addPersistRootNode(this.node);
    roughArea.instance = this;
  }

  static get Instance() {
    return roughArea.instance;
  }

  closeRoughArea() {
    this.node.getChildByName("GraphicParent").children.forEach((Element) => {
      Element.getComponent(cc.Graphics).clear();
    });
    this.node.active = false;
    GameManager.roughSheetMode = false;
    let graphicsScript = this.node
      .getChildByName("GraphicParent")
      .getChildByName("Graphics")
      .getComponent(Graphics);
    // graphicsScript.clearTouchesArray();
    // startGame.Instance.node
    //   .getChildByName("BtnSlate")
    //   .getComponent(cc.Button).interactable = true;
  }

  selectTool(_event: cc.Event) {
    cc.audioEngine.playEffect(this.tapSound, false);
    if (_event.target.name == "pencil") {
      this.currentColor = cc.Color.BLACK;
    } else if (_event.target.name == "clearbrush") {
      this.node.getChildByName("GraphicParent").children.forEach((Element) => {
        Element.getComponent(cc.Graphics).clear();
      });
    } else if (_event.target.name == "eraser") {
      this.currentColor = cc.Color.WHITE;
    }
  }
}

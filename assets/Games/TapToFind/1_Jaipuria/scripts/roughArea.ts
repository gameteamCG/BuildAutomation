import gameplay from "../../../Scripts/gameplay";

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
        return roughArea.instance
    }


    closeRoughArea() {
        this.node.getChildByName("GraphicParent").children.forEach(Element => {
            Element.getComponent(cc.Graphics).clear();
        })
        this.node.active = false;
        gameplay.Instance.roughSheetMode = false;
        gameplay.Instance.node.getChildByName("Blocker").active = false;
    }


    selectTool(_event: cc.Event) {
        cc.audioEngine.playEffect(this.tapSound, false);
        if (_event.target.name == "pencil") {
            this.currentColor = cc.Color.BLACK;
        }
        else if (_event.target.name == "clearbrush") {
            this.node.getChildByName("GraphicParent").children.forEach(Element => {
                Element.getComponent(cc.Graphics).clear();
            })
        }
        else if (_event.target.name == "eraser") {
            this.currentColor = cc.Color.WHITE;
        }
    }
}


// toggleRoughSheet() {
//     if (this.roughSheetMode == true) return;
//     this.roughSheetMode = true;
//     this.node.getChildByName("roughArea").active = true;
//     this.node.getChildByName("Blocker").active = true;
//     if (globalVariables.Instance.currentLevel == 1) {
//         let hand = this.node.getChildByName("questionBar").getChildByName("HandInduction");
//         hand.getComponent(cc.Animation).stop();
//         hand.active = false;
//     }
// }
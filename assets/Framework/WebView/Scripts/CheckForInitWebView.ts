// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import startGame from "../../Scripts/StartGame";
import WebView from "./WebView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CheckForInitWebView extends cc.Component {

    start() {

    }

    OnButtonClick() {
        //if its a free level
        //.... Write your code to open the level .....


        //if its a premium level then need to call the below conditions,
        WebView.Instance.CheckForWebView();
        if (startGame.Instance.hasAccess) {
            // .... Write your code to open the level .....
            console.log("level opened");
        }
    }



    // update (dt) {}
}

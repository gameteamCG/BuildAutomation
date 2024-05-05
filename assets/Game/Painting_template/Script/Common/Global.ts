// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Drawingmask from "../GamePlay/Drawingmask";
import DrawingTable from "../GamePlay/DrawingTable";
import PersistentScroll from "../GamePlay/Persistent/PersistentScroll";
import TileSelection from "../GamePlay/TileSelection";
import audioManager from "./audioManager";
import { Constant } from "./Constant";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Global extends cc.Component {

    private static _instance: Global;

    public PersistentScrollInstance = null;

    static get instance(){
        if(this._instance){
            return this._instance;
        }

        this._instance = new Global;
        return this._instance;
    }

    start () {
    }
}

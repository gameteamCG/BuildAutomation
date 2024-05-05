// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Drawingmask from "../GamePlay/Drawingmask";
import DrawingTable from "../GamePlay/DrawingTable";
import TileSelection from "../GamePlay/TileSelection";
import audioManager from "./audioManager";
import { Constant } from "./Constant";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonFun extends cc.Component {

    private static _instance: CommonFun;

    public currentLvl = 0;
    public isSymetryEnabled = false;

    static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new CommonFun;
        return this._instance;
    }

    start() {
        this.currentLvl = 0;
    }

    convertToCenterXPos(x) {
        var val = x + cc.winSize.width / 2;
        return val;
    }

    convertToCenterYPos(y) {
        var val = y + cc.winSize.height / 2;
        return val;
    }

    convertXPos(x, node) {
        var val = x - node.width / 2;
        return val;
    }

    convertYPos(y, node) {
        var val = y - node.height / 2;
        return val;
    }

    convertXPosWithNode(x, node) {
        var val = x - node.width / 2;
        return val;
    }

    convertYPosWithNode(y, node) {
        var val = y - node.height / 2;
        return val;
    }


    showScaleAnimation(node, scale, time) {
        cc.tween(node)
            .to(time, {
                scale: scale
            })
            .start()
    }


    angle(originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;

        var theta = Math.atan2(-dy, -dx); // [0, Ⲡ] then [-Ⲡ, 0]; clockwise; 0° = east
        theta *= 180 / Math.PI;           // [0, 180] then [-180, 0]; clockwise; 0° = east
        if (theta < 0) theta += 360;      // [0, 360]; clockwise; 0° = east

        return theta;
    }


    removeArrayValue(array, val) {
        const index = array.indexOf(val);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getDistance(xA, yA, xB, yB) {
        var xDiff = xA - xB;
        var yDiff = yA - yB;

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateRect(p1) {

        let val = 20;

        let left = p1.x - val;
        let right = p1.x + val;
        let top = p1.y + val;
        let bottom = p1.y - val;
        let width = right - left;
        let height = top - bottom;
        return cc.rect(left, p1.y, width, height);
    }

    checkInPolygon(p1, p3) {
        let rect = this.generateRect(p1);
        let inside = rect.contains(p3);
        return inside;
    }

    splitNumIntoXRandomComponents(num, x, min_num) {

        var components = [];
        var count = 1;
        var cumulative = 0;
        var balance = num;

        for (var i = 0; i < x - 1; i++) {
            //max num for this spot
            var max_num = balance - ((x - count) * min_num);

            //to avoid big numbers in the beginning and min numbers at the end
            if (Math.random() > 0.3) { //0.5 can be tuned to your liking
                max_num = Math.floor(max_num / 2) + min_num;
            }

            //generate the number for the spot at 'count'
            var c = Math.floor(Math.random() * (max_num - min_num + 1) + min_num);

            //adjust balances
            cumulative += c;
            balance -= c;
            count++;

            //store this number
            components.push(c);
        }

        //push remaining balance into the last spot
        components.push(balance);

        //print numbers
        return components;
    }

    pointOnLine(pt1, pt2, pt3) {
        const result = {
            on_projected_line: true,
            on_line: false,
            between_both: false,
            between_x: false,
            between_y: false,
        };

        // Determine if on line interior or exterior
        const x = (pt3.x - pt1.x) / (pt2.x - pt1.x);
        const y = (pt3.y - pt1.y) / (pt2.y - pt1.y);

        // Check if on line equation
        result.on_projected_line = x === y;

        // Check within x bounds
        if (
            (pt1.x <= pt3.x && pt3.x <= pt2.x) ||
            (pt2.x <= pt3.x && pt3.x <= pt1.x)
        ) {
            result.between_x = true;
        }

        // Check within y bounds
        if (
            (pt1.y <= pt3.y && pt3.y <= pt2.y) ||
            (pt2.y <= pt3.y && pt3.y <= pt1.y)
        ) {
            result.between_y = true;
        }

        result.between_both = result.between_x && result.between_y;
        result.on_line = result.on_projected_line && result.between_both;
        return result;
    }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new cc.Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255) : new cc.Color(0, 0, 0, 255);
    }

    getTileSelectionClassRef(node) {
        if ((node.getComponent(TileSelection) as TileSelection) != null)
            return (node.getComponent(TileSelection) as TileSelection);
        return null;
    }

    getDrawingmaskClassRef(node) {
        if ((node.getComponent(Drawingmask) as Drawingmask) != null)
            return (node.getComponent(Drawingmask) as Drawingmask);
        return null;
    }

    getDrawingTableClassRef(node) {
        if ((node.getComponent(DrawingTable) as DrawingTable) != null)
            return (node.getComponent(DrawingTable) as DrawingTable);
        return null;
    }

    loadAllAudios() {
        for (let i = 0; i < Object.keys(Constant.AUDIO_SOUND.correct).length; i++) {
            audioManager.instance.loadAuido(Constant.AUDIO_SOUND.correct[Object.keys(Constant.AUDIO_SOUND.correct)[i]]);
        }
    }

    circleCoordinates(radius, steps, centerX, centerY) {
        let pos = [];
        for (let i = 0; i < steps; i++) {
            pos.push(new cc.Vec2(centerX + radius * Math.cos(2 * Math.PI * (i / steps)),
                centerY + radius * Math.sin(2 * Math.PI * (i / steps))));
        }
        return pos;
    }

    getAlphabet(num) {
        return (num + 10).toString(36);
    }

    ifFirstTimePlayer() {
        // window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1")
        if (window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == null || window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == undefined)
            window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1")

        return parseInt(window.localStorage.getItem("smallAlphabetifFirstTimePlayer"));
    }

    updateifFirstTimePlayer() {
        window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "0")
    }


    logData(txt) {
        console.log(txt);
    }

    getTotalLvlPlayed() {
        if (window.localStorage.getItem("totalLvlPlayeda-z") == null || window.localStorage.getItem("totalLvlPlayeda-z") == undefined)
            window.localStorage.setItem("totalLvlPlayeda-z", "-1")

        let array = [];
        let lvl = window.localStorage.getItem("totalLvlPlayeda-z");

        array = lvl.split("/");

        return array;
    }

    updateLvlPlayed(lvlNo) {
        let currentLvls = this.getTotalLvlPlayed();
        let lvlExist = this.checkLvlExist(lvlNo);
        if (!lvlExist) {
            currentLvls.push(lvlNo);
            let str = "";
            for (let i = 0; i < currentLvls.length; i++) {
                str = str + currentLvls[i];
                if (i < currentLvls.length - 1)
                    str = str + "/";
            }
            window.localStorage.setItem("totalLvlPlayeda-z", str);
        }
    }

    checkLvlExist(lvlNo) {
        let currentLvls = this.getTotalLvlPlayed();
        let lvlExist = false;
        for (let i = 0; i < currentLvls.length; i++) {
            if (lvlNo.toString() == currentLvls[i]) {
                lvlExist = true;
                break;
            }
        }
        return lvlExist;
    }
}

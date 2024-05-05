"use strict";
cc._RF.push(module, '04f51fxUhpNXKW0151wPJGJ', 'CommonFun');
// Game/Painting_template/Script/Common/CommonFun.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Drawingmask_1 = require("../GamePlay/Drawingmask");
var DrawingTable_1 = require("../GamePlay/DrawingTable");
var TileSelection_1 = require("../GamePlay/TileSelection");
var audioManager_1 = require("./audioManager");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonFun = /** @class */ (function (_super) {
    __extends(CommonFun, _super);
    function CommonFun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLvl = 0;
        _this.isSymetryEnabled = false;
        return _this;
    }
    CommonFun_1 = CommonFun;
    Object.defineProperty(CommonFun, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new CommonFun_1;
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CommonFun.prototype.start = function () {
        this.currentLvl = 0;
    };
    CommonFun.prototype.convertToCenterXPos = function (x) {
        var val = x + cc.winSize.width / 2;
        return val;
    };
    CommonFun.prototype.convertToCenterYPos = function (y) {
        var val = y + cc.winSize.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPos = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPos = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPosWithNode = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPosWithNode = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.showScaleAnimation = function (node, scale, time) {
        cc.tween(node)
            .to(time, {
            scale: scale
        })
            .start();
    };
    CommonFun.prototype.angle = function (originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;
        var theta = Math.atan2(-dy, -dx); // [0, Ⲡ] then [-Ⲡ, 0]; clockwise; 0° = east
        theta *= 180 / Math.PI; // [0, 180] then [-180, 0]; clockwise; 0° = east
        if (theta < 0)
            theta += 360; // [0, 360]; clockwise; 0° = east
        return theta;
    };
    CommonFun.prototype.removeArrayValue = function (array, val) {
        var index = array.indexOf(val);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    CommonFun.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    CommonFun.prototype.getDistance = function (xA, yA, xB, yB) {
        var xDiff = xA - xB;
        var yDiff = yA - yB;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    CommonFun.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    CommonFun.prototype.generateRect = function (p1) {
        var val = 20;
        var left = p1.x - val;
        var right = p1.x + val;
        var top = p1.y + val;
        var bottom = p1.y - val;
        var width = right - left;
        var height = top - bottom;
        return cc.rect(left, p1.y, width, height);
    };
    CommonFun.prototype.checkInPolygon = function (p1, p3) {
        var rect = this.generateRect(p1);
        var inside = rect.contains(p3);
        return inside;
    };
    CommonFun.prototype.splitNumIntoXRandomComponents = function (num, x, min_num) {
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
    };
    CommonFun.prototype.pointOnLine = function (pt1, pt2, pt3) {
        var result = {
            on_projected_line: true,
            on_line: false,
            between_both: false,
            between_x: false,
            between_y: false,
        };
        // Determine if on line interior or exterior
        var x = (pt3.x - pt1.x) / (pt2.x - pt1.x);
        var y = (pt3.y - pt1.y) / (pt2.y - pt1.y);
        // Check if on line equation
        result.on_projected_line = x === y;
        // Check within x bounds
        if ((pt1.x <= pt3.x && pt3.x <= pt2.x) ||
            (pt2.x <= pt3.x && pt3.x <= pt1.x)) {
            result.between_x = true;
        }
        // Check within y bounds
        if ((pt1.y <= pt3.y && pt3.y <= pt2.y) ||
            (pt2.y <= pt3.y && pt3.y <= pt1.y)) {
            result.between_y = true;
        }
        result.between_both = result.between_x && result.between_y;
        result.on_line = result.on_projected_line && result.between_both;
        return result;
    };
    CommonFun.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new cc.Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255) : new cc.Color(0, 0, 0, 255);
    };
    CommonFun.prototype.getTileSelectionClassRef = function (node) {
        if (node.getComponent(TileSelection_1.default) != null)
            return node.getComponent(TileSelection_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingmaskClassRef = function (node) {
        if (node.getComponent(Drawingmask_1.default) != null)
            return node.getComponent(Drawingmask_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingTableClassRef = function (node) {
        if (node.getComponent(DrawingTable_1.default) != null)
            return node.getComponent(DrawingTable_1.default);
        return null;
    };
    CommonFun.prototype.loadAllAudios = function () {
        for (var i = 0; i < Object.keys(Constant_1.Constant.AUDIO_SOUND.correct).length; i++) {
            audioManager_1.default.instance.loadAuido(Constant_1.Constant.AUDIO_SOUND.correct[Object.keys(Constant_1.Constant.AUDIO_SOUND.correct)[i]]);
        }
    };
    CommonFun.prototype.circleCoordinates = function (radius, steps, centerX, centerY) {
        var pos = [];
        for (var i = 0; i < steps; i++) {
            pos.push(new cc.Vec2(centerX + radius * Math.cos(2 * Math.PI * (i / steps)), centerY + radius * Math.sin(2 * Math.PI * (i / steps))));
        }
        return pos;
    };
    CommonFun.prototype.getAlphabet = function (num) {
        return (num + 10).toString(36);
    };
    CommonFun.prototype.ifFirstTimePlayer = function () {
        // window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1")
        if (window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == null || window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == undefined)
            window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1");
        return parseInt(window.localStorage.getItem("smallAlphabetifFirstTimePlayer"));
    };
    CommonFun.prototype.updateifFirstTimePlayer = function () {
        window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "0");
    };
    CommonFun.prototype.logData = function (txt) {
        console.log(txt);
    };
    CommonFun.prototype.getTotalLvlPlayed = function () {
        if (window.localStorage.getItem("totalLvlPlayeda-z") == null || window.localStorage.getItem("totalLvlPlayeda-z") == undefined)
            window.localStorage.setItem("totalLvlPlayeda-z", "-1");
        var array = [];
        var lvl = window.localStorage.getItem("totalLvlPlayeda-z");
        array = lvl.split("/");
        return array;
    };
    CommonFun.prototype.updateLvlPlayed = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = this.checkLvlExist(lvlNo);
        if (!lvlExist) {
            currentLvls.push(lvlNo);
            var str = "";
            for (var i = 0; i < currentLvls.length; i++) {
                str = str + currentLvls[i];
                if (i < currentLvls.length - 1)
                    str = str + "/";
            }
            window.localStorage.setItem("totalLvlPlayeda-z", str);
        }
    };
    CommonFun.prototype.checkLvlExist = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = false;
        for (var i = 0; i < currentLvls.length; i++) {
            if (lvlNo.toString() == currentLvls[i]) {
                lvlExist = true;
                break;
            }
        }
        return lvlExist;
    };
    var CommonFun_1;
    CommonFun = CommonFun_1 = __decorate([
        ccclass
    ], CommonFun);
    return CommonFun;
}(cc.Component));
exports.default = CommonFun;

cc._RF.pop();
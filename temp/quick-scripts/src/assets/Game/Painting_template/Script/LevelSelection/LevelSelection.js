"use strict";
cc._RF.push(module, '7c423iHn9JGn5NIhCMbGh9d', 'LevelSelection');
// Game/Painting_template/Script/LevelSelection/LevelSelection.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelSelection = /** @class */ (function (_super) {
    __extends(LevelSelection, _super);
    function LevelSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lvlArray = [];
        _this.clickAud = null;
        _this.DrawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LevelSelection.prototype.start = function () {
        var _this = this;
        this.addDrawing();
        this.scheduleOnce(function () {
            _this.PlayEffects();
        }, 1);
        this.schedule(function () {
            _this.PlayEffects();
        }, 7);
    };
    // update (dt) {}
    LevelSelection.prototype.addDrawing = function () {
        var _loop_1 = function (i) {
            var currentDrawing = cc.instantiate(this_1.DrawingDataArray[i]);
            this_1.lvlArray[i].addChild(currentDrawing);
            currentDrawing.setPosition(new cc.Vec2(0, 0));
            var currentDrawingeClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(currentDrawing);
            currentDrawingeClassRef.initialiseRef(this_1);
            setTimeout(function () {
                var data = Constant_1.Constant.getLevelData(i);
                currentDrawingeClassRef.drawData(data);
            }, 10);
            currentDrawing.setScale(0.2);
        };
        var this_1 = this;
        for (var i = 0; i < this.lvlArray.length; i++) {
            _loop_1(i);
        }
    };
    LevelSelection.prototype.onLvlClicked = function (ref, tag) {
        cc.audioEngine.playEffect(this.clickAud, false);
        CommonFun_1.default.instance.currentLvl = parseInt(tag);
        console.log("levelStarted--" + (CommonFun_1.default.instance.currentLvl + 1));
        // console.log("current level = ", CommonFun.instance.currentLvl);
        cc.director.loadScene("GamePlay");
    };
    LevelSelection.prototype.PlayEffects = function () {
        // console.log("islogging");
        for (var i = 0; i < this.lvlArray.length; i++) {
            var delay = this.getRandomNumber(3, 9);
            delay *= 0.1;
            cc.tween(this.lvlArray[i]).to(delay, { scale: 1.2 }, { easing: "backInOut" })
                .to(delay, { scale: 1 }, { easing: "backInOut" }).start();
        }
    };
    LevelSelection.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    LevelSelection.prototype.OnBackButton = function () {
        console.log("gameEnded--true");
        console.log("gameExit--true");
    };
    __decorate([
        property(cc.Node)
    ], LevelSelection.prototype, "lvlArray", void 0);
    __decorate([
        property(cc.AudioClip)
    ], LevelSelection.prototype, "clickAud", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelSelection.prototype, "DrawingDataArray", void 0);
    LevelSelection = __decorate([
        ccclass
    ], LevelSelection);
    return LevelSelection;
}(cc.Component));
exports.default = LevelSelection;

cc._RF.pop();
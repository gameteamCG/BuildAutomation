"use strict";
cc._RF.push(module, '0aaaadim+RIGpc5sMmbR2rZ', 'Drawingmask');
// Game/Painting_template/Script/GamePlay/Drawingmask.ts

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
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Drawingmask = /** @class */ (function (_super) {
    __extends(Drawingmask, _super);
    function Drawingmask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentRef = null;
        _this.parentNode = null;
        _this.patternFrame = null;
        _this.touches = [];
        return _this;
    }
    Drawingmask.prototype.start = function () {
    };
    // update (dt) {}
    Drawingmask.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    };
    Drawingmask.prototype.initialisePatternData = function (persistentScrollScript) {
        this.patternFrame = persistentScrollScript.currentPatternFrame;
        if (persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            return;
        if (persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.node.getChildByName("img").color = this.patternFrame; //CommonFun.instance.hexToRgb(this.patternFrame);
        if (persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN ||
            persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.node.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if (persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            this.node.getComponent(cc.Mask).inverted = true;
    };
    Drawingmask.prototype.getPatternFrame = function () {
        return this.patternFrame;
    };
    Drawingmask = __decorate([
        ccclass
    ], Drawingmask);
    return Drawingmask;
}(cc.Component));
exports.default = Drawingmask;

cc._RF.pop();
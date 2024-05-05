"use strict";
cc._RF.push(module, '6e87e4A2+tCgoW+6DQz4w3i', 'TileSelection');
// Game/Painting_template/Script/GamePlay/TileSelection.ts

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
var TileSelection = /** @class */ (function (_super) {
    __extends(TileSelection, _super);
    function TileSelection() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.parentRef = null;
        _this.parentNode = null;
        _this.patternFrame = null;
        _this.currentTimeout = null;
        _this.index = 0;
        _this.isLocked = false;
        return _this;
    }
    TileSelection.prototype.start = function () {
    };
    TileSelection.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    };
    TileSelection.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.parentRef.onTileSelected(this);
    };
    // update (dt) {}
    TileSelection.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    };
    TileSelection.prototype.initialiseData = function (data, index) {
        this.index = index;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.patternFrame = data.color;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.patternFrame = data.PatternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.patternFrame = data.SparkleFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.node.color = this.patternFrame; //CommonFun.instance.hexToRgb(this.patternFrame);
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
    };
    TileSelection.prototype.setLocked = function (value) {
        this.isLocked = value;
        this.node.getChildByName("lockNode").active = value;
    };
    TileSelection = __decorate([
        ccclass
    ], TileSelection);
    return TileSelection;
}(cc.Component));
exports.default = TileSelection;

cc._RF.pop();
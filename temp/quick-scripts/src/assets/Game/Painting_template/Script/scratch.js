"use strict";
cc._RF.push(module, 'dbb86E7QbtLxqVXFMHsAE7u', 'scratch');
// Game/Painting_template/Script/scratch.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var scratch = /** @class */ (function (_super) {
    __extends(scratch, _super);
    function scratch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myMask1 = null;
        _this.myMask2 = null;
        _this.MyMaterial = null;
        _this.MyMaterial1 = null;
        _this.size = 32;
        _this.usedBtn = 1;
        _this.currentMask = null;
        return _this;
    }
    scratch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    };
    scratch.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype.onBtnClicked = function () {
        this.usedBtn *= -1;
        var mask = null;
        if (this.usedBtn == 1)
            mask = cc.instantiate(this.myMask1);
        if (this.usedBtn == -1)
            mask = cc.instantiate(this.myMask2);
        this.node.getChildByName("mask").addChild(mask);
        this.currentMask = mask.getComponent(cc.Mask);
    };
    scratch.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._addCircle = function (point) {
        // var stencil = this.myMask._graphics;
        // stencil.circle(point.x, point.y, this.size);
        // stencil.fill();
        var stencil1 = this.currentMask._graphics;
        stencil1.circle(point.x, point.y, this.size);
        stencil1.fill();
        return;
        if (this.usedBtn == 1) {
            var stencil1 = this.myMask1._graphics;
            stencil1.circle(point.x, point.y, this.size);
            stencil1.fillColor = cc.Color.GREEN;
            stencil1.fill();
            // var stencil2 = this.myMask2._graphics;
            // stencil2.circle(point.x, point.y, 20);
            // stencil2.setMaterial(0,this.MyMaterial);
            // stencil2.fillColor.a = 0
            // stencil2.srcBlendFactor = cc.BlendFunc.BlendFactor.ZERO;
            // stencil2.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE_MINUS_SRC_ALPHA;
            // stencil2.fill();
        }
        else {
            // var stencil1 = this.myMask1._graphics;
            // stencil1.circle(point.x, point.y, this.size);
            // stencil1.close();
            var stencil2 = this.myMask2._graphics;
            stencil2.circle(point.x, point.y, this.size);
            // stencil2.setMaterial(0,this.MyMaterial1);
            // stencil2.fillColor.a = 255
            stencil2.fill();
        }
    };
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask1", void 0);
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask2", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial1", void 0);
    __decorate([
        property({
            displayName: "刮卡路径大小",
            min: 32
        })
    ], scratch.prototype, "size", void 0);
    scratch = __decorate([
        ccclass
    ], scratch);
    return scratch;
}(cc.Component));
exports.default = scratch;

cc._RF.pop();
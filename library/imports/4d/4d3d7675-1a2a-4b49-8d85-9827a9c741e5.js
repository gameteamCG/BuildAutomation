"use strict";
cc._RF.push(module, '4d3d7Z1GipLSY2FmCepx0Hl', 'Target');
// Games/ArcheryGame/scripts/Target.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.targetLabel = null;
        _this.defColor = new cc.Color(96, 45, 11);
        return _this;
    }
    Target.prototype.setValue = function (val) {
        // this.value = val;
        // console.log("target node :", this.node.name)
        // this.targetLabel.string = this.value.toFixed();
        // this.targetLabel.node.color = this.defColor;
    };
    Target.prototype.setColor = function (color) {
        this.targetLabel.node.color = color;
    };
    Target.prototype.setDefColor = function () {
        this.targetLabel.node.color = this.defColor;
    };
    Target.prototype.onLoad = function () {
        this.value = parseInt(this.node.name);
    };
    __decorate([
        property(cc.Label)
    ], Target.prototype, "targetLabel", void 0);
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(cc.Component));
exports.default = Target;

cc._RF.pop();
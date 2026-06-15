
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/Target.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.defColor = new cc.Color(255, 255, 255);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxUYXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEwQkM7UUF6QlEsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBb0JoRCxDQUFDO0lBbEJRLHlCQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUN6QixvQkFBb0I7UUFDcEIsK0NBQStDO1FBQy9DLGtEQUFrRDtRQUNsRCwrQ0FBK0M7SUFDakQsQ0FBQztJQUVNLHlCQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ2lCO0lBSmpCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwQjFCO0lBQUQsYUFBQztDQTFCRCxBQTBCQyxDQTFCbUMsRUFBRSxDQUFDLFNBQVMsR0EwQi9DO2tCQTFCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyB0YXJnZXRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZGVmQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWw6IG51bWJlcikge1xyXG4gICAgLy8gdGhpcy52YWx1ZSA9IHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGFyZ2V0IG5vZGUgOlwiLCB0aGlzLm5vZGUubmFtZSlcclxuICAgIC8vIHRoaXMudGFyZ2V0TGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZS50b0ZpeGVkKCk7XHJcbiAgICAvLyB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmRlZkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbG9yKGNvbG9yOiBjYy5Db2xvcikge1xyXG4gICAgdGhpcy50YXJnZXRMYWJlbC5ub2RlLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGVmQ29sb3IoKSB7XHJcbiAgICB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmRlZkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KHRoaXMubm9kZS5uYW1lKTtcclxuICB9XHJcbn1cclxuIl19
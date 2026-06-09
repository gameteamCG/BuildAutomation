
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxUYXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEwQkM7UUF6QlEsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBb0JoRCxDQUFDO0lBbEJRLHlCQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUN6QixvQkFBb0I7UUFDcEIsK0NBQStDO1FBQy9DLGtEQUFrRDtRQUNsRCwrQ0FBK0M7SUFDakQsQ0FBQztJQUVNLHlCQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ2lCO0lBSmpCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwQjFCO0lBQUQsYUFBQztDQTFCRCxBQTBCQyxDQTFCbUMsRUFBRSxDQUFDLFNBQVMsR0EwQi9DO2tCQTFCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHVibGljIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgcHVibGljIHRhcmdldExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgcHVibGljIGRlZkNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWw6IG51bWJlcikge1xuICAgIC8vIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0YXJnZXQgbm9kZSA6XCIsIHRoaXMubm9kZS5uYW1lKVxuICAgIC8vIHRoaXMudGFyZ2V0TGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZS50b0ZpeGVkKCk7XG4gICAgLy8gdGhpcy50YXJnZXRMYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5kZWZDb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogY2MuQ29sb3IpIHtcbiAgICB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXREZWZDb2xvcigpIHtcbiAgICB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmRlZkNvbG9yO1xuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudmFsdWUgPSBwYXJzZUludCh0aGlzLm5vZGUubmFtZSk7XG4gIH1cbn1cbiJdfQ==
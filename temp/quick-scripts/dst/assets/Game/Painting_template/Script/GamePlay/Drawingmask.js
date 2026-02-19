
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/Drawingmask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9HYW1lUGxheS9EcmF3aW5nbWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiwrQ0FBOEM7QUFFeEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF3Q0M7UUFyQ0csZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWMsRUFBRSxDQUFBOztJQWdDM0IsQ0FBQztJQTlCRywyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixtQ0FBYSxHQUFiLFVBQWMsU0FBUztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFDRCwyQ0FBcUIsR0FBckIsVUFBc0Isc0JBQXNCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUM7UUFFL0QsSUFBRyxzQkFBc0IsQ0FBQyxzQkFBc0IsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3hFLE9BQU87UUFFWCxJQUFHLHNCQUFzQixDQUFDLGdCQUFnQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQSxpREFBaUQ7UUFFOUcsSUFBRyxzQkFBc0IsQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELHNCQUFzQixDQUFDLGdCQUFnQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU1RixJQUFHLHNCQUFzQixDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFeEQsQ0FBQztJQUNELHFDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQXZDZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdDL0I7SUFBRCxrQkFBQztDQXhDRCxBQXdDQyxDQXhDd0MsRUFBRSxDQUFDLFNBQVMsR0F3Q3BEO2tCQXhDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi9Db21tb24vQ29uc3RhbnRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nbWFzayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG5cbiAgICBwYXJlbnRSZWYgPSBudWxsO1xuICAgIHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgcGF0dGVybkZyYW1lID0gbnVsbDtcbiAgICBcbiAgICB0b3VjaGVzOiBjYy5WZWMyW10gPSBbXVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuICAgIGluaXRpYWxpc2VSZWYoUGFyZW50UmVmKXtcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYgPSBQYXJlbnRSZWY7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHRoaXMucGFyZW50UmVmLm5vZGU7XG4gICAgfVxuICAgIGluaXRpYWxpc2VQYXR0ZXJuRGF0YShwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0KXtcbiAgICAgICAgdGhpcy5wYXR0ZXJuRnJhbWUgPSBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQYXR0ZXJuRnJhbWU7XG5cbiAgICAgICAgaWYocGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZihwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSB0aGlzLnBhdHRlcm5GcmFtZS8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMucGF0dGVybkZyYW1lKTtcblxuICAgICAgICBpZihwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTiB8fCBcbiAgICAgICAgICAgICAgICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGF0dGVybkZyYW1lO1xuXG4gICAgICAgIGlmKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSB0cnVlO1xuXG4gICAgfVxuICAgIGdldFBhdHRlcm5GcmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuRnJhbWU7XG4gICAgfVxufVxuIl19
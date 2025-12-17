
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdtYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdDQztRQXJDRyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYyxFQUFFLENBQUE7O0lBZ0MzQixDQUFDO0lBOUJHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG1DQUFhLEdBQWIsVUFBYyxTQUFTO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUNELDJDQUFxQixHQUFyQixVQUFzQixzQkFBc0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUUvRCxJQUFJLHNCQUFzQixDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDekUsT0FBTztRQUVYLElBQUksc0JBQXNCLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFBLGlEQUFpRDtRQUU5RyxJQUFJLHNCQUFzQixDQUFDLGdCQUFnQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDcEUsc0JBQXNCLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTVGLElBQUksc0JBQXNCLENBQUMsc0JBQXNCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUV4RCxDQUFDO0lBQ0QscUNBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBdkNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd0MvQjtJQUFELGtCQUFDO0NBeENELEFBd0NDLENBeEN3QyxFQUFFLENBQUMsU0FBUyxHQXdDcEQ7a0JBeENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi9Db21tb24vQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nbWFzayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHBhcmVudFJlZiA9IG51bGw7XHJcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgICBwYXR0ZXJuRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHRvdWNoZXM6IGNjLlZlYzJbXSA9IFtdXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgaW5pdGlhbGlzZVJlZihQYXJlbnRSZWYpIHtcclxuICAgICAgICB0aGlzLnBhcmVudFJlZiA9IFBhcmVudFJlZjtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnBhcmVudFJlZi5ub2RlO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQpIHtcclxuICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBhdHRlcm5GcmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gdGhpcy5wYXR0ZXJuRnJhbWUvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLnBhdHRlcm5GcmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTiB8fFxyXG4gICAgICAgICAgICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcblxyXG4gICAgICAgIGlmIChwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIGdldFBhdHRlcm5GcmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcbiAgICB9XHJcbn1cclxuIl19
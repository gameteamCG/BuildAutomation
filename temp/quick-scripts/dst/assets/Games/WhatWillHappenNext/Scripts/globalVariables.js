
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6f528Ta8lKfpYTwz7oqVtg', 'globalVariables');
// Games/WhatWillHappenNext/Scripts/globalVariables.ts

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
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.animationEntry = "";
        _this.animationStayEffect = "";
        _this.animationExit = "";
        _this.currentLevel = 1;
        _this.totalQuestions = 3;
        _this.currentQuestion = 1;
        _this.increasetransition = 0;
        _this.fillRange = 1;
        _this.canvasTopY = 0;
        _this.canvasLeftX = 0;
        _this.canvasRightX = 0;
        _this.canvasBottomY = 0;
        return _this;
    }
    globalVariables_1 = globalVariables;
    // LIFE-CYCLE CALLBACKS:
    globalVariables.prototype.onLoad = function () {
        globalVariables_1.instance = this;
    };
    Object.defineProperty(globalVariables, "Instance", {
        get: function () {
            return globalVariables_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    globalVariables.prototype.start = function () {
    };
    globalVariables.prototype.update = function (dt) {
    };
    var globalVariables_1;
    globalVariables.instance = null;
    __decorate([
        property(cc.Label)
    ], globalVariables.prototype, "label", void 0);
    __decorate([
        property
    ], globalVariables.prototype, "text", void 0);
    globalVariables = globalVariables_1 = __decorate([
        ccclass
    ], globalVariables);
    return globalVariables;
}(cc.Component));
exports.default = globalVariables;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2xvYmFsVmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBOENDO1FBM0NHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUdoQixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1Qix5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsd0JBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBRTlCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBdUJyQyxDQUFDO3dCQTlDb0IsZUFBZTtJQTBCaEMsd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxpQkFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDOztJQWxCYyx3QkFBUSxHQUFtQixJQUFJLENBQUM7SUF0Qi9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0k7SUFHdkI7UUFEQyxRQUFRO2lEQUNjO0lBTk4sZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThDbkM7SUFBRCxzQkFBQztDQTlDRCxBQThDQyxDQTlDNEMsRUFBRSxDQUFDLFNBQVMsR0E4Q3hEO2tCQTlDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2xvYmFsVmFyaWFibGVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBhbmltYXRpb25FbnRyeTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGF5RWZmZWN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvbkV4aXQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbFF1ZXN0aW9uczogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNldHJhbnNpdGlvbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBmaWxsUmFuZ2U6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgY2FudmFzVG9wWTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNMZWZ0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNSaWdodFg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY2FudmFzQm90dG9tWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpnbG9iYWxWYXJpYWJsZXMgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcbiJdfQ==
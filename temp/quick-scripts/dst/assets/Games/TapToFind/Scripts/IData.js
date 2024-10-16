
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/IData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74606DA4ldPDYqRa0tppnfF', 'IData');
// TapToFind/Scripts/IData.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IData = /** @class */ (function () {
    function IData() {
        this.totalOptions = 0;
        this.SubImage = 0;
        this.wrongAnswersLimit = 0;
        this.question = "";
        this.questionSound = "";
        this.answerObject = [];
        this.positionType = "";
        this.feedbacktype = [];
        this.scaleArray = [];
        this.answers = [];
        this.positions = [];
        this.answerpositions = [];
        this.optionAnimationImages = [];
        this.textArray = [];
    }
    IData = __decorate([
        ccclass
    ], IData);
    return IData;
}());
exports.IData = IData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9JRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO1FBQ0ksaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBaUIsR0FBWSxDQUFDLENBQUM7UUFDL0IsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUMvQiwwQkFBcUIsR0FBVSxFQUFFLENBQUM7UUFDbEMsY0FBUyxHQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaEJZLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FnQmpCO0lBQUQsWUFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgSURhdGEgIHtcclxuICAgIHRvdGFsT3B0aW9ucyA6IG51bWJlciA9IDA7XHJcbiAgICBTdWJJbWFnZTogbnVtYmVyID0gMDtcclxuICAgIHdyb25nQW5zd2Vyc0xpbWl0IDogbnVtYmVyID0gMDtcclxuICAgIHF1ZXN0aW9uIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHF1ZXN0aW9uU291bmQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYW5zd2VyT2JqZWN0IDogc3RyaW5nW109W107XHJcbiAgICBwb3NpdGlvblR5cGUgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmVlZGJhY2t0eXBlIDogc3RyaW5nW109W107XHJcbiAgICBzY2FsZUFycmF5IDogbnVtYmVyW109W107XHJcbiAgICBhbnN3ZXJzIDogbnVtYmVyW109W107XHJcbiAgICBcclxuICAgIHBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIGFuc3dlcnBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIG9wdGlvbkFuaW1hdGlvbkltYWdlczpzdHJpbmdbXT1bXTtcclxuICAgIHRleHRBcnJheSA6IHN0cmluZ1tdPVtdO1xyXG59XHJcbiJdfQ==
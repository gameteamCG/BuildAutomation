
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/IData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74606DA4ldPDYqRa0tppnfF', 'IData');
// Games/Scripts/IData.ts

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
        this.answerObject = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TY3JpcHRzL0lEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFDSSxpQkFBWSxHQUFZLENBQUMsQ0FBQztRQUMxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFZLENBQUMsQ0FBQztRQUMvQixhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVksRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLDBCQUFxQixHQUFVLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFoQlksS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQWdCakI7SUFBRCxZQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgSURhdGEgIHtcbiAgICB0b3RhbE9wdGlvbnMgOiBudW1iZXIgPSAwO1xuICAgIFN1YkltYWdlOiBudW1iZXIgPSAwO1xuICAgIHdyb25nQW5zd2Vyc0xpbWl0IDogbnVtYmVyID0gMDtcbiAgICBxdWVzdGlvbiA6IHN0cmluZyA9IFwiXCI7XG4gICAgcXVlc3Rpb25Tb3VuZCA6IHN0cmluZyA9IFwiXCI7XG4gICAgYW5zd2VyT2JqZWN0IDogc3RyaW5nPVwiXCI7XG4gICAgcG9zaXRpb25UeXBlIDogc3RyaW5nID0gXCJcIjtcbiAgICBmZWVkYmFja3R5cGUgOiBzdHJpbmdbXT1bXTtcbiAgICBzY2FsZUFycmF5IDogbnVtYmVyW109W107XG4gICAgYW5zd2VycyA6IG51bWJlcltdPVtdO1xuICAgIFxuICAgIHBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcbiAgICBhbnN3ZXJwb3NpdGlvbnMgOiBjYy5WZWMyW109W107XG4gICAgb3B0aW9uQW5pbWF0aW9uSW1hZ2VzOnN0cmluZ1tdPVtdO1xuICAgIHRleHRBcnJheSA6IHN0cmluZ1tdPVtdO1xufVxuIl19
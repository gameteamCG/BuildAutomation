"use strict";
cc._RF.push(module, '14c22o3rANHuK6U/y0kdlcu', 'questionData');
// Games/Tictock/Scripts/questionData.ts

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var questionData = /** @class */ (function () {
    function questionData() {
        this.questionTime = 0;
        this.isoptionText = false;
        this.isquestionText = false;
        this.questionImg = null;
        this.questionText = "";
        this.optionImgs = [];
        this.optionTexts = [];
        this.correctAnswer = 1;
    }
    __decorate([
        property(Number)
    ], questionData.prototype, "questionTime", void 0);
    __decorate([
        property(Boolean)
    ], questionData.prototype, "isoptionText", void 0);
    __decorate([
        property(Boolean)
    ], questionData.prototype, "isquestionText", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], questionData.prototype, "questionImg", void 0);
    __decorate([
        property(String)
    ], questionData.prototype, "questionText", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], questionData.prototype, "optionImgs", void 0);
    __decorate([
        property(String)
    ], questionData.prototype, "optionTexts", void 0);
    __decorate([
        property(Number)
    ], questionData.prototype, "correctAnswer", void 0);
    questionData = __decorate([
        ccclass
    ], questionData);
    return questionData;
}());

cc._RF.pop();
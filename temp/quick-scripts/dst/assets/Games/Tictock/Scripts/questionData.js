
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Tictock/Scripts/questionData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UaWN0b2NrL1NjcmlwdHMvcXVlc3Rpb25EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFHSSxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxnQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFFMUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFFM0Isa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWZHO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztzREFDUTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7c0RBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO3dEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3NEQUNTO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1M7SUFFbEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3FEQUNVO0lBRTNCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt1REFDUztJQWpCeEIsWUFBWTtRQURqQixPQUFPO09BQ0YsWUFBWSxDQWtCakI7SUFBRCxtQkFBQztDQWxCRCxBQWtCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIHF1ZXN0aW9uRGF0YSB7XG5cbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIHF1ZXN0aW9uVGltZTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcbiAgICBpc29wdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcbiAgICBpc3F1ZXN0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBxdWVzdGlvbkltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTdHJpbmcpXG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBvcHRpb25JbWdzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFN0cmluZylcbiAgICBvcHRpb25UZXh0czogc3RyaW5nW10gPSBbXTtcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIGNvcnJlY3RBbnN3ZXI6IG51bWJlciA9IDE7XG59XG4iXX0=
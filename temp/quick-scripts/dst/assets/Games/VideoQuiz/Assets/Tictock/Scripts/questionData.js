
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/VideoQuiz/Assets/Tictock/Scripts/questionData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14c22o3rANHuK6U/y0kdlcu', 'questionData');
// Games/VideoQuiz/Assets/Tictock/Scripts/questionData.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFZpZGVvUXVpelxcQXNzZXRzXFxUaWN0b2NrXFxTY3JpcHRzXFxxdWVzdGlvbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUdJLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUUzQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBZkc7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3NEQUNRO0lBRXpCO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQztzREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0RBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7c0RBQ1M7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7cURBQ1U7SUFFM0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3VEQUNTO0lBakJ4QixZQUFZO1FBRGpCLE9BQU87T0FDRixZQUFZLENBa0JqQjtJQUFELG1CQUFDO0NBbEJELEFBa0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuY2xhc3MgcXVlc3Rpb25EYXRhIHtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgcXVlc3Rpb25UaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc29wdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNxdWVzdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHF1ZXN0aW9uSW1nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoU3RyaW5nKVxyXG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgb3B0aW9uSW1nczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFN0cmluZylcclxuICAgIG9wdGlvblRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIGNvcnJlY3RBbnN3ZXI6IG51bWJlciA9IDE7XHJcbn1cclxuIl19
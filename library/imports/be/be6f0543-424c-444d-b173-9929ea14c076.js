"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/TapToFind/1_Jaipuria/scripts/introduction.ts

"use strict";
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ExplanationVos = [];
        _this.exitVO = null;
        _this.richText = null;
        _this.typingSpeed = 0.1;
        _this.currentIndex = 0;
        _this.currentIntro = 0;
        _this.currentText = '';
        _this.durationArray = [];
        _this.delay = [];
        _this.TextArray = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.durationArray = [10.128, 2.832, 4.128, 4.608, 7.608, 3.888, 4.056, 3.576, 2.256, 5.496, 4.728, 8.184,
            6.168, 1.992, 2.832, 4.608, 6.696, 4.512, 4.416, 3.456, 5.112, 7.2, 5.232, 6.072];
        this.delay = [1.5, 1.5, 1.5, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1.5, 1.5];
        this.TextArray = [
            "Today, we will learn how to add a 2-digit number with a 1-digit number with carry over. There are various methods to do this:",
            "Method 1: Using base ten blocks",
            "Let us look at the addition of 27 and 6.",
            "On adding the tens with tens and ones with ones, we get:",
            "2 tens + 13 ones (7 ones + 6 ones) give us 13 ones.",
            "Since 13 ones is 1 tens and 3 ones.",
            "2 tens + 1 tens = 3 tens.",
            "So the total is 3 tens and 3 ones",
            "Method 2: Column method",
            "To add 27 and 6, first write the numbers in the column form.",
            "Then add the ones, 7 + 6 = 13.",
            "Carry over the 1 to tens place and then add, 2 + 1 (carried over) = 3.",
            "So, the total is: 27 + 6 = 33.",
            "Let's try another one!",
            "Addition of 45 and 9.",
            // "Method 1: Using Base Ten Blocks",
            "On adding the tens with tens and ones with ones, we get:",
            "4 tens + 14 ones (9 ones + 5 ones) give us 14 ones.",
            "Since 14 ones = 1 ten and 4 ones.",
            "4 tens + 1 tens = 5 tens.",
            "The total is: 5 tens and 4 ones.",
            // "Method 2: Column Method",
            "To add 45 and 9, first write the numbers in column form.",
            "Add the ones: 5 + 9 = 14 (write 4, carry forward 1).",
            "Add the tens: 4 + 1 (carried over) = 5.",
            "So, the total is: 45 + 9 = 54."
        ];
    };
    // typeLetter() {
    //     if (this.currentIndex < this.text.length) {
    //         this.currentText += this.text[this.currentIndex];
    //         this.richText.string = this.currentText;
    //         this.currentIndex++;
    //     } else {
    //         this.unschedule(this.typeLetter);
    //     }
    // }
    // resetText() {
    //     this.currentIntro++;
    //     this.richText.string = "";
    //     this.currentIndex = 0;
    //     this.currentText = '';
    //     this.unschedule(this.typeLetter);
    //     this.text = this.TextArray[this.currentIntro];
    // }
    // callCurrentText() {
    //     this.schedule(this.typeLetter, this.typingSpeed);
    //     this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
    //     this.scheduleOnce(() => {
    //         console.log(this.currentIntro, "--", this.durationArray[this.currentIntro], this.delay[this.currentIntro])
    //         this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
    //         this.resetText();
    //         if (this.currentIntro == this.TextArray.length) {
    //             this.callEnd();
    //         }
    //         else {
    //             this.callCurrentText();
    //         }
    //     }, this.durationArray[this.currentIntro] + this.delay[this.currentIntro])
    // }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        // this.text = this.TextArray[this.currentIntro];
        // this.node.getChildByName("spine").active = true;
        // this.callCurrentText();
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.ExplanationVos[1], false);
            _this.richText.string = "જેમ કે bat, ball, bus";
            _this.node.getChildByName("1").active = false;
            _this.node.getChildByName("2").active = true;
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.ExplanationVos[2], false);
                _this.richText.string = "ચાલો, /b/ ધ્વનિ સાથે મળીને વધુ શબ્દો શોધીએ!";
                // this.node.getChildByName("1").active = false;
                // this.node.getChildByName("2").active = true;
                _this.scheduleOnce(function () {
                    _this.callEnd();
                }, _this.ExplanationVos[2].duration);
            }, _this.ExplanationVos[1].duration);
        }, this.ExplanationVos[0].duration);
        // this.scheduleOnce(() => {
        //     this.callEnd();
        // }, this.ExplanationVos[0].duration);
    };
    NewClass.prototype.callEnd = function () {
        var _this = this;
        // cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(function () {
            _this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 1);
    };
    NewClass.prototype.skipGame = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(function () {
            _this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 1);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ExplanationVos", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "exitVO", void 0);
    __decorate([
        property(cc.RichText)
    ], NewClass.prototype, "richText", void 0);
    __decorate([
        property
    ], NewClass.prototype, "typingSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
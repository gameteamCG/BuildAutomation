
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/1_Jaipuria/scripts/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/WhatWillHappenNext/1_Jaipuria/scripts/introduction.ts

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
            _this.richText.string = "જેમ કે apple, ant, alligator";
            _this.node.getChildByName("1").active = false;
            _this.node.getChildByName("2").active = true;
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.ExplanationVos[2], false);
                _this.richText.string = "ચાલો /ă/ ધ્વનિ સાથે મળીને વધુ શબ્દો શોધીએ!";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvMV9KYWlwdXJpYS9zY3JpcHRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJJQztRQXpJRyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFHcEMsWUFBTSxHQUFpQixJQUFJLENBQUE7UUFHM0IsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUVyQixlQUFTLEdBQWEsRUFBRSxDQUFBOztJQXlINUIsQ0FBQztJQXZIRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUNuRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxL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LENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hGLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQXhJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ0k7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTztJQUc3QjtRQURDLFFBQVE7aURBQ2lCO0lBWFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJJNUI7SUFBRCxlQUFDO0NBM0lELEFBMklDLENBM0lxQyxFQUFFLENBQUMsU0FBUyxHQTJJakQ7a0JBM0lvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBFeHBsYW5hdGlvblZvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR5cGluZ1NwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudEludHJvOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBkdXJhdGlvbkFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZGVsYXk6IG51bWJlcltdID0gW107XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uQXJyYXkgPSBbMTAuMTI4LCAyLjgzMiwgNC4xMjgsIDQuNjA4LCA3LjYwOCwgMy44ODgsIDQuMDU2LCAzLjU3NiwgMi4yNTYsIDUuNDk2LCA0LjcyOCwgOC4xODRcclxuICAgICAgICAgICAgLCA2LjE2OCwgMS45OTIsIDIuODMyLCA0LjYwOCwgNi42OTYsIDQuNTEyLCA0LjQxNiwgMy40NTYsIDUuMTEyLCA3LjIsIDUuMjMyLCA2LjA3Ml07XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IFsxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLjUsIDEsIDEsIDEuNSwgMS41XTtcclxuICAgICAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgICAgICAgXCJUb2RheSwgd2Ugd2lsbCBsZWFybiBob3cgdG8gYWRkIGEgMi1kaWdpdCBudW1iZXIgd2l0aCBhIDEtZGlnaXQgbnVtYmVyIHdpdGggY2Fycnkgb3Zlci4gVGhlcmUgYXJlIHZhcmlvdXMgbWV0aG9kcyB0byBkbyB0aGlzOlwiLFxyXG4gICAgICAgICAgICBcIk1ldGhvZCAxOiBVc2luZyBiYXNlIHRlbiBibG9ja3NcIixcclxuICAgICAgICAgICAgXCJMZXQgdXMgbG9vayBhdCB0aGUgYWRkaXRpb24gb2YgMjcgYW5kIDYuXCIsXHJcbiAgICAgICAgICAgIFwiT24gYWRkaW5nIHRoZSB0ZW5zIHdpdGggdGVucyBhbmQgb25lcyB3aXRoIG9uZXMsIHdlIGdldDpcIixcclxuICAgICAgICAgICAgXCIyIHRlbnMgKyAxMyBvbmVzICg3IG9uZXMgKyA2IG9uZXMpIGdpdmUgdXMgMTMgb25lcy5cIixcclxuICAgICAgICAgICAgXCJTaW5jZSAxMyBvbmVzIGlzIDEgdGVucyBhbmQgMyBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIjIgdGVucyArIDEgdGVucyA9IDMgdGVucy5cIixcclxuICAgICAgICAgICAgXCJTbyB0aGUgdG90YWwgaXMgMyB0ZW5zIGFuZCAzIG9uZXNcIixcclxuICAgICAgICAgICAgXCJNZXRob2QgMjogQ29sdW1uIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICBcIlRvIGFkZCAyNyBhbmQgNiwgZmlyc3Qgd3JpdGUgdGhlIG51bWJlcnMgaW4gdGhlIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIlRoZW4gYWRkIHRoZSBvbmVzLCA3ICsgNiA9IDEzLlwiLFxyXG4gICAgICAgICAgICBcIkNhcnJ5IG92ZXIgdGhlIDEgdG8gdGVucyBwbGFjZSBhbmQgdGhlbiBhZGQsIDIgKyAxIChjYXJyaWVkIG92ZXIpID0gMy5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiAyNyArIDYgPSAzMy5cIixcclxuICAgICAgICAgICAgXCJMZXQncyB0cnkgYW5vdGhlciBvbmUhXCIsXHJcbiAgICAgICAgICAgIFwiQWRkaXRpb24gb2YgNDUgYW5kIDkuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDE6IFVzaW5nIEJhc2UgVGVuIEJsb2Nrc1wiLFxyXG4gICAgICAgICAgICBcIk9uIGFkZGluZyB0aGUgdGVucyB3aXRoIHRlbnMgYW5kIG9uZXMgd2l0aCBvbmVzLCB3ZSBnZXQ6XCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMTQgb25lcyAoOSBvbmVzICsgNSBvbmVzKSBnaXZlIHVzIDE0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiU2luY2UgMTQgb25lcyA9IDEgdGVuIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMSB0ZW5zID0gNSB0ZW5zLlwiLFxyXG4gICAgICAgICAgICBcIlRoZSB0b3RhbCBpczogNSB0ZW5zIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDI6IENvbHVtbiBNZXRob2RcIixcclxuICAgICAgICAgICAgXCJUbyBhZGQgNDUgYW5kIDksIGZpcnN0IHdyaXRlIHRoZSBudW1iZXJzIGluIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIkFkZCB0aGUgb25lczogNSArIDkgPSAxNCAod3JpdGUgNCwgY2FycnkgZm9yd2FyZCAxKS5cIixcclxuICAgICAgICAgICAgXCJBZGQgdGhlIHRlbnM6IDQgKyAxIChjYXJyaWVkIG92ZXIpID0gNS5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiA0NSArIDkgPSA1NC5cIlxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVzZXRUZXh0KCkge1xyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEludHJvKys7XHJcbiAgICAvLyAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gJyc7XHJcbiAgICAvLyAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNhbGxDdXJyZW50VGV4dCgpIHtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEludHJvLCBcIi0tXCIsIHRoaXMuZHVyYXRpb25BcnJheVt0aGlzLmN1cnJlbnRJbnRyb10sIHRoaXMuZGVsYXlbdGhpcy5jdXJyZW50SW50cm9dKVxyXG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50SW50cm8gPT0gdGhpcy5UZXh0QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LCB0aGlzLmR1cmF0aW9uQXJyYXlbdGhpcy5jdXJyZW50SW50cm9dICsgdGhpcy5kZWxheVt0aGlzLmN1cnJlbnRJbnRyb10pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwi4Kqc4KuH4KquIOCqleCrhyBhcHBsZSwgYW50LCBhbGxpZ2F0b3JcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCLgqprgqr7gqrLgq4sgL8SDLyDgqqfgq43gqrXgqqjgqr8g4Kq44Kq+4Kql4KuHIOCqruCqs+CrgOCqqOCrhyDgqrXgqqfgq4Eg4Kq24Kqs4KuN4Kqm4KuLIOCqtuCri+Cqp+CrgOCqjyFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMl0uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzFdLmR1cmF0aW9uKVxyXG4gICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMF0uZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FsbEVuZCgpO1xyXG4gICAgICAgIC8vIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMF0uZHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxFbmQoKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmV4aXRWTywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW1cIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW1cIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbn1cclxuIl19
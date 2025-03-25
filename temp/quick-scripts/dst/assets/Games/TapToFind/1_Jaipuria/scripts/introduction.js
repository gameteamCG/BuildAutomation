
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/1_Jaipuria/scripts/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvMV9KYWlwdXJpYS9zY3JpcHRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZJQztRQTNJRyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFHcEMsWUFBTSxHQUFpQixJQUFJLENBQUE7UUFHM0IsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUVyQixlQUFTLEdBQWEsRUFBRSxDQUFBOztJQTJINUIsQ0FBQztJQXpIRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUNuRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcs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Q0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDYTtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNJO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OENBQ087SUFHN0I7UUFEQyxRQUFRO2lEQUNpQjtJQVhULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2STVCO0lBQUQsZUFBQztDQTdJRCxBQTZJQyxDQTdJcUMsRUFBRSxDQUFDLFNBQVMsR0E2SWpEO2tCQTdJb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgRXhwbGFuYXRpb25Wb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGV4aXRWTzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICAgIHJpY2hUZXh0OiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0eXBpbmdTcGVlZDogbnVtYmVyID0gMC4xO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbnRybzogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgZHVyYXRpb25BcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgIGRlbGF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgVGV4dEFycmF5OiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbkFycmF5ID0gWzEwLjEyOCwgMi44MzIsIDQuMTI4LCA0LjYwOCwgNy42MDgsIDMuODg4LCA0LjA1NiwgMy41NzYsIDIuMjU2LCA1LjQ5NiwgNC43MjgsIDguMTg0XHJcbiAgICAgICAgICAgICwgNi4xNjgsIDEuOTkyLCAyLjgzMiwgNC42MDgsIDYuNjk2LCA0LjUxMiwgNC40MTYsIDMuNDU2LCA1LjExMiwgNy4yLCA1LjIzMiwgNi4wNzJdO1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSBbMS41LCAxLjUsIDEuNSwgMSwgMSwgMSwgMSwgMS41LCAxLjUsIDEuNSwgMSwgMSwgMSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLCAxLCAxLjUsIDEuNV07XHJcbiAgICAgICAgdGhpcy5UZXh0QXJyYXkgPSBbXHJcbiAgICAgICAgICAgIFwiVG9kYXksIHdlIHdpbGwgbGVhcm4gaG93IHRvIGFkZCBhIDItZGlnaXQgbnVtYmVyIHdpdGggYSAxLWRpZ2l0IG51bWJlciB3aXRoIGNhcnJ5IG92ZXIuIFRoZXJlIGFyZSB2YXJpb3VzIG1ldGhvZHMgdG8gZG8gdGhpczpcIixcclxuICAgICAgICAgICAgXCJNZXRob2QgMTogVXNpbmcgYmFzZSB0ZW4gYmxvY2tzXCIsXHJcbiAgICAgICAgICAgIFwiTGV0IHVzIGxvb2sgYXQgdGhlIGFkZGl0aW9uIG9mIDI3IGFuZCA2LlwiLFxyXG4gICAgICAgICAgICBcIk9uIGFkZGluZyB0aGUgdGVucyB3aXRoIHRlbnMgYW5kIG9uZXMgd2l0aCBvbmVzLCB3ZSBnZXQ6XCIsXHJcbiAgICAgICAgICAgIFwiMiB0ZW5zICsgMTMgb25lcyAoNyBvbmVzICsgNiBvbmVzKSBnaXZlIHVzIDEzIG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiU2luY2UgMTMgb25lcyBpcyAxIHRlbnMgYW5kIDMgb25lcy5cIixcclxuICAgICAgICAgICAgXCIyIHRlbnMgKyAxIHRlbnMgPSAzIHRlbnMuXCIsXHJcbiAgICAgICAgICAgIFwiU28gdGhlIHRvdGFsIGlzIDMgdGVucyBhbmQgMyBvbmVzXCIsXHJcbiAgICAgICAgICAgIFwiTWV0aG9kIDI6IENvbHVtbiBtZXRob2RcIixcclxuICAgICAgICAgICAgXCJUbyBhZGQgMjcgYW5kIDYsIGZpcnN0IHdyaXRlIHRoZSBudW1iZXJzIGluIHRoZSBjb2x1bW4gZm9ybS5cIixcclxuICAgICAgICAgICAgXCJUaGVuIGFkZCB0aGUgb25lcywgNyArIDYgPSAxMy5cIixcclxuICAgICAgICAgICAgXCJDYXJyeSBvdmVyIHRoZSAxIHRvIHRlbnMgcGxhY2UgYW5kIHRoZW4gYWRkLCAyICsgMSAoY2FycmllZCBvdmVyKSA9IDMuXCIsXHJcbiAgICAgICAgICAgIFwiU28sIHRoZSB0b3RhbCBpczogMjcgKyA2ID0gMzMuXCIsXHJcbiAgICAgICAgICAgIFwiTGV0J3MgdHJ5IGFub3RoZXIgb25lIVwiLFxyXG4gICAgICAgICAgICBcIkFkZGl0aW9uIG9mIDQ1IGFuZCA5LlwiLFxyXG4gICAgICAgICAgICAvLyBcIk1ldGhvZCAxOiBVc2luZyBCYXNlIFRlbiBCbG9ja3NcIixcclxuICAgICAgICAgICAgXCJPbiBhZGRpbmcgdGhlIHRlbnMgd2l0aCB0ZW5zIGFuZCBvbmVzIHdpdGggb25lcywgd2UgZ2V0OlwiLFxyXG4gICAgICAgICAgICBcIjQgdGVucyArIDE0IG9uZXMgKDkgb25lcyArIDUgb25lcykgZ2l2ZSB1cyAxNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIlNpbmNlIDE0IG9uZXMgPSAxIHRlbiBhbmQgNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIjQgdGVucyArIDEgdGVucyA9IDUgdGVucy5cIixcclxuICAgICAgICAgICAgXCJUaGUgdG90YWwgaXM6IDUgdGVucyBhbmQgNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICAvLyBcIk1ldGhvZCAyOiBDb2x1bW4gTWV0aG9kXCIsXHJcbiAgICAgICAgICAgIFwiVG8gYWRkIDQ1IGFuZCA5LCBmaXJzdCB3cml0ZSB0aGUgbnVtYmVycyBpbiBjb2x1bW4gZm9ybS5cIixcclxuICAgICAgICAgICAgXCJBZGQgdGhlIG9uZXM6IDUgKyA5ID0gMTQgKHdyaXRlIDQsIGNhcnJ5IGZvcndhcmQgMSkuXCIsXHJcbiAgICAgICAgICAgIFwiQWRkIHRoZSB0ZW5zOiA0ICsgMSAoY2FycmllZCBvdmVyKSA9IDUuXCIsXHJcbiAgICAgICAgICAgIFwiU28sIHRoZSB0b3RhbCBpczogNDUgKyA5ID0gNTQuXCJcclxuICAgICAgICBdXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB0eXBlTGV0dGVyKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50VGV4dCArPSB0aGlzLnRleHRbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IHRoaXMuY3VycmVudFRleHQ7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlc2V0VGV4dCgpIHtcclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRJbnRybysrO1xyXG4gICAgLy8gICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCJcIjtcclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50VGV4dCA9ICcnO1xyXG4gICAgLy8gICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgLy8gICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjYWxsQ3VycmVudFRleHQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInRhbGsgYWN0aW9uIGxvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJbnRybywgXCItLVwiLCB0aGlzLmR1cmF0aW9uQXJyYXlbdGhpcy5jdXJyZW50SW50cm9dLCB0aGlzLmRlbGF5W3RoaXMuY3VycmVudEludHJvXSlcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuY3VycmVudEludHJvID09IHRoaXMuVGV4dEFycmF5Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgdGhpcy5kdXJhdGlvbkFycmF5W3RoaXMuY3VycmVudEludHJvXSArIHRoaXMuZGVsYXlbdGhpcy5jdXJyZW50SW50cm9dKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1swXSwgZmFsc2UpO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIuCqnOCrh+CqriDgqpXgq4cgYmF0LCBiYWxsLCBidXNcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCLgqprgqr7gqrLgq4ssIC9iLyDgqqfgq43gqrXgqqjgqr8g4Kq44Kq+4Kql4KuHIOCqruCqs+CrgOCqqOCrhyDgqrXgqqfgq4Eg4Kq24Kqs4KuN4Kqm4KuLIOCqtuCri+Cqp+CrgOCqjyFcIjtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzJdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1sxXS5kdXJhdGlvbilcclxuICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzBdLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgICAvLyB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzBdLmR1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsRW5kKCkge1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leGl0Vk8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIHNraXBHYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
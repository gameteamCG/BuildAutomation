
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/JaipuriaUnified/1_Jaipuria/New/scripts/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/JaipuriaUnified/1_Jaipuria/New/scripts/introduction.ts

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
    NewClass.prototype.typeLetter = function () {
        if (this.currentIndex < this.text.length) {
            this.currentText += this.text[this.currentIndex];
            this.richText.string = this.currentText;
            this.currentIndex++;
        }
        else {
            this.unschedule(this.typeLetter);
        }
    };
    NewClass.prototype.resetText = function () {
        this.currentIntro++;
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    };
    NewClass.prototype.callCurrentText = function () {
        var _this = this;
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(function () {
            console.log(_this.currentIntro, "--", _this.durationArray[_this.currentIntro], _this.delay[_this.currentIntro]);
            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            _this.resetText();
            if (_this.currentIntro == _this.TextArray.length) {
                _this.callEnd();
            }
            else {
                _this.callCurrentText();
            }
        }, this.durationArray[this.currentIntro] + this.delay[this.currentIntro]);
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.text = this.TextArray[this.currentIntro];
        this.node.getChildByName("spine").active = true;
        this.callCurrentText();
    };
    NewClass.prototype.callEnd = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(function () {
            _this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
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
        }, 2.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEphaXB1cmlhVW5pZmllZFxcMV9KYWlwdXJpYVxcTmV3XFxzY3JpcHRzXFxpbnRyb2R1Y3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF4SEcsb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBR3BDLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRzNCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLFdBQUssR0FBYSxFQUFFLENBQUM7UUFFckIsZUFBUyxHQUFhLEVBQUUsQ0FBQTs7SUF3RzVCLENBQUM7SUF0R0cseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDbkcsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RixJQUFJ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USxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OENBQ087SUFHN0I7UUFEQyxRQUFRO2lEQUNpQjtJQVhULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwSDVCO0lBQUQsZUFBQztDQTFIRCxBQTBIQyxDQTFIcUMsRUFBRSxDQUFDLFNBQVMsR0EwSGpEO2tCQTFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgRXhwbGFuYXRpb25Wb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGV4aXRWTzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICAgIHJpY2hUZXh0OiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0eXBpbmdTcGVlZDogbnVtYmVyID0gMC4xO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbnRybzogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgZHVyYXRpb25BcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgIGRlbGF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgVGV4dEFycmF5OiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbkFycmF5ID0gWzEwLjEyOCwgMi44MzIsIDQuMTI4LCA0LjYwOCwgNy42MDgsIDMuODg4LCA0LjA1NiwgMy41NzYsIDIuMjU2LCA1LjQ5NiwgNC43MjgsIDguMTg0XHJcbiAgICAgICAgICAgICwgNi4xNjgsIDEuOTkyLCAyLjgzMiwgNC42MDgsIDYuNjk2LCA0LjUxMiwgNC40MTYsIDMuNDU2LCA1LjExMiwgNy4yLCA1LjIzMiwgNi4wNzJdO1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSBbMS41LCAxLjUsIDEuNSwgMSwgMSwgMSwgMSwgMS41LCAxLjUsIDEuNSwgMSwgMSwgMSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLCAxLCAxLjUsIDEuNV07XHJcbiAgICAgICAgdGhpcy5UZXh0QXJyYXkgPSBbXHJcbiAgICAgICAgICAgIFwiVG9kYXksIHdlIHdpbGwgbGVhcm4gaG93IHRvIGFkZCBhIDItZGlnaXQgbnVtYmVyIHdpdGggYSAxLWRpZ2l0IG51bWJlciB3aXRoIGNhcnJ5IG92ZXIuIFRoZXJlIGFyZSB2YXJpb3VzIG1ldGhvZHMgdG8gZG8gdGhpczpcIixcclxuICAgICAgICAgICAgXCJNZXRob2QgMTogVXNpbmcgYmFzZSB0ZW4gYmxvY2tzXCIsXHJcbiAgICAgICAgICAgIFwiTGV0IHVzIGxvb2sgYXQgdGhlIGFkZGl0aW9uIG9mIDI3IGFuZCA2LlwiLFxyXG4gICAgICAgICAgICBcIk9uIGFkZGluZyB0aGUgdGVucyB3aXRoIHRlbnMgYW5kIG9uZXMgd2l0aCBvbmVzLCB3ZSBnZXQ6XCIsXHJcbiAgICAgICAgICAgIFwiMiB0ZW5zICsgMTMgb25lcyAoNyBvbmVzICsgNiBvbmVzKSBnaXZlIHVzIDEzIG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiU2luY2UgMTMgb25lcyBpcyAxIHRlbnMgYW5kIDMgb25lcy5cIixcclxuICAgICAgICAgICAgXCIyIHRlbnMgKyAxIHRlbnMgPSAzIHRlbnMuXCIsXHJcbiAgICAgICAgICAgIFwiU28gdGhlIHRvdGFsIGlzIDMgdGVucyBhbmQgMyBvbmVzXCIsXHJcbiAgICAgICAgICAgIFwiTWV0aG9kIDI6IENvbHVtbiBtZXRob2RcIixcclxuICAgICAgICAgICAgXCJUbyBhZGQgMjcgYW5kIDYsIGZpcnN0IHdyaXRlIHRoZSBudW1iZXJzIGluIHRoZSBjb2x1bW4gZm9ybS5cIixcclxuICAgICAgICAgICAgXCJUaGVuIGFkZCB0aGUgb25lcywgNyArIDYgPSAxMy5cIixcclxuICAgICAgICAgICAgXCJDYXJyeSBvdmVyIHRoZSAxIHRvIHRlbnMgcGxhY2UgYW5kIHRoZW4gYWRkLCAyICsgMSAoY2FycmllZCBvdmVyKSA9IDMuXCIsXHJcbiAgICAgICAgICAgIFwiU28sIHRoZSB0b3RhbCBpczogMjcgKyA2ID0gMzMuXCIsXHJcbiAgICAgICAgICAgIFwiTGV0J3MgdHJ5IGFub3RoZXIgb25lIVwiLFxyXG4gICAgICAgICAgICBcIkFkZGl0aW9uIG9mIDQ1IGFuZCA5LlwiLFxyXG4gICAgICAgICAgICAvLyBcIk1ldGhvZCAxOiBVc2luZyBCYXNlIFRlbiBCbG9ja3NcIixcclxuICAgICAgICAgICAgXCJPbiBhZGRpbmcgdGhlIHRlbnMgd2l0aCB0ZW5zIGFuZCBvbmVzIHdpdGggb25lcywgd2UgZ2V0OlwiLFxyXG4gICAgICAgICAgICBcIjQgdGVucyArIDE0IG9uZXMgKDkgb25lcyArIDUgb25lcykgZ2l2ZSB1cyAxNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIlNpbmNlIDE0IG9uZXMgPSAxIHRlbiBhbmQgNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIjQgdGVucyArIDEgdGVucyA9IDUgdGVucy5cIixcclxuICAgICAgICAgICAgXCJUaGUgdG90YWwgaXM6IDUgdGVucyBhbmQgNCBvbmVzLlwiLFxyXG4gICAgICAgICAgICAvLyBcIk1ldGhvZCAyOiBDb2x1bW4gTWV0aG9kXCIsXHJcbiAgICAgICAgICAgIFwiVG8gYWRkIDQ1IGFuZCA5LCBmaXJzdCB3cml0ZSB0aGUgbnVtYmVycyBpbiBjb2x1bW4gZm9ybS5cIixcclxuICAgICAgICAgICAgXCJBZGQgdGhlIG9uZXM6IDUgKyA5ID0gMTQgKHdyaXRlIDQsIGNhcnJ5IGZvcndhcmQgMSkuXCIsXHJcbiAgICAgICAgICAgIFwiQWRkIHRoZSB0ZW5zOiA0ICsgMSAoY2FycmllZCBvdmVyKSA9IDUuXCIsXHJcbiAgICAgICAgICAgIFwiU28sIHRoZSB0b3RhbCBpczogNDUgKyA5ID0gNTQuXCJcclxuICAgICAgICBdXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0eXBlTGV0dGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dCArPSB0aGlzLnRleHRbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IHRoaXMuY3VycmVudFRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGV4dCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnRybysrO1xyXG4gICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsQ3VycmVudFRleHQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInRhbGsgYWN0aW9uIGxvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJbnRybywgXCItLVwiLCB0aGlzLmR1cmF0aW9uQXJyYXlbdGhpcy5jdXJyZW50SW50cm9dLCB0aGlzLmRlbGF5W3RoaXMuY3VycmVudEludHJvXSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEludHJvID09IHRoaXMuVGV4dEFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbkFycmF5W3RoaXMuY3VycmVudEludHJvXSArIHRoaXMuZGVsYXlbdGhpcy5jdXJyZW50SW50cm9dKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1swXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEVuZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhpdFZPLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfSwgMi41KVxyXG4gICAgfVxyXG5cclxuICAgIHNraXBHYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcbn1cclxuIl19
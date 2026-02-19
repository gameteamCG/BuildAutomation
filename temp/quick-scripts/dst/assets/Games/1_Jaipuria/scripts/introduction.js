
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/1_Jaipuria/scripts/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/1_Jaipuria/scripts/introduction.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXDFfSmFpcHVyaWFcXHNjcmlwdHNcXGludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBIQztRQXhIRyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFHcEMsWUFBTSxHQUFpQixJQUFJLENBQUE7UUFHM0IsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUVyQixlQUFTLEdBQWEsRUFBRSxDQUFBOztJQXdHNUIsQ0FBQztJQXRHRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUNuRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxH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Q0FBQzs4Q0FDTztJQUc3QjtRQURDLFFBQVE7aURBQ2lCO0lBWFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBINUI7SUFBRCxlQUFDO0NBMUhELEFBMEhDLENBMUhxQyxFQUFFLENBQUMsU0FBUyxHQTBIakQ7a0JBMUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBFeHBsYW5hdGlvblZvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR5cGluZ1NwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudEludHJvOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBkdXJhdGlvbkFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZGVsYXk6IG51bWJlcltdID0gW107XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uQXJyYXkgPSBbMTAuMTI4LCAyLjgzMiwgNC4xMjgsIDQuNjA4LCA3LjYwOCwgMy44ODgsIDQuMDU2LCAzLjU3NiwgMi4yNTYsIDUuNDk2LCA0LjcyOCwgOC4xODRcclxuICAgICAgICAgICAgLCA2LjE2OCwgMS45OTIsIDIuODMyLCA0LjYwOCwgNi42OTYsIDQuNTEyLCA0LjQxNiwgMy40NTYsIDUuMTEyLCA3LjIsIDUuMjMyLCA2LjA3Ml07XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IFsxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLjUsIDEsIDEsIDEuNSwgMS41XTtcclxuICAgICAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgICAgICAgXCJUb2RheSwgd2Ugd2lsbCBsZWFybiBob3cgdG8gYWRkIGEgMi1kaWdpdCBudW1iZXIgd2l0aCBhIDEtZGlnaXQgbnVtYmVyIHdpdGggY2Fycnkgb3Zlci4gVGhlcmUgYXJlIHZhcmlvdXMgbWV0aG9kcyB0byBkbyB0aGlzOlwiLFxyXG4gICAgICAgICAgICBcIk1ldGhvZCAxOiBVc2luZyBiYXNlIHRlbiBibG9ja3NcIixcclxuICAgICAgICAgICAgXCJMZXQgdXMgbG9vayBhdCB0aGUgYWRkaXRpb24gb2YgMjcgYW5kIDYuXCIsXHJcbiAgICAgICAgICAgIFwiT24gYWRkaW5nIHRoZSB0ZW5zIHdpdGggdGVucyBhbmQgb25lcyB3aXRoIG9uZXMsIHdlIGdldDpcIixcclxuICAgICAgICAgICAgXCIyIHRlbnMgKyAxMyBvbmVzICg3IG9uZXMgKyA2IG9uZXMpIGdpdmUgdXMgMTMgb25lcy5cIixcclxuICAgICAgICAgICAgXCJTaW5jZSAxMyBvbmVzIGlzIDEgdGVucyBhbmQgMyBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIjIgdGVucyArIDEgdGVucyA9IDMgdGVucy5cIixcclxuICAgICAgICAgICAgXCJTbyB0aGUgdG90YWwgaXMgMyB0ZW5zIGFuZCAzIG9uZXNcIixcclxuICAgICAgICAgICAgXCJNZXRob2QgMjogQ29sdW1uIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICBcIlRvIGFkZCAyNyBhbmQgNiwgZmlyc3Qgd3JpdGUgdGhlIG51bWJlcnMgaW4gdGhlIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIlRoZW4gYWRkIHRoZSBvbmVzLCA3ICsgNiA9IDEzLlwiLFxyXG4gICAgICAgICAgICBcIkNhcnJ5IG92ZXIgdGhlIDEgdG8gdGVucyBwbGFjZSBhbmQgdGhlbiBhZGQsIDIgKyAxIChjYXJyaWVkIG92ZXIpID0gMy5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiAyNyArIDYgPSAzMy5cIixcclxuICAgICAgICAgICAgXCJMZXQncyB0cnkgYW5vdGhlciBvbmUhXCIsXHJcbiAgICAgICAgICAgIFwiQWRkaXRpb24gb2YgNDUgYW5kIDkuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDE6IFVzaW5nIEJhc2UgVGVuIEJsb2Nrc1wiLFxyXG4gICAgICAgICAgICBcIk9uIGFkZGluZyB0aGUgdGVucyB3aXRoIHRlbnMgYW5kIG9uZXMgd2l0aCBvbmVzLCB3ZSBnZXQ6XCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMTQgb25lcyAoOSBvbmVzICsgNSBvbmVzKSBnaXZlIHVzIDE0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiU2luY2UgMTQgb25lcyA9IDEgdGVuIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMSB0ZW5zID0gNSB0ZW5zLlwiLFxyXG4gICAgICAgICAgICBcIlRoZSB0b3RhbCBpczogNSB0ZW5zIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDI6IENvbHVtbiBNZXRob2RcIixcclxuICAgICAgICAgICAgXCJUbyBhZGQgNDUgYW5kIDksIGZpcnN0IHdyaXRlIHRoZSBudW1iZXJzIGluIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIkFkZCB0aGUgb25lczogNSArIDkgPSAxNCAod3JpdGUgNCwgY2FycnkgZm9yd2FyZCAxKS5cIixcclxuICAgICAgICAgICAgXCJBZGQgdGhlIHRlbnM6IDQgKyAxIChjYXJyaWVkIG92ZXIpID0gNS5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiA0NSArIDkgPSA1NC5cIlxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUZXh0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEludHJvKys7XHJcbiAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxDdXJyZW50VGV4dCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEludHJvLCBcIi0tXCIsIHRoaXMuZHVyYXRpb25BcnJheVt0aGlzLmN1cnJlbnRJbnRyb10sIHRoaXMuZGVsYXlbdGhpcy5jdXJyZW50SW50cm9dKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW50cm8gPT0gdGhpcy5UZXh0QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLmR1cmF0aW9uQXJyYXlbdGhpcy5jdXJyZW50SW50cm9dICsgdGhpcy5kZWxheVt0aGlzLmN1cnJlbnRJbnRyb10pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsRW5kKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leGl0Vk8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW1cIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0sIDIuNSlcclxuICAgIH1cclxufVxyXG4iXX0=
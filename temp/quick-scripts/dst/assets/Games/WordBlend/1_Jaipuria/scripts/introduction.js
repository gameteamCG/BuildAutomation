
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/1_Jaipuria/scripts/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/WordBlend/1_Jaipuria/scripts/introduction.ts

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
            _this.richText.string = "પરિવારના સભ્યો";
            _this.node.getChildByName("1").active = false;
            _this.node.getChildByName("2").active = true;
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.ExplanationVos[2], false);
                _this.richText.string = "👨 Father – પરિવારનું ધ્યાન રાખે છે.";
                _this.node.getChildByName("2").active = false;
                _this.node.getChildByName("3").active = true;
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.ExplanationVos[3], false);
                    _this.richText.string = "👩 Mother - બધાનો પ્રેમ અને કાળજી રાખે છે.";
                    _this.node.getChildByName("3").active = false;
                    _this.node.getChildByName("4").active = true;
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.ExplanationVos[4], false);
                        _this.richText.string = "👦 Brother - મારો ભાઈ મારો મિત્ર છે.";
                        _this.node.getChildByName("4").active = false;
                        _this.node.getChildByName("5").active = true;
                        _this.scheduleOnce(function () {
                            cc.audioEngine.playEffect(_this.ExplanationVos[5], false);
                            _this.richText.string = "👧 Sister - મારી બહેન મારી મિત્ર છે.";
                            _this.node.getChildByName("5").active = false;
                            _this.node.getChildByName("6").active = true;
                            _this.scheduleOnce(function () {
                                cc.audioEngine.playEffect(_this.ExplanationVos[6], false);
                                _this.richText.string = "👴 Grandfather - વાર્તાઓ કહે છે અને શીખવે છે.";
                                _this.node.getChildByName("6").active = false;
                                _this.node.getChildByName("7").active = true;
                                _this.scheduleOnce(function () {
                                    cc.audioEngine.playEffect(_this.ExplanationVos[7], false);
                                    _this.richText.string = "👵 Grandmother - પ્રેમ અને કાળજી લે છે.";
                                    _this.node.getChildByName("7").active = false;
                                    _this.node.getChildByName("8").active = true;
                                    _this.scheduleOnce(function () {
                                        cc.audioEngine.playEffect(_this.ExplanationVos[8], false);
                                        _this.richText.string = "અમારું કુટુંબ ખાસ અને મહત્વપૂર્ણ છે!";
                                        _this.node.getChildByName("8").active = false;
                                        _this.node.getChildByName("9").active = true;
                                        _this.scheduleOnce(function () {
                                            _this.callEnd();
                                        }, _this.ExplanationVos[8].duration);
                                    }, _this.ExplanationVos[7].duration);
                                }, _this.ExplanationVos[6].duration);
                            }, _this.ExplanationVos[5].duration);
                        }, _this.ExplanationVos[4].duration);
                    }, _this.ExplanationVos[3].duration);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9Xb3JkQmxlbmQvMV9KYWlwdXJpYS9zY3JpcHRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNMQztRQXBMRyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFHcEMsWUFBTSxHQUFpQixJQUFJLENBQUE7UUFHM0IsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUVyQixlQUFTLEdBQWEsRUFBRSxDQUFBOztJQW9LNUIsQ0FBQztJQWxLRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUNuRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcs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Q0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsNENBQTRDLENBQUM7b0JBQ3BFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsc0NBQXNDLENBQUM7d0JBQzlELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsc0NBQXNDLENBQUM7NEJBQzlELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0NBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQ0FDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsK0NBQStDLENBQUM7Z0NBQ3ZFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0NBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0NBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0NBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQ0FDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcseUNBQXlDLENBQUM7b0NBQ2pFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0NBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0NBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUM7d0NBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3Q0FDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsc0NBQXNDLENBQUM7d0NBQzlELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0NBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxD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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ0k7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTztJQUc3QjtRQURDLFFBQVE7aURBQ2lCO0lBWFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNMNUI7SUFBRCxlQUFDO0NBdExELEFBc0xDLENBdExxQyxFQUFFLENBQUMsU0FBUyxHQXNMakQ7a0JBdExvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBFeHBsYW5hdGlvblZvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR5cGluZ1NwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudEludHJvOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBkdXJhdGlvbkFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZGVsYXk6IG51bWJlcltdID0gW107XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uQXJyYXkgPSBbMTAuMTI4LCAyLjgzMiwgNC4xMjgsIDQuNjA4LCA3LjYwOCwgMy44ODgsIDQuMDU2LCAzLjU3NiwgMi4yNTYsIDUuNDk2LCA0LjcyOCwgOC4xODRcclxuICAgICAgICAgICAgLCA2LjE2OCwgMS45OTIsIDIuODMyLCA0LjYwOCwgNi42OTYsIDQuNTEyLCA0LjQxNiwgMy40NTYsIDUuMTEyLCA3LjIsIDUuMjMyLCA2LjA3Ml07XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IFsxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLCAxLCAxLCAxLjUsIDEuNSwgMS41LCAxLjUsIDEuNSwgMS41LCAxLjUsIDEsIDEsIDEuNSwgMS41XTtcclxuICAgICAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgICAgICAgXCJUb2RheSwgd2Ugd2lsbCBsZWFybiBob3cgdG8gYWRkIGEgMi1kaWdpdCBudW1iZXIgd2l0aCBhIDEtZGlnaXQgbnVtYmVyIHdpdGggY2Fycnkgb3Zlci4gVGhlcmUgYXJlIHZhcmlvdXMgbWV0aG9kcyB0byBkbyB0aGlzOlwiLFxyXG4gICAgICAgICAgICBcIk1ldGhvZCAxOiBVc2luZyBiYXNlIHRlbiBibG9ja3NcIixcclxuICAgICAgICAgICAgXCJMZXQgdXMgbG9vayBhdCB0aGUgYWRkaXRpb24gb2YgMjcgYW5kIDYuXCIsXHJcbiAgICAgICAgICAgIFwiT24gYWRkaW5nIHRoZSB0ZW5zIHdpdGggdGVucyBhbmQgb25lcyB3aXRoIG9uZXMsIHdlIGdldDpcIixcclxuICAgICAgICAgICAgXCIyIHRlbnMgKyAxMyBvbmVzICg3IG9uZXMgKyA2IG9uZXMpIGdpdmUgdXMgMTMgb25lcy5cIixcclxuICAgICAgICAgICAgXCJTaW5jZSAxMyBvbmVzIGlzIDEgdGVucyBhbmQgMyBvbmVzLlwiLFxyXG4gICAgICAgICAgICBcIjIgdGVucyArIDEgdGVucyA9IDMgdGVucy5cIixcclxuICAgICAgICAgICAgXCJTbyB0aGUgdG90YWwgaXMgMyB0ZW5zIGFuZCAzIG9uZXNcIixcclxuICAgICAgICAgICAgXCJNZXRob2QgMjogQ29sdW1uIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICBcIlRvIGFkZCAyNyBhbmQgNiwgZmlyc3Qgd3JpdGUgdGhlIG51bWJlcnMgaW4gdGhlIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIlRoZW4gYWRkIHRoZSBvbmVzLCA3ICsgNiA9IDEzLlwiLFxyXG4gICAgICAgICAgICBcIkNhcnJ5IG92ZXIgdGhlIDEgdG8gdGVucyBwbGFjZSBhbmQgdGhlbiBhZGQsIDIgKyAxIChjYXJyaWVkIG92ZXIpID0gMy5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiAyNyArIDYgPSAzMy5cIixcclxuICAgICAgICAgICAgXCJMZXQncyB0cnkgYW5vdGhlciBvbmUhXCIsXHJcbiAgICAgICAgICAgIFwiQWRkaXRpb24gb2YgNDUgYW5kIDkuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDE6IFVzaW5nIEJhc2UgVGVuIEJsb2Nrc1wiLFxyXG4gICAgICAgICAgICBcIk9uIGFkZGluZyB0aGUgdGVucyB3aXRoIHRlbnMgYW5kIG9uZXMgd2l0aCBvbmVzLCB3ZSBnZXQ6XCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMTQgb25lcyAoOSBvbmVzICsgNSBvbmVzKSBnaXZlIHVzIDE0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiU2luY2UgMTQgb25lcyA9IDEgdGVuIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIFwiNCB0ZW5zICsgMSB0ZW5zID0gNSB0ZW5zLlwiLFxyXG4gICAgICAgICAgICBcIlRoZSB0b3RhbCBpczogNSB0ZW5zIGFuZCA0IG9uZXMuXCIsXHJcbiAgICAgICAgICAgIC8vIFwiTWV0aG9kIDI6IENvbHVtbiBNZXRob2RcIixcclxuICAgICAgICAgICAgXCJUbyBhZGQgNDUgYW5kIDksIGZpcnN0IHdyaXRlIHRoZSBudW1iZXJzIGluIGNvbHVtbiBmb3JtLlwiLFxyXG4gICAgICAgICAgICBcIkFkZCB0aGUgb25lczogNSArIDkgPSAxNCAod3JpdGUgNCwgY2FycnkgZm9yd2FyZCAxKS5cIixcclxuICAgICAgICAgICAgXCJBZGQgdGhlIHRlbnM6IDQgKyAxIChjYXJyaWVkIG92ZXIpID0gNS5cIixcclxuICAgICAgICAgICAgXCJTbywgdGhlIHRvdGFsIGlzOiA0NSArIDkgPSA1NC5cIlxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVzZXRUZXh0KCkge1xyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEludHJvKys7XHJcbiAgICAvLyAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gJyc7XHJcbiAgICAvLyAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNhbGxDdXJyZW50VGV4dCgpIHtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEludHJvLCBcIi0tXCIsIHRoaXMuZHVyYXRpb25BcnJheVt0aGlzLmN1cnJlbnRJbnRyb10sIHRoaXMuZGVsYXlbdGhpcy5jdXJyZW50SW50cm9dKVxyXG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50SW50cm8gPT0gdGhpcy5UZXh0QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LCB0aGlzLmR1cmF0aW9uQXJyYXlbdGhpcy5jdXJyZW50SW50cm9dICsgdGhpcy5kZWxheVt0aGlzLmN1cnJlbnRJbnRyb10pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwi4Kqq4Kqw4Kq/4Kq14Kq+4Kqw4Kqo4Kq+IOCquOCqreCrjeCqr+Cri1wiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIvCfkaggRmF0aGVyIOKAkyDgqqrgqrDgqr/gqrXgqr7gqrDgqqjgq4HgqoIg4Kqn4KuN4Kqv4Kq+4KqoIOCqsOCqvuCqluCrhyDgqpvgq4cuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiM1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1szXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCLwn5GpIE1vdGhlciAtIOCqrOCqp+CqvuCqqOCriyDgqqrgq43gqrDgq4fgqq4g4KqF4Kqo4KuHIOCqleCqvuCqs+CqnOCrgCDgqrDgqr7gqpbgq4cg4Kqb4KuHLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiNFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzRdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCLwn5GmIEJyb3RoZXIgLSDgqq7gqr7gqrDgq4sg4Kqt4Kq+4KqIIOCqruCqvuCqsOCriyDgqq7gqr/gqqTgq43gqrAg4Kqb4KuHLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1s1XSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIvCfkacgU2lzdGVyIC0g4Kqu4Kq+4Kqw4KuAIOCqrOCqueCrh+CqqCDgqq7gqr7gqrDgq4Ag4Kqu4Kq/4Kqk4KuN4KqwIOCqm+Crhy5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI2XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzZdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIvCfkbQgR3JhbmRmYXRoZXIgLSDgqrXgqr7gqrDgq43gqqTgqr7gqpMg4KqV4Kq54KuHIOCqm+CrhyDgqoXgqqjgq4cg4Kq24KuA4KqW4Kq14KuHIOCqm+Crhy5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI2XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1s3XSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwi8J+RtSBHcmFuZG1vdGhlciAtIOCqquCrjeCqsOCrh+CqriDgqoXgqqjgq4cg4KqV4Kq+4Kqz4Kqc4KuAIOCqsuCrhyDgqpvgq4cuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIjhcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzhdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwi4KqF4Kqu4Kq+4Kqw4KuB4KqCIOCqleCrgeCqn+CrgeCqguCqrCDgqpbgqr7gqrgg4KqF4Kqo4KuHIOCqruCqueCqpOCrjeCqteCqquCrguCqsOCrjeCqoyDgqpvgq4chXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI4XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiOVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1s4XS5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzddLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1s2XS5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1s1XS5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzRdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzNdLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzJdLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMF0uZHVyYXRpb24pO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgICAgLy8gfSwgdGhpcy5FeHBsYW5hdGlvblZvc1swXS5kdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEVuZCgpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhpdFZPLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBza2lwR2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxufVxyXG4iXX0=
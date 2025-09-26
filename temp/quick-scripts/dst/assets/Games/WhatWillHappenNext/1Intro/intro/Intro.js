
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/1Intro/intro/Intro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84546KsNtNL2p147Q6HDlKs', 'Intro');
// Games/WhatWillHappenNext/1Intro/intro/Intro.ts

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
        _this.IntroVO = null;
        _this.ExplanationVos = [];
        _this.ExplanationVos2 = [];
        _this.ExplanationVos3 = [];
        _this.examples = [];
        _this.richText = null;
        _this.TextArray = [];
        _this.typingSpeed = 0.1;
        _this.currentIndex = 0;
        _this.currentText = '';
        _this.currentAnimal = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.TextArray = [
            "There are a few properties or rules we should remember in addition.",
            "Property 1: On adding 1 to any number, we get the number that is next to it in counting.It is also known as the successor of that number.",
            "For example: 4 + 1 = 5. (5 is the successor of 4).",
            "7 + 1 = 8. (8 is the successor of 7).",
            "Property 2: On adding 0 to any number, the number remains the same.",
            "4 + 0 = 4.",
            "9 + 0 = 9.",
            "Property 3: On adding two numbers in any order, the results remain the same.",
            "2 + 1 = 3 or 1 + 2 = 3.",
            "5 + 3 = 8 or 3 + 5 = 8."
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
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
        this.unschedule(this.typeLetter);
    };
    NewClass.prototype.start = function () {
        this.StartIntro();
    };
    NewClass.prototype.StartIntro = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.IntroVO, false);
        this.text = this.TextArray[0];
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            _this.resetText();
            _this.scheduleOnce(function () {
                _this.Intro1();
            }, 1);
        }, this.IntroVO.duration + 1.5);
    };
    NewClass.prototype.Intro1 = function () {
        var _this = this;
        this.examples[this.currentAnimal].children[0].active = true;
        this.resetText();
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.text = "Birds are animals we often see flying in the sky.";
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            _this.resetText();
            _this.text = "They have wings and feathers, and most birds can fly.";
            _this.schedule(_this.typeLetter, _this.typingSpeed);
            cc.audioEngine.playEffect(_this.ExplanationVos[1], false);
            _this.examples[_this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(_this.examples[_this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                _this.examples[_this.currentAnimal].getChildByName("arrow2").active = true;
                cc.tween(_this.examples[_this.currentAnimal].getChildByName("2"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            }, 0.7);
            _this.scheduleOnce(function () {
                _this.resetText();
                cc.audioEngine.playEffect(_this.ExplanationVos[2], false);
                _this.text = "Birds eat with their beaks because they don't have teeth.";
                _this.schedule(_this.typeLetter, _this.typingSpeed);
                _this.examples[_this.currentAnimal].getChildByName("arrow3").active = true;
                cc.tween(_this.examples[_this.currentAnimal].getChildByName("3"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    _this.resetText();
                    _this.text = "They also have two legs. Not all birds can fly.";
                    _this.schedule(_this.typeLetter, _this.typingSpeed);
                    cc.audioEngine.playEffect(_this.ExplanationVos[3], false);
                    _this.examples[_this.currentAnimal].getChildByName("arrow4").active = true;
                    cc.tween(_this.examples[_this.currentAnimal].getChildByName("4"))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        _this.resetText();
                        _this.text = "Sparrow and pigeon are some examples of birds.";
                        _this.schedule(_this.typeLetter, _this.typingSpeed);
                        cc.audioEngine.playEffect(_this.ExplanationVos[4], false);
                        _this.examples[_this.currentAnimal].active = false;
                        cc.tween(_this.node.getChildByName("examples1").children[0])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node.getChildByName("examples1").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        _this.scheduleOnce(function () {
                            cc.tween(_this.node.getChildByName("examples1").children[1])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                            cc.tween(_this.node.getChildByName("examples1").children[3])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        }, 1);
                        _this.scheduleOnce(function () {
                            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            _this.examples[_this.currentAnimal].active = false;
                            _this.currentAnimal++;
                            _this.resetText();
                            _this.Intro2();
                        }, _this.ExplanationVos[4].duration + 1.3);
                    }, _this.ExplanationVos[3].duration + 0.3);
                }, _this.ExplanationVos[2].duration + 1.3);
            }, _this.ExplanationVos[1].duration + 1.3);
        }, this.ExplanationVos[0].duration + 1);
    };
    NewClass.prototype.Intro2 = function () {
        var _this = this;
        this.examples[this.currentAnimal].active = true;
        this.node.getChildByName("examples1").active = false;
        this.examples[this.currentAnimal].children[0].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.resetText();
        cc.audioEngine.playEffect(this.ExplanationVos2[0], false);
        this.text = "Insects are tiny animals with six legs.";
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            _this.examples[_this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(_this.examples[_this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }, 2);
        this.scheduleOnce(function () {
            _this.resetText();
            cc.audioEngine.playEffect(_this.ExplanationVos2[1], false);
            _this.text = "Some insects have wings and can fly.";
            _this.schedule(_this.typeLetter, _this.typingSpeed);
            _this.examples[_this.currentAnimal].getChildByName("arrow2").active = true;
            cc.tween(_this.examples[_this.currentAnimal].getChildByName("2"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                _this.resetText();
                cc.audioEngine.playEffect(_this.ExplanationVos2[3], false);
                _this.text = "Mosquito, beetle and ant are some examples of insects.";
                _this.schedule(_this.typeLetter, _this.typingSpeed);
                _this.examples[_this.currentAnimal].active = false;
                cc.tween(_this.node.getChildByName("examples2").children[0])
                    .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                cc.tween(_this.node.getChildByName("examples2").children[3])
                    .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    cc.tween(_this.node.getChildByName("examples2").children[1])
                        .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    cc.tween(_this.node.getChildByName("examples2").children[4])
                        .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        cc.tween(_this.node.getChildByName("examples2").children[2])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node.getChildByName("examples2").children[5])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                    }, 1);
                }, 1.5);
                _this.scheduleOnce(function () {
                    _this.node.getChildByName("examples2").active = false;
                    _this.resetText();
                    cc.audioEngine.playEffect(_this.ExplanationVos2[2], false);
                    _this.text = "Animals like spiders and ticks are not insects, since they have eight legs.";
                    _this.schedule(_this.typeLetter, _this.typingSpeed);
                    _this.scheduleOnce(function () {
                        _this.examples[_this.currentAnimal].active = false;
                        cc.tween(_this.node.getChildByName("examples4").children[0])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node.getChildByName("examples4").children[2])
                            .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        _this.scheduleOnce(function () {
                            cc.tween(_this.node.getChildByName("examples4").children[1])
                                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                            cc.tween(_this.node.getChildByName("examples4").children[3])
                                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
                        }, 0.7);
                    }, 1);
                    _this.scheduleOnce(function () {
                        _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        _this.examples[_this.currentAnimal].active = false;
                        _this.currentAnimal++;
                        _this.resetText();
                        _this.Intro3();
                    }, _this.ExplanationVos2[2].duration + 1);
                }, _this.ExplanationVos2[3].duration + 1);
            }, _this.ExplanationVos2[1].duration + 0.7);
        }, this.ExplanationVos2[0].duration + 0.7);
    };
    NewClass.prototype.Intro3 = function () {
        var _this = this;
        this.examples[this.currentAnimal].active = true;
        this.node.getChildByName("examples4").active = false;
        this.examples[this.currentAnimal].children[0].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.resetText();
        this.text = "Reptiles are animals with scales instead of hair or feathers.";
        this.schedule(this.typeLetter, this.typingSpeed);
        cc.audioEngine.playEffect(this.ExplanationVos3[0], false);
        this.scheduleOnce(function () {
            _this.examples[_this.currentAnimal].getChildByName("arrow1").active = true;
            cc.tween(_this.examples[_this.currentAnimal].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        }, 2);
        this.scheduleOnce(function () {
            _this.resetText();
            _this.text = "They live in many places, like on land, in trees, underground, or in water.";
            _this.schedule(_this.typeLetter, _this.typingSpeed);
            cc.audioEngine.playEffect(_this.ExplanationVos3[1], false);
            _this.examples[_this.currentAnimal].active = false;
            _this.node.getChildByName("exmaples5").active = true;
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("exmaples5").children[0])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                cc.tween(_this.node.getChildByName("exmaples5").children[4])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    cc.tween(_this.node.getChildByName("exmaples5").children[1])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    cc.tween(_this.node.getChildByName("exmaples5").children[5])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        cc.tween(_this.node.getChildByName("exmaples5").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node.getChildByName("exmaples5").children[6])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        _this.scheduleOnce(function () {
                            cc.tween(_this.node.getChildByName("exmaples5").children[3])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                            cc.tween(_this.node.getChildByName("exmaples5").children[7])
                                .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        }, 1);
                    }, 1);
                }, 1.5);
            }, 2);
            _this.scheduleOnce(function () {
                _this.node.getChildByName("exmaples5").active = false;
                _this.resetText();
                _this.text = "Snake, crocodile and lizard are some examples of reptiles.";
                _this.schedule(_this.typeLetter, _this.typingSpeed);
                cc.audioEngine.playEffect(_this.ExplanationVos3[2], false);
                _this.examples[_this.currentAnimal].active = false;
                cc.tween(_this.node.getChildByName("exmaples3").children[0])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                cc.tween(_this.node.getChildByName("exmaples3").children[3])
                    .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    cc.tween(_this.node.getChildByName("exmaples3").children[1])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    cc.tween(_this.node.getChildByName("exmaples3").children[4])
                        .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        cc.tween(_this.node.getChildByName("exmaples3").children[2])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node.getChildByName("exmaples3").children[5])
                            .to(0.5, { scale: 0.8 }, { easing: "sineInOut" }).start();
                    }, 1);
                }, 0.7);
                _this.scheduleOnce(function () {
                    _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    _this.scheduleOnce(function () {
                        _this.node.getChildByName("exmaples3").active = false;
                        _this.resetText();
                        _this.text = "Let's put to practice what we've just learnt.";
                        _this.schedule(_this.typeLetter, _this.typingSpeed);
                        _this.scheduleOnce(function () {
                            cc.director.loadScene("1");
                        }, 0.7);
                    }, 0.5);
                }, _this.ExplanationVos3[2].duration + 1);
            }, _this.ExplanationVos3[1].duration + 1);
        }, this.ExplanationVos3[0].duration + 1);
    };
    NewClass.prototype.skipGame = function (event) {
        cc.audioEngine.stopAllEffects();
        cc.director.loadScene("1");
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.unschedule(this.typeLetter);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "IntroVO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ExplanationVos", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ExplanationVos2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ExplanationVos3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "examples", void 0);
    __decorate([
        property(cc.Label)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcMUludHJvXFxpbnRyb1xcSW50cm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxVEM7UUFsVEcsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFHNUIsb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBR3BDLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUdyQyxxQkFBZSxHQUFtQixFQUFFLENBQUM7UUFHckMsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBYSxFQUFFLENBQUE7UUFFeEIsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFFbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBd1J0QyxDQUFDO0lBdFJHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IscUVBQXFFO1lBQ3JFLDJJQUEySTtZQUMzSSxvREFBb0Q7WUFDcEQsdUNBQXVDO1lBQ3ZDLHFFQUFxRTtZQUNyRSxZQUFZO1lBQ1osWUFBWTtZQUNaLDhFQUE4RTtZQUM5RSx5QkFBeUI7WUFDekIseUJBQXlCO1NBQzVCLENBQUE7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxJQUFJLElB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d0JBQ2pELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlELEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ3RELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDOUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ3RELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDbEUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUM7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VyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwRCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3RELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3RELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUQsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDdEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUM5RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDdEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUM5RCxLQUFJLENBQUMsWUFBWSxDQUFDOzRCQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQzlELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUN0RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2xFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtv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QUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaFREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0s7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDYTtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNjO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ2M7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBSzFCO1FBREMsUUFBUTtpREFDaUI7SUF2QlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFUNUI7SUFBRCxlQUFDO0NBclRELEFBcVRDLENBclRxQyxFQUFFLENBQUMsU0FBUyxHQXFUakQ7a0JBclRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBJbnRyb1ZPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEV4cGxhbmF0aW9uVm9zOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBFeHBsYW5hdGlvblZvczI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEV4cGxhbmF0aW9uVm9zMzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGV4YW1wbGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByaWNoVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIFRleHRBcnJheTogc3RyaW5nW10gPSBbXVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0eXBpbmdTcGVlZDogbnVtYmVyID0gMC4xO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEFuaW1hbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgICAgICAgXCJUaGVyZSBhcmUgYSBmZXcgcHJvcGVydGllcyBvciBydWxlcyB3ZSBzaG91bGQgcmVtZW1iZXIgaW4gYWRkaXRpb24uXCIsXHJcbiAgICAgICAgICAgIFwiUHJvcGVydHkgMTogT24gYWRkaW5nIDEgdG8gYW55IG51bWJlciwgd2UgZ2V0IHRoZSBudW1iZXIgdGhhdCBpcyBuZXh0IHRvIGl0IGluIGNvdW50aW5nLkl0IGlzIGFsc28ga25vd24gYXMgdGhlIHN1Y2Nlc3NvciBvZiB0aGF0IG51bWJlci5cIixcclxuICAgICAgICAgICAgXCJGb3IgZXhhbXBsZTogNCArIDEgPSA1LiAoNSBpcyB0aGUgc3VjY2Vzc29yIG9mIDQpLlwiLFxyXG4gICAgICAgICAgICBcIjcgKyAxID0gOC4gKDggaXMgdGhlIHN1Y2Nlc3NvciBvZiA3KS5cIixcclxuICAgICAgICAgICAgXCJQcm9wZXJ0eSAyOiBPbiBhZGRpbmcgMCB0byBhbnkgbnVtYmVyLCB0aGUgbnVtYmVyIHJlbWFpbnMgdGhlIHNhbWUuXCIsXHJcbiAgICAgICAgICAgIFwiNCArIDAgPSA0LlwiLFxyXG4gICAgICAgICAgICBcIjkgKyAwID0gOS5cIixcclxuICAgICAgICAgICAgXCJQcm9wZXJ0eSAzOiBPbiBhZGRpbmcgdHdvIG51bWJlcnMgaW4gYW55IG9yZGVyLCB0aGUgcmVzdWx0cyByZW1haW4gdGhlIHNhbWUuXCIsXHJcbiAgICAgICAgICAgIFwiMiArIDEgPSAzIG9yIDEgKyAyID0gMy5cIixcclxuICAgICAgICAgICAgXCI1ICsgMyA9IDggb3IgMyArIDUgPSA4LlwiXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUZXh0KCkge1xyXG4gICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuU3RhcnRJbnRybygpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0SW50cm8oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkludHJvVk8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVswXTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkludHJvMSgpO1xyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0sIHRoaXMuSW50cm9WTy5kdXJhdGlvbiArIDEuNSlcclxuICAgIH1cclxuXHJcbiAgICBJbnRybzEoKSB7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMF0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRleHQgPSBcIkJpcmRzIGFyZSBhbmltYWxzIHdlIG9mdGVuIHNlZSBmbHlpbmcgaW4gdGhlIHNreS5cIlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiVGhleSBoYXZlIHdpbmdzIGFuZCBmZWF0aGVycywgYW5kIG1vc3QgYmlyZHMgY2FuIGZseS5cIjtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiYXJyb3cxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5nZXRDaGlsZEJ5TmFtZShcImFycm93MlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiMlwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJCaXJkcyBlYXQgd2l0aCB0aGVpciBiZWFrcyBiZWNhdXNlIHRoZXkgZG9uJ3QgaGF2ZSB0ZWV0aC5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5nZXRDaGlsZEJ5TmFtZShcImFycm93M1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiM1wiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBcIlRoZXkgYWxzbyBoYXZlIHR3byBsZWdzLiBOb3QgYWxsIGJpcmRzIGNhbiBmbHkuXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzNdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiYXJyb3c0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiNFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJTcGFycm93IGFuZCBwaWdlb24gYXJlIHNvbWUgZXhhbXBsZXMgb2YgYmlyZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbNF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczFcIikuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhhbXBsZXMxXCIpLmNoaWxkcmVuWzJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzMVwiKS5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzMVwiKS5jaGlsZHJlblszXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW50cm8yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbNF0uZHVyYXRpb24gKyAxLjMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1szXS5kdXJhdGlvbiArIDAuMylcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMl0uZHVyYXRpb24gKyAxLjMpXHJcbiAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbMV0uZHVyYXRpb24gKyAxLjMpXHJcbiAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1swXS5kdXJhdGlvbiArIDEpXHJcbiAgICB9XHJcbiAgICBJbnRybzIoKSB7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhhbXBsZXMxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInRhbGsgYWN0aW9uIGxvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3MyWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gXCJJbnNlY3RzIGFyZSB0aW55IGFuaW1hbHMgd2l0aCBzaXggbGVncy5cIlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5nZXRDaGlsZEJ5TmFtZShcImFycm93MVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEFuaW1hbF0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3MyWzFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiU29tZSBpbnNlY3RzIGhhdmUgd2luZ3MgYW5kIGNhbiBmbHkuXCJcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEFuaW1hbF0uZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvdzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiMlwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvczJbM10sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiTW9zcXVpdG8sIGJlZXRsZSBhbmQgYW50IGFyZSBzb21lIGV4YW1wbGVzIG9mIGluc2VjdHMuXCJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzMlwiKS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzMlwiKS5jaGlsZHJlblszXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczJcIikuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzMlwiKS5jaGlsZHJlbls0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczJcIikuY2hpbGRyZW5bMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhhbXBsZXMyXCIpLmNoaWxkcmVuWzVdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgIH0sIDEuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3MyWzJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJBbmltYWxzIGxpa2Ugc3BpZGVycyBhbmQgdGlja3MgYXJlIG5vdCBpbnNlY3RzLCBzaW5jZSB0aGV5IGhhdmUgZWlnaHQgbGVncy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhhbXBsZXM0XCIpLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzNFwiKS5jaGlsZHJlblsyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczRcIikuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleGFtcGxlczRcIikuY2hpbGRyZW5bM10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbnRybzMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zMlsyXS5kdXJhdGlvbiArIDEpXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zMlszXS5kdXJhdGlvbiArIDEpXHJcbiAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3MyWzFdLmR1cmF0aW9uICsgMC43KVxyXG4gICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3MyWzBdLmR1cmF0aW9uICsgMC43KVxyXG4gICAgfVxyXG4gICAgSW50cm8zKCkge1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4YW1wbGVzNFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEFuaW1hbF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gXCJSZXB0aWxlcyBhcmUgYW5pbWFscyB3aXRoIHNjYWxlcyBpbnN0ZWFkIG9mIGhhaXIgb3IgZmVhdGhlcnMuXCJcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zM1swXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRBbmltYWxdLmdldENoaWxkQnlOYW1lKFwiYXJyb3cxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiVGhleSBsaXZlIGluIG1hbnkgcGxhY2VzLCBsaWtlIG9uIGxhbmQsIGluIHRyZWVzLCB1bmRlcmdyb3VuZCwgb3IgaW4gd2F0ZXIuXCJcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3MzWzFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhtYXBsZXM1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzNVwiKS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzNVwiKS5jaGlsZHJlbls0XSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleG1hcGxlczVcIikuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzNVwiKS5jaGlsZHJlbls1XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleG1hcGxlczVcIikuY2hpbGRyZW5bMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhtYXBsZXM1XCIpLmNoaWxkcmVuWzZdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzNVwiKS5jaGlsZHJlblszXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzNVwiKS5jaGlsZHJlbls3XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleG1hcGxlczVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJTbmFrZSwgY3JvY29kaWxlIGFuZCBsaXphcmQgYXJlIHNvbWUgZXhhbXBsZXMgb2YgcmVwdGlsZXMuXCJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvczNbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50QW5pbWFsXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzM1wiKS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzM1wiKS5jaGlsZHJlblszXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleG1hcGxlczNcIikuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4bWFwbGVzM1wiKS5jaGlsZHJlbls0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJleG1hcGxlczNcIikuY2hpbGRyZW5bMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhtYXBsZXMzXCIpLmNoaWxkcmVuWzVdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZXhtYXBsZXMzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBcIkxldCdzIHB1dCB0byBwcmFjdGljZSB3aGF0IHdlJ3ZlIGp1c3QgbGVhcm50LlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zM1syXS5kdXJhdGlvbiArIDEpXHJcbiAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3MzWzFdLmR1cmF0aW9uICsgMSlcclxuICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zM1swXS5kdXJhdGlvbiArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEdhbWUoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICB9XHJcblxyXG59Il19
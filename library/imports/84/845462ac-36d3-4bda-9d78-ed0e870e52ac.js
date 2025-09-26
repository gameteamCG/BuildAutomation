"use strict";
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
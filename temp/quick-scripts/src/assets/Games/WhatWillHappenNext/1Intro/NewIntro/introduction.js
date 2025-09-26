"use strict";
cc._RF.push(module, 'be6f0VDQkxETbFzmSnqFMB2', 'introduction');
// Games/WhatWillHappenNext/1Intro/NewIntro/introduction.ts

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
        _this.exitVO = null;
        _this.ExplanationVos = [];
        _this.examples = [];
        _this.richText = null;
        _this.typingSpeed = 0.1;
        _this.currentIndex = 0;
        _this.currentText = '';
        _this.currentIntro = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.text = [
            "We measure things to know how heavy-light, tall-short, thick-thin, or more-less they are. There are many ways to measure things. Let us learn about them.",
            "The capacity of an object refers to the maximum amount that it can hold.",
            "For example: This jug can hold 3 bottles of water, making it capable of holding more water than each individual bottle.",
            "Let's consider another example: There are 4 different containers - a can, bottle, glass and jug.",
            "Which container holds the least amount of milk?",
            "The answer is the glass, as its capacity is smaller than the rest.",
            "Which container holds the maximum amount of milk?",
            "The can holds the most, as its capacity is the largest among the four.",
            "Which container has the second-largest capacity?",
            "The jug has the second-largest capacity after the can."
        ];
    };
    NewClass.prototype.typeLetter = function () {
        if (this.currentIndex < this.text[this.currentIntro].length) {
            this.currentText += this.text[this.currentIntro][this.currentIndex];
            this.richText.string = this.currentText;
            this.currentIndex++;
        }
        else {
            this.unschedule(this.typeLetter);
        }
    };
    NewClass.prototype.resetText = function () {
        this.currentIntro++;
        console.log(this.currentIntro);
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
    };
    NewClass.prototype.start = function () {
        this.Intro1();
    };
    NewClass.prototype.Intro1 = function () {
        var _this = this;
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            cc.tween(_this.examples[_this.currentIntro].getChildByName("1").children[0])
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                cc.tween(_this.examples[_this.currentIntro].getChildByName("1").children[1])
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    _this.examples[_this.currentIntro].getChildByName("1").active = false;
                    cc.tween(_this.examples[_this.currentIntro].getChildByName("2").children[0])
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        cc.tween(_this.examples[_this.currentIntro].getChildByName("2").children[1])
                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                        _this.scheduleOnce(function () {
                            _this.examples[_this.currentIntro].getChildByName("2").active = false;
                            cc.tween(_this.examples[_this.currentIntro].getChildByName("3").children[0])
                                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                            _this.scheduleOnce(function () {
                                cc.tween(_this.examples[_this.currentIntro].getChildByName("3").children[1])
                                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                _this.scheduleOnce(function () {
                                    _this.examples[_this.currentIntro].getChildByName("3").active = false;
                                    cc.tween(_this.examples[_this.currentIntro].getChildByName("4").children[0])
                                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                    _this.scheduleOnce(function () {
                                        cc.tween(_this.examples[_this.currentIntro].getChildByName("4").children[1])
                                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                                        _this.scheduleOnce(function () {
                                            _this.examples[_this.currentIntro].getChildByName("4").active = false;
                                            _this.scheduleOnce(function () {
                                                _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                                _this.examples[_this.currentIntro].active = false;
                                                _this.resetText();
                                                _this.Intro2();
                                            }, 5);
                                        }, 1);
                                    }, 0.5);
                                }, 1);
                            }, 0.5);
                        }, 1);
                    }, 0.5);
                }, 1.5);
            }, 0.5);
        }, 1.7);
    };
    NewClass.prototype.Intro2 = function () {
        var _this = this;
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            _this.examples[_this.currentIntro].active = false;
            _this.resetText();
            _this.Intro3();
        }, this.ExplanationVos[this.currentIntro].duration + 0.5);
    };
    NewClass.prototype.Intro3 = function () {
        var _this = this;
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            cc.tween(_this.examples[_this.currentIntro].getChildByName("1"))
                .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                cc.tween(_this.examples[_this.currentIntro].getChildByName("2"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    _this.examples[_this.currentIntro].getChildByName("3").children.forEach(function (elem) {
                        cc.tween(elem)
                            .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    });
                    _this.scheduleOnce(function () {
                        _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        _this.examples[_this.currentIntro].active = false;
                        _this.resetText();
                        _this.Intro4();
                    }, _this.ExplanationVos[_this.currentIntro].duration - 2);
                }, 1);
            }, 0.5);
        }, 0.8);
    };
    NewClass.prototype.Intro4 = function () {
        var _this = this;
        this.examples[this.currentIntro].active = true;
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        cc.audioEngine.playEffect(this.ExplanationVos[this.currentIntro], false);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            cc.tween(_this.examples[_this.currentIntro].getChildByName("1"))
                .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                cc.tween(_this.examples[_this.currentIntro].getChildByName("2"))
                    .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                _this.scheduleOnce(function () {
                    cc.tween(_this.examples[_this.currentIntro].getChildByName("3"))
                        .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        cc.tween(_this.examples[_this.currentIntro].getChildByName("4"))
                            .to(0.5, { scale: 1.3 }, { easing: "sineInOut" }).start();
                        _this.scheduleOnce(function () {
                            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            _this.resetText();
                            _this.Intro5();
                        }, 2.5);
                    }, 0.8);
                }, 0.5);
            }, 0.5);
        }, 5);
    };
    NewClass.prototype.Intro5 = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.ExplanationVos[4], false);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.schedule(this.typeLetter, this.typingSpeed);
        this.scheduleOnce(function () {
            _this.resetText();
            _this.schedule(_this.typeLetter, _this.typingSpeed);
            cc.audioEngine.playEffect(_this.ExplanationVos[5], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.examples[3].getChildByName("3").children[0])
                    .to(0.3, { scale: 1.4 }, { easing: "sineInOut" })
                    .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                    .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                    .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    _this.resetText();
                    _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
                    _this.schedule(_this.typeLetter, _this.typingSpeed);
                    cc.audioEngine.playEffect(_this.ExplanationVos[6], false);
                    _this.scheduleOnce(function () {
                        _this.resetText();
                        _this.schedule(_this.typeLetter, _this.typingSpeed);
                        cc.audioEngine.playEffect(_this.ExplanationVos[7], false);
                        _this.scheduleOnce(function () {
                            cc.tween(_this.examples[3].getChildByName("1").children[0])
                                .to(0.3, { scale: 1.3 }, { easing: "sineInOut" })
                                .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                                .start();
                            _this.scheduleOnce(function () {
                                _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                _this.resetText();
                                _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
                                _this.schedule(_this.typeLetter, _this.typingSpeed);
                                cc.audioEngine.playEffect(_this.ExplanationVos[8], false);
                                _this.scheduleOnce(function () {
                                    _this.resetText();
                                    _this.schedule(_this.typeLetter, _this.typingSpeed);
                                    cc.audioEngine.playEffect(_this.ExplanationVos[9], false);
                                    _this.scheduleOnce(function () {
                                        cc.tween(_this.examples[3].getChildByName("4").children[0])
                                            .to(0.3, { scale: 1.4 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: 10 }, { easing: "sineInOut" })
                                            .to(0.3, { angle: -10 }, { easing: "sineInOut" })
                                            .to(0.3, { scale: 1, angle: 0 }, { easing: "sineInOut" })
                                            .start();
                                        _this.scheduleOnce(function () {
                                            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                            _this.callEnd();
                                        }, _this.ExplanationVos[9].duration + 1);
                                    }, 0.7);
                                }, _this.ExplanationVos[4].duration + 1);
                            }, _this.ExplanationVos[7].duration + 1);
                        }, 0.7);
                    }, _this.ExplanationVos[4].duration + 1);
                }, _this.ExplanationVos[5].duration + 0.5);
            }, 0.7);
        }, this.ExplanationVos[4].duration + 1);
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
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        cc.audioEngine.stopAllEffects();
        this.callEnd();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "exitVO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ExplanationVos", void 0);
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
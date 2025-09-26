
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/1Intro/NewIntro/introduction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcMUludHJvXFxOZXdJbnRyb1xcaW50cm9kdWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNFFDO1FBelFHLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLG9CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUdwQyxjQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFLMUIsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFFbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBdVByQyxDQUFDO0lBclBHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsMkpBQTJKO1lBQzNKLDBFQUEwRTtZQUMxRSx5SEFBeUg7WUFDekgsa0dBQWtHO1lBQ2xHLGlEQUFpRDtZQUNqRCxvRUFBb0U7WUFDcEUsbURBQW1EO1lBQ25ELHdFQUF3RTtZQUN4RSxrREFBa0Q7WUFDbEQsd0RBQXdEO1NBQzNELENBQUE7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHRCx5QkFBTSxHQUFOO1FBQUEsaUJBaURDO1FBaERHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDcEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVELEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNyRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzVELEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ3BFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDckUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUM1RCxLQUFJLENBQUMsWUFBWSxDQUFDO2dDQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FDckUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUM1RCxLQUFJLENBQUMsWUFBWSxDQUFDO29DQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29DQUNwRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ3JFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQ0FDNUQsS0FBSSxDQUFDLFlBQVksQ0FBQzt3Q0FDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NkNBQ3JFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3Q0FDNUQsS0FBSSxDQUFDLFlBQVksQ0FBQzs0Q0FDZCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0Q0FDcEUsS0FBSSxDQUFDLFlBQVksQ0FBQztnREFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dEQUMzRixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dEQUNoRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0RBQ2pCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0Q0FDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3dDQUNULENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtvQ0FDVCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0NBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzRCQUNULENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQ1QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1RCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDdEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NkJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNoRSxDQUFDLENBQUUsQ0FBQTtvQkFDSCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzNGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQixDQUFDLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUMzRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDVCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDekQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5RCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUN6RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlELEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDM0YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUNqQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtvQkFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFBQSxpQkFtRUM7UUFsRUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUNoRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUMvQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7cUJBQ2hELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7cUJBQy9DLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztxQkFDaEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FCQUN4RCxLQUFLLEVBQUUsQ0FBQztnQkFDYixLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzNGLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2RyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNqRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN6RCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDakQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDekQsS0FBSSxDQUFDLFlBQVksQ0FBQzs0QkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDckQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQ0FDaEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQ0FDL0MsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lDQUNoRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lDQUMvQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7aUNBQ2hELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQ0FDeEQsS0FBSyxFQUFFLENBQUM7NEJBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQztnQ0FDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dDQUMzRixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0NBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQ0FDdkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDakQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQ0FDekQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQ0FDZCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0NBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBQ2pELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0NBQ3pELEtBQUksQ0FBQyxZQUFZLENBQUM7d0NBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NkNBQ3JELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7NkNBQ2hELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7NkNBQy9DLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzs2Q0FDaEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzs2Q0FDL0MsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDOzZDQUNoRCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7NkNBQ3hELEtBQUssRUFBRSxDQUFDO3dDQUNiLEtBQUksQ0FBQyxZQUFZLENBQUM7NENBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs0Q0FDM0YsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dDQUNuQixDQUFDLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0NBQzNDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQ0FDWCxDQUFDLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7NEJBQzNDLENBQUMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTt3QkFDM0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUNYLENBQUMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDM0MsQ0FBQyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUFBLGlCQVNDO1FBUkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEYsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXZRRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNLO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBSzFCO1FBREMsUUFBUTtpREFDaUI7SUFqQlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRRNUI7SUFBRCxlQUFDO0NBNVFELEFBNFFDLENBNVFxQyxFQUFFLENBQUMsU0FBUyxHQTRRakQ7a0JBNVFvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBFeHBsYW5hdGlvblZvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGV4YW1wbGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByaWNoVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHRleHQ6IHN0cmluZ1tdO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdHlwaW5nU3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW50cm86IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gW1xyXG4gICAgICAgICAgICBcIldlIG1lYXN1cmUgdGhpbmdzIHRvIGtub3cgaG93IGhlYXZ5LWxpZ2h0LCB0YWxsLXNob3J0LCB0aGljay10aGluLCBvciBtb3JlLWxlc3MgdGhleSBhcmUuIFRoZXJlIGFyZSBtYW55IHdheXMgdG8gbWVhc3VyZSB0aGluZ3MuIExldCB1cyBsZWFybiBhYm91dCB0aGVtLlwiLFxyXG4gICAgICAgICAgICBcIlRoZSBjYXBhY2l0eSBvZiBhbiBvYmplY3QgcmVmZXJzIHRvIHRoZSBtYXhpbXVtIGFtb3VudCB0aGF0IGl0IGNhbiBob2xkLlwiLFxyXG4gICAgICAgICAgICBcIkZvciBleGFtcGxlOiBUaGlzIGp1ZyBjYW4gaG9sZCAzIGJvdHRsZXMgb2Ygd2F0ZXIsIG1ha2luZyBpdCBjYXBhYmxlIG9mIGhvbGRpbmcgbW9yZSB3YXRlciB0aGFuIGVhY2ggaW5kaXZpZHVhbCBib3R0bGUuXCIsXHJcbiAgICAgICAgICAgIFwiTGV0J3MgY29uc2lkZXIgYW5vdGhlciBleGFtcGxlOiBUaGVyZSBhcmUgNCBkaWZmZXJlbnQgY29udGFpbmVycyAtIGEgY2FuLCBib3R0bGUsIGdsYXNzIGFuZCBqdWcuXCIsXHJcbiAgICAgICAgICAgIFwiV2hpY2ggY29udGFpbmVyIGhvbGRzIHRoZSBsZWFzdCBhbW91bnQgb2YgbWlsaz9cIixcclxuICAgICAgICAgICAgXCJUaGUgYW5zd2VyIGlzIHRoZSBnbGFzcywgYXMgaXRzIGNhcGFjaXR5IGlzIHNtYWxsZXIgdGhhbiB0aGUgcmVzdC5cIixcclxuICAgICAgICAgICAgXCJXaGljaCBjb250YWluZXIgaG9sZHMgdGhlIG1heGltdW0gYW1vdW50IG9mIG1pbGs/XCIsXHJcbiAgICAgICAgICAgIFwiVGhlIGNhbiBob2xkcyB0aGUgbW9zdCwgYXMgaXRzIGNhcGFjaXR5IGlzIHRoZSBsYXJnZXN0IGFtb25nIHRoZSBmb3VyLlwiLFxyXG4gICAgICAgICAgICBcIldoaWNoIGNvbnRhaW5lciBoYXMgdGhlIHNlY29uZC1sYXJnZXN0IGNhcGFjaXR5P1wiLFxyXG4gICAgICAgICAgICBcIlRoZSBqdWcgaGFzIHRoZSBzZWNvbmQtbGFyZ2VzdCBjYXBhY2l0eSBhZnRlciB0aGUgY2FuLlwiXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0W3RoaXMuY3VycmVudEludHJvXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dCArPSB0aGlzLnRleHRbdGhpcy5jdXJyZW50SW50cm9dW3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFRleHQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW50cm8rKztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJbnRybyk7XHJcbiAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5JbnRybzEoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgSW50cm8xKCkge1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbMF0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiMVwiKS5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiMlwiKS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCIyXCIpLmNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjNcIikuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiM1wiKS5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCIzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjRcIikuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiNFwiKS5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCI0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW50cm8yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgIH0sIDEuNSlcclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH0sIDEuNylcclxuICAgIH1cclxuXHJcbiAgICBJbnRybzIoKSB7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1t0aGlzLmN1cnJlbnRJbnRyb10sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgdGhpcy5JbnRybzMoKTtcclxuICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zW3RoaXMuY3VycmVudEludHJvXS5kdXJhdGlvbiArIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBJbnRybzMoKSB7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsYW5hdGlvblZvc1t0aGlzLmN1cnJlbnRJbnRyb10sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiMlwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCIzXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbnRybzQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zW3RoaXMuY3VycmVudEludHJvXS5kdXJhdGlvbiAtIDIpXHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfSwgMC44KVxyXG4gICAgfVxyXG5cclxuICAgIEludHJvNCgpIHtcclxuICAgICAgICB0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInRhbGsgYWN0aW9uIGxvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zW3RoaXMuY3VycmVudEludHJvXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiMVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEuMyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmV4YW1wbGVzW3RoaXMuY3VycmVudEludHJvXS5nZXRDaGlsZEJ5TmFtZShcIjJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4zIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5leGFtcGxlc1t0aGlzLmN1cnJlbnRJbnRyb10uZ2V0Q2hpbGRCeU5hbWUoXCIzXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjMgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbdGhpcy5jdXJyZW50SW50cm9dLmdldENoaWxkQnlOYW1lKFwiNFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEuMyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW50cm81KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICB9LCA1KVxyXG4gICAgfVxyXG5cclxuICAgIEludHJvNSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbNF0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzVdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbM10uZ2V0Q2hpbGRCeU5hbWUoXCIzXCIpLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgYW5nbGU6IDEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogLTEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAtMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLCBhbmdsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbNl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzddLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbM10uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgYW5nbGU6IDEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogLTEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAtMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLCBhbmdsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuRXhwbGFuYXRpb25Wb3NbOF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkV4cGxhbmF0aW9uVm9zWzldLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZXhhbXBsZXNbM10uZ2V0Q2hpbGRCeU5hbWUoXCI0XCIpLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgYW5nbGU6IDEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogLTEwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBhbmdsZTogMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAtMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLCBhbmdsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzldLmR1cmF0aW9uICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC43KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbNF0uZHVyYXRpb24gKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5FeHBsYW5hdGlvblZvc1s3XS5kdXJhdGlvbiArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzRdLmR1cmF0aW9uICsgMSlcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuRXhwbGFuYXRpb25Wb3NbNV0uZHVyYXRpb24gKyAwLjUpXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICB9LCB0aGlzLkV4cGxhbmF0aW9uVm9zWzRdLmR1cmF0aW9uICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBjYWxsRW5kKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leGl0Vk8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMuY2FsbEVuZCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
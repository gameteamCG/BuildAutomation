"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/Main Assets/Jaipuria_Intro/introductionScript.ts

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
        _this.introVO = null;
        _this.exitVO = null;
        _this.richText = null;
        _this.typingSpeed = 0.1;
        _this.currentIndex = 0;
        _this.currentIntro = 0;
        _this.currentText = "";
        _this.delay = [];
        _this.duration = [];
        _this.TextArray = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.duration = [5.2, 19.6, 4.7, 18.5, 15];
        this.TextArray = [
            "Today we will learn about the concept of simple present tense.",
            "We use simple present tense to talk about things we do every day, things that happen again and again, or things that are always true.\nFor example:\nI brush my teeth every morning.\nThe sun rises in the east.",
            "The words brush and rise are action words.",
            "When the subject is singular like he, she, or it,  we add -s or -es to the action word.\nFor example:\nHe goes to school daily.\nShe drinks milk daily at night.",
            "When the subject is plural like I, you, we, they, we use the action word as it is.\nFor example:\nI play in the park.\nThey wash their hands.",
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
        this.currentText = "";
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    };
    NewClass.prototype.callCurrentText = function () {
        var _this = this;
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node
            .getChildByName("jockey")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "talk action loop", true);
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("jockey")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
            _this.resetText();
            if (_this.currentIntro == _this.duration.length) {
                _this.callEnd();
            }
            else {
                _this.callCurrentText();
            }
        }, this.duration[this.currentIntro]);
    };
    NewClass.prototype.start = function () {
        this.text = this.TextArray[this.currentIntro];
        this.callCurrentText();
        this.node.getChildByName("spine").active = true;
        cc.audioEngine.playEffect(this.introVO, false);
    };
    NewClass.prototype.callEnd = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node
            .getChildByName("transition")
            .getComponent(cc.Animation)
            .play("anim");
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("transition")
                .getComponent(cc.Animation)
                .play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
    };
    NewClass.prototype.skipGame = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node
            .getChildByName("jockey")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node
            .getChildByName("transition")
            .getComponent(cc.Animation)
            .play("anim");
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("transition")
                .getComponent(cc.Animation)
                .play("anim2");
            _this.scheduleOnce(function () {
                _this.node.getChildByName("spine").active = false;
                _this.node.children[0].children[0].active = false;
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "introVO", void 0);
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
"use strict";
cc._RF.push(module, '13592OwQGpB2a08lo/09SvD', 'introduction');
// resources/Gujarati/1Gujarati/scripts/introduction.ts

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
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.ExplanationVos[0], false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("1").active = false;
            _this.node.getChildByName("2").active = true;
            _this.node.getChildByName("box").getChildByName("1").active = false;
            _this.node.getChildByName("box").getChildByName("2").active = true;
            cc.audioEngine.playEffect(_this.ExplanationVos[1], false);
            _this.scheduleOnce(function () {
                _this.node.getChildByName("2").active = false;
                _this.node.getChildByName("3").active = true;
                _this.node.getChildByName("box").getChildByName("2").active = false;
                _this.node.getChildByName("box").getChildByName("3").active = true;
                cc.audioEngine.playEffect(_this.ExplanationVos[2], false);
                _this.scheduleOnce(function () {
                    _this.node.getChildByName("3").active = false;
                    _this.node.getChildByName("4").active = true;
                    _this.node.getChildByName("box").getChildByName("3").active = false;
                    _this.node.getChildByName("box").getChildByName("4").active = true;
                    cc.audioEngine.playEffect(_this.ExplanationVos[3], false);
                    _this.scheduleOnce(function () {
                        _this.callEnd();
                    }, _this.ExplanationVos[3].duration);
                }, _this.ExplanationVos[2].duration);
            }, _this.ExplanationVos[1].duration);
        }, this.ExplanationVos[0].duration);
    };
    NewClass.prototype.callEnd = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        cc.audioEngine.playEffect(this.exitVO, false);
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
        cc.audioEngine.playEffect(this.exitVO, false);
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
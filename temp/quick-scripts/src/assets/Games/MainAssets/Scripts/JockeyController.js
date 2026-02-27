"use strict";
cc._RF.push(module, '80849w1E2dMTbsGj/B/XIRl', 'JockeyController');
// Games/MainAssets/Scripts/JockeyController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.JOCKEY_TYPE = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JOCKEY_TYPE;
(function (JOCKEY_TYPE) {
    JOCKEY_TYPE[JOCKEY_TYPE["POSITIVE"] = 0] = "POSITIVE";
    JOCKEY_TYPE[JOCKEY_TYPE["NEGATIVE"] = 1] = "NEGATIVE";
})(JOCKEY_TYPE = exports.JOCKEY_TYPE || (exports.JOCKEY_TYPE = {}));
var JockeyController = /** @class */ (function (_super) {
    __extends(JockeyController, _super);
    function JockeyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positiveVos = [];
        _this.negativeVos = [];
        _this.positiveAnims = [];
        _this.negativeAnims = [];
        _this.jockey = null;
        return _this;
    }
    JockeyController_1 = JockeyController;
    Object.defineProperty(JockeyController, "JOCKEY", {
        get: function () {
            return JockeyController_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    JockeyController.prototype.onLoad = function () {
        JockeyController_1.instance = this;
    };
    JockeyController.prototype.start = function () {
        this.jockey = this.node;
        this.positiveAnims = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        this.negativeAnims = [
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
        ];
    };
    JockeyController.prototype.callJockey = function (type, onCompleteAction) {
        var _this = this;
        var animArr;
        var audioZone;
        var animNum = this.getRandomIntInRange(0, 4);
        switch (type) {
            case JOCKEY_TYPE.POSITIVE:
                animArr = this.positiveAnims;
                audioZone = this.positiveVos;
                break;
            case JOCKEY_TYPE.NEGATIVE:
                animArr = this.negativeAnims;
                audioZone = this.negativeVos;
                break;
        }
        cc.tween(this.jockey)
            .to(0.5, { x: 450 }, { easing: "sineInOut" })
            .call(function () {
            var comp = _this.jockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, animArr[animNum], false);
            cc.audioEngine.playEffect(audioZone[animNum], false);
        })
            .delay(audioZone[animNum].duration)
            .to(0.5, { x: 1500 }, { easing: "sineInOut" })
            .call(function () {
            var comp = _this.jockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", false);
            if (onCompleteAction) {
                onCompleteAction();
            }
        })
            .start();
    };
    JockeyController.prototype.getRandomIntInRange = function (min, max) {
        // RNG generator, MIN and MAX inclusive
        if (typeof min !== "number" || typeof max !== "number") {
            throw new Error("Both min and max must be numbers");
        }
        if (min > max) {
            throw new Error("min must be less than or equal to max");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var JockeyController_1;
    JockeyController.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], JockeyController.prototype, "positiveVos", void 0);
    __decorate([
        property(cc.AudioClip)
    ], JockeyController.prototype, "negativeVos", void 0);
    JockeyController = JockeyController_1 = __decorate([
        ccclass
    ], JockeyController);
    return JockeyController;
}(cc.Component));
exports.default = JockeyController;

cc._RF.pop();
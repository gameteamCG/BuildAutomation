
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/EnglishUKG/MainAssets/Scripts/JockeyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bed1dsgWYBIWZfWKgH/MKtM', 'JockeyController');
// Games/EnglishUKG/MainAssets/Scripts/JockeyController.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEVuZ2xpc2hVS0dcXE1haW5Bc3NldHNcXFNjcmlwdHNcXEpvY2tleUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixxREFBUSxDQUFBO0lBQ1IscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUdEO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc0ZDO1FBcEZRLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFJNUIsWUFBTSxHQUFZLElBQUksQ0FBQzs7SUEwRWpDLENBQUM7eUJBdEZvQixnQkFBZ0I7SUFjbkMsc0JBQWtCLDBCQUFNO2FBQXhCO1lBQ0UsT0FBTyxrQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFUyxpQ0FBTSxHQUFoQjtRQUNFLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVTLGdDQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiLENBQUM7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QztDQXRGRCxBQXNGQyxDQXRGNkMsRUFBRSxDQUFDLFNBQVMsR0FzRnpEO2tCQXRGb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEpPQ0tFWV9UWVBFIHtcclxuICBQT1NJVElWRSxcclxuICBORUdBVElWRSxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9ja2V5Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcG9zaXRpdmVWb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIG5lZ2F0aXZlVm9zOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgcG9zaXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgbmVnYXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEpvY2tleUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IEpPQ0tFWSgpIHtcclxuICAgIHJldHVybiBKb2NrZXlDb250cm9sbGVyLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIEpvY2tleUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5qb2NrZXkgPSB0aGlzLm5vZGU7XHJcbiAgICB0aGlzLnBvc2l0aXZlQW5pbXMgPSBbXHJcbiAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgIF07XHJcbiAgICB0aGlzLm5lZ2F0aXZlQW5pbXMgPSBbXHJcbiAgICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgICBcIm5lZ2F0aXZlXzJcIixcclxuICAgICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgICBcIm5lZ2F0aXZlXzVcIixcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbEpvY2tleSh0eXBlOiBKT0NLRVlfVFlQRSwgb25Db21wbGV0ZUFjdGlvbj86IEZ1bmN0aW9uKSB7XHJcbiAgICBsZXQgYW5pbUFycjogc3RyaW5nW107XHJcbiAgICBsZXQgYXVkaW9ab25lOiBjYy5BdWRpb0NsaXBbXTtcclxuICAgIGxldCBhbmltTnVtID0gdGhpcy5nZXRSYW5kb21JbnRJblJhbmdlKDAsIDQpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgSk9DS0VZX1RZUEUuUE9TSVRJVkU6XHJcbiAgICAgICAgYW5pbUFyciA9IHRoaXMucG9zaXRpdmVBbmltcztcclxuICAgICAgICBhdWRpb1pvbmUgPSB0aGlzLnBvc2l0aXZlVm9zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEpPQ0tFWV9UWVBFLk5FR0FUSVZFOlxyXG4gICAgICAgIGFuaW1BcnIgPSB0aGlzLm5lZ2F0aXZlQW5pbXM7XHJcbiAgICAgICAgYXVkaW9ab25lID0gdGhpcy5uZWdhdGl2ZVZvcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLmpvY2tleSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiA0NTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcy5qb2NrZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1BcnJbYW5pbU51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGF1ZGlvWm9uZVthbmltTnVtXSwgZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoYXVkaW9ab25lW2FuaW1OdW1dLmR1cmF0aW9uKVxyXG4gICAgICAudG8oMC41LCB7IHg6IDE1MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcy5qb2NrZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKG9uQ29tcGxldGVBY3Rpb24pIHtcclxuICAgICAgICAgIG9uQ29tcGxldGVBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tSW50SW5SYW5nZShtaW4sIG1heCkge1xyXG4gICAgLy8gUk5HIGdlbmVyYXRvciwgTUlOIGFuZCBNQVggaW5jbHVzaXZlXHJcbiAgICBpZiAodHlwZW9mIG1pbiAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkJvdGggbWluIGFuZCBtYXggbXVzdCBiZSBudW1iZXJzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtaW4gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gbWF4XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
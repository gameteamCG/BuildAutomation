
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MainAssets/Scripts/JockeyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f815ns9PpPo7l4oxgIfvW4', 'JockeyController');
// MainAssets/Scripts/JockeyController.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWFpbkFzc2V0c1xcU2NyaXB0c1xcSm9ja2V5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLHFEQUFRLENBQUE7SUFDUixxREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBR0Q7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFzRkM7UUFwRlEsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUVqQyxtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUk1QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQTBFakMsQ0FBQzt5QkF0Rm9CLGdCQUFnQjtJQWNuQyxzQkFBa0IsMEJBQU07YUFBeEI7WUFDRSxPQUFPLGtCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVTLGlDQUFNLEdBQWhCO1FBQ0Usa0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRVMsZ0NBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1NBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFh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QyxFQUFFLENBQUMsU0FBUyxHQXNGekQ7a0JBdEZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gSk9DS0VZX1RZUEUge1xyXG4gIFBPU0lUSVZFLFxyXG4gIE5FR0FUSVZFLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2NrZXlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHB1YmxpYyBwb3NpdGl2ZVZvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgbmVnYXRpdmVWb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIHB1YmxpYyBwb3NpdGl2ZUFuaW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyBuZWdhdGl2ZUFuaW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSm9ja2V5Q29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgam9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgSk9DS0VZKCkge1xyXG4gICAgcmV0dXJuIEpvY2tleUNvbnRyb2xsZXIuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgSm9ja2V5Q29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmpvY2tleSA9IHRoaXMubm9kZTtcclxuICAgIHRoaXMucG9zaXRpdmVBbmltcyA9IFtcclxuICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgXTtcclxuICAgIHRoaXMubmVnYXRpdmVBbmltcyA9IFtcclxuICAgICAgXCJuZWdhdGl2ZV8xXCIsXHJcbiAgICAgIFwibmVnYXRpdmVfMlwiLFxyXG4gICAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICAgIFwibmVnYXRpdmVfNVwiLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsSm9ja2V5KHR5cGU6IEpPQ0tFWV9UWVBFLCBvbkNvbXBsZXRlQWN0aW9uPzogRnVuY3Rpb24pIHtcclxuICAgIGxldCBhbmltQXJyOiBzdHJpbmdbXTtcclxuICAgIGxldCBhdWRpb1pvbmU6IGNjLkF1ZGlvQ2xpcFtdO1xyXG4gICAgbGV0IGFuaW1OdW0gPSB0aGlzLmdldFJhbmRvbUludEluUmFuZ2UoMCwgNCk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBKT0NLRVlfVFlQRS5QT1NJVElWRTpcclxuICAgICAgICBhbmltQXJyID0gdGhpcy5wb3NpdGl2ZUFuaW1zO1xyXG4gICAgICAgIGF1ZGlvWm9uZSA9IHRoaXMucG9zaXRpdmVWb3M7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgSk9DS0VZX1RZUEUuTkVHQVRJVkU6XHJcbiAgICAgICAgYW5pbUFyciA9IHRoaXMubmVnYXRpdmVBbmltcztcclxuICAgICAgICBhdWRpb1pvbmUgPSB0aGlzLm5lZ2F0aXZlVm9zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMuam9ja2V5KVxyXG4gICAgICAudG8oMC41LCB7IHg6IDQ1MCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmpvY2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbUFyclthbmltTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoYXVkaW9ab25lW2FuaW1OdW1dLCBmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5kZWxheShhdWRpb1pvbmVbYW5pbU51bV0uZHVyYXRpb24pXHJcbiAgICAgIC50bygwLjUsIHsgeDogMTUwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmpvY2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIGZhbHNlKTtcclxuICAgICAgICBpZiAob25Db21wbGV0ZUFjdGlvbikge1xyXG4gICAgICAgICAgb25Db21wbGV0ZUFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21JbnRJblJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICAvLyBSTkcgZ2VuZXJhdG9yLCBNSU4gYW5kIE1BWCBpbmNsdXNpdmVcclxuICAgIGlmICh0eXBlb2YgbWluICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtYXggIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQm90aCBtaW4gYW5kIG1heCBtdXN0IGJlIG51bWJlcnNcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobWluID4gbWF4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pbiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBtYXhcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuIl19
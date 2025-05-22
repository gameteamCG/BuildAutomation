
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Assets/1_PIET/Jockey1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f1caKrSCRE+52HavZExzOB', 'Jockey1');
// Games/WhatWillHappenNext/Assets/1_PIET/Jockey1.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Jockey = /** @class */ (function (_super) {
    __extends(Jockey, _super);
    function Jockey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inAudio = null;
        _this.positiveVO = [];
        _this.negativeVO = [];
        _this.positiveAnims = [];
        _this.negativeAnims = [];
        return _this;
        // update (dt) {}
    }
    Jockey_1 = Jockey;
    Object.defineProperty(Jockey, "Instance", {
        get: function () {
            return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    Jockey.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    // LIFE-CYCLE CALLBACKS:
    Jockey.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        Jockey_1.instance = this;
        this.positiveAnims = ["positive_1", "positive_2"];
        this.negativeAnims = ["negative_1", "negative_2"];
    };
    Jockey.prototype.start = function () { };
    Jockey.prototype.CallJockey = function () {
        var _this = this;
        var num = this.getRandomNumber(0, 1);
        this.node.getComponent(sp.Skeleton).setAnimation(0, "in", false);
        cc.tween(this.node)
            .to(0.3, { x: -350, y: -340 }, { easing: "backOut" })
            .start();
        cc.audioEngine.playEffect(this.inAudio, false);
        //console.log("characterAppear--Puzzle");
        this.scheduleOnce(function () {
            _this.node
                .getComponent(sp.Skeleton)
                .setAnimation(0, _this.positiveAnims[num], false);
            cc.audioEngine.playEffect(_this.positiveVO[num], false);
            _this.scheduleOnce(function () {
                //console.log("characterDisappear--Puzzle");
                cc.tween(_this.node)
                    .to(0.3, { x: -1200 }, { easing: "backIn" })
                    .start();
            }, _this.positiveVO[num].duration);
        }, 0.3);
        return this.positiveVO[num].duration;
    };
    Jockey.prototype.CallJockeyNeg = function () {
        var _this = this;
        var num = this.getRandomNumber(0, 1);
        this.node.getComponent(sp.Skeleton).setAnimation(0, "in", false);
        cc.tween(this.node)
            .to(0.3, { x: -350, y: -340 }, { easing: "backOut" })
            .start();
        //console.log("characterAppear--Puzzle");
        cc.audioEngine.playEffect(this.inAudio, false);
        this.scheduleOnce(function () {
            _this.node
                .getComponent(sp.Skeleton)
                .setAnimation(0, _this.negativeAnims[num], false);
            console.log(_this.negativeAnims[num]);
            cc.audioEngine.playEffect(_this.negativeVO[num], false);
            _this.scheduleOnce(function () {
                //console.log("characterDisappear--Puzzle");
                cc.tween(_this.node)
                    .to(0.3, { x: -1200 }, { easing: "backIn" })
                    .start();
            }, _this.negativeVO[num].duration - 0.3);
        }, 0.3);
        return this.negativeVO[num].duration;
    };
    var Jockey_1;
    // LIFE-CYCLE CALLBACKS:
    Jockey.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "inAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "positiveVO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "negativeVO", void 0);
    Jockey = Jockey_1 = __decorate([
        ccclass
    ], Jockey);
    return Jockey;
}(cc.Component));
exports.default = Jockey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcQXNzZXRzXFwxX1BJRVRcXEpvY2tleTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1RkM7UUEvRU8sYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBR2hDLGdCQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUUvQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixtQkFBYSxHQUFhLEVBQUUsQ0FBQzs7UUFxRXJDLGlCQUFpQjtJQUNsQixDQUFDO2VBdkZvQixNQUFNO0lBRzFCLHNCQUFXLGtCQUFRO2FBQW5CO1lBQ0MsT0FBTyxRQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBY00sZ0NBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEdBQVc7UUFDOUMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNDLHlDQUF5QztRQUN6QyxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FB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bnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2NrZXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBKb2NrZXkgPSBudWxsO1xyXG5cdHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcblx0XHRyZXR1cm4gSm9ja2V5Lmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgaW5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgcG9zaXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgbmVnYXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBwb3NpdGl2ZUFuaW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgbmVnYXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0cHVibGljIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0bGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuXHRcdF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG5cdFx0cmV0dXJuIF9udW1iZXI7XHJcblx0fVxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHRcdEpvY2tleS5pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG5cclxuXHRcdHRoaXMucG9zaXRpdmVBbmltcyA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCJdO1xyXG5cdFx0dGhpcy5uZWdhdGl2ZUFuaW1zID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHsgfVxyXG5cclxuXHRDYWxsSm9ja2V5KCk6IG51bWJlciB7XHJcblx0XHRsZXQgbnVtID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpblwiLCBmYWxzZSk7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUpXHJcblx0XHRcdC50bygwLjMsIHsgeDogLTM1MCwgeTogLTM0MCB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaW5BdWRpbywgZmFsc2UpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy5wb3NpdGl2ZUFuaW1zW251bV0sIGZhbHNlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlVk9bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuXHRcdFx0XHRcdC50bygwLjMsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR9LCB0aGlzLnBvc2l0aXZlVk9bbnVtXS5kdXJhdGlvbik7XHJcblx0XHR9LCAwLjMpO1xyXG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpdmVWT1tudW1dLmR1cmF0aW9uO1xyXG5cdH1cclxuXHJcblx0Q2FsbEpvY2tleU5lZygpOiBudW1iZXIge1xyXG5cdFx0bGV0IG51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDEpO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaW5cIiwgZmFsc2UpO1xyXG5cdFx0Y2MudHdlZW4odGhpcy5ub2RlKVxyXG5cdFx0XHQudG8oMC4zLCB7IHg6IC0zNTAsIHk6IC0zNDAgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmluQXVkaW8sIGZhbHNlKTtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIHRoaXMubmVnYXRpdmVBbmltc1tudW1dLCBmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMubmVnYXRpdmVBbmltc1tudW1dKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlVk9bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUHV6emxlXCIpO1xyXG5cclxuXHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUpXHJcblx0XHRcdFx0XHQudG8oMC4zLCB7IHg6IC0xMjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgdGhpcy5uZWdhdGl2ZVZPW251bV0uZHVyYXRpb24gLSAwLjMpO1xyXG5cdFx0fSwgMC4zKTtcclxuXHRcdHJldHVybiB0aGlzLm5lZ2F0aXZlVk9bbnVtXS5kdXJhdGlvbjtcclxuXHR9XHJcblx0Ly8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
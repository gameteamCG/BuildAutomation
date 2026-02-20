
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/Scripts/GameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85e115BnsdHKq6dnerkVV+O', 'GameEnd');
// Games/MainAssets/Scripts/GameEnd.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
// import startGame from "../../Framework/Scripts/StartGame";
// import startGame from "../../../Framework/Scripts/StartGame";
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var closeWindow = function () {
    window.open(location.href, "_self", "");
    window.close();
};
var GameEnd = /** @class */ (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popSound = null;
        _this.star = null;
        _this.yeah = null;
        _this.fantastic = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameEnd.prototype.start = function () {
        var _this = this;
        this.fantastic = this.node.getChildByName("Fantastic");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        console.log("showedScreen--Congratulations");
        // this.scheduleOnce(() => {
        //   cc.tween(this.node.getChildByName("Fantastic"))
        //     .to(0.5, { scale: 0.8 }, { easing: "sineInOut" })
        //     .start();
        // }, 0.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star1"))
                .to(0.5, { scale: 0.6 }, { easing: "quartOut" })
                .start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star2"))
                .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
                .start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star3"))
                .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
                .start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah;
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--" + true);
        }, 2.5);
        // this.scheduleOnce(() => {
        //   let node = this.node.getChildByName("end");
        //   node.active = true;
        // }, 3);
    };
    GameEnd.prototype.EndButton = function () {
        // cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
        closeWindow();
    };
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "yeah", void 0);
    GameEnd = __decorate([
        ccclass
    ], GameEnd);
    return GameEnd;
}(cc.Component));
exports.default = GameEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXFNjcmlwdHNcXEdhbWVFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixrRUFBNkQ7QUFFN0QsNkRBQTZEO0FBRTdELGdFQUFnRTtBQUVoRSxrRkFBa0Y7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBR0Y7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFpRUM7UUEvRFMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUF1RHBDLENBQUM7SUFyREMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3Qyw0QkFBNEI7UUFDNUIsb0RBQW9EO1FBQ3BELHdEQUF3RDtR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QjtJQUFELGNBQUM7Q0FqRUQsQUFpRUMsQ0FqRW9DLEVBQUUsQ0FBQyxTQUFTLEdBaUVoRDtrQkFqRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG4vLyBpbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbi8vIGltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgd2luZG93LmNsb3NlKCk7XHJcbn07XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdGFyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBmYW50YXN0aWM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5mYW50YXN0aWMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGYW50YXN0aWNcIik7XHJcbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUNvbmdyYXR1bGF0aW9uc1wiKTtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiRmFudGFzdGljXCIpKVxyXG4gICAgLy8gICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgLy8gICAgIC5zdGFydCgpO1xyXG4gICAgLy8gfSwgMC4zKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyMVwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjYgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMC44KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyMlwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS4zKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyM1wiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaDtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tXCIgKyB0cnVlKTtcclxuICAgIH0sIDIuNSk7XHJcblxyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICBsZXQgbm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKTtcclxuICAgIC8vICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gfSwgMyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgY2xvc2VXaW5kb3coKTtcclxuICB9XHJcbn1cclxuIl19
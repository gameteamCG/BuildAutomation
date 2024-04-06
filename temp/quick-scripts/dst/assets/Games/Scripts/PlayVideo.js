
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/PlayVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e226RQIFZPJ4naQvPXF+Fd', 'PlayVideo');
// Games/Scripts/PlayVideo.ts

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
var StartGame_1 = require("../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayerNode = null;
        _this.videoPlayerTools = null;
        _this.curtain = null;
        _this.helloAudio = null;
        _this.voAudio = null;
        _this.btnClick = null;
        _this.jockeyName = null;
        _this.anim1Name = "hello Everyone";
        _this.anim2Name = "talk action loop";
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        // this.playAnimation();
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.node.getChildByName("tlc").active = true;
            }
        }, 0.5);
    };
    NewClass.prototype.playAnimation = function () {
        var _this = this;
        cc.tween(this.node.children[0]).to(0.5, { x: 0 }, { easing: "backInOut" }).start();
        var jockeyNode = this.node.children[0].getChildByName(this.jockeyName);
        jockeyNode.active = true;
        this.scheduleOnce(function () {
            jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim1Name, false);
            cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio1, false);
            _this.scheduleOnce(function () {
                jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim2Name, true);
                cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio2, false);
                _this.scheduleOnce(function () {
                    jockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    cc.tween(_this.node.children[0]).to(0.5, { opacity: 0 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        _this.curtain.getComponent(cc.Animation).play();
                        _this.videoPlayerNode.active = true;
                        _this.videoPlayerTools.active = true;
                        _this.node.active = false;
                    }, 0.5);
                }, StartGame_1.default.Instance.introAudio2.duration);
            }, StartGame_1.default.Instance.introAudio1.duration + 0.5);
            // this.scheduleOnce(() => {
            //     this.node.children[1].active = false;
            //     this.node.children[2].active = true;
            //     cc.audioEngine.playEffect(this.voAudio, false);
            //     this.scheduleOnce(() => {
            //         this.Play();
            //     }, this.voAudio.duration + 0.5);
            // }, this.helloAudio.duration + 0.2);
        }, 0.5);
    };
    // Play(_event: cc.Event) {
    //     this.curtain.getComponent(cc.Animation).play();
    //     _event.target.getComponent(cc.Button).interactable = false;
    //     this.node.active = false;
    //     this.videoPlayerNode.active = true;
    //     this.videoPlayerTools.active = true;
    // }
    NewClass.prototype.Play = function () {
        var _this = this;
        this.videoPlayerNode.getComponent(cc.VideoPlayer).remoteURL = StartGame_1.default.Instance.videoLink;
        this.jockeyName = StartGame_1.default.Instance.jockeyName;
        this.node.getChildByName("tlc").active = false;
        cc.audioEngine.playEffect(this.btnClick, false);
        this.node.getChildByName("play").getComponent(cc.Button).interactable = false;
        cc.tween(this.node.getChildByName("title")).to(1, { y: 800 }, { easing: "backInOut" }).start();
        cc.tween(this.node.getChildByName("play")).to(1, { y: -800 }, { easing: "backInOut" }).start();
        if (StartGame_1.default.Instance.introAudio1 && StartGame_1.default.Instance.introAudio2) {
            this.scheduleOnce(function () {
                _this.playAnimation();
            }, 0.5);
        }
        else {
            this.scheduleOnce(function () {
                _this.curtain.getComponent(cc.Animation).play();
                _this.videoPlayerNode.active = true;
                _this.videoPlayerTools.active = true;
                _this.node.active = false;
            }, 0.5);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "videoPlayerNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "videoPlayerTools", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "curtain", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "helloAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "voAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "btnClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TY3JpcHRzL1BsYXlWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtR0M7UUFoR0cscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBVyxnQkFBZ0IsQ0FBQztRQUNyQyxlQUFTLEdBQVcsa0JBQWtCLENBQUM7O1FBZ0Z2QyxpQkFBaUI7SUFDckIsQ0FBQztJQTdFRyx5QkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVa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QVksQ0FBQztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7SUE3RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUc1QjtJQUFELGVBQUM7Q0FuR0QsQUFtR0MsQ0FuR3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUdqRDtrQkFuR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHZpZGVvUGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdmlkZW9QbGF5ZXJUb29sczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY3VydGFpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBoZWxsb0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgdm9BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGJ0bkNsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBqb2NrZXlOYW1lOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgYW5pbTFOYW1lOiBzdHJpbmcgPSBcImhlbGxvIEV2ZXJ5b25lXCI7XG4gICAgYW5pbTJOYW1lOiBzdHJpbmcgPSBcInRhbGsgYWN0aW9uIGxvb3BcIjtcblxuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xuICAgICAgICAvLyB0aGlzLnBsYXlBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcblxuICAgIH1cblxuICAgIHBsYXlBbmltYXRpb24oKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgbGV0IGpvY2tleU5vZGU6IGNjLk5vZGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlOYW1lKTtcbiAgICAgICAgam9ja2V5Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuYW5pbTFOYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltMk5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8yLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnRhaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXJUb29scy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMi5kdXJhdGlvbik7XG4gICAgICAgICAgICB9LCBzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9BdWRpbzEuZHVyYXRpb24gKyAwLjUpO1xuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudm9BdWRpbywgZmFsc2UpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5QbGF5KCk7XG4gICAgICAgICAgICAvLyAgICAgfSwgdGhpcy52b0F1ZGlvLmR1cmF0aW9uICsgMC41KTtcbiAgICAgICAgICAgIC8vIH0sIHRoaXMuaGVsbG9BdWRpby5kdXJhdGlvbiArIDAuMik7XG5cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG4gICAgLy8gUGxheShfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgLy8gICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gfVxuXG4gICAgUGxheSgpIHtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZW1vdGVVUkwgPSBzdGFydEdhbWUuSW5zdGFuY2UudmlkZW9MaW5rO1xuICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYnRuQ2xpY2ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikpLnRvKDEsIHsgeTogODAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXlcIikpLnRvKDEsIHsgeTogLTgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xuXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9BdWRpbzEgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8yKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyVG9vbHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
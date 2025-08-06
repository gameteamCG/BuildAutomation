
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
        if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("tlc").active = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXFBsYXlWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxR0M7UUFsR0cscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBVyxnQkFBZ0IsQ0FBQztRQUNyQyxlQUFTLEdBQVcsa0JBQWtCLENBQUM7O1FBa0Z2QyxpQkFBaUI7SUFDckIsQ0FBQztJQS9FRyx5QkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJ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QztZQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUc1QjtJQUFELGVBQUM7Q0FyR0QsQUFxR0MsQ0FyR3FDLEVBQUUsQ0FBQyxTQUFTLEdBcUdqRDtrQkFyR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9QbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9QbGF5ZXJUb29sczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1cnRhaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhlbGxvQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgdm9BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBidG5DbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGpvY2tleU5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgYW5pbTFOYW1lOiBzdHJpbmcgPSBcImhlbGxvIEV2ZXJ5b25lXCI7XHJcbiAgICBhbmltMk5hbWU6IHN0cmluZyA9IFwidGFsayBhY3Rpb24gbG9vcFwiO1xyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICBsZXQgam9ja2V5Tm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleU5hbWUpO1xyXG4gICAgICAgIGpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltMU5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9BdWRpbzEsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW0yTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXJUb29scy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMi5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMS5kdXJhdGlvbiArIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnZvQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLlBsYXkoKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIHRoaXMudm9BdWRpby5kdXJhdGlvbiArIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIH0sIHRoaXMuaGVsbG9BdWRpby5kdXJhdGlvbiArIDAuMik7XHJcblxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcbiAgICAvLyBQbGF5KF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIC8vICAgICB0aGlzLmN1cnRhaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMudmlkZW9QbGF5ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB0aGlzLnZpZGVvUGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlbW90ZVVSTCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS52aWRlb0xpbms7XHJcbiAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWU7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYnRuQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKS50bygxLCB7IHk6IDgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXlcIikpLnRvKDEsIHsgeTogLTgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8xICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
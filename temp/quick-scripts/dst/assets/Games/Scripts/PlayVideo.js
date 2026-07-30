
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
var TVInputManager_1 = require("./TVInputManager");
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
        _this.canTouch = false;
        _this.jockeyName = null;
        _this.anim1Name = "hello Everyone";
        _this.anim2Name = "talk action loop";
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        // console.log("loading--100");
        // console.log("loaderComplete--true");
        // this.playAnimation();
        this.canTouch = true;
        this.scheduleOnce(function () {
            _this.setupTVFocus("");
        }, 2);
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.node.getChildByName("tlc").active = true;
            }
            _this.setupTVFocus("play");
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
    NewClass.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        //let soundBtn = this.node.getChildByName("panel").getChildByName("soundbutton");
        var playBtn = this.node.getChildByName("play");
        var nodes = [playBtn, backBtn, musicBtn].filter(function (n) { return !!n; });
        TVInputManager_1.default.Instance.init(nodes, 0);
        TVInputManager_1.default.Instance.setCanSelect(true);
    };
    NewClass.prototype.Play = function () {
        var _this = this;
        this.videoPlayerNode.getComponent(cc.VideoPlayer).remoteURL = StartGame_1.default.Instance.videoLink;
        this.jockeyName = StartGame_1.default.Instance.jockeyName;
        if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("tlc").active = false;
        }
        cc.audioEngine.playEffect(this.btnClick, false);
        this.node.getChildByName("play").getComponent(cc.Button).interactable = false;
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXFBsYXlWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrREFBMEQ7QUFDMUQsbURBQThDO0FBR3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0hDO1FBckhHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUN0QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBVyxnQkFBZ0IsQ0FBQztRQUNyQyxlQUFTLEdBQVcsa0JBQWtCLENBQUM7O1FBb0d2QyxpQkFBaUI7SUFDckIsQ0FBQztJQWpHRyx5QkFBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRywrQkFBK0I7UUFDL0IsdUNBQXVDO1FBQ3ZDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxF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Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7SUFsSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0g1QjtJQUFELGVBQUM7Q0F4SEQsQUF3SEMsQ0F4SHFDLEVBQUUsQ0FBQyxTQUFTLEdBd0hqRDtrQkF4SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHZpZGVvUGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHZpZGVvUGxheWVyVG9vbHM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXJ0YWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBoZWxsb0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHZvQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYnRuQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBqb2NrZXlOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGFuaW0xTmFtZTogc3RyaW5nID0gXCJoZWxsbyBFdmVyeW9uZVwiO1xyXG4gICAgYW5pbTJOYW1lOiBzdHJpbmcgPSBcInRhbGsgYWN0aW9uIGxvb3BcIjtcclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheUFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJcIik7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJwbGF5XCIpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltYXRpb24oKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGxldCBqb2NrZXlOb2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5TmFtZSk7XHJcbiAgICAgICAgam9ja2V5Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW0xTmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBqb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuYW5pbTJOYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8yLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJ0YWluLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfSwgc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8yLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSwgc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8xLmR1cmF0aW9uICsgMC41KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudm9BdWRpbywgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuUGxheSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgdGhpcy52b0F1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuICAgICAgICAgICAgLy8gfSwgdGhpcy5oZWxsb0F1ZGlvLmR1cmF0aW9uICsgMC4yKTtcclxuXHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuICAgIC8vIFBsYXkoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgLy8gICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy52aWRlb1BsYXllck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnZpZGVvUGxheWVyVG9vbHMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzKGFjdGl2ZUNvbnRhaW5lck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgLy9sZXQgc291bmRCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBwbGF5QnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheVwiKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGVzID0gW3BsYXlCdG4sIGJhY2tCdG4sIG11c2ljQnRuXS5maWx0ZXIobiA9PiAhIW4pO1xyXG5cclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAwKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVtb3RlVVJMID0gc3RhcnRHYW1lLkluc3RhbmNlLnZpZGVvTGluaztcclxuICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5idG5DbGljaywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdChmYWxzZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKS50bygxLCB7IHk6IDgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXlcIikpLnRvKDEsIHsgeTogLTgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8xICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
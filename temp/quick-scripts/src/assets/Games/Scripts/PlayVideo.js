"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/Progressbar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/ProgressBar/Scripts/ProgressBar.ts

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
var StartGame_1 = require("../../../Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.starsEarned = [false, false, false];
        return _this;
        // update (dt) {}
    }
    ProgressBar_1 = ProgressBar;
    Object.defineProperty(ProgressBar, "Instance", {
        get: function () {
            return ProgressBar_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    ProgressBar.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        ProgressBar_1.instance = this;
    };
    ProgressBar.prototype.start = function () {
    };
    ProgressBar.prototype.ProgressFill = function (_currentQues, starLog) {
        if (starLog === void 0) { starLog = true; }
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.TotalLevels; //totalLevels
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues != 0 && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
            if (!this.starsEarned[0] && starLog) {
                this.starsEarned[0] = true;
                console.log("starsEarned--1");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && this.node.getChildByName("stars").children[1].opacity == 0) {
            if (!this.starsEarned[1] && starLog) {
                this.starsEarned[1] = true;
                console.log("starsEarned--2");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels && this.node.getChildByName("stars").children[2].opacity == 0) {
            if (!this.starsEarned[2] && starLog) {
                this.starsEarned[2] = true;
                console.log("starsEarned--3");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[2]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
    };
    ProgressBar.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        // _number = _number * this.shapes.length;
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    ProgressBar.prototype.createStarTrails = function (num, _node) {
        var _this = this;
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var NodePOS = _node.convertToWorldSpaceAR(this_1.node.parent.position);
            var rngX = this_1.getRandomNumber(_node.x - _offset, _node.x + _offset);
            var rngY = this_1.getRandomNumber(_node.y - _offset, _node.y + _offset);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = this_1.node.parent;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            particles.addComponent(cc.AudioSource).clip = this_1.particleSounds;
            particles.width = 600;
            particles.height = 600;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.trailsImg;
            trail.getComponent(cc.MotionStreak).enabled = false;
            // trail.color = new cc.Color(252, 244, 0);
            this_1.scheduleOnce(function () {
                particles.getComponent(cc.AudioSource).play();
                cc.tween(particles).to(0.75, { width: 35, height: 35 }, { easing: "backOut" }).start();
                cc.tween(particles).to(0.25, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.scheduleOnce(function () {
                        trail.getComponent(cc.MotionStreak).minSeg = 10;
                        trail.getComponent(cc.MotionStreak).stroke = 20;
                        trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        trail.getComponent(cc.MotionStreak).enabled = true;
                        trail.getComponent(cc.MotionStreak).fastMode = true;
                        cc.audioEngine.playEffect(_this.trailSounds, false);
                        // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                        // particles.getComponent(cc.AudioSource).volume = 0.2;
                        // particles.getComponent(cc.AudioSource).play();
                        if (_this.isVertical) {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x, _this.node.y - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress), _this.node.y)) //endpoint
                                .start();
                        }
                        cc.tween(particles).to(0.75, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                        cc.tween(particles).to(0.75, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                            particles.destroy();
                        }).start();
                    }, 0.5);
                }).start();
            }, 0.1 * (i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    var ProgressBar_1;
    ProgressBar.instance = null;
    __decorate([
        property(Boolean)
    ], ProgressBar.prototype, "isVertical", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ProgressBar.prototype, "starImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], ProgressBar.prototype, "trailsImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "trailSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "particleSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "starPopSound", void 0);
    ProgressBar = ProgressBar_1 = __decorate([
        ccclass
    ], ProgressBar);
    return ProgressBar;
}(cc.Component));
exports.default = ProgressBar;

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
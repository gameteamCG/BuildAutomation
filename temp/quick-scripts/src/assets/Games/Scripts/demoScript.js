"use strict";
cc._RF.push(module, '5da6dvS/yhOPqzefDN8xJgO', 'demoScript');
// Games/Scripts/demoScript.ts

"use strict";
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.WheelAnimations = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _numOfParticles = 15;
        // this.playDustAnim(_numOfParticles, this.node);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.25);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim2(_numOfParticles,10, this.node);
        // },0.5);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.75);
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.onClickPlayWheelAnim = function (event) {
        var spineNode = this.node.getChildByName("spine");
        spineNode.getComponent(sp.Skeleton).setAnimation(0, event.target.name, false);
    };
    NewClass.prototype.playDustAnim = function (num, _node) {
        var _this = this;
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var colorsArray = ["#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff"];
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var rngX = this_1.getRandomNumber(0, cc.winSize.width);
            var rngY = this_1.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_1.getRandomNumber(0, colorsArray.length - 1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            // trail.color = new cc.Color(252, 244, 0);
            var rngscale = this_1.getRandomNumber(10, 300);
            var rngEntryTimer = this_1.getRandomNumber(0.5, 1.5);
            var rngTimer1 = this_1.getRandomNumber(0.1, 0.2);
            cc.tween(particles).to(rngTimer1, { width: rngscale, height: rngscale }, { easing: "backOut" }).start();
            cc.tween(particles).bezierTo(rngTimer1, new cc.Vec2(300, 300), //start
            new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height)), //curve range
            new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height))) //endpoint
                .call(function () {
                cc.tween(particles).to(rngEntryTimer + 0.5, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                // cc.tween(particles).repeatForever().start();
                cc.tween(particles).to(4, { scaleX: particles.scaleX * -1 }).start();
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.schedule(function () {
                        particles.opacity = 255;
                        cc.tween(particles).to(_this.getRandomNumber(0.25, 0.75), { opacity: _this.getRandomNumber(0, 50) }).start();
                    }, _this.getRandomNumber(0.1, 0.25));
                    trail.getComponent(cc.MotionStreak).minSeg = _this.getRandomNumber(1, 5);
                    trail.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(5, 10);
                    trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                    trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                    trail.getComponent(cc.MotionStreak).enabled = true;
                    trail.getComponent(cc.MotionStreak).fastMode = true;
                    // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                    // particles.getComponent(cc.AudioSource).volume = 0.2;
                    // particles.getComponent(cc.AudioSource).play();
                    var rngTimer2 = _this.getRandomNumber(0.1, 2);
                    cc.tween(particles).bezierTo(rngTimer2, new cc.Vec2(particles.x, particles.y), //start
                    new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height)), //curve range
                    new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height))) //endpoint
                        .start();
                    cc.tween(particles).to(rngTimer2, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                    cc.tween(particles).to(rngTimer2 + 0.5, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                        particles.destroy();
                    }).start();
                }).start();
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.playDustAnim2 = function (num1, num2, _node) {
        var _this = this;
        console.log("deDust2");
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var colorsArray = ["#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff"];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_2 = function (i) {
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = 300;
            particles.y = 300;
            particles.addComponent(cc.Sprite).spriteFrame = this_2.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_2.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_2.getRandomNumber(0, colorsArray.length - 1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_2.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = 0.1;
            trail.getComponent(cc.MotionStreak).stroke = this_2.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            this_2.scheduleOnce(function () {
                cc.tween(particles).to(0.5, { width: 100, height: 100 }, { easing: "backOut" }).call(function () {
                    cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, 3 * cc.winSize.width / 4), _this.getRandomNumber(cc.winSize.height / 4, 3 * cc.winSize.height / 4))).call(function () {
                        var _loop_3 = function (j) {
                            var bullets = cc.instantiate(new cc.Node);
                            var bTrails = cc.instantiate(new cc.Node);
                            bullets.addComponent(cc.Sprite).spriteFrame = _this.dustImg;
                            bTrails.parent = bullets;
                            bTrails.addComponent(cc.MotionStreak).preview;
                            bTrails.getComponent(cc.MotionStreak).texture = _this.dustTrailImg;
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).minSeg = 0.1;
                            bTrails.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(10, 25);
                            bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                            bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).fastMode = true;
                            bullets.width = 100;
                            bullets.height = 100;
                            // bullets.angle = this.getRandomNumber(0, 359);
                            bullets.name = "bullets" + j;
                            bullets.parent = particles;
                            bullets.x = 0;
                            bullets.y = 0;
                            bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomNumber(0, colorsArray.length - 1)]);
                            var rngDistance = 500;
                            cc.tween(bullets).to(1, { x: _this.getRandomNumber(bullets.x - _this.getRandomNumber(100, 500), bullets.x + _this.getRandomNumber(100, 500)), y: _this.getRandomNumber(bullets.y - _this.getRandomNumber(100, 500), bullets.y + _this.getRandomNumber(100, 500)) }).start();
                            cc.tween(bullets).to(0.2, { opacity: 100 }).to(0.2, { opacity: 255 }).to(0.2, { opacity: 100 }).to(0.2, { opacity: 255 }).to(0.2, { opacity: 100, scale: 0 }).call(function () {
                                bullets.destroy();
                                particles.destroy();
                            }).start();
                        };
                        for (var j = 0; j < num2; j++) {
                            _loop_3(j);
                        }
                    }).start();
                }).start();
            }, 0.25 * (i + 1));
        };
        var this_2 = this;
        for (var i = 0; i < num1; i++) {
            _loop_2(i);
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "dustImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], NewClass.prototype, "dustTrailImg", void 0);
    __decorate([
        property(String)
    ], NewClass.prototype, "WheelAnimations", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
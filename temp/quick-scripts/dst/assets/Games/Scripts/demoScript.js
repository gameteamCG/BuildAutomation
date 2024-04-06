
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/demoScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TY3JpcHRzL2RlbW9TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrTUM7UUEvTEcsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0Isa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLHFCQUFlLEdBQVksRUFBRSxDQUFDOztRQXdMOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF2TEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGlEQUFpRDtRQUNqRCwwQkFBMEI7UUFDMUIscURBQXFEO1FBQ3JELFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIseURBQXlEO1FBQ3pELFVBQVU7UUFDViwwQkFBMEI7UUFDMUIscURBQXFEO1FBQ3JELFdBQVc7SUFDZixDQUFDO0lBQ08sa0NBQWUsR0FBdkIsVUFBd0IsR0FBVSxFQUFDLEdBQVU7UUFDekMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFRCx1Q0FBb0IsR0FBcEIsVUFBcUIsS0FBSztRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxTQUFTLENBQUMsWUFBWSxD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UyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlHLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQzs0QkFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNoUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2hKLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQ0FDbEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7d0JBM0JmLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFO29DQUFwQixDQUFDO3lCQTZCUjtvQkFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBaEVsQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFBcEIsQ0FBQztTQWlFUjtJQUNMLENBQUM7SUEzTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxREFDYTtJQVRiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrTTVCO0lBQUQsZUFBQztDQWxNRCxBQWtNQyxDQWxNcUMsRUFBRSxDQUFDLFNBQVMsR0FrTWpEO2tCQWxNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgZHVzdEltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcbiAgICBkdXN0VHJhaWxJbWc6Y2MuVGV4dHVyZTJEID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXG4gICAgV2hlZWxBbmltYXRpb25zOlN0cmluZyBbXT0gW107XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgX251bU9mUGFydGljbGVzID0gMTU7XG4gICAgICAgIC8vIHRoaXMucGxheUR1c3RBbmltKF9udW1PZlBhcnRpY2xlcywgdGhpcy5ub2RlKTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgIHRoaXMucGxheUR1c3RBbmltKF9udW1PZlBhcnRpY2xlcywgdGhpcy5ub2RlKTtcbiAgICAgICAgLy8gfSwwLjI1KTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgIHRoaXMucGxheUR1c3RBbmltMihfbnVtT2ZQYXJ0aWNsZXMsMTAsIHRoaXMubm9kZSk7XG4gICAgICAgIC8vIH0sMC41KTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgIHRoaXMucGxheUR1c3RBbmltKF9udW1PZlBhcnRpY2xlcywgdGhpcy5ub2RlKTtcbiAgICAgICAgLy8gfSwwLjc1KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOm51bWJlcixtYXg6bnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQ2xpY2tQbGF5V2hlZWxBbmltKGV2ZW50KXtcbiAgICAgICAgbGV0IHNwaW5lTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVgKTtcbiAgICAgICAgXG4gICAgICAgIHNwaW5lTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBldmVudC50YXJnZXQubmFtZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHBsYXlEdXN0QW5pbShudW06bnVtYmVyLCBfbm9kZTpjYy5Ob2RlKXtcbiAgICAgICAgLy8gZGVjbGFyZSBhIGNjLnNwcml0ZUZyYW1lIGFib3ZlIGZvciBwYXJ0aWNsZXMgaW1nXG4gICAgICAgIC8vIGRlY2xhcmUgYSBjYy5UZXh0dXJlMkQgYWJvdmUgZm9yIHRyYWlsIGltZ1xuICAgICAgICAvLyBkZWNsYXJlIGFueSBjYy5BdWRpb0NsaXAgYWJvdmUgZm9yIHBhcnRpY2xlcyBzb3VuZEZ4XG4gICAgICAgIC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgdHJhaWwgc291bmRGeFxuICAgICAgICBsZXQgY29sb3JzQXJyYXk6c3RyaW5nIFtdID0gW2AjZmZmZmZmYCxgI2ZmZmYwMGAsYCNmZmYwMGZgLGAjZmYwMGZmYCxgI2YwMGZmZmAsYCMwMGZmZmZgLGAjZmYwMDAwYCxgI2YwMDAwZmAsYCMwMDAwZmZgXTtcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcbiAgICAgICAgbGV0IF9vZmZzZXQgPSA1MFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm5nX051bU9mUGFydGljbGVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcbiAgICAgICAgICAgIGxldCBybmdZID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgbGV0IHRyYWlsID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xuICAgICAgICAgICAgdHJhaWwucGFyZW50ID0gcGFydGljbGVzO1xuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xuICAgICAgICAgICAgcGFydGljbGVzLnkgPSBybmdZO1xuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5kdXN0SW1nO1xuICAgICAgICAgICAgLy8gcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XG4gICAgICAgICAgICBwYXJ0aWNsZXMud2lkdGggPSAwO1xuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IHBhcnRpY2xlcy53aWR0aDtcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM2MCk7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuekluZGV4ID0gLTE7XG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgK2k7XG4gICAgICAgICAgICBwYXJ0aWNsZXMub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKHBhcnRpY2xlcy5jb2xvciwgY29sb3JzQXJyYXlbdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY29sb3JzQXJyYXkubGVuZ3RoLTEpXSk7XG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMuZHVzdFRyYWlsSW1nO1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyB0cmFpbC5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTIsIDI0NCwgMCk7XG4gICAgICAgICAgICBsZXQgcm5nc2NhbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwzMDApO1xuICAgICAgICAgICAgbGV0IHJuZ0VudHJ5VGltZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLjUsMS41KTtcbiAgICAgICAgICAgIGxldCBybmdUaW1lcjEgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLjEsMC4yKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8ocm5nVGltZXIxLCB7d2lkdGg6IHJuZ3NjYWxlLCBoZWlnaHQ6IHJuZ3NjYWxlfSx7ZWFzaW5nOmBiYWNrT3V0YH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKHJuZ1RpbWVyMSwgbmV3IGNjLlZlYzIoMzAwLCAzMDApLCAvL3N0YXJ0XG4gICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS5oZWlnaHQpKSwgLy9jdXJ2ZSByYW5nZVxuICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUuaGVpZ2h0KSkpIC8vZW5kcG9pbnRcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byhybmdFbnRyeVRpbWVyKzAuNSx7YW5nbGU6IDB9LHtlYXNpbmc6YGN1YmljSW5PdXRgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yNSx7YW5nbGU6IDE4MH0se2Vhc2luZzpgY3ViaWNJbk91dGB9KS5zdGFydCgpLnRvKDAuMjUse2FuZ2xlOiAzNjB9LHtlYXNpbmc6YGN1YmljSW5PdXRgfSk7XG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4ocGFydGljbGVzKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDQse3NjYWxlWDogcGFydGljbGVzLnNjYWxlWCAqIC0xfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSx7b3BhY2l0eTogMjU1fSx7ZWFzaW5nOmBjdWJpY0luT3V0YH0pLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAuMjUsMC43NSksIHtvcGFjaXR5OnRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsNTApfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzLmdldFJhbmRvbU51bWJlcigwLjEsMC4yNSkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxLDUpO1xuICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcig1LDEwKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFkZVRpbWUgPSAwLjI7XG4gICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMudHJhaWxTb3VuZHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDAuMjtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm5nVGltZXIyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMC4xLDIpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKHJuZ1RpbWVyMiwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUud2lkdGgpLCB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLmhlaWdodCkpLCAvL2N1cnZlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUuaGVpZ2h0KSkpIC8vZW5kcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byhybmdUaW1lcjIse2FuZ2xlOiAtcGFydGljbGVzLmFuZ2xlLzJ9LHtlYXNpbmc6YGN1YmljSW5PdXRgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byhybmdUaW1lcjIrMC41LCB7c2NhbGU6IDB9LHtlYXNpbmc6IGBjdWJpY0luYH0pLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5RHVzdEFuaW0yKG51bTE6bnVtYmVyLCBudW0yOm51bWJlciwgX25vZGU6Y2MuTm9kZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkZUR1c3QyYCk7XG4gICAgICAgIC8vIGRlY2xhcmUgYSBjYy5zcHJpdGVGcmFtZSBhYm92ZSBmb3IgcGFydGljbGVzIGltZ1xuICAgICAgICAvLyBkZWNsYXJlIGEgY2MuVGV4dHVyZTJEIGFib3ZlIGZvciB0cmFpbCBpbWdcbiAgICAgICAgLy8gZGVjbGFyZSBhbnkgY2MuQXVkaW9DbGlwIGFib3ZlIGZvciBwYXJ0aWNsZXMgc291bmRGeFxuICAgICAgICAvLyBkZWNsYXJlIGFueSBjYy5BdWRpb0NsaXAgYWJvdmUgZm9yIHRyYWlsIHNvdW5kRnhcbiAgICAgICAgbGV0IGNvbG9yc0FycmF5OnN0cmluZyBbXSA9IFtgI2ZmZmZmZmAsYCNmZmZmMDBgLGAjZmZmMDBmYCxgI2ZmMDBmZmAsYCNmMDBmZmZgLGAjMDBmZmZmYCxgI2ZmMDAwMGAsYCNmMDAwMGZgLGAjMDAwMGZmYF07XG4gICAgICAgIGxldCBybmdfTnVtT2ZQYXJ0aWNsZXMgPSBudW0xO1xuICAgICAgICBsZXQgX29mZnNldCA9IDUwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW0xOyBpKyspe1xuICAgICAgICAgICAgLy8gbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcbiAgICAgICAgICAgIC8vIGxldCBybmdZID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgbGV0IHRyYWlsID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xuICAgICAgICAgICAgdHJhaWwucGFyZW50ID0gcGFydGljbGVzO1xuICAgICAgICAgICAgcGFydGljbGVzLnggPSAzMDA7XG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IDMwMDtcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVzdEltZztcbiAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBhcnRpY2xlU291bmRzO1xuICAgICAgICAgICAgcGFydGljbGVzLndpZHRoID0gMDtcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSBwYXJ0aWNsZXMud2lkdGg7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuYW5nbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCtpO1xuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKHBhcnRpY2xlcy5jb2xvciwgY29sb3JzQXJyYXlbdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY29sb3JzQXJyYXkubGVuZ3RoLTEpXSk7XG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMuZHVzdFRyYWlsSW1nO1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAwLjE7XG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwgMjUpO1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFkZVRpbWUgPSAwLjI7XG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjUsIHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH0se2Vhc2luZzpgYmFja091dGB9KS5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgXG4gICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54LCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnksIGNjLndpblNpemUuaGVpZ2h0KSksIFxuICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihjYy53aW5TaXplLndpZHRoLzQsIDMqIGNjLndpblNpemUud2lkdGgvNCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGNjLndpblNpemUuaGVpZ2h0LzQsIDMqIGNjLndpblNpemUuaGVpZ2h0LzQpKSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bTI7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJUcmFpbHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVzdEltZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLnBhcmVudCA9IGJ1bGxldHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMuZHVzdFRyYWlsSW1nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwgMjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFkZVRpbWUgPSAwLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMuaGVpZ2h0ID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1bGxldHMuYW5nbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMubmFtZSA9IGBidWxsZXRzYCtqOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLnBhcmVudCA9IHBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgocGFydGljbGVzLmNvbG9yLCBjb2xvcnNBcnJheVt0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjb2xvcnNBcnJheS5sZW5ndGgtMSldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm5nRGlzdGFuY2UgPSA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0cykudG8oMSwge3g6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGJ1bGxldHMueCAtIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApLCBidWxsZXRzLnggKyB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsNTAwKSksIHk6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGJ1bGxldHMueSAtIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApLCBidWxsZXRzLnkgKyB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsNTAwKSl9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldHMpLnRvKDAuMix7b3BhY2l0eTogMTAwfSkudG8oMC4yLHtvcGFjaXR5OiAyNTV9KS50bygwLjIse29wYWNpdHk6IDEwMH0pLnRvKDAuMix7b3BhY2l0eTogMjU1fSkudG8oMC4yLHtvcGFjaXR5OiAxMDAsIHNjYWxlOiAwfSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0sMC4yNSooaSsxKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
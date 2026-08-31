
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/VideoQuiz/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1734yGyoRLAJc6pq/Ly4ow', 'endScreen');
// Games/VideoQuiz/Scripts/endScreen.ts

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
        _this.wheelIntroAudio = null;
        _this.wheelSpinAudio = null;
        _this.wheelRetryAudio = null;
        _this.wheelWinAudio = null;
        _this.starsAudio = null;
        _this.changeAudio = null;
        _this.starImg = null;
        _this.scoreLabelNode = null;
        // LIFE-CYCLE CALLBACKS:
        _this.filling1 = 0;
        _this.filling2 = 0;
        _this.filling3 = 0;
        _this.showNum1 = 0;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.currentTween = 0;
        _this.playerScore = 0;
        _this.totalLevels = 7;
        _this.spinStateAnim = ["wheel_result_1_x5", "wheel_result_2_x20", "wheel_result_3_x8", "wheel_result_4_x10", "wheel_result_5_x15", "wheel_result_6_again"];
        _this.spinStateMultiplier = ["5", "20", "8", "10", "15", "again"];
        _this.rngAnimIndex = 0;
        return _this;
    }
    NewClass.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.animationPlaybackSequence = function () {
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        audioSource.clip = this.wheelIntroAudio;
        audioSource.play();
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_intro", false);
        this.scheduleOnce(function () {
            spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
            playButtonNode.children[0].getComponent(cc.Button).interactable = true;
        }, 0.75);
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.onPlayButtonClicked = function () {
        var _this = this;
        console.log("buttonClicked");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.rngAnimIndex = this.getRandomInt(0, this.spinStateAnim.length);
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_tapped", false);
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _this.spinWheelRotate(_this.rngAnimIndex);
        }, 0.25);
    };
    NewClass.prototype.spinWheelRotate = function (animNum) {
        var _this = this;
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, this.spinStateAnim[animNum], false);
        audioSource.clip = this.wheelSpinAudio;
        audioSource.loop = true;
        audioSource.play();
        this.scheduleOnce(function () {
            if (_this.rngAnimIndex == _this.spinStateAnim.length - 1) { //retry
                playButtonNode.children[0].getComponent(cc.Button).interactable = true;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_demanding_atention", true);
                audioSource.clip = _this.wheelRetryAudio;
                audioSource.play();
            }
            else {
                audioSource.loop = false;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_win_" + (_this.rngAnimIndex + 1), false);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_ending", false);
                audioSource.clip = _this.wheelWinAudio;
                _this.node.getChildByName("character").getComponent(cc.Animation).play("puzzleJump");
                audioSource.play();
                _this.scheduleOnce(function () {
                    _this.showStarsMultiplier(_this.playerScore);
                }, 3);
            }
        }, 3.25);
    };
    NewClass.prototype.showStarsMultiplier = function (num) {
        var _this = this;
        this.scoreLabelNode.scale = 0;
        this.scoreLabelNode.getComponent(cc.Label).string = "x" + this.spinStateMultiplier[this.rngAnimIndex];
        this.node.getChildByName("Popup").active = false;
        cc.tween(this.scoreLabelNode).to(1, { scale: 1 }, { easing: "backOut" }).call(function () {
            _this.scheduleOnce(function () {
                _this.scoreLabelNode.getComponent(cc.Label).string = num + " x " + _this.spinStateMultiplier[_this.rngAnimIndex];
                _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                _this.node.getComponent(cc.AudioSource).play();
                cc.tween(_this.scoreLabelNode).to(1, { scale: 2 }, { easing: "backIn" }).call(function () {
                    _this.scoreLabelNode.getComponent(cc.Label).string = (num * parseInt(_this.spinStateMultiplier[_this.rngAnimIndex])).toString();
                    _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                    _this.node.getComponent(cc.AudioSource).play();
                    cc.tween(_this.scoreLabelNode).to(0.5, { scale: 0 }, { easing: "backIn" }).start();
                }).start();
            }, 0.1);
        }).start();
        var max = parseInt(this.spinStateMultiplier[this.rngAnimIndex]);
        var _loop_1 = function (i) {
            // console.log(i);
            var starNodes = new cc.Node("stars" + (i + 1));
            starNodes.parent = this_1.node;
            starNodes.x = 0;
            starNodes.y = 0;
            starNodes.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            starNodes.addComponent(cc.AudioSource).clip = this_1.starsAudio;
            starNodes.getComponent(cc.AudioSource).volume = 0.5;
            var posX = this_1.getRandomInt(-320, 320);
            var posY = this_1.getRandomInt(-220, 220);
            // if(posY > 100){
            //     posX = this.getRandomInt(-160, 160);
            // }
            // if(posY < -100){
            //     posX = this.getRandomInt(-160, 160);
            // }
            // if(i < Math.floor(max/2)){
            //     posX *= -1;
            // }
            starNodes.scale = 0;
            this_1.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.tween(starNodes).to(1, { scale: 1, x: posX, y: posY }, { easing: "backOut" }).call(function () {
                        cc.tween(starNodes).to(1, { scale: 0.5, x: posX / 1.5, y: posY / 1.5 }, { easing: "backIn" }).call(function () {
                            // cc.tween(starNodes).to(2,{x:posX/1.5, y:posY/1.5},{easing:`backOut`}).start();
                        }).start();
                    }).start();
                    // cc.tween(starNodes).to(this.getRandomInt(30,50),{angle: 360*5}).start();
                    starNodes.getComponent(cc.AudioSource).play();
                    if (i == max - 1) {
                        console.log("gameEnded--true");
                    }
                }, (i + 1) / 50);
            }, 2.5);
        };
        var this_1 = this;
        for (var i = 0; i < max; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelIntroAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelSpinAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelRetryAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelWinAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "starsAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "changeAudio", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "starImg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scoreLabelNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFZpZGVvUXVpelxcU2NyaXB0c1xcZW5kU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUxDO1FBbkxXLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUdyQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFHcEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUduQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRXZDLHdCQUF3QjtRQUNoQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixtQkFBYSxHQUFhLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUMvSix5QkFBbUIsR0FBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFD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QyxDQUFDO3FCQUNsQztnQkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFckIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7UUFuQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQW5CLENBQUM7U0FvQ1Q7SUFFTCxDQUFDO0lBM0tEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ3NCO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ3FCO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ3NCO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ2lCO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2M7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDcUI7SUF6QnRCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1TDVCO0lBQUQsZUFBQztDQXZMRCxBQXVMQyxDQXZMcUMsRUFBRSxDQUFDLFNBQVMsR0F1TGpEO2tCQXZMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB3aGVlbEludHJvQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgd2hlZWxTcGluQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgd2hlZWxSZXRyeUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHdoZWVsV2luQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhcnNBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSBmaWxsaW5nMTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmlsbGluZzI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZpbGxpbmczOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzaG93TnVtMTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbnVtMTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbnVtMjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFR3ZWVuOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG4gICAgcHJpdmF0ZSBzcGluU3RhdGVBbmltOiBzdHJpbmdbXSA9IFtgd2hlZWxfcmVzdWx0XzFfeDVgLCBgd2hlZWxfcmVzdWx0XzJfeDIwYCwgYHdoZWVsX3Jlc3VsdF8zX3g4YCwgYHdoZWVsX3Jlc3VsdF80X3gxMGAsIGB3aGVlbF9yZXN1bHRfNV94MTVgLCBgd2hlZWxfcmVzdWx0XzZfYWdhaW5gXTtcclxuICAgIHByaXZhdGUgc3BpblN0YXRlTXVsdGlwbGllcjogc3RyaW5nW10gPSBbYDVgLCBgMjBgLCBgOGAsIGAxMGAsIGAxNWAsIGBhZ2FpbmBdO1xyXG4gICAgcHJpdmF0ZSBybmdBbmltSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uUGxheWJhY2tTZXF1ZW5jZSgpIHtcclxuICAgICAgICBsZXQgc3BpbldoZWVsTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVXaGVlbGApO1xyXG4gICAgICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XHJcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMud2hlZWxJbnRyb0F1ZGlvO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICBwbGF5QnV0dG9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV9pbnRyb2AsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5XaGVlbE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHdoZWVsX2xvb3BgLCB0cnVlKTtcclxuICAgICAgICAgICAgcGxheUJ1dHRvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjc1KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYnV0dG9uQ2xpY2tlZGApO1xyXG4gICAgICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XHJcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcblxyXG4gICAgICAgIHRoaXMucm5nQW5pbUluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgdGhpcy5zcGluU3RhdGVBbmltLmxlbmd0aCk7XHJcbiAgICAgICAgcGxheUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHBsYXlfdGFwcGVkYCwgZmFsc2UpO1xyXG4gICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGluV2hlZWxSb3RhdGUodGhpcy5ybmdBbmltSW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgfSwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BpbldoZWVsUm90YXRlKGFuaW1OdW06IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzcGluV2hlZWxOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVdoZWVsYCk7XHJcbiAgICAgICAgbGV0IHBsYXlCdXR0b25Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVBsYXlCdXR0b25gKTtcclxuICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICBzcGluV2hlZWxOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuc3BpblN0YXRlQW5pbVthbmltTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsU3BpbkF1ZGlvO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJuZ0FuaW1JbmRleCA9PSB0aGlzLnNwaW5TdGF0ZUFuaW0ubGVuZ3RoIC0gMSkgey8vcmV0cnlcclxuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzcGluV2hlZWxOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGB3aGVlbF9sb29wYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV9kZW1hbmRpbmdfYXRlbnRpb25gLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsUmV0cnlBdWRpbztcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHdoZWVsX3dpbl9gICsgKHRoaXMucm5nQW5pbUluZGV4ICsgMSksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2VuZGluZ2AsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsV2luQXVkaW87XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYGNoYXJhY3RlcmApLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUp1bXBgKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyc011bHRpcGxpZXIodGhpcy5wbGF5ZXJTY29yZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0sIDMuMjUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93U3RhcnNNdWx0aXBsaWVyKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGB4YCArIHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBQb3B1cGApLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NvcmVMYWJlbE5vZGUpLnRvKDEsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IGBiYWNrT3V0YCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG51bSArIGAgeCBgICsgdGhpcy5zcGluU3RhdGVNdWx0aXBsaWVyW3RoaXMucm5nQW5pbUluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmNoYW5nZUF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zY29yZUxhYmVsTm9kZSkudG8oMSwgeyBzY2FsZTogMiB9LCB7IGVhc2luZzogYGJhY2tJbmAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChudW0gKiBwYXJzZUludCh0aGlzLnNwaW5TdGF0ZU11bHRpcGxpZXJbdGhpcy5ybmdBbmltSW5kZXhdKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5jaGFuZ2VBdWRpbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zY29yZUxhYmVsTm9kZSkudG8oMC41LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBgYmFja0luYCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBsZXQgbWF4ID0gcGFyc2VJbnQodGhpcy5zcGluU3RhdGVNdWx0aXBsaWVyW3RoaXMucm5nQW5pbUluZGV4XSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJOb2RlcyA9IG5ldyBjYy5Ob2RlKGBzdGFyc2AgKyAoaSArIDEpKTtcclxuICAgICAgICAgICAgc3Rhck5vZGVzLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgc3Rhck5vZGVzLnggPSAwO1xyXG4gICAgICAgICAgICBzdGFyTm9kZXMueSA9IDA7XHJcbiAgICAgICAgICAgIHN0YXJOb2Rlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgc3Rhck5vZGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhcnNBdWRpbztcclxuICAgICAgICAgICAgc3Rhck5vZGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMC41O1xyXG4gICAgICAgICAgICBsZXQgcG9zWCA9IHRoaXMuZ2V0UmFuZG9tSW50KC0zMjAsIDMyMCk7XHJcbiAgICAgICAgICAgIGxldCBwb3NZID0gdGhpcy5nZXRSYW5kb21JbnQoLTIyMCwgMjIwKTtcclxuICAgICAgICAgICAgLy8gaWYocG9zWSA+IDEwMCl7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NYID0gdGhpcy5nZXRSYW5kb21JbnQoLTE2MCwgMTYwKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZihwb3NZIDwgLTEwMCl7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NYID0gdGhpcy5nZXRSYW5kb21JbnQoLTE2MCwgMTYwKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZihpIDwgTWF0aC5mbG9vcihtYXgvMikpe1xyXG4gICAgICAgICAgICAvLyAgICAgcG9zWCAqPSAtMTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBzdGFyTm9kZXMuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc3Rhck5vZGVzKS50bygxLCB7IHNjYWxlOiAxLCB4OiBwb3NYLCB5OiBwb3NZIH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8oMSwgeyBzY2FsZTogMC41LCB4OiBwb3NYIC8gMS41LCB5OiBwb3NZIC8gMS41IH0sIHsgZWFzaW5nOiBgYmFja0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8oMix7eDpwb3NYLzEuNSwgeTpwb3NZLzEuNX0se2Vhc2luZzpgYmFja091dGB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oc3Rhck5vZGVzKS50byh0aGlzLmdldFJhbmRvbUludCgzMCw1MCkse2FuZ2xlOiAzNjAqNX0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IG1heCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdhbWVFbmRlZC0tdHJ1ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIChpICsgMSkgLyA1MCk7XHJcblxyXG4gICAgICAgICAgICB9LCAyLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
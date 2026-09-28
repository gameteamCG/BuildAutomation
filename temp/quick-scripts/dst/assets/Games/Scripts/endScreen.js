
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1734yGyoRLAJc6pq/Ly4ow', 'endScreen');
// Games/Scripts/endScreen.ts

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
var globalVariables_1 = require("./globalVariables");
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
        _this.spinStateAnim = [
            "wheel_result_1_x5",
            "wheel_result_2_x20",
            "wheel_result_3_x8",
            "wheel_result_4_x10",
            "wheel_result_5_x15",
            "wheel_result_6_again",
        ];
        _this.spinStateMultiplier = ["5", "20", "8", "10", "15", "again"];
        _this.rngAnimIndex = 0;
        return _this;
    }
    NewClass.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };
    // onLoad () {}
    NewClass.prototype.start = function () {
        //console.log("globalVariables.Instance.answerArray : ", globalVariables.Instance.answerArray)
        // this.setEndProgressBar();
        // this.animationPlaybackSequence();
    };
    NewClass.prototype.animationPlaybackSequence = function () {
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        audioSource.clip = this.wheelIntroAudio;
        audioSource.play();
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        playButtonNode
            .getComponent(sp.Skeleton)
            .setAnimation(0, "play_intro", false);
        this.scheduleOnce(function () {
            spinWheelNode
                .getComponent(sp.Skeleton)
                .setAnimation(0, "wheel_loop", true);
            playButtonNode.children[0].getComponent(cc.Button).interactable = true;
        }, 0.75);
    };
    NewClass.prototype.update = function (dt) { };
    NewClass.prototype.onPlayButtonClicked = function () {
        var _this = this;
        console.log("buttonClicked");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.rngAnimIndex = this.getRandomInt(0, this.spinStateAnim.length);
        playButtonNode
            .getComponent(sp.Skeleton)
            .setAnimation(0, "play_tapped", false);
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
        spinWheelNode
            .getComponent(sp.Skeleton)
            .setAnimation(0, this.spinStateAnim[animNum], false);
        audioSource.clip = this.wheelSpinAudio;
        audioSource.loop = true;
        audioSource.play();
        this.scheduleOnce(function () {
            if (_this.rngAnimIndex == _this.spinStateAnim.length - 1) {
                //retry
                playButtonNode.children[0].getComponent(cc.Button).interactable = true;
                spinWheelNode
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "wheel_loop", true);
                playButtonNode
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "play_demanding_atention", true);
                audioSource.clip = _this.wheelRetryAudio;
                audioSource.play();
            }
            else {
                audioSource.loop = false;
                spinWheelNode
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "wheel_win_" + (_this.rngAnimIndex + 1), false);
                playButtonNode
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "play_ending", false);
                audioSource.clip = _this.wheelWinAudio;
                _this.node
                    .getChildByName("character")
                    .getComponent(cc.Animation)
                    .play("puzzleJump");
                audioSource.play();
                _this.scheduleOnce(function () {
                    _this.showStarsMultiplier(_this.playerScore);
                }, 3);
            }
        }, 3.25);
    };
    NewClass.prototype.setEndProgressBar = function () {
        var progressBar = this.node
            .getChildByName("Popup")
            .getChildByName("progressBar");
        // console.log("answerValues : ", globalVariables.Instance.answerArray)
        for (var i = 0; i < this.totalLevels; i++) {
            if (globalVariables_1.default.Instance.answerArray[i] == true) {
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
                this.playerScore++;
                // console.log(`SCORE: `+this.playerScore);
            }
            else {
                progressBar.children[i].getChildByName("rightQ").active = false;
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = true;
            }
        }
    };
    NewClass.prototype.showStarsMultiplier = function (num) {
        var _this = this;
        this.scoreLabelNode.scale = 0;
        this.scoreLabelNode.getComponent(cc.Label).string =
            "x" + this.spinStateMultiplier[this.rngAnimIndex];
        this.node.getChildByName("Popup").active = false;
        cc.tween(this.scoreLabelNode)
            .to(1, { scale: 1 }, { easing: "backOut" })
            .call(function () {
            _this.scheduleOnce(function () {
                _this.scoreLabelNode.getComponent(cc.Label).string =
                    num + " x " + _this.spinStateMultiplier[_this.rngAnimIndex];
                _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                _this.node.getComponent(cc.AudioSource).play();
                cc.tween(_this.scoreLabelNode)
                    .to(1, { scale: 2 }, { easing: "backIn" })
                    .call(function () {
                    _this.scoreLabelNode.getComponent(cc.Label).string = (num * parseInt(_this.spinStateMultiplier[_this.rngAnimIndex])).toString();
                    _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                    _this.node.getComponent(cc.AudioSource).play();
                    cc.tween(_this.scoreLabelNode)
                        .to(0.5, { scale: 0 }, { easing: "backIn" })
                        .start();
                })
                    .start();
            }, 0.1);
        })
            .start();
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
                    cc.tween(starNodes)
                        .to(1, { scale: 1, x: posX, y: posY }, { easing: "backOut" })
                        .call(function () {
                        cc.tween(starNodes)
                            .to(1, { scale: 0.5, x: posX / 1.5, y: posY / 1.5 }, { easing: "backIn" })
                            .call(function () {
                            // cc.tween(starNodes).to(2,{x:posX/1.5, y:posY/1.5},{easing:`backOut`}).start();
                        })
                            .start();
                    })
                        .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGVuZFNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFDMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2T0M7UUEzT1MscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBR3JDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBR25DLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFdkMsd0JBQXdCO1FBQ2hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG1CQUFhLEdBQWE7WUFDaEMsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixzQkFBc0I7U0FDdkIsQ0FBQztRQUNNLHlCQUFtQixHQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUFnTW5DLENBQUM7SUE5TEMsK0JBQVksR0FBWixVQUFhLEdBQUcsRUFBRSxHQUFHO1FBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7SUFDaEgsQ0FBQztJQUNELGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0UsOEZBQThGO1FBQzlGLDRCQUE0QjtRQUM1QixvQ0FBb0M7SUFDdEMsQ0FBQztJQUVELDRDQUF5QixHQUF6QjtRQUNFLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDeEUsY0FBYzthQUNYLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsYUFBYTtpQkFDVixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFLElBQUcsQ0FBQztJQUViLHNDQUFtQixHQUFuQjtRQUFBLGlCQWFDO1FBWkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsY0FBYzthQUNYLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsT0FBZTtRQUEvQixpQkF5Q0M7UUF4Q0MsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsYUFBYTthQUNWLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDdkMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdEQsT0FBTztnQkFDUCxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDdkUsYUFBYTtxQkFDVixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLGNBQWM7cUJBQ1gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQztnQkFDeEMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixhQUFhO3FCQUNWLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xFLGNBQWM7cUJBQ1gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxJQUFJO3FCQUNOLGNBQWMsQ0FBQyxXQUFXLENBQUM7cUJBQzNCLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDeEIsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUN2QixjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsdUVBQXVFO1FBQ3ZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDbkQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQiwyQ0FBMkM7YUFDNUM7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixHQUFXO1FBQS9CLGlCQTZFQztRQTVFQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDMUIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUMxQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtvQkFDL0MsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9ELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDO3FCQUMxQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO3FCQUN6QyxJQUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUNsRCxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDNUQsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDYixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBQy9ELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDO3lCQUMxQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO3lCQUMzQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7WUFDYixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztRQUVYLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZELENBQUM7WUFDUixrQkFBa0I7WUFDbEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBSyxJQUFJLENBQUM7WUFDN0IsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQUssT0FBTyxDQUFDO1lBQzdELFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFLLFVBQVUsQ0FBQztZQUM5RCxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3BELElBQUksSUFBSSxHQUFHLE9BQUssWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksSUFBSSxHQUFHLE9BQUssWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLGtCQUFrQjtZQUNsQiwyQ0FBMkM7WUFDM0MsSUFBSTtZQUNKLG1CQUFtQjtZQUNuQiwyQ0FBMkM7WUFDM0MsSUFBSTtZQUNKLDZCQUE2QjtZQUM3QixrQkFBa0I7WUFDbEIsSUFBSTtZQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLE9BQUssWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzt5QkFDaEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQzVELElBQUksQ0FBQzt3QkFDSixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs2QkFDaEIsRUFBRSxDQUNELENBQUMsRUFDRCxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsRUFDNUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQ3JCOzZCQUNBLElBQUksQ0FBQzs0QkFDSixpRkFBaUY7d0JBQ25GLENBQUMsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQztvQkFDYixDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ1gsMkVBQTJFO29CQUMzRSxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTt3QkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUNoQztnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7UUE1Q1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQW5CLENBQUM7U0E2Q1Q7SUFDSCxDQUFDO0lBMU9EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ3NCO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ3FCO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ3NCO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ2lCO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2M7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDcUI7SUF2QnBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2TzVCO0lBQUQsZUFBQztDQTdPRCxBQTZPQyxDQTdPcUMsRUFBRSxDQUFDLFNBQVMsR0E2T2pEO2tCQTdPb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHdoZWVsSW50cm9BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHdoZWVsU3BpbkF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgd2hlZWxSZXRyeUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgd2hlZWxXaW5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHN0YXJzQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBjaGFuZ2VBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHByaXZhdGUgc3RhckltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcml2YXRlIHNjb3JlTGFiZWxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgcHJpdmF0ZSBmaWxsaW5nMTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGZpbGxpbmcyOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgZmlsbGluZzM6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzaG93TnVtMTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIG51bTE6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBudW0yOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudFR3ZWVuOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgcGxheWVyU2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcbiAgcHJpdmF0ZSBzcGluU3RhdGVBbmltOiBzdHJpbmdbXSA9IFtcclxuICAgIGB3aGVlbF9yZXN1bHRfMV94NWAsXHJcbiAgICBgd2hlZWxfcmVzdWx0XzJfeDIwYCxcclxuICAgIGB3aGVlbF9yZXN1bHRfM194OGAsXHJcbiAgICBgd2hlZWxfcmVzdWx0XzRfeDEwYCxcclxuICAgIGB3aGVlbF9yZXN1bHRfNV94MTVgLFxyXG4gICAgYHdoZWVsX3Jlc3VsdF82X2FnYWluYCxcclxuICBdO1xyXG4gIHByaXZhdGUgc3BpblN0YXRlTXVsdGlwbGllcjogc3RyaW5nW10gPSBbYDVgLCBgMjBgLCBgOGAsIGAxMGAsIGAxNWAsIGBhZ2FpbmBdO1xyXG4gIHByaXZhdGUgcm5nQW5pbUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxuICB9XHJcbiAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSA6IFwiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkpXHJcbiAgICAvLyB0aGlzLnNldEVuZFByb2dyZXNzQmFyKCk7XHJcbiAgICAvLyB0aGlzLmFuaW1hdGlvblBsYXliYWNrU2VxdWVuY2UoKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvblBsYXliYWNrU2VxdWVuY2UoKSB7XHJcbiAgICBsZXQgc3BpbldoZWVsTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVXaGVlbGApO1xyXG4gICAgbGV0IHBsYXlCdXR0b25Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVBsYXlCdXR0b25gKTtcclxuICAgIGxldCBhdWRpb1NvdXJjZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMud2hlZWxJbnRyb0F1ZGlvO1xyXG4gICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgcGxheUJ1dHRvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICBwbGF5QnV0dG9uTm9kZVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2ludHJvYCwgZmFsc2UpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBzcGluV2hlZWxOb2RlXHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGB3aGVlbF9sb29wYCwgdHJ1ZSk7XHJcbiAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICB9LCAwLjc1KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge31cclxuXHJcbiAgb25QbGF5QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBidXR0b25DbGlja2VkYCk7XHJcbiAgICBsZXQgcGxheUJ1dHRvbk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHNwaW5lUGxheUJ1dHRvbmApO1xyXG4gICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcblxyXG4gICAgdGhpcy5ybmdBbmltSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCB0aGlzLnNwaW5TdGF0ZUFuaW0ubGVuZ3RoKTtcclxuICAgIHBsYXlCdXR0b25Ob2RlXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgYHBsYXlfdGFwcGVkYCwgZmFsc2UpO1xyXG4gICAgcGxheUJ1dHRvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3BpbldoZWVsUm90YXRlKHRoaXMucm5nQW5pbUluZGV4KTtcclxuICAgIH0sIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgc3BpbldoZWVsUm90YXRlKGFuaW1OdW06IG51bWJlcikge1xyXG4gICAgbGV0IHNwaW5XaGVlbE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHNwaW5lV2hlZWxgKTtcclxuICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XHJcbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgIHNwaW5XaGVlbE5vZGVcclxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLnNldEFuaW1hdGlvbigwLCB0aGlzLnNwaW5TdGF0ZUFuaW1bYW5pbU51bV0sIGZhbHNlKTtcclxuICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsU3BpbkF1ZGlvO1xyXG4gICAgYXVkaW9Tb3VyY2UubG9vcCA9IHRydWU7XHJcbiAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnJuZ0FuaW1JbmRleCA9PSB0aGlzLnNwaW5TdGF0ZUFuaW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vcmV0cnlcclxuICAgICAgICBwbGF5QnV0dG9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHNwaW5XaGVlbE5vZGVcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGB3aGVlbF9sb29wYCwgdHJ1ZSk7XHJcbiAgICAgICAgcGxheUJ1dHRvbk5vZGVcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2RlbWFuZGluZ19hdGVudGlvbmAsIHRydWUpO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsUmV0cnlBdWRpbztcclxuICAgICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UubG9vcCA9IGZhbHNlO1xyXG4gICAgICAgIHNwaW5XaGVlbE5vZGVcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGB3aGVlbF93aW5fYCArICh0aGlzLnJuZ0FuaW1JbmRleCArIDEpLCBmYWxzZSk7XHJcbiAgICAgICAgcGxheUJ1dHRvbk5vZGVcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2VuZGluZ2AsIGZhbHNlKTtcclxuICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy53aGVlbFdpbkF1ZGlvO1xyXG4gICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKGBjaGFyYWN0ZXJgKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAucGxheShgcHV6emxlSnVtcGApO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGFyc011bHRpcGxpZXIodGhpcy5wbGF5ZXJTY29yZSk7XHJcbiAgICAgICAgfSwgMyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDMuMjUpO1xyXG4gIH1cclxuICBzZXRFbmRQcm9ncmVzc0JhcigpIHtcclxuICAgIGxldCBwcm9ncmVzc0JhciA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQb3B1cFwiKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5zd2VyVmFsdWVzIDogXCIsIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXlbaV0gPT0gdHJ1ZSkge1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlKys7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNDT1JFOiBgK3RoaXMucGxheWVyU2NvcmUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1N0YXJzTXVsdGlwbGllcihudW06IG51bWJlcikge1xyXG4gICAgdGhpcy5zY29yZUxhYmVsTm9kZS5zY2FsZSA9IDA7XHJcbiAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgYHhgICsgdGhpcy5zcGluU3RhdGVNdWx0aXBsaWVyW3RoaXMucm5nQW5pbUluZGV4XTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgUG9wdXBgKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGNjLnR3ZWVuKHRoaXMuc2NvcmVMYWJlbE5vZGUpXHJcbiAgICAgIC50bygxLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBudW0gKyBgIHggYCArIHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF07XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5jaGFuZ2VBdWRpbztcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NvcmVMYWJlbE5vZGUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiAyIH0sIHsgZWFzaW5nOiBgYmFja0luYCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChcclxuICAgICAgICAgICAgICAgIG51bSAqIHBhcnNlSW50KHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF0pXHJcbiAgICAgICAgICAgICAgKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmNoYW5nZUF1ZGlvO1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjb3JlTGFiZWxOb2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogYGJhY2tJbmAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICBsZXQgbWF4ID0gcGFyc2VJbnQodGhpcy5zcGluU3RhdGVNdWx0aXBsaWVyW3RoaXMucm5nQW5pbUluZGV4XSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICBsZXQgc3Rhck5vZGVzID0gbmV3IGNjLk5vZGUoYHN0YXJzYCArIChpICsgMSkpO1xyXG4gICAgICBzdGFyTm9kZXMucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICBzdGFyTm9kZXMueCA9IDA7XHJcbiAgICAgIHN0YXJOb2Rlcy55ID0gMDtcclxuICAgICAgc3Rhck5vZGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFySW1nO1xyXG4gICAgICBzdGFyTm9kZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyc0F1ZGlvO1xyXG4gICAgICBzdGFyTm9kZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjU7XHJcbiAgICAgIGxldCBwb3NYID0gdGhpcy5nZXRSYW5kb21JbnQoLTMyMCwgMzIwKTtcclxuICAgICAgbGV0IHBvc1kgPSB0aGlzLmdldFJhbmRvbUludCgtMjIwLCAyMjApO1xyXG4gICAgICAvLyBpZihwb3NZID4gMTAwKXtcclxuICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmKHBvc1kgPCAtMTAwKXtcclxuICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmKGkgPCBNYXRoLmZsb29yKG1heC8yKSl7XHJcbiAgICAgIC8vICAgICBwb3NYICo9IC0xO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIHN0YXJOb2Rlcy5zY2FsZSA9IDA7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2VlbihzdGFyTm9kZXMpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiAxLCB4OiBwb3NYLCB5OiBwb3NZIH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXJOb2RlcylcclxuICAgICAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgeyBzY2FsZTogMC41LCB4OiBwb3NYIC8gMS41LCB5OiBwb3NZIC8gMS41IH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiBgYmFja0luYCB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8oMix7eDpwb3NYLzEuNSwgeTpwb3NZLzEuNX0se2Vhc2luZzpgYmFja091dGB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIC8vIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8odGhpcy5nZXRSYW5kb21JbnQoMzAsNTApLHthbmdsZTogMzYwKjV9KS5zdGFydCgpO1xyXG4gICAgICAgICAgc3Rhck5vZGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgaWYgKGkgPT0gbWF4IC0gMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2FtZUVuZGVkLS10cnVlYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKGkgKyAxKSAvIDUwKTtcclxuICAgICAgfSwgMi41KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
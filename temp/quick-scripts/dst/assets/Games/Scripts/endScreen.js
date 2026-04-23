
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
    NewClass.prototype.setEndProgressBar = function () {
        var progressBar = this.node.getChildByName("Popup").getChildByName("progressBar");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TY3JpcHRzL2VuZFNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFDMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnTkM7UUE1TVcscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBR3JDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBR25DLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFdkMsd0JBQXdCO1FBQ2hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG1CQUFhLEdBQWEsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQy9KLHlCQUFtQixHQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUF3S3JDLENBQUM7SUF0S0csK0JBQVksR0FBWixVQUFhLEdBQUcsRUFBRSxHQUFHO1FBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7SUFDbEgsQ0FBQztJQUNELGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksOEZBQThGO1FBQzlGLDRCQUE0QjtRQUU1QixvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELDRDQUF5QixHQUF6QjtRQUNJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDeEUsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtJQUVULENBQUM7SUFFRCxzQ0FBbUIsR0FBbkI7UUFBQSxpQkFhQztRQVpHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9FLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUc1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixPQUFlO1FBQS9CLGlCQStCQztRQTlCRyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUYsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFDLE9BQU87Z0JBQzVELGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN2RSxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUYsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7aUJBQ0k7Z0JBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdkcsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9FLFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3BGLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDVDtRQUlMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsdUVBQXVFO1FBQ3ZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDakQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQiwyQ0FBMkM7YUFDOUM7aUJBQ0k7Z0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNsRTtTQUNKO0lBQ0wsQ0FBQztJQUdELHNDQUFtQixHQUFuQixVQUFvQixHQUFXO1FBQS9CLGlCQXlEQztRQXhERyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM3SCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBQy9ELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0RixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQ0FDdkQsQ0FBQztZQUNOLGtCQUFrQjtZQUNsQixJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFLLElBQUksQ0FBQztZQUM3QixTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBSyxPQUFPLENBQUM7WUFDN0QsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQUssVUFBVSxDQUFDO1lBQzlELFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDcEQsSUFBSSxJQUFJLEdBQUcsT0FBSyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLEdBQUcsT0FBSyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsa0JBQWtCO1lBQ2xCLDJDQUEyQztZQUMzQyxJQUFJO1lBQ0osbUJBQW1CO1lBQ25CLDJDQUEyQztZQUMzQyxJQUFJO1lBQ0osNkJBQTZCO1lBQzdCLGtCQUFrQjtZQUNsQixJQUFJO1lBQ0osU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEIsT0FBSyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNsRixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQy9GLGlGQUFpRjt3QkFDckYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ1gsMkVBQTJFO29CQUMzRSxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTt3QkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ2xDO2dCQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUVyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7OztRQW5DWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFBbkIsQ0FBQztTQW9DVDtJQUVMLENBQUM7SUFwTUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDc0I7SUFHN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDcUI7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDc0I7SUFHN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDaUI7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDYztJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNxQjtJQXpCdEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdONUI7SUFBRCxlQUFDO0NBaE5ELEFBZ05DLENBaE5xQyxFQUFFLENBQUMsU0FBUyxHQWdOakQ7a0JBaE5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB3aGVlbEludHJvQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgd2hlZWxTcGluQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgd2hlZWxSZXRyeUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHdoZWVsV2luQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3RhcnNBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBjaGFuZ2VBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2NvcmVMYWJlbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBmaWxsaW5nMTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZpbGxpbmcyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZmlsbGluZzM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzaG93TnVtMTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG51bTE6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBudW0yOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFR3ZWVuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGxheWVyU2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xuICAgIHByaXZhdGUgc3BpblN0YXRlQW5pbTogc3RyaW5nW10gPSBbYHdoZWVsX3Jlc3VsdF8xX3g1YCwgYHdoZWVsX3Jlc3VsdF8yX3gyMGAsIGB3aGVlbF9yZXN1bHRfM194OGAsIGB3aGVlbF9yZXN1bHRfNF94MTBgLCBgd2hlZWxfcmVzdWx0XzVfeDE1YCwgYHdoZWVsX3Jlc3VsdF82X2FnYWluYF07XG4gICAgcHJpdmF0ZSBzcGluU3RhdGVNdWx0aXBsaWVyOiBzdHJpbmdbXSA9IFtgNWAsIGAyMGAsIGA4YCwgYDEwYCwgYDE1YCwgYGFnYWluYF07XG4gICAgcHJpdmF0ZSBybmdBbmltSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheSA6IFwiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkpXG4gICAgICAgIC8vIHRoaXMuc2V0RW5kUHJvZ3Jlc3NCYXIoKTtcblxuICAgICAgICAvLyB0aGlzLmFuaW1hdGlvblBsYXliYWNrU2VxdWVuY2UoKTtcbiAgICB9XG5cbiAgICBhbmltYXRpb25QbGF5YmFja1NlcXVlbmNlKCkge1xuICAgICAgICBsZXQgc3BpbldoZWVsTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVXaGVlbGApO1xuICAgICAgICBsZXQgcGxheUJ1dHRvbk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHNwaW5lUGxheUJ1dHRvbmApO1xuICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMud2hlZWxJbnRyb0F1ZGlvO1xuICAgICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV9pbnRyb2AsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgc3BpbldoZWVsTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgd2hlZWxfbG9vcGAsIHRydWUpO1xuICAgICAgICAgICAgcGxheUJ1dHRvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSwgMC43NSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXlCdXR0b25DbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYnV0dG9uQ2xpY2tlZGApO1xuICAgICAgICBsZXQgcGxheUJ1dHRvbk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHNwaW5lUGxheUJ1dHRvbmApO1xuICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcblxuICAgICAgICB0aGlzLnJuZ0FuaW1JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIHRoaXMuc3BpblN0YXRlQW5pbS5sZW5ndGgpO1xuICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV90YXBwZWRgLCBmYWxzZSk7XG4gICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNwaW5XaGVlbFJvdGF0ZSh0aGlzLnJuZ0FuaW1JbmRleCk7XG5cblxuICAgICAgICB9LCAwLjI1KTtcbiAgICB9XG5cbiAgICBzcGluV2hlZWxSb3RhdGUoYW5pbU51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzcGluV2hlZWxOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVdoZWVsYCk7XG4gICAgICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XG4gICAgICAgIGxldCBhdWRpb1NvdXJjZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICBzcGluV2hlZWxOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuc3BpblN0YXRlQW5pbVthbmltTnVtXSwgZmFsc2UpO1xuICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy53aGVlbFNwaW5BdWRpbztcbiAgICAgICAgYXVkaW9Tb3VyY2UubG9vcCA9IHRydWU7XG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucm5nQW5pbUluZGV4ID09IHRoaXMuc3BpblN0YXRlQW5pbS5sZW5ndGggLSAxKSB7Ly9yZXRyeVxuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3BpbldoZWVsTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgd2hlZWxfbG9vcGAsIHRydWUpO1xuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2RlbWFuZGluZ19hdGVudGlvbmAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsUmV0cnlBdWRpbztcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3BpbldoZWVsTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgd2hlZWxfd2luX2AgKyAodGhpcy5ybmdBbmltSW5kZXggKyAxKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2VuZGluZ2AsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gdGhpcy53aGVlbFdpbkF1ZGlvO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgY2hhcmFjdGVyYCkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlSnVtcGApO1xuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXJzTXVsdGlwbGllcih0aGlzLnBsYXllclNjb3JlKTtcbiAgICAgICAgICAgICAgICB9LCAzKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSwgMy4yNSk7XG4gICAgfVxuICAgIHNldEVuZFByb2dyZXNzQmFyKCkge1xuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQb3B1cFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlclZhbHVlcyA6IFwiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmFuc3dlckFycmF5W2ldID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInVuYXR0ZW1wdGVkUVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIndyb25nUVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSsrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTQ09SRTogYCt0aGlzLnBsYXllclNjb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvd1N0YXJzTXVsdGlwbGllcihudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGB4YCArIHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF07XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgUG9wdXBgKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY29yZUxhYmVsTm9kZSkudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBudW0gKyBgIHggYCArIHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuY2hhbmdlQXVkaW87XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NvcmVMYWJlbE5vZGUpLnRvKDEsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6IGBiYWNrSW5gIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKG51bSAqIHBhcnNlSW50KHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF0pKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5jaGFuZ2VBdWRpbztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjb3JlTGFiZWxOb2RlKS50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBiYWNrSW5gIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG1heCA9IHBhcnNlSW50KHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIGxldCBzdGFyTm9kZXMgPSBuZXcgY2MuTm9kZShgc3RhcnNgICsgKGkgKyAxKSk7XG4gICAgICAgICAgICBzdGFyTm9kZXMucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgc3Rhck5vZGVzLnggPSAwO1xuICAgICAgICAgICAgc3Rhck5vZGVzLnkgPSAwO1xuICAgICAgICAgICAgc3Rhck5vZGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFySW1nO1xuICAgICAgICAgICAgc3Rhck5vZGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhcnNBdWRpbztcbiAgICAgICAgICAgIHN0YXJOb2Rlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDAuNTtcbiAgICAgICAgICAgIGxldCBwb3NYID0gdGhpcy5nZXRSYW5kb21JbnQoLTMyMCwgMzIwKTtcbiAgICAgICAgICAgIGxldCBwb3NZID0gdGhpcy5nZXRSYW5kb21JbnQoLTIyMCwgMjIwKTtcbiAgICAgICAgICAgIC8vIGlmKHBvc1kgPiAxMDApe1xuICAgICAgICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYocG9zWSA8IC0xMDApe1xuICAgICAgICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYoaSA8IE1hdGguZmxvb3IobWF4LzIpKXtcbiAgICAgICAgICAgIC8vICAgICBwb3NYICo9IC0xO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgc3Rhck5vZGVzLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8oMSwgeyBzY2FsZTogMSwgeDogcG9zWCwgeTogcG9zWSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc3Rhck5vZGVzKS50bygxLCB7IHNjYWxlOiAwLjUsIHg6IHBvc1ggLyAxLjUsIHk6IHBvc1kgLyAxLjUgfSwgeyBlYXNpbmc6IGBiYWNrSW5gIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHN0YXJOb2RlcykudG8oMix7eDpwb3NYLzEuNSwgeTpwb3NZLzEuNX0se2Vhc2luZzpgYmFja091dGB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oc3Rhck5vZGVzKS50byh0aGlzLmdldFJhbmRvbUludCgzMCw1MCkse2FuZ2xlOiAzNjAqNX0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2Rlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gbWF4IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdhbWVFbmRlZC0tdHJ1ZWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgKGkgKyAxKSAvIDUwKTtcblxuICAgICAgICAgICAgfSwgMi41KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxuXG59XG4iXX0=
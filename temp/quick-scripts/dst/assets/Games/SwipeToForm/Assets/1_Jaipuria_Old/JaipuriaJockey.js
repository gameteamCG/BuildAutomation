
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Assets/1_Jaipuria_Old/JaipuriaJockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70993Qwb6RF76IWhiSyTt6/', 'JaipuriaJockey');
// Games/SwipeToForm/Assets/1_Jaipuria_Old/JaipuriaJockey.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.jockeySequenceArray = ["Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener"];
        return _this;
        // callNegativeReaction() {
        //     this.canTouch = false;
        //     let currentAudioClip: cc.AudioClip;
        //     if (this.negativeReactionCounter % 2 == 0) {
        //         currentAudioClip = this.negativeAudios[1];
        //     }
        //     else {
        //         currentAudioClip = this.negativeAudios[0]
        //     }
        //     let position1: number;
        //     let position2: number;
        //     if (globalVariables.Instance.currentLevel % 2 == 0) {
        //         position1 = -400;
        //         position2 = -1500;
        //     }
        //     else {
        //         position1 = 400;
        //         position2 = 1500;
        //     }
        //     let clipNames = ["negative_1"];
        //     startGame.Instance.JockeyNode.x = position2;
        //     startGame.Instance.JockeyNode.children.forEach(element => {
        //         element.active = false;
        //     });
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]);
        //     currentJockeyNode.active = true;
        //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position1 }).start();
        //     this.scheduleOnce(() => {
        //         let currentClip: string = clipNames[0];
        //         currentJockeyNode.zIndex = 1;
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //         this.scheduleOnce(() => {
        //             cc.audioEngine.playEffect(currentAudioClip, false);
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //             this.scheduleOnce(() => {
        //                 currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //                 this.scheduleOnce(() => {
        //                     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position2 }).start();
        //                     this.scheduleOnce(() => {
        //                         startGame.Instance.JockeyNode.children.forEach(element => {
        //                             element.active = false;
        //                         });
        //                         this.canTouch = true;
        //                     }, 1);
        //                 }, this.getAnimDuration(currentClip + "_end"));
        //             }, currentAudioClip.duration - 0.5);
        //         }, this.getAnimDuration(currentClip + "_start"));
        //     }, 0.5);
        // }
        // callPositiveReaction() {
        //     console.log("characterAppear--Jumbo_Podar");
        //     let position1: number;
        //     let position2: number;
        //     if (globalVariables.Instance.currentLevel % 2 == 0) {
        //         position1 = -400;
        //         position2 = -1500;
        //     }
        //     else {
        //         position1 = 400;
        //         position2 = 1500;
        //     }
        //let clipNames = ["positive_1", "positive_1", "positive_1", "positive_1", "positive_2", "positive_2", "positive_2", "positive_2", "positive_3", "positive_1", "positive_3", "positive_1"];
        //     startGame.Instance.JockeyNode.x = position2;
        //     startGame.Instance.JockeyNode.children.forEach(element => {
        //         element.active = false;
        //     });
        // let currentNum: number = parseInt(cc.director.getScene().name);
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[currentNum - 1]);
        //     currentJockeyNode.active = true;
        //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position1 }).start();
        //     this.scheduleOnce(() => {
        //         let currentClip: string = clipNames[globalVariables.Instance.currentLevel - 1];
        //         currentJockeyNode.zIndex = 1;
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //         this.scheduleOnce(() => {
        //             cc.audioEngine.playEffect(positiveAudios[0], false);
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //             this.scheduleOnce(() => {
        //                 currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //                 this.scheduleOnce(() => {
        //                     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position2 }).start();
        //                     this.scheduleOnce(() => {
        //                         startGame.Instance.JockeyNode.children.forEach(element => {
        //                             element.active = false;
        //                         });
        //                         this.finishedAnim();
        //                     }, 1);
        //                 }, this.getAnimDuration(currentClip + "_end"));
        //             }, this.positiveAudios[0].duration - 0.5);
        //         }, this.getAnimDuration(currentClip + "_start"));
        //     }, 0.5);
        // }
        // getAnimDuration(animName: string): number {
        //     //console.log("currentjockey :", startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]))
        //     let num: number = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]).getComponent(sp.Skeleton).findAnimation(animName).duration;
        //     return num;
        // }
        // @property(cc.Node)
        // loading: cc.Node = null;
        // @property(cc.AudioClip)
        // play_audio: cc.AudioClip = null;
        // OnStartGame(_event: cc.Event) {
        //     cc.audioEngine.playEffect(this.play_audio, false);
        //     this.loading.active = true;
        //     _event.target.active = false;
        //     _event.target.getComponent(cc.Button).interactable = false;
        //     cc.director.loadScene(this.NextSceneName);
        // }
        // EndButton() {
        //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
        //     console.log("gameEnded--" + true);
        //     closeWindow();
        // }
        // const closeWindow = () => {
        //     window.open(location.href, "_self", "");
        //     window.close()
        // }
        // update (dt) {}
        // Letter sound Games 
        //positive reactions
        // let clipNames = ["positive_2", "positive_2", "positive_2", "positive_2", "positive_3", "positive_3", "positive_3", "positive_3", "positive_2", "positive_2", "positive_4", "positive_2", "positive_5", "positive_3", "positive_5", "positive_3"];
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     let currentClip: string = clipNames[globalVariables.Instance.currentLevel - 1];
        //     currentJockeyNode.zIndex = 1;
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.playEffect(this.positiveAudios[0], false);
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //         this.scheduleOnce(() => {
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //             this.scheduleOnce(() => {
        //                 this.scheduleOnce(() => {
        //                     this.finishedAnimNice();
        //                 }, 1);
        //             }, this.getAnimDuration(currentClip + "_end"));
        //         }, this.positiveAudios[0].duration - 0.5);
        //     }, this.getAnimDuration(currentClip + "_start"));
        // callNegativeReaction() {
        //     this.canTouch = false;
        //     let currentAudioClip: cc.AudioClip = this.negativeAudios[0];
        //     let clipNames = ["negative_1"];
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     let currentClip: string = clipNames[0];
        //     currentJockeyNode.zIndex = 1;
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.playEffect(currentAudioClip, false);
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //         this.scheduleOnce(() => {
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //             this.scheduleOnce(() => {
        //                 this.finishedAnimNice();
        //                 this.canTouch = true;
        //             }, this.getAnimDuration(currentClip + "_end"));
        //         }, currentAudioClip.duration - 0.5);
        //     }, this.getAnimDuration(currentClip + "_start"));
        // }
        // finishedAnimNice() {
        //     //this.node.getChildByName("Newts").getComponent(cc.Animation).play("Breathing_normal");
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        // }
        //onload
        //this.currentSceneNum = parseInt(cc.director.getScene().name);
        // startGame.Instance.JockeyNode.x = 550;
        // startGame.Instance.JockeyNode.children.forEach(element => {
        //     element.active = false;
        // });
        // let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        // currentJockeyNode.active = true;
        // let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        // currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxBc3NldHNcXDFfSmFpcHVyaWFfT2xkXFxKYWlwdXJpYUpvY2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBOQztRQXZORyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIseUJBQW1CLEdBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7UUFXck0sMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QiwwQ0FBMEM7UUFDMUMsbURBQW1EO1FBQ25ELHFEQUFxRDtRQUNyRCxRQUFRO1FBQ1IsYUFBYTtRQUNiLG9EQUFvRDtRQUVwRCxRQUFRO1FBRVIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw0REFBNEQ7UUFDNUQsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixRQUFRO1FBQ1IsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsUUFBUTtRQUVSLHNDQUFzQztRQUN0QyxtREFBbUQ7UUFDbkQsa0VBQWtFO1FBQ2xFLGtDQUFrQztRQUNsQyxVQUFVO1FBRVYsMEpBQTBKO1FBQzFKLHVDQUF1QztRQUN2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cUlBQXFJO1FBQ3JJLG1DQUFtQztRQUNuQyxxSUFBcUk7UUFDckksNkVBQTZFO0lBRWpGLENBQUM7SUEvTUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBONUI7SUFBRCxlQUFDO0NBMU5ELEFBME5DLENBMU5xQyxFQUFFLENBQUMsU0FBUyxHQTBOakQ7a0JBMU5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBqb2NrZXlTZXF1ZW5jZUFycmF5OiBzdHJpbmdbXSA9IFtcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIiwgXCJCYWdcIiwgXCJDcmF5b25cIiwgXCJQZW5jaWxcIiwgXCJTaHJwbnBlbmVyXCIsIFwiQmFnXCIsIFwiQ3JheW9uXCIsIFwiUGVuY2lsXCIsIFwiU2hycG5wZW5lclwiLCBcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIl07XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsTmVnYXRpdmVSZWFjdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIC8vICAgICBpZiAodGhpcy5uZWdhdGl2ZVJlYWN0aW9uQ291bnRlciAlIDIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50QXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1sxXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRBdWRpb0NsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9zWzBdXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uMTogbnVtYmVyO1xyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjI6IG51bWJlcjtcclxuICAgIC8vICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSAtNDAwO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjIgPSAtMTUwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMSA9IDQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gMTUwMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBjbGlwTmFtZXMgPSBbXCJuZWdhdGl2ZV8xXCJdO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NpdGlvbjI7XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSk7XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbMF07XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLnpJbmRleCA9IDE7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGN1cnJlbnRBdWRpb0NsaXAsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCBjdXJyZW50QXVkaW9DbGlwLmR1cmF0aW9uIC0gMC41KTtcclxuICAgIC8vICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY2FsbFBvc2l0aXZlUmVhY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLUp1bWJvX1BvZGFyXCIpO1xyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjE6IG51bWJlcjtcclxuICAgIC8vICAgICBsZXQgcG9zaXRpb24yOiBudW1iZXI7XHJcbiAgICAvLyAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDApIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24xID0gLTQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gLTE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSA0MDA7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMiA9IDE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9sZXQgY2xpcE5hbWVzID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCJdO1xyXG5cclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS54ID0gcG9zaXRpb24yO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gbGV0IGN1cnJlbnROdW06IG51bWJlciA9IHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcblxyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVtjdXJyZW50TnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NpdGlvbjEgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QocG9zaXRpdmVBdWRpb3NbMF0sIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRBbmltKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb3NbMF0uZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIpKTtcclxuICAgIC8vICAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0QW5pbUR1cmF0aW9uKGFuaW1OYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50am9ja2V5IDpcIiwgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSkpXHJcbiAgICAvLyAgICAgbGV0IG51bTogbnVtYmVyID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1OYW1lKS5kdXJhdGlvbjtcclxuICAgIC8vICAgICByZXR1cm4gbnVtO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gcGxheV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBPblN0YXJ0R2FtZShfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICBfZXZlbnQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tXCIgKyB0cnVlKTtcclxuICAgIC8vICAgICBjbG9zZVdpbmRvdygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmNsb3NlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8vIExldHRlciBzb3VuZCBHYW1lcyBcclxuXHJcbiAgICAvL3Bvc2l0aXZlIHJlYWN0aW9uc1xyXG4gICAgLy8gbGV0IGNsaXBOYW1lcyA9IFtcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzNcIl07XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W3RoaXMuY3VycmVudFNjZW5lTnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9zWzBdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZEFuaW1OaWNlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb3NbMF0uZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIikpO1xyXG5cclxuICAgIC8vIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1swXTtcclxuICAgIC8vICAgICBsZXQgY2xpcE5hbWVzID0gW1wibmVnYXRpdmVfMVwiXTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbMF07XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY3VycmVudEF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfZW5kXCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkQW5pbU5pY2UoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgfSwgY3VycmVudEF1ZGlvQ2xpcC5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZmluaXNoZWRBbmltTmljZSgpIHtcclxuICAgIC8vICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk5ld3RzXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJCcmVhdGhpbmdfbm9ybWFsXCIpO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9vbmxvYWRcclxuXHJcbiAgICAvL3RoaXMuY3VycmVudFNjZW5lTnVtID0gcGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSA1NTA7XHJcbiAgICAvLyBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblxyXG59XHJcbiJdfQ==
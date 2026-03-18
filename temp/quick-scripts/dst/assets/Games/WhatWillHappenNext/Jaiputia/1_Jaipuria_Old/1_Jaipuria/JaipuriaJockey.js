
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Jaiputia/1_Jaipuria_Old/1_Jaipuria/JaipuriaJockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70993Qwb6RF76IWhiSyTt6/', 'JaipuriaJockey');
// Games/WhatWillHappenNext/Jaiputia/1_Jaipuria_Old/1_Jaipuria/JaipuriaJockey.ts

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
        // OnStartGame(_event: cc.Event) {
        //     cc.audioEngine.playEffect(this.play_audio, false);
        //     _event.target.getComponent(cc.Button).interactable = false;
        //     cc.director.loadScene(this.NextSceneName);
        // }
        // EndButton() {
        //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcSmFpcHV0aWFcXDFfSmFpcHVyaWFfT2xkXFwxX0phaXB1cmlhXFxKYWlwdXJpYUpvY2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1OQztRQWhORyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIseUJBQW1CLEdBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7UUFXck0sMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QiwwQ0FBMEM7UUFDMUMsbURBQW1EO1FBQ25ELHFEQUFxRDtRQUNyRCxRQUFRO1FBQ1IsYUFBYTtRQUNiLG9EQUFvRDtRQUVwRCxRQUFRO1FBRVIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw0REFBNEQ7UUFDNUQsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixRQUFRO1FBQ1IsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsUUFBUTtRQUVSLHNDQUFzQztRQUN0QyxtREFBbUQ7UUFDbkQsa0VBQWtFO1FBQ2xFLGtDQUFrQztRQUNsQyxVQUFVO1FBRVYsMEpB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SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbU41QjtJQUFELGVBQUM7Q0FuTkQsQUFtTkMsQ0FuTnFDLEVBQUUsQ0FBQyxTQUFTLEdBbU5qRDtrQkFuTm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIGpvY2tleVNlcXVlbmNlQXJyYXk6IHN0cmluZ1tdID0gW1wiQmFnXCIsIFwiQ3JheW9uXCIsIFwiUGVuY2lsXCIsIFwiU2hycG5wZW5lclwiLCBcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIiwgXCJCYWdcIiwgXCJDcmF5b25cIiwgXCJQZW5jaWxcIiwgXCJTaHJwbnBlbmVyXCIsIFwiQmFnXCIsIFwiQ3JheW9uXCIsIFwiUGVuY2lsXCIsIFwiU2hycG5wZW5lclwiXTtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm5lZ2F0aXZlUmVhY3Rpb25Db3VudGVyICUgMiA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRBdWRpb0NsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9zWzFdO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgY3VycmVudEF1ZGlvQ2xpcCA9IHRoaXMubmVnYXRpdmVBdWRpb3NbMF1cclxuXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBsZXQgcG9zaXRpb24xOiBudW1iZXI7XHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uMjogbnVtYmVyO1xyXG4gICAgLy8gICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMSA9IC00MDA7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMiA9IC0xNTAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24xID0gNDAwO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjIgPSAxNTAwO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgbGV0IGNsaXBOYW1lcyA9IFtcIm5lZ2F0aXZlXzFcIl07XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUueCA9IHBvc2l0aW9uMjtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdKTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zaXRpb24xIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudENsaXA6IHN0cmluZyA9IGNsaXBOYW1lc1swXTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY3VycmVudEF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9sb29wXCIsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfZW5kXCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zaXRpb24yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIGN1cnJlbnRBdWRpb0NsaXAuZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIpKTtcclxuICAgIC8vICAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjYWxsUG9zaXRpdmVSZWFjdGlvbigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tSnVtYm9fUG9kYXJcIik7XHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uMTogbnVtYmVyO1xyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjI6IG51bWJlcjtcclxuICAgIC8vICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSAtNDAwO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjIgPSAtMTUwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMSA9IDQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gMTUwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL2xldCBjbGlwTmFtZXMgPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzFcIl07XHJcblxyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NpdGlvbjI7XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyBsZXQgY3VycmVudE51bTogbnVtYmVyID0gcGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2N1cnJlbnROdW0gLSAxXSk7XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChwb3NpdGl2ZUF1ZGlvc1swXSwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9sb29wXCIsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfZW5kXCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zaXRpb24yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZEFuaW0oKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9lbmRcIikpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXS5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIikpO1xyXG4gICAgLy8gICAgIH0sIDAuNSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnRqb2NrZXkgOlwiLCBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdKSlcclxuICAgIC8vICAgICBsZXQgbnVtOiBudW1iZXIgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbU5hbWUpLmR1cmF0aW9uO1xyXG4gICAgLy8gICAgIHJldHVybiBudW07XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIE9uU3RhcnRHYW1lKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICBjbG9zZVdpbmRvdygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmNsb3NlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8vIExldHRlciBzb3VuZCBHYW1lcyBcclxuXHJcbiAgICAvL3Bvc2l0aXZlIHJlYWN0aW9uc1xyXG4gICAgLy8gbGV0IGNsaXBOYW1lcyA9IFtcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzNcIl07XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W3RoaXMuY3VycmVudFNjZW5lTnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9zWzBdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZEFuaW1OaWNlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb3NbMF0uZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIikpO1xyXG5cclxuICAgIC8vIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1swXTtcclxuICAgIC8vICAgICBsZXQgY2xpcE5hbWVzID0gW1wibmVnYXRpdmVfMVwiXTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbMF07XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY3VycmVudEF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfZW5kXCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkQW5pbU5pY2UoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgfSwgY3VycmVudEF1ZGlvQ2xpcC5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZmluaXNoZWRBbmltTmljZSgpIHtcclxuICAgIC8vICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk5ld3RzXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJCcmVhdGhpbmdfbm9ybWFsXCIpO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9vbmxvYWRcclxuXHJcbiAgICAvL3RoaXMuY3VycmVudFNjZW5lTnVtID0gcGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSA1NTA7XHJcbiAgICAvLyBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblxyXG59XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/1_Jaipuria/JaipuriaJockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70993Qwb6RF76IWhiSyTt6/', 'JaipuriaJockey');
// Games/1_Jaipuria/JaipuriaJockey.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXDFfSmFpcHVyaWFcXEphaXB1cmlhSm9ja2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbU5DO1FBaE5HLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUV2Qix5QkFBbUIsR0FBYSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDOztRQVdyTSwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLDBDQUEwQztRQUMxQyxtREFBbUQ7UUFDbkQscURBQXFEO1FBQ3JELFFBQVE7UUFDUixhQUFhO1FBQ2Isb0RBQW9EO1FBRXBELFFBQVE7UUFFUiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDREQUE0RDtRQUM1RCw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLFFBQVE7UUFDUixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixRQUFRO1FBRVIsc0NBQXNDO1FBQ3RDLG1EQUFtRDtRQUNuRCxrRUFBa0U7UUFDbEUsa0NBQWtDO1FBQ2xDLFVBQVU7UUFFViwwSkFBMEo7UUFDMUosdUNBQXVDO1FBQ3ZDLGlGQUFpRjtRQUNqRixnQ0FBZ0M7UUFDaEMsa0RBQWtEO1FBQ2xELHdDQUF3QztRQUN4QyxzR0FBc0c7UUFDdEcsb0NBQW9DO1FBQ3BDLGtFQUFrRTtRQUNsRSx3R0FBd0c7UUFDeEcsd0NBQXdDO1FBQ3hDLDRHQUE0RztRQUM1Ryw0Q0FBNEM7UUFDNUMsaUdBQWlHO1FBQ2pHLGdEQUFnRDtRQUNoRCxzRkFBc0Y7UUFDdEYsc0RBQXNEO1FBQ3RELDhCQUE4QjtRQUM5QixnREFBZ0Q7UUFDaEQsNkJBQTZCO1FBQzdCLGtFQUFrRTtRQUNsRSxtREFBbUQ7UUFDbkQsNERBQTREO1FBQzVELGVBQWU7UUFFZixJQUFJO1FBRUosMkJBQTJCO1FBQzNCLG1EQUFtRDtRQUNuRCw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDREQUE0RDtRQUM1RCw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLFFBQVE7UUFDUixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsMkxBQTJMO1FBRTNMLG1EQUFtRDtRQUNuRCxrRUFBa0U7UUFDbEUsa0NBQWtDO1FBQ2xDLFVBQVU7UUFFVixrRUFBa0U7UUFFbEUsK0hBQStIO1FBQy9ILHVDQUF1QztRQUN2QyxpRkFBaUY7UUFDakYsZ0NBQWdDO1FBQ2hDLDBGQUEwRjtRQUMxRix3Q0FBd0M7UUFDeEMsc0dBQXNHO1FBQ3RHLG9DQUFvQztRQUNwQyxtRUFBbUU7UUFDbkUsd0dBQXdHO1FBQ3hHLHdDQUF3QztRQUN4Qyw0R0FBNEc7UUFDNUcsNENBQTRDO1FBQzVDLGlHQUFpRztRQUNqRyxnREFBZ0Q7UUFDaEQsc0ZBQXNGO1FBQ3RGLHNEQUFzRDtRQUN0RCw4QkFBOEI7UUFDOUIsK0NBQStDO1FBQy9DLDZCQUE2QjtRQUM3QixrRUFBa0U7UUFDbEUseURBQXlEO1FBQ3pELDREQUE0RDtRQUM1RCxlQUFlO1FBRWYsSUFBSTtRQUdKLDhDQUE4QztRQUM5QywwSkFBMEo7UUFDMUosc01BQXNNO1FBQ3RNLGtCQUFrQjtRQUNsQixJQUFJO1FBR0osa0NBQWtDO1FBQ2xDLHlEQUF5RDtRQUN6RCxrRUFBa0U7UUFDbEUsaURBQWlEO1FBQ2pELElBQUk7UUFFSixnQkFBZ0I7UUFDaEIsdUVBQXVFO1FBQ3ZFLHFCQUFxQjtRQUNyQixJQUFJO1FBRUosOEJBQThCO1FBQzlCLCtDQUErQztRQUMvQyxxQkFBcUI7UUFDckIsSUFBSTtRQUtKLGlCQUFpQjtRQUVqQixzQkFBc0I7UUFFdEIsb0JBQW9CO1FBQ3BCLG9QQUFvUDtRQUNwUCx5SUFBeUk7UUFDekksc0ZBQXNGO1FBQ3RGLG9DQUFvQztRQUNwQyxrR0FBa0c7UUFDbEcsZ0NBQWdDO1FBQ2hDLG9FQUFvRTtRQUNwRSxvR0FBb0c7UUFDcEcsb0NBQW9DO1FBQ3BDLHdHQUF3RztRQUN4Ryx3Q0FBd0M7UUFDeEMsNENBQTRDO1FBQzVDLCtDQUErQztRQUMvQyx5QkFBeUI7UUFDekIsOERBQThEO1FBQzlELHFEQUFxRDtRQUNyRCx3REFBd0Q7UUFFeEQsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixtRUFBbUU7UUFDbkUsc0NBQXNDO1FBQ3RDLHlJQUF5STtRQUN6SSw4Q0FBOEM7UUFDOUMsb0NBQW9DO1FBQ3BDLGtHQUFrRztRQUNsRyxnQ0FBZ0M7UUFDaEMsOERBQThEO1FBQzlELG9HQUFvRztRQUNwRyxvQ0FBb0M7UUFDcEMsd0dBQXdHO1FBQ3hHLHdDQUF3QztRQUN4QywyQ0FBMkM7UUFDM0Msd0NBQXdDO1FBQ3hDLDhEQUE4RDtRQUM5RCwrQ0FBK0M7UUFDL0Msd0RBQXdEO1FBQ3hELElBQUk7UUFFSix1QkFBdUI7UUFDdkIsK0ZBQStGO1FBQy9GLHlJQUF5STtRQUN6SSxpRkFBaUY7UUFDakYsSUFBSTtRQUVKLFFBQVE7UUFFUiwrREFBK0Q7UUFDL0QseUNBQXlDO1FBQ3pDLDhEQUE4RDtRQUM5RCw4QkFBOEI7UUFDOUIsTUFBTTtRQUNOLHFJQUFxSTtRQUNySSxtQ0FBbUM7UUFDbkMscUlBQXFJO1FBQ3JJLDZFQUE2RTtJQUVqRixDQUFDO0lBeE1HLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtTjVCO0lBQUQsZUFBQztDQW5ORCxBQW1OQyxDQW5OcUMsRUFBRSxDQUFDLFNBQVMsR0FtTmpEO2tCQW5Ob0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgam9ja2V5U2VxdWVuY2VBcnJheTogc3RyaW5nW10gPSBbXCJCYWdcIiwgXCJDcmF5b25cIiwgXCJQZW5jaWxcIiwgXCJTaHJwbnBlbmVyXCIsIFwiQmFnXCIsIFwiQ3JheW9uXCIsIFwiUGVuY2lsXCIsIFwiU2hycG5wZW5lclwiLCBcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIiwgXCJCYWdcIiwgXCJDcmF5b25cIiwgXCJQZW5jaWxcIiwgXCJTaHJwbnBlbmVyXCJdO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50QXVkaW9DbGlwOiBjYy5BdWRpb0NsaXA7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubmVnYXRpdmVSZWFjdGlvbkNvdW50ZXIgJSAyID09IDApIHtcclxuICAgIC8vICAgICAgICAgY3VycmVudEF1ZGlvQ2xpcCA9IHRoaXMubmVnYXRpdmVBdWRpb3NbMV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50QXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1swXVxyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjE6IG51bWJlcjtcclxuICAgIC8vICAgICBsZXQgcG9zaXRpb24yOiBudW1iZXI7XHJcbiAgICAvLyAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDApIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24xID0gLTQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gLTE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSA0MDA7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMiA9IDE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBsZXQgY2xpcE5hbWVzID0gW1wibmVnYXRpdmVfMVwiXTtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS54ID0gcG9zaXRpb24yO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0pO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NpdGlvbjEgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzWzBdO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjdXJyZW50QXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NpdGlvbjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9lbmRcIikpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSwgY3VycmVudEF1ZGlvQ2xpcC5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIikpO1xyXG4gICAgLy8gICAgIH0sIDAuNSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNhbGxQb3NpdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1KdW1ib19Qb2RhclwiKTtcclxuICAgIC8vICAgICBsZXQgcG9zaXRpb24xOiBudW1iZXI7XHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uMjogbnVtYmVyO1xyXG4gICAgLy8gICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMSA9IC00MDA7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMiA9IC0xNTAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24xID0gNDAwO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjIgPSAxNTAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vbGV0IGNsaXBOYW1lcyA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMVwiXTtcclxuXHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUueCA9IHBvc2l0aW9uMjtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIGxldCBjdXJyZW50TnVtOiBudW1iZXIgPSBwYXJzZUludChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG5cclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbY3VycmVudE51bSAtIDFdKTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zaXRpb24xIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudENsaXA6IHN0cmluZyA9IGNsaXBOYW1lc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLnpJbmRleCA9IDE7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHBvc2l0aXZlQXVkaW9zWzBdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NpdGlvbjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkQW5pbSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdLmR1cmF0aW9uIC0gMC41KTtcclxuICAgIC8vICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGdldEFuaW1EdXJhdGlvbihhbmltTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudGpvY2tleSA6XCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0pKVxyXG4gICAgLy8gICAgIGxldCBudW06IG51bWJlciA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0pLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltTmFtZSkuZHVyYXRpb247XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gT25TdGFydEdhbWUoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5X2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBFbmRCdXR0b24oKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgLy8gICAgIGNsb3NlV2luZG93KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgY2xvc2VXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgd2luZG93Lm9wZW4obG9jYXRpb24uaHJlZiwgXCJfc2VsZlwiLCBcIlwiKTtcclxuICAgIC8vICAgICB3aW5kb3cuY2xvc2UoKVxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgLy8gTGV0dGVyIHNvdW5kIEdhbWVzIFxyXG5cclxuICAgIC8vcG9zaXRpdmUgcmVhY3Rpb25zXHJcbiAgICAvLyBsZXQgY2xpcE5hbWVzID0gW1wicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfM1wiXTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLnpJbmRleCA9IDE7XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb3NbMF0sIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9sb29wXCIsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkQW5pbU5pY2UoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXS5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcblxyXG4gICAgLy8gY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50QXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9zWzBdO1xyXG4gICAgLy8gICAgIGxldCBjbGlwTmFtZXMgPSBbXCJuZWdhdGl2ZV8xXCJdO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudENsaXA6IHN0cmluZyA9IGNsaXBOYW1lc1swXTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjdXJyZW50QXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRBbmltTmljZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9lbmRcIikpO1xyXG4gICAgLy8gICAgICAgICB9LCBjdXJyZW50QXVkaW9DbGlwLmR1cmF0aW9uIC0gMC41KTtcclxuICAgIC8vICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBmaW5pc2hlZEFuaW1OaWNlKCkge1xyXG4gICAgLy8gICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTmV3dHNcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkJyZWF0aGluZ19ub3JtYWxcIik7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W3RoaXMuY3VycmVudFNjZW5lTnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvL29ubG9hZFxyXG5cclxuICAgIC8vdGhpcy5jdXJyZW50U2NlbmVOdW0gPSBwYXJzZUludChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgLy8gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUueCA9IDU1MDtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W3RoaXMuY3VycmVudFNjZW5lTnVtIC0gMV0pO1xyXG4gICAgLy8gY3VycmVudEpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHJcbn1cclxuIl19
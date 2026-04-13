// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    jockeySequenceArray: string[] = ["Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener"];


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

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

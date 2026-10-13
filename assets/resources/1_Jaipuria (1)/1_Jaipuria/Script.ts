const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // @property(cc.AudioClip)
    // timerSound: cc.AudioClip = null;

    // @property(cc.ProgressBar)
    // loadingBar: cc.ProgressBar = null;

    // @property(cc.AudioClip)
    // play_audio: cc.AudioClip = null;

    // @property(cc.AudioClip)
    // positiveVO: cc.AudioClip[] = [];

    // @property(cc.AudioClip)
    // negativeVO: cc.AudioClip[] = [];


    // OnStartGame(_event: cc.Event) {
    //     cc.audioEngine.playEffect(this.play_audio, false);
    //     _event.target.getComponent(cc.Button).interactable = false;
    //     _event.target.active = false;
    //     this.loadSceneWithProgress();
    // }


    // loadSceneWithProgress() {
    //     if (this.loadingBar) {
    //         this.loadingBar.node.active = true;
    //     }
    //     cc.director.preloadScene(this.NextSceneName, (completedCount: number, totalCount: number) => {
    //         let progress = completedCount / totalCount;
    //         this.loadingBar.progress = progress;
    //     }, () => {
    //         cc.director.loadScene(this.NextSceneName);
    //     })
    // }


    // EndButton() {
    //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
    //     closeWindow();
    // }


    // const closeWindow = () => {
    //     window.open(location.href, "_self", "");
    //     window.close()
    // }

    // curTimer: number = 0;
    // timerSchedule = () => {
    //     --this.curTimer;
    //     this.node.getChildByName("timer").children[0].getComponent(cc.Label).string = this.curTimer.toString();
    //     if (this.curTimer == 10) {
    //         cc.audioEngine.playEffect(startGame.Instance.timerSound, true)
    //     }
    //     if(this.curTimer == 0) {
    //     cc.director.loadScene(cc.director.getScene().name)
    //      }
    // }

    // startTimer(totalTime: number) {
    //     cc.audioEngine.stopAllEffects();
    //     this.node.getChildByName("timer").children[0].getComponent(cc.Label).string = totalTime.toString();
    //     cc.tween(this.node.getChildByName("timer"))
    //         .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
    //     this.curTimer = totalTime;
    //     this.schedule(this.timerSchedule, 1, totalTime - 1);
    // }

    // stopTimer() {
    //     cc.tween(this.node.getChildByName("timer"))
    //         .to(0.5, { scale: 0 }, { easing: "sineInOut" }).start();
    //     this.unschedule(this.timerSchedule)
    // };


    // wrongAnswerCount: number = 0;
    // callJockey() {
    //     let name: string = "";
    //     let pos: number[] = [-1500, 1500];
    //     let jockeytween: number[] = [-400, 400];
    //     let anim: string[] = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
    //     console.log("characterAppear--", name);
    //     startGame.Instance.JockeyNode.x = pos[globalVariables.Instance.currentLevel % 2];
    //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //     startGame.Instance.JockeyNode.getComponent(sp.Skeleton).setAnimation(0, anim[globalVariables.Instance.currentLevel % 5], false);
    //     cc.audioEngine.playEffect(startGame.Instance.positiveVO[globalVariables.Instance.currentLevel % 5], false);
    //     this.scheduleOnce(() => {
    //         cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //         console.log("characterDisappear--", name);
    //     }, startGame.Instance.positiveVO[globalVariables.Instance.currentLevel % 5].duration + 0.5);
    // }
    // callNegJockey() {
    //     this.wrongAnswerCount++;
    //     let name: string = "";
    //     let pos: number[] = [-1500, 1500];
    //     let jockeytween: number[] = [-400, 400];
    //     let anim: string[] = ["negative_1", "negative_2"];
    //     console.log("characterAppear--" + name);
    //     startGame.Instance.JockeyNode.x = pos[this.wrongAnswerCount % 2];
    //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: jockeytween[this.wrongAnswerCount % 2] }, { easing: "quartInOut" }).start();
    //     startGame.Instance.JockeyNode.getComponent(sp.Skeleton).setAnimation(0, anim[this.wrongAnswerCount % 2], false);
    //     cc.audioEngine.playEffect(startGame.Instance.negativeVO[this.wrongAnswerCount % 2], false)
    //     this.scheduleOnce(() => {
    //         cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: pos[this.wrongAnswerCount % 2] }, { easing: "quartInOut" }).start();
    //         console.log("characterDisappear--" + name);
    //     }, 1.5);
    // }

}

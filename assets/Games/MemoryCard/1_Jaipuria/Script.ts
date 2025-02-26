const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // @property(cc.ProgressBar)
    // loadingBar: cc.ProgressBar = null;

    // @property(cc.AudioClip)
    // play_audio: cc.AudioClip = null;

    // @property(cc.AudioClip)
    // timerSound: cc.AudioClip = null;


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


	//this.node.getChildByName("end").active = true;

    // EndButton() {
	//	   console.log("gameEnded--" + true);
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
    //         cc.audioEngine.playEffect(this.timerSound, true)
    //     }
    //     if (this.curTimer == 0) {
    //         cc.director.loadScene("1")
    //     }
    // }

    // startTimer(totalTime: number) {
    //     cc.audioEngine.stopAllEffects();
    //     this.node.getChildByName("timer").children[0].getComponent(cc.Label).string = "30";
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
    //     let pos: number[] = [-1200, 1200];
    //     let jockeytween: number[] = [-400, 400];
    //     let anim: string[] = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
    //     // console.log("characterAppear--Podar_Jumbo");
    //     startGame.Instance.JockeyNode.x = pos[globalVariables.Instance.currentLevel % 2];
    //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //     startGame.Instance.JockeyNode.getComponent(sp.Skeleton).setAnimation(0, anim[globalVariables.Instance.currentLevel % 5], false);
    //     cc.audioEngine.playEffect(startGame.Instance.positiveVO[globalVariables.Instance.currentLevel % 5], false);
    //     this.scheduleOnce(() => {
    //         cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //         // console.log("characterDisappear--Podar_Jumbo");
    //         this.levelcomplete();
    //     }, startGame.Instance.positiveVO[globalVariables.Instance.currentLevel % 5].duration + 0.5);
    // }
    // callNegJockey() {
    //     this.wrongAnswerCount++;
    //     let pos: number[] = [-1200, 1200];
    //     let jockeytween: number[] = [-400, 400];
    //     let anim: string[] = ["negative_1", "negative_2", "negative_3"];
    //     // console.log("characterAppear--Podar_Jumbo");
    //     startGame.Instance.JockeyNode.x = pos[globalVariables.Instance.currentLevel % 2];
    //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //     startGame.Instance.JockeyNode.getComponent(sp.Skeleton).setAnimation(0, anim[this.wrongAnswerCount % 4], false);
    //     cc.audioEngine.playEffect(startGame.Instance.negativeVO[this.wrongAnswerCount % 2], false)
    //     this.scheduleOnce(() => {
    //         cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
    //         // console.log("characterDisappear--Podar_Jumbo");
    //     }, 1.5);
    // }

}

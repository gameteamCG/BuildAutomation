const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // @property(cc.AudioClip)
    // timerSound: cc.AudioClip = null;

    // @property(cc.Node)
    // loadingBar: cc.Node = null;

    // @property(cc.AudioClip)
    // play_audio: cc.AudioClip = null;

    // @property(cc.AudioClip)
    // positiveVO: cc.AudioClip[] = [];

    // @property(cc.AudioClip)
    // negativeVO: cc.AudioClip[] = [];


    // OnStartGame(_event: cc.Event) {
    // cc.audioEngine.playEffect(this.play_audio, false);
    // this.loadingBar.active = true;
    // _event.target.active = false;
    // _event.target.getComponent(cc.Button).interactable = false;
    // cc.director.loadScene(this.NextSceneName);
    // }



    // EndButton() {
    //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
    //     closeWindow();
    // }


    // const closeWindow = () => {
    //     window.open(location.href, "_self", "");
    //     window.close()
    // }


    // this.node.getChildByName("end").active = true;


    // this.scheduleOnce(() => {
    //     this.node.getChildByName("end").active = true;
    // }, 3);





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

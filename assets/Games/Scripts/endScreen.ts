// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";
const { ccclass, property } = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {


    @property(cc.AudioClip)
    private wheelIntroAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private wheelSpinAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private wheelRetryAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private wheelWinAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private starsAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private changeAudio: cc.AudioClip = null;

    @property(cc.SpriteFrame)
    private starImg: cc.SpriteFrame = null;

    @property(cc.Node)
    private scoreLabelNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    private filling1: number = 0;
    private filling2: number = 0;
    private filling3: number = 0;
    private showNum1: number = 0;
    private num1: number = 0;
    private num2: number = 0;
    private currentTween: number = 0;
    private playerScore: number = 0;

    private totalLevels: number = 7;
    private spinStateAnim: string[] = [`wheel_result_1_x5`, `wheel_result_2_x20`, `wheel_result_3_x8`, `wheel_result_4_x10`, `wheel_result_5_x15`, `wheel_result_6_again`];
    private spinStateMultiplier: string[] = [`5`, `20`, `8`, `10`, `15`, `again`];
    private rngAnimIndex: number = 0;

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    // onLoad () {}

    start() {
        //console.log("globalVariables.Instance.answerArray : ", globalVariables.Instance.answerArray)
        // this.setEndProgressBar();

        // this.animationPlaybackSequence();
    }

    animationPlaybackSequence() {
        let spinWheelNode = this.node.getChildByName(`spineWheel`);
        let playButtonNode = this.node.getChildByName(`spinePlayButton`);
        let audioSource = this.node.getComponent(cc.AudioSource);
        audioSource.clip = this.wheelIntroAudio;
        audioSource.play();
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, `play_intro`, false);
        this.scheduleOnce(() => {
            spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, `wheel_loop`, true);
            playButtonNode.children[0].getComponent(cc.Button).interactable = true;
        }, 0.75);
    }

    update(dt) {

    }

    onPlayButtonClicked() {
        console.log(`buttonClicked`);
        let playButtonNode = this.node.getChildByName(`spinePlayButton`);
        let audioSource = this.node.getComponent(cc.AudioSource);

        this.rngAnimIndex = this.getRandomInt(0, this.spinStateAnim.length);
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, `play_tapped`, false);
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        this.scheduleOnce(() => {
            this.spinWheelRotate(this.rngAnimIndex);


        }, 0.25);
    }

    spinWheelRotate(animNum: number) {
        let spinWheelNode = this.node.getChildByName(`spineWheel`);
        let playButtonNode = this.node.getChildByName(`spinePlayButton`);
        let audioSource = this.node.getComponent(cc.AudioSource);
        spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, this.spinStateAnim[animNum], false);
        audioSource.clip = this.wheelSpinAudio;
        audioSource.loop = true;
        audioSource.play();
        this.scheduleOnce(() => {
            if (this.rngAnimIndex == this.spinStateAnim.length - 1) {//retry
                playButtonNode.children[0].getComponent(cc.Button).interactable = true;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, `wheel_loop`, true);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, `play_demanding_atention`, true);
                audioSource.clip = this.wheelRetryAudio;
                audioSource.play();
            }
            else {
                audioSource.loop = false;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, `wheel_win_` + (this.rngAnimIndex + 1), false);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, `play_ending`, false);
                audioSource.clip = this.wheelWinAudio;
                this.node.getChildByName(`character`).getComponent(cc.Animation).play(`puzzleJump`);
                audioSource.play();
                this.scheduleOnce(() => {
                    this.showStarsMultiplier(this.playerScore);
                }, 3);
            }



        }, 3.25);
    }
    setEndProgressBar() {
        let progressBar = this.node.getChildByName("Popup").getChildByName("progressBar");
        // console.log("answerValues : ", globalVariables.Instance.answerArray)
        for (let i = 0; i < this.totalLevels; i++) {
            if (globalVariables.Instance.answerArray[i] == true) {
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
    }


    showStarsMultiplier(num: number) {
        this.scoreLabelNode.scale = 0;
        this.scoreLabelNode.getComponent(cc.Label).string = `x` + this.spinStateMultiplier[this.rngAnimIndex];
        this.node.getChildByName(`Popup`).active = false;
        cc.tween(this.scoreLabelNode).to(1, { scale: 1 }, { easing: `backOut` }).call(() => {
            this.scheduleOnce(() => {
                this.scoreLabelNode.getComponent(cc.Label).string = num + ` x ` + this.spinStateMultiplier[this.rngAnimIndex];
                this.node.getComponent(cc.AudioSource).clip = this.changeAudio;
                this.node.getComponent(cc.AudioSource).play();
                cc.tween(this.scoreLabelNode).to(1, { scale: 2 }, { easing: `backIn` }).call(() => {
                    this.scoreLabelNode.getComponent(cc.Label).string = (num * parseInt(this.spinStateMultiplier[this.rngAnimIndex])).toString();
                    this.node.getComponent(cc.AudioSource).clip = this.changeAudio;
                    this.node.getComponent(cc.AudioSource).play();
                    cc.tween(this.scoreLabelNode).to(0.5, { scale: 0 }, { easing: `backIn` }).start();
                }).start();
            }, 0.1);
        }).start();

        let max = parseInt(this.spinStateMultiplier[this.rngAnimIndex]);
        for (let i = 0; i < max; i++) {
            // console.log(i);
            let starNodes = new cc.Node(`stars` + (i + 1));
            starNodes.parent = this.node;
            starNodes.x = 0;
            starNodes.y = 0;
            starNodes.addComponent(cc.Sprite).spriteFrame = this.starImg;
            starNodes.addComponent(cc.AudioSource).clip = this.starsAudio;
            starNodes.getComponent(cc.AudioSource).volume = 0.5;
            let posX = this.getRandomInt(-320, 320);
            let posY = this.getRandomInt(-220, 220);
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
            this.scheduleOnce(() => {
                this.scheduleOnce(() => {
                    cc.tween(starNodes).to(1, { scale: 1, x: posX, y: posY }, { easing: `backOut` }).call(() => {
                        cc.tween(starNodes).to(1, { scale: 0.5, x: posX / 1.5, y: posY / 1.5 }, { easing: `backIn` }).call(() => {
                            // cc.tween(starNodes).to(2,{x:posX/1.5, y:posY/1.5},{easing:`backOut`}).start();
                        }).start();
                    }).start();
                    // cc.tween(starNodes).to(this.getRandomInt(30,50),{angle: 360*5}).start();
                    starNodes.getComponent(cc.AudioSource).play();
                    if (i == max - 1) {
                        console.log(`gameEnded--true`);
                    }
                }, (i + 1) / 50);

            }, 2.5);
        }

    }







}

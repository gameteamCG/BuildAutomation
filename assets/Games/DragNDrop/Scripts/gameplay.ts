import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import WebView from "../../../Framework/WebView/Scripts/WebView";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    private Option: cc.Node = null;
    @property(cc.AudioClip)
    private popSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    private buttonPress: cc.AudioClip = null;
    // @property(cc.AudioClip)
    private questionSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    private postiveSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    private positiveAudio: cc.AudioClip[] = [];

    private maxLevel: number = 7;
    correctAnswerCount: number = 0;
    incorrectAnswerCount: number = 0;
    private isFirstClick: boolean = false;
    canTouch: boolean = false;
    wrongAnswerCount: number = 1;
    timerCount: number = 16;

    private isTimerNeeded: boolean = true;

    private currentJockey: cc.Node = null;



    onLoad() {
        this.Option.getChildByName("Button").getChildByName("1").active = false;
        // else {
        //     cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        // }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);
        this.LoadQuestionData();
    }

    LoadQuestionData() {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }

        this.maxLevel = startGame.Instance.totalLevels;

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        this.timerCount = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].timer + 1;
        this.node.getChildByName("questionPanel").getChildByName("3").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;
        this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").children[0].getComponent(cc.Label).string =
            startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].timer.toString();

        this.isTimerNeeded = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isTimerNeeded;

        if (!this.isTimerNeeded) {
            this.Option.getChildByName("Button").getChildByName("Timer 1").active = false;
        }


        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound = audioClip;
            });

            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.node.getChildByName("Option").getChildByName("panel").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                this.node.getChildByName("Option").width = this.node.getChildByName("Option").getChildByName("panel").width;
                this.node.getChildByName("Option").height = this.node.getChildByName("Option").getChildByName("panel").height;
            });
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound = AudioClip;
            });

            this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionImageName, (spriteFrame) => {
                this.node.getChildByName("Option").getChildByName("panel").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                this.node.getChildByName("Option").width = this.node.getChildByName("Option").getChildByName("panel").width;
                this.node.getChildByName("Option").height = this.node.getChildByName("Option").getChildByName("panel").height;
            });
        }
        //startGame.Instance.jockeyName = "Podar";
        // this.currentJockey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }


    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1, false);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        this.canTouch = true;
        // this.Option.getChildByName("Button").getChildByName("1").getComponent(cc.Button).interactable = false;
        this.callOptionIn();

    }

    callOptionIn() {
        startGame.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        this.scheduleOnce(() => {
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(0.5, { y: 310 }, { easing: "sineInOut" }).start();
            cc.audioEngine.playEffect(this.questionSound, false);
            cc.tween(this.node.getChildByName("Option")).to(0.5, { x: 230 }, { easing: "sineInOut" }).start();
            // if (globalVariables.Instance.currentLevel == 1) {
            //     this.scheduleOnce(() => {
            //         this.node.getChildByName("hand").opacity = 255;
            //         this.node.getChildByName("hand").getComponent(cc.Animation).play("handiAnim2");
            //     }, 0.5);
            // }
            this.scheduleOnce(() => {
                this.Option.getChildByName("Button").getChildByName("1").getComponent(cc.Button).interactable = true;
            }, this.questionSound.duration + 0.01);
            this.scheduleOnce(() => {
                // this.node.getChildByName("questionPanel").getChildByName("2").getComponent(cc.Button).interactable = true;
                if (this.isTimerNeeded) {
                    this.timer();
                    this.scheduleOnce(() => {
                        this.OnButtonClick();
                    }, this.timerCount)
                }
                else {
                    this.Option.getChildByName("Button").getChildByName("tick").active = true;
                }
            }, this.questionSound.duration);
        }, 1.2);
    }
    timer() {
        // if (!this.canTouch) {
        if (this.timerCount > 0) {
            this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").children[0].getComponent(cc.Label).string = --this.timerCount + "";
            console.log()
            if (this.timerCount == 0) {
                this.node.getChildByName("Option").getChildByName("Button").getChildByName("Timer 1").active = false;
                this.node.getChildByName("Option").getChildByName("Button").getChildByName("2").active = true;
            }
            else {
                this.scheduleOnce(() => {
                    this.timer();
                }, 1)
            }
        }
        // }
    }

    playButtonSound(event: cc.Event) {
        if (!this.canTouch) {
            return;
        }
        cc.audioEngine.playEffect(this.questionSound, false);
        event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(() => {
            event.target.getComponent(cc.Button).interactable = true;
        }, this.questionSound.duration)
    }

    callNextLevel() {
        console.log("levelComplete--" + globalVariables.Instance.currentLevel);
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.loadScene("endScreen");
        }
        else {
            globalVariables.Instance.currentLevel++;
            cc.director.loadScene("1");
        }
    }

    OnButtonClick() {
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        if (!this.canTouch) {
            return;
        }
        this.Option.getChildByName("Button").getChildByName("tick").getComponent(cc.Button).interactable = false;
        this.Option.getChildByName("Button").getChildByName("tick").getComponent(cc.Animation).stop();
        this.canTouch = false;
        this.stopTimer();
        cc.audioEngine.playEffect(this.buttonPress, false);
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").getComponent(cc.Animation).stop();
            this.node.getChildByName("hand").opacity = 0;
        }
        this.Option.getChildByName("Button").getChildByName("2").active = true;
        this.Option.getChildByName("Button").getChildByName("1").active = false;
        cc.audioEngine.stopAllEffects();
        console.log("correctAnswer--" + globalVariables.Instance.currentLevel);

        this.node.getChildByName("questionPanel").children[1].getComponent(cc.Button).interactable = false;
        this.correctAnswerCount++;
        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.postiveSound, false);
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            this.scheduleOnce(() => {
                this.callPositiveRection();
            }, this.postiveSound.duration)
        }, 0.5)
    }

    callPositiveRection() {
        if (globalVariables.Instance.currentLevel == 1 || globalVariables.Instance.currentLevel == 4 || globalVariables.Instance.currentLevel == 5) {
            ProgressBar.Instance.createStarTrails(6, this.node)
            this.scheduleOnce(() => {
                ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                this.callJockey();
            }, 1.5)
        }
        else {
            this.callJockey();
            ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
        }
    }

    callJockey() {
        let boolean: boolean[] = [false, true, false, true, true, true];
        let anim: string[] = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        let num = globalVariables.Instance.currentLevel % 6;
        if (num >= 6) {
            num -= 6;
            if (num >= 6) {
                num -= 6;
            }
        }

        // startGame.Instance.jockey.setPosition[globalVariables.Instance.currentLevel % 2];
        startGame.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, anim[num], false);
        cc.audioEngine.playEffect(this.positiveAudio[globalVariables.Instance.currentLevel % 6], false);
        this.scheduleOnce(() => {
            startGame.Instance.jockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            cc.tween(this.node.getChildByName("Option")).to(0.7, { x: 1400 }, { easing: "sineInOut" }).start();
            this.callNextLevel();
        }, startGame.Instance.jockey.getComponent(sp.Skeleton).findAnimation(anim[globalVariables.Instance.currentLevel % 6]).duration);
    }

    timerSchedule = () => {
        --this.curTimer;
        if (this.curTimer == 0) {
            cc.audioEngine.playEffect(this.questionSound, false);
            this.scheduleOnce(() => {
                this.startTimer(10);
            }, this.questionSound.duration)
        }
    }
    curTimer: number = 0;
    startTimer(totalTime: number) {
        this.curTimer = totalTime;
        this.schedule(this.timerSchedule, 1, totalTime - 1)
    }
    stopTimer() {
        this.unschedule(this.timerSchedule)
    }

    loadSpriteFrame(imageName: string, callback: (spriteFrame: cc.SpriteFrame) => void) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    }
    loadAudioClip(audioName: string, callback: (spriteFrame: cc.AudioClip) => void) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, (err, spriteFrame) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    }
}
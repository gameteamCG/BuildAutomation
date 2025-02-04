import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import { GAME_EVENTS, LogTypes } from "../utils/Constants";
import EVENTS from "../utils/EventSystem";
import Target from "./Target";
import globalVariables from "./globalVariables";

enum AudioType {
  POSITIVE,
  NEGATIVE,
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property(cc.Node)
  public playerNode: cc.Node = null;

  @property(cc.AnimationClip)
  public upDownAnim: cc.AnimationClip = null;

  @property(cc.Prefab)
  public realArrow: cc.Prefab = null;

  @property(cc.Node)
  public fakeArrowNode: cc.Node = null;

  @property(cc.Node)
  public inputBlocker: cc.Node = null;

  @property(cc.Node)
  public trajectoryNode: cc.Node = null;

  @property(cc.Label)
  public questionLabel: cc.Label = null;

  @property(Target)
  public targets: Target[] = [];

  @property(cc.AudioClip)
  public positiveAudio: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  public negativeAudio: cc.AudioClip[] = [];

  @property(cc.AudioSource)
  public audioSrc: cc.AudioSource = null;

  @property(sp.Skeleton)
  public spineAnim: sp.Skeleton = null;

  @property(cc.Label)
  public scoreLabel: cc.Label = null;

  @property(cc.Node)
  public trajLimit: cc.Node = null;

  @property(cc.Node)
  public arrowHead: cc.Node = null;

  @property(cc.Integer)
  public trajectoryGrav: number = 1;

  @property(cc.SpriteFrame)
  public handIdleFrame: cc.SpriteFrame = null;

  @property(cc.SpriteFrame)
  public handHoldFrame: cc.SpriteFrame = null;

  @property(cc.SpriteFrame)
  public bowSpriteFrames: cc.SpriteFrame[] = [];

  @property(cc.SpriteFrame)
  public arrowSpriteFrames: cc.SpriteFrame[] = [];

  @property(cc.SpriteFrame)
  public backgroundSpriteFrames: cc.SpriteFrame[] = [];

  @property(cc.Node)
  public roughAreaNode: cc.Node = null;

  @property(cc.Node)
  public bgNode: cc.Node = null;

  @property(cc.AudioClip)
  private questionSound: cc.AudioClip[] = [];


  @property(cc.AudioClip)
  private bagPositive: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  private bagNegative: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  private cryonPositive: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  private cryonNegative: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  private podarPositive: cc.AudioClip[] = [];

  @property(cc.AudioClip)
  private podarNegative: cc.AudioClip[] = [];

  @property(cc.Font)
  private podar_font: cc.Font = null;
  @property(cc.Font)
  private jaipuria_font: cc.Font = null;

  @property(cc.AudioClip)
  private clockTick: cc.AudioClip = null;

  public targetNode: cc.Node = null;

  public targetInitPos: cc.Vec3 = null;

  public tutorialHand: cc.Node = null;

  private currLevel = 1;
  public static roughSheetMode: boolean = false;

  private questionSum = 0;
  private score = 0;
  private TotalOptions = 3;
  optionsNode: cc.Node = null;
  maxLevel = 1;
  answerNum: number = 0;

  tempname: string = "ABCD";
  private canTouch: boolean = false;

  star1Log: boolean = false;
  star2Log: boolean = false;
  star3Log: boolean = false;
  private defaultTime: number = 30;

  // @property(cc.Node)
  // public containerNode: cc.Node = null;

  private realArrowInstance: cc.Node = null;

  @property(cc.Integer)
  public power: number = 1000; // fixed, can be changed later
  private arrowRigidBody: cc.RigidBody = null;
  private launch: boolean = false;
  public mainBgSprite: cc.Sprite = null;

  private playerAnim: cc.Animation = null;

  correctAudio: cc.AudioClip[] = [];
  currentJcokey: cc.Node = null;

  private value: number;
  private timer: number = 0;
  private levelend: boolean = false;
  private lives: number = 3;
  private gameStarted: boolean = false;

  clocktick: any;


  public generateQuestion() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    this.questionSum = num1 + num2;
    this.questionLabel.string = `${num1} + ${num2} = ?`;
    this.createOptions();
  }

  onLoad() {
    console.log("onload@@@@@@@@@@@@@@");
    startGame.Instance.node.getChildByName("progress").opacity = 255;
    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1, false);
    cc.director.getPhysicsManager().enabled = true;
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.playerAnim = this.playerNode.getComponent(cc.Animation);
    EVENTS.on(GAME_EVENTS.HIT, this.onHit, this);
    EVENTS.on(GAME_EVENTS.MISS, this.onMiss, this);
    //this.generateQuestion();
    this.score = 0;
    this.arrowHead.active = false;
    this.tutorialHand = cc.find("Canvas/Gameplay/TutorialHand");
    cc.director.preloadScene("gameEnd");
    this.targetNode = cc.find("Canvas/Gameplay/Target");
    this.targetInitPos = this.targetNode.position;
    this.roughAreaNode.active = false;
    this.mainBgSprite = this.bgNode.getComponent(cc.Sprite);

    this.questionLabel.string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;


    // new code
    if (startGame.Instance.jockeyName == "Podar") {
      this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font = this.podar_font;
      this.node.getChildByName("Target").children.forEach((element) => {
        element.getChildByName("text").getComponent(cc.Label).font = this.podar_font;
      });
    }
    else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
      this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font = this.jaipuria_font;
      this.node.getChildByName("Target").children.forEach((element) => {
        element.getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
      });
    }


    this.optionsNode = this.node.getChildByName("Target");

    this.maxLevel = startGame.Instance.totalLevels;
    if (globalVariables.Instance.currentLevel == this.maxLevel) {
      cc.director.preloadScene("gameEnd");
    }
    console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

    this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;

    // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
    //   this.answerArray[i] = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i];
    // }

    this.answerNum = parseInt(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum);
    this.questionSum = this.answerNum;

    console.log("CorrectAnswer : ", this.answerNum, globalVariables.Instance.currentLevel);



    if (startGame.Instance.isDemoGame) {
      cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
        if (err) {
          console.error("Failed to load audio clip:", err);
          return;
        }
        this.questionSound[0] = audioClip;
      });




      for (let i = 0; i < this.TotalOptions; i++) {
        if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
          cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            const spriteFrame = new cc.SpriteFrame(texture);
            this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
        else {
          this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
        }

      }


      cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[0], (err, audioClip) => {
        if (err) {
          console.error("Failed to load audio clip:", err);
          return;
        }
        this.correctAudio[0] = audioClip;
      });
    }
    else {
      this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
        this.questionSound[0] = AudioClip;
        console.log("QuestionSound onload: ", this.questionSound[0]);
      });




      for (let i = 0; i < this.TotalOptions; i++) {
        if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
          this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
            this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
        else {
          console.log("for i : ", i);
          this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
        }

      }

      this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[0], (AudioClip) => {
        this.correctAudio[0] = AudioClip;
      });

    }
    this.currentJcokey = startGame.Instance.JockeyNode.getChildByName(startGame.Instance.jockeyName);
    this.currentJcokey.active = true;

  }

  start() {
    console.log("start@@@@@@@@@@@@@@");
    this.value = this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange;

    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
    startGame.Instance.node.getChildByName("progress").opacity = 255;



    if (startGame.Instance.jockeyName == "bag") {
      this.positiveAudio = this.bagPositive;
      this.negativeAudio = this.bagNegative;
    }
    else if (startGame.Instance.jockeyName == "cryon") {
      this.positiveAudio = this.cryonPositive;
      this.negativeAudio = this.cryonNegative;
    }
    else if (startGame.Instance.jockeyName == "Podar") {
      this.positiveAudio = this.podarPositive;
      this.negativeAudio = this.podarNegative;
    }

    //this.playTutorialAnim();
    this.scheduleOnce(() => {
      cc.audioEngine.playEffect(this.questionSound[0], false);
      this.scheduleOnce(() => {
        this.schedule(function () {
          if (!this.levelend) {
            this.timer += 1;
          }
        }, 1);
        this.gameStarted = true;
        this.clocktick = cc.audioEngine.playEffect(this.clockTick, true);
        this.node.getChildByName("TutorialHand").active = true;
      }, this.questionSound[0].duration);
    }, 1);

  }

  setQuestionScreen() {

    this.node.getChildByName("Target").children.forEach(element => {
      element.getChildByName("text").getComponent(cc.Label).string = "";
      if (element.getChildByName("img").getComponent(cc.Sprite).spriteFrame) {
        element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = null;
      }
    });

    this.questionLabel.string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

    if (startGame.Instance.isDemoGame) {
      cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
        if (err) {
          console.error("Failed to load audio clip:", err);
          return;
        }
        this.questionSound[0] = audioClip;
      });


      for (let i = 0; i < this.TotalOptions; i++) {
        if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
          cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            const spriteFrame = new cc.SpriteFrame(texture);
            this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
        else {
          this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
        }

      }

      cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[0], (err, audioClip) => {
        if (err) {
          console.error("Failed to load audio clip:", err);
          return;
        }
        this.correctAudio[0] = audioClip;
      });
    }
    else {
      this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
        this.questionSound[0] = AudioClip;
      });




      for (let i = 0; i < this.TotalOptions; i++) {
        if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
          this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
            this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
        else {
          console.log("for i : ", i);
          this.node.getChildByName("Target").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
        }

      }

      this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios[0], (AudioClip) => {
        this.correctAudio[0] = AudioClip;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@", this.correctAudio[0])
      });

    }
    this.currentJcokey = startGame.Instance.JockeyNode.getChildByName(startGame.Instance.jockeyName);
    this.scheduleOnce(() => {
      cc.audioEngine.playEffect(this.questionSound[0], false);
      this.scheduleOnce(() => {
        this.levelend = false;
        this.gameStarted = true;
        this.resetTimer();
        this.clocktick = cc.audioEngine.playEffect(this.clockTick, true);
      }, this.questionSound[0].duration)
    }, 1);
  }

  public genRandomNumber(low: number, high: number) {
    let min = Math.ceil(low);
    let max = Math.floor(high);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // can define other upper limit here
    return randomNumber;
  }

  public movePlayer() {
    this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
    this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
    this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
    this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "ch_2_run", true);
    cc.tween(this.playerNode)
      .by(0.25, { position: cc.v3(100, 0, 0) }, { easing: "quartOut" })
      .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
      .start();

    this.scheduleOnce(() => {
      this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
    }, 0.5);
  }

  public playSpineAnimAndIdle(
    animName: string,
    num: number,
    isCorrect: boolean
  ) {
    this.spineAnim.setAnimation(0, `${animName}${num}`, false);
    this.spineAnim.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
      if (trackEntry.animation.name === `${animName}${num}`) {
        // Play the idle animation (e.g., 'idle') once the primary animation completes
        this.spineAnim.setAnimation(0, "idle", true);
        if (isCorrect) {
          this.levelend = true;
          this.gameStarted = false;
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", this.levelend);
          globalVariables.Instance.currentLevel++;
          this.setQuestionScreen();
          this.panning(); // contains all panning logic and stuff
          this.toggleFakeArrowVisibility(true);

          //cc.director.loadScene("1");
        }
        // this.inputBlocker.active = false;
        this.playerAnim.play();
        this.scheduleOnce(() => {
          this.playerAnim.pause();
        }, 0.01);
        this.toggleFakeArrowVisibility(true);
        if (!isCorrect) {
          this.inputBlocker.active = false;
          this.resetTargetColors();
        }
        // ideally fake arrow visibility should be toggled here, but let's see
      }
    });
  }

  public resetTargetColors() {
    this.targets.forEach((target) => target.setDefColor());
  }

  public updateScore() {
    this.score++;
    this.scoreLabel.string = this.score.toFixed();
  }

  public createOptions() {
    let options: number[] = [];
    options[0] = this.questionSum;
    do {
      options[1] = this.genRandomNumber(1, 50);
    } while (options[1] === this.questionSum);
    do {
      options[2] = this.genRandomNumber(1, 50);
    } while (options[2] === options[1] || options[2] === this.questionSum);

    console.log("original array", options);

    let shuffledArr = this.shuffleOptions([...options]);

    console.log("shuffled array", shuffledArr);
    for (let i = 0; i < 3; i++) {
      this.targets[i].setValue(shuffledArr[i]);
    }
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


  public openRoughArea() {
    this.roughAreaNode.active = true;
    GameManager.roughSheetMode = true;
  }

  public changeBowAndArrowSprite() {
    let bow = this.playerNode.getChildByName("Bow");
    let arrow = this.playerNode.getChildByName("FakeArrow");

    bow.getComponent(cc.Sprite).spriteFrame =
      this.bowSpriteFrames[this.currLevel - 1];
    arrow.getComponent(cc.Sprite).spriteFrame =
      this.arrowSpriteFrames[this.currLevel - 1];
  }

  public shuffleOptions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  } // Fisher Yates Shuffle for shuffling the options


  afterReaction() {
    //console.log("this.node @@@@@@@", this.node)
    this.playerNode = this.node.getChildByName("Player");
    this.playerAnim = this.playerNode.getComponent(cc.Animation);
    this.playerAnim.play();
    this.scheduleOnce(() => {
      this.playerAnim.pause();
    }, 0.01);
    this.toggleFakeArrowVisibility(true);
    this.inputBlocker.active = false;
    this.resetTargetColors();
  }

  onHit(targetNode: Target) {
    this.answerNum = parseInt(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum);
    this.questionSum = this.answerNum;
    console.log("onHit targetNode : ", targetNode.value);
    console.log("onHit answerNum : ", this.questionSum);


    // this.commonActions();
    this.toggleLaunch(false);
    this.unschedule(this.changeArrowAngle);

    if (targetNode.value === this.questionSum) {
      console.log("Hooray, correct answer");
      //this.onRightAnswer();
      // let num = this.genRandomNumber(1, 10);
      // this.playSpineAnimAndIdle("positive_", num, true);
      // this.playAudio(AudioType.POSITIVE, num);
      //console.log("globalVariables.Instance.currentLevel #######", globalVariables.Instance.currentLevel)
      cc.audioEngine.playEffect(this.correctAudio[0], false);
      this.levelend = true;
      this.gameStarted = false;
      cc.audioEngine.stop(this.clocktick);
      this.updateScore();
      targetNode.setColor(cc.Color.GREEN);
      this.scheduleOnce(() => {
        this.afterReaction();
      }, 2);
      this.scheduleOnce(() => {
        this.callJockey();
      }, this.correctAudio[0].duration);
    } else {
      console.log("oh wrong answer, try again");
      // let num = this.genRandomNumber(1, 7);
      // this.playSpineAnimAndIdle("negative_", num, false);
      // this.playAudio(AudioType.NEGATIVE, num);
      targetNode.setColor(cc.Color.RED);
      this.afterReaction();
      this.callNegativeRection();
    }
    this.destroyArrow(1);
  }


  callJockey() {
    let anim: string[] = [];
    if (startGame.Instance.jockeyName == "Podar") {
      anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
    }
    else if (startGame.Instance.jockeyName == "bag") {
      anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
    }
    else if (startGame.Instance.jockeyName == "cryon") {
      anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
    }
    else if (startGame.Instance.jockeyName == "Singham") {
      anim = ["dance", "thumbs_up"];
    }
    else if (startGame.Instance.jockeyName == "Mighty_Raju") {
      anim = ["celebration", "well_done"];
    }
    else if (startGame.Instance.jockeyName == "Puzzle") {
      anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
    }
    // console.log("anim length = ", anim.length);
    let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
    // console.log("currentClipNum = ", currentClipNum);
    let pos: number[] = [-1200, 1200];
    let jockeytween: number[] = [-450, 450];
    //console.log("characterAppear--Podar_Jumbo");
    if (startGame.Instance.jockeyName == "Podar") {
      this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
    }
    else {
      this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
    }
    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
    this.scheduleOnce(() => {
      if (startGame.Instance.jockeyName == "Podar") {
        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
      }
      else {
        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
      }
      //console.log("characterDisappear--Podar_Jumbo");
      this.callNextLevel();
    }, this.positiveAudio[currentClipNum].duration);
  }

  callNextLevel() {
    console.log("levelComplete--" + globalVariables.Instance.currentLevel);
    this.callStarsEared();


    this.currLevel++;
    globalVariables.Instance.currentLevel++;
    ProgressBar.Instance.ProgressFill(this.currLevel - 1, false);
    console.log("this.currLevel : ", this.currLevel);
    if (this.currLevel >= startGame.Instance.questions.length + 1) {
      console.log("endgame reached");
      this.inputBlocker.active = true;
      this.scheduleOnce(() => {
        cc.director.loadScene("gameEnd");
      }, 2);
    }
    else {
      this.setQuestionScreen();
      this.panning(); // contains all panning logic and stuff
    }
    this.toggleFakeArrowVisibility(true);
  }

  callStarsEared() {
    if (!this.star1Log && globalVariables.Instance.currentLevel == 1) {
      this.star1Log = true;
      console.log("starsEarned--1");
    }
    if (!this.star2Log && globalVariables.Instance.currentLevel == 4) {
      this.star2Log = true;
      console.log("starsEarned--2");
    }
    if (!this.star3Log && globalVariables.Instance.currentLevel == this.maxLevel) {
      this.star3Log = true;
      console.log("starsEarned--3");
    }
  }

  private getRandomNumber(min: number, max: number): number {
    let _number: number = Math.random();
    _number = cc.misc.lerp(min, max, _number);
    _number = Math.round(_number);
    return _number;
  }


  callNegativeRection() {
    this.reduceLife();
    this.canTouch = false;
    //_node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
    this.scheduleOnce(() => {
      let anim: string[] = [];
      if (startGame.Instance.jockeyName == "Podar") {
        anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
      }
      else if (startGame.Instance.jockeyName == "bag") {
        anim = ["negative_1", "negative_2", "negative_3"];
      }
      else if (startGame.Instance.jockeyName == "cryon") {
        anim = ["negative_1", "negative_2", "negative_3"];
      }
      else if (startGame.Instance.jockeyName == "Singham") {
        anim = ["no"];
      }
      else if (startGame.Instance.jockeyName == "Mighty_Raju") {
        anim = ["try_again"];
      }
      else if (startGame.Instance.jockeyName == "Puzzle") {
        anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
      }

      let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
      if (startGame.Instance.jockeyName == "Podar") {
        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
      }
      else {
        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
      }
      this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
      cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
      this.scheduleOnce(() => {
        if (startGame.Instance.jockeyName == "Podar") {
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        this.canTouch = true;
      }, this.negativeAudio[currentClipNum].duration);
    }, 0.7);

  }


  public onRightAnswer() {
    this.currLevel++;
    globalVariables.Instance.currentLevel++;
    ProgressBar.Instance.ProgressFill(this.currLevel, false);
    console.log("this.currLevel : ", this.currLevel);
    if (this.currLevel >= startGame.Instance.questions.length + 1) {
      console.log("endgame reached");
      this.inputBlocker.active = true;
      this.scheduleOnce(() => {
        cc.director.loadScene("gameEnd");
      }, 2);
    }
    else {
      this.setQuestionScreen();
    }
    this.panning();
    this.toggleFakeArrowVisibility(true);
  }

  public destroyArrow(offset: number) {
    this.scheduleOnce(() => {
      if (this.realArrowInstance != null) {
        this.realArrowInstance.destroy();
        this.realArrowInstance = null;
      }
    }, offset);
  }

  public panning() {
    // contains all the panning functions and methods
    this.panBackground();
    this.movePlayer();
    this.panTarget();
    // this.changeBowAndArrowSprite();
  }

  public panBackground() {
    let clone1 = cc.instantiate(this.bgNode);
    let clone2 = cc.instantiate(this.bgNode);
    this.bgNode.addChild(clone1);
    this.bgNode.addChild(clone2);
    clone2.position = new cc.Vec3(1920, 0);
    let comp2 = clone2.getComponent(cc.Sprite);
    //comp2.spriteFrame = this.backgroundSpriteFrames[this.currLevel - 1];
    comp2.spriteFrame = this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame;

    cc.tween(clone1)
      .to(0.5, { position: new cc.Vec3(-1920, 0) }, { easing: "quartOut" })
      .call(() => {
        clone1.destroy();
      })
      .start();

    cc.tween(clone2)
      .to(0.5, { position: new cc.Vec3(0, 0) }, { easing: "quartOut" })
      .call(() => {
        this.mainBgSprite.spriteFrame =
          this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame;
        this.changeBowAndArrowSprite();
        clone2.destroy();
      })
      .start();
  }

  public panTarget() {
    let TargetEndPos = cc.find("Canvas/Gameplay/TargetEndPos");
    let TargetStartPos = cc.find("Canvas/Gameplay/TargetStartPos");

    cc.tween(this.targetNode)
      .call(() => {
        this.targets.forEach((target) => (target.node.active = false));
      })
      .to(0.5, { position: TargetEndPos.position }, { easing: "quartOut" })
      .call(() => {
        this.targetNode.position = TargetStartPos.position;
      })
      .delay(0.2)
      .to(0.5, { position: this.targetInitPos }, { easing: "quartOut" })
      .call(() => {
        this.targets.forEach((target) => (target.node.active = true));
        this.inputBlocker.active = false;
      })
      .start();
  }

  // public commonActions() {
  //   this.currLevel++;
  //   // *EXTERNAL
  //   ProgressBar.Instance.ProgressFill(this.currLevel, false);
  //   if (this.currLevel >= startGame.Instance.TotalLevels) {
  //     console.log("endgame reached");
  //     this.inputBlocker.active = true;
  //     this.scheduleOnce(() => {
  //       cc.director.loadScene("gameEnd");
  //     }, 2);
  //   }
  //   // this.scheduleOnce(() => {
  //   //   this.toggleFakeArrowVisibility(true);
  //   //   // this.inputBlocker.active = false;
  //   //   // this.generateQuestion();
  //   // }, 1);
  // }

  public onMiss() {
    // this.commonActions();
    this.scheduleOnce(() => {
      this.toggleLaunch(false);
      this.unschedule(this.changeArrowAngle);
    }, 2);
    let num = this.genRandomNumber(1, 7);
    // this.playSpineAnimAndIdle("negative_", num, false);
    // this.playAudio(AudioType.NEGATIVE, num);
    this.afterReaction();
    this.callNegativeRection();
  }



  public changeArrowAngle() {
    if (this.realArrowInstance == null) return;
    if (this.launch) {
      const velocity = this.arrowRigidBody.linearVelocity;

      // Calculate the angle of the velocity vector
      const angleInRadians = Math.atan2(velocity.y, velocity.x);

      // Convert the angle from radians to degrees
      const angleInDegrees = cc.misc.radiansToDegrees(angleInRadians);

      // Apply the rotation to the arrow
      this.realArrowInstance.angle = angleInDegrees;
    }
  }

  public onTouchStart() {
    this.node.getChildByName("TutorialHand").active = false;
    if (!this.gameStarted) {
      return;
    }
    if (GameManager.roughSheetMode) return;
    this.stopTutorialAnim();
    this.playDefAnim();
    this.arrowHead.active = true;
    // this.tweenAnimation();
    this.trajectoryNode.active = true;
    this.inputBlocker.active = true;
    this.schedule(() => {
      this.drawTrajectory();
    }, 0.01);
  }

  public onTouchEnd() {
    if (!this.gameStarted) {
      return;
    }
    if (GameManager.roughSheetMode) return;
    this.stopAnim();
    this.arrowHead.active = false;
    // this.toggleLaunch(true);
    this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
    this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
    this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
    this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "ch_1_shoot", false);
    this.scheduleOnce(() => {
      this.node.getChildByName("Player").getChildByName("lefthand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("player1").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("RightHand").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      this.node.getChildByName("Player").getChildByName("arrow").getComponent(sp.Skeleton).setAnimation(0, "idle_1", true);
      // this.node.getChildByName("Player").getChildByName("arrow").active = false;
      // this.node.getChildByName("Player").getChildByName("Bow").active = true;
      this.createNewArrow();
      this.toggleLaunch(true);
      // this.toggleFakeArrowVisibility(false);
      this.launchArrow();
      this.unschedule(this.drawTrajectory);
      this.trajectoryNode.active = false;
    }, 0.5);

    // this.launchArrow();
    // this.stopTween();
  }

  public toggleLaunch(val: boolean) {
    this.launch = val;
  }

  public playDefAnim() {
    this.playerAnim.play(this.upDownAnim.name);
    // this.tweenArrow();
  }

  public stopAnim() {
    this.playerAnim.stop();
    // this.node.getChildByName("Player").getChildByName("Bow").active = false;
    // this.node.getChildByName("Player").getChildByName("arrow").active = true;
  }

  public createNewArrow() {
    if (this.realArrowInstance != null) {
      console.log("instance not empty, destroying");
      this.realArrowInstance.destroy();
      this.realArrowInstance = null;
      this.inputBlocker.active = false;
    }
    this.realArrowInstance = cc.instantiate(this.realArrow);
    this.playerNode.addChild(this.realArrowInstance);
    this.realArrowInstance.position = this.fakeArrowNode.position;
    this.realArrowInstance.angle = this.fakeArrowNode.angle;
    this.arrowRigidBody = this.realArrowInstance.getComponent(cc.RigidBody);
    let realArrowSprite = this.realArrowInstance.getComponent(cc.Sprite);
    // realArrowSprite.spriteFrame = this.arrowSpriteFrames[this.currLevel - 1];
  }

  public toggleFakeArrowVisibility(val: boolean) {
    return;
    this.fakeArrowNode.active = val;
  }

  // *INFO: this function is completely hit and trial, so values will have to be changed here
  // to match the projectile path
  public drawTrajectory() {
    const graphics = this.trajectoryNode.getComponent(cc.Graphics);

    const arrowSprite = this.arrowHead;

    // Clear any previous drawing
    graphics.clear();

    // Set stroke color to red
    graphics.strokeColor = cc.Color.RED;
    graphics.fillColor = cc.Color.RED; // Optional: Set fill color to red

    // Get the angle from the fake arrow node (before launch)
    let angleInRadians = cc.misc.degreesToRadians(this.fakeArrowNode.angle);

    // Calculate the direction vector based on the angle
    let direction = cc
      .v2(Math.cos(angleInRadians), Math.sin(angleInRadians))
      .normalize();

    // Initial velocity based on the direction and power
    let initialVelocity = direction.mul(this.power);

    // Get the starting position of the fake arrow node
    let startPos = this.fakeArrowNode.position;

    // Simulate gravity (as you are using physics, assume gravity is -320 by default)
    let gravity = cc.v2(0, -320 * this.trajectoryGrav); // Adjust gravity scale

    // Time step and total time for simulating the trajectory
    let timeStep = 0.01;
    let simulationTime = (2 * initialVelocity.y) / -gravity.y; // Total time of flight
    simulationTime = Math.max(simulationTime, 2); // Ensure simulation time is at least 2 seconds

    let limitPos = this.node.convertToWorldSpaceAR(this.trajLimit.position);

    // Start drawing the trajectory
    graphics.moveTo(startPos.x, startPos.y);

    let lastPosX = startPos.x;
    let lastPosY = startPos.y;

    let endPosX = startPos.x; // To store the final position of the trajectory
    let endPosY = startPos.y;

    for (let t = 0; t < simulationTime; t += timeStep) {
      // Calculate the position at time t
      let posX = startPos.x + initialVelocity.x * t;
      let posY = startPos.y + initialVelocity.y * t + 0.5 * gravity.y * t * t;

      // Draw a line to the predicted position
      let posExp = this.node.convertToWorldSpaceAR(this.trajLimit.position);
      if (posX >= posExp.x - 150) {
        let overshootX = posX - (limitPos.x - 150);
        let interpolationRatio = 1 - overshootX / (posX - lastPosX);

        let finalPosX = lastPosX + (posX - lastPosX) * interpolationRatio;
        let finalPosY = lastPosY + (posY - lastPosY) * interpolationRatio;

        graphics.lineTo(finalPosX, finalPosY);
        endPosX = finalPosX;
        endPosY = finalPosY;
        break;
      }
      graphics.lineTo(posX, posY);

      lastPosX = posX;
      lastPosY = posY;

      endPosX = posX;
      endPosY = posY;
    }

    graphics.stroke(); // Stroke the line

    // Set the arrow's position to the end of the trajectory
    arrowSprite.setPosition(endPosX, endPosY);
    let arrowAngleRadians = Math.atan2(direction.y, direction.x);
    let angleInDegrees = cc.misc.radiansToDegrees(arrowAngleRadians);

    arrowSprite.angle = angleInDegrees;
  }

  public launchArrow() {
    let angleInRadians = cc.misc.degreesToRadians(this.realArrowInstance.angle);
    let direction = cc.v2(Math.cos(angleInRadians), Math.sin(angleInRadians));

    direction = direction.normalize();

    this.arrowRigidBody.gravityScale = 2;

    this.arrowRigidBody.applyLinearImpulse(
      direction.mul(this.power),
      this.arrowRigidBody.getWorldCenter(),
      true
    );

    this.schedule(() => {
      this.changeArrowAngle();
    }, 0.01);
  }

  public playTutorialAnim() {
    let tutorialHandSpriteComp = this.tutorialHand.getComponent(cc.Sprite);
    cc.tween(this.tutorialHand)
      .delay(0.5)
      .call(() => {
        tutorialHandSpriteComp.spriteFrame = this.handHoldFrame;
      })
      .delay(2)
      .call(() => {
        tutorialHandSpriteComp.spriteFrame = this.handIdleFrame;
      })
      .union()
      .repeatForever()
      .start();
  }

  public stopTutorialAnim() {
    cc.Tween.stopAllByTarget(this.tutorialHand);
    this.tutorialHand.active = false;
  }

  public playAudio(type: AudioType, num: number) {
    if (num <= 0) return;

    switch (type) {
      case AudioType.POSITIVE:
        this.audioSrc.clip = this.positiveAudio[num - 1];
        break;
      case AudioType.NEGATIVE:
        this.audioSrc.clip = this.negativeAudio[num - 1];
        break;
    }

    this.audioSrc.play();
  }

  update() {


    if (!this.levelend) {
      this.value = this.timer / this.defaultTime;
      this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange = this.value;


      if (this.timer >= this.defaultTime) {
        this.timer = 0;
        //this.levelend = true;
        this.reduceLife();
        this.resetTimer();
      }
    }

  }

  reduceLife() {
    console.log("Reducelife $$$$$$$$$$$$$$$$: ", this.lives);
    let currentLifeNode: cc.Node;
    currentLifeNode = this.node.getChildByName("lives").getChildByName(this.lives.toString());
    console.log("currentLifeNode : ", currentLifeNode);
    cc.tween(currentLifeNode)
      .to(0.1, { opacity: 150 })
      .to(0.1, { opacity: 255 })
      .to(0.1, { opacity: 150 })
      .to(0.1, { opacity: 255 }).call(() => {
        currentLifeNode.opacity = 0;
      }).start();
    this.lives -= 1;
    if (this.lives == 0) {
      this.resetGame();
    }
  }

  resetGame() {
    globalVariables.Instance.currentLevel = 1;
    this.setQuestionScreen();
  }

  resetTimer() {
    this.timer = 0;
    this.value = 0;
    this.value = this.timer / this.defaultTime;
    this.node.getChildByName("timer").getChildByName("timer1").getComponent(cc.Sprite).fillRange = this.value;
    cc.audioEngine.stop(this.clocktick);
  }
}

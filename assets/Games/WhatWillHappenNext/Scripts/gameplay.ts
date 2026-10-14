import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";
import TVInputManager from "./TVInputManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  dropNode: cc.Node = null;
  @property(cc.AudioClip)
  private popSound: cc.AudioClip[] = [];
  @property(cc.AudioClip)
  private questionSound: cc.AudioClip[] = [];
  @property(cc.AudioClip)
  private positiveSound: cc.AudioClip[] = [];
  @property(cc.AudioClip)
  private negativeSound: cc.AudioClip[] = [];
  @property(cc.AudioClip)
  private positiveAudio: cc.AudioClip[] = [];
  @property(cc.AudioClip)
  private negativeAudio: cc.AudioClip[] = [];
  @property(cc.Material)
  defaultMat: cc.Material = null;
  @property(cc.Material)
  greyMat: cc.Material = null;

  private isFirstClick: boolean = false;
  private canTouch: boolean = false;
  private answerArray: string[] = [];
  private audioanswerArray: string[] = [];
  private maxLevel: number = 7;
  wrongAnswerCount: number = 0;
  star1Log: boolean = false;
  star2Log: boolean = false;
  star3Log: boolean = false;
  currentJcokey: cc.Node = null;
  correctAudio: cc.AudioClip[] = [];
  private optionsNode: cc.Node = null;
  private questionBoxPosY: number = 0;
  positionArray: cc.Vec2[] = [];
  correctAnswerCount: number = 0;
  totalAnswers: number = 1;
  private answerWords: string[] = [
    "ऐरावत",
    "ऐनक",
    "ऐलान",
    "एम्बुलेंस",
    "एवरेस्ट",
  ];

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    for (
      let i = 0;
      i <
      startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
        .correctAnswerNum.length;
      i++
    ) {
      this.answerArray[i] =
        startGame.Instance.questions[
          globalVariables.Instance.currentLevel - 1
        ].correctAnswerNum[i];
      this.audioanswerArray[i] =
        startGame.Instance.questions[
          globalVariables.Instance.currentLevel - 1
        ].correctAnswerNum[i];
    }
    this.optionsNode = this.node.getChildByName("Option");
    this.GenerateOptions();
    this.maxLevel = startGame.Instance.totalLevels;
    if (globalVariables.Instance.currentLevel == this.maxLevel) {
      cc.director.preloadScene("endScreen");
    } else {
    }
    console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

    this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
      startGame.Instance.mainBg;

    if (startGame.Instance.isDemoGame) {
      cc.loader.load(
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .questionAudioName,
        (err, audioClip) => {
          if (err) {
            console.error("Failed to load audio clip:", err);
            return;
          }
          this.questionSound[0] = audioClip;
        }
      );

      if (
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .commonOptionImageName != ""
      ) {
        cc.loader.load(
          startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].commonOptionImageName,
          (err, texture) => {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            const spriteFrame = new cc.SpriteFrame(texture);
            //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            for (
              let i = 0;
              i <
              startGame.Instance.questions[
                globalVariables.Instance.currentLevel - 1
              ].numberOfOptions;
              i++
            ) {
              this.node
                .getChildByName("Option")
                .getChildByName((i + 1).toString())
                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
          }
        );
      }

      cc.loader.load(
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .questionImageName,
        (err, texture) => {
          if (err) {
            console.error("Failed to load image:", err);
            return;
          }
          const spriteFrame = new cc.SpriteFrame(texture);
          this.node
            .getChildByName("QuestionBox")
            .getChildByName("ThirdObject")
            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }
      );
      for (
        let i = 0;
        i <
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .numberOfOptions;
        i++
      ) {
        if (
          !startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].isOptionText
        ) {
          // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
          cc.loader.load(
            startGame.Instance.questions[
              globalVariables.Instance.currentLevel - 1
            ].options[i],
            (err, texture) => {
              if (err) {
                console.error("Failed to load image:", err);
                return;
              }
              const spriteFrame = new cc.SpriteFrame(texture);
              this.node
                .getChildByName("Option")
                .getChildByName((i + 1).toString())
                .getChildByName("img")
                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
          );
        } else {
          // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
          this.node
            .getChildByName("Option")
            .getChildByName((i + 1).toString())
            .getChildByName("text")
            .getComponent(cc.Label).string =
            startGame.Instance.questions[
              globalVariables.Instance.currentLevel - 1
            ].options[i];
        }
      }
      for (
        let i = 0;
        i <
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .correctAudios.length;
        i++
      ) {
        cc.loader.load(
          startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].correctAudios[i],
          (err, audioClip) => {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            this.correctAudio[i] = audioClip;
          }
        );
      }
    } else {
      //console.log("correctAudios : ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAudios);
      this.loadAudioClip(
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .questionAudioName,
        (AudioClip) => {
          this.questionSound[0] = AudioClip;
        }
      );

      if (
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .commonOptionImageName != ""
      ) {
        this.loadSpriteFrame(
          startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].commonOptionImageName,
          (spriteFrame) => {
            //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            for (
              let i = 0;
              i <
              startGame.Instance.questions[
                globalVariables.Instance.currentLevel - 1
              ].numberOfOptions;
              i++
            ) {
              this.node
                .getChildByName("Option")
                .getChildByName((i + 1).toString())
                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
          }
        );
      }
      this.loadSpriteFrame(
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .questionImageName,
        (spriteFrame) => {
          this.node
            .getChildByName("QuestionBox")
            .getChildByName("ThirdObject")
            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }
      );

      for (
        let i = 0;
        i <
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .numberOfOptions;
        i++
      ) {
        if (
          !startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].isOptionText
        ) {
          this.loadSpriteFrame(
            startGame.Instance.questions[
              globalVariables.Instance.currentLevel - 1
            ].options[i],
            (spriteFrame) => {
              this.node
                .getChildByName("Option")
                .getChildByName((i + 1).toString())
                .getChildByName("img")
                .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
          );
        } else {
          this.node
            .getChildByName("Option")
            .getChildByName((i + 1).toString())
            .getChildByName("text")
            .getComponent(cc.Label).string =
            startGame.Instance.questions[
              globalVariables.Instance.currentLevel - 1
            ].options[i];
        }
      }
      for (
        let i = 0;
        i <
        startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
          .correctAudios.length;
        i++
      ) {
        this.loadAudioClip(
          startGame.Instance.questions[
            globalVariables.Instance.currentLevel - 1
          ].correctAudios[i],
          (AudioClip) => {
            this.correctAudio[i] = AudioClip;
          }
        );
      }
    }
    //startGame.Instance.jockeyName = "Podar";
    this.currentJcokey = startGame.Instance.jockey.getChildByName(
      startGame.Instance.jockeyName
    );
    //this.currentJcokey.active = true;
  }

  start() {
    ProgressBar.Instance.ProgressFill(
      globalVariables.Instance.currentLevel - 1
    );
    startGame.Instance.node.getChildByName("progress").opacity = 255;
    this.totalAnswers = this.answerArray.length;
    this.OptionsLayoutGrid();
    this.reverseOptionsLayout();
    this.callThirdObjectIn();
  }

  private getRandomNumber(min: number, max: number): number {
    let _number: number = Math.random();
    _number = cc.misc.lerp(min, max, _number);
    _number = Math.round(_number);
    return _number;
  }

  isVisied: boolean = false;
  private setupTVFocus(activeContainerName: string) {
    let backBtn = startGame.Instance.node.getChildByName("back");
    let musicBtn = startGame.Instance.node.getChildByName("music");
    let soundBtn = this.node
      .getChildByName("questionPanel")
      .getChildByName("sound");
    backBtn.scale = 1;
    musicBtn.scale = 1;
    let optionButtons = this.node
      .getChildByName(activeContainerName)
      .children.filter((node) => {
        let btn = node.getComponent(cc.Button);
        return (
          node.active &&
          node.opacity > 0 &&
          (!btn || btn.interactable !== false)
        );
      });
    let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(
      (n) => !!n
    );
    if (globalVariables.Instance.currentLevel == 1 && !this.isVisied) {
      this.isVisied = true;
      TVInputManager.Instance.init(nodes, 0);
    } else {
      TVInputManager.Instance.init(nodes, -1);
    }
    TVInputManager.Instance.setCanSelect(this.canTouch);
  }

  private setupTVFocus2() {
    TVInputManager.Instance.callEnd();
    let backBtn = startGame.Instance.node.getChildByName("back");
    let musicBtn = startGame.Instance.node.getChildByName("music");
    backBtn.scale = 1;
    musicBtn.scale = 1;
    let nodes = [backBtn, musicBtn].filter((n) => !!n);
    TVInputManager.Instance.init(nodes, -1);
    TVInputManager.Instance.setCanSelect(this.canTouch);
  }

  GenerateOptions() {
    for (
      let i = 0;
      i <
      startGame.Instance.questions[globalVariables.Instance.currentLevel - 1]
        .numberOfOptions;
      i++
    ) {
      let option = cc.instantiate(this.node.getChildByName("template"));
      option.name = (i + 1).toString();
      option.setParent(this.node.getChildByName("Option"));
      option.setPosition(cc.v2(0, 0));
      option.opacity = 0;
      option.width = 250;
      option.height = 250;
      option.on(
        "touchstart",
        function (event) {
          this.TouchStart(option.getChildByName("img"));
        },
        this
      );
      option.on(
        "tv-select",
        function (event) {
          this.TouchStart(option.getChildByName("img"));
        },
        this
      );
    }
    this.node.getChildByName("template").destroy();
  }

  callThirdObjectIn() {
    this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
    this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
    // this.node.getChildByName("questionPanel").opacity = 255;
    cc.tween(this.node.getChildByName("questionPanel"))
      .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
      .start();
    this.node
      .getChildByName("questionPanel")
      .getChildByName("text")
      .getComponent(cc.Label).string =
      startGame.Instance.questions[
        globalVariables.Instance.currentLevel - 1
      ].questionText;

    this.node.getChildByName("QuestionBox").setPosition(cc.v2(-1500, -200));
    this.node.getChildByName("QuestionBox").scale = 1;
    this.scheduleOnce(() => {
      this.scheduleOnce(() => {
        cc.audioEngine.playEffect(this.popSound[0], false);
        cc.tween(this.node.getChildByName("QuestionBox"))
          .to(0.5, { x: -300 }, { easing: "sineInOut" })
          .start();
      }, 0.1);
      this.scheduleOnce(() => {
        let QuestionBox1 = cc.instantiate(
          this.node.getChildByName("QuestionBox")
        );
        QuestionBox1.name = "QuestionBox1";
        QuestionBox1.setParent(this.node);
        this.node.getChildByName("QuestionBox1").setPosition(cc.v2(-300, -200));
        this.scheduleOnce(() => {
          this.callOptionIn();
        }, 0.2);
      }, 0.5);
    }, 1);
  }

  OnVOButton(_event: cc.Event) {
    cc.audioEngine.stopAllEffects();
    cc.audioEngine.playEffect(this.questionSound[0], false);
    _event.target.getComponent(cc.Button).interactable = false;
    this.scheduleOnce(() => {
      _event.target.getComponent(cc.Button).interactable = true;
      _event.target.scale = 1;
      this.setupTVFocus("Option");
    }, this.questionSound[0].duration);
  }

  PlayQuestionAudio() {
    this.currentJcokey.active = true;
    cc.audioEngine.playEffect(this.questionSound[0], false);
    this.canTouch = true;
    TVInputManager.Instance.setCanSelect(this.canTouch);
    this.setupTVFocus("Option");
  }

  callOptionIn() {
    if (
      startGame.Instance.jockeyName == "supercub" ||
      startGame.Instance.jockeyName == "tlc"
    ) {
      this.node
        .getChildByName("Option")
        .setPosition(
          this.node.getChildByName("Option").x - 200,
          this.node.getChildByName("Option").y
        );
      this.node
        .getChildByName("QuestionBox")
        .setPosition(
          this.node.getChildByName("QuestionBox").x - 120,
          this.node.getChildByName("QuestionBox").y
        );
      this.node
        .getChildByName("QuestionBox1")
        .setPosition(
          this.node.getChildByName("QuestionBox1").x - 120,
          this.node.getChildByName("QuestionBox1").y
        );
    }
    let delay: number = 0.5;
    let ObjScale: number = 1;
    for (
      let i = 1;
      i <= this.node.getChildByName("Option").children.length;
      i++
    ) {
      this.node.getChildByName("Option").children[i - 1].scale = 0;
      this.node.getChildByName("Option").children[i - 1].opacity = 255;
      this.scheduleOnce(() => {
        cc.audioEngine.playEffect(this.popSound[0], false);
        cc.tween(
          this.node.getChildByName("Option").getChildByName(i.toString())
        )
          .to(0.5, { scale: ObjScale }, { easing: "sineInOut" })
          .start();
        if (i == this.node.getChildByName("Option").children.length) {
          this.scheduleOnce(() => {
            if (globalVariables.Instance.currentLevel == 1) {
              let hand = this.node.getChildByName("hand");
              console.log("answer array num = ", this.answerArray[0]);
              hand.setParent(
                this.node
                  .getChildByName("Option")
                  .getChildByName(this.answerArray[0])
              );
              hand.setPosition(0, -30);
              hand.setParentWithSamePos(this.node);
              let handPosition: cc.Vec2 = hand.getPosition();
              let ThirdObject: cc.Node = this.node
                .getChildByName("QuestionBox")
                .getChildByName("ThirdObject");
              let distanceX: number = 0;
              if (
                startGame.Instance.jockeyName == "supercub" ||
                startGame.Instance.jockeyName == "tlc"
              ) {
                distanceX = 420;
              } else {
                distanceX = 300;
              }
              let waitTime: number = 0;
              if (
                startGame.Instance.jockeyName == "tlc" ||
                startGame.Instance.jockeyName == "supercub"
              ) {
                waitTime = 2;
              }
              this.scheduleOnce(() => {
                hand.getComponent(cc.Animation).play("handDrag");
                this.scheduleOnce(() => {
                  hand.getComponent(cc.Animation).play("handDrop");
                  this.scheduleOnce(() => {
                    hand.setPosition(handPosition.x, handPosition.y);
                    hand.getComponent(cc.Animation).play("handDrag");
                    this.scheduleOnce(() => {
                      hand.getComponent(cc.Animation).play("handDrop");
                      this.scheduleOnce(() => {
                        hand.active = false;
                      }, 1);
                    }, 1);
                  }, 1);
                }, 1);
              }, waitTime);
            }
            this.PlayQuestionAudio();
          }, 0.5);
        }
      }, delay);
      delay += 0.5;
    }
  }

  OnButtonClick(_event: cc.Event) {}

  TouchStart(_node: cc.Node) {
    if (!this.canTouch) {
      return;
    }
    this.canTouch = false;
    TVInputManager.Instance.setCanSelect(this.canTouch);
    if (globalVariables.Instance.currentLevel == 1) {
      this.node.getChildByName("hand").active = false;
    }
    if (_node.parent.name == this.answerArray[0]) {
      this.setupTVFocus2();
      cc.audioEngine.stopAllEffects();
      console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
      this.node
        .getChildByName("questionPanel")
        .getChildByName("text")
        .getComponent(cc.Label).string =
        this.answerWords[globalVariables.Instance.currentLevel - 1];
      // cc.tween(this.node.getChildByName("questionPanel"))
      //   .to(1, { y: 1500 }, { easing: "sineInOut" })
      //   .start();
      this.node
        .getChildByName("questionPanel")
        .getChildByName("sound")
        .getComponent(cc.Button).interactable = false;
      cc.audioEngine.playEffect(this.popSound[0], false);
      this.callPositiveRection(_node);
    } else {
      this.wrongAnswerCount++;
      console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
      cc.tween(_node).to(0.2, { x: 0, y: 0 }, { easing: "backInOut" }).start();
      this.scheduleOnce(() => {
        this.callNegativeRection(_node);
      }, 0.2);
    }
  }

  callNextLevel() {
    cc.tween(this.node.getChildByName("QuestionBox"))
      .to(0.5, { x: -1500 }, { easing: "sineInOut" })
      .start();
    cc.tween(this.node.getChildByName("QuestionBox1"))
      .to(0.5, { x: -1500 }, { easing: "sineInOut" })
      .start();
    console.log("levelComplete--" + globalVariables.Instance.currentLevel);
    this.callStarsEared();
    if (globalVariables.Instance.currentLevel == this.maxLevel) {
      this.scheduleOnce(() => {
        cc.director.loadScene("endScreen");
      }, 1);
    } else {
      this.scheduleOnce(() => {
        globalVariables.Instance.currentLevel++;
        // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        cc.director.loadScene("1");
      }, 1);
    }
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
    if (
      !this.star3Log &&
      globalVariables.Instance.currentLevel == this.maxLevel
    ) {
      this.star3Log = true;
      console.log("starsEarned--3");
    }
  }

  callPositiveRection(_node: cc.Node) {
    let voIndex: number = this.audioanswerArray.indexOf(_node.parent.name);
    // this.node.getChildByName("confetti").setPosition(this.node.getChildByName("QuestionBox").x, this.node.getChildByName("QuestionBox").y);
    // this.node.getChildByName("confetti").getComponent(cc.Animation).play();
    cc.audioEngine.playEffect(this.positiveSound[0], false);
    let parentNode: cc.Node = _node.parent;
    let imgName: string = _node.name + this.correctAnswerCount + 1;
    _node.name = imgName;
    _node.setParentWithSamePos(this.node.getChildByName("QuestionBox"));
    let pos: cc.Vec2 = this.node
      .getChildByName("QuestionBox")
      .getChildByName(imgName)
      .getPosition();
    let thirdBox: cc.Node = this.node
      .getChildByName("QuestionBox")
      .getChildByName("ThirdObject");
    let xRandom: number = this.getRandomNumber(
      -thirdBox.width / 4,
      thirdBox.width / 4
    );
    this.node.getChildByName("QuestionBox").getChildByName(imgName).scale =
      this.node.getChildByName("QuestionBox").getChildByName(imgName).scale -
      this.node.getChildByName("QuestionBox").getChildByName(imgName).scale *
        0.2;
    cc.tween(this.node.getChildByName("QuestionBox").getChildByName(imgName))
      .bezierTo(
        1,
        cc.v2(pos.x / 2, pos.y + 200),
        cc.v2(xRandom / 2, pos.y + 200),
        cc.v2(0, thirdBox.height / 2 - 150)
      )
      .start();
    cc.tween(this.node.getChildByName("QuestionBox").getChildByName(imgName))
      .to(0.7, { scale: 0.5 }, { easing: "sineInOut" })
      .start();
    this.scheduleOnce(() => {
      cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
      parentNode.destroy();
      this.correctAnswerCount++;
      console.log(
        "TotalAnswers--" + this.totalAnswers,
        this.correctAnswerCount
      );
      if (this.correctAnswerCount == this.totalAnswers) {
        this.destroyOption();
        this.scheduleOnce(() => {
          ProgressBar.Instance.createStarTrails(6, this.node);
          this.scheduleOnce(() => {
            ProgressBar.Instance.ProgressFill(
              globalVariables.Instance.currentLevel
            );
            this.scheduleOnce(() => {
              cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: 1500 }, { easing: "sineInOut" })
                .start();
              this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = false;
              console.log(
                "correctAnswerCount--" + this.correctAnswerCount,
                this.totalAnswers
              );
              this.callJockey();
            }, 1);
          }, 1.5);
        }, this.correctAudio[voIndex].duration);
      }
    }, 0.5);
  }

  callJockey() {
    let anim: string[] = [];
    anim = [
      "positive_1",
      "positive_2",
      "positive_3",
      "positive_4",
      "positive_5",
      "positive_6",
      "positive_7",
      "positive_8",
      "positive_9",
      "positive_10",
    ];
    let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
    let pos: number[] = [-1200, 1200];
    let jockeytween: number[] = [-450, 450];
    this.currentJcokey.setPosition(
      pos[globalVariables.Instance.currentLevel % 2],
      -350
    );
    cc.tween(this.currentJcokey)
      .to(
        0.5,
        { x: jockeytween[globalVariables.Instance.currentLevel % 2] },
        { easing: "quartInOut" }
      )
      .start();
    this.scheduleOnce(() => {
      this.currentJcokey
        .getComponent(sp.Skeleton)
        .setAnimation(0, anim[currentClipNum], false);
      cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
      this.scheduleOnce(() => {
        cc.tween(this.currentJcokey)
          .to(
            0.5,
            { x: pos[globalVariables.Instance.currentLevel % 2] },
            { easing: "quartInOut" }
          )
          .start();
        if (startGame.Instance.jockeyName != "stallion") {
          this.currentJcokey
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        }
        this.callNextLevel();
      }, this.positiveAudio[currentClipNum].duration);
    }, 0.5);
  }

  callNegativeRection(_node: cc.Node) {
    _node.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
    cc.audioEngine.playEffect(this.negativeSound[0], false);
    if (this.wrongAnswerCount >= 6) {
      this.wrongAnswerCount = 1;
    }
    this.scheduleOnce(() => {
      let anim: string[] = [];
      anim = [
        "negative_1",
        "negative_2",
        "negative_3",
        "negative_4",
        "negative_5",
        "negative_6",
        "negative_7",
      ];
      let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
      this.currentJcokey.setPosition(1200, -350);
      cc.tween(this.currentJcokey)
        .to(0.5, { x: 400 }, { easing: "quartInOut" })
        .start();
      this.scheduleOnce(() => {
        this.currentJcokey
          .getComponent(sp.Skeleton)
          .setAnimation(0, anim[currentClipNum], false);
        cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
        this.scheduleOnce(() => {
          cc.tween(this.currentJcokey)
            .to(0.5, { x: 1200 }, { easing: "quartInOut" })
            .start();
          if (startGame.Instance.jockeyName != "stallion") {
            this.currentJcokey
              .getComponent(sp.Skeleton)
              .setAnimation(0, "idle", true);
          }
          this.canTouch = true;
          TVInputManager.Instance.setCanSelect(this.canTouch);
        }, this.negativeAudio[currentClipNum].duration);
      }, 0.5);
    }, 0.7);
    cc.tween(_node)
      .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
      .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
      .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
      .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
      .to(0.2, { x: _node.x }, { easing: "sineInOut" })
      .call(() => {
        _node.getComponent(cc.Sprite).setMaterial(0, this.defaultMat);
      })
      .start();
  }

  destroyOption() {
    for (
      let i = 0;
      i < this.node.getChildByName("Option").children.length;
      i++
    ) {
      //if (this.node.getChildByName("Option").children[i].name != this.answerArray[0]) {
      this.node.getChildByName("Option").children[i].destroy();
      //}
    }
  }

  loadSpriteFrame(
    imageName: string,
    callback: (spriteFrame: cc.SpriteFrame) => void
  ) {
    cc.loader.loadRes(
      "images/" + imageName,
      cc.SpriteFrame,
      (err, spriteFrame) => {
        if (err) {
          cc.error(err.message || err);
          return;
        }
        callback(spriteFrame);
      }
    );
  }
  loadAudioClip(
    audioName: string,
    callback: (spriteFrame: cc.AudioClip) => void
  ) {
    cc.loader.loadRes(
      "audios/" + audioName,
      cc.AudioClip,
      (err, spriteFrame) => {
        if (err) {
          cc.error(err.message || err);
          return;
        }
        callback(spriteFrame);
      }
    );
  }

  OptionsLayoutVertical() {
    let optionsLayout = this.optionsNode;
    let optionNodes = optionsLayout.children;

    const paddingBetweenOptions = 10;

    let totalHeight = 0;
    let maxWidth = 0;

    // Calculate the total height and the maximum width of the options
    for (let i = 0; i < optionNodes.length; i++) {
      let option = optionNodes[i];
      let optionWidth = option.width;
      let optionHeight = option.height;

      totalHeight += optionHeight + paddingBetweenOptions;
      if (optionWidth > maxWidth) {
        maxWidth = optionWidth;
      }
    }

    let availableHeight = optionsLayout.height;
    let totalHeightWithPadding =
      totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
    let scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);

    let accumulatedHeight = 0;

    // Position each option node vertically
    for (let i = 0; i < optionNodes.length; i++) {
      let option = optionNodes[i];

      // Calculate the scale factor for the option
      let optionScaleFactor = scaleFactor;

      // Scale the option
      option.width *= optionScaleFactor;
      option.height *= optionScaleFactor;

      // Calculate position based on anchor and scaled size
      let posY = accumulatedHeight + option.height * option.anchorY;
      option.y = posY - optionsLayout.height * optionsLayout.anchorY;

      accumulatedHeight += option.height + paddingBetweenOptions;

      // Scale and position children nodes proportionally
      for (let subChild of option.children) {
        subChild.x *= optionScaleFactor;
        subChild.y *= optionScaleFactor;
        subChild.width *= optionScaleFactor;
        subChild.height *= optionScaleFactor;
      }
    }

    optionsLayout.width = maxWidth * scaleFactor;
  }

  OptionsLayoutGrid() {
    //console.log("OptionsLayoutGrid");
    let numCols = 2;
    let numRows = 2;
    const paddingBetweenOptions = 120;

    let optionNodes = this.optionsNode;

    const optionWidth = 150; // Width of each option
    const optionHeight = 150; // Height of each option

    // const gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
    // const gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);

    const gridWidth =
      optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
    const gridHeight =
      optionHeight * numRows + paddingBetweenOptions * (numRows - 1);

    console.log(gridWidth);

    let currentRow = 0;
    let currentCol = 0;

    for (let i = 0; i < optionNodes.children.length; i++) {
      let option = this.optionsNode.children[i];
      //console.log(i, optionNodes.children.length);
      // Calculate position based on grid layout
      let posX = currentCol * (optionWidth + paddingBetweenOptions);
      let posY = currentRow * (optionHeight + paddingBetweenOptions);

      // Update position of the option
      option.setPosition(cc.v2(posX - 100, posY - 100));
      //this.positionArray.push(option.getPosition());

      currentCol++;
      if (currentCol >= numCols) {
        currentCol = 0;
        currentRow++;
      }
    }

    // Set the size of the options container to fit the grid
  }

  reverseOptionsLayout() {
    let optionsLayout = this.optionsNode;
    let optionNodes = optionsLayout.children;

    // Create an array to hold the new positions
    let newPositions = [];

    // Calculate new positions in reverse order
    for (let i = optionNodes.length - 1; i >= 0; i--) {
      newPositions.push(optionNodes[i].y);
    }

    // Update the positions of the options
    for (let i = 0; i < optionNodes.length; i++) {
      optionNodes[i].y = newPositions[i];
      this.positionArray.push(cc.v2(optionNodes[i].x, optionNodes[i].y));
    }
  }
}

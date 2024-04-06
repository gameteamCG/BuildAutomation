// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import startGame from "../../Framework/Scripts/StartGame";

cc.macro.ENABLE_TRANSPARENT_CANVAS = true;

const { ccclass, property } = cc._decorator;

@ccclass("QuestionData")
class QuestionData {
    // @property(Number)
    questionTime: number = 0;
    // @property(Boolean)
    isoptionText: boolean = false;
    // @property(Boolean)
    isquestionText: boolean = false;
    // @property(cc.SpriteFrame)
    questionImg: cc.SpriteFrame = null;
    // @property(cc.AudioClip)
    questionAudio: cc.AudioClip = null;
    // @property(String)
    questionText: string = "";
    // @property(cc.SpriteFrame)
    optionImgs: cc.SpriteFrame[] = [];
    // @property(String)
    optionTexts: string[] = [];
    // @property(cc.AudioClip)
    reiterationAudio: cc.AudioClip = null;
    correctAudio: cc.AudioClip = null;
    // @property(cc.AudioClip)
    wrongAudio: cc.AudioClip = null;
    // @property(Number)
    correctAnswer: number = 1;
}
@ccclass
export default class video extends cc.Component {

    @property(cc.Node)
    tools: cc.Node = null;
    @property(cc.Node)
    questionNode: cc.Node = null;
    @property(cc.Node)
    character: cc.Node = null;
    @property(cc.Node)
    starsPanel: cc.Node = null;
    @property(cc.AudioClip)
    bgMusic: cc.AudioClip = null;
    @property(cc.AudioClip)
    correctSound: cc.AudioClip = null;
    @property(cc.SpriteFrame)
    starSprites: cc.SpriteFrame[] = [];

    @property(cc.Font)
    jaipuria_font: cc.Font = null;
    @property(cc.Font)
    podar_font: cc.Font = null;
    @property(cc.Font)
    tlc_font: cc.Font = null;
    @property(cc.Font)
    supercub_font: cc.Font = null;


    @property(cc.AudioClip)
    positiveVO: cc.AudioClip[] = [];

    duration: number = 0;
    @property(cc.Node)
    slider: cc.Node = null;
    @property(cc.Node)
    private toolActivater: cc.Node = null;

    @property(QuestionData)
    questions: QuestionData[] = [];

    private isSliding: boolean = false;

    private currentTime: number = 0;
    private timers: number[] = [];
    private totalQuestions: number = 0;
    private questionAppeared: boolean[] = [];
    private currentQuestion: number = 0;
    private answeredQuestion: boolean[] = [];

    private isPause: boolean = false;
    private isPlay: boolean = true;
    private isOnSlider: boolean = false;
    private canNextQuestion: boolean = true;
    private attemps: number = 0;
    private videoCompleted: boolean = false;
    private gameStarted: boolean = false;

    private correctAnim: string[] = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
    private wrongAnim: string[] = ["negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3"];

    private puzzleCorrectAnim: string[] = ["positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3"];
    private puzzleNegativeAnim: string[] = ["negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1"];

    private supercubCorrectAnim: string[] = ["positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5"];
    private supercubNegativeAnim: string[] = ["negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4"];

    private podarCorrectAnim: string[] = ["possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6", "possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
    private podarNegativeAnim: string[] = ["negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6", "negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.UpdateQuestions();
        this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).active = true;
        this.scheduleOnce(() => {
            for (let i = 0; i < this.questions.length; i++) {
                this.timers[i] = this.questions[i].questionTime;
                console.log("question timer = ", this.timers[i]);
                this.totalQuestions++;
                this.questionAppeared[i] = false;
                this.answeredQuestion[i] = false;
            }
        }, 1);
        this.slider.children[2].on("touchstart", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);

        this.slider.children[2].on("touchmove", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchend", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);
        this.slider.children[2].on("touchcancel", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);

        this.slider.children[0].on("touchstart", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchmove", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchend", function () {
            this.UpdateSlider();
        }, this);
    }

    UpdateQuestions() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            });
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            });
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            });
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            });
        }
        for (let i = 0; i < startGame.Instance.TotalLevels; i++) {
            this.questions[i] = new QuestionData();
            this.questions[i].questionTime = parseInt(startGame.Instance.questions[i].QuestionAppearTime);
            this.questions[i].isoptionText = startGame.Instance.questions[i].IsOptionText;
            this.questions[i].isquestionText = startGame.Instance.questions[i].IsQuestionText;
            this.questions[i].correctAnswer = parseInt(startGame.Instance.questions[i].CorrectAnswer);
            if (!this.questions[i].isquestionText) {
                //load the question image
                if (startGame.Instance.isDemoGame) {
                    cc.loader.load(startGame.Instance.questions[i].QuestionImageName, (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.questions[i].questionImg = spriteFrame;
                    });

                }
                else {
                    this.loadSpriteFrame(startGame.Instance.questions[i].QuestionImageName, (spriteFrame) => {
                        this.questions[i].questionImg = spriteFrame;
                    });
                }
            }
            else {
                this.questions[i].questionText = startGame.Instance.questions[i].QuestionText;
            }
            if (!this.questions[i].isoptionText) {
                //load the option images
                for (let j = 0; j < startGame.Instance.questions[i].Options.length; j++) {
                    if (startGame.Instance.isDemoGame) {
                        cc.loader.load(startGame.Instance.questions[i].Options[j], (err, texture) => {
                            if (err) {
                                console.error("Failed to load image:", err);
                                return;
                            }
                            const spriteFrame = new cc.SpriteFrame(texture);
                            this.questions[i].optionImgs[j] = spriteFrame;
                        });

                    }
                    else {
                        this.loadSpriteFrame(startGame.Instance.questions[i].Options[j], (spriteFrame) => {
                            this.questions[i].optionImgs[j] = spriteFrame;
                        });
                    }
                }
            }
            else {
                //load the option texts
                for (let j = 0; j < startGame.Instance.questions[i].Options.length; j++) {
                    this.questions[i].optionTexts[j] = startGame.Instance.questions[i].Options[j];
                }
            }
            if (startGame.Instance.isDemoGame) {
                cc.loader.load(startGame.Instance.questions[i].QuestionAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.questions[i].questionAudio = audioClip;
                });
                cc.loader.load(startGame.Instance.questions[i].ReiterationAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.questions[i].reiterationAudio = audioClip;
                });
                cc.loader.load(startGame.Instance.questions[i].CorrectAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.questions[i].correctAudio = audioClip;
                });
                cc.loader.load(startGame.Instance.questions[i].WrongAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.questions[i].wrongAudio = audioClip;
                });
            }
            else {
                this.loadAudioClip(startGame.Instance.questions[i].QuestionAudioName, (audioClip) => {
                    this.questions[i].questionAudio = audioClip;
                });
                this.loadAudioClip(startGame.Instance.questions[i].ReiterationAudioName, (audioClip) => {
                    this.questions[i].reiterationAudio = audioClip;
                });
                this.loadAudioClip(startGame.Instance.questions[i].CorrectAudioName, (audioClip) => {
                    this.questions[i].correctAudio = audioClip;
                });
                this.loadAudioClip(startGame.Instance.questions[i].WrongAudioName, (audioClip) => {
                    this.questions[i].wrongAudio = audioClip;
                });
            }
        }
    }

    start() {
        this.playVideo1();
        for (let i = 2; i <= startGame.Instance.questions.length; i++) {
            let star = cc.instantiate(this.starsPanel.children[0]);
            star.parent = this.starsPanel;
            star.name = i.toString();
            star.setPosition(0, 0);
        }
        this.OptionsLayout();
        if (startGame.Instance.jockeyName == "puzzle") {
            this.correctAnim = this.puzzleCorrectAnim;
            this.wrongAnim = this.puzzleNegativeAnim;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.correctAnim = this.supercubCorrectAnim;
            this.wrongAnim = this.supercubNegativeAnim;
        }
        else if (startGame.Instance.jockeyName == "Podar") {
            this.correctAnim = this.podarCorrectAnim;
            this.wrongAnim = this.podarNegativeAnim;
        }
    }

    playVideo1() {
        this.node.on('completed', function () {
            if (this.gameStarted) {
                this.checkOnMissingQuestions();
                console.log("video completed");
                this.tools.active = false;
                this.videoCompleted = true;
            }
            // cc.director.loadScene("1");
            // this.node.destroy();
        }, this);

        this.node.on('playing', function () {
            this.isPlay = true;
            this.isPause = false;
            // console.log("Duration = ", this.node.getComponent(cc.VideoPlayer).getDuration());
            this.scheduleOnce(() => {
                this.ActivateTools(false);
            }, 2);
        }, this);
        // this.node.getComponent(cc.VideoPlayer).pause();
        this.node.getComponent(cc.VideoPlayer).volume = 0;
        // this.node.getComponent(cc.VideoPlayer).resume();
        // this.node.getComponent(cc.VideoPlayer).pause();

        this.node.getComponent(cc.VideoPlayer).play();

        this.scheduleOnce(() => {
            // this.ActivateTools(false);
            this.node.getComponent(cc.VideoPlayer).volume = 1;
            this.UpdateSlider();
            this.scheduleOnce(() => {
                this.gameStarted = true;
            }, 1);
            // this.isSliding = true;
        }, 1);
        // this.scheduleOnce(() => {
        //     this.tools.active = true;
        // }, 5);
    }

    ActivateTools(_activate: boolean = true) {
        if (_activate) {
            this.toolActivater.active = false;
            this.tools.opacity = 255;
            this.scheduleOnce(() => {
                if (this.tools.opacity == 255 && !this.isPause && !this.isOnSlider) {
                    this.ActivateTools(false);
                }
            }, 2)
        }
        else {
            this.toolActivater.active = true;
            this.tools.opacity = 0;
        }
    }

    starUpdate(_current: number, _answered: boolean = false, _correct: boolean = true) {
        for (let i = 0; i < this.starsPanel.children.length; i++) {
            if (i == _current) {
                this.starsPanel.children[i].opacity = 255;
                if (!_answered) {
                    this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[0];
                }
                else if (_answered) {
                    if (_correct) {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[2];
                    }
                    else {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[1];
                    }
                }
                break;
            }
        }

    }

    ResumePlayButton() {
        cc.audioEngine.stopMusic();
        this.isPlay = true;
        this.isPause = false;
        this.node.getComponent(cc.VideoPlayer).resume();
        this.tools.getChildByName("resume").active = false;
        this.tools.getChildByName("pause").active = true;
    }
    PauseButton() {
        this.isPlay = false;
        this.isPause = true;
        this.node.getComponent(cc.VideoPlayer).pause();
        this.tools.getChildByName("resume").active = true;
        this.tools.getChildByName("pause").active = false;
        this.ActivateTools();
    }


    UpdateSlider() {
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        console.log("updateslider : ", Math.round(this.node.getComponent(cc.VideoPlayer).currentTime));
        this.scheduleOnce(() => {
            this.isSliding = true;
            this.node.getComponent(cc.VideoPlayer).pause();

            this.node.getComponent(cc.VideoPlayer).resume();
            this.tools.getChildByName("resume").active = false;
            this.tools.getChildByName("pause").active = true;
        }, 0.2);
    }

    UpdateSlider2() {
        // console.log("updateslider : ");
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(() => {
            this.node.getComponent(cc.VideoPlayer).resume();
        }, 0.2)
        // this.scheduleOnce(() => {
        //     this.isSliding = true;
        //     this.node.getComponent(cc.VideoPlayer).pause();
        //     this.node.getComponent(cc.VideoPlayer).resume();
        //     this.tools.getChildByName("resume").active = false;
        //     this.tools.getChildByName("pause").active = true;
        // }, 0.1);
    }

    SliderButton() {
        this.isOnSlider = true;
        // console.log("is slider button working!!!!!!!");
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
    }

    OnQuestionAnswered(_event: cc.Event) {
        let input: string = _event.target.name;
        this.attemps++;
        if (parseInt(input) == this.questions[this.currentQuestion - 1].correctAnswer) {
            // this.character.getComponent(cc.Animation).play("correct");
            _event.target.getChildByName("green").active = true;
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.questions[this.currentQuestion - 1].reiterationAudio != null) {
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].reiterationAudio, false);
                }, 0.5);
            }
            _event.target.getParent().children.forEach(element => {
                element.getComponent(cc.Button).interactable = false;
            });
            // let num: number = this.getRandomNumber(0, this.correctAnim.length - 1)
            let num = this.currentQuestion - 1;
            if (num > this.correctAnim.length - 1) {
                num -= (this.correctAnim.length - 1);
                if (num > this.correctAnim.length - 1) {
                    num -= (this.correctAnim.length - 1);
                    if (num > this.correctAnim.length - 1) {
                        num -= (this.correctAnim.length - 1);
                    }
                }
            }
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].correctAudio, false);
                this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, this.correctAnim[num], false);
                if (this.attemps <= 1) {
                    this.starUpdate(this.currentQuestion - 1, true, true);
                }
                else {
                    this.starUpdate(this.currentQuestion - 1, true, false);
                }
                this.scheduleOnce(() => {
                    this.attemps = 0;
                    this.questionNode.active = false;
                    _event.target.getParent().children.forEach(element => {
                        // this.character.getComponent(cc.Animation).play("tweenOut");
                        cc.tween(this.character.getChildByName("anim")).to(0.5, { x: -600 }, { easing: "backInOut" }).start();
                        element.getChildByName("green").active = false;
                        element.getChildByName("red").active = false;
                        element.getComponent(cc.Button).interactable = true;
                    });
                    this.canNextQuestion = true;
                    if (this.videoCompleted) {
                        this.checkOnMissingQuestions();
                    }
                    else {
                        this.ResumePlayButton();
                    }
                }, this.getAnimDuration(this.correctAnim[num]));

            }, this.questions[this.currentQuestion - 1].reiterationAudio.duration + 0.5);
        }
        else {
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].wrongAudio, false);
            // this.character.getComponent(cc.Animation).play("wrong");
            // let num: number = this.getRandomNumber(0, this.wrongAnim.length - 1);
            let num = this.currentQuestion - 1;
            if (num > this.wrongAnim.length - 1) {
                num -= (this.wrongAnim.length - 1);
            }

            this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            // this.character.getChildByName("anim").getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            this.scheduleOnce(() => {
                // this.character.getComponent(cc.Animation).play("Idle");
                this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }, this.getAnimDuration(this.wrongAnim[num]));
            _event.target.getChildByName("red").active = true;
            _event.target.getComponent(cc.Button).interactable = false;
        }

    }

    OnSoundButton() {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
    }

    checkOnMissingQuestions() {
        let isEnd: boolean = true;
        for (let i = 0; i < this.questionAppeared.length; i++) {
            if (!this.questionAppeared[i]) {
                isEnd = false;
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
                break;
            }
        }
        if (isEnd) {
            this.character.active = false;
            this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(() => {
                this.node.getParent().getChildByName("gameEnd").active = true;
                console.log("showedScreen--Excellent");
                console.log("gameEnded--true");
                if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "crayon") {
                    this.node.getParent().getChildByName("gameEnd").getChildByName("jaipuria").active = true;
                }
                else {
                    this.node.getParent().getChildByName("gameEnd").getChildByName(startGame.Instance.jockeyName).active = true;
                }
                this.scheduleOnce(() => {
                    this.node.active = false;
                    if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "crayon") {
                        this.node.getParent().getChildByName("gameEnd").getChildByName("end").active = true;
                    }
                }, 2);
            }, this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).currentClip.duration);
        }
    }

    questionSetup() {
        let current = this.currentQuestion;
        this.starUpdate(this.currentQuestion);
        // this.character.getComponent(cc.Animation).play("tweenIn");
        this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim")).to(0.5, { x: 0 }, { easing: "backInOut" }).start();
        let id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        cc.audioEngine.setVolume(id, 0.1);
        if (this.questions[this.currentQuestion].isquestionText) {
            this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).string = this.questions[this.currentQuestion].questionText;
            this.questionNode.getChildByName("questionBox").getChildByName("img").active = false;
            this.questionNode.getChildByName("questionBox").getChildByName("text").active = true;
        }
        else {
            this.questionNode.getChildByName("questionBox").getChildByName("text").active = false;
            this.questionNode.getChildByName("questionBox").getChildByName("img").active = true;
            this.questionNode.getChildByName("questionBox").getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.questions[this.currentQuestion].questionImg;
        }

        if (this.questions[this.currentQuestion].isoptionText) {
            let i = 0;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.active = false;
                if (i <= (this.questions[this.currentQuestion].optionTexts.length - 1)) {
                    element.active = true;
                    element.getChildByName("text").getComponent(cc.Label).string = this.questions[this.currentQuestion].optionTexts[i];
                    element.getChildByName("img").active = false;
                    element.getChildByName("text").active = true;
                }
                i++;
            });
        }
        else {
            let i = 0;
            this.questionNode.getChildByName("options1").children.forEach(element => {
                element.active = false;
                if (i <= (this.questions[this.currentQuestion].optionImgs.length - 1)) {
                    element.active = true;
                    element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.questions[this.currentQuestion].optionImgs[i];
                    element.getChildByName("text").active = false;
                    element.getChildByName("img").active = true;
                }
                i++;
            });
        }


        this.scheduleOnce(() => {
            cc.audioEngine.playEffect(this.questions[current].questionAudio, false);
            this.character.getComponent(cc.Animation).play("Idle");
            this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.questionNode.getChildByName("options1").active = true;
            this.questionNode.getChildByName("questionBox").active = true;
        }, 0.5);
    }

    update() {
        if (this.isSliding) {
            let currentTime = this.node.getComponent(cc.VideoPlayer).currentTime;
            let duration = this.node.getComponent(cc.VideoPlayer).getDuration();
            let value = currentTime / duration;
            this.slider.getComponent(cc.Slider).progress = value;
            this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        }
        for (let i = 0; i < this.questions.length; i++) {
            if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) == this.timers[i] && !this.questionAppeared[i]
                && this.canNextQuestion && this.gameStarted) {
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
            }
        }
    }






    // Show loading animation.

    getAnimDuration(animName: string): number {
        console.log("animation name = ", animName);
        let num: number = this.character.getChildByName("anim").getChildByName(startGame.Instance.jockeyName).getComponent(sp.Skeleton).findAnimation(animName).duration;
        return num;
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    OnEnd() {
        window.close();
    }

    OptionsLayout() {
        let optionsLayout = this.starsPanel;
        let optionNodes = optionsLayout.children;

        const paddingBetweenOptions = 10;

        let totalWidth = 0;
        let maxHeight = 0;

        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];
            let optionWidth = option.width;
            let optionHeight = option.height;

            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }

        let availableWidth = optionsLayout.width;
        let totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        let scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);

        let accumulatedWidth = 0;
        for (let i = 0; i < optionNodes.length; i++) {
            let option = optionNodes[i];

            // Calculate the scale factor for the option
            let optionScaleFactor = scaleFactor;

            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;

            // Calculate position based on anchor and scaled size
            let posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);

            accumulatedWidth += option.width + paddingBetweenOptions;

            // Scale and position children nodes proportionally
            for (let subChild of option.children) {
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }

        optionsLayout.height = maxHeight * scaleFactor;
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
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, (err, audioClip) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    }




}
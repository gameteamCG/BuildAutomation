import Jockey from "../../../Framework/Jockeys/Scripts/Jockey";
import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";

import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";
import TVInputManager from "./TVInputManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameplay extends cc.Component {

    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;


    @property(cc.AudioClip)
    private popSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private popSound2: cc.AudioClip[] = [];

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

    @property(cc.AudioClip)
    private stallionPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private stallionNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private bagPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private bagNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private cryonPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private cryonNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private tlcPositive: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private tlcNegative: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private supercubPositive: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private supercubNegative: cc.AudioClip[] = [];


    @property(cc.AudioClip)
    private tlc_birdFlying: cc.AudioClip = null;

    @property(cc.AudioClip)
    private supercub_Pos1: cc.AudioClip = null;
    @property(cc.AudioClip)
    private supercub_Pos2: cc.AudioClip = null;
    @property(cc.AudioClip)
    private supercub_Neg1: cc.AudioClip = null;
    @property(cc.AudioClip)
    private supercub_Neg2: cc.AudioClip = null;

    @property(cc.Material)
    defaultMat: cc.Material = null;

    @property(cc.Material)
    greyMat: cc.Material = null;

    private isFirstClick: boolean = false;
    private canTouch: boolean = false;
    private answerArray: string[] = [];
    private maxLevel: number = 7;
    wrongAnswerCount: number = 0;
    star1Log: boolean = false;
    star2Log: boolean = false;
    star3Log: boolean = false;
    currentJcokey: cc.Node = null;
    canPlay: boolean = false;

    correctAudio: cc.AudioClip[] = [];

    @property(cc.Node)
    private optionsNode: cc.Node = null;
    @property(cc.Node)
    private dropZones: cc.Node = null;


    private questionBoxPosY: number = 0;

    touches: cc.Vec2[] = [];

    canMove: boolean = false;
    private collider: cc.Node = null;
    droppedBool: boolean[] = [];

    private answeredCount: number = 0;
    private totalAnswers: number = 0;

    // --- TAP-TO-MATCH additions ---
    private touchStartPos: cc.Vec2 = null;
    private readonly TAP_MOVE_THRESHOLD: number = 15;
    // --------------------------------


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        // let dropNode: cc.Node = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        else {
            // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        this.totalAnswers = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions;
        this.UpdateJSONData();
    }

    UpdateJSONData() {
        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations.length; i++) {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.correctAudio[i] = audioClip;
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        this.dropZones.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        this.optionsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isLeftOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.dropZones.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.dropZones.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i];
                }
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isRightOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.optionsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this.optionsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i];
                }
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations.length; i++) {
                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterations[i], (AudioClip) => {
                    this.correctAudio[i] = AudioClip;
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonLeftOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                        this.dropZones.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonRightOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                        this.optionsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });

            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isRightOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i], (spriteFrame) => {
                        this.optionsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.optionsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].rightoptions[i];
                }
            }
            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isLeftOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i], (spriteFrame) => {
                        this.dropZones.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.dropZones.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].leftoptions[i];
                }
            }
        }

        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);

        this.callThirdObjectIn();

    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        // this.answerArray = [startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum];
        this.answerArray[0] = "1";
        // this.OptionsLayout();


        if (startGame.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (startGame.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }

    }

    // SubscribeEvents() {

    //     this.collider = this.node.getChildByName("collider");

    //     for (let i = 0; i < this.dropZones.children.length; i++) {
    //         this.droppedBool[i] = false;
    //     }

    // --- Old click-based tap handler (kept for reference, no longer used) ---
    // TapOption(_node: cc.Node) {
    //     if (!this.canMove) {
    //         return;
    //     }
    //     this.node.getChildByName("hand").opacity = 0;
    //     this.Feedback(
    //         _node,
    //         this.dropZones.getChildByName(_node.name),
    //         parseInt(_node.name) - 1
    //     );
    // }

    /**
     * Tap-to-match handler for the RIGHT side ("optionsNode") only.
     * Tapping an option looks up the dropZone with the same name:
     *  - if it exists -> this is the correct pairing, run Feedback() as usual
     *    (this is exactly what the drag flow does when you drop an option
     *    onto its matching zone, so all existing correct-answer tweens/audio
     *    keep working unchanged).
     *  - if it does NOT exist -> this option is a decoy/wrong answer with no
     *    left-side target, so go straight to the wrong reaction.
     * Works off touchstart/touchend (see TouchEnd), NOT the cc.Node "click"
     * event, because "click" only fires automatically for nodes with a
     * cc.Button component (which these option nodes don't have).
     */
    OnTap(_node: cc.Node) {
        if (!this.canMove) {
            return;
        }

        this.node.getChildByName("hand").opacity = 0;

        let dropNode = this.dropZones.getChildByName(_node.name);

        if (dropNode) {
            this.Feedback(_node, dropNode, parseInt(_node.name) - 1);
        }
        else {
            // decoy / wrong option -> no matching left-side target at all
            this.canMove = false;
            this.canPlay = false;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node);
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }
    }

    SubscribeEvents() {

        // NOTE: removed the "click" binding here on purpose — it never fired
        // because these nodes have no cc.Button component. Tap is now handled
        // via touchstart/touchend below (see OnTap / TouchEnd).

        this.optionsNode.children.forEach(element => {
            element.getChildByName("line").getComponent(cc.Graphics).strokeColor = element.color;
            element.getChildByName("line").getComponent(cc.Graphics).moveTo(0, 0);
            element.getChildByName("line").getComponent(cc.Graphics).lineTo(0.1, 0);
            element.getChildByName("line").getComponent(cc.Graphics).lineTo(-0.11, 0);
            element.getChildByName("line").getComponent(cc.Graphics).stroke();
            element.getChildByName("line").getComponent(cc.Graphics).lineWidth = 10;

            element.on('touchstart', function (event) {
                this.TouchStart(element, event);
            }, this);
            element.on('tv-select', function (event) {
                this.TouchStart(element);
                // this.TouchEnd(element, event);

            }, this);
            element.on('touchmove', function (event) {
                this.TouchMove(element, event);
            }, this);
            element.on('touchend', function (event) {
                this.TouchEnd(element, event);
            }, this);
            element.on('touchcancel', function (event) {
                this.TouchEnd(element, event);
            }, this);

        });

        this.dropZones.children.forEach(element => {
            element.getChildByName("line").getComponent(cc.Graphics).strokeColor = element.color;
            element.getChildByName("line").getComponent(cc.Graphics).moveTo(0, 0);
            element.getChildByName("line").getComponent(cc.Graphics).lineTo(0.1, 0);
            element.getChildByName("line").getComponent(cc.Graphics).lineTo(-0.11, 0);
            element.getChildByName("line").getComponent(cc.Graphics).stroke();
            element.getChildByName("line").getComponent(cc.Graphics).lineWidth = 10;

            element.on('touchstart', function (event) {
                this.TouchStart1(element, event);
            }, this);
            element.on('tv-select', function (event) {
                this.TouchStart(element);
                // this.TouchEnd(element, event);

            }, this);
            element.on('touchmove', function (event) {
                this.TouchMove1(element, event);
            }, this);
            element.on('touchend', function (event) {
                this.TouchEnd(element, event);
            }, this);
            element.on('touchcancel', function (event) {
                this.TouchEnd(element, event);
            }, this);
        });

    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    GenerateOptions() {
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfLeftOptions; i++) {
            let dropNode = cc.instantiate(this.node.getChildByName("template"));
            dropNode.name = (i + 1).toString();
            dropNode.setParent(this.dropZones);
            dropNode.setPosition(cc.v2(0, 0));
            dropNode.opacity = 0;
        }
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfRightOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.optionsNode);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }

        console.log("dropZones = ", this.dropZones.name);
        // console.log("optionsNode = ", this.optionsNode.children.length);
        this.node.getChildByName("template").destroy();
    }

    callThirdObjectIn() {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        // this.node.getChildByName("questionPanel").opacity = 255;
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;

        this.OptionsLayoutVertical(this.optionsNode);
        this.OptionsLayoutVertical(this.dropZones);
        this.reverseOptionsLayout(this.optionsNode);
        this.reverseOptionsLayout(this.dropZones);
        // let posX = -237;
        // if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
        //     posX = -300;
        // }

        this.scheduleOnce(() => {
            let delay = 0.5;
            for (let i = 1; i <= this.dropZones.children.length; i++) {
                this.dropZones.children[i - 1].scale = 0;
                this.dropZones.children[i - 1].opacity = 255;
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.popSound[0], false);
                    cc.tween(this.dropZones.getChildByName(i.toString()))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                    if (i == this.dropZones.children.length) {
                        this.scheduleOnce(() => {
                            this.callOptionIn();
                        }, 0.5);
                    }
                }, delay);
                delay += 0.3;
            }
        }, 1);
    }

    // OnVOButton() {
    // cc.audioEngine.stopAllEffects();
    // if (this.questionSound[0])
    //     cc.audioEngine.playEffect(this.questionSound[0], false);
    // this.setupTVFocus("Option");
    // }
    playButtonSound(_event: cc.Event) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionSound[0], false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(() => {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            this.setupTVFocus("Option");
        }, this.questionSound[0].duration)
    }

    callOptionIn() {
        let delay: number = 0.5;
        if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            this.optionsNode.children.forEach(element => {
                element.setPosition(190, element.getPosition().y);
            });
        }
        for (let i = 1; i <= this.optionsNode.children.length; i++) {
            this.optionsNode.children[i - 1].scale = 0;
            this.optionsNode.children[i - 1].opacity = 255;
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.popSound[0], false);
                cc.tween(this.optionsNode.getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
                if (i == this.optionsNode.children.length) {
                    this.scheduleOnce(() => {
                        this.PlayQuestionAudio();
                        this.SubscribeEvents();
                    }, 0.5);
                }
            }, delay);
            delay += 0.3
        }
        this.setupTVFocus("Option");

    }

    PlayHandAnimation() {
        let hand = this.node.getChildByName("hand");
        let pos1: cc.Vec2 = this.dropZones.getChildByName("1").getPosition();
        let pos2: cc.Vec2 = this.optionsNode.getChildByName("1").getPosition();
        // hand.setParent(this.dropZones.getChildByName("1"));
        hand.setPosition(pos1);
        cc.tween(hand).to(2, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" }).start();
        hand.getComponent(cc.Animation).play();
        this.scheduleOnce(() => {
            if (hand.activeInHierarchy && hand.opacity == 255) {
                this.PlayHandAnimation();
            }
        }, 2);
    }

    PlayQuestionAudio() {
        this.canMove = false;
        this.canPlay = false;
        if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        this.currentJcokey.active = true;
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
            if (globalVariables.Instance.currentLevel == 1) {
                // PLAY CONNECT HAND ANIMATION
                this.PlayHandAnimation();
            }
        }
        else if (startGame.Instance.jockeyName == "tlc" || startGame.Instance.jockeyName == "supercub") {
            let intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (startGame.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            if (startGame.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, intoAnim, false);
            this.scheduleOnce(() => {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    this.canMove = true;
                    this.canPlay = true;
                    if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    if (globalVariables.Instance.currentLevel == 1) {
                        // PLAY CONNECT HAND ANIMATION
                        this.PlayHandAnimation();
                    }
                }
                else {
                    cc.audioEngine.playEffect(this.questionSound[0], false);
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_loop", true);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_end", false);
                        this.scheduleOnce(() => {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            this.canMove = true;
                            this.canPlay = true;
                            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                            if (globalVariables.Instance.currentLevel == 1) {
                                // PLAY CONNECT HAND ANIMATION
                                this.PlayHandAnimation();
                            }
                        }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, this.questionSound[0].duration);
                }

            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }

    }

    callNextLevel() {
        if (this.answeredCount >= this.totalAnswers) {
            console.log("levelComplete--" + globalVariables.Instance.currentLevel);
            ProgressBar.Instance.createStarTrails(6, this.node);
            this.scheduleOnce(() => {
                ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                this.scheduleOnce(() => {
                    this.callStarsEared();
                    if (globalVariables.Instance.currentLevel == this.maxLevel) {
                        cc.director.loadScene("endScreen");
                    }
                    else {
                        globalVariables.Instance.currentLevel++;
                        cc.director.loadScene("1");
                    }
                }, 1);
            }, 1.5);
        }
        else {
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
            this.dropZones.active = true;
            this.optionsNode.active = true;
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = true;
            this.node.getChildByName("overlay").active = false;
            this.node.getChildByName("overlay").children.forEach(element => {
                if (element.name != "bg") {
                    element.destroy();
                }
            });
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);

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
        if (!this.star3Log && globalVariables.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    }

    callPositiveRection(_node1: cc.Node, _node2: cc.Node) {
        let _clone1: cc.Node = cc.instantiate(_node1);
        let _clone2: cc.Node = cc.instantiate(_node2);
        _clone1.scale = 1;
        _clone2.scale = 1;
        this.node.getChildByName("overlay").active = true;
        _clone1.setParent(this.node.getChildByName("overlay"));
        _clone2.setParent(this.node.getChildByName("overlay"));
        _node1.destroy();
        _node2.destroy();
        this.dropZones.active = false;
        this.optionsNode.active = false;
        cc.audioEngine.playEffect(this.positiveSound[0], false);
        cc.tween(_clone1).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1.children[1]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1.children[1]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1.children[2]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1.children[2]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_clone1).to(0.5, { x: -160, y: 0 }, { easing: "sineInOut" }).start();

        cc.tween(_clone2).to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2.children[1]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2.children[1]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2.children[2]).to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2.children[2]).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        cc.tween(_clone2).to(0.5, { x: 190, y: 0 }, { easing: "sineInOut" }).start();

        this.scheduleOnce(() => {
            let audioNum: number = parseInt(_clone1.name);
            audioNum -= 1;
            console.log("audio Number = ", audioNum);
            cc.audioEngine.playEffect(this.correctAudio[audioNum], false);
            this.node.getChildByName("confetti").setPosition(0, 0);
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            this.scheduleOnce(() => {
                this.callJockey();
            }, 0.7);
        }, 0.5);
    }


    callJockey() {
        let anim: string[] = [];
        if (startGame.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (startGame.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
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
        else if (startGame.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        // console.log("anim length = ", anim.length);
        let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        let pos: number[] = [-1200, 1200];
        let jockeytween: number[] = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (globalVariables.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                    if (startGame.Instance.jockeyName != "stallion" && startGame.Instance.jockeyName != "Podar") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                    if (startGame.Instance.jockeyName == "Podar") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                //bird flying out sound
                if (this.answeredCount >= this.totalAnswers) {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_out", false);
                    cc.audioEngine.playEffect(this.tlc_birdFlying, false);
                    this.scheduleOnce(() => {
                        this.currentJcokey.active = false;
                        this.callNextLevel();
                    }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
                }
                else {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.callNextLevel();
                }
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" || anim[currentClipNum] == "positive_2") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(this.supercub_Pos2, false);
                        }
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                        this.scheduleOnce(() => {
                            if (this.answeredCount >= this.totalAnswers) {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                                cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                                this.callNextLevel();
                            }
                            else {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                                this.callNextLevel();
                            }
                        }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration)
                    }, this.positiveAudio[currentClipNum].duration);

                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    if (this.answeredCount >= this.totalAnswers) {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                        cc.tween(this.currentJcokey).to(2, { x: -1000 }).start();
                        this.callNextLevel();
                    }
                    else {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        this.callNextLevel();
                    }
                }, this.positiveAudio[currentClipNum].duration);
            }

        }


    }


    callNegativeRection(_node: cc.Node) {
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        this.scheduleOnce(() => {
            let anim: string[] = [];
            if (startGame.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (startGame.Instance.jockeyName == "Puzzle") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (startGame.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (startGame.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (startGame.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (startGame.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }

            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (startGame.Instance.jockeyName == "stallion") {
                this.currentJcokey.scaleX = 0.65;
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            if (startGame.Instance.jockeyName != "tlc" && startGame.Instance.jockeyName != "supercub") {
                this.currentJcokey.setPosition(1200, -350);
                cc.tween(this.currentJcokey).to(0.5, { x: 400 }, { easing: "quartInOut" }).start();
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                        if (startGame.Instance.jockeyName != "stallion" && startGame.Instance.jockeyName == "Podar") {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        if (startGame.Instance.jockeyName == "Podar") {
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                        //console.log("characterDisappear--Podar_Jumbo");
                        this.canMove = true;
                        this.canPlay = true;
                        if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                    }, this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    this.canMove = true;
                    this.canPlay = true;
                    if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                }, this.negativeAudio[currentClipNum].duration);
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" || anim[currentClipNum] == "negative_2") {
                    //play bulb break if needed
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                        this.scheduleOnce(() => {
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(this.supercub_Neg2, false);
                            }
                            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                            this.canMove = true;
                            this.canPlay = true;
                            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                            this.scheduleOnce(() => {
                                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, this.negativeAudio[currentClipNum].duration);

                    }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                    this.scheduleOnce(() => {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        this.canMove = true;
                        this.canPlay = true;
                        if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
                    }, this.negativeAudio[currentClipNum].duration);
                }

            }
        }, 0.7)

        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" }).call(() => {
            })
            .start();
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

    OptionsLayoutVertical(_node: cc.Node) {
        let optionsLayout = _node;
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
        let totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
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
            let posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);

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

    reverseOptionsLayout(_node: cc.Node) {
        let optionsLayout = _node;
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
        }
        let pos = optionsLayout.getPosition();
        optionsLayout.setPosition(0, 0);


        for (let i = 0; i < optionNodes.length; i++) {
            if (optionNodes.length > 1) {
                optionNodes[i].setPosition(pos.x, optionNodes[i].y + pos.y);
            }
            else if (optionNodes.length == 1) {
                optionNodes[i].setPosition(pos.x, pos.y);
            }
            let _polygon = optionNodes[i].getComponent(cc.PolygonCollider);
            _polygon.points[0].x = -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[0].y = -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[1].x = optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[1].y = -optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[2].x = optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[2].y = optionNodes[i].getChildByName("img").height / 2;
            _polygon.points[3].x = -optionNodes[i].getChildByName("img").width / 2;
            _polygon.points[3].y = optionNodes[i].getChildByName("img").height / 2;
        }

        if (_node.name == this.optionsNode.name) {
            const children = optionsLayout.children;

            // Create an array to store the original positions
            const originalPositions = [];

            // Store the original positions of the children nodes
            for (let i = 0; i < children.length; i++) {
                originalPositions.push(children[i].position.clone());
            }

            // Shuffle the positions randomly
            for (let i = children.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = children[i].position.clone();
                children[i].setPosition(children[j].position);
                children[j].setPosition(temp);
            }
        }
    }



    TouchStart(_node: cc.Node, _event: any) {
        if (!this.canMove) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        this.node.getChildByName("hand").opacity = 0;
        //console.log("movement fix start : ",this.dropZones.getChildByName("1"));
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }

        // record start position for tap detection
        // this.touchStartPos = _event.touch.getLocation();
        // record start position for tap detection
        // if (_event && _event.touch) {
        //     this.touchStartPos = _event.touch.getLocation();
        // }
        // else {
        //     // TV / keyboard selection
        //     this.OnTap(_node);
        //     return;
        // } 
        if (_event && _event.touch) {
            this.touchStartPos = _event.touch.getLocation();
        }
        else {
            // TV / Keyboard selection
            if (_node.getParent() == this.optionsNode) {
                this.OnTap(_node);
            }
            return;
        }

        // var deltax = _event.touch.getLocationX();
        // var deltay = _event.touch.getLocationY();
        // this.collider.setPosition(deltax - 640, deltay - 400);
        // this.touches.length = 0;
        // this.touches.push(_event.touch.getLocation());
        if (_node.getParent() == this.optionsNode) {
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }
        else {
            this.canMove = false;
            this.canPlay = false;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }
    }

    TouchMove(_node: cc.Node, _event: any) {
        // this.node.getChildByName("hand").active = false;
        // //console.log("Touch move : ");
        // if (this.canMove) {
        //     var delta = _event.touch.getDelta();

        //     this.collider.x += delta.x;
        //     this.collider.y += delta.y;

        //     let touches = this.touches;
        //     touches.push(_event.touch.getLocation());

        //     const MIN_POINT_DISTANCE = 2;
        //     let graphics = _node.getChildByName("line").getComponent(cc.Graphics);
        //     graphics.clear();
        //     let worldPos = this.node.convertToWorldSpaceAR(cc.v2(_node.getPosition().x, _node.getPosition().y));
        //     graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        //     let lastIndex = 0;
        //     for (let i = 1, l = touches.length; i < l; i++) {
        //         if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
        //             continue;
        //         }
        //         lastIndex = i;
        //     }
        //     graphics.lineTo(touches[lastIndex].x - worldPos.x, touches[lastIndex].y - worldPos.y);

        //     graphics.stroke();

        //     for (let i = 0; i < this.dropZones.children.length; i++) {
        //         var _nodeWorldSpacePos = _node.parent.convertToWorldSpaceAR(this.collider.getPosition());
        //         var _actualPosition = this.dropZones.children[i].convertToNodeSpaceAR(_nodeWorldSpacePos);
        //         if ((cc.Intersection.pointInPolygon(new cc.Vec2(_actualPosition.x, _actualPosition.y), this.dropZones.children[i].getComponent(cc.PolygonCollider).points)) && (!this.droppedBool[i] || _node.name == this.dropZones.children[i].name)) {
        //             //console.log("inside touch move @@@@@@@")
        //             this.Feedback(_node, this.dropZones.children[i], i);
        //             this.canMove = false;
        //             break;
        //         }
        //         // if (this.collider.getBoundingBox().contains(this.dropZones.children[i].getPosition())) {
        //         //     this.Feedback(_node, this.dropZones.children[i], i);
        //         //     this.canMove = false;
        //         //     break;
        //         // }
        //     }
        // }
    }

    TouchEnd(_node: cc.Node, _event: any) {
        _node.getChildByName("line").getComponent(cc.Graphics).clear();

        // --- TAP DETECTION ---
        // If the touch barely moved between start and end, treat it as a tap
        // instead of a drag, and resolve it via OnTap().
        if (this.touchStartPos) {
            let endPos = _event.touch.getLocation();
            let movedDistance = endPos.sub(this.touchStartPos).mag();
            if (movedDistance < this.TAP_MOVE_THRESHOLD && _node.getParent() == this.optionsNode) {
                this.OnTap(_node);
            }
        }
        this.touchStartPos = null;
    }

    TouchStart1(_node: cc.Node, _event: any) {
        if (!this.canMove) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        this.node.getChildByName("hand").opacity = 0;

        // record start position for tap detection
        this.touchStartPos = _event.touch.getLocation();

        // var deltax = _event.touch.getLocationX();
        // var deltay = _event.touch.getLocationY();
        // this.collider.setPosition(deltax - 640, deltay - 400);
        // this.touches.length = 0;
        // this.touches.push(_event.touch.getLocation());
        if (_node.getParent() == this.dropZones) {
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }
        else {
            this.canMove = false;
            this.canPlay = false;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }

    }

    TouchMove1(_node: cc.Node, _event: any) {
        // if (this.canMove) {
        //     var delta = _event.touch.getDelta();

        //     this.collider.x += delta.x;
        //     this.collider.y += delta.y;

        //     let touches = this.touches;
        //     touches.push(_event.touch.getLocation());

        //     const MIN_POINT_DISTANCE = 2;
        //     let graphics = _node.getChildByName("line").getComponent(cc.Graphics);
        //     graphics.clear();
        //     let worldPos = this.node.convertToWorldSpaceAR(cc.v2(_node.getPosition().x, _node.getPosition().y));
        //     graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        //     let lastIndex = 0;
        //     for (let i = 1, l = touches.length; i < l; i++) {
        //         if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
        //             continue;
        //         }
        //         lastIndex = i;
        //     }
        //     graphics.lineTo(touches[lastIndex].x - worldPos.x, touches[lastIndex].y - worldPos.y);

        //     graphics.stroke();
        //     for (let i = 0; i < this.optionsNode.children.length; i++) {
        //         var _nodeWorldSpacePos = _node.parent.convertToWorldSpaceAR(this.collider.getPosition());
        //         var _actualPosition = this.optionsNode.children[i].convertToNodeSpaceAR(_nodeWorldSpacePos);
        //         if ((cc.Intersection.pointInPolygon(new cc.Vec2(_actualPosition.x, _actualPosition.y), this.optionsNode.children[i].getComponent(cc.PolygonCollider).points)) && (!this.droppedBool[i] || _node.name == this.dropZones.children[i].name)) {
        //             this.Feedback(this.optionsNode.children[i], _node, i);
        //             this.canMove = false;
        //             break;
        //         }
        //         // if (this.collider.getBoundingBox().contains(this.optionsNode.children[i].getPosition())) {
        //         //     this.Feedback(this.optionsNode.children[i], _node, i);
        //         //     this.canMove = false;
        //         //     break;
        //         // }
        //     }
        // }
    }

    Feedback(_node: cc.Node, _dropNode: cc.Node, number: number) {
        console.log("feedback called!!!!!");
        this.canMove = false;
        this.canPlay = false;
        if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        if (_node.name == _dropNode.name) {
            this.answeredCount++;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveRection(_dropNode, _node);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            this.callNegativeRection(_node);
            // re-enable movement so the user can try tapping again
            this.canMove = true;
            this.canPlay = true;
            if (TVInputManager.Instance) TVInputManager.Instance.setCanSelect(this.canPlay);
        }
    }
    private setupTVFocus(activeContainerName: string) {
        let backBtn = startGame.Instance.node.getChildByName("back");
        let musicBtn = startGame.Instance.node.getChildByName("music");
        let soundBtn = this.node.getChildByName("questionPanel").getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;

        let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
            let btn = node.getComponent(cc.Button);
            return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
        });

        let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);

        // pick a sensible default — e.g. first option, or correct answer index

        if (cc.director.getScene().name == "1") {
            TVInputManager.Instance.init(nodes, 1);
        }
        else {
            TVInputManager.Instance.init(nodes, -1);
        }

        TVInputManager.Instance.setCanSelect(this.canPlay);
    }

}
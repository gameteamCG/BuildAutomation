//import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
import ProgressBar from "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    dropNode: cc.Node = null;
    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.AudioClip)
    private popSound: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private questionSound: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private reiterationAudios: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private positiveSound: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private negativeSound: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private positiveAudio: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private negativeAudio: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private supercubPositive: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private supercubNegative: cc.AudioClip[] = [];

    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;



    @property(cc.Material)
    defaultMat: cc.Material = null;

    @property(cc.Material)
    greyMat: cc.Material = null;

    private isFirstClick: boolean = false;
    private canTouch: boolean = false;
    private answerArray: string[] = [];
    private maxLevel: number = 4;
    wrongAnswerCount: number = 0;
    star1Log: boolean = false;
    star2Log: boolean = false;
    star3Log: boolean = false;
    currentJcokey: cc.Node = null;

    correctAudio: cc.AudioClip = null;

    private optionsNode: cc.Node = null;


    private questionBoxPosY: number = 0;

    DropAreapositionArray: cc.Vec2[] = [];
    OptionspositionArray: cc.Vec2[] = [];
    correctAnswerCount: number = 0;
    totalAnswers: number = 1;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("img").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("template1").getChildByName("option").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("img").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("template1").getChildByName("option").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("img").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("template1").getChildByName("option").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;

        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("img").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("template1").getChildByName("option").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = startGame.Instance.totalLevels;
        cc.director.preloadScene("endScreen");
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        else {
            //cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        }
        console.log(`levelStarted--` + globalVariables.Instance.currentLevel);

        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;

        if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length == 1) {
            let _dropnode = cc.instantiate(this.node.getChildByName("template1"));
            _dropnode.setParent(this.node.getChildByName("dropArea"));
            _dropnode.setPosition(0, -220);
            _dropnode.active = true;
            _dropnode.name = "1";
        }
        else if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length == 2) {
            for (let i = 0; i < 2; i++) {
                let _dropnode = cc.instantiate(this.node.getChildByName("template1"));
                _dropnode.setParent(this.node.getChildByName("dropArea"));
                _dropnode.active = true;
                _dropnode.name = (i + 1).toString();
                if (i == 0) {
                    _dropnode.setPosition(-290, -220);
                }
                else if (i == 1) {
                    _dropnode.setPosition(290, -220);
                }
            }
        }

        if (startGame.Instance.isDemoGame) {
            cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionSound[0] = audioClip;
            });
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonDropNodeImageName != "") {
                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonDropNodeImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length; i++) {
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("answer").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }


            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isDropAreaText) {
                    cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas[i];
                }

                cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterationAudios[i], (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    this.reiterationAudios[i] = audioClip;
                });
            }
        }
        else {
            this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionAudioName, (AudioClip) => {
                this.questionSound[0] = AudioClip;
            });
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonOptionImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });

            }
            if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonDropNodeImageName != "") {
                this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].commonDropNodeImageName, (spriteFrame) => {
                    for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length; i++) {
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("answer").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
                        this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }

                else {
                    this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i];
                }
            }

            for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas.length; i++) {
                if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isDropAreaText) {
                    this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas[i], (spriteFrame) => {
                        this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.node.getChildByName("dropArea").getChildByName((i + 1).toString()).getChildByName("option").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].dropAreas[i];
                }

                this.loadAudioClip(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].reiterationAudios[i], (AudioClip) => {
                    this.reiterationAudios[i] = AudioClip;
                });
            }
        }
        //startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);
        //this.currentJcokey.active = true;
    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        // this.setAnswerArray();
        // this.OptionsLayout();
        this.totalAnswers = this.dropNode.children.length;

        this.OptionsLayoutHorizontal(this.node.getChildByName("Option"));
        this.callThirdObjectIn();

    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    PlayQuestionAudio() {
        this.canTouch = false;
        console.log("Jockey coming");
        this.currentJcokey.active = true;
        //if (startGame.Instance.jockeyName != "tlc") {
        if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
        this.canTouch = true;
    }

    GenerateOptions() {
        for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
            let option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;


            option.on('touchstart', function (event) {
                this.TouchStart(option.getChildByName("img"));
            }, this);
            option.on('touchmove', function (event) {
                this.TouchMove(option.getChildByName("img"), event);
            }, this);
            option.on('touchend', function (event) {
                this.TouchEnd(option.getChildByName("img"));
            }, this);
            option.on('touchcancel', function (event) {
                this.TouchEnd(option.getChildByName("img"));
            }, this);
        }
        this.node.getChildByName("template").destroy();
    }



    callThirdObjectIn() {
        let ObjScale: number = 1;
        ObjScale = 0.7;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].questionText;
        this.scheduleOnce(() => {
            this.scheduleOnce(() => {
                this.callOptionIn();
            }, 0.5);
        }, 1);
    }


    OnVOButton() {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    }

    callOptionIn() {
        let ObjScale: number = 1;
        cc.audioEngine.playEffect(this.popSound[0], false);
        for (let i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            this.node.getChildByName("Option").children[i - 1].scale = 0;
            this.node.getChildByName("Option").children[i - 1].opacity = 255;
            this.scheduleOnce(() => {
                cc.tween(this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: ObjScale }, { easing: "sineInOut" }).start();
                if (i == this.node.getChildByName("Option").children.length) {
                    this.scheduleOnce(() => {
                        if (globalVariables.Instance.currentLevel == 1) {
                            let hand = this.node.getChildByName("hand");
                            console.log("answer array num = ", this.answerArray[0]);
                            hand.setParent(this.node.getChildByName("Option").getChildByName("1"));
                            hand.setPosition(0, -30);
                            hand.setParentWithSamePos(this.node);
                            console.log("hand position : ", hand.x, hand.y);
                            let handPosition: cc.Vec2 = hand.getPosition();
                            let ThirdObject: cc.Node = this.node.getChildByName("dropArea").getChildByName("1");
                            let distanceX: number = 0;
                            distanceX = 150;
                            let waitTime: number = 0;
                            this.scheduleOnce(() => {
                                cc.tween(hand).to(1, { x: ThirdObject.x + distanceX, y: ThirdObject.y }).call(() => {
                                    hand.setPosition(handPosition.x, handPosition.y);
                                    this.scheduleOnce(() => {
                                        cc.tween(hand).to(1, { x: ThirdObject.x + distanceX, y: ThirdObject.y }).call(() => {
                                            hand.active = false;
                                        }).start();
                                    }, 0.2);
                                }).start();
                                hand.getComponent(cc.Animation).play();
                            }, waitTime);
                        }
                        this.PlayQuestionAudio();
                        this.canTouch = true;
                    }, 0.5);
                }
            }, 0);
        }
    }

    OnButtonClick(_event: cc.Event) {

    }

    TouchStart(_node: cc.Node) {
        console.log("touchStart");
        if (!this.canTouch) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables.Instance.currentLevel);
        }
        if (globalVariables.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
    }

    TouchMove(_node: cc.Node, _event: any) {
        console.log("touchMove");
        if (!this.canTouch) {
            return;
        }
        var delta = _event.touch.getDelta();
        _node.x += delta.x;
        _node.y += delta.y;
    }

    TouchEnd(_node: cc.Node, _event: any) {
        console.log("touchEnd");
        if (!this.canTouch) {
            return;
        }
        let correctDropNode: cc.Node = null;
        let isCorrect: boolean = false;
        for (let i = 0; i < this.dropNode.children.length; i++) {
            var _nodeWorldSpacePos = _node.parent.convertToWorldSpaceAR(_node.getPosition());
            var _actualPosition = this.dropNode.children[i].children[1].convertToNodeSpaceAR(_nodeWorldSpacePos);
            if (cc.Intersection.pointInPolygon(new cc.Vec2(_actualPosition.x, _actualPosition.y), this.dropNode.children[i].children[1].getComponent(cc.PolygonCollider).points)) {
                if (_node.parent.name == this.dropNode.children[i].name) {
                    isCorrect = true;
                    correctDropNode = this.dropNode.children[i];
                }
                break;
            }
        }

        if (isCorrect) {
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables.Instance.currentLevel);
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
            cc.audioEngine.playEffect(this.reiterationAudios[parseInt(correctDropNode.name) - 1], false);
            this.callPositiveRection(_node);
        }
        else {
            this.canTouch = false;
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables.Instance.currentLevel);
            // cc.tween(_node)
            //     .to(0.2, { x: this.positionArray[parseInt(_node.name) - 1].x, y: this.positionArray[parseInt(_node.name) - 1].y }, { easing: "backInOut" }).start();
            cc.tween(_node)
                .to(0.2, { x: 0, y: 0 }, { easing: "backInOut" }).start();
            this.scheduleOnce(() => {
                this.callNegativeRection(_node, _event);
            }, 0.2);
        }
    }

    callNextLevel() {
        console.log("levelComplete--" + globalVariables.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(() => {
                cc.director.loadScene("endScreen");
            }, 1)
        }
        else {
            this.scheduleOnce(() => {
                globalVariables.Instance.currentLevel++;
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                cc.director.loadScene("1");
            }, 1)
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


    callPositiveRection(_node: cc.Node) {
        //console.log("_node : ", _node.name);
        let correctDropNode: cc.Node = this.dropNode.getChildByName(_node.parent.name);
        this.node.getChildByName("confetti").setPosition(correctDropNode.x, correctDropNode.y + 50);
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();
        cc.audioEngine.playEffect(this.positiveSound[0], false);
        let parentNode: cc.Node = _node.parent;
        //let imgName: string = _node.name + this.correctAnswerCount + 1;
        //_node.name = imgName;
        //_node.destroy();
        // console.log("_node : ", _node.name);
        // console.log("parentNode : ", parentNode);
        _node.setParentWithSamePos(this.dropNode.getChildByName(parentNode.name).getChildByName("answer"));
        this.dropNode.getChildByName(parentNode.name).getChildByName("answer").children[0].setPosition(0, 0);
        this.dropNode.getChildByName(parentNode.name).getChildByName("answer").children[0].scale = this.dropNode.getChildByName(parentNode.name).getChildByName("answer").children[0].scale + this.dropNode.getChildByName(parentNode.name).getChildByName("answer").children[0].scale * 0.2;
        this.scheduleOnce(() => {
            parentNode.destroy();
            this.canTouch = true;
            this.correctAnswerCount++;
            if (this.correctAnswerCount == this.totalAnswers) {
                this.canTouch = false;
                this.destroyOption();
                ProgressBar.Instance.createStarTrails(6, this.node);
                this.scheduleOnce(() => {
                    ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel);
                    this.scheduleOnce(() => {
                        cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: 1500 }, { easing: 'sineInOut' }).start();
                        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
                        //console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                        this.callJockey();
                    }, 1);
                }, 1.5);
            }
        }, 0.1);
    }


    callJockey() {
        let anim: string[] = [];
        if (startGame.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (startGame.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5",];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4"];
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
        //this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
        if (globalVariables.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName == "Podar") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            pos = [-1500, 2000];
            jockeytween = [0, 800];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            pos = [-1200, 1200];
            jockeytween = [0, 0];
        }
        else if (startGame.Instance.jockeyName != "tlc") {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }


        //if (startGame.Instance.jockeyName != "tlc") {
        this.currentJcokey.setPosition(pos[globalVariables.Instance.currentLevel % 2], -350);
        cc.tween(this.currentJcokey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJcokey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (startGame.Instance.jockeyName != "stallion") {
                    this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                }
                //console.log("characterDisappear--Podar_Jumbo");
                this.callNextLevel();
            }, this.positiveAudio[currentClipNum].duration);
        }, 0.5);
        //}
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        //     cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
        //     this.scheduleOnce(() => {
        //         //bird flying out sound
        //         this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_out", false);
        //         cc.audioEngine.playEffect(this.tlc_birdFlying, false);
        //         this.scheduleOnce(() => {
        //             this.currentJcokey.active = false;
        //             this.callNextLevel();
        //         }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
        //     }, this.positiveAudio[currentClipNum].duration);
        // }



    }


    callNegativeRection(_node: cc.Node, _event) {
        _node.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        let posX: number = 400;
        this.scheduleOnce(() => {
            let anim: string[] = [];
            if (startGame.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (startGame.Instance.jockeyName == "Puzzle") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (startGame.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
                posX = 0;
            }
            else if (startGame.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4"];
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
            else if (startGame.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }

            let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            //this.currentJcokey.setPosition(1200, -350);
            if (startGame.Instance.jockeyName == "stallion") {
                this.currentJcokey.scaleX = 0.65;
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (startGame.Instance.jockeyName == "Podar") {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            // else if (startGame.Instance.jockeyName != "tlc") {
            //     this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            // }
            else {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            //if (startGame.Instance.jockeyName != "tlc") {
            this.currentJcokey.setPosition(1200, -350);
            cc.tween(this.currentJcokey).to(0.5, { x: posX }, { easing: "quartInOut" }).start();
            this.scheduleOnce(() => {
                this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
                this.scheduleOnce(() => {
                    cc.tween(this.currentJcokey).to(0.5, { x: 1200 }, { easing: "quartInOut" }).start();
                    if (startGame.Instance.jockeyName != "stallion") {
                        this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    this.canTouch = true;
                }, this.negativeAudio[currentClipNum].duration);
            }, 0.5);
            //}
            // else if (startGame.Instance.jockeyName == "tlc") {
            //     this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            //     cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
            //     this.scheduleOnce(() => {
            //         this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            //         this.canTouch = true;
            //     }, this.negativeAudio[currentClipNum].duration);
            // }
        }, 0.7);

        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" }).call(() => {
                _node.getComponent(cc.Sprite).setMaterial(0, this.defaultMat);
            })
            .start();
    }

    destroyOption() {
        for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            //if (this.node.getChildByName("Option").children[i].name != this.answerArray[0]) {
            this.node.getChildByName("Option").children[i].destroy();
            //}
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

    OptionsLayoutGrid() {
        //console.log("OptionsLayoutGrid");
        let numCols = 2;
        let numRows = 2;
        const paddingBetweenOptions = 120;

        let optionNodes = this.optionsNode;

        const optionWidth = 150; // Width of each option
        const optionHeight = 150; // Height of each option

        const gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        const gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);

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
        this.optionsNode.width = gridWidth;
        this.optionsNode.height = gridHeight;
    }

    OptionsLayoutHorizontal(_node: cc.Node) {
        let optionsLayout = _node;
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
            option.y = option.y + 100;

            accumulatedWidth += option.width + paddingBetweenOptions;

            if (_node.name == "Option") {
                this.OptionspositionArray.push(option.getPosition());
            }
            else {
                this.DropAreapositionArray.push(option.getPosition());
            }

            // Scale and position children nodes proportionally
            for (let subChild of option.children) {
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
                //console.log("subChild--", subChild.name);
            }
        }

        optionsLayout.height = maxHeight * scaleFactor;

        if (optionNodes.length == 2) {
            let distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
            optionNodes[0].x = 0 - distanceBetweenOptions / 2;
            optionNodes[1].x = 0 + distanceBetweenOptions / 2;



            if (_node.name == "Option") {
                this.OptionspositionArray = [];
                this.OptionspositionArray.push(optionNodes[0].getPosition());
                this.OptionspositionArray.push(optionNodes[1].getPosition());
            }
            else {
                this.DropAreapositionArray = [];
                this.DropAreapositionArray.push(optionNodes[0].getPosition());
                this.DropAreapositionArray.push(optionNodes[1].getPosition());
            }


        }
        else if (optionNodes.length == 1) {
            optionNodes[0].x = 0;
        }

        //console.log("PositionArray--", this.OptionspositionArray);

        if (_node.name == "Option") {
            //this.shuffleArray(this.OptionspositionArray);
            let NewArray = this.shuffleArray(this.OptionspositionArray);
            //console.log("NewArray--", NewArray);
            for (let i = 0; i < optionNodes.length; i++) {
                optionNodes[i].setPosition(NewArray[i]);
            }
        }
        //console.log("positionArray--", this.positionArray);
    }

    // reverseOptionsLayout() {
    //     let optionsLayout = this.optionsNode;
    //     let optionNodes = optionsLayout.children;

    //     // Create an array to hold the new positions
    //     let newPositions = [];

    //     // Calculate new positions in reverse order
    //     for (let i = optionNodes.length - 1; i >= 0; i--) {
    //         newPositions.push(optionNodes[i].y);
    //     }

    //     // Update the positions of the options
    //     for (let i = 0; i < optionNodes.length; i++) {
    //         optionNodes[i].y = newPositions[i];
    //         this.positionArray.push(cc.v2(optionNodes[i].x, optionNodes[i].y));
    //     }



    // }


    shuffleArray(positionArray: cc.Vec2[]) {
        // Copy the original array to avoid modifying the input array
        const shuffledArray = positionArray;

        // Start from the end of the array and swap each element with a random element before it
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            // Swap elements
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    }


}
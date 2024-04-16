
import ProgressBar from "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar";
import startGame from "../../../Framework/Scripts/StartGame";
import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Gameplay extends cc.Component {
    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;

    @property(cc.Node)
    optionsNode: cc.Node = null;
    @property(cc.AudioClip)
    pop_sound: cc.AudioClip = null;
    @property(cc.AudioClip)
    swipe_sound: cc.AudioClip = null;
    @property(cc.AudioClip)
    correctSound: cc.AudioClip = null;

    @property(cc.AudioClip)
    private positiveSound: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private positiveAudio: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private stallionPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private bagPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private cryonPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private tlcPositive: cc.AudioClip[] = [];

    @property(cc.AudioClip)
    private supercubPositive: cc.AudioClip[] = [];

    private currentDraggingObject: string = null;
    private startPosX: number = 0;

    private canTouch: boolean = true;
    private isFirstClick: boolean = false;
    private isDropped: boolean = false;
    private isAnswered: boolean = false;

    private questionText: string = "";
    private correctAnswer: string = "";
    private questionVO: cc.AudioClip = null;
    private correctVO: cc.AudioClip = null;
    private needReiteration: boolean = false;
    private reiterationImage: cc.SpriteFrame = null;

    private maxLevel: number = 7;

    private questionBoxPosY: number = 0;

    currentJockey: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.maxLevel = startGame.Instance.TotalLevels;
        if (globalVariables.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        else {
            cc.director.preloadScene("1");
        }
        console.log(`levelStarted--` + startGame.Instance.currentLevel);
        this.node.getChildByName("BG").getComponent(cc.Sprite).spriteFrame = startGame.Instance.mainBg;
        if (startGame.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
    }

    PlayQuestionAudio() {
        this.currentJockey.active = true;
        if (startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
            cc.audioEngine.playEffect(this.questionVO, false);
        }
        if (globalVariables.Instance.currentLevel == 1) {
            //PLAY HAND ANIMATION
            let hand = this.node.getChildByName("hand");
            hand.active = true;
            let x1: number = this.optionsNode.children[0].x;
            let x2: number = this.optionsNode.children[1].x;
            hand.setParent(this.optionsNode.children[0]);
            hand.setPosition(0, 0);
            hand.setParentWithSamePos(this.node);
            this.playTween(hand, x1, x2);
            hand.getComponent(cc.Animation).play();
        }
    }

    playTween(_hand: cc.Node, x1: number, x2: number) {
        _hand.setPosition(x1, _hand.getPosition().y);
        cc.tween(_hand).to(1, { x: x2 }).call(() => {
            this.playTween(_hand, x1, x2);
        }).start();
    }

    SubcribeEvents() {
        // if (startGame.Instance.questions[parseInt(startGame.Instance.currentLevel) - 1].shouldPlayQuestionAudio) {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //         cc.audioEngine.playEffect(this.questionVO, false);
        //     }
        // }
        // else {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //     }

        // }
        this.PlayQuestionAudio();
        this.optionsNode.children.forEach(element => {
            element.on('touchstart', function (event) {
                this.TouchStart(element);
            }, this);
            element.on('touchmove', function (event) {
                this.TouchMove(element, event);
            }, this);
            element.on('touchend', function (event) {
                this.TouchEnd(element);
            }, this);
            element.on('touchcancel', function (event) {
                this.TouchEnd(element);
            }, this);
        });


    }

    calculateDistance(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    start() {
        ProgressBar.Instance.ProgressFill(globalVariables.Instance.currentLevel - 1);
        startGame.Instance.node.getChildByName("progress").opacity = 255;
        this.UpdateQuestionData();
        this.scheduleOnce(() => {
            this.OptionsLayout();
            if (this.optionsNode.children.length <= 2) {
                this.arrangeChildren(this.optionsNode, 80);
            }
            let delay = 0.2;
            for (let i = 0; i < this.optionsNode.children.length; i++) {
                this.optionsNode.children[i].scale = 0;
                this.optionsNode.children[i].opacity = 255;
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.pop_sound, false);
                    cc.tween(this.optionsNode.children[i]).to(0.3, { scale: 1 }, { easing: 'backInOut' }).start();
                    if (i == this.optionsNode.children.length - 1) {
                        this.scheduleOnce(() => {
                            this.SubcribeEvents();
                        }, 0.3);
                    }
                }, delay);
                delay += 0.2;
            }
        }, 1);

        if (startGame.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
        }
        else if (startGame.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
        }
    }

    UpdateQuestionData() {
        let questionData = startGame.Instance.questions[parseInt(startGame.Instance.currentLevel) - 1];
        let options = questionData.options;
        this.correctAnswer = questionData.correctAnswer;
        let numberOfOptions = options.length;
        this.questionText = questionData.questionText;
        if (questionData.questionImageName != null && questionData.questionImageName != "") {
            if (questionData.questionText == "") {
                this.node.getChildByName("questionPanel").getChildByName("img").setPosition(0, this.node.getChildByName("questionPanel").getChildByName("img").getPosition().y);
            }
            else {
                this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).string = this.questionText;
            }
            if (startGame.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            else {
                this.loadSpriteFrame(questionData.questionImageName, (spriteFrame) => {
                    this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }
        else if (this.questionText != "") {
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.questionText;
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }

        this.needReiteration = questionData.needReiteration;
        this.LoadAssetsAudios(questionData);
        if (this.needReiteration) {
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).string = questionData.correctAnswer;
            if (questionData.reiterationImageName != null && questionData.reiterationImageName != "") {
                if (startGame.Instance.isDemoGame) {
                    cc.loader.load(questionData.reiterationImageName, (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.loadSpriteFrame(questionData.reiterationImageName, (spriteFrame) => {
                        this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
        }

        for (let i = 0; i < numberOfOptions; i++) {
            // let optionNode = this.optionsNode.children[i];
            //create options
            let optionNode: cc.Node = cc.instantiate(this.node.getChildByName("template"));
            optionNode.name = (i + 1).toString();
            optionNode.setParent(this.optionsNode);
            optionNode.setPosition(cc.v2(0, 0));

            optionNode.getChildByName("img").setPosition(cc.v2(optionNode.getChildByName("img").getPosition().x, questionData.optionOffset));
            optionNode.getChildByName("text").setPosition(cc.v2(optionNode.getChildByName("text").getPosition().x, questionData.optionOffset));
            if (questionData.commonOptionImageName != null && questionData.commonOptionImageName != "") {
                if (startGame.Instance.isDemoGame) {
                    cc.loader.load(questionData.commonOptionImageName, (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });

                }
                else {
                    this.loadSpriteFrame(questionData.commonOptionImageName, (spriteFrame) => {
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            if (questionData.isOptionText) {
                optionNode.getChildByName("img").active = false;
                optionNode.getChildByName("text").active = true;
                optionNode.getChildByName("text").getComponent(cc.Label).string = options[i];
            }
            else {
                optionNode.getChildByName("img").active = true;
                optionNode.getChildByName("text").active = false;
                this.node.getChildByName("reiteration").getChildByName("text").active = false;
                if (questionData.commonOptionImageName == null || questionData.commonOptionImageName == "") {
                    optionNode.getComponent(cc.Sprite).spriteFrame = null;
                    optionNode.getChildByName("img").scale = 1;
                }
                if (startGame.Instance.isDemoGame) {
                    cc.loader.load(options[i], (err, texture) => {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        const spriteFrame = new cc.SpriteFrame(texture);
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });

                }
                else {
                    this.loadSpriteFrame(options[i], (spriteFrame) => {
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            this.optionsNode.children[i].opacity = 0;
        }
        this.node.getChildByName("template").destroy();
        this.currentJockey = startGame.Instance.jockey.getChildByName(startGame.Instance.jockeyName);

    }

    LoadAssetsAudios(_questiondata: any) {

        if (startGame.Instance.isDemoGame) {
            cc.loader.load(_questiondata.questionAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.questionVO = audioClip;
            });
            cc.loader.load(_questiondata.correctAudioName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.correctVO = audioClip;
            });
            // cc.loader.load(_questiondata.questionImageName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
        else {
            this.loadAudioClip(_questiondata.questionAudioName, (AudioClip) => {
                this.questionVO = AudioClip;
            });
            this.loadAudioClip(_questiondata.correctAudioName, (AudioClip) => {
                this.correctVO = AudioClip;
            });

            // this.loadSpriteFrame(_questiondata.questionImageName, (spriteFrame) => {
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
    }

    TouchStart(_node: cc.Node) {
        if (this.isAnswered) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        if (!this.currentDraggingObject) {
            this.canTouch = true;
            this.currentDraggingObject = _node.name;
            this.startPosX = _node.getPosition().x;
            _node.zIndex = 1;
            if (!this.isFirstClick) {
                this.isFirstClick = true;
                console.log("firstClick--" + startGame.Instance.currentLevel);
            }
        }
    }

    TouchMove(_node: cc.Node, _event: any) {
        if (!this.canTouch || this.currentDraggingObject !== _node.name || this.isAnswered) {
            return;
        }
        let delta = _event.touch.getDelta();
        _node.x += delta.x;
        this.attemptSwap(_node);
    }

    attemptSwap(_node) {
        let deltaX = _node.x - this.startPosX;
        if (Math.abs(deltaX) > 50) {
            for (let otherNode of this.optionsNode.children) {
                if (otherNode !== _node) {
                    let distance = this.calculateDistance(_node.position, otherNode.position);
                    if (this.shouldSwap(deltaX, _node, otherNode, distance)) {
                        this.performSwap(_node, otherNode);
                        break;
                    }
                }
            }
        }
    }

    shouldSwap(deltaX, _node, otherNode, distance) {
        return distance < 50 && ((deltaX > 0 && _node.x < otherNode.x) || (deltaX < 0 && _node.x > otherNode.x));
    }

    performSwap(_node, otherNode) {
        cc.audioEngine.playEffect(this.swipe_sound, false);
        cc.tween(_node).to(0.15, { x: otherNode.x }, { easing: 'backInOut' }).start();
        cc.tween(otherNode).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(() => {
            this.currentDraggingObject = null;
            this.checkOrder(); // Check if the current order is correct
        }, 0.15);
        this.canTouch = false;
        this.isDropped = true;
    }

    TouchEnd(_node: cc.Node) {
        if (this.isAnswered) {
            return;
        }
        _node.zIndex = 0;
        if (this.isDropped) {
            this.isDropped = false;
            return;
        }
        cc.tween(_node).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(() => {
            this.currentDraggingObject = null;
        }, 0.2);
    }
    checkOrder() {
        let currentWord = this.getCurrentWord();
        // console.log("current word =", currentWord);
        let targetWord = this.correctAnswer; // Define your target word here

        if (currentWord === targetWord) {
            console.log("correctAnswer--" + startGame.Instance.currentLevel);
            this.isAnswered = true;
            this.node.getChildByName("questionPanel").getChildByName("sound").active = false;
            // Additional logic for when the order is correct
            // console.log("need iteration--" + this.needReiteration);
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.needReiteration) {
                // this.optionsNode.active = false;
                this.node.getChildByName("reiteration").active = true;
                this.node.getChildByName("reiteration").scale = 0;
                cc.tween(this.optionsNode).to(0.25, { scaleX: 0 }, { easing: 'backInOut' }).start();
                cc.tween(this.node.getChildByName("reiteration")).to(0.5, { scale: 1 }, { easing: 'sineInOut' }).start();
                this.scheduleOnce(() => {
                    this.optionsNode.active = false;
                    this.node.getChildByName("confetti").active = true;
                    this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                    let VOduration = 0;
                    if (this.correctVO) {
                        VOduration = this.correctVO.duration;
                    }
                    this.scheduleOnce(() => {
                        cc.audioEngine.playEffect(this.correctVO, false);
                        this.scheduleOnce(() => {
                            this.callJockey();
                        }, VOduration);
                    }, 0.25);
                }, 0.5);
            }
            else {
                this.node.getChildByName("confetti").active = true;
                this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                let VOduration = 0;
                if (this.correctVO) {
                    VOduration = this.correctVO.duration;
                }
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.correctVO, false);
                    // this.callJockey();
                    this.scheduleOnce(() => {
                        // this.LoadNextQuestion();
                        this.callJockey();
                    }, VOduration);
                }, 0.75);
            }
        } else {
            // console.log("Incorrect order.");
            // Additional logic for when the order is incorrect
        }
    }

    getCurrentWord() {
        // Sort the nodes based on their x-coordinate
        let sortedNodes = this.optionsNode.children.sort((a, b) => a.x - b.x);

        let word = sortedNodes.map(child => {
            if (startGame.Instance.questions[parseInt(startGame.Instance.currentLevel) - 1].isOptionText) {
                let labelNode = child.getChildByName("text"); // Adjust if necessary
                let labelComponent = labelNode ? labelNode.getComponent(cc.Label) : null;

                if (labelComponent) {
                    // console.log("Label Text: ", labelComponent.string);
                    return labelComponent.string;
                } else {
                    // console.log("Label Component not found or nested in node: ", child.name);
                    return "";
                }
            }
            else {
                return child.name;
            }
        }).join('');

        // console.log("Constructed Word: ", word);
        return word;
    }

    LoadNextQuestion() {

        console.log("levelComplete--" + startGame.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        if (parseInt(startGame.Instance.currentLevel) >= startGame.Instance.TotalLevels) {
            cc.director.loadScene("gameEnd");
        }
        else {
            globalVariables.Instance.currentLevel += 1;
            startGame.Instance.currentLevel = (parseInt(startGame.Instance.currentLevel) + 1).toString();
            cc.director.loadScene("1");
        }

    }

    OptionsLayout() {
        let optionsLayout = this.optionsNode;
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

    arrangeChildren(centerNode: cc.Node, spacing: number) {
        let children = centerNode.children;
        let totalWidth = 0;

        // Calculate total width required
        for (let child of children) {
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children

        // Starting X position
        let startX = -totalWidth / 2;

        // Arrange children
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    }


    callJockey() {
        let anim: string[] = [];
        if (startGame.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (startGame.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (startGame.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
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
        let pos: number[] = [-1600, 1600];
        let jockeytween: number[] = [-450, 450];
        if (startGame.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[globalVariables.Instance.currentLevel % 2], this.currentJockey.y);
        if (globalVariables.Instance.currentLevel % 2 == 0 && startGame.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (startGame.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (startGame.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(() => {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(() => {
                cc.tween(this.currentJockey).to(0.5, { x: pos[globalVariables.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (startGame.Instance.jockeyName != "stallion") {
                    if (startGame.Instance.jockeyName == "Podar") {
                        this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                this.LoadNextQuestion();
            }, this.positiveAudio[currentClipNum].duration);
        }, 0.5);
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

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    }

    OnSound() {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionVO, false);
    }

    // update (dt) {}
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CommonFun from "../Common/CommonFun";
import { Constant } from "../Common/Constant";
import Global from "../Common/Global";
import globalVariables from "../globalVariables";
import PersistentScroll from "./Persistent/PersistentScroll";

const { ccclass, property } = cc._decorator;

@ccclass("DrawingData")
class DrawingData {
    @property({ type: cc.Prefab, visible: true, tooltip: "DrawingDataPrefab" })
    DrawingDataPrefab: cc.Prefab = null;
}

@ccclass
export default class GamePlay extends cc.Component {
    @property(DrawingData)
    DrawingDataArray: DrawingData[] = [];
    @property(cc.AudioClip)
    clickAud: cc.AudioClip = null;

    currentDrawing = null;

    @property(cc.Node)
    questionNode: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;

    @property(cc.Font)
    private podar_font: cc.Font = null;
    @property(cc.Font)
    private jaipuria_font: cc.Font = null;
    @property(cc.Font)
    private tlc_font: cc.Font = null;
    @property(cc.Font)
    private supercub_font: cc.Font = null;
    // @property(String)
    questions: string[] = [''];
    // @property(cc.SpriteFrame)
    questionImage: cc.SpriteFrame[] = [];

    pictureImage: cc.SpriteFrame[] = [];
    // @property(cc.AudioClip)
    question_audios: cc.AudioClip[] = [];

    reiteration_Audio: cc.AudioClip[] = [];

    initialVO: cc.AudioClip = null;

    persistentScrollNode = null;
    persistentScrollScript = null;

    DrawingTableClassRef = null;
    overAllData = [];

    private currentLevel: number = 0;
    private totalLevels: number = 0;

    private Ypos: number = 0;
    private static instance: GamePlay = null;

    onLoad() {
        GamePlay.instance = this;
    }

    static get Instance() {
        return GamePlay.instance
    }

    start() {
    }

    LoadJsonData() {
        this.totalLevels = globalVariables.Instance.questions.length;
        // console.log("totalLevels--" + this.totalLevels);
        for (let i = 0; i < this.totalLevels; i++) {
            let questionData = globalVariables.Instance.questions[i];
            this.questions[i] = questionData.questionText;


            if (globalVariables.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.questionImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.questionAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.question_audios[i] = audioClip;
                });
                cc.loader.load(questionData.pictureImageName, (err, texture) => {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    this.pictureImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.correctAudioName, (err, audioClip) => {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    this.reiteration_Audio[i] = audioClip;
                }
                );

            }
            else {
                this.loadSpriteFrame(questionData.questionImageName, (spriteFrame) => {
                    this.questionImage[i] = spriteFrame;
                });
                this.loadAudioClip(questionData.questionAudioName, (audioClip) => {
                    this.question_audios[i] = audioClip;
                });
                this.loadSpriteFrame(questionData.pictureImageName, (spriteFrame) => {
                    this.pictureImage[i] = spriteFrame;
                });
                this.loadAudioClip(questionData.correctAudioName, (audioClip) => {
                    this.reiteration_Audio[i] = audioClip;
                });
            }
        }

        if (globalVariables.Instance.jockeyName == "Podar") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.podar_font;
        }
        else if (globalVariables.Instance.jockeyName == "tlc") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.tlc_font;
        }
        else if (globalVariables.Instance.jockeyName == "supercub") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.supercub_font;
        }
        else if (globalVariables.Instance.jockeyName == "bag" || globalVariables.Instance.jockeyName == "cryon") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.jaipuria_font;
        }
    }

    StartGame() {
        this.LoadJsonData();
        this.questionNode.setPosition(-60, this.questionNode.y);
        this.Ypos = this.questionNode.getPosition().y;
        this.questionNode.setPosition(-60, 1800);
        this.scheduleOnce(() => {
            this.initialVO = globalVariables.Instance.initialVO;
            if (this.initialVO) {
                cc.audioEngine.playEffect(this.initialVO, false);
                this.scheduleOnce(() => {
                    this.checkNextLevel();
                }, this.initialVO.duration);
            }
            else {
                this.scheduleOnce(() => {
                    this.checkNextLevel();
                }, 0.2);
            }
            this.addDrawing();
            this.node.getChildByName("image").setPosition(this.node.getChildByName("image").getPosition().x, 138);

            this.hand.setPosition(this.node.getChildByName("backButton").getPosition().x + 100, this.node.getChildByName("backButton").getPosition().y);
            this.hand.opacity = 0;

            this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;
        }, 1);
    }


    // update (dt) {}

    addDrawing() {
        this.currentDrawing = cc.instantiate(this.DrawingDataArray[CommonFun.instance.currentLvl].DrawingDataPrefab);
        this.node.addChild(this.currentDrawing);
        this.currentDrawing.setPosition(new cc.Vec2(CommonFun.instance.convertXPos(cc.winSize.width * 0.45, this.node), CommonFun.instance.convertYPos(cc.winSize.height * 0.5, this.node)));
        this.currentDrawing.setPosition(this.currentDrawing.getPosition().x + 50, this.currentDrawing.getPosition().y - 50);
        // console.log("pos = ", this.currentDrawing.getPosition().x);
        this.DrawingTableClassRef = CommonFun.instance.getDrawingTableClassRef(this.currentDrawing);
        if (this.currentLevel > 0) {
            this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.pictureImage[this.currentLevel - 1];
        }
        // else {
        //     this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.questionImage[0];
        // }
        this.DrawingTableClassRef.initTouch();
        this.DrawingTableClassRef.initialiseRef(this);
        setTimeout(() => {
            let data = Constant.getLevelData(CommonFun.instance.currentLvl);
            this.DrawingTableClassRef.drawData(data);
        }, 10);
    }

    saveData() {
        this.overAllData = [];
        this.overAllData = this.DrawingTableClassRef.overAllData;
        //new
        this.overAllData = this.DrawingTableClassRef.drawingDataArray;
        //new
        Constant.SaveLevelData(CommonFun.instance.currentLvl, this.overAllData);

        this.hand.opacity = 255;
    }

    onBackClicked() {

        // console.log("levelComplete--" + (CommonFun.instance.currentLvl + 1));
        cc.audioEngine.playEffect(this.clickAud, false);
        // console.log("gameExit--true");
        // this.persistentScrollNode.getChildByName("base").active = false;
        // this.saveData();
        // cc.director.loadScene("LevelSelection");
        this.checkNextLevel();
    }

    OnExitClicked() {
        cc.audioEngine.playEffect(this.clickAud, false);
        console.log("gameExit--true");
    }

    checkNextLevel() {
        let duration: number = 0;
        if (this.currentLevel != 0) {
            cc.audioEngine.playEffect(this.reiteration_Audio[this.currentLevel - 1], false);
            duration = this.reiteration_Audio[this.currentLevel - 1].duration;
            console.log("correctAnswer--" + (this.currentLevel))
            console.log("levelComplete--" + (this.currentLevel));
        }
        this.hand.opacity = 0;
        this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;

        this.scheduleOnce(() => {
            cc.tween(this.node.getChildByName("image")).to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                .to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("image")).to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .to(0.5, { scale: 0.75 }, { easing: "sineInOut" }).start();
            cc.tween(this.questionNode).to(0.5, { y: this.Ypos }, { easing: "sineInOut" }).start();

            if (this.currentLevel < this.totalLevels) {
                console.log("levelStarted--" + (this.currentLevel + 1));
                cc.audioEngine.stopAllEffects();
                this.scheduleOnce(() => {
                    cc.audioEngine.playEffect(this.question_audios[this.currentLevel], false);
                    this.node.getChildByName("image").getComponent(cc.Sprite).spriteFrame = this.questionImage[this.currentLevel];
                    this.currentLevel++;
                    this.addDrawing();
                }, 0.5);
                this.questionNode.children[0].getComponent(cc.Label).string = this.questions[this.currentLevel];
            }
            else {
                this.node.getChildByName("image").active = false;
                this.questionNode.getParent().active = false;
                cc.director.loadScene("gameEnded");
            }
        }, duration);
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


    onSlideDraged(ref) {

        // let progress = ref.progress*10;
        // // progress = parseInt(progress.toString());
        // // 10% of 500 100-200 150
        // let min = Constant.ToolsTagSize[this.currentPensilSelection].MIN;
        // let max = Constant.ToolsTagSize[this.currentPensilSelection].MAX;
        // let val = Constant.getCenterVal(min, max, 0, 10, progress);
        // val = parseInt(val.toString());

        // ref.node.getParent().getChildByName("val").getComponent(cc.Label).string = val;

        // Constant.CurrentToolsTagSize[this.currentPensilSelection] = val;
    }
}

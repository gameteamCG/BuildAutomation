import GamePlay from "./GamePlay/GamePlay";

interface AdditionalData {
    GameID: string;
    totalLevel: string;
    TitleImageName: string;
    introBgName: string;
    bgmMusicName: string;
    initialVOName: string;
    mainBgName: string;
    JockeyName: string;
}

interface QuestionData {
    questionText: string;
    questionImageName: string;
    questionAudioName: string;
    shouldPlayQuestionAudio: boolean;
    pictureImageName: string;
    needMoreTools: boolean;
    correctAudioName: string;
}

interface MyJSONData {
    additionalData: AdditionalData;
    questionData: QuestionData[];
}
const { ccclass, property } = cc._decorator;

@ccclass
export default class globalVariables extends cc.Component {

    @property(cc.Node)
    jockey: cc.Node = null;

    @property(cc.AudioClip)
    playBtn_audio: cc.AudioClip = null;

    isDemoGame: boolean = false;

    introBG: cc.SpriteFrame = null;

    // private totalLevels: string = "";
    private titleImageName: string = "";
    jockeyName: string = "";
    questions: QuestionData[] = [];

    totalLevels: number = 0;
    BGM_audio: cc.AudioClip = null;
    volume: number = 0.1;
    mainBg: cc.SpriteFrame = null;
    initialVO: cc.AudioClip = null;

    private static instance: globalVariables = null;

    onLoad() {
        globalVariables.instance = this;
    }

    static get Instance() {
        return globalVariables.instance
    }

    start() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        this.scheduleOnce(() => {
            this.StartGame();
        }, 2);
        if (this.jockeyName == "Podar") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("podar").active = true;
        }
        else if (this.jockeyName == "tlc") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("tlc").active = true;
        }
        else if (this.jockeyName == "supercub") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("supercub").active = true;
        }
        else if (this.jockeyName == "stallion") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("stallion").active = true;
        }
        else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("jaipuria").active = true;
        }
    }

    removeExtension(imageName: string): string {
        // Remove .png extension
        return imageName.replace(/\.png$/g, '');
    }
    removeAudioExtension(audioName: string): string {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    }

    updateJSONdata() {
        this.node.getChildByName("base").opacity = 0;
        // this.scheduleOnce(() => {
        //     cc.loader.load("https://s3.ap-south-1.amazonaws.com/cgv2-prod-images.creativegalileo.com/HybridLZAssets/BTN-bg-orange.png", (err, texture) => {
        //         if (err) {
        //             console.error("Failed to load image:", err);
        //             return;
        //         }
        //         const spriteFrame = new cc.SpriteFrame(texture);
        //         cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //     });
        // }, 1);
        if (this.isDemoGame) {
            const urlParams = new URLSearchParams(window.location.search);

            // Get the 'json' parameter value from the URL
            const encodedJson = urlParams.get('json');

            // Decode the URL-encoded JSON data
            const decodedJsonString = decodeURIComponent(encodedJson);

            // Parse the JSON string into a JavaScript object
            const jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            let levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;

            // Assign question data to the variable
            this.questions = jsonData.questionData;

            // console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);

            cc.loader.load(this.titleImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.node.getChildByName("intro").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.bgmMusicName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.BGM_audio = audioClip;
                let id = cc.audioEngine.playMusic(this.BGM_audio, true);
                cc.audioEngine.setVolume(id, this.volume);
            });
            cc.loader.load(jsonData.additionalData.initialVOName, (err, audioClip) => {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                this.initialVO = audioClip;
            });
            cc.loader.load(jsonData.additionalData.introBgName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.node.getChildByName("intro").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                this.introBG = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.mainBg = spriteFrame;
                cc.find("Canvas").getChildByName("bg").children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, (err, jsonAsset) => {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }

                const jsonData: MyJSONData = jsonAsset.json as MyJSONData;

                // Assign additional data to variables
                let levelCount = jsonData.additionalData.totalLevel;
                this.totalLevels = parseInt(levelCount);
                this.titleImageName = jsonData.additionalData.TitleImageName;
                this.jockeyName = jsonData.additionalData.JockeyName;

                // Assign question data to the variable
                this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.TitleImageName), (spriteFrame) => {
                    this.node.getChildByName("intro").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.introBgName), (spriteFrame) => {
                    this.node.getChildByName("intro").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    this.introBG = spriteFrame;
                });
                this.loadAudioClip(this.removeAudioExtension(jsonData.additionalData.bgmMusicName), (AudioClip) => {
                    this.BGM_audio = AudioClip;
                    let id = cc.audioEngine.playMusic(this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, this.volume);
                });
                this.loadAudioClip(this.removeAudioExtension(jsonData.additionalData.initialVOName), (AudioClip) => {
                    this.initialVO = AudioClip;
                });
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.mainBgName), (spriteFrame) => {
                    this.mainBg = spriteFrame;
                    cc.find("Canvas").getChildByName("bg").children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                this.questions.forEach(question => {
                    question.questionImageName = this.removeExtension(question.questionImageName);
                    question.pictureImageName = this.removeExtension(question.pictureImageName);
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
            });

        }
    }

    StartGame() {
        this.node.getChildByName("intro").active = false;
        this.node.getChildByName("base").opacity = 255;
        GamePlay.Instance.StartGame();
    }

    OnPlayBtn(_event: cc.Event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        this.StartGame();
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

    // update (dt) {}
}

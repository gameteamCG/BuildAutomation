// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";

interface AdditionalData {
    GameID: string;
    totalLevel: string;
    TitleImageName: string;
    JockeyName: string;
}

interface QuestionData {
    questionText: string;
    questionImageName: string;
    questionAudioName: string;
    shouldPlayQuestionAudio: boolean;
    isOptionText: boolean;
    isOptionImage: boolean;
    numberOfOptions: number;
    optionTexts: string[];
    optionImages: string[]; // This will either contain text options or image names based on isOptionText flag
    correctAudios: string[];
    correctAnswerNum: string;
}

interface MyJSONData {
    additionalData: AdditionalData;
    questionData: QuestionData[];
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class startGame extends cc.Component {

    @property(cc.AudioClip)
    BGM_audio: cc.AudioClip = null;
    @property(Number)
    volume: number = 0.1;
    isMusicOn: boolean = true;

    levelType: string = "1";

    currentScore: number = 0;
    currentHealth: number = 10;

    private static instance: startGame = null;

    private isLoaded: boolean = false;

    mainBg: cc.SpriteFrame = null;

    @property(cc.Node)
    jockey: cc.Node = null;

    JockeyNode: cc.Node = null;

    firstClick: number = 1;
    clickEvent: boolean = false;

    @property(Number)
    totalLevels: number = 7;

    isDemoGame: boolean = false;

    introBG: cc.SpriteFrame = null;


    private gameID: string = "";
    // private totalLevels: string = "";
    private titleImageName: string = "";
    jockeyName: string = "";
    templateType: string = "";
    optionLayout: string = "horizontal";
    questions: QuestionData[] = [];

    static get Instance() {
        return startGame.instance
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        cc.resources.load("storyBoard", Object, (_error, _jsonFile) => {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
        });

        cc.game.addPersistRootNode(this.node);
        //cc.game.removePersistRootNode(this.node);
        startGame.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
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
        if (this.isDemoGame) {
            const urlParams = new URLSearchParams(window.location.search);

            // Get the 'json' parameter value from the URL
            const encodedJson = urlParams.get('json');

            // Decode the URL-encoded JSON data
            const decodedJsonString = decodeURIComponent(encodedJson);

            // Parse the JSON string into a JavaScript object
            const jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            this.gameID = jsonData.additionalData.GameID;
            let levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            // this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;

            //console.log("optionLayout @@@@@@@@@@@@@@@@ = ", this.optionLayout);

            // Assign question data to the variable
            this.questions = jsonData.questionData;

            // cc.loader.load(this.titleImageName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });

            this.questions.forEach(question => {
                question.questionImageName = question.questionImageName;
            });
            // Now you can use these variables within this script
            // this.logData();
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, (err, jsonAsset) => {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }

                const jsonData: MyJSONData = jsonAsset.json as MyJSONData;

                // Assign additional data to variables
                this.gameID = jsonData.additionalData.GameID;
                let levelCount = jsonData.additionalData.totalLevel;
                this.totalLevels = parseInt(levelCount);
                // this.titleImageName = jsonData.additionalData.TitleImageName;
                this.jockeyName = jsonData.additionalData.JockeyName;

                // Assign question data to the variable
                this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                // this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.TitleImageName), (spriteFrame) => {
                //     cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                // });
                this.questions.forEach(question => {

                    question.questionImageName = this.removeExtension(question.questionImageName);
                    if (question.isOptionImage) {
                        question.optionImages = question.optionImages.map(option => this.removeExtension(option));
                    }
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
            });

        }
    }

    start() {

        console.log("logEvent--showedScreen--Title")
        //this.node.getComponent(cc.AudioSource).play();
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var level = url.searchParams.get("level");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }

        this.updateJSONdata();

        let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            let id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
        }




        let ageValue: number = parseInt(age);
        if (ageValue >= 6) {
            this.levelType = "4";
        }
        else if (ageValue == 5) {
            this.levelType = "3";
        }
        else if (ageValue == 4) {
            this.levelType = "2";
        }
        else {
            this.levelType = "1";
        }

        // this.node.getComponent(cc.AudioSource).clip = this.Intro_audio;
        // // this.node.getComponent(cc.AudioSource).play();
        // cc.audioEngine.playEffect(this.Intro_audio, false);
        // cc.audioEngine.


        //cc.director.loadScene("Intro2");

        if (parseInt(level)) {
            globalVariables.Instance.currentLevel = parseInt(level);
        }
        else {
            globalVariables.Instance.currentLevel = 1;
        }

        cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());


        //cc.director.loadScene("endScreen");


    }

    OnMusic(event: cc.Event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            let id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
            console.log("soundSetting--true");
        }
        else {
            this.isMusicOn = false;
            event.target.children[0].active = true;
            cc.audioEngine.stopMusic();
            console.log("soundSetting--false");
        }
    }

    OnBack() {
        console.log("gameExit--true");
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

    //update (dt) {}
}

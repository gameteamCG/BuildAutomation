interface AdditionalData {
    GameID: string;
    totalLevel: string;
    TitleImageName: string;
    introBgName: string;
    bgmMusicName: string;
    JockeyName: string;
}

interface QuestionData {
    questionLayout: string;
    questionBgName: string;
    questionAudioName: string;
    shouldPlayQuestionAudio: boolean;
    isOptionText: boolean;
    numberOfOptions: number;
    options: string[]; // This will either contain text options or image names based on isOptionText flag
    optionsBg: string[];
    correctAudioName: string;
    wrongAudioName: string;
    reiterationAudioName: string[];
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
    volume: number = 1;
    @property(cc.String)
    NextSceneName: string = "1";
    @property(Number)
    TotalLevels: number = 7;
    @property(cc.Boolean)
    isAgeParameterNeeded = true;
    @property(Number)
    LevelAgeParameters: number[] = [3, 5, 7];
    isMusicOn: boolean = true;

    levelType: string = "1";
    currentLevel: number = 1;
    hasAccess: boolean = false;
    hasMobile: boolean = false;
    mobileNumber: string = null;
    @property(Boolean)
    isPremiumGame: boolean = false;

    @property(Boolean)
    isMobileNumberPriority: boolean = false;
    @property(Number)
    premiumLevel: number = 3;
    // mobNumAvailable: boolean = false;


    @property(cc.Node)
    jockey: cc.Node = null;

    @property(cc.AudioClip)
    playBtn_audio: cc.AudioClip = null;

    JockeyNode: cc.Node = null;

    firstClick: number = 1;
    clickEvent: boolean = false;
    // currentHealth: number = 10;

    timer: number = 0;

    private static instance: startGame = null;

    private isLoaded: boolean = false;

    activateHint: boolean = false;

    isDemoGame: boolean = false;

    introBG: cc.SpriteFrame = null;


    private gameID: string = "";
    // private totalLevels: string = "";
    private titleImageName: string = "";
    jockeyName: string = "";
    questions: QuestionData[] = [];

    static get Instance() {
        return startGame.instance
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        startGame.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(element => {
            if (element.name == "jockey") {
                this.JockeyNode = element;
            }
        });
    }

    logData() {
        // console.log("Game ID:", this.gameID);
        console.log("Total Levels:", this.TotalLevels);
        // console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);

        // Log question data
        this.questions.forEach((question, index) => {
            console.log(`Question ${index + 1}:`);
            console.log("Question Image Name:", question.questionBgName);
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            console.log("Correct Answer Number:", question.correctAnswerNum);
        });
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
            this.gameID = jsonData.additionalData.GameID;
            let levelCount = jsonData.additionalData.totalLevel;
            this.TotalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;

            // Assign question data to the variable
            this.questions = jsonData.questionData;

            console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);

            cc.loader.load(this.titleImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            cc.loader.load(jsonData.additionalData.introBgName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                this.introBG = spriteFrame;
            });
            // cc.loader.load(jsonData.additionalData.mainBgName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     this.mainBg = spriteFrame;
            // });

            this.questions.forEach(question => {
                // question.questionBgName = question.questionBgName;
                // question.questionBgName = question.questionBgName;
                // question.option1ImageName = question.option1ImageName
                // question.option2ImageName = question.option2ImageName
            });
            // Now you can use these variables within this script
            this.logData();
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
                this.TotalLevels = parseInt(levelCount);
                this.titleImageName = jsonData.additionalData.TitleImageName;
                this.jockeyName = jsonData.additionalData.JockeyName;

                // Assign question data to the variable
                this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.TitleImageName), (spriteFrame) => {
                    cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.introBgName), (spriteFrame) => {
                    cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    this.introBG = spriteFrame;
                });
                this.loadAudioClip(this.removeAudioExtension(jsonData.additionalData.bgmMusicName), (AudioClip) => {
                    this.BGM_audio = AudioClip;
                    let id = cc.audioEngine.playMusic(this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, this.volume);
                });
                // this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.mainBgName), (spriteFrame) => {
                //     this.mainBg = spriteFrame;
                // });
                this.questions.forEach(question => {
                    question.questionBgName = this.removeExtension(question.questionBgName);
                    question.options = question.options.map(option => this.removeExtension(option));
                    question.optionsBg = question.optionsBg.map(optionsBg => this.removeExtension(optionsBg));
                    question.questionAudioName = this.removeAudioExtension(question.questionAudioName);
                    question.correctAudioName = this.removeAudioExtension(question.correctAudioName);
                    question.wrongAudioName = this.removeAudioExtension(question.wrongAudioName);
                    // question.reiterationAudioName = this.removeAudioExtension(question.reiterationAudioName);
                    question.reiterationAudioName = question.reiterationAudioName.map(reiterationAudioName => this.removeAudioExtension(reiterationAudioName));
                });
                // Now you can use these variables within this script
                this.logData(); // You can call a function to log the data or use it in other functions
            });

        }
    }


    start() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var isPremium = url.searchParams.get("isPremium");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }

        this.updateJSONdata();

        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        if (level != null) {
            this.NextSceneName = level;
            if (parseInt(this.NextSceneName) >= this.TotalLevels) {
                this.NextSceneName = this.TotalLevels.toString();
            }
        }

        if (mobile == "1") {
            this.hasMobile = true;
        }
        else {
            this.hasMobile = false;
        }
        if (access == "1") {
            this.hasAccess = true;
        }
        else {
            this.hasAccess = false;
        }

        if (!this.isPremiumGame) {
            this.hasAccess = true;
        }

        if (isPremium == "1") {
            this.isMusicOn = true;
        }
        else if (isPremium == "0") {
            this.isMusicOn = false;
        }

        // let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        // cc.audioEngine.setVolume(id, this.volume);
        // if (isAudio == "false") {
        //     this.node.getChildByName("music").children[0].active = true;
        //     this.isMusicOn = false;
        //     cc.audioEngine.stopMusic();
        // }
        // else {
        //     this.node.getChildByName("music").children[0].active = false;
        //     this.isMusicOn = true;
        //     let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        //     cc.audioEngine.setVolume(id, this.volume);
        // }

        let ageValue: number = parseInt(age);

        if (this.isAgeParameterNeeded) {
            if (ageValue <= this.LevelAgeParameters[0]) {
                this.levelType = "1";
            }
            else if (this.LevelAgeParameters.length > 1) {
                if (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4]) {
                                this.levelType = "5";
                            }
                        }
                    }
                }
            }
        }


        cc.director.preloadScene(this.NextSceneName);
        this.scheduleOnce(() => {
            console.log("jockey name = ", this.jockeyName);

            if (this.jockeyName == "Podar") {
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
            }
            else if (this.jockeyName == "stallion") {
                cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true;
            }
            else if (this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true;
            }
            else if (this.jockeyName == "supercub") {
                cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true;
            }
            else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }


            if (this.jockeyName != "bag" && this.jockeyName != "cryon") {
                this.scheduleOnce(() => {
                    cc.director.loadScene(this.NextSceneName);
                }, 2);
            }
        }, 1);

        // this.OnTimer();

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

    OnPlayBtn(_event: cc.Event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene(this.NextSceneName);
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

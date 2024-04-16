interface AdditionalData {
    GameID: string;
    totalLevel: string;
    TitleImageName: string;
    introBgName: string;
    bgmMusicName: string;
    mainBgName: string;
    JockeyName: string;
}

interface QuestionData {
    questionText: string;
    questionImageName: string;
    questionAudioName: string;
    shouldPlayQuestionAudio: boolean;
    commonOptionImageName: string;
    isOptionText: boolean;
    optionOffset: number;
    numberOfOptions: number;
    options: string[]; // This will either contain text options or image names based on isOptionText flag
    correctAnswer: string;
    correctAudioName: string;
    needReiteration: boolean;
    reiterationImageName: string;
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
    @property(cc.AudioClip)
    playBtn_audio: cc.AudioClip = null;
    @property(Number)
    TotalLevels: number = 7;
    @property(cc.Boolean)
    isAgeParameterNeeded = true;
    @property(Number)
    LevelAgeParameters: number[] = [3, 5, 7];
    isMusicOn: boolean = true;

    levelType: string = "1";
    currentLevel: string = "1";
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

    JockeyNode: cc.Node = null;

    firstClick: number = 1;
    clickEvent: boolean = false;
    // currentHealth: number = 10;

    timer: number = 0;

    private static instance: startGame = null;

    private isLoaded: boolean = false;

    activateHint: boolean = false;


    isDemoGame: boolean = false;

    @property(cc.Node)
    jockey: cc.Node = null;

    mainBg: cc.SpriteFrame = null;
    introBG: cc.SpriteFrame = null;

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
        console.log("Total Levels:", this.TotalLevels);
        // console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);

        // Log question data
        this.questions.forEach((question, index) => {
            console.log(`Question ${index + 1}:`);
            console.log("Question Image Name:", question.questionImageName);
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            // console.log("Correct Answer Number:", question.correctAnswerNum);
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
            let levelCount = jsonData.additionalData.totalLevel;
            this.TotalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;

            // Assign question data to the variable
            this.questions = jsonData.questionData;

            cc.loader.load(this.titleImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                this.introBG = spriteFrame;
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                this.mainBg = spriteFrame;
            });

            this.questions.forEach(question => {
                // question.questionImageName = question.questionImageName;
                // question.commonOptionImageName = question.commonOptionImageName;
                // If options are image names, you might want to remove extensions as well
                question.options = question.options.map(option => option);
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
                let levelCount = jsonData.additionalData.totalLevel;
                this.TotalLevels = parseInt(levelCount);
                this.titleImageName = jsonData.additionalData.TitleImageName;
                this.jockeyName = jsonData.additionalData.JockeyName;
                console.log("jockey name = ", this.jockeyName);

                // Assign question data to the variable
                this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.TitleImageName), (spriteFrame) => {
                    if (spriteFrame)
                        cc.find("Canvas").getChildByName("bg").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.introBgName), (spriteFrame) => {
                    if (spriteFrame) {
                        this.introBG = spriteFrame;
                        cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
                this.loadAudioClip(this.removeAudioExtension(jsonData.additionalData.bgmMusicName), (AudioClip) => {
                    if (AudioClip) {
                        this.BGM_audio = AudioClip;
                        let id = cc.audioEngine.playMusic(this.BGM_audio, true);
                        cc.audioEngine.setVolume(id, this.volume);
                    }
                });
                this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.mainBgName), (spriteFrame) => {
                    if (spriteFrame) {
                        this.mainBg = spriteFrame;
                    }
                });
                this.questions.forEach(question => {
                    question.questionImageName = this.removeExtension(question.questionImageName);
                    question.questionAudioName = this.removeAudioExtension(question.questionAudioName);
                    question.commonOptionImageName = this.removeExtension(question.commonOptionImageName);
                    question.reiterationImageName = this.removeExtension(question.reiterationImageName);
                    question.correctAudioName = this.removeAudioExtension(question.correctAudioName);
                    // If options are image names, you might want to remove extensions as well
                    question.options = question.options.map(option => this.removeExtension(option));
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
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

        this.scheduleOnce(() => {
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
        }, 1);

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


        cc.director.preloadScene("1");
        this.scheduleOnce(() => {
            console.log("jockey name = ", this.jockeyName);

            if (this.jockeyName == "Podar") {
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
            }
            else if (this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true;
            }
            else if (this.jockeyName == "supercub") {
                cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true;
            }
            else if (this.jockeyName == "stallion") {
                cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true;
            }
            else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }

            if (this.jockeyName != "bag" && this.jockeyName != "cryon") {
                this.scheduleOnce(() => {
                    cc.director.loadScene("1");
                }, 2);
            }
        }, 0.5);

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
    OnPlayBtn(_event: cc.Event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene(this.NextSceneName);
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

    // OnTimer() {
    //     let delay = 1;
    //     for (let i = 0; i < 9999; i++) {
    //         this.scheduleOnce(() => {
    //             if (cc.director.getScene().name != "gameEnd") {
    //                 this.timer++;
    //             }
    //         }, delay);
    //         delay += 1;
    //     }

    // }

    // update (dt) {}
}

interface AdditionalData {
    GameID: string;
    VideoLink: string;
    TitleImageName: string;
    IntroAudio1Name: string;
    IntroAudio2Name: string;
    JockeyName: string;
    TotalLevel: string;
}

interface QuestionData {
    QuestionAppearTime: string;
    IsQuestionText: boolean;
    QuestionText: string;
    QuestionImageName: string;
    QuestionAudioName: string;
    PlayQuestionAudio: boolean;
    IsOptionText: boolean;
    NumberOfOptions: number;
    Options: string[]; // Contains text options or image names based on IsOptionText flag
    ReiterationAudioName: string;
    CorrectAudioName: string;
    WrongAudioName: string;
    CorrectAnswer: string;
}

interface MyJSONData {
    AdditionalData: AdditionalData;
    QuestionData: QuestionData[];
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


    isDemoGame: boolean = false;

    introAudio1: cc.AudioClip = null;
    introAudio2: cc.AudioClip = null;


    mainBg: cc.SpriteFrame = null;

    private titleImageName: string = "";

    videoLink: string = "";

    activateHint: boolean = false;
    jockeyName: string = "";
    questions: QuestionData[] = [];
    questionTime: number = 0;

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
        if (this.isDemoGame) {
            const urlParams = new URLSearchParams(window.location.search);

            // Get the 'json' parameter value from the URL
            const encodedJson = urlParams.get('json');

            // Decode the URL-encoded JSON data
            const decodedJsonString = decodeURIComponent(encodedJson);

            // Parse the JSON string into a JavaScript object
            const jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            let levelCount = jsonData.AdditionalData.TotalLevel;
            this.TotalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.AdditionalData.TitleImageName;
            this.jockeyName = jsonData.AdditionalData.JockeyName;
            this.videoLink = jsonData.AdditionalData.VideoLink;

            let _introAudio1 = jsonData.AdditionalData.IntroAudio1Name;
            let _introAudio2 = jsonData.AdditionalData.IntroAudio2Name;

            // Assign question data to the variable
            this.questions = jsonData.QuestionData;

            cc.loader.load(this.titleImageName, (err, texture) => {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                const spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });

            cc.loader.load(_introAudio1, (err, audio) => {
                if (err) {
                    console.error("Failed to load audio:", err);
                    return;
                }
                this.introAudio1 = audio;
            });
            cc.loader.load(_introAudio2, (err, audio) => {
                if (err) {
                    console.error("Failed to load audio:", err);
                    return;
                }
                this.introAudio2 = audio;
            });

            this.questions.forEach(question => {
                question.Options = question.Options.map(option => option);
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
                let levelCount = jsonData.AdditionalData.TotalLevel;
                this.TotalLevels = parseInt(levelCount);
                this.titleImageName = jsonData.AdditionalData.TitleImageName;
                this.jockeyName = jsonData.AdditionalData.JockeyName;
                this.videoLink = jsonData.AdditionalData.VideoLink;
                console.log("jockey name = ", this.jockeyName);

                let _introAudio1 = this.removeAudioExtension(jsonData.AdditionalData.IntroAudio1Name);
                let _introAudio2 = this.removeAudioExtension(jsonData.AdditionalData.IntroAudio2Name);

                // Assign question data to the variable
                this.questions = jsonData.QuestionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                this.loadSpriteFrame(this.removeExtension(jsonData.AdditionalData.TitleImageName), (spriteFrame) => {
                    if (spriteFrame)
                        cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                this.loadAudioClip(_introAudio1, (audio) => {
                    if (audio)
                        this.introAudio1 = audio;
                });
                this.loadAudioClip(_introAudio2, (audio) => {
                    if (audio)
                        this.introAudio2 = audio;
                });
                this.questions.forEach(question => {
                    question.QuestionImageName = this.removeExtension(question.QuestionImageName);
                    question.QuestionAudioName = this.removeAudioExtension(question.QuestionAudioName);
                    question.ReiterationAudioName = this.removeAudioExtension(question.ReiterationAudioName);
                    question.CorrectAudioName = this.removeAudioExtension(question.CorrectAudioName);
                    question.WrongAudioName = this.removeAudioExtension(question.WrongAudioName);
                    // // If options are image names, you might want to remove extensions as well
                    question.Options = question.Options.map(option => this.removeExtension(option));
                });
                // Now you can use these variables within this script
                this.logData(); // You can call a function to log the data or use it in other functions
            });

        }

        // if (this.jockeyName == "podar" || this.jockeyName == "stallion") {
        //     this.playNode.active = false;
        //     this.videoNode.active = true;
        // }
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

        // let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        // cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            // cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            // let id = cc.audioEngine.playMusic(this.BGM_audio, true);
            // cc.audioEngine.setVolume(id, this.volume);
        }

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


        // cc.director.preloadScene(this.NextSceneName);
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(this.NextSceneName);
        // }, 2);

        // this.OnTimer();

    }

    OnMusic(event: cc.Event) {
        if (event.target.children[0].activeInHierarchy && this.BGM_audio != null) {
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

    // update (dt) {}
}

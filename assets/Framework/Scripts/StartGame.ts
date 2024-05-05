// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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

    activateHint: boolean = false;

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

    start() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");

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
            cc.director.loadScene(this.NextSceneName);
        }, 2);

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

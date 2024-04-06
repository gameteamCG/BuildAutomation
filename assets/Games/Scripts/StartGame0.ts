// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";

const { ccclass, property } = cc._decorator;

@ccclass
export default class startGame extends cc.Component {

    @property(cc.AudioClip)
    BGM_audio: cc.AudioClip = null;
    isMusicOn: boolean = true;

    levelType: string = "1";

    currentScore: number = 0;
    currentHealth: number = 10;

    private static instance: startGame = null;

    private isLoaded: boolean = false;

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
        //console.log("loading--100");
        //console.log("loaderComplete--true");
    }

    start() {

        console.log("logEvent--showedScreen--Title")
        //this.node.getComponent(cc.AudioSource).play();
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var level = url.searchParams.get("level");
        let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, 0.1);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            let id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, 0.1);
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

        if(parseInt(level)){
            globalVariables.Instance.currentLevel = parseInt(level);
        }
        else{
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
            cc.audioEngine.setVolume(id, 0.1);
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

    //update (dt) {}
}

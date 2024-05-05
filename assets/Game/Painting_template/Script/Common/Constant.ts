// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export class Constant {

    public static DEBUG_ENABLED = true;

    public static GAMESTATE = {
        MAINMENU: 0,
        GAMEPLAY: 1,
        GAMEOVER: 2,
        LEVELSELECTION: 2,
    }

    public static currentscene = null;
    public static CURRENTSTATE = Constant.GAMESTATE.MAINMENU;

    public static GAMEOVER = {
        ISCORRECTANSWER: 0,
        ISWRONGANSWER: 1,
        ISDEATHBYHEALTHRUNOUT: 2,
        ISTIMERUNOUT: 3,
    }

    public static ToolsTag = {
        BRUSH: 0,
        PENCIL: 1,
        BRUSH2: 2,
        SPRAY: 3,
        PAINT: 4,
        SPARKEL: 5,
        PATTERN: 6,
        ERASER: 7,
    }

    public static ToolsColorIndex = {
        0: -1,//BRUSH,
        1: -1,//PENCIL,
        2: -1,//BRUSH2,
        3: -1,//SPRAY,
        4: -1,//PAINT,
        5: -1,//SPARCEL,
        6: -1,//PATTERN,
        7: -1,//ERASER},
    }

    public static ToolsTagSize = {
        0: {//BRUSH
            MIN: 20,
            MAX: 50,
        },
        1: {//PENCIL
            MIN: 2,
            MAX: 20,
        },
        2: {//BRUSH2
            MIN: 20,
            MAX: 30,
        },
        3: {//SPRAY
            MIN: 1,
            MAX: 10,
        },
        4: {//PAINT
            MIN: 2000,
            MAX: 10,
        },
        5: {//SPARCEL
            MIN: 20,
            MAX: 50,
        },
        6: {//PATTERN
            MIN: 20,
            MAX: 30,
        },
        7: {//ERASER
            MIN: 20,
            MAX: 30,
        },
    }

    public static CurrentToolsTagSize = {
        0: Constant.ToolsTagSize[0].MIN,//BRUSH
        1: Constant.ToolsTagSize[1].MIN,//PENCIL
        2: Constant.ToolsTagSize[2].MIN,//BRUSH2
        3: Constant.ToolsTagSize[3].MIN,//SPRAY
        4: Constant.ToolsTagSize[4].MIN,//PAINT
        5: Constant.ToolsTagSize[5].MIN,//SPARCEL
        6: Constant.ToolsTagSize[6].MIN,//PATTERN
        7: Constant.ToolsTagSize[7].MIN,//ERASER
    }

    public static COLORTAG = {
        COLOR: 0,
        PATTERN: 1,
        SPARKLE: 2,
    }

    public static getCenterVal(min, max, first, last, current) {
        return (((current - first) / (last - first)) * (max - min)) + min;
    }

    public static getNewModifiedSpeed(botScale, refe) {
        return (((botScale - refe.initialSize) / (refe.maxSize - refe.initialSize)) * (refe.endspeed - refe.startSpeed)) + refe.startSpeed;
    }

    public static circlerandPoint(x, y, radius) {
        let ang = Math.random() * 2 * Math.PI,
            hyp = Math.sqrt(Math.random()) * radius,
            adj = Math.cos(ang) * hyp,
            opp = Math.sin(ang) * hyp
        return new cc.Vec2(x + adj, y + opp)
    }

    public static RAJU_ANIMATION = {
        fly: "fly",
        celebration: "celebration",
        idle: "idle",
        talking: "talking",
        try_again: "try_again",
        well_done: "well_done",
    }
    public static getFrame(path, frameLocation, currentLength, totalLength, shouldPlayAnim, callbacks) {
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                callbacks(null);
            }
            try {
                callbacks(spriteFrame, frameLocation, currentLength, totalLength, shouldPlayAnim);
            } catch (error) {
                callbacks(null);
            }
        });
    }

    public static updateSpriteFrame(img, path) {
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                return;
            }
            try {
                if (img != null)
                    img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            } catch (error) {
                console.log(error, " error");
            }
        });
    }

    //sound
    public static CheckSoundEnabled() {
        if (window.localStorage.getItem("soundEnabled") == null || window.localStorage.getItem("soundEnabled") == undefined)
            window.localStorage.setItem("soundEnabled", "1")

        return parseInt(window.localStorage.getItem("soundEnabled"));
    }


    public static ToggleSound() {
        if (parseInt(window.localStorage.getItem("soundEnabled")))
            window.localStorage.setItem("soundEnabled", "0")
        else
            window.localStorage.setItem("soundEnabled", "1")

        return this.CheckSoundEnabled();
    }

    public static getLevelData(lvlNo) {
        let lvl = lvlNo + "newdata";
        if (window.localStorage.getItem(lvl) == null || window.localStorage.getItem(lvl) == undefined)
            window.localStorage.setItem(lvl, null)

        // let val = parseInt(window.localStorage.getItem(lvl));
        // let dataArray = [];
        // if(val >= 0)
        // {
        //     for (let i = 0; i <= val; i++) {
        //         let lvlData = lvlNo+"data"+i;
        //         let splitVal = JSON.parse(window.localStorage.getItem(lvlData));

        //         for (let j = 0; j < splitVal.length; j++) {
        //             dataArray.push(splitVal[j]);
        //         }
        //     }
        // }


        //new
        let dataArray = JSON.parse(window.localStorage.getItem(lvl));
        //new

        return dataArray;
    }
    public static SaveLevelData(lvlNo, data) {
        // let totalLength = data.length;
        // let splitData1 = Math.floor(totalLength/5);

        // let k = 0;
        // for (let i = 0; i <= splitData1; i++) {
        //     let newData = [];
        //     for (let j = 0; j < 5; j++) {
        //         if(data[k] == undefined)
        //             break;
        //         newData.push(data[k]);
        //         k++;
        //     }
        //     let lvlData = lvlNo+"data"+i;
        //     this.setInLocalStorage(lvlData,newData)
        // }
        // let lvl = lvlNo+"data";
        // this.setInLocalStorage(lvl,splitData1)  

        //new
        for (let i = 0; i < data.length; i++) {
            data[i].splice(0, data[i].length - 1);
        }

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                delete data[i][j].child;
            }
        }

        let lvl = lvlNo + "newdata";
        this.setInLocalStorage(lvl, data)
        //new
    }

    public static setInLocalStorage(keyName, value) {
        try {
            localStorage.setItem(keyName, JSON.stringify(value));
        } catch (error) {
            console.log('Error in local storage', error);
            this.setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)));
        }
    }


    public static AUDIO_SOUND = {
        BACKGROUND: 'bgm',

        // Dialogue : "Dialogue",
        Dialogue: {
            0: "letter/L1-",
        },
        correct: {
            0: "correct/L1 Correct",
        },
        wrong: {
            0: {
                0: "wrong/L1 Negative A",
                1: "wrong/L1 Negative B"
            },
        },

        tracing: "Tracing Pull",
        EndPoint: "EndPoint",
        Shapereveal: "Shape reveal",
        Timer: "Timer",
        Yeahh: "Yeahh",
        Click: "Click",

        elementAppear: "elementAppear",
    }

    public static AUDIO_FRAME = {
        soundOn: 'Png/persistent/Sound on',
        soundOff: "Png/persistent/Sound off",
    }

    public static LOG_DATA = {

        //initial
        LOADING_100: "loading--100",
        LOADER_COMPLETE_TRUE: "loaderComplete--true",
        TITLE_SHOWED: "logEvent--showedScreen--Title",

        LEVEL_STARTED: "levelStarted--",
        FIRST_CLICK: "firstClick--",
        LEVEL_COMPLETE: "levelComplete--",
        LEVEL_FAILED: "levelFailed--",
        STARS_EARNED: "starsEarned--",
        LEVEL_CLICK: "levelClick--",
        CORRECT_ANSWER: "correctAnswer--",

        RESTARTED: "logEvent--replayClick--true",

        SOUND_TRUE: "soundSetting--true",
        SOUND_FALSE: "soundSetting--false",

        GAME_EXIT: "gameExit--true",

        //gameOver
        CONGRATULATION: "logEvent--showedScreen--Congratulations",
        GAME_ENDED_TRUE: "gameEnded--true",
    }

}

"use strict";
cc._RF.push(module, '5011exdQO5CqYRjNCOxwXhq', 'Constant');
// Game/Painting_template/Script/Common/Constant.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant_1 = Constant;
    Constant.getCenterVal = function (min, max, first, last, current) {
        return (((current - first) / (last - first)) * (max - min)) + min;
    };
    Constant.getNewModifiedSpeed = function (botScale, refe) {
        return (((botScale - refe.initialSize) / (refe.maxSize - refe.initialSize)) * (refe.endspeed - refe.startSpeed)) + refe.startSpeed;
    };
    Constant.circlerandPoint = function (x, y, radius) {
        var ang = Math.random() * 2 * Math.PI, hyp = Math.sqrt(Math.random()) * radius, adj = Math.cos(ang) * hyp, opp = Math.sin(ang) * hyp;
        return new cc.Vec2(x + adj, y + opp);
    };
    Constant.getFrame = function (path, frameLocation, currentLength, totalLength, shouldPlayAnim, callbacks) {
        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                callbacks(null);
            }
            try {
                callbacks(spriteFrame, frameLocation, currentLength, totalLength, shouldPlayAnim);
            }
            catch (error) {
                callbacks(null);
            }
        });
    };
    Constant.updateSpriteFrame = function (img, path) {
        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                return;
            }
            try {
                if (img != null)
                    img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
            catch (error) {
                console.log(error, " error");
            }
        });
    };
    //sound
    Constant.CheckSoundEnabled = function () {
        if (window.localStorage.getItem("soundEnabled") == null || window.localStorage.getItem("soundEnabled") == undefined)
            window.localStorage.setItem("soundEnabled", "1");
        return parseInt(window.localStorage.getItem("soundEnabled"));
    };
    Constant.ToggleSound = function () {
        if (parseInt(window.localStorage.getItem("soundEnabled")))
            window.localStorage.setItem("soundEnabled", "0");
        else
            window.localStorage.setItem("soundEnabled", "1");
        return this.CheckSoundEnabled();
    };
    Constant.getLevelData = function (lvlNo) {
        var lvl = lvlNo + "newdata";
        if (window.localStorage.getItem(lvl) == null || window.localStorage.getItem(lvl) == undefined)
            window.localStorage.setItem(lvl, null);
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
        var dataArray = JSON.parse(window.localStorage.getItem(lvl));
        //new
        return dataArray;
    };
    Constant.SaveLevelData = function (lvlNo, data) {
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
        for (var i = 0; i < data.length; i++) {
            data[i].splice(0, data[i].length - 1);
        }
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                delete data[i][j].child;
            }
        }
        var lvl = lvlNo + "newdata";
        this.setInLocalStorage(lvl, data);
        //new
    };
    Constant.setInLocalStorage = function (keyName, value) {
        try {
            localStorage.setItem(keyName, JSON.stringify(value));
        }
        catch (error) {
            console.log('Error in local storage', error);
            this.setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)));
        }
    };
    var Constant_1;
    Constant.DEBUG_ENABLED = true;
    Constant.GAMESTATE = {
        MAINMENU: 0,
        GAMEPLAY: 1,
        GAMEOVER: 2,
        LEVELSELECTION: 2,
    };
    Constant.currentscene = null;
    Constant.CURRENTSTATE = Constant_1.GAMESTATE.MAINMENU;
    Constant.GAMEOVER = {
        ISCORRECTANSWER: 0,
        ISWRONGANSWER: 1,
        ISDEATHBYHEALTHRUNOUT: 2,
        ISTIMERUNOUT: 3,
    };
    Constant.ToolsTag = {
        BRUSH: 0,
        PENCIL: 1,
        BRUSH2: 2,
        SPRAY: 3,
        PAINT: 4,
        SPARKEL: 5,
        PATTERN: 6,
        ERASER: 7,
    };
    Constant.ToolsColorIndex = {
        0: -1,
        1: -1,
        2: -1,
        3: -1,
        4: -1,
        5: -1,
        6: -1,
        7: -1,
    };
    Constant.ToolsTagSize = {
        0: {
            MIN: 20,
            MAX: 50,
        },
        1: {
            MIN: 2,
            MAX: 20,
        },
        2: {
            MIN: 20,
            MAX: 30,
        },
        3: {
            MIN: 1,
            MAX: 10,
        },
        4: {
            MIN: 2000,
            MAX: 10,
        },
        5: {
            MIN: 20,
            MAX: 50,
        },
        6: {
            MIN: 20,
            MAX: 30,
        },
        7: {
            MIN: 20,
            MAX: 30,
        },
    };
    Constant.CurrentToolsTagSize = {
        0: Constant_1.ToolsTagSize[0].MIN,
        1: Constant_1.ToolsTagSize[1].MIN,
        2: Constant_1.ToolsTagSize[2].MIN,
        3: Constant_1.ToolsTagSize[3].MIN,
        4: Constant_1.ToolsTagSize[4].MIN,
        5: Constant_1.ToolsTagSize[5].MIN,
        6: Constant_1.ToolsTagSize[6].MIN,
        7: Constant_1.ToolsTagSize[7].MIN,
    };
    Constant.COLORTAG = {
        COLOR: 0,
        PATTERN: 1,
        SPARKLE: 2,
    };
    Constant.RAJU_ANIMATION = {
        fly: "fly",
        celebration: "celebration",
        idle: "idle",
        talking: "talking",
        try_again: "try_again",
        well_done: "well_done",
    };
    Constant.AUDIO_SOUND = {
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
    };
    Constant.AUDIO_FRAME = {
        soundOn: 'Png/persistent/Sound on',
        soundOff: "Png/persistent/Sound off",
    };
    Constant.LOG_DATA = {
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
    };
    Constant = Constant_1 = __decorate([
        ccclass
    ], Constant);
    return Constant;
}());
exports.Constant = Constant;

cc._RF.pop();
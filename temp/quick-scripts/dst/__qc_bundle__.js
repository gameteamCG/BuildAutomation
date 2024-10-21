
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/TapToFind/Scripts/CustomWidget');
require('./assets/TapToFind/Scripts/IData');
require('./assets/TapToFind/Scripts/StartGame');
require('./assets/TapToFind/Scripts/endScreen');
require('./assets/TapToFind/Scripts/gameplay');
require('./assets/TapToFind/Scripts/globalVariables');
require('./assets/TapToFind/Scripts/titleScript');
require('./assets/resources/empty');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/empty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c841dcXFfpDWaG7QoisXsMj', 'empty');
// resources/empty.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvZW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa156p3gAtEIKy7RL2BRjec', 'gameplay');
// TapToFind/Scripts/gameplay.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var StartGame_1 = require("./StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.answerObject = [];
        _this.question = "";
        _this.textArray = [];
        _this.maxOptions = 7;
        _this.SubImage = 0;
        _this.wrongAnswerLimit = 7;
        _this.answers = [];
        _this.positionType = "custom";
        _this.feedbacktype = [];
        _this.scaleArray = [];
        _this.optionImages = [];
        _this.correctAudios = [];
        _this.positiveAudios = [];
        _this.timer = 0;
        _this.isClicked = false;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.wrongAnswerCount = 0;
        _this.isDone = [];
        _this.createdOptions = [];
        _this.createdAnswers = [];
        _this.offsetX = 0;
        _this.totalLevels = 6;
        _this.viewPortWidth = 720;
        _this.viewPortHeight = 1280;
        _this.canTouch = true;
        _this.isChar1 = true;
        _this.isFirstClick = false;
        _this.isWrong = false;
        _this.defaultTime = 30;
        _this.questionAudioFile = null;
        _this.correctAudiosFile = [];
        _this.answerObjectFile = null;
        _this.optionImagesFile = [];
        _this.commonOptionImg = null;
        _this.whiteTick = null;
        _this.yellowTick = null;
        _this.rightMark = null;
        _this.wrongMark = null;
        _this.ring = null;
        _this.positiveSfx = null;
        _this.negativeSfx = null;
        return _this;
    }
    //private negativeAudios:cc.AudioClip[]=[];
    //private optionAnimations:string[]=[];
    //private optionAudios:string[]=[];
    //private ga = require("ga");
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    // LoadQuestion() {
    //     //console.log(gaData);
    //     cc.resources.load("storyBoard", Object, (_error, _jsonFile) => {
    //         if (_error) {
    //             console.error(_error.message || _error);
    //             return;
    //         }
    //         let _jsonData: object = _jsonFile["json"];
    //         this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
    //     });
    // }
    NewClass.prototype.PlayQuestion = function (_data) {
        return 1;
    };
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        //ga.name;
        var _this = this;
        // ga('event', "Tap", {
        //     'event_category': "Link",
        //     'event_label': "Create Game",
        //     'value': <1>
        // });
        this.value = this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").getComponent(cc.Sprite).fillRange;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").color = new cc.Color(222, 83, 83);
        this.setRing();
        this.node.getChildByName("progressBarRound").y = globalVariables_1.default.Instance.canvasTopY - 60;
        this.canTouch = true;
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        //console.log("levelStarted--" + cc.director.getScene().name);
        if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
            //console.log("Congratulations.........!!!!!!!!!!!!!!!!");
            cc.director.preloadScene("endScreen");
        }
        else {
            //console.log("loaddddddddd@@@@@@@@@@@",parseInt(cc.director.getScene().name));
            //cc.director.preloadScene((parseInt(cc.director.getScene().name)+1).toString());
        }
        this.fetchData();
        this.scheduleOnce(function () {
            //this.node.getChildByName("template").destroy();
            if (_this.answerObject[0] != "") {
                _this.createAnswerObject();
            }
            _this.node.getChildByName("Question").x = _this.viewPortWidth * 2;
            _this.node.getChildByName("Question").getComponent(cc.RichText).string = _this.question;
            _this.setMultipleAnswerEnvironment();
            cc.tween(_this.node.getChildByName("Question"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            _this.createOptionObject(_this.maxOptions);
        }, 0.3);
        this.scheduleOnce(function () {
            for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) {
                _this.isDone[i] = false;
            }
            _this.node.getChildByName("Options").children.forEach(function (element) {
                element.on('touchstart', function (event) {
                    if (this.canTouch) {
                        this.TouchStart(element, event);
                    }
                }, _this);
            });
            _this.scheduleOnce(function () {
                // Here this refers to component
                this.isClicked = true;
                //console.log("Timer == ",this.timer);
            }, 1);
        }, 0.4);
        this.scheduleOnce(function () {
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.questionAudioFile, false);
            }, 0.6);
        }, 0.7);
    };
    NewClass.prototype.fetchData = function () {
        this.correctAnswerCount = 0;
        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; /////
        this.maxOptions = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions;
        this.SubImage = 0;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName != "") {
            this.SubImage = 1;
        }
        this.wrongAnswerLimit = 2;
        this.answers = [];
        for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answers.push((parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i]) - 1));
        }
        // this.answers = this.data[globalVariables.Instance.currentLevel - 1].answers;
        this.positionType = "custom";
        this.feedbacktype = ["confetti"];
        this.totalAnswers = this.answers.length;
        this.question = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.questionSound = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName;
        this.textArray = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionTexts;
        this.answerObject = [StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName];
        this.optionImages = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionImages;
        this.correctAudios = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios;
        //console.log("positions :"+this.data[0].positions);
        this.LoadDataFromResources();
    };
    NewClass.prototype.LoadDataFromResources = function () {
        var _this = this;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionAudioFile = audioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.answerObjectFile = spriteFrame;
                });
            }
            var _loop_1 = function (i) {
                if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionImages[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.optionImagesFile[i] = spriteFrame;
                    });
                }
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    _this.correctAudiosFile[i] = audioClip;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionAudioFile = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (spriteFrame) {
                    _this.answerObjectFile = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage) {
                    this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionImages[i], function (spriteFrame) {
                        _this.optionImagesFile[i] = spriteFrame;
                    });
                }
            };
            var this_1 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                this_2.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (AudioClip) {
                    _this.correctAudiosFile[i] = AudioClip;
                });
            };
            var this_2 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_4(i);
            }
        }
    };
    NewClass.prototype.CheckForIsDone = function (_node) {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name == _node.name) {
                this.isDone[i] = true;
            }
        }
    };
    NewClass.prototype.TouchStart = function (_node, _event) {
        var _this = this;
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        //console.log("touch start : ");
        var isStop = false;
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name == this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
                isStop = true;
                break;
            }
        }
        if (!isStop) {
            var isCorrect = false;
            var audioIDNum = 0;
            for (var i = 0; i < this.answers.length; i++) {
                if ((parseInt(_node.name) - 1) == this.answers[i]) {
                    audioIDNum = i;
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) {
                // if(globalVariables.Instance.currentLevel==1){ // game specific condition
                //     this.node.getChildByName("extraNode").getChildByName("hand").active=false;
                //     if(_node.name=="1"){
                //         this.scaleTween.stop();
                //     }
                //     else if(_node.name=="2"){
                //         this.scaleTween1.stop();
                //     }
                // }
                console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
                cc.audioEngine.playEffect(this.correctAudiosFile[audioIDNum], false);
                this.wrongAnswerCount = 0;
                //console.log("correct is clicked = ",_node.name);
                // cc.tween(_node)
                //     .to(0.2, { x: _node.x }, { easing: 'sineInOut' })
                //     .to(0.2, { x: 360 }, { easing: 'sineInOut' }).start();
                // cc.tween(_node)
                //     .to(0.2, { y: _node.y }, { easing: 'sineInOut' })
                //     .to(0.2, { y: 640 }, { easing: 'sineInOut' }).start();
                if (this.feedbacktype.length == 1) {
                    //this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    //this.node.getComponent(cc.AudioSource).play();
                    cc.audioEngine.playEffect(this.positiveSfx, false);
                    //this.scheduleOnce(() => {
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    //}, 0.5);
                }
                else if (this.feedbacktype.length == 2) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.8);
                }
                else if (this.feedbacktype.length == 3) {
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.5);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[2]);
                    }, 0.7);
                }
                this.CheckForIsDone(_node);
                this.correctAnswerCount += 1;
            }
            else {
                //console.log("wrong is clicked = ",this.isDone);
                console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
                this.callNegativeFeedback(_node);
            }
            //is levelend
            var levelend = false;
            // for(let i=0;i<this.answers.length;i++){
            //     if(!this.node.getChildByName("Options").children[this.answers[i]].activeInHierarchy){
            //         levelend=true;
            //     }
            //     else{
            //         levelend=false;
            //         break;
            //     }
            // }
            //for level one specific case
            if (this.correctAnswerCount == this.totalAnswers) {
                globalVariables_1.default.Instance.rightAnswerCount += 1;
                levelend = true;
                this.canTouch = false;
                //console.log("Level Completed...!!!!!!!!!");
                var delay = 0;
                if (this.correctAudiosFile[audioIDNum] != null) {
                    delay = this.correctAudiosFile[audioIDNum].duration - 0.5;
                }
                if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
                    console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                    this.isClicked = false;
                    this.scheduleOnce(function () {
                        _this.setProgressBar();
                        globalVariables_1.default.Instance.totalTimer += _this.timer;
                        _this.timer = 0;
                        //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                        // this.scheduleOnce(() => {
                        //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                        //     this.node.getComponent(cc.AudioSource).play();
                        // }, 3);
                        _this.scheduleOnce(function () {
                            _this.destroyAnswers();
                            _this.destroyOptions();
                            cc.director.loadScene("endScreen");
                        }, 0.5);
                    }, delay);
                    //this.callPositiveReaction();
                }
                else {
                    console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                    this.isClicked = false;
                    this.scheduleOnce(function () {
                        // gtag('event', "LevelCompleted_" + globalVariables.Instance.currentLevel, {
                        //     'event_category': "Image",
                        //     'event_label': "Level Completed",
                        //     'value': 1
                        // });
                        _this.setProgressBar();
                        globalVariables_1.default.Instance.totalTimer += _this.timer;
                        _this.timer = 0;
                        globalVariables_1.default.Instance.currentLevel += 1;
                        _this.canTouch = false;
                        _this.setScreen();
                    }, delay);
                    //console.log("currentLevel : ",globalVariables.Instance.currentLevel);
                    // this.scheduleOnce(()=>{
                    //     this.callPositiveReaction();
                    // },1);
                }
            }
        }
    };
    NewClass.prototype.setScreen = function () {
        var _this = this;
        // cc.director.loadScene("1");
        // return;
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_" + globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        this.scheduleOnce(function () {
            //this.node.getChildByName("Question").getComponent(cc.Label).string = "";
            _this.destroyAnswers();
            _this.destroyOptions();
            _this.scheduleOnce(function () {
                _this.canTouch = true;
                _this.isWrong = false;
                _this.fetchData();
                _this.setRing();
                _this.scheduleOnce(function () {
                    //this.node.getChildByName("template").destroy();
                    if (_this.answerObject[0] != "") {
                        _this.createAnswerObject();
                    }
                    _this.node.getChildByName("Question").x = _this.viewPortWidth * 2;
                    _this.node.getChildByName("Question").getComponent(cc.RichText).string = _this.question;
                    _this.setMultipleAnswerEnvironment();
                    cc.tween(_this.node.getChildByName("Question"))
                        .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
                    _this.createOptionObject(_this.maxOptions);
                }, 0.3);
                _this.scheduleOnce(function () {
                    for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) {
                        _this.isDone[i] = false;
                    }
                    _this.node.getChildByName("Options").children.forEach(function (element) {
                        element.on('touchstart', function (event) {
                            if (this.canTouch) {
                                this.TouchStart(element, event);
                            }
                        }, _this);
                    });
                    _this.scheduleOnce(function () {
                        // Here this refers to component
                        this.isClicked = true;
                        //console.log("Timer == ",this.timer);
                    }, 1);
                }, 0.4);
                _this.scheduleOnce(function () {
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.questionAudioFile, false);
                    }, 0.6);
                }, 0.7);
            }, 0.7);
        }, 2);
    };
    NewClass.prototype.createAnswerObject = function () {
        //console.log("created Answers before : "+this.createdAnswers)
        for (var i = 0; i < this.answerObject.length; i++) {
            this.createdAnswers[i] = new cc.Node;
            //let answerNode = new cc.Node;
            this.createdAnswers[i].parent = this.node;
            this.createdAnswers[i].name = "Ans" + i;
            this.createdAnswers[i].x = this.viewPortWidth * 2;
            this.createdAnswers[i].y = 150;
            this.createdAnswers[i].addComponent(cc.Sprite);
            // this.updateSprites(this.answerObject[i], this.createdAnswers[i]);
            this.createdAnswers[i].getComponent(cc.Sprite).spriteFrame = this.answerObjectFile;
            this.createdAnswers[i].width = 300;
            this.createdAnswers[i].height = 300;
            cc.tween(this.createdAnswers[i])
                .to(0.5, { x: 1 }, { easing: 'sineInOut' }).start();
            cc.tween(this.createdAnswers[i])
                .to(0.5, { opacity: 255 }, { easing: 'sineInOut' }).start();
        }
    };
    NewClass.prototype.createOptionObject = function (numOfOptions) {
        var posX = [215, 495, 215, 495];
        var posY = [750, 750, 470, 470];
        switch (this.positionType) {
            case "custom": {
                for (var i = 0; i < numOfOptions; i++) {
                    //console.log("created options :::::", this.createdOptions);
                    this.createdOptions[i] = cc.instantiate(this.node.getChildByName("template"));
                    this.createdOptions[i].name = (i + 1).toString();
                    //console.log("this.createdOptions[i].name : ",this.createdOptions[i].name);
                    this.createdOptions[i].opacity = 0;
                    //(i+1).toString();
                    if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                        this.createdOptions[i].children[0].getComponent(cc.RichText).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionTexts[i];
                    }
                    this.node.getChildByName("Options").insertChild(this.createdOptions[i], i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale = 0.5;
                    this.createdOptions[i].x = this.viewPortWidth * 2;
                    if (this.SubImage == 1) {
                        posY[i] -= 280;
                    }
                    this.createdOptions[i].y = posY[i];
                    this.createdOptions[i].active = true;
                    if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i]);
                        this.createdOptions[i].getComponent(cc.Sprite).spriteFrame = this.commonOptionImg;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = 0;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).fontSize = 80;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).lineHeight = 85;
                    }
                    else if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage && StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 65;
                        // this.createdOptions[i].getChildByName("subSprite").width = 350;
                        // this.createdOptions[i].getChildByName("subSprite").height = 350;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).lineHeight = 75;
                    }
                    else if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage && !StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 0;
                        // this.createdOptions[i].getChildByName("subSprite").width = 500;
                        // this.createdOptions[i].getChildByName("subSprite").height = 500;
                        // this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = null;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.RichText).lineHeight = 75;
                    }
                    cc.tween(this.createdOptions[i])
                        .to(0.5, { x: posX[i] }, { easing: 'sineInOut' }).start();
                    cc.tween(this.createdOptions[i])
                        .to(0.5, { opacity: 255 }, { easing: 'sineInOut' }).start();
                    if (this.answers.length <= 1) {
                        this.createdOptions[i].getChildByName("tick").active = false;
                    }
                    else {
                        this.createdOptions[i].getChildByName("tick").active = true;
                    }
                    //this.UpdateAnimations(this.optionImages[i], this.createdOptions[i]);
                    //this.createdOptions[i].getComponent(cc.Sprite).spriteFrame=this.optionImages[i];
                    //console.log("Positions : ",this.createdOptions[i].x,this.createdOptions[i].y);
                    //console.log("created options : *********",this.createdOptions[i].x,this.createdOptions[i].y);
                }
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    };
    NewClass.prototype.destroyOptions = function () {
        var _this = this;
        for (var i = 0; i < this.maxOptions; i++) {
            cc.tween(this.createdOptions[i])
                .to(0.5, { x: -this.viewPortWidth }, { easing: 'sineInOut' }).start();
            cc.tween(this.createdOptions[i])
                .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
        }
        this.scheduleOnce(function () {
            for (var i = 0; i < _this.maxOptions; i++) {
                _this.createdOptions[i].destroy();
            }
        }, 0.5);
    };
    NewClass.prototype.destroyAnswers = function () {
        var _this = this;
        cc.tween(this.node.getChildByName("Question"))
            .to(0.5, { x: -this.viewPortWidth }, { easing: 'sineInOut' }).start();
        if (this.createdAnswers.length > 0) {
            for (var i = 0; i < this.answerObject.length; i++) {
                //this.createdAnswers[i].destroy();
                cc.tween(this.createdAnswers[i])
                    .to(0.5, { x: -this.viewPortWidth + 100 }, { easing: 'sineInOut' }).start();
                cc.tween(this.createdAnswers[i])
                    .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
            this.scheduleOnce(function () {
                for (var i = 0; i < _this.answerObject.length; i++) {
                    _this.createdAnswers[i].destroy();
                }
            }, 0.5);
        }
    };
    NewClass.prototype.setMultipleAnswerEnvironment = function () {
        this.node.getChildByName("Question").getChildByName("subQuestion").getComponent(cc.Label).string = "";
        if (this.answers.length <= 1) {
            this.node.getChildByName("Question").setPosition(0, 330);
            return;
        }
        else {
            this.node.getChildByName("Question").setPosition(0, 350);
            var subquestionString = "Select upto " + this.answers.length + " Options";
            this.node.getChildByName("Question").getChildByName("subQuestion").getComponent(cc.Label).string = subquestionString;
        }
    };
    NewClass.prototype.callNegativeFeedback = function (node1) {
        var _this = this;
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        //let tween1 =  cc.tween(node1)
        node1.color = new cc.Color(232, 30, 43);
        cc.tween(node1)
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x - 10 }, { easing: 'sineInOut' })
            .to(0.1, { x: node1.x }, { easing: 'sineInOut' }).start();
        this.scheduleOnce(function () {
            _this.canTouch = true;
        }, 0.8);
        //call negative audio 
        // this.node.getComponent(cc.AudioSource).clip = this.negativeSound;
        // this.node.getComponent(cc.AudioSource).play();
        cc.audioEngine.playEffect(this.negativeSfx, false);
        this.scheduleOnce(function () {
            //tween1.stop();
            if (_this.wrongAnswerCount >= _this.wrongAnswerLimit) {
                _this.wrongAnswerCount = 0;
                _this.canTouch = false;
                //this.callNegativeReaction();
                _this.hilightLeftAnswers();
                if (globalVariables_1.default.Instance.currentLevel == _this.totalLevels) {
                    globalVariables_1.default.Instance.totalTimer += _this.timer;
                    _this.timer = 0;
                    _this.isClicked = false;
                    _this.destroyAnswers();
                    _this.destroyOptions();
                    cc.director.loadScene("endScreen");
                }
                else {
                    _this.isWrong = true;
                    globalVariables_1.default.Instance.totalTimer += _this.timer;
                    _this.timer = 0;
                    _this.isClicked = false;
                    _this.setProgressBar();
                    globalVariables_1.default.Instance.currentLevel += 1;
                    _this.setScreen();
                }
            }
        }, 0.8);
    };
    NewClass.prototype.callPositiveFeedback = function (node1, feedbackName) {
        var _this = this;
        switch (feedbackName) {
            case "confetti": {
                //this.node.getChildByName("Options").getChildByName("particle").setPosition(node1.x,node1.y);
                node1.color = new cc.Color(71, 255, 0);
                this.node.getChildByName("Options").getChildByName("Animal").scale = 1;
                this.node.getChildByName("Options").getChildByName("Animal").setPosition(node1.x, node1.y);
                var randomNum = this.getRandomNumber(0, 1);
                console.log("randomNum", randomNum);
                if (randomNum == 1) {
                    this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play("confetti");
                }
                else {
                    this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play("confetti2");
                }
                this.scheduleOnce(function () {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    _this.node.getChildByName("Options").getChildByName("Animal").setPosition(-500, -500);
                }, 1);
                //extra code 
                if (node1.getChildByName("tick").active) {
                    // this.updateSprites("/whiteTick", node1.getChildByName("tick"));
                    node1.getChildByName("tick").getComponent(cc.Sprite).spriteFrame = this.whiteTick;
                }
                cc.tween(this.node.getChildByName("Options").getChildByName("Animal"))
                    .to(0.5, { opacity: 255 }, { easing: 'sineInOut' })
                    .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "destroy": {
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_right": {
                cc.tween(node1)
                    .to(0.9, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.9, { x: this.viewPortWidth + 100 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_left": {
                cc.tween(node1)
                    .to(0.2, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.2, { x: -100 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_top": {
                cc.tween(node1)
                    .to(2, { y: this.viewPortHeight + 100 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .repeatForever(cc.tween().to(0.2, { x: node1.x + 30 }, { easing: 'sineInOut' })
                    .to(0.2, { x: node1.x }, { easing: 'sineInOut' })).start();
                break;
            }
            case "movement_bottom": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 4) {
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                        .to(0.5, { x: -280 }, { easing: 'sineInOut' }).start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: 'sineInOut' })
                    .to(0.5, { y: node1.y - 50 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: 'sineInOut' }).start(); //bounceIn
                break;
            }
            case "movement_Animation": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 1) {
                    node1.x = node1.x + 10;
                    node1.y = node1.y + 50;
                }
                if (globalVariables_1.default.Instance.currentLevel == 3) {
                    node1.x = node1.x + 20;
                    node1.y = node1.y + 20;
                    node1.scale = node1.scale - 0.2;
                }
                if (globalVariables_1.default.Instance.currentLevel == 5) {
                    // node1.x=node1.x+20;
                    // node1.y=node1.y+20;
                    node1.scale = node1.scale + 0.4;
                }
                var animationClip = void 0; //= this.optionAnimations[parseInt(node1.name)-1];
                node1.addComponent(cc.Animation);
                node1.getComponent(cc.Animation).addClip(animationClip);
                node1.getComponent(cc.Animation).play(animationClip.name);
                //node1.getComponent(cc.Animation).on('finished',  this.finishedAnim,    this);
                break;
            }
            case "movement_Scale": {
                var outlineScale = node1.scale + (node1.scale * 30 / 100);
                // if(node1.scale<=0.7){
                //     outlineScale = node1.scale+(node1.scale/2);
                // } 
                // else if(node1.scale>=0.7&&node1.scale<=0.9){
                //     outlineScale = node1.scale;
                // } 
                // else{
                //     outlineScale = node1.scale-0.4;
                // }
                //node1.getChildByName("outline").getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                node1.getChildByName("outline").scale = outlineScale;
                cc.tween(node1.getChildByName("outline"))
                    .to(0.3, { scale: outlineScale + 0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: outlineScale }, { easing: 'sineInOut' }).start();
                break;
            }
            case "frameChange": {
                //node1.getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                cc.tween(node1)
                    .to(0.3, { scale: node1.scale + 0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: node1.scale }, { easing: 'sineInOut' }).start();
                break;
            }
            case "shake": {
                var tween1_1 = cc.tween(node1)
                    .repeatForever(cc.tween().to(0.1, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.1, { x: node1.x + 10 }, { easing: 'sineInOut' }))
                    .start();
                this.scheduleOnce(function () {
                    tween1_1.stop();
                }, 1);
                break;
            }
            case "movement_center": {
                this.scheduleOnce(function () {
                    _this.destroyOtherOptions();
                }, 0);
                if (node1.name == "2") {
                    cc.tween(node1)
                        .to(1, { x: node1.x - 325 }, { easing: 'sineInOut' }).start();
                }
                else if (node1.name == "1") {
                    cc.tween(node1)
                        .to(1, { x: node1.x + 325 }, { easing: 'sineInOut' }).start();
                }
                break;
            }
            default: {
                //statements; 
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
                break;
            }
        }
    };
    NewClass.prototype.destroyOtherOptions = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name && (!this.isDone[i])) {
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
        }
    };
    NewClass.prototype.update = function (dt) {
        //console.log("ga.Name"+GA.Name);
        if (this.isClicked) {
            this.timer += dt;
            //console.log("isClicked : ",this.timer,this.isClicked);
        }
        //console.log("currentLevel is",globalVariables.Instance.currentLevel);
        this.value = this.timer / this.defaultTime;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").getChildByName("redRing").getComponent(cc.Sprite).fillRange = this.value;
        //console.log("value $$$$$$$$$$$ : "+this.value,this.timer);
        if (this.timer >= this.defaultTime) {
            globalVariables_1.default.Instance.totalTimer += this.timer;
            this.timer = 0;
            this.isClicked = false;
            this.isWrong = true;
            this.setProgressBar();
            this.hilightLeftAnswers();
            if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
                this.destroyAnswers();
                this.destroyOptions();
                cc.director.loadScene("endScreen");
            }
            else {
                globalVariables_1.default.Instance.currentLevel += 1;
                this.setScreen();
            }
        }
    };
    NewClass.prototype.finishedAnim = function (event) {
        //this.node.getChildByName("Options").getChildByName("particle").setPosition(this.node.getChildByName("bg").getChildByName("oneMany").x,this.node.getChildByName("bg").getChildByName("oneMany").y);
    };
    NewClass.prototype.callPositiveReaction = function () {
        //if(randomnumber == 1)
        //{
        var _this = this;
        if (globalVariables_1.default.Instance.currentLevel == 2 || globalVariables_1.default.Instance.currentLevel == 6) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction1"); //left
            this.node.getChildByName("Jockey").x = -475;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            this.scheduleOnce(function () {
                _this.node.getComponent(cc.AudioSource).clip = _this.positiveAudios[0];
                _this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 3 || globalVariables_1.default.Instance.currentLevel == 7) {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("positiveReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: 475 }).start();
            this.scheduleOnce(function () {
                _this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2"); //right
            }, 0.4);
            this.scheduleOnce(function () {
                _this.node.getComponent(cc.AudioSource).clip = _this.positiveAudios[0];
                _this.node.getComponent(cc.AudioSource).play();
            }, 1);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 4 || globalVariables_1.default.Instance.currentLevel == 8) {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("positiveReaction2");
            this.node.getChildByName("Jockey").x = -939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: -475 }).start();
            this.scheduleOnce(function () {
                _this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction2"); //right
            }, 0.4);
            this.scheduleOnce(function () {
                _this.node.getComponent(cc.AudioSource).clip = _this.positiveAudios[0];
                _this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 5) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("positiveReaction1"); //right
            this.node.getChildByName("Jockey").x = 475;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.scheduleOnce(function () {
                _this.node.getComponent(cc.AudioSource).clip = _this.positiveAudios[0];
                _this.node.getComponent(cc.AudioSource).play();
            }, 0.9);
        }
        this.node.getChildByName("Jockey").getComponent(cc.Animation).on('finished', this.finishanimation, this);
    };
    NewClass.prototype.callNegativeReaction = function () {
        var _this = this;
        this.canTouch = false;
        var randomnumber = this.getRandomNumber(0, 1);
        var currentAudioClip; //= this.negativeAudios[randomnumber];
        if (randomnumber == 0) {
            console.log("characterAppear--Gopal");
            this.isChar1 = true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").x = -475;
            this.node.getChildByName("Jockey").y = -101;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction1");
        }
        else {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("negativeReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: 475 }).start();
            this.scheduleOnce(function () {
                _this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            }, 0.4);
        }
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            _this.node.getComponent(cc.AudioSource).play();
        }, 0.9);
        this.node.getChildByName("Jockey").getComponent(cc.Animation).on('finished', this.negativefinishanimation, this);
        //this.node.getChildByName("Jockey").getComponent(dragonBones.Armature)
    };
    NewClass.prototype.finishanimation = function () {
        var _this = this;
        if (this.isChar1) {
            console.log("characterDisappear--Gopal");
            this.isChar1 = false;
        }
        else {
            console.log("characterDisappear--Mili");
        }
        this.scheduleOnce(function () {
            _this.scheduleOnce(function () {
                if (globalVariables_1.default.Instance.currentLevel <= 7) {
                    cc.director.loadScene((parseInt(cc.director.getScene().name) + 1).toString());
                }
                else {
                    cc.director.loadScene("endScreen");
                }
            }, 0.3);
        }, 1);
        this.node.getChildByName("Jockey").active = false;
        this.node.getChildByName("Jockey").getComponent(cc.Animation).off('finished', this.finishanimation, this);
    };
    NewClass.prototype.negativefinishanimation = function () {
        if (this.isChar1) {
            console.log("characterDisappear--Gopal");
            this.isChar1 = false;
        }
        else {
            console.log("characterDisappear--Mili");
        }
        this.node.getChildByName("Jockey").active = false;
        this.canTouch = true;
        this.node.getChildByName("Jockey").getComponent(cc.Animation).off('finished', this.negativefinishanimation, this);
    };
    NewClass.prototype.increaseprogress = function () {
        var _this = this;
        globalVariables_1.default.Instance.fillRange = globalVariables_1.default.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill")).to(0.5, { width: globalVariables_1.default.Instance.fillRange }).start();
        this.scheduleOnce(function () {
            _this.ShowStar();
        }, 0.5);
    };
    NewClass.prototype.ShowStar = function () {
        if (this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * 1 / this.totalLevels)) {
            console.log("starsEarned--1");
            this.node.getChildByName("progressBar").getChildByName("star").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star")).to(0.5, { scale: 0.3 }).start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * Math.ceil(this.totalLevels / 2) / this.totalLevels)) {
            console.log("starsEarned--2");
            this.node.getChildByName("progressBar").getChildByName("star2").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star2").active = true;
            this.node.getChildByName("progressBar").getChildByName("star3").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star3").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star2")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star3")).to(0.5, { scale: 0.3 }).start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill").width == 394) {
            console.log("starsEarned--3");
            this.node.getChildByName("progressBar").getChildByName("star4").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star5").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star6").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star4").active = true;
            this.node.getChildByName("progressBar").getChildByName("star5").active = true;
            this.node.getChildByName("progressBar").getChildByName("star6").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star4")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star5")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star6")).to(0.5, { scale: 0.3 }).start();
        }
    };
    NewClass.prototype.setProgressBar = function () {
        this.node.getChildByName("progressBarRound").y = globalVariables_1.default.Instance.canvasTopY - 60;
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").active = false;
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound1"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound1").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine1").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound1"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound1").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
                var rawNode = this.node.getChildByName("progressBarRound").getChildByName("rawRound1");
            }
            else {
                console.log("isright level 1");
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound1"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound1").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables_1.default.Instance.currentLevel == 2) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound2"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound2").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine2").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound2"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound2").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound2"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound2").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables_1.default.Instance.currentLevel == 3) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound3"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound3").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine3").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound3"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound3").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound3"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound3").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables_1.default.Instance.currentLevel == 4) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound4"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound4").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine4").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound4"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound4").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound4"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound4").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables_1.default.Instance.currentLevel == 5) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound5"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound5").active = true;
            this.node.getChildByName("progressBarRound").getChildByName("progressLine5").color = new cc.Color(222, 83, 83);
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound5"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound5").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound5"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound5").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
        else if (globalVariables_1.default.Instance.currentLevel == 6) {
            cc.tween(this.node.getChildByName("progressBarRound").getChildByName("rawRound6"))
                .to(0.2, { scale: 1.4 }, { easing: 'sineInOut' })
                .to(0.2, { scale: 1 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("progressBarRound").getChildByName("rawRound6").active = true;
            if (this.isWrong) {
                this.isWrong = false;
                // this.updateSprites("/wrongMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound6"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound6").getComponent(cc.Sprite).spriteFrame = this.wrongMark;
            }
            else {
                // this.updateSprites("/rightMark", this.node.getChildByName("progressBarRound").getChildByName("rawRound6"));
                this.node.getChildByName("progressBarRound").getChildByName("rawRound6").getComponent(cc.Sprite).spriteFrame = this.rightMark;
            }
        }
    };
    // updateSprites(_spriteName: string, _node: cc.Node) {
    //     cc.loader.loadRes(_spriteName, cc.SpriteFrame, function (err, spriteFrame: cc.SpriteFrame) {
    //         if (err) {
    //             cc.warn(err.message || err);
    //             return;
    //         }
    //         //console.log(_spriteName);
    //         _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    //     }.bind(this));
    // }
    NewClass.prototype.setRing = function () {
        this.node.getChildByName("progressBarRound").getChildByName("progressRing").active = true;
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound1").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound1").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound1").y);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 2) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound2").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound2").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound2").y);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 3) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound3").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound3").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound3").y);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 4) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound4").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound4").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound4").y);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 5) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound5").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound5").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound5").y);
        }
        else if (globalVariables_1.default.Instance.currentLevel == 6) {
            this.node.getChildByName("progressBarRound").getChildByName("rawRound6").active = false;
            this.node.getChildByName("progressBarRound").getChildByName("progressRing").setPosition(this.node.getChildByName("progressBarRound").getChildByName("rawRound6").x, this.node.getChildByName("progressBarRound").getChildByName("rawRound6").y);
        }
    };
    NewClass.prototype.hilightLeftAnswers = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            for (var j = 0; j < this.answers.length; j++) {
                if ((parseInt(this.node.getChildByName("Options").children[i].name) - 1) == this.answers[j]) {
                    this.node.getChildByName("Options").children[i].color = new cc.Color(71, 255, 0);
                    //console.log("Inside hilightLeftAnswers : "+this.node.getChildByName("Options").children[i].name);
                    if (this.node.getChildByName("Options").children[i].getChildByName("tick").active) {
                        // this.updateSprites("/whiteTick", this.node.getChildByName("Options").children[i].getChildByName("tick"));
                        this.node.getChildByName("Options").children[i].getChildByName("tick").getComponent(cc.Sprite).spriteFrame = this.whiteTick;
                    }
                    break;
                }
            }
        }
        // for(let i=0;i<this.answers.length;i++){
        //     if((parseInt(_node.name)-1)==this.answers[i]){
        //         isCorrect=true;
        //         break;
        //     }
        // }
    };
    NewClass.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    __decorate([
        property(cc.JsonAsset)
    ], NewClass.prototype, "answerObject", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "commonOptionImg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "whiteTick", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "yellowTick", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "rightMark", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "wrongMark", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "ring", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveSfx", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeSfx", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9nYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixxREFBZ0Q7QUFDaEQseUNBQW9DO0FBRzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcTJDQztRQS8xQ1csa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7UUFHMUIsa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0Isb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBSXBDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFFdkIsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDL0Isb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFF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YUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUcsRUFBRSxDQUFDLEtB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RSxDQUFDLFdBQVcsQ0FBQztnREFDaUI7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDZ0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDZ0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQXRFeEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXEyQzVCO0lBQUQsZUFBQztDQXIyQ0QsQUFxMkNDLENBcjJDcUMsRUFBRSxDQUFDLFNBQVMsR0FxMkNqRDtrQkFyMkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgSURhdGEgfSBmcm9tIFwiLi9JRGF0YVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3MgfSBmcm9tIFwiLi9nYVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxyXG4gICAgLy9wcml2YXRlIG5wY0pzb24gOiBjYy5Kc29uQXNzZXQgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgZGF0YTogSURhdGFbXSA9IFtuZXcgSURhdGFdO1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJPYmplY3Q6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWF4T3B0aW9uczogbnVtYmVyID0gNztcclxuICAgIHByaXZhdGUgU3ViSW1hZ2U6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdyb25nQW5zd2VyTGltaXQ6IG51bWJlciA9IDc7XHJcbiAgICBwcml2YXRlIGFuc3dlcnM6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uVHlwZTogc3RyaW5nID0gXCJjdXN0b21cIjtcclxuICAgIHByaXZhdGUgZmVlZGJhY2t0eXBlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY2FsZUFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG9wdGlvbkltYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgY29ycmVjdEF1ZGlvczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGlzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvcnJlY3RBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNEb25lOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZWRPcHRpb25zOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3JlYXRlZEFuc3dlcnM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDY7XHJcblxyXG4gICAgcHJpdmF0ZSB2aWV3UG9ydFdpZHRoOiBudW1iZXIgPSA3MjA7XHJcbiAgICBwcml2YXRlIHZpZXdQb3J0SGVpZ2h0OiBudW1iZXIgPSAxMjgwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpc0NoYXIxOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNGaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzV3Jvbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGRlZmF1bHRUaW1lOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcXVlc3Rpb25BdWRpb0ZpbGU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBjb3JyZWN0QXVkaW9zRmlsZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICAgIGFuc3dlck9iamVjdEZpbGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIG9wdGlvbkltYWdlc0ZpbGU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIGNvbW1vbk9wdGlvbkltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB3aGl0ZVRpY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgeWVsbG93VGljazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSByaWdodE1hcms6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd3JvbmdNYXJrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHJpbmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBvc2l0aXZlU2Z4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgbmVnYXRpdmVTZng6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy9wcml2YXRlIG5lZ2F0aXZlQXVkaW9zOmNjLkF1ZGlvQ2xpcFtdPVtdO1xyXG4gICAgLy9wcml2YXRlIG9wdGlvbkFuaW1hdGlvbnM6c3RyaW5nW109W107XHJcbiAgICAvL3ByaXZhdGUgb3B0aW9uQXVkaW9zOnN0cmluZ1tdPVtdO1xyXG5cclxuXHJcbiAgICAvL3ByaXZhdGUgZ2EgPSByZXF1aXJlKFwiZ2FcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkUXVlc3Rpb24oKSB7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhnYURhdGEpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJzdG9yeUJvYXJkXCIsIE9iamVjdCwgKF9lcnJvciwgX2pzb25GaWxlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChfZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBsZXQgX2pzb25EYXRhOiBvYmplY3QgPSBfanNvbkZpbGVbXCJqc29uXCJdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9qc29uRGF0YVtcImRhdGFcIl0pKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgUGxheVF1ZXN0aW9uKF9kYXRhOiBJRGF0YSk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vZ2EubmFtZTtcclxuXHJcblxyXG4gICAgICAgIC8vIGdhKCdldmVudCcsIFwiVGFwXCIsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJMaW5rXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiQ3JlYXRlIEdhbWVcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogPDE+XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInJlZFJpbmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyZWRSaW5nXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIyMiwgODMsIDgzKTtcclxuICAgICAgICB0aGlzLnNldFJpbmcoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLnkgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY2FudmFzVG9wWSAtIDYwO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgU3RhcnRlZFwiLFxyXG4gICAgICAgIC8vICAgICAndmFsdWUnOiAxXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkZGRkZGRkZGRAQEBAQEBAQEBAQFwiLHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSkpO1xyXG4gICAgICAgICAgICAvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgocGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSsxKS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlck9iamVjdFswXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFuc3dlck9iamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLnggPSB0aGlzLnZpZXdQb3J0V2lkdGggKiAyO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuICAgICAgICB9LCAwLjMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSGVyZSB0aGlzIHJlZmVycyB0byBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciA9PSBcIix0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcblxyXG4gICAgICAgIH0sIDAuNCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25BdWRpb0ZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMC42KTtcclxuICAgICAgICB9LCAwLjcpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPSAwO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsvLy8vL1xyXG5cclxuICAgICAgICB0aGlzLm1heE9wdGlvbnMgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5TdWJJbWFnZSA9IDA7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uSW1hZ2VOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5TdWJJbWFnZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJMaW1pdCA9IDI7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2Vycy5wdXNoKChwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtW2ldKSAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5hbnN3ZXJzID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5hbnN3ZXJzO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25UeXBlID0gXCJjdXN0b21cIjtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrdHlwZSA9IFtcImNvbmZldHRpXCJdO1xyXG4gICAgICAgIHRoaXMudG90YWxBbnN3ZXJzID0gdGhpcy5hbnN3ZXJzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25UZXh0O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lO1xyXG4gICAgICAgIHRoaXMudGV4dEFycmF5ID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uVGV4dHM7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3QgPSBbc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25JbWFnZU5hbWVdO1xyXG4gICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uSW1hZ2VzO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvcyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3M7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInBvc2l0aW9ucyA6XCIrdGhpcy5kYXRhWzBdLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5Mb2FkRGF0YUZyb21SZXNvdXJjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkRGF0YUZyb21SZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXVkaW9GaWxlID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyT2JqZWN0RmlsZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvbkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uSW1hZ2VzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNGaWxlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbaV0sIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9zRmlsZVtpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25BdWRpb0ZpbGUgPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3RGaWxlID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25JbWFnZXNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc0ZpbGVbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbaV0sIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb3NGaWxlW2ldID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgQ2hlY2tGb3JJc0RvbmUoX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSA9PSBfbm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG9uZVtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVG91Y2hTdGFydChfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2ggc3RhcnQgOiBcIik7XHJcbiAgICAgICAgbGV0IGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmIHRoaXMuaXNEb25lW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNTdG9wKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0NvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSUROdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChwYXJzZUludChfbm9kZS5uYW1lKSAtIDEpID09IHRoaXMuYW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUROdW0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw9PTEpeyAvLyBnYW1lIHNwZWNpZmljIGNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKF9ub2RlLm5hbWU9PVwiMVwiKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSBpZihfbm9kZS5uYW1lPT1cIjJcIil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NhbGVUd2VlbjEuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9zRmlsZVthdWRpb0lETnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjb3JyZWN0IGlzIGNsaWNrZWQgPSBcIixfbm9kZS5uYW1lKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeDogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKF9ub2RlKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeTogX25vZGUueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC4yLCB7IHk6IDY0MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlU2Z4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZlZWRiYWNrdHlwZS5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5DaGVja0ZvcklzRG9uZShfbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndyb25nIGlzIGNsaWNrZWQgPSBcIix0aGlzLmlzRG9uZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXMgbGV2ZWxlbmRcclxuICAgICAgICAgICAgbGV0IGxldmVsZW5kOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvLyAgICAgaWYoIXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5bdGhpcy5hbnN3ZXJzW2ldXS5hY3RpdmVJbkhpZXJhcmNoeSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vZm9yIGxldmVsIG9uZSBzcGVjaWZpYyBjYXNlXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxldmVsIENvbXBsZXRlZC4uLiEhISEhISEhIVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0QXVkaW9zRmlsZVthdWRpb0lETnVtXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSB0aGlzLmNvcnJlY3RBdWRpb3NGaWxlW2F1ZGlvSUROdW1dLmR1cmF0aW9uIC0gMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lciArPSB0aGlzLnRpbWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISEgZ2FtZSBmaW5pc2hlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY2FsbFBvc2l0aXZlUmVhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbENvbXBsZXRlZF9cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgQ29tcGxldGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAndmFsdWUnOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyICs9IHRoaXMudGltZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50TGV2ZWwgOiBcIixnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbGxQb3NpdGl2ZVJlYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRTY3JlZW4oKSB7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgLy8gZ3RhZygnZXZlbnQnLCBcIkxldmVsU3RhcnRlZF9cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJJbWFnZVwiLFxyXG4gICAgICAgIC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIFN0YXJ0ZWRcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlck9iamVjdFswXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQW5zd2VyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLnggPSB0aGlzLnZpZXdQb3J0V2lkdGggKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlT3B0aW9uT2JqZWN0KHRoaXMubWF4T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIHRoaXMgcmVmZXJzIHRvIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciA9PSBcIix0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvbkF1ZGlvRmlsZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNik7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgfSwgMC43KTtcclxuXHJcbiAgICAgICAgfSwgMik7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUFuc3dlck9iamVjdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlZCBBbnN3ZXJzIGJlZm9yZSA6IFwiK3RoaXMuY3JlYXRlZEFuc3dlcnMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc3dlck9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgIC8vbGV0IGFuc3dlck5vZGUgPSBuZXcgY2MuTm9kZTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0ubmFtZSA9IFwiQW5zXCIgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLnggPSB0aGlzLnZpZXdQb3J0V2lkdGggKiAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS55ID0gMTUwO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5hbnN3ZXJPYmplY3RbaV0sIHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hbnN3ZXJPYmplY3RGaWxlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLndpZHRoID0gMzAwO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLmhlaWdodCA9IDMwMDtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9wdGlvbk9iamVjdChudW1PZk9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgcG9zWDogbnVtYmVyW10gPSBbMjE1LCA0OTUsIDIxNSwgNDk1XTtcclxuICAgICAgICBsZXQgcG9zWTogbnVtYmVyW10gPSBbNzUwLCA3NTAsIDQ3MCwgNDcwXTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21cIjoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGVkIG9wdGlvbnMgOjo6OjpcIiwgdGhpcy5jcmVhdGVkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ubmFtZSA6IFwiLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyhpKzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uVGV4dHNbaV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5pbnNlcnRDaGlsZCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gdGhpcy52aWV3UG9ydFdpZHRoICogMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TdWJJbWFnZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1lbaV0gLT0gMjgwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnkgPSBwb3NZW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY29tbW9uT3B0aW9uSW1nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLmZvbnRTaXplID0gODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLmxpbmVIZWlnaHQgPSA4NTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25JbWFnZSAmJiBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRmlsZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKS55ID0gNjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikud2lkdGggPSAzNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuaGVpZ2h0ID0gMzUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikueSA9IC0xNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLmZvbnRTaXplID0gNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLmxpbmVIZWlnaHQgPSA3NTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25JbWFnZSAmJiAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm9wdGlvbkltYWdlc0ZpbGVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuaGVpZ2h0ID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAtMTcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5mb250U2l6ZSA9IDcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5saW5lSGVpZ2h0ID0gNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBwb3NYW2ldIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlcnMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLlVwZGF0ZUFuaW1hdGlvbnModGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLm9wdGlvbkltYWdlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBvc2l0aW9ucyA6IFwiLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCx0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGVkIG9wdGlvbnMgOiAqKioqKioqKipcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T3B0aW9ucygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4T3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IC10aGlzLnZpZXdQb3J0V2lkdGggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95QW5zd2VycygpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtdGhpcy52aWV3UG9ydFdpZHRoIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZWRBbnN3ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc3dlck9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtdGhpcy52aWV3UG9ydFdpZHRoICsgMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVhdGVkQW5zd2Vyc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc3dlck9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInN1YlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5hbnN3ZXJzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLnNldFBvc2l0aW9uKDAsIDMzMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLnNldFBvc2l0aW9uKDAsIDM1MCk7XHJcbiAgICAgICAgICAgIGxldCBzdWJxdWVzdGlvblN0cmluZyA9IFwiU2VsZWN0IHVwdG8gXCIgKyB0aGlzLmFuc3dlcnMubGVuZ3RoICsgXCIgT3B0aW9uc1wiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInN1YlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3VicXVlc3Rpb25TdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxOZWdhdGl2ZUZlZWRiYWNrKG5vZGUxOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ICs9IDE7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIC8vbGV0IHR3ZWVuMSA9ICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICBub2RlMS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMzIsIDMwLCA0Myk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCArIDEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggLSAxMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54IC0gMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjgpO1xyXG5cclxuICAgICAgICAvL2NhbGwgbmVnYXRpdmUgYXVkaW8gXHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLm5lZ2F0aXZlU291bmQ7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZVNmeCwgZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy90d2VlbjEuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy53cm9uZ0Fuc3dlckNvdW50ID49IHRoaXMud3JvbmdBbnN3ZXJMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jYWxsTmVnYXRpdmVSZWFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWxpZ2h0TGVmdEFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lciArPSB0aGlzLnRpbWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV3JvbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyICs9IHRoaXMudGltZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxsUG9zaXRpdmVGZWVkYmFjayhub2RlMTogY2MuTm9kZSwgZmVlZGJhY2tOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChmZWVkYmFja05hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZldHRpXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKG5vZGUxLngsbm9kZTEueSk7XHJcbiAgICAgICAgICAgICAgICBub2RlMS5jb2xvciA9IG5ldyBjYy5Db2xvcig3MSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKS5zZXRQb3NpdGlvbihub2RlMS54LCBub2RlMS55KTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21OdW0gPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFuZG9tTnVtXCIsIHJhbmRvbU51bSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tTnVtID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25mZXR0aVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNvbmZldHRpMlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5kZXN0cm95O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKC01MDAsLTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKS5zZXRQb3NpdGlvbigtNTAwLCAtNTAwKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZXh0cmEgY29kZSBcclxuICAgICAgICAgICAgICAgIGlmIChub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLCBub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2hpdGVUaWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImRlc3Ryb3lcIjoge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyBvcGFjaXR5OiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9yaWdodFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyB4OiB0aGlzLnZpZXdQb3J0V2lkdGggKyAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfbGVmdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiAtMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X3RvcFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMiwgeyB5OiB0aGlzLnZpZXdQb3J0SGVpZ2h0ICsgMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7IHg6IG5vZGUxLnggKyAzMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfYm90dG9tXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtMjgwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiBub2RlMS55ICsgMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogbm9kZTEueSAtIDUwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpOy8vYm91bmNlSW5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9BbmltYXRpb25cIjoge1xyXG4gICAgICAgICAgICAgICAgLy9nYW1lIHNwZWNpZmljIGNvZGVcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS54ID0gbm9kZTEueCArIDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnkgPSBub2RlMS55ICsgNTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueCA9IG5vZGUxLnggKyAyMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS55ID0gbm9kZTEueSArIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnNjYWxlID0gbm9kZTEuc2NhbGUgLSAwLjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZTEueD1ub2RlMS54KzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGUxLnk9bm9kZTEueSsyMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS5zY2FsZSA9IG5vZGUxLnNjYWxlICsgMC40O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbkNsaXA6IGNjLkFuaW1hdGlvbkNsaXAgLy89IHRoaXMub3B0aW9uQW5pbWF0aW9uc1twYXJzZUludChub2RlMS5uYW1lKS0xXTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmFkZENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuYWRkQ2xpcChhbmltYXRpb25DbGlwKTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYW5pbWF0aW9uQ2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vbm9kZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oJ2ZpbmlzaGVkJywgIHRoaXMuZmluaXNoZWRBbmltLCAgICB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF9TY2FsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3V0bGluZVNjYWxlID0gbm9kZTEuc2NhbGUgKyAobm9kZTEuc2NhbGUgKiAzMCAvIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihub2RlMS5zY2FsZTw9MC43KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZSsobm9kZTEuc2NhbGUvMik7XHJcbiAgICAgICAgICAgICAgICAvLyB9IFxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZihub2RlMS5zY2FsZT49MC43JiZub2RlMS5zY2FsZTw9MC45KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAgICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlLTAuNDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJvdXRsaW5lXCIpLnNjYWxlID0gb3V0bGluZVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJvdXRsaW5lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG91dGxpbmVTY2FsZSArIDAuMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiBvdXRsaW5lU2NhbGUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZnJhbWVDaGFuZ2VcIjoge1xyXG4gICAgICAgICAgICAgICAgLy9ub2RlMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogbm9kZTEuc2NhbGUgKyAwLjEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogbm9kZTEuc2NhbGUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwic2hha2VcIjoge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3ZWVuMSA9IGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54ICsgMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0d2VlbjEuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfY2VudGVyXCI6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPdGhlck9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUxLm5hbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgeDogbm9kZTEueCAtIDMyNSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUxLm5hbWUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgeDogbm9kZTEueCArIDMyNSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU90aGVyT3B0aW9ucygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJiAoIXRoaXMuaXNEb25lW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2EuTmFtZVwiK0dBLk5hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXNDbGlja2VkIDogXCIsdGhpcy50aW1lcix0aGlzLmlzQ2xpY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50TGV2ZWwgaXNcIixnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy50aW1lciAvIHRoaXMuZGVmYXVsdFRpbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInJlZFJpbmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidmFsdWUgJCQkJCQkJCQkJCQgOiBcIit0aGlzLnZhbHVlLHRoaXMudGltZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuZGVmYXVsdFRpbWUpIHtcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXIgKz0gdGhpcy50aW1lcjtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5oaWxpZ2h0TGVmdEFuc3dlcnMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjcmVlbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZpbmlzaGVkQW5pbShldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uZU1hbnlcIikueCx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uZU1hbnlcIikueSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxsUG9zaXRpdmVSZWFjdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy9pZihyYW5kb21udW1iZXIgPT0gMSlcclxuICAgICAgICAvL3tcclxuXHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMiB8fCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLUdvcGFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3NpdGl2ZVJlYWN0aW9uMVwiKTsvL2xlZnRcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSAtNDc1O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xNDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAtMS41O1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgfSwgMC45KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzIHx8IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvc2l0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoXCJwb3NpdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSA5Mzk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTE0MTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IDEuNTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKS50bygwLjMsIHsgeDogNDc1IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9zaXRpdmVSZWFjdGlvbjJcIik7Ly9yaWdodFxyXG4gICAgICAgICAgICB9LCAwLjQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb3NbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1NaWxpXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9zaXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wYXVzZShcInBvc2l0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IC05Mzk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTE0MTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKSkudG8oMC4zLCB7IHg6IC00NzUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3NpdGl2ZVJlYWN0aW9uMlwiKTsvL3JpZ2h0XHJcbiAgICAgICAgICAgIH0sIDAuNCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICB9LCAwLjkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLUdvcGFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3NpdGl2ZVJlYWN0aW9uMVwiKTsvL3JpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gNDc1O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xNDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICB9LCAwLjkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbignZmluaXNoZWQnLCB0aGlzLmZpbmlzaGFuaW1hdGlvbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByYW5kb21udW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAxKTtcclxuICAgICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwIC8vPSB0aGlzLm5lZ2F0aXZlQXVkaW9zW3JhbmRvbW51bWJlcl07XHJcbiAgICAgICAgaWYgKHJhbmRvbW51bWJlciA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Hb3BhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gLTQ3NTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gLTEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJuZWdhdGl2ZVJlYWN0aW9uMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1NaWxpXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wYXVzZShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IDkzOTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTQxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVZID0gMS41O1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikpLnRvKDAuMywgeyB4OiA0NzUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSBjdXJyZW50QXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgfSwgMC45KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKCdmaW5pc2hlZCcsIHRoaXMubmVnYXRpdmVmaW5pc2hhbmltYXRpb24sIHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmluaXNoYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hhcjEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLUdvcGFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1NaWxpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA8PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKChwYXJzZUludChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vZmYoJ2ZpbmlzaGVkJywgdGhpcy5maW5pc2hhbmltYXRpb24sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgbmVnYXRpdmVmaW5pc2hhbmltYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFyMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tR29wYWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFyMSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLU1pbGlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub2ZmKCdmaW5pc2hlZCcsIHRoaXMubmVnYXRpdmVmaW5pc2hhbmltYXRpb24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlcHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmZpbGxSYW5nZSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKiAoMzk0IC8gdGhpcy50b3RhbExldmVscyk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpKS50bygwLjUsIHsgd2lkdGg6IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5maWxsUmFuZ2UgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2hvd1N0YXIoKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dTdGFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gKDM5NCAqIDEgLyB0aGlzLnRvdGFsTGV2ZWxzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gKDM5NCAqIE1hdGguY2VpbCh0aGlzLnRvdGFsTGV2ZWxzIC8gMikgLyB0aGlzLnRvdGFsTGV2ZWxzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIyXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIyXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikud2lkdGggPT0gMzk0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjVcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjZcIikpLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikueSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNUb3BZIC0gNjA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0xpbmUxXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIyMiwgODMsIDgzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNXcm9uZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd3JvbmdNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud3JvbmdNYXJrO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhd05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc3JpZ2h0IGxldmVsIDFcIilcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi9yaWdodE1hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yaWdodE1hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0xpbmUyXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIyMiwgODMsIDgzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNXcm9uZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd3JvbmdNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMlwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud3JvbmdNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3JpZ2h0TWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0TWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzTGluZTNcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjIyLCA4MywgODMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1dyb25nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi93cm9uZ01hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQzXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53cm9uZ01hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvcmlnaHRNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmlnaHRNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS40IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NMaW5lNFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMjIsIDgzLCA4Myk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV3JvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3dyb25nTWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDRcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndyb25nTWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi9yaWdodE1hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yaWdodE1hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0xpbmU1XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIyMiwgODMsIDgzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNXcm9uZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd3JvbmdNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud3JvbmdNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3JpZ2h0TWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0TWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDYpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNlwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNXcm9uZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd3JvbmdNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNlwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud3JvbmdNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3JpZ2h0TWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0TWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVTcHJpdGVzKF9zcHJpdGVOYW1lOiBzdHJpbmcsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3Nwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgIC8vICAgICAgICAgaWYgKGVycikge1xyXG4gICAgLy8gICAgICAgICAgICAgY2Mud2FybihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coX3Nwcml0ZU5hbWUpO1xyXG4gICAgLy8gICAgICAgICBfbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgLy8gICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2V0UmluZygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikueCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKS55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMlwiKS54LCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQzXCIpLngsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDRcIikueCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKS55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNVwiKS54LCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpLngsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpbGlnaHRMZWZ0QW5zd2VycygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmFuc3dlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgocGFyc2VJbnQodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lKSAtIDEpID09IHRoaXMuYW5zd2Vyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uY29sb3IgPSBuZXcgY2MuQ29sb3IoNzEsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkluc2lkZSBoaWxpZ2h0TGVmdEFuc3dlcnMgOiBcIit0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53aGl0ZVRpY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICBpZigocGFyc2VJbnQoX25vZGUubmFtZSktMSk9PXRoaXMuYW5zd2Vyc1tpXSl7XHJcbiAgICAgICAgLy8gICAgICAgICBpc0NvcnJlY3Q9dHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92529e0bmlFg4etSHkGHN2l', 'globalVariables');
// TapToFind/Scripts/globalVariables.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.animationEntry = "";
        _this.animationStayEffect = "";
        _this.animationExit = "";
        _this.currentLevel = 1;
        _this.canvasTopY = 0;
        _this.canvasLeftX = 0;
        _this.rightAnswerCount = 0;
        _this.totalTimer = 0;
        _this.playerID = "ID_default";
        //public ga;
        _this.fillRange = 1;
        return _this;
    }
    globalVariables_1 = globalVariables;
    // LIFE-CYCLE CALLBACKS:
    globalVariables.prototype.onLoad = function () {
        globalVariables_1.instance = this;
    };
    Object.defineProperty(globalVariables, "Instance", {
        get: function () {
            return globalVariables_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    globalVariables.prototype.start = function () {
    };
    globalVariables.prototype.update = function (dt) {
    };
    var globalVariables_1;
    globalVariables.instance = null;
    __decorate([
        property(cc.Label)
    ], globalVariables.prototype, "label", void 0);
    __decorate([
        property
    ], globalVariables.prototype, "text", void 0);
    globalVariables = globalVariables_1 = __decorate([
        ccclass
    ], globalVariables);
    return globalVariables;
}(cc.Component));
exports.default = globalVariables;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9nbG9iYWxWYXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR2hCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLHlCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyxtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLFlBQVksQ0FBQztRQUN2QyxZQUFZO1FBRUwsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzQmpDLENBQUM7d0JBMUNvQixlQUFlO0lBc0JoQyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLGlCQUFlLENBQUMsUUFBUSxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTDtJQUlBLENBQUM7SUFHRCxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7O0lBcEJjLHdCQUFRLEdBQW1CLElBQUksQ0FBQztJQWxCL0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7aURBQ2M7SUFOTixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMENuQztJQUFELHNCQUFDO0NBMUNELEFBMENDLENBMUM0QyxFQUFFLENBQUMsU0FBUyxHQTBDeEQ7a0JBMUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxWYXJpYWJsZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGFuaW1hdGlvbkVudHJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXlFZmZlY3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uRXhpdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgY2FudmFzVG9wWTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNMZWZ0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByaWdodEFuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheWVySUQ6IHN0cmluZyA9IFwiSURfZGVmYXVsdFwiO1xyXG4gICAgLy9wdWJsaWMgZ2E7XHJcblxyXG4gICAgcHVibGljIGZpbGxSYW5nZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOmdsb2JhbFZhcmlhYmxlcyA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsVmFyaWFibGVzLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1734yGyoRLAJc6pq/Ly4ow', 'endScreen');
// TapToFind/Scripts/endScreen.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.filling1 = 0;
        _this.filling2 = 0;
        _this.filling3 = 0;
        _this.showNum1 = 0;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.currentTween = 0;
        _this.playerScore = 0;
        return _this;
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.getChildByName("btn_share").y = globalVariables_1.default.Instance.canvasTopY;
        //console.log("timer "+globalVariables.Instance.totalTimer);
        //globalVariables.Instance.totalTimer = 190;
        //globalVariables.Instance.rightAnswerCount = 1;
        this.findPlayerScore();
        this.currentTween = 1;
        this.node.getChildByName("averageParentMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.node.getChildByName("averageKidsMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.node.getChildByName("playerMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.num1 = this.getRandomNumber(50, 75);
        this.setFillingRange("1");
        this.num2 = this.getRandomNumber(80, 90);
        this.setFillingRange("2");
        this.setFillingRange("3");
        cc.tween(this.node.getChildByName("averageParentMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: this.filling1 }).start();
        //this.node.getComponent(cc.AudioSource).play();
        this.scheduleOnce(function () {
            _this.currentTween = 2;
            _this.showNum1 = 0;
            //this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("averageKidsMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: _this.filling2 }).start();
        }, 2);
        this.scheduleOnce(function () {
            _this.currentTween = 3;
            _this.showNum1 = 0;
            //this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("playerMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: _this.filling3 }).start();
        }, 4);
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.update = function (dt) {
        if (this.showNum1 < this.num1 && this.currentTween == 1) {
            this.showNum1 += 1;
            this.node.getChildByName("averageParentMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = (Math.round(this.showNum1)).toString();
            if (this.showNum1 == this.num1) {
            }
        }
        if (this.showNum1 < this.num2 && this.currentTween == 2) {
            this.showNum1 += 1;
            this.node.getChildByName("averageKidsMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = (Math.round(this.showNum1)).toString();
            if (this.showNum1 == this.num2) {
                //this.currentTween = 3;
                //this.showNum1 = 0;
            }
        }
        if (this.showNum1 < this.playerScore && this.currentTween == 3) {
            this.showNum1 += 1;
            this.node.getChildByName("playerMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = (Math.round(this.showNum1)).toString();
            if (this.showNum1 == this.playerScore) {
                //this.currentTween = 3;
                //this.showNum1 = 0;
            }
        }
    };
    NewClass.prototype.findPlayerScore = function () {
        if (globalVariables_1.default.Instance.rightAnswerCount == 6) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 100;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 95;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 90;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 90;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 80;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 70;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 55;
            }
        }
        else if (globalVariables_1.default.Instance.rightAnswerCount == 5) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 95;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 85;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 75;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 65;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 62;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 60;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 35;
            }
        }
        else if (globalVariables_1.default.Instance.rightAnswerCount == 4) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 65;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 62;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 60;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 50;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 40;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 20;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 18;
            }
        }
        else if (globalVariables_1.default.Instance.rightAnswerCount == 3) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 50;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 40;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 30;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 25;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 20;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 12;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 10;
            }
        }
        else if (globalVariables_1.default.Instance.rightAnswerCount == 2) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 25;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 20;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 15;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 22;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 18;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 8;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 4;
            }
        }
        else if (globalVariables_1.default.Instance.rightAnswerCount == 1) {
            if (globalVariables_1.default.Instance.totalTimer <= 10) {
                this.playerScore = 12;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 11 && globalVariables_1.default.Instance.totalTimer <= 30) {
                this.playerScore = 10;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 31 && globalVariables_1.default.Instance.totalTimer <= 50) {
                this.playerScore = 8;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 51 && globalVariables_1.default.Instance.totalTimer <= 60) {
                this.playerScore = 4;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 61 && globalVariables_1.default.Instance.totalTimer <= 90) {
                this.playerScore = 2;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 91 && globalVariables_1.default.Instance.totalTimer <= 120) {
                this.playerScore = 2;
            }
            else if (globalVariables_1.default.Instance.totalTimer >= 121) {
                this.playerScore = 1;
            }
        }
        else {
            this.playerScore = 0;
        }
    };
    NewClass.prototype.setFillingRange = function (name) {
        if (name == "1") {
            this.filling1 = this.num1 * (0.5 / 100);
        }
        else if (name == "2") {
            this.filling2 = this.num2 * (0.5 / 100);
        }
        else if (name == "3") {
            this.filling3 = this.playerScore * (0.5 / 100);
            gtag('event', "PlayerScore", {
                'event_category': "Image",
                'event_label': "Player Score",
                'value': this.playerScore
            });
        }
    };
    NewClass.prototype.callMoreQuizes = function (event) {
        var name = event.target.getChildByName("text").getComponent(cc.Label).string;
        console.log(name);
        gtag('event', name, {
            'event_category': "Image",
            'event_label': "More Quiz Selection",
            'value': this.playerScore
        });
        if (event.target.name == "sub1") {
            cc.sys.openURL("https://quiz.littlesingham.me/geography/");
        }
        else if (event.target.name == "sub2") {
            cc.sys.openURL("https://quiz.littlesingham.me/science/");
        }
        else if (event.target.name == "sub3") {
            cc.sys.openURL("https://quiz.littlesingham.me/independenceday/");
        }
        else if (event.target.name == "sub4") {
            cc.sys.openURL("https://quiz.littlesingham.me/countriesandflags/");
        }
        else if (event.target.name == "sub5") {
            cc.sys.openURL("https://quiz.littlesingham.me/nationalsymbols/");
        }
    };
    NewClass.prototype.callShareAPI = function () {
        //console.log("call  share api$$$$$$");
        var text1 = "Let's see if you can beat my score in this fun trivia?";
        //let text2 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        //let text3 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        //let text4 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        var textArray = [text1];
        //let textArray = [text1, text2, text3, text4];
        var n1 = Math.floor(Math.random() * textArray.length);
        if (navigator.share) {
            navigator.share({
                title: 'How big a science buff are you?',
                text: textArray[n1],
                url: 'https://quiz.littlesingham.me/independenceday',
            })
                .then(function () { return console.log('Successful share'); })
                .
                    catch(function (error) { return console.log('Error sharing', error); });
        }
    };
    NewClass.prototype.shareImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, blob, filesArray, shareData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/rectangle")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        blob = _a.sent();
                        filesArray = [
                            new File([blob], '/TapToFind/assets/sharepic.jpg', {
                                type: "image/jpeg",
                                lastModified: new Date().getTime()
                            })
                        ];
                        shareData = {
                            files: filesArray,
                        };
                        navigator.share(shareData);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "progress", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9lbmRTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaVVDO1FBNVRHLHdCQUF3QjtRQUNoQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBVyxHQUFXLENBQUMsQ0FBQzs7SUFvVHBDLENBQUM7SUFsVEcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFBQSxpQkFxQ0M7UUFwQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUM5RSw0REFBNEQ7UUFDNUQsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFD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QkFBcEMsUUFBUSxHQUFHLFNBQXlCO3dCQUM3QixxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQzVCLFVBQVUsR0FBRzs0QkFDakIsSUFBSSxJQUFJLENBQ04sQ0FBQyxJQUFJLENBQUMsRUFDTixnQ0FBZ0MsRUFDaEM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs2QkFDbkMsQ0FDSDt5QkFDRCxDQUFDO3dCQUNJLFNBQVMsR0FBRzs0QkFDaEIsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCLENBQUM7d0JBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7S0FDOUI7SUExVEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUpiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpVTVCO0lBQUQsZUFBQztDQWpVRCxBQWlVQyxDQWpVcUMsRUFBRSxDQUFDLFNBQVMsR0FpVWpEO2tCQWpVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vU3RhcnRHYW1lXCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3M6Y2MuQXVkaW9DbGlwO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIGZpbGxpbmcxOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmaWxsaW5nMjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmlsbGluZzM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNob3dOdW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0yOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VHdlZW46IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBsYXllclNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc2hhcmVcIikueSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNUb3BZO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0aW1lciBcIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcik7XHJcbiAgICAgICAgLy9nbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lciA9IDE5MDtcclxuICAgICAgICAvL2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50ID0gMTtcclxuICAgICAgICB0aGlzLmZpbmRQbGF5ZXJTY29yZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR3ZWVuID0gMTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlUGFyZW50TWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXZlcmFnZUtpZHNNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLm51bTEgPSB0aGlzLmdldFJhbmRvbU51bWJlcig1MCw3NSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRGaWxsaW5nUmFuZ2UoXCIxXCIpO1xyXG4gICAgICAgIHRoaXMubnVtMiA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDgwLDkwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEZpbGxpbmdSYW5nZShcIjJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRGaWxsaW5nUmFuZ2UoXCIzXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlUGFyZW50TWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjaGlsZFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkudG8oMSwgeyBmaWxsUmFuZ2U6IHRoaXMuZmlsbGluZzEgfSkuc3RhcnQoKTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUd2VlbiA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd051bTEgPSAwO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXZlcmFnZUtpZHNNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcImNoaWxkXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKS50bygxLCB7IGZpbGxSYW5nZTogdGhpcy5maWxsaW5nMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFR3ZWVuID0gMztcclxuICAgICAgICAgICAgdGhpcy5zaG93TnVtMSA9IDA7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcImNoaWxkXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKS50bygxLCB7IGZpbGxSYW5nZTogdGhpcy5maWxsaW5nMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjpudW1iZXIsbWF4Om51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2hvd051bTE8IHRoaXMubnVtMSAmJiB0aGlzLmN1cnJlbnRUd2Vlbj09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd051bTErPTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF2ZXJhZ2VQYXJlbnRNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9KE1hdGgucm91bmQodGhpcy5zaG93TnVtMSkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2hvd051bTE9PXRoaXMubnVtMSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNob3dOdW0xPCB0aGlzLm51bTIgJiYgdGhpcy5jdXJyZW50VHdlZW49PTIpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOdW0xKz0xO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlS2lkc01ldGVyXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZE51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0oTWF0aC5yb3VuZCh0aGlzLnNob3dOdW0xKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zaG93TnVtMT09dGhpcy5udW0yKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50VHdlZW4gPSAzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3dOdW0xID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNob3dOdW0xPCB0aGlzLnBsYXllclNjb3JlICYmIHRoaXMuY3VycmVudFR3ZWVuPT0zKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93TnVtMSs9MTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyTWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPShNYXRoLnJvdW5kKHRoaXMuc2hvd051bTEpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNob3dOdW0xPT10aGlzLnBsYXllclNjb3JlKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50VHdlZW4gPSAzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3dOdW0xID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGxheWVyU2NvcmUoKXtcclxuICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudD09Nil7XHJcbiAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gOTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA5MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj01MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTYxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD05MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50PT01KXtcclxuICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA5NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDg1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTMxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD01MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTYwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA2NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTkxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTEyMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMzU7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudD09NCl7XHJcbiAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTMwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA2MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0zMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTUxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD02MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NjEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTkwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj05MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTIwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMjEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE4O1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnJpZ2h0QW5zd2VyQ291bnQ9PTMpe1xyXG4gICAgICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAzMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj01MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDI1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTYxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD05MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50PT0yKXtcclxuICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTMxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD01MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTYwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTkxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnJpZ2h0QW5zd2VyQ291bnQ9PTEpe1xyXG4gICAgICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTUxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD02MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMjEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbGxpbmdSYW5nZShuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIGlmKG5hbWUgPT0gXCIxXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxpbmcxPXRoaXMubnVtMSAqICgwLjUvMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYW1lID09IFwiMlwiKXtcclxuICAgICAgICAgICAgdGhpcy5maWxsaW5nMj10aGlzLm51bTIgKiAoMC41LzEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobmFtZSA9PSBcIjNcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbGluZzM9dGhpcy5wbGF5ZXJTY29yZSAqICgwLjUvMTAwKTtcclxuICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCBcIlBsYXllclNjb3JlXCIsIHtcclxuICAgICAgICAgICAgICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiUGxheWVyIFNjb3JlXCIsXHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnBsYXllclNjb3JlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjYWxsTW9yZVF1aXplcyhldmVudDpjYy5FdmVudCl7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIGd0YWcoJ2V2ZW50JywgbmFtZSwge1xyXG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiTW9yZSBRdWl6IFNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnBsYXllclNjb3JlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWIxXCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL2dlb2dyYXBoeS9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWIyXCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL3NjaWVuY2UvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwic3ViM1wiKXtcclxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3F1aXoubGl0dGxlc2luZ2hhbS5tZS9pbmRlcGVuZGVuY2VkYXkvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwic3ViNFwiKXtcclxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3F1aXoubGl0dGxlc2luZ2hhbS5tZS9jb3VudHJpZXNhbmRmbGFncy9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWI1XCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL25hdGlvbmFsc3ltYm9scy9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxTaGFyZUFQSSgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FsbCAgc2hhcmUgYXBpJCQkJCQkXCIpO1xyXG4gICAgICAgIGxldCB0ZXh0MSA9IFwiTGV0J3Mgc2VlIGlmIHlvdSBjYW4gYmVhdCBteSBzY29yZSBpbiB0aGlzIGZ1biB0cml2aWE/XCJcclxuICAgICAgICAvL2xldCB0ZXh0MiA9IFwiVGFrZSB0aGlzIFNjaWVuY2UgVHJpdmlhLiBJZiB5b3Ugc2NvcmUgNTAlIGFuZCBhYm92ZSwgdGFrZSBhIGJvdywgeW91IGFyZSBhIGNlcnRpZmllZCBHRU5JVVMhXCI7XHJcbiAgICAgICAgLy9sZXQgdGV4dDMgPSBcIlRha2UgdGhpcyBTY2llbmNlIFRyaXZpYS4gSWYgeW91IHNjb3JlIDUwJSBhbmQgYWJvdmUsIHRha2UgYSBib3csIHlvdSBhcmUgYSBjZXJ0aWZpZWQgR0VOSVVTIVwiO1xyXG4gICAgICAgIC8vbGV0IHRleHQ0ID0gXCJUYWtlIHRoaXMgU2NpZW5jZSBUcml2aWEuIElmIHlvdSBzY29yZSA1MCUgYW5kIGFib3ZlLCB0YWtlIGEgYm93LCB5b3UgYXJlIGEgY2VydGlmaWVkIEdFTklVUyFcIjtcclxuICAgICAgICBsZXQgdGV4dEFycmF5ID0gW3RleHQxXTtcclxuICAgICAgICAvL2xldCB0ZXh0QXJyYXkgPSBbdGV4dDEsIHRleHQyLCB0ZXh0MywgdGV4dDRdO1xyXG4gICAgICAgIGxldCBuMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRleHRBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNoYXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG93IGJpZyBhIHNjaWVuY2UgYnVmZiBhcmUgeW91PycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0QXJyYXlbbjFdLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9xdWl6LmxpdHRsZXNpbmdoYW0ubWUvaW5kZXBlbmRlbmNlZGF5JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJykpXHJcbiAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgIGNhdGNoICgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hhcmVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9yZWN0YW5nbGVcIik7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICBjb25zdCBmaWxlc0FycmF5ID0gW1xyXG4gICAgICAgICAgbmV3IEZpbGUoXHJcbiAgICAgICAgICAgIFtibG9iXSxcclxuICAgICAgICAgICAgJy9UYXBUb0ZpbmQvYXNzZXRzL3NoYXJlcGljLmpwZycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL2pwZWdcIixcclxuICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgc2hhcmVEYXRhID0ge1xyXG4gICAgICAgICAgZmlsZXM6IGZpbGVzQXJyYXksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuYXZpZ2F0b3Iuc2hhcmUoc2hhcmVEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/titleScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b451edfN1IC5ypF1ihK51X', 'titleScript');
// TapToFind/Scripts/titleScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
    };
    NewClass.prototype.start = function () {
        // globalVariables.Instance.currentLevel = 1;
        // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        // }, 3);
        //cc.director.loadScene("endScreen");
        this.schedule(function () {
            this.timer += 1;
        }, 1);
        this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string = "Pick an Avatar";
        cc.tween(this.node.getChildByName("profiles").getChildByName("subProfiles"))
            .to(1, { x: 0 }, { easing: 'sineInOut' }).start();
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        //     this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string="Pick an Avatar";
        // }, 2.5);
    };
    NewClass.prototype.setProfilePic = function (event) {
        // ga(
        //     'send',
        //     'event',
        //     ["Image"],
        //     ["Tap"],
        //     ["Select Profile"],
        //     [1]
        // );
        var _this = this;
        gtag('event', "Profile_Selection", {
            'event_category': "Image",
            'event_label': "Select Profile",
            'value': 1
        });
        if (!this.profileSet) {
            this.profileSet = true;
            //console.log(event.target.name);
            globalVariables_1.default.Instance.playerID = event.target.name;
            cc.tween(event.target)
                .to(1, { x: this.node.getChildByName("profiles").getChildByName("mainProfile").x }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { y: this.node.getChildByName("profiles").getChildByName("mainProfile").y + 266 }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { width: this.node.getChildByName("profiles").getChildByName("mainProfile").width }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { height: this.node.getChildByName("profiles").getChildByName("mainProfile").height }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string = "Get 4/6 questions correct?";
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(5, { width: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(function () {
                if (!_this.titleProgressDone) {
                    _this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
                }
            }, 5);
        }
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.timer >= 5 && this.userAction) {
            this.timer = 0;
            //this.isClicked = false;
            this.userAction = false;
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(3, { width: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(function () {
                if (!_this.titleProgressDone) {
                    _this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
                }
            }, 5);
        }
    };
    NewClass.prototype.callGamePlay = function () {
        if (!this.titleProgressDone && this.profileSet) {
            this.titleProgressDone = true;
            cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy90aXRsZVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSEM7UUFuSEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsZ0JBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsdUJBQWlCLEdBQWEsS0FBSyxDQUFDO1FBQ3BDLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBMkczQixDQUFDO0lBdkdHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksNkVBQTZFO0lBQ2pGLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksNkNBQTZDO1FBQzdDLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsK0VBQStFO1FBQy9FLFNBQVM7UUFFVCxxQ0FBcUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxnQkFBZ0IsQ0FBQztRQUMzRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJ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LENBQUMsQ0FBQztTQUVUO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNMLENBQUM7SUFsSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0g1QjtJQUFELGVBQUM7Q0F0SEQsQUFzSEMsQ0F0SHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0hqRDtrQkF0SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9maWxlU2V0IDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB1c2VyQWN0aW9uIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHRpdGxlUHJvZ3Jlc3NEb25lIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjpudW1iZXI9MDtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyKz0xO1xyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFkaW5nXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCJQaWNrIGFuIEF2YXRhclwiO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwic3ViUHJvZmlsZXNcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiUGljayBhbiBBdmF0YXJcIjtcclxuICAgICAgICAvLyB9LCAyLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzZXRQcm9maWxlUGljKGV2ZW50OiBjYy5FdmVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZ2EoXHJcbiAgICAgICAgLy8gICAgICdzZW5kJyxcclxuICAgICAgICAvLyAgICAgJ2V2ZW50JyxcclxuICAgICAgICAvLyAgICAgW1wiSW1hZ2VcIl0sXHJcbiAgICAgICAgLy8gICAgIFtcIlRhcFwiXSxcclxuICAgICAgICAvLyAgICAgW1wiU2VsZWN0IFByb2ZpbGVcIl0sXHJcbiAgICAgICAgLy8gICAgIFsxXVxyXG4gICAgICAgIC8vICk7XHJcblxyXG5cclxuICAgICAgICBndGFnKCdldmVudCcsIFwiUHJvZmlsZV9TZWxlY3Rpb25cIiwge1xyXG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiU2VsZWN0IFByb2ZpbGVcIixcclxuICAgICAgICAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighdGhpcy5wcm9maWxlU2V0KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlU2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5wbGF5ZXJJRCA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikueSsyNjYgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHdpZHRoOiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLndpZHRoIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBoZWlnaHQ6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikuaGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiR2V0IDQvNiBxdWVzdGlvbnMgY29ycmVjdD9cIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlUHJvZ3Jlc3NcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKSlcclxuICAgICAgICAgICAgICAgIC50byg1LCB7IHdpZHRoOiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PTUgJiYgdGhpcy51c2VyQWN0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcj0wO1xyXG4gICAgICAgICAgICAvL3RoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVByb2dyZXNzXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMywgeyB3aWR0aDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHYW1lUGxheSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlUHJvZ3Jlc3NEb25lICYmIHRoaXMucHJvZmlsZVNldCl7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86ce8/R5uZKp6N43HE2XR9U', 'StartGame');
// TapToFind/Scripts/StartGame.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentScore = 0;
        _this.currentHealth = 10;
        _this.isLoaded = false;
        _this.mainBg = null;
        _this.jockey = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.totalLevels = 7;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.templateType = "";
        _this.optionLayout = "horizontal";
        _this.questions = [];
        return _this;
        //update (dt) {}
    }
    startGame_1 = startGame;
    Object.defineProperty(startGame, "Instance", {
        get: function () {
            return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    startGame.prototype.onLoad = function () {
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
        });
        cc.game.addPersistRootNode(this.node);
        //cc.game.removePersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
    };
    startGame.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, '');
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    };
    startGame.prototype.updateJSONdata = function () {
        var _this = this;
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get('json');
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            this.gameID = jsonData.additionalData.GameID;
            var levelCount = jsonData.additionalData.totalLevel;
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
            this.questions.forEach(function (question) {
                question.questionImageName = question.questionImageName;
            });
            // Now you can use these variables within this script
            // this.logData();
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                _this.gameID = jsonData.additionalData.GameID;
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                // this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                // this.loadSpriteFrame(this.removeExtension(jsonData.additionalData.TitleImageName), (spriteFrame) => {
                //     cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                // });
                _this.questions.forEach(function (question) {
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    if (question.isOptionImage) {
                        question.optionImages = question.optionImages.map(function (option) { return _this.removeExtension(option); });
                    }
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
            });
        }
    };
    startGame.prototype.start = function () {
        console.log("logEvent--showedScreen--Title");
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
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id_1, this.volume);
        }
        var ageValue = parseInt(age);
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
            globalVariables_1.default.Instance.currentLevel = parseInt(level);
        }
        else {
            globalVariables_1.default.Instance.currentLevel = 1;
        }
        cc.director.preloadScene(globalVariables_1.default.Instance.currentLevel.toString());
        //cc.director.loadScene("endScreen");
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            var id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
            console.log("soundSetting--true");
        }
        else {
            this.isMusicOn = false;
            event.target.children[0].active = true;
            cc.audioEngine.stopMusic();
            console.log("soundSetting--false");
        }
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
    startGame.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    startGame.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "volume", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "jockey", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "totalLevels", void 0);
    startGame = startGame_1 = __decorate([
        ccclass
    ], startGame);
    return startGame;
}(cc.Component));
exports.default = startGame;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9TdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBNEIxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXVRQztRQXBRRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUluQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUM1QixvQ0FBb0M7UUFDNUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFDcEMsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsZUFBUyxHQUFtQixFQUFFLENBQUM7O1FBNk4v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LEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUE2QztRQUMxRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNwRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBdlBjLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBVjFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZDQUNJO0lBZXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFRdkI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBNUJQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1UTdCO0lBQUQsZ0JBQUM7Q0F2UUQsQUF1UUMsQ0F2UXNDLEVBQUUsQ0FBQyxTQUFTLEdBdVFsRDtrQkF2UW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuICAgIEdhbWVJRDogc3RyaW5nO1xyXG4gICAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gICAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICAgIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gICAgc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW86IGJvb2xlYW47XHJcbiAgICBpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcbiAgICBpc09wdGlvbkltYWdlOiBib29sZWFuO1xyXG4gICAgbnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XHJcbiAgICBvcHRpb25UZXh0czogc3RyaW5nW107XHJcbiAgICBvcHRpb25JbWFnZXM6IHN0cmluZ1tdOyAvLyBUaGlzIHdpbGwgZWl0aGVyIGNvbnRhaW4gdGV4dCBvcHRpb25zIG9yIGltYWdlIG5hbWVzIGJhc2VkIG9uIGlzT3B0aW9uVGV4dCBmbGFnXHJcbiAgICBjb3JyZWN0QXVkaW9zOiBzdHJpbmdbXTtcclxuICAgIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0R2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICB2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuICAgIGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcbiAgICBjdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG5cclxuICAgIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgdGVtcGxhdGVUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgb3B0aW9uTGF5b3V0OiBzdHJpbmcgPSBcImhvcml6b250YWxcIjtcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9lcnJvci5tZXNzYWdlIHx8IF9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAvL2NjLmdhbWUucmVtb3ZlUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBpbWFnZU5hbWUucmVwbGFjZSgvXFwucG5nJC9nLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVKU09OZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldCgnanNvbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcHRpb25MYXlvdXQgQEBAQEBAQEBAQEBAQEBAQCA9IFwiLCB0aGlzLm9wdGlvbkxheW91dCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lX2RhdGEnLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24uaXNPcHRpb25JbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5vcHRpb25JbWFnZXMgPSBxdWVzdGlvbi5vcHRpb25JbWFnZXMubWFwKG9wdGlvbiA9PiB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nRGF0YSgpOyAvLyBZb3UgY2FuIGNhbGwgYSBmdW5jdGlvbiB0byBsb2cgdGhlIGRhdGEgb3IgdXNlIGl0IGluIG90aGVyIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1zaG93ZWRTY3JlZW4tLVRpdGxlXCIpXHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgbGV2ZWwgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxldmVsXCIpO1xyXG4gICAgICAgIHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XHJcbiAgICAgICAgaWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlSlNPTmRhdGEoKTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuICAgICAgICBpZiAoYWdlVmFsdWUgPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhZ2VWYWx1ZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFnZVZhbHVlID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5JbnRyb19hdWRpbztcclxuICAgICAgICAvLyAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkludHJvX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuXHJcblxyXG5cclxuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkludHJvMlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGxldmVsKSkge1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gcGFyc2VJbnQobGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuXHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/IData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74606DA4ldPDYqRa0tppnfF', 'IData');
// TapToFind/Scripts/IData.ts

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
exports.IData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IData = /** @class */ (function () {
    function IData() {
        this.totalOptions = 0;
        this.SubImage = 0;
        this.wrongAnswersLimit = 0;
        this.question = "";
        this.questionSound = "";
        this.answerObject = [];
        this.positionType = "";
        this.feedbacktype = [];
        this.scaleArray = [];
        this.answers = [];
        this.positions = [];
        this.answerpositions = [];
        this.optionAnimationImages = [];
        this.textArray = [];
    }
    IData = __decorate([
        ccclass
    ], IData);
    return IData;
}());
exports.IData = IData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9JRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO1FBQ0ksaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBaUIsR0FBWSxDQUFDLENBQUM7UUFDL0IsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUMvQiwwQkFBcUIsR0FBVSxFQUFFLENBQUM7UUFDbEMsY0FBUyxHQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaEJZLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FnQmpCO0lBQUQsWUFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgSURhdGEgIHtcclxuICAgIHRvdGFsT3B0aW9ucyA6IG51bWJlciA9IDA7XHJcbiAgICBTdWJJbWFnZTogbnVtYmVyID0gMDtcclxuICAgIHdyb25nQW5zd2Vyc0xpbWl0IDogbnVtYmVyID0gMDtcclxuICAgIHF1ZXN0aW9uIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHF1ZXN0aW9uU291bmQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYW5zd2VyT2JqZWN0IDogc3RyaW5nW109W107XHJcbiAgICBwb3NpdGlvblR5cGUgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmVlZGJhY2t0eXBlIDogc3RyaW5nW109W107XHJcbiAgICBzY2FsZUFycmF5IDogbnVtYmVyW109W107XHJcbiAgICBhbnN3ZXJzIDogbnVtYmVyW109W107XHJcbiAgICBcclxuICAgIHBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIGFuc3dlcnBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIG9wdGlvbkFuaW1hdGlvbkltYWdlczpzdHJpbmdbXT1bXTtcclxuICAgIHRleHRBcnJheSA6IHN0cmluZ1tdPVtdO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/CustomWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '456cfoyhJpKLrlITHmDrQCk', 'CustomWidget');
// TapToFind/Scripts/CustomWidget.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomPositioningUI = /** @class */ (function (_super) {
    __extends(CustomPositioningUI, _super);
    function CustomPositioningUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
    }
    // @property
    // isTopCornered: boolean = true;
    // @property
    // isBottomCornered: boolean = false;
    CustomPositioningUI.prototype.start = function () {
        if (this.isLeftCornered) {
            this.positionAtLeftCorner();
        }
        else {
            this.positionAtRightCorner();
        }
    };
    CustomPositioningUI.prototype.positionAtLeftCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = -this.canvas.getContentSize().width / 2 + this.node.width / 2
            - cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width + _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        globalVariables_1.default.Instance.canvasTopY = _position.y;
        globalVariables_1.default.Instance.canvasLeftX = _position.x;
        //console.log("Position is "+_position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
    };
    // positionAtTopCorner() {
    //     let _position = this.node.getPosition();
    //     let _offSet = 20;
    //     // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
    //     //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
    //     _position.x = -this.canvas.getContentSize().height / 2 + this.node.height / 2
    //         - cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height + _offSet;
    //     _position.y = this.canvas.getContentSize().width / 2 - this.node.width / 2
    //         + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
    //     // console.log("Position is "+position)
    //     // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
    //     this.node.setPosition(_position);
    // }
    CustomPositioningUI.prototype.positionAtRightCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2
            + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        this.node.setPosition(_position);
    };
    CustomPositioningUI.prototype.update = function (dt) {
        if (cc.director.getScene().name == "Title") {
            //console.log("cc.Scene.name",)
            if (this.isLeftCornered) {
                this.positionAtLeftCorner();
            }
            else {
                this.positionAtRightCorner();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], CustomPositioningUI.prototype, "canvas", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isLeftCornered", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isRightCornered", void 0);
    CustomPositioningUI = __decorate([
        ccclass
    ], CustomPositioningUI);
    return CustomPositioningUI;
}(cc.Component));
exports.default = CustomPositioningUI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy9DdXN0b21XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBcUZDO1FBbEZHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBNEVyQyxDQUFDO0lBMUVHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFLRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxD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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Qb3NpdGlvbmluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0xlZnRDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JpZ2h0Q29ybmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGlzVG9wQ29ybmVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaXNCb3R0b21Db3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdENvcm5lcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdExlZnRDb3JuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdFJpZ2h0Q29ybmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBwb3NpdGlvbkF0TGVmdENvcm5lcigpIHtcclxuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCArIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG5cclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY2FudmFzVG9wWSA9IF9wb3NpdGlvbi55O1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNMZWZ0WCA9X3Bvc2l0aW9uLng7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiK19wb3NpdGlvbilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGlvbkF0VG9wQ29ybmVyKCkge1xyXG4gICAgLy8gICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vICAgICBsZXQgX29mZlNldCA9IDIwO1xyXG4gICAgLy8gICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XHJcbiAgICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xyXG4gICAgLy8gICAgIF9wb3NpdGlvbi54ID0gLXRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gMiArIHRoaXMubm9kZS5oZWlnaHQgLyAyXHJcbiAgICAvLyAgICAgICAgIC0gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS55ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodCArIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgIC8vICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJQb3NpdGlvbiBpcyBcIitwb3NpdGlvbilcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwb3NpdGlvbkF0UmlnaHRDb3JuZXIoKSB7XHJcbiAgICAgICAgbGV0IF9wb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBfb2ZmU2V0ID0gMjA7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiVGl0bGVcIil7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYy5TY2VuZS5uYW1lXCIsKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0TGVmdENvcm5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0UmlnaHRDb3JuZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

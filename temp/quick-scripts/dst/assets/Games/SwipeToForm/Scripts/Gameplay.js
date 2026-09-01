
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Scripts/Gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57a4fxSM+RPg6uSxKUrA8IU', 'Gameplay');
// Games/SwipeToForm/Scripts/Gameplay.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gameplay = /** @class */ (function (_super) {
    __extends(Gameplay, _super);
    function Gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.optionsNode = null;
        _this.pop_sound = null;
        _this.swipe_sound = null;
        _this.correctSound = null;
        _this.positiveSound = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.stallionPositive = [];
        _this.bagPositive = [];
        _this.cryonPositive = [];
        _this.tlcPositive = [];
        _this.supercubPositive = [];
        _this.currentDraggingObject = null;
        _this.startPosX = 0;
        _this.canTouch = true;
        _this.isFirstClick = false;
        _this.isDropped = false;
        _this.isAnswered = false;
        _this.questionText = "";
        _this.correctAnswer = "";
        _this.questionVO = null;
        _this.correctVO = null;
        _this.needReiteration = false;
        _this.reiterationImage = null;
        _this.maxLevel = 7;
        _this.questionBoxPosY = 0;
        _this.currentJockey = null;
        _this.selectedorder = "";
        _this.tappingcount = 0;
        _this.letter = "";
        _this.canPlay = false;
        _this.nodeNameToLetter = {
            "1": "h", "2": "t", "3": "e"
        };
        _this.nodeNameToLetter1 = {
            "1": "e", "2": "h", "3": "t"
        };
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Gameplay.prototype.onLoad = function () {
        this.maxLevel = StartGame_1.default.Instance.TotalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        else {
            cc.director.preloadScene("1");
        }
        console.log("levelStarted--" + StartGame_1.default.Instance.currentLevel);
        this.node.getChildByName("BG").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
    };
    Gameplay.prototype.PlayQuestionAudio = function () {
        this.currentJockey.active = true;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
            cc.audioEngine.playEffect(this.questionVO, false);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            //PLAY HAND ANIMATION
            var hand = this.node.getChildByName("hand");
            hand.active = true;
            var x1 = this.optionsNode.children[0].x;
            var x2 = this.optionsNode.children[1].x;
            hand.setParent(this.optionsNode.children[0]);
            // hand.setPosition(0, 0);
            hand.setParentWithSamePos(this.node);
            // this.playTween(hand, x1, x2);
            hand.getComponent(cc.Animation).play();
        }
    };
    Gameplay.prototype.playTween = function (_hand, x1, x2) {
        var _this = this;
        _hand.setPosition(x1, _hand.getPosition().y);
        cc.tween(_hand).to(1, { x: x2 }).call(function () {
            _this.playTween(_hand, x1, x2);
        }).start();
    };
    Gameplay.prototype.SubcribeEvents = function () {
        // if (startGame.Instance.questions[parseInt(startGame.Instance.currentLevel) - 1].shouldPlayQuestionAudio) {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //         cc.audioEngine.playEffect(this.questionVO, false);
        //     }
        // }
        // else {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //     }
        var _this = this;
        // }
        this.PlayQuestionAudio();
        this.optionsNode.children.forEach(function (element) {
            element.on('touchstart', function (event) {
                this.TouchStart(element);
            }, _this);
            element.on('touchmove', function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on('touchend', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('touchcancel', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchStart(element);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchEnd(element);
            }, _this);
        });
    };
    Gameplay.prototype.calculateDistance = function (point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
    Gameplay.prototype.start = function () {
        var _this = this;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1, false);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.UpdateQuestionData();
        this.scheduleOnce(function () {
            _this.OptionsLayout();
            if (_this.optionsNode.children.length <= 2) {
                _this.arrangeChildren(_this.optionsNode, 80);
            }
            var delay = 0.2;
            var _loop_1 = function (i) {
                _this.optionsNode.children[i].scale = 0;
                _this.optionsNode.children[i].opacity = 255;
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.pop_sound, false);
                    cc.tween(_this.optionsNode.children[i]).to(0.3, { scale: 0.8 }, { easing: 'backInOut' }).start();
                    if (i == _this.optionsNode.children.length - 1) {
                        _this.scheduleOnce(function () {
                            _this.SubcribeEvents();
                            _this.canPlay = true;
                            if (TVInputManager_1.default.Instance)
                                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                            _this.setupTVFocus("options");
                        }, 0.3);
                    }
                }, delay);
                delay += 0.2;
            };
            for (var i = 0; i < _this.optionsNode.children.length; i++) {
                _loop_1(i);
            }
        }, 1);
        if (StartGame_1.default.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
        }
    };
    Gameplay.prototype.UpdateQuestionData = function () {
        var _this = this;
        var questionData = StartGame_1.default.Instance.questions[parseInt(StartGame_1.default.Instance.currentLevel) - 1];
        var options = questionData.options;
        this.correctAnswer = questionData.correctAnswer;
        var numberOfOptions = options.length;
        this.questionText = questionData.questionText;
        if (questionData.questionImageName != null && questionData.questionImageName != "") {
            if (questionData.questionText == "") {
                this.node.getChildByName("questionPanel").getChildByName("img").setPosition(0, this.node.getChildByName("questionPanel").getChildByName("img").getPosition().y);
            }
            else {
                this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).string = this.questionText;
            }
            if (StartGame_1.default.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            else {
                this.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    _this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }
        else if (this.questionText != "") {
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.questionText;
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }
        this.needReiteration = questionData.needReiteration;
        this.LoadAssetsAudios(questionData);
        if (this.needReiteration) {
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).string = questionData.correctAnswer;
            if (questionData.reiterationImageName != null && questionData.reiterationImageName != "") {
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.reiterationImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.loadSpriteFrame(questionData.reiterationImageName, function (spriteFrame) {
                        _this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
        }
        var _loop_2 = function (i) {
            // let optionNode = this.optionsNode.children[i];
            //create options
            var optionNode = cc.instantiate(this_1.node.getChildByName("template"));
            optionNode.name = (i + 1).toString();
            optionNode.setParent(this_1.optionsNode);
            optionNode.setPosition(cc.v2(0, 0));
            optionNode.getChildByName("img").setPosition(cc.v2(optionNode.getChildByName("img").getPosition().x, questionData.optionOffset));
            optionNode.getChildByName("text").setPosition(cc.v2(optionNode.getChildByName("text").getPosition().x, questionData.optionOffset));
            if (questionData.commonOptionImageName != null && questionData.commonOptionImageName != "") {
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.commonOptionImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(questionData.commonOptionImageName, function (spriteFrame) {
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            if (questionData.isOptionText) {
                optionNode.getChildByName("img").active = false;
                optionNode.getChildByName("text").active = true;
                optionNode.getChildByName("text").getComponent(cc.Label).string = options[i];
            }
            else {
                optionNode.getChildByName("img").active = true;
                optionNode.getChildByName("text").active = false;
                this_1.node.getChildByName("reiteration").getChildByName("text").active = false;
                if (questionData.commonOptionImageName == null || questionData.commonOptionImageName == "") {
                    optionNode.getComponent(cc.Sprite).spriteFrame = null;
                    optionNode.getChildByName("img").scale = 1;
                }
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(options[i], function (spriteFrame) {
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            this_1.optionsNode.children[i].opacity = 0;
        };
        var this_1 = this;
        for (var i = 0; i < numberOfOptions; i++) {
            _loop_2(i);
        }
        this.node.getChildByName("template").destroy();
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    Gameplay.prototype.LoadAssetsAudios = function (_questiondata) {
        var _this = this;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(_questiondata.questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionVO = audioClip;
            });
            cc.loader.load(_questiondata.correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctVO = audioClip;
            });
            // cc.loader.load(_questiondata.questionImageName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
        else {
            this.loadAudioClip(_questiondata.questionAudioName, function (AudioClip) {
                _this.questionVO = AudioClip;
            });
            this.loadAudioClip(_questiondata.correctAudioName, function (AudioClip) {
                _this.correctVO = AudioClip;
            });
            // this.loadSpriteFrame(_questiondata.questionImageName, (spriteFrame) => {
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
    };
    Gameplay.prototype.TouchStart = function (_node) {
        if (this.isAnswered) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        if (!this.currentDraggingObject) {
            this.canTouch = true;
            this.canPlay = true;
            if (TVInputManager_1.default.Instance)
                TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
            this.currentDraggingObject = _node.name;
            this.startPosX = _node.getPosition().x;
            _node.zIndex = 1;
            this.attemptSwap(_node);
            console.log("_node:", _node.name);
            // Convert node name to letter
            if (globalVariables_1.default.Instance.currentLevel == 1 || globalVariables_1.default.Instance.currentLevel == 3)
                this.letter = this.nodeNameToLetter[_node.name];
            else
                this.letter = this.nodeNameToLetter1[_node.name];
            if (this.letter) {
                this.selectedorder += this.letter;
            }
            console.log("Letter:", this.letter);
            console.log("this.selectedorder:", this.selectedorder);
            if (!this.isFirstClick) {
                this.isFirstClick = true;
                console.log("firstClick--" + StartGame_1.default.Instance.currentLevel);
            }
        }
    };
    Gameplay.prototype.TouchMove = function (_node, _event) {
        // if (!this.canTouch || this.currentDraggingObject !== _node.name || this.isAnswered) {
        //     return;
        // }
        // let delta = _event.touch.getDelta();
        // _node.x += delta.x;
        // this.attemptSwap(_node);
    };
    Gameplay.prototype.attemptSwap = function (_node) {
        var deltaX = _node.x - this.startPosX;
        // if (Math.abs(deltaX) > 50) {
        for (var _i = 0, _a = this.optionsNode.children; _i < _a.length; _i++) {
            var otherNode = _a[_i];
            // if (otherNode !== _node) {
            var distance = this.calculateDistance(_node.position, otherNode.position);
            // if (this.shouldSwap(deltaX, _node, otherNode, distance)) {
            this.performSwap(_node, otherNode);
            break;
            // }
            // }
        }
        // }
    };
    Gameplay.prototype.shouldSwap = function (deltaX, _node, otherNode, distance) {
        return distance < 50 && ((deltaX > 0 && _node.x < otherNode.x) || (deltaX < 0 && _node.x > otherNode.x));
    };
    Gameplay.prototype.performSwap = function (_node, otherNode) {
        var _this = this;
        // cc.audioEngine.playEffect(this.swipe_sound, false);
        // cc.tween(_node).to(0.15, { x: otherNode.x }, { easing: 'backInOut' }).start();
        // cc.tween(otherNode).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
            _this.checkOrder(); // Check if the current order is correct
        }, 0.15);
        this.canTouch = false;
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
        this.isDropped = true;
    };
    Gameplay.prototype.TouchEnd = function (_node) {
        var _this = this;
        if (this.isAnswered) {
            return;
        }
        _node.zIndex = 0;
        if (this.isDropped) {
            this.isDropped = false;
            return;
        }
        // cc.tween(_node).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
        }, 0.2);
    };
    Gameplay.prototype.checkOrder = function () {
        var _this = this;
        var currentWord = this.selectedorder;
        // let currentWord = this.getCurrentWord();
        console.log("current word =", currentWord);
        var targetWord = this.correctAnswer; // Define your target word here
        console.log("correctAnswer : =", this.correctAnswer);
        this.tappingcount++;
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.selectedorder;
        this.canPlay = true;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
        if (this.tappingcount == 3) {
            if (currentWord === targetWord) {
                console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
                this.isAnswered = true;
                this.node.getChildByName("questionPanel").getChildByName("sound").active = false;
                // Additional logic for when the order is correct
                // console.log("need iteration--" + this.needReiteration);
                cc.audioEngine.playEffect(this.correctSound, false);
                if (this.needReiteration) {
                    // this.optionsNode.active = false;
                    this.node.getChildByName("reiteration").active = true;
                    this.node.getChildByName("reiteration").scale = 0;
                    // cc.tween(this.optionsNode).to(0.25, { scaleX: 0 }, { easing: 'backInOut' }).start();
                    //  cc.tween(this.node.getChildByName("reiteration")).to(0.5, { scale: 1 }, { easing: 'sineInOut' }).start();
                    this.scheduleOnce(function () {
                        _this.optionsNode.active = false;
                        _this.node.getChildByName("confetti").active = true;
                        _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                        var VOduration = 0;
                        if (_this.correctVO) {
                            VOduration = _this.correctVO.duration;
                        }
                        _this.scheduleOnce(function () {
                            cc.audioEngine.playEffect(_this.correctVO, false);
                            _this.scheduleOnce(function () {
                                _this.callJockey();
                            }, VOduration);
                        }, 0.25);
                    }, 0.5);
                }
                else {
                    this.node.getChildByName("confetti").active = true;
                    this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                    var VOduration_1 = 0;
                    if (this.correctVO) {
                        VOduration_1 = this.correctVO.duration;
                    }
                    this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.correctVO, false);
                        // this.callJockey();
                        _this.scheduleOnce(function () {
                            // this.LoadNextQuestion();
                            _this.callJockey();
                        }, VOduration_1);
                    }, 0.75);
                }
            }
            else {
                this.selectedorder = "";
                this.tappingcount = 0;
                this.letter = "";
                this.callnegJockey();
                // console.log("Incorrect order.");
                // Additional logic for when the order is incorrect
            }
        }
    };
    Gameplay.prototype.getCurrentWord = function () {
        // Sort the nodes based on their x-coordinate
        var sortedNodes = this.optionsNode.children.sort(function (a, b) { return a.x - b.x; });
        var word = sortedNodes.map(function (child) {
            if (StartGame_1.default.Instance.questions[parseInt(StartGame_1.default.Instance.currentLevel) - 1].isOptionText) {
                var labelNode = child.getChildByName("text"); // Adjust if necessary
                var labelComponent = labelNode ? labelNode.getComponent(cc.Label) : null;
                if (labelComponent) {
                    // console.log("Label Text: ", labelComponent.string);
                    return labelComponent.string;
                }
                else {
                    // console.log("Label Component not found or nested in node: ", child.name);
                    return "";
                }
            }
            else {
                return child.name;
            }
        }).join('');
        // console.log("Constructed Word: ", word);
        return word;
    };
    Gameplay.prototype.LoadNextQuestion = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        this.scheduleOnce(function () {
            if (parseInt(StartGame_1.default.Instance.currentLevel) >= StartGame_1.default.Instance.TotalLevels) {
                cc.director.loadScene("gameEnd");
            }
            else {
                globalVariables_1.default.Instance.currentLevel += 1;
                StartGame_1.default.Instance.currentLevel = (parseInt(StartGame_1.default.Instance.currentLevel) + 1).toString();
                cc.director.loadScene("1");
            }
        }, 1);
    };
    Gameplay.prototype.OptionsLayout = function () {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }
        var availableWidth = optionsLayout.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);
            accumulatedWidth += option.width + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
    };
    Gameplay.prototype.arrangeChildren = function (centerNode, spacing) {
        var children = centerNode.children;
        var totalWidth = 0;
        // Calculate total width required
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children
        // Starting X position
        var startX = -totalWidth / 2;
        // Arrange children
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    };
    Gameplay.prototype.callJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.LoadNextQuestion();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    Gameplay.prototype.callnegJockey = function () {
        var _this = this;
        var anim = [];
        anim = ["negative_1", "negative_2"];
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                // this.LoadNextQuestion();
            }, _this.negativeAudio[currentClipNum].duration);
        }, 0.5);
    };
    Gameplay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    Gameplay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    Gameplay.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    Gameplay.prototype.OnSound = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionVO, false);
        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = true;
            _this.node.getChildByName("questionPanel").getChildByName("sound").scale = 1;
            _this.canPlay = true;
            if (TVInputManager_1.default.Instance)
                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
            _this.setupTVFocus("options");
        }, this.questionVO.duration + 0.1);
    };
    Gameplay.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node.getChildByName("questionPanel").getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var optionButtons = this.node.getChildByName(activeContainerName).children.filter(function (node) {
            var btn = node.getComponent(cc.Button);
            return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
        });
        var nodes = __spreadArrays(optionButtons, [backBtn, soundBtn, musicBtn]).filter(function (n) { return !!n; });
        // pick a sensible default — e.g. first option, or correct answer index
        if (cc.director.getScene().name == "1") {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
    };
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Node)
    ], Gameplay.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "pop_sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "swipe_sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "correctSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "supercubPositive", void 0);
    Gameplay = __decorate([
        ccclass
    ], Gameplay);
    return Gameplay;
}(cc.Component));
exports.default = Gameplay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxHYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbzJCQztRQWwyQlcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUV0QywyQkFBcUIsR0FBVyxJQUFJLENBQUM7UUFDckMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxLQUFLLENB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LENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN4RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM5RzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNsSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxL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QUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0SSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5SCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUs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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBekM3QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbzJCNUI7SUFBRCxlQUFDO0NBcDJCRCxBQW8yQkMsQ0FwMkJxQyxFQUFFLENBQUMsU0FBUyxHQW8yQmpEO2tCQXAyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NiYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG9wdGlvbnNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwb3Bfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc3dpcGVfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29ycmVjdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBvc2l0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudERyYWdnaW5nT2JqZWN0OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGFydFBvc1g6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0Ryb3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNBbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0Vk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5lZWRSZWl0ZXJhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWl0ZXJhdGlvbkltYWdlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHNlbGVjdGVkb3JkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICB0YXBwaW5nY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsZXR0ZXIgPSBcIlwiO1xyXG4gICAgY2FuUGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7XHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJHXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25WTywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vUExBWSBIQU5EIEFOSU1BVElPTlxyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHgxOiBudW1iZXIgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLng7XHJcbiAgICAgICAgICAgIGxldCB4MjogbnVtYmVyID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS54O1xyXG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudCh0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgLy8gaGFuZC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYXlUd2VlbihoYW5kLCB4MSwgeDIpO1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVR3ZWVuKF9oYW5kOiBjYy5Ob2RlLCB4MTogbnVtYmVyLCB4MjogbnVtYmVyKSB7XHJcbiAgICAgICAgX2hhbmQuc2V0UG9zaXRpb24oeDEsIF9oYW5kLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgY2MudHdlZW4oX2hhbmQpLnRvKDEsIHsgeDogeDIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVR3ZWVuKF9oYW5kLCB4MSwgeDIpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3ViY3JpYmVFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5xdWVzdGlvblZPKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnF1ZXN0aW9uVk8pIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoRW5kKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hjYW5jZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hFbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5vbigndHYtc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0di1zZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaEVuZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaEVuZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnQyLnggLSBwb2ludDEueCwgMikgKyBNYXRoLnBvdyhwb2ludDIueSAtIHBvaW50MS55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxLCBmYWxzZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUXVlc3Rpb25EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMub3B0aW9uc05vZGUsIDgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAwLjI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcF9zb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0pLnRvKDAuMywgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YmNyaWJlRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgICAgICBkZWxheSArPSAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25Qb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVRdWVzdGlvbkRhdGEoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHF1ZXN0aW9uRGF0YS5vcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgIGxldCBudW1iZXJPZk9wdGlvbnMgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBudWxsICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2V0UG9zaXRpb24oMCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuc2V0UG9zaXRpb24oY2MudjIoMCwgMTUwMCkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpKS50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnF1ZXN0aW9uVGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Cb3hQb3NZID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS55O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSkudG8oMSwgeyB5OiB0aGlzLnF1ZXN0aW9uQm94UG9zWSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmVlZFJlaXRlcmF0aW9uID0gcXVlc3Rpb25EYXRhLm5lZWRSZWl0ZXJhdGlvbjtcclxuICAgICAgICB0aGlzLkxvYWRBc3NldHNBdWRpb3MocXVlc3Rpb25EYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gbnVsbCAmJiBxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IG9wdGlvbk5vZGUgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBvcHRpb25zXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25Ob2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikpO1xyXG4gICAgICAgICAgICBvcHRpb25Ob2RlLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuc2V0UGFyZW50KHRoaXMub3B0aW9uc05vZGUpO1xyXG4gICAgICAgICAgICBvcHRpb25Ob2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2V0UG9zaXRpb24oY2MudjIob3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRQb3NpdGlvbigpLngsIHF1ZXN0aW9uRGF0YS5vcHRpb25PZmZzZXQpKTtcclxuICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuc2V0UG9zaXRpb24oY2MudjIob3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0UG9zaXRpb24oKS54LCBxdWVzdGlvbkRhdGEub3B0aW9uT2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IG51bGwgJiYgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9PSBudWxsIHx8IHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQob3B0aW9uc1tpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShvcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgTG9hZEFzc2V0c0F1ZGlvcyhfcXVlc3Rpb25kYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKF9xdWVzdGlvbmRhdGEucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKF9xdWVzdGlvbmRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0Vk8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uVk8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoX3F1ZXN0aW9uZGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RWTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRTcHJpdGVGcmFtZShfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRvdWNoU3RhcnQoX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ID0gX25vZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBvc1ggPSBfbm9kZS5nZXRQb3NpdGlvbigpLng7XHJcblxyXG4gICAgICAgICAgICBfbm9kZS56SW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHRTd2FwKF9ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX25vZGU6XCIsIF9ub2RlLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCBub2RlIG5hbWUgdG8gbGV0dGVyXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXIgPSB0aGlzLm5vZGVOYW1lVG9MZXR0ZXJbX25vZGUubmFtZV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubGV0dGVyID0gdGhpcy5ub2RlTmFtZVRvTGV0dGVyMVtfbm9kZS5uYW1lXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkb3JkZXIgKz0gdGhpcy5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVyOlwiLCB0aGlzLmxldHRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zZWxlY3RlZG9yZGVyOlwiLCB0aGlzLnNlbGVjdGVkb3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub2RlTmFtZVRvTGV0dGVyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG5cclxuICAgICAgICBcIjFcIjogXCJoXCIsIFwiMlwiOiBcInRcIiwgXCIzXCI6IFwiZVwiXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBub2RlTmFtZVRvTGV0dGVyMTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuXHJcbiAgICAgICAgXCIxXCI6IFwiZVwiLCBcIjJcIjogXCJoXCIsIFwiM1wiOiBcInRcIlxyXG4gICAgfTtcclxuICAgIFRvdWNoTW92ZShfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuY2FuVG91Y2ggfHwgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgIT09IF9ub2RlLm5hbWUgfHwgdGhpcy5pc0Fuc3dlcmVkKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGRlbHRhID0gX2V2ZW50LnRvdWNoLmdldERlbHRhKCk7XHJcbiAgICAgICAgLy8gX25vZGUueCArPSBkZWx0YS54O1xyXG4gICAgICAgIC8vIHRoaXMuYXR0ZW1wdFN3YXAoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGVtcHRTd2FwKF9ub2RlKSB7XHJcbiAgICAgICAgbGV0IGRlbHRhWCA9IF9ub2RlLnggLSB0aGlzLnN0YXJ0UG9zWDtcclxuICAgICAgICAvLyBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgb3RoZXJOb2RlIG9mIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgLy8gaWYgKG90aGVyTm9kZSAhPT0gX25vZGUpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZShfbm9kZS5wb3NpdGlvbiwgb3RoZXJOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc2hvdWxkU3dhcChkZWx0YVgsIF9ub2RlLCBvdGhlck5vZGUsIGRpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Td2FwKF9ub2RlLCBvdGhlck5vZGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRTd2FwKGRlbHRhWCwgX25vZGUsIG90aGVyTm9kZSwgZGlzdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCA1MCAmJiAoKGRlbHRhWCA+IDAgJiYgX25vZGUueCA8IG90aGVyTm9kZS54KSB8fCAoZGVsdGFYIDwgMCAmJiBfbm9kZS54ID4gb3RoZXJOb2RlLngpKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtU3dhcChfbm9kZSwgb3RoZXJOb2RlKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN3aXBlX3NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpLnRvKDAuMTUsIHsgeDogb3RoZXJOb2RlLnggfSwgeyBlYXNpbmc6ICdiYWNrSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gY2MudHdlZW4ob3RoZXJOb2RlKS50bygwLjE1LCB7IHg6IHRoaXMuc3RhcnRQb3NYIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrT3JkZXIoKTsgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3JkZXIgaXMgY29ycmVjdFxyXG4gICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblBsYXkpO1xyXG4gICAgICAgIHRoaXMuaXNEcm9wcGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBUb3VjaEVuZChfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbm9kZS56SW5kZXggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHJvcHBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJvcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKF9ub2RlKS50bygwLjE1LCB7IHg6IHRoaXMuc3RhcnRQb3NYIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcbiAgICBjaGVja09yZGVyKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMuc2VsZWN0ZWRvcmRlcjtcclxuICAgICAgICAvLyBsZXQgY3VycmVudFdvcmQgPSB0aGlzLmdldEN1cnJlbnRXb3JkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHdvcmQgPVwiLCBjdXJyZW50V29yZCk7XHJcbiAgICAgICAgbGV0IHRhcmdldFdvcmQgPSB0aGlzLmNvcnJlY3RBbnN3ZXI7IC8vIERlZmluZSB5b3VyIHRhcmdldCB3b3JkIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXIgOiA9XCIsIHRoaXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgdGhpcy50YXBwaW5nY291bnQrKztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2VsZWN0ZWRvcmRlcjtcclxuICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgaWYgKHRoaXMudGFwcGluZ2NvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXb3JkID09PSB0YXJnZXRXb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3Igd2hlbiB0aGUgb3JkZXIgaXMgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuZWVkIGl0ZXJhdGlvbi0tXCIgKyB0aGlzLm5lZWRSZWl0ZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMub3B0aW9uc05vZGUpLnRvKDAuMjUsIHsgc2NhbGVYOiAwIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKSkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFZPZHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0Vk8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZPZHVyYXRpb24gPSB0aGlzLmNvcnJlY3RWTy5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFZPLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBWT2R1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBWT2R1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0Vk8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVk9kdXJhdGlvbiA9IHRoaXMuY29ycmVjdFZPLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0Vk8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuTG9hZE5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFZPZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZG9yZGVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwcGluZ2NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV0dGVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbG5lZ0pvY2tleSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbmNvcnJlY3Qgb3JkZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3Igd2hlbiB0aGUgb3JkZXIgaXMgaW5jb3JyZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRXb3JkKCkge1xyXG4gICAgICAgIC8vIFNvcnQgdGhlIG5vZGVzIGJhc2VkIG9uIHRoZWlyIHgtY29vcmRpbmF0ZVxyXG4gICAgICAgIGxldCBzb3J0ZWROb2RlcyA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uc29ydCgoYSwgYikgPT4gYS54IC0gYi54KTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmQgPSBzb3J0ZWROb2Rlcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1twYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKSAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsTm9kZSA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTsgLy8gQWRqdXN0IGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQ29tcG9uZW50ID0gbGFiZWxOb2RlID8gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYWJlbENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGFiZWwgVGV4dDogXCIsIGxhYmVsQ29tcG9uZW50LnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsQ29tcG9uZW50LnN0cmluZztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYWJlbCBDb21wb25lbnQgbm90IGZvdW5kIG9yIG5lc3RlZCBpbiBub2RlOiBcIiwgY2hpbGQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGVkIFdvcmQ6IFwiLCB3b3JkKTtcclxuICAgICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkTmV4dFF1ZXN0aW9uKCkge1xyXG5cclxuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vcGxheWpvY2tleVxyXG4gICAgICAgIC8vIGFmdGVyIGpvY2tleSBjYWxsIGJlbG93IGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAocGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbldpZHRoID0gb3B0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uSGVpZ2h0ID0gb3B0aW9uLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gb3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25IZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuICAgICAgICBsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID0gdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxyXG4gICAgICAgICAgICBvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxyXG4gICAgICAgICAgICBsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyAob3B0aW9uLndpZHRoICogb3B0aW9uLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBvcHRpb24ueCA9IHBvc1ggLSAob3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWCk7XHJcblxyXG4gICAgICAgICAgICBhY2N1bXVsYXRlZFdpZHRoICs9IG9wdGlvbi53aWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxyXG5cclxuICAgICAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8gQXJyYW5nZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHN0YXJ0WCArPSBjaGlsZC53aWR0aCArIHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxsSm9ja2V5KCkge1xyXG4gICAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc3NpdGl2ZVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzZcIiwgXCJwb3NpdGl2ZV83XCIsIFwicG9zaXRpdmVfOFwiLCBcInBvc2l0aXZlXzlcIiwgXCJwb3NpdGl2ZV8xMFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV82XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcclxuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsbG5lZ0pvY2tleSgpIHtcclxuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xyXG4gICAgICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xNjAwLCAxNjAwXTtcclxuICAgICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICBwb3MgPSBbMTkwMCwgMTkwMF07XHJcbiAgICAgICAgICAgIGpvY2tleXR3ZWVuID0gWzg3MCwgODcwXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sIHRoaXMuY3VycmVudEpvY2tleS55KTtcclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJiBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IC0wLjY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogcG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Mb2FkTmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgT25Tb3VuZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICB9LCB0aGlzLnF1ZXN0aW9uVk8uZHVyYXRpb24gKyAwLjEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMoYWN0aXZlQ29udGFpbmVyTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICBsZXQgc291bmRCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIik7XHJcbiAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uQnV0dG9ucyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShhY3RpdmVDb250YWluZXJOYW1lKS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmUgJiYgbm9kZS5vcGFjaXR5ID4gMCAmJiAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFsuLi5vcHRpb25CdXR0b25zLCBiYWNrQnRuLCBzb3VuZEJ0biwgbXVzaWNCdG5dLmZpbHRlcihuID0+ICEhbik7XHJcblxyXG4gICAgICAgIC8vIHBpY2sgYSBzZW5zaWJsZSBkZWZhdWx0IOKAlCBlLmcuIGZpcnN0IG9wdGlvbiwgb3IgY29ycmVjdCBhbnN3ZXIgaW5kZXhcclxuXHJcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
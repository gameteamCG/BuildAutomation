
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
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
            hand.setPosition(0, 0);
            hand.setParentWithSamePos(this.node);
            this.playTween(hand, x1, x2);
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
        });
    };
    Gameplay.prototype.calculateDistance = function (point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
    Gameplay.prototype.start = function () {
        var _this = this;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
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
                    cc.tween(_this.optionsNode.children[i]).to(0.3, { scale: 1 }, { easing: 'backInOut' }).start();
                    if (i == _this.optionsNode.children.length - 1) {
                        _this.scheduleOnce(function () {
                            _this.SubcribeEvents();
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
        var optionTextFontSize = 100;
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
                if (optionNode.getChildByName("text").getComponent(cc.Label).fontSize < optionTextFontSize) {
                    optionTextFontSize = optionNode.getChildByName("text").getComponent(cc.Label).fontSize;
                }
                optionNode.getChildByName("text").getComponent(cc.Label).fontSize = optionTextFontSize;
                console.log("Latest size = ", optionTextFontSize);
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
            this.currentDraggingObject = _node.name;
            this.startPosX = _node.getPosition().x;
            _node.zIndex = 1;
            if (!this.isFirstClick) {
                this.isFirstClick = true;
                console.log("firstClick--" + StartGame_1.default.Instance.currentLevel);
            }
        }
    };
    Gameplay.prototype.TouchMove = function (_node, _event) {
        if (!this.canTouch || this.currentDraggingObject !== _node.name || this.isAnswered) {
            return;
        }
        var delta = _event.touch.getDelta();
        _node.x += delta.x;
        this.attemptSwap(_node);
    };
    Gameplay.prototype.attemptSwap = function (_node) {
        var deltaX = _node.x - this.startPosX;
        if (Math.abs(deltaX) > 50) {
            for (var _i = 0, _a = this.optionsNode.children; _i < _a.length; _i++) {
                var otherNode = _a[_i];
                if (otherNode !== _node) {
                    var distance = this.calculateDistance(_node.position, otherNode.position);
                    if (this.shouldSwap(deltaX, _node, otherNode, distance)) {
                        this.performSwap(_node, otherNode);
                        break;
                    }
                }
            }
        }
    };
    Gameplay.prototype.shouldSwap = function (deltaX, _node, otherNode, distance) {
        return distance < 50 && ((deltaX > 0 && _node.x < otherNode.x) || (deltaX < 0 && _node.x > otherNode.x));
    };
    Gameplay.prototype.performSwap = function (_node, otherNode) {
        var _this = this;
        cc.audioEngine.playEffect(this.swipe_sound, false);
        cc.tween(_node).to(0.15, { x: otherNode.x }, { easing: 'backInOut' }).start();
        cc.tween(otherNode).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
            _this.checkOrder(); // Check if the current order is correct
        }, 0.15);
        this.canTouch = false;
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
        cc.tween(_node).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
        }, 0.2);
    };
    Gameplay.prototype.checkOrder = function () {
        var _this = this;
        var currentWord = this.getCurrentWord();
        // console.log("current word =", currentWord);
        var targetWord = this.correctAnswer; // Define your target word here
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
                cc.tween(this.optionsNode).to(0.25, { scaleX: 0 }, { easing: 'backInOut' }).start();
                cc.tween(this.node.getChildByName("reiteration")).to(0.5, { scale: 1 }, { easing: 'sineInOut' }).start();
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
            // console.log("Incorrect order.");
            // Additional logic for when the order is incorrect
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
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        if (parseInt(StartGame_1.default.Instance.currentLevel) >= StartGame_1.default.Instance.TotalLevels) {
            cc.director.loadScene("gameEnd");
        }
        else {
            globalVariables_1.default.Instance.currentLevel += 1;
            StartGame_1.default.Instance.currentLevel = (parseInt(StartGame_1.default.Instance.currentLevel) + 1).toString();
            cc.director.loadScene("1");
        }
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
        // this.optionsNode.children.forEach(element => {
        //     console.log("actual text ", element.getChildByName("text").getComponent(cc.Label).string);
        //     console.log("actual scale ", element.getChildByName("text").scale);
        //     console.log("actual width ", element.getChildByName("text").width);
        //     console.log("actual font size ", element.getChildByName("text").getComponent(cc.Label).fontSize);
        //     // element.getChildByName("text").getComponent(cc.Label).height = optionTextFontSize;
        // });
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
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionVO, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9Td2lwZVRvRm9ybS9TY3JpcHRzL0dhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNnRCQztRQTN0QlcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBRXRDLDJCQUFxQixHQUFXLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsc0JBQWdCLEdBQW1CLElBQUksQ0FBQztRQUV4QyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRXBDLG1CQUFhLEdBQVksSUFBSSxDQUFDOztRQWlxQjlCLGlCQUFpQjtJQUNyQixDQUFDO0lBaHFCRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7YUFDSTtZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0YsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQy9HLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2hILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2hIO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzdHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzlHO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzdHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ25ILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ25IO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDN0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbEgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbkg7SUFDTCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNqRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQzVDLHFCQUFxQjtZQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBYyxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQWhELGlCQUtDO1FBSkcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLDZHQUE2RztRQUM3Ryw2QkFBNkI7UUFDN0IsMkZBQTJGO1FBQzNGLDZEQUE2RDtRQUM3RCxRQUFRO1FBQ1IsSUFBSTtRQUNKLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0IsMkZBQTJGO1FBQzNGLFFBQVE7UUFWWixpQkE4QkM7UUFsQkcsSUFBSTtRQUNKLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDckMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxLQUFLO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBSztnQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxLQUFLO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsS0FBSztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFRCxvQ0FBaUIsR0FBakIsVUFBa0IsTUFBTSxFQUFFLE1BQU07UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkF5Q0M7UUF4Q0cscUJBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDakUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztvQ0FDUCxDQUFDO2dCQUNOLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUYsSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDM0MsS0FBSSxDQUFDLFlBQVksQ0FBQzs0QkFDZCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDWDtnQkFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ1YsS0FBSyxJQUFJLEdBQUcsQ0FBQzs7WUFaakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQWhELENBQUM7YUFhVDtRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekM7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNDO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlDO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6QzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFxSUM7UUFwSUcsSUFBSSxZQUFZLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUM5QyxJQUFJLFlBQVksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsRUFBRTtZQUNoRixJQUFJLFlBQVksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbks7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkg7WUFDRCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQ3hELElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzVDLE9BQU87cUJBQ1Y7b0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUN0SCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUNJO2dCQUNELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsV0FBVztvQkFDN0QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDdEgsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNIO2FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNuSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzSDtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBQzFILElBQUksWUFBWSxDQUFDLG9CQUFvQixJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsb0JBQW9CLElBQUksRUFBRSxFQUFFO2dCQUN0RixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQzNELElBQUksR0FBRyxFQUFFOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzVDLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQzlGLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsV0FBVzt3QkFDaEUsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUM5RixDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7UUFFRCxJQUFJLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztnQ0FFcEIsQ0FBQztZQUNOLGlEQUFpRDtZQUNqRCxnQkFBZ0I7WUFFaEIsSUFBSSxVQUFVLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBSyxXQUFXLENBQUMsQ0FBQztZQUN2QyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqSSxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25JLElBQUksWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksSUFBSSxZQUFZLENBQUMscUJBQXFCLElBQUksRUFBRSxFQUFFO2dCQUN4RixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQzVELElBQUksR0FBRyxFQUFFOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzVDLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUNqRSxDQUFDLENBQUMsQ0FBQztpQkFFTjtxQkFDSTtvQkFDRCxPQUFLLGVBQWUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsVUFBQyxXQUFXO3dCQUNqRSxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUNqRSxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1lBQ0QsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUFFO2dCQUMzQixVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsRUFBRTtvQkFDeEYsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztpQkFDMUY7Z0JBQ0QsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3JEO2lCQUNJO2dCQUNELFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0MsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqRCxPQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzlFLElBQUksWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksSUFBSSxZQUFZLENBQUMscUJBQXFCLElBQUksRUFBRSxFQUFFO29CQUN4RixVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN0RCxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQzlDO2dCQUNELElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTzt3QkFDcEMsSUFBSSxHQUFHLEVBQUU7NEJBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDNUMsT0FBTzt5QkFDVjt3QkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUN2RixDQUFDLENBQUMsQ0FBQztpQkFFTjtxQkFDSTtvQkFDRCxPQUFLLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxXQUFXO3dCQUN6QyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDdkYsQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtZQUNELE9BQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOzs7UUFoRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLEVBQUUsQ0FBQyxFQUFFO29CQUEvQixDQUFDO1NBaUVUO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWpHLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBa0I7UUFBbkMsaUJBc0NDO1FBcENHLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUMzRCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNqRCxPQUFPO2lCQUNWO2dCQUNELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsR0FBRyxFQUFFLFNBQVM7Z0JBQzFELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pELE9BQU87aUJBQ1Y7Z0JBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxzRUFBc0U7WUFDdEUsaUJBQWlCO1lBQ2pCLHVEQUF1RDtZQUN2RCxrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLHVEQUF1RDtZQUN2RCwrSEFBK0g7WUFDL0gsTUFBTTtTQUNUO2FBQ0k7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLFNBQVM7Z0JBQzFELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxTQUFTO2dCQUN6RCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILDJFQUEyRTtZQUMzRSwrSEFBK0g7WUFDL0gsTUFBTTtTQUNUO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDakU7U0FDSjtJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBYyxFQUFFLE1BQVc7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNoRixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLEtBQXNCLFVBQXlCLEVBQXpCLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7Z0JBQTVDLElBQUksU0FBUyxTQUFBO2dCQUNkLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtvQkFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUU7d0JBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO3FCQUNUO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUTtRQUN6QyxPQUFPLFFBQVEsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsU0FBUztRQUE1QixpQkFVQztRQVRHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNsQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyx3Q0FBd0M7UUFDL0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFjO1FBQXZCLGlCQWFDO1FBWkcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFBQSxpQkFzREM7UUFyREcsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLDhDQUE4QztRQUM5QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsK0JBQStCO1FBRXBFLElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pGLGlEQUFpRDtZQUNqRCwwREFBMEQ7WUFDMUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLG1DQUFtQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6RyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLFVBQVUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDeEM7b0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxLQUFJLENBQUMsWUFBWSxDQUFDOzRCQUNkLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDdEIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkUsSUFBSSxZQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2hCLFlBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDeEM7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxxQkFBcUI7b0JBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsMkJBQTJCO3dCQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBRSxZQUFVLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7U0FDSjthQUFNO1lBQ0gsbUNBQW1DO1lBQ25DLG1EQUFtRDtTQUN0RDtJQUNMLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksNkNBQTZDO1FBQzdDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUM7UUFFdEUsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDNUIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDMUYsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtnQkFDcEUsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUV6RSxJQUFJLGNBQWMsRUFBRTtvQkFDaEIsc0RBQXNEO29CQUN0RCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNILDRFQUE0RTtvQkFDNUUsT0FBTyxFQUFFLENBQUM7aUJBQ2I7YUFDSjtpQkFDSTtnQkFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDckI7UUFDTCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFWiwyQ0FBMkM7UUFDM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsWUFBWTtRQUNaLG9DQUFvQztRQUNwQyxJQUFJLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDN0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7YUFDSTtZQUNELHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7WUFDM0MsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBRUwsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFFekMsSUFBTSxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFFakMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRWpDLFVBQVUsSUFBSSxXQUFXLEdBQUcscUJBQXFCLENBQUM7WUFDbEQsSUFBSSxZQUFZLEdBQUcsU0FBUyxFQUFFO2dCQUMxQixTQUFTLEdBQUcsWUFBWSxDQUFDO2FBQzVCO1NBQ0o7UUFFRCxJQUFJLGNBQWMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUkscUJBQXFCLEdBQUcsVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztRQUMxRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcscUJBQXFCLENBQUMsQ0FBQztRQUV0RSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsNENBQTRDO1lBQzVDLElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDO1lBRXBDLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUM7WUFFbkMscURBQXFEO1lBQ3JELElBQUksSUFBSSxHQUFHLGdCQUFnQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVoRSxnQkFBZ0IsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1lBRXpELG1EQUFtRDtZQUNuRCxLQUFxQixVQUFlLEVBQWYsS0FBQSxNQUFNLENBQUMsUUFBUSxFQUFmLGNBQWUsRUFBZixJQUFlLEVBQUU7Z0JBQWpDLElBQUksUUFBUSxTQUFBO2dCQUNiLFFBQVEsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxLQUFLLElBQUksaUJBQWlCLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUM7YUFDeEM7U0FDSjtRQUVELGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUUvQyxpREFBaUQ7UUFDakQsaUdBQWlHO1FBQ2pHLDBFQUEwRTtRQUMxRSwwRUFBMEU7UUFDMUUsd0dBQXdHO1FBQ3hHLDRGQUE0RjtRQUM1RixNQUFNO0lBQ1YsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsVUFBbUIsRUFBRSxPQUFlO1FBQ2hELElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLGlDQUFpQztRQUNqQyxLQUFrQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUF2QixJQUFJLEtBQUssaUJBQUE7WUFDVixVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBRTdFLHNCQUFzQjtRQUN0QixJQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFN0IsbUJBQW1CO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBR0QsNkJBQVUsR0FBVjtRQUFBLGlCQW9FQztRQW5FRyxJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDOUY7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDN0MsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMvRjthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzdDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUMvQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7WUFDakQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBYSxFQUFFO1lBQ3JELElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN2QzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNuRTtRQUNELDhDQUE4QztRQUM5QyxJQUFJLGNBQWMsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLG9EQUFvRDtRQUNwRCxJQUFJLEdBQUcsR0FBYSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzdDLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQixXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUMvRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztTQUNyQzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdGO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0SSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5SCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7b0JBQzdDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM5RTt5QkFDSTt3QkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzlFO2lCQUNKO2dCQUNELGlEQUFpRDtnQkFDakQsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxRQUErQztRQUM5RSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUN0RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUE2QztRQUMxRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztZQUNsRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxrQ0FBZSxHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVztRQUM1QyxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXh0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBdEM3QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNnRCNUI7SUFBRCxlQUFDO0NBN3RCRCxBQTZ0QkMsQ0E3dEJxQyxFQUFFLENBQUMsU0FBUyxHQTZ0QmpEO2tCQTd0Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NiYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxuICAgIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcG9wX3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc3dpcGVfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50RHJhZ2dpbmdPYmplY3Q6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGFydFBvc1g6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNEcm9wcGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0Fuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHF1ZXN0aW9uVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBxdWVzdGlvblZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHByaXZhdGUgY29ycmVjdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHByaXZhdGUgbmVlZFJlaXRlcmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWl0ZXJhdGlvbkltYWdlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1heExldmVsOiBudW1iZXIgPSA3O1xuXG4gICAgcHJpdmF0ZSBxdWVzdGlvbkJveFBvc1k6IG51bWJlciA9IDA7XG5cbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm1heExldmVsID0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzO1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJHXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25WTywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcbiAgICAgICAgICAgIC8vUExBWSBIQU5EIEFOSU1BVElPTlxuICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xuICAgICAgICAgICAgaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHgxOiBudW1iZXIgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLng7XG4gICAgICAgICAgICBsZXQgeDI6IG51bWJlciA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMV0ueDtcbiAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50KHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgaGFuZC5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMucGxheVR3ZWVuKGhhbmQsIHgxLCB4Mik7XG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlUd2VlbihfaGFuZDogY2MuTm9kZSwgeDE6IG51bWJlciwgeDI6IG51bWJlcikge1xuICAgICAgICBfaGFuZC5zZXRQb3NpdGlvbih4MSwgX2hhbmQuZ2V0UG9zaXRpb24oKS55KTtcbiAgICAgICAgY2MudHdlZW4oX2hhbmQpLnRvKDEsIHsgeDogeDIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlUd2VlbihfaGFuZCwgeDEsIHgyKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBTdWJjcmliZUV2ZW50cygpIHtcbiAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucXVlc3Rpb25WTykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5xdWVzdGlvblZPKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoRW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaGNhbmNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hFbmQoZWxlbWVudCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGNhbGN1bGF0ZURpc3RhbmNlKHBvaW50MSwgcG9pbnQyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnQyLnggLSBwb2ludDEueCwgMikgKyBNYXRoLnBvdyhwb2ludDIueSAtIHBvaW50MS55LCAyKSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMSk7XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5VcGRhdGVRdWVzdGlvbkRhdGEoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMub3B0aW9uc05vZGUsIDgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZWxheSA9IDAuMjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0uc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3Bfc291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXSkudG8oMC4zLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YmNyaWJlRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIGRlbGF5ICs9IDAuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3VwZXJjdWJQb3NpdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVwZGF0ZVF1ZXN0aW9uRGF0YSgpIHtcbiAgICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBxdWVzdGlvbkRhdGEub3B0aW9ucztcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXI7XG4gICAgICAgIGxldCBudW1iZXJPZk9wdGlvbnMgPSBvcHRpb25zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0O1xuICAgICAgICBpZiAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lICE9IG51bGwgJiYgcXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0UG9zaXRpb24oKS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25UZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpLnRvKDEsIHsgeTogdGhpcy5xdWVzdGlvbkJveFBvc1kgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5xdWVzdGlvblRleHQgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uVGV4dDtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Cb3hQb3NZID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS55O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5zZXRQb3NpdGlvbihjYy52MigwLCAxNTAwKSk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpKS50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZWVkUmVpdGVyYXRpb24gPSBxdWVzdGlvbkRhdGEubmVlZFJlaXRlcmF0aW9uO1xuICAgICAgICB0aGlzLkxvYWRBc3NldHNBdWRpb3MocXVlc3Rpb25EYXRhKTtcbiAgICAgICAgaWYgKHRoaXMubmVlZFJlaXRlcmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBxdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gbnVsbCAmJiBxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uVGV4dEZvbnRTaXplID0gMTAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGxldCBvcHRpb25Ob2RlID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIC8vY3JlYXRlIG9wdGlvbnNcblxuICAgICAgICAgICAgbGV0IG9wdGlvbk5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XG4gICAgICAgICAgICBvcHRpb25Ob2RlLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBvcHRpb25Ob2RlLnNldFBhcmVudCh0aGlzLm9wdGlvbnNOb2RlKTtcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xuXG4gICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnNldFBvc2l0aW9uKGNjLnYyKG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0UG9zaXRpb24oKS54LCBxdWVzdGlvbkRhdGEub3B0aW9uT2Zmc2V0KSk7XG4gICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5zZXRQb3NpdGlvbihjYy52MihvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRQb3NpdGlvbigpLngsIHF1ZXN0aW9uRGF0YS5vcHRpb25PZmZzZXQpKTtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IG51bGwgJiYgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5pc09wdGlvblRleHQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplIDwgb3B0aW9uVGV4dEZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHRGb250U2l6ZSA9IG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSBvcHRpb25UZXh0Rm9udFNpemU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYXRlc3Qgc2l6ZSA9IFwiLCBvcHRpb25UZXh0Rm9udFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9PSBudWxsIHx8IHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChvcHRpb25zW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUob3B0aW9uc1tpXSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcblxuICAgIH1cblxuICAgIExvYWRBc3NldHNBdWRpb3MoX3F1ZXN0aW9uZGF0YTogYW55KSB7XG5cbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoX3F1ZXN0aW9uZGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFZPID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoX3F1ZXN0aW9uZGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKF9xdWVzdGlvbmRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFZPID0gQXVkaW9DbGlwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMubG9hZFNwcml0ZUZyYW1lKF9xdWVzdGlvbmRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVG91Y2hTdGFydChfbm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Fuc3dlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcmFnZ2luZ09iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ09iamVjdCA9IF9ub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UG9zWCA9IF9ub2RlLmdldFBvc2l0aW9uKCkueDtcbiAgICAgICAgICAgIF9ub2RlLnpJbmRleCA9IDE7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFRvdWNoTW92ZShfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblRvdWNoIHx8IHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ICE9PSBfbm9kZS5uYW1lIHx8IHRoaXMuaXNBbnN3ZXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZWx0YSA9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICBfbm9kZS54ICs9IGRlbHRhLng7XG4gICAgICAgIHRoaXMuYXR0ZW1wdFN3YXAoX25vZGUpO1xuICAgIH1cblxuICAgIGF0dGVtcHRTd2FwKF9ub2RlKSB7XG4gICAgICAgIGxldCBkZWx0YVggPSBfbm9kZS54IC0gdGhpcy5zdGFydFBvc1g7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gNTApIHtcbiAgICAgICAgICAgIGZvciAobGV0IG90aGVyTm9kZSBvZiB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyTm9kZSAhPT0gX25vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZShfbm9kZS5wb3NpdGlvbiwgb3RoZXJOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkU3dhcChkZWx0YVgsIF9ub2RlLCBvdGhlck5vZGUsIGRpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtU3dhcChfbm9kZSwgb3RoZXJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkU3dhcChkZWx0YVgsIF9ub2RlLCBvdGhlck5vZGUsIGRpc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8IDUwICYmICgoZGVsdGFYID4gMCAmJiBfbm9kZS54IDwgb3RoZXJOb2RlLngpIHx8IChkZWx0YVggPCAwICYmIF9ub2RlLnggPiBvdGhlck5vZGUueCkpO1xuICAgIH1cblxuICAgIHBlcmZvcm1Td2FwKF9ub2RlLCBvdGhlck5vZGUpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN3aXBlX3NvdW5kLCBmYWxzZSk7XG4gICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjE1LCB7IHg6IG90aGVyTm9kZS54IH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICBjYy50d2VlbihvdGhlck5vZGUpLnRvKDAuMTUsIHsgeDogdGhpcy5zdGFydFBvc1ggfSwgeyBlYXNpbmc6ICdiYWNrSW5PdXQnIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPcmRlcigpOyAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBvcmRlciBpcyBjb3JyZWN0XG4gICAgICAgIH0sIDAuMTUpO1xuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcm9wcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBUb3VjaEVuZChfbm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Fuc3dlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX25vZGUuekluZGV4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcm9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjE1LCB7IHg6IHRoaXMuc3RhcnRQb3NYIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ09iamVjdCA9IG51bGw7XG4gICAgICAgIH0sIDAuMik7XG4gICAgfVxuICAgIGNoZWNrT3JkZXIoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMuZ2V0Q3VycmVudFdvcmQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IHdvcmQgPVwiLCBjdXJyZW50V29yZCk7XG4gICAgICAgIGxldCB0YXJnZXRXb3JkID0gdGhpcy5jb3JyZWN0QW5zd2VyOyAvLyBEZWZpbmUgeW91ciB0YXJnZXQgd29yZCBoZXJlXG5cbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkID09PSB0YXJnZXRXb3JkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3Igd2hlbiB0aGUgb3JkZXIgaXMgY29ycmVjdFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuZWVkIGl0ZXJhdGlvbi0tXCIgKyB0aGlzLm5lZWRSZWl0ZXJhdGlvbik7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uc05vZGUpLnRvKDAuMjUsIHsgc2NhbGVYOiAwIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpKS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBWT2R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdFZPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWT2R1cmF0aW9uID0gdGhpcy5jb3JyZWN0Vk8uZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RWTywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgVk9kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMjUpO1xuICAgICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBsZXQgVk9kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdFZPKSB7XG4gICAgICAgICAgICAgICAgICAgIFZPZHVyYXRpb24gPSB0aGlzLmNvcnJlY3RWTy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFZPLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBWT2R1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9LCAwLjc1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW5jb3JyZWN0IG9yZGVyLlwiKTtcbiAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgbG9naWMgZm9yIHdoZW4gdGhlIG9yZGVyIGlzIGluY29ycmVjdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFdvcmQoKSB7XG4gICAgICAgIC8vIFNvcnQgdGhlIG5vZGVzIGJhc2VkIG9uIHRoZWlyIHgtY29vcmRpbmF0ZVxuICAgICAgICBsZXQgc29ydGVkTm9kZXMgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGEueCAtIGIueCk7XG5cbiAgICAgICAgbGV0IHdvcmQgPSBzb3J0ZWROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXS5pc09wdGlvblRleHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxOb2RlID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpOyAvLyBBZGp1c3QgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQ29tcG9uZW50ID0gbGFiZWxOb2RlID8gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGFiZWwgVGV4dDogXCIsIGxhYmVsQ29tcG9uZW50LnN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbENvbXBvbmVudC5zdHJpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYWJlbCBDb21wb25lbnQgbm90IGZvdW5kIG9yIG5lc3RlZCBpbiBub2RlOiBcIiwgY2hpbGQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGVkIFdvcmQ6IFwiLCB3b3JkKTtcbiAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfVxuXG4gICAgTG9hZE5leHRRdWVzdGlvbigpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIC8vcGxheWpvY2tleVxuICAgICAgICAvLyBhZnRlciBqb2NrZXkgY2FsbCBiZWxvdyBhbmltYXRpb25cbiAgICAgICAgaWYgKHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAocGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgT3B0aW9uc0xheW91dCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xuXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xuXG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xuICAgICAgICAgICAgbGV0IG9wdGlvbldpZHRoID0gb3B0aW9uLndpZHRoO1xuICAgICAgICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gb3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICAgICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcbiAgICAgICAgbGV0IHRvdGFsV2lkdGhXaXRoUGFkZGluZyA9IHRvdGFsV2lkdGggKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxXaWR0aFdpdGhQYWRkaW5nKTtcblxuICAgICAgICBsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cbiAgICAgICAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xuXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXG4gICAgICAgICAgICBvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxuICAgICAgICAgICAgbGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgKG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYKTtcbiAgICAgICAgICAgIG9wdGlvbi54ID0gcG9zWCAtIChvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYKTtcblxuICAgICAgICAgICAgYWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG5cbiAgICAgICAgICAgIC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XG5cbiAgICAgICAgLy8gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJhY3R1YWwgdGV4dCBcIiwgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJhY3R1YWwgc2NhbGUgXCIsIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLnNjYWxlKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYWN0dWFsIHdpZHRoIFwiLCBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS53aWR0aCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImFjdHVhbCBmb250IHNpemUgXCIsIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUpO1xuICAgICAgICAvLyAgICAgLy8gZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5oZWlnaHQgPSBvcHRpb25UZXh0Rm9udFNpemU7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VDaGlsZHJlbihjZW50ZXJOb2RlOiBjYy5Ob2RlLCBzcGFjaW5nOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gY2VudGVyTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0b3RhbCB3aWR0aCByZXF1aXJlZFxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBjaGlsZC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxuXG4gICAgICAgIC8vIFN0YXJ0aW5nIFggcG9zaXRpb25cbiAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcblxuICAgICAgICAvLyBBcnJhbmdlIGNoaWxkcmVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGQueCA9IHN0YXJ0WCArIGNoaWxkLndpZHRoIC8gMjtcbiAgICAgICAgICAgIHN0YXJ0WCArPSBjaGlsZC53aWR0aCArIHNwYWNpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbGxKb2NrZXkoKSB7XG4gICAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zc2l0aXZlXCIsIFwicG9zc2l0aXZlMlwiLCBcInBvc3NpdGl2ZTNcIiwgXCJwb3NzaXRpdmU0XCIsIFwicG9zc2l0aXZlNVwiLCBcInBvc3NpdGl2ZTZcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfNlwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xuICAgICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcbiAgICAgICAgICAgIGpvY2tleXR3ZWVuID0gWzg3MCwgODcwXTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sIHRoaXMuY3VycmVudEpvY2tleS55KTtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiYgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soYXVkaW9DbGlwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XG4gICAgfVxuXG4gICAgT25Tb3VuZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uVk8sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
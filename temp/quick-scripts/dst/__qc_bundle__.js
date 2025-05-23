
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
require('./assets/Framework/Jockeys/Scripts/Jockey');
require('./assets/Framework/Prefabs/ProgressBar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Functionalities');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/Scripts/CustomWidget0');
require('./assets/Games/Scripts/IData');
require('./assets/Games/Scripts/PlayVideo');
require('./assets/Games/Scripts/StartGame0');
require('./assets/Games/Scripts/demoScript');
require('./assets/Games/Scripts/endScreen');
require('./assets/Games/Scripts/gameplay');
require('./assets/Games/Scripts/globalVariables');
require('./assets/Games/Scripts/titleScript');
require('./assets/Games/Scripts/titleScript1');
require('./assets/Games/Scripts/video');
require('./assets/Games/Tictock/Scripts/questionData');
require('./assets/Games/Tictock/Scripts/questionManager');
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
cc._RF.push(module, '48531ApPP1NI6u5BXtLd2K5', 'empty');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxlbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa156p3gAtEIKy7RL2BRjec', 'gameplay');
// Games/Scripts/gameplay.ts

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
var IData_1 = require("./IData");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.questionAudio = [];
        _this.positiveFeedbackSound = [];
        _this.negativeFeedbackSound = [];
        _this.ReinforementSound = [];
        _this.optionSounds = [];
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.particlesSound = null;
        _this.data = [new IData_1.IData()];
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
        _this.positiveAudios = [];
        _this.isClicked = false;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.wrongAnswerCount = 0;
        _this.isDone = [];
        _this.createdOptions = [];
        _this.offsetX = 0;
        _this.totalLevels = 5;
        _this.answerValues = [];
        _this.viewPortWidth = 720;
        _this.viewPortHeight = 1280;
        _this.canTouch = true;
        _this.isChar1 = true;
        _this.isFirstClick = false;
        _this.isWrong = false;
        _this.defaultTime = 15;
        _this.touchDone = [];
        _this.popupTime = 0;
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
    NewClass.prototype.Updatedata = function () {
        this.LoadQuestion();
        this.scheduleOnce(function () {
            //console.log("total options/answers = ",this.data[globalVariables.Instance.currentLevel-1].positions);
        }, 0.2);
    };
    NewClass.prototype.LoadQuestion = function () {
        var _this = this;
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            var _jsonData = _jsonFile["json"];
            _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            // this.loadData();
        });
    };
    NewClass.prototype.loadData = function () {
        for (var i = 0; i < 7; i++) {
            cc.resources.load(this.data[i].answerObject);
            cc.resources.load(this.data[i].optionAnimationImages);
        }
    };
    NewClass.prototype.PlayQuestion = function (_data) {
        return 1;
    };
    NewClass.prototype.onLoad = function () {
        var _this = this;
        // this.fetchData();
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("curtain")
                .getComponent(cc.Animation)
                .play();
        }, 0.5);
        this.node.getChildByName("ThirdNode").active = true;
        //this.answerValues = globalVariables.Instance.answerValues;
        this.Updatedata();
        var jockeyNode = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
        jockeyNode.getComponent(cc.Animation).play("titleAnim");
        jockeyNode.getComponent(cc.Animation).on("finished", function () {
            // jockeyNode.width = 250;
            // jockeyNode.height = 250;
            _this.jockeyReposition(_this.node.getChildByName("podium"));
        }, this);
        cc.director.preloadScene("endScreen");
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.callStartGame();
        }, 2);
    };
    NewClass.prototype.callStartGame = function () {
        var _this = this;
        this.setMultipleAnswerEnvironment();
        // console.log("start : ");
        for (var i = 0; i < this.totalLevels; i++) {
            this.answerValues[i] = false;
        }
        this.setProgressBar();
        //ga.name;
        // ga('event', "Tap", {
        //     'event_category': "Link",
        //     'event_label': "Create Game",
        //     'value': <1>
        // });
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        //console.log("levelStarted--" + cc.director.getScene().name);
        if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
            //console.log("Congratulations.........!!!!!!!!!!!!!!!!");
            // cc.director.preloadScene("endScreen");
        }
        else {
            //console.log("loaddddddddd@@@@@@@@@@@",parseInt(cc.director.getScene().name));
            //cc.director.preloadScene((parseInt(cc.director.getScene().name)+1).toString());
        }
        this.scheduleOnce(function () {
            _this.fetchData();
        }, 0.2);
        this.scheduleOnce(function () {
            //this.node.getChildByName("template").destroy();
            _this.setMultipleAnswerEnvironment();
            _this.createAnswerObject();
            // cc.tween(this.node.getChildByName("Question"))
            //     .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            _this.scheduleOnce(function () {
                //this.AnswerNode.x = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x;
                //this.AnswerNode.y = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y;
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                _this.createOptionObject(_this.maxOptions);
                _this.playSound(_this.popSound);
                _this.scheduleOnce(function () {
                    for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) {
                        _this.isDone[i] = false;
                    }
                    _this.node
                        .getChildByName("Options")
                        .children.forEach(function (element) {
                        element.on("touchstart", function (event) {
                            if (this.canTouch) {
                                this.TouchStart(element, event);
                            }
                        }, _this);
                    });
                }, 0.4);
            }, 0);
        }, 0.3);
        this.scheduleOnce(function () {
            //this.scheduleOnce(() => {
            _this.playSound(_this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1]);
            //}, 0.6);
        }, 0.7);
    };
    NewClass.prototype.callJockey = function () {
        var _this = this;
        cc.tween(this.node.getChildByName("Jockey"))
            .to(0.5, { x: 475 }, { easing: "sineInOut" })
            .start();
        this.scheduleOnce(function () {
            if (globalVariables_1.default.Instance.currentLevel % 2 == 0) {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton).paused = false;
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "dance", false);
            }
            else {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton).paused = false;
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "thumbs_up", false);
            }
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("Jockey"))
                    .to(0.5, { x: 1600 }, { easing: "sineInOut" })
                    .start();
            }, _this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration);
        }, 0.5);
    };
    NewClass.prototype.fetchData = function () {
        this.correctAnswerCount = 0;
        this.maxOptions =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].totalOptions;
        this.SubImage =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].SubImage;
        this.wrongAnswerLimit =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].wrongAnswersLimit;
        this.answers =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].answers;
        this.scaleArray =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray;
        this.positionType =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].positionType;
        this.feedbacktype =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].feedbacktype;
        this.totalAnswers = this.answers.length;
        this.question =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].question;
        this.questionSound =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].questionSound;
        this.textArray =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray;
        this.answerObject =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].answerObject;
        this.optionImages =
            this.data[globalVariables_1.default.Instance.currentLevel - 1].optionAnimationImages;
    };
    NewClass.prototype.CheckForIsDone = function (_node) {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name ==
                _node.name) {
                this.isDone[i] = true;
            }
        }
    };
    NewClass.prototype.TouchStart = function (_node, _event) {
        var _this = this;
        // console.log("Inside touchstart : ")
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        //console.log("touch start : ");
        var isStop = false;
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name ==
                this.node.getChildByName("Options").children[i].name &&
                this.isDone[i]) {
                isStop = true;
                break;
            }
        }
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (_node.name == this.touchDone[i]) {
                isStop = true;
                break;
            }
        }
        if (!isStop) {
            var isCorrect = false;
            for (var i = 0; i < this.answers.length; i++) {
                if (parseInt(_node.name) - 1 == this.answers[i]) {
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
                var audioSource = this.node
                    .getChildByName("audioNode")
                    .getComponent(cc.AudioSource);
                audioSource.clip =
                    this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
                audioSource.play();
                // this.scheduleOnce(()=>{
                //     audioSource.clip = this.ReinforementSound[globalVariables.Instance.currentLevel-2];
                //     audioSource.play();
                // },this.positiveFeedbackSound[globalVariables.Instance.currentLevel-1].duration);
                console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
                this.wrongAnswerCount = 0;
                //console.log("correct is clicked = ",_node.name);
                this.callJockeyAnim(0);
                // cc.tween(_node)
                //     .to(0.2, { x: _node.x }, { easing: 'sineInOut' })
                //     .to(0.2, { x: 360 }, { easing: 'sineInOut' }).start();
                // cc.tween(_node)
                //     .to(0.2, { y: _node.y }, { easing: 'sineInOut' })
                //     .to(0.2, { y: 640 }, { easing: 'sineInOut' }).start();
                if (this.feedbacktype.length == 1) {
                    //this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    //this.node.getComponent(cc.AudioSource).play();
                    //this.playAudio("/sounds/CorrectAnswer");
                    this.playSound(this.rightSound);
                    //this.scheduleOnce(() => {
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    //}, 0.5);
                }
                else if (this.feedbacktype.length == 2) {
                    this.node.getComponent(cc.AudioSource).clip =
                        this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(function () {
                        _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
                    }, 0.8);
                }
                else if (this.feedbacktype.length == 3) {
                    this.node.getComponent(cc.AudioSource).clip =
                        this.positiveSound;
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
                var audioSource = this.node
                    .getChildByName("audioNode")
                    .getComponent(cc.AudioSource);
                audioSource.clip =
                    this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
                audioSource.play();
                //console.log("wrong is clicked = ",this.isDone);
                console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
                this.callNegativeFeedback(_node);
                this.callJockeyAnim(1);
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
                this.answerValues[globalVariables_1.default.Instance.currentLevel - 1] =
                    true;
                levelend = true;
                this.canTouch = false;
                //console.log("Level Completed...!!!!!!!!!");
                if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
                    this.setProgressBar();
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    this.isClicked = false;
                    //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                    // this.scheduleOnce(() => {
                    //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                    //     this.node.getComponent(cc.AudioSource).play();
                    // }, 3);
                    this.scheduleOnce(function () {
                        _this.setProgressBar();
                        _this.scheduleOnce(function () {
                            _this.destroyOptions();
                            // this.setReinforsementScreen("positive");
                            _this.scheduleOnce(function () {
                                // cc.tween(this.node.getChildByName("podium"))
                                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                                _this.destroyRightOptions();
                                _this.destroyAnswers();
                                _this.node
                                    .getChildByName("bg")
                                    .getChildByName("glow")
                                    .getComponent(cc.Animation)
                                    .stop();
                                _this.node
                                    .getChildByName("bg")
                                    .getChildByName("glow").active = false;
                                _this.scheduleOnce(function () {
                                    // this.canTouch = true;
                                    _this.isWrong = false;
                                    globalVariables_1.default.Instance.answerArray =
                                        _this.answerValues;
                                    _this.scheduleOnce(function () {
                                        console.log("levelComplete--" +
                                            globalVariables_1.default.Instance
                                                .currentLevel);
                                        cc.director.loadScene("endScreen");
                                    }, 2);
                                }, 0.5);
                            }, _this.popupTime + 0.5);
                        }, 2);
                    }, 1);
                    //this.callPositiveReaction();
                }
                else {
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    this.isClicked = false;
                    this.canTouch = false;
                    globalVariables_1.default.Instance.currentLevel += 1;
                    this.setProgressBar();
                    this.scheduleOnce(function () {
                        _this.setScreen("positive");
                    }, 3);
                    //console.log("currentLevel : ",globalVariables.Instance.currentLevel);
                    // this.scheduleOnce(()=>{
                    //     this.callPositiveReaction();
                    // },1);
                }
            }
        }
    };
    NewClass.prototype.playSound = function (name) {
        this.node.getComponent(cc.AudioSource).clip = name;
        this.node.getComponent(cc.AudioSource).play();
    };
    NewClass.prototype.playQuestionSound = function (name) {
        this.node.getComponent(cc.AudioSource).clip =
            this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1];
        this.node.getComponent(cc.AudioSource).play();
    };
    NewClass.prototype.setScreen = function (type1) {
        var _this = this;
        this.touchDone = [];
        console.log("levelComplete--" + (globalVariables_1.default.Instance.currentLevel - 1));
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        this.scheduleOnce(function () {
            //this.node.getChildByName("Question").getComponent(cc.Label).string = "";
            //this.destroyAnswers();
            _this.destroyOptions();
            // this.setReinforsementScreen(type1);
            _this.scheduleOnce(function () {
                // cc.tween(this.node.getChildByName("podium"))
                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                _this.destroyRightOptions();
                _this.destroyAnswers();
                _this.node
                    .getChildByName("bg")
                    .getChildByName("glow")
                    .getComponent(cc.Animation)
                    .stop();
                _this.node.getChildByName("bg").getChildByName("glow").active =
                    false;
                _this.scheduleOnce(function () {
                    // this.canTouch = true;
                    _this.isFirstClick = false;
                    _this.isWrong = false;
                    _this.fetchData();
                    _this.createAnswerObject();
                    _this.setMultipleAnswerEnvironment();
                    _this.scheduleOnce(function () {
                        _this.createOptionObject(_this.maxOptions);
                        _this.playSound(_this.popSound);
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                        _this.scheduleOnce(function () {
                            for (var i = 0; i <
                                _this.node.getChildByName("Options").children
                                    .length; i++) {
                                _this.isDone[i] = false;
                            }
                            _this.node
                                .getChildByName("Options")
                                .children.forEach(function (element) {
                                element.on("touchstart", function (event) {
                                    if (this.canTouch) {
                                        this.TouchStart(element, event);
                                    }
                                }, _this);
                            });
                            _this.scheduleOnce(function () {
                                // Here this refers to component
                                this.isClicked = true;
                            }, 1);
                            _this.scheduleOnce(function () {
                                this.playSound(this.questionAudio[globalVariables_1.default.Instance.currentLevel -
                                    1]);
                            }, _this.popSound.duration);
                        }, 0.1);
                    }, 0.4);
                }, 0.5);
            }, _this.popupTime + 0.5);
        }, 2);
    };
    NewClass.prototype.setReinforsementScreen = function (type) {
        var _this = this;
        if (type == "positive") {
            this.popupTime =
                this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration + this.magicalSound.duration;
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("podium")
                .getChildByName("Puzzle")
                .getComponent(cc.Animation)
                .play("puzzlePositive");
            this.node.getChildByName("bg").getChildByName("glow").active = true;
            this.node
                .getChildByName("bg")
                .getChildByName("glow")
                .getComponent(cc.Animation)
                .play();
            this.playSound(this.magicalSound);
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: "sineInOut" })
                .start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: "sineInOut" })
                .start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name &&
                    this.isDone[i]) {
                    this.node
                        .getChildByName("Options")
                        .children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: "sineInOut" })
                        .start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2]);
                _this.callJockey();
            }, this.magicalSound.duration);
        }
        else if (type == "negative") {
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: "sineInOut" })
                .start();
            this.node
                .getChildByName("podium")
                .getChildByName("Puzzle")
                .getComponent(cc.Animation)
                .play("puzzleNegative");
            this.popupTime =
                this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 1].duration;
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: "sineInOut" })
                .start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: "sineInOut" })
                .start();
            for (var i = 0; i < this.maxOptions; i++) {
                if (this.node.getChildByName("Options").children[i].name &&
                    this.isDone[i]) {
                    this.node
                        .getChildByName("Options")
                        .children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: "sineInOut" })
                        .start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: "sineInOut" })
                        .start();
                }
            }
            this.scheduleOnce(function () {
                _this.playSound(_this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 2]);
            }, 0.5);
        }
        else if (type == "none") {
            this.popupTime = 0;
        }
    };
    NewClass.prototype.createAnswerObject = function () {
        var _this = this;
        // console.log(`winSize: `+(cc.winSize.width/cc.winSize.height));
        //let answerNode = new cc.Node;
        this.AnswerNode = this.node.getChildByName("ThirdNode");
        this.AnswerNode.opacity = 255;
        this.AnswerNode.scale = 0;
        this.AnswerNode.x = this.convertXPos(cc.winSize.width *
            this.data[globalVariables_1.default.Instance.currentLevel - 1]
                .answerpositions[0].x);
        this.AnswerNode.y = this.convertYPos(cc.winSize.height *
            this.data[globalVariables_1.default.Instance.currentLevel - 1]
                .answerpositions[0].y);
        // this.updateSprites(this.answerObject,this.node.getChildByName("ThirdNode").getChildByName("AnswerNode"));
        this.AnswerNode.getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = this.question;
        // console.log(`QUESTION: `+this.question+`  `+this.AnswerNode.getChildByName(`AnswerNode`).getChildByName(`Question`));
        //this.playSound(this.popSound);
        var _scale = 0.8;
        if (cc.winSize.height < 720) {
            _scale = 0.8;
        }
        cc.tween(this.AnswerNode)
            .to(1, { scale: _scale }, { easing: "sineInOut" })
            .call(function () {
            _this.canTouch = true;
        })
            .start();
    };
    NewClass.prototype.createOptionObject = function (numOfOptions) {
        // console.log("optionOBJECT ::",numOfOptions);
        switch (this.positionType) {
            case "custom": {
                for (var i = 0; i < numOfOptions; i++) {
                    this.createdOptions[i] = cc.instantiate(this.node.getChildByName("template"));
                    this.createdOptions[i].name = (i + 1).toString();
                    // console.log("created options :::::", this.createdOptions[i].name);
                    this.createdOptions[i].opacity = 0;
                    this.createdOptions[i].children[0].getComponent(cc.Label).string =
                        this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray[i]; //(i+1).toString();
                    this.node
                        .getChildByName("Options")
                        .insertChild(this.createdOptions[i], i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale = 0;
                    this.createdOptions[i].opacity = 255;
                    this.createdOptions[i].x = this.convertXPos(cc.winSize.width *
                        this.data[globalVariables_1.default.Instance.currentLevel - 1]
                            .positions[i].x);
                    this.createdOptions[i].y = this.convertXPos(cc.winSize.width *
                        this.data[globalVariables_1.default.Instance.currentLevel - 1]
                            .positions[i].y);
                    this.createdOptions[i].active = true;
                    if (this.SubImage == 0) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i]);
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = 0;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                    }
                    else if (this.SubImage == 1) {
                        this.updateSprites(this.optionImages[i], this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite"));
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = -170;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                    }
                    this.optionImages[i],
                        (this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite").width = 550);
                    this.optionImages[i],
                        (this.createdOptions[i]
                            .getChildByName("image")
                            .getChildByName("subSprite").height = 550);
                    cc.tween(this.createdOptions[i])
                        .to(1, {
                        scale: this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray[i],
                    }, { easing: "sineInOut" })
                        .start();
                    // if(this.answers.length<=1){
                    //     this.createdOptions[i].getChildByName("tick").active = false;
                    // }
                    // else{
                    //     this.createdOptions[i].getChildByName("tick").active = true;
                    // }
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
        var _loop_1 = function (i) {
            if (this_1.node.getChildByName("Options").children[i].name &&
                !this_1.isDone[i]) {
                cc.tween(this_1.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                    .call(function () {
                    _this.createdOptions[i].destroy();
                })
                    .start();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.maxOptions; i++) {
            _loop_1(i);
        }
        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(!this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     }
        // }, 0.5);
    };
    NewClass.prototype.destroyRightOptions = function () {
        var _this = this;
        var _loop_2 = function (i) {
            if (this_2.node.getChildByName("Options").children[i].name &&
                this_2.isDone[i]) {
                cc.tween(this_2.createdOptions[i])
                    .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                    .call(function () {
                    _this.createdOptions[i].destroy();
                })
                    .start();
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.maxOptions; i++) {
            _loop_2(i);
        }
        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     }
        // }, 0.5);
    };
    NewClass.prototype.destroyAnswers = function () {
        if (this.AnswerNode) {
            cc.tween(this.AnswerNode)
                .to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .start();
            this.scheduleOnce(function () {
                // this.AnswerNode.destroy();
            }, 0.5);
        }
    };
    NewClass.prototype.setMultipleAnswerEnvironment = function () {
        this.node
            .getChildByName("ThirdNode")
            .getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = "";
        this.node
            .getChildByName("ThirdNode")
            .getChildByName("AnswerNode")
            .getChildByName("Question")
            .getComponent(cc.Label).string = this.question;
        // if(this.SubImage==1){
        //     return;
        // }
        // else{
        //     this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string=this.question;
        // }
    };
    NewClass.prototype.callNegativeFeedback = function (node1) {
        var _this = this;
        this.touchDone.push(node1.name);
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        //let tween1 =  cc.tween(node1)
        //node1.color = new cc.Color(232, 30, 43);
        var optionsNode = node1.parent;
        // optionsNode.children.forEach(element => {
        //     if(element.name == this.answers[0].toString()){
        //         console.log(`RIGHT`);
        //         element.getChildByName("right").active = true;
        //         cc.tween(element.getChildByName("right")).to(0.1,{opacity:0})
        //         .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        //     }
        // });
        // console.log(`njnnnn `+(this.answers[0]+1);
        optionsNode
            .getChildByName((this.answers[0] + 1).toString())
            .getChildByName("right").active = true;
        cc.tween(optionsNode
            .getChildByName((this.answers[0] + 1).toString())
            .getChildByName("right"))
            .to(0.15, { opacity: 0 })
            .to(0.15, { opacity: 255 })
            .to(0.15, { opacity: 0 })
            .to(0.15, { opacity: 255 })
            .start();
        // if(node1.name == `1`){
        //     optionsNode.getChildByName(`2`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`2`).getChildByName("right")).to(0.15,{opacity:0})
        //     .to(0.15,{opacity:255}).to(0.15,{opacity:0}).to(0.15,{opacity:255}).start();
        // }
        // else{
        //     optionsNode.getChildByName(`1`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`1`).getChildByName("right")).to(0.1,{opacity:0})
        //     .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        // }
        node1.getChildByName("right").active = false;
        node1.getChildByName("wrong").active = true;
        node1
            .getChildByName("image")
            .getChildByName("subSprite")
            .getComponent(cc.Sprite)
            .setMaterial(0, this.greyMat);
        node1.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.tween(node1)
            .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x - 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x - 10 }, { easing: "sineInOut" })
            .to(0.1, { x: node1.x }, { easing: "sineInOut" })
            .start();
        //call negative audio
        // this.node.getComponent(cc.AudioSource).clip = this.negativeSound;
        // this.node.getComponent(cc.AudioSource).play();
        //this.playAudio("/sounds/incorrectAnswer");
        this.playSound(this.wrongSound);
        // this.scheduleOnce(() => {
        //     //this.playSound(this.negativeFeedback[globalVariables.Instance.currentLevel-1]);
        //     this.canTouch = true;
        // }, 0.8);
        // this.scheduleOnce(() => {
        //     this.canTouch = true;
        // }, this.negativeFeedback[globalVariables.Instance.currentLevel-1].duration);
        this.scheduleOnce(function () {
            //tween1.stop();
            if (_this.wrongAnswerCount >= _this.wrongAnswerLimit) {
                _this.wrongAnswerCount = 0;
                _this.canTouch = false;
                //this.callNegativeReaction();
                _this.hilightLeftAnswers();
                if (globalVariables_1.default.Instance.currentLevel == _this.totalLevels) {
                    _this.isClicked = false;
                    _this.setProgressBar();
                    //this.node.getChildByName("Options").getChildByName(this.answers[0].toString());
                    _this.isDone[_this.answers[0]] = true;
                    _this.scheduleOnce(function () {
                        _this.destroyOptions();
                        // this.setReinforsementScreen("negative");
                        _this.scheduleOnce(function () {
                            // cc.tween(this.node.getChildByName("podium"))
                            //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                            _this.destroyRightOptions();
                            _this.destroyAnswers();
                            _this.node
                                .getChildByName("bg")
                                .getChildByName("glow")
                                .getComponent(cc.Animation)
                                .stop();
                            _this.node
                                .getChildByName("bg")
                                .getChildByName("glow").active = false;
                            _this.scheduleOnce(function () {
                                // this.canTouch = true;
                                _this.isWrong = false;
                                globalVariables_1.default.Instance.answerArray =
                                    _this.answerValues;
                                console.log("levelComplete--" +
                                    globalVariables_1.default.Instance.currentLevel);
                                cc.director.loadScene("endScreen");
                            }, 0.5);
                        }, _this.popupTime + 0.5);
                    }, 2);
                }
                else {
                    _this.isWrong = true;
                    _this.isClicked = false;
                    globalVariables_1.default.Instance.currentLevel += 1;
                    _this.setProgressBar();
                    _this.isDone[_this.answers[0]] = true;
                    // this.setScreen("negative");
                    _this.scheduleOnce(function () {
                        _this.setScreen("negative");
                    }, 3);
                }
            }
        }, 0.8);
    };
    NewClass.prototype.callPositiveFeedback = function (node1, feedbackName) {
        var _this = this;
        switch (feedbackName) {
            case "confetti": {
                //this.node.getChildByName("Options").getChildByName("particle").setPosition(node1.x,node1.y);
                //node1.color = new cc.Color(71, 255, 0);
                node1.getChildByName("wrong").active = false;
                node1.getChildByName("right").active = true;
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal").scale = 1;
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal")
                    .setPosition(node1.x, node1.y);
                this.node
                    .getChildByName("Options")
                    .getChildByName("Animal")
                    .getComponent(cc.Animation)
                    .play();
                this.scheduleOnce(function () {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    _this.node
                        .getChildByName("Options")
                        .getChildByName("Animal")
                        .setPosition(-500, -500);
                }, 1);
                //extra code
                // if(node1.getChildByName("tick").active){
                //     this.updateSprites("/whiteTick",node1.getChildByName("tick"));
                // }
                cc.tween(this.node.getChildByName("Options").getChildByName("Animal"))
                    .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                    .to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "destroy": {
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: "sineInOut" })
                    .to(0.9, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_right": {
                cc.tween(node1)
                    .to(0.9, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.9, { x: this.viewPortWidth + 100 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_left": {
                cc.tween(node1)
                    .to(0.2, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.2, { x: -100 }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "movement_top": {
                cc.tween(node1)
                    .to(2, { y: this.viewPortHeight + 100 }, { easing: "sineInOut" })
                    .start();
                cc.tween(node1)
                    .repeatForever(cc
                    .tween()
                    .to(0.2, { x: node1.x + 30 }, { easing: "sineInOut" })
                    .to(0.2, { x: node1.x }, { easing: "sineInOut" }))
                    .start();
                break;
            }
            case "movement_bottom": {
                //game specific code
                if (globalVariables_1.default.Instance.currentLevel == 4) {
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                        .to(0.5, { x: -280 }, { easing: "sineInOut" })
                        .start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: "sineInOut" })
                    .to(0.5, { y: node1.y - 50 }, { easing: "sineInOut" })
                    .start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: "sineInOut" })
                    .start(); //bounceIn
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
                var outlineScale = node1.scale + (node1.scale * 30) / 100;
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
                    .to(0.3, { scale: outlineScale + 0.1 }, { easing: "sineInOut" })
                    .to(0.3, { scale: outlineScale }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "frameChange": {
                //node1.getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                cc.tween(node1)
                    .to(0.3, { scale: node1.scale + 0.1 }, { easing: "sineInOut" })
                    .to(0.3, { scale: node1.scale }, { easing: "sineInOut" })
                    .start();
                break;
            }
            case "shake": {
                var tween1_1 = cc
                    .tween(node1)
                    .repeatForever(cc
                    .tween()
                    .to(0.1, { x: node1.x }, { easing: "sineInOut" })
                    .to(0.1, { x: node1.x + 10 }, { easing: "sineInOut" }))
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
                        .to(1, { x: node1.x - 325 }, { easing: "sineInOut" })
                        .start();
                }
                else if (node1.name == "1") {
                    cc.tween(node1)
                        .to(1, { x: node1.x + 325 }, { easing: "sineInOut" })
                        .start();
                }
                break;
            }
            default: {
                //statements;
                cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: "sineInOut" })
                    .to(0.9, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
                break;
            }
        }
    };
    NewClass.prototype.destroyOtherOptions = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            if (this.node.getChildByName("Options").children[i].name &&
                !this.isDone[i]) {
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: "sineInOut" })
                    .start();
            }
        }
    };
    NewClass.prototype.update = function (dt) { };
    NewClass.prototype.finishedAnim = function (event) {
        //this.node.getChildByName("Options").getChildByName("particle").setPosition(this.node.getChildByName("bg").getChildByName("oneMany").x,this.node.getChildByName("bg").getChildByName("oneMany").y);
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
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .play("negativeReaction1");
        }
        else {
            console.log("characterAppear--Mili");
            this.isChar1 = false;
            this.node.getChildByName("Jockey").active = true;
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .play("negativeReaction2");
            this.node
                .getChildByName("Jockey")
                .getComponent(cc.Animation)
                .pause("negativeReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            cc.tween(this.node.getChildByName("Jockey"))
                .to(0.3, { x: 475 })
                .start();
            this.scheduleOnce(function () {
                _this.node
                    .getChildByName("Jockey")
                    .getComponent(cc.Animation)
                    .play("negativeReaction2");
            }, 0.4);
        }
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            _this.node.getComponent(cc.AudioSource).play();
        }, 0.9);
    };
    NewClass.prototype.increaseprogress = function () {
        var _this = this;
        globalVariables_1.default.Instance.fillRange =
            globalVariables_1.default.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill"))
            .to(0.5, { width: globalVariables_1.default.Instance.fillRange })
            .start();
        this.scheduleOnce(function () {
            _this.ShowStar();
        }, 0.5);
    };
    NewClass.prototype.ShowStar = function () {
        if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width ==
            (394 * 1) / this.totalLevels) {
            console.log("starsEarned--1");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width ==
            (394 * Math.ceil(this.totalLevels / 2)) / this.totalLevels) {
            console.log("starsEarned--2");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star2").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star2").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star3").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star3").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star2"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star3"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
        else if (this.node.getChildByName("progressBar").getChildByName("fill")
            .width == 394) {
            console.log("starsEarned--3");
            this.node
                .getChildByName("progressBar")
                .getChildByName("star4").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star5").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star6").scale = 0;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star4").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star5").active = true;
            this.node
                .getChildByName("progressBar")
                .getChildByName("star6").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star4"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star5"))
                .to(0.5, { scale: 0.3 })
                .start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star6"))
                .to(0.5, { scale: 0.3 })
                .start();
        }
    };
    NewClass.prototype.setProgressBar = function () {
        var progressBar = this.node
            .getChildByName("ThirdNode")
            .getChildByName("progressBar");
        // console.log("answerValues : ", this.answerValues)
        for (var i = 0; i < this.totalLevels; i++) {
            if (this.answerValues[i] == true) {
                progressBar.children[i].getChildByName("unattemptedQ").active =
                    false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
            }
            else {
                if (globalVariables_1.default.Instance.currentLevel == i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        true;
                }
                else if (globalVariables_1.default.Instance.currentLevel > i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        true;
                }
                else if (globalVariables_1.default.Instance.currentLevel < i + 1) {
                    progressBar.children[i].getChildByName("rightQ").active =
                        false;
                    progressBar.children[i].getChildByName("wrongQ").active =
                        false;
                    progressBar.children[i].getChildByName("nextQ").active =
                        false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = true;
                }
            }
        }
    };
    NewClass.prototype.updateSprites = function (_spriteName, _node) {
        cc.resources.load(_spriteName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            //console.log(_spriteName);
            _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
    };
    NewClass.prototype.UpdateAnimations = function (_spriteName, _node) {
        cc.resources.load(_spriteName, cc.AnimationClip, function (err, animation) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            _node.getComponent(cc.Animation).addClip(animation);
            _node.getComponent(cc.Animation).play(animation.name);
            // _updateFrame = spriteFrame;
        }.bind(this));
    };
    NewClass.prototype.playAudio = function (_audioPath) {
        var clip = null;
        // let audioClip: cc.AudioClip = null;
        cc.resources.load(_audioPath, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            // this.audioManager.play(audioClip.name, audioClip, false, "VO");
            // cc.audioEngine.play(audioClip, false, 1);
            cc.audioEngine.playEffect(audioClip, false);
            // console.log("audioClip name = ", audioClip.name);
            clip = audioClip;
        }.bind(this));
    };
    NewClass.prototype.hilightLeftAnswers = function () {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) {
            for (var j = 0; j < this.answers.length; j++) {
                if (parseInt(this.node.getChildByName("Options").children[i].name) -
                    1 ==
                    this.answers[j]) {
                    //this.node.getChildByName("Options").children[i].color = new cc.Color(71, 255, 0);
                    //console.log("Inside hilightLeftAnswers : "+this.node.getChildByName("Options").children[i].name);
                    // if(this.node.getChildByName("Options").children[i].getChildByName("tick").active){
                    //     this.updateSprites("/whiteTick",this.node.getChildByName("Options").children[i].getChildByName("tick"));
                    // }
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
    NewClass.prototype.convertXPos = function (x) {
        var val = x - cc.winSize.width / 2;
        return val;
    };
    NewClass.prototype.convertYPos = function (y) {
        var val = y - cc.winSize.height / 2;
        return val;
    };
    NewClass.prototype.jockeyReposition = function (_node) {
        _node.children[0].getComponent(cc.Animation).play();
        cc.tween(_node).to(1, { x: -450, y: -280, scale: 0.9 }).start();
    };
    NewClass.prototype.callJockeyAnim = function (num) {
        var _this = this;
        var jockeyNode = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
        var options2 = this.node.getChildByName("Options2");
        if (num == 0) {
            // console.log(`GOOD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            jockeyNode.getComponent(cc.Animation).on("finished", function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
            }, this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", function () {
                    jockeyNode
                        .getComponent(cc.Animation)
                        .play("puzzleIdle");
                }, _this);
                _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
            }, jockeyNode.getComponent(cc.Animation).getClips()[1].duration + this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
        else {
            // console.log(`BAD`);
            jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            jockeyNode.getComponent(cc.Animation).on("finished", function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
            }, this);
            this.scheduleOnce(function () {
                jockeyNode.getComponent(cc.Animation).play("puzzleStars");
                jockeyNode.getComponent(cc.Animation).on("finished", function () {
                    jockeyNode
                        .getComponent(cc.Animation)
                        .play("puzzleIdle");
                }, _this);
                _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
            }, jockeyNode.getComponent(cc.Animation).getClips()[3].duration + this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
    };
    NewClass.prototype.playDustAnim = function (num) {
        // console.log(`playParticles`);
    };
    NewClass.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };
    NewClass.prototype.getRandomFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    NewClass.prototype.playDustAnim2 = function (num1, num2, _node) {
        var _this = this;
        // console.trace(`deDust2`);
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var jockey = this.node
            .getChildByName("podium")
            .getChildByName("Puzzle");
        jockey.getComponent(cc.AudioSource).clip = this.particlesSound;
        this.scheduleOnce(function () {
            jockey.getComponent(cc.AudioSource).play();
        }, 0.75);
        // jockey.getComponent(cc.AudioSource).play();
        // console.log(`POS`+startPos);
        var colorsArray = ["#C042FF", "#FF0049", "#FCC000"];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_3 = function (i) {
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node());
            var trail = cc.instantiate(new cc.Node());
            particles.parent = _node;
            trail.parent = particles;
            particles.x = -450 + 640 + 20;
            particles.y = -280 + 360 + 70;
            // particles.position = jockey.getParent().convertToWorldSpaceAR(jockey.getParent().position);
            // particles.x += 420;
            // particles.y += 220;
            particles.addComponent(cc.Sprite).spriteFrame = this_3.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_3.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_3.getRandomInt(0, colorsArray.length)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_3.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = this_3.getRandomFloat(0.1, 0.5);
            trail.getComponent(cc.MotionStreak).stroke = this_3.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            // console.log(particles);
            this_3.scheduleOnce(function () {
                var rngParticlesSize = _this.getRandomInt(75, 125);
                _this.scheduleOnce(function () {
                    cc.tween(particles)
                        .to(0.5, {
                        width: rngParticlesSize,
                        height: rngParticlesSize,
                    }, { easing: "backOut" })
                        .start();
                }, 0.5);
                cc.tween(particles)
                    .bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, (3 * cc.winSize.width) / 4), _this.getRandomNumber(cc.winSize.height / 4, (3 * cc.winSize.height) / 4)))
                    .call(function () {
                    var _loop_4 = function (j) {
                        var bullets = cc.instantiate(new cc.Node());
                        var bTrails = cc.instantiate(new cc.Node());
                        bullets.addComponent(cc.Sprite).spriteFrame =
                            _this.dustImg;
                        bTrails.parent = bullets;
                        bTrails.addComponent(cc.MotionStreak).preview;
                        bTrails.getComponent(cc.MotionStreak).texture =
                            _this.dustTrailImg;
                        bTrails.getComponent(cc.MotionStreak).enabled =
                            true;
                        bTrails.getComponent(cc.MotionStreak).minSeg =
                            _this.getRandomFloat(0.1, 0.5);
                        bTrails.getComponent(cc.MotionStreak).stroke =
                            _this.getRandomNumber(10, 25);
                        bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        bTrails.getComponent(cc.MotionStreak).color =
                            new cc.Color(255, 255, 255);
                        bTrails.getComponent(cc.MotionStreak).enabled =
                            true;
                        bTrails.getComponent(cc.MotionStreak).fastMode =
                            true;
                        bullets.width = 0;
                        bullets.height = 0;
                        // bullets.angle = this.getRandomNumber(0, 359);
                        bullets.name = "bullets" + j;
                        bullets.parent = particles;
                        bullets.x = 0;
                        bullets.y = 0;
                        bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomInt(0, colorsArray.length)]);
                        // bullets.color = particles.color;
                        var rngSize = _this.getRandomNumber(100, 200);
                        cc.tween(bullets)
                            .to(0.25, { width: rngSize, height: rngSize }, { easing: "backOut" })
                            .start();
                        cc.tween(bullets)
                            .to(0.5, {
                            x: _this.getRandomNumber(bullets.x -
                                _this.getRandomNumber(100, 500), bullets.x +
                                _this.getRandomNumber(100, 500)),
                            y: _this.getRandomNumber(bullets.y -
                                _this.getRandomNumber(100, 500), bullets.y +
                                _this.getRandomNumber(100, 500)),
                        })
                            .start();
                        cc.tween(bullets)
                            .to(0.1, { opacity: 200 })
                            .to(0.1, { opacity: 255 })
                            .to(0.1, { opacity: 200 })
                            .to(0.1, { opacity: 255 })
                            .to(0.1, { opacity: 200, scale: 0 })
                            .call(function () {
                            bullets.destroy();
                            particles.destroy();
                        })
                            .start();
                    };
                    for (var j = 0; j < num2; j++) {
                        _loop_4(j);
                    }
                })
                    .start();
            }, 0.1 * (i + 1));
        };
        var this_3 = this;
        for (var i = 0; i < num1; i++) {
            _loop_3(i);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "magicalSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "questionAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveFeedbackSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeFeedbackSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "ReinforementSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "rightSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "optionSounds", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "dustImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], NewClass.prototype, "dustTrailImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "particlesSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGdhbWVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUFnQztBQUNoQyxxREFBZ0Q7QUFHMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzMURDO1FBOTBEQSxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsMkJBQXFCLEdBQW1CLEVBQUUsQ0FBQztRQUczQywyQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBRzNDLHVCQUFpQixHQUFtQixFQUFFLENBQUM7UUFTdkMsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBU2xDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLENBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsUUFBUSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLG9CQUFjLEdBQW1CLEVBQUUsQ0FBQztR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QUFDO2dEQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDRTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBekNoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBczFENUI7SUFBRCxlQUFDO0NBdDFERCxBQXMxREMsQ0F0MURxQyxFQUFFLENBQUMsU0FBUyxHQXMxRGpEO2tCQXQxRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBJRGF0YSB9IGZyb20gXCIuL0lEYXRhXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljcyB9IGZyb20gXCIuL2dhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0bWFnaWNhbFNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRxdWVzdGlvbkF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHBvc2l0aXZlRmVlZGJhY2tTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRuZWdhdGl2ZUZlZWRiYWNrU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0UmVpbmZvcmVtZW50U291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cmlnaHRTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHdyb25nU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRvcHRpb25Tb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuXHRkZWZhdWx0TWF0OiBjYy5NYXRlcmlhbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG5cdGdyZXlNYXQ6IGNjLk1hdGVyaWFsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0ZHVzdEltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuVGV4dHVyZTJEKVxyXG5cdGR1c3RUcmFpbEltZzogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwYXJ0aWNsZXNTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBkYXRhOiBJRGF0YVtdID0gW25ldyBJRGF0YSgpXTtcclxuXHRwcml2YXRlIGFuc3dlck9iamVjdDogc3RyaW5nO1xyXG5cdHByaXZhdGUgcXVlc3Rpb246IHN0cmluZyA9IFwiXCI7XHJcblx0cHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB0ZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XHJcblx0cHJpdmF0ZSBtYXhPcHRpb25zOiBudW1iZXIgPSA3O1xyXG5cdHByaXZhdGUgU3ViSW1hZ2U6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3cm9uZ0Fuc3dlckxpbWl0OiBudW1iZXIgPSA3O1xyXG5cdHByaXZhdGUgYW5zd2VyczogbnVtYmVyW10gPSBbXTtcclxuXHRwcml2YXRlIHBvc2l0aW9uVHlwZTogc3RyaW5nID0gXCJjdXN0b21cIjtcclxuXHRwcml2YXRlIGZlZWRiYWNrdHlwZTogc3RyaW5nW10gPSBbXTtcclxuXHRwcml2YXRlIHNjYWxlQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG5cdHByaXZhdGUgb3B0aW9uSW1hZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgcG9zaXRpdmVBdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblx0cHJpdmF0ZSBuZWdhdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblx0cHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG5cdHByaXZhdGUgaXNDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSB0b3RhbEFuc3dlcnM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgaXNEb25lOiBib29sZWFuW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVkT3B0aW9uczogY2MuTm9kZVtdID0gW107XHJcblx0cHJpdmF0ZSBBbnN3ZXJOb2RlOiBjYy5Ob2RlO1xyXG5cclxuXHRwcml2YXRlIG9mZnNldFg6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB0b3RhbExldmVsczogbnVtYmVyID0gNTtcclxuXHRwcml2YXRlIGFuc3dlclZhbHVlczogYm9vbGVhbltdID0gW107XHJcblxyXG5cdHByaXZhdGUgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gNzIwO1xyXG5cdHByaXZhdGUgdmlld1BvcnRIZWlnaHQ6IG51bWJlciA9IDEyODA7XHJcblxyXG5cdHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgaXNDaGFyMTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHJpdmF0ZSBpc0ZpcnN0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGlzV3Jvbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBkZWZhdWx0VGltZTogbnVtYmVyID0gMTU7XHJcblxyXG5cdHByaXZhdGUgdmFsdWU6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSB0b3VjaERvbmU6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdC8vcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvczpjYy5BdWRpb0NsaXBbXT1bXTtcclxuXHQvL3ByaXZhdGUgb3B0aW9uQW5pbWF0aW9uczpzdHJpbmdbXT1bXTtcclxuXHQvL3ByaXZhdGUgb3B0aW9uQXVkaW9zOnN0cmluZ1tdPVtdO1xyXG5cclxuXHQvL3ByaXZhdGUgZ2EgPSByZXF1aXJlKFwiZ2FcIik7XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG5cdFx0X251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcblx0XHRyZXR1cm4gX251bWJlcjtcclxuXHR9XHJcblxyXG5cdFVwZGF0ZWRhdGEoKSB7XHJcblx0XHR0aGlzLkxvYWRRdWVzdGlvbigpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwidG90YWwgb3B0aW9ucy9hbnN3ZXJzID0gXCIsdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0ucG9zaXRpb25zKTtcclxuXHRcdH0sIDAuMik7XHJcblx0fVxyXG5cclxuXHRMb2FkUXVlc3Rpb24oKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKGdhRGF0YSk7XHJcblx0XHRjYy5yZXNvdXJjZXMubG9hZChcInN0b3J5Qm9hcmRcIiwgT2JqZWN0LCAoX2Vycm9yLCBfanNvbkZpbGUpID0+IHtcclxuXHRcdFx0aWYgKF9lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IF9qc29uRGF0YTogb2JqZWN0ID0gX2pzb25GaWxlW1wianNvblwiXTtcclxuXHRcdFx0dGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfanNvbkRhdGFbXCJkYXRhXCJdKSk7XHJcblx0XHRcdC8vIHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bG9hZERhdGEoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG5cdFx0XHRjYy5yZXNvdXJjZXMubG9hZCh0aGlzLmRhdGFbaV0uYW5zd2VyT2JqZWN0KTtcclxuXHRcdFx0Y2MucmVzb3VyY2VzLmxvYWQodGhpcy5kYXRhW2ldLm9wdGlvbkFuaW1hdGlvbkltYWdlcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIFBsYXlRdWVzdGlvbihfZGF0YTogSURhdGEpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fVxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyB0aGlzLmZldGNoRGF0YSgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vdGhpcy5hbnN3ZXJWYWx1ZXMgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyVmFsdWVzO1xyXG5cdFx0dGhpcy5VcGRhdGVkYXRhKCk7XHJcblxyXG5cdFx0bGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFB1enpsZWApO1xyXG5cdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGB0aXRsZUFuaW1gKTtcclxuXHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXHJcblx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHQvLyBqb2NrZXlOb2RlLndpZHRoID0gMjUwO1xyXG5cdFx0XHRcdC8vIGpvY2tleU5vZGUuaGVpZ2h0ID0gMjUwO1xyXG5cdFx0XHRcdHRoaXMuam9ja2V5UmVwb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpc1xyXG5cdFx0KTtcclxuXHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5jYWxsU3RhcnRHYW1lKCk7XHJcblx0XHR9LCAyKTtcclxuXHR9XHJcblxyXG5cdGNhbGxTdGFydEdhbWUoKSB7XHJcblx0XHR0aGlzLnNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwic3RhcnQgOiBcIik7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxMZXZlbHM7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFuc3dlclZhbHVlc1tpXSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG5cdFx0Ly9nYS5uYW1lO1xyXG5cclxuXHRcdC8vIGdhKCdldmVudCcsIFwiVGFwXCIsIHtcclxuXHRcdC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkxpbmtcIixcclxuXHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkNyZWF0ZSBHYW1lXCIsXHJcblx0XHQvLyAgICAgJ3ZhbHVlJzogPDE+XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG5cdFx0Ly8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuXHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIFN0YXJ0ZWRcIixcclxuXHRcdC8vICAgICAndmFsdWUnOiAxXHJcblx0XHQvLyB9KTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuXHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucy4uLi4uLi4uLiEhISEhISEhISEhISEhISFcIik7XHJcblx0XHRcdC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJsb2FkZGRkZGRkZGRAQEBAQEBAQEBAQFwiLHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSkpO1xyXG5cdFx0XHQvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgocGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSsxKS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuZmV0Y2hEYXRhKCk7XHJcblx0XHR9LCAwLjIpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG5cdFx0XHR0aGlzLmNyZWF0ZUFuc3dlck9iamVjdCgpO1xyXG5cdFx0XHQvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuXHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHQvL3RoaXMuQW5zd2VyTm9kZS54ID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLng7XHJcblx0XHRcdFx0Ly90aGlzLkFuc3dlck5vZGUueSA9IHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmFuc3dlcnBvc2l0aW9uc1swXS55O1xyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKHRoaXMuQW5zd2VyTm9kZSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHQvLyBjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcblx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeTogdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwtMV0uYW5zd2VycG9zaXRpb25zWzBdLnkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuXHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jYW5Ub3VjaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgMC40KTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9LCAwLjMpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMucGxheVNvdW5kKFxyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25BdWRpb1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuXHRcdFx0KTtcclxuXHRcdFx0Ly99LCAwLjYpO1xyXG5cdFx0fSwgMC43KTtcclxuXHR9XHJcblxyXG5cdGNhbGxKb2NrZXkoKSB7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikpXHJcblx0XHRcdC50bygwLjUsIHsgeDogNDc1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYGRhbmNlYCwgZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYHRodW1ic191cGAsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAxNjAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDJdLmR1cmF0aW9uKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRmZXRjaERhdGEoKSB7XHJcblx0XHR0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCA9IDA7XHJcblx0XHR0aGlzLm1heE9wdGlvbnMgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnRvdGFsT3B0aW9ucztcclxuXHRcdHRoaXMuU3ViSW1hZ2UgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLlN1YkltYWdlO1xyXG5cdFx0dGhpcy53cm9uZ0Fuc3dlckxpbWl0ID1cclxuXHRcdFx0dGhpcy5kYXRhW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0ud3JvbmdBbnN3ZXJzTGltaXQ7XHJcblx0XHR0aGlzLmFuc3dlcnMgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmFuc3dlcnM7XHJcblx0XHR0aGlzLnNjYWxlQXJyYXkgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnNjYWxlQXJyYXk7XHJcblx0XHR0aGlzLnBvc2l0aW9uVHlwZSA9XHJcblx0XHRcdHRoaXMuZGF0YVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucG9zaXRpb25UeXBlO1xyXG5cdFx0dGhpcy5mZWVkYmFja3R5cGUgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmZlZWRiYWNrdHlwZTtcclxuXHRcdHRoaXMudG90YWxBbnN3ZXJzID0gdGhpcy5hbnN3ZXJzLmxlbmd0aDtcclxuXHRcdHRoaXMucXVlc3Rpb24gPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uO1xyXG5cdFx0dGhpcy5xdWVzdGlvblNvdW5kID1cclxuXHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvblNvdW5kO1xyXG5cdFx0dGhpcy50ZXh0QXJyYXkgPVxyXG5cdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnRleHRBcnJheTtcclxuXHRcdHRoaXMuYW5zd2VyT2JqZWN0ID1cclxuXHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5hbnN3ZXJPYmplY3Q7XHJcblx0XHR0aGlzLm9wdGlvbkltYWdlcyA9XHJcblx0XHRcdHRoaXMuZGF0YVtcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRdLm9wdGlvbkFuaW1hdGlvbkltYWdlcztcclxuXHR9XHJcblxyXG5cdENoZWNrRm9ySXNEb25lKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSA9PVxyXG5cdFx0XHRcdF9ub2RlLm5hbWVcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRUb3VjaFN0YXJ0KF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJJbnNpZGUgdG91Y2hzdGFydCA6IFwiKVxyXG5cdFx0aWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG5cdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdH1cclxuXHRcdC8vY29uc29sZS5sb2coXCJ0b3VjaCBzdGFydCA6IFwiKTtcclxuXHRcdGxldCBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdF9ub2RlLm5hbWUgPT1cclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdHRoaXMuaXNEb25lW2ldXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlzU3RvcCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKF9ub2RlLm5hbWUgPT0gdGhpcy50b3VjaERvbmVbaV0pIHtcclxuXHRcdFx0XHRpc1N0b3AgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc1N0b3ApIHtcclxuXHRcdFx0bGV0IGlzQ29ycmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwYXJzZUludChfbm9kZS5uYW1lKSAtIDEgPT0gdGhpcy5hbnN3ZXJzW2ldKSB7XHJcblx0XHRcdFx0XHRpc0NvcnJlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXNDb3JyZWN0KSB7XHJcblx0XHRcdFx0Ly8gaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbD09MSl7IC8vIGdhbWUgc3BlY2lmaWMgY29uZGl0aW9uXHJcblx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHRcdC8vICAgICBpZihfbm9kZS5uYW1lPT1cIjFcIil7XHJcblx0XHRcdFx0Ly8gICAgICAgICB0aGlzLnNjYWxlVHdlZW4uc3RvcCgpO1xyXG5cdFx0XHRcdC8vICAgICB9XHJcblx0XHRcdFx0Ly8gICAgIGVsc2UgaWYoX25vZGUubmFtZT09XCIyXCIpe1xyXG5cdFx0XHRcdC8vICAgICAgICAgdGhpcy5zY2FsZVR3ZWVuMS5zdG9wKCk7XHJcblx0XHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0bGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYGF1ZGlvTm9kZWApXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHRcdFx0XHRhdWRpb1NvdXJjZS5jbGlwID1cclxuXHRcdFx0XHRcdHRoaXMucG9zaXRpdmVGZWVkYmFja1NvdW5kW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0XHRhdWRpb1NvdXJjZS5wbGF5KCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHRcdFx0XHQvLyAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuUmVpbmZvcmVtZW50U291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0yXTtcclxuXHRcdFx0XHQvLyAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xyXG5cdFx0XHRcdC8vIH0sdGhpcy5wb3NpdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDA7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNvcnJlY3QgaXMgY2xpY2tlZCA9IFwiLF9ub2RlLm5hbWUpO1xyXG5cdFx0XHRcdHRoaXMuY2FsbEpvY2tleUFuaW0oMCk7XHJcblxyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHRcdC8vICAgICAudG8oMC4yLCB7IHg6IF9ub2RlLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcblx0XHRcdFx0Ly8gICAgIC50bygwLjIsIHsgeDogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjYy50d2Vlbihfbm9kZSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuMiwgeyB5OiBfbm9kZS55IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG5cdFx0XHRcdC8vICAgICAudG8oMC4yLCB7IHk6IDY0MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdC8vdGhpcy5wbGF5QXVkaW8oXCIvc291bmRzL0NvcnJlY3RBbnN3ZXJcIik7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnJpZ2h0U291bmQpO1xyXG5cdFx0XHRcdFx0Ly90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcblx0XHRcdFx0XHQvL30sIDAuNSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmZlZWRiYWNrdHlwZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9XHJcblx0XHRcdFx0XHRcdHRoaXMucG9zaXRpdmVTb3VuZDtcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzBdKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMV0pO1xyXG5cdFx0XHRcdFx0fSwgMC44KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmVlZGJhY2t0eXBlLmxlbmd0aCA9PSAzKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID1cclxuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcblx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsyXSk7XHJcblx0XHRcdFx0XHR9LCAwLjcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5DaGVja0ZvcklzRG9uZShfbm9kZSk7XHJcblx0XHRcdFx0dGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgKz0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShgYXVkaW9Ob2RlYClcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG5cdFx0XHRcdGF1ZGlvU291cmNlLmNsaXAgPVxyXG5cdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdGF1ZGlvU291cmNlLnBsYXkoKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwid3JvbmcgaXMgY2xpY2tlZCA9IFwiLHRoaXMuaXNEb25lKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFwid3JvbmdBbnN3ZXItLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcblx0XHRcdFx0dGhpcy5jYWxsSm9ja2V5QW5pbSgxKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9pcyBsZXZlbGVuZFxyXG5cdFx0XHRsZXQgbGV2ZWxlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHQvLyAgICAgaWYoIXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5bdGhpcy5hbnN3ZXJzW2ldXS5hY3RpdmVJbkhpZXJhcmNoeSl7XHJcblx0XHRcdC8vICAgICAgICAgbGV2ZWxlbmQ9dHJ1ZTtcclxuXHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0Ly8gICAgIGVsc2V7XHJcblx0XHRcdC8vICAgICAgICAgbGV2ZWxlbmQ9ZmFsc2U7XHJcblx0XHRcdC8vICAgICAgICAgYnJlYWs7XHJcblx0XHRcdC8vICAgICB9XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdC8vZm9yIGxldmVsIG9uZSBzcGVjaWZpYyBjYXNlXHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPT0gdGhpcy50b3RhbEFuc3dlcnMpIHtcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudCArPSAxO1xyXG5cdFx0XHRcdHRoaXMuYW5zd2VyVmFsdWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSA9XHJcblx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdGxldmVsZW5kID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkxldmVsIENvbXBsZXRlZC4uLiEhISEhISEhIVwiKTtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHQvLyBndGFnKCdldmVudCcsIFwiTGV2ZWxDb21wbGV0ZWRfXCIrZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG5cdFx0XHRcdFx0Ly8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuXHRcdFx0XHRcdC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIENvbXBsZXRlZFwiLFxyXG5cdFx0XHRcdFx0Ly8gICAgICd2YWx1ZSc6IDFcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLi4uLi4uLi4uISEhISEhISEhISEhISEhISBnYW1lIGZpbmlzaGVkXCIpO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0XHRcdC8vIH0sIDMpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKFwicG9zaXRpdmVcIik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveUFuc3dlcnMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3RvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmlzV3JvbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmFuc3dlckFycmF5ID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlclZhbHVlcztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJsZXZlbENvbXBsZXRlLS1cIiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMik7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdFx0XHRcdFx0fSwgMik7XHJcblx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdC8vdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbigpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0XHRcdFx0Ly8gZ3RhZygnZXZlbnQnLCBcIkxldmVsQ29tcGxldGVkX1wiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuXHRcdFx0XHRcdC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcblx0XHRcdFx0XHQvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBDb21wbGV0ZWRcIixcclxuXHRcdFx0XHRcdC8vICAgICAndmFsdWUnOiAxXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCArPSAxO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFNjcmVlbihcInBvc2l0aXZlXCIpO1xyXG5cdFx0XHRcdFx0fSwgMyk7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY3VycmVudExldmVsIDogXCIsZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMuY2FsbFBvc2l0aXZlUmVhY3Rpb24oKTtcclxuXHRcdFx0XHRcdC8vIH0sMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwbGF5U291bmQobmFtZTogY2MuQXVkaW9DbGlwKSB7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gbmFtZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHR9XHJcblxyXG5cdHBsYXlRdWVzdGlvblNvdW5kKG5hbWU6IGNjLkF1ZGlvQ2xpcCkge1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9XHJcblx0XHRcdHRoaXMucXVlc3Rpb25BdWRpb1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV07XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRzZXRTY3JlZW4odHlwZTE6IHN0cmluZykge1xyXG5cdFx0dGhpcy50b3VjaERvbmUgPSBbXTtcclxuXHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcImxldmVsQ29tcGxldGUtLVwiICsgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxKVxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cdFx0Ly8gZ3RhZygnZXZlbnQnLCBcIkxldmVsU3RhcnRlZF9cIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcblx0XHQvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJJbWFnZVwiLFxyXG5cdFx0Ly8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgU3RhcnRlZFwiLFxyXG5cdFx0Ly8gICAgICd2YWx1ZSc6IDFcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuXHRcdFx0Ly90aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcblx0XHRcdHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuXHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKHR5cGUxKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuXHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiAtMTIwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lSaWdodE9wdGlvbnMoKTtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lBbnN3ZXJzKCk7XHJcblx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHQuc3RvcCgpO1xyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1dyb25nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmZldGNoRGF0YSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVBbnN3ZXJPYmplY3QoKTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0TXVsdGlwbGVBbnN3ZXJFbnZpcm9ubWVudCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZU9wdGlvbk9iamVjdCh0aGlzLm1heE9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB4OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gY2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHRcdFx0XHQvLyAgICAgLnRvKDAuNSwgeyB5OiB0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXS5hbnN3ZXJwb3NpdGlvbnNbMF0ueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5vbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmNhblRvdWNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBIZXJlIHRoaXMgcmVmZXJzIHRvIGNvbXBvbmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheVNvdW5kKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uQXVkaW9bXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5wb3BTb3VuZC5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHRcdH0sIDAuMSk7XHJcblx0XHRcdFx0XHR9LCAwLjQpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdH0sIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb3B1cFRpbWUgPSAwO1xyXG5cclxuXHRzZXRSZWluZm9yc2VtZW50U2NyZWVuKHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKHR5cGUgPT0gXCJwb3NpdGl2ZVwiKSB7XHJcblx0XHRcdHRoaXMucG9wdXBUaW1lID1cclxuXHRcdFx0XHR0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAyXHJcblx0XHRcdFx0XS5kdXJhdGlvbiArIHRoaXMubWFnaWNhbFNvdW5kLmR1cmF0aW9uO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtNDAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlB1enpsZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KFwicHV6emxlUG9zaXRpdmVcIik7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZ2xvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheSgpO1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5U291bmQodGhpcy5tYWdpY2FsU291bmQpO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyB4OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiZcclxuXHRcdFx0XHRcdHRoaXMuaXNEb25lW2ldXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcblx0XHRcdFx0XHRcdC50bygwLjUsIHsgeDogMjUwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB5OiAtMjAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5U291bmQoXHJcblx0XHRcdFx0XHR0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDJcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuY2FsbEpvY2tleSgpO1xyXG5cdFx0XHR9LCB0aGlzLm1hZ2ljYWxTb3VuZC5kdXJhdGlvbik7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gXCJuZWdhdGl2ZVwiKSB7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvZGl1bVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHg6IC00MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicG9kaXVtXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUHV6emxlXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoXCJwdXp6bGVOZWdhdGl2ZVwiKTtcclxuXHRcdFx0dGhpcy5wb3B1cFRpbWUgPVxyXG5cdFx0XHRcdHRoaXMuUmVpbmZvcmVtZW50U291bmRbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uZHVyYXRpb247XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpKVxyXG5cdFx0XHRcdC50bygwLjUsIHsgeTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdFx0dGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpXHJcblx0XHRcdFx0XHRcdC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXSlcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAyNTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHk6IC0yMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXlTb3VuZChcclxuXHRcdFx0XHRcdHRoaXMuUmVpbmZvcmVtZW50U291bmRbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAyXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSwgMC41KTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSBcIm5vbmVcIikge1xyXG5cdFx0XHR0aGlzLnBvcHVwVGltZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbnN3ZXJPYmplY3QoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhgd2luU2l6ZTogYCsoY2Mud2luU2l6ZS53aWR0aC9jYy53aW5TaXplLmhlaWdodCkpO1xyXG5cdFx0Ly9sZXQgYW5zd2VyTm9kZSA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlLm9wYWNpdHkgPSAyNTU7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUuc2NhbGUgPSAwO1xyXG5cdFx0dGhpcy5BbnN3ZXJOb2RlLnggPSB0aGlzLmNvbnZlcnRYUG9zKFxyXG5cdFx0XHRjYy53aW5TaXplLndpZHRoICpcclxuXHRcdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblx0XHRcdFx0XHQuYW5zd2VycG9zaXRpb25zWzBdLnhcclxuXHRcdCk7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUueSA9IHRoaXMuY29udmVydFlQb3MoXHJcblx0XHRcdGNjLndpblNpemUuaGVpZ2h0ICpcclxuXHRcdFx0XHR0aGlzLmRhdGFbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcblx0XHRcdFx0XHQuYW5zd2VycG9zaXRpb25zWzBdLnlcclxuXHRcdCk7XHJcblx0XHQvLyB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5hbnN3ZXJPYmplY3QsdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKSk7XHJcblx0XHR0aGlzLkFuc3dlck5vZGUuZ2V0Q2hpbGRCeU5hbWUoYEFuc3dlck5vZGVgKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYClcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbjtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBRVUVTVElPTjogYCt0aGlzLnF1ZXN0aW9uK2AgIGArdGhpcy5BbnN3ZXJOb2RlLmdldENoaWxkQnlOYW1lKGBBbnN3ZXJOb2RlYCkuZ2V0Q2hpbGRCeU5hbWUoYFF1ZXN0aW9uYCkpO1xyXG5cdFx0Ly90aGlzLnBsYXlTb3VuZCh0aGlzLnBvcFNvdW5kKTtcclxuXHRcdGxldCBfc2NhbGUgPSAwLjg7XHJcblx0XHRpZiAoY2Mud2luU2l6ZS5oZWlnaHQgPCA3MjApIHtcclxuXHRcdFx0X3NjYWxlID0gMC44O1xyXG5cdFx0fVxyXG5cdFx0Y2MudHdlZW4odGhpcy5BbnN3ZXJOb2RlKVxyXG5cdFx0XHQudG8oMSwgeyBzY2FsZTogX3NjYWxlIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVPcHRpb25PYmplY3QobnVtT2ZPcHRpb25zKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbk9CSkVDVCA6OlwiLG51bU9mT3B0aW9ucyk7XHJcblx0XHRzd2l0Y2ggKHRoaXMucG9zaXRpb25UeXBlKSB7XHJcblx0XHRcdGNhc2UgXCJjdXN0b21cIjoge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0gPSBjYy5pbnN0YW50aWF0ZShcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgb3B0aW9ucyA6Ojo6OlwiLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5vcGFjaXR5ID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRjYy5MYWJlbFxyXG5cdFx0XHRcdFx0KS5zdHJpbmcgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS50ZXh0QXJyYXlbaV07IC8vKGkrMSkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpXHJcblx0XHRcdFx0XHRcdC5pbnNlcnRDaGlsZCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLCBpKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLm9mZnNldFggPSAzMDtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uc2NhbGUgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gdGhpcy5jb252ZXJ0WFBvcyhcclxuXHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS53aWR0aCAqXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG5cdFx0XHRcdFx0XHRcdFx0LnBvc2l0aW9uc1tpXS54XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55ID0gdGhpcy5jb252ZXJ0WFBvcyhcclxuXHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS53aWR0aCAqXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG5cdFx0XHRcdFx0XHRcdFx0LnBvc2l0aW9uc1tpXS55XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuU3ViSW1hZ2UgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNwcml0ZXMoXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHQvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAwO1xyXG5cdFx0XHRcdFx0XHQvL3RoaXMub3B0aW9uSW1hZ2VzW2ldLHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA5MDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5TdWJJbWFnZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlU3ByaXRlcyhcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9wdGlvbkltYWdlc1tpXSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikueSA9IC0xNzA7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5vcHRpb25JbWFnZXNbaV0sdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDcwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikud2lkdGggPSA1NTApO1xyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25JbWFnZXNbaV0sXHJcblx0XHRcdFx0XHRcdCh0aGlzLmNyZWF0ZWRPcHRpb25zW2ldXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuaGVpZ2h0ID0gNTUwKTtcclxuXHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG5cdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogdGhpcy5kYXRhW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRcdFx0XS5zY2FsZUFycmF5W2ldLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0Ly8gaWYodGhpcy5hbnN3ZXJzLmxlbmd0aDw9MSl7XHJcblx0XHRcdFx0XHQvLyAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyBlbHNle1xyXG5cdFx0XHRcdFx0Ly8gICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdFx0Ly90aGlzLlVwZGF0ZUFuaW1hdGlvbnModGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pO1xyXG5cdFx0XHRcdFx0Ly90aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXRoaXMub3B0aW9uSW1hZ2VzW2ldO1xyXG5cclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJQb3NpdGlvbnMgOiBcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjcmVhdGVkIG9wdGlvbnMgOiAqKioqKioqKipcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdC8vc3RhdGVtZW50cztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveU9wdGlvbnMoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4T3B0aW9uczsgaSsrKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiZcclxuXHRcdFx0XHQhdGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuXHRcdC8vICAgICAgICAgaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lJiYoIXRoaXMuaXNEb25lW2ldKSl7XHJcblx0XHQvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuXHRcdC8vICAgICAgICAgfVxyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95UmlnaHRPcHRpb25zKCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmXHJcblx0XHRcdFx0dGhpcy5pc0RvbmVbaV1cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jcmVhdGVkT3B0aW9uc1tpXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1heE9wdGlvbnM7aSsrKXtcclxuXHRcdC8vICAgICAgICAgaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lJiYodGhpcy5pc0RvbmVbaV0pKXtcclxuXHRcdC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZGVzdHJveSgpO1xyXG5cdFx0Ly8gICAgICAgICB9XHJcblx0XHQvLyAgICAgfVxyXG5cdFx0Ly8gfSwgMC41KTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lBbnN3ZXJzKCkge1xyXG5cdFx0aWYgKHRoaXMuQW5zd2VyTm9kZSkge1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLkFuc3dlck5vZGUpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHRoaXMuQW5zd2VyTm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdH0sIDAuNSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCkge1xyXG5cdFx0dGhpcy5ub2RlXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkTm9kZVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJBbnN3ZXJOb2RlXCIpXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpXHJcblx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcblx0XHR0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkFuc3dlck5vZGVcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIilcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvbjtcclxuXHRcdC8vIGlmKHRoaXMuU3ViSW1hZ2U9PTEpe1xyXG5cdFx0Ly8gICAgIHJldHVybjtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGVsc2V7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGhpcmROb2RlXCIpLmdldENoaWxkQnlOYW1lKFwiQW5zd2VyTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMucXVlc3Rpb247XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRjYWxsTmVnYXRpdmVGZWVkYmFjayhub2RlMTogY2MuTm9kZSkge1xyXG5cdFx0dGhpcy50b3VjaERvbmUucHVzaChub2RlMS5uYW1lKTtcclxuXHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCArPSAxO1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0Ly9sZXQgdHdlZW4xID0gIGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0Ly9ub2RlMS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMzIsIDMwLCA0Myk7XHJcblx0XHRsZXQgb3B0aW9uc05vZGUgPSBub2RlMS5wYXJlbnQ7XHJcblx0XHQvLyBvcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0Ly8gICAgIGlmKGVsZW1lbnQubmFtZSA9PSB0aGlzLmFuc3dlcnNbMF0udG9TdHJpbmcoKSl7XHJcblx0XHQvLyAgICAgICAgIGNvbnNvbGUubG9nKGBSSUdIVGApO1xyXG5cdFx0Ly8gICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vICAgICAgICAgY2MudHdlZW4oZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpKS50bygwLjEse29wYWNpdHk6MH0pXHJcblx0XHQvLyAgICAgICAgIC50bygwLjEse29wYWNpdHk6MjU1fSkudG8oMC4xLHtvcGFjaXR5OjB9KS50bygwLjEse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuXHRcdC8vICAgICB9XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBuam5ubm4gYCsodGhpcy5hbnN3ZXJzWzBdKzEpO1xyXG5cdFx0b3B0aW9uc05vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKCh0aGlzLmFuc3dlcnNbMF0gKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2MudHdlZW4oXHJcblx0XHRcdG9wdGlvbnNOb2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKCh0aGlzLmFuc3dlcnNbMF0gKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpXHJcblx0XHQpXHJcblx0XHRcdC50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSlcclxuXHRcdFx0LnRvKDAuMTUsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdC50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSlcclxuXHRcdFx0LnRvKDAuMTUsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Ly8gaWYobm9kZTEubmFtZSA9PSBgMWApe1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAyYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xNSx7b3BhY2l0eTowfSlcclxuXHRcdC8vICAgICAudG8oMC4xNSx7b3BhY2l0eToyNTV9KS50bygwLjE1LHtvcGFjaXR5OjB9KS50bygwLjE1LHtvcGFjaXR5OjI1NX0pLnN0YXJ0KCk7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBlbHNle1xyXG5cdFx0Ly8gICAgIG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAxYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIGNjLnR3ZWVuKG9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGAxYCkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSkudG8oMC4xLHtvcGFjaXR5OjB9KVxyXG5cdFx0Ly8gICAgIC50bygwLjEse29wYWNpdHk6MjU1fSkudG8oMC4xLHtvcGFjaXR5OjB9KS50bygwLjEse29wYWNpdHk6MjU1fSkuc3RhcnQoKTtcclxuXHRcdC8vIH1cclxuXHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRub2RlMS5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRub2RlMVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIilcclxuXHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcblx0XHRcdC5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG5cdFx0bm9kZTEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmV5TWF0KTtcclxuXHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggLSAxMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnRvKDAuMSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdC8vY2FsbCBuZWdhdGl2ZSBhdWRpb1xyXG5cclxuXHRcdC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLm5lZ2F0aXZlU291bmQ7XHJcblx0XHQvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHQvL3RoaXMucGxheUF1ZGlvKFwiL3NvdW5kcy9pbmNvcnJlY3RBbnN3ZXJcIik7XHJcblxyXG5cdFx0dGhpcy5wbGF5U291bmQodGhpcy53cm9uZ1NvdW5kKTtcclxuXHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgLy90aGlzLnBsYXlTb3VuZCh0aGlzLm5lZ2F0aXZlRmVlZGJhY2tbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC0xXSk7XHJcblx0XHQvLyAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHQvLyB9LCAwLjgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdC8vICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdC8vIH0sIHRoaXMubmVnYXRpdmVGZWVkYmFja1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLTFdLmR1cmF0aW9uKTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdC8vdHdlZW4xLnN0b3AoKTtcclxuXHRcdFx0aWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSB0aGlzLndyb25nQW5zd2VyTGltaXQpIHtcclxuXHRcdFx0XHR0aGlzLndyb25nQW5zd2VyQ291bnQgPSAwO1xyXG5cdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0XHQvL3RoaXMuY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKTtcclxuXHRcdFx0XHR0aGlzLmhpbGlnaHRMZWZ0QW5zd2VycygpO1xyXG5cdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcblx0XHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJzWzBdLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0RvbmVbdGhpcy5hbnN3ZXJzWzBdXSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveU9wdGlvbnMoKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXRSZWluZm9yc2VtZW50U2NyZWVuKFwibmVnYXRpdmVcIik7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RpdW1cIikpXHJcblx0XHRcdFx0XHRcdFx0Ly8gICAgIC50bygwLjUsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95UmlnaHRPcHRpb25zKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImdsb3dcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0b3AoKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJnbG93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc1dyb25nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFuc3dlclZhbHVlcztcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxldmVsQ29tcGxldGUtLVwiICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMucG9wdXBUaW1lICsgMC41KTtcclxuXHRcdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzV3JvbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0UHJvZ3Jlc3NCYXIoKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEb25lW3RoaXMuYW5zd2Vyc1swXV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTY3JlZW4oXCJuZWdhdGl2ZVwiKTtcclxuXHRcdFx0XHRcdH0sIDMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgMC44KTtcclxuXHR9XHJcblxyXG5cdGNhbGxQb3NpdGl2ZUZlZWRiYWNrKG5vZGUxOiBjYy5Ob2RlLCBmZWVkYmFja05hbWUpIHtcclxuXHRcdHN3aXRjaCAoZmVlZGJhY2tOYW1lKSB7XHJcblx0XHRcdGNhc2UgXCJjb25mZXR0aVwiOiB7XHJcblx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24obm9kZTEueCxub2RlMS55KTtcclxuXHRcdFx0XHQvL25vZGUxLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAyNTUsIDApO1xyXG5cdFx0XHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0bm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLnNjYWxlID0gMTtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKVxyXG5cdFx0XHRcdFx0LnNldFBvc2l0aW9uKG5vZGUxLngsIG5vZGUxLnkpO1xyXG5cdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuZGVzdHJveTtcclxuXHRcdFx0XHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKC01MDAsLTUwMCk7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIilcclxuXHRcdFx0XHRcdFx0LnNldFBvc2l0aW9uKC01MDAsIC01MDApO1xyXG5cdFx0XHRcdH0sIDEpO1xyXG5cclxuXHRcdFx0XHQvL2V4dHJhIGNvZGVcclxuXHRcdFx0XHQvLyBpZihub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKXtcclxuXHRcdFx0XHQvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLG5vZGUxLmdldENoaWxkQnlOYW1lKFwidGlja1wiKSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIilcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiZGVzdHJveVwiOiB7XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIm1vdmVtZW50X3JpZ2h0XCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHQwLjksXHJcblx0XHRcdFx0XHRcdHsgeDogdGhpcy52aWV3UG9ydFdpZHRoICsgMTAwIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9sZWZ0XCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjIsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuMiwgeyB4OiAtMTAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwibW92ZW1lbnRfdG9wXCI6IHtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0eyB5OiB0aGlzLnZpZXdQb3J0SGVpZ2h0ICsgMTAwIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0LnJlcGVhdEZvcmV2ZXIoXHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LnR3ZWVuKClcclxuXHRcdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0XHQwLjIsXHJcblx0XHRcdFx0XHRcdFx0XHR7IHg6IG5vZGUxLnggKyAzMCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQudG8oMC4yLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9ib3R0b21cIjoge1xyXG5cdFx0XHRcdC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicGxhdGVcIilcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtMjgwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgeTogbm9kZTEueSArIDEwMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB5OiBub2RlMS55IC0gNTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTsgLy9ib3VuY2VJblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9BbmltYXRpb25cIjoge1xyXG5cdFx0XHRcdC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG5cdFx0XHRcdFx0bm9kZTEueCA9IG5vZGUxLnggKyAxMDtcclxuXHRcdFx0XHRcdG5vZGUxLnkgPSBub2RlMS55ICsgNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuXHRcdFx0XHRcdG5vZGUxLnggPSBub2RlMS54ICsgMjA7XHJcblx0XHRcdFx0XHRub2RlMS55ID0gbm9kZTEueSArIDIwO1xyXG5cdFx0XHRcdFx0bm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSAtIDAuMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNSkge1xyXG5cdFx0XHRcdFx0Ly8gbm9kZTEueD1ub2RlMS54KzIwO1xyXG5cdFx0XHRcdFx0Ly8gbm9kZTEueT1ub2RlMS55KzIwO1xyXG5cdFx0XHRcdFx0bm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSArIDAuNDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGFuaW1hdGlvbkNsaXA6IGNjLkFuaW1hdGlvbkNsaXA7IC8vPSB0aGlzLm9wdGlvbkFuaW1hdGlvbnNbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcblx0XHRcdFx0bm9kZTEuYWRkQ29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblx0XHRcdFx0bm9kZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuYWRkQ2xpcChhbmltYXRpb25DbGlwKTtcclxuXHRcdFx0XHRub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbkNsaXAubmFtZSk7XHJcblx0XHRcdFx0Ly9ub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbignZmluaXNoZWQnLCAgdGhpcy5maW5pc2hlZEFuaW0sICAgIHRoaXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJtb3ZlbWVudF9TY2FsZVwiOiB7XHJcblx0XHRcdFx0bGV0IG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlICsgKG5vZGUxLnNjYWxlICogMzApIC8gMTAwO1xyXG5cdFx0XHRcdC8vIGlmKG5vZGUxLnNjYWxlPD0wLjcpe1xyXG5cdFx0XHRcdC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZSsobm9kZTEuc2NhbGUvMik7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGVsc2UgaWYobm9kZTEuc2NhbGU+PTAuNyYmbm9kZTEuc2NhbGU8PTAuOSl7XHJcblx0XHRcdFx0Ly8gICAgIG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBlbHNle1xyXG5cdFx0XHRcdC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZS0wLjQ7XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHQvL25vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMub3B0aW9uSW1hZ2VzRnJhbWUyW3BhcnNlSW50KG5vZGUxLm5hbWUpLTFdO1xyXG5cdFx0XHRcdG5vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5zY2FsZSA9IG91dGxpbmVTY2FsZTtcclxuXHRcdFx0XHRjYy50d2Vlbihub2RlMS5nZXRDaGlsZEJ5TmFtZShcIm91dGxpbmVcIikpXHJcblx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdDAuMyxcclxuXHRcdFx0XHRcdFx0eyBzY2FsZTogb3V0bGluZVNjYWxlICsgMC4xIH0sXHJcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50bygwLjMsIHsgc2NhbGU6IG91dGxpbmVTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcImZyYW1lQ2hhbmdlXCI6IHtcclxuXHRcdFx0XHQvL25vZGUxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5vcHRpb25JbWFnZXNGcmFtZTJbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdDAuMyxcclxuXHRcdFx0XHRcdFx0eyBzY2FsZTogbm9kZTEuc2NhbGUgKyAwLjEgfSxcclxuXHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRvKDAuMywgeyBzY2FsZTogbm9kZTEuc2NhbGUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJzaGFrZVwiOiB7XHJcblx0XHRcdFx0bGV0IHR3ZWVuMSA9IGNjXHJcblx0XHRcdFx0XHQudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQucmVwZWF0Rm9yZXZlcihcclxuXHRcdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0XHQudHdlZW4oKVxyXG5cdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHRcdDAuMSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgeDogbm9kZTEueCArIDEwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHR3ZWVuMS5zdG9wKCk7XHJcblx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIm1vdmVtZW50X2NlbnRlclwiOiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kZXN0cm95T3RoZXJPcHRpb25zKCk7XHJcblx0XHRcdFx0fSwgMCk7XHJcblx0XHRcdFx0aWYgKG5vZGUxLm5hbWUgPT0gXCIyXCIpIHtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKG5vZGUxKVxyXG5cdFx0XHRcdFx0XHQudG8oMSwgeyB4OiBub2RlMS54IC0gMzI1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAobm9kZTEubmFtZSA9PSBcIjFcIikge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHRcdC50bygxLCB7IHg6IG5vZGUxLnggKyAzMjUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0XHQvL3N0YXRlbWVudHM7XHJcblx0XHRcdFx0Y2MudHdlZW4obm9kZTEpXHJcblx0XHRcdFx0XHQudG8oMC45LCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lPdGhlck9wdGlvbnMoKSB7XHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0aSsrXHJcblx0XHQpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSAmJlxyXG5cdFx0XHRcdCF0aGlzLmlzRG9uZVtpXVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHQvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0pXHJcblx0XHRcdFx0XHQudG8oMC40LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZHQpIHt9XHJcblxyXG5cdGZpbmlzaGVkQW5pbShldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25lTWFueVwiKS54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25lTWFueVwiKS55KTtcclxuXHR9XHJcblxyXG5cdGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0bGV0IHJhbmRvbW51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDEpO1xyXG5cdFx0bGV0IGN1cnJlbnRBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcDsgLy89IHRoaXMubmVnYXRpdmVBdWRpb3NbcmFuZG9tbnVtYmVyXTtcclxuXHRcdGlmIChyYW5kb21udW1iZXIgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tR29wYWxcIik7XHJcblx0XHRcdHRoaXMuaXNDaGFyMSA9IHRydWU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IC00NzU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTEwMTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IC0xLjU7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdC5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjFcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuXHRcdFx0dGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGF1c2UoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSA5Mzk7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTE0MTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IDEuNTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKVxyXG5cdFx0XHRcdC50bygwLjMsIHsgeDogNDc1IH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHQucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG5cdFx0XHR9LCAwLjQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IGN1cnJlbnRBdWRpb0NsaXA7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdH0sIDAuOSk7XHJcblx0fVxyXG5cclxuXHRpbmNyZWFzZXByb2dyZXNzKCkge1xyXG5cdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmZpbGxSYW5nZSA9XHJcblx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKiAoMzk0IC8gdGhpcy50b3RhbExldmVscyk7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikpXHJcblx0XHRcdC50bygwLjUsIHsgd2lkdGg6IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5maWxsUmFuZ2UgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuU2hvd1N0YXIoKTtcclxuXHRcdH0sIDAuNSk7XHJcblx0fVxyXG5cclxuXHRTaG93U3RhcigpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpXHJcblx0XHRcdFx0LndpZHRoID09XHJcblx0XHRcdCgzOTQgKiAxKSAvIHRoaXMudG90YWxMZXZlbHNcclxuXHRcdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpXHJcblx0XHRcdClcclxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjMgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKVxyXG5cdFx0XHRcdC53aWR0aCA9PVxyXG5cdFx0XHQoMzk0ICogTWF0aC5jZWlsKHRoaXMudG90YWxMZXZlbHMgLyAyKSkgLyB0aGlzLnRvdGFsTGV2ZWxzXHJcblx0XHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIilcclxuXHRcdFx0KVxyXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuMyB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpXHJcblx0XHRcdFx0LndpZHRoID09IDM5NFxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTNcIik7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuc2NhbGUgPSAwO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic3RhcjRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjRcIilcclxuXHRcdFx0KVxyXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuMyB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpXHJcblx0XHRcdClcclxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjMgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRQcm9ncmVzc0JhcigpIHtcclxuXHRcdGxldCBwcm9ncmVzc0JhciA9IHRoaXMubm9kZVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE5vZGVcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIik7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImFuc3dlclZhbHVlcyA6IFwiLCB0aGlzLmFuc3dlclZhbHVlcylcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbExldmVsczsgaSsrKSB7XHJcblx0XHRcdGlmICh0aGlzLmFuc3dlclZhbHVlc1tpXSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ1bmF0dGVtcHRlZFFcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmV4dFFcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSBpICsgMSkge1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFFcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0XHRcdFx0XCJ1bmF0dGVtcHRlZFFcIlxyXG5cdFx0XHRcdFx0KS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA+IGkgKyAxKSB7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHRmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRcdFx0XHRcInVuYXR0ZW1wdGVkUVwiXHJcblx0XHRcdFx0XHQpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPVxyXG5cdFx0XHRcdFx0XHRmYWxzZTtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIDwgaSArIDEpIHtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1FcIikuYWN0aXZlID1cclxuXHRcdFx0XHRcdFx0ZmFsc2U7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5leHRRXCIpLmFjdGl2ZSA9XHJcblx0XHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXHJcblx0XHRcdFx0XHRcdFwidW5hdHRlbXB0ZWRRXCJcclxuXHRcdFx0XHRcdCkuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNwcml0ZXMoX3Nwcml0ZU5hbWU6IHN0cmluZywgX25vZGU6IGNjLk5vZGUpIHtcclxuXHRcdGNjLnJlc291cmNlcy5sb2FkKFxyXG5cdFx0XHRfc3ByaXRlTmFtZSxcclxuXHRcdFx0Y2MuU3ByaXRlRnJhbWUsXHJcblx0XHRcdGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLndhcm4oZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhfc3ByaXRlTmFtZSk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0VXBkYXRlQW5pbWF0aW9ucyhfc3ByaXRlTmFtZTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0Y2MucmVzb3VyY2VzLmxvYWQoXHJcblx0XHRcdF9zcHJpdGVOYW1lLFxyXG5cdFx0XHRjYy5BbmltYXRpb25DbGlwLFxyXG5cdFx0XHRmdW5jdGlvbiAoZXJyLCBhbmltYXRpb246IGNjLkFuaW1hdGlvbkNsaXApIHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy53YXJuKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmFkZENsaXAoYW5pbWF0aW9uKTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbi5uYW1lKTtcclxuXHRcdFx0XHQvLyBfdXBkYXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGxheUF1ZGlvKF9hdWRpb1BhdGg6IHN0cmluZykge1xyXG5cdFx0bGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0XHQvLyBsZXQgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdFx0Y2MucmVzb3VyY2VzLmxvYWQoXHJcblx0XHRcdF9hdWRpb1BhdGgsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0ZnVuY3Rpb24gKGVyciwgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXApIHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy53YXJuKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHRoaXMuYXVkaW9NYW5hZ2VyLnBsYXkoYXVkaW9DbGlwLm5hbWUsIGF1ZGlvQ2xpcCwgZmFsc2UsIFwiVk9cIik7XHJcblx0XHRcdFx0Ly8gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiYXVkaW9DbGlwIG5hbWUgPSBcIiwgYXVkaW9DbGlwLm5hbWUpO1xyXG5cdFx0XHRcdGNsaXAgPSBhdWRpb0NsaXA7XHJcblx0XHRcdH0uYmluZCh0aGlzKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGhpbGlnaHRMZWZ0QW5zd2VycygpIHtcclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0aSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRpKytcclxuXHRcdCkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHBhcnNlSW50KFxyXG5cdFx0XHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWVcclxuXHRcdFx0XHRcdCkgLVxyXG5cdFx0XHRcdFx0XHQxID09XHJcblx0XHRcdFx0XHR0aGlzLmFuc3dlcnNbal1cclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5jb2xvciA9IG5ldyBjYy5Db2xvcig3MSwgMjU1LCAwKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJJbnNpZGUgaGlsaWdodExlZnRBbnN3ZXJzIDogXCIrdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lKTtcclxuXHRcdFx0XHRcdC8vIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSl7XHJcblx0XHRcdFx0XHQvLyAgICAgdGhpcy51cGRhdGVTcHJpdGVzKFwiL3doaXRlVGlja1wiLHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpKTtcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gZm9yKGxldCBpPTA7aTx0aGlzLmFuc3dlcnMubGVuZ3RoO2krKyl7XHJcblx0XHQvLyAgICAgaWYoKHBhcnNlSW50KF9ub2RlLm5hbWUpLTEpPT10aGlzLmFuc3dlcnNbaV0pe1xyXG5cdFx0Ly8gICAgICAgICBpc0NvcnJlY3Q9dHJ1ZTtcclxuXHRcdC8vICAgICAgICAgYnJlYWs7XHJcblx0XHQvLyAgICAgfVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0Y29udmVydFhQb3MoeCkge1xyXG5cdFx0dmFyIHZhbCA9IHggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG5cclxuXHRjb252ZXJ0WVBvcyh5KSB7XHJcblx0XHR2YXIgdmFsID0geSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG5cclxuXHRqb2NrZXlSZXBvc2l0aW9uKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRfbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblx0XHRjYy50d2Vlbihfbm9kZSkudG8oMSwgeyB4OiAtNDUwLCB5OiAtMjgwLCBzY2FsZTogMC45IH0pLnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRjYWxsSm9ja2V5QW5pbShudW06IG51bWJlcikge1xyXG5cdFx0bGV0IGpvY2tleU5vZGUgPSB0aGlzLm5vZGVcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKGBwb2RpdW1gKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYFB1enpsZWApO1xyXG5cdFx0bGV0IG9wdGlvbnMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBPcHRpb25zMmApO1xyXG5cdFx0aWYgKG51bSA9PSAwKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGBHT09EYCk7XHJcblx0XHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgcHV6emxlQ29ycmVjdGApO1xyXG5cdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFxyXG5cdFx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVDb3JyZWN0YCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGBwdXp6bGVTdGFyc2ApO1xyXG5cclxuXHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFxyXG5cdFx0XHRcdFx0YGZpbmlzaGVkYCxcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0am9ja2V5Tm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdC5wbGF5KGBwdXp6bGVJZGxlYCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGhpc1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5wbGF5RHVzdEFuaW0yKFxyXG5cdFx0XHRcdFx0TWF0aC5yb3VuZCh0aGlzLmdldFJhbmRvbUludCg1LCA4KSksXHJcblx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbUludCgxNSwgMjApLFxyXG5cdFx0XHRcdFx0b3B0aW9uczJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LCBqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldENsaXBzKClbMV0uZHVyYXRpb24gKyB0aGlzLnBvc2l0aXZlRmVlZGJhY2tTb3VuZFtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uZHVyYXRpb24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coYEJBRGApO1xyXG5cdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVdyb25nYCk7XHJcblx0XHRcdGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXHJcblx0XHRcdFx0YGZpbmlzaGVkYCxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVdyb25nYCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRqb2NrZXlOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZVN0YXJzYCk7XHJcblx0XHRcdFx0am9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihcclxuXHRcdFx0XHRcdGBmaW5pc2hlZGAsXHJcblx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGpvY2tleU5vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdFx0XHQucGxheShgcHV6emxlSWRsZWApO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRoaXNcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMucGxheUR1c3RBbmltMihcclxuXHRcdFx0XHRcdE1hdGgucm91bmQodGhpcy5nZXRSYW5kb21JbnQoNSwgOCkpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21JbnQoMTUsIDIwKSxcclxuXHRcdFx0XHRcdG9wdGlvbnMyXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSwgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRDbGlwcygpWzNdLmR1cmF0aW9uICsgdGhpcy5uZWdhdGl2ZUZlZWRiYWNrU291bmRbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHBsYXlEdXN0QW5pbShudW06IG51bWJlcikge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coYHBsYXlQYXJ0aWNsZXNgKTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG5cdFx0bWluID0gTWF0aC5jZWlsKG1pbik7XHJcblx0XHRtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxyXG5cdH1cclxuXHJcblx0Z2V0UmFuZG9tRmxvYXQobWluLCBtYXgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcblx0fVxyXG5cclxuXHRwbGF5RHVzdEFuaW0yKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCBfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0Ly8gY29uc29sZS50cmFjZShgZGVEdXN0MmApO1xyXG5cdFx0Ly8gZGVjbGFyZSBhIGNjLnNwcml0ZUZyYW1lIGFib3ZlIGZvciBwYXJ0aWNsZXMgaW1nXHJcblx0XHQvLyBkZWNsYXJlIGEgY2MuVGV4dHVyZTJEIGFib3ZlIGZvciB0cmFpbCBpbWdcclxuXHRcdC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgcGFydGljbGVzIHNvdW5kRnhcclxuXHRcdC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgdHJhaWwgc291bmRGeFxyXG5cdFx0bGV0IGpvY2tleSA9IHRoaXMubm9kZVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoYHBvZGl1bWApXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShgUHV6emxlYCk7XHJcblx0XHRqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZXNTb3VuZDtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0am9ja2V5LmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cdFx0fSwgMC43NSk7XHJcblx0XHQvLyBqb2NrZXkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhgUE9TYCtzdGFydFBvcyk7XHJcblx0XHRsZXQgY29sb3JzQXJyYXk6IHN0cmluZ1tdID0gW2AjQzA0MkZGYCwgYCNGRjAwNDlgLCBgI0ZDQzAwMGBdO1xyXG5cdFx0bGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTE7XHJcblx0XHRsZXQgX29mZnNldCA9IDUwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW0xOyBpKyspIHtcclxuXHRcdFx0Ly8gbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuXHRcdFx0Ly8gbGV0IHJuZ1kgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuXHRcdFx0bGV0IHBhcnRpY2xlcyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKCkpO1xyXG5cdFx0XHRsZXQgdHJhaWwgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSgpKTtcclxuXHRcdFx0cGFydGljbGVzLnBhcmVudCA9IF9ub2RlO1xyXG5cdFx0XHR0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcblx0XHRcdHBhcnRpY2xlcy54ID0gLTQ1MCArIDY0MCArIDIwO1xyXG5cdFx0XHRwYXJ0aWNsZXMueSA9IC0yODAgKyAzNjAgKyA3MDtcclxuXHRcdFx0Ly8gcGFydGljbGVzLnBvc2l0aW9uID0gam9ja2V5LmdldFBhcmVudCgpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihqb2NrZXkuZ2V0UGFyZW50KCkucG9zaXRpb24pO1xyXG5cdFx0XHQvLyBwYXJ0aWNsZXMueCArPSA0MjA7XHJcblx0XHRcdC8vIHBhcnRpY2xlcy55ICs9IDIyMDtcclxuXHRcdFx0cGFydGljbGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5kdXN0SW1nO1xyXG5cdFx0XHQvLyBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZVNvdW5kcztcclxuXHRcdFx0cGFydGljbGVzLndpZHRoID0gMDtcclxuXHRcdFx0cGFydGljbGVzLmhlaWdodCA9IHBhcnRpY2xlcy53aWR0aDtcclxuXHRcdFx0cGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzU5KTtcclxuXHRcdFx0cGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG5cdFx0XHRwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuXHRcdFx0cGFydGljbGVzLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdHBhcnRpY2xlcy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgoXHJcblx0XHRcdFx0cGFydGljbGVzLmNvbG9yLFxyXG5cdFx0XHRcdGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGNvbG9yc0FycmF5Lmxlbmd0aCldXHJcblx0XHRcdCk7XHJcblx0XHRcdHRyYWlsLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnRleHR1cmUgPSB0aGlzLmR1c3RUcmFpbEltZztcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IHRoaXMuZ2V0UmFuZG9tRmxvYXQoXHJcblx0XHRcdFx0MC4xLFxyXG5cdFx0XHRcdDAuNVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHQxMCxcclxuXHRcdFx0XHQyNVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoXHJcblx0XHRcdFx0MjU1LFxyXG5cdFx0XHRcdDI1NSxcclxuXHRcdFx0XHQyNTVcclxuXHRcdFx0KTtcclxuXHRcdFx0dHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGFydGljbGVzKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBybmdQYXJ0aWNsZXNTaXplID0gdGhpcy5nZXRSYW5kb21JbnQoNzUsIDEyNSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHBhcnRpY2xlcylcclxuXHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdDAuNSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogcm5nUGFydGljbGVzU2l6ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogcm5nUGFydGljbGVzU2l6ZSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBgYmFja091dGAgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0Y2MudHdlZW4ocGFydGljbGVzKVxyXG5cdFx0XHRcdFx0LmJlemllclRvKFxyXG5cdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCwgY2Mud2luU2l6ZS53aWR0aCksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnksIGNjLndpblNpemUuaGVpZ2h0KVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRuZXcgY2MuVmVjMihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHRcdFx0XHRcdGNjLndpblNpemUud2lkdGggLyA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0KDMgKiBjYy53aW5TaXplLndpZHRoKSAvIDRcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2Mud2luU2l6ZS5oZWlnaHQgLyA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0KDMgKiBjYy53aW5TaXplLmhlaWdodCkgLyA0XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbnVtMjsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGJ1bGxldHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSgpKTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYlRyYWlscyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKCkpO1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kdXN0SW1nO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMucGFyZW50ID0gYnVsbGV0cztcclxuXHRcdFx0XHRcdFx0XHRiVHJhaWxzLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnByZXZpZXc7XHJcblx0XHRcdFx0XHRcdFx0YlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZHVzdFRyYWlsSW1nO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9XHJcblx0XHRcdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tRmxvYXQoMC4xLCAwLjUpO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwLCAyNSk7XHJcblx0XHRcdFx0XHRcdFx0YlRyYWlscy5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRjYy5Nb3Rpb25TdHJlYWtcclxuXHRcdFx0XHRcdFx0XHQpLmZhZGVUaW1lID0gMC4yO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPVxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9XHJcblx0XHRcdFx0XHRcdFx0XHR0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJUcmFpbHMuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFzdE1vZGUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0dHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLndpZHRoID0gMDtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLmhlaWdodCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0Ly8gYnVsbGV0cy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM1OSk7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0cy5uYW1lID0gYGJ1bGxldHNgICsgajtcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLnBhcmVudCA9IHBhcnRpY2xlcztcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRzLnggPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldHMueSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0cy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgoXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJ0aWNsZXMuY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcnNBcnJheVtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21JbnQoMCwgY29sb3JzQXJyYXkubGVuZ3RoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gYnVsbGV0cy5jb2xvciA9IHBhcnRpY2xlcy5jb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcm5nU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgMjAwKTtcclxuXHRcdFx0XHRcdFx0XHRjYy50d2VlbihidWxsZXRzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQwLjI1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHdpZHRoOiBybmdTaXplLCBoZWlnaHQ6IHJuZ1NpemUgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBlYXNpbmc6IGBiYWNrT3V0YCB9XHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRjYy50d2VlbihidWxsZXRzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKDAuNSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB0aGlzLmdldFJhbmRvbU51bWJlcihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRidWxsZXRzLnggLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLCA1MDApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJ1bGxldHMueCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsIDUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eTogdGhpcy5nZXRSYW5kb21OdW1iZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnVsbGV0cy55IC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCwgNTAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRidWxsZXRzLnkgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSYW5kb21OdW1iZXIoMTAwLCA1MDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0Y2MudHdlZW4oYnVsbGV0cylcclxuXHRcdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjAwIH0pXHJcblx0XHRcdFx0XHRcdFx0XHQudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvKDAuMSwgeyBvcGFjaXR5OiAyMDAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcblx0XHRcdFx0XHRcdFx0XHQudG8oMC4xLCB7IG9wYWNpdHk6IDIwMCwgc2NhbGU6IDAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdC5jYWxsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnVsbGV0cy5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgMC4xICogKGkgKyAxKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Tictock/Scripts/questionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16b5cNzEfVPT4gC4z4qvMqL', 'questionManager');
// Games/Tictock/Scripts/questionManager.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(questionData)
    // questions: questionData[] = [];
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFRpY3RvY2tcXFNjcmlwdHNcXHF1ZXN0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFjQSxDQUFDO0lBWkcsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUVsQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FjNUI7SUFBRCxlQUFDO0NBZEQsQUFjQyxDQWRxQyxFQUFFLENBQUMsU0FBUyxHQWNqRDtrQkFkb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShxdWVzdGlvbkRhdGEpXHJcbiAgICAvLyBxdWVzdGlvbnM6IHF1ZXN0aW9uRGF0YVtdID0gW107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/TextLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1241sXwmpPE6Sv15qZNtq7', 'TextLoader');
// Framework/Scripts/Utilities/TextLoader.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //This script will be for loading texts from JSON
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlsaXRpZXNcXFRleHRMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLGlEQUFpRDtJQUVqRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9UaGlzIHNjcmlwdCB3aWxsIGJlIGZvciBsb2FkaW5nIHRleHRzIGZyb20gSlNPTlxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/video.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '959f7A5jptMGpxTvBXeyZrl', 'video');
// Games/Scripts/video.ts

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
var StartGame_1 = require("../../Framework/Scripts/StartGame");
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QuestionData = /** @class */ (function () {
    function QuestionData() {
        // @property(Number)
        this.questionTime = 0;
        // @property(Boolean)
        this.isoptionText = false;
        // @property(Boolean)
        this.isquestionText = false;
        // @property(cc.SpriteFrame)
        this.questionImg = null;
        // @property(cc.AudioClip)
        this.questionAudio = null;
        // @property(String)
        this.questionText = "";
        // @property(cc.SpriteFrame)
        this.optionImgs = [];
        // @property(String)
        this.optionTexts = [];
        // @property(cc.AudioClip)
        this.reiterationAudio = null;
        this.correctAudio = null;
        // @property(cc.AudioClip)
        this.wrongAudio = null;
        // @property(Number)
        this.correctAnswer = 1;
    }
    QuestionData = __decorate([
        ccclass("QuestionData")
    ], QuestionData);
    return QuestionData;
}());
var video = /** @class */ (function (_super) {
    __extends(video, _super);
    function video() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tools = null;
        _this.questionNode = null;
        _this.character = null;
        _this.starsPanel = null;
        _this.bgMusic = null;
        _this.correctSound = null;
        _this.starSprites = [];
        _this.jaipuria_font = null;
        _this.podar_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.positiveVO = [];
        _this.duration = 0;
        _this.slider = null;
        _this.toolActivater = null;
        _this.questions = [];
        _this.isSliding = false;
        _this.currentTime = 0;
        _this.timers = [];
        _this.totalQuestions = 0;
        _this.questionAppeared = [];
        _this.currentQuestion = 0;
        _this.answeredQuestion = [];
        _this.isPause = false;
        _this.isPlay = true;
        _this.isOnSlider = false;
        _this.canNextQuestion = true;
        _this.attemps = 0;
        _this.videoCompleted = false;
        _this.gameStarted = false;
        _this.correctAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        _this.wrongAnim = [
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
        ];
        _this.puzzleCorrectAnim = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_1",
            "positive_2",
            "positive_3",
        ];
        _this.puzzleNegativeAnim = [
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
            "negative_1",
        ];
        _this.supercubCorrectAnim = [
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        _this.supercubNegativeAnim = [
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
            "negative_3",
            "negative_4",
        ];
        _this.podarCorrectAnim = [
            "possitive1",
            "possitive2",
            "possitive3",
            "possitive4",
            "possitive5",
            "possitive6",
            "possitive1",
            "possitive2",
            "possitive3",
            "possitive4",
            "possitive5",
            "possitive6",
        ];
        _this.podarNegativeAnim = [
            "negetive1",
            "negetive2",
            "negetive3",
            "negetive4",
            "negetive5",
            "negetive6",
            "negetive1",
            "negetive2",
            "negetive3",
            "negetive4",
            "negetive5",
            "negetive6",
        ];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    video.prototype.onLoad = function () {
        var _this = this;
        this.UpdateQuestions();
        this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
        this.scheduleOnce(function () {
            for (var i = 0; i < _this.questions.length; i++) {
                _this.timers[i] = _this.questions[i].questionTime;
                console.log("question timer = ", _this.timers[i]);
                _this.totalQuestions++;
                _this.questionAppeared[i] = false;
                _this.answeredQuestion[i] = false;
            }
        }, 1);
        this.slider.children[2].on("touchstart", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchmove", function () {
            this.isSliding = false;
            this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchend", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);
        this.slider.children[2].on("touchcancel", function () {
            this.UpdateSlider();
            this.isOnSlider = false;
        }, this);
        this.slider.children[0].on("touchstart", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchmove", function () {
            this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchend", function () {
            this.UpdateSlider();
        }, this);
    };
    video.prototype.UpdateQuestions = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.tlc_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.supercub_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.jaipuria_font;
            });
        }
        var _loop_1 = function (i) {
            this_1.questions[i] = new QuestionData();
            this_1.questions[i].questionTime = parseInt(StartGame_1.default.Instance.questions[i].QuestionAppearTime);
            this_1.questions[i].isoptionText =
                StartGame_1.default.Instance.questions[i].IsOptionText;
            this_1.questions[i].isquestionText =
                StartGame_1.default.Instance.questions[i].IsQuestionText;
            this_1.questions[i].correctAnswer = parseInt(StartGame_1.default.Instance.questions[i].CorrectAnswer);
            if (!this_1.questions[i].isquestionText) {
                //load the question image
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.questions[i].questionImg = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].QuestionImageName, function (spriteFrame) {
                        _this.questions[i].questionImg = spriteFrame;
                    });
                }
            }
            else {
                this_1.questions[i].questionText =
                    StartGame_1.default.Instance.questions[i].QuestionText;
            }
            if (!this_1.questions[i].isoptionText) {
                var _loop_2 = function (j) {
                    if (StartGame_1.default.Instance.isDemoGame) {
                        cc.loader.load(StartGame_1.default.Instance.questions[i].Options[j], function (err, texture) {
                            if (err) {
                                console.error("Failed to load image:", err);
                                return;
                            }
                            var spriteFrame = new cc.SpriteFrame(texture);
                            _this.questions[i].optionImgs[j] = spriteFrame;
                        });
                    }
                    else {
                        this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].Options[j], function (spriteFrame) {
                            _this.questions[i].optionImgs[j] = spriteFrame;
                        });
                    }
                };
                //load the option images
                for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) {
                    _loop_2(j);
                }
            }
            else {
                //load the option texts
                for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) {
                    this_1.questions[i].optionTexts[j] =
                        StartGame_1.default.Instance.questions[i].Options[j];
                }
            }
            if (StartGame_1.default.Instance.isDemoGame) {
                cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].questionAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].reiterationAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].CorrectAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].correctAudio = audioClip;
                });
                cc.loader.load(StartGame_1.default.Instance.questions[i].WrongAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.questions[i].wrongAudio = audioClip;
                });
            }
            else {
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].QuestionAudioName, function (audioClip) {
                    _this.questions[i].questionAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function (audioClip) {
                    _this.questions[i].reiterationAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].CorrectAudioName, function (audioClip) {
                    _this.questions[i].correctAudio = audioClip;
                });
                this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].WrongAudioName, function (audioClip) {
                    _this.questions[i].wrongAudio = audioClip;
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < StartGame_1.default.Instance.TotalLevels; i++) {
            _loop_1(i);
        }
    };
    video.prototype.start = function () {
        this.playVideo1();
        for (var i = 2; i <= StartGame_1.default.Instance.questions.length; i++) {
            var star = cc.instantiate(this.starsPanel.children[0]);
            star.parent = this.starsPanel;
            star.name = i.toString();
            star.setPosition(0, 0);
        }
        this.OptionsLayout();
        if (StartGame_1.default.Instance.jockeyName == "puzzle") {
            this.correctAnim = this.puzzleCorrectAnim;
            this.wrongAnim = this.puzzleNegativeAnim;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.correctAnim = this.supercubCorrectAnim;
            this.wrongAnim = this.supercubNegativeAnim;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.correctAnim = this.podarCorrectAnim;
            this.wrongAnim = this.podarNegativeAnim;
        }
    };
    video.prototype.playVideo1 = function () {
        var _this = this;
        this.node.on("completed", function () {
            if (this.gameStarted) {
                this.checkOnMissingQuestions();
                console.log("video completed");
                this.tools.active = false;
                this.videoCompleted = true;
            }
            // cc.director.loadScene("1");
            // this.node.destroy();
        }, this);
        this.node.on("playing", function () {
            var _this = this;
            this.isPlay = true;
            this.isPause = false;
            // console.log("Duration = ", this.node.getComponent(cc.VideoPlayer).getDuration());
            this.scheduleOnce(function () {
                _this.ActivateTools(false);
            }, 2);
        }, this);
        // this.node.getComponent(cc.VideoPlayer).pause();
        this.node.getComponent(cc.VideoPlayer).volume = 0;
        // this.node.getComponent(cc.VideoPlayer).resume();
        // this.node.getComponent(cc.VideoPlayer).pause();
        this.node.getComponent(cc.VideoPlayer).play();
        this.scheduleOnce(function () {
            // this.ActivateTools(false);
            _this.node.getComponent(cc.VideoPlayer).volume = 1;
            _this.UpdateSlider();
            _this.scheduleOnce(function () {
                _this.gameStarted = true;
            }, 1);
            // this.isSliding = true;
        }, 1);
        // this.scheduleOnce(() => {
        //     this.tools.active = true;
        // }, 5);
    };
    video.prototype.ActivateTools = function (_activate) {
        var _this = this;
        if (_activate === void 0) { _activate = true; }
        if (_activate) {
            this.toolActivater.active = false;
            this.tools.opacity = 255;
            this.scheduleOnce(function () {
                if (_this.tools.opacity == 255 &&
                    !_this.isPause &&
                    !_this.isOnSlider) {
                    _this.ActivateTools(false);
                }
            }, 2);
        }
        else {
            this.toolActivater.active = true;
            this.tools.opacity = 0;
        }
    };
    video.prototype.starUpdate = function (_current, _answered, _correct) {
        if (_answered === void 0) { _answered = false; }
        if (_correct === void 0) { _correct = true; }
        for (var i = 0; i < this.starsPanel.children.length; i++) {
            if (i == _current) {
                this.starsPanel.children[i].opacity = 255;
                if (!_answered) {
                    this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[0];
                }
                else if (_answered) {
                    if (_correct) {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[2];
                    }
                    else {
                        this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[1];
                    }
                }
                break;
            }
        }
    };
    video.prototype.ResumePlayButton = function () {
        cc.audioEngine.stopMusic();
        this.isPlay = true;
        this.isPause = false;
        this.node.getComponent(cc.VideoPlayer).resume();
        this.tools.getChildByName("resume").active = false;
        this.tools.getChildByName("pause").active = true;
    };
    video.prototype.PauseButton = function () {
        this.isPlay = false;
        this.isPause = true;
        this.node.getComponent(cc.VideoPlayer).pause();
        this.tools.getChildByName("resume").active = true;
        this.tools.getChildByName("pause").active = false;
        this.ActivateTools();
    };
    video.prototype.UpdateSlider = function () {
        var _this = this;
        this.isSliding = false;
        this.currentTime =
            this.node.getComponent(cc.VideoPlayer).getDuration() *
                this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
        console.log("updateslider : ", Math.round(this.node.getComponent(cc.VideoPlayer).currentTime));
        this.scheduleOnce(function () {
            _this.isSliding = true;
            _this.node.getComponent(cc.VideoPlayer).pause();
            _this.node.getComponent(cc.VideoPlayer).resume();
            _this.tools.getChildByName("resume").active = false;
            _this.tools.getChildByName("pause").active = true;
        }, 0.2);
    };
    video.prototype.UpdateSlider2 = function () {
        var _this = this;
        // console.log("updateslider : ");
        this.isSliding = false;
        this.currentTime =
            this.node.getComponent(cc.VideoPlayer).getDuration() *
                this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.VideoPlayer).resume();
        }, 0.2);
        // this.scheduleOnce(() => {
        //     this.isSliding = true;
        //     this.node.getComponent(cc.VideoPlayer).pause();
        //     this.node.getComponent(cc.VideoPlayer).resume();
        //     this.tools.getChildByName("resume").active = false;
        //     this.tools.getChildByName("pause").active = true;
        // }, 0.1);
    };
    video.prototype.SliderButton = function () {
        this.isOnSlider = true;
        // console.log("is slider button working!!!!!!!");
        this.slider.getChildByName("high").width =
            this.slider.getChildByName("Handle").getPosition().x + 472.5;
    };
    video.prototype.OnQuestionAnswered = function (_event) {
        var _this = this;
        var input = _event.target.name;
        this.attemps++;
        if (parseInt(input) ==
            this.questions[this.currentQuestion - 1].correctAnswer) {
            // this.character.getComponent(cc.Animation).play("correct");
            _event.target.getChildByName("green").active = true;
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.questions[this.currentQuestion - 1].reiterationAudio !=
                null) {
                this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1]
                        .reiterationAudio, false);
                }, 0.5);
            }
            _event.target.getParent().children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            // let num: number = this.getRandomNumber(0, this.correctAnim.length - 1)
            var num_1 = this.currentQuestion - 1;
            if (num_1 > this.correctAnim.length - 1) {
                num_1 -= this.correctAnim.length - 1;
                if (num_1 > this.correctAnim.length - 1) {
                    num_1 -= this.correctAnim.length - 1;
                    if (num_1 > this.correctAnim.length - 1) {
                        num_1 -= this.correctAnim.length - 1;
                    }
                }
            }
            this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].correctAudio, false);
                _this.character
                    .getChildByName("anim")
                    .getChildByName(StartGame_1.default.Instance.jockeyName)
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, _this.correctAnim[num_1], false);
                if (_this.attemps <= 1) {
                    _this.starUpdate(_this.currentQuestion - 1, true, true);
                }
                else {
                    _this.starUpdate(_this.currentQuestion - 1, true, false);
                }
                _this.scheduleOnce(function () {
                    _this.attemps = 0;
                    _this.questionNode.active = false;
                    _event.target.getParent().children.forEach(function (element) {
                        // this.character.getComponent(cc.Animation).play("tweenOut");
                        cc.tween(_this.character.getChildByName("anim"))
                            .to(0.5, { x: -600 }, { easing: "backInOut" })
                            .start();
                        element.getChildByName("green").active = false;
                        element.getChildByName("red").active = false;
                        element.getComponent(cc.Button).interactable = true;
                    });
                    _this.canNextQuestion = true;
                    if (_this.videoCompleted) {
                        _this.checkOnMissingQuestions();
                    }
                    else {
                        _this.ResumePlayButton();
                    }
                }, _this.getAnimDuration(_this.correctAnim[num_1]));
            }, this.questions[this.currentQuestion - 1].reiterationAudio.duration + 0.5);
        }
        else {
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].wrongAudio, false);
            // this.character.getComponent(cc.Animation).play("wrong");
            // let num: number = this.getRandomNumber(0, this.wrongAnim.length - 1);
            var num = this.currentQuestion - 1;
            if (num > this.wrongAnim.length - 1) {
                num -= this.wrongAnim.length - 1;
            }
            this.character
                .getChildByName("anim")
                .getChildByName(StartGame_1.default.Instance.jockeyName)
                .getComponent(sp.Skeleton)
                .setAnimation(0, this.wrongAnim[num], false);
            // this.character.getChildByName("anim").getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
            this.scheduleOnce(function () {
                // this.character.getComponent(cc.Animation).play("Idle");
                _this.character
                    .getChildByName("anim")
                    .getChildByName(StartGame_1.default.Instance.jockeyName)
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }, this.getAnimDuration(this.wrongAnim[num]));
            _event.target.getChildByName("red").active = true;
            _event.target.getComponent(cc.Button).interactable = false;
        }
    };
    video.prototype.OnSoundButton = function () {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
    };
    video.prototype.checkOnMissingQuestions = function () {
        var _this = this;
        var isEnd = true;
        for (var i = 0; i < this.questionAppeared.length; i++) {
            if (!this.questionAppeared[i]) {
                isEnd = false;
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
                break;
            }
        }
        if (isEnd) {
            this.character.active = false;
            this.node
                .getParent()
                .getChildByName("curtain")
                .getComponent(cc.Animation)
                .play().wrapMode = cc.WrapMode.Reverse;
            this.scheduleOnce(function () {
                cc.find("Canvas/gameEnd").active = true;
                // this.node.getParent().getChildByName("gameEnd").active = true;
                console.log("showedScreen--Excellent");
                console.log("gameEnded--true");
                // if (
                // 	startGame.Instance.jockeyName == "bag" ||
                // 	startGame.Instance.jockeyName == "crayon"
                // ) {
                // 	this.node
                // 		.getParent()
                // 		.getChildByName("gameEnd")
                // 		.getChildByName("jaipuria").active = true;
                // } else {
                // 	this.node
                // 		.getParent()
                // 		.getChildByName("gameEnd")
                // 		.getChildByName(startGame.Instance.jockeyName).active =
                // 		true;
                // }
                _this.scheduleOnce(function () {
                    _this.node.active = false;
                    if (StartGame_1.default.Instance.jockeyName == "boy" ||
                        StartGame_1.default.Instance.jockeyName == "girl") {
                        _this.node
                            .getParent()
                            .getChildByName("gameEnd")
                            .getChildByName("end").active = true;
                    }
                }, 2);
            }, this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).currentClip.duration);
        }
    };
    video.prototype.questionSetup = function () {
        var _this = this;
        var current = this.currentQuestion;
        this.starUpdate(this.currentQuestion);
        // this.character.getComponent(cc.Animation).play("tweenIn");
        this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName)
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim"))
            .to(0.5, { x: 0 }, { easing: "backInOut" })
            .start();
        var id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        cc.audioEngine.setVolume(id, 0.1);
        if (this.questions[this.currentQuestion].isquestionText) {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text")
                .getComponent(cc.Label).string =
                this.questions[this.currentQuestion].questionText;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img").active = false;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text").active = true;
        }
        else {
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("text").active = false;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img").active = true;
            this.questionNode
                .getChildByName("questionBox")
                .getChildByName("img")
                .getComponent(cc.Sprite).spriteFrame =
                this.questions[this.currentQuestion].questionImg;
        }
        if (this.questions[this.currentQuestion].isoptionText) {
            var i_1 = 0;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.active = false;
                if (i_1 <=
                    _this.questions[_this.currentQuestion].optionTexts
                        .length -
                        1) {
                    element.active = true;
                    element
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        _this.questions[_this.currentQuestion].optionTexts[i_1];
                    element.getChildByName("img").active = false;
                    element.getChildByName("text").active = true;
                }
                i_1++;
            });
        }
        else {
            var i_2 = 0;
            this.questionNode
                .getChildByName("options1")
                .children.forEach(function (element) {
                element.active = false;
                if (i_2 <=
                    _this.questions[_this.currentQuestion].optionImgs.length -
                        1) {
                    element.active = true;
                    element
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame =
                        _this.questions[_this.currentQuestion].optionImgs[i_2];
                    element.getChildByName("text").active = false;
                    element.getChildByName("img").active = true;
                }
                i_2++;
            });
        }
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questions[current].questionAudio, false);
            _this.character.getComponent(cc.Animation).play("Idle");
            _this.character
                .getChildByName("anim")
                .getChildByName(StartGame_1.default.Instance.jockeyName)
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
            _this.questionNode.getChildByName("options1").active = true;
            _this.questionNode.getChildByName("questionBox").active = true;
        }, 0.5);
    };
    video.prototype.update = function () {
        if (this.isSliding) {
            var currentTime = this.node.getComponent(cc.VideoPlayer).currentTime;
            var duration = this.node.getComponent(cc.VideoPlayer).getDuration();
            var value = currentTime / duration;
            this.slider.getComponent(cc.Slider).progress = value;
            this.slider.getChildByName("high").width =
                this.slider.getChildByName("Handle").getPosition().x + 472.5;
        }
        for (var i = 0; i < this.questions.length; i++) {
            if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) == this.timers[i] &&
                !this.questionAppeared[i] &&
                this.canNextQuestion &&
                this.gameStarted) {
                this.currentQuestion = i;
                console.log("activate the question");
                this.canNextQuestion = false;
                this.questionAppeared[this.currentQuestion] = true;
                this.PauseButton();
                this.questionSetup();
                this.currentQuestion++;
                this.questionNode.active = true;
            }
        }
    };
    // Show loading animation.
    video.prototype.getAnimDuration = function (animName) {
        console.log("animation name = ", animName);
        var num = this.character
            .getChildByName("anim")
            .getChildByName(StartGame_1.default.Instance.jockeyName)
            .getComponent(sp.Skeleton)
            .findAnimation(animName).duration;
        return num;
    };
    video.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    video.prototype.OnEnd = function () {
        window.close();
    };
    video.prototype.OptionsLayout = function () {
        var optionsLayout = this.starsPanel;
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
            var posX = accumulatedWidth + option.width * option.anchorX;
            option.x = posX - optionsLayout.width * optionsLayout.anchorX;
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
    video.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    video.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    __decorate([
        property(cc.Node)
    ], video.prototype, "tools", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "questionNode", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "character", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "starsPanel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "correctSound", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], video.prototype, "starSprites", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], video.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], video.prototype, "positiveVO", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "slider", void 0);
    __decorate([
        property(cc.Node)
    ], video.prototype, "toolActivater", void 0);
    __decorate([
        property(QuestionData)
    ], video.prototype, "questions", void 0);
    video = __decorate([
        ccclass
    ], video);
    return video;
}(cc.Component));
exports.default = video;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBQ0Msb0JBQW9CO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQTRCO1FBQzVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQywwQkFBMEI7UUFDMUIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQiw0QkFBNEI7UUFDNUIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQW9CO1FBQ3BCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF4QkssWUFBWTtRQURqQixPQUFPLENBQUMsY0FBYyxDQUFDO09BQ2xCLFlBQVksQ0F3QmpCO0lBQUQsbUJBQUM7Q0F4QkQsQUF3QkMsSUFB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LEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLFlBQVksQ0FBQzs0Q0FDUTtJQW5DWCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBeWdDekI7SUFBRCxZQUFDO0NBemdDRCxBQXlnQ0MsQ0F6Z0NrQyxFQUFFLENBQUMsU0FBUyxHQXlnQzlDO2tCQXpnQ29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbmNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgPSB0cnVlO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUXVlc3Rpb25EYXRhXCIpXHJcbmNsYXNzIFF1ZXN0aW9uRGF0YSB7XHJcblx0Ly8gQHByb3BlcnR5KE51bWJlcilcclxuXHRxdWVzdGlvblRpbWU6IG51bWJlciA9IDA7XHJcblx0Ly8gQHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNvcHRpb25UZXh0OiBib29sZWFuID0gZmFsc2U7XHJcblx0Ly8gQHByb3BlcnR5KEJvb2xlYW4pXHJcblx0aXNxdWVzdGlvblRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHQvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0cXVlc3Rpb25JbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHQvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHF1ZXN0aW9uQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0Ly8gQHByb3BlcnR5KFN0cmluZylcclxuXHRxdWVzdGlvblRleHQ6IHN0cmluZyA9IFwiXCI7XHJcblx0Ly8gQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdG9wdGlvbkltZ3M6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHQvLyBAcHJvcGVydHkoU3RyaW5nKVxyXG5cdG9wdGlvblRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cmVpdGVyYXRpb25BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRjb3JyZWN0QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0Ly8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHR3cm9uZ0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdC8vIEBwcm9wZXJ0eShOdW1iZXIpXHJcblx0Y29ycmVjdEFuc3dlcjogbnVtYmVyID0gMTtcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2aWRlbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0dG9vbHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHF1ZXN0aW9uTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0Y2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRzdGFyc1BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdGJnTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdHN0YXJTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Gb250KVxyXG5cdHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwb3NpdGl2ZVZPOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRzbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHByaXZhdGUgdG9vbEFjdGl2YXRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShRdWVzdGlvbkRhdGEpXHJcblx0cXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGlzU2xpZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgdGltZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cdHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBxdWVzdGlvbkFwcGVhcmVkOiBib29sZWFuW10gPSBbXTtcclxuXHRwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGFuc3dlcmVkUXVlc3Rpb246IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGlzUGxheTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHJpdmF0ZSBpc09uU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBjYW5OZXh0UXVlc3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgYXR0ZW1wczogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHZpZGVvQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuXHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdF07XHJcblx0cHJpdmF0ZSB3cm9uZ0FuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzJcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XHRcIm5lZ2F0aXZlXzVcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8yXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV81XCIsXHJcblx0XTtcclxuXHJcblx0cHJpdmF0ZSBwdXp6bGVDb3JyZWN0QW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XTtcclxuXHRwcml2YXRlIHB1enpsZU5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFwibmVnYXRpdmVfMVwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8xXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRdO1xyXG5cclxuXHRwcml2YXRlIHN1cGVyY3ViQ29ycmVjdEFuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdF07XHJcblx0cHJpdmF0ZSBzdXBlcmN1Yk5lZ2F0aXZlQW5pbTogc3RyaW5nW10gPSBbXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8zXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzRcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XHRcIm5lZ2F0aXZlXzNcIixcclxuXHRcdFwibmVnYXRpdmVfNFwiLFxyXG5cdFx0XCJuZWdhdGl2ZV8zXCIsXHJcblx0XHRcIm5lZ2F0aXZlXzRcIixcclxuXHRcdFwibmVnYXRpdmVfM1wiLFxyXG5cdFx0XCJuZWdhdGl2ZV80XCIsXHJcblx0XTtcclxuXHJcblx0cHJpdmF0ZSBwb2RhckNvcnJlY3RBbmltOiBzdHJpbmdbXSA9IFtcclxuXHRcdFwicG9zc2l0aXZlMVwiLFxyXG5cdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcInBvc3NpdGl2ZTNcIixcclxuXHRcdFwicG9zc2l0aXZlNFwiLFxyXG5cdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcInBvc3NpdGl2ZTZcIixcclxuXHRcdFwicG9zc2l0aXZlMVwiLFxyXG5cdFx0XCJwb3NzaXRpdmUyXCIsXHJcblx0XHRcInBvc3NpdGl2ZTNcIixcclxuXHRcdFwicG9zc2l0aXZlNFwiLFxyXG5cdFx0XCJwb3NzaXRpdmU1XCIsXHJcblx0XHRcInBvc3NpdGl2ZTZcIixcclxuXHRdO1xyXG5cdHByaXZhdGUgcG9kYXJOZWdhdGl2ZUFuaW06IHN0cmluZ1tdID0gW1xyXG5cdFx0XCJuZWdldGl2ZTFcIixcclxuXHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdFx0XCJuZWdldGl2ZTFcIixcclxuXHRcdFwibmVnZXRpdmUyXCIsXHJcblx0XHRcIm5lZ2V0aXZlM1wiLFxyXG5cdFx0XCJuZWdldGl2ZTRcIixcclxuXHRcdFwibmVnZXRpdmU1XCIsXHJcblx0XHRcIm5lZ2V0aXZlNlwiLFxyXG5cdF07XHJcblxyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLlVwZGF0ZVF1ZXN0aW9ucygpO1xyXG5cdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLnRpbWVyc1tpXSA9IHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGltZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInF1ZXN0aW9uIHRpbWVyID0gXCIsIHRoaXMudGltZXJzW2ldKTtcclxuXHRcdFx0XHR0aGlzLnRvdGFsUXVlc3Rpb25zKys7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbkFwcGVhcmVkW2ldID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5hbnN3ZXJlZFF1ZXN0aW9uW2ldID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sIDEpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcblx0XHRcdFwidG91Y2hzdGFydFwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuc2xpZGVyLmNoaWxkcmVuWzJdLm9uKFxyXG5cdFx0XHRcInRvdWNobW92ZVwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMl0ub24oXHJcblx0XHRcdFwidG91Y2hlbmRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcblx0XHRcdFx0dGhpcy5pc09uU2xpZGVyID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXNcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNsaWRlci5jaGlsZHJlblsyXS5vbihcclxuXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuXHRcdFx0XHR0aGlzLmlzT25TbGlkZXIgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpc1xyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLnNsaWRlci5jaGlsZHJlblswXS5vbihcclxuXHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXHJcblx0XHRcdFwidG91Y2htb3ZlXCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zbGlkZXIuY2hpbGRyZW5bMF0ub24oXHJcblx0XHRcdFwidG91Y2hlbmRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuVXBkYXRlU2xpZGVyKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXNcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVRdWVzdGlvbnMoKSB7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG5cdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBvZGFyX2ZvbnQ7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zMVwiKVxyXG5cdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRsY19mb250O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcblx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfZm9udDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9XHJcblx0XHRcdFx0XHRcdHRoaXMuamFpcHVyaWFfZm9udDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzOyBpKyspIHtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0gPSBuZXcgUXVlc3Rpb25EYXRhKCk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGltZSA9IHBhcnNlSW50KFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BcHBlYXJUaW1lXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCA9XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Jc09wdGlvblRleHQ7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLmlzcXVlc3Rpb25UZXh0ID1cclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLklzUXVlc3Rpb25UZXh0O1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0QW5zd2VyID0gcGFyc2VJbnQoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Db3JyZWN0QW5zd2VyXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmICghdGhpcy5xdWVzdGlvbnNbaV0uaXNxdWVzdGlvblRleHQpIHtcclxuXHRcdFx0XHQvL2xvYWQgdGhlIHF1ZXN0aW9uIGltYWdlXHJcblx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5RdWVzdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25JbWcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uSW1nID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLnF1ZXN0aW9uVGV4dCA9XHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uVGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMucXVlc3Rpb25zW2ldLmlzb3B0aW9uVGV4dCkge1xyXG5cdFx0XHRcdC8vbG9hZCB0aGUgb3B0aW9uIGltYWdlc1xyXG5cdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRsZXQgaiA9IDA7XHJcblx0XHRcdFx0XHRqIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zLmxlbmd0aDtcclxuXHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9uc1tqXSxcclxuXHRcdFx0XHRcdFx0XHQoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5vcHRpb25JbWdzW2pdID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdLFxyXG5cdFx0XHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9uSW1nc1tqXSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly9sb2FkIHRoZSBvcHRpb24gdGV4dHNcclxuXHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0bGV0IGogPSAwO1xyXG5cdFx0XHRcdFx0aiA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uT3B0aW9ucy5sZW5ndGg7XHJcblx0XHRcdFx0XHRqKytcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvblRleHRzW2pdID1cclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5PcHRpb25zW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uUXVlc3Rpb25BdWRpb05hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucXVlc3Rpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5yZWl0ZXJhdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLkNvcnJlY3RBdWRpb05hbWUsXHJcblx0XHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbzpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLldyb25nQXVkaW9OYW1lLFxyXG5cdFx0XHRcdFx0KGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zW2ldLndyb25nQXVkaW8gPSBhdWRpb0NsaXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2ldLlF1ZXN0aW9uQXVkaW9OYW1lLFxyXG5cdFx0XHRcdFx0KGF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1tpXS5xdWVzdGlvbkF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ucmVpdGVyYXRpb25BdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbaV0uQ29ycmVjdEF1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0uY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tpXS5Xcm9uZ0F1ZGlvTmFtZSxcclxuXHRcdFx0XHRcdChhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbaV0ud3JvbmdBdWRpbyA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHRoaXMucGxheVZpZGVvMSgpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDI7IGkgPD0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgc3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlblswXSk7XHJcblx0XHRcdHN0YXIucGFyZW50ID0gdGhpcy5zdGFyc1BhbmVsO1xyXG5cdFx0XHRzdGFyLm5hbWUgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHN0YXIuc2V0UG9zaXRpb24oMCwgMCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInB1enpsZVwiKSB7XHJcblx0XHRcdHRoaXMuY29ycmVjdEFuaW0gPSB0aGlzLnB1enpsZUNvcnJlY3RBbmltO1xyXG5cdFx0XHR0aGlzLndyb25nQW5pbSA9IHRoaXMucHV6emxlTmVnYXRpdmVBbmltO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMuc3VwZXJjdWJDb3JyZWN0QW5pbTtcclxuXHRcdFx0dGhpcy53cm9uZ0FuaW0gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmVBbmltO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0dGhpcy5jb3JyZWN0QW5pbSA9IHRoaXMucG9kYXJDb3JyZWN0QW5pbTtcclxuXHRcdFx0dGhpcy53cm9uZ0FuaW0gPSB0aGlzLnBvZGFyTmVnYXRpdmVBbmltO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cGxheVZpZGVvMSgpIHtcclxuXHRcdHRoaXMubm9kZS5vbihcclxuXHRcdFx0XCJjb21wbGV0ZWRcIixcclxuXHRcdFx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdhbWVTdGFydGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInZpZGVvIGNvbXBsZXRlZFwiKTtcclxuXHRcdFx0XHRcdHRoaXMudG9vbHMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ29tcGxldGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0XHQvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5vbihcclxuXHRcdFx0XCJwbGF5aW5nXCIsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmlzUGxheSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJEdXJhdGlvbiA9IFwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5nZXREdXJhdGlvbigpKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG5cdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cdFx0Ly8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnZvbHVtZSA9IDA7XHJcblx0XHQvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Ly8gdGhpcy5BY3RpdmF0ZVRvb2xzKGZhbHNlKTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikudm9sdW1lID0gMTtcclxuXHRcdFx0dGhpcy5VcGRhdGVTbGlkZXIoKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdFx0Ly8gdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG5cdFx0fSwgMSk7XHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgdGhpcy50b29scy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gfSwgNSk7XHJcblx0fVxyXG5cclxuXHRBY3RpdmF0ZVRvb2xzKF9hY3RpdmF0ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHRcdGlmIChfYWN0aXZhdGUpIHtcclxuXHRcdFx0dGhpcy50b29sQWN0aXZhdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnRvb2xzLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHR0aGlzLnRvb2xzLm9wYWNpdHkgPT0gMjU1ICYmXHJcblx0XHRcdFx0XHQhdGhpcy5pc1BhdXNlICYmXHJcblx0XHRcdFx0XHQhdGhpcy5pc09uU2xpZGVyXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRvb2xBY3RpdmF0ZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy50b29scy5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXJVcGRhdGUoXHJcblx0XHRfY3VycmVudDogbnVtYmVyLFxyXG5cdFx0X2Fuc3dlcmVkOiBib29sZWFuID0gZmFsc2UsXHJcblx0XHRfY29ycmVjdDogYm9vbGVhbiA9IHRydWVcclxuXHQpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IF9jdXJyZW50KSB7XHJcblx0XHRcdFx0dGhpcy5zdGFyc1BhbmVsLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcblx0XHRcdFx0aWYgKCFfYW5zd2VyZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdGNjLlNwcml0ZVxyXG5cdFx0XHRcdFx0KS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhclNwcml0ZXNbMF07XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfYW5zd2VyZWQpIHtcclxuXHRcdFx0XHRcdGlmIChfY29ycmVjdCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXJzUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRcdGNjLlNwcml0ZVxyXG5cdFx0XHRcdFx0XHQpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFyU3ByaXRlc1syXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhcnNQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0Y2MuU3ByaXRlXHJcblx0XHRcdFx0XHRcdCkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJTcHJpdGVzWzFdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UmVzdW1lUGxheUJ1dHRvbigpIHtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG5cdFx0dGhpcy5pc1BsYXkgPSB0cnVlO1xyXG5cdFx0dGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdHRoaXMudG9vbHMuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bWVcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHR9XHJcblx0UGF1c2VCdXR0b24oKSB7XHJcblx0XHR0aGlzLmlzUGxheSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkFjdGl2YXRlVG9vbHMoKTtcclxuXHR9XHJcblxyXG5cdFVwZGF0ZVNsaWRlcigpIHtcclxuXHRcdHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmN1cnJlbnRUaW1lID1cclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuZ2V0RHVyYXRpb24oKSAqXHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuc3RvcCgpO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGxheSgpO1xyXG5cdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuXHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XCJ1cGRhdGVzbGlkZXIgOiBcIixcclxuXHRcdFx0TWF0aC5yb3VuZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jdXJyZW50VGltZSlcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNTbGlkaW5nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucGF1c2UoKTtcclxuXHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlc3VtZSgpO1xyXG5cdFx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH0sIDAuMik7XHJcblx0fVxyXG5cclxuXHRVcGRhdGVTbGlkZXIyKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ1cGRhdGVzbGlkZXIgOiBcIik7XHJcblx0XHR0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCkgKlxyXG5cdFx0XHR0aGlzLnNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnN0b3AoKTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcclxuXHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBsYXkoKTtcclxuXHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiSGFuZGxlXCIpLmdldFBvc2l0aW9uKCkueCArIDQ3Mi41O1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5yZXN1bWUoKTtcclxuXHRcdH0sIDAuMik7XHJcblx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHQvLyAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG5cdFx0Ly8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnBhdXNlKCk7XHJcblx0XHQvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikucmVzdW1lKCk7XHJcblx0XHQvLyAgICAgdGhpcy50b29scy5nZXRDaGlsZEJ5TmFtZShcInJlc3VtZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdC8vICAgICB0aGlzLnRvb2xzLmdldENoaWxkQnlOYW1lKFwicGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIH0sIDAuMSk7XHJcblx0fVxyXG5cclxuXHRTbGlkZXJCdXR0b24oKSB7XHJcblx0XHR0aGlzLmlzT25TbGlkZXIgPSB0cnVlO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpcyBzbGlkZXIgYnV0dG9uIHdvcmtpbmchISEhISEhXCIpO1xyXG5cdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoXCIpLndpZHRoID1cclxuXHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0fVxyXG5cclxuXHRPblF1ZXN0aW9uQW5zd2VyZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSBfZXZlbnQudGFyZ2V0Lm5hbWU7XHJcblx0XHR0aGlzLmF0dGVtcHMrKztcclxuXHRcdGlmIChcclxuXHRcdFx0cGFyc2VJbnQoaW5wdXQpID09XHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0uY29ycmVjdEFuc3dlclxyXG5cdFx0KSB7XHJcblx0XHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb3JyZWN0XCIpO1xyXG5cdFx0XHRfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RTb3VuZCwgZmFsc2UpO1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvICE9XHJcblx0XHRcdFx0bnVsbFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdXHJcblx0XHRcdFx0XHRcdFx0LnJlaXRlcmF0aW9uQXVkaW8sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdH1cclxuXHRcdFx0X2V2ZW50LnRhcmdldC5nZXRQYXJlbnQoKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0ZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIGxldCBudW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSlcclxuXHRcdFx0bGV0IG51bSA9IHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMTtcclxuXHRcdFx0aWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdG51bSAtPSB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0aWYgKG51bSA+IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0bnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdGlmIChudW0gPiB0aGlzLmNvcnJlY3RBbmltLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0bnVtIC09IHRoaXMuY29ycmVjdEFuaW0ubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDFdLmNvcnJlY3RBdWRpbyxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJhY3RlclxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy5jb3JyZWN0QW5pbVtudW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuYXR0ZW1wcyA8PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXJVcGRhdGUodGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uIC0gMSwgdHJ1ZSwgZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmF0dGVtcHMgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRfZXZlbnQudGFyZ2V0LmdldFBhcmVudCgpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInR3ZWVuT3V0XCIpO1xyXG5cdFx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikpXHJcblx0XHRcdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiAtNjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJncmVlblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbk5leHRRdWVzdGlvbiA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy52aWRlb0NvbXBsZXRlZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrT25NaXNzaW5nUXVlc3Rpb25zKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlJlc3VtZVBsYXlCdXR0b24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB0aGlzLmdldEFuaW1EdXJhdGlvbih0aGlzLmNvcnJlY3RBbmltW251bV0pKTtcclxuXHRcdFx0fSwgdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvLmR1cmF0aW9uICsgMC41KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb24gLSAxXS53cm9uZ0F1ZGlvLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCk7XHJcblx0XHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ3cm9uZ1wiKTtcclxuXHRcdFx0Ly8gbGV0IG51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy53cm9uZ0FuaW0ubGVuZ3RoIC0gMSk7XHJcblx0XHRcdGxldCBudW0gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcblx0XHRcdGlmIChudW0gPiB0aGlzLndyb25nQW5pbS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0bnVtIC09IHRoaXMud3JvbmdBbmltLmxlbmd0aCAtIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY2hhcmFjdGVyXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHQvLyB0aGlzLmNoYXJhY3Rlci5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy53cm9uZ0FuaW1bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGVcIik7XHJcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0fSwgdGhpcy5nZXRBbmltRHVyYXRpb24odGhpcy53cm9uZ0FuaW1bbnVtXSkpO1xyXG5cdFx0XHRfZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPblNvdW5kQnV0dG9uKCkge1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uIC0gMV0ucXVlc3Rpb25BdWRpbyxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjaGVja09uTWlzc2luZ1F1ZXN0aW9ucygpIHtcclxuXHRcdGxldCBpc0VuZDogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25BcHBlYXJlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoIXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSkge1xyXG5cdFx0XHRcdGlzRW5kID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiYWN0aXZhdGUgdGhlIHF1ZXN0aW9uXCIpO1xyXG5cdFx0XHRcdHRoaXMuY2FuTmV4dFF1ZXN0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbkFwcGVhcmVkW3RoaXMuY3VycmVudFF1ZXN0aW9uXSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5QYXVzZUJ1dHRvbigpO1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25TZXR1cCgpO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGlzRW5kKSB7XHJcblx0XHRcdHRoaXMuY2hhcmFjdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0UGFyZW50KClcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoKS53cmFwTW9kZSA9IGNjLldyYXBNb2RlLlJldmVyc2U7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRjYy5maW5kKFwiQ2FudmFzL2dhbWVFbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUV4Y2VsbGVudFwiKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuXHRcdFx0XHQvLyBpZiAoXHJcblx0XHRcdFx0Ly8gXHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcblx0XHRcdFx0Ly8gXHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyYXlvblwiXHJcblx0XHRcdFx0Ly8gKSB7XHJcblx0XHRcdFx0Ly8gXHR0aGlzLm5vZGVcclxuXHRcdFx0XHQvLyBcdFx0LmdldFBhcmVudCgpXHJcblx0XHRcdFx0Ly8gXHRcdC5nZXRDaGlsZEJ5TmFtZShcImdhbWVFbmRcIilcclxuXHRcdFx0XHQvLyBcdFx0LmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0Ly8gXHRcdC5nZXRQYXJlbnQoKVxyXG5cdFx0XHRcdC8vIFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lRW5kXCIpXHJcblx0XHRcdFx0Ly8gXHRcdC5nZXRDaGlsZEJ5TmFtZShzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID1cclxuXHRcdFx0XHQvLyBcdFx0dHJ1ZTtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiIHx8XHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldFBhcmVudCgpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiZ2FtZUVuZFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHR9LCB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmN1cnJlbnRDbGlwLmR1cmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHF1ZXN0aW9uU2V0dXAoKSB7XHJcblx0XHRsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uO1xyXG5cdFx0dGhpcy5zdGFyVXBkYXRlKHRoaXMuY3VycmVudFF1ZXN0aW9uKTtcclxuXHRcdC8vIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0d2VlbkluXCIpO1xyXG5cdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYW5pbVwiKVxyXG5cdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUpXHJcblx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0Y2MudHdlZW4odGhpcy5jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpKVxyXG5cdFx0XHQudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ011c2ljLCB0cnVlKTtcclxuXHRcdHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnF1ZXN0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCAwLjEpO1xyXG5cdFx0aWYgKHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5pc3F1ZXN0aW9uVGV4dCkge1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uVGV4dDtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbkltZztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmlzb3B0aW9uVGV4dCkge1xyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIilcclxuXHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0aSA8PVxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uVGV4dHNcclxuXHRcdFx0XHRcdFx0XHQubGVuZ3RoIC1cclxuXHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvblRleHRzW2ldO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnMxXCIpXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGkgPD1cclxuXHRcdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbkltZ3MubGVuZ3RoIC1cclxuXHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9uSW1nc1tpXTtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnNbY3VycmVudF0ucXVlc3Rpb25BdWRpbyxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZVwiKTtcclxuXHRcdFx0dGhpcy5jaGFyYWN0ZXJcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uczFcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJveFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fSwgMC41KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLmlzU2xpZGluZykge1xyXG5cdFx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdGNjLlZpZGVvUGxheWVyXHJcblx0XHRcdCkuY3VycmVudFRpbWU7XHJcblx0XHRcdGxldCBkdXJhdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmdldER1cmF0aW9uKCk7XHJcblx0XHRcdGxldCB2YWx1ZSA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuc2xpZGVyLmdldENoaWxkQnlOYW1lKFwiaGlnaFwiKS53aWR0aCA9XHJcblx0XHRcdFx0dGhpcy5zbGlkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIYW5kbGVcIikuZ2V0UG9zaXRpb24oKS54ICsgNDcyLjU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRNYXRoLnJvdW5kKFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY3VycmVudFRpbWVcclxuXHRcdFx0XHQpID09IHRoaXMudGltZXJzW2ldICYmXHJcblx0XHRcdFx0IXRoaXMucXVlc3Rpb25BcHBlYXJlZFtpXSAmJlxyXG5cdFx0XHRcdHRoaXMuY2FuTmV4dFF1ZXN0aW9uICYmXHJcblx0XHRcdFx0dGhpcy5nYW1lU3RhcnRlZFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhY3RpdmF0ZSB0aGUgcXVlc3Rpb25cIik7XHJcblx0XHRcdFx0dGhpcy5jYW5OZXh0UXVlc3Rpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9uQXBwZWFyZWRbdGhpcy5jdXJyZW50UXVlc3Rpb25dID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLlBhdXNlQnV0dG9uKCk7XHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvblNldHVwKCk7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuXHRcdFx0XHR0aGlzLnF1ZXN0aW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBTaG93IGxvYWRpbmcgYW5pbWF0aW9uLlxyXG5cclxuXHRnZXRBbmltRHVyYXRpb24oYW5pbU5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFuaW1hdGlvbiBuYW1lID0gXCIsIGFuaW1OYW1lKTtcclxuXHRcdGxldCBudW06IG51bWJlciA9IHRoaXMuY2hhcmFjdGVyXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKVxyXG5cdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHQuZmluZEFuaW1hdGlvbihhbmltTmFtZSkuZHVyYXRpb247XHJcblx0XHRyZXR1cm4gbnVtO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0X251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcblx0XHRfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuXHRcdHJldHVybiBfbnVtYmVyO1xyXG5cdH1cclxuXHJcblx0T25FbmQoKSB7XHJcblx0XHR3aW5kb3cuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdE9wdGlvbnNMYXlvdXQoKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuc3RhcnNQYW5lbDtcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG5cdFx0Y29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG5cdFx0bGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cdFx0bGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblx0XHRcdGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuXHRcdFx0bGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG5cdFx0XHR0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0XHRpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0bWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuXHRcdGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxyXG5cdFx0XHR0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0bGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuXHRcdGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0bGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSB0aGUgb3B0aW9uXHJcblx0XHRcdG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0b3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcblx0XHRcdGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYO1xyXG5cdFx0XHRvcHRpb24ueCA9IHBvc1ggLSBvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYO1xyXG5cclxuXHRcdFx0YWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuXHRcdFx0Zm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0c3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcblx0fVxyXG5cclxuXHRsb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRpbWFnZU5hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcblx0XHRcdGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblx0bG9hZEF1ZGlvQ2xpcChcclxuXHRcdGF1ZGlvTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcblx0KSB7XHJcblx0XHRjYy5sb2FkZXIubG9hZFJlcyhcclxuXHRcdFx0XCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcblx0XHRcdGNjLkF1ZGlvQ2xpcCxcclxuXHRcdFx0KGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soYXVkaW9DbGlwKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/ProgressBar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/ProgressBar/Scripts/ProgressBar.ts

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
var StartGame_1 = require("../../../Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.starsEarned = [false, false, false];
        return _this;
        // update (dt) {}
    }
    ProgressBar_1 = ProgressBar;
    Object.defineProperty(ProgressBar, "Instance", {
        get: function () {
            return ProgressBar_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    ProgressBar.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        ProgressBar_1.instance = this;
    };
    ProgressBar.prototype.start = function () {
    };
    ProgressBar.prototype.ProgressFill = function (_currentQues, starLog) {
        if (starLog === void 0) { starLog = true; }
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.TotalLevels; //totalLevels
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues != 0 && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
            if (!this.starsEarned[0] && starLog) {
                this.starsEarned[0] = true;
                console.log("starsEarned--1");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && this.node.getChildByName("stars").children[1].opacity == 0) {
            if (!this.starsEarned[1] && starLog) {
                this.starsEarned[1] = true;
                console.log("starsEarned--2");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels && this.node.getChildByName("stars").children[2].opacity == 0) {
            if (!this.starsEarned[2] && starLog) {
                this.starsEarned[2] = true;
                console.log("starsEarned--3");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[2]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
    };
    ProgressBar.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        // _number = _number * this.shapes.length;
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    ProgressBar.prototype.createStarTrails = function (num, _node) {
        var _this = this;
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var NodePOS = _node.convertToWorldSpaceAR(this_1.node.parent.position);
            var rngX = this_1.getRandomNumber(_node.x - _offset, _node.x + _offset);
            var rngY = this_1.getRandomNumber(_node.y - _offset, _node.y + _offset);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = this_1.node.parent;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            particles.addComponent(cc.AudioSource).clip = this_1.particleSounds;
            particles.width = 600;
            particles.height = 600;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.trailsImg;
            trail.getComponent(cc.MotionStreak).enabled = false;
            // trail.color = new cc.Color(252, 244, 0);
            this_1.scheduleOnce(function () {
                particles.getComponent(cc.AudioSource).play();
                cc.tween(particles).to(0.75, { width: 35, height: 35 }, { easing: "backOut" }).start();
                cc.tween(particles).to(0.25, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.scheduleOnce(function () {
                        trail.getComponent(cc.MotionStreak).minSeg = 10;
                        trail.getComponent(cc.MotionStreak).stroke = 20;
                        trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        trail.getComponent(cc.MotionStreak).enabled = true;
                        trail.getComponent(cc.MotionStreak).fastMode = true;
                        cc.audioEngine.playEffect(_this.trailSounds, false);
                        // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                        // particles.getComponent(cc.AudioSource).volume = 0.2;
                        // particles.getComponent(cc.AudioSource).play();
                        if (_this.isVertical) {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x, _this.node.y - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress), _this.node.y)) //endpoint
                                .start();
                        }
                        cc.tween(particles).to(0.75, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                        cc.tween(particles).to(0.75, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                            particles.destroy();
                        }).start();
                    }, 0.5);
                }).start();
            }, 0.1 * (i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    var ProgressBar_1;
    ProgressBar.instance = null;
    __decorate([
        property(Boolean)
    ], ProgressBar.prototype, "isVertical", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ProgressBar.prototype, "starImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], ProgressBar.prototype, "trailsImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "trailSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "particleSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "starPopSound", void 0);
    ProgressBar = ProgressBar_1 = __decorate([
        ccclass
    ], ProgressBar);
    return ProgressBar;
}(cc.Component));
exports.default = ProgressBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc0JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBSTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBaUpDO1FBN0lXLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBYzVCLGlCQUFXLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQThIdkQsaUJBQWlCO0lBQ3JCLENBQUM7b0JBakpvQixXQUFXO0lBb0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDdEQsd0NBQXdDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxhQUFhO1FBQzVELElBQUksS0FBSyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0csSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksWUFBWSxHQUFHLFNBQVMsSUFBSSxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDakM7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0SDthQUNJLElBQUksWUFBWSxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksWUFBWSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtZQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDakM7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuSCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0SDthQUNJLElBQUksWUFBWSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtZQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDakM7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuSCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuSCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0SDtJQUNMLENBQUM7SUFFTyxxQ0FBZSxHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVztRQUM1QyxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsMENBQTBDO1FBQzFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQWM7UUFBNUMsaUJBZ0VDO1FBL0RHLElBQUksa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtnQ0FDUCxDQUFDO1lBQ04sSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRSxJQUFJLElBQUksR0FBRyxPQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ3RFLElBQUksSUFBSSxHQUFHLE9BQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDdEUsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFLLE9BQU8sQ0FBQztZQUM3RCxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBSyxjQUFjLENBQUM7WUFDbEUsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDdEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdkIsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFLLGVBQWUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixTQUFTLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDakMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFLLFNBQVMsQ0FBQztZQUM3RCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BELDJDQUEyQztZQUMzQyxPQUFLLFlBQVksQ0FBQztnQkFDZCxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkYsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO3FCQUMvRCxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNuSCxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFFLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzt3QkFDbkQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN4RSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNuRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNwRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNuRCxrRUFBa0U7d0JBQ2xFLHVEQUF1RDt3QkFDdkQsaURBQWlEO3dCQUVqRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCOzZCQUNJOzRCQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCO3dCQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDaEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNuRSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBM0R0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFO29CQUFsQyxDQUFDO1NBNERUO0lBQ0wsQ0FBQzs7SUEzSWMsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTVDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzttREFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNZO0lBaEJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUovQjtJQUFELGtCQUFDO0NBakpELEFBaUpDLENBakp3QyxFQUFFLENBQUMsU0FBUyxHQWlKcEQ7a0JBakpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHByaXZhdGUgdHJhaWxzSW1nOiBjYy5UZXh0dXJlMkQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdHJhaWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyUG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJzRWFybmVkOiBCb29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyLCBzdGFyTG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcGFydGljbGVzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVzXCIgKyAxKTtcclxuICAgICAgICBsZXQgbWF4TGV2ZWxzID0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzOy8vdG90YWxMZXZlbHNcclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgIT0gMCAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMF0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9jdXJyZW50UXVlcyA+PSBtYXhMZXZlbHMgLyAyICYmIF9jdXJyZW50UXVlcyA8IG1heExldmVscyAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXS5vcGFjaXR5ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJzRWFybmVkWzFdICYmIHN0YXJMb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNFYXJuZWRbMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzICYmIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMl0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzFdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gX251bWJlciA9IF9udW1iZXIgKiB0aGlzLnNoYXBlcy5sZW5ndGg7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgTm9kZVBPUyA9IF9ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucGFyZW50LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS54IC0gX29mZnNldCwgX25vZGUueCArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy50cmFpbHNJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgYW5nbGU6IDE4MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCkudG8oMC4yNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYWlsU291bmRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggLyAyICsgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoICogdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnggLSAxMDAsIHBhcnRpY2xlcy54ICsgMTAwKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnkgLSA1MDAsIHBhcnRpY2xlcy55ICsgMjAwKSksIC8vY3VydmUgcmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Jockeys/Scripts/Jockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a640pa0TNB9oUElOq2DHqb', 'Jockey');
// Framework/Jockeys/Scripts/Jockey.ts

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
var Jockey = /** @class */ (function (_super) {
    __extends(Jockey, _super);
    function Jockey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jockey_1 = Jockey;
    Object.defineProperty(Jockey, "Instance", {
        get: function () {
            return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    Jockey.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        Jockey_1.instance = this;
    };
    Jockey.prototype.start = function () {
    };
    Jockey.prototype.CallJockey = function (_animName, _loop, _isMultipleAnim, _secondAnimName, _isSecondLoop, _waitTime) {
        if (_loop === void 0) { _loop = false; }
        if (_isMultipleAnim === void 0) { _isMultipleAnim = false; }
        if (_secondAnimName === void 0) { _secondAnimName = null; }
        if (_isSecondLoop === void 0) { _isSecondLoop = false; }
        if (_waitTime === void 0) { _waitTime = 0; }
        this.node.getComponent(sp.Skeleton).setAnimation(0, _animName, _loop);
        if (_isMultipleAnim) {
            this.node.getComponent(sp.Skeleton).addAnimation(0, _secondAnimName, _isSecondLoop, 8);
        }
    };
    var Jockey_1;
    // LIFE-CYCLE CALLBACKS:
    Jockey.instance = null;
    Jockey = Jockey_1 = __decorate([
        ccclass
    ], Jockey);
    return Jockey;
}(cc.Component));
exports.default = Jockey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxKb2NrZXlzXFxTY3JpcHRzXFxKb2NrZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBMEJBLENBQUM7ZUExQm9CLE1BQU07SUFJdkIsc0JBQVcsa0JBQVE7YUFBbkI7WUFDSSxPQUFPLFFBQU0sQ0FBQyxRQUFRLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNJLHlDQUF5QztRQUN6QyxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBaUIsRUFBRSxLQUFzQixFQUFFLGVBQWdDLEVBQUUsZUFBOEIsRUFBRSxhQUE4QixFQUFFLFNBQWE7UUFBdkksc0JBQUEsRUFBQSxhQUFzQjtRQUFFLGdDQUFBLEVBQUEsdUJBQWdDO1FBQUUsZ0NBQUEsRUFBQSxzQkFBOEI7UUFBRSw4QkFBQSxFQUFBLHFCQUE4QjtRQUFFLDBCQUFBLEVBQUEsYUFBYTtRQUNqSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxlQUFlLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxRjtJQUNMLENBQUM7O0lBdEJELHdCQUF3QjtJQUNULGVBQVEsR0FBVyxJQUFJLENBQUM7SUFIdEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBCMUI7SUFBRCxhQUFDO0NBMUJELEFBMEJDLENBMUJtQyxFQUFFLENBQUMsU0FBUyxHQTBCL0M7a0JBMUJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvY2tleSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSm9ja2V5ID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpvY2tleS5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIEpvY2tleS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIENhbGxKb2NrZXkoX2FuaW1OYW1lOiBzdHJpbmcsIF9sb29wOiBib29sZWFuID0gZmFsc2UsIF9pc011bHRpcGxlQW5pbTogYm9vbGVhbiA9IGZhbHNlLCBfc2Vjb25kQW5pbU5hbWU6IHN0cmluZyA9IG51bGwsIF9pc1NlY29uZExvb3A6IGJvb2xlYW4gPSBmYWxzZSwgX3dhaXRUaW1lID0gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBfYW5pbU5hbWUsIF9sb29wKTtcclxuICAgICAgICBpZiAoX2lzTXVsdGlwbGVBbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmFkZEFuaW1hdGlvbigwLCBfc2Vjb25kQW5pbU5hbWUsIF9pc1NlY29uZExvb3AsIDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/CheckForInitWebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8ce2AftEZNxa47y59r3/Vg', 'CheckForInitWebView');
// Framework/WebView/Scripts/CheckForInitWebView.ts

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
var StartGame_1 = require("../../Scripts/StartGame");
var WebView_1 = require("./WebView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckForInitWebView = /** @class */ (function (_super) {
    __extends(CheckForInitWebView, _super);
    function CheckForInitWebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckForInitWebView.prototype.start = function () {
    };
    CheckForInitWebView.prototype.OnButtonClick = function () {
        //if its a free level
        //.... Write your code to open the level .....
        //if its a premium level then need to call the below conditions,
        WebView_1.default.Instance.CheckForWebView();
        if (StartGame_1.default.Instance.hasAccess) {
            // .... Write your code to open the level .....
            console.log("level opened");
        }
    };
    CheckForInitWebView = __decorate([
        ccclass
    ], CheckForInitWebView);
    return CheckForInitWebView;
}(cc.Component));
exports.default = CheckForInitWebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxXZWJWaWV3XFxTY3JpcHRzXFxDaGVja0ZvckluaXRXZWJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCxxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBc0JBLENBQUM7SUFwQkcsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0kscUJBQXFCO1FBQ3JCLDhDQUE4QztRQUc5QyxnRUFBZ0U7UUFDaEUsaUJBQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBakJnQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQXNCdkM7SUFBRCwwQkFBQztDQXRCRCxBQXNCQyxDQXRCZ0QsRUFBRSxDQUFDLFNBQVMsR0FzQjVEO2tCQXRCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IFdlYlZpZXcgZnJvbSBcIi4vV2ViVmlld1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRm9ySW5pdFdlYlZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vaWYgaXRzIGEgZnJlZSBsZXZlbFxyXG4gICAgICAgIC8vLi4uLiBXcml0ZSB5b3VyIGNvZGUgdG8gb3BlbiB0aGUgbGV2ZWwgLi4uLi5cclxuXHJcblxyXG4gICAgICAgIC8vaWYgaXRzIGEgcHJlbWl1bSBsZXZlbCB0aGVuIG5lZWQgdG8gY2FsbCB0aGUgYmVsb3cgY29uZGl0aW9ucyxcclxuICAgICAgICBXZWJWaWV3Lkluc3RhbmNlLkNoZWNrRm9yV2ViVmlldygpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzKSB7XHJcbiAgICAgICAgICAgIC8vIC4uLi4gV3JpdGUgeW91ciBjb2RlIHRvIG9wZW4gdGhlIGxldmVsIC4uLi4uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgb3BlbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd21cdcOFCVMG565duKHxBWs', 'StartGame');
// Framework/Scripts/StartGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 1;
        _this.NextSceneName = "1";
        _this.TotalLevels = 7;
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.isDemoGame = false;
        _this.introAudio1 = null;
        _this.introAudio2 = null;
        _this.mainBg = null;
        _this.titleImageName = "";
        _this.videoLink = "";
        _this.activateHint = false;
        _this.jockeyName = "";
        _this.questions = [];
        _this.questionTime = 0;
        return _this;
        // update (dt) {}
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
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(function (element) {
            if (element.name == "jockey") {
                _this.JockeyNode = element;
            }
        });
    };
    startGame.prototype.logData = function () {
        console.log("Total Levels:", this.TotalLevels);
        // console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        // Log question data
        this.questions.forEach(function (question, index) {
            console.log("Question " + (index + 1) + ":");
        });
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
            var levelCount = jsonData.AdditionalData.TotalLevel;
            this.TotalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.AdditionalData.TitleImageName;
            this.jockeyName = jsonData.AdditionalData.JockeyName;
            this.videoLink = jsonData.AdditionalData.VideoLink;
            var _introAudio1 = jsonData.AdditionalData.IntroAudio1Name;
            var _introAudio2 = jsonData.AdditionalData.IntroAudio2Name;
            // Assign question data to the variable
            this.questions = jsonData.QuestionData;
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(_introAudio1, function (err, audio) {
                if (err) {
                    console.error("Failed to load audio:", err);
                    return;
                }
                _this.introAudio1 = audio;
            });
            cc.loader.load(_introAudio2, function (err, audio) {
                if (err) {
                    console.error("Failed to load audio:", err);
                    return;
                }
                _this.introAudio2 = audio;
            });
            this.questions.forEach(function (question) {
                question.Options = question.Options.map(function (option) { return option; });
            });
            // Now you can use these variables within this script
            this.logData();
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                var levelCount = jsonData.AdditionalData.TotalLevel;
                _this.TotalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.AdditionalData.TitleImageName;
                _this.jockeyName = jsonData.AdditionalData.JockeyName;
                _this.videoLink = jsonData.AdditionalData.VideoLink;
                console.log("jockey name = ", _this.jockeyName);
                var _introAudio1 = _this.removeAudioExtension(jsonData.AdditionalData.IntroAudio1Name);
                var _introAudio2 = _this.removeAudioExtension(jsonData.AdditionalData.IntroAudio2Name);
                // Assign question data to the variable
                _this.questions = jsonData.QuestionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.AdditionalData.TitleImageName), function (spriteFrame) {
                    if (spriteFrame)
                        cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadAudioClip(_introAudio1, function (audio) {
                    if (audio)
                        _this.introAudio1 = audio;
                });
                _this.loadAudioClip(_introAudio2, function (audio) {
                    if (audio)
                        _this.introAudio2 = audio;
                });
                _this.questions.forEach(function (question) {
                    question.QuestionImageName = _this.removeExtension(question.QuestionImageName);
                    question.QuestionAudioName = _this.removeAudioExtension(question.QuestionAudioName);
                    question.ReiterationAudioName = _this.removeAudioExtension(question.ReiterationAudioName);
                    question.CorrectAudioName = _this.removeAudioExtension(question.CorrectAudioName);
                    question.WrongAudioName = _this.removeAudioExtension(question.WrongAudioName);
                    // // If options are image names, you might want to remove extensions as well
                    question.Options = question.Options.map(function (option) { return _this.removeExtension(option); });
                });
                // Now you can use these variables within this script
                _this.logData(); // You can call a function to log the data or use it in other functions
            });
        }
        // if (this.jockeyName == "podar" || this.jockeyName == "stallion") {
        //     this.playNode.active = false;
        //     this.videoNode.active = true;
        // }
    };
    startGame.prototype.start = function () {
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
        var ageValue = parseInt(age);
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
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy && this.BGM_audio != null) {
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
        property(cc.String)
    ], startGame.prototype, "NextSceneName", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "TotalLevels", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBd1ZDO1FBclZHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsOEJBQThCO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFJVixjQUFRLEdBQVksS0FBSyxDQUFDO1FBR2xDLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUNqQyxpQkFBVyxHQUFpQixJQUFJ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RSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ3BFLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUEvU2Msa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFuQzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZDQUNFO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ087SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lEQUN3QjtJQVN6QztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUEzQlIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdWN0I7SUFBRCxnQkFBQztDQXhWRCxBQXdWQyxDQXhWc0MsRUFBRSxDQUFDLFNBQVMsR0F3VmxEO2tCQXhWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgICBHYW1lSUQ6IHN0cmluZztcclxuICAgIFZpZGVvTGluazogc3RyaW5nO1xyXG4gICAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICAgIEludHJvQXVkaW8xTmFtZTogc3RyaW5nO1xyXG4gICAgSW50cm9BdWRpbzJOYW1lOiBzdHJpbmc7XHJcbiAgICBKb2NrZXlOYW1lOiBzdHJpbmc7XHJcbiAgICBUb3RhbExldmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG4gICAgUXVlc3Rpb25BcHBlYXJUaW1lOiBzdHJpbmc7XHJcbiAgICBJc1F1ZXN0aW9uVGV4dDogYm9vbGVhbjtcclxuICAgIFF1ZXN0aW9uVGV4dDogc3RyaW5nO1xyXG4gICAgUXVlc3Rpb25JbWFnZU5hbWU6IHN0cmluZztcclxuICAgIFF1ZXN0aW9uQXVkaW9OYW1lOiBzdHJpbmc7XHJcbiAgICBQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcclxuICAgIElzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuICAgIE51bWJlck9mT3B0aW9uczogbnVtYmVyO1xyXG4gICAgT3B0aW9uczogc3RyaW5nW107IC8vIENvbnRhaW5zIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBJc09wdGlvblRleHQgZmxhZ1xyXG4gICAgUmVpdGVyYXRpb25BdWRpb05hbWU6IHN0cmluZztcclxuICAgIENvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxuICAgIFdyb25nQXVkaW9OYW1lOiBzdHJpbmc7XHJcbiAgICBDb3JyZWN0QW5zd2VyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNeUpTT05EYXRhIHtcclxuICAgIEFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuICAgIFF1ZXN0aW9uRGF0YTogUXVlc3Rpb25EYXRhW107XHJcbn1cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBOZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBUb3RhbExldmVsczogbnVtYmVyID0gNztcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcbiAgICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGxldmVsVHlwZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgICBjdXJyZW50TGV2ZWw6IHN0cmluZyA9IFwiMVwiO1xyXG4gICAgaGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBoYXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1vYmlsZU51bWJlcjogc3RyaW5nID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNQcmVtaXVtR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByZW1pdW1MZXZlbDogbnVtYmVyID0gMztcclxuICAgIC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICB0aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbnRyb0F1ZGlvMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIGludHJvQXVkaW8yOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcbiAgICBtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRpdGxlSW1hZ2VOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHZpZGVvTGluazogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uRGF0YVtdID0gW107XHJcbiAgICBxdWVzdGlvblRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nRGF0YSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRvdGFsIExldmVsczpcIiwgdGhpcy5Ub3RhbExldmVscyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCR00gYXVkaW8gbmFtZTpcIiwgdGhpcy5CR01fYXVkaW8ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaXRsZSBJbWFnZSBOYW1lOlwiLCB0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkpvY2tleSBOYW1lOlwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuICAgICAgICAvLyBMb2cgcXVlc3Rpb24gZGF0YVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb24gJHtpbmRleCArIDF9OmApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgICAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgJycpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSlNPTmRhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoJ2pzb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRKc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRKc29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZWRKc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5BZGRpdGlvbmFsRGF0YS5Ub3RhbExldmVsO1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5BZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuQWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0xpbmsgPSBqc29uRGF0YS5BZGRpdGlvbmFsRGF0YS5WaWRlb0xpbms7XHJcblxyXG4gICAgICAgICAgICBsZXQgX2ludHJvQXVkaW8xID0ganNvbkRhdGEuQWRkaXRpb25hbERhdGEuSW50cm9BdWRpbzFOYW1lO1xyXG4gICAgICAgICAgICBsZXQgX2ludHJvQXVkaW8yID0ganNvbkRhdGEuQWRkaXRpb25hbERhdGEuSW50cm9BdWRpbzJOYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEuUXVlc3Rpb25EYXRhO1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5XCIpLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChfaW50cm9BdWRpbzEsIChlcnIsIGF1ZGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW50cm9BdWRpbzEgPSBhdWRpbztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKF9pbnRyb0F1ZGlvMiwgKGVyciwgYXVkaW8pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb0F1ZGlvMiA9IGF1ZGlvO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24uT3B0aW9ucyA9IHF1ZXN0aW9uLk9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgICAgICAgdGhpcy5sb2dEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZV9kYXRhJywgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuQWRkaXRpb25hbERhdGEuVG90YWxMZXZlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5BZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLkFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTGluayA9IGpzb25EYXRhLkFkZGl0aW9uYWxEYXRhLlZpZGVvTGluaztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX2ludHJvQXVkaW8xID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5BZGRpdGlvbmFsRGF0YS5JbnRyb0F1ZGlvMU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9pbnRyb0F1ZGlvMiA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oanNvbkRhdGEuQWRkaXRpb25hbERhdGEuSW50cm9BdWRpbzJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEuUXVlc3Rpb25EYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuQWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5XCIpLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKF9pbnRyb0F1ZGlvMSwgKGF1ZGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1ZGlvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludHJvQXVkaW8xID0gYXVkaW87XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChfaW50cm9BdWRpbzIsIChhdWRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdWRpbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRyb0F1ZGlvMiA9IGF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5RdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLlF1ZXN0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5RdWVzdGlvbkF1ZGlvTmFtZSA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24uUXVlc3Rpb25BdWRpb05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLlJlaXRlcmF0aW9uQXVkaW9OYW1lID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihxdWVzdGlvbi5SZWl0ZXJhdGlvbkF1ZGlvTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uQ29ycmVjdEF1ZGlvTmFtZSA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24uQ29ycmVjdEF1ZGlvTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uV3JvbmdBdWRpb05hbWUgPSB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKHF1ZXN0aW9uLldyb25nQXVkaW9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBJZiBvcHRpb25zIGFyZSBpbWFnZSBuYW1lcywgeW91IG1pZ2h0IHdhbnQgdG8gcmVtb3ZlIGV4dGVuc2lvbnMgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLk9wdGlvbnMgPSBxdWVzdGlvbi5PcHRpb25zLm1hcChvcHRpb24gPT4gdGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0RhdGEoKTsgLy8gWW91IGNhbiBjYWxsIGEgZnVuY3Rpb24gdG8gbG9nIHRoZSBkYXRhIG9yIHVzZSBpdCBpbiBvdGhlciBmdW5jdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInBvZGFyXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZpZGVvTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XHJcbiAgICAgICAgdmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICAgICAgdmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XHJcbiAgICAgICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgICAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAocHJlbWl1bSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbWl1bUxldmVsID0gcGFyc2VJbnQocHJlbWl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXZlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vYmlsZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmhhc01vYmlsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc01vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNQcmVtaXVtR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICAgIGlmIChpc0F1ZGlvID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xyXG4gICAgICAgICAgICBpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbNF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICAvLyB9LCAyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5PblRpbWVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uTXVzaWMoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSAmJiB0aGlzLkJHTV9hdWRpbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Functionalities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37a18WDawNEQ6/8nTbtHCDd', 'Functionalities');
// Framework/Scripts/Functionalities.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Functionalities = /** @class */ (function (_super) {
    __extends(Functionalities, _super);
    function Functionalities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioTimeOut = false;
        return _this;
    }
    Functionalities.prototype.StartAudioTimeOut = function (_audio, _time) {
        var _this = this;
        if (_audio === void 0) { _audio = null; }
        if (_time === void 0) { _time = 5; }
        this.isAudioTimeOut = true;
        cc.audioEngine.playEffect(_audio, false);
        this.scheduleOnce(function () {
            _this.RepeatAudio(_audio, _time);
        }, _time);
    };
    Functionalities.prototype.RepeatAudio = function (_audio, _time) {
        var _this = this;
        if (_time === void 0) { _time = 5; }
        if (this.isAudioTimeOut) {
            cc.audioEngine.playEffect(_audio, false);
            this.scheduleOnce(function () {
                if (_this.isAudioTimeOut) {
                    _this.RepeatAudio(_audio, _time);
                    cc.audioEngine.playEffect(_audio, false);
                }
            }, _time);
        }
    };
    Functionalities.prototype.StopAudioTimeOut = function () {
        this.isAudioTimeOut = false;
    };
    Functionalities.prototype.update = function (dt) {
    };
    Functionalities = __decorate([
        ccclass
    ], Functionalities);
    return Functionalities;
}(cc.Component));
exports.default = Functionalities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxGdW5jdGlvbmFsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE4QkM7UUE1Qlcsb0JBQWMsR0FBWSxLQUFLLENBQUM7O0lBNEI1QyxDQUFDO0lBMUJHLDJDQUFpQixHQUFqQixVQUFrQixNQUEyQixFQUFFLEtBQWlCO1FBQWhFLGlCQU1DO1FBTmlCLHVCQUFBLEVBQUEsYUFBMkI7UUFBRSxzQkFBQSxFQUFBLFNBQWlCO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNPLHFDQUFXLEdBQW5CLFVBQW9CLE1BQW9CLEVBQUUsS0FBaUI7UUFBM0QsaUJBVUM7UUFWeUMsc0JBQUEsRUFBQSxTQUFpQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUdELDBDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUE3QmdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4Qm5DO0lBQUQsc0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjRDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ4RDtrQkE5Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25hbGl0aWVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGlzQXVkaW9UaW1lT3V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgU3RhcnRBdWRpb1RpbWVPdXQoX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsLCBfdGltZTogbnVtYmVyID0gNSkge1xyXG4gICAgICAgIHRoaXMuaXNBdWRpb1RpbWVPdXQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlJlcGVhdEF1ZGlvKF9hdWRpbywgX3RpbWUpO1xyXG4gICAgICAgIH0sIF90aW1lKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgUmVwZWF0QXVkaW8oX2F1ZGlvOiBjYy5BdWRpb0NsaXAsIF90aW1lOiBudW1iZXIgPSA1KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcGVhdEF1ZGlvKF9hdWRpbywgX3RpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIF90aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFN0b3BBdWRpb1RpbWVPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0F1ZGlvVGltZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/PlayVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e226RQIFZPJ4naQvPXF+Fd', 'PlayVideo');
// Games/Scripts/PlayVideo.ts

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
var StartGame_1 = require("../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayerNode = null;
        _this.videoPlayerTools = null;
        _this.curtain = null;
        _this.helloAudio = null;
        _this.voAudio = null;
        _this.btnClick = null;
        _this.jockeyName = null;
        _this.anim1Name = "hello Everyone";
        _this.anim2Name = "talk action loop";
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        // this.playAnimation();
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.node.getChildByName("tlc").active = true;
            }
        }, 0.5);
    };
    NewClass.prototype.playAnimation = function () {
        var _this = this;
        cc.tween(this.node.children[0]).to(0.5, { x: 0 }, { easing: "backInOut" }).start();
        var jockeyNode = this.node.children[0].getChildByName(this.jockeyName);
        jockeyNode.active = true;
        this.scheduleOnce(function () {
            jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim1Name, false);
            cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio1, false);
            _this.scheduleOnce(function () {
                jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim2Name, true);
                cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio2, false);
                _this.scheduleOnce(function () {
                    jockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    cc.tween(_this.node.children[0]).to(0.5, { opacity: 0 }, { easing: "sineInOut" }).start();
                    _this.scheduleOnce(function () {
                        _this.curtain.getComponent(cc.Animation).play();
                        _this.videoPlayerNode.active = true;
                        _this.videoPlayerTools.active = true;
                        _this.node.active = false;
                    }, 0.5);
                }, StartGame_1.default.Instance.introAudio2.duration);
            }, StartGame_1.default.Instance.introAudio1.duration + 0.5);
            // this.scheduleOnce(() => {
            //     this.node.children[1].active = false;
            //     this.node.children[2].active = true;
            //     cc.audioEngine.playEffect(this.voAudio, false);
            //     this.scheduleOnce(() => {
            //         this.Play();
            //     }, this.voAudio.duration + 0.5);
            // }, this.helloAudio.duration + 0.2);
        }, 0.5);
    };
    // Play(_event: cc.Event) {
    //     this.curtain.getComponent(cc.Animation).play();
    //     _event.target.getComponent(cc.Button).interactable = false;
    //     this.node.active = false;
    //     this.videoPlayerNode.active = true;
    //     this.videoPlayerTools.active = true;
    // }
    NewClass.prototype.Play = function () {
        var _this = this;
        this.videoPlayerNode.getComponent(cc.VideoPlayer).remoteURL = StartGame_1.default.Instance.videoLink;
        this.jockeyName = StartGame_1.default.Instance.jockeyName;
        if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("tlc").active = false;
        }
        cc.audioEngine.playEffect(this.btnClick, false);
        this.node.getChildByName("play").getComponent(cc.Button).interactable = false;
        cc.tween(this.node.getChildByName("title")).to(1, { y: 800 }, { easing: "backInOut" }).start();
        cc.tween(this.node.getChildByName("play")).to(1, { y: -800 }, { easing: "backInOut" }).start();
        if (StartGame_1.default.Instance.introAudio1 && StartGame_1.default.Instance.introAudio2) {
            this.scheduleOnce(function () {
                _this.playAnimation();
            }, 0.5);
        }
        else {
            this.scheduleOnce(function () {
                _this.curtain.getComponent(cc.Animation).play();
                _this.videoPlayerNode.active = true;
                _this.videoPlayerTools.active = true;
                _this.node.active = false;
            }, 0.5);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "videoPlayerNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "videoPlayerTools", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "curtain", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "helloAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "voAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "btnClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXFBsYXlWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxR0M7UUFsR0cscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBVyxnQkFBZ0IsQ0FBQztRQUNyQyxlQUFTLEdBQVcsa0JBQWtCLENBQUM7O1FBa0Z2QyxpQkFBaUI7SUFDckIsQ0FBQztJQS9FRyx5QkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJ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QztZQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUc1QjtJQUFELGVBQUM7Q0FyR0QsQUFxR0MsQ0FyR3FDLEVBQUUsQ0FBQyxTQUFTLEdBcUdqRDtrQkFyR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9QbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9QbGF5ZXJUb29sczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1cnRhaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhlbGxvQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgdm9BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBidG5DbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGpvY2tleU5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgYW5pbTFOYW1lOiBzdHJpbmcgPSBcImhlbGxvIEV2ZXJ5b25lXCI7XHJcbiAgICBhbmltMk5hbWU6IHN0cmluZyA9IFwidGFsayBhY3Rpb24gbG9vcFwiO1xyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICBsZXQgam9ja2V5Tm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleU5hbWUpO1xyXG4gICAgICAgIGpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltMU5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9BdWRpbzEsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgam9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW0yTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXJUb29scy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMi5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMS5kdXJhdGlvbiArIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnZvQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLlBsYXkoKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIHRoaXMudm9BdWRpby5kdXJhdGlvbiArIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIH0sIHRoaXMuaGVsbG9BdWRpby5kdXJhdGlvbiArIDAuMik7XHJcblxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcbiAgICAvLyBQbGF5KF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIC8vICAgICB0aGlzLmN1cnRhaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMudmlkZW9QbGF5ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB0aGlzLnZpZGVvUGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLnJlbW90ZVVSTCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS52aWRlb0xpbms7XHJcbiAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWU7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYnRuQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKS50bygxLCB7IHk6IDgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXlcIikpLnRvKDEsIHsgeTogLTgwMCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQXVkaW8xICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0F1ZGlvMikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VydGFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvb2xzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Progress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8e47+WhWdOJayfFf191hb3', 'Progress');
// Framework/Scripts/Progress.ts

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
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.isVertical = false;
        _this.totalQuestions = 5;
        _this.progressFill = null;
        return _this;
        // update (dt) {}
    }
    Progress_1 = Progress;
    Object.defineProperty(Progress, "Instance", {
        get: function () {
            return Progress_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    Progress.prototype.onLoad = function () {
        Progress_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    Progress.prototype.IncreaseProgress = function (_questionNumber, _easingType) {
        if (_easingType === void 0) { _easingType = "linear"; }
        var value = _questionNumber / this.totalQuestions;
        cc.tween(this.progressFill).to(0.15, { progress: value }, { easing: _easingType }).start();
        if (_questionNumber == 1) {
            this.node.getComponent(cc.Animation).play("1");
        }
        else if ((this.totalQuestions % 2 == 0 && _questionNumber == this.totalQuestions / 2) || (this.totalQuestions % 2 != 0 && _questionNumber == (this.totalQuestions / 2) + 0.5)) {
            this.node.getComponent(cc.Animation).play("2");
        }
        else if (this.totalQuestions == _questionNumber) {
            this.node.getComponent(cc.Animation).play("3");
        }
    };
    Progress.prototype.start = function () {
    };
    var Progress_1;
    Progress.instance = null;
    __decorate([
        property(Boolean)
    ], Progress.prototype, "isVertical", void 0);
    __decorate([
        property(Number)
    ], Progress.prototype, "totalQuestions", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Progress.prototype, "progressFill", void 0);
    Progress = Progress_1 = __decorate([
        ccclass
    ], Progress);
    return Progress;
}(cc.Component));
exports.default = Progress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxQcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdDQztRQXRDRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFbkIsa0JBQVksR0FBbUIsSUFBSSxDQUFDOztRQStCNUMsaUJBQWlCO0lBQ3JCLENBQUM7aUJBeENvQixRQUFRO0lBWXpCLHNCQUFXLG9CQUFRO2FBQW5CO1lBQ0ksT0FBTyxVQUFRLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsZUFBdUIsRUFBRSxXQUE4QjtRQUE5Qiw0QkFBQSxFQUFBLHNCQUE4QjtRQUNwRSxJQUFJLEtBQUssR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0YsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDM0ssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDthQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQzs7SUE1QmMsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFMekM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvREFDVTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNtQjtJQVIzQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0M1QjtJQUFELGVBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBd0NqRDtrQkF4Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcml2YXRlIHByb2dyZXNzRmlsbDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2dyZXNzID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3MuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFByb2dyZXNzLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIEluY3JlYXNlUHJvZ3Jlc3MoX3F1ZXN0aW9uTnVtYmVyOiBudW1iZXIsIF9lYXNpbmdUeXBlOiBzdHJpbmcgPSBcImxpbmVhclwiKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3F1ZXN0aW9uTnVtYmVyIC8gdGhpcy50b3RhbFF1ZXN0aW9ucztcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnByb2dyZXNzRmlsbCkudG8oMC4xNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IF9lYXNpbmdUeXBlIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmIChfcXVlc3Rpb25OdW1iZXIgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnRvdGFsUXVlc3Rpb25zICUgMiA9PSAwICYmIF9xdWVzdGlvbk51bWJlciA9PSB0aGlzLnRvdGFsUXVlc3Rpb25zIC8gMikgfHwgKHRoaXMudG90YWxRdWVzdGlvbnMgJSAyICE9IDAgJiYgX3F1ZXN0aW9uTnVtYmVyID09ICh0aGlzLnRvdGFsUXVlc3Rpb25zIC8gMikgKyAwLjUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiMlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50b3RhbFF1ZXN0aW9ucyA9PSBfcXVlc3Rpb25OdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCIzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '882009Bux9MSqlp0QNotB13', 'Utils');
// Framework/Scripts/Utils.ts

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
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Utils, "screenWidth", {
        get: function () {
            if (this._screenWidth == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils, "screenHeight", {
        /**
         * Screen height
         */
        get: function () {
            if (this._screenHeight == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenHeight;
        },
        enumerable: false,
        configurable: true
    });
    Utils._screenWidth = undefined;
    Utils._screenHeight = undefined;
    Utils = __decorate([
        ccclass
    ], Utils);
    return Utils;
}(cc.Component));
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQzs7SUFxQ0EsQ0FBQztJQW5DRyxzQkFBVyxvQkFBVzthQUF0QjtZQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXpDLElBQUksU0FBUyxHQUFXLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztzQkFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7c0JBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHFCQUFZO1FBSHZCOztXQUVHO2FBQ0g7WUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxFQUFFO2dCQUNqQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLFNBQVMsR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7c0JBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQVcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO3NCQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN2RyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDcEM7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFYyxrQkFBWSxHQUFXLFNBQVMsQ0FBQztJQUNqQyxtQkFBYSxHQUFXLFNBQVMsQ0FBQztJQWxDaEMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXFDekI7SUFBRCxZQUFDO0NBckNELEFBcUNDLENBckNrQyxFQUFFLENBQUMsU0FBUyxHQXFDOUM7a0JBckNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IHNjcmVlbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjcmVlbldpZHRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgX2NhbnZhczogY2MuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgX3JpZ2h0RW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueCAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbldpZHRoID0gX3JpZ2h0RW5kICogMjtcclxuICAgICAgICAgICAgbGV0IF90b3BFbmQ6IG51bWJlciA9IF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuSGVpZ2h0ID0gX3RvcEVuZCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcmVlbiBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBzY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fc2NyZWVuSGVpZ2h0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgX2NhbnZhczogY2MuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgX3JpZ2h0RW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueCAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbldpZHRoID0gX3JpZ2h0RW5kICogMjtcclxuICAgICAgICAgICAgbGV0IF90b3BFbmQ6IG51bWJlciA9IF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuSGVpZ2h0ID0gX3RvcEVuZCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NjcmVlbldpZHRoOiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/StartGame0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86ce8/R5uZKp6N43HE2XR9U', 'StartGame0');
// Games/Scripts/StartGame0.ts

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
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentScore = 0;
        _this.currentHealth = 10;
        _this.isLoaded = false;
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
        //console.log("loading--100");
        //console.log("loaderComplete--true");
    };
    startGame.prototype.start = function () {
        console.log("logEvent--showedScreen--Title");
        //this.node.getComponent(cc.AudioSource).play();
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var level = url.searchParams.get("level");
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, 0.1);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id_1, 0.1);
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
            cc.audioEngine.setVolume(id, 0.1);
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
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXFN0YXJ0R2FtZTAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBeUhDO1FBdEhHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUluQixjQUFRLEdBQVksS0FBSyxDQUFDOztRQTJHbEMsZ0JBQWdCO0lBQ3BCLENBQUM7a0JBekhvQixTQUFTO0lBZTFCLHNCQUFXLHFCQUFRO2FBQW5CO1lBQ0ksT0FBTyxXQUFTLENBQUMsUUFBUSxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDdEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLDJDQUEyQztRQUMzQyxXQUFTLENB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aUJBQWlCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDckM7YUFDSTtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQTNHYyxrQkFBUSxHQUFjLElBQUksQ0FBQztJQVIxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBSGQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlIN0I7SUFBRCxnQkFBQztDQXpIRCxBQXlIQyxDQXpIc0MsRUFBRSxDQUFDLFNBQVMsR0F5SGxEO2tCQXpIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgaXNNdXNpY09uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG5cclxuICAgIGN1cnJlbnRTY29yZTogbnVtYmVyID0gMDtcclxuICAgIGN1cnJlbnRIZWFsdGg6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBzdGFydEdhbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9lcnJvci5tZXNzYWdlIHx8IF9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAvL2NjLmdhbWUucmVtb3ZlUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tc2hvd2VkU2NyZWVuLS1UaXRsZVwiKVxyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XHJcbiAgICAgICAgdmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcclxuICAgICAgICB2YXIgYWdlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhZ2VcIik7XHJcbiAgICAgICAgdmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgMC4xKTtcclxuICAgICAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIDAuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xyXG4gICAgICAgIGlmIChhZ2VWYWx1ZSA+PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFnZVZhbHVlID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWdlVmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLkludHJvX2F1ZGlvO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuSW50cm9fYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5cclxuXHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSW50cm8yXCIpO1xyXG5cclxuICAgICAgICBpZihwYXJzZUludChsZXZlbCkpe1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gcGFyc2VJbnQobGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbk11c2ljKGV2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgMC4xKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1734yGyoRLAJc6pq/Ly4ow', 'endScreen');
// Games/Scripts/endScreen.ts

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
        _this.wheelIntroAudio = null;
        _this.wheelSpinAudio = null;
        _this.wheelRetryAudio = null;
        _this.wheelWinAudio = null;
        _this.starsAudio = null;
        _this.changeAudio = null;
        _this.starImg = null;
        _this.scoreLabelNode = null;
        // LIFE-CYCLE CALLBACKS:
        _this.filling1 = 0;
        _this.filling2 = 0;
        _this.filling3 = 0;
        _this.showNum1 = 0;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.currentTween = 0;
        _this.playerScore = 0;
        _this.totalLevels = 7;
        _this.spinStateAnim = ["wheel_result_1_x5", "wheel_result_2_x20", "wheel_result_3_x8", "wheel_result_4_x10", "wheel_result_5_x15", "wheel_result_6_again"];
        _this.spinStateMultiplier = ["5", "20", "8", "10", "15", "again"];
        _this.rngAnimIndex = 0;
        return _this;
    }
    NewClass.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };
    // onLoad () {}
    NewClass.prototype.start = function () {
        //console.log("globalVariables.Instance.answerArray : ", globalVariables.Instance.answerArray)
        // this.setEndProgressBar();
        // this.animationPlaybackSequence();
    };
    NewClass.prototype.animationPlaybackSequence = function () {
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        audioSource.clip = this.wheelIntroAudio;
        audioSource.play();
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_intro", false);
        this.scheduleOnce(function () {
            spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
            playButtonNode.children[0].getComponent(cc.Button).interactable = true;
        }, 0.75);
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.onPlayButtonClicked = function () {
        var _this = this;
        console.log("buttonClicked");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.rngAnimIndex = this.getRandomInt(0, this.spinStateAnim.length);
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_tapped", false);
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _this.spinWheelRotate(_this.rngAnimIndex);
        }, 0.25);
    };
    NewClass.prototype.spinWheelRotate = function (animNum) {
        var _this = this;
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, this.spinStateAnim[animNum], false);
        audioSource.clip = this.wheelSpinAudio;
        audioSource.loop = true;
        audioSource.play();
        this.scheduleOnce(function () {
            if (_this.rngAnimIndex == _this.spinStateAnim.length - 1) { //retry
                playButtonNode.children[0].getComponent(cc.Button).interactable = true;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_demanding_atention", true);
                audioSource.clip = _this.wheelRetryAudio;
                audioSource.play();
            }
            else {
                audioSource.loop = false;
                spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_win_" + (_this.rngAnimIndex + 1), false);
                playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_ending", false);
                audioSource.clip = _this.wheelWinAudio;
                _this.node.getChildByName("character").getComponent(cc.Animation).play("puzzleJump");
                audioSource.play();
                _this.scheduleOnce(function () {
                    _this.showStarsMultiplier(_this.playerScore);
                }, 3);
            }
        }, 3.25);
    };
    NewClass.prototype.setEndProgressBar = function () {
        var progressBar = this.node.getChildByName("Popup").getChildByName("progressBar");
        // console.log("answerValues : ", globalVariables.Instance.answerArray)
        for (var i = 0; i < this.totalLevels; i++) {
            if (globalVariables_1.default.Instance.answerArray[i] == true) {
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
                this.playerScore++;
                // console.log(`SCORE: `+this.playerScore);
            }
            else {
                progressBar.children[i].getChildByName("rightQ").active = false;
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = true;
            }
        }
    };
    NewClass.prototype.showStarsMultiplier = function (num) {
        var _this = this;
        this.scoreLabelNode.scale = 0;
        this.scoreLabelNode.getComponent(cc.Label).string = "x" + this.spinStateMultiplier[this.rngAnimIndex];
        this.node.getChildByName("Popup").active = false;
        cc.tween(this.scoreLabelNode).to(1, { scale: 1 }, { easing: "backOut" }).call(function () {
            _this.scheduleOnce(function () {
                _this.scoreLabelNode.getComponent(cc.Label).string = num + " x " + _this.spinStateMultiplier[_this.rngAnimIndex];
                _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                _this.node.getComponent(cc.AudioSource).play();
                cc.tween(_this.scoreLabelNode).to(1, { scale: 2 }, { easing: "backIn" }).call(function () {
                    _this.scoreLabelNode.getComponent(cc.Label).string = (num * parseInt(_this.spinStateMultiplier[_this.rngAnimIndex])).toString();
                    _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
                    _this.node.getComponent(cc.AudioSource).play();
                    cc.tween(_this.scoreLabelNode).to(0.5, { scale: 0 }, { easing: "backIn" }).start();
                }).start();
            }, 0.1);
        }).start();
        var max = parseInt(this.spinStateMultiplier[this.rngAnimIndex]);
        var _loop_1 = function (i) {
            // console.log(i);
            var starNodes = new cc.Node("stars" + (i + 1));
            starNodes.parent = this_1.node;
            starNodes.x = 0;
            starNodes.y = 0;
            starNodes.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            starNodes.addComponent(cc.AudioSource).clip = this_1.starsAudio;
            starNodes.getComponent(cc.AudioSource).volume = 0.5;
            var posX = this_1.getRandomInt(-320, 320);
            var posY = this_1.getRandomInt(-220, 220);
            // if(posY > 100){
            //     posX = this.getRandomInt(-160, 160);
            // }
            // if(posY < -100){
            //     posX = this.getRandomInt(-160, 160);
            // }
            // if(i < Math.floor(max/2)){
            //     posX *= -1;
            // }
            starNodes.scale = 0;
            this_1.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.tween(starNodes).to(1, { scale: 1, x: posX, y: posY }, { easing: "backOut" }).call(function () {
                        cc.tween(starNodes).to(1, { scale: 0.5, x: posX / 1.5, y: posY / 1.5 }, { easing: "backIn" }).call(function () {
                            // cc.tween(starNodes).to(2,{x:posX/1.5, y:posY/1.5},{easing:`backOut`}).start();
                        }).start();
                    }).start();
                    // cc.tween(starNodes).to(this.getRandomInt(30,50),{angle: 360*5}).start();
                    starNodes.getComponent(cc.AudioSource).play();
                    if (i == max - 1) {
                        console.log("gameEnded--true");
                    }
                }, (i + 1) / 50);
            }, 2.5);
        };
        var this_1 = this;
        for (var i = 0; i < max; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelIntroAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelSpinAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelRetryAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wheelWinAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "starsAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "changeAudio", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "starImg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scoreLabelNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGVuZFNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFDMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnTkM7UUE1TVcscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBR3JDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBR25DLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFdkMsd0JBQXdCO1FBQ2hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG1CQUFhLEdBQWEsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQy9KLHlCQUFt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RCxlQUFDO0NBaE5ELEFBZ05DLENBaE5xQyxFQUFFLENBQUMsU0FBUyxHQWdOakQ7a0JBaE5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHdoZWVsSW50cm9BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB3aGVlbFNwaW5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB3aGVlbFJldHJ5QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgd2hlZWxXaW5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyc0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGNoYW5nZUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgc3RhckltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIGZpbGxpbmcxOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmaWxsaW5nMjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmlsbGluZzM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNob3dOdW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0yOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VHdlZW46IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBsYXllclNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcbiAgICBwcml2YXRlIHNwaW5TdGF0ZUFuaW06IHN0cmluZ1tdID0gW2B3aGVlbF9yZXN1bHRfMV94NWAsIGB3aGVlbF9yZXN1bHRfMl94MjBgLCBgd2hlZWxfcmVzdWx0XzNfeDhgLCBgd2hlZWxfcmVzdWx0XzRfeDEwYCwgYHdoZWVsX3Jlc3VsdF81X3gxNWAsIGB3aGVlbF9yZXN1bHRfNl9hZ2FpbmBdO1xyXG4gICAgcHJpdmF0ZSBzcGluU3RhdGVNdWx0aXBsaWVyOiBzdHJpbmdbXSA9IFtgNWAsIGAyMGAsIGA4YCwgYDEwYCwgYDE1YCwgYGFnYWluYF07XHJcbiAgICBwcml2YXRlIHJuZ0FuaW1JbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxuICAgIH1cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkgOiBcIiwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmFuc3dlckFycmF5KVxyXG4gICAgICAgIC8vIHRoaXMuc2V0RW5kUHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltYXRpb25QbGF5YmFja1NlcXVlbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uUGxheWJhY2tTZXF1ZW5jZSgpIHtcclxuICAgICAgICBsZXQgc3BpbldoZWVsTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVXaGVlbGApO1xyXG4gICAgICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XHJcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMud2hlZWxJbnRyb0F1ZGlvO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICBwbGF5QnV0dG9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV9pbnRyb2AsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5XaGVlbE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHdoZWVsX2xvb3BgLCB0cnVlKTtcclxuICAgICAgICAgICAgcGxheUJ1dHRvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjc1KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYnV0dG9uQ2xpY2tlZGApO1xyXG4gICAgICAgIGxldCBwbGF5QnV0dG9uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShgc3BpbmVQbGF5QnV0dG9uYCk7XHJcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcblxyXG4gICAgICAgIHRoaXMucm5nQW5pbUluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgdGhpcy5zcGluU3RhdGVBbmltLmxlbmd0aCk7XHJcbiAgICAgICAgcGxheUJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHBsYXlfdGFwcGVkYCwgZmFsc2UpO1xyXG4gICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGluV2hlZWxSb3RhdGUodGhpcy5ybmdBbmltSW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgfSwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BpbldoZWVsUm90YXRlKGFuaW1OdW06IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzcGluV2hlZWxOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVdoZWVsYCk7XHJcbiAgICAgICAgbGV0IHBsYXlCdXR0b25Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGBzcGluZVBsYXlCdXR0b25gKTtcclxuICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICBzcGluV2hlZWxOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHRoaXMuc3BpblN0YXRlQW5pbVthbmltTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsU3BpbkF1ZGlvO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJuZ0FuaW1JbmRleCA9PSB0aGlzLnNwaW5TdGF0ZUFuaW0ubGVuZ3RoIC0gMSkgey8vcmV0cnlcclxuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzcGluV2hlZWxOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGB3aGVlbF9sb29wYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5QnV0dG9uTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBgcGxheV9kZW1hbmRpbmdfYXRlbnRpb25gLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsUmV0cnlBdWRpbztcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYHdoZWVsX3dpbl9gICsgKHRoaXMucm5nQW5pbUluZGV4ICsgMSksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHBsYXlCdXR0b25Ob2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGBwbGF5X2VuZGluZ2AsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSB0aGlzLndoZWVsV2luQXVkaW87XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYGNoYXJhY3RlcmApLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYHB1enpsZUp1bXBgKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyc011bHRpcGxpZXIodGhpcy5wbGF5ZXJTY29yZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0sIDMuMjUpO1xyXG4gICAgfVxyXG4gICAgc2V0RW5kUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUG9wdXBcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlclZhbHVlcyA6IFwiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuYW5zd2VyQXJyYXkpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTGV2ZWxzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5hbnN3ZXJBcnJheVtpXSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInVuYXR0ZW1wdGVkUVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicmlnaHRRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgU0NPUkU6IGArdGhpcy5wbGF5ZXJTY29yZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidW5hdHRlbXB0ZWRRXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0UVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwid3JvbmdRXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dTdGFyc011bHRpcGxpZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYHhgICsgdGhpcy5zcGluU3RhdGVNdWx0aXBsaWVyW3RoaXMucm5nQW5pbUluZGV4XTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYFBvcHVwYCkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY29yZUxhYmVsTm9kZSkudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbnVtICsgYCB4IGAgKyB0aGlzLnNwaW5TdGF0ZU11bHRpcGxpZXJbdGhpcy5ybmdBbmltSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuY2hhbmdlQXVkaW87XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjb3JlTGFiZWxOb2RlKS50bygxLCB7IHNjYWxlOiAyIH0sIHsgZWFzaW5nOiBgYmFja0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKG51bSAqIHBhcnNlSW50KHRoaXMuc3BpblN0YXRlTXVsdGlwbGllclt0aGlzLnJuZ0FuaW1JbmRleF0pKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmNoYW5nZUF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjb3JlTGFiZWxOb2RlKS50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBiYWNrSW5gIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGxldCBtYXggPSBwYXJzZUludCh0aGlzLnNwaW5TdGF0ZU11bHRpcGxpZXJbdGhpcy5ybmdBbmltSW5kZXhdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgICAgICBsZXQgc3Rhck5vZGVzID0gbmV3IGNjLk5vZGUoYHN0YXJzYCArIChpICsgMSkpO1xyXG4gICAgICAgICAgICBzdGFyTm9kZXMucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBzdGFyTm9kZXMueCA9IDA7XHJcbiAgICAgICAgICAgIHN0YXJOb2Rlcy55ID0gMDtcclxuICAgICAgICAgICAgc3Rhck5vZGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdGFySW1nO1xyXG4gICAgICAgICAgICBzdGFyTm9kZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyc0F1ZGlvO1xyXG4gICAgICAgICAgICBzdGFyTm9kZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gdGhpcy5nZXRSYW5kb21JbnQoLTMyMCwgMzIwKTtcclxuICAgICAgICAgICAgbGV0IHBvc1kgPSB0aGlzLmdldFJhbmRvbUludCgtMjIwLCAyMjApO1xyXG4gICAgICAgICAgICAvLyBpZihwb3NZID4gMTAwKXtcclxuICAgICAgICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmKHBvc1kgPCAtMTAwKXtcclxuICAgICAgICAgICAgLy8gICAgIHBvc1ggPSB0aGlzLmdldFJhbmRvbUludCgtMTYwLCAxNjApO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmKGkgPCBNYXRoLmZsb29yKG1heC8yKSl7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NYICo9IC0xO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHN0YXJOb2Rlcy5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzdGFyTm9kZXMpLnRvKDEsIHsgc2NhbGU6IDEsIHg6IHBvc1gsIHk6IHBvc1kgfSwgeyBlYXNpbmc6IGBiYWNrT3V0YCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc3Rhck5vZGVzKS50bygxLCB7IHNjYWxlOiAwLjUsIHg6IHBvc1ggLyAxLjUsIHk6IHBvc1kgLyAxLjUgfSwgeyBlYXNpbmc6IGBiYWNrSW5gIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oc3Rhck5vZGVzKS50bygyLHt4OnBvc1gvMS41LCB5OnBvc1kvMS41fSx7ZWFzaW5nOmBiYWNrT3V0YH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2VlbihzdGFyTm9kZXMpLnRvKHRoaXMuZ2V0UmFuZG9tSW50KDMwLDUwKSx7YW5nbGU6IDM2MCo1fSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gbWF4IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2FtZUVuZGVkLS10cnVlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgKGkgKyAxKSAvIDUwKTtcclxuXHJcbiAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddff1UBeLlMxYLQi9TsUOqT', 'CustomWidget');
// Framework/Scripts/CustomWidget.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomPositioningUI = /** @class */ (function (_super) {
    __extends(CustomPositioningUI, _super);
    function CustomPositioningUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
        // update (dt) {}
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
        // console.log("Position is "+position)
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
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2
            + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        // console.log("Position is " + _position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxDdXN0b21XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF1RUM7UUFwRUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLEtBQUssQ0FBQzs7UUE2RGpDLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsdUNBQXVDO1FBQ3ZDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsaUZBQWlGO0lBQ2pGLG1HQUFtRztJQUNuRyxvRkFBb0Y7SUFDcEYsNEhBQTRIO0lBQzVILGlGQUFpRjtJQUNqRiwwSEFBMEg7SUFDMUgsOENBQThDO0lBQzlDLGdGQUFnRjtJQUNoRix3Q0FBd0M7SUFDeEMsSUFBSTtJQUVKLG1EQUFxQixHQUFyQjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBFQUEwRTtRQUMxRSw0RkFBNEY7UUFDNUYsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNwRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsMENBQTBDO1FBQzFDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFHdkI7UUFEQyxRQUFROytEQUNzQjtJQUcvQjtRQURDLFFBQVE7Z0VBQ3dCO0lBVGhCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBdUV2QztJQUFELDBCQUFDO0NBdkVELEFBdUVDLENBdkVnRCxFQUFFLENBQUMsU0FBUyxHQXVFNUQ7a0JBdkVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Qb3NpdGlvbmluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0xlZnRDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JpZ2h0Q29ybmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGlzVG9wQ29ybmVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaXNCb3R0b21Db3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXRMZWZ0Q29ybmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXRSaWdodENvcm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbkF0TGVmdENvcm5lcigpIHtcclxuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCArIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUG9zaXRpb24gaXMgXCIrcG9zaXRpb24pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpIGlzIFwiK2NjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpb25BdFRvcENvcm5lcigpIHtcclxuICAgIC8vICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvLyAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgIC8vICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgLy8gICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgIC8vICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgLy8gICAgICAgICAtIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgKyBfb2ZmU2V0O1xyXG4gICAgLy8gICAgIF9wb3NpdGlvbi55ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXHJcbiAgICAvLyAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiUG9zaXRpb24gaXMgXCIrcG9zaXRpb24pXHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpIGlzIFwiK2NjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkpXHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcG9zaXRpb25BdFJpZ2h0Q29ybmVyKCkge1xyXG4gICAgICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgX29mZlNldCA9IDIwO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xyXG4gICAgICAgIF9wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXHJcbiAgICAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xyXG4gICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyIC0gdGhpcy5ub2RlLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnkgKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0IC0gX29mZlNldDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiICsgX3Bvc2l0aW9uKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSBpcyBcIitjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3909dpzo1hPDJb1f4iWWEcf', 'CustomWidget2');
// Framework/Scripts/CustomWidget2.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomWidget = /** @class */ (function (_super) {
    __extends(CustomWidget, _super);
    function CustomWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftOffset = 0;
        _this.rightOffset = 0;
        _this.bottomOffset = 0;
        _this.topOffset = 0;
        return _this;
    }
    Object.defineProperty(CustomWidget.prototype, "leftEnd", {
        get: function () {
            return -Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "rightEnd", {
        get: function () {
            return Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "topEnd", {
        get: function () {
            return Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "bottomEnd", {
        get: function () {
            return -Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    CustomWidget.prototype.onLoad = function () {
        this.Update(this.leftOffset, this.rightOffset, this.topOffset, this.bottomOffset);
    };
    CustomWidget.prototype.Update = function (_leftOffset, _rightOffset, _topOffset, _bottomOffset) {
        if (_leftOffset === void 0) { _leftOffset = undefined; }
        if (_rightOffset === void 0) { _rightOffset = undefined; }
        if (_topOffset === void 0) { _topOffset = undefined; }
        if (_bottomOffset === void 0) { _bottomOffset = undefined; }
        var initPosition = this.node.getPosition();
        this.node.setPosition(0, 0);
        var _position = this.node.getPosition();
        var _scale = this.node.getScale(cc.v2());
        var _width = this.node.width;
        var _height = this.node.height;
        var _anchor = cc.v2(this.node.anchorX, this.node.anchorY);
        if (_leftOffset != 0 && _leftOffset != undefined) {
            _position.x = this.leftEnd + this.leftOffset + _width * _anchor.x * _scale.x;
        }
        if (_rightOffset != 0 && _rightOffset != undefined) {
            _position.x = this.rightEnd - this.rightOffset - _width * (1 - _anchor.x) * _scale.x;
        }
        if (_bottomOffset != 0 && _bottomOffset != undefined) {
            _position.y = this.bottomEnd + this.bottomOffset + _height * _anchor.y * _scale.y;
        }
        if (_topOffset != 0 && _topOffset != undefined) {
            _position.y = this.topEnd - this.topOffset - _height * (1 - _anchor.y) * _scale.y;
        }
        else if (_leftOffset == 0 && _rightOffset == 0 && _bottomOffset == 0 && _topOffset == 0) {
            _position = initPosition;
        }
        this.node.setPosition(_position);
    };
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "leftOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "rightOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "bottomOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "topOffset", void 0);
    CustomWidget = __decorate([
        ccclass
    ], CustomWidget);
    return CustomWidget;
}(cc.Component));
exports.default = CustomWidget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxDdXN0b21XaWRnZXQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXJENkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFrRHBELENBQUM7SUFoREcsc0JBQVksaUNBQU87YUFBbkI7WUFDSSxPQUFPLENBQUMsZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxrQ0FBUTthQUFwQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxnQ0FBTTthQUFsQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxtQ0FBUzthQUFyQjtZQUNJLE9BQU8sQ0FBQyxlQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENB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QixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIGxlZnRPZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHJpZ2h0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcikgcHJpdmF0ZSBib3R0b21PZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHRvcE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGdldCBsZWZ0RW5kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC1VdGlscy5zY3JlZW5XaWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcmlnaHRFbmQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuc2NyZWVuV2lkdGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHRvcEVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5zY3JlZW5IZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGJvdHRvbUVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtVXRpbHMuc2NyZWVuSGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGUodGhpcy5sZWZ0T2Zmc2V0LCB0aGlzLnJpZ2h0T2Zmc2V0LCB0aGlzLnRvcE9mZnNldCwgdGhpcy5ib3R0b21PZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShfbGVmdE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfcmlnaHRPZmZzZXQ6IG51bWJlciA9IHVuZGVmaW5lZCwgX3RvcE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfYm90dG9tT2Zmc2V0OiBudW1iZXIgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgaW5pdFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICBsZXQgX3Bvc2l0aW9uOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9zY2FsZTogY2MuVmVjMiA9IHRoaXMubm9kZS5nZXRTY2FsZShjYy52MigpKTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IF9hbmNob3I6IGNjLlZlYzIgPSBjYy52Mih0aGlzLm5vZGUuYW5jaG9yWCwgdGhpcy5ub2RlLmFuY2hvclkpO1xyXG5cclxuICAgICAgICBpZiAoX2xlZnRPZmZzZXQgIT0gMCAmJiBfbGVmdE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmxlZnRFbmQgKyB0aGlzLmxlZnRPZmZzZXQgKyBfd2lkdGggKiBfYW5jaG9yLnggKiBfc2NhbGUueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9yaWdodE9mZnNldCAhPSAwICYmIF9yaWdodE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLnJpZ2h0RW5kIC0gdGhpcy5yaWdodE9mZnNldCAtIF93aWR0aCAqICgxIC0gX2FuY2hvci54KSAqIF9zY2FsZS54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2JvdHRvbU9mZnNldCAhPSAwICYmIF9ib3R0b21PZmZzZXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy5ib3R0b21FbmQgKyB0aGlzLmJvdHRvbU9mZnNldCArIF9oZWlnaHQgKiBfYW5jaG9yLnkgKiBfc2NhbGUueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF90b3BPZmZzZXQgIT0gMCAmJiBfdG9wT2Zmc2V0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24ueSA9IHRoaXMudG9wRW5kIC0gdGhpcy50b3BPZmZzZXQgLSBfaGVpZ2h0ICogKDEgLSBfYW5jaG9yLnkpICogX3NjYWxlLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9sZWZ0T2Zmc2V0ID09IDAgJiYgX3JpZ2h0T2Zmc2V0ID09IDAgJiYgX2JvdHRvbU9mZnNldCA9PSAwICYmIF90b3BPZmZzZXQgPT0gMCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24gPSBpbml0UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b460wWVY1FqIXpChY3bYbX', 'Utility');
// Framework/Scripts/Utilities/Utility.ts

cc.Node.prototype.blinkNode = function (blinkDuration, repeatCount, callback) {
    if (blinkDuration === void 0) { blinkDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return;
    this.active = true;
    var fadeOut = cc.tween().to(blinkDuration / 2, { opacity: 0 });
    var fadeIn = cc.tween().to(blinkDuration / 2, { opacity: 255 });
    if (repeatCount == -1) {
        return cc.tween(this).sequence(fadeOut, fadeIn).repeatForever().start();
    }
    return cc.tween(this)
        .sequence(fadeOut, fadeIn).repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.pulseNode = function (scaleOffset, pulseDuration, repeatCount, callback, interval) {
    if (scaleOffset === void 0) { scaleOffset = 0.5; }
    if (pulseDuration === void 0) { pulseDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (interval === void 0) { interval = 0; }
    if (this == null)
        return;
    this.active = true;
    var scaleUp = cc.tween().by(pulseDuration / 2, { scale: scaleOffset });
    var scaleDown = cc.tween().by(pulseDuration / 2, { scale: -scaleOffset });
    var intervalDelay = cc.tween().delay(interval);
    var pulseTween = cc.tween(this).sequence(scaleUp, scaleDown, intervalDelay);
    if (repeatCount == -1) {
        return pulseTween.repeatForever().start();
    }
    return pulseTween.repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.playAnimation = function (clipName, repeatCount, callback, wrapMode) {
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return 0;
    this.active = true;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return 0;
    var animState = animation.play(clipName);
    if (animState == null)
        return 0;
    if (wrapMode)
        animState.wrapMode = wrapMode;
    if (animState.wrapMode == cc.WrapMode.Loop)
        return 0;
    animState.repeatCount = repeatCount;
    var animDuration = (animState.duration / animState.speed) * repeatCount;
    cc.tween(this).delay(animDuration).call(callback).start();
    return animDuration;
};
cc.Node.prototype.resetAnim = function (animName) {
    if (this == null)
        return;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return;
    animation.stop(animName);
    animation.setCurrentTime(0, animName);
};
cc.Node.prototype.setActive = function (isActive, duration, callback, easingType) {
    var _this = this;
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'cubicOut'; }
    if (this == null || this.active == isActive)
        return;
    if (isActive) {
        this.opacity = 0;
        this.active = true;
        var opacityValue = 255;
    }
    else {
        this.opacity = 255;
        var opacityValue = 0;
    }
    cc.tween(this).to(duration, { opacity: opacityValue }, { easing: easingType })
        .call(function () {
        if (!isActive)
            _this.active = false;
        if (callback)
            callback();
    })
        .start();
};
cc.Node.prototype.moveNode = function (finalPos, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.moveToNode = function (otherNode, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    var finalPos = otherNode.inverseTransform(this.parent);
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.bezierMoveNode = function (finalPos, jumpHeight, duration, callback) {
    if (jumpHeight === void 0) { jumpHeight = 200; }
    if (duration === void 0) { duration = 1; }
    if (this == null)
        return;
    var initPos = this.getPosition();
    var targetVector = finalPos.sub(initPos);
    var firstControlPoint = cc.v2(initPos.x + targetVector.x * 0.4, initPos.y + jumpHeight);
    var secondControlPoint = cc.v2(initPos.x + targetVector.x * 0.8, initPos.y + jumpHeight);
    cc.tween(this)
        .bezierTo(duration, firstControlPoint, secondControlPoint, finalPos)
        .call(callback)
        .start();
};
cc.Node.prototype.rotateNode = function (angleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { angle: angleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.scaleNode = function (scaleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { scale: scaleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.inverseTransform = function (otherNode, position) {
    if (position === void 0) { position = null; }
    if (this == null)
        return cc.Vec2.ZERO;
    if (position == null)
        position = this.getPosition();
    var worldPos = this.parent.convertToWorldSpaceAR(position);
    var localPos = otherNode.convertToNodeSpaceAR(worldPos);
    return localPos;
};
cc.Node.prototype.setParentWithSamePos = function (parentNode) {
    if (this == null)
        return;
    var localPos = this.inverseTransform(parentNode);
    this.setParent(parentNode);
    this.setPosition(localPos);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlsaXRpZXNcXFV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBNkdBLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLGFBQXlCLEVBQUUsV0FBdUIsRUFBRSxRQUFtQjtJQUF2RSw4QkFBQSxFQUFBLGlCQUF5QjtJQUFFLDRCQUFBLEVBQUEsZUFBdUI7SUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU87SUFFekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFaEUsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0U7SUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2hCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2QsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFBO0FBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUs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QztBQUMvQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIG5hbWVzcGFjZSBjYyB7XHJcbiAgICBpbnRlcmZhY2UgTm9kZSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyB0aGUgZ2l2ZW4gYW5pbWF0aW9uIG9uIHRoZSBub2RlLlxyXG4gICAgICAgICogTm90ZTogVGhlIG5vZGUgc2hvdWxkIGhhdmUgQW5pbWF0aW9uIGNvbXBvbmVudCBhbG9uZyB3aXRoIHRoZSBhbmltYXRpb24gY2xpcC5cclxuICAgICAgICAqIEBwYXJhbSBjbGlwTmFtZSBOYW1lIG9mIHRoZSBhbmltYXRpb24gY2xpcCB0byBiZSBwbGF5ZWQuXHJcbiAgICAgICAgKiBAcGFyYW0gcmVwZWF0Q291bnQgTnVtYmVyIG9mIHRpbWVzIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIHJlcGVhdGVkLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkLiBXaWxsIG5vdCBiZSBpbnZva2VkIGZvciBsb29waW5nIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgKiBAcGFyYW0gd3JhcE1vZGUgVXBkYXRlcyB0aGUgd3JhcCBtb2RlIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgICAgKiBAcmV0dXJucyBBbmltYXRpb24gZHVyYXRpb24uIFdpbGwgYmUgMCBmb3IgbG9vcGluZyBhbmltYXRpb25zLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHBsYXlBbmltYXRpb24oY2xpcE5hbWU6IHN0cmluZywgcmVwZWF0Q291bnQ/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIHdyYXBNb2RlPzogY2MuV3JhcE1vZGUpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVzZXRzIHRoZSBhbmltYXRpb24gdG8gaXRzIGluaXRpYWwgZnJhbWUuXHJcbiAgICAgICAgKiBAcGFyYW0gYW5pbU5hbWUgTmFtZSBvZiB0aGUgYW5pbWF0aW9uIGNsaXAgdG8gYmUgcmVzZXQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXNldEFuaW0oYW5pbU5hbWU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEJsaW5rcyB0aGUgbm9kZSAtIEZhZGVzIE91dCBhbmQgRmFkZXMgSW4uXHJcbiAgICAgICAgKiBAcGFyYW0gYmxpbmtEdXJhdGlvbiBEdXJhdGlvbiBmb3IgZWFjaCBibGluay5cclxuICAgICAgICAqIEBwYXJhbSByZXBlYXRDb3VudCBOdW1iZXIgb2YgdGltZXMgdG8gYmxpbmsgdGhlIG5vZGUuIFBhc3MgLTEgdG8gcmVwZWF0Rm9yZXZlci5cclxuICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBhZnRlciB0aGUgbm9kZSBpcyBibGlua2VkICduJyBudW1iZXIgb2YgdGltZXMuIFxyXG4gICAgICAgICogQHJldHVybnMgVHdlZW4gSW5zdGFuY2UuIENhbiBiZSB1c2VkIHRvIHN0b3Agb3IgY29udHJvbCB0aGUgdHdlZW4uIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgYmxpbmtOb2RlKGJsaW5rRHVyYXRpb24/OiBudW1iZXIsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogVHdlZW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUHVsc2VzIHRoZSBub2RlIC0gU2NhbGVzIFVwIGFuZCBTY2FsZXMgRG93bi5cclxuICAgICAgICAqIEBwYXJhbSBzY2FsZU9mZnNldCBTY2FsZSBvZmZzZXQgdmFsdWUgdG8gYWRkL3N1YnRyYWN0IHdoZW4gc2NhbGluZyB1cC9kb3duIHJlc3BlY3RpdmVseS5cclxuICAgICAgICAqIEBwYXJhbSBwdWxzZUR1cmF0aW9uIER1cmF0aW9uIGZvciBlYWNoIHB1bHNlLlxyXG4gICAgICAgICogQHBhcmFtIHJlcGVhdENvdW50IE51bWJlciBvZiB0aW1lcyB0byBwdWxzZSB0aGUgbm9kZS4gUGFzcyAtMSB0byByZXBlYXRGb3JldmVyLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGlzIHB1bHNlZCAnbicgbnVtYmVyIG9mIHRpbWVzLiBcclxuICAgICAgICAqIEBwYXJhbSBpbnRlcnZhbCBJbnRlcnZhbCBiZXR3ZWVuIGVhY2ggcHVsc2UuIERlZmF1bHQgaXMgMCAoQ29udGludW91cyBwdWxzaW5nKS4gXHJcbiAgICAgICAgKiBAcmV0dXJucyBUd2VlbiBJbnN0YW5jZS4gQ2FuIGJlIHVzZWQgdG8gc3RvcCBvciBjb250cm9sIHRoZSB0d2Vlbi4gXHJcbiAgICAgICAgKi9cclxuICAgICAgICBwdWxzZU5vZGUoc2NhbGVPZmZzZXQ/OiBudW1iZXIsIHB1bHNlRHVyYXRpb24/OiBudW1iZXIsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBpbnRlcnZhbD86IG51bWJlcik6IFR3ZWVuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEVuYWJsZXMvRGlzYWJsZXMgdGhlIG5vZGUgd2l0aCBhIEZhZGVJbi9GYWRlT3V0IGVmZmVjdCByZXNwZWN0aXZlbHkuIFxyXG4gICAgICAgICogQHBhcmFtIGlzQWN0aXZlIFNldHMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBGYWRlIGR1cmF0aW9uLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGlzIEZhZGVkT3V0L0ZhZGVkSW4uIFxyXG4gICAgICAgICogQHBhcmFtIGVhc2luZ1R5cGUgVHlwZSBvZiBFYXNpbmcgdG8gYmUgdXNlZCBmb3IgVHdlZW5pbmcuIERlZmF1bHQgLSAnY3ViaWNPdXQnXHJcbiAgICAgICAgKi9cclxuICAgICAgICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4sIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgbm9kZSB0byBhIGdpdmVuIGxvY2FsIHBvc2l0aW9uLiBcclxuICAgICAgICAqIEBwYXJhbSBmaW5hbFBvcyBGaW5hbCBwb3NpdGlvbiBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBNb3ZlIGR1cmF0aW9uLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGhhcyByZWFjaGVkIHRoZSBmaW5hbCBwb3NpdGlvbi4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnXHJcbiAgICAgICAgKi9cclxuICAgICAgICBtb3ZlTm9kZShmaW5hbFBvczogY2MuVmVjMiwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBub2RlIHRvIHRoZSBnaXZlbiBub2RlJ3MgcG9zaXRpb24gaXJyZXNwZWN0aXZlIG9mIHRoZWlyIHBhcmVudHMuIFxyXG4gICAgICAgICogQHBhcmFtIG90aGVyTm9kZSBNb3ZlIHRvd2FyZHMgdGhpcyBub2RlLlxyXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHJlYWNoZWQgdGhlIGZpbmFsIHBvc2l0aW9uLiBcclxuICAgICAgICAqIEBwYXJhbSBlYXNpbmdUeXBlIFR5cGUgb2YgRWFzaW5nIHRvIGJlIHVzZWQgZm9yIFR3ZWVuaW5nLiBEZWZhdWx0IC0gJ3Ntb290aCdcclxuICAgICAgICAqL1xyXG4gICAgICAgIG1vdmVUb05vZGUob3RoZXJOb2RlOiBjYy5Ob2RlLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZT86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIG5vZGUgdG8gYSBnaXZlbiBsb2NhbCBwb3NpdGlvbiBpbiBhIEN1cnZlZCBwYXRoLiBcclxuICAgICAgICAqIEBwYXJhbSBmaW5hbFBvcyBGaW5hbCBwb3NpdGlvbiBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBqdW1wSGVpZ2h0ICBIZWlnaHQgb2YgdGhlIGN1cnZlZCBwYXRoLlxyXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHJlYWNoZWQgdGhlIGZpbmFsIHBvc2l0aW9uLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGJlemllck1vdmVOb2RlKGZpbmFsUG9zOiBjYy5WZWMyLCBqdW1wSGVpZ2h0PzogbnVtYmVyLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUm90YXRlcyB0aGUgbm9kZS4gXHJcbiAgICAgICAgKiBAcGFyYW0gYW5nbGVWYWx1ZSBGaW5hbCBhbmdsZSBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBSb3RhdGlvbiBkdXJhdGlvbi5cclxuICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBhZnRlciB0aGUgbm9kZSBoYXMgcm90YXRlZC4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgcm90YXRlTm9kZShhbmdsZVZhbHVlOiBudW1iZXIsIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY2FsZXMgdGhlIG5vZGUuIFxyXG4gICAgICAgICogQHBhcmFtIHNjYWxlVmFsdWUgRmluYWwgc2NhbGUgb2YgdGhlIG5vZGUuXHJcbiAgICAgICAgKiBAcGFyYW0gZHVyYXRpb24gUm90YXRpb24gZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHNjYWxlZC4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2NhbGVOb2RlKHNjYWxlVmFsdWU6IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgbG9jYWwgcG9zaXRpb24gb2YgdGhlIG5vZGUgaW4gYW5vdGhlciBub2RlIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG4gICAgICAgICogQHBhcmFtIG90aGVyTm9kZSBMb2NhbCBwb3NpdGlvbiB3aWxsIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIG5vZGUgY29vcmRpbmF0ZXMgb2YgdGhpcyBub2RlLlxyXG4gICAgICAgICogQHBhcmFtIHBvc2l0aW9uIFBvc2l0aW9uIHRvIGJlIGNhbGN1bGF0ZWQuIERlZmF1bHQgLSBDdXJyZW50IFBvc2l0aW9uLiBcclxuICAgICAgICAqIEByZXR1cm5zIExvY2FsIHBvc2l0aW9uIG9mIHRoZSBub2RlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGludmVyc2VUcmFuc2Zvcm0ob3RoZXJOb2RlOiBjYy5Ob2RlLCBwb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5WZWMyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgcGFyZW50IG9mIHRoZSBub2RlIHdoaWxlIHJldGFpbmluZyB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICAgICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIFRoZSBuZXcgcGFyZW50IG9mIHRoZSBub2RlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNldFBhcmVudFdpdGhTYW1lUG9zKHBhcmVudE5vZGU6IE5vZGUpOiB2b2lkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5ibGlua05vZGUgPSBmdW5jdGlvbiAoYmxpbmtEdXJhdGlvbjogbnVtYmVyID0gMSwgcmVwZWF0Q291bnQ6IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBsZXQgZmFkZU91dCA9IGNjLnR3ZWVuKCkudG8oYmxpbmtEdXJhdGlvbiAvIDIsIHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGxldCBmYWRlSW4gPSBjYy50d2VlbigpLnRvKGJsaW5rRHVyYXRpb24gLyAyLCB7IG9wYWNpdHk6IDI1NSB9KTtcclxuXHJcbiAgICBpZiAocmVwZWF0Q291bnQgPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gY2MudHdlZW4odGhpcykuc2VxdWVuY2UoZmFkZU91dCwgZmFkZUluKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYy50d2Vlbih0aGlzKVxyXG4gICAgICAgIC5zZXF1ZW5jZShmYWRlT3V0LCBmYWRlSW4pLnJlcGVhdChyZXBlYXRDb3VudClcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUucHVsc2VOb2RlID0gZnVuY3Rpb24gKHNjYWxlT2Zmc2V0OiBudW1iZXIgPSAwLjUsIHB1bHNlRHVyYXRpb246IG51bWJlciA9IDEsIHJlcGVhdENvdW50OiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBpbnRlcnZhbDogbnVtYmVyID0gMCkge1xyXG4gICAgaWYgKHRoaXMgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGxldCBzY2FsZVVwID0gY2MudHdlZW4oKS5ieShwdWxzZUR1cmF0aW9uIC8gMiwgeyBzY2FsZTogc2NhbGVPZmZzZXQgfSk7XHJcbiAgICBsZXQgc2NhbGVEb3duID0gY2MudHdlZW4oKS5ieShwdWxzZUR1cmF0aW9uIC8gMiwgeyBzY2FsZTogLXNjYWxlT2Zmc2V0IH0pO1xyXG4gICAgbGV0IGludGVydmFsRGVsYXkgPSBjYy50d2VlbigpLmRlbGF5KGludGVydmFsKTtcclxuICAgIGxldCBwdWxzZVR3ZWVuID0gY2MudHdlZW4odGhpcykuc2VxdWVuY2Uoc2NhbGVVcCwgc2NhbGVEb3duLCBpbnRlcnZhbERlbGF5KTtcclxuICAgIGlmIChyZXBlYXRDb3VudCA9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwdWxzZVR3ZWVuLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHB1bHNlVHdlZW4ucmVwZWF0KHJlcGVhdENvdW50KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5wbGF5QW5pbWF0aW9uID0gZnVuY3Rpb24gKGNsaXBOYW1lOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCB3cmFwTW9kZT86IGNjLldyYXBNb2RlKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybiAwO1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGxldCBhbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgaWYgKGFuaW1hdGlvbiA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBsZXQgYW5pbVN0YXRlID0gYW5pbWF0aW9uLnBsYXkoY2xpcE5hbWUpO1xyXG4gICAgaWYgKGFuaW1TdGF0ZSA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBpZiAod3JhcE1vZGUpIGFuaW1TdGF0ZS53cmFwTW9kZSA9IHdyYXBNb2RlO1xyXG4gICAgaWYgKGFuaW1TdGF0ZS53cmFwTW9kZSA9PSBjYy5XcmFwTW9kZS5Mb29wKSByZXR1cm4gMDtcclxuXHJcbiAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSByZXBlYXRDb3VudDtcclxuICAgIGxldCBhbmltRHVyYXRpb24gPSAoYW5pbVN0YXRlLmR1cmF0aW9uIC8gYW5pbVN0YXRlLnNwZWVkKSAqIHJlcGVhdENvdW50O1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMpLmRlbGF5KGFuaW1EdXJhdGlvbikuY2FsbChjYWxsYmFjaykuc3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gYW5pbUR1cmF0aW9uO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5yZXNldEFuaW0gPSBmdW5jdGlvbiAoYW5pbU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIGlmIChhbmltYXRpb24gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGFuaW1hdGlvbi5zdG9wKGFuaW1OYW1lKTtcclxuICAgIGFuaW1hdGlvbi5zZXRDdXJyZW50VGltZSgwLCBhbmltTmFtZSk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uIChpc0FjdGl2ZTogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU6IHN0cmluZyA9ICdjdWJpY091dCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwgfHwgdGhpcy5hY3RpdmUgPT0gaXNBY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgb3BhY2l0eVZhbHVlID0gMjU1O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHZhciBvcGFjaXR5VmFsdWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMpLnRvKGR1cmF0aW9uLCB7IG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0FjdGl2ZSkgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24gKGZpbmFsUG9zOiBjYy5WZWMyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogZmluYWxQb3MgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUubW92ZVRvTm9kZSA9IGZ1bmN0aW9uIChvdGhlck5vZGU6IGNjLk5vZGUsIGR1cmF0aW9uOiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlOiBzdHJpbmcgPSAnc21vb3RoJykge1xyXG4gICAgaWYgKHRoaXMgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBmaW5hbFBvcyA9IG90aGVyTm9kZS5pbnZlcnNlVHJhbnNmb3JtKHRoaXMucGFyZW50KTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogZmluYWxQb3MgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUuYmV6aWVyTW92ZU5vZGUgPSBmdW5jdGlvbiAoZmluYWxQb3M6IGNjLlZlYzIsIGp1bXBIZWlnaHQ6IG51bWJlciA9IDIwMCwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaW5pdFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCB0YXJnZXRWZWN0b3IgPSBmaW5hbFBvcy5zdWIoaW5pdFBvcyk7XHJcblxyXG4gICAgbGV0IGZpcnN0Q29udHJvbFBvaW50ID0gY2MudjIoaW5pdFBvcy54ICsgdGFyZ2V0VmVjdG9yLnggKiAwLjQsIGluaXRQb3MueSArIGp1bXBIZWlnaHQpO1xyXG4gICAgbGV0IHNlY29uZENvbnRyb2xQb2ludCA9IGNjLnYyKGluaXRQb3MueCArIHRhcmdldFZlY3Rvci54ICogMC44LCBpbml0UG9zLnkgKyBqdW1wSGVpZ2h0KTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKVxyXG4gICAgICAgIC5iZXppZXJUbyhkdXJhdGlvbiwgZmlyc3RDb250cm9sUG9pbnQsIHNlY29uZENvbnRyb2xQb2ludCwgZmluYWxQb3MpXHJcbiAgICAgICAgLmNhbGwoY2FsbGJhY2spXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLnJvdGF0ZU5vZGUgPSBmdW5jdGlvbiAoYW5nbGVWYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBhbmdsZTogYW5nbGVWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5zY2FsZU5vZGUgPSBmdW5jdGlvbiAoc2NhbGVWYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBzY2FsZTogc2NhbGVWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gKG90aGVyTm9kZTogY2MuTm9kZSwgcG9zaXRpb246IGNjLlZlYzIgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm4gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCB3b3JsZFBvcyA9IHRoaXMucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NpdGlvbik7XHJcbiAgICBsZXQgbG9jYWxQb3MgPSBvdGhlck5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgcmV0dXJuIGxvY2FsUG9zO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5zZXRQYXJlbnRXaXRoU2FtZVBvcyA9IGZ1bmN0aW9uIChwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxvY2FsUG9zID0gdGhpcy5pbnZlcnNlVHJhbnNmb3JtKHBhcmVudE5vZGUpO1xyXG4gICAgdGhpcy5zZXRQYXJlbnQocGFyZW50Tm9kZSk7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92529e0bmlFg4etSHkGHN2l', 'globalVariables');
// Games/Scripts/globalVariables.ts

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
        _this.answerArray = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGdsb2JhbFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQThDQztRQTNDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHaEIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsWUFBWSxDQUFDO1FBRWhDLGlCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUdyQyxZQUFZO1FBRUwsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzQmpDLENBQUM7d0JBOUNvQixlQUFlO0lBMEJoQyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLGlCQUFlLENBQUMsUUFBUSxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTDtJQUlBLENBQUM7SUFHRCxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7O0lBcEJjLHdCQUFRLEdBQW1CLElBQUksQ0FBQztJQXRCL0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7aURBQ2M7SUFOTixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBOENuQztJQUFELHNCQUFDO0NBOUNELEFBOENDLENBOUM0QyxFQUFFLENBQUMsU0FBUyxHQThDeEQ7a0JBOUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxWYXJpYWJsZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGFuaW1hdGlvbkVudHJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXlFZmZlY3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uRXhpdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgY2FudmFzVG9wWTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNMZWZ0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByaWdodEFuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheWVySUQ6IHN0cmluZyA9IFwiSURfZGVmYXVsdFwiO1xyXG5cclxuICAgIHB1YmxpYyBhbnN3ZXJBcnJheSA6IGJvb2xlYW4gW10gPSBbXTtcclxuXHJcbiAgICBcclxuICAgIC8vcHVibGljIGdhO1xyXG5cclxuICAgIHB1YmxpYyBmaWxsUmFuZ2U6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpnbG9iYWxWYXJpYWJsZXMgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/WebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd43bCWyrZH4J/MVPf8iNMA', 'WebView');
// Framework/WebView/Scripts/WebView.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.webViewContainer = null;
        _this.correctAnswer = "600";
        _this.webLink = "https://plans.littlesingham.me/";
        _this.vo_aud = null;
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
        _this.question = ["300+250", "200+250", "250+250", "500+250", "600+200",
            "350+350", "450+50", "650+50", "750+50", "850+50", "450+100", "550+100", "100+550", "750+100"];
        return _this;
        // update (dt) {}
    }
    WebView_1 = WebView;
    Object.defineProperty(WebView, "Instance", {
        get: function () {
            return WebView_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    WebView.prototype.onLoad = function () {
        WebView_1.instance = this;
    };
    WebView.prototype.start = function () {
    };
    WebView.prototype.CheckForWebView = function (isMobileNumberNeeded) {
        if (isMobileNumberNeeded === void 0) { isMobileNumberNeeded = false; }
        var parts = this.question[this.getRandomNumber(0, this.question.length - 1)].split("+");
        this.node.getChildByName("Captcha").children[0].getChildByName("Context2").getComponent(cc.Label).string = parts[0] + " + " + parts[1];
        this.correctAnswer = ((parseInt(parts[0])) + (parseInt(parts[1]))).toString();
        this.MobileNumberNeeded = isMobileNumberNeeded;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.vo_aud, false);
        //if player has the access captcha screen will be poped up, else game will continue
        if (!StartGame_1.default.Instance.hasAccess) {
            // console.log("InitiatePaywallCaptcha--true");
            // if (startGame.Instance.mobileNumber != null) {
            //     console.log("mobileNumber--" + startGame.Instance.mobileNumber);
            // }
            if (isMobileNumberNeeded && !StartGame_1.default.Instance.hasMobile) {
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--MobileCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[1], 1.5);
                // this.node.getChildByName("Captcha").children[1].active = true;
                this.node.getChildByName("Captcha").children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            else {
                // this.OnContinue();
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--PaymentCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[0], 1.5);
                // this.node.getChildByName("Captcha").children[0].active = true;
                this.node.getChildByName("Captcha").children[1].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            return;
        }
        // console.log("Player can play the level since he has the access");
    };
    WebView.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    WebView.prototype.PopIn = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = 0;
        _node.active = true;
        cc.tween(_node).to(0.4, { scale: _scale }, { easing: "backOut" }).start();
    };
    WebView.prototype.PopOut = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = _scale;
        cc.tween(_node).to(0.4, { scale: 0 }, { easing: "backIn" }).start();
        this.scheduleOnce(function () {
            _node.getParent().active = false;
        }, 0.4);
    };
    WebView.prototype.initWebview = function () {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        // iframe.src = "http://192.168.1.109:3003";
        iframe.src = this.webLink;
        var webViewContainer = iframe;
        webViewContainer.style["position"] = "absolute";
        webViewContainer.style["top"] = "0";
        webViewContainer.style["left"] = "0";
        webViewContainer.style["width"] = "100%";
        webViewContainer.style["height"] = "100%";
        var resizeIframe = function () { };
        resizeIframe();
        this.webViewContainer = webViewContainer;
    };
    WebView.prototype.OnClose = function () {
        console.log("logEvent--captcha--closed");
        cc.audioEngine.stopAllEffects();
        // this.node.children[0].active = false;
        if (this.node.children[0].children[0].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[0], 1.5);
        }
        if (this.node.children[0].children[1].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[1], 1.5);
        }
        this.node.children[0].getChildByName("web").active = false;
        this.currentAnswer = "";
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
        if (StartGame_1.default.Instance.isMusicOn) {
            var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
            cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
        }
    };
    WebView.prototype.CheckForMobileNumber = function (_event) {
        var _this = this;
        if (this.currentMobile.length < 10 || this.currentMobile == "") {
            if (_event.target.name != "x") {
                if (this.currentMobile.length < 10)
                    this.currentMobile = this.currentMobile + _event.target.name;
            }
            else {
                var len = this.currentMobile.length;
                var name = "";
                for (var i = 0; i < len - 1; i++) {
                    name += this.currentMobile[i];
                }
                this.currentMobile = name;
            }
            if (this.currentMobile == "") {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = true;
            }
            else {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = false;
            }
            this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
            if (this.currentMobile.length >= 10) {
                StartGame_1.default.Instance.hasMobile = true;
                StartGame_1.default.Instance.hasAccess = true;
                console.log("mobileNumber--" + this.currentMobile);
                this.node.children[0].children[0].active = false;
                this.PopOut(this.node.children[0].children[1], 1.5);
                this.scheduleOnce(function () {
                    _this.node.children[0].active = false;
                }, 0.4);
            }
        }
    };
    WebView.prototype.CheckForCorrectAnswer = function (_event) {
        var _this = this;
        if (_event.target.name != "x") {
            if (this.currentAnswer.length < 3)
                this.currentAnswer = this.currentAnswer + _event.target.name;
        }
        else {
            var len = this.currentAnswer.length;
            var name = "";
            for (var i = 0; i < len - 1; i++) {
                name += this.currentAnswer[i];
            }
            this.currentAnswer = name;
        }
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        if (this.currentAnswer == this.correctAnswer) {
            // this.OnContinue();
            console.log("logEvent--captcha--correct");
            console.log("Initiate_payment--true");
            console.log("Restart_level--" + StartGame_1.default.Instance.currentLevel);
        }
        else {
            var len = this.currentAnswer.length;
            var name_1 = "";
            for (var i = 0; i < len; i++) {
                if (this.currentAnswer[i] == this.correctAnswer[i]) {
                    name_1 += this.currentAnswer[i];
                }
                else if (_event.target.name != "x") {
                    cc.tween(this.node.children[0].children[0].getChildByName("ans")).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                        .to(0.1, { color: cc.Color.WHITE }).start();
                    console.log("logEvent--captcha--wrong");
                    this.scheduleOnce(function () {
                        _this.currentAnswer = name_1;
                        _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                    }, 0.4);
                    break;
                }
            }
        }
    };
    WebView.prototype.GameContinues = function () {
    };
    WebView.prototype.OnContinue = function () {
        var _this = this;
        // this.node.children[0].active = true;
        this.initWebview();
        if (StartGame_1.default.Instance.isMusicOn) {
            cc.audioEngine.stopMusic();
        }
        window.addEventListener("message", function (event) {
            console.log("onLoad " + event.data);
            if (event.data == "Subscription--Yes") {
                StartGame_1.default.Instance.hasAccess = true;
                _this.webViewContainer.remove();
                _this.node.children[0].getChildByName("web").active = false;
                _this.node.children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
                    cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
                }
            }
            if (event.data == "Subscription--No") {
                StartGame_1.default.Instance.hasAccess = false;
                _this.webViewContainer.remove();
                // this.node.children[0].children[0].active = false;
                // this.node.children[0].children[1].active = true;
                _this.node.children[0].children[0].active = true;
                _this.currentAnswer = "";
                _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                // if (startGame.Instance.isMusicOn) {
                //     cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
                //     cc.audioEngine.setVolume(0, 0.2);
                // }
            }
        }, false);
    };
    var WebView_1;
    WebView.instance = null;
    __decorate([
        property(String)
    ], WebView.prototype, "correctAnswer", void 0);
    __decorate([
        property(String)
    ], WebView.prototype, "webLink", void 0);
    __decorate([
        property(cc.AudioClip)
    ], WebView.prototype, "vo_aud", void 0);
    WebView = WebView_1 = __decorate([
        ccclass
    ], WebView);
    return WebView;
}(cc.Component));
exports.default = WebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxXZWJWaWV3XFxTY3JpcHRzXFxXZWJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFtUUM7UUEvUEcsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFXLEtBQUssQ0FBQztRQUU5QixhQUFPLEdBQVcsaUNBQWlDLENBQUM7UUFFcEQsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFDNUIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBRXBDLGNBQVEsR0FBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO1lBQy9FLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBZ1BuRyxpQkFBaUI7SUFDckIsQ0FBQztnQkFuUW9CLE9BQU87SUFvQnhCLHNCQUFXLG1CQUFRO2FBQW5CO1lBQ0ksT0FBTyxTQUFPLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsd0JBQU0sR0FBTjtRQUNJLFNBQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFlLEdBQWYsVUFBZ0Isb0JBQXFDO1FBQXJDLHFDQUFBLEVBQUEsNEJB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LENBblFvQyxFQUFFLENBQUMsU0FBUyxHQW1RaEQ7a0JBblFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgd2ViVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFN0cmluZylcclxuICAgIHByaXZhdGUgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCI2MDBcIjtcclxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBwcml2YXRlIHdlYkxpbms6IHN0cmluZyA9IFwiaHR0cHM6Ly9wbGFucy5saXR0bGVzaW5naGFtLm1lL1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdm9fYXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW9iaWxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFdlYlZpZXcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYXhTdHJpbmdMZW5ndGggPSAzO1xyXG4gICAgcHJpdmF0ZSBNb2JpbGVOdW1iZXJOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBTdHJpbmdbXSA9IFtcIjMwMCsyNTBcIiwgXCIyMDArMjUwXCIsIFwiMjUwKzI1MFwiLCBcIjUwMCsyNTBcIiwgXCI2MDArMjAwXCIsXHJcbiAgICAgICAgXCIzNTArMzUwXCIsIFwiNDUwKzUwXCIsIFwiNjUwKzUwXCIsIFwiNzUwKzUwXCIsIFwiODUwKzUwXCIsIFwiNDUwKzEwMFwiLCBcIjU1MCsxMDBcIiwgXCIxMDArNTUwXCIsIFwiNzUwKzEwMFwiXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBXZWJWaWV3Lmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBXZWJWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrRm9yV2ViVmlldyhpc01vYmlsZU51bWJlck5lZWRlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHBhcnRzOiBzdHJpbmdbXSA9IHRoaXMucXVlc3Rpb25bdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy5xdWVzdGlvbi5sZW5ndGggLSAxKV0uc3BsaXQoXCIrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJDb250ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHBhcnRzWzBdICsgXCIgKyBcIiArIHBhcnRzWzFdO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9ICgocGFyc2VJbnQocGFydHNbMF0pKSArIChwYXJzZUludChwYXJ0c1sxXSkpKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuTW9iaWxlTnVtYmVyTmVlZGVkID0gaXNNb2JpbGVOdW1iZXJOZWVkZWQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudm9fYXVkLCBmYWxzZSk7XHJcbiAgICAgICAgLy9pZiBwbGF5ZXIgaGFzIHRoZSBhY2Nlc3MgY2FwdGNoYSBzY3JlZW4gd2lsbCBiZSBwb3BlZCB1cCwgZWxzZSBnYW1lIHdpbGwgY29udGludWVcclxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbml0aWF0ZVBheXdhbGxDYXB0Y2hhLS10cnVlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5tb2JpbGVOdW1iZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJtb2JpbGVOdW1iZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLm1vYmlsZU51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlTnVtYmVyTmVlZGVkICYmICFzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1Nb2JpbGVDYXB0Y2hhLS1zaG93ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBvcEluKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0sIDEuNSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuT25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tUGF5bWVudENhcHRjaGEtLXNob3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUG9wSW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblswXSwgMS41KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGxheWVyIGNhbiBwbGF5IHRoZSBsZXZlbCBzaW5jZSBoZSBoYXMgdGhlIGFjY2Vzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBQb3BJbihfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgX25vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuNCwgeyBzY2FsZTogX3NjYWxlIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgUG9wT3V0KF9ub2RlOiBjYy5Ob2RlLCBfc2NhbGU6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBfbm9kZS5zY2FsZSA9IF9zY2FsZTtcclxuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBfbm9kZS5nZXRQYXJlbnQoKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXZWJ2aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgIC8vIGlmcmFtZS5zcmMgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTA5OjMwMDNcIjtcclxuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy53ZWJMaW5rO1xyXG4gICAgICAgIGNvbnN0IHdlYlZpZXdDb250YWluZXIgPSBpZnJhbWU7XHJcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ0b3BcIl0gPSBcIjBcIjtcclxuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1wibGVmdFwiXSA9IFwiMFwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcclxuICAgICAgICBjb25zdCByZXNpemVJZnJhbWUgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgcmVzaXplSWZyYW1lKCk7XHJcbiAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyID0gd2ViVmlld0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsb3NlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nRXZlbnQtLWNhcHRjaGEtLWNsb3NlZFwiKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG4gICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0sIDEuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3BPdXQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLCAxLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2hlY2tGb3JNb2JpbGVOdW1iZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTAgfHwgdGhpcy5jdXJyZW50TW9iaWxlID09IFwiXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gdGhpcy5jdXJyZW50TW9iaWxlICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50TW9iaWxlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudE1vYmlsZVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vYmlsZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRNb2JpbGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHRoaXMuY3VycmVudE1vYmlsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0sIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBDaGVja0ZvckNvcnJlY3RBbnN3ZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gdGhpcy5jdXJyZW50QW5zd2VyICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50QW5zd2VyLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudEFuc3dlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50QW5zd2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbnN3ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuT25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS1jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYXRlX3BheW1lbnQtLXRydWVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdGFydF9sZXZlbC0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5zd2VyW2ldID09IHRoaXMuY29ycmVjdEFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gdGhpcy5jdXJyZW50QW5zd2VyW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2V2ZW50LnRhcmdldC5uYW1lICE9IFwieFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0td3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHYW1lQ29udGludWVzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkNvbnRpbnVlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdFdlYnZpZXcoKTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwibWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbkxvYWQgYCArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tWWVzYCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViVmlld0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PSBgU3Vic2NyaXB0aW9uLS1Ob2ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Tictock/Scripts/questionData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14c22o3rANHuK6U/y0kdlcu', 'questionData');
// Games/Tictock/Scripts/questionData.ts

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var questionData = /** @class */ (function () {
    function questionData() {
        this.questionTime = 0;
        this.isoptionText = false;
        this.isquestionText = false;
        this.questionImg = null;
        this.questionText = "";
        this.optionImgs = [];
        this.optionTexts = [];
        this.correctAnswer = 1;
    }
    __decorate([
        property(Number)
    ], questionData.prototype, "questionTime", void 0);
    __decorate([
        property(Boolean)
    ], questionData.prototype, "isoptionText", void 0);
    __decorate([
        property(Boolean)
    ], questionData.prototype, "isquestionText", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], questionData.prototype, "questionImg", void 0);
    __decorate([
        property(String)
    ], questionData.prototype, "questionText", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], questionData.prototype, "optionImgs", void 0);
    __decorate([
        property(String)
    ], questionData.prototype, "optionTexts", void 0);
    __decorate([
        property(Number)
    ], questionData.prototype, "correctAnswer", void 0);
    questionData = __decorate([
        ccclass
    ], questionData);
    return questionData;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFRpY3RvY2tcXFNjcmlwdHNcXHF1ZXN0aW9uRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR0ksaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGVBQVUsR0FBcUIsRUFBRSxDQUFDO1FBRWxDLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBRTNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFmRztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFFekI7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO3NEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztzREFDUztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNTO0lBRWxDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxREFDVTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7dURBQ1M7SUFqQnhCLFlBQVk7UUFEakIsT0FBTztPQUNGLFlBQVksQ0FrQmpCO0lBQUQsbUJBQUM7Q0FsQkQsQUFrQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5jbGFzcyBxdWVzdGlvbkRhdGEge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBxdWVzdGlvblRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzb3B0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc3F1ZXN0aW9uVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcXVlc3Rpb25JbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBvcHRpb25JbWdzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoU3RyaW5nKVxyXG4gICAgb3B0aW9uVGV4dHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgY29ycmVjdEFuc3dlcjogbnVtYmVyID0gMTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/demoScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5da6dvS/yhOPqzefDN8xJgO', 'demoScript');
// Games/Scripts/demoScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.WheelAnimations = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _numOfParticles = 15;
        // this.playDustAnim(_numOfParticles, this.node);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.25);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim2(_numOfParticles,10, this.node);
        // },0.5);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.75);
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.onClickPlayWheelAnim = function (event) {
        var spineNode = this.node.getChildByName("spine");
        spineNode.getComponent(sp.Skeleton).setAnimation(0, event.target.name, false);
    };
    NewClass.prototype.playDustAnim = function (num, _node) {
        var _this = this;
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var colorsArray = ["#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff"];
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var rngX = this_1.getRandomNumber(0, cc.winSize.width);
            var rngY = this_1.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_1.getRandomNumber(0, colorsArray.length - 1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            // trail.color = new cc.Color(252, 244, 0);
            var rngscale = this_1.getRandomNumber(10, 300);
            var rngEntryTimer = this_1.getRandomNumber(0.5, 1.5);
            var rngTimer1 = this_1.getRandomNumber(0.1, 0.2);
            cc.tween(particles).to(rngTimer1, { width: rngscale, height: rngscale }, { easing: "backOut" }).start();
            cc.tween(particles).bezierTo(rngTimer1, new cc.Vec2(300, 300), //start
            new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height)), //curve range
            new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height))) //endpoint
                .call(function () {
                cc.tween(particles).to(rngEntryTimer + 0.5, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                // cc.tween(particles).repeatForever().start();
                cc.tween(particles).to(4, { scaleX: particles.scaleX * -1 }).start();
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.schedule(function () {
                        particles.opacity = 255;
                        cc.tween(particles).to(_this.getRandomNumber(0.25, 0.75), { opacity: _this.getRandomNumber(0, 50) }).start();
                    }, _this.getRandomNumber(0.1, 0.25));
                    trail.getComponent(cc.MotionStreak).minSeg = _this.getRandomNumber(1, 5);
                    trail.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(5, 10);
                    trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                    trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                    trail.getComponent(cc.MotionStreak).enabled = true;
                    trail.getComponent(cc.MotionStreak).fastMode = true;
                    // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                    // particles.getComponent(cc.AudioSource).volume = 0.2;
                    // particles.getComponent(cc.AudioSource).play();
                    var rngTimer2 = _this.getRandomNumber(0.1, 2);
                    cc.tween(particles).bezierTo(rngTimer2, new cc.Vec2(particles.x, particles.y), //start
                    new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height)), //curve range
                    new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height))) //endpoint
                        .start();
                    cc.tween(particles).to(rngTimer2, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                    cc.tween(particles).to(rngTimer2 + 0.5, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                        particles.destroy();
                    }).start();
                }).start();
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.playDustAnim2 = function (num1, num2, _node) {
        var _this = this;
        console.log("deDust2");
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        var colorsArray = ["#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff"];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_2 = function (i) {
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = 300;
            particles.y = 300;
            particles.addComponent(cc.Sprite).spriteFrame = this_2.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this_2.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_2.getRandomNumber(0, colorsArray.length - 1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_2.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = 0.1;
            trail.getComponent(cc.MotionStreak).stroke = this_2.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            this_2.scheduleOnce(function () {
                cc.tween(particles).to(0.5, { width: 100, height: 100 }, { easing: "backOut" }).call(function () {
                    cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, 3 * cc.winSize.width / 4), _this.getRandomNumber(cc.winSize.height / 4, 3 * cc.winSize.height / 4))).call(function () {
                        var _loop_3 = function (j) {
                            var bullets = cc.instantiate(new cc.Node);
                            var bTrails = cc.instantiate(new cc.Node);
                            bullets.addComponent(cc.Sprite).spriteFrame = _this.dustImg;
                            bTrails.parent = bullets;
                            bTrails.addComponent(cc.MotionStreak).preview;
                            bTrails.getComponent(cc.MotionStreak).texture = _this.dustTrailImg;
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).minSeg = 0.1;
                            bTrails.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(10, 25);
                            bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                            bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).fastMode = true;
                            bullets.width = 100;
                            bullets.height = 100;
                            // bullets.angle = this.getRandomNumber(0, 359);
                            bullets.name = "bullets" + j;
                            bullets.parent = particles;
                            bullets.x = 0;
                            bullets.y = 0;
                            bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomNumber(0, colorsArray.length - 1)]);
                            var rngDistance = 500;
                            cc.tween(bullets).to(1, { x: _this.getRandomNumber(bullets.x - _this.getRandomNumber(100, 500), bullets.x + _this.getRandomNumber(100, 500)), y: _this.getRandomNumber(bullets.y - _this.getRandomNumber(100, 500), bullets.y + _this.getRandomNumber(100, 500)) }).start();
                            cc.tween(bullets).to(0.2, { opacity: 100 }).to(0.2, { opacity: 255 }).to(0.2, { opacity: 100 }).to(0.2, { opacity: 255 }).to(0.2, { opacity: 100, scale: 0 }).call(function () {
                                bullets.destroy();
                                particles.destroy();
                            }).start();
                        };
                        for (var j = 0; j < num2; j++) {
                            _loop_3(j);
                        }
                    }).start();
                }).start();
            }, 0.25 * (i + 1));
        };
        var this_2 = this;
        for (var i = 0; i < num1; i++) {
            _loop_2(i);
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "dustImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], NewClass.prototype, "dustTrailImg", void 0);
    __decorate([
        property(String)
    ], NewClass.prototype, "WheelAnimations", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXGRlbW9TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrTUM7UUEvTEcsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0Isa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLHFCQUFlLEdBQVksRUFBRSxDQUFDOztRQXdMOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF2TEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGlEQUFpRDtRQUNqRCwwQkFBMEI7UUFDMUIscURBQXFEO1FBQ3JELFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIseURBQXlEO1FBQ3pELFVBQVU7UUFDViwwQkFBMEI7UUFDMUIscURBQXFEO1FBQ3JELFdBQVc7SUFDZixDQUFDO0lBQ08sa0NBQWUsR0FBdkIsVUFBd0IsR0FBVSxFQUFDLEdBQVU7UUFDekMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFRCx1Q0FBb0IsR0FBcEIsVUFBcUIsS0FBSztRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxTQUFTLENBQUMsWUFB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U0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlHLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQzs0QkFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNoUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2hKLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQ0FDbEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7d0JBM0JmLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFO29DQUFwQixDQUFDO3lCQTZCUjtvQkFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBaEVsQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFBcEIsQ0FBQztTQWlFUjtJQUNMLENBQUM7SUEzTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxREFDYTtJQVRiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrTTVCO0lBQUQsZUFBQztDQWxNRCxBQWtNQyxDQWxNcUMsRUFBRSxDQUFDLFNBQVMsR0FrTWpEO2tCQWxNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBkdXN0SW1nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIGR1c3RUcmFpbEltZzpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBXaGVlbEFuaW1hdGlvbnM6U3RyaW5nIFtdPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IF9udW1PZlBhcnRpY2xlcyA9IDE1O1xyXG4gICAgICAgIC8vIHRoaXMucGxheUR1c3RBbmltKF9udW1PZlBhcnRpY2xlcywgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXlEdXN0QW5pbShfbnVtT2ZQYXJ0aWNsZXMsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfSwwLjI1KTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXlEdXN0QW5pbTIoX251bU9mUGFydGljbGVzLDEwLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH0sMC41KTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXlEdXN0QW5pbShfbnVtT2ZQYXJ0aWNsZXMsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfSwwLjc1KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjpudW1iZXIsbWF4Om51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1BsYXlXaGVlbEFuaW0oZXZlbnQpe1xyXG4gICAgICAgIGxldCBzcGluZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYHNwaW5lYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BpbmVOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGV2ZW50LnRhcmdldC5uYW1lLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUR1c3RBbmltKG51bTpudW1iZXIsIF9ub2RlOmNjLk5vZGUpe1xyXG4gICAgICAgIC8vIGRlY2xhcmUgYSBjYy5zcHJpdGVGcmFtZSBhYm92ZSBmb3IgcGFydGljbGVzIGltZ1xyXG4gICAgICAgIC8vIGRlY2xhcmUgYSBjYy5UZXh0dXJlMkQgYWJvdmUgZm9yIHRyYWlsIGltZ1xyXG4gICAgICAgIC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgcGFydGljbGVzIHNvdW5kRnhcclxuICAgICAgICAvLyBkZWNsYXJlIGFueSBjYy5BdWRpb0NsaXAgYWJvdmUgZm9yIHRyYWlsIHNvdW5kRnhcclxuICAgICAgICBsZXQgY29sb3JzQXJyYXk6c3RyaW5nIFtdID0gW2AjZmZmZmZmYCxgI2ZmZmYwMGAsYCNmZmYwMGZgLGAjZmYwMGZmYCxgI2YwMGZmZmAsYCMwMGZmZmZgLGAjZmYwMDAwYCxgI2YwMDAwZmAsYCMwMDAwZmZgXTtcclxuICAgICAgICBsZXQgcm5nX051bU9mUGFydGljbGVzID0gbnVtO1xyXG4gICAgICAgIGxldCBfb2Zmc2V0ID0gNTBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm5nX051bU9mUGFydGljbGVzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm5nWCA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgdHJhaWwgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5wYXJlbnQgPSBfbm9kZTtcclxuICAgICAgICAgICAgdHJhaWwucGFyZW50ID0gcGFydGljbGVzO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueCA9IHJuZ1g7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy55ID0gcm5nWTtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5kdXN0SW1nO1xyXG4gICAgICAgICAgICAvLyBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZVNvdW5kcztcclxuICAgICAgICAgICAgcGFydGljbGVzLndpZHRoID0gMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IHBhcnRpY2xlcy53aWR0aDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgK2k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChwYXJ0aWNsZXMuY29sb3IsIGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNvbG9yc0FycmF5Lmxlbmd0aC0xKV0pO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy5kdXN0VHJhaWxJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0cmFpbC5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTIsIDI0NCwgMCk7XHJcbiAgICAgICAgICAgIGxldCBybmdzY2FsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwLDMwMCk7XHJcbiAgICAgICAgICAgIGxldCBybmdFbnRyeVRpbWVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMC41LDEuNSk7XHJcbiAgICAgICAgICAgIGxldCBybmdUaW1lcjEgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLjEsMC4yKTtcclxuICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byhybmdUaW1lcjEsIHt3aWR0aDogcm5nc2NhbGUsIGhlaWdodDogcm5nc2NhbGV9LHtlYXNpbmc6YGJhY2tPdXRgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbyhybmdUaW1lcjEsIG5ldyBjYy5WZWMyKDMwMCwgMzAwKSwgLy9zdGFydFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS5oZWlnaHQpKSwgLy9jdXJ2ZSByYW5nZVxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS5oZWlnaHQpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKHJuZ0VudHJ5VGltZXIrMC41LHthbmdsZTogMH0se2Vhc2luZzpgY3ViaWNJbk91dGB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMjUse2FuZ2xlOiAxODB9LHtlYXNpbmc6YGN1YmljSW5PdXRgfSkuc3RhcnQoKS50bygwLjI1LHthbmdsZTogMzYwfSx7ZWFzaW5nOmBjdWJpY0luT3V0YH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4ocGFydGljbGVzKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oNCx7c2NhbGVYOiBwYXJ0aWNsZXMuc2NhbGVYICogLTF9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUse29wYWNpdHk6IDI1NX0se2Vhc2luZzpgY3ViaWNJbk91dGB9KS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXMub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byh0aGlzLmdldFJhbmRvbU51bWJlcigwLjI1LDAuNzUpLCB7b3BhY2l0eTp0aGlzLmdldFJhbmRvbU51bWJlcigwLDUwKX0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzLmdldFJhbmRvbU51bWJlcigwLjEsMC4yNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEsNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoNSwxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFkZVRpbWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy50cmFpbFNvdW5kcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBybmdUaW1lcjIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLjEsMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbyhybmdUaW1lcjIsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIC8vc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNjLndpblNpemUud2lkdGgpLCB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLmhlaWdodCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgY2Mud2luU2l6ZS5oZWlnaHQpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50byhybmdUaW1lcjIse2FuZ2xlOiAtcGFydGljbGVzLmFuZ2xlLzJ9LHtlYXNpbmc6YGN1YmljSW5PdXRgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKHJuZ1RpbWVyMiswLjUsIHtzY2FsZTogMH0se2Vhc2luZzogYGN1YmljSW5gfSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUR1c3RBbmltMihudW0xOm51bWJlciwgbnVtMjpudW1iZXIsIF9ub2RlOmNjLk5vZGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBkZUR1c3QyYCk7XHJcbiAgICAgICAgLy8gZGVjbGFyZSBhIGNjLnNwcml0ZUZyYW1lIGFib3ZlIGZvciBwYXJ0aWNsZXMgaW1nXHJcbiAgICAgICAgLy8gZGVjbGFyZSBhIGNjLlRleHR1cmUyRCBhYm92ZSBmb3IgdHJhaWwgaW1nXHJcbiAgICAgICAgLy8gZGVjbGFyZSBhbnkgY2MuQXVkaW9DbGlwIGFib3ZlIGZvciBwYXJ0aWNsZXMgc291bmRGeFxyXG4gICAgICAgIC8vIGRlY2xhcmUgYW55IGNjLkF1ZGlvQ2xpcCBhYm92ZSBmb3IgdHJhaWwgc291bmRGeFxyXG4gICAgICAgIGxldCBjb2xvcnNBcnJheTpzdHJpbmcgW10gPSBbYCNmZmZmZmZgLGAjZmZmZjAwYCxgI2ZmZjAwZmAsYCNmZjAwZmZgLGAjZjAwZmZmYCxgIzAwZmZmZmAsYCNmZjAwMDBgLGAjZjAwMDBmYCxgIzAwMDBmZmBdO1xyXG4gICAgICAgIGxldCBybmdfTnVtT2ZQYXJ0aWNsZXMgPSBudW0xO1xyXG4gICAgICAgIGxldCBfb2Zmc2V0ID0gNTBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtMTsgaSsrKXtcclxuICAgICAgICAgICAgLy8gbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgLy8gbGV0IHJuZ1kgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjYy53aW5TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHBhcnRpY2xlcyA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgbGV0IHRyYWlsID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMucGFyZW50ID0gX25vZGU7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSAzMDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy55ID0gMzAwO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmR1c3RJbWc7XHJcbiAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBhcnRpY2xlU291bmRzO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMud2lkdGggPSAwO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuaGVpZ2h0ID0gcGFydGljbGVzLndpZHRoO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuYW5nbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuekluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5uYW1lID0gYHBhcnRpY2xlc2AraTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgocGFydGljbGVzLmNvbG9yLCBjb2xvcnNBcnJheVt0aGlzLmdldFJhbmRvbU51bWJlcigwLCBjb2xvcnNBcnJheS5sZW5ndGgtMSldKTtcclxuICAgICAgICAgICAgdHJhaWwuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykucHJldmlldztcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMuZHVzdFRyYWlsSW1nO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID0gMC4xO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5zdHJva2UgPSB0aGlzLmdldFJhbmRvbU51bWJlcigxMCwgMjUpO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZmFzdE1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjUsIHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH0se2Vhc2luZzpgYmFja091dGB9KS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygxLCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCBcclxuICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCwgY2Mud2luU2l6ZS53aWR0aCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55LCBjYy53aW5TaXplLmhlaWdodCkpLCBcclxuICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihjYy53aW5TaXplLndpZHRoLzQsIDMqIGNjLndpblNpemUud2lkdGgvNCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGNjLndpblNpemUuaGVpZ2h0LzQsIDMqIGNjLndpblNpemUuaGVpZ2h0LzQpKSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbnVtMjsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidWxsZXRzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJUcmFpbHMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5kdXN0SW1nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5wYXJlbnQgPSBidWxsZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy5kdXN0VHJhaWxJbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAwLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwLCAyNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVHJhaWxzLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlRyYWlscy5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLndpZHRoID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5oZWlnaHQgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidWxsZXRzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzU5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMubmFtZSA9IGBidWxsZXRzYCtqOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMucGFyZW50ID0gcGFydGljbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRzLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChwYXJ0aWNsZXMuY29sb3IsIGNvbG9yc0FycmF5W3RoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGNvbG9yc0FycmF5Lmxlbmd0aC0xKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJuZ0Rpc3RhbmNlID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0cykudG8oMSwge3g6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGJ1bGxldHMueCAtIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApLCBidWxsZXRzLnggKyB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsNTAwKSksIHk6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGJ1bGxldHMueSAtIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDEwMCw1MDApLCBidWxsZXRzLnkgKyB0aGlzLmdldFJhbmRvbU51bWJlcigxMDAsNTAwKSl9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0cykudG8oMC4yLHtvcGFjaXR5OiAxMDB9KS50bygwLjIse29wYWNpdHk6IDI1NX0pLnRvKDAuMix7b3BhY2l0eTogMTAwfSkudG8oMC4yLHtvcGFjaXR5OiAyNTV9KS50bygwLjIse29wYWNpdHk6IDEwMCwgc2NhbGU6IDB9KS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sMC4yNSooaSsxKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/CustomWidget0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '456cfoyhJpKLrlITHmDrQCk', 'CustomWidget0');
// Games/Scripts/CustomWidget0.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXEN1c3RvbVdpZGdldDAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBcUZDO1FBbEZHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBNEVyQyxDQUFDO0lBMUVHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFLRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxD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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Qb3NpdGlvbmluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0xlZnRDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JpZ2h0Q29ybmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGlzVG9wQ29ybmVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaXNCb3R0b21Db3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdENvcm5lcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdExlZnRDb3JuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdFJpZ2h0Q29ybmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBwb3NpdGlvbkF0TGVmdENvcm5lcigpIHtcclxuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCArIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG5cclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY2FudmFzVG9wWSA9IF9wb3NpdGlvbi55O1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNMZWZ0WCA9X3Bvc2l0aW9uLng7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiK19wb3NpdGlvbilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGlvbkF0VG9wQ29ybmVyKCkge1xyXG4gICAgLy8gICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vICAgICBsZXQgX29mZlNldCA9IDIwO1xyXG4gICAgLy8gICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XHJcbiAgICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xyXG4gICAgLy8gICAgIF9wb3NpdGlvbi54ID0gLXRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gMiArIHRoaXMubm9kZS5oZWlnaHQgLyAyXHJcbiAgICAvLyAgICAgICAgIC0gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS55ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodCArIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgIC8vICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJQb3NpdGlvbiBpcyBcIitwb3NpdGlvbilcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwb3NpdGlvbkF0UmlnaHRDb3JuZXIoKSB7XHJcbiAgICAgICAgbGV0IF9wb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBfb2ZmU2V0ID0gMjA7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiVGl0bGVcIil7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYy5TY2VuZS5uYW1lXCIsKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0TGVmdENvcm5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0UmlnaHRDb3JuZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/titleScript1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77fe26jbH5NorU508z3jPET', 'titleScript1');
// Games/Scripts/titleScript1.ts

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
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
        // playNextAnim(){
        //     this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        //     this.node.getChildByName("curtain").on('finished',  this.finishedAnim,    this)
        // }
        // finishedAnim(){
        //     this.scheduleOnce(()=>{
        //         cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        //     }, 0.5)
        // }
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        // this.LoadQuestion();
        cc.director.loadScene("1");
        // this.node.getChildByName("Ch").getComponent(cc.Animation).play();
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
        }, 0.1);
        this.scheduleOnce(function () {
            _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, 0.5);
        // this.finishedAnim();
    };
    NewClass.prototype.loadData = function () {
        cc.resources.load("/Quiz_01_01_b");
        cc.resources.load("/3");
        cc.resources.load("/8");
    };
    NewClass.prototype.LoadQuestion = function () {
        var _this = this;
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            var _jsonData = _jsonFile["json"];
            _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            _this.loadData();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHRpdGxlU2NyaXB0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdFQztRQXJFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFZixnQkFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1Qix1QkFBaUIsR0FBYSxLQUFLLENBQUM7UUFDcEMsV0FBSyxHQUFRLENBQUMsQ0FBQzs7UUFrRHZCLGtCQUFrQjtRQUNsQiw2RUFBNkU7UUFDN0Usc0ZBQXNGO1FBQ3RGLElBQUk7UUFFSixrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLG1GQUFtRjtRQUNuRixjQUFjO1FBQ2QsSUFBSTtJQUVSLENBQUM7SUF4REcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5Qix1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0Isb0VBQW9FO0lBRXhFLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFbEIsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsdUJBQXVCO0lBSzNCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZHLHNCQUFzQjtRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDdEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLFNBQVMsR0FBVyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdFNUI7SUFBRCxlQUFDO0NBeEVELEFBd0VDLENBeEVxQyxFQUFFLENBQUMsU0FBUyxHQXdFakQ7a0JBeEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHByaXZhdGUgcHJvZmlsZVNldCA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdXNlckFjdGlvbiA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSB0aXRsZVByb2dyZXNzRG9uZSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGltZXI6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIGRhdGE7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoYDFgKTtcclxuICAgICAgICAvLyB0aGlzLkxvYWRRdWVzdGlvbigpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShgMWApO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNoXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2hhcmFjdGVyXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LDAuMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgfSwwLjUpO1xyXG4gICAgICAgIC8vIHRoaXMuZmluaXNoZWRBbmltKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSgpe1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGAvUXVpel8wMV8wMV9iYCk7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYC8zYCk7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYC84YCk7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFF1ZXN0aW9uKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYURhdGEpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9lcnJvci5tZXNzYWdlIHx8IF9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IF9qc29uRGF0YTogb2JqZWN0ID0gX2pzb25GaWxlW1wianNvblwiXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfanNvbkRhdGFbXCJkYXRhXCJdKSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHBsYXlOZXh0QW5pbSgpe1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikub24oJ2ZpbmlzaGVkJywgIHRoaXMuZmluaXNoZWRBbmltLCAgICB0aGlzKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZpbmlzaGVkQW5pbSgpe1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/IData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74606DA4ldPDYqRa0tppnfF', 'IData');
// Games/Scripts/IData.ts

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
        this.answerObject = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXElEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFDSSxpQkFBWSxHQUFZLENBQUMsQ0FBQztRQUMxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFZLENBQUMsQ0FBQztRQUMvQixhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVksRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLDBCQUFxQixHQUFVLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFoQlksS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQWdCakI7SUFBRCxZQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBJRGF0YSAge1xyXG4gICAgdG90YWxPcHRpb25zIDogbnVtYmVyID0gMDtcclxuICAgIFN1YkltYWdlOiBudW1iZXIgPSAwO1xyXG4gICAgd3JvbmdBbnN3ZXJzTGltaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgcXVlc3Rpb24gOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcXVlc3Rpb25Tb3VuZCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBhbnN3ZXJPYmplY3QgOiBzdHJpbmc9XCJcIjtcclxuICAgIHBvc2l0aW9uVHlwZSA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBmZWVkYmFja3R5cGUgOiBzdHJpbmdbXT1bXTtcclxuICAgIHNjYWxlQXJyYXkgOiBudW1iZXJbXT1bXTtcclxuICAgIGFuc3dlcnMgOiBudW1iZXJbXT1bXTtcclxuICAgIFxyXG4gICAgcG9zaXRpb25zIDogY2MuVmVjMltdPVtdO1xyXG4gICAgYW5zd2VycG9zaXRpb25zIDogY2MuVmVjMltdPVtdO1xyXG4gICAgb3B0aW9uQW5pbWF0aW9uSW1hZ2VzOnN0cmluZ1tdPVtdO1xyXG4gICAgdGV4dEFycmF5IDogc3RyaW5nW109W107XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/titleScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b451edfN1IC5ypF1ihK51X', 'titleScript');
// Games/Scripts/titleScript.ts

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
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
        // playNextAnim(){
        //     this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        //     this.node.getChildByName("curtain").on('finished',  this.finishedAnim,    this)
        // }
        // finishedAnim(){
        //     this.scheduleOnce(()=>{
        //         cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        //     }, 0.5)
        // }
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        // this.LoadQuestion();
        cc.director.loadScene("1");
        // this.node.getChildByName("Ch").getComponent(cc.Animation).play();
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
        }, 0.1);
        this.scheduleOnce(function () {
            _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, 0.5);
        // this.finishedAnim();
    };
    NewClass.prototype.loadData = function () {
        cc.resources.load("/Quiz_01_01_b");
        cc.resources.load("/3");
        cc.resources.load("/8");
    };
    NewClass.prototype.LoadQuestion = function () {
        var _this = this;
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            var _jsonData = _jsonFile["json"];
            _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            _this.loadData();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFNjcmlwdHNcXHRpdGxlU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0VDO1FBckVHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUVmLGdCQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLHVCQUFpQixHQUFhLEtBQUssQ0FBQztRQUNwQyxXQUFLLEdBQVEsQ0FBQyxDQUFDOztRQWtEdkIsa0JBQWtCO1FBQ2xCLDZFQUE2RTtRQUM3RSxzRkFBc0Y7UUFDdEYsSUFBSTtRQUVKLGtCQUFrQjtRQUNsQiw4QkFBOEI7UUFDOUIsbUZBQW1GO1FBQ25GLGNBQWM7UUFDZCxJQUFJO0lBRVIsQ0FBQztJQXhERyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLHVCQUF1QjtRQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixvRUFBb0U7SUFFeEUsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFlQztRQWJHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVsQixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRSxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDUCx1QkFBdUI7SUFLM0IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsc0JBQXNCO1FBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLEVBQUUsU0FBUztZQUN0RCxJQUFJLE1BQU0sRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU87YUFDVjtZQUNELElBQUksU0FBUyxHQUFXLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0U1QjtJQUFELGVBQUM7Q0F4RUQsQUF3RUMsQ0F4RXFDLEVBQUUsQ0FBQyxTQUFTLEdBd0VqRDtrQkF4RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9maWxlU2V0IDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB1c2VyQWN0aW9uIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHRpdGxlUHJvZ3Jlc3NEb25lIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgZGF0YTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShgMWApO1xyXG4gICAgICAgIC8vIHRoaXMuTG9hZFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGAxYCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2hcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFyYWN0ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sMC4xKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJ0YWluXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9LDAuNSk7XHJcbiAgICAgICAgLy8gdGhpcy5maW5pc2hlZEFuaW0oKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCl7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYC9RdWl6XzAxXzAxX2JgKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgLzNgKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgLzhgKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkUXVlc3Rpb24oKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdhRGF0YSk7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJzdG9yeUJvYXJkXCIsIE9iamVjdCwgKF9lcnJvciwgX2pzb25GaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgX2pzb25EYXRhOiBvYmplY3QgPSBfanNvbkZpbGVbXCJqc29uXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9qc29uRGF0YVtcImRhdGFcIl0pKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gcGxheU5leHRBbmltKCl7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKS5vbignZmluaXNoZWQnLCAgdGhpcy5maW5pc2hlZEFuaW0sICAgIHRoaXMpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZmluaXNoZWRBbmltKCl7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

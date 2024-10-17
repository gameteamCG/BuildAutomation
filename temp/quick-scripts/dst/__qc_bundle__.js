
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
require('./assets/Games/TapToFind/Scripts/CustomWidget');
require('./assets/Games/TapToFind/Scripts/IData');
require('./assets/Games/TapToFind/Scripts/StartGame');
require('./assets/Games/TapToFind/Scripts/endScreen');
require('./assets/Games/TapToFind/Scripts/gameplay');
require('./assets/Games/TapToFind/Scripts/globalVariables');
require('./assets/Games/TapToFind/Scripts/titleScript');
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
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1734yGyoRLAJc6pq/Ly4ow', 'endScreen');
// Games/TapToFind/Scripts/endScreen.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9lbmRTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaVVDO1FBNVRHLHdCQUF3QjtRQUNoQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBVyxHQUFXLENBQUMsQ0FBQzs7SUFvVHBDLENBQUM7SUFsVEcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFBQSxpQkFxQ0M7UUFwQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUM5RSw0REFBNEQ7UUFDNUQsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FB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QUFBOzt3QkFBcEMsUUFBUSxHQUFHLFNBQXlCO3dCQUM3QixxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQzVCLFVBQVUsR0FBRzs0QkFDakIsSUFBSSxJQUFJLENBQ04sQ0FBQyxJQUFJLENBQUMsRUFDTixnQ0FBZ0MsRUFDaEM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs2QkFDbkMsQ0FDSDt5QkFDRCxDQUFDO3dCQUNJLFNBQVMsR0FBRzs0QkFDaEIsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCLENBQUM7d0JBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7S0FDOUI7SUExVEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUpiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpVTVCO0lBQUQsZUFBQztDQWpVRCxBQWlVQyxDQWpVcUMsRUFBRSxDQUFDLFNBQVMsR0FpVWpEO2tCQWpVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vU3RhcnRHYW1lXCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3M6Y2MuQXVkaW9DbGlwO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIGZpbGxpbmcxOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmaWxsaW5nMjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmlsbGluZzM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNob3dOdW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0xOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBudW0yOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VHdlZW46IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBsYXllclNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc2hhcmVcIikueSA9IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNUb3BZO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0aW1lciBcIitnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcik7XHJcbiAgICAgICAgLy9nbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lciA9IDE5MDtcclxuICAgICAgICAvL2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50ID0gMTtcclxuICAgICAgICB0aGlzLmZpbmRQbGF5ZXJTY29yZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR3ZWVuID0gMTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlUGFyZW50TWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXZlcmFnZUtpZHNNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLm51bTEgPSB0aGlzLmdldFJhbmRvbU51bWJlcig1MCw3NSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRGaWxsaW5nUmFuZ2UoXCIxXCIpO1xyXG4gICAgICAgIHRoaXMubnVtMiA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDgwLDkwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEZpbGxpbmdSYW5nZShcIjJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRGaWxsaW5nUmFuZ2UoXCIzXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlUGFyZW50TWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjaGlsZFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkudG8oMSwgeyBmaWxsUmFuZ2U6IHRoaXMuZmlsbGluZzEgfSkuc3RhcnQoKTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUd2VlbiA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd051bTEgPSAwO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXZlcmFnZUtpZHNNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcImNoaWxkXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKS50bygxLCB7IGZpbGxSYW5nZTogdGhpcy5maWxsaW5nMiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFR3ZWVuID0gMztcclxuICAgICAgICAgICAgdGhpcy5zaG93TnVtMSA9IDA7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcImNoaWxkXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKS50bygxLCB7IGZpbGxSYW5nZTogdGhpcy5maWxsaW5nMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjpudW1iZXIsbWF4Om51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2hvd051bTE8IHRoaXMubnVtMSAmJiB0aGlzLmN1cnJlbnRUd2Vlbj09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd051bTErPTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF2ZXJhZ2VQYXJlbnRNZXRlclwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmROdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9KE1hdGgucm91bmQodGhpcy5zaG93TnVtMSkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2hvd051bTE9PXRoaXMubnVtMSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNob3dOdW0xPCB0aGlzLm51bTIgJiYgdGhpcy5jdXJyZW50VHdlZW49PTIpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOdW0xKz0xO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmVyYWdlS2lkc01ldGVyXCIpLmdldENoaWxkQnlOYW1lKFwicm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZE51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0oTWF0aC5yb3VuZCh0aGlzLnNob3dOdW0xKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zaG93TnVtMT09dGhpcy5udW0yKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50VHdlZW4gPSAzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3dOdW0xID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNob3dOdW0xPCB0aGlzLnBsYXllclNjb3JlICYmIHRoaXMuY3VycmVudFR3ZWVuPT0zKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93TnVtMSs9MTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyTWV0ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJvdW5kTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPShNYXRoLnJvdW5kKHRoaXMuc2hvd051bTEpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNob3dOdW0xPT10aGlzLnBsYXllclNjb3JlKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50VHdlZW4gPSAzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3dOdW0xID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGxheWVyU2NvcmUoKXtcclxuICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudD09Nil7XHJcbiAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gOTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA5MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj01MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTYxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD05MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50PT01KXtcclxuICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA5NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDg1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTMxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD01MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTYwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA2NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTkxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTEyMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMzU7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudD09NCl7XHJcbiAgICAgICAgICAgIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTMwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA2MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0zMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTUxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD02MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NjEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTkwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj05MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTIwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMjEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE4O1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnJpZ2h0QW5zd2VyQ291bnQ9PTMpe1xyXG4gICAgICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAzMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj01MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9NjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDI1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTYxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD05MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5yaWdodEFuc3dlckNvdW50PT0yKXtcclxuICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTMxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD01MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49NTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTYwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSAyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTkxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0xMjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MTIxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnJpZ2h0QW5zd2VyQ291bnQ9PTEpe1xyXG4gICAgICAgICAgICBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9MTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTExICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD0zMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49MzEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI+PTUxICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPD02MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj02MSAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcjw9OTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lcj49OTEgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXI8PTEyMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyPj0xMjEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbGxpbmdSYW5nZShuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIGlmKG5hbWUgPT0gXCIxXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxpbmcxPXRoaXMubnVtMSAqICgwLjUvMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYW1lID09IFwiMlwiKXtcclxuICAgICAgICAgICAgdGhpcy5maWxsaW5nMj10aGlzLm51bTIgKiAoMC41LzEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobmFtZSA9PSBcIjNcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbGluZzM9dGhpcy5wbGF5ZXJTY29yZSAqICgwLjUvMTAwKTtcclxuICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCBcIlBsYXllclNjb3JlXCIsIHtcclxuICAgICAgICAgICAgICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiUGxheWVyIFNjb3JlXCIsXHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnBsYXllclNjb3JlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjYWxsTW9yZVF1aXplcyhldmVudDpjYy5FdmVudCl7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIGd0YWcoJ2V2ZW50JywgbmFtZSwge1xyXG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiTW9yZSBRdWl6IFNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnBsYXllclNjb3JlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWIxXCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL2dlb2dyYXBoeS9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWIyXCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL3NjaWVuY2UvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwic3ViM1wiKXtcclxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3F1aXoubGl0dGxlc2luZ2hhbS5tZS9pbmRlcGVuZGVuY2VkYXkvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwic3ViNFwiKXtcclxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3F1aXoubGl0dGxlc2luZ2hhbS5tZS9jb3VudHJpZXNhbmRmbGFncy9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJzdWI1XCIpe1xyXG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcXVpei5saXR0bGVzaW5naGFtLm1lL25hdGlvbmFsc3ltYm9scy9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxTaGFyZUFQSSgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FsbCAgc2hhcmUgYXBpJCQkJCQkXCIpO1xyXG4gICAgICAgIGxldCB0ZXh0MSA9IFwiTGV0J3Mgc2VlIGlmIHlvdSBjYW4gYmVhdCBteSBzY29yZSBpbiB0aGlzIGZ1biB0cml2aWE/XCJcclxuICAgICAgICAvL2xldCB0ZXh0MiA9IFwiVGFrZSB0aGlzIFNjaWVuY2UgVHJpdmlhLiBJZiB5b3Ugc2NvcmUgNTAlIGFuZCBhYm92ZSwgdGFrZSBhIGJvdywgeW91IGFyZSBhIGNlcnRpZmllZCBHRU5JVVMhXCI7XHJcbiAgICAgICAgLy9sZXQgdGV4dDMgPSBcIlRha2UgdGhpcyBTY2llbmNlIFRyaXZpYS4gSWYgeW91IHNjb3JlIDUwJSBhbmQgYWJvdmUsIHRha2UgYSBib3csIHlvdSBhcmUgYSBjZXJ0aWZpZWQgR0VOSVVTIVwiO1xyXG4gICAgICAgIC8vbGV0IHRleHQ0ID0gXCJUYWtlIHRoaXMgU2NpZW5jZSBUcml2aWEuIElmIHlvdSBzY29yZSA1MCUgYW5kIGFib3ZlLCB0YWtlIGEgYm93LCB5b3UgYXJlIGEgY2VydGlmaWVkIEdFTklVUyFcIjtcclxuICAgICAgICBsZXQgdGV4dEFycmF5ID0gW3RleHQxXTtcclxuICAgICAgICAvL2xldCB0ZXh0QXJyYXkgPSBbdGV4dDEsIHRleHQyLCB0ZXh0MywgdGV4dDRdO1xyXG4gICAgICAgIGxldCBuMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRleHRBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNoYXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG93IGJpZyBhIHNjaWVuY2UgYnVmZiBhcmUgeW91PycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0QXJyYXlbbjFdLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9xdWl6LmxpdHRsZXNpbmdoYW0ubWUvaW5kZXBlbmRlbmNlZGF5JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJykpXHJcbiAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgIGNhdGNoICgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hhcmVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9yZWN0YW5nbGVcIik7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICBjb25zdCBmaWxlc0FycmF5ID0gW1xyXG4gICAgICAgICAgbmV3IEZpbGUoXHJcbiAgICAgICAgICAgIFtibG9iXSxcclxuICAgICAgICAgICAgJy9UYXBUb0ZpbmQvYXNzZXRzL3NoYXJlcGljLmpwZycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL2pwZWdcIixcclxuICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgc2hhcmVEYXRhID0ge1xyXG4gICAgICAgICAgZmlsZXM6IGZpbGVzQXJyYXksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuYXZpZ2F0b3Iuc2hhcmUoc2hhcmVEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4iXX0=
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
cc._RF.push(module, '4afdaw/Nj1JaaegiEpt4aAv', 'empty');
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
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/CustomWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '456cfoyhJpKLrlITHmDrQCk', 'CustomWidget');
// Games/TapToFind/Scripts/CustomWidget.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9DdXN0b21XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBcUZDO1FBbEZHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBNEVyQyxDQUFDO0lBMUVHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFLRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUs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bUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Qb3NpdGlvbmluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0xlZnRDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JpZ2h0Q29ybmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGlzVG9wQ29ybmVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaXNCb3R0b21Db3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdENvcm5lcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdExlZnRDb3JuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BdFJpZ2h0Q29ybmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBwb3NpdGlvbkF0TGVmdENvcm5lcigpIHtcclxuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCArIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG5cclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY2FudmFzVG9wWSA9IF9wb3NpdGlvbi55O1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jYW52YXNMZWZ0WCA9X3Bvc2l0aW9uLng7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiK19wb3NpdGlvbilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGlvbkF0VG9wQ29ybmVyKCkge1xyXG4gICAgLy8gICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vICAgICBsZXQgX29mZlNldCA9IDIwO1xyXG4gICAgLy8gICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XHJcbiAgICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xyXG4gICAgLy8gICAgIF9wb3NpdGlvbi54ID0gLXRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gMiArIHRoaXMubm9kZS5oZWlnaHQgLyAyXHJcbiAgICAvLyAgICAgICAgIC0gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS55ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodCArIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgIC8vICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJQb3NpdGlvbiBpcyBcIitwb3NpdGlvbilcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwb3NpdGlvbkF0UmlnaHRDb3JuZXIoKSB7XHJcbiAgICAgICAgbGV0IF9wb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBfb2ZmU2V0ID0gMjA7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCAtIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiVGl0bGVcIil7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYy5TY2VuZS5uYW1lXCIsKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0TGVmdENvcm5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0UmlnaHRDb3JuZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/IData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74606DA4ldPDYqRa0tppnfF', 'IData');
// Games/TapToFind/Scripts/IData.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9JRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO1FBQ0ksaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBaUIsR0FBWSxDQUFDLENBQUM7UUFDL0IsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUMvQiwwQkFBcUIsR0FBVSxFQUFFLENBQUM7UUFDbEMsY0FBUyxHQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaEJZLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FnQmpCO0lBQUQsWUFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgSURhdGEgIHtcclxuICAgIHRvdGFsT3B0aW9ucyA6IG51bWJlciA9IDA7XHJcbiAgICBTdWJJbWFnZTogbnVtYmVyID0gMDtcclxuICAgIHdyb25nQW5zd2Vyc0xpbWl0IDogbnVtYmVyID0gMDtcclxuICAgIHF1ZXN0aW9uIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHF1ZXN0aW9uU291bmQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYW5zd2VyT2JqZWN0IDogc3RyaW5nW109W107XHJcbiAgICBwb3NpdGlvblR5cGUgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmVlZGJhY2t0eXBlIDogc3RyaW5nW109W107XHJcbiAgICBzY2FsZUFycmF5IDogbnVtYmVyW109W107XHJcbiAgICBhbnN3ZXJzIDogbnVtYmVyW109W107XHJcbiAgICBcclxuICAgIHBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIGFuc3dlcnBvc2l0aW9ucyA6IGNjLlZlYzJbXT1bXTtcclxuICAgIG9wdGlvbkFuaW1hdGlvbkltYWdlczpzdHJpbmdbXT1bXTtcclxuICAgIHRleHRBcnJheSA6IHN0cmluZ1tdPVtdO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/titleScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b451edfN1IC5ypF1ihK51X', 'titleScript');
// Games/TapToFind/Scripts/titleScript.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy90aXRsZVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSEM7UUFuSEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsZ0JBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsdUJBQWlCLEdBQWEsS0FBSyxDQUFDO1FBQ3BDLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBMkczQixDQUFDO0lBdkdHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksNkVBQTZFO0lBQ2pGLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksNkNBQTZDO1FBQzdDLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsK0VBQStFO1FBQy9FLFNBQVM7UUFFVCxxQ0FBcUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxnQkFBZ0IsQ0FBQztRQUMzRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FB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RSxDQUFDLENBQUMsQ0FBQztTQUVUO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNMLENBQUM7SUFsSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0g1QjtJQUFELGVBQUM7Q0F0SEQsQUFzSEMsQ0F0SHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0hqRDtrQkF0SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9maWxlU2V0IDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB1c2VyQWN0aW9uIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHRpdGxlUHJvZ3Jlc3NEb25lIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjpudW1iZXI9MDtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyKz0xO1xyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFkaW5nXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCJQaWNrIGFuIEF2YXRhclwiO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwic3ViUHJvZmlsZXNcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiUGljayBhbiBBdmF0YXJcIjtcclxuICAgICAgICAvLyB9LCAyLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzZXRQcm9maWxlUGljKGV2ZW50OiBjYy5FdmVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZ2EoXHJcbiAgICAgICAgLy8gICAgICdzZW5kJyxcclxuICAgICAgICAvLyAgICAgJ2V2ZW50JyxcclxuICAgICAgICAvLyAgICAgW1wiSW1hZ2VcIl0sXHJcbiAgICAgICAgLy8gICAgIFtcIlRhcFwiXSxcclxuICAgICAgICAvLyAgICAgW1wiU2VsZWN0IFByb2ZpbGVcIl0sXHJcbiAgICAgICAgLy8gICAgIFsxXVxyXG4gICAgICAgIC8vICk7XHJcblxyXG5cclxuICAgICAgICBndGFnKCdldmVudCcsIFwiUHJvZmlsZV9TZWxlY3Rpb25cIiwge1xyXG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiU2VsZWN0IFByb2ZpbGVcIixcclxuICAgICAgICAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighdGhpcy5wcm9maWxlU2V0KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlU2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5wbGF5ZXJJRCA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikueSsyNjYgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHdpZHRoOiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLndpZHRoIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBoZWlnaHQ6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikuaGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiR2V0IDQvNiBxdWVzdGlvbnMgY29ycmVjdD9cIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlUHJvZ3Jlc3NcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKSlcclxuICAgICAgICAgICAgICAgIC50byg1LCB7IHdpZHRoOiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PTUgJiYgdGhpcy51c2VyQWN0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcj0wO1xyXG4gICAgICAgICAgICAvL3RoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVByb2dyZXNzXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMywgeyB3aWR0aDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHYW1lUGxheSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlUHJvZ3Jlc3NEb25lICYmIHRoaXMucHJvZmlsZVNldCl7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86ce8/R5uZKp6N43HE2XR9U', 'StartGame');
// Games/TapToFind/Scripts/StartGame.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9TdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBNEIxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXVRQztRQXBRRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUluQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUM1QixvQ0FBb0M7UUFDNUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFDcEMsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsZUFBUyxHQUFtQixFQUFFLENBQUM7O1FBNk4vQixnQkFBZ0I7SUFDcEIsQ0FBQztrQkF2UW9CLFNBQVM7SUEyQzFCLHNCQUFXLHFCQUFRO2FBQW5CO1lBQ0ksT0FBTyxXQUFTLENBQUMsUUFBUSxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDdEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLDJDQUEyQztRQUMzQyxXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0QsbUNBQWUsR0FBZixVQUFnQixTQUFpQjtRQUM3Qix3QkFBd0I7UUFDeEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsd0NBQW9CLEdBQXBCLFVBQXFCLFNBQWlCO1FBQ2xDLHdCQUF3QjtRQUN4QixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQUEsaUJBMkVDO1FBMUVHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlELDhDQUE4QztZQUM5QyxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLG1DQUFtQztZQUNuQyxJQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTFELGlEQUFpRDtZQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0Msc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsZ0VBQWdFO1lBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFFckQscUVBQXFFO1lBRXJFLHVDQUF1QztZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFFdkMsMERBQTBEO1lBQzFELGlCQUFpQjtZQUNqQix1REFBdUQ7WUFDdkQsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUix1REFBdUQ7WUFDdkQsd0hBQXdIO1lBQ3hILE1BQU07WUFFTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQzNCLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxxREFBcUQ7WUFDckQsa0JBQWtCO1NBQ3JCO2FBQ0k7WUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUN4RCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzdCLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBTSxRQUFRLEdBQWUsU0FBUyxDQUFDLElBQWtCLENBQUM7Z0JBRTFELHNDQUFzQztnQkFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QyxnRUFBZ0U7Z0JBQ2hFLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBRXJELHVDQUF1QztnQkFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUN2QyxtRUFBbUU7Z0JBQ25FLHdHQUF3RztnQkFDeEcsd0hBQXdIO2dCQUN4SCxNQUFNO2dCQUNOLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtvQkFFM0IsUUFBUSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzlFLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTt3QkFDeEIsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztxQkFDN0Y7b0JBQ0QsK0VBQStFO29CQUMvRSwrRUFBK0U7Z0JBQ25GLENBQUMsQ0FBQyxDQUFDO2dCQUNILHFEQUFxRDtnQkFDckQsMEZBQTBGO1lBQzlGLENBQUMsQ0FBQyxDQUFDO1NBRU47SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM1QyxnREFBZ0Q7UUFDaEQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDOUI7YUFDSTtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksSUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztRQUtELElBQUksUUFBUSxHQUFXLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUNJLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUNJLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUNJO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDeEI7UUFFRCxrRUFBa0U7UUFDbEUsb0RBQW9EO1FBQ3BELHNEQUFzRDtRQUN0RCxrQkFBa0I7UUFHbEIsa0NBQWtDO1FBRWxDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Q7YUFDSTtZQUNELHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDN0M7UUFFRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUczRSxxQ0FBcUM7SUFHekMsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxLQUFlO1FBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JDO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxRQUErQztRQUM5RSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUN0RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUE2QztRQUMxRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNwRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBdlBjLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBVjFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZDQUNJO0lBZXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFRdkI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBNUJQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1UTdCO0lBQUQsZ0JBQUM7Q0F2UUQsQUF1UUMsQ0F2UXNDLEVBQUUsQ0FBQyxTQUFTLEdBdVFsRDtrQkF2UW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuICAgIEdhbWVJRDogc3RyaW5nO1xyXG4gICAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gICAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICAgIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gICAgc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW86IGJvb2xlYW47XHJcbiAgICBpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcbiAgICBpc09wdGlvbkltYWdlOiBib29sZWFuO1xyXG4gICAgbnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XHJcbiAgICBvcHRpb25UZXh0czogc3RyaW5nW107XHJcbiAgICBvcHRpb25JbWFnZXM6IHN0cmluZ1tdOyAvLyBUaGlzIHdpbGwgZWl0aGVyIGNvbnRhaW4gdGV4dCBvcHRpb25zIG9yIGltYWdlIG5hbWVzIGJhc2VkIG9uIGlzT3B0aW9uVGV4dCBmbGFnXHJcbiAgICBjb3JyZWN0QXVkaW9zOiBzdHJpbmdbXTtcclxuICAgIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0R2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICB2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuICAgIGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcbiAgICBjdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG5cclxuICAgIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgdGVtcGxhdGVUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgb3B0aW9uTGF5b3V0OiBzdHJpbmcgPSBcImhvcml6b250YWxcIjtcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9lcnJvci5tZXNzYWdlIHx8IF9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAvL2NjLmdhbWUucmVtb3ZlUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBpbWFnZU5hbWUucmVwbGFjZSgvXFwucG5nJC9nLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVKU09OZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlICdqc29uJyBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXHJcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRKc29uID0gdXJsUGFyYW1zLmdldCgnanNvbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcHRpb25MYXlvdXQgQEBAQEBAQEBAQEBAQEBAQCA9IFwiLCB0aGlzLm9wdGlvbkxheW91dCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lX2RhdGEnLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24uaXNPcHRpb25JbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5vcHRpb25JbWFnZXMgPSBxdWVzdGlvbi5vcHRpb25JbWFnZXMubWFwKG9wdGlvbiA9PiB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nRGF0YSgpOyAvLyBZb3UgY2FuIGNhbGwgYSBmdW5jdGlvbiB0byBsb2cgdGhlIGRhdGEgb3IgdXNlIGl0IGluIG90aGVyIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1zaG93ZWRTY3JlZW4tLVRpdGxlXCIpXHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgbGV2ZWwgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxldmVsXCIpO1xyXG4gICAgICAgIHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XHJcbiAgICAgICAgaWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlSlNPTmRhdGEoKTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuICAgICAgICBpZiAoYWdlVmFsdWUgPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhZ2VWYWx1ZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFnZVZhbHVlID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5JbnRyb19hdWRpbztcclxuICAgICAgICAvLyAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLkludHJvX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuXHJcblxyXG5cclxuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkludHJvMlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGxldmVsKSkge1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gcGFyc2VJbnQobGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuXHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92529e0bmlFg4etSHkGHN2l', 'globalVariables');
// Games/TapToFind/Scripts/globalVariables.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9nbG9iYWxWYXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR2hCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLHlCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyxtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLFlBQVksQ0FBQztRQUN2QyxZQUFZO1FBRUwsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzQmpDLENBQUM7d0JBMUNvQixlQUFlO0lBc0JoQyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLGlCQUFlLENBQUMsUUFBUSxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTDtJQUlBLENBQUM7SUFHRCxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7O0lBcEJjLHdCQUFRLEdBQW1CLElBQUksQ0FBQztJQWxCL0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7aURBQ2M7SUFOTixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMENuQztJQUFELHNCQUFDO0NBMUNELEFBMENDLENBMUM0QyxFQUFFLENBQUMsU0FBUyxHQTBDeEQ7a0JBMUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxWYXJpYWJsZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGFuaW1hdGlvbkVudHJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXlFZmZlY3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uRXhpdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgY2FudmFzVG9wWTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNMZWZ0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByaWdodEFuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGxheWVySUQ6IHN0cmluZyA9IFwiSURfZGVmYXVsdFwiO1xyXG4gICAgLy9wdWJsaWMgZ2E7XHJcblxyXG4gICAgcHVibGljIGZpbGxSYW5nZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOmdsb2JhbFZhcmlhYmxlcyA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsVmFyaWFibGVzLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/TapToFind/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa156p3gAtEIKy7RL2BRjec', 'gameplay');
// Games/TapToFind/Scripts/gameplay.ts

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
        _this.defaultTime = 15;
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
            _this.node.getChildByName("Question").getComponent(cc.Label).string = _this.question;
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
                if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
                    this.setProgressBar();
                    // gtag('event', "LevelCompleted_" + globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                    globalVariables_1.default.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                    // this.scheduleOnce(() => {
                    //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                    //     this.node.getComponent(cc.AudioSource).play();
                    // }, 3);
                    this.scheduleOnce(function () {
                        _this.destroyAnswers();
                        _this.destroyOptions();
                        cc.director.loadScene("endScreen");
                    }, 1);
                    //this.callPositiveReaction();
                }
                else {
                    console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                    // gtag('event', "LevelCompleted_" + globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    this.setProgressBar();
                    globalVariables_1.default.Instance.totalTimer += this.timer;
                    this.timer = 0;
                    this.isClicked = false;
                    globalVariables_1.default.Instance.currentLevel += 1;
                    this.canTouch = false;
                    this.setScreen();
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
                    _this.node.getChildByName("Question").getComponent(cc.Label).string = _this.question;
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
                        this.createdOptions[i].children[0].getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].optionTexts[i];
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
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 95;
                    }
                    else if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage && StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 65;
                        // this.createdOptions[i].getChildByName("subSprite").width = 350;
                        // this.createdOptions[i].getChildByName("subSprite").height = 350;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 75;
                    }
                    else if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionImage && !StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                        // this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("subSprite"));
                        this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = this.optionImagesFile[i];
                        this.createdOptions[i].getChildByName("subSprite").y = 0;
                        // this.createdOptions[i].getChildByName("subSprite").width = 500;
                        // this.createdOptions[i].getChildByName("subSprite").height = 500;
                        // this.createdOptions[i].getChildByName("subSprite").getComponent(cc.Sprite).spriteFrame = null;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").y = -170;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                        this.optionImages[i], this.createdOptions[i].getChildByName("1").getComponent(cc.Label).lineHeight = 75;
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
            return;
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9UYXBUb0ZpbmQvU2NyaXB0cy9nYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixxREFBZ0Q7QUFDaEQseUNBQW9DO0FBRzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNjFDQztRQXYxQ1csa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7UUFHMUIsa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0Isb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBSXBDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFFdkIsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDL0Isb0JBQWMsR0FBYyxFQUFFLENB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IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IElEYXRhIH0gZnJvbSBcIi4vSURhdGFcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9TdGFydEdhbWVcIjtcclxuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzIH0gZnJvbSBcIi4vZ2FcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcclxuICAgIC8vcHJpdmF0ZSBucGNKc29uIDogY2MuSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGRhdGE6IElEYXRhW10gPSBbbmV3IElEYXRhXTtcclxuICAgIHByaXZhdGUgYW5zd2VyT2JqZWN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25Tb3VuZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIG1heE9wdGlvbnM6IG51bWJlciA9IDc7XHJcbiAgICBwcml2YXRlIFN1YkltYWdlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3cm9uZ0Fuc3dlckxpbWl0OiBudW1iZXIgPSA3O1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvblR5cGU6IHN0cmluZyA9IFwiY3VzdG9tXCI7XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrdHlwZTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2NhbGVBcnJheTogbnVtYmVyW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvcHRpb25JbWFnZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIGNvcnJlY3RBdWRpb3M6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHBvc2l0aXZlQXVkaW9zOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBwcml2YXRlIHBvc2l0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc0NsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdG90YWxBbnN3ZXJzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdyb25nQW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGlzRG9uZTogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVkT3B0aW9uczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGNyZWF0ZWRBbnN3ZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIG9mZnNldFg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA2O1xyXG5cclxuICAgIHByaXZhdGUgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gNzIwO1xyXG4gICAgcHJpdmF0ZSB2aWV3UG9ydEhlaWdodDogbnVtYmVyID0gMTI4MDtcclxuXHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNDaGFyMTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1dyb25nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0VGltZTogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHF1ZXN0aW9uQXVkaW9GaWxlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgY29ycmVjdEF1ZGlvc0ZpbGU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBhbnN3ZXJPYmplY3RGaWxlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBvcHRpb25JbWFnZXNGaWxlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBjb21tb25PcHRpb25JbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2hpdGVUaWNrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHllbGxvd1RpY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgcmlnaHRNYXJrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdyb25nTWFyazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSByaW5nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZVNmeDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIG5lZ2F0aXZlU2Z4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvczpjYy5BdWRpb0NsaXBbXT1bXTtcclxuICAgIC8vcHJpdmF0ZSBvcHRpb25BbmltYXRpb25zOnN0cmluZ1tdPVtdO1xyXG4gICAgLy9wcml2YXRlIG9wdGlvbkF1ZGlvczpzdHJpbmdbXT1bXTtcclxuXHJcblxyXG4gICAgLy9wcml2YXRlIGdhID0gcmVxdWlyZShcImdhXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gX251bWJlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZFF1ZXN0aW9uKCkge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coZ2FEYXRhKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoX2Vycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9lcnJvci5tZXNzYWdlIHx8IF9lcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgbGV0IF9qc29uRGF0YTogb2JqZWN0ID0gX2pzb25GaWxlW1wianNvblwiXTtcclxuICAgIC8vICAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfanNvbkRhdGFbXCJkYXRhXCJdKSk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIFBsYXlRdWVzdGlvbihfZGF0YTogSURhdGEpOiBudW1iZXIge1xyXG5cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAvL2dhLm5hbWU7XHJcblxyXG5cclxuICAgICAgICAvLyBnYSgnZXZlbnQnLCBcIlRhcFwiLCB7XHJcbiAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiTGlua1wiLFxyXG4gICAgICAgIC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkNyZWF0ZSBHYW1lXCIsXHJcbiAgICAgICAgLy8gICAgICd2YWx1ZSc6IDwxPlxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyZWRSaW5nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLmdldENoaWxkQnlOYW1lKFwicmVkUmluZ1wiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMjIsIDgzLCA4Myk7XHJcbiAgICAgICAgdGhpcy5zZXRSaW5nKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS55ID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmNhbnZhc1RvcFkgLSA2MDtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsU3RhcnRlZC0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICAvLyBndGFnKCdldmVudCcsIFwiTGV2ZWxTdGFydGVkX1wiK2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwsIHtcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogXCJJbWFnZVwiLFxyXG4gICAgICAgIC8vICAgICAnZXZlbnRfbGFiZWwnOiBcIkxldmVsIFN0YXJ0ZWRcIixcclxuICAgICAgICAvLyAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb25ncmF0dWxhdGlvbnMuLi4uLi4uLi4hISEhISEhISEhISEhISEhXCIpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJlbmRTY3JlZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGRkZGRkZGRkQEBAQEBAQEBAQEBcIixwYXJzZUludChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpKTtcclxuICAgICAgICAgICAgLy9jYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoKHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSkrMSkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbnN3ZXJPYmplY3RbMF0gIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBbnN3ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS54ID0gdGhpcy52aWV3UG9ydFdpZHRoICogMjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRpb25PYmplY3QodGhpcy5tYXhPcHRpb25zKTtcclxuICAgICAgICB9LCAwLjMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSGVyZSB0aGlzIHJlZmVycyB0byBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciA9PSBcIix0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcblxyXG4gICAgICAgIH0sIDAuNCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25BdWRpb0ZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMC42KTtcclxuICAgICAgICB9LCAwLjcpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQgPSAwO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsvLy8vL1xyXG5cclxuICAgICAgICB0aGlzLm1heE9wdGlvbnMgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5TdWJJbWFnZSA9IDA7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uSW1hZ2VOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5TdWJJbWFnZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJMaW1pdCA9IDI7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2Vycy5wdXNoKChwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyTnVtW2ldKSAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5hbnN3ZXJzID0gdGhpcy5kYXRhW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5hbnN3ZXJzO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25UeXBlID0gXCJjdXN0b21cIjtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrdHlwZSA9IFtcImNvbmZldHRpXCJdO1xyXG4gICAgICAgIHRoaXMudG90YWxBbnN3ZXJzID0gdGhpcy5hbnN3ZXJzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25UZXh0O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lO1xyXG4gICAgICAgIHRoaXMudGV4dEFycmF5ID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uVGV4dHM7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3QgPSBbc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25JbWFnZU5hbWVdO1xyXG4gICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uSW1hZ2VzO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvcyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3M7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInBvc2l0aW9ucyA6XCIrdGhpcy5kYXRhWzBdLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5Mb2FkRGF0YUZyb21SZXNvdXJjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkRGF0YUZyb21SZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXVkaW9GaWxlID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyT2JqZWN0RmlsZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvbkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uSW1hZ2VzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNGaWxlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbaV0sIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9zRmlsZVtpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25BdWRpb0ZpbGUgPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJPYmplY3RGaWxlID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25JbWFnZXNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc0ZpbGVbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb3NbaV0sIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb3NGaWxlW2ldID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgQ2hlY2tGb3JJc0RvbmUoX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSA9PSBfbm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG9uZVtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVG91Y2hTdGFydChfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2ggc3RhcnQgOiBcIik7XHJcbiAgICAgICAgbGV0IGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lICYmIHRoaXMuaXNEb25lW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNTdG9wKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0NvcnJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSUROdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChwYXJzZUludChfbm9kZS5uYW1lKSAtIDEpID09IHRoaXMuYW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUROdW0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWw9PTEpeyAvLyBnYW1lIHNwZWNpZmljIGNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKF9ub2RlLm5hbWU9PVwiMVwiKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSBpZihfbm9kZS5uYW1lPT1cIjJcIil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NhbGVUd2VlbjEuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9zRmlsZVthdWRpb0lETnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjb3JyZWN0IGlzIGNsaWNrZWQgPSBcIixfbm9kZS5uYW1lKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeDogMzYwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKF9ub2RlKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50bygwLjIsIHsgeTogX25vZGUueSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC4yLCB7IHk6IDY0MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlU2Z4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVGZWVkYmFjayhfbm9kZSwgdGhpcy5mZWVkYmFja3R5cGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZlZWRiYWNrdHlwZS5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mZWVkYmFja3R5cGUubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZVNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlLCB0aGlzLmZlZWRiYWNrdHlwZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBvc2l0aXZlRmVlZGJhY2soX25vZGUsIHRoaXMuZmVlZGJhY2t0eXBlWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5DaGVja0ZvcklzRG9uZShfbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndyb25nIGlzIGNsaWNrZWQgPSBcIix0aGlzLmlzRG9uZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVGZWVkYmFjayhfbm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXMgbGV2ZWxlbmRcclxuICAgICAgICAgICAgbGV0IGxldmVsZW5kOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5hbnN3ZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvLyAgICAgaWYoIXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5bdGhpcy5hbnN3ZXJzW2ldXS5hY3RpdmVJbkhpZXJhcmNoeSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxlbmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vZm9yIGxldmVsIG9uZSBzcGVjaWZpYyBjYXNlXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UucmlnaHRBbnN3ZXJDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxldmVsIENvbXBsZXRlZC4uLiEhISEhISEhIVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3RhZygnZXZlbnQnLCBcIkxldmVsQ29tcGxldGVkX1wiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgQ29tcGxldGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICd2YWx1ZSc6IDFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXIgKz0gdGhpcy50aW1lcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb25ncmF0dWxhdGlvbnMuLi4uLi4uLi4hISEhISEhISEhISEhISEhIGdhbWUgZmluaXNoZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY2FsbFBvc2l0aXZlUmVhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3RhZygnZXZlbnQnLCBcIkxldmVsQ29tcGxldGVkX1wiICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICdldmVudF9sYWJlbCc6IFwiTGV2ZWwgQ29tcGxldGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICd2YWx1ZSc6IDFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXIgKz0gdGhpcy50aW1lcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudExldmVsIDogXCIsZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jYWxsUG9zaXRpdmVSZWFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NyZWVuKCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vIGd0YWcoJ2V2ZW50JywgXCJMZXZlbFN0YXJ0ZWRfXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLCB7XHJcbiAgICAgICAgLy8gICAgICdldmVudF9jYXRlZ29yeSc6IFwiSW1hZ2VcIixcclxuICAgICAgICAvLyAgICAgJ2V2ZW50X2xhYmVsJzogXCJMZXZlbCBTdGFydGVkXCIsXHJcbiAgICAgICAgLy8gICAgICd2YWx1ZSc6IDFcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbnN3ZXJPYmplY3RbMF0gIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFuc3dlck9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS54ID0gdGhpcy52aWV3UG9ydFdpZHRoICogMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNdWx0aXBsZUFuc3dlckVudmlyb25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvbk9iamVjdCh0aGlzLm1heE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEb25lW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ub3VjaFN0YXJ0KGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSB0aGlzIHJlZmVycyB0byBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGltZXIgPT0gXCIsdGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC40KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25BdWRpb0ZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC43KTtcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNyk7XHJcblxyXG4gICAgICAgIH0sIDIpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVBbnN3ZXJPYmplY3QoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNyZWF0ZWQgQW5zd2VycyBiZWZvcmUgOiBcIit0aGlzLmNyZWF0ZWRBbnN3ZXJzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXSA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAvL2xldCBhbnN3ZXJOb2RlID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLm5hbWUgPSBcIkFuc1wiICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS54ID0gdGhpcy52aWV3UG9ydFdpZHRoICogMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0ueSA9IDE1MDtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKHRoaXMuYW5zd2VyT2JqZWN0W2ldLCB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYW5zd2VyT2JqZWN0RmlsZTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS53aWR0aCA9IDMwMDtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS5oZWlnaHQgPSAzMDA7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPcHRpb25PYmplY3QobnVtT2ZPcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IHBvc1g6IG51bWJlcltdID0gWzIxNSwgNDk1LCAyMTUsIDQ5NV07XHJcbiAgICAgICAgbGV0IHBvc1k6IG51bWJlcltdID0gWzc1MCwgNzUwLCA0NzAsIDQ3MF07XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VzdG9tXCI6IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlZCBvcHRpb25zIDo6Ojo6XCIsIHRoaXMuY3JlYXRlZE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUgOiBcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8oaSsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvblRleHRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuaW5zZXJ0Q2hpbGQodGhpcy5jcmVhdGVkT3B0aW9uc1tpXSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFggPSAzMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLnNjYWxlID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueCA9IHRoaXMudmlld1BvcnRXaWR0aCAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuU3ViSW1hZ2UgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZW2ldIC09IDI4MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55ID0gcG9zWVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvbkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNvbW1vbk9wdGlvbkltZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDkwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gOTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uSW1hZ2UgJiYgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyh0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm9wdGlvbkltYWdlc0ZpbGVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikueSA9IDY1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLndpZHRoID0gMzUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLmhlaWdodCA9IDM1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLnkgPSAtMTcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkltYWdlc1tpXSwgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcIjFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uSW1hZ2UgJiYgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXModGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzdWJTcHJpdGVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5vcHRpb25JbWFnZXNGaWxlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwic3ViU3ByaXRlXCIpLmhlaWdodCA9IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInN1YlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiMVwiKS55ID0gLTE3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25JbWFnZXNbaV0sIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCIxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkubGluZUhlaWdodCA9IDc1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogcG9zWFtpXSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbnN3ZXJzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5VcGRhdGVBbmltYXRpb25zKHRoaXMub3B0aW9uSW1hZ2VzW2ldLCB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3JlYXRlZE9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dGhpcy5vcHRpb25JbWFnZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQb3NpdGlvbnMgOiBcIix0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLngsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS55KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlZCBvcHRpb25zIDogKioqKioqKioqXCIsdGhpcy5jcmVhdGVkT3B0aW9uc1tpXS54LHRoaXMuY3JlYXRlZE9wdGlvbnNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU9wdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAtdGhpcy52aWV3UG9ydFdpZHRoIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRPcHRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4T3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRPcHRpb25zW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFuc3dlcnMoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgeDogLXRoaXMudmlld1BvcnRXaWR0aCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVkQW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVkQW5zd2Vyc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogLXRoaXMudmlld1BvcnRXaWR0aCArIDEwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlYXRlZEFuc3dlcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZWRBbnN3ZXJzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldE11bHRpcGxlQW5zd2VyRW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5zd2Vycy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc3VicXVlc3Rpb25TdHJpbmcgPSBcIlNlbGVjdCB1cHRvIFwiICsgdGhpcy5hbnN3ZXJzLmxlbmd0aCArIFwiIE9wdGlvbnNcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdWJRdWVzdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN1YnF1ZXN0aW9uU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsTmVnYXRpdmVGZWVkYmFjayhub2RlMTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCArPSAxO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAvL2xldCB0d2VlbjEgPSAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgbm9kZTEuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjMyLCAzMCwgNDMpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggKyAxMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54IC0gMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiBub2RlMS54ICsgMTAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCAtIDEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMC44KTtcclxuXHJcbiAgICAgICAgLy9jYWxsIG5lZ2F0aXZlIGF1ZGlvIFxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5uZWdhdGl2ZVNvdW5kO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTZngsIGZhbHNlKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdHdlZW4xLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSB0aGlzLndyb25nQW5zd2VyTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2FsbE5lZ2F0aXZlUmVhY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlsaWdodExlZnRBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLnRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnRvdGFsVGltZXIgKz0gdGhpcy50aW1lcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UudG90YWxUaW1lciArPSB0aGlzLnRpbWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC44KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFBvc2l0aXZlRmVlZGJhY2sobm9kZTE6IGNjLk5vZGUsIGZlZWRiYWNrTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZmVlZGJhY2tOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25mZXR0aVwiOiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5zZXRQb3NpdGlvbihub2RlMS54LG5vZGUxLnkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZTEuY29sb3IgPSBuZXcgY2MuQ29sb3IoNzEsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2V0UG9zaXRpb24obm9kZTEueCwgbm9kZTEueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tTnVtID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhbmRvbU51bVwiLCByYW5kb21OdW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbU51bSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hbFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY29uZmV0dGlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25mZXR0aTJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuZGVzdHJveTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5zZXRQb3NpdGlvbigtNTAwLC01MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltYWxcIikuc2V0UG9zaXRpb24oLTUwMCwgLTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2V4dHJhIGNvZGUgXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi93aGl0ZVRpY2tcIiwgbm9kZTEuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndoaXRlVGljaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwiQW5pbWFsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgb3BhY2l0eTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC45LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfcmlnaHRcIjoge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgeDogdGhpcy52aWV3UG9ydFdpZHRoICsgMTAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X2xlZnRcIjoge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiBub2RlMS54IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogLTEwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlbWVudF90b3BcIjoge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDIsIHsgeTogdGhpcy52aWV3UG9ydEhlaWdodCArIDEwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMiwgeyB4OiBub2RlMS54ICsgMzAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IG5vZGUxLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X2JvdHRvbVwiOiB7XHJcbiAgICAgICAgICAgICAgICAvL2dhbWUgc3BlY2lmaWMgY29kZVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicGxhdGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeDogLTI4MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogbm9kZTEueSArIDEwMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IG5vZGUxLnkgLSA1MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgYW5nbGU6IDM2MCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTsvL2JvdW5jZUluXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfQW5pbWF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vZ2FtZSBzcGVjaWZpYyBjb2RlXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueCA9IG5vZGUxLnggKyAxMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS55ID0gbm9kZTEueSArIDUwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnggPSBub2RlMS54ICsgMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueSA9IG5vZGUxLnkgKyAyMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS5zY2FsZSA9IG5vZGUxLnNjYWxlIC0gMC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGUxLng9bm9kZTEueCsyMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub2RlMS55PW5vZGUxLnkrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEuc2NhbGUgPSBub2RlMS5zY2FsZSArIDAuNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb25DbGlwOiBjYy5BbmltYXRpb25DbGlwIC8vPSB0aGlzLm9wdGlvbkFuaW1hdGlvbnNbcGFyc2VJbnQobm9kZTEubmFtZSktMV07XHJcbiAgICAgICAgICAgICAgICBub2RlMS5hZGRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmFkZENsaXAoYW5pbWF0aW9uQ2xpcCk7XHJcbiAgICAgICAgICAgICAgICBub2RlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1hdGlvbkNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKCdmaW5pc2hlZCcsICB0aGlzLmZpbmlzaGVkQW5pbSwgICAgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibW92ZW1lbnRfU2NhbGVcIjoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dGxpbmVTY2FsZSA9IG5vZGUxLnNjYWxlICsgKG5vZGUxLnNjYWxlICogMzAgLyAxMDApO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYobm9kZTEuc2NhbGU8PTAuNyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb3V0bGluZVNjYWxlID0gbm9kZTEuc2NhbGUrKG5vZGUxLnNjYWxlLzIpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBcclxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYobm9kZTEuc2NhbGU+PTAuNyYmbm9kZTEuc2NhbGU8PTAuOSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb3V0bGluZVNjYWxlID0gbm9kZTEuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAvLyB9IFxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lU2NhbGUgPSBub2RlMS5zY2FsZS0wLjQ7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9ub2RlMS5nZXRDaGlsZEJ5TmFtZShcIm91dGxpbmVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm9wdGlvbkltYWdlc0ZyYW1lMltwYXJzZUludChub2RlMS5uYW1lKS0xXTtcclxuICAgICAgICAgICAgICAgIG5vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKS5zY2FsZSA9IG91dGxpbmVTY2FsZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxLmdldENoaWxkQnlOYW1lKFwib3V0bGluZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiBvdXRsaW5lU2NhbGUgKyAwLjEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZTogb3V0bGluZVNjYWxlIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImZyYW1lQ2hhbmdlXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vbm9kZTEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm9wdGlvbkltYWdlc0ZyYW1lMltwYXJzZUludChub2RlMS5uYW1lKS0xXTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG5vZGUxLnNjYWxlICsgMC4xIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IG5vZGUxLnNjYWxlIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInNoYWtlXCI6IHtcclxuICAgICAgICAgICAgICAgIGxldCB0d2VlbjEgPSBjYy50d2Vlbihub2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgeDogbm9kZTEueCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgeDogbm9kZTEueCArIDEwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4xLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVtZW50X2NlbnRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95T3RoZXJPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlMS5uYW1lID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHg6IG5vZGUxLnggLSAzMjUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlMS5uYW1lID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHg6IG5vZGUxLnggKyAzMjUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZTEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOSwgeyBvcGFjaXR5OiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjksIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lPdGhlck9wdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLm5hbWUgJiYgKCF0aGlzLmlzRG9uZVtpXSkpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjQsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdhLk5hbWVcIitHQS5OYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImlzQ2xpY2tlZCA6IFwiLHRoaXMudGltZXIsdGhpcy5pc0NsaWNrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudExldmVsIGlzXCIsZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGltZXIgLyB0aGlzLmRlZmF1bHRUaW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyZWRSaW5nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMudmFsdWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHVlICQkJCQkJCQkJCQkIDogXCIrdGhpcy52YWx1ZSx0aGlzLnRpbWVyKTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmRlZmF1bHRUaW1lKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS50b3RhbFRpbWVyICs9IHRoaXMudGltZXI7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzV3JvbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlsaWdodExlZnRBbnN3ZXJzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95QW5zd2VycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95T3B0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmaW5pc2hlZEFuaW0oZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvbmVNYW55XCIpLngsdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvbmVNYW55XCIpLnkpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFBvc2l0aXZlUmVhY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vaWYocmFuZG9tbnVtYmVyID09IDEpXHJcbiAgICAgICAgLy97XHJcblxyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDIgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Hb3BhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9zaXRpdmVSZWFjdGlvbjFcIik7Ly9sZWZ0XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gLTQ3NTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTQxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVZID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gLTEuNTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb3NbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIDAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMyB8fCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLU1pbGlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFyMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3NpdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKFwicG9zaXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS54ID0gOTM5O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xNDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAxLjU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKSkudG8oMC4zLCB7IHg6IDQ3NSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvc2l0aXZlUmVhY3Rpb24yXCIpOy8vcmlnaHRcclxuICAgICAgICAgICAgfSwgMC40KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBvc2l0aXZlQXVkaW9zWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0IHx8IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gOCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvc2l0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoXCJwb3NpdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSAtOTM5O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueSA9IC0xNDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVggPSAtMS41O1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikpLnRvKDAuMywgeyB4OiAtNDc1IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9zaXRpdmVSZWFjdGlvbjJcIik7Ly9yaWdodFxyXG4gICAgICAgICAgICB9LCAwLjQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgfSwgMC45KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Hb3BhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9zaXRpdmVSZWFjdGlvbjFcIik7Ly9yaWdodFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IDQ3NTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnkgPSAtMTQxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVYID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuc2NhbGVZID0gMS41O1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wb3NpdGl2ZUF1ZGlvc1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgfSwgMC45KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oJ2ZpbmlzaGVkJywgdGhpcy5maW5pc2hhbmltYXRpb24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmFuZG9tbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCAvLz0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1tyYW5kb21udW1iZXJdO1xyXG4gICAgICAgIGlmIChyYW5kb21udW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tR29wYWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFyMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikueCA9IC00NzU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTEwMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5zY2FsZVkgPSAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tTWlsaVwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm5lZ2F0aXZlUmVhY3Rpb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoXCJuZWdhdGl2ZVJlYWN0aW9uMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnggPSA5Mzk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS55ID0gLTE0MTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWCA9IDEuNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLnNjYWxlWSA9IDEuNTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpKS50bygwLjMsIHsgeDogNDc1IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibmVnYXRpdmVSZWFjdGlvbjJcIik7XHJcbiAgICAgICAgICAgIH0sIDAuNCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gY3VycmVudEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIH0sIDAuOSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbignZmluaXNoZWQnLCB0aGlzLm5lZ2F0aXZlZmluaXNoYW5pbWF0aW9uLCB0aGlzKTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmlzaGFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NoYXIxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Hb3BhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYXIxID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tTWlsaVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPD0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgocGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKSArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkpvY2tleVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub2ZmKCdmaW5pc2hlZCcsIHRoaXMuZmluaXNoYW5pbWF0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG5lZ2F0aXZlZmluaXNoYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hhcjEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLUdvcGFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhcjEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1NaWxpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJKb2NrZXlcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSm9ja2V5XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9mZignZmluaXNoZWQnLCB0aGlzLm5lZ2F0aXZlZmluaXNoYW5pbWF0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZXByb2dyZXNzKCkge1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5maWxsUmFuZ2UgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICogKDM5NCAvIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKSkudG8oMC41LCB7IHdpZHRoOiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuZmlsbFJhbmdlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlNob3dTdGFyKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93U3RhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLndpZHRoID09ICgzOTQgKiAxIC8gdGhpcy50b3RhbExldmVscykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhclwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLndpZHRoID09ICgzOTQgKiBNYXRoLmNlaWwodGhpcy50b3RhbExldmVscyAvIDIpIC8gdGhpcy50b3RhbExldmVscykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSkudG8oMC41LCB7IHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLndpZHRoID09IDM5NCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI0XCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNVwiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjZcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENoaWxkQnlOYW1lKFwic3RhcjVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyNlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI0XCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI1XCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXI2XCIpKS50bygwLjUsIHsgc2NhbGU6IDAuMyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLnkgPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY2FudmFzVG9wWSAtIDYwO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS40IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NMaW5lMVwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMjIsIDgzLCA4Myk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV3JvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3dyb25nTWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndyb25nTWFyaztcclxuICAgICAgICAgICAgICAgIGxldCByYXdOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNyaWdodCBsZXZlbCAxXCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvcmlnaHRNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmlnaHRNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMikge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS40IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NMaW5lMlwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMjIsIDgzLCA4Myk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV3JvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3dyb25nTWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndyb25nTWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi9yaWdodE1hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMlwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yaWdodE1hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0xpbmUzXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIyMiwgODMsIDgzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNXcm9uZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvd3JvbmdNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud3JvbmdNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3JpZ2h0TWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQzXCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0TWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzTGluZTRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjIyLCA4MywgODMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1dyb25nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi93cm9uZ01hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53cm9uZ01hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVNwcml0ZXMoXCIvcmlnaHRNYXJrXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDRcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmlnaHRNYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS40IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NMaW5lNVwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMjIsIDgzLCA4Myk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV3JvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3dyb25nTWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndyb25nTWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi9yaWdodE1hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNVwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yaWdodE1hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV3JvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVTcHJpdGVzKFwiL3dyb25nTWFya1wiLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndyb25nTWFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi9yaWdodE1hcmtcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNlwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yaWdodE1hcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlU3ByaXRlcyhfc3ByaXRlTmFtZTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkUmVzKF9zcHJpdGVOYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLndhcm4oZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKF9zcHJpdGVOYW1lKTtcclxuICAgIC8vICAgICAgICAgX25vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgIC8vICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldFJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQxXCIpLngsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDFcIikueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDJcIikueCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kMlwiKS55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kM1wiKS54LCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQzXCIpLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzUmluZ1wiKS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ0XCIpLngsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDRcIikueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ1XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NSaW5nXCIpLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDVcIikueCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNVwiKS55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyYXdSb3VuZDZcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyUm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1JpbmdcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJSb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcInJhd1JvdW5kNlwiKS54LCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclJvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwicmF3Um91bmQ2XCIpLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWxpZ2h0TGVmdEFuc3dlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hbnN3ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBhcnNlSW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvbnNcIikuY2hpbGRyZW5baV0ubmFtZSkgLSAxKSA9PSB0aGlzLmFuc3dlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAyNTUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJbnNpZGUgaGlsaWdodExlZnRBbnN3ZXJzIDogXCIrdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlU3ByaXRlcyhcIi93aGl0ZVRpY2tcIiwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uc1wiKS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2hpdGVUaWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IobGV0IGk9MDtpPHRoaXMuYW5zd2Vycy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAvLyAgICAgaWYoKHBhcnNlSW50KF9ub2RlLm5hbWUpLTEpPT10aGlzLmFuc3dlcnNbaV0pe1xyXG4gICAgICAgIC8vICAgICAgICAgaXNDb3JyZWN0PXRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

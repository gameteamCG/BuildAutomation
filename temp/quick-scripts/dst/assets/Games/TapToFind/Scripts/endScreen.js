
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
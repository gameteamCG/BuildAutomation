
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvV2ViVmlldy9TY3JpcHRzL1dlYlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBRUksd0JBQXdCO1FBRjVCLHFFQW1RQztRQS9QRyxzQkFBZ0IsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQVcsS0FBSyxDQUFDO1FBRTlCLGFBQU8sR0FBVyxpQ0FBaUMsQ0FBQztRQUVwRCxZQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix3QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFFcEMsY0FBUSxHQUFhLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDL0UsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7UUFnUG5HLGlCQUFpQjtJQUNyQixDQUFDO2dCQW5Rb0IsT0FBTztJQW9CeEIsc0JBQVcsbUJBQVE7YUFBbkI7WUFDSSxPQUFPLFNBQU8sQ0FBQyxRQUFRLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksU0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsaUNBQWUsR0FBZixVQUFnQixvQkFBcUM7UUFBckMscUNBQUEsRUFBQSw0QkFBcUM7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UW9DLEVBQUUsQ0FBQyxTQUFTLEdBbVFoRDtrQkFuUW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICB3ZWJWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFN0cmluZylcbiAgICBwcml2YXRlIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyA9IFwiNjAwXCI7XG4gICAgQHByb3BlcnR5KFN0cmluZylcbiAgICBwcml2YXRlIHdlYkxpbms6IHN0cmluZyA9IFwiaHR0cHM6Ly9wbGFucy5saXR0bGVzaW5naGFtLm1lL1wiO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB2b19hdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudE1vYmlsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogV2ViVmlldyA9IG51bGw7XG4gICAgcHJpdmF0ZSBtYXhTdHJpbmdMZW5ndGggPSAzO1xuICAgIHByaXZhdGUgTW9iaWxlTnVtYmVyTmVlZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBTdHJpbmdbXSA9IFtcIjMwMCsyNTBcIiwgXCIyMDArMjUwXCIsIFwiMjUwKzI1MFwiLCBcIjUwMCsyNTBcIiwgXCI2MDArMjAwXCIsXG4gICAgICAgIFwiMzUwKzM1MFwiLCBcIjQ1MCs1MFwiLCBcIjY1MCs1MFwiLCBcIjc1MCs1MFwiLCBcIjg1MCs1MFwiLCBcIjQ1MCsxMDBcIiwgXCI1NTArMTAwXCIsIFwiMTAwKzU1MFwiLCBcIjc1MCsxMDBcIl07XG5cbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gV2ViVmlldy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFdlYlZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG5cbiAgICB9XG5cbiAgICBDaGVja0ZvcldlYlZpZXcoaXNNb2JpbGVOdW1iZXJOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gdGhpcy5xdWVzdGlvblt0aGlzLmdldFJhbmRvbU51bWJlcigwLCB0aGlzLnF1ZXN0aW9uLmxlbmd0aCAtIDEpXS5zcGxpdChcIitcIik7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJDb250ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHBhcnRzWzBdICsgXCIgKyBcIiArIHBhcnRzWzFdO1xuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSAoKHBhcnNlSW50KHBhcnRzWzBdKSkgKyAocGFyc2VJbnQocGFydHNbMV0pKSkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5Nb2JpbGVOdW1iZXJOZWVkZWQgPSBpc01vYmlsZU51bWJlck5lZWRlZDtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnZvX2F1ZCwgZmFsc2UpO1xuICAgICAgICAvL2lmIHBsYXllciBoYXMgdGhlIGFjY2VzcyBjYXB0Y2hhIHNjcmVlbiB3aWxsIGJlIHBvcGVkIHVwLCBlbHNlIGdhbWUgd2lsbCBjb250aW51ZVxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW5pdGlhdGVQYXl3YWxsQ2FwdGNoYS0tdHJ1ZVwiKTtcblxuICAgICAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5tb2JpbGVOdW1iZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5tb2JpbGVOdW1iZXIpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlTnVtYmVyTmVlZGVkICYmICFzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nRXZlbnQtLU1vYmlsZUNhcHRjaGEtLXNob3dlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBvcEluKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0sIDEuNSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5PbkNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nRXZlbnQtLVBheW1lbnRDYXB0Y2hhLS1zaG93ZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5Qb3BJbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzBdLCAxLjUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGxheWVyIGNhbiBwbGF5IHRoZSBsZXZlbCBzaW5jZSBoZSBoYXMgdGhlIGFjY2Vzc1wiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcblxuICAgIH1cblxuICAgIFBvcEluKF9ub2RlOiBjYy5Ob2RlLCBfc2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgX25vZGUuc2NhbGUgPSAwO1xuICAgICAgICBfbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiBfc2NhbGUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIFBvcE91dChfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIF9ub2RlLnNjYWxlID0gX3NjYWxlO1xuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIF9ub2RlLmdldFBhcmVudCgpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAwLjQpO1xuICAgIH1cblxuICAgIGluaXRXZWJ2aWV3KCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIC8vIGlmcmFtZS5zcmMgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTA5OjMwMDNcIjtcbiAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMud2ViTGluaztcbiAgICAgICAgY29uc3Qgd2ViVmlld0NvbnRhaW5lciA9IGlmcmFtZTtcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgIGNvbnN0IHJlc2l6ZUlmcmFtZSA9ICgpID0+IHsgfTtcbiAgICAgICAgcmVzaXplSWZyYW1lKCk7XG4gICAgICAgIHRoaXMud2ViVmlld0NvbnRhaW5lciA9IHdlYlZpZXdDb250YWluZXI7XG4gICAgfVxuXG4gICAgT25DbG9zZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0tY2xvc2VkXCIpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xuICAgICAgICAgICAgdGhpcy5Qb3BPdXQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLCAxLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgICAgIHRoaXMuUG9wT3V0KHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSwgMS41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEFuc3dlciA9IFwiXCI7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY3VycmVudEFuc3dlcjtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHN0YXJ0R2FtZS5JbnN0YW5jZS5CR01fYXVkaW8sIHRydWUpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENoZWNrRm9yTW9iaWxlTnVtYmVyKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPCAxMCB8fCB0aGlzLmN1cnJlbnRNb2JpbGUgPT0gXCJcIikge1xuXG4gICAgICAgICAgICBpZiAoX2V2ZW50LnRhcmdldC5uYW1lICE9IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPCAxMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gdGhpcy5jdXJyZW50TW9iaWxlICsgX2V2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50TW9iaWxlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudE1vYmlsZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHRoaXMuY3VycmVudE1vYmlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuUG9wT3V0KHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSwgMS41KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAwLjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgQ2hlY2tGb3JDb3JyZWN0QW5zd2VyKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgaWYgKF9ldmVudC50YXJnZXQubmFtZSAhPSBcInhcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGggPCAzKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuc3dlciA9IHRoaXMuY3VycmVudEFuc3dlciArIF9ldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSB0aGlzLmN1cnJlbnRBbnN3ZXJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50QW5zd2VyO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5zd2VyID09IHRoaXMuY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgLy8gdGhpcy5PbkNvbnRpbnVlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS1jb3JyZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWF0ZV9wYXltZW50LS10cnVlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0YXJ0X2xldmVsLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50QW5zd2VyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbnN3ZXJbaV0gPT0gdGhpcy5jb3JyZWN0QW5zd2VyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gdGhpcy5jdXJyZW50QW5zd2VyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS13cm9uZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY3VycmVudEFuc3dlcjtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgR2FtZUNvbnRpbnVlcygpIHtcblxuICAgIH1cblxuICAgIE9uQ29udGludWUoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmluaXRXZWJ2aWV3KCk7XG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTG9hZCBgICsgZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tWWVzYCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgc3RhcnRHYW1lLkluc3RhbmNlLnZvbHVtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tTm9gKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSgwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==
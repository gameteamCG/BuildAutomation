"use strict";
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
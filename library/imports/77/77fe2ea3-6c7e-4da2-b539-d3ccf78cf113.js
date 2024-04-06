"use strict";
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
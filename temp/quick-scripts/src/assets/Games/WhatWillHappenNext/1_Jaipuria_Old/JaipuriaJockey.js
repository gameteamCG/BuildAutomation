"use strict";
cc._RF.push(module, '2a5daFH5X5OLJCAGcB7+BpB', 'JaipuriaJockey');
// Games/WhatWillHappenNext/1_Jaipuria_Old/JaipuriaJockey.ts

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
        _this.loading = null;
        _this.play_audio = null;
        // EndButton() {
        //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
        //     console.log("gameEnded--" + true);
        //     closeWindow();
        // }
        _this.closeWindow = function () {
            window.open(location.href, "_self", "");
            window.close();
        };
        return _this;
    }
    NewClass.prototype.OnStartGame = function (_event) {
        cc.audioEngine.playEffect(this.play_audio, false);
        this.loading.active = true;
        _event.target.active = false;
        _event.target.getComponent(cc.Button).interactable = false;
        cc.director.loadScene(this.NextSceneName);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "loading", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "play_audio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12188wrDUtGT6+DUikGtBfF', 'endScreen');
// Games/WhatWillHappenNext/Scripts/endScreen.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.star = [];
        _this.yeah = [];
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny" ||
            StartGame_1.default.Instance.jockeyName == "boy" ||
            StartGame_1.default.Instance.jockeyName == "girl") {
            // this.node
            // 	.getChildByName("awesome")
            // 	.getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        if (StartGame_1.default.Instance.jockeyName != "boy" &&
            StartGame_1.default.Instance.jockeyName != "girl")
            this.node.getComponent(cc.Sprite).spriteFrame =
                StartGame_1.default.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        // startGame.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("awesome")
                .getComponent(cc.Animation)
                .play();
        }, 0.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.9 }, { easing: "backOut" })
                .start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "backOut" })
                .start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "backOut" })
                .start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
            _this.node.getChildByName("end").active = true;
        }, 2.3);
    };
    NewClass.prototype.OnEndBtn = function (_event) {
        window.close();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "yeah", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "supercubEnd", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZW5kU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUd2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVHQztRQXJHUSxVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztRQXdGM0MsaUJBQWlCO0lBQ2xCLENBQUM7SUF2RkEsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFBQSxpQkFvQ0M7UUFuQ0EsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJO2lCQUNQLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEQ7YUFBTSxJQUNOLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTO1lBQzFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVO1lBQzNDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTO1lBQzFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxNQUFNLEVBQ3RDO1lBQ0QsWUFBWTtZQUNaLDhCQUE4QjtZQUM5Qiw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSTtpQkFDUCxjQUFjLENBQUMsU0FBUyxDQUFDO2lCQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxJQUFJO2lCQUNQLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekQ7UUFDRCxJQUNDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxNQUFNO1lBRXZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO2dCQUM1QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkF3Q0M7UUF2Q0EsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJO2lCQUNQLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lCQUMxQixJQUFJLEVBQUUsQ0FBQztRQUNWLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLE1BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ2tCO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDa0I7SUFkdkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVHNUI7SUFBRCxlQUFDO0NBdkdELEFBdUdDLENBdkdxQyxFQUFFLENBQUMsU0FBUyxHQXVHakQ7a0JBdkdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvY2tleSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL0pvY2tleXMvU2NyaXB0cy9Kb2NrZXlcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdGFyOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdHByaXZhdGUgcG9kYXJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0cHJpdmF0ZSBqYWlwdXJpYUVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuXHRwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuXHRwcml2YXRlIHN1cGVyY3ViRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXHJcblx0XHQpIHtcclxuXHRcdFx0Ly8gdGhpcy5ub2RlXHJcblx0XHRcdC8vIFx0LmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKVxyXG5cdFx0XHQvLyBcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuamFpcHVyaWFFbmQ7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSwgMik7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMudGxjRW5kO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3VwZXJjdWJFbmQ7XHJcblx0XHR9XHJcblx0XHRpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiYm95XCIgJiZcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJnaXJsXCJcclxuXHRcdClcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9CRztcclxuXHR9XHJcblxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUNvbmdyYXR1bGF0aW9uc1wiKTtcclxuXHRcdC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDA7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheSgpO1xyXG5cdFx0fSwgMC4zKTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjFcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSwgMC44KTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSwgMS4zKTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSwgMS44KTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnllYWhbMF07XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJnYW1lRW5kZWQtLXRydWVcIik7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fSwgMi4zKTtcclxuXHR9XHJcblxyXG5cdE9uRW5kQnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdHdpbmRvdy5jbG9zZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
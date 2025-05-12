
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
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny" ||
            StartGame_1.default.Instance.jockeyName == "boy" ||
            StartGame_1.default.Instance.jockeyName == "girl") {
            // this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        // this.node.getComponent(cc.Sprite).spriteFrame =
        // 	startGame.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
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
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvU2NyaXB0cy9lbmRTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQTZEO0FBR3ZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUdDO1FBL0ZRLFVBQUksR0FBbUIsRUFBRSxDQUFDO1FBRzFCLFVBQUksR0FBbUIsRUFBRSxDQUFDO1FBRzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxZQUFNLEdBQW1CLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFtQixJQUFJLENBQUM7O1FBa0YzQyxpQkFBaUI7SUFDbEIsQ0FBQztJQWpGQSx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCQSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUk7aUJBQ1AsY0FBYyxDQUFDLFNBQVMsQ0FBQztpQkFDekIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0RDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSTtpQkFDUCxjQUFjLENBQUMsU0FBUyxDQUFDO2lCQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxJQUFJO2lCQUNQLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekQ7YUFBTSxJQUNOLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTO1lBQzFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVO1lBQzNDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTO1lBQzFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQ3RDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxNQUFNLEVBQ3RDO1lBQ0QsOEZBQThGO1lBQzlGLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxrREFBa0Q7UUFDbEQsK0JBQStCO0lBQ2hDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBdUNDO1FBdENBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNqQixLQUFJLENBQUMsSUFBSTtpQkFDUCxjQUFjLENBQUMsU0FBUyxDQUFDO2lCQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDMUIsSUFBSSxFQUFFLENBQUM7UUFDVixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDaEQsS0FBSyxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDaEQsS0FBSyxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDaEQsS0FBSyxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsTUFBZ0I7UUFDeEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUE1RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDa0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQWR2QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUc1QjtJQUFELGVBQUM7Q0FqR0QsQUFpR0MsQ0FqR3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUdqRDtrQkFqR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9ja2V5IGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvSm9ja2V5cy9TY3JpcHRzL0pvY2tleVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuXHRwcml2YXRlIHN0YXI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcblx0cHJpdmF0ZSB5ZWFoOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcblx0cHJpdmF0ZSBwb2RhckVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG5cdHByaXZhdGUgamFpcHVyaWFFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuXHRwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG5cdHByaXZhdGUgc3VwZXJjdWJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXHRvbkxvYWQoKSB7XG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuXHRcdFx0dGhpcy5ub2RlXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb2RhckVuZDtcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcblx0XHRcdHRoaXMubm9kZVxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMudGxjRW5kO1xuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG5cdFx0XHR0aGlzLm5vZGVcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKVxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN1cGVyY3ViRW5kO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwicGVuZ3VpblwiIHx8XG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHxcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNvcm55XCIgfHxcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYm95XCIgfHxcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXG5cdFx0KSB7XG5cdFx0XHQvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5qYWlwdXJpYUVuZDtcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5kXCIpLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHR9LCAyKTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuXHRcdC8vIFx0c3RhcnRHYW1lLkluc3RhbmNlLmludHJvQkc7XG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHRjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tQ29uZ3JhdHVsYXRpb25zXCIpO1xuXHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDA7XG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXHRcdFx0dGhpcy5ub2RlXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXG5cdFx0XHRcdC5wbGF5KCk7XG5cdFx0fSwgMC4zKTtcblxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMVwiKSlcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG5cdFx0XHRcdC5zdGFydCgpO1xuXHRcdH0sIDAuOCk7XG5cblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyWzBdO1xuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikpXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxuXHRcdFx0XHQuc3RhcnQoKTtcblx0XHR9LCAxLjMpO1xuXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpKVxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcblx0XHRcdFx0LnN0YXJ0KCk7XG5cdFx0fSwgMS44KTtcblxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnllYWhbMF07XG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcblx0XHR9LCAyLjMpO1xuXHR9XG5cblx0T25FbmRCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xuXHRcdHdpbmRvdy5jbG9zZSgpO1xuXHR9XG5cblx0Ly8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
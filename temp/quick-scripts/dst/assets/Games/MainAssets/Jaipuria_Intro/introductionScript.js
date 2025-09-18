
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/Jaipuria_Intro/introductionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/MainAssets/Jaipuria_Intro/introductionScript.ts

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
        _this.introVO = null;
        _this.exitVO = null;
        _this.richText = null;
        _this.typingSpeed = 0.1;
        _this.currentIndex = 0;
        _this.currentIntro = 0;
        _this.currentText = "";
        _this.delay = [];
        _this.duration = [];
        _this.TextArray = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.duration = [5.7, 8.0, 5.3, 7.0, 6.3, 5.6, 6.0, 9.9];
        this.TextArray = [
            "Today, we will learn about the different parts of a day.",
            "A day has four main parts — morning, noon, evening, and night.",
            "In the morning, the sun rises and we wake up.",
            "At noon, the sun is high in the sky and it’s the middle of the day.",
            "In the evening, the sun sets and it starts getting dark.",
            "At night, the stars come out and we go to sleep.",
            "We do different activities at different times of the day.",
            "For example, we go to school in the morning, eat lunch at noon, play in the evening, and sleep at night.",
        ];
    };
    NewClass.prototype.typeLetter = function () {
        if (this.currentIndex < this.text.length) {
            this.currentText += this.text[this.currentIndex];
            this.richText.string = this.currentText;
            this.currentIndex++;
        }
        else {
            this.unschedule(this.typeLetter);
        }
    };
    NewClass.prototype.resetText = function () {
        this.currentIntro++;
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = "";
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    };
    NewClass.prototype.callCurrentText = function () {
        var _this = this;
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node
            .getChildByName("jockey")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "talk action loop", true);
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("jockey")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
            _this.resetText();
            if (_this.currentIntro == _this.duration.length) {
                _this.callEnd();
            }
            else {
                _this.callCurrentText();
            }
        }, this.duration[this.currentIntro]);
    };
    NewClass.prototype.start = function () {
        this.text = this.TextArray[this.currentIntro];
        this.callCurrentText();
        this.node.getChildByName("spine").active = true;
        cc.audioEngine.playEffect(this.introVO, false);
    };
    NewClass.prototype.callEnd = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node
            .getChildByName("transition")
            .getComponent(cc.Animation)
            .play("anim");
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("transition")
                .getComponent(cc.Animation)
                .play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
    };
    NewClass.prototype.skipGame = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node
            .getChildByName("jockey")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node
            .getChildByName("transition")
            .getComponent(cc.Animation)
            .play("anim");
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("transition")
                .getComponent(cc.Animation)
                .play("anim2");
            _this.scheduleOnce(function () {
                _this.node.getChildByName("spine").active = false;
                _this.node.children[0].children[0].active = false;
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "introVO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "exitVO", void 0);
    __decorate([
        property(cc.RichText)
    ], NewClass.prototype, "richText", void 0);
    __decorate([
        property
    ], NewClass.prototype, "typingSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXEphaXB1cmlhX0ludHJvXFxpbnRyb2R1Y3Rpb25TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SEM7UUF2SEMsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBYSxFQUFFLENBQUM7O0lBdUczQixDQUFDO0lBckdDLHlCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZiwwREFBMEQ7WUFDMUQsZ0VBQWdFO1lBQ2hFLCtDQUErQztZQUMvQyxxRUFBcUU7WUFDckUsMERBQTBEO1lBQzFELGtEQUFrRDtZQUNsRCwyREFBMkQ7WUFDM0QsMEdBQTBHO1NBQzNHLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxD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QUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBdEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDSztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNPO0lBRzdCO1FBREMsUUFBUTtpREFDaUI7SUFYUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUg1QjtJQUFELGVBQUM7Q0F6SEQsQUF5SEMsQ0F6SHFDLEVBQUUsQ0FBQyxTQUFTLEdBeUhqRDtrQkF6SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgaW50cm9WTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBleGl0Vk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICByaWNoVGV4dDogY2MuUmljaFRleHQgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHlcclxuICB0eXBpbmdTcGVlZDogbnVtYmVyID0gMC4xO1xyXG4gIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudEludHJvOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudFRleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgZGVsYXk6IG51bWJlcltdID0gW107XHJcbiAgZHVyYXRpb246IG51bWJlcltdID0gW107XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIFRleHRBcnJheTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBbNS43LCA4LjAsIDUuMywgNy4wLCA2LjMsIDUuNiwgNi4wLCA5LjldO1xyXG4gICAgdGhpcy5UZXh0QXJyYXkgPSBbXHJcbiAgICAgIFwiVG9kYXksIHdlIHdpbGwgbGVhcm4gYWJvdXQgdGhlIGRpZmZlcmVudCBwYXJ0cyBvZiBhIGRheS5cIixcclxuICAgICAgXCJBIGRheSBoYXMgZm91ciBtYWluIHBhcnRzIOKAlCBtb3JuaW5nLCBub29uLCBldmVuaW5nLCBhbmQgbmlnaHQuXCIsXHJcbiAgICAgIFwiSW4gdGhlIG1vcm5pbmcsIHRoZSBzdW4gcmlzZXMgYW5kIHdlIHdha2UgdXAuXCIsXHJcbiAgICAgIFwiQXQgbm9vbiwgdGhlIHN1biBpcyBoaWdoIGluIHRoZSBza3kgYW5kIGl04oCZcyB0aGUgbWlkZGxlIG9mIHRoZSBkYXkuXCIsXHJcbiAgICAgIFwiSW4gdGhlIGV2ZW5pbmcsIHRoZSBzdW4gc2V0cyBhbmQgaXQgc3RhcnRzIGdldHRpbmcgZGFyay5cIixcclxuICAgICAgXCJBdCBuaWdodCwgdGhlIHN0YXJzIGNvbWUgb3V0IGFuZCB3ZSBnbyB0byBzbGVlcC5cIixcclxuICAgICAgXCJXZSBkbyBkaWZmZXJlbnQgYWN0aXZpdGllcyBhdCBkaWZmZXJlbnQgdGltZXMgb2YgdGhlIGRheS5cIixcclxuICAgICAgXCJGb3IgZXhhbXBsZSwgd2UgZ28gdG8gc2Nob29sIGluIHRoZSBtb3JuaW5nLCBlYXQgbHVuY2ggYXQgbm9vbiwgcGxheSBpbiB0aGUgZXZlbmluZywgYW5kIHNsZWVwIGF0IG5pZ2h0LlwiLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRleHQgKz0gdGhpcy50ZXh0W3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRUZXh0O1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFRleHQoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRJbnRybysrO1xyXG4gICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IFwiXCI7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICB9XHJcblxyXG4gIGNhbGxDdXJyZW50VGV4dCgpIHtcclxuICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIilcclxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcInRhbGsgYWN0aW9uIGxvb3BcIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbnRybyA9PSB0aGlzLmR1cmF0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuY2FsbEVuZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMuZHVyYXRpb25bdGhpcy5jdXJyZW50SW50cm9dKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaW50cm9WTywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEVuZCgpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leGl0Vk8sIGZhbHNlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAucGxheShcImFuaW1cIik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAucGxheShcImFuaW0yXCIpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgfSwgMC44KTtcclxuICAgIH0sIDIuNSk7XHJcbiAgfVxyXG5cclxuICBza2lwR2FtZSgpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICB9LCAwLjgpO1xyXG4gICAgfSwgMi41KTtcclxuICB9XHJcbn1cclxuIl19
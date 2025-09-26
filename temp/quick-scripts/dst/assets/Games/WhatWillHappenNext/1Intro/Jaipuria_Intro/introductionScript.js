
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/1Intro/Jaipuria_Intro/introductionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/WhatWillHappenNext/1Intro/Jaipuria_Intro/introductionScript.ts

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
        _this.currentText = '';
        _this.delay = [];
        _this.duration = [];
        _this.TextArray = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        this.duration = [5.1, 3.7, 4, 3.3, 5.8, 4.2, 4.4, 4.7, 4.8, 4.3, 4.2, 5.5, 4.7, 4.2, 4, 5.2];
        this.TextArray = [
            "Today, we’re going to learn about monuments in Bharat!",
            "Let’s learn about monuments in Bharat!",
            "Monuments are old and special buildings.",
            "They tell us stories from the past.",
            "People built them to remember kings, queens, and great events.",
            "Let’s visit some famous monuments of Bharat:",
            "Qutub Minar in Delhi – a very tall tower.",
            "Hawa Mahal in Jaipur – a palace with many windows.",
            "Charminar in Hyderabad – has four tall towers.",
            "Gwalior Fort in Gwalior – a big fort on a hill.",
            "Rang Ghar in Assam – used for watching games.",
            "Brihadeeswara Temple in Thanjavur – a very old temple.",
            "Bara Imambara in Lucknow – a beautiful building.",
            "Sun Temple in Konark – shaped like a chariot.",
            "These places are part of our proud history!",
            "Let’s learn to know them and keep them clean when we visit."
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
        this.currentText = '';
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    };
    NewClass.prototype.callCurrentText = function () {
        var _this = this;
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(function () {
            _this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(function () {
            _this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            _this.scheduleOnce(function () {
                cc.director.loadScene("1");
            }, 0.8);
        }, 2.5);
    };
    NewClass.prototype.skipGame = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(function () {
            _this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcMUludHJvXFxKYWlwdXJpYV9JbnRyb1xcaW50cm9kdWN0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOEdDO1FBM0dHLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFdBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUV4QixlQUFTLEdBQWEsRUFBRSxDQUFBOztJQTJGNUIsQ0FBQztJQXpGRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYix3REFBd0Q7WUFDeEQsd0NBQXdDO1lBQ3hDLDBDQUEwQztZQUMxQyxxQ0FBcUM7WUFDckMsZ0VB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QUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBMUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDSztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNPO0lBRzdCO1FBREMsUUFBUTtpREFDaUI7SUFaVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEc1QjtJQUFELGVBQUM7Q0E5R0QsQUE4R0MsQ0E5R3FDLEVBQUUsQ0FBQyxTQUFTLEdBOEdqRDtrQkE5R29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBpbnRyb1ZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBleGl0Vk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR5cGluZ1NwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudEludHJvOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBkZWxheTogbnVtYmVyW10gPSBbXTtcclxuICAgIGR1cmF0aW9uOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgVGV4dEFycmF5OiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IFs1LjEsIDMuNywgNCwgMy4zLCA1LjgsIDQuMiwgNC40LCA0LjcsIDQuOCwgNC4zLCA0LjIsIDUuNSwgNC43LCA0LjIsIDQsIDUuMl1cclxuICAgICAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgICAgICAgXCJUb2RheSwgd2XigJlyZSBnb2luZyB0byBsZWFybiBhYm91dCBtb251bWVudHMgaW4gQmhhcmF0IVwiLFxyXG4gICAgICAgICAgICBcIkxldOKAmXMgbGVhcm4gYWJvdXQgbW9udW1lbnRzIGluIEJoYXJhdCFcIixcclxuICAgICAgICAgICAgXCJNb251bWVudHMgYXJlIG9sZCBhbmQgc3BlY2lhbCBidWlsZGluZ3MuXCIsXHJcbiAgICAgICAgICAgIFwiVGhleSB0ZWxsIHVzIHN0b3JpZXMgZnJvbSB0aGUgcGFzdC5cIixcclxuICAgICAgICAgICAgXCJQZW9wbGUgYnVpbHQgdGhlbSB0byByZW1lbWJlciBraW5ncywgcXVlZW5zLCBhbmQgZ3JlYXQgZXZlbnRzLlwiLFxyXG4gICAgICAgICAgICBcIkxldOKAmXMgdmlzaXQgc29tZSBmYW1vdXMgbW9udW1lbnRzIG9mIEJoYXJhdDpcIixcclxuICAgICAgICAgICAgXCJRdXR1YiBNaW5hciBpbiBEZWxoaSDigJMgYSB2ZXJ5IHRhbGwgdG93ZXIuXCIsXHJcbiAgICAgICAgICAgIFwiSGF3YSBNYWhhbCBpbiBKYWlwdXIg4oCTIGEgcGFsYWNlIHdpdGggbWFueSB3aW5kb3dzLlwiLFxyXG4gICAgICAgICAgICBcIkNoYXJtaW5hciBpbiBIeWRlcmFiYWQg4oCTIGhhcyBmb3VyIHRhbGwgdG93ZXJzLlwiLFxyXG4gICAgICAgICAgICBcIkd3YWxpb3IgRm9ydCBpbiBHd2FsaW9yIOKAkyBhIGJpZyBmb3J0IG9uIGEgaGlsbC5cIixcclxuICAgICAgICAgICAgXCJSYW5nIEdoYXIgaW4gQXNzYW0g4oCTIHVzZWQgZm9yIHdhdGNoaW5nIGdhbWVzLlwiLFxyXG4gICAgICAgICAgICBcIkJyaWhhZGVlc3dhcmEgVGVtcGxlIGluIFRoYW5qYXZ1ciDigJMgYSB2ZXJ5IG9sZCB0ZW1wbGUuXCIsXHJcbiAgICAgICAgICAgIFwiQmFyYSBJbWFtYmFyYSBpbiBMdWNrbm93IOKAkyBhIGJlYXV0aWZ1bCBidWlsZGluZy5cIixcclxuICAgICAgICAgICAgXCJTdW4gVGVtcGxlIGluIEtvbmFyayDigJMgc2hhcGVkIGxpa2UgYSBjaGFyaW90LlwiLFxyXG4gICAgICAgICAgICBcIlRoZXNlIHBsYWNlcyBhcmUgcGFydCBvZiBvdXIgcHJvdWQgaGlzdG9yeSFcIixcclxuICAgICAgICAgICAgXCJMZXTigJlzIGxlYXJuIHRvIGtub3cgdGhlbSBhbmQga2VlcCB0aGVtIGNsZWFuIHdoZW4gd2UgdmlzaXQuXCJcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZUxldHRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHQgKz0gdGhpcy50ZXh0W3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFRleHQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW50cm8rKztcclxuICAgICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVt0aGlzLmN1cnJlbnRJbnRyb107XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEN1cnJlbnRUZXh0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyLCB0aGlzLnR5cGluZ1NwZWVkKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEludHJvID09IHRoaXMuZHVyYXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLmR1cmF0aW9uW3RoaXMuY3VycmVudEludHJvXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVt0aGlzLmN1cnJlbnRJbnRyb107XHJcbiAgICAgICAgdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5pbnRyb1ZPLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEVuZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhpdFZPLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfSwgMi41KVxyXG4gICAgfVxyXG5cclxuICAgIHNraXBHYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0sIDIuNSlcclxuICAgIH1cclxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Main Assets/Jaipuria_Intro/introductionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/Main Assets/Jaipuria_Intro/introductionScript.ts

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
        this.duration = [5.2, 19.6, 4.7, 18.5, 15];
        this.TextArray = [
            "Today we will learn about the concept of simple present tense.",
            "We use simple present tense to talk about things we do every day, things that happen again and again, or things that are always true.\nFor example:\nI brush my teeth every morning.\nThe sun rises in the east.",
            "The words brush and rise are action words.",
            "When the subject is singular like he, she, or it,  we add -s or -es to the action word.\nFor example:\nHe goes to school daily.\nShe drinks milk daily at night.",
            "When the subject is plural like I, you, we, they, we use the action word as it is.\nFor example:\nI play in the park.\nThey wash their hands.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW4gQXNzZXRzXFxKYWlwdXJpYV9JbnRyb1xcaW50cm9kdWN0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0hDO1FBcEhDLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFdBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUV4QixlQUFTLEdBQWEsRUFBRSxDQUFDOztJQW9HM0IsQ0FBQztJQWxHQyx5QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsZ0VBQWdFO1lBQ2hFLGtOQUFrTjtZQUNsTiw0Q0FBNEM7WUFDNUMsa0tBQWtLO1lBQ2xLLCtJQUErSTtTQUNoSixDQUFDO0lBQ0osQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsSUFB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QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQW5IRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ0s7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTztJQUc3QjtRQURDLFFBQVE7aURBQ2lCO0lBWFAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNINUI7SUFBRCxlQUFDO0NBdEhELEFBc0hDLENBdEhxQyxFQUFFLENBQUMsU0FBUyxHQXNIakQ7a0JBdEhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIGludHJvVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUmljaFRleHQpXHJcbiAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgdHlwaW5nU3BlZWQ6IG51bWJlciA9IDAuMTtcclxuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRJbnRybzogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIGRlbGF5OiBudW1iZXJbXSA9IFtdO1xyXG4gIGR1cmF0aW9uOiBudW1iZXJbXSA9IFtdO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gWzUuMiwgMTkuNiwgNC43LCAxOC41LCAxNV07XHJcbiAgICB0aGlzLlRleHRBcnJheSA9IFtcclxuICAgICAgXCJUb2RheSB3ZSB3aWxsIGxlYXJuIGFib3V0IHRoZSBjb25jZXB0IG9mIHNpbXBsZSBwcmVzZW50IHRlbnNlLlwiLFxyXG4gICAgICBgV2UgdXNlIHNpbXBsZSBwcmVzZW50IHRlbnNlIHRvIHRhbGsgYWJvdXQgdGhpbmdzIHdlIGRvIGV2ZXJ5IGRheSwgdGhpbmdzIHRoYXQgaGFwcGVuIGFnYWluIGFuZCBhZ2Fpbiwgb3IgdGhpbmdzIHRoYXQgYXJlIGFsd2F5cyB0cnVlLlxcbkZvciBleGFtcGxlOlxcbkkgYnJ1c2ggbXkgdGVldGggZXZlcnkgbW9ybmluZy5cXG5UaGUgc3VuIHJpc2VzIGluIHRoZSBlYXN0LmAsXHJcbiAgICAgIFwiVGhlIHdvcmRzIGJydXNoIGFuZCByaXNlIGFyZSBhY3Rpb24gd29yZHMuXCIsXHJcbiAgICAgIGBXaGVuIHRoZSBzdWJqZWN0IGlzIHNpbmd1bGFyIGxpa2UgaGUsIHNoZSwgb3IgaXQsICB3ZSBhZGQgLXMgb3IgLWVzIHRvIHRoZSBhY3Rpb24gd29yZC5cXG5Gb3IgZXhhbXBsZTpcXG5IZSBnb2VzIHRvIHNjaG9vbCBkYWlseS5cXG5TaGUgZHJpbmtzIG1pbGsgZGFpbHkgYXQgbmlnaHQuYCxcclxuICAgICAgYFdoZW4gdGhlIHN1YmplY3QgaXMgcGx1cmFsIGxpa2UgSSwgeW91LCB3ZSwgdGhleSwgd2UgdXNlIHRoZSBhY3Rpb24gd29yZCBhcyBpdCBpcy5cXG5Gb3IgZXhhbXBsZTpcXG5JIHBsYXkgaW4gdGhlIHBhcmsuXFxuVGhleSB3YXNoIHRoZWlyIGhhbmRzLmAsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgdHlwZUxldHRlcigpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGV4dCArPSB0aGlzLnRleHRbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IHRoaXMuY3VycmVudFRleHQ7XHJcbiAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0VGV4dCgpIHtcclxuICAgIHRoaXMuY3VycmVudEludHJvKys7XHJcbiAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9IFwiXCI7XHJcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gIH1cclxuXHJcbiAgY2FsbEN1cnJlbnRUZXh0KCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIsIHRoaXMudHlwaW5nU3BlZWQpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudEludHJvID09IHRoaXMuZHVyYXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWxsQ3VycmVudFRleHQoKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5kdXJhdGlvblt0aGlzLmN1cnJlbnRJbnRyb10pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVt0aGlzLmN1cnJlbnRJbnRyb107XHJcbiAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5pbnRyb1ZPLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjYWxsRW5kKCkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmV4aXRWTywgZmFsc2UpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIilcclxuICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgIC5wbGF5KFwiYW5pbVwiKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIC5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICB9LCAwLjgpO1xyXG4gICAgfSwgMi41KTtcclxuICB9XHJcblxyXG4gIHNraXBHYW1lKCkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIilcclxuICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAucGxheShcImFuaW1cIik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAucGxheShcImFuaW0yXCIpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgIH0sIDAuOCk7XHJcbiAgICB9LCAyLjUpO1xyXG4gIH1cclxufVxyXG4iXX0=
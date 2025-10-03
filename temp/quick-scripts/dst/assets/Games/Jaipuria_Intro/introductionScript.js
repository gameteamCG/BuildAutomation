
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Jaipuria_Intro/introductionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/Jaipuria_Intro/introductionScript.ts

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
        this.duration = [5.6, 6.2, 3.8, 20];
        this.TextArray = [
            "Today we will learn about the costumes worn all around the world.",
            "People in different parts of the world wear different types of clothes.",
            "These special clothes are called costumes.",
            "Today, we will look at some of the costumes worn in different countries like Kilt in Scotland, Hulpil in Mexico, Kimono in Japan, Saree in India, Hanbok in Korea and Agbada in Africa.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEphaXB1cmlhX0ludHJvXFxpbnRyb2R1Y3Rpb25TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFuSEMsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBYSxFQUFFLENBQUM7O0lBbUczQixDQUFDO0lBakdDLHlCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLG1FQUFtRTtZQUNuRSx5RUFBeUU7WUFDekUsNENBQTRDO1lBQzVDLHlMQUF5TDtTQUMxTCxDQUFDO0lBQ0osQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZ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RDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ0s7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTztJQUc3QjtRQURDLFFBQVE7aURBQ2lCO0lBWFAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIGludHJvVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgZXhpdFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUmljaFRleHQpXHJcbiAgcmljaFRleHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgdHlwaW5nU3BlZWQ6IG51bWJlciA9IDAuMTtcclxuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRJbnRybzogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIGRlbGF5OiBudW1iZXJbXSA9IFtdO1xyXG4gIGR1cmF0aW9uOiBudW1iZXJbXSA9IFtdO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gWzUuNiwgNi4yLCAzLjgsIDIwXTtcclxuICAgIHRoaXMuVGV4dEFycmF5ID0gW1xyXG4gICAgICBcIlRvZGF5IHdlIHdpbGwgbGVhcm4gYWJvdXQgdGhlIGNvc3R1bWVzIHdvcm4gYWxsIGFyb3VuZCB0aGUgd29ybGQuXCIsXHJcbiAgICAgIFwiUGVvcGxlIGluIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgd29ybGQgd2VhciBkaWZmZXJlbnQgdHlwZXMgb2YgY2xvdGhlcy5cIixcclxuICAgICAgXCJUaGVzZSBzcGVjaWFsIGNsb3RoZXMgYXJlIGNhbGxlZCBjb3N0dW1lcy5cIixcclxuICAgICAgXCJUb2RheSwgd2Ugd2lsbCBsb29rIGF0IHNvbWUgb2YgdGhlIGNvc3R1bWVzIHdvcm4gaW4gZGlmZmVyZW50IGNvdW50cmllcyBsaWtlIEtpbHQgaW4gU2NvdGxhbmQsIEh1bHBpbCBpbiBNZXhpY28sIEtpbW9ubyBpbiBKYXBhbiwgU2FyZWUgaW4gSW5kaWEsIEhhbmJvayBpbiBLb3JlYSBhbmQgQWdiYWRhIGluIEFmcmljYS5cIixcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICB0eXBlTGV0dGVyKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUZXh0KCkge1xyXG4gICAgdGhpcy5jdXJyZW50SW50cm8rKztcclxuICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCJcIjtcclxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVt0aGlzLmN1cnJlbnRJbnRyb107XHJcbiAgfVxyXG5cclxuICBjYWxsQ3VycmVudFRleHQoKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50SW50cm8gPT0gdGhpcy5kdXJhdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLmR1cmF0aW9uW3RoaXMuY3VycmVudEludHJvXSk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmludHJvVk8sIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNhbGxFbmQoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhpdFZPLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgIH0sIDAuOCk7XHJcbiAgICB9LCAyLjUpO1xyXG4gIH1cclxuXHJcbiAgc2tpcEdhbWUoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIilcclxuICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgIC5wbGF5KFwiYW5pbVwiKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIC5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgfSwgMC44KTtcclxuICAgIH0sIDIuNSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
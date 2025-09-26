
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
        this.duration = [4.5, 24.5, 10.0, 5.5, 6.5, 8.2];
        this.TextArray = [
            "Today, let's learn about straight and curved lines.",
            "Look at the screen. Here, you can see two lines one is marked as a straight line and the other as a curved line. A straight line is the shortest distance between two points. It does not bend. A curved line is not straight it bends or changes direction.",
            "Straight lines can be of three types:\nHorizontal or sleeping line – this line goes straight across from left to right.",
            "Vertical or standing line – this line goes straight up and down.",
            "Slanting line – this line is tilted; it is neither horizontal nor vertical.",
            "We see these types of lines around us every day — in books, buildings, roads, and nature.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXEphaXB1cmlhX0ludHJvXFxpbnRyb2R1Y3Rpb25TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1SEM7UUFySEMsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBYSxFQUFFLENBQUM7O0lBcUczQixDQUFDO0lBbkdDLHlCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YscURBQXFEO1lBQ3JELDhQQUE4UDtZQUM5UCx5SEFBeUg7WUFDekgsa0VBQWtFO1lBQ2xFLDZFQUE2RTtZQUM3RSwyRkFBMkY7U0FDNUYsQ0FBQztJQUNKLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lB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QUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFwSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNLO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OENBQ087SUFHN0I7UUFEQyxRQUFRO2lEQUNpQjtJQVhQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1SDVCO0lBQUQsZUFBQztDQXZIRCxBQXVIQyxDQXZIcUMsRUFBRSxDQUFDLFNBQVMsR0F1SGpEO2tCQXZIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBpbnRyb1ZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIGV4aXRWTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gIHJpY2hUZXh0OiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIHR5cGluZ1NwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBjdXJyZW50SW50cm86IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBjdXJyZW50VGV4dDogc3RyaW5nID0gXCJcIjtcclxuICBkZWxheTogbnVtYmVyW10gPSBbXTtcclxuICBkdXJhdGlvbjogbnVtYmVyW10gPSBbXTtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgVGV4dEFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IFs0LjUsIDI0LjUsIDEwLjAsIDUuNSwgNi41LCA4LjJdO1xyXG4gICAgdGhpcy5UZXh0QXJyYXkgPSBbXHJcbiAgICAgIFwiVG9kYXksIGxldCdzIGxlYXJuIGFib3V0IHN0cmFpZ2h0IGFuZCBjdXJ2ZWQgbGluZXMuXCIsXHJcbiAgICAgIFwiTG9vayBhdCB0aGUgc2NyZWVuLiBIZXJlLCB5b3UgY2FuIHNlZSB0d28gbGluZXMgb25lIGlzIG1hcmtlZCBhcyBhIHN0cmFpZ2h0IGxpbmUgYW5kIHRoZSBvdGhlciBhcyBhIGN1cnZlZCBsaW5lLiBBIHN0cmFpZ2h0IGxpbmUgaXMgdGhlIHNob3J0ZXN0IGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cy4gSXQgZG9lcyBub3QgYmVuZC4gQSBjdXJ2ZWQgbGluZSBpcyBub3Qgc3RyYWlnaHQgaXQgYmVuZHMgb3IgY2hhbmdlcyBkaXJlY3Rpb24uXCIsXHJcbiAgICAgIFwiU3RyYWlnaHQgbGluZXMgY2FuIGJlIG9mIHRocmVlIHR5cGVzOlxcbkhvcml6b250YWwgb3Igc2xlZXBpbmcgbGluZSDigJMgdGhpcyBsaW5lIGdvZXMgc3RyYWlnaHQgYWNyb3NzIGZyb20gbGVmdCB0byByaWdodC5cIixcclxuICAgICAgXCJWZXJ0aWNhbCBvciBzdGFuZGluZyBsaW5lIOKAkyB0aGlzIGxpbmUgZ29lcyBzdHJhaWdodCB1cCBhbmQgZG93bi5cIixcclxuICAgICAgXCJTbGFudGluZyBsaW5lIOKAkyB0aGlzIGxpbmUgaXMgdGlsdGVkOyBpdCBpcyBuZWl0aGVyIGhvcml6b250YWwgbm9yIHZlcnRpY2FsLlwiLFxyXG4gICAgICBcIldlIHNlZSB0aGVzZSB0eXBlcyBvZiBsaW5lcyBhcm91bmQgdXMgZXZlcnkgZGF5IOKAlCBpbiBib29rcywgYnVpbGRpbmdzLCByb2FkcywgYW5kIG5hdHVyZS5cIixcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICB0eXBlTGV0dGVyKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR5cGVMZXR0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUZXh0KCkge1xyXG4gICAgdGhpcy5jdXJyZW50SW50cm8rKztcclxuICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gXCJcIjtcclxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLlRleHRBcnJheVt0aGlzLmN1cnJlbnRJbnRyb107XHJcbiAgfVxyXG5cclxuICBjYWxsQ3VycmVudFRleHQoKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJ0YWxrIGFjdGlvbiBsb29wXCIsIHRydWUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJqb2NrZXlcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50SW50cm8gPT0gdGhpcy5kdXJhdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmNhbGxFbmQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLmR1cmF0aW9uW3RoaXMuY3VycmVudEludHJvXSk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMuVGV4dEFycmF5W3RoaXMuY3VycmVudEludHJvXTtcclxuICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmludHJvVk8sIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNhbGxFbmQoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhpdFZPLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgLnBsYXkoXCJhbmltXCIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgIH0sIDAuOCk7XHJcbiAgICB9LCAyLjUpO1xyXG4gIH1cclxuXHJcbiAgc2tpcEdhbWUoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIilcclxuICAgICAgLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgIC5wbGF5KFwiYW5pbVwiKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIC5wbGF5KFwiYW5pbTJcIik7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgfSwgMC44KTtcclxuICAgIH0sIDIuNSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
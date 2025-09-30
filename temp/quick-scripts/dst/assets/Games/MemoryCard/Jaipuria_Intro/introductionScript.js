
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MemoryCard/Jaipuria_Intro/introductionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618adhIpn9Nvb2AnqKx4Hbi', 'introductionScript');
// Games/MemoryCard/Jaipuria_Intro/introductionScript.ts

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
        this.duration = [6.6, 8.2, 5, 4.6, 4.5, 5.2, 6.4, 4.0, 5.1, 4.8];
        this.TextArray = [
            "Today, let’s learn about some of the brave heroes who fought for Bharat’s freedom.",
            "Long ago, Bharat was under British control, but these leaders helped make our country free:",
            "Mahatma Gandhi, known for his peaceful protests.",
            "Rani Lakshmi Bai, the brave warrior queen.",
            "Bal Gangadhar Tilak, who believed in self-rule.",
            "Vijay Lakshmi Pandit, a great leader and diplomat.",
            "Maulana Abul Kalam Azad, who inspired millions with his ideas.",
            "Bhagat Singh, a young revolutionary.",
            "Subhash Chandra Bose, who led with strength and courage.",
            "Sardar Vallabh Bhai Patel, who united the country."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1lbW9yeUNhcmRcXEphaXB1cmlhX0ludHJvXFxpbnRyb2R1Y3Rpb25TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3R0M7UUFyR0csYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDakMsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBYSxFQUFFLENBQUE7O0lBcUY1QixDQUFDO0lBbkZHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLG9GQUFvRjtZQUNwRiw2RkFBNkY7WUFDN0Ysa0RBQWtEO1lBQ2xELDRDQUE0QztZQUM1QyxpREFBaUQ7WUFDakQsb0RBQW9EO1lBQ3BELGdFQUFnRTtZQUNoRSxzQ0FBc0M7WUFDdEMsMERBQTBEO1lBQzFELG9EQUFvRDtTQUN2RCxD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QUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFwR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNLO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OENBQ087SUFHN0I7UUFEQyxRQUFRO2lEQUNpQjtJQVpULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3RzVCO0lBQUQsZUFBQztDQXhHRCxBQXdHQyxDQXhHcUMsRUFBRSxDQUFDLFNBQVMsR0F3R2pEO2tCQXhHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGludHJvVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGV4aXRWTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXHJcbiAgICByaWNoVGV4dDogY2MuUmljaFRleHQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdHlwaW5nU3BlZWQ6IG51bWJlciA9IDAuMTtcclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW50cm86IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIGRlbGF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZHVyYXRpb246IG51bWJlcltdID0gW107XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBUZXh0QXJyYXk6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gWzYuNiwgOC4yLCA1LCA0LjYsIDQuNSwgNS4yLCA2LjQsIDQuMCwgNS4xLCA0LjhdXHJcbiAgICAgICAgdGhpcy5UZXh0QXJyYXkgPSBbXHJcbiAgICAgICAgICAgIFwiVG9kYXksIGxldOKAmXMgbGVhcm4gYWJvdXQgc29tZSBvZiB0aGUgYnJhdmUgaGVyb2VzIHdobyBmb3VnaHQgZm9yIEJoYXJhdOKAmXMgZnJlZWRvbS5cIixcclxuICAgICAgICAgICAgXCJMb25nIGFnbywgQmhhcmF0IHdhcyB1bmRlciBCcml0aXNoIGNvbnRyb2wsIGJ1dCB0aGVzZSBsZWFkZXJzIGhlbHBlZCBtYWtlIG91ciBjb3VudHJ5IGZyZWU6XCIsXHJcbiAgICAgICAgICAgIFwiTWFoYXRtYSBHYW5kaGksIGtub3duIGZvciBoaXMgcGVhY2VmdWwgcHJvdGVzdHMuXCIsXHJcbiAgICAgICAgICAgIFwiUmFuaSBMYWtzaG1pIEJhaSwgdGhlIGJyYXZlIHdhcnJpb3IgcXVlZW4uXCIsXHJcbiAgICAgICAgICAgIFwiQmFsIEdhbmdhZGhhciBUaWxhaywgd2hvIGJlbGlldmVkIGluIHNlbGYtcnVsZS5cIixcclxuICAgICAgICAgICAgXCJWaWpheSBMYWtzaG1pIFBhbmRpdCwgYSBncmVhdCBsZWFkZXIgYW5kIGRpcGxvbWF0LlwiLFxyXG4gICAgICAgICAgICBcIk1hdWxhbmEgQWJ1bCBLYWxhbSBBemFkLCB3aG8gaW5zcGlyZWQgbWlsbGlvbnMgd2l0aCBoaXMgaWRlYXMuXCIsXHJcbiAgICAgICAgICAgIFwiQmhhZ2F0IFNpbmdoLCBhIHlvdW5nIHJldm9sdXRpb25hcnkuXCIsXHJcbiAgICAgICAgICAgIFwiU3ViaGFzaCBDaGFuZHJhIEJvc2UsIHdobyBsZWQgd2l0aCBzdHJlbmd0aCBhbmQgY291cmFnZS5cIixcclxuICAgICAgICAgICAgXCJTYXJkYXIgVmFsbGFiaCBCaGFpIFBhdGVsLCB3aG8gdW5pdGVkIHRoZSBjb3VudHJ5LlwiXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50eXBlTGV0dGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUZXh0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEludHJvKys7XHJcbiAgICAgICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHlwZUxldHRlcik7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxDdXJyZW50VGV4dCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudHlwZUxldHRlciwgdGhpcy50eXBpbmdTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiam9ja2V5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGFsayBhY3Rpb24gbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbnRybyA9PSB0aGlzLmR1cmF0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxDdXJyZW50VGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvblt0aGlzLmN1cnJlbnRJbnRyb10pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5UZXh0QXJyYXlbdGhpcy5jdXJyZW50SW50cm9dO1xyXG4gICAgICAgIHRoaXMuY2FsbEN1cnJlbnRUZXh0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaW50cm9WTywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxFbmQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmV4aXRWTywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW1cIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmFuc2l0aW9uXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJhbmltMlwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0sIDIuNSlcclxuICAgIH1cclxuXHJcbiAgICBza2lwR2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJhbnNpdGlvblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zaXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImFuaW0yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcbn0iXX0=
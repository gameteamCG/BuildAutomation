
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5066f8YXv5M4rP4gJr2ulON', 'endScreen');
// Game/Painting_template/Script/endScreen.ts

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
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var endScreen = /** @class */ (function (_super) {
    __extends(endScreen, _super);
    function endScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
        // update (dt) {}
    }
    endScreen.prototype.onLoad = function () {
        this.node.getChildByName("bgimg").getComponent(cc.Sprite).spriteFrame = globalVariables_1.default.Instance.mainBg;
        console.log("showedScreen--wellDone");
        this.scheduleOnce(function () {
            console.log("gameEnded--true");
        }, 2);
    };
    endScreen.prototype.start = function () {
        if (globalVariables_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "bag" || globalVariables_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        this.node.getChildByName("jockey").getChildByName(globalVariables_1.default.Instance.jockeyName).active = true;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "supercubEnd", void 0);
    endScreen = __decorate([
        ccclass
    ], endScreen);
    return endScreen;
}(cc.Component));
exports.default = endScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9lbmRTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdUNDO1FBckNHLHdCQUF3QjtRQUVoQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztRQTRCM0MsaUJBQWlCO0lBQ3JCLENBQUM7SUEzQkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNGO2FBQ0ksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDckcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM5RjthQUNJLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pGO2FBQ0ksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUY7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUV6RyxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDa0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNrQjtJQVYxQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUM3QjtJQUFELGdCQUFDO0NBdkNELEFBdUNDLENBdkNzQyxFQUFFLENBQUMsU0FBUyxHQXVDbEQ7a0JBdkNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlbmRTY3JlZW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcG9kYXJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBqYWlwdXJpYUVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHN1cGVyY3ViRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLm1haW5CZztcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLXdlbGxEb25lXCIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcbiAgICAgICAgfSwgMik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5qYWlwdXJpYUVuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy50bGNFbmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdXBlcmN1YkVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDaGlsZEJ5TmFtZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
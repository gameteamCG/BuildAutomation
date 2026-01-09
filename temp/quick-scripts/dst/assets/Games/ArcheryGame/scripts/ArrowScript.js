
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/ArrowScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be5564i40RE2JmZzUp63nx9', 'ArrowScript');
// Games/ArcheryGame/scripts/ArrowScript.ts

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
var Constants_1 = require("../utils/Constants");
var EventSystem_1 = require("../utils/EventSystem");
var Target_1 = require("./Target");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ArrowScript = /** @class */ (function (_super) {
    __extends(ArrowScript, _super);
    function ArrowScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidBody = null;
        return _this;
    }
    ArrowScript.prototype.onLoad = function () {
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.rigidBody.gravityScale = 0;
    };
    ArrowScript.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.tag == Constants_1.COLLISION_TAGS.TARGET) {
            var otherTarget = otherCollider.node.getComponent(Target_1.default);
            console.log("collided with target");
            this.scheduleOnce(function () {
                _this.rigidBody.type = cc.RigidBodyType.Static;
            }, 0.001);
            EventSystem_1.default.emit(Constants_1.GAME_EVENTS.HIT, otherTarget);
        }
        if (otherCollider.tag == Constants_1.COLLISION_TAGS.BOUNDS) {
            console.log("collided with boundary");
            EventSystem_1.default.emit(Constants_1.GAME_EVENTS.MISS);
        }
    };
    ArrowScript = __decorate([
        ccclass
    ], ArrowScript);
    return ArrowScript;
}(cc.Component));
exports.default = ArrowScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxBcnJvd1NjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBaUU7QUFDakUsb0RBQTBDO0FBQzFDLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTBCQztRQXpCUyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUF5QnpDLENBQUM7SUF2QlcsNEJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFDRSxPQUEwQixFQUMxQixZQUFnQyxFQUNoQyxhQUFpQztRQUhuQyxpQkFpQkM7UUFaQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksMEJBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNoRCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDVixxQkFBTSxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSwwQkFBYyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMscUJBQU0sQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUF6QmtCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQi9CO0lBQUQsa0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLEVBQUUsQ0FBQyxTQUFTLEdBMEJwRDtrQkExQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT0xMSVNJT05fVEFHUywgR0FNRV9FVkVOVFMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XHJcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gIH1cclxuXHJcbiAgb25CZWdpbkNvbnRhY3QoXHJcbiAgICBjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCxcclxuICAgIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLFxyXG4gICAgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyXHJcbiAgKSB7XHJcbiAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT0gQ09MTElTSU9OX1RBR1MuVEFSR0VUKSB7XHJcbiAgICAgIGxldCBvdGhlclRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlZCB3aXRoIHRhcmdldFwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgfSwgMC4wMDEpO1xyXG4gICAgICBFVkVOVFMuZW1pdChHQU1FX0VWRU5UUy5ISVQsIG90aGVyVGFyZ2V0KTtcclxuICAgIH1cclxuICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PSBDT0xMSVNJT05fVEFHUy5CT1VORFMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlZCB3aXRoIGJvdW5kYXJ5XCIpO1xyXG4gICAgICBFVkVOVFMuZW1pdChHQU1FX0VWRU5UUy5NSVNTKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
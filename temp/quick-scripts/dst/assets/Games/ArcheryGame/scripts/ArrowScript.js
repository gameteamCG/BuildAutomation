
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS9zY3JpcHRzL0Fycm93U2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUFpRTtBQUNqRSxvREFBMEM7QUFDMUMsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEJDO1FBekJTLGVBQVMsR0FBaUIsSUFBSSxDQUFDOztJQXlCekMsQ0FBQztJQXZCVyw0QkFBTSxHQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUNFLE9BQTBCLEVBQzFCLFlBQWdDLEVBQ2hDLGFBQWlDO1FBSG5DLGlCQWlCQztRQVpDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSwwQkFBYyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2hELENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLHFCQUFNLENBQUMsSUFBSSxDQUFDLHVCQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxhQUFhLENBQUMsR0FBRyxJQUFJLDBCQUFjLENBQUMsTUFBTSxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxxQkFBTSxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQXpCa0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBCL0I7SUFBRCxrQkFBQztDQTFCRCxBQTBCQyxDQTFCd0MsRUFBRSxDQUFDLFNBQVMsR0EwQnBEO2tCQTFCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTExJU0lPTl9UQUdTLCBHQU1FX0VWRU5UUyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XG5pbXBvcnQgVGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIHRoaXMucmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IDA7XG4gIH1cblxuICBvbkJlZ2luQ29udGFjdChcbiAgICBjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCxcbiAgICBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcixcbiAgICBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXJcbiAgKSB7XG4gICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09IENPTExJU0lPTl9UQUdTLlRBUkdFVCkge1xuICAgICAgbGV0IG90aGVyVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChUYXJnZXQpO1xuICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlZCB3aXRoIHRhcmdldFwiKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xuICAgICAgfSwgMC4wMDEpO1xuICAgICAgRVZFTlRTLmVtaXQoR0FNRV9FVkVOVFMuSElULCBvdGhlclRhcmdldCk7XG4gICAgfVxuICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PSBDT0xMSVNJT05fVEFHUy5CT1VORFMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZWQgd2l0aCBib3VuZGFyeVwiKTtcbiAgICAgIEVWRU5UUy5lbWl0KEdBTUVfRVZFTlRTLk1JU1MpO1xuICAgIH1cbiAgfVxufVxuIl19
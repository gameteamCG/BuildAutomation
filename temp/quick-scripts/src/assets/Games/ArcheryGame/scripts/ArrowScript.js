"use strict";
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
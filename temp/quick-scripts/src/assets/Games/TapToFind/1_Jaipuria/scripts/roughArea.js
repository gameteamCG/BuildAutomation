"use strict";
cc._RF.push(module, 'a8b24k22v1PqrZk3dxoCIuU', 'roughArea');
// Games/TapToFind/1_Jaipuria/scripts/roughArea.ts

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
var gameplay_1 = require("../../../Scripts/gameplay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var roughArea = /** @class */ (function (_super) {
    __extends(roughArea, _super);
    function roughArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tapSound = null;
        _this.graphicsPrefab = null;
        _this.currentColor = cc.Color.BLACK;
        return _this;
    }
    roughArea_1 = roughArea;
    roughArea.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        roughArea_1.instance = this;
    };
    Object.defineProperty(roughArea, "Instance", {
        get: function () {
            return roughArea_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    roughArea.prototype.closeRoughArea = function () {
        this.node.getChildByName("GraphicParent").children.forEach(function (Element) {
            Element.getComponent(cc.Graphics).clear();
        });
        this.node.active = false;
        gameplay_1.default.Instance.roughSheetMode = false;
        gameplay_1.default.Instance.node.getChildByName("Blocker").active = false;
    };
    roughArea.prototype.selectTool = function (_event) {
        cc.audioEngine.playEffect(this.tapSound, false);
        if (_event.target.name == "pencil") {
            this.currentColor = cc.Color.BLACK;
        }
        else if (_event.target.name == "clearbrush") {
            this.node.getChildByName("GraphicParent").children.forEach(function (Element) {
                Element.getComponent(cc.Graphics).clear();
            });
        }
        else if (_event.target.name == "eraser") {
            this.currentColor = cc.Color.WHITE;
        }
    };
    var roughArea_1;
    roughArea.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], roughArea.prototype, "tapSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], roughArea.prototype, "graphicsPrefab", void 0);
    roughArea = roughArea_1 = __decorate([
        ccclass
    ], roughArea);
    return roughArea;
}(cc.Component));
exports.default = roughArea;
// toggleRoughSheet() {
//     if (this.roughSheetMode == true) return;
//     this.roughSheetMode = true;
//     this.node.getChildByName("roughArea").active = true;
//     this.node.getChildByName("Blocker").active = true;
//     if (globalVariables.Instance.currentLevel == 1) {
//         let hand = this.node.getChildByName("questionBar").getChildByName("HandInduction");
//         hand.getComponent(cc.Animation).stop();
//         hand.active = false;
//     }
// }

cc._RF.pop();
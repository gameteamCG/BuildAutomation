
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/roughArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b24k22v1PqrZk3dxoCIuU', 'roughArea');
// Games/ArcheryGame/scripts/roughArea.ts

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
var GameManager_1 = require("./GameManager");
var graphics_1 = require("./graphics");
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
        GameManager_1.default.roughSheetMode = false;
        var graphicsScript = this.node
            .getChildByName("GraphicParent")
            .getChildByName("Graphics")
            .getComponent(graphics_1.default);
        // graphicsScript.clearTouchesArray();
        // startGame.Instance.node
        //   .getChildByName("BtnSlate")
        //   .getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxyb3VnaEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStDQztRQTdDQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQXdDMUMsQ0FBQztrQkEvQ29CLFNBQVM7SUFVNUIsMEJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBVyxxQkFBUTthQUFuQjtZQUNFLE9BQU8sV0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELGtDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNqRSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBVyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDM0IsY0FBYyxDQUFDLGVBQWUsQ0FBQzthQUMvQixjQUFjLENBQUMsVUFBVSxDQUFDO2FBQzFCLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7UUFDMUIsc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixnQ0FBZ0M7UUFDaEMsa0RBQWtEO0lBQ3BELENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsTUFBZ0I7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7SUF0Q2Msa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFOMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNhO0lBTGQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStDN0I7SUFBRCxnQkFBQztDQS9DRCxBQStDQyxDQS9Dc0MsRUFBRSxDQUFDLFNBQVMsR0ErQ2xEO2tCQS9Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdyYXBoaWNzIGZyb20gXCIuL2dyYXBoaWNzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgcm91Z2hBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHRhcFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGdyYXBoaWNzUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBjdXJyZW50Q29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHJvdWdoQXJlYSA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICByb3VnaEFyZWEuaW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgIHJldHVybiByb3VnaEFyZWEuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZVJvdWdoQXJlYSgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNQYXJlbnRcIikuY2hpbGRyZW4uZm9yRWFjaCgoRWxlbWVudCkgPT4ge1xyXG4gICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUgPSBmYWxzZTtcclxuICAgIGxldCBncmFwaGljc1NjcmlwdCA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJHcmFwaGljUGFyZW50XCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNzXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoR3JhcGhpY3MpO1xyXG4gICAgLy8gZ3JhcGhpY3NTY3JpcHQuY2xlYXJUb3VjaGVzQXJyYXkoKTtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlXHJcbiAgICAvLyAgIC5nZXRDaGlsZEJ5TmFtZShcIkJ0blNsYXRlXCIpXHJcbiAgICAvLyAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VG9vbChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGFwU291bmQsIGZhbHNlKTtcclxuICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJwZW5jaWxcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgfSBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJjbGVhcmJydXNoXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JhcGhpY1BhcmVudFwiKS5jaGlsZHJlbi5mb3JFYWNoKChFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgRWxlbWVudC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJlcmFzZXJcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
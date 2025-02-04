
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS9zY3JpcHRzL3JvdWdoQXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBd0M7QUFDeEMsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK0NDO1FBN0NDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7O0lBd0MxQyxDQUFDO2tCQS9Db0IsU0FBUztJQVU1QiwwQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsV0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLHFCQUFRO2FBQW5CO1lBQ0UsT0FBTyxXQUFTLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsa0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ2pFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHFCQUFXLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSTthQUMzQixjQUFjLENBQUMsZUFBZSxDQUFDO2FBQy9CLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDMUIsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUMxQixzQ0FBc0M7UUFDdEMsMEJBQTBCO1FBQzFCLGdDQUFnQztRQUNoQyxrREFBa0Q7SUFDcEQsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxNQUFnQjtRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDakUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDSCxDQUFDOztJQXRDYyxrQkFBUSxHQUFjLElBQUksQ0FBQztJQU4xQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2E7SUFMZCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0M3QjtJQUFELGdCQUFDO0NBL0NELEFBK0NDLENBL0NzQyxFQUFFLENBQUMsU0FBUyxHQStDbEQ7a0JBL0NvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHcmFwaGljcyBmcm9tIFwiLi9ncmFwaGljc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgcm91Z2hBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgdGFwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgZ3JhcGhpY3NQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgY3VycmVudENvbG9yOiBjYy5Db2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogcm91Z2hBcmVhID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICByb3VnaEFyZWEuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gcm91Z2hBcmVhLmluc3RhbmNlO1xuICB9XG5cbiAgY2xvc2VSb3VnaEFyZWEoKSB7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JhcGhpY1BhcmVudFwiKS5jaGlsZHJlbi5mb3JFYWNoKChFbGVtZW50KSA9PiB7XG4gICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUgPSBmYWxzZTtcbiAgICBsZXQgZ3JhcGhpY3NTY3JpcHQgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNQYXJlbnRcIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNzXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KEdyYXBoaWNzKTtcbiAgICAvLyBncmFwaGljc1NjcmlwdC5jbGVhclRvdWNoZXNBcnJheSgpO1xuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlXG4gICAgLy8gICAuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5TbGF0ZVwiKVxuICAgIC8vICAgLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gIH1cblxuICBzZWxlY3RUb29sKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGFwU291bmQsIGZhbHNlKTtcbiAgICBpZiAoX2V2ZW50LnRhcmdldC5uYW1lID09IFwicGVuY2lsXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudENvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XG4gICAgfSBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJjbGVhcmJydXNoXCIpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNQYXJlbnRcIikuY2hpbGRyZW4uZm9yRWFjaCgoRWxlbWVudCkgPT4ge1xuICAgICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoX2V2ZW50LnRhcmdldC5uYW1lID09IFwiZXJhc2VyXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgfVxuICB9XG59XG4iXX0=
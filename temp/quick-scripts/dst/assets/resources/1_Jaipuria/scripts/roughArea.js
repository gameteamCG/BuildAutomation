
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/1_Jaipuria/scripts/roughArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b24k22v1PqrZk3dxoCIuU', 'roughArea');
// resources/1_Jaipuria/scripts/roughArea.ts

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
        // gameplay.Instance.node.getChildByName("Blocker").active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFwxX0phaXB1cmlhXFxzY3JpcHRzXFxyb3VnaEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE2Q0M7UUExQ0csY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFxQzVDLENBQUM7a0JBN0NvQixTQUFTO0lBWTFCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcscUJBQVE7YUFBbkI7WUFDSSxPQUFPLFdBQVMsQ0FBQyxRQUFRLENBQUE7UUFDN0IsQ0FBQzs7O09BQUE7SUFHRCxrQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDOUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsbUVBQW1FO0lBQ3ZFLENBQUM7SUFHRCw4QkFBVSxHQUFWLFVBQVcsTUFBZ0I7UUFDdkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3RDO2FBQ0ksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzlELE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFBO1NBQ0w7YUFDSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQzs7SUFuQ2Msa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFOMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNhO0lBTmhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2QzdCO0lBQUQsZ0JBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBNkNsRDtrQkE3Q29CLFNBQVM7QUFnRDlCLHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDJEQUEyRDtBQUMzRCx5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELDhGQUE4RjtBQUM5RixrREFBa0Q7QUFDbEQsK0JBQStCO0FBQy9CLFFBQVE7QUFDUixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByb3VnaEFyZWEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICB0YXBTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JhcGhpY3NQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudENvbG9yOiBjYy5Db2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHJvdWdoQXJlYSA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHJvdWdoQXJlYS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gcm91Z2hBcmVhLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsb3NlUm91Z2hBcmVhKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNQYXJlbnRcIikuY2hpbGRyZW4uZm9yRWFjaChFbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgRWxlbWVudC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZ2FtZXBsYXkuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJsb2NrZXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdFRvb2woX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50YXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJwZW5jaWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJjbGVhcmJydXNoXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JhcGhpY1BhcmVudFwiKS5jaGlsZHJlbi5mb3JFYWNoKEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9ldmVudC50YXJnZXQubmFtZSA9PSBcImVyYXNlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gdG9nZ2xlUm91Z2hTaGVldCgpIHtcclxuLy8gICAgIGlmICh0aGlzLnJvdWdoU2hlZXRNb2RlID09IHRydWUpIHJldHVybjtcclxuLy8gICAgIHRoaXMucm91Z2hTaGVldE1vZGUgPSB0cnVlO1xyXG4vLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicm91Z2hBcmVhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbi8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbG9ja2VyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbi8vICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbi8vICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvbkJhclwiKS5nZXRDaGlsZEJ5TmFtZShcIkhhbmRJbmR1Y3Rpb25cIik7XHJcbi8vICAgICAgICAgaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbi8vICAgICAgICAgaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ==
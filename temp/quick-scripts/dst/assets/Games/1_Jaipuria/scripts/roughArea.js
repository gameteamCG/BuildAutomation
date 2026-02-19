
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/1_Jaipuria/scripts/roughArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b24k22v1PqrZk3dxoCIuU', 'roughArea');
// Games/1_Jaipuria/scripts/roughArea.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXDFfSmFpcHVyaWFcXHNjcmlwdHNcXHJvdWdoQXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTZDQztRQTFDRyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQXFDNUMsQ0FBQztrQkE3Q29CLFNBQVM7SUFZMUIsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyxxQkFBUTthQUFuQjtZQUNJLE9BQU8sV0FBUyxDQUFDLFFBQVEsQ0FBQTtRQUM3QixDQUFDOzs7T0FBQTtJQUdELGtDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUM5RCxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixtRUFBbUU7SUFDdkUsQ0FBQztJQUdELDhCQUFVLEdBQVYsVUFBVyxNQUFnQjtRQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDdEM7YUFDSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDOUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUNJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDdEM7SUFDTCxDQUFDOztJQW5DYyxrQkFBUSxHQUFjLElBQUksQ0FBQztJQU4xQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2E7SUFOaEIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZDN0I7SUFBRCxnQkFBQztDQTdDRCxBQTZDQyxDQTdDc0MsRUFBRSxDQUFDLFNBQVMsR0E2Q2xEO2tCQTdDb0IsU0FBUztBQWdEOUIsdUJBQXVCO0FBQ3ZCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkRBQTJEO0FBQzNELHlEQUF5RDtBQUN6RCx3REFBd0Q7QUFDeEQsOEZBQThGO0FBQzlGLGtEQUFrRDtBQUNsRCwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJvdWdoQXJlYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHRhcFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBncmFwaGljc1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBjdXJyZW50Q29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogcm91Z2hBcmVhID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgcm91Z2hBcmVhLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiByb3VnaEFyZWEuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xvc2VSb3VnaEFyZWEoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JhcGhpY1BhcmVudFwiKS5jaGlsZHJlbi5mb3JFYWNoKEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBnYW1lcGxheS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxvY2tlclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VsZWN0VG9vbChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRhcFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKF9ldmVudC50YXJnZXQubmFtZSA9PSBcInBlbmNpbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9ldmVudC50YXJnZXQubmFtZSA9PSBcImNsZWFyYnJ1c2hcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHcmFwaGljUGFyZW50XCIpLmNoaWxkcmVuLmZvckVhY2goRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoX2V2ZW50LnRhcmdldC5uYW1lID09IFwiZXJhc2VyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyB0b2dnbGVSb3VnaFNoZWV0KCkge1xyXG4vLyAgICAgaWYgKHRoaXMucm91Z2hTaGVldE1vZGUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4vLyAgICAgdGhpcy5yb3VnaFNoZWV0TW9kZSA9IHRydWU7XHJcbi8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb3VnaEFyZWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJsb2NrZXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuLy8gICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuLy8gICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uQmFyXCIpLmdldENoaWxkQnlOYW1lKFwiSGFuZEluZHVjdGlvblwiKTtcclxuLy8gICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuLy8gICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19
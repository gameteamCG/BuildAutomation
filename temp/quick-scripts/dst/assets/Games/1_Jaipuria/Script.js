
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/1_Jaipuria/Script.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '017fb5atcpB6LJIrukduWL0', 'Script');
// Games/1_Jaipuria/Script.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXDFfSmFpcHVyaWFcXFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFvRkEsQ0FBQztJQXBGb0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9GNUI7SUFBRCxlQUFDO0NBcEZELEFBb0ZDLENBcEZxQyxFQUFFLENBQUMsU0FBUyxHQW9GakQ7a0JBcEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyB0aW1lclNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbG9hZGluZ0JhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHBsYXlfYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHBvc2l0aXZlVk86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIG5lZ2F0aXZlVk86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cclxuICAgIC8vIE9uU3RhcnRHYW1lKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5X2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAvLyB0aGlzLmxvYWRpbmdCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIF9ldmVudC50YXJnZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBFbmRCdXR0b24oKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgLy8gICAgIGNsb3NlV2luZG93KCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmNsb3NlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIH0sIDMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gY2FsbEpvY2tleSgpIHtcclxuICAgIC8vICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8vICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTUwMCwgMTUwMF07XHJcbiAgICAvLyAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDAwLCA0MDBdO1xyXG4gICAgLy8gICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1cIiwgbmFtZSk7XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUueCA9IHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl07XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbltnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgNV0sIGZhbHNlKTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5wb3NpdGl2ZVZPW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSA1XSwgZmFsc2UpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tXCIsIG5hbWUpO1xyXG4gICAgLy8gICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5wb3NpdGl2ZVZPW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSA1XS5kdXJhdGlvbiArIDAuNSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY2FsbE5lZ0pvY2tleSgpIHtcclxuICAgIC8vICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQrKztcclxuICAgIC8vICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8vICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTUwMCwgMTUwMF07XHJcbiAgICAvLyAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDAwLCA0MDBdO1xyXG4gICAgLy8gICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1cIiArIG5hbWUpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbdGhpcy53cm9uZ0Fuc3dlckNvdW50ICUgMl07XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2Vlblt0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW3RoaXMud3JvbmdBbnN3ZXJDb3VudCAlIDJdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UubmVnYXRpdmVWT1t0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSwgZmFsc2UpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc1t0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVwiICsgbmFtZSk7XHJcbiAgICAvLyAgICAgfSwgMS41KTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19
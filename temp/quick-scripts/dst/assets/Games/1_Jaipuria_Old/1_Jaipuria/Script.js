
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/1_Jaipuria_Old/1_Jaipuria/Script.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '017fb5atcpB6LJIrukduWL0', 'Script');
// Games/1_Jaipuria_Old/1_Jaipuria/Script.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXDFfSmFpcHVyaWFfT2xkXFwxX0phaXB1cmlhXFxTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMEVBLENBQUM7SUExRW9CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRTVCO0lBQUQsZUFBQztDQTFFRCxBQTBFQyxDQTFFcUMsRUFBRSxDQUFDLFNBQVMsR0EwRWpEO2tCQTFFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gdGltZXJTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxvYWRpbmdCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBwbGF5X2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBwb3NpdGl2ZVZPOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBuZWdhdGl2ZVZPOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBPblN0YXJ0R2FtZShfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgLy8gdGhpcy5sb2FkaW5nQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyBfZXZlbnQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICBjbG9zZVdpbmRvdygpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBjbG9zZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIC8vICAgICB3aW5kb3cub3Blbihsb2NhdGlvbi5ocmVmLCBcIl9zZWxmXCIsIFwiXCIpO1xyXG4gICAgLy8gICAgIHdpbmRvdy5jbG9zZSgpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gd3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8vIGNhbGxKb2NrZXkoKSB7XHJcbiAgICAvLyAgICAgbGV0IG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvLyAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE1MDAsIDE1MDBdO1xyXG4gICAgLy8gICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQwMCwgNDAwXTtcclxuICAgIC8vICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tXCIsIG5hbWUpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDVdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucG9zaXRpdmVWT1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgNV0sIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVwiLCBuYW1lKTtcclxuICAgIC8vICAgICB9LCBzdGFydEdhbWUuSW5zdGFuY2UucG9zaXRpdmVWT1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgNV0uZHVyYXRpb24gKyAwLjUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY2FsbE5lZ0pvY2tleSgpIHtcclxuICAgIC8vICAgICB0aGlzLndyb25nQW5zd2VyQ291bnQrKztcclxuICAgIC8vICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8vICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTUwMCwgMTUwMF07XHJcbiAgICAvLyAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDAwLCA0MDBdO1xyXG4gICAgLy8gICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1cIiArIG5hbWUpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbdGhpcy53cm9uZ0Fuc3dlckNvdW50ICUgMl07XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2Vlblt0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW3RoaXMud3JvbmdBbnN3ZXJDb3VudCAlIDJdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UubmVnYXRpdmVWT1t0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSwgZmFsc2UpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc1t0aGlzLndyb25nQW5zd2VyQ291bnQgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVwiICsgbmFtZSk7XHJcbiAgICAvLyAgICAgfSwgMS41KTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19
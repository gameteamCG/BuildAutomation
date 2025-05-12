
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Assets/1_PIET/Script.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6993aAaJq9IWq5cNxKYJBDP', 'Script');
// Games/WhatWillHappenNext/Assets/1_PIET/Script.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9XaGF0V2lsbEhhcHBlbk5leHQvQXNzZXRzLzFfUElFVC9TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBNEdBLENBQUM7SUE1R29CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RzVCO0lBQUQsZUFBQztDQTVHRCxBQTRHQyxDQTVHcUMsRUFBRSxDQUFDLFNBQVMsR0E0R2pEO2tCQTVHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIC8vIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICAvLyBsb2FkaW5nQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIC8vIHBsYXlfYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIC8vIHRpbWVyU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIC8vIE9uU3RhcnRHYW1lKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlfYXVkaW8sIGZhbHNlKTtcbiAgICAvLyAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgX2V2ZW50LnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoKTtcbiAgICAvLyB9XG5cblxuICAgIC8vIGxvYWRTY2VuZVdpdGhQcm9ncmVzcygpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMubG9hZGluZ0Jhcikge1xuICAgIC8vICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lLCAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAvLyAgICAgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG5cblx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcblxuICAgIC8vIEVuZEJ1dHRvbigpIHtcblx0Ly9cdCAgIGNvbnNvbGUubG9nKFwiZ2FtZUVuZGVkLS1cIiArIHRydWUpO1xuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5wbGF5X2F1ZGlvLCBmYWxzZSk7XG4gICAgLy8gICAgIGNsb3NlV2luZG93KCk7XG4gICAgLy8gfVxuXG5cbiAgICAvLyBjb25zdCBjbG9zZVdpbmRvdyA9ICgpID0+IHtcbiAgICAvLyAgICAgd2luZG93Lm9wZW4obG9jYXRpb24uaHJlZiwgXCJfc2VsZlwiLCBcIlwiKTtcbiAgICAvLyAgICAgd2luZG93LmNsb3NlKClcbiAgICAvLyB9XG5cbiAgICAvLyBjdXJUaW1lcjogbnVtYmVyID0gMDtcbiAgICAvLyB0aW1lclNjaGVkdWxlID0gKCkgPT4ge1xuICAgIC8vICAgICAtLXRoaXMuY3VyVGltZXI7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJUaW1lci50b1N0cmluZygpO1xuICAgIC8vICAgICBpZiAodGhpcy5jdXJUaW1lciA9PSAxMCkge1xuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRpbWVyU291bmQsIHRydWUpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuY3VyVGltZXIgPT0gMCkge1xuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gc3RhcnRUaW1lcih0b3RhbFRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lclwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMzBcIjtcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGltZXJcIikpXG4gICAgLy8gICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgIHRoaXMuY3VyVGltZXIgPSB0b3RhbFRpbWU7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lclNjaGVkdWxlLCAxLCB0b3RhbFRpbWUgLSAxKTtcbiAgICAvLyB9XG5cbiAgICAvLyBzdG9wVGltZXIoKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpKVxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lclNjaGVkdWxlKVxuICAgIC8vIH07XG5cblxuICAgIC8vIHdyb25nQW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsbEpvY2tleSgpIHtcbiAgICAvLyAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTEyMDAsIDEyMDBdO1xuICAgIC8vICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00MDAsIDQwMF07XG4gICAgLy8gICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdO1xuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgNV0sIGZhbHNlKTtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucG9zaXRpdmVWT1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgNV0sIGZhbHNlKTtcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgIC8vICAgICAgICAgdGhpcy5sZXZlbGNvbXBsZXRlKCk7XG4gICAgLy8gICAgIH0sIHN0YXJ0R2FtZS5JbnN0YW5jZS5wb3NpdGl2ZVZPW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSA1XS5kdXJhdGlvbiArIDAuNSk7XG4gICAgLy8gfVxuICAgIC8vIGNhbGxOZWdKb2NrZXkoKSB7XG4gICAgLy8gICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xuICAgIC8vICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XG4gICAgLy8gICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQwMCwgNDAwXTtcbiAgICAvLyAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdO1xuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVt0aGlzLndyb25nQW5zd2VyQ291bnQgJSA0XSwgZmFsc2UpO1xuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5uZWdhdGl2ZVZPW3RoaXMud3JvbmdBbnN3ZXJDb3VudCAlIDJdLCBmYWxzZSlcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgIC8vICAgICB9LCAxLjUpO1xuICAgIC8vIH1cblxufVxuIl19
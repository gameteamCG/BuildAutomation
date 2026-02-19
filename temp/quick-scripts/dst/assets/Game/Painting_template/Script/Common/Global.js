
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '081aatToNFOVoq6EWwszBiy', 'Global');
// Game/Painting_template/Script/Common/Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PersistentScrollInstance = null;
        return _this;
    }
    Global_1 = Global;
    Object.defineProperty(Global, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new Global_1;
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Global.prototype.start = function () {
    };
    var Global_1;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9Db21tb24vR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUJDO1FBYlUsOEJBQXdCLEdBQUcsSUFBSSxDQUFDOztJQWEzQyxDQUFDO2VBakJvQixNQUFNO0lBTXZCLHNCQUFXLGtCQUFRO2FBQW5CO1lBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QjtZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUssR0FBTDtJQUNBLENBQUM7O0lBaEJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaUIxQjtJQUFELGFBQUM7Q0FqQkQsQUFpQkMsQ0FqQm1DLEVBQUUsQ0FBQyxTQUFTLEdBaUIvQztrQkFqQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IERyYXdpbmdtYXNrIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nbWFza1wiO1xuaW1wb3J0IERyYXdpbmdUYWJsZSBmcm9tIFwiLi4vR2FtZVBsYXkvRHJhd2luZ1RhYmxlXCI7XG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi4vR2FtZVBsYXkvUGVyc2lzdGVudC9QZXJzaXN0ZW50U2Nyb2xsXCI7XG5pbXBvcnQgVGlsZVNlbGVjdGlvbiBmcm9tIFwiLi4vR2FtZVBsYXkvVGlsZVNlbGVjdGlvblwiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9hdWRpb01hbmFnZXJcIjtcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdsb2JhbDtcblxuICAgIHB1YmxpYyBQZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2UgPSBudWxsO1xuXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHbG9iYWw7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgfVxufVxuIl19
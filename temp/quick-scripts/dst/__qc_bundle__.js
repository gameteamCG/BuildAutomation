
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Framework/Jockeys/Scripts/Jockey');
require('./assets/Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/WordBlend/scripts/GameEnd');
require('./assets/Games/WordBlend/scripts/gameplay');
require('./assets/resources/empty');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/empty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ed58L86ApA2aEJTLxWoeUw', 'empty');
// resources/empty.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxlbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Jockeys/Scripts/Jockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a640pa0TNB9oUElOq2DHqb', 'Jockey');
// Framework/Jockeys/Scripts/Jockey.ts

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
var Jockey = /** @class */ (function (_super) {
    __extends(Jockey, _super);
    function Jockey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jockey_1 = Jockey;
    Object.defineProperty(Jockey, "Instance", {
        get: function () {
            return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    Jockey.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        Jockey_1.instance = this;
    };
    Jockey.prototype.start = function () {
    };
    Jockey.prototype.CallJockey = function (_animName, _loop, _isMultipleAnim, _secondAnimName, _isSecondLoop, _waitTime) {
        if (_loop === void 0) { _loop = false; }
        if (_isMultipleAnim === void 0) { _isMultipleAnim = false; }
        if (_secondAnimName === void 0) { _secondAnimName = null; }
        if (_isSecondLoop === void 0) { _isSecondLoop = false; }
        if (_waitTime === void 0) { _waitTime = 0; }
        this.node.getComponent(sp.Skeleton).setAnimation(0, _animName, _loop);
        if (_isMultipleAnim) {
            this.node.getComponent(sp.Skeleton).addAnimation(0, _secondAnimName, _isSecondLoop, 8);
        }
    };
    var Jockey_1;
    // LIFE-CYCLE CALLBACKS:
    Jockey.instance = null;
    Jockey = Jockey_1 = __decorate([
        ccclass
    ], Jockey);
    return Jockey;
}(cc.Component));
exports.default = Jockey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxKb2NrZXlzXFxTY3JpcHRzXFxKb2NrZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBMEJBLENBQUM7ZUExQm9CLE1BQU07SUFJdkIsc0JBQVcsa0JBQVE7YUFBbkI7WUFDSSxPQUFPLFFBQU0sQ0FBQyxRQUFRLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNJLHlDQUF5QztRQUN6QyxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBaUIsRUFBRSxLQUFzQixFQUFFLGVBQWdDLEVBQUUsZUFBOEIsRUFBRSxhQUE4QixFQUFFLFNBQWE7UUFBdkksc0JBQUEsRUFBQSxhQUFzQjtRQUFFLGdDQUFBLEVBQUEsdUJBQWdDO1FBQUUsZ0NBQUEsRUFBQSxzQkFBOEI7UUFBRSw4QkFBQSxFQUFBLHFCQUE4QjtRQUFFLDBCQUFBLEVBQUEsYUFBYTtRQUNqSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxlQUFlLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxRjtJQUNMLENBQUM7O0lBdEJELHdCQUF3QjtJQUNULGVBQVEsR0FBVyxJQUFJLENBQUM7SUFIdEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBCMUI7SUFBRCxhQUFDO0NBMUJELEFBMEJDLENBMUJtQyxFQUFFLENBQUMsU0FBUyxHQTBCL0M7a0JBMUJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvY2tleSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSm9ja2V5ID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpvY2tleS5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIEpvY2tleS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIENhbGxKb2NrZXkoX2FuaW1OYW1lOiBzdHJpbmcsIF9sb29wOiBib29sZWFuID0gZmFsc2UsIF9pc011bHRpcGxlQW5pbTogYm9vbGVhbiA9IGZhbHNlLCBfc2Vjb25kQW5pbU5hbWU6IHN0cmluZyA9IG51bGwsIF9pc1NlY29uZExvb3A6IGJvb2xlYW4gPSBmYWxzZSwgX3dhaXRUaW1lID0gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBfYW5pbU5hbWUsIF9sb29wKTtcclxuICAgICAgICBpZiAoX2lzTXVsdGlwbGVBbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmFkZEFuaW1hdGlvbigwLCBfc2Vjb25kQW5pbU5hbWUsIF9pc1NlY29uZExvb3AsIDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/scripts/GameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e1f3btDWZK0Y+SKD8Hb13X', 'GameEnd');
// Games/WordBlend/scripts/GameEnd.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.star = [];
        _this.yeah = [];
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
        }, 2.3);
    };
    NewClass.prototype.OnEndBtn = function (_event) {
        window.close();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "yeah", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "supercubEnd", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdvcmRCbGVuZFxcc2NyaXB0c1xcR2FtZUVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4RUM7UUEzRVcsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7UUE4RDNDLGlCQUFpQjtJQUNyQixDQUFDO0lBN0RHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNGO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFB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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ2tCO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDa0I7SUFmMUIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThFNUI7SUFBRCxlQUFDO0NBOUVELEFBOEVDLENBOUVxQyxFQUFFLENBQUMsU0FBUyxHQThFakQ7a0JBOUVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YXI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBvZGFyRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YkVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmphaXB1cmlhRW5kO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMudGxjRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3VwZXJjdWJFbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzdGFydEdhbWUuSW5zdGFuY2UuaW50cm9CRztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tQ29uZ3JhdHVsYXRpb25zXCIpO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDAuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuMyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaFswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICB9LCAyLjMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25FbmRCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b460wWVY1FqIXpChY3bYbX', 'Utility');
// Framework/Scripts/Utilities/Utility.ts

cc.Node.prototype.blinkNode = function (blinkDuration, repeatCount, callback) {
    if (blinkDuration === void 0) { blinkDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return;
    this.active = true;
    var fadeOut = cc.tween().to(blinkDuration / 2, { opacity: 0 });
    var fadeIn = cc.tween().to(blinkDuration / 2, { opacity: 255 });
    if (repeatCount == -1) {
        return cc.tween(this).sequence(fadeOut, fadeIn).repeatForever().start();
    }
    return cc.tween(this)
        .sequence(fadeOut, fadeIn).repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.pulseNode = function (scaleOffset, pulseDuration, repeatCount, callback, interval) {
    if (scaleOffset === void 0) { scaleOffset = 0.5; }
    if (pulseDuration === void 0) { pulseDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (interval === void 0) { interval = 0; }
    if (this == null)
        return;
    this.active = true;
    var scaleUp = cc.tween().by(pulseDuration / 2, { scale: scaleOffset });
    var scaleDown = cc.tween().by(pulseDuration / 2, { scale: -scaleOffset });
    var intervalDelay = cc.tween().delay(interval);
    var pulseTween = cc.tween(this).sequence(scaleUp, scaleDown, intervalDelay);
    if (repeatCount == -1) {
        return pulseTween.repeatForever().start();
    }
    return pulseTween.repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.playAnimation = function (clipName, repeatCount, callback, wrapMode) {
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return 0;
    this.active = true;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return 0;
    var animState = animation.play(clipName);
    if (animState == null)
        return 0;
    if (wrapMode)
        animState.wrapMode = wrapMode;
    if (animState.wrapMode == cc.WrapMode.Loop)
        return 0;
    animState.repeatCount = repeatCount;
    var animDuration = (animState.duration / animState.speed) * repeatCount;
    cc.tween(this).delay(animDuration).call(callback).start();
    return animDuration;
};
cc.Node.prototype.resetAnim = function (animName) {
    if (this == null)
        return;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return;
    animation.stop(animName);
    animation.setCurrentTime(0, animName);
};
cc.Node.prototype.setActive = function (isActive, duration, callback, easingType) {
    var _this = this;
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'cubicOut'; }
    if (this == null || this.active == isActive)
        return;
    if (isActive) {
        this.opacity = 0;
        this.active = true;
        var opacityValue = 255;
    }
    else {
        this.opacity = 255;
        var opacityValue = 0;
    }
    cc.tween(this).to(duration, { opacity: opacityValue }, { easing: easingType })
        .call(function () {
        if (!isActive)
            _this.active = false;
        if (callback)
            callback();
    })
        .start();
};
cc.Node.prototype.moveNode = function (finalPos, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.moveToNode = function (otherNode, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    var finalPos = otherNode.inverseTransform(this.parent);
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.bezierMoveNode = function (finalPos, jumpHeight, duration, callback) {
    if (jumpHeight === void 0) { jumpHeight = 200; }
    if (duration === void 0) { duration = 1; }
    if (this == null)
        return;
    var initPos = this.getPosition();
    var targetVector = finalPos.sub(initPos);
    var firstControlPoint = cc.v2(initPos.x + targetVector.x * 0.4, initPos.y + jumpHeight);
    var secondControlPoint = cc.v2(initPos.x + targetVector.x * 0.8, initPos.y + jumpHeight);
    cc.tween(this)
        .bezierTo(duration, firstControlPoint, secondControlPoint, finalPos)
        .call(callback)
        .start();
};
cc.Node.prototype.rotateNode = function (angleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { angle: angleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.scaleNode = function (scaleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { scale: scaleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.inverseTransform = function (otherNode, position) {
    if (position === void 0) { position = null; }
    if (this == null)
        return cc.Vec2.ZERO;
    if (position == null)
        position = this.getPosition();
    var worldPos = this.parent.convertToWorldSpaceAR(position);
    var localPos = otherNode.convertToNodeSpaceAR(worldPos);
    return localPos;
};
cc.Node.prototype.setParentWithSamePos = function (parentNode) {
    if (this == null)
        return;
    var localPos = this.inverseTransform(parentNode);
    this.setParent(parentNode);
    this.setPosition(localPos);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlsaXRpZXNcXFV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBNkdBLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLGFBQXlCLEVBQUUsV0FBdUIsRUFBRSxRQUFtQjtJQUF2RSw4QkFBQSxFQUFBLGlCQUF5QjtJQUFFLDRCQUFBLEVBQUEsZUFBdUI7SUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU87SUFFekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFaEUsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0U7SUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2hCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2QsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFBO0FBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUs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QztBQUMvQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIG5hbWVzcGFjZSBjYyB7XHJcbiAgICBpbnRlcmZhY2UgTm9kZSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyB0aGUgZ2l2ZW4gYW5pbWF0aW9uIG9uIHRoZSBub2RlLlxyXG4gICAgICAgICogTm90ZTogVGhlIG5vZGUgc2hvdWxkIGhhdmUgQW5pbWF0aW9uIGNvbXBvbmVudCBhbG9uZyB3aXRoIHRoZSBhbmltYXRpb24gY2xpcC5cclxuICAgICAgICAqIEBwYXJhbSBjbGlwTmFtZSBOYW1lIG9mIHRoZSBhbmltYXRpb24gY2xpcCB0byBiZSBwbGF5ZWQuXHJcbiAgICAgICAgKiBAcGFyYW0gcmVwZWF0Q291bnQgTnVtYmVyIG9mIHRpbWVzIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIHJlcGVhdGVkLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkLiBXaWxsIG5vdCBiZSBpbnZva2VkIGZvciBsb29waW5nIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgKiBAcGFyYW0gd3JhcE1vZGUgVXBkYXRlcyB0aGUgd3JhcCBtb2RlIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgICAgKiBAcmV0dXJucyBBbmltYXRpb24gZHVyYXRpb24uIFdpbGwgYmUgMCBmb3IgbG9vcGluZyBhbmltYXRpb25zLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHBsYXlBbmltYXRpb24oY2xpcE5hbWU6IHN0cmluZywgcmVwZWF0Q291bnQ/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIHdyYXBNb2RlPzogY2MuV3JhcE1vZGUpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVzZXRzIHRoZSBhbmltYXRpb24gdG8gaXRzIGluaXRpYWwgZnJhbWUuXHJcbiAgICAgICAgKiBAcGFyYW0gYW5pbU5hbWUgTmFtZSBvZiB0aGUgYW5pbWF0aW9uIGNsaXAgdG8gYmUgcmVzZXQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXNldEFuaW0oYW5pbU5hbWU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEJsaW5rcyB0aGUgbm9kZSAtIEZhZGVzIE91dCBhbmQgRmFkZXMgSW4uXHJcbiAgICAgICAgKiBAcGFyYW0gYmxpbmtEdXJhdGlvbiBEdXJhdGlvbiBmb3IgZWFjaCBibGluay5cclxuICAgICAgICAqIEBwYXJhbSByZXBlYXRDb3VudCBOdW1iZXIgb2YgdGltZXMgdG8gYmxpbmsgdGhlIG5vZGUuIFBhc3MgLTEgdG8gcmVwZWF0Rm9yZXZlci5cclxuICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBhZnRlciB0aGUgbm9kZSBpcyBibGlua2VkICduJyBudW1iZXIgb2YgdGltZXMuIFxyXG4gICAgICAgICogQHJldHVybnMgVHdlZW4gSW5zdGFuY2UuIENhbiBiZSB1c2VkIHRvIHN0b3Agb3IgY29udHJvbCB0aGUgdHdlZW4uIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgYmxpbmtOb2RlKGJsaW5rRHVyYXRpb24/OiBudW1iZXIsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogVHdlZW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUHVsc2VzIHRoZSBub2RlIC0gU2NhbGVzIFVwIGFuZCBTY2FsZXMgRG93bi5cclxuICAgICAgICAqIEBwYXJhbSBzY2FsZU9mZnNldCBTY2FsZSBvZmZzZXQgdmFsdWUgdG8gYWRkL3N1YnRyYWN0IHdoZW4gc2NhbGluZyB1cC9kb3duIHJlc3BlY3RpdmVseS5cclxuICAgICAgICAqIEBwYXJhbSBwdWxzZUR1cmF0aW9uIER1cmF0aW9uIGZvciBlYWNoIHB1bHNlLlxyXG4gICAgICAgICogQHBhcmFtIHJlcGVhdENvdW50IE51bWJlciBvZiB0aW1lcyB0byBwdWxzZSB0aGUgbm9kZS4gUGFzcyAtMSB0byByZXBlYXRGb3JldmVyLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGlzIHB1bHNlZCAnbicgbnVtYmVyIG9mIHRpbWVzLiBcclxuICAgICAgICAqIEBwYXJhbSBpbnRlcnZhbCBJbnRlcnZhbCBiZXR3ZWVuIGVhY2ggcHVsc2UuIERlZmF1bHQgaXMgMCAoQ29udGludW91cyBwdWxzaW5nKS4gXHJcbiAgICAgICAgKiBAcmV0dXJucyBUd2VlbiBJbnN0YW5jZS4gQ2FuIGJlIHVzZWQgdG8gc3RvcCBvciBjb250cm9sIHRoZSB0d2Vlbi4gXHJcbiAgICAgICAgKi9cclxuICAgICAgICBwdWxzZU5vZGUoc2NhbGVPZmZzZXQ/OiBudW1iZXIsIHB1bHNlRHVyYXRpb24/OiBudW1iZXIsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBpbnRlcnZhbD86IG51bWJlcik6IFR3ZWVuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEVuYWJsZXMvRGlzYWJsZXMgdGhlIG5vZGUgd2l0aCBhIEZhZGVJbi9GYWRlT3V0IGVmZmVjdCByZXNwZWN0aXZlbHkuIFxyXG4gICAgICAgICogQHBhcmFtIGlzQWN0aXZlIFNldHMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBGYWRlIGR1cmF0aW9uLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGlzIEZhZGVkT3V0L0ZhZGVkSW4uIFxyXG4gICAgICAgICogQHBhcmFtIGVhc2luZ1R5cGUgVHlwZSBvZiBFYXNpbmcgdG8gYmUgdXNlZCBmb3IgVHdlZW5pbmcuIERlZmF1bHQgLSAnY3ViaWNPdXQnXHJcbiAgICAgICAgKi9cclxuICAgICAgICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4sIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgbm9kZSB0byBhIGdpdmVuIGxvY2FsIHBvc2l0aW9uLiBcclxuICAgICAgICAqIEBwYXJhbSBmaW5hbFBvcyBGaW5hbCBwb3NpdGlvbiBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBNb3ZlIGR1cmF0aW9uLlxyXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGhhcyByZWFjaGVkIHRoZSBmaW5hbCBwb3NpdGlvbi4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnXHJcbiAgICAgICAgKi9cclxuICAgICAgICBtb3ZlTm9kZShmaW5hbFBvczogY2MuVmVjMiwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBub2RlIHRvIHRoZSBnaXZlbiBub2RlJ3MgcG9zaXRpb24gaXJyZXNwZWN0aXZlIG9mIHRoZWlyIHBhcmVudHMuIFxyXG4gICAgICAgICogQHBhcmFtIG90aGVyTm9kZSBNb3ZlIHRvd2FyZHMgdGhpcyBub2RlLlxyXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHJlYWNoZWQgdGhlIGZpbmFsIHBvc2l0aW9uLiBcclxuICAgICAgICAqIEBwYXJhbSBlYXNpbmdUeXBlIFR5cGUgb2YgRWFzaW5nIHRvIGJlIHVzZWQgZm9yIFR3ZWVuaW5nLiBEZWZhdWx0IC0gJ3Ntb290aCdcclxuICAgICAgICAqL1xyXG4gICAgICAgIG1vdmVUb05vZGUob3RoZXJOb2RlOiBjYy5Ob2RlLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZT86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIG5vZGUgdG8gYSBnaXZlbiBsb2NhbCBwb3NpdGlvbiBpbiBhIEN1cnZlZCBwYXRoLiBcclxuICAgICAgICAqIEBwYXJhbSBmaW5hbFBvcyBGaW5hbCBwb3NpdGlvbiBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBqdW1wSGVpZ2h0ICBIZWlnaHQgb2YgdGhlIGN1cnZlZCBwYXRoLlxyXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHJlYWNoZWQgdGhlIGZpbmFsIHBvc2l0aW9uLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGJlemllck1vdmVOb2RlKGZpbmFsUG9zOiBjYy5WZWMyLCBqdW1wSGVpZ2h0PzogbnVtYmVyLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUm90YXRlcyB0aGUgbm9kZS4gXHJcbiAgICAgICAgKiBAcGFyYW0gYW5nbGVWYWx1ZSBGaW5hbCBhbmdsZSBvZiB0aGUgbm9kZS5cclxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBSb3RhdGlvbiBkdXJhdGlvbi5cclxuICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBhZnRlciB0aGUgbm9kZSBoYXMgcm90YXRlZC4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgcm90YXRlTm9kZShhbmdsZVZhbHVlOiBudW1iZXIsIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY2FsZXMgdGhlIG5vZGUuIFxyXG4gICAgICAgICogQHBhcmFtIHNjYWxlVmFsdWUgRmluYWwgc2NhbGUgb2YgdGhlIG5vZGUuXHJcbiAgICAgICAgKiBAcGFyYW0gZHVyYXRpb24gUm90YXRpb24gZHVyYXRpb24uXHJcbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHNjYWxlZC4gXHJcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2NhbGVOb2RlKHNjYWxlVmFsdWU6IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgbG9jYWwgcG9zaXRpb24gb2YgdGhlIG5vZGUgaW4gYW5vdGhlciBub2RlIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG4gICAgICAgICogQHBhcmFtIG90aGVyTm9kZSBMb2NhbCBwb3NpdGlvbiB3aWxsIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIG5vZGUgY29vcmRpbmF0ZXMgb2YgdGhpcyBub2RlLlxyXG4gICAgICAgICogQHBhcmFtIHBvc2l0aW9uIFBvc2l0aW9uIHRvIGJlIGNhbGN1bGF0ZWQuIERlZmF1bHQgLSBDdXJyZW50IFBvc2l0aW9uLiBcclxuICAgICAgICAqIEByZXR1cm5zIExvY2FsIHBvc2l0aW9uIG9mIHRoZSBub2RlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGludmVyc2VUcmFuc2Zvcm0ob3RoZXJOb2RlOiBjYy5Ob2RlLCBwb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5WZWMyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgcGFyZW50IG9mIHRoZSBub2RlIHdoaWxlIHJldGFpbmluZyB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICAgICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIFRoZSBuZXcgcGFyZW50IG9mIHRoZSBub2RlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNldFBhcmVudFdpdGhTYW1lUG9zKHBhcmVudE5vZGU6IE5vZGUpOiB2b2lkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5ibGlua05vZGUgPSBmdW5jdGlvbiAoYmxpbmtEdXJhdGlvbjogbnVtYmVyID0gMSwgcmVwZWF0Q291bnQ6IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBsZXQgZmFkZU91dCA9IGNjLnR3ZWVuKCkudG8oYmxpbmtEdXJhdGlvbiAvIDIsIHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGxldCBmYWRlSW4gPSBjYy50d2VlbigpLnRvKGJsaW5rRHVyYXRpb24gLyAyLCB7IG9wYWNpdHk6IDI1NSB9KTtcclxuXHJcbiAgICBpZiAocmVwZWF0Q291bnQgPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gY2MudHdlZW4odGhpcykuc2VxdWVuY2UoZmFkZU91dCwgZmFkZUluKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYy50d2Vlbih0aGlzKVxyXG4gICAgICAgIC5zZXF1ZW5jZShmYWRlT3V0LCBmYWRlSW4pLnJlcGVhdChyZXBlYXRDb3VudClcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUucHVsc2VOb2RlID0gZnVuY3Rpb24gKHNjYWxlT2Zmc2V0OiBudW1iZXIgPSAwLjUsIHB1bHNlRHVyYXRpb246IG51bWJlciA9IDEsIHJlcGVhdENvdW50OiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBpbnRlcnZhbDogbnVtYmVyID0gMCkge1xyXG4gICAgaWYgKHRoaXMgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGxldCBzY2FsZVVwID0gY2MudHdlZW4oKS5ieShwdWxzZUR1cmF0aW9uIC8gMiwgeyBzY2FsZTogc2NhbGVPZmZzZXQgfSk7XHJcbiAgICBsZXQgc2NhbGVEb3duID0gY2MudHdlZW4oKS5ieShwdWxzZUR1cmF0aW9uIC8gMiwgeyBzY2FsZTogLXNjYWxlT2Zmc2V0IH0pO1xyXG4gICAgbGV0IGludGVydmFsRGVsYXkgPSBjYy50d2VlbigpLmRlbGF5KGludGVydmFsKTtcclxuICAgIGxldCBwdWxzZVR3ZWVuID0gY2MudHdlZW4odGhpcykuc2VxdWVuY2Uoc2NhbGVVcCwgc2NhbGVEb3duLCBpbnRlcnZhbERlbGF5KTtcclxuICAgIGlmIChyZXBlYXRDb3VudCA9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwdWxzZVR3ZWVuLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHB1bHNlVHdlZW4ucmVwZWF0KHJlcGVhdENvdW50KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5wbGF5QW5pbWF0aW9uID0gZnVuY3Rpb24gKGNsaXBOYW1lOiBzdHJpbmcsIHJlcGVhdENvdW50OiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCB3cmFwTW9kZT86IGNjLldyYXBNb2RlKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybiAwO1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGxldCBhbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgaWYgKGFuaW1hdGlvbiA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBsZXQgYW5pbVN0YXRlID0gYW5pbWF0aW9uLnBsYXkoY2xpcE5hbWUpO1xyXG4gICAgaWYgKGFuaW1TdGF0ZSA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBpZiAod3JhcE1vZGUpIGFuaW1TdGF0ZS53cmFwTW9kZSA9IHdyYXBNb2RlO1xyXG4gICAgaWYgKGFuaW1TdGF0ZS53cmFwTW9kZSA9PSBjYy5XcmFwTW9kZS5Mb29wKSByZXR1cm4gMDtcclxuXHJcbiAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSByZXBlYXRDb3VudDtcclxuICAgIGxldCBhbmltRHVyYXRpb24gPSAoYW5pbVN0YXRlLmR1cmF0aW9uIC8gYW5pbVN0YXRlLnNwZWVkKSAqIHJlcGVhdENvdW50O1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMpLmRlbGF5KGFuaW1EdXJhdGlvbikuY2FsbChjYWxsYmFjaykuc3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gYW5pbUR1cmF0aW9uO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5yZXNldEFuaW0gPSBmdW5jdGlvbiAoYW5pbU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIGlmIChhbmltYXRpb24gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGFuaW1hdGlvbi5zdG9wKGFuaW1OYW1lKTtcclxuICAgIGFuaW1hdGlvbi5zZXRDdXJyZW50VGltZSgwLCBhbmltTmFtZSk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uIChpc0FjdGl2ZTogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU6IHN0cmluZyA9ICdjdWJpY091dCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwgfHwgdGhpcy5hY3RpdmUgPT0gaXNBY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgb3BhY2l0eVZhbHVlID0gMjU1O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHZhciBvcGFjaXR5VmFsdWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMpLnRvKGR1cmF0aW9uLCB7IG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0FjdGl2ZSkgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24gKGZpbmFsUG9zOiBjYy5WZWMyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogZmluYWxQb3MgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUubW92ZVRvTm9kZSA9IGZ1bmN0aW9uIChvdGhlck5vZGU6IGNjLk5vZGUsIGR1cmF0aW9uOiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlOiBzdHJpbmcgPSAnc21vb3RoJykge1xyXG4gICAgaWYgKHRoaXMgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBmaW5hbFBvcyA9IG90aGVyTm9kZS5pbnZlcnNlVHJhbnNmb3JtKHRoaXMucGFyZW50KTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogZmluYWxQb3MgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcclxuICAgICAgICAuY2FsbChjYWxsYmFjaylcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuY2MuTm9kZS5wcm90b3R5cGUuYmV6aWVyTW92ZU5vZGUgPSBmdW5jdGlvbiAoZmluYWxQb3M6IGNjLlZlYzIsIGp1bXBIZWlnaHQ6IG51bWJlciA9IDIwMCwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaW5pdFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCB0YXJnZXRWZWN0b3IgPSBmaW5hbFBvcy5zdWIoaW5pdFBvcyk7XHJcblxyXG4gICAgbGV0IGZpcnN0Q29udHJvbFBvaW50ID0gY2MudjIoaW5pdFBvcy54ICsgdGFyZ2V0VmVjdG9yLnggKiAwLjQsIGluaXRQb3MueSArIGp1bXBIZWlnaHQpO1xyXG4gICAgbGV0IHNlY29uZENvbnRyb2xQb2ludCA9IGNjLnYyKGluaXRQb3MueCArIHRhcmdldFZlY3Rvci54ICogMC44LCBpbml0UG9zLnkgKyBqdW1wSGVpZ2h0KTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKVxyXG4gICAgICAgIC5iZXppZXJUbyhkdXJhdGlvbiwgZmlyc3RDb250cm9sUG9pbnQsIHNlY29uZENvbnRyb2xQb2ludCwgZmluYWxQb3MpXHJcbiAgICAgICAgLmNhbGwoY2FsbGJhY2spXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmNjLk5vZGUucHJvdG90eXBlLnJvdGF0ZU5vZGUgPSBmdW5jdGlvbiAoYW5nbGVWYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBhbmdsZTogYW5nbGVWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5zY2FsZU5vZGUgPSBmdW5jdGlvbiAoc2NhbGVWYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBzY2FsZTogc2NhbGVWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxyXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gKG90aGVyTm9kZTogY2MuTm9kZSwgcG9zaXRpb246IGNjLlZlYzIgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm4gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCB3b3JsZFBvcyA9IHRoaXMucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NpdGlvbik7XHJcbiAgICBsZXQgbG9jYWxQb3MgPSBvdGhlck5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgcmV0dXJuIGxvY2FsUG9zO1xyXG59XHJcblxyXG5jYy5Ob2RlLnByb3RvdHlwZS5zZXRQYXJlbnRXaXRoU2FtZVBvcyA9IGZ1bmN0aW9uIChwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxvY2FsUG9zID0gdGhpcy5pbnZlcnNlVHJhbnNmb3JtKHBhcmVudE5vZGUpO1xyXG4gICAgdGhpcy5zZXRQYXJlbnQocGFyZW50Tm9kZSk7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/WebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd43bCWyrZH4J/MVPf8iNMA', 'WebView');
// Framework/WebView/Scripts/WebView.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.webViewContainer = null;
        _this.correctAnswer = "600";
        _this.webLink = "https://plans.littlesingham.me/";
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
        return _this;
        // update (dt) {}
    }
    WebView_1 = WebView;
    Object.defineProperty(WebView, "Instance", {
        get: function () {
            return WebView_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    WebView.prototype.onLoad = function () {
        WebView_1.instance = this;
    };
    WebView.prototype.start = function () {
    };
    WebView.prototype.CheckForWebView = function (isMobileNumberNeeded) {
        if (isMobileNumberNeeded === void 0) { isMobileNumberNeeded = false; }
        this.MobileNumberNeeded = isMobileNumberNeeded;
        //if player has the access captcha screen will be poped up, else game will continue
        if (!StartGame_1.default.Instance.hasAccess) {
            // console.log("InitiatePaywallCaptcha--true");
            // if (startGame.Instance.mobileNumber != null) {
            //     console.log("mobileNumber--" + startGame.Instance.mobileNumber);
            // }
            if (isMobileNumberNeeded && !StartGame_1.default.Instance.hasMobile) {
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--MobileCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[1], 1.5);
                // this.node.getChildByName("Captcha").children[1].active = true;
                this.node.getChildByName("Captcha").children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            else {
                // this.OnContinue();
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--PaymentCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[0], 1.5);
                // this.node.getChildByName("Captcha").children[0].active = true;
                this.node.getChildByName("Captcha").children[1].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            return;
        }
        // console.log("Player can play the level since he has the access");
    };
    WebView.prototype.PopIn = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = 0;
        _node.active = true;
        cc.tween(_node).to(0.4, { scale: _scale }, { easing: "backOut" }).start();
    };
    WebView.prototype.PopOut = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = _scale;
        cc.tween(_node).to(0.4, { scale: 0 }, { easing: "backIn" }).start();
        this.scheduleOnce(function () {
            _node.getParent().active = false;
        }, 0.4);
    };
    WebView.prototype.initWebview = function () {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        // iframe.src = "http://192.168.1.109:3003";
        iframe.src = this.webLink;
        var webViewContainer = iframe;
        webViewContainer.style["position"] = "absolute";
        webViewContainer.style["top"] = "0";
        webViewContainer.style["left"] = "0";
        webViewContainer.style["width"] = "100%";
        webViewContainer.style["height"] = "100%";
        var resizeIframe = function () { };
        resizeIframe();
        this.webViewContainer = webViewContainer;
    };
    WebView.prototype.OnClose = function () {
        console.log("logEvent--captcha--closed");
        // this.node.children[0].active = false;
        if (this.node.children[0].children[0].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[0], 1.5);
        }
        if (this.node.children[0].children[1].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[1], 1.5);
        }
        this.node.children[0].getChildByName("web").active = false;
        this.currentAnswer = "";
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
        if (StartGame_1.default.Instance.isMusicOn) {
            var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
            cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
        }
    };
    WebView.prototype.CheckForMobileNumber = function (_event) {
        var _this = this;
        if (this.currentMobile.length < 10 || this.currentMobile == "") {
            if (_event.target.name != "x") {
                if (this.currentMobile.length < 10)
                    this.currentMobile = this.currentMobile + _event.target.name;
            }
            else {
                var len = this.currentMobile.length;
                var name = "";
                for (var i = 0; i < len - 1; i++) {
                    name += this.currentMobile[i];
                }
                this.currentMobile = name;
            }
            if (this.currentMobile == "") {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = true;
            }
            else {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = false;
            }
            this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
            if (this.currentMobile.length >= 10) {
                StartGame_1.default.Instance.hasMobile = true;
                StartGame_1.default.Instance.hasAccess = true;
                console.log("mobileNumber--" + this.currentMobile);
                this.node.children[0].children[0].active = false;
                this.PopOut(this.node.children[0].children[1], 1.5);
                this.scheduleOnce(function () {
                    _this.node.children[0].active = false;
                }, 0.4);
            }
        }
    };
    WebView.prototype.CheckForCorrectAnswer = function (_event) {
        var _this = this;
        if (_event.target.name != "x") {
            if (this.currentAnswer.length < 3)
                this.currentAnswer = this.currentAnswer + _event.target.name;
        }
        else {
            var len = this.currentAnswer.length;
            var name = "";
            for (var i = 0; i < len - 1; i++) {
                name += this.currentAnswer[i];
            }
            this.currentAnswer = name;
        }
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        if (this.currentAnswer == this.correctAnswer) {
            // this.OnContinue();
            console.log("logEvent--captcha--correct");
            console.log("Initiate_payment--true");
            console.log("Restart_level--" + StartGame_1.default.Instance.currentLevel);
        }
        else {
            var len = this.currentAnswer.length;
            var name_1 = "";
            for (var i = 0; i < len; i++) {
                if (this.currentAnswer[i] == this.correctAnswer[i]) {
                    name_1 += this.currentAnswer[i];
                }
                else if (_event.target.name != "x") {
                    cc.tween(this.node.children[0].children[0].getChildByName("ans")).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                        .to(0.1, { color: cc.Color.WHITE }).start();
                    console.log("logEvent--captcha--wrong");
                    this.scheduleOnce(function () {
                        _this.currentAnswer = name_1;
                        _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                    }, 0.4);
                    break;
                }
            }
        }
    };
    WebView.prototype.GameContinues = function () {
    };
    WebView.prototype.OnContinue = function () {
        var _this = this;
        // this.node.children[0].active = true;
        this.initWebview();
        if (StartGame_1.default.Instance.isMusicOn) {
            cc.audioEngine.stopMusic();
        }
        window.addEventListener("message", function (event) {
            console.log("onLoad " + event.data);
            if (event.data == "Subscription--Yes") {
                StartGame_1.default.Instance.hasAccess = true;
                _this.webViewContainer.remove();
                _this.node.children[0].getChildByName("web").active = false;
                _this.node.children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
                    cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
                }
            }
            if (event.data == "Subscription--No") {
                StartGame_1.default.Instance.hasAccess = false;
                _this.webViewContainer.remove();
                // this.node.children[0].children[0].active = false;
                // this.node.children[0].children[1].active = true;
                _this.node.children[0].children[0].active = true;
                _this.currentAnswer = "";
                _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                // if (startGame.Instance.isMusicOn) {
                //     cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
                //     cc.audioEngine.setVolume(0, 0.2);
                // }
            }
        }, false);
    };
    var WebView_1;
    WebView.instance = null;
    __decorate([
        property(String)
    ], WebView.prototype, "correctAnswer", void 0);
    __decorate([
        property(String)
    ], WebView.prototype, "webLink", void 0);
    WebView = WebView_1 = __decorate([
        ccclass
    ], WebView);
    return WebView;
}(cc.Component));
exports.default = WebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxXZWJWaWV3XFxTY3JpcHRzXFxXZWJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFnUEM7UUE1T0csc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFXLEtBQUssQ0FBQztRQUU5QixhQUFPLEdBQVcsaUNBQWlDLENBQUM7UUFDcEQsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDOztRQWtPNUMsaUJBQWlCO0lBQ3JCLENBQUM7Z0JBaFBvQixPQUFPO0lBZXhCLHNCQUFXLG1CQUFRO2FBQW5CO1lBQ0ksT0FBTyxTQUFPLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsd0JBQU0sR0FBTjtRQUNJLFNBQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFlLEdBQWYsVUFBZ0Isb0JBQXFDO1FBQXJDLHFDQUFBLEVBQUEsNEJBQXFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztRQUMvQyxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMvQiwrQ0FBK0M7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LElBQUksSUFBSSxrQkFBa0IsRUFBRTtnQkFDbEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDckMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixvREFBb0Q7Z0JBQ3BELG1EQUFtRDtnQkFFbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2dCQUV2SCxzQ0FBc0M7Z0JBQ3RDLG9FQUFvRTtnQkFDcEUsd0NBQXdDO2dCQUN4QyxJQUFJO2FBRVA7UUFDTCxDQUFDLEVBQ0QsS0FBSyxDQUNSLENBQUM7SUFDTixDQUFDOztJQWxPYyxnQkFBUSxHQUFZLElBQUksQ0FBQztJQUx4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7a0RBQ3FCO0lBRXRDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs0Q0FDMkM7SUFSM0MsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdQM0I7SUFBRCxjQUFDO0NBaFBELEFBZ1BDLENBaFBvQyxFQUFFLENBQUMsU0FBUyxHQWdQaEQ7a0JBaFBvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgd2ViVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFN0cmluZylcclxuICAgIHByaXZhdGUgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCI2MDBcIjtcclxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBwcml2YXRlIHdlYkxpbms6IHN0cmluZyA9IFwiaHR0cHM6Ly9wbGFucy5saXR0bGVzaW5naGFtLm1lL1wiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW9iaWxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFdlYlZpZXcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYXhTdHJpbmdMZW5ndGggPSAzO1xyXG4gICAgcHJpdmF0ZSBNb2JpbGVOdW1iZXJOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBXZWJWaWV3Lmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBXZWJWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrRm9yV2ViVmlldyhpc01vYmlsZU51bWJlck5lZWRlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5Nb2JpbGVOdW1iZXJOZWVkZWQgPSBpc01vYmlsZU51bWJlck5lZWRlZDtcclxuICAgICAgICAvL2lmIHBsYXllciBoYXMgdGhlIGFjY2VzcyBjYXB0Y2hhIHNjcmVlbiB3aWxsIGJlIHBvcGVkIHVwLCBlbHNlIGdhbWUgd2lsbCBjb250aW51ZVxyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLmhhc0FjY2Vzcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkluaXRpYXRlUGF5d2FsbENhcHRjaGEtLXRydWVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLm1vYmlsZU51bWJlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm1vYmlsZU51bWJlci0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UubW9iaWxlTnVtYmVyKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAoaXNNb2JpbGVOdW1iZXJOZWVkZWQgJiYgIXN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nRXZlbnQtLU1vYmlsZUNhcHRjaGEtLXNob3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUG9wSW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblsxXSwgMS41KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5PbkNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1QYXltZW50Q2FwdGNoYS0tc2hvd2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Qb3BJbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzBdLCAxLjUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXIgY2FuIHBsYXkgdGhlIGxldmVsIHNpbmNlIGhlIGhhcyB0aGUgYWNjZXNzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFBvcEluKF9ub2RlOiBjYy5Ob2RlLCBfc2NhbGU6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBfbm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgX25vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiBfc2NhbGUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBQb3BPdXQoX25vZGU6IGNjLk5vZGUsIF9zY2FsZTogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIF9ub2RlLnNjYWxlID0gX3NjYWxlO1xyXG4gICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjQsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIF9ub2RlLmdldFBhcmVudCgpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFdlYnZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgLy8gaWZyYW1lLnNyYyA9IFwiaHR0cDovLzE5Mi4xNjguMS4xMDk6MzAwM1wiO1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSB0aGlzLndlYkxpbms7XHJcbiAgICAgICAgY29uc3Qgd2ViVmlld0NvbnRhaW5lciA9IGlmcmFtZTtcclxuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcInRvcFwiXSA9IFwiMFwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJsZWZ0XCJdID0gXCIwXCI7XHJcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcIndpZHRoXCJdID0gXCIxMDAlXCI7XHJcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUlmcmFtZSA9ICgpID0+IHsgfTtcclxuICAgICAgICByZXNpemVJZnJhbWUoKTtcclxuICAgICAgICB0aGlzLndlYlZpZXdDb250YWluZXIgPSB3ZWJWaWV3Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIE9uQ2xvc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0tY2xvc2VkXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG4gICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0sIDEuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3BPdXQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLCAxLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2hlY2tGb3JNb2JpbGVOdW1iZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTAgfHwgdGhpcy5jdXJyZW50TW9iaWxlID09IFwiXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gdGhpcy5jdXJyZW50TW9iaWxlICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50TW9iaWxlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudE1vYmlsZVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vYmlsZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRNb2JpbGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHRoaXMuY3VycmVudE1vYmlsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0sIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBDaGVja0ZvckNvcnJlY3RBbnN3ZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gdGhpcy5jdXJyZW50QW5zd2VyICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50QW5zd2VyLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudEFuc3dlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50QW5zd2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbnN3ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuT25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS1jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYXRlX3BheW1lbnQtLXRydWVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdGFydF9sZXZlbC0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5zd2VyW2ldID09IHRoaXMuY29ycmVjdEFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gdGhpcy5jdXJyZW50QW5zd2VyW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2V2ZW50LnRhcmdldC5uYW1lICE9IFwieFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0td3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHYW1lQ29udGludWVzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkNvbnRpbnVlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdFdlYnZpZXcoKTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwibWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbkxvYWQgYCArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tWWVzYCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViVmlld0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PSBgU3Vic2NyaXB0aW9uLS1Ob2ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddff1UBeLlMxYLQi9TsUOqT', 'CustomWidget');
// Framework/Scripts/CustomWidget.ts

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
var CustomPositioningUI = /** @class */ (function (_super) {
    __extends(CustomPositioningUI, _super);
    function CustomPositioningUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
        // update (dt) {}
    }
    // @property
    // isTopCornered: boolean = true;
    // @property
    // isBottomCornered: boolean = false;
    CustomPositioningUI.prototype.start = function () {
        if (this.isLeftCornered) {
            this.positionAtLeftCorner();
        }
        else {
            this.positionAtRightCorner();
        }
    };
    CustomPositioningUI.prototype.positionAtLeftCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = -this.canvas.getContentSize().width / 2 + this.node.width / 2
            - cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width + _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        // console.log("Position is "+position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
    };
    // positionAtTopCorner() {
    //     let _position = this.node.getPosition();
    //     let _offSet = 20;
    //     // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
    //     //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
    //     _position.x = -this.canvas.getContentSize().height / 2 + this.node.height / 2
    //         - cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height + _offSet;
    //     _position.y = this.canvas.getContentSize().width / 2 - this.node.width / 2
    //         + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
    //     // console.log("Position is "+position)
    //     // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
    //     this.node.setPosition(_position);
    // }
    CustomPositioningUI.prototype.positionAtRightCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2
            + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        // console.log("Position is " + _position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
    };
    __decorate([
        property(cc.Node)
    ], CustomPositioningUI.prototype, "canvas", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isLeftCornered", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isRightCornered", void 0);
    CustomPositioningUI = __decorate([
        ccclass
    ], CustomPositioningUI);
    return CustomPositioningUI;
}(cc.Component));
exports.default = CustomPositioningUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxDdXN0b21XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF1RUM7UUFwRUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLEtBQUssQ0FBQzs7UUE2RGpDLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsdUNBQXVDO1FBQ3ZDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsaUZBQWlGO0lBQ2pGLG1HQUFtRztJQUNuRyxvRkFBb0Y7SUFDcEYsNEhBQTRIO0lBQzVILGlGQUFpRjtJQUNqRiwwSEFBMEg7SUFDMUgsOENBQThDO0lBQzlDLGdGQUFnRjtJQUNoRix3Q0FBd0M7SUFDeEMsSUFBSTtJQUVKLG1EQUFxQixHQUFyQjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBFQUEwRTtRQUMxRSw0RkFBNEY7UUFDNUYsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNwRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsMENBQTBDO1FBQzFDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFHdkI7UUFEQyxRQUFROytEQUNzQjtJQUcvQjtRQURDLFFBQVE7Z0VBQ3dCO0lBVGhCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBdUV2QztJQUFELDBCQUFDO0NBdkVELEFBdUVDLENBdkVnRCxFQUFFLENBQUMsU0FBUyxHQXVFNUQ7a0JBdkVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Qb3NpdGlvbmluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0xlZnRDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JpZ2h0Q29ybmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGlzVG9wQ29ybmVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaXNCb3R0b21Db3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXRMZWZ0Q29ybmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXRSaWdodENvcm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbkF0TGVmdENvcm5lcigpIHtcclxuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcclxuICAgICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aCArIF9vZmZTZXQ7XHJcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUG9zaXRpb24gaXMgXCIrcG9zaXRpb24pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpIGlzIFwiK2NjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpb25BdFRvcENvcm5lcigpIHtcclxuICAgIC8vICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvLyAgICAgbGV0IF9vZmZTZXQgPSAyMDtcclxuICAgIC8vICAgICAvLyBwb3NpdGlvbiA9IC0xMjgwLzIgKyBidXR0b25XaWR0aC8yIC0gdmlld3BvcnQueCAqICgxMjgwL3ZpZXdwb3J0V2lkdGgpO1xyXG4gICAgLy8gICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcclxuICAgIC8vICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgLy8gICAgICAgICAtIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgKyBfb2ZmU2V0O1xyXG4gICAgLy8gICAgIF9wb3NpdGlvbi55ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXHJcbiAgICAvLyAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiUG9zaXRpb24gaXMgXCIrcG9zaXRpb24pXHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpIGlzIFwiK2NjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkpXHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcG9zaXRpb25BdFJpZ2h0Q29ybmVyKCkge1xyXG4gICAgICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgX29mZlNldCA9IDIwO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xyXG4gICAgICAgIF9wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXHJcbiAgICAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xyXG4gICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyIC0gdGhpcy5ub2RlLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnkgKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0IC0gX29mZlNldDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiICsgX3Bvc2l0aW9uKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSBpcyBcIitjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Progress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8e47+WhWdOJayfFf191hb3', 'Progress');
// Framework/Scripts/Progress.ts

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
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.isVertical = false;
        _this.totalQuestions = 5;
        _this.progressFill = null;
        return _this;
        // update (dt) {}
    }
    Progress_1 = Progress;
    Object.defineProperty(Progress, "Instance", {
        get: function () {
            return Progress_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    Progress.prototype.onLoad = function () {
        Progress_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    Progress.prototype.IncreaseProgress = function (_questionNumber, _easingType) {
        if (_easingType === void 0) { _easingType = "linear"; }
        var value = _questionNumber / this.totalQuestions;
        cc.tween(this.progressFill).to(0.15, { progress: value }, { easing: _easingType }).start();
        if (_questionNumber == 1) {
            this.node.getComponent(cc.Animation).play("1");
        }
        else if ((this.totalQuestions % 2 == 0 && _questionNumber == this.totalQuestions / 2) || (this.totalQuestions % 2 != 0 && _questionNumber == (this.totalQuestions / 2) + 0.5)) {
            this.node.getComponent(cc.Animation).play("2");
        }
        else if (this.totalQuestions == _questionNumber) {
            this.node.getComponent(cc.Animation).play("3");
        }
    };
    Progress.prototype.start = function () {
    };
    var Progress_1;
    Progress.instance = null;
    __decorate([
        property(Boolean)
    ], Progress.prototype, "isVertical", void 0);
    __decorate([
        property(Number)
    ], Progress.prototype, "totalQuestions", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Progress.prototype, "progressFill", void 0);
    Progress = Progress_1 = __decorate([
        ccclass
    ], Progress);
    return Progress;
}(cc.Component));
exports.default = Progress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxQcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdDQztRQXRDRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFbkIsa0JBQVksR0FBbUIsSUFBSSxDQUFDOztRQStCNUMsaUJBQWlCO0lBQ3JCLENBQUM7aUJBeENvQixRQUFRO0lBWXpCLHNCQUFXLG9CQUFRO2FBQW5CO1lBQ0ksT0FBTyxVQUFRLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsZUFBdUIsRUFBRSxXQUE4QjtRQUE5Qiw0QkFBQSxFQUFBLHNCQUE4QjtRQUNwRSxJQUFJLEtBQUssR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0YsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDM0ssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDthQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQzs7SUE1QmMsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFMekM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvREFDVTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNtQjtJQVIzQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0M1QjtJQUFELGVBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBd0NqRDtrQkF4Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcml2YXRlIHByb2dyZXNzRmlsbDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2dyZXNzID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3MuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFByb2dyZXNzLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIEluY3JlYXNlUHJvZ3Jlc3MoX3F1ZXN0aW9uTnVtYmVyOiBudW1iZXIsIF9lYXNpbmdUeXBlOiBzdHJpbmcgPSBcImxpbmVhclwiKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3F1ZXN0aW9uTnVtYmVyIC8gdGhpcy50b3RhbFF1ZXN0aW9ucztcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnByb2dyZXNzRmlsbCkudG8oMC4xNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IF9lYXNpbmdUeXBlIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmIChfcXVlc3Rpb25OdW1iZXIgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnRvdGFsUXVlc3Rpb25zICUgMiA9PSAwICYmIF9xdWVzdGlvbk51bWJlciA9PSB0aGlzLnRvdGFsUXVlc3Rpb25zIC8gMikgfHwgKHRoaXMudG90YWxRdWVzdGlvbnMgJSAyICE9IDAgJiYgX3F1ZXN0aW9uTnVtYmVyID09ICh0aGlzLnRvdGFsUXVlc3Rpb25zIC8gMikgKyAwLjUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiMlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50b3RhbFF1ZXN0aW9ucyA9PSBfcXVlc3Rpb25OdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCIzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '882009Bux9MSqlp0QNotB13', 'Utils');
// Framework/Scripts/Utils.ts

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
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Utils, "screenWidth", {
        get: function () {
            if (this._screenWidth == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils, "screenHeight", {
        /**
         * Screen height
         */
        get: function () {
            if (this._screenHeight == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenHeight;
        },
        enumerable: false,
        configurable: true
    });
    Utils._screenWidth = undefined;
    Utils._screenHeight = undefined;
    Utils = __decorate([
        ccclass
    ], Utils);
    return Utils;
}(cc.Component));
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQzs7SUFxQ0EsQ0FBQztJQW5DRyxzQkFBVyxvQkFBVzthQUF0QjtZQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXpDLElBQUksU0FBUyxHQUFXLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztzQkFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7c0JBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHFCQUFZO1FBSHZCOztXQUVHO2FBQ0g7WUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxFQUFFO2dCQUNqQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLFNBQVMsR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7c0JBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQVcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO3NCQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN2RyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDcEM7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFYyxrQkFBWSxHQUFXLFNBQVMsQ0FBQztJQUNqQyxtQkFBYSxHQUFXLFNBQVMsQ0FBQztJQWxDaEMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXFDekI7SUFBRCxZQUFDO0NBckNELEFBcUNDLENBckNrQyxFQUFFLENBQUMsU0FBUyxHQXFDOUM7a0JBckNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IHNjcmVlbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjcmVlbldpZHRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgX2NhbnZhczogY2MuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgX3JpZ2h0RW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueCAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbldpZHRoID0gX3JpZ2h0RW5kICogMjtcclxuICAgICAgICAgICAgbGV0IF90b3BFbmQ6IG51bWJlciA9IF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuSGVpZ2h0ID0gX3RvcEVuZCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcmVlbiBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBzY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fc2NyZWVuSGVpZ2h0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgX2NhbnZhczogY2MuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgX3JpZ2h0RW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueCAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbldpZHRoID0gX3JpZ2h0RW5kICogMjtcclxuICAgICAgICAgICAgbGV0IF90b3BFbmQ6IG51bWJlciA9IF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuSGVpZ2h0ID0gX3RvcEVuZCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NjcmVlbldpZHRoOiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd21cdcOFCVMG565duKHxBWs', 'StartGame');
// Framework/Scripts/StartGame.ts

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
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.NextSceneName = "1";
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.playBtn_audio = null;
        _this.levelType = "1";
        _this.currentLevel = 1;
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.mainBg = null;
        _this.jockey = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.totalLevels = 7;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        return _this;
        // blobToDataURL(blobUrl, callback) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.onload = function () {
        //         var reader = new FileReader();
        //         reader.onloadend = function () {
        //             callback(reader.result);
        //         };
        //         reader.readAsDataURL(xhr.response);
        //     };
        //     xhr.open('GET', blobUrl);
        //     xhr.responseType = 'blob';
        //     xhr.send();
        // }
        // update (dt) {}
    }
    startGame_1 = startGame;
    Object.defineProperty(startGame, "Instance", {
        get: function () {
            return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    startGame.prototype.onLoad = function () {
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(function (element) {
            if (element.name == "jockey") {
                _this.JockeyNode = element;
            }
        });
        // const storedJSONData = cc.sys.localStorage.getItem('gameData');
        // if (storedJSONData) {
        //     const jsonData = JSON.parse(storedJSONData);
        // }
    };
    startGame.prototype.logData = function () {
        console.log("Game ID:", this.gameID);
        console.log("Total Levels:", this.totalLevels);
        console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        // Log question data
        // this.questions.forEach((question, index) => {
        //     console.log(`Question ${index + 1}:`);
        //     console.log("Question Image Name:", question.questionImageName);
        //     console.log("Question Audio Name:", question.questionAudioName);
        //     // console.log("Option 1 Image Name:", question.option1ImageName);
        //     // console.log("Option 2 Image Name:", question.option2ImageName);
        //     console.log("Correct Answer Number:", question.correctAnswerNum);
        // });
    };
    startGame.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, '');
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    };
    startGame.prototype.updateJSONdata = function () {
        var _this = this;
        // this.scheduleOnce(() => {
        //     cc.loader.load("https://s3.ap-south-1.amazonaws.com/cgv2-prod-images.creativegalileo.com/HybridLZAssets/BTN-bg-orange.png", (err, texture) => {
        //         if (err) {
        //             console.error("Failed to load image:", err);
        //             return;
        //         }
        //         const spriteFrame = new cc.SpriteFrame(texture);
        //         cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //     });
        // }, 1);
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get('json');
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            this.gameID = jsonData.additionalData.GameID;
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
            this.questions = jsonData.questionData;
            console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.bgmMusicName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.BGM_audio = audioClip;
                var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                cc.audioEngine.setVolume(id, _this.volume);
            });
            cc.loader.load(jsonData.additionalData.introBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.introBG = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.mainBg = spriteFrame;
            });
            this.questions.forEach(function (question) {
                // question.questionImageName = question.questionImageName
                // question.option1ImageName = question.option1ImageName
                // question.option2ImageName = question.option2ImageName
            });
            // Now you can use these variables within this script
            // this.logData();
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                _this.gameID = jsonData.additionalData.GameID;
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    _this.introBG = spriteFrame;
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    _this.BGM_audio = AudioClip;
                    var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, _this.volume);
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    _this.mainBg = spriteFrame;
                });
                _this.questions.forEach(function (question) {
                    question.commonPuzzleImageName = _this.removeExtension(question.commonPuzzleImageName);
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.puzzles = question.puzzles.map(function (puzzle) { return _this.removeExtension(puzzle); });
                    question.options = question.options.map(function (option) { return _this.removeExtension(option); });
                    question.correctAudioName = _this.removeAudioExtension(question.correctAudioName);
                    question.questionAudioName = _this.removeAudioExtension(question.questionAudioName);
                    question.reiterationAudioName = _this.removeAudioExtension(question.reiterationAudioName);
                    question.questionAudioName2 = _this.removeAudioExtension(question.questionAudioName2);
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
            });
        }
    };
    startGame.prototype.start = function () {
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        this.currentLevel = 1;
        // if (level != null) {
        //     this.NextSceneName = level;
        //     globalVariables.Instance.currentLevel = parseInt(this.NextSceneName);
        //     if (parseInt(this.NextSceneName) >= 7) {
        //         this.NextSceneName = "7";
        //         globalVariables.Instance.currentLevel = 7;
        //     }
        // }
        if (mobile == "1") {
            this.hasMobile = true;
        }
        else {
            this.hasMobile = false;
        }
        if (access == "1") {
            this.hasAccess = true;
        }
        else {
            this.hasAccess = false;
        }
        if (!this.isPremiumGame) {
            this.hasAccess = true;
        }
        // let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        // cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        var ageValue = parseInt(age);
        if (this.isAgeParameterNeeded) {
            if (ageValue <= this.LevelAgeParameters[0]) {
                this.levelType = "1";
            }
            else if (this.LevelAgeParameters.length > 1) {
                if (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4]) {
                                this.levelType = "5";
                            }
                        }
                    }
                }
            }
        }
        cc.director.preloadScene(this.NextSceneName);
        this.scheduleOnce(function () {
            console.log("jockey name = ", _this.jockeyName);
            if (_this.jockeyName == "Podar") {
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
            }
            else if (_this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true;
            }
            else if (_this.jockeyName == "supercub") {
                cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true;
            }
            else if (_this.jockeyName == "stallion") {
                cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true;
            }
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon" || _this.jockeyName == "tortoise") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }
            // if (this.jockeyName != "bag" && this.jockeyName != "cryon") {
            //     this.scheduleOnce(() => {
            //         cc.director.loadScene(this.NextSceneName);
            //     }, 2);
            // }
        }, 1);
        // this.OnTimer();
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            var id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
            console.log("soundSetting--true");
        }
        else {
            this.isMusicOn = false;
            event.target.children[0].active = true;
            cc.audioEngine.stopMusic();
            console.log("soundSetting--false");
        }
    };
    startGame.prototype.OnPlayBtn = function (_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene(this.NextSceneName);
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
    // OnTimer() {
    //     let delay = 1;
    //     for (let i = 0; i < 9999; i++) {
    //         this.scheduleOnce(() => {
    //             if (cc.director.getScene().name != "gameEnd") {
    //                 this.timer++;
    //             }
    //         }, delay);
    //         delay += 1;
    //     }
    // }
    startGame.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    startGame.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "volume", void 0);
    __decorate([
        property(cc.String)
    ], startGame.prototype, "NextSceneName", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "jockey", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "totalLevels", void 0);
    startGame = startGame_1 = __decorate([
        ccclass
    ], startGame);
    return startGame;
}(cc.Component));
exports.default = startGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQzVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK2FDO1FBN2FHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQiw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsb0NBQW9DO1FBRXBDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJB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ZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuICAgIEdhbWVJRDogc3RyaW5nO1xyXG4gICAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gICAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICAgIGludHJvQmdOYW1lOiBzdHJpbmc7XHJcbiAgICBiZ21NdXNpY05hbWU6IHN0cmluZztcclxuICAgIG1haW5CZ05hbWU6IHN0cmluZztcclxuICAgIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uQXVkaW9OYW1lOiBzdHJpbmc7XHJcbiAgICBzaG91bGRQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcclxuICAgIGNvbW1vblB1enpsZUltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgaXNIaW50UmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICBudW1iZXJPZlB1enpsZXM6IG51bWJlcjtcclxuICAgIHB1enpsZXM6IHN0cmluZ1tdO1xyXG4gICAgY29ycmVjdEF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gICAgbmVlZFJlaXRlcmF0aW9uOiBib29sZWFuO1xyXG4gICAgaW50ZXJhY3Rpb25UeXBlOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvblRleHQyOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkF1ZGlvTmFtZTI6IHN0cmluZztcclxuICAgIGNvbW1vbk9wdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgaXNPcHRpb25UZXh0OiBib29sZWFuO1xyXG4gICAgbnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XHJcbiAgICBvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG4gICAgY29ycmVjdEFuc3dlcjogc3RyaW5nO1xyXG4gICAgcmVpdGVyYXRpb25BdWRpb05hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICB2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBOZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcbiAgICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcclxuICAgIGhhc0FjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBtb2JpbGVOdW1iZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzTW9iaWxlTnVtYmVyUHJpb3JpdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XHJcbiAgICAvLyBtb2JOdW1BdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgSm9ja2V5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgZmlyc3RDbGljazogbnVtYmVyID0gMTtcclxuICAgIGNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgdG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcbiAgICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICB0aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgYWN0aXZhdGVIaW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGludHJvQkc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lSUQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvLyBwcml2YXRlIHRvdGFsTGV2ZWxzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uRGF0YVtdID0gW107XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3Qgc3RvcmVkSlNPTkRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVEYXRhJyk7XHJcblxyXG4gICAgICAgIC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkSlNPTkRhdGEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBJRDpcIiwgdGhpcy5nYW1lSUQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgTGV2ZWxzOlwiLCB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSm9ja2V5IE5hbWU6XCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgIC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcbiAgICAgICAgLy8gdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEF1ZGlvIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lKTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMSBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJDb3JyZWN0IEFuc3dlciBOdW1iZXI6XCIsIHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgICAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgJycpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSlNPTmRhdGEoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NndjItcHJvZC1pbWFnZXMuY3JlYXRpdmVnYWxpbGVvLmNvbS9IeWJyaWRMWkFzc2V0cy9CVE4tYmctb3JhbmdlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoJ2pzb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRKc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRKc29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZWRKc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudG90YWxMZXZlbDtcclxuICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBtdXNpYyBuYW1lID0gXCIsIGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWVcclxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lXHJcbiAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZV9kYXRhJywgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAodGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmNvbW1vblB1enpsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLmNvbW1vblB1enpsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5wdXp6bGVzID0gcXVlc3Rpb24ucHV6emxlcy5tYXAocHV6emxlID0+IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHB1enpsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4gdGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29ycmVjdEF1ZGlvTmFtZSA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24uY29ycmVjdEF1ZGlvTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUgPSB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24ucmVpdGVyYXRpb25BdWRpb05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lMiA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7IC8vIFlvdSBjYW4gY2FsbCBhIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZGF0YSBvciB1c2UgaXQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XHJcbiAgICAgICAgdmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICAgICAgdmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XHJcbiAgICAgICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgICAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG4gICAgICAgIGlmIChwcmVtaXVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIGlmIChsZXZlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG4gICAgICAgIC8vICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gcGFyc2VJbnQodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICAvLyAgICAgaWYgKHBhcnNlSW50KHRoaXMuTmV4dFNjZW5lTmFtZSkgPj0gNykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gXCI3XCI7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gNztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKG1vYmlsZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmhhc01vYmlsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc01vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNQcmVtaXVtR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICAgIGlmIChpc0F1ZGlvID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZ2VQYXJhbWV0ZXJOZWVkZWQpIHtcclxuICAgICAgICAgICAgaWYgKGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiM1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFsbGlvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIDIpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgMSk7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5QnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25UaW1lcigpIHtcclxuICAgIC8vICAgICBsZXQgZGVsYXkgPSAxO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJnYW1lRW5kXCIpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgIC8vICAgICAgICAgZGVsYXkgKz0gMTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBibG9iVG9EYXRhVVJMKGJsb2JVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLy8gICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIH07XHJcbiAgICAvLyAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICB4aHIub3BlbignR0VUJywgYmxvYlVybCk7XHJcbiAgICAvLyAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgIC8vICAgICB4aHIuc2VuZCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3909dpzo1hPDJb1f4iWWEcf', 'CustomWidget2');
// Framework/Scripts/CustomWidget2.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomWidget = /** @class */ (function (_super) {
    __extends(CustomWidget, _super);
    function CustomWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftOffset = 0;
        _this.rightOffset = 0;
        _this.bottomOffset = 0;
        _this.topOffset = 0;
        return _this;
    }
    Object.defineProperty(CustomWidget.prototype, "leftEnd", {
        get: function () {
            return -Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "rightEnd", {
        get: function () {
            return Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "topEnd", {
        get: function () {
            return Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "bottomEnd", {
        get: function () {
            return -Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    CustomWidget.prototype.onLoad = function () {
        this.Update(this.leftOffset, this.rightOffset, this.topOffset, this.bottomOffset);
    };
    CustomWidget.prototype.Update = function (_leftOffset, _rightOffset, _topOffset, _bottomOffset) {
        if (_leftOffset === void 0) { _leftOffset = undefined; }
        if (_rightOffset === void 0) { _rightOffset = undefined; }
        if (_topOffset === void 0) { _topOffset = undefined; }
        if (_bottomOffset === void 0) { _bottomOffset = undefined; }
        var initPosition = this.node.getPosition();
        this.node.setPosition(0, 0);
        var _position = this.node.getPosition();
        var _scale = this.node.getScale(cc.v2());
        var _width = this.node.width;
        var _height = this.node.height;
        var _anchor = cc.v2(this.node.anchorX, this.node.anchorY);
        if (_leftOffset != 0 && _leftOffset != undefined) {
            _position.x = this.leftEnd + this.leftOffset + _width * _anchor.x * _scale.x;
        }
        if (_rightOffset != 0 && _rightOffset != undefined) {
            _position.x = this.rightEnd - this.rightOffset - _width * (1 - _anchor.x) * _scale.x;
        }
        if (_bottomOffset != 0 && _bottomOffset != undefined) {
            _position.y = this.bottomEnd + this.bottomOffset + _height * _anchor.y * _scale.y;
        }
        if (_topOffset != 0 && _topOffset != undefined) {
            _position.y = this.topEnd - this.topOffset - _height * (1 - _anchor.y) * _scale.y;
        }
        else if (_leftOffset == 0 && _rightOffset == 0 && _bottomOffset == 0 && _topOffset == 0) {
            _position = initPosition;
        }
        this.node.setPosition(_position);
    };
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "leftOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "rightOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "bottomOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "topOffset", void 0);
    CustomWidget = __decorate([
        ccclass
    ], CustomWidget);
    return CustomWidget;
}(cc.Component));
exports.default = CustomWidget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxDdXN0b21XaWRnZXQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXJENkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFrRHBELENBQUM7SUFoREcsc0JBQVksaUNBQU87YUFBbkI7WUFDSSxPQUFPLENBQUMsZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxrQ0FBUTthQUFwQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxnQ0FBTTthQUFsQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxtQ0FBUzthQUFyQjtZQUNJLE9BQU8sQ0FBQyxlQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENB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QixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIGxlZnRPZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHJpZ2h0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcikgcHJpdmF0ZSBib3R0b21PZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHRvcE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGdldCBsZWZ0RW5kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC1VdGlscy5zY3JlZW5XaWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcmlnaHRFbmQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuc2NyZWVuV2lkdGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHRvcEVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5zY3JlZW5IZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGJvdHRvbUVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtVXRpbHMuc2NyZWVuSGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGUodGhpcy5sZWZ0T2Zmc2V0LCB0aGlzLnJpZ2h0T2Zmc2V0LCB0aGlzLnRvcE9mZnNldCwgdGhpcy5ib3R0b21PZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShfbGVmdE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfcmlnaHRPZmZzZXQ6IG51bWJlciA9IHVuZGVmaW5lZCwgX3RvcE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfYm90dG9tT2Zmc2V0OiBudW1iZXIgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgaW5pdFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICBsZXQgX3Bvc2l0aW9uOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9zY2FsZTogY2MuVmVjMiA9IHRoaXMubm9kZS5nZXRTY2FsZShjYy52MigpKTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IF9hbmNob3I6IGNjLlZlYzIgPSBjYy52Mih0aGlzLm5vZGUuYW5jaG9yWCwgdGhpcy5ub2RlLmFuY2hvclkpO1xyXG5cclxuICAgICAgICBpZiAoX2xlZnRPZmZzZXQgIT0gMCAmJiBfbGVmdE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmxlZnRFbmQgKyB0aGlzLmxlZnRPZmZzZXQgKyBfd2lkdGggKiBfYW5jaG9yLnggKiBfc2NhbGUueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9yaWdodE9mZnNldCAhPSAwICYmIF9yaWdodE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLnJpZ2h0RW5kIC0gdGhpcy5yaWdodE9mZnNldCAtIF93aWR0aCAqICgxIC0gX2FuY2hvci54KSAqIF9zY2FsZS54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2JvdHRvbU9mZnNldCAhPSAwICYmIF9ib3R0b21PZmZzZXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy5ib3R0b21FbmQgKyB0aGlzLmJvdHRvbU9mZnNldCArIF9oZWlnaHQgKiBfYW5jaG9yLnkgKiBfc2NhbGUueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF90b3BPZmZzZXQgIT0gMCAmJiBfdG9wT2Zmc2V0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24ueSA9IHRoaXMudG9wRW5kIC0gdGhpcy50b3BPZmZzZXQgLSBfaGVpZ2h0ICogKDEgLSBfYW5jaG9yLnkpICogX3NjYWxlLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9sZWZ0T2Zmc2V0ID09IDAgJiYgX3JpZ2h0T2Zmc2V0ID09IDAgJiYgX2JvdHRvbU9mZnNldCA9PSAwICYmIF90b3BPZmZzZXQgPT0gMCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24gPSBpbml0UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/CheckForInitWebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8ce2AftEZNxa47y59r3/Vg', 'CheckForInitWebView');
// Framework/WebView/Scripts/CheckForInitWebView.ts

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
var StartGame_1 = require("../../Scripts/StartGame");
var WebView_1 = require("./WebView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckForInitWebView = /** @class */ (function (_super) {
    __extends(CheckForInitWebView, _super);
    function CheckForInitWebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckForInitWebView.prototype.start = function () {
    };
    CheckForInitWebView.prototype.OnButtonClick = function () {
        //if its a free level
        //.... Write your code to open the level .....
        //if its a premium level then need to call the below conditions,
        WebView_1.default.Instance.CheckForWebView();
        if (StartGame_1.default.Instance.hasAccess) {
            // .... Write your code to open the level .....
            console.log("level opened");
        }
    };
    CheckForInitWebView = __decorate([
        ccclass
    ], CheckForInitWebView);
    return CheckForInitWebView;
}(cc.Component));
exports.default = CheckForInitWebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxXZWJWaWV3XFxTY3JpcHRzXFxDaGVja0ZvckluaXRXZWJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCxxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBc0JBLENBQUM7SUFwQkcsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0kscUJBQXFCO1FBQ3JCLDhDQUE4QztRQUc5QyxnRUFBZ0U7UUFDaEUsaUJBQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBakJnQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQXNCdkM7SUFBRCwwQkFBQztDQXRCRCxBQXNCQyxDQXRCZ0QsRUFBRSxDQUFDLFNBQVMsR0FzQjVEO2tCQXRCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IFdlYlZpZXcgZnJvbSBcIi4vV2ViVmlld1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRm9ySW5pdFdlYlZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vaWYgaXRzIGEgZnJlZSBsZXZlbFxyXG4gICAgICAgIC8vLi4uLiBXcml0ZSB5b3VyIGNvZGUgdG8gb3BlbiB0aGUgbGV2ZWwgLi4uLi5cclxuXHJcblxyXG4gICAgICAgIC8vaWYgaXRzIGEgcHJlbWl1bSBsZXZlbCB0aGVuIG5lZWQgdG8gY2FsbCB0aGUgYmVsb3cgY29uZGl0aW9ucyxcclxuICAgICAgICBXZWJWaWV3Lkluc3RhbmNlLkNoZWNrRm9yV2ViVmlldygpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzKSB7XHJcbiAgICAgICAgICAgIC8vIC4uLi4gV3JpdGUgeW91ciBjb2RlIHRvIG9wZW4gdGhlIGxldmVsIC4uLi4uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgb3BlbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/TextLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1241sXwmpPE6Sv15qZNtq7', 'TextLoader');
// Framework/Scripts/Utilities/TextLoader.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //This script will be for loading texts from JSON
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxVdGlsaXRpZXNcXFRleHRMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLGlEQUFpRDtJQUVqRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9UaGlzIHNjcmlwdCB3aWxsIGJlIGZvciBsb2FkaW5nIHRleHRzIGZyb20gSlNPTlxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b0c1F+W1KLotXneaw3WMc', 'gameplay');
// Games/WordBlend/scripts/gameplay.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.options = null;
        _this.wordsNode = null;
        _this.myOptions = null;
        _this.correctAnswer = "1";
        _this.correctAction = null;
        _this.incorrectButton = [];
        _this.rotateAction = null;
        _this.swipeAction = null;
        _this.puzzleQuestionVo = null;
        _this.puzzleVoIteration = null;
        _this.wordVoQuestion = null;
        _this.wordVoIteration = null;
        _this.jockeyCorrect2 = null;
        _this.wrongAnswer = null;
        // @property(cc.SpriteFrame)
        _this.temporarySprites = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.stallionPositive = [];
        _this.stallionNegative = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.tlcPositive = [];
        _this.tlcNegative = [];
        _this.supercubPositive = [];
        _this.supercubNegative = [];
        _this.isSecondInteraction = true;
        _this.interactionType = "1";
        _this.currentJockey = null;
        _this.selectable = false;
        _this.questionPlaying = false;
        _this.correctWordSeq = ["132"];
        _this.currWordSeq = "";
        _this.currScene = 1;
        _this.colorValue = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }
        this.isSecondInteraction = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].needReiteration;
        this.interactionType = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].interactionType;
        if (this.isSecondInteraction) {
            // for (let i = 0; startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     this.currWordSeq += (i + 1).toString();
            // }
            if (this.interactionType == "1") {
                this.GenerateOptions(this.myOptions, "template1");
                this.correctAnswer = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
            else {
                this.GenerateOptions(this.wordsNode, "template2");
                this.correctWordSeq[0] = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
        }
    };
    NewClass.prototype.resetInteraction = function () {
        this.unschedule(this.sheduleQuestionClip);
        this.scheduleOnce(this.sheduleQuestionClip, 10);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        this.UpdateJsonData();
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.colorValue = this.options.color;
        this.currScene = StartGame_1.default.Instance.currentLevel;
        ProgressBar_1.default.Instance.ProgressFill(this.currScene - 1, false);
        console.log("levelStarted--" + this.currScene);
        if (this.currScene >= StartGame_1.default.Instance.totalLevels) {
            cc.director.preloadScene("GameEnd");
        }
        else {
            cc.director.preloadScene((this.currScene + 1).toString());
        }
        StartGame_1.default.Instance.clickEvent = false;
        var canvas = cc.find("Canvas");
        canvas.on('touchstart', function (event) {
            if (!StartGame_1.default.Instance.clickEvent) {
                {
                    StartGame_1.default.Instance.clickEvent = true;
                    console.log("firstClick--" + this.currScene);
                }
            }
        }, this);
        this.scheduleOnce(function () {
            _this.InitiateGame();
        }, 1);
    };
    NewClass.prototype.UpdateJsonData = function () {
        var _this = this;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleQuestionVo = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleVoIteration = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoQuestion = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_1.interactionType == "1") {
                        this_1.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_1.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_2(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoIteration = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.puzzleQuestionVo = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (spriteFrame) {
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (spriteFrame) {
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_2 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_3(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (AudioClip) {
                _this.puzzleVoIteration = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (AudioClip) {
                _this.wordVoQuestion = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_3.interactionType == "1") {
                        this_3.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_3.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_3 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (AudioClip) {
                _this.wordVoIteration = AudioClip;
            });
        }
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJockey.active = true;
    };
    NewClass.prototype.UpdateOptions = function () {
        this.options.active = false;
        this.node.getChildByName("hint").active = false;
        var _width = 250;
        var _height = 250;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 4) {
            _width = 250;
            _height = 250;
        }
        else if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 9) {
            _width = 166;
            _height = 166;
        }
        for (var i = 0; i < this.options.children.length; i++) {
            this.options.children[i].width = _width;
            this.options.children[i].height = _height;
            if (i >= StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles) {
                this.options.children[i].destroy();
            }
        }
    };
    NewClass.prototype.InitiateGame = function () {
        var _this = this;
        //repeat method
        this.UpdateOptions();
        this.sheduleQuestionClip = function () {
            if (_this.interactable) {
                cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
            }
            _this.options.children.forEach(function (_child) {
                if (_child.angle % 360 != 0) {
                    cc.tween(_child)
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .start();
                }
            });
            _this.scheduleOnce(function () { _this.resetInteraction(); }, 0);
        };
        this.scheduleOnce(function () {
            _this.SetFrameOptions();
        }, 0.1);
        this.wordsNode.children.forEach(function (element) {
            element.on('touchstart', function (_event) { _this.wordTouchStart(_event); });
            element.on('touchmove', function (_event) { _this.wordTouchMove(_event); });
            element.on('touchend', function (_event) { _this.wordTouchEnd(_event); });
        });
    };
    NewClass.prototype.SetFrameOptions = function () {
        var _this = this;
        this.options.active = true;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isHintRequired) {
            this.node.getChildByName("hint").active = true;
        }
        if (this.options.childrenCount == 4) {
            this.options.children[0].setPosition(-this.options.children[0].width / 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(this.options.children[1].width / 2, this.options.children[1].height / 2);
            this.options.children[2].setPosition(-this.options.children[2].width / 2, -this.options.children[2].height / 2);
            this.options.children[3].setPosition(this.options.children[3].width / 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 9) {
            var threshHold_1 = 1;
            this.options.children[0].setPosition(-(this.options.children[0].width) + threshHold_1, this.options.children[0].height - threshHold_1);
            this.options.children[1].setPosition(0, this.options.children[1].height - threshHold_1);
            this.options.children[2].setPosition(this.options.children[2].width - threshHold_1, this.options.children[2].height - threshHold_1);
            this.options.children[3].setPosition(-(this.options.children[3].width) + threshHold_1, 0);
            this.options.children[4].setPosition(0, 0);
            this.options.children[5].setPosition(this.options.children[5].width - threshHold_1, 0);
            this.options.children[6].setPosition(-(this.options.children[6].width) + threshHold_1, -(this.options.children[6].height) + threshHold_1);
            this.options.children[7].setPosition(0, -(this.options.children[7].height) + threshHold_1);
            this.options.children[8].setPosition(this.options.children[8].width - threshHold_1, -(this.options.children[8].height) + threshHold_1);
        }
        else if (this.options.childrenCount == 6) {
            this.options.children[0].setPosition(-this.options.children[0].width + 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(0, this.options.children[1].height / 2);
            this.options.children[2].setPosition(this.options.children[2].width - 2, this.options.children[2].height / 2);
            this.options.children[3].setPosition(-this.options.children[3].width + 2, -this.options.children[3].height / 2);
            this.options.children[4].setPosition(0, -this.options.children[4].height / 2);
            this.options.children[5].setPosition(this.options.children[3].width - 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 16) {
            var threshHold = 62.5;
            this.options.children[0].setPosition(-this.options.children[0].width - threshHold, this.options.children[0].height + threshHold);
            this.options.children[1].setPosition(-this.options.children[1].width / 2, this.options.children[1].height + threshHold);
            this.options.children[2].setPosition(this.options.children[2].width / 2, this.options.children[2].height + threshHold);
            this.options.children[3].setPosition(this.options.children[3].width + threshHold, this.options.children[3].height + threshHold);
            this.options.children[4].setPosition(-this.options.children[4].width - threshHold, this.options.children[4].height / 2);
            this.options.children[5].setPosition(-this.options.children[5].width / 2, this.options.children[5].height / 2);
            this.options.children[6].setPosition(this.options.children[6].width / 2, this.options.children[6].height / 2);
            this.options.children[7].setPosition(this.options.children[7].width + threshHold, this.options.children[7].height / 2);
            this.options.children[8].setPosition(-(this.options.children[8].width + threshHold), -this.options.children[8].height / 2);
            this.options.children[9].setPosition(-(this.options.children[9].width / 2), -this.options.children[9].height / 2);
            this.options.children[10].setPosition((this.options.children[10].width / 2), -this.options.children[10].height / 2);
            this.options.children[11].setPosition((this.options.children[11].width + threshHold), -this.options.children[11].height / 2);
            this.options.children[12].setPosition(-(this.options.children[12].width + threshHold), -this.options.children[12].height - threshHold);
            this.options.children[13].setPosition(-(this.options.children[13].width / 2), -this.options.children[13].height - threshHold);
            this.options.children[14].setPosition((this.options.children[14].width / 2), -this.options.children[14].height - threshHold);
            this.options.children[15].setPosition((this.options.children[15].width + threshHold), -this.options.children[15].height - threshHold);
        }
        for (var i = 0; i < this.options.childrenCount; i++) {
            var clone = cc.instantiate(this.options.children[i]);
            clone.setParent(this.node.getChildByName("hint").getChildByName("hint"));
            clone.setPosition(this.options.children[i].getPosition());
        }
        var _randomNumber = 1;
        this.options.children.forEach(function (element) {
            element.active = true;
            _randomNumber = _this.getRandomNumber(_randomNumber);
            element.angle = -(90 * _randomNumber);
        });
        this.options.scale = 0.8;
        this.options.opacity = 100;
        this.node.getChildByName("hint").opacity = 100;
        this.node.getChildByName("hint").scale = 0;
        cc.tween(this.options)
            .to(0.8, { scale: 1, opacity: 255 })
            .call(function () {
            cc.tween(_this.node.getChildByName("hint"))
                .to(0.5, { scale: 0.3, opacity: 255 })
                .call(function () {
                var duration = 0;
                if (_this.puzzleQuestionVo) {
                    duration = _this.puzzleQuestionVo.duration - 0.3;
                    cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
                }
                var handNode = _this.node.getChildByName("handClick");
                if (_this.currScene <= 3) {
                    handNode.active = true;
                    handNode.getComponent(cc.Animation).play();
                    handNode.getComponent(cc.Animation).on("finished", function () {
                    });
                }
                _this.scheduleOnce(function () {
                    _this.scheduleOnce(function () {
                        _this.interactable = true;
                        _this.scheduleOnce(_this.sheduleQuestionClip, 10);
                        _this.resetInteraction();
                        if (_this.currScene < 4)
                            _this.rotatePuzzleImage(_this.options.getChildByName("1"));
                    }, 0.2);
                }, duration);
            })
                .start();
        })
            .start();
    };
    NewClass.prototype.optionClicked = function (_event) {
        this.resetInteraction();
        var handNode = this.node.getChildByName("handClick");
        handNode.active = false;
        if (!StartGame_1.default.Instance.clickEvent) {
            {
                StartGame_1.default.Instance.clickEvent = true;
                console.log("firstClick--" + this.currScene);
            }
        }
        if (this.interactable) {
            this.rotatePuzzleImage(_event.target);
        }
    };
    NewClass.prototype.repeatQuestionClicked = function (_event) {
        var _this = this;
        if (!this.questionPlaying) {
            _event.target.getComponent(cc.Button).interactable = false;
            this.questionPlaying = true;
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.questionPlaying = false;
                _event.target.getComponent(cc.Button).interactable = true;
            }, this.wordVoIteration.duration);
        }
    };
    NewClass.prototype.rotatePuzzleImage = function (_node) {
        var _this = this;
        this.interactable = false;
        var child = _node;
        var angle = child.angle;
        cc.audioEngine.playEffect(this.rotateAction, false);
        cc.tween(child)
            .to(0.2, { angle: angle - 90 })
            .call(function () { _this.optionsAligned(); })
            .start();
    };
    NewClass.prototype.optionsAligned = function () {
        var _this = this;
        var levelPassed = true;
        this.options.children.forEach(function (_child) {
            if (_child.angle % 360 != 0) {
                levelPassed = false;
            }
        });
        if (levelPassed) {
            //if the items have been aligned 
            this.options.color = cc.Color.GREEN;
            cc.audioEngine.playEffect(this.correctAction, false);
            this.scheduleOnce(function () {
                // cc.audioEngine.playEffect(this.jockeyCorrect2, false);
            }, this.correctAction.duration - 1);
            this.node.getChildByName("hint").active = false;
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            console.log("correctAnswer--" + this.currScene);
            cc.tween(this.options).to(0.3, { x: 0, y: 0, scaleX: 1, scaleY: 1 }).start();
            this.scheduleOnce(function () {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(_this.puzzleVoIteration, false);
                _this.scheduleOnce(function () {
                    _this.options.color = cc.Color.WHITE;
                    // this.wordAppear();
                    if (_this.isSecondInteraction) {
                        //check what interaction it is and call the respective function
                        //show question panel
                        cc.audioEngine.playEffect(_this.wordVoQuestion, false);
                        _this.interactionType == "1" ? _this.OptionsAppear() : _this.wordAppear();
                    }
                    else {
                        _this.CallJockey();
                    }
                }, _this.puzzleVoIteration.duration);
            }, 0.5);
        }
        else {
            this.interactable = true;
        }
    };
    NewClass.prototype.CallJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumberp(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[StartGame_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (StartGame_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.levelFinished();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    NewClass.prototype.callNegativeRection = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "penguin" || StartGame_1.default.Instance.jockeyName == "tortoise" || StartGame_1.default.Instance.jockeyName == "muskaan" || StartGame_1.default.Instance.jockeyName == "corny") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }
            var currentClipNum = _this.getRandomNumberp(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJockey.scaleX = 0.65;
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            var pos = 1600;
            var jockeytween = 450;
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                pos = 1900;
                jockeytween = 870;
            }
            _this.currentJockey.setPosition(pos, -350);
            cc.tween(_this.currentJockey).to(0.5, { x: jockeytween }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey).to(0.5, { x: pos }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.myOptions.children.forEach(function (elem) {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, _this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7);
    };
    NewClass.prototype.OptionsAppear = function () {
        var _this = this;
        cc.tween(this.options).to(0.3, { x: this.options.x - 200, y: 0, scaleX: 1, scaleY: 1 }).start();
        cc.tween(this.myOptions).to(0.3, { y: 0 }).start();
        this.scheduleOnce(function () {
            _this.myOptions.active = true;
        }, 0.5);
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.8, { scale: 1 }).start();
            }, 0.5 * index);
        });
    };
    NewClass.prototype.onButtonClick = function (_event) {
        var _this = this;
        var _node = _event.target;
        if (_node.name === this.correctAnswer) {
            this.myOptions.children.forEach(function (element) {
                if (element.name != _node.name) {
                    element.active = false;
                }
            });
            cc.tween(_node).to(1, { y: 0 }, { easing: "sineInOut" }).start();
            console.log("correctAnswer--" + this.currScene);
            // console.log("correctAnswer--" + this.currScene);
            // cc.audioEngine.playEffect(this.correctButton, false);
            this.options.color = cc.Color.GREEN;
            _node.color = cc.Color.GREEN;
            cc.tween(_node).to(0.1, { scaleX: 0.7, scaleY: 0.8, color: cc.Color.GREEN }).to(0.1, { scaleX: 1, scaleY: 1, color: this.colorValue }).start();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                _this.CallJockey();
            }, this.wordVoIteration.duration);
        }
        else {
            console.log("wrongAnswer--" + this.currScene);
            cc.audioEngine.playEffect(this.wrongAnswer, false);
            this.callNegativeRection();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.tween(_node).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).to(0.1, { angle: -10 })
                .to(0.1, { angle: 0 }).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).start();
            cc.tween(_node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(this.options).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).start();
        }
    };
    NewClass.prototype.wordAppear = function () {
        var _this = this;
        this.selectable = false;
        cc.tween(this.options).to(1, { scale: this.options.scale - 0.2 }, { easing: "sineInOut" }).start();
        cc.tween(this.options).to(1, { x: 0, y: 100 }, { easing: "sineInOut" }).start();
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.3, { scale: 1 }).start();
            }, 0.5 * index);
        });
        this.wordsNode.active = true;
        // cc.audioEngine.playEffect(this.wordVoQuestion, false);
        this.scheduleOnce(function () {
            var pos = cc.v2(_this.wordsNode.children[0].getPosition().x, _this.wordsNode.children[0].getPosition().y - 250);
            var pos2 = cc.v2(_this.wordsNode.children[1].getPosition().x, _this.wordsNode.children[1].getPosition().y - 250);
            var handNode = _this.node.getChildByName("handClick1");
            handNode.setPosition(pos);
            handNode.active = true;
            handNode.getComponent(cc.Animation).play();
            cc.tween(handNode).to(1, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                handNode.active = false;
                // this.selectable= true;
                // this.scheduleOnce(() => {
                //     this.wordSwap(this.node.getChildByName("words").children[0], this.node.getChildByName("words").children[1], -250, 0);
                // }, 0);
                _this.EndDrag();
            }, 1);
        }, this.wordVoQuestion.duration - 1);
    };
    NewClass.prototype.wordSwap = function (_node1, _node2, x1, x2) {
        var _this = this;
        this.EndDrag();
        this.currWordSeq = this.currWordSeq.replace(_node1.name, "x");
        this.currWordSeq = this.currWordSeq.replace(_node2.name, _node1.name);
        this.currWordSeq = this.currWordSeq.replace("x", _node2.name);
        cc.audioEngine.playEffect(this.swipeAction, false);
        var word = "";
        for (var i = 0; i < this.currWordSeq.length; i++) {
            word += this.wordsNode.getChildByName(this.currWordSeq[i]).children[0].getComponent(cc.Label).string;
        }
        // console.log("word--" + word);
        cc.tween(_node1)
            .to(0.1, { x: x2 })
            .start();
        cc.tween(_node2)
            .to(0.1, { x: x1 })
            .call(function () {
            // console.log(this.currWordSeq, this.correctWordSeq[0], this.currScene);
            if (word == _this.correctWordSeq[0]) {
                // console.log("words aligned");
                _this.selectable = false;
                _this.scheduleOnce(function () {
                    // this.levelFinished();
                    cc.audioEngine.playEffect(_this.wordVoIteration, false);
                    _this.scheduleOnce(function () {
                        _this.CallJockey();
                    }, _this.wordVoIteration.duration);
                }, _this.swipeAction.duration);
            }
        })
            .start();
    };
    NewClass.prototype.EndDrag = function () {
        this.wordCurrentSeleced = null;
        this.wordCurrentSelecedPos = null;
        this.selectable = true;
    };
    NewClass.prototype.wordTouchStart = function (_event) {
        // console.log(this.selectable);
        if (this.selectable) {
            // console.log("start event");
            this.wordCurrentSeleced = _event.target;
            this.wordCurrentSelecedPos = this.wordCurrentSeleced.getPosition(cc.v2());
            this.selectable = false;
        }
    };
    NewClass.prototype.wordTouchMove = function (_event) {
        var _this = this;
        //check if the same object is moving which started first
        if (this.wordCurrentSeleced && _event.target.name == this.wordCurrentSeleced.name) {
            this.wordCurrentSeleced.x += _event.touch.getDelta().x;
            if (this.wordCurrentSeleced.x > 800 || this.wordCurrentSeleced.x < -800) {
                // console.log("reset position");
                cc.tween(this.wordCurrentSeleced)
                    .to(0.1, { x: this.wordCurrentSelecedPos.x })
                    .call(function () {
                    _this.EndDrag();
                })
                    .start();
            }
            var collisionWith_1 = null;
            this.wordsNode.children.forEach(function (_child) {
                if (_child.name == _event.target.name) {
                    return;
                }
                if (_child.getBoundingBox().contains(_event.target.getPosition())) {
                    collisionWith_1 = _child;
                }
            });
            if (collisionWith_1) {
                // console.log("collision with ", collisionWith.name);
                this.wordSwap(collisionWith_1, this.wordCurrentSeleced, collisionWith_1.x, this.wordCurrentSelecedPos.x);
            }
        }
    };
    NewClass.prototype.wordTouchEnd = function (_event) {
        var _a;
        if (_event.target.name == ((_a = this.wordCurrentSeleced) === null || _a === void 0 ? void 0 : _a.name)) {
            // console.log("End event");
            cc.tween(this.wordCurrentSeleced)
                .to(0.2, { x: this.wordCurrentSelecedPos.x })
                .start();
            this.selectable = true;
        }
    };
    NewClass.prototype.levelFinished = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAction, false);
        this.node.getChildByName("confetti").active = true;
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();
        console.log('levelComplete--' + this.currScene);
        StartGame_1.default.Instance.currentLevel++;
        this.scheduleOnce(function () {
            ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
            _this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.ProgressFill(_this.currScene);
                _this.scheduleOnce(function () {
                    if (_this.currScene < StartGame_1.default.Instance.totalLevels) {
                        cc.director.loadScene("1");
                    }
                    else {
                        cc.director.loadScene("GameEnd");
                    }
                }, 0.8);
            }, 1.2);
        }, 1.5);
    };
    NewClass.prototype.getRandomNumber = function (_number) {
        _number = Math.random();
        _number = cc.misc.lerp(1, 3, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.getRandomNumberp = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.GenerateOptions = function (_node, _template) {
        var _this = this;
        if (_node === void 0) { _node = this.myOptions; }
        if (_template === void 0) { _template = "template1"; }
        for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName(_template));
            option.name = (i + 1).toString();
            option.setParent(_node);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 255;
            option.active = true;
        }
        this.node.getChildByName(_template).destroy();
        if (_template == "template1") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions == 2) {
                this.myOptions.children[0].setPosition(0, 120);
                this.myOptions.children[1].setPosition(0, -120);
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.OptionsLayout();
                _this.arrangeChildren(_this.wordsNode, 30);
            }, 1);
        }
    };
    NewClass.prototype.OptionsLayout = function () {
        var optionsLayout = this.wordsNode;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }
        var availableWidth = optionsLayout.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);
            accumulatedWidth += option.width + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
    };
    NewClass.prototype.arrangeChildren = function (centerNode, spacing) {
        var children = centerNode.children;
        var totalWidth = 0;
        // Calculate total width required
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children
        // Starting X position
        var startX = -totalWidth / 2;
        // Arrange children
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    };
    NewClass.prototype.OptionsLayoutVertical = function () {
        var optionsLayout = this.myOptions;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        var maxWidth = 0;
        // Calculate the total height and the maximum width of the options
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalHeight += optionHeight + paddingBetweenOptions;
            if (optionWidth > maxWidth) {
                maxWidth = optionWidth;
            }
        }
        var availableHeight = optionsLayout.height;
        var totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);
        var accumulatedHeight = 0;
        // Position each option node vertically
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.width = maxWidth * scaleFactor;
    };
    NewClass.prototype.reverseOptionsLayout = function () {
        var optionsLayout = this.myOptions;
        var optionNodes = optionsLayout.children;
        // Create an array to hold the new positions
        var newPositions = [];
        // Calculate new positions in reverse order
        for (var i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }
        // Update the positions of the options
        for (var i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
        }
    };
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "options", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "wordsNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "myOptions", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "correctAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "incorrectButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "rotateAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "swipeAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jockeyCorrect2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongAnswer", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubNegative", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdvcmRCbGVuZFxcc2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQWlHO0FBQ2pHLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9xQ0M7UUFqcUNXLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUN2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsNEJBQTRCO1FBQzVCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFJaEMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLHNCQUFnQixH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SSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFVLENBQUMsQ0FBQztTQUN0STthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FLbEg7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUl6QyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUE7WUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFeEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUVoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4SCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTNILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUdwSCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFOUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRTdILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztTQUV6STtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6RSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNqQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QixhQUFhLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFFMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3JDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDckMsSUFBSSxDQUFDO2dCQUNGLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3ZCLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztvQkFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtvQkFDckIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO29CQUVuRCxDQUFDLENBQUMsQ0FBQTtpQkFFTDtnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUlkLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNoRCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDeEIsSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7NEJBQ2xCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ1gsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQWEsR0FBYixVQUFjLE1BQWdCO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDaEM7Z0JBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFHckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFDRCx3Q0FBcUIsR0FBckIsVUFBc0IsTUFBZ0I7UUFBdEMsaUJBVUM7UUFURyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzlELENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNELG9DQUFpQixHQUFqQixVQUFrQixLQUFjO1FBQWhDLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLElBQUksQ0FBQyxjQUFRLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQzthQUNyQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUFBLGlCQXdDQztRQXZDRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDekIsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUN2QjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxXQUFXLEVBQUU7WUFDYixpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLHlEQUF5RDtZQUM3RCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU3RSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDcEMscUJBQXFCO29CQUVyQixJQUFJLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTt3QkFDMUIsK0RBQStEO3dCQUMvRCxxQkFBcUI7d0JBQ3JCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3RELEtBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDMUU7eUJBQ0k7d0JBQ0QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUNyQjtnQkFDTCxDQUFDLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBb0VDO1FBbkVHLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDMUMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM5RjthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUM3QyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQy9GO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2xELElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDckQ7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUNwTyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDL0MsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFFO1lBQ2pELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNqQzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLGFBQWEsRUFBRTtZQUNyRCxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbEQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDbkU7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxjQUFjLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLG9EQUFvRDtRQUNwRCxJQUFJLEdBQUcsR0FBYSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzdDLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQixXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztTQUNyQzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdGO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4SCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7b0JBQzdDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM5RTt5QkFDSTt3QkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzlFO2lCQUNKO2dCQUNELGlEQUFpRDtnQkFDakQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxzQ0FBbUIsR0FBbkI7UUFBQSxpQkFvRUM7UUFuRUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDeEY7aUJBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO2dCQUM3QyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3JEO2lCQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtnQkFDbEQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUNwTyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3JEO2lCQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtnQkFDL0MsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDbkU7aUJBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUNqRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtpQkFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFhLEVBQUU7Z0JBQ3JELElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hCO2lCQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtnQkFDbEQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxjQUFjLEdBQVcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLDhDQUE4QztZQUM5QyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQzdDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDakMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzdGO2lCQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtnQkFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlFO2lCQUNJO2dCQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5RTtZQUNELElBQUksR0FBRyxHQUFXLElBQUksQ0FBQztZQUN2QixJQUFJLFdBQVcsR0FBVyxHQUFHLENBQUM7WUFDOUIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO2dCQUM3QyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUNYLFdBQVcsR0FBRyxHQUFHLENBQUM7YUFDckI7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0YsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNuRixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7d0JBQzdDLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTs0QkFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUM5RTs2QkFDSTs0QkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQzlFO3FCQUNKO29CQUNELGlEQUFpRDtvQkFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDckQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUdELGdDQUFhLEdBQWI7UUFBQSxpQkFrQkM7UUFoQkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWhHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRWQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUdSLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQzFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEQsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsTUFBZ0I7UUFBOUIsaUJBc0RDO1FBckRHLElBQUksS0FBSyxHQUFZLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFbkMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsbURBQW1EO1lBQ25ELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBRzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9JLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ25DLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2RSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7YUFFSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ25DLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUMvRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUdoRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDL0csRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFcEgsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMs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LENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRTlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBMUU3QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb3FDNUI7SUFBRCxlQUFDO0NBcHFDRCxBQW9xQ0MsQ0FwcUNxQyxFQUFFLENBQUMsU0FBUyxHQW9xQ2pEO2tCQXBxQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9QcmVmYWJzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyL1NjcmlwdHMvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd29yZHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXlPcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29ycmVjdEFjdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBpbmNvcnJlY3RCdXR0b246IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcm90YXRlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHN3aXBlQWN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHB1enpsZVF1ZXN0aW9uVm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwdXp6bGVWb0l0ZXJhdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHdvcmRWb1F1ZXN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgd29yZFZvSXRlcmF0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGpvY2tleUNvcnJlY3QyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdyb25nQW5zd2VyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHRlbXBvcmFyeVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhbGxpb25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBjcnlvblBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGNyeW9uTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdGxjUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB0bGNOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzU2Vjb25kSW50ZXJhY3Rpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpbnRlcmFjdGlvblR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG5cclxuXHJcbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJhY3RhYmxlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgd29yZEN1cnJlbnRTZWxlY2VkUG9zOiBjYy5WZWMyO1xyXG5cclxuICAgIHByaXZhdGUgcXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjb3JyZWN0V29yZFNlcTogc3RyaW5nW10gPSBbXCIxMzJcIl07XHJcbiAgICBwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgY3VyclNjZW5lOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBjb2xvclZhbHVlOiBjYy5Db2xvciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGVkdWxlUXVlc3Rpb25DbGlwO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5uZWVkUmVpdGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblR5cGUgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pbnRlcmFjdGlvblR5cGU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZU9wdGlvbnModGhpcy5teU9wdGlvbnMsIFwidGVtcGxhdGUxXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMud29yZHNOb2RlLCBcInRlbXBsYXRlMlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXNldEludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXApO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCwgMTApO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmJhZ1Bvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmJhZ05lZ2F0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25OZWdhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnRsY05lZ2F0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlVwZGF0ZUpzb25EYXRhKCk7XHJcblxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclZhbHVlID0gdGhpcy5vcHRpb25zLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VyclNjZW5lID0gc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUgLSAxLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFN0YXJ0ZWQtLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA+PSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgodGhpcy5jdXJyU2NlbmUgKyAxKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCkge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhdGVHYW1lKCk7XHJcbiAgICAgICAgfSwgMSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVKc29uRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5tYWluQmc7XHJcblxyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVRdWVzdGlvblZvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uUHV6emxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wdXp6bGVzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvcnJlY3RBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucHV6emxlVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUyLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb1F1ZXN0aW9uID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycldvcmRTZXEtLVwiICsgdGhpcy5jdXJyV29yZFNlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnJlaXRlcmF0aW9uQXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uUHV6emxlSW1hZ2VOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnB1enpsZXNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVZvSXRlcmF0aW9uID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lMiwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9RdWVzdGlvbiA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9JdGVyYXRpb24gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBfd2lkdGggPSAyNTA7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAyNTA7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA0KSB7XHJcbiAgICAgICAgICAgIF93aWR0aCA9IDI1MDtcclxuICAgICAgICAgICAgX2hlaWdodCA9IDI1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzID09IDkpIHtcclxuICAgICAgICAgICAgX3dpZHRoID0gMTY2O1xyXG4gICAgICAgICAgICBfaGVpZ2h0ID0gMTY2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLndpZHRoID0gX3dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uaGVpZ2h0ID0gX2hlaWdodDtcclxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBJbml0aWF0ZUdhbWUoKSB7XHJcbiAgICAgICAgLy9yZXBlYXQgbWV0aG9kXHJcbiAgICAgICAgdGhpcy5VcGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUpIHsgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTsgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLmFuZ2xlICUgMzYwICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihfY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7IH0sIDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TZXRGcmFtZU9wdGlvbnMoKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG5cclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCAoX2V2ZW50KSA9PiB7IHRoaXMud29yZFRvdWNoU3RhcnQoX2V2ZW50KTsgfSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hNb3ZlKF9ldmVudCk7IH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaGVuZCcsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hFbmQoX2V2ZW50KTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0RnJhbWVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc0hpbnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAvIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggLyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gOSkge1xyXG4gICAgICAgICAgICBsZXQgdGhyZXNoSG9sZDogbnVtYmVyID0gMVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoKSArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCkgKyB0aHJlc2hIb2xkLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC0gdGhyZXNoSG9sZCwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGgpICsgdGhyZXNoSG9sZCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24oMCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoIC0gdGhyZXNoSG9sZCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCArIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS53aWR0aCAtIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oMCwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAtIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gMTYpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHRocmVzaEhvbGQ6IG51bWJlciA9IDYyLjVcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLmhlaWdodCArIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCArIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5oZWlnaHQgKyB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS53aWR0aCAvIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlbls1XS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLndpZHRoICsgdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzddLmhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bOF0uaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxMF0uaGVpZ2h0IC8gMik7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzExXS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxMl0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLnNldFBvc2l0aW9uKCh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLndpZHRoIC8gMiksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTRdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzE1XS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IF9yYW5kb21OdW1iZXI6IG51bWJlciA9IDE7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3JhbmRvbU51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9yYW5kb21OdW1iZXIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFuZ2xlID0gLSg5MCAqIF9yYW5kb21OdW1iZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLnRvKDAuOCwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1enpsZVF1ZXN0aW9uVm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5wdXp6bGVRdWVzdGlvblZvLmR1cmF0aW9uIC0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVF1ZXN0aW9uVm8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyU2NlbmUgPCA0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIjFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGhhbmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZENsaWNrXCIpO1xyXG4gICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQdXp6bGVJbWFnZShfZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBlYXRRdWVzdGlvbkNsaWNrZWQoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvblBsYXlpbmcpIHtcclxuICAgICAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGVQdXp6bGVJbWFnZShfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gX25vZGU7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucm90YXRlQWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgYW5nbGU6IGFuZ2xlIC0gOTAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLm9wdGlvbnNBbGlnbmVkKCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG9wdGlvbnNBbGlnbmVkKCkge1xyXG4gICAgICAgIGxldCBsZXZlbFBhc3NlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goKF9jaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2NoaWxkLmFuZ2xlICUgMzYwICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldmVsUGFzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChsZXZlbFBhc3NlZCkge1xyXG4gICAgICAgICAgICAvL2lmIHRoZSBpdGVtcyBoYXZlIGJlZW4gYWxpZ25lZCBcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qb2NrZXlDb3JyZWN0MiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmNvcnJlY3RBY3Rpb24uZHVyYXRpb24gLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGludFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDAuMywgeyB4OiAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMud29yZEFwcGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgd2hhdCBpbnRlcmFjdGlvbiBpdCBpcyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3cgcXVlc3Rpb24gcGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndvcmRWb1F1ZXN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiID8gdGhpcy5PcHRpb25zQXBwZWFyKCkgOiB0aGlzLndvcmRBcHBlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHV6emxlVm9JdGVyYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2FsbEpvY2tleSgpIHtcclxuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NzaXRpdmVcIiwgXCJwb3NzaXRpdmUyXCIsIFwicG9zc2l0aXZlM1wiLCBcInBvc3NpdGl2ZTRcIiwgXCJwb3NzaXRpdmU1XCIsIFwicG9zc2l0aXZlNlwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV82XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXJwKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcclxuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFuaW06IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdldGl2ZVwiLCBcIm5lZ2V0aXZlMlwiLCBcIm5lZ2V0aXZlM1wiLCBcIm5lZ2V0aXZlNFwiLCBcIm5lZ2V0aXZlNVwiLCBcIm5lZ2V0aXZlNlwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltID0gW1widHJ5X2FnYWluXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVycCgwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9IDE2MDA7XHJcbiAgICAgICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyID0gNDUwO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSAxOTAwO1xyXG4gICAgICAgICAgICAgICAgam9ja2V5dHdlZW4gPSA4NzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvcywgLTM1MCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IHBvcyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0sIDAuNyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIE9wdGlvbnNBcHBlYXIoKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMC4zLCB7IHg6IHRoaXMub3B0aW9ucy54IC0gMjAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm15T3B0aW9ucykudG8oMC4zLCB7IHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC41ICogaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIG9uQnV0dG9uQ2xpY2soX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IF9ldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmIChfbm9kZS5uYW1lID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lICE9IF9ub2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygxLCB7IHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QnV0dG9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgICAgICBfbm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjEsIHsgc2NhbGVYOiAwLjcsIHNjYWxlWTogMC44LCBjb2xvcjogY2MuQ29sb3IuR1JFRU4gfSkudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLCBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndyb25nQW5zd2VyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IGFuZ2xlOiAxMCB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtMTAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAxMCB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IHRoaXMuY29sb3JWYWx1ZSB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgd29yZEFwcGVhcigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDEsIHsgc2NhbGU6IHRoaXMub3B0aW9ucy5zY2FsZSAtIDAuMiB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyB4OiAwLCB5OiAxMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIF9jaGlsZC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC41ICogaW5kZXgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvUXVlc3Rpb24sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBjYy52Mih0aGlzLndvcmRzTm9kZS5jaGlsZHJlblswXS5nZXRQb3NpdGlvbigpLngsIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzBdLmdldFBvc2l0aW9uKCkueSAtIDI1MCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MyOiBjYy5WZWMyID0gY2MudjIodGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMV0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLndvcmRzTm9kZS5jaGlsZHJlblsxXS5nZXRQb3NpdGlvbigpLnkgLSAyNTApO1xyXG4gICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2sxXCIpO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBoYW5kTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhhbmROb2RlKS50bygxLCB7IHg6IHBvczIueCwgeTogcG9zMi55IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RhYmxlPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMud29yZFN3YXAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMF0sIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndvcmRzXCIpLmNoaWxkcmVuWzFdLCAtMjUwLCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FbmREcmFnKCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0sIHRoaXMud29yZFZvUXVlc3Rpb24uZHVyYXRpb24gLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JkU3dhcChfbm9kZTE6IGNjLk5vZGUsIF9ub2RlMjogY2MuTm9kZSwgeDE6IG51bWJlciwgeDI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRW5kRHJhZygpO1xyXG4gICAgICAgIHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcclxuICAgICAgICB0aGlzLmN1cnJXb3JkU2VxID0gdGhpcy5jdXJyV29yZFNlcS5yZXBsYWNlKF9ub2RlMi5uYW1lLCBfbm9kZTEubmFtZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyV29yZFNlcSA9IHRoaXMuY3VycldvcmRTZXEucmVwbGFjZShcInhcIiwgX25vZGUyLm5hbWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgd29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJXb3JkU2VxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdvcmQgKz0gdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jdXJyV29yZFNlcVtpXSkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid29yZC0tXCIgKyB3b3JkKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUxKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgyIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUyKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgxIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycldvcmRTZXEsIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0sIHRoaXMuY3VyclNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JkID09IHRoaXMuY29ycmVjdFdvcmRTZXFbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndvcmRzIGFsaWduZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxldmVsRmluaXNoZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnN3aXBlQWN0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgRW5kRHJhZygpIHtcclxuICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB3b3JkVG91Y2hTdGFydChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RhYmxlKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZXZlbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gX2V2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC5nZXRQb3NpdGlvbihjYy52MigpKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd29yZFRvdWNoTW92ZShfZXZlbnQpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBzYW1lIG9iamVjdCBpcyBtb3Zpbmcgd2hpY2ggc3RhcnRlZCBmaXJzdFxyXG4gICAgICAgIGlmICh0aGlzLndvcmRDdXJyZW50U2VsZWNlZCAmJiBfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ICs9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpLng7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ID4gODAwIHx8IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLnggPCAtODAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc2V0IHBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy53b3JkQ3VycmVudFNlbGVjZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVuZERyYWcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2xsaXNpb25XaXRoOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLm5hbWUgPT0gX2V2ZW50LnRhcmdldC5uYW1lKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZC5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKF9ldmVudC50YXJnZXQuZ2V0UG9zaXRpb24oKSkpIHsgY29sbGlzaW9uV2l0aCA9IF9jaGlsZDsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbldpdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGlzaW9uIHdpdGggXCIsIGNvbGxpc2lvbldpdGgubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRTd2FwKGNvbGxpc2lvbldpdGgsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLCBjb2xsaXNpb25XaXRoLngsIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkUG9zLngpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd29yZFRvdWNoRW5kKF9ldmVudCkge1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gdGhpcy53b3JkQ3VycmVudFNlbGVjZWQ/Lm5hbWUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbmQgZXZlbnRcIik7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcy54IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbGV2ZWxGaW5pc2hlZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEFjdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xldmVsQ29tcGxldGUtLScgKyB0aGlzLmN1cnJTY2VuZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC44KTtcclxuICAgICAgICAgICAgfSwgMS4yKTtcclxuXHJcbiAgICAgICAgfSwgMS41KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBfbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKDEsIDMsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXJwKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZU9wdGlvbnMoX25vZGU6IGNjLk5vZGUgPSB0aGlzLm15T3B0aW9ucywgX3RlbXBsYXRlOiBzdHJpbmcgPSBcInRlbXBsYXRlMVwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkpO1xyXG4gICAgICAgICAgICBvcHRpb24ubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldFBhcmVudChfbm9kZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBvcHRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKF90ZW1wbGF0ZSkuZGVzdHJveSgpO1xyXG4gICAgICAgIGlmIChfdGVtcGxhdGUgPT0gXCJ0ZW1wbGF0ZTFcIikge1xyXG4gICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVyc2VPcHRpb25zTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oMCwgMTIwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKDAsIC0xMjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMud29yZHNOb2RlLCAzMCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy53b3Jkc05vZGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBvcHRpb25IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdmFpbGFibGVXaWR0aCA9IG9wdGlvbnNMYXlvdXQud2lkdGg7XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGhXaXRoUGFkZGluZyA9IHRvdGFsV2lkdGggKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuICAgICAgICBsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgKG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYKTtcclxuICAgICAgICAgICAgb3B0aW9uLnggPSBwb3NYIC0gKG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclgpO1xyXG5cclxuICAgICAgICAgICAgYWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LmhlaWdodCA9IG1heEhlaWdodCAqIHNjYWxlRmFjdG9yO1xyXG4gICAgfVxyXG4gICAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxyXG5cclxuICAgICAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8gQXJyYW5nZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHN0YXJ0WCArPSBjaGlsZC53aWR0aCArIHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9wdGlvbnNMYXlvdXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZUhlaWdodCA9IG9wdGlvbnNMYXlvdXQuaGVpZ2h0O1xyXG4gICAgICAgIGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID0gdG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlSGVpZ2h0IC8gdG90YWxIZWlnaHRXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgICAgICAgIGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyAob3B0aW9uLmhlaWdodCAqIG9wdGlvbi5hbmNob3JZKTtcclxuICAgICAgICAgICAgb3B0aW9uLnkgPSBwb3NZIC0gKG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZKTtcclxuXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkSGVpZ2h0ICs9IG9wdGlvbi5oZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlT3B0aW9uc0xheW91dCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIHRoZSBuZXcgcG9zaXRpb25zXHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9ucy5wdXNoKG9wdGlvbk5vZGVzW2ldLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGVzW2ldLnkgPSBuZXdQb3NpdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/ProgressBar/ProgressBar/Scripts/ProgressBar.ts

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
var StartGame_1 = require("../../../../Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.starsEarned = [false, false, false];
        return _this;
        // update (dt) {}
    }
    ProgressBar_1 = ProgressBar;
    Object.defineProperty(ProgressBar, "Instance", {
        get: function () {
            return ProgressBar_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    ProgressBar.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        ProgressBar_1.instance = this;
    };
    ProgressBar.prototype.start = function () {
    };
    ProgressBar.prototype.ProgressFill = function (_currentQues, starLog) {
        if (starLog === void 0) { starLog = true; }
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.totalLevels; //totalLevels
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues != 0 && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
            if (!this.starsEarned[0] && starLog) {
                this.starsEarned[0] = true;
                console.log("starsEarned--1");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && this.node.getChildByName("stars").children[1].opacity == 0) {
            if (!this.starsEarned[1] && starLog) {
                this.starsEarned[1] = true;
                console.log("starsEarned--2");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels && this.node.getChildByName("stars").children[2].opacity == 0) {
            if (!this.starsEarned[2] && starLog) {
                this.starsEarned[2] = true;
                console.log("starsEarned--3");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[2]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
    };
    ProgressBar.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        // _number = _number * this.shapes.length;
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    ProgressBar.prototype.createStarTrails = function (num, _node) {
        var _this = this;
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var NodePOS = _node.convertToWorldSpaceAR(this_1.node.parent.position);
            var rngX = this_1.getRandomNumber(_node.x - _offset, _node.x + _offset);
            var rngY = this_1.getRandomNumber(_node.y - _offset, _node.y + _offset);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = this_1.node.parent;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            particles.addComponent(cc.AudioSource).clip = this_1.particleSounds;
            particles.width = 600;
            particles.height = 600;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.trailsImg;
            trail.getComponent(cc.MotionStreak).enabled = false;
            // trail.color = new cc.Color(252, 244, 0);
            this_1.scheduleOnce(function () {
                particles.getComponent(cc.AudioSource).play();
                cc.tween(particles).to(0.75, { width: 35, height: 35 }, { easing: "backOut" }).start();
                cc.tween(particles).to(0.25, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.scheduleOnce(function () {
                        trail.getComponent(cc.MotionStreak).minSeg = 10;
                        trail.getComponent(cc.MotionStreak).stroke = 20;
                        trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        trail.getComponent(cc.MotionStreak).enabled = true;
                        trail.getComponent(cc.MotionStreak).fastMode = true;
                        cc.audioEngine.playEffect(_this.trailSounds, false);
                        // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                        // particles.getComponent(cc.AudioSource).volume = 0.2;
                        // particles.getComponent(cc.AudioSource).play();
                        if (_this.isVertical) {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x, _this.node.y - (_offset * 2) - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x - (_offset * 2) - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress), _this.node.y)) //endpoint
                                .start();
                        }
                        cc.tween(particles).to(0.75, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                        cc.tween(particles).to(0.75, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                            particles.destroy();
                        }).start();
                    }, 0.5);
                }).start();
            }, 0.1 * (i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    var ProgressBar_1;
    ProgressBar.instance = null;
    __decorate([
        property(Boolean)
    ], ProgressBar.prototype, "isVertical", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ProgressBar.prototype, "starImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], ProgressBar.prototype, "trailsImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "trailSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "particleSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "starPopSound", void 0);
    ProgressBar = ProgressBar_1 = __decorate([
        ccclass
    ], ProgressBar);
    return ProgressBar;
}(cc.Component));
exports.default = ProgressBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc0JhclxcUHJvZ3Jlc3NCYXJcXFNjcmlwdHNcXFByb2dyZXNzQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJEQUFzRDtBQUdoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9KQztRQWhKVyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQWM1QixpQkFBVyxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFpSXZELGlCQUFpQjtJQUNyQixDQUFDO29CQXBKb0IsV0FBVztJQW9CNUIsc0JBQVcsdUJBQVE7YUFBbkI7WUFDSSxPQUFPLGFBQVcsQ0FBQyxRQUFRLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLHlDQUF5QztRQUN6QyxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsWUFBb0IsRUFBRSxPQUF1QjtRQUF2Qix3QkFBQSxFQUFBLGNBQXVCO1FBQ3RELHdDQUF3QztRQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEsYUFBYTtRQUM1RCxJQUFJLEtBQUssR0FB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RSxDQUFDO3dCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDZixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQTNEdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLENBQUMsRUFBRTtvQkFBbEMsQ0FBQztTQTREVDtJQUNMLENBQUM7O0lBOUljLG9CQUFRLEdBQWdCLElBQUksQ0FBQztJQUU1QztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7bURBQ2tCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDUztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ2M7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDWTtJQWhCbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9KL0I7SUFBRCxrQkFBQztDQXBKRCxBQW9KQyxDQXBKd0MsRUFBRSxDQUFDLFNBQVMsR0FvSnBEO2tCQXBKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHByaXZhdGUgdHJhaWxzSW1nOiBjYy5UZXh0dXJlMkQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdHJhaWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyUG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJzRWFybmVkOiBCb29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyLCBzdGFyTG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcGFydGljbGVzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVzXCIgKyAxKTtcclxuICAgICAgICBsZXQgbWF4TGV2ZWxzID0gc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzOy8vdG90YWxMZXZlbHNcclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgIT0gMCAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMF0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0ub3BhY2l0eSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGFyc0Vhcm5lZFsxXSAmJiBzdGFyTG9nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJzRWFybmVkWzFdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMF0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzICYmIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMl0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzFdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gX251bWJlciA9IF9udW1iZXIgKiB0aGlzLnNoYXBlcy5sZW5ndGg7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgTm9kZVBPUyA9IF9ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucGFyZW50LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS54IC0gX29mZnNldCwgX25vZGUueCArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy50cmFpbHNJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgYW5nbGU6IDE4MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCkudG8oMC4yNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYWlsU291bmRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gKF9vZmZzZXQgKiAyKSAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSkpIC8vZW5kcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLnggLSAoX29mZnNldCAqIDIpIC0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggLyAyICsgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoICogdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpLCB0aGlzLm5vZGUueSkpIC8vZW5kcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjc1LCB7IGFuZ2xlOiAtcGFydGljbGVzLmFuZ2xlIC8gMiB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5gIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSwgMC4xICogKGkgKyAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

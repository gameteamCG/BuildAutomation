
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
require('./assets/Framework/Prefabs/ProgressBar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Functionalities');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/SwipeToForm/Assets/1_Jaipuria_Old/JaipuriaJockey');
require('./assets/Games/SwipeToForm/Scripts/GameEnd');
require('./assets/Games/SwipeToForm/Scripts/Gameplay');
require('./assets/Games/SwipeToForm/Scripts/globalVariables');
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
cc._RF.push(module, 'e9691v99LJBlbdIEe/de49R', 'empty');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxlbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Assets/1_Jaipuria_Old/JaipuriaJockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70993Qwb6RF76IWhiSyTt6/', 'JaipuriaJockey');
// Games/SwipeToForm/Assets/1_Jaipuria_Old/JaipuriaJockey.ts

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
        _this.jockeySequenceArray = ["Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener", "Bag", "Crayon", "Pencil", "Shrpnpener"];
        return _this;
        // callNegativeReaction() {
        //     this.canTouch = false;
        //     let currentAudioClip: cc.AudioClip;
        //     if (this.negativeReactionCounter % 2 == 0) {
        //         currentAudioClip = this.negativeAudios[1];
        //     }
        //     else {
        //         currentAudioClip = this.negativeAudios[0]
        //     }
        //     let position1: number;
        //     let position2: number;
        //     if (globalVariables.Instance.currentLevel % 2 == 0) {
        //         position1 = -400;
        //         position2 = -1500;
        //     }
        //     else {
        //         position1 = 400;
        //         position2 = 1500;
        //     }
        //     let clipNames = ["negative_1"];
        //     startGame.Instance.JockeyNode.x = position2;
        //     startGame.Instance.JockeyNode.children.forEach(element => {
        //         element.active = false;
        //     });
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]);
        //     currentJockeyNode.active = true;
        //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position1 }).start();
        //     this.scheduleOnce(() => {
        //         let currentClip: string = clipNames[0];
        //         currentJockeyNode.zIndex = 1;
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //         this.scheduleOnce(() => {
        //             cc.audioEngine.playEffect(currentAudioClip, false);
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //             this.scheduleOnce(() => {
        //                 currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //                 this.scheduleOnce(() => {
        //                     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position2 }).start();
        //                     this.scheduleOnce(() => {
        //                         startGame.Instance.JockeyNode.children.forEach(element => {
        //                             element.active = false;
        //                         });
        //                         this.canTouch = true;
        //                     }, 1);
        //                 }, this.getAnimDuration(currentClip + "_end"));
        //             }, currentAudioClip.duration - 0.5);
        //         }, this.getAnimDuration(currentClip + "_start"));
        //     }, 0.5);
        // }
        // callPositiveReaction() {
        //     console.log("characterAppear--Jumbo_Podar");
        //     let position1: number;
        //     let position2: number;
        //     if (globalVariables.Instance.currentLevel % 2 == 0) {
        //         position1 = -400;
        //         position2 = -1500;
        //     }
        //     else {
        //         position1 = 400;
        //         position2 = 1500;
        //     }
        //let clipNames = ["positive_1", "positive_1", "positive_1", "positive_1", "positive_2", "positive_2", "positive_2", "positive_2", "positive_3", "positive_1", "positive_3", "positive_1"];
        //     startGame.Instance.JockeyNode.x = position2;
        //     startGame.Instance.JockeyNode.children.forEach(element => {
        //         element.active = false;
        //     });
        // let currentNum: number = parseInt(cc.director.getScene().name);
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[currentNum - 1]);
        //     currentJockeyNode.active = true;
        //     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position1 }).start();
        //     this.scheduleOnce(() => {
        //         let currentClip: string = clipNames[globalVariables.Instance.currentLevel - 1];
        //         currentJockeyNode.zIndex = 1;
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //         this.scheduleOnce(() => {
        //             cc.audioEngine.playEffect(positiveAudios[0], false);
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //             this.scheduleOnce(() => {
        //                 currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //                 this.scheduleOnce(() => {
        //                     cc.tween(startGame.Instance.JockeyNode).to(0.5, { x: position2 }).start();
        //                     this.scheduleOnce(() => {
        //                         startGame.Instance.JockeyNode.children.forEach(element => {
        //                             element.active = false;
        //                         });
        //                         this.finishedAnim();
        //                     }, 1);
        //                 }, this.getAnimDuration(currentClip + "_end"));
        //             }, this.positiveAudios[0].duration - 0.5);
        //         }, this.getAnimDuration(currentClip + "_start"));
        //     }, 0.5);
        // }
        // getAnimDuration(animName: string): number {
        //     //console.log("currentjockey :", startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]))
        //     let num: number = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[globalVariables.Instance.currentLevel - 1]).getComponent(sp.Skeleton).findAnimation(animName).duration;
        //     return num;
        // }
        // @property(cc.Node)
        // loading: cc.Node = null;
        // @property(cc.AudioClip)
        // play_audio: cc.AudioClip = null;
        // OnStartGame(_event: cc.Event) {
        //     cc.audioEngine.playEffect(this.play_audio, false);
        //     this.loading.active = true;
        //     _event.target.active = false;
        //     _event.target.getComponent(cc.Button).interactable = false;
        //     cc.director.loadScene(this.NextSceneName);
        // }
        // EndButton() {
        //     cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
        //     console.log("gameEnded--" + true);
        //     closeWindow();
        // }
        // const closeWindow = () => {
        //     window.open(location.href, "_self", "");
        //     window.close()
        // }
        // update (dt) {}
        // Letter sound Games 
        //positive reactions
        // let clipNames = ["positive_2", "positive_2", "positive_2", "positive_2", "positive_3", "positive_3", "positive_3", "positive_3", "positive_2", "positive_2", "positive_4", "positive_2", "positive_5", "positive_3", "positive_5", "positive_3"];
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     let currentClip: string = clipNames[globalVariables.Instance.currentLevel - 1];
        //     currentJockeyNode.zIndex = 1;
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.playEffect(this.positiveAudios[0], false);
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //         this.scheduleOnce(() => {
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //             this.scheduleOnce(() => {
        //                 this.scheduleOnce(() => {
        //                     this.finishedAnimNice();
        //                 }, 1);
        //             }, this.getAnimDuration(currentClip + "_end"));
        //         }, this.positiveAudios[0].duration - 0.5);
        //     }, this.getAnimDuration(currentClip + "_start"));
        // callNegativeReaction() {
        //     this.canTouch = false;
        //     let currentAudioClip: cc.AudioClip = this.negativeAudios[0];
        //     let clipNames = ["negative_1"];
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     let currentClip: string = clipNames[0];
        //     currentJockeyNode.zIndex = 1;
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_start", false);
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.playEffect(currentAudioClip, false);
        //         currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_loop", true);
        //         this.scheduleOnce(() => {
        //             currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, currentClip + "_end", false);
        //             this.scheduleOnce(() => {
        //                 this.finishedAnimNice();
        //                 this.canTouch = true;
        //             }, this.getAnimDuration(currentClip + "_end"));
        //         }, currentAudioClip.duration - 0.5);
        //     }, this.getAnimDuration(currentClip + "_start"));
        // }
        // finishedAnimNice() {
        //     //this.node.getChildByName("Newts").getComponent(cc.Animation).play("Breathing_normal");
        //     let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        //     currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        // }
        //onload
        //this.currentSceneNum = parseInt(cc.director.getScene().name);
        // startGame.Instance.JockeyNode.x = 550;
        // startGame.Instance.JockeyNode.children.forEach(element => {
        //     element.active = false;
        // });
        // let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        // currentJockeyNode.active = true;
        // let currentJockeyNode: cc.Node = startGame.Instance.JockeyNode.getChildByName(this.jockeySequenceArray[this.currentSceneNum - 1]);
        // currentJockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxBc3NldHNcXDFfSmFpcHVyaWFfT2xkXFxKYWlwdXJpYUpvY2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBOQztRQXZORyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIseUJBQW1CLEdBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7UUFXck0sMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QiwwQ0FBMEM7UUFDMUMsbURBQW1EO1FBQ25ELHFEQUFxRDtRQUNyRCxRQUFRO1FBQ1IsYUFBYTtRQUNiLG9EQUFvRDtRQUVwRCxRQUFRO1FBRVIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw0REFBNEQ7UUFDNUQsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixRQUFRO1FBQ1IsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsUUFBUTtRQUVSLHNDQUFzQztRQUN0QyxtREFBbUQ7UUFDbkQsa0VBQWtFO1FBQ2xFLGtDQUFrQztRQUNsQyxVQUFVO1FBRVYsMEpBQTBKO1FBQzFKLHVDQUF1QztRQUN2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cUlBQXFJO1FBQ3JJLG1DQUFtQztRQUNuQyxxSUFBcUk7UUFDckksNkVBQTZFO0lBRWpGLENBQUM7SUEvTUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBONUI7SUFBRCxlQUFDO0NBMU5ELEFBME5DLENBMU5xQyxFQUFFLENBQUMsU0FBUyxHQTBOakQ7a0JBMU5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBqb2NrZXlTZXF1ZW5jZUFycmF5OiBzdHJpbmdbXSA9IFtcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIiwgXCJCYWdcIiwgXCJDcmF5b25cIiwgXCJQZW5jaWxcIiwgXCJTaHJwbnBlbmVyXCIsIFwiQmFnXCIsIFwiQ3JheW9uXCIsIFwiUGVuY2lsXCIsIFwiU2hycG5wZW5lclwiLCBcIkJhZ1wiLCBcIkNyYXlvblwiLCBcIlBlbmNpbFwiLCBcIlNocnBucGVuZXJcIl07XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsTmVnYXRpdmVSZWFjdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIC8vICAgICBpZiAodGhpcy5uZWdhdGl2ZVJlYWN0aW9uQ291bnRlciAlIDIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50QXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1sxXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRBdWRpb0NsaXAgPSB0aGlzLm5lZ2F0aXZlQXVkaW9zWzBdXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uMTogbnVtYmVyO1xyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjI6IG51bWJlcjtcclxuICAgIC8vICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSAtNDAwO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjIgPSAtMTUwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMSA9IDQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gMTUwMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBjbGlwTmFtZXMgPSBbXCJuZWdhdGl2ZV8xXCJdO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NpdGlvbjI7XHJcbiAgICAvLyAgICAgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSk7XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbMF07XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLnpJbmRleCA9IDE7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGN1cnJlbnRBdWRpb0NsaXAsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCBjdXJyZW50QXVkaW9DbGlwLmR1cmF0aW9uIC0gMC41KTtcclxuICAgIC8vICAgICAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY2FsbFBvc2l0aXZlUmVhY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLUp1bWJvX1BvZGFyXCIpO1xyXG4gICAgLy8gICAgIGxldCBwb3NpdGlvbjE6IG51bWJlcjtcclxuICAgIC8vICAgICBsZXQgcG9zaXRpb24yOiBudW1iZXI7XHJcbiAgICAvLyAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDApIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24xID0gLTQwMDtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb24yID0gLTE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjEgPSA0MDA7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uMiA9IDE1MDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9sZXQgY2xpcE5hbWVzID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8xXCJdO1xyXG5cclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS54ID0gcG9zaXRpb24yO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gbGV0IGN1cnJlbnROdW06IG51bWJlciA9IHBhcnNlSW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcblxyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVtjdXJyZW50TnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUpLnRvKDAuNSwgeyB4OiBwb3NpdGlvbjEgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QocG9zaXRpdmVBdWRpb3NbMF0sIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc2l0aW9uMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRBbmltKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb3NbMF0uZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIpKTtcclxuICAgIC8vICAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0QW5pbUR1cmF0aW9uKGFuaW1OYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50am9ja2V5IDpcIiwgc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSkpXHJcbiAgICAvLyAgICAgbGV0IG51bTogbnVtYmVyID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1OYW1lKS5kdXJhdGlvbjtcclxuICAgIC8vICAgICByZXR1cm4gbnVtO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gcGxheV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBPblN0YXJ0R2FtZShfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICBfZXZlbnQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tXCIgKyB0cnVlKTtcclxuICAgIC8vICAgICBjbG9zZVdpbmRvdygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmNsb3NlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8vIExldHRlciBzb3VuZCBHYW1lcyBcclxuXHJcbiAgICAvL3Bvc2l0aXZlIHJlYWN0aW9uc1xyXG4gICAgLy8gbGV0IGNsaXBOYW1lcyA9IFtcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzNcIl07XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRKb2NrZXlOb2RlOiBjYy5Ob2RlID0gc3RhcnRHYW1lLkluc3RhbmNlLkpvY2tleU5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5qb2NrZXlTZXF1ZW5jZUFycmF5W3RoaXMuY3VycmVudFNjZW5lTnVtIC0gMV0pO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Q2xpcDogc3RyaW5nID0gY2xpcE5hbWVzW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS56SW5kZXggPSAxO1xyXG4gICAgLy8gICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9zWzBdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudEpvY2tleU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY3VycmVudENsaXAgKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZEFuaW1OaWNlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCB0aGlzLmdldEFuaW1EdXJhdGlvbihjdXJyZW50Q2xpcCArIFwiX2VuZFwiKSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb3NbMF0uZHVyYXRpb24gLSAwLjUpO1xyXG4gICAgLy8gICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfc3RhcnRcIikpO1xyXG5cclxuICAgIC8vIGNhbGxOZWdhdGl2ZVJlYWN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvc1swXTtcclxuICAgIC8vICAgICBsZXQgY2xpcE5hbWVzID0gW1wibmVnYXRpdmVfMVwiXTtcclxuICAgIC8vICAgICBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRDbGlwOiBzdHJpbmcgPSBjbGlwTmFtZXNbMF07XHJcbiAgICAvLyAgICAgY3VycmVudEpvY2tleU5vZGUuekluZGV4ID0gMTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX3N0YXJ0XCIsIGZhbHNlKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY3VycmVudEF1ZGlvQ2xpcCwgZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjdXJyZW50Q2xpcCArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRKb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGN1cnJlbnRDbGlwICsgXCJfZW5kXCIsIGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkQW5pbU5pY2UoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIHRoaXMuZ2V0QW5pbUR1cmF0aW9uKGN1cnJlbnRDbGlwICsgXCJfZW5kXCIpKTtcclxuICAgIC8vICAgICAgICAgfSwgY3VycmVudEF1ZGlvQ2xpcC5kdXJhdGlvbiAtIDAuNSk7XHJcbiAgICAvLyAgICAgfSwgdGhpcy5nZXRBbmltRHVyYXRpb24oY3VycmVudENsaXAgKyBcIl9zdGFydFwiKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZmluaXNoZWRBbmltTmljZSgpIHtcclxuICAgIC8vICAgICAvL3RoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk5ld3RzXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJCcmVhdGhpbmdfbm9ybWFsXCIpO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vICAgICBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9vbmxvYWRcclxuXHJcbiAgICAvL3RoaXMuY3VycmVudFNjZW5lTnVtID0gcGFyc2VJbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSA1NTA7XHJcbiAgICAvLyBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBjdXJyZW50Sm9ja2V5Tm9kZTogY2MuTm9kZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuam9ja2V5U2VxdWVuY2VBcnJheVt0aGlzLmN1cnJlbnRTY2VuZU51bSAtIDFdKTtcclxuICAgIC8vIGN1cnJlbnRKb2NrZXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyBsZXQgY3VycmVudEpvY2tleU5vZGU6IGNjLk5vZGUgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmpvY2tleVNlcXVlbmNlQXJyYXlbdGhpcy5jdXJyZW50U2NlbmVOdW0gLSAxXSk7XHJcbiAgICAvLyBjdXJyZW50Sm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/ProgressBar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/ProgressBar/Scripts/ProgressBar.ts

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
var StartGame_1 = require("../../../Scripts/StartGame");
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
        var maxLevels = StartGame_1.default.Instance.TotalLevels; //totalLevels
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
                            new cc.Vec2(_this.node.x, _this.node.y - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress), _this.node.y)) //endpoint
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc0JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBSTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBaUpDO1FBN0lXLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBYzVCLGlCQUFXLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQThIdkQsaUJBQWlCO0lBQ3JCLENBQUM7b0JBakpvQixXQUFXO0lBb0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDdEQsd0NBQXdDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxhQUFhO1FBQzVELElBQUksS0FBSyxHQUFHLFlBQVksR0FBRyxT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LEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCOzZCQUNJOzRCQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCO3dCQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDaEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNuRSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBM0R0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFO29CQUFsQyxDQUFDO1NBNERUO0lBQ0wsQ0FBQzs7SUEzSWMsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTVDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzttREFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNZO0lBaEJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUovQjtJQUFELGtCQUFDO0NBakpELEFBaUpDLENBakp3QyxFQUFFLENBQUMsU0FBUyxHQWlKcEQ7a0JBakpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHByaXZhdGUgdHJhaWxzSW1nOiBjYy5UZXh0dXJlMkQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdHJhaWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyUG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJzRWFybmVkOiBCb29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyLCBzdGFyTG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcGFydGljbGVzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVzXCIgKyAxKTtcclxuICAgICAgICBsZXQgbWF4TGV2ZWxzID0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzOy8vdG90YWxMZXZlbHNcclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgIT0gMCAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMF0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9jdXJyZW50UXVlcyA+PSBtYXhMZXZlbHMgLyAyICYmIF9jdXJyZW50UXVlcyA8IG1heExldmVscyAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXS5vcGFjaXR5ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJzRWFybmVkWzFdICYmIHN0YXJMb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNFYXJuZWRbMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzICYmIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMl0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzFdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gX251bWJlciA9IF9udW1iZXIgKiB0aGlzLnNoYXBlcy5sZW5ndGg7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgTm9kZVBPUyA9IF9ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucGFyZW50LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS54IC0gX29mZnNldCwgX25vZGUueCArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy50cmFpbHNJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgYW5nbGU6IDE4MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCkudG8oMC4yNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYWlsU291bmRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggLyAyICsgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoICogdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnggLSAxMDAsIHBhcnRpY2xlcy54ICsgMTAwKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnkgLSA1MDAsIHBhcnRpY2xlcy55ICsgMjAwKSksIC8vY3VydmUgcmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Functionalities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37a18WDawNEQ6/8nTbtHCDd', 'Functionalities');
// Framework/Scripts/Functionalities.ts

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
var Functionalities = /** @class */ (function (_super) {
    __extends(Functionalities, _super);
    function Functionalities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioTimeOut = false;
        return _this;
    }
    Functionalities.prototype.StartAudioTimeOut = function (_audio, _time) {
        var _this = this;
        if (_audio === void 0) { _audio = null; }
        if (_time === void 0) { _time = 5; }
        this.isAudioTimeOut = true;
        cc.audioEngine.playEffect(_audio, false);
        this.scheduleOnce(function () {
            _this.RepeatAudio(_audio, _time);
        }, _time);
    };
    Functionalities.prototype.RepeatAudio = function (_audio, _time) {
        var _this = this;
        if (_time === void 0) { _time = 5; }
        if (this.isAudioTimeOut) {
            cc.audioEngine.playEffect(_audio, false);
            this.scheduleOnce(function () {
                if (_this.isAudioTimeOut) {
                    _this.RepeatAudio(_audio, _time);
                    cc.audioEngine.playEffect(_audio, false);
                }
            }, _time);
        }
    };
    Functionalities.prototype.StopAudioTimeOut = function () {
        this.isAudioTimeOut = false;
    };
    Functionalities.prototype.update = function (dt) {
    };
    Functionalities = __decorate([
        ccclass
    ], Functionalities);
    return Functionalities;
}(cc.Component));
exports.default = Functionalities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxGdW5jdGlvbmFsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE4QkM7UUE1Qlcsb0JBQWMsR0FBWSxLQUFLLENBQUM7O0lBNEI1QyxDQUFDO0lBMUJHLDJDQUFpQixHQUFqQixVQUFrQixNQUEyQixFQUFFLEtBQWlCO1FBQWhFLGlCQU1DO1FBTmlCLHVCQUFBLEVBQUEsYUFBMkI7UUFBRSxzQkFBQSxFQUFBLFNBQWlCO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNPLHFDQUFXLEdBQW5CLFVBQW9CLE1BQW9CLEVBQUUsS0FBaUI7UUFBM0QsaUJBVUM7UUFWeUMsc0JBQUEsRUFBQSxTQUFpQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUdELDBDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUE3QmdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4Qm5DO0lBQUQsc0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjRDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ4RDtrQkE5Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25hbGl0aWVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGlzQXVkaW9UaW1lT3V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgU3RhcnRBdWRpb1RpbWVPdXQoX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsLCBfdGltZTogbnVtYmVyID0gNSkge1xyXG4gICAgICAgIHRoaXMuaXNBdWRpb1RpbWVPdXQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlJlcGVhdEF1ZGlvKF9hdWRpbywgX3RpbWUpO1xyXG4gICAgICAgIH0sIF90aW1lKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgUmVwZWF0QXVkaW8oX2F1ZGlvOiBjYy5BdWRpb0NsaXAsIF90aW1lOiBudW1iZXIgPSA1KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcGVhdEF1ZGlvKF9hdWRpbywgX3RpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIF90aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFN0b3BBdWRpb1RpbWVPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0F1ZGlvVGltZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Scripts/GameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f969ad5GhIDp+3HCCSw2V8', 'GameEnd');
// Games/SwipeToForm/Scripts/GameEnd.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameEnd = /** @class */ (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
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
    GameEnd.prototype.onLoad = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame =
                this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame =
                this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame =
                this.tlcEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame =
                this.supercubEnd;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.introBG;
    };
    GameEnd.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        // this.scheduleOnce(() => {
        //     this.node.getChildByName("awesome").getComponent(cc.Animation).play();
        // }, 0.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" })
                .start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
        }, 2.3);
        this.scheduleOnce(function () {
            _this.node.getChildByName("end").active = true;
        }, 2.5);
    };
    GameEnd.prototype.OnEndBtn = function (_event) {
        closeWindow();
    };
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "yeah", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameEnd.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameEnd.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameEnd.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameEnd.prototype, "supercubEnd", void 0);
    GameEnd = __decorate([
        ccclass
    ], GameEnd);
    return GameEnd;
}(cc.Component));
exports.default = GameEnd;
var closeWindow = function () {
    window.open(location.href, "_self", "");
    window.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxHYW1lRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUd2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXdGQztRQXRGUyxVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztRQXlFM0MsaUJBQWlCO0lBQ25CLENBQUM7SUF4RUMsd0JBQXdCO0lBRXhCLHdCQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztnQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNqQjthQUFNLElBQ0wsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFDdEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFDeEM7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFD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QUMsV0FBVyxDQUFDOzJDQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2tCO0lBZHhCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RjNCO0lBQUQsY0FBQztDQXhGRCxBQXdGQyxDQXhGb0MsRUFBRSxDQUFDLFNBQVMsR0F3RmhEO2tCQXhGb0IsT0FBTztBQXlGNUIsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvY2tleSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL0pvY2tleXMvU2NyaXB0cy9Kb2NrZXlcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUVuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHN0YXI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSB5ZWFoOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHJpdmF0ZSBwb2RhckVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwcml2YXRlIGphaXB1cmlhRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHByaXZhdGUgdGxjRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHByaXZhdGUgc3VwZXJjdWJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgdGhpcy5wb2RhckVuZDtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgdGhpcy5qYWlwdXJpYUVuZDtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9LCAyKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICB0aGlzLnRsY0VuZDtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgIHRoaXMuc3VwZXJjdWJFbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQkc7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1Db25ncmF0dWxhdGlvbnNcIik7XHJcbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gfSwgMC4zKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjFcIikpXHJcbiAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9LCAwLjgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDEuMyk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyWzBdO1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXIzXCIpKVxyXG4gICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS44KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnllYWhbMF07XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJnYW1lRW5kZWQtLXRydWVcIik7XHJcbiAgICB9LCAyLjMpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDIuNSk7XHJcbiAgfVxyXG5cclxuICBPbkVuZEJ0bihfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBjbG9zZVdpbmRvdygpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG5jb25zdCBjbG9zZVdpbmRvdyA9ICgpID0+IHtcclxuICB3aW5kb3cub3Blbihsb2NhdGlvbi5ocmVmLCBcIl9zZWxmXCIsIFwiXCIpO1xyXG4gIHdpbmRvdy5jbG9zZSgpO1xyXG59O1xyXG4iXX0=
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
        _this.volume = 1;
        _this.NextSceneName = "1";
        _this.playBtn_audio = null;
        _this.TotalLevels = 7;
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.loading = null;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.jockey = null;
        _this.mainBg = null;
        _this.introBG = null;
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        return _this;
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
    };
    startGame.prototype.logData = function () {
        console.log("Total Levels:", this.TotalLevels);
        // console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        // Log question data
        this.questions.forEach(function (question, index) {
            console.log("Question " + (index + 1) + ":");
            console.log("Question Image Name:", question.questionImageName);
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            // console.log("Correct Answer Number:", question.correctAnswerNum);
        });
    };
    startGame.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, "");
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, "");
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
            var encodedJson = urlParams.get("json");
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            var levelCount = jsonData.additionalData.totalLevel;
            this.TotalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
            this.questions = jsonData.questionData;
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("title")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                _this.introBG = spriteFrame;
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                // question.questionImageName = question.questionImageName;
                // question.commonOptionImageName = question.commonOptionImageName;
                // If options are image names, you might want to remove extensions as well
                question.options = question.options.map(function (option) { return option; });
            });
            // Now you can use these variables within this script
            // this.logData();
        }
        else {
            cc.loader.loadRes("game_data", cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                var levelCount = jsonData.additionalData.totalLevel;
                _this.TotalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                console.log("jockey name = ", _this.jockeyName);
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    if (spriteFrame)
                        cc
                            .find("Canvas")
                            .getChildByName("bg")
                            .getChildByName("title")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    if (spriteFrame) {
                        _this.introBG = spriteFrame;
                        cc
                            .find("Canvas")
                            .getChildByName("bg")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    if (AudioClip) {
                        _this.BGM_audio = AudioClip;
                        var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                        cc.audioEngine.setVolume(id, _this.volume);
                    }
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    if (spriteFrame) {
                        _this.mainBg = spriteFrame;
                    }
                });
                _this.questions.forEach(function (question) {
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    question.questionAudioName = _this.removeAudioExtension(question.questionAudioName);
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.reiterationImageName = _this.removeExtension(question.reiterationImageName);
                    question.correctAudioName = _this.removeAudioExtension(question.correctAudioName);
                    // If options are image names, you might want to remove extensions as well
                    question.options = question.options.map(function (option) {
                        return _this.removeExtension(option);
                    });
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
        var isPremium = url.searchParams.get("isPremium");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        this.NextSceneName = "1";
        // if (level != null) {
        //     this.NextSceneName = level;
        //     if (parseInt(this.NextSceneName) >= this.TotalLevels) {
        //         this.NextSceneName = this.TotalLevels.toString();
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
        if (isPremium == "1") {
            this.isMusicOn = true;
        }
        else if (isPremium == "0") {
            this.isMusicOn = false;
        }
        this.scheduleOnce(function () {
            var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
            cc.audioEngine.setVolume(id, _this.volume);
            if (isAudio == "false") {
                _this.node.getChildByName("music").children[0].active = true;
                _this.isMusicOn = false;
                cc.audioEngine.stopMusic();
            }
            else {
                _this.node.getChildByName("music").children[0].active = false;
                _this.isMusicOn = true;
                var id_1 = cc.audioEngine.playMusic(_this.BGM_audio, true);
                cc.audioEngine.setVolume(id_1, _this.volume);
            }
        }, 1);
        var ageValue = parseInt(age);
        if (this.isAgeParameterNeeded) {
            if (ageValue <= this.LevelAgeParameters[0]) {
                this.levelType = "1";
            }
            else if (this.LevelAgeParameters.length > 1) {
                if (ageValue > this.LevelAgeParameters[0] &&
                    ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] &&
                        ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] &&
                            ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] &&
                                ageValue <= this.LevelAgeParameters[4]) {
                                this.levelType = "5";
                            }
                        }
                    }
                }
            }
        }
        cc.director.preloadScene("1");
        this.scheduleOnce(function () {
            console.log("jockey name = ", _this.jockeyName);
            if (_this.jockeyName == "Podar") {
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active =
                    true;
            }
            else if (_this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active =
                    true;
            }
            else if (_this.jockeyName == "supercub") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("supercub").active = true;
            }
            else if (_this.jockeyName == "stallion") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("stallion").active = true;
            }
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" && _this.jockeyName != "cryon") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene("1");
                }, 2);
            }
        }, 0.5);
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
        this.loading.active = true;
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
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
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "TotalLevels", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "loading", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZ2VDO1FBOWRDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1Qix3QkFBa0IsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsOEJBQThCO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFJVixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLGtCQUFZLEdBQVksS0FBSyxD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QUFRLENBQUMsTUFBTSxDQUFDOzZDQUNFO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7a0RBQ087SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyREFDTztJQUU1QjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7eURBQ3dCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFPeEI7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO29EQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs2REFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBb0J6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBakRKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnZTdCO0lBQUQsZ0JBQUM7Q0FoZUQsQUFnZUMsQ0FoZXNDLEVBQUUsQ0FBQyxTQUFTLEdBZ2VsRDtrQkFoZW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQWRkaXRpb25hbERhdGEge1xyXG4gIEdhbWVJRDogc3RyaW5nO1xyXG4gIHRvdGFsTGV2ZWw6IHN0cmluZztcclxuICBUaXRsZUltYWdlTmFtZTogc3RyaW5nO1xyXG4gIGludHJvQmdOYW1lOiBzdHJpbmc7XHJcbiAgYmdtTXVzaWNOYW1lOiBzdHJpbmc7XHJcbiAgbWFpbkJnTmFtZTogc3RyaW5nO1xyXG4gIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XHJcbiAgcXVlc3Rpb25JbWFnZU5hbWU6IHN0cmluZztcclxuICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gIGNvbW1vbk9wdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG4gIGlzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuICBvcHRpb25PZmZzZXQ6IG51bWJlcjtcclxuICBudW1iZXJPZk9wdGlvbnM6IG51bWJlcjtcclxuICBvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZztcclxuICBjb3JyZWN0QXVkaW9OYW1lOiBzdHJpbmc7XHJcbiAgbmVlZFJlaXRlcmF0aW9uOiBib29sZWFuO1xyXG4gIHJlaXRlcmF0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNeUpTT05EYXRhIHtcclxuICBhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGE7XHJcbiAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIHZvbHVtZTogbnVtYmVyID0gMTtcclxuICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gIE5leHRTY2VuZU5hbWU6IHN0cmluZyA9IFwiMVwiO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcGxheUJ0bl9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIFRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gIGlzQWdlUGFyYW1ldGVyTmVlZGVkID0gdHJ1ZTtcclxuICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gIExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcbiAgaXNNdXNpY09uOiBib29sZWFuID0gdHJ1ZTtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICBsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG4gIGN1cnJlbnRMZXZlbDogc3RyaW5nID0gXCIxXCI7XHJcbiAgaGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gIGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgaXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgcHJlbWl1bUxldmVsOiBudW1iZXIgPSAzO1xyXG4gIC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBKb2NrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgZmlyc3RDbGljazogbnVtYmVyID0gMTtcclxuICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBtYWluQmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgam9ja2V5TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICBxdWVzdGlvbnM6IFF1ZXN0aW9uRGF0YVtdID0gW107XHJcblxyXG4gIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICBzdGFydEdhbWUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nLS0xMDBcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xyXG4gICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgdGhpcy5Kb2NrZXlOb2RlID0gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dEYXRhKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJUb3RhbCBMZXZlbHM6XCIsIHRoaXMuVG90YWxMZXZlbHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJCR00gYXVkaW8gbmFtZTpcIiwgdGhpcy5CR01fYXVkaW8ubmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJKb2NrZXkgTmFtZTpcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAvLyBMb2cgcXVlc3Rpb24gZGF0YVxyXG4gICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEF1ZGlvIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMSBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJDb3JyZWN0IEFuc3dlciBOdW1iZXI6XCIsIHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbW92ZUV4dGVuc2lvbihpbWFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgIHJldHVybiBpbWFnZU5hbWUucmVwbGFjZSgvXFwucG5nJC9nLCBcIlwiKTtcclxuICB9XHJcbiAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICByZXR1cm4gYXVkaW9OYW1lLnJlcGxhY2UoL1xcLm1wMyQvZywgXCJcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVKU09OZGF0YSgpIHtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NndjItcHJvZC1pbWFnZXMuY3JlYXRpdmVnYWxpbGVvLmNvbS9IeWJyaWRMWkFzc2V0cy9CVE4tYmctb3JhbmdlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIDEpO1xyXG4gICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoXCJqc29uXCIpO1xyXG5cclxuICAgICAgLy8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuICAgICAgY29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuICAgICAgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG4gICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgIHRoaXMuVG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcbiAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIilcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAvLyBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lO1xyXG4gICAgICAgIC8vIHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9IHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZTtcclxuICAgICAgICAvLyBJZiBvcHRpb25zIGFyZSBpbWFnZSBuYW1lcywgeW91IG1pZ2h0IHdhbnQgdG8gcmVtb3ZlIGV4dGVuc2lvbnMgYXMgd2VsbFxyXG4gICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImdhbWVfZGF0YVwiLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcbiAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgIHRoaXMuVG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG4gICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbih0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgY2NcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgY2NcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lKSxcclxuICAgICAgICAgIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKEF1ZGlvQ2xpcCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUgPSB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBxdWVzdGlvbi5yZWl0ZXJhdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5yZWl0ZXJhdGlvbkltYWdlTmFtZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHF1ZXN0aW9uLmNvcnJlY3RBdWRpb05hbWUgPSB0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5jb3JyZWN0QXVkaW9OYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gSWYgb3B0aW9ucyBhcmUgaW1hZ2UgbmFtZXMsIHlvdSBtaWdodCB3YW50IHRvIHJlbW92ZSBleHRlbnNpb25zIGFzIHdlbGxcclxuICAgICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcbiAgICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7IC8vIFlvdSBjYW4gY2FsbCBhIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZGF0YSBvciB1c2UgaXQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XHJcbiAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgdmFyIGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWdlXCIpO1xyXG4gICAgdmFyIGFjY2VzcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWNjZXNzXCIpO1xyXG4gICAgdmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG4gICAgdmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcclxuICAgIHZhciBwcmVtaXVtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJwcmVtaXVtXCIpO1xyXG4gICAgdmFyIGlzUHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaXNQcmVtaXVtXCIpO1xyXG4gICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgIGlmIChkZW1vID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIHRoaXMuaXNEZW1vR2FtZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXQgaXMgYSBkZW1vIGdhbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG5cclxuICAgIGlmIChwcmVtaXVtICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IFwiMVwiO1xyXG4gICAgLy8gaWYgKGxldmVsICE9IG51bGwpIHtcclxuICAgIC8vICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBsZXZlbDtcclxuICAgIC8vICAgICBpZiAocGFyc2VJbnQodGhpcy5OZXh0U2NlbmVOYW1lKSA+PSB0aGlzLlRvdGFsTGV2ZWxzKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IHRoaXMuVG90YWxMZXZlbHMudG9TdHJpbmcoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKG1vYmlsZSA9PSBcIjFcIikge1xyXG4gICAgICB0aGlzLmhhc01vYmlsZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc01vYmlsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjY2VzcyA9PSBcIjFcIikge1xyXG4gICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0FjY2VzcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pc1ByZW1pdW1HYW1lKSB7XHJcbiAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNQcmVtaXVtID09IFwiMVwiKSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoaXNQcmVtaXVtID09IFwiMFwiKSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxKTtcclxuXHJcbiAgICBsZXQgYWdlVmFsdWU6IG51bWJlciA9IHBhcnNlSW50KGFnZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBZ2VQYXJhbWV0ZXJOZWVkZWQpIHtcclxuICAgICAgaWYgKGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJlxyXG4gICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiZcclxuICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiM1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdICYmXHJcbiAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM11cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJlxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbNF1cclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJqb2NrZXkgbmFtZSA9IFwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RhclwiKS5hY3RpdmUgPVxyXG4gICAgICAgICAgdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRsY1wiKS5hY3RpdmUgPVxyXG4gICAgICAgICAgdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwic3RhbGxpb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCB0aGlzLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIHRoaXMuT25UaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNvdW5kU2V0dGluZy0tdHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLWZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgT25CYWNrKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICB9XHJcblxyXG4gIGxvYWRTcHJpdGVGcmFtZShcclxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWRcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBsb2FkQXVkaW9DbGlwKFxyXG4gICAgYXVkaW9OYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWRcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSxcclxuICAgICAgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIE9uVGltZXIoKSB7XHJcbiAgLy8gICAgIGxldCBkZWxheSA9IDE7XHJcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XHJcbiAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImdhbWVFbmRcIikge1xyXG4gIC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgfSwgZGVsYXkpO1xyXG4gIC8vICAgICAgICAgZGVsYXkgKz0gMTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
        _this.vo_aud = null;
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
        _this.question = ["300+250", "200+250", "250+250", "500+250", "600+200",
            "350+350", "450+50", "650+50", "750+50", "850+50", "450+100", "550+100", "100+550", "750+100"];
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
        var parts = this.question[this.getRandomNumber(0, this.question.length - 1)].split("+");
        this.node.getChildByName("Captcha").children[0].getChildByName("Context2").getComponent(cc.Label).string = parts[0] + " + " + parts[1];
        this.correctAnswer = ((parseInt(parts[0])) + (parseInt(parts[1]))).toString();
        this.MobileNumberNeeded = isMobileNumberNeeded;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.vo_aud, false);
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
    WebView.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
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
        cc.audioEngine.stopAllEffects();
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
    __decorate([
        property(cc.AudioClip)
    ], WebView.prototype, "vo_aud", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxXZWJWaWV3XFxTY3JpcHRzXFxXZWJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFtUUM7UUEvUEcsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFXLEtBQUssQ0FBQztRQUU5QixhQUFPLEdBQVcsaUNBQWlDLENBQUM7UUFFcEQsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFDNUIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBRXBDLGNBQVEsR0FBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO1lBQy9FLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBZ1BuRyxpQkFBaUI7SUFDckIsQ0FBQztnQkFuUW9CLE9BQU87SUFvQnhCLHNCQUFXLG1CQUFRO2FBQW5CO1lBQ0ksT0FBTyxTQUFPLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsd0JBQU0sR0FBTjtRQUNJLFNBQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFlLEdBQWYsVUFBZ0Isb0JBQXFDO1FBQXJDLHFDQUFBLEVBQUEsNEJB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LENBblFvQyxFQUFFLENBQUMsU0FBUyxHQW1RaEQ7a0JBblFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgd2ViVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFN0cmluZylcclxuICAgIHByaXZhdGUgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCI2MDBcIjtcclxuICAgIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBwcml2YXRlIHdlYkxpbms6IHN0cmluZyA9IFwiaHR0cHM6Ly9wbGFucy5saXR0bGVzaW5naGFtLm1lL1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdm9fYXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TW9iaWxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFdlYlZpZXcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYXhTdHJpbmdMZW5ndGggPSAzO1xyXG4gICAgcHJpdmF0ZSBNb2JpbGVOdW1iZXJOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBTdHJpbmdbXSA9IFtcIjMwMCsyNTBcIiwgXCIyMDArMjUwXCIsIFwiMjUwKzI1MFwiLCBcIjUwMCsyNTBcIiwgXCI2MDArMjAwXCIsXHJcbiAgICAgICAgXCIzNTArMzUwXCIsIFwiNDUwKzUwXCIsIFwiNjUwKzUwXCIsIFwiNzUwKzUwXCIsIFwiODUwKzUwXCIsIFwiNDUwKzEwMFwiLCBcIjU1MCsxMDBcIiwgXCIxMDArNTUwXCIsIFwiNzUwKzEwMFwiXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBXZWJWaWV3Lmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBXZWJWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrRm9yV2ViVmlldyhpc01vYmlsZU51bWJlck5lZWRlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHBhcnRzOiBzdHJpbmdbXSA9IHRoaXMucXVlc3Rpb25bdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgdGhpcy5xdWVzdGlvbi5sZW5ndGggLSAxKV0uc3BsaXQoXCIrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJDb250ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHBhcnRzWzBdICsgXCIgKyBcIiArIHBhcnRzWzFdO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9ICgocGFyc2VJbnQocGFydHNbMF0pKSArIChwYXJzZUludChwYXJ0c1sxXSkpKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuTW9iaWxlTnVtYmVyTmVlZGVkID0gaXNNb2JpbGVOdW1iZXJOZWVkZWQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudm9fYXVkLCBmYWxzZSk7XHJcbiAgICAgICAgLy9pZiBwbGF5ZXIgaGFzIHRoZSBhY2Nlc3MgY2FwdGNoYSBzY3JlZW4gd2lsbCBiZSBwb3BlZCB1cCwgZWxzZSBnYW1lIHdpbGwgY29udGludWVcclxuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbml0aWF0ZVBheXdhbGxDYXB0Y2hhLS10cnVlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5tb2JpbGVOdW1iZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJtb2JpbGVOdW1iZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLm1vYmlsZU51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlTnVtYmVyTmVlZGVkICYmICFzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1Nb2JpbGVDYXB0Y2hhLS1zaG93ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBvcEluKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0sIDEuNSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuT25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tUGF5bWVudENhcHRjaGEtLXNob3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUG9wSW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblswXSwgMS41KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGxheWVyIGNhbiBwbGF5IHRoZSBsZXZlbCBzaW5jZSBoZSBoYXMgdGhlIGFjY2Vzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBQb3BJbihfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgX25vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuNCwgeyBzY2FsZTogX3NjYWxlIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgUG9wT3V0KF9ub2RlOiBjYy5Ob2RlLCBfc2NhbGU6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBfbm9kZS5zY2FsZSA9IF9zY2FsZTtcclxuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBfbm9kZS5nZXRQYXJlbnQoKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXZWJ2aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgIC8vIGlmcmFtZS5zcmMgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTA5OjMwMDNcIjtcclxuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy53ZWJMaW5rO1xyXG4gICAgICAgIGNvbnN0IHdlYlZpZXdDb250YWluZXIgPSBpZnJhbWU7XHJcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ0b3BcIl0gPSBcIjBcIjtcclxuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1wibGVmdFwiXSA9IFwiMFwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcclxuICAgICAgICBjb25zdCByZXNpemVJZnJhbWUgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgcmVzaXplSWZyYW1lKCk7XHJcbiAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyID0gd2ViVmlld0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsb3NlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nRXZlbnQtLWNhcHRjaGEtLWNsb3NlZFwiKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG4gICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0sIDEuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3BPdXQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLCAxLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2hlY2tGb3JNb2JpbGVOdW1iZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTAgfHwgdGhpcy5jdXJyZW50TW9iaWxlID09IFwiXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoIDwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gdGhpcy5jdXJyZW50TW9iaWxlICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50TW9iaWxlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudE1vYmlsZVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vYmlsZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRNb2JpbGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHRoaXMuY3VycmVudE1vYmlsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBvcE91dCh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0sIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBDaGVja0ZvckNvcnJlY3RBbnN3ZXIoX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gdGhpcy5jdXJyZW50QW5zd2VyICsgX2V2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50QW5zd2VyLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudEFuc3dlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50QW5zd2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbnN3ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuT25Db250aW51ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS1jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYXRlX3BheW1lbnQtLXRydWVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdGFydF9sZXZlbC0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5zd2VyW2ldID09IHRoaXMuY29ycmVjdEFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gdGhpcy5jdXJyZW50QW5zd2VyW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2V2ZW50LnRhcmdldC5uYW1lICE9IFwieFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0td3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHYW1lQ29udGludWVzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkNvbnRpbnVlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdFdlYnZpZXcoKTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwibWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbkxvYWQgYCArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tWWVzYCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViVmlld0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PSBgU3Vic2NyaXB0aW9uLS1Ob2ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e6f3j/AY9A45MVClm+gvFe', 'globalVariables');
// Games/SwipeToForm/Scripts/globalVariables.ts

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
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.animationEntry = "";
        _this.animationStayEffect = "";
        _this.animationExit = "";
        _this.currentLevel = 1;
        _this.totalQuestions = 3;
        _this.currentQuestion = 1;
        _this.increasetransition = 0;
        _this.fillRange = 1;
        _this.canvasTopY = 0;
        _this.canvasLeftX = 0;
        _this.canvasRightX = 0;
        _this.canvasBottomY = 0;
        return _this;
    }
    globalVariables_1 = globalVariables;
    // LIFE-CYCLE CALLBACKS:
    globalVariables.prototype.onLoad = function () {
        globalVariables_1.instance = this;
    };
    Object.defineProperty(globalVariables, "Instance", {
        get: function () {
            return globalVariables_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    globalVariables.prototype.start = function () {
    };
    globalVariables.prototype.update = function (dt) {
    };
    var globalVariables_1;
    globalVariables.instance = null;
    __decorate([
        property(cc.Label)
    ], globalVariables.prototype, "label", void 0);
    __decorate([
        property
    ], globalVariables.prototype, "text", void 0);
    globalVariables = globalVariables_1 = __decorate([
        ccclass
    ], globalVariables);
    return globalVariables;
}(cc.Component));
exports.default = globalVariables;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxnbG9iYWxWYXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE4Q0M7UUEzQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR2hCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLHlCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyxtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFFL0IsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUF1QnJDLENBQUM7d0JBOUNvQixlQUFlO0lBMEJoQyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLGlCQUFlLENBQUMsUUFBUSxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFHRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRTtJQUVULENBQUM7O0lBbEJjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQXRCaEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7aURBQ2M7SUFOTixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBOENuQztJQUFELHNCQUFDO0NBOUNELEFBOENDLENBOUM0QyxFQUFFLENBQUMsU0FBUyxHQThDeEQ7a0JBOUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdsb2JhbFZhcmlhYmxlcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG5cclxuICAgIHB1YmxpYyBhbmltYXRpb25FbnRyeTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGF5RWZmZWN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvbkV4aXQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbFF1ZXN0aW9uczogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNldHJhbnNpdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZmlsbFJhbmdlOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGNhbnZhc1RvcFk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY2FudmFzTGVmdFg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY2FudmFzUmlnaHRYOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNhbnZhc0JvdHRvbVk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IGdsb2JhbFZhcmlhYmxlcyA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxWYXJpYWJsZXMuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Scripts/Gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57a4fxSM+RPg6uSxKUrA8IU', 'Gameplay');
// Games/SwipeToForm/Scripts/Gameplay.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gameplay = /** @class */ (function (_super) {
    __extends(Gameplay, _super);
    function Gameplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.optionsNode = null;
        _this.pop_sound = null;
        _this.swipe_sound = null;
        _this.correctSound = null;
        _this.positiveSound = [];
        _this.positiveAudio = [];
        _this.stallionPositive = [];
        _this.bagPositive = [];
        _this.cryonPositive = [];
        _this.tlcPositive = [];
        _this.supercubPositive = [];
        _this.currentDraggingObject = null;
        _this.startPosX = 0;
        _this.canTouch = true;
        _this.isFirstClick = false;
        _this.isDropped = false;
        _this.isAnswered = false;
        _this.questionText = "";
        _this.correctAnswer = "";
        _this.questionVO = null;
        _this.correctVO = null;
        _this.needReiteration = false;
        _this.reiterationImage = null;
        _this.maxLevel = 7;
        _this.questionBoxPosY = 0;
        _this.currentJockey = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Gameplay.prototype.onLoad = function () {
        this.maxLevel = StartGame_1.default.Instance.TotalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        else {
            cc.director.preloadScene("1");
        }
        console.log("levelStarted--" + StartGame_1.default.Instance.currentLevel);
        this.node.getChildByName("BG").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text2")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("reiteration")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text2")
                .getComponent(cc.Label).font = this.tlc_font;
            this.node
                .getChildByName("reiteration")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text2")
                .getComponent(cc.Label).font = this.supercub_font;
            this.node
                .getChildByName("reiteration")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text2")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("reiteration")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
    };
    Gameplay.prototype.PlayQuestionAudio = function () {
        this.currentJockey.active = true;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
            .shouldPlayQuestionAudio) {
            cc.audioEngine.playEffect(this.questionVO, false);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            //PLAY HAND ANIMATION
            var hand = this.node.getChildByName("hand");
            hand.active = true;
            var x1 = this.optionsNode.children[0].x;
            var x2 = this.optionsNode.children[1].x;
            hand.setParent(this.optionsNode.children[0]);
            hand.setPosition(0, 0);
            hand.setParentWithSamePos(this.node);
            this.playTween(hand, x1, x2);
            hand.getComponent(cc.Animation).play();
        }
    };
    Gameplay.prototype.playTween = function (_hand, x1, x2) {
        var _this = this;
        _hand.setPosition(x1, _hand.getPosition().y);
        cc.tween(_hand)
            .to(1, { x: x2 })
            .call(function () {
            _this.playTween(_hand, x1, x2);
        })
            .start();
    };
    Gameplay.prototype.SubcribeEvents = function () {
        // if (startGame.Instance.questions[parseInt(startGame.Instance.currentLevel) - 1].shouldPlayQuestionAudio) {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //         cc.audioEngine.playEffect(this.questionVO, false);
        //     }
        // }
        // else {
        //     if (this.questionVO) {
        //         this.node.getChildByName("questionPanel").getChildByName("sound").active = true;
        //     }
        var _this = this;
        // }
        this.PlayQuestionAudio();
        this.optionsNode.children.forEach(function (element) {
            element.on("touchstart", function (event) {
                this.TouchStart(element);
            }, _this);
            element.on("touchmove", function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on("touchend", function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on("touchcancel", function (event) {
                this.TouchEnd(element);
            }, _this);
        });
    };
    Gameplay.prototype.calculateDistance = function (point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
    Gameplay.prototype.start = function () {
        var _this = this;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1, false);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.UpdateQuestionData();
        this.scheduleOnce(function () {
            _this.OptionsLayout();
            if (_this.optionsNode.children.length <= 2) {
                _this.arrangeChildren(_this.optionsNode, 80);
            }
            var delay = 0.2;
            var _loop_1 = function (i) {
                _this.optionsNode.children[i].scale = 0;
                _this.optionsNode.children[i].opacity = 255;
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.pop_sound, false);
                    cc.tween(_this.optionsNode.children[i])
                        .to(0.3, { scale: 1 }, { easing: "backInOut" })
                        .start();
                    if (i == _this.optionsNode.children.length - 1) {
                        _this.scheduleOnce(function () {
                            _this.SubcribeEvents();
                        }, 0.3);
                    }
                }, delay);
                delay += 0.2;
            };
            for (var i = 0; i < _this.optionsNode.children.length; i++) {
                _loop_1(i);
            }
        }, 1);
        if (StartGame_1.default.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
        }
    };
    Gameplay.prototype.UpdateQuestionData = function () {
        var _this = this;
        var questionData = StartGame_1.default.Instance.questions[parseInt(StartGame_1.default.Instance.currentLevel) - 1];
        var options = questionData.options;
        this.correctAnswer = questionData.correctAnswer;
        var numberOfOptions = options.length;
        this.questionText = questionData.questionText;
        if (questionData.questionImageName != null &&
            questionData.questionImageName != "") {
            if (questionData.questionText == "") {
                this.node
                    .getChildByName("questionPanel")
                    .getChildByName("img")
                    .setPosition(0, this.node
                    .getChildByName("questionPanel")
                    .getChildByName("img")
                    .getPosition().y);
            }
            else {
                this.node
                    .getChildByName("questionPanel")
                    .getChildByName("text2")
                    .getComponent(cc.Label).string = this.questionText;
            }
            if (StartGame_1.default.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node
                        .getChildByName("questionPanel")
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            else {
                this.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("questionPanel")
                        .getChildByName("img")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
                .start();
        }
        else if (this.questionText != "") {
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).string = this.questionText;
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel"))
                .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
                .start();
        }
        this.needReiteration = questionData.needReiteration;
        this.LoadAssetsAudios(questionData);
        if (this.needReiteration) {
            this.node
                .getChildByName("reiteration")
                .getChildByName("text")
                .getComponent(cc.Label).string = questionData.correctAnswer;
            if (questionData.reiterationImageName != null &&
                questionData.reiterationImageName != "") {
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.reiterationImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("reiteration")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.loadSpriteFrame(questionData.reiterationImageName, function (spriteFrame) {
                        _this.node
                            .getChildByName("reiteration")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
        }
        var _loop_2 = function (i) {
            // let optionNode = this.optionsNode.children[i];
            //create options
            var optionNode = cc.instantiate(this_1.node.getChildByName("template"));
            optionNode.name = (i + 1).toString();
            optionNode.setParent(this_1.optionsNode);
            optionNode.setPosition(cc.v2(0, 0));
            optionNode
                .getChildByName("img")
                .setPosition(cc.v2(optionNode.getChildByName("img").getPosition().x, questionData.optionOffset));
            optionNode
                .getChildByName("text")
                .setPosition(cc.v2(optionNode.getChildByName("text").getPosition().x, questionData.optionOffset));
            if (questionData.commonOptionImageName != null &&
                questionData.commonOptionImageName != "") {
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.commonOptionImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(questionData.commonOptionImageName, function (spriteFrame) {
                        optionNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            if (questionData.isOptionText) {
                optionNode.getChildByName("img").active = false;
                optionNode.getChildByName("text").active = true;
                optionNode.getChildByName("text").getComponent(cc.Label).string =
                    options[i];
            }
            else {
                optionNode.getChildByName("img").active = true;
                optionNode.getChildByName("text").active = false;
                this_1.node.getChildByName("reiteration").getChildByName("text").active =
                    false;
                if (questionData.commonOptionImageName == null ||
                    questionData.commonOptionImageName == "") {
                    optionNode.getComponent(cc.Sprite).spriteFrame = null;
                    optionNode.getChildByName("img").scale = 1;
                }
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        optionNode
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(options[i], function (spriteFrame) {
                        optionNode
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            this_1.optionsNode.children[i].opacity = 0;
        };
        var this_1 = this;
        for (var i = 0; i < numberOfOptions; i++) {
            _loop_2(i);
        }
        this.node.getChildByName("template").destroy();
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    Gameplay.prototype.LoadAssetsAudios = function (_questiondata) {
        var _this = this;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(_questiondata.questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionVO = audioClip;
            });
            cc.loader.load(_questiondata.correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctVO = audioClip;
            });
            // cc.loader.load(_questiondata.questionImageName, (err, texture) => {
            //     if (err) {
            //         console.error("Failed to load image:", err);
            //         return;
            //     }
            //     const spriteFrame = new cc.SpriteFrame(texture);
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
        else {
            this.loadAudioClip(_questiondata.questionAudioName, function (AudioClip) {
                _this.questionVO = AudioClip;
            });
            this.loadAudioClip(_questiondata.correctAudioName, function (AudioClip) {
                _this.correctVO = AudioClip;
            });
            // this.loadSpriteFrame(_questiondata.questionImageName, (spriteFrame) => {
            //     this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
    };
    Gameplay.prototype.TouchStart = function (_node) {
        if (this.isAnswered) {
            return;
        }
        this.node.getChildByName("hand").active = false;
        if (!this.currentDraggingObject) {
            this.canTouch = true;
            this.currentDraggingObject = _node.name;
            this.startPosX = _node.getPosition().x;
            _node.zIndex = 1;
            if (!this.isFirstClick) {
                this.isFirstClick = true;
                console.log("firstClick--" + StartGame_1.default.Instance.currentLevel);
            }
        }
    };
    Gameplay.prototype.TouchMove = function (_node, _event) {
        if (!this.canTouch ||
            this.currentDraggingObject !== _node.name ||
            this.isAnswered) {
            return;
        }
        var delta = _event.touch.getDelta();
        _node.x += delta.x;
        this.attemptSwap(_node);
    };
    Gameplay.prototype.attemptSwap = function (_node) {
        var deltaX = _node.x - this.startPosX;
        if (Math.abs(deltaX) > 50) {
            for (var _i = 0, _a = this.optionsNode.children; _i < _a.length; _i++) {
                var otherNode = _a[_i];
                if (otherNode !== _node) {
                    var distance = this.calculateDistance(_node.position, otherNode.position);
                    if (this.shouldSwap(deltaX, _node, otherNode, distance)) {
                        this.performSwap(_node, otherNode);
                        break;
                    }
                }
            }
        }
    };
    Gameplay.prototype.shouldSwap = function (deltaX, _node, otherNode, distance) {
        return (distance < 50 &&
            ((deltaX > 0 && _node.x < otherNode.x) ||
                (deltaX < 0 && _node.x > otherNode.x)));
    };
    Gameplay.prototype.performSwap = function (_node, otherNode) {
        var _this = this;
        cc.audioEngine.playEffect(this.swipe_sound, false);
        cc.tween(_node)
            .to(0.15, { x: otherNode.x }, { easing: "backInOut" })
            .start();
        cc.tween(otherNode)
            .to(0.15, { x: this.startPosX }, { easing: "backInOut" })
            .start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
            _this.checkOrder(); // Check if the current order is correct
        }, 0.15);
        this.canTouch = false;
        this.isDropped = true;
    };
    Gameplay.prototype.TouchEnd = function (_node) {
        var _this = this;
        if (this.isAnswered) {
            return;
        }
        _node.zIndex = 0;
        if (this.isDropped) {
            this.isDropped = false;
            return;
        }
        cc.tween(_node)
            .to(0.15, { x: this.startPosX }, { easing: "backInOut" })
            .start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
        }, 0.2);
    };
    Gameplay.prototype.checkOrder = function () {
        var _this = this;
        var currentWord = this.getCurrentWord();
        // console.log("current word =", currentWord);
        var targetWord = this.correctAnswer; // Define your target word here
        if (currentWord === targetWord) {
            console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
            this.isAnswered = true;
            // this.node.getChildByName("questionPanel").getChildByName("sound").active =
            //   false;
            // Additional logic for when the order is correct
            // console.log("need iteration--" + this.needReiteration);
            cc.audioEngine.playEffect(this.correctSound, false);
            if (this.needReiteration) {
                // this.optionsNode.active = false;
                this.node.getChildByName("reiteration").active = true;
                this.node.getChildByName("reiteration").scale = 0;
                cc.tween(this.optionsNode)
                    .to(0.25, { scaleX: 0 }, { easing: "backInOut" })
                    .start();
                cc.tween(this.node.getChildByName("reiteration"))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                    .start();
                this.scheduleOnce(function () {
                    _this.optionsNode.active = false;
                    _this.node.getChildByName("confetti").active = true;
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    var VOduration = 0;
                    if (_this.correctVO) {
                        VOduration = _this.correctVO.duration;
                    }
                    _this.scheduleOnce(function () {
                        cc.audioEngine.playEffect(_this.correctVO, false);
                        _this.scheduleOnce(function () {
                            _this.callJockey();
                        }, VOduration);
                    }, 0.25);
                }, 0.5);
            }
            else {
                this.node.getChildByName("confetti").active = true;
                this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                var VOduration_1 = 0;
                if (this.correctVO) {
                    VOduration_1 = this.correctVO.duration;
                }
                this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.correctVO, false);
                    // this.callJockey();
                    _this.scheduleOnce(function () {
                        // this.LoadNextQuestion();
                        _this.callJockey();
                    }, VOduration_1);
                }, 0.75);
            }
        }
        else {
            // console.log("Incorrect order.");
            // Additional logic for when the order is incorrect
        }
    };
    Gameplay.prototype.getCurrentWord = function () {
        // Sort the nodes based on their x-coordinate
        var sortedNodes = this.optionsNode.children.sort(function (a, b) { return a.x - b.x; });
        var word = sortedNodes
            .map(function (child) {
            if (StartGame_1.default.Instance.questions[parseInt(StartGame_1.default.Instance.currentLevel) - 1].isOptionText) {
                var labelNode = child.getChildByName("text"); // Adjust if necessary
                var labelComponent = labelNode
                    ? labelNode.getComponent(cc.Label)
                    : null;
                if (labelComponent) {
                    // console.log("Label Text: ", labelComponent.string);
                    return labelComponent.string;
                }
                else {
                    // console.log("Label Component not found or nested in node: ", child.name);
                    return "";
                }
            }
            else {
                return child.name;
            }
        })
            .join("");
        // console.log("Constructed Word: ", word);
        return word;
    };
    Gameplay.prototype.LoadNextQuestion = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        this.scheduleOnce(function () {
            if (parseInt(StartGame_1.default.Instance.currentLevel) >=
                StartGame_1.default.Instance.TotalLevels) {
                cc.director.loadScene("gameEnd");
            }
            else {
                globalVariables_1.default.Instance.currentLevel += 1;
                StartGame_1.default.Instance.currentLevel = (parseInt(StartGame_1.default.Instance.currentLevel) + 1).toString();
                cc.director.loadScene("1");
            }
        }, 1);
    };
    Gameplay.prototype.OptionsLayout = function () {
        var optionsLayout = this.optionsNode;
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
            var posX = accumulatedWidth + option.width * option.anchorX;
            option.x = posX - optionsLayout.width * optionsLayout.anchorX;
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
    Gameplay.prototype.arrangeChildren = function (centerNode, spacing) {
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
    Gameplay.prototype.callJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = [
                "possitive",
                "possitive2",
                "possitive3",
                "possitive4",
                "possitive5",
                "possitive6",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
                "positive_6",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
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
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 &&
            StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey)
            .to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
            .start();
        this.scheduleOnce(function () {
            _this.currentJockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey)
                    .to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                    .start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.LoadNextQuestion();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    Gameplay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    Gameplay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    Gameplay.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    Gameplay.prototype.OnSound = function (event) {
        event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.questionVO, false);
        this.scheduleOnce(function () {
            event.target.getComponent(cc.Button).interactable = true;
        }, this.questionVO.duration);
    };
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], Gameplay.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Node)
    ], Gameplay.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "pop_sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "swipe_sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "correctSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Gameplay.prototype, "supercubPositive", void 0);
    Gameplay = __decorate([
        ccclass
    ], Gameplay);
    return Gameplay;
}(cc.Component));
exports.default = Gameplay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxHYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRkFBcUY7QUFDckYsa0VBQTZEO0FBQzdELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTI3QkM7UUF6N0JTLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHdEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUV0QywyQkFBcUIsR0FBVyxJQUFJLENBQUM7UUFDckMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsbUJBQWEsR0FBVyxF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LEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQUc5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUN1QjtJQXRDM0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTI3QjVCO0lBQUQsZUFBQztDQTM3QkQsQUEyN0JDLENBMzdCcUMsRUFBRSxDQUFDLFNBQVMsR0EyN0JqRDtrQkEzN0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVwbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgamFpcHVyaWFfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSB0bGNfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcG9wX3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgc3dpcGVfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3NpdGl2ZVNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHN1cGVyY3ViUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERyYWdnaW5nT2JqZWN0OiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgc3RhcnRQb3NYOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNEcm9wcGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc0Fuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHByaXZhdGUgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIHF1ZXN0aW9uVk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjb3JyZWN0Vk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBuZWVkUmVpdGVyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHJlaXRlcmF0aW9uSW1hZ2U6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuXHJcbiAgcHJpdmF0ZSBxdWVzdGlvbkJveFBvc1k6IG51bWJlciA9IDA7XHJcblxyXG4gIGN1cnJlbnRKb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscztcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCR1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5tYWluQmc7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dDJcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBQbGF5UXVlc3Rpb25BdWRpbygpIHtcclxuICAgIHRoaXMuY3VycmVudEpvY2tleS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG4gICAgKSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgIC8vUExBWSBIQU5EIEFOSU1BVElPTlxyXG4gICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgbGV0IHgxOiBudW1iZXIgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLng7XHJcbiAgICAgIGxldCB4MjogbnVtYmVyID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS54O1xyXG4gICAgICBoYW5kLnNldFBhcmVudCh0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgaGFuZC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICB0aGlzLnBsYXlUd2VlbihoYW5kLCB4MSwgeDIpO1xyXG4gICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYXlUd2VlbihfaGFuZDogY2MuTm9kZSwgeDE6IG51bWJlciwgeDI6IG51bWJlcikge1xyXG4gICAgX2hhbmQuc2V0UG9zaXRpb24oeDEsIF9oYW5kLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICBjYy50d2VlbihfaGFuZClcclxuICAgICAgLnRvKDEsIHsgeDogeDIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGxheVR3ZWVuKF9oYW5kLCB4MSwgeDIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIFN1YmNyaWJlRXZlbnRzKCkge1xyXG4gICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnF1ZXN0aW9uVk8pIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucXVlc3Rpb25WTykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG4gICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQub24oXHJcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICAgIGVsZW1lbnQub24oXHJcbiAgICAgICAgXCJ0b3VjaG1vdmVcIixcclxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKTtcclxuICAgICAgZWxlbWVudC5vbihcclxuICAgICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLlRvdWNoRW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgICBlbGVtZW50Lm9uKFxyXG4gICAgICAgIFwidG91Y2hjYW5jZWxcIixcclxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIHRoaXMuVG91Y2hFbmQoZWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURpc3RhbmNlKHBvaW50MSwgcG9pbnQyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhwb2ludDIueCAtIHBvaW50MS54LCAyKSArIE1hdGgucG93KHBvaW50Mi55IC0gcG9pbnQxLnksIDIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuICAgIHRoaXMuVXBkYXRlUXVlc3Rpb25EYXRhKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuT3B0aW9uc0xheW91dCgpO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGggPD0gMikge1xyXG4gICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMub3B0aW9uc05vZGUsIDgwKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGVsYXkgPSAwLjI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0uc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wX3NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgaWYgKGkgPT0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLlN1YmNyaWJlRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIGRlbGF5ICs9IDAuMjtcclxuICAgICAgfVxyXG4gICAgfSwgMSk7XHJcblxyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25Qb3NpdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgVXBkYXRlUXVlc3Rpb25EYXRhKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uRGF0YSA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXHJcbiAgICAgIF07XHJcbiAgICBsZXQgb3B0aW9ucyA9IHF1ZXN0aW9uRGF0YS5vcHRpb25zO1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICBsZXQgbnVtYmVyT2ZPcHRpb25zID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQ7XHJcbiAgICBpZiAoXHJcbiAgICAgIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBudWxsICYmXHJcbiAgICAgIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICApIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQgPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAuZ2V0UG9zaXRpb24oKS55XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dDJcIilcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25UZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuc2V0UG9zaXRpb24oY2MudjIoMCwgMTUwMCkpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpKVxyXG4gICAgICAgIC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucXVlc3Rpb25UZXh0ICE9IFwiXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuc2V0UG9zaXRpb24oY2MudjIoMCwgMTUwMCkpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpKVxyXG4gICAgICAgIC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZWVkUmVpdGVyYXRpb24gPSBxdWVzdGlvbkRhdGEubmVlZFJlaXRlcmF0aW9uO1xyXG4gICAgdGhpcy5Mb2FkQXNzZXRzQXVkaW9zKHF1ZXN0aW9uRGF0YSk7XHJcbiAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gbnVsbCAmJlxyXG4gICAgICAgIHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgLy8gbGV0IG9wdGlvbk5vZGUgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAvL2NyZWF0ZSBvcHRpb25zXHJcbiAgICAgIGxldCBvcHRpb25Ob2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgKTtcclxuICAgICAgb3B0aW9uTm9kZS5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICBvcHRpb25Ob2RlLnNldFBhcmVudCh0aGlzLm9wdGlvbnNOb2RlKTtcclxuICAgICAgb3B0aW9uTm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcblxyXG4gICAgICBvcHRpb25Ob2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgY2MudjIoXHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICBxdWVzdGlvbkRhdGEub3B0aW9uT2Zmc2V0XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgb3B0aW9uTm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICBjYy52MihcclxuICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICBxdWVzdGlvbkRhdGEub3B0aW9uT2Zmc2V0XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gbnVsbCAmJlxyXG4gICAgICAgIHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcclxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAocXVlc3Rpb25EYXRhLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICBvcHRpb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID1cclxuICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgPT0gbnVsbCB8fFxyXG4gICAgICAgICAgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9PSBcIlwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKG9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGVcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShvcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uTm9kZVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIExvYWRBc3NldHNBdWRpb3MoX3F1ZXN0aW9uZGF0YTogYW55KSB7XHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoX3F1ZXN0aW9uZGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKF9xdWVzdGlvbmRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ycmVjdFZPID0gYXVkaW9DbGlwO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY2MubG9hZGVyLmxvYWQoX3F1ZXN0aW9uZGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKGVycikge1xyXG4gICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgLy8gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoX3F1ZXN0aW9uZGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChfcXVlc3Rpb25kYXRhLmNvcnJlY3RBdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICB0aGlzLmNvcnJlY3RWTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyB0aGlzLmxvYWRTcHJpdGVGcmFtZShfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBUb3VjaFN0YXJ0KF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICBpZiAodGhpcy5pc0Fuc3dlcmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0KSB7XHJcbiAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ09iamVjdCA9IF9ub2RlLm5hbWU7XHJcbiAgICAgIHRoaXMuc3RhcnRQb3NYID0gX25vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICBfbm9kZS56SW5kZXggPSAxO1xyXG4gICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgVG91Y2hNb3ZlKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jYW5Ub3VjaCB8fFxyXG4gICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ09iamVjdCAhPT0gX25vZGUubmFtZSB8fFxyXG4gICAgICB0aGlzLmlzQW5zd2VyZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZGVsdGEgPSBfZXZlbnQudG91Y2guZ2V0RGVsdGEoKTtcclxuICAgIF9ub2RlLnggKz0gZGVsdGEueDtcclxuICAgIHRoaXMuYXR0ZW1wdFN3YXAoX25vZGUpO1xyXG4gIH1cclxuXHJcbiAgYXR0ZW1wdFN3YXAoX25vZGUpIHtcclxuICAgIGxldCBkZWx0YVggPSBfbm9kZS54IC0gdGhpcy5zdGFydFBvc1g7XHJcbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XHJcbiAgICAgIGZvciAobGV0IG90aGVyTm9kZSBvZiB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKG90aGVyTm9kZSAhPT0gX25vZGUpIHtcclxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoXHJcbiAgICAgICAgICAgIF9ub2RlLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBvdGhlck5vZGUucG9zaXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG91bGRTd2FwKGRlbHRhWCwgX25vZGUsIG90aGVyTm9kZSwgZGlzdGFuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVN3YXAoX25vZGUsIG90aGVyTm9kZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdWxkU3dhcChkZWx0YVgsIF9ub2RlLCBvdGhlck5vZGUsIGRpc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBkaXN0YW5jZSA8IDUwICYmXHJcbiAgICAgICgoZGVsdGFYID4gMCAmJiBfbm9kZS54IDwgb3RoZXJOb2RlLngpIHx8XHJcbiAgICAgICAgKGRlbHRhWCA8IDAgJiYgX25vZGUueCA+IG90aGVyTm9kZS54KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtU3dhcChfbm9kZSwgb3RoZXJOb2RlKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3dpcGVfc291bmQsIGZhbHNlKTtcclxuICAgIGNjLnR3ZWVuKF9ub2RlKVxyXG4gICAgICAudG8oMC4xNSwgeyB4OiBvdGhlck5vZGUueCB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIGNjLnR3ZWVuKG90aGVyTm9kZSlcclxuICAgICAgLnRvKDAuMTUsIHsgeDogdGhpcy5zdGFydFBvc1ggfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGVja09yZGVyKCk7IC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IG9yZGVyIGlzIGNvcnJlY3RcclxuICAgIH0sIDAuMTUpO1xyXG4gICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Ryb3BwZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgVG91Y2hFbmQoX25vZGU6IGNjLk5vZGUpIHtcclxuICAgIGlmICh0aGlzLmlzQW5zd2VyZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgX25vZGUuekluZGV4ID0gMDtcclxuICAgIGlmICh0aGlzLmlzRHJvcHBlZCkge1xyXG4gICAgICB0aGlzLmlzRHJvcHBlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKDAuMTUsIHsgeDogdGhpcy5zdGFydFBvc1ggfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ID0gbnVsbDtcclxuICAgIH0sIDAuMik7XHJcbiAgfVxyXG4gIGNoZWNrT3JkZXIoKSB7XHJcbiAgICBsZXQgY3VycmVudFdvcmQgPSB0aGlzLmdldEN1cnJlbnRXb3JkKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgd29yZCA9XCIsIGN1cnJlbnRXb3JkKTtcclxuICAgIGxldCB0YXJnZXRXb3JkID0gdGhpcy5jb3JyZWN0QW5zd2VyOyAvLyBEZWZpbmUgeW91ciB0YXJnZXQgd29yZCBoZXJlXHJcblxyXG4gICAgaWYgKGN1cnJlbnRXb3JkID09PSB0YXJnZXRXb3JkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgICAgdGhpcy5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9XHJcbiAgICAgIC8vICAgZmFsc2U7XHJcbiAgICAgIC8vIEFkZGl0aW9uYWwgbG9naWMgZm9yIHdoZW4gdGhlIG9yZGVyIGlzIGNvcnJlY3RcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJuZWVkIGl0ZXJhdGlvbi0tXCIgKyB0aGlzLm5lZWRSZWl0ZXJhdGlvbik7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0U291bmQsIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMubmVlZFJlaXRlcmF0aW9uKSB7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLnNjYWxlID0gMDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnNOb2RlKVxyXG4gICAgICAgICAgLnRvKDAuMjUsIHsgc2NhbGVYOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAucGxheSgpO1xyXG4gICAgICAgICAgbGV0IFZPZHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29ycmVjdFZPKSB7XHJcbiAgICAgICAgICAgIFZPZHVyYXRpb24gPSB0aGlzLmNvcnJlY3RWTy5kdXJhdGlvbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RWTywgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgIH0sIFZPZHVyYXRpb24pO1xyXG4gICAgICAgICAgfSwgMC4yNSk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBsZXQgVk9kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdFZPKSB7XHJcbiAgICAgICAgICBWT2R1cmF0aW9uID0gdGhpcy5jb3JyZWN0Vk8uZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0Vk8sIGZhbHNlKTtcclxuICAgICAgICAgIC8vIHRoaXMuY2FsbEpvY2tleSgpO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICB9LCBWT2R1cmF0aW9uKTtcclxuICAgICAgICB9LCAwLjc1KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJJbmNvcnJlY3Qgb3JkZXIuXCIpO1xyXG4gICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciB3aGVuIHRoZSBvcmRlciBpcyBpbmNvcnJlY3RcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRXb3JkKCkge1xyXG4gICAgLy8gU29ydCB0aGUgbm9kZXMgYmFzZWQgb24gdGhlaXIgeC1jb29yZGluYXRlXHJcbiAgICBsZXQgc29ydGVkTm9kZXMgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGEueCAtIGIueCk7XHJcblxyXG4gICAgbGV0IHdvcmQgPSBzb3J0ZWROb2Rlc1xyXG4gICAgICAubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIik7IC8vIEFkanVzdCBpZiBuZWNlc3NhcnlcclxuICAgICAgICAgIGxldCBsYWJlbENvbXBvbmVudCA9IGxhYmVsTm9kZVxyXG4gICAgICAgICAgICA/IGxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgICBpZiAobGFiZWxDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYWJlbCBUZXh0OiBcIiwgbGFiZWxDb21wb25lbnQuc3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsQ29tcG9uZW50LnN0cmluZztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGFiZWwgQ29tcG9uZW50IG5vdCBmb3VuZCBvciBuZXN0ZWQgaW4gbm9kZTogXCIsIGNoaWxkLm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuam9pbihcIlwiKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGVkIFdvcmQ6IFwiLCB3b3JkKTtcclxuICAgIHJldHVybiB3b3JkO1xyXG4gIH1cclxuXHJcbiAgTG9hZE5leHRRdWVzdGlvbigpIHtcclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgIC8vcGxheWpvY2tleVxyXG4gICAgLy8gYWZ0ZXIgam9ja2V5IGNhbGwgYmVsb3cgYW5pbWF0aW9uXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKSA+PVxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVsc1xyXG4gICAgICApIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgKyAxXHJcbiAgICAgICAgKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgIH1cclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgT3B0aW9uc0xheW91dCgpIHtcclxuICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgY29uc3QgcGFkZGluZ0JldHdlZW5PcHRpb25zID0gMTA7XHJcblxyXG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICB0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9uSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gb3B0aW9uSGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPVxyXG4gICAgICB0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG4gICAgbGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlV2lkdGggLyB0b3RhbFdpZHRoV2l0aFBhZGRpbmcpO1xyXG5cclxuICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuICAgICAgbGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXHJcbiAgICAgIG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcbiAgICAgIGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIG9wdGlvbi53aWR0aCAqIG9wdGlvbi5hbmNob3JYO1xyXG4gICAgICBvcHRpb24ueCA9IHBvc1ggLSBvcHRpb25zTGF5b3V0LndpZHRoICogb3B0aW9uc0xheW91dC5hbmNob3JYO1xyXG5cclxuICAgICAgYWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblxyXG4gICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcclxuICAgICAgZm9yIChsZXQgc3ViQ2hpbGQgb2Ygb3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgc3ViQ2hpbGQueCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHN1YkNoaWxkLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHN1YkNoaWxkLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcbiAgfVxyXG5cclxuICBhcnJhbmdlQ2hpbGRyZW4oY2VudGVyTm9kZTogY2MuTm9kZSwgc3BhY2luZzogbnVtYmVyKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBjZW50ZXJOb2RlLmNoaWxkcmVuO1xyXG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCB3aWR0aCByZXF1aXJlZFxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgdG90YWxXaWR0aCArPSBjaGlsZC53aWR0aDtcclxuICAgIH1cclxuICAgIHRvdGFsV2lkdGggKz0gc3BhY2luZyAqIChjaGlsZHJlbi5sZW5ndGggLSAxKTsgLy8gQWRkIHNwYWNlcyBiZXR3ZWVuIGNoaWxkcmVuXHJcblxyXG4gICAgLy8gU3RhcnRpbmcgWCBwb3NpdGlvblxyXG4gICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAvLyBBcnJhbmdlIGNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBjaGlsZC54ID0gc3RhcnRYICsgY2hpbGQud2lkdGggLyAyO1xyXG4gICAgICBzdGFydFggKz0gY2hpbGQud2lkdGggKyBzcGFjaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbEpvY2tleSgpIHtcclxuICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zc2l0aXZlXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUyXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU1XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgYW5pbSA9IFtcImRhbmNlXCIsIFwidGh1bWJzX3VwXCJdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcclxuICAgICAgYW5pbSA9IFtcImNlbGVicmF0aW9uXCIsIFwid2VsbF9kb25lXCJdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIl07XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuICAgIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xyXG4gICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDUwLCA0NTBdO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBwb3MgPSBbMTkwMCwgMTkwMF07XHJcbiAgICAgIGpvY2tleXR3ZWVuID0gWzg3MCwgODcwXTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKFxyXG4gICAgICBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLFxyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXkueVxyXG4gICAgKTtcclxuICAgIGlmIChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJlxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKb2NrZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSlcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuNSxcclxuICAgICAgICB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpvY2tleVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSlcclxuICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgMC41LFxyXG4gICAgICAgICAgICB7IHg6IHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSxcclxuICAgICAgICAgICAgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgIHRoaXMuTG9hZE5leHRRdWVzdGlvbigpO1xyXG4gICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgIH0sIDAuNSk7XHJcbiAgfVxyXG5cclxuICBsb2FkU3ByaXRlRnJhbWUoXHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcbiAgICAgIGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKGF1ZGlvQ2xpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICByZXR1cm4gX251bWJlcjtcclxuICB9XHJcblxyXG4gIE9uU291bmQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25WTywgZmFsc2UpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH0sIHRoaXMucXVlc3Rpb25WTy5kdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

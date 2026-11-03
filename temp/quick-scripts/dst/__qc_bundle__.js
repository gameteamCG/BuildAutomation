
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
require('./assets/Framework/Prefabs/Progressbar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/WhatWillHappenNext/Scripts/TVInputManager');
require('./assets/Games/WhatWillHappenNext/Scripts/Title');
require('./assets/Games/WhatWillHappenNext/Scripts/endScreen');
require('./assets/Games/WhatWillHappenNext/Scripts/gameplay');
require('./assets/Games/WhatWillHappenNext/Scripts/globalVariables');
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
cc._RF.push(module, '3814cSVloBJZbKnKvdTSuad', 'empty');
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
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6f528Ta8lKfpYTwz7oqVtg', 'globalVariables');
// Games/WhatWillHappenNext/Scripts/globalVariables.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2xvYmFsVmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBOENDO1FBM0NHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUdoQixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1Qix5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsd0JBQWtCLEdBQVUsQ0FBQyxDQUFDO1FBRTlCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBdUJyQyxDQUFDO3dCQTlDb0IsZUFBZTtJQTBCaEMsd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxpQkFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDOztJQWxCYyx3QkFBUSxHQUFtQixJQUFJLENBQUM7SUF0Qi9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0k7SUFHdkI7UUFEQyxRQUFRO2lEQUNjO0lBTk4sZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThDbkM7SUFBRCxzQkFBQztDQTlDRCxBQThDQyxDQTlDNEMsRUFBRSxDQUFDLFNBQVMsR0E4Q3hEO2tCQTlDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2xvYmFsVmFyaWFibGVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBhbmltYXRpb25FbnRyeTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGF5RWZmZWN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFuaW1hdGlvbkV4aXQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbFF1ZXN0aW9uczogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNldHJhbnNpdGlvbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBmaWxsUmFuZ2U6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgY2FudmFzVG9wWTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNMZWZ0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNSaWdodFg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY2FudmFzQm90dG9tWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpnbG9iYWxWYXJpYWJsZXMgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/Progressbar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/Progressbar/Scripts/ProgressBar.ts

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
    ProgressBar.prototype.ProgressFill = function (_currentQues) {
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.totalLevels; //
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues < maxLevels && _currentQues < maxLevels / 2 && _currentQues != 0) {
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels) {
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc2JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ0lDO1FBNUhXLGdCQUFVLEdBQVksS0FBSyxDQUFDOztRQTJIcEMsaUJBQWlCO0lBQ3JCLENBQUM7b0JBaElvQixXQUFXO0lBa0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3Qix3Q0FBd0M7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksU0FBUyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBLEVBQUU7UUFDakQsSUFBSSxLQUFLLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxD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REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3VEQUNjO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ1k7SUFoQmxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnSS9CO0lBQUQsa0JBQUM7Q0FoSUQsQUFnSUMsQ0FoSXdDLEVBQUUsQ0FBQyxTQUFTLEdBZ0lwRDtrQkFoSW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBzdGFySW1nOiBjYy5TcHJpdGVGcmFtZTtcclxuICAgIEBwcm9wZXJ0eShjYy5UZXh0dXJlMkQpXHJcbiAgICBwcml2YXRlIHRyYWlsc0ltZzogY2MuVGV4dHVyZTJEO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHRyYWlsU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZVNvdW5kczogY2MuQXVkaW9DbGlwO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhclBvcFNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVTdGFyVHJhaWxzKDEwLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGxldCBwYXJ0aWNsZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZXNcIiArIDEpO1xyXG4gICAgICAgIGxldCBtYXhMZXZlbHMgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7Ly9cclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgIT0gMCkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoX2N1cnJlbnRRdWVzID49IG1heExldmVscykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsyXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIC8vIF9udW1iZXIgPSBfbnVtYmVyICogdGhpcy5zaGFwZXMubGVuZ3RoO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTdGFyVHJhaWxzKG51bTogbnVtYmVyLCBfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBybmdfTnVtT2ZQYXJ0aWNsZXMgPSBudW07XHJcbiAgICAgICAgbGV0IF9vZmZzZXQgPSA1MFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm5nX051bU9mUGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IE5vZGVQT1MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBhcmVudC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBybmdYID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX25vZGUueCAtIF9vZmZzZXQsIF9ub2RlLnggKyBfb2Zmc2V0KTtcclxuICAgICAgICAgICAgbGV0IHJuZ1kgPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS55IC0gX29mZnNldCwgX25vZGUueSArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgdHJhaWwgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy54ID0gcm5nWDtcclxuICAgICAgICAgICAgcGFydGljbGVzLnkgPSBybmdZO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJJbWc7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBhcnRpY2xlU291bmRzO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMud2lkdGggPSA2MDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM2MCk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy56SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCArIGk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdHJhaWwuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykucHJldmlldztcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMudHJhaWxzSW1nO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRyYWlsLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1MiwgMjQ0LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjc1LCB7IHdpZHRoOiAzNSwgaGVpZ2h0OiAzNSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjI1LCB7IGFuZ2xlOiAxODAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpLnRvKDAuMjUsIHsgYW5nbGU6IDM2MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjI1LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50cmFpbFNvdW5kcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy50cmFpbFNvdW5kcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDAuNzUsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIC8vc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCAtIDEwMCwgcGFydGljbGVzLnggKyAxMDApLCB0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueSAtIDUwMCwgcGFydGljbGVzLnkgKyAyMDApKSwgLy9jdXJ2ZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSAtIChfb2Zmc2V0ICogMikgLSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAvIDIgKyAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggKiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcykpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDAuNzUsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIC8vc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCAtIDEwMCwgcGFydGljbGVzLnggKyAxMDApLCB0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueSAtIDUwMCwgcGFydGljbGVzLnkgKyAyMDApKSwgLy9jdXJ2ZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54IC0gKF9vZmZzZXQgKiAyKSAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/Title.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0033ekDx7dHMarG9YUqBQup', 'Title');
// Games/WhatWillHappenNext/Scripts/Title.ts

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
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
    };
    NewClass.prototype.start = function () {
        // this.node.getChildByName("title").getComponent(cc.Animation).play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSx1RUFBdUU7SUFDM0UsQ0FBQztJQVZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYTVCO0lBQUQsZUFBQztDQWJELEFBYUMsQ0FicUMsRUFBRSxDQUFDLFNBQVMsR0FhakQ7a0JBYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
var globalVariables_1 = require("../../Games/WhatWillHappenNext/Scripts/globalVariables");
var TVInputManager_1 = require("../../Games/WhatWillHappenNext/Scripts/TVInputManager");
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
        _this.currentLevel = "1";
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
        var backBtn = this.node.getChildByName("back");
        var musicBtn = this.node.getChildByName("music");
        var nodes = [backBtn, musicBtn,];
        this.scheduleOnce(function () {
            TVInputManager_1.default.Instance.init(nodes);
        }, 0.5);
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
        this.questions.forEach(function (question, index) {
            console.log("Question " + (index + 1) + ":");
            console.log("Question Image Name:", question.questionImageName);
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            console.log("Correct Answer Number:", question.correctAnswerNum);
        });
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
                question.questionImageName = question.questionImageName;
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
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.options = question.options.map(function (option) { return _this.removeExtension(option); });
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
        globalVariables_1.default.Instance.currentLevel = 1;
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
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        else {
            this.node.getChildByName("music").children[0].active = false;
            this.isMusicOn = true;
            var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id_1, this.volume);
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
        cc.director.preloadScene("1");
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
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" && _this.jockeyName != "cryon") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene("1");
                }, 2);
            }
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
        cc.director.loadScene("1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBQ3JGLHdGQUFtRjtBQTZCN0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFzYkM7UUFwYkcsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFB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SSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRS9DLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2hGO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzlFO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25GO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7Z0JBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25GO2lCQUNJLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzdELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FB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R0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBdFhjLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBM0MxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ087SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lEQUN3QjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNZO0lBUW5DO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NkRBQ3NCO0lBRXhDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzttREFDUTtJQU16QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBUXZCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQXhDUCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc2I3QjtJQUFELGdCQUFDO0NBdGJELEFBc2JDLENBdGJzQyxFQUFFLENBQUMsU0FBUyxHQXNibEQ7a0JBdGJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vLi4vR2FtZXMvV2hhdFdpbGxIYXBwZW5OZXh0L1NjcmlwdHMvZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBUVklucHV0TWFuYWdlciBmcm9tIFwiLi4vLi4vR2FtZXMvV2hhdFdpbGxIYXBwZW5OZXh0L1NjcmlwdHMvVFZJbnB1dE1hbmFnZXJcIjtcclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxEYXRhIHtcclxuICAgIEdhbWVJRDogc3RyaW5nO1xyXG4gICAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gICAgVGl0bGVJbWFnZU5hbWU6IHN0cmluZztcclxuICAgIGludHJvQmdOYW1lOiBzdHJpbmc7XHJcbiAgICBiZ21NdXNpY05hbWU6IHN0cmluZztcclxuICAgIG1haW5CZ05hbWU6IHN0cmluZztcclxuICAgIEpvY2tleU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XHJcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gICAgc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW86IGJvb2xlYW47XHJcbiAgICBjb21tb25PcHRpb25JbWFnZU5hbWU6IHN0cmluZztcclxuICAgIGlzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuICAgIG51bWJlck9mT3B0aW9uczogbnVtYmVyO1xyXG4gICAgb3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcclxuICAgIGNvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxuICAgIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIEJHTV9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICB2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBOZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcbiAgICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIGN1cnJlbnRMZXZlbDogc3RyaW5nID0gXCIxXCI7XHJcbiAgICBoYXNBY2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhhc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc1ByZW1pdW1HYW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBpc01vYmlsZU51bWJlclByaW9yaXR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgcHJlbWl1bUxldmVsOiBudW1iZXIgPSAzO1xyXG4gICAgLy8gbW9iTnVtQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG4gICAgLy8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHN0YXJ0R2FtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGFjdGl2YXRlSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0R2FtZS5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgbGV0IG11c2ljQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3Qgc3RvcmVkSlNPTkRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVEYXRhJyk7XHJcblxyXG4gICAgICAgIC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkSlNPTkRhdGEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBJRDpcIiwgdGhpcy5nYW1lSUQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgTGV2ZWxzOlwiLCB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSm9ja2V5IE5hbWU6XCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgIC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEF1ZGlvIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMSBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3JyZWN0IEFuc3dlciBOdW1iZXI6XCIsIHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgICAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgJycpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSlNPTmRhdGEoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NndjItcHJvZC1pbWFnZXMuY3JlYXRpdmVnYWxpbGVvLmNvbS9IeWJyaWRMWkFzc2V0cy9CVE4tYmctb3JhbmdlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoJ2pzb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRKc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRKc29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZWRKc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudG90YWxMZXZlbDtcclxuICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBtdXNpYyBuYW1lID0gXCIsIGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWVcclxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lXHJcbiAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lID0gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZV9kYXRhJywgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUlEID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuR2FtZUlEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSh0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAodGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24ub3B0aW9ucyA9IHF1ZXN0aW9uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dEYXRhKCk7IC8vIFlvdSBjYW4gY2FsbCBhIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZGF0YSBvciB1c2UgaXQgaW4gb3RoZXIgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XHJcbiAgICAgICAgdmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICAgICAgdmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XHJcbiAgICAgICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgICAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG4gICAgICAgIGlmIChwcmVtaXVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgLy8gaWYgKGxldmVsICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcbiAgICAgICAgLy8gICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSBwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG4gICAgICAgIC8vICAgICBpZiAocGFyc2VJbnQodGhpcy5OZXh0U2NlbmVOYW1lKSA+PSA3KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBcIjdcIjtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSA3O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ByZW1pdW1HYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWdlVmFsdWU6IG51bWJlciA9IHBhcnNlSW50KGFnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQWdlUGFyYW1ldGVyTmVlZGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjFcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvY2tleSBuYW1lID0gXCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwic3VwZXJjdWJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFsbGlvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHRoaXMuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcImphaXB1cmlhXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmpvY2tleU5hbWUgIT0gXCJiYWdcIiAmJiB0aGlzLmpvY2tleU5hbWUgIT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5QnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPblRpbWVyKCkge1xyXG4gICAgLy8gICAgIGxldCBkZWxheSA9IDE7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OTk5OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImdhbWVFbmRcIikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMudGltZXIrKztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgLy8gICAgICAgICBkZWxheSArPSAxO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIGJsb2JUb0RhdGFVUkwoYmxvYlVybCwgY2FsbGJhY2spIHtcclxuICAgIC8vICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAvLyAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIHhoci5vcGVuKCdHRVQnLCBibG9iVXJsKTtcclxuICAgIC8vICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gICAgLy8gICAgIHhoci5zZW5kKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12188wrDUtGT6+DUikGtBfF', 'endScreen');
// Games/WhatWillHappenNext/Scripts/endScreen.ts

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
var TVInputManager_1 = require("./TVInputManager");
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
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [backBtn, musicBtn,];
        TVInputManager_1.default.Instance.setCanSelect(true);
        TVInputManager_1.default.Instance.init(nodes);
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
        //     this.scheduleOnce(() => {
        //         this.node.getChildByName("end").active = true;
        //     }, 2);
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        // }
        // this.node.getComponent(cc.Sprite).spriteFrame = startGame.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function () {
            _this.node.getChildByName("awesome").getComponent(cc.Animation).play();
        }, 0.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.7 }, { easing: "sineInOut" }).start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.7 }, { easing: "sineInOut" }).start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.7 }, { easing: "sineInOut" }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZW5kU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUU3RCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwRkM7UUF2RlcsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7UUEwRTNDLGlCQUFpQjtJQUNyQixDQUFDO0lBekVHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsa0RBQWtEO1FBQ2xELCtGQUErRjtR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QyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUdaLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsTUFBZ0I7UUFDckIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDa0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQWYxQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEY1QjtJQUFELGVBQUM7Q0ExRkQsQUEwRkMsQ0ExRnFDLEVBQUUsQ0FBQyxTQUFTLEdBMEZqRDtrQkExRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9ja2V5IGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvSm9ja2V5cy9TY3JpcHRzL0pvY2tleVwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YXI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBvZGFyRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YkVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICBsZXQgbXVzaWNCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb2RhckVuZDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuamFpcHVyaWFFbmQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9LCAyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy50bGNFbmQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdXBlcmN1YkVuZDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0JHO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1Db25ncmF0dWxhdGlvbnNcIik7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIH0sIDAuMyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDAuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuMyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNyB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaFswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICB9LCAyLjMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25FbmRCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/TVInputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a903fLhV1NBY8iKOMxzfZa', 'TVInputManager');
// Games/WhatWillHappenNext/Scripts/TVInputManager.ts

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
var TVInputManager = /** @class */ (function (_super) {
    __extends(TVInputManager, _super);
    function TVInputManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverSFX = null;
        _this.focusNodes = [];
        _this.currentIndex = -1;
        _this.canSelect = true;
        _this.originalScales = new Map();
        // ================= INPUT =================
        _this.handleTVKeys = function (e) {
            var _a;
            var blockedKeys = [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                "Enter",
                " ",
                "Space",
                "Spacebar",
                "Backspace",
                "Escape",
                "GoBack",
                "BrowserBack"
            ];
            if (blockedKeys.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                (_a = cc.game.canvas) === null || _a === void 0 ? void 0 : _a.focus();
                _this.onKeyDown({
                    keyCode: e.keyCode
                });
            }
        };
        return _this;
    }
    TVInputManager_1 = TVInputManager;
    Object.defineProperty(TVInputManager, "Instance", {
        get: function () {
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    TVInputManager.prototype.init = function (nodes, defaultIndex) {
        var _this = this;
        if (defaultIndex === void 0) { defaultIndex = -1; }
        this.focusNodes = nodes || [];
        this.originalScales.clear();
        this.focusNodes.forEach(function (node) {
            if (node && node.isValid) {
                var scale = node.scale;
                _this.originalScales.set(node, scale > 0.01 ? scale : 1);
            }
        });
        this.currentIndex = defaultIndex;
        if (defaultIndex === -1) {
            this.clearFocus();
        }
        else {
            this.updateFocus();
        }
        this.attachClickListeners();
    };
    TVInputManager.prototype.setCanSelect = function (val) {
        this.canSelect = val;
    };
    TVInputManager.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        TVInputManager_1.instance = this;
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
        window.addEventListener("keydown", this.handleTVKeys, true);
        TVInputManager_1.instance = this;
        window.focus();
        this.scheduleOnce(function () {
            if (cc.game.canvas) {
                cc.game.canvas.setAttribute("tabindex", "0");
                cc.game.canvas.focus();
            }
        }, 0.2);
    };
    TVInputManager.prototype.onDestroy = function () {
        window.removeEventListener("keydown", this.handleTVKeys, true);
        this.focusNodes = [];
        this.originalScales.clear();
        TVInputManager_1.instance = null;
    };
    TVInputManager.prototype.onKeyDown = function (event) {
        var _a, _b;
        (_b = (_a = event).preventDefault) === null || _b === void 0 ? void 0 : _b.call(_a);
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.up:
                this.move(-1);
                return;
            case cc.macro.KEY.right:
            case cc.macro.KEY.down:
                this.move(1);
                return;
        }
        if (!this.canSelect)
            return;
        if (event.keyCode === 8 ||
            event.keyCode === 27) {
            return;
        }
        if (event.keyCode === cc.macro.KEY.enter ||
            event.keyCode === cc.macro.KEY.space ||
            event.keyCode === 13 ||
            event.keyCode === 23 ||
            event.keyCode === 66) {
            this.trigger();
        }
    };
    // ================= CORE =================
    TVInputManager.prototype.move = function (step) {
        if (!this.canSelect)
            return;
        console.log("Move");
        this.clean();
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1) {
            this.currentIndex =
                step > 0
                    ? 0
                    : this.focusNodes.length - 1;
            this.updateFocus();
            return;
        }
        this.currentIndex += step;
        if (this.currentIndex < 0)
            this.currentIndex = this.focusNodes.length - 1;
        if (this.currentIndex >= this.focusNodes.length)
            this.currentIndex = 0;
        this.updateFocus();
    };
    TVInputManager.prototype.trigger = function () {
        this.clean();
        if (this.focusNodes.length === 0)
            return;
        if (this.currentIndex === -1)
            return;
        var node = this.focusNodes[this.currentIndex];
        if (!node)
            return;
        this.playPressEffect(node, function () {
            var button = node.getComponent(cc.Button);
            if (button && button.clickEvents.length > 0) {
                button.clickEvents.forEach(function (eventHandler) {
                    eventHandler.emit([{
                            target: node,
                            currentTarget: node
                        }]);
                });
            }
        });
    };
    // ================= HELPERS =================
    TVInputManager.prototype.clean = function () {
        this.focusNodes = this.focusNodes.filter(function (node) {
            if (!node || !node.isValid)
                return false;
            var btn = node.getComponent(cc.Button);
            if (btn && !btn.interactable)
                return false;
            return true;
        });
        if (this.currentIndex >= this.focusNodes.length) {
            this.currentIndex = 0;
        }
    };
    TVInputManager.prototype.updateFocus = function () {
        var _this = this;
        this.focusNodes.forEach(function (node, index) {
            var _a;
            if (!node || !node.isValid)
                return;
            var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
            cc.Tween.stopAllByTarget(node);
            if (index === _this.currentIndex) {
                cc.audioEngine.playEffect(_this.hoverSFX, false);
                cc.tween(node)
                    .to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE })
                    .start();
                node.opacity = 255;
            }
            else {
                cc.tween(node)
                    .to(0.1, { scale: baseScale })
                    .start();
                node.opacity = 255;
            }
        });
    };
    // ================= MOUSE + TV =================
    TVInputManager.prototype.playPressEffect = function (node, callback) {
        var _a;
        var baseScale = (_a = this.originalScales.get(node)) !== null && _a !== void 0 ? _a : node.scale; // 🔥 important
        console.log("CLICK:", node.name);
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { scale: baseScale * 0.85, opacity: 255 })
            .to(0.1, { scale: baseScale, opacity: 255 })
            .call(function () {
            if (callback)
                callback();
        })
            .start();
        node.emit("tv-select", { target: node, currentTarget: node });
    };
    TVInputManager.prototype.clearFocus = function () {
        var _this = this;
        this.focusNodes.forEach(function (node) {
            var _a;
            if (!node || !node.isValid)
                return;
            var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
            cc.Tween.stopAllByTarget(node);
            node.scale = baseScale;
            node.opacity = 255;
        });
    };
    TVInputManager.prototype.attachClickListeners = function () {
        var _this = this;
        this.focusNodes.forEach(function (node, index) {
            node.off(cc.Node.EventType.MOUSE_ENTER);
            node.off(cc.Node.EventType.MOUSE_LEAVE);
            node.off(cc.Node.EventType.MOUSE_DOWN);
            node.off("click");
            node.on("click", function (event) {
                _this.currentIndex = index;
                _this.updateFocus();
                _this.playPressEffect(node, function () {
                    if (_this.canSelect) {
                        node.emit("custom-select", event || { target: node });
                    }
                });
            });
            node.on(cc.Node.EventType.MOUSE_ENTER, function () {
                var _a;
                cc.audioEngine.playEffect(_this.hoverSFX, false);
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                cc.tween(node).to(0.1, { scale: baseScale * TVInputManager_1.FOCUS_SCALE }).start();
            });
            node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
                var _a;
                var baseScale = (_a = _this.originalScales.get(node)) !== null && _a !== void 0 ? _a : 1;
                if (!_this.focusNodes ||
                    _this.currentIndex < 0 ||
                    !_this.focusNodes[_this.currentIndex]) {
                    cc.tween(node).to(0.1, { scale: baseScale }).start();
                    return;
                }
                if (_this.focusNodes[_this.currentIndex] !== node) {
                    cc.tween(node)
                        .to(0.1, { scale: baseScale })
                        .start();
                }
            });
        });
    };
    var TVInputManager_1;
    TVInputManager.FOCUS_SCALE = 1.12;
    // ================= INIT =================
    TVInputManager.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], TVInputManager.prototype, "hoverSFX", void 0);
    TVInputManager = TVInputManager_1 = __decorate([
        ccclass
    ], TVInputManager);
    return TVInputManager;
}(cc.Component));
exports.default = TVInputManager;
/*
        --------------For Gameplay--------------------------------
    
        if game has touchStart event : add this after assigning touchStart event
        element.on('tv-select', function (event) {
            this.TouchStart(element);
        }, this);

        if(TVInputManager.Instance) {
            TVInputManager.Instance.setCanSelect(this.canTouch)
        }
    
        Start :
        let optionNodes = this.node.getChildByName("options").children;
        optionNodes.forEach((element, idx) => {
            let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" });
            if (idx === optionNodes.length - 1) {
                t = t.call(() => {
                    this.setupTVFocus("options");
                });
            }
            t.start();
        });
    
        For options
        let optionNodes2 = this.node.getChildByName("options").children;
        optionNodes2.forEach((element, idx) => {
            let t = cc.tween(element).to(0.5, { scale: 1 }, { easing: "sineInOut" })
                .call(() => {
                    this.canTouch = true;
                    TVInputManager.Instance.setCanSelect(this.canTouch)
                });
            if (idx === optionNodes2.length - 1) {
                t = t.call(() => {
                    this.setupTVFocus("options");
                });
            }
            t.start();
        });
    
        buttonSound: this.setupTVFocus("options");
    
        private setupTVFocus(activeContainerName: string) {
            let backBtn = startGame.Instance.node.getChildByName("back");
            let musicBtn = startGame.Instance.node.getChildByName("music");
            let soundBtn = this.node.getChildByName("panel").getChildByName("soundbutton");
            backBtn.scale = 1;
            musicBtn.scale = 1;
            let optionButtons = this.node.getChildByName(activeContainerName).children.filter(node => {
                let btn = node.getComponent(cc.Button);
                return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
            });
            let nodes = [...optionButtons, backBtn, soundBtn, musicBtn].filter(n => !!n);
            if (cc.director.getScene().name == "1") {
                TVInputManager.Instance.init(nodes, (parseInt(this.answerarray[0])) - 1);
            }
            else {
                TVInputManager.Instance.init(nodes, -1);
            }
            TVInputManager.Instance.setCanSelect(this.canTouch);
        }
            
        private setupTVFocus2() {
            let backBtn = startGame.Instance.node.getChildByName("back");
            let musicBtn = startGame.Instance.node.getChildByName("music");
            backBtn.scale = 1;
            musicBtn.scale = 1;
            let nodes = [backBtn, musicBtn,];
            TVInputManager.Instance.setCanSelect(true);
            TVInputManager.Instance.init(nodes);
        }



        -------------------------------- EndScreen-----------------------------------------
         onload :
                let backBtn = startGame.Instance.node.getChildByName("back");
                let musicBtn = startGame.Instance.node.getChildByName("music");
                backBtn.scale = 1;
                musicBtn.scale = 1;
                let nodes = [backBtn, musicBtn,];
                TVInputManager.Instance.setCanSelect(true);
                TVInputManager.Instance.init(nodes);
    

        ------------------------------StartGame -----------------------------------------
        onload :
            let backBtn = this.node.getChildByName("back");
            let musicBtn = this.node.getChildByName("music");
            let nodes = [backBtn, musicBtn,];
            this.scheduleOnce(() => {
                TVInputManager.Instance.init(nodes);
            }, 0.5);
    
*/ 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVFZJbnB1dE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyUUM7UUF4UVcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG9CQUFjLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUErQnpELDRDQUE0QztRQUdwQyxrQkFBWSxHQUFHLFVBQUMsQ0FBZ0I7O1lBQ3BDLElBQU0sV0FBVyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNoQixDQUFDO1lBRUYsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUM3QixNQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLEdBQUc7Z0JBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNkLENBQUMsQ0FBQzthQUNiO1FBQ0ws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Q0FBQyxZQUFZLENBQUMsRUFDckM7b0JBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3JELE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQzdCLEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQWxRdUIsMEJBQVcsR0FBRyxJQUFJLENBQUM7SUFFM0MsMkNBQTJDO0lBRTVCLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQVQvQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNlO0lBSHJCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyUWxDO0lBQUQscUJBQUM7Q0EzUUQsQUEyUUMsQ0EzUTJDLEVBQUUsQ0FBQyxTQUFTLEdBMlF2RDtrQkEzUW9CLGNBQWM7QUE2UW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEZFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVklucHV0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgaG92ZXJTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGZvY3VzTm9kZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBjYW5TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlczogTWFwPGNjLk5vZGUsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT0NVU19TQ0FMRSA9IDEuMTI7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUVklucHV0TWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaW5pdChub2RlczogY2MuTm9kZVtdLCBkZWZhdWx0SW5kZXg6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gbm9kZXMgfHwgW107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbm9kZS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuc2V0KG5vZGUsIHNjYWxlID4gMC4wMSA/IHNjYWxlIDogMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGRlZmF1bHRJbmRleDtcclxuICAgICAgICBpZiAoZGVmYXVsdEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW5TZWxlY3QodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5TZWxlY3QgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSU5QVVQgPT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUVktleXMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZWRLZXlzID0gW1xyXG4gICAgICAgICAgICBcIkFycm93VXBcIixcclxuICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcclxuICAgICAgICAgICAgXCJBcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiRW50ZXJcIixcclxuICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2VcIixcclxuICAgICAgICAgICAgXCJTcGFjZWJhclwiLFxyXG4gICAgICAgICAgICBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICAgICAgICBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgICBcIkdvQmFja1wiLFxyXG4gICAgICAgICAgICBcIkJyb3dzZXJCYWNrXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXM/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKHtcclxuICAgICAgICAgICAgICAgIGtleUNvZGU6IGUua2V5Q29kZVxyXG4gICAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVFZLZXlzLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2MuZ2FtZS5jYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVUVktleXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIChldmVudCBhcyBhbnkpLnByZXZlbnREZWZhdWx0Py4oKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoLTEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDggfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gNjZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IENPUkUgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtb3ZlKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmVcIilcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID1cclxuICAgICAgICAgICAgICAgIHN0ZXAgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSBzdGVwO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IDApIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmZvY3VzTm9kZXNbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PSBIRUxQRVJTID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gdGhpcy5mb2N1c05vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidG4gJiYgIWJ0bi5pbnRlcmFjdGFibGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlICogVFZJbnB1dE1hbmFnZXIuRk9DVVNfU0NBTEUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09IE1PVVNFICsgVFYgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwbGF5UHJlc3NFZmZlY3Qobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyBub2RlLnNjYWxlOyAvLyDwn5SlIGltcG9ydGFudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0s6XCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHNjYWxlOiBiYXNlU2NhbGUgKiAwLjg1LCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBub2RlLmVtaXQoXCJ0di1zZWxlY3RcIiwgeyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFzZVNjYWxlO1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcclxuICAgICAgICAgICAgbm9kZS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVByZXNzRWZmZWN0KG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwiY3VzdG9tLXNlbGVjdFwiLCBldmVudCB8fCB7IHRhcmdldDogbm9kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ob3ZlclNGWCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMSwgeyBzY2FsZTogYmFzZVNjYWxlIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF0gIT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tRm9yIEdhbWVwbGF5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgICAgIGlmIGdhbWUgaGFzIHRvdWNoU3RhcnQgZXZlbnQgOiBhZGQgdGhpcyBhZnRlciBhc3NpZ25pbmcgdG91Y2hTdGFydCBldmVudFxyXG4gICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFN0YXJ0IDpcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuKGVsZW1lbnQpLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgRm9yIG9wdGlvbnNcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib3B0aW9uc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICBvcHRpb25Ob2RlczIuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gb3B0aW9uTm9kZXMyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHQgPSB0LmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGJ1dHRvblNvdW5kOiB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICBcclxuICAgICAgICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25CdXR0b25zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGFjdGl2ZUNvbnRhaW5lck5hbWUpLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWN0aXZlICYmIG5vZGUub3BhY2l0eSA+IDAgJiYgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gWy4uLm9wdGlvbkJ1dHRvbnMsIGJhY2tCdG4sIHNvdW5kQnRuLCBtdXNpY0J0bl0uZmlsdGVyKG4gPT4gISFuKTtcclxuICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgKHBhcnNlSW50KHRoaXMuYW5zd2VyYXJyYXlbMF0pKSAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzMigpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBub2RlcyA9IFtiYWNrQnRuLCBtdXNpY0J0bixdO1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmRTY3JlZW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICBvbmxvYWQgOiBcclxuICAgICAgICAgICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgIFxyXG5cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBvbmxvYWQgOlxyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgIGxldCBtdXNpY0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICBcclxuKi8iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4e51CcXJH24gA96gBaxOm', 'gameplay');
// Games/WhatWillHappenNext/Scripts/gameplay.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var TVInputManager_1 = require("./TVInputManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.popSound = [];
        _this.questionSound = [];
        _this.positiveSound = [];
        _this.negativeSound = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = null;
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.podar_font;
            this.node
                .getChildByName("questionPanel")
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
        }
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio = audioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node
                        .getChildByName("QuestionBox")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node
                    .getChildByName("QuestionBox")
                    .getChildByName("ThirdObject")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            var _loop_1 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    // console.log("option img = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    // console.log("option text = ", startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i]);
                    this_1.node
                        .getChildByName("Option")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
                _loop_1(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudioName, function (AudioClip) {
                _this.correctAudio = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("QuestionBox")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionImageName, function (spriteFrame) {
                _this.node
                    .getChildByName("QuestionBox")
                    .getChildByName("ThirdObject")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_2.node
                        .getChildByName("Option")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                    .numberOfOptions; i++) {
                _loop_2(i);
            }
        }
        //startGame.Instance.jockeyName = "Podar";
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.answerArray = [
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAnswerNum,
        ];
        this.callThirdObjectIn();
    };
    NewClass.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node
            .getChildByName("questionPanel")
            .getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var optionButtons = this.node
            .getChildByName(activeContainerName)
            .children.filter(function (node) {
            var btn = node.getComponent(cc.Button);
            return (node.active &&
                node.opacity > 0 &&
                (!btn || btn.interactable !== false));
        });
        var nodes = __spreadArrays(optionButtons, [backBtn, soundBtn, musicBtn]).filter(function (n) { return !!n; });
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            TVInputManager_1.default.Instance.init(nodes, 0);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    NewClass.prototype.setupTVFocus2 = function () {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [backBtn, musicBtn].filter(function (n) { return !!n; });
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            TVInputManager_1.default.Instance.init(nodes, 1);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.GenerateOptions = function () {
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .numberOfOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
        }
        this.node.getChildByName("template").destroy();
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        // this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();
        var posX = -237;
        if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            posX = -300;
        }
        this.scheduleOnce(function () {
            _this.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("QuestionBox"))
                    .to(1, { scale: 1 }, { easing: "sineInOut" })
                    .start();
            }, 0.1);
            _this.scheduleOnce(function () {
                cc.tween(_this.node.getChildByName("QuestionBox"))
                    .to(0.5, { x: posX }, { easing: "sineInOut" })
                    .start();
                _this.callOptionIn();
            }, 1);
        }, 1);
    };
    NewClass.prototype.OnVOButton = function (_event) {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionSound[0], false);
        _event.target.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _event.target.getComponent(cc.Button).interactable = true;
            _event.target.scale = 1;
            _this.setupTVFocus("Option");
        }, this.questionSound[0].duration);
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("Option").setPosition(150, -70);
        }
        var _loop_3 = function (i) {
            this_3.node.getChildByName("Option").children[i - 1].scale = 0;
            this_3.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_3.scheduleOnce(function () {
                cc.audioEngine.playEffect(_this.popSound[0], false);
                cc.tween(_this.node.getChildByName("Option").getChildByName(i.toString()))
                    .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                        _this.canTouch = true;
                        if (TVInputManager_1.default.Instance) {
                            TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
                        }
                        _this.setupTVFocus("Option");
                    }, 1);
                }
            }, delay);
            delay += 0.5;
        };
        var this_3 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            _loop_3(i);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                var hand = this.node.getChildByName("hand");
                console.log("answer array num = ", this.answerArray[0]);
                hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
                hand.setPosition(50, -50);
                hand.angle = 30;
                hand.setParentWithSamePos(this.node);
                hand.getComponent(cc.Animation).play();
            }
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc" ||
            StartGame_1.default.Instance.jockeyName == "supercub") {
            var intoAnim = "intro";
            this.currentJcokey.setPosition(450, -370);
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                intoAnim = "intro_1";
                this.currentJcokey.setPosition(870, -370);
            }
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        var hand = _this.node.getChildByName("hand");
                        console.log("answer array num = ", _this.answerArray[0]);
                        hand.setParent(_this.node
                            .getChildByName("Option")
                            .getChildByName(_this.answerArray[0]));
                        hand.setPosition(50, -50);
                        hand.angle = 30;
                        hand.setParentWithSamePos(_this.node);
                        hand.getComponent(cc.Animation).play();
                    }
                }
                else {
                    cc.audioEngine.playEffect(_this.questionSound[0], false);
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "intro_loop", true);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "intro_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                var hand = _this.node.getChildByName("hand");
                                console.log("answer array num = ", _this.answerArray[0]);
                                hand.setParent(_this.node
                                    .getChildByName("Option")
                                    .getChildByName(_this.answerArray[0]));
                                hand.setPosition(50, -50);
                                hand.angle = 30;
                                hand.setParentWithSamePos(_this.node);
                                hand.getComponent(cc.Animation).play();
                            }
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
                    }, _this.questionSound[0].duration);
                }
            }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
    };
    NewClass.prototype.OnButtonClick = function (_event) {
        var _this = this;
        if (!this.canTouch) {
            return;
        }
        this.canTouch = false;
        TVInputManager_1.default.Instance.setCanSelect(this.canTouch);
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        var _node = _event.target;
        if (_node.name == this.answerArray[0]) {
            this.setupTVFocus2();
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.node
                .getChildByName("questionPanel")
                .getChildByName("sound")
                .getComponent(cc.Button).interactable = false;
            this.destroyOption();
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.scheduleOnce(function () {
                _this.callPositiveRection(_node);
            }, 0.3);
        }
        else {
            this.wrongAnswerCount++;
            console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.callNegativeRection(_node, _event);
        }
    };
    NewClass.prototype.callNextLevel = function () {
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.scheduleOnce(function () {
                cc.director.loadScene("endScreen");
            }, 1);
        }
        else {
            this.scheduleOnce(function () {
                globalVariables_1.default.Instance.currentLevel++;
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                cc.director.loadScene("1");
            }, 1);
        }
    };
    NewClass.prototype.callStarsEared = function () {
        if (!this.star1Log && globalVariables_1.default.Instance.currentLevel == 1) {
            this.star1Log = true;
            console.log("starsEarned--1");
        }
        if (!this.star2Log && globalVariables_1.default.Instance.currentLevel == 4) {
            this.star2Log = true;
            console.log("starsEarned--2");
        }
        if (!this.star3Log &&
            globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            this.star3Log = true;
            console.log("starsEarned--3");
        }
    };
    NewClass.prototype.setAnswerArray = function () {
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 2) {
            this.answerArray = ["2"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 3) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 4) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 5) {
            this.answerArray = ["2"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 6) {
            this.answerArray = ["1"];
        }
        else if (globalVariables_1.default.Instance.currentLevel == 7) {
            this.answerArray = ["2"];
        }
    };
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAudio, false);
        var qBox = this.node.getChildByName("QuestionBox");
        var worldPos = qBox.parent.convertToWorldSpaceAR(qBox.getPosition());
        var localPos = _node.parent.convertToNodeSpaceAR(worldPos);
        cc.tween(_node)
            .to(0.5, { width: qBox.width, height: qBox.height, y: localPos.y }, { easing: "sineInOut" })
            .start();
        var inner = _node.children[0];
        cc.tween(inner)
            .to(0.5, { width: qBox.width * 0.8, height: qBox.height * 0.8, scale: 1 }, { easing: "sineInOut" })
            .start();
        this.scheduleOnce(function () {
            var confetti = _this.node.getChildByName("confetti");
            var confettiPos = _this.node.convertToNodeSpaceAR(_node.parent.convertToWorldSpaceAR(_node.getPosition()));
            confetti.setPosition(confettiPos);
            confetti.getComponent(cc.Animation).play();
            cc.audioEngine.playEffect(_this.positiveSound[0], false);
            _this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                _this.scheduleOnce(function () {
                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                    _this.scheduleOnce(function () {
                        _this.callJockey();
                    }, 1);
                }, 1.5);
            }, 0.7);
        }, 0.5);
    };
    NewClass.prototype.callJockey = function () {
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
                "positive_4",
                "positive_5",
                "positive_4",
                "positive_5",
                "positive_6",
                "positive_7",
                "positive_8",
                "positive_9",
                "positive_10",
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
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
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
        var pos = [-1200, 1200];
        var jockeytween = [-350, 350];
        //console.log("characterAppear--Podar_Jumbo");
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 &&
            StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJcokey.scaleX = 0.65;
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.jockeyName != "Podar") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
        }
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey)
                .to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                .start();
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" })
                        .start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idel", true);
                        }
                    }
                    _this.callNextLevel();
                }, _this.positiveAudio[currentClipNum].duration);
            }, 0.5);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "intro_out", false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey.active = false;
                    _this.callNextLevel();
                }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
            }, this.positiveAudio[currentClipNum].duration);
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            if (anim[currentClipNum] == "positive_1" ||
                anim[currentClipNum] == "positive_2") {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum] + "_start", false);
                this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_loop", true);
                    cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "run", false);
                            cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                            //console.log("characterDisappear--Podar_Jumbo");
                            _this.callNextLevel();
                        }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                    }, _this.positiveAudio[currentClipNum].duration);
                }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
            }
            else {
                this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
                this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "run", false);
                    cc.tween(_this.currentJcokey).to(2, { x: -1000 }).start();
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.callNextLevel();
                }, this.positiveAudio[currentClipNum].duration);
            }
        }
    };
    NewClass.prototype.callNegativeRection = function (_node, _event) {
        var _this = this;
        _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        if (this.wrongAnswerCount >= 6) {
            this.wrongAnswerCount = 1;
        }
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = [
                    "negetive",
                    "negetive2",
                    "negetive3",
                    "negetive4",
                    "negetive5",
                    "negetive6",
                ];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
                anim = [
                    "negative_3",
                    "negative_4",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                    "negative_4",
                    "negative_5",
                ];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag") {
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
            var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJcokey.scaleX = 0.65;
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                if (StartGame_1.default.Instance.jockeyName != "Podar") {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idel", true);
                }
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: 350 }, { easing: "quartInOut" })
                    .start();
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        cc.tween(_this.currentJcokey)
                            .to(0.5, { x: 1200 }, { easing: "quartInOut" })
                            .start();
                        if (StartGame_1.default.Instance.jockeyName != "stallion") {
                            if (StartGame_1.default.Instance.jockeyName != "Podar") {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }
                            else {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idel", true);
                            }
                        }
                        _this.canTouch = true;
                        TVInputManager_1.default.Instance.setCanSelect(_this.canTouch);
                    }, _this.negativeAudio[currentClipNum].duration);
                }, 0.5);
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "idle", true);
                }, _this.negativeAudio[currentClipNum].duration);
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                if (anim[currentClipNum] == "negative_1" ||
                    anim[currentClipNum] == "negative_2") {
                    //play bulb break if needed
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum] + "_start", false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_loop", true);
                        cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.scheduleOnce(function () {
                                _this.currentJcokey
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "idle", true);
                            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
                        }, _this.negativeAudio[currentClipNum].duration);
                    }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
                }
                else {
                    _this.currentJcokey
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, anim[currentClipNum], false);
                    cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                    _this.scheduleOnce(function () {
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "idle", true);
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
        }, 0.7);
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x }, { easing: "sineInOut" })
            .call(function () {
            _node.children[0]
                .getComponent(cc.Sprite)
                .setMaterial(0, _this.defaultMat);
        })
            .start();
    };
    NewClass.prototype.destroyOption = function () {
        for (var i = 0; i < this.node.getChildByName("Option").children.length; i++) {
            if (this.node.getChildByName("Option").children[i].name !=
                this.answerArray[0]) {
                this.node.getChildByName("Option").children[i].destroy();
            }
        }
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
    NewClass.prototype.OptionsLayoutVertical = function () {
        var optionsLayout = this.optionsNode;
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
            var posY = accumulatedHeight + option.height * option.anchorY;
            option.y = posY - optionsLayout.height * optionsLayout.anchorY;
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
        var optionsLayout = this.optionsNode;
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
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "questionSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixrRUFBNkQ7QUFDN0QscURBQWdEO0FBQ2hELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlwQ0M7UUF2cENTLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFtQixFQUFFLENBQUM7UUFFOUIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUczQyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFFcEIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENB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QUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ007SUE5QlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlwQzVCO0lBQUQsZUFBQztDQXpwQ0QsQUF5cENDLENBenBDcUMsRUFBRSxDQUFDLFNBQVMsR0F5cENqRDtrQkF6cENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc2Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgVFZJbnB1dE1hbmFnZXIgZnJvbSBcIi4vVFZJbnB1dE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuRm9udClcclxuICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgdGxjX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgc3VwZXJjdWJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvcFNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG4gIGRlZmF1bHRNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG4gIGdyZXlNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpc0ZpcnN0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhbnN3ZXJBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIG1heExldmVsOiBudW1iZXIgPSA3O1xyXG4gIHdyb25nQW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgc3RhcjFMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyMkxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0YXIzTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY3VycmVudEpjb2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25zTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcXVlc3Rpb25Cb3hQb3NZOiBudW1iZXIgPSAwO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uc05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIik7XHJcbiAgICB0aGlzLkdlbmVyYXRlT3B0aW9ucygpO1xyXG4gICAgdGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscztcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IFwiXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5jb21tb25PcHRpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICBpIDxcclxuICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgICBdLm51bWJlck9mT3B0aW9ucztcclxuICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25JbWFnZU5hbWUsXHJcbiAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3B0aW9uIGltZyA9IFwiLCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldKTtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiB0ZXh0ID0gXCIsIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0pO1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuY29ycmVjdEF1ZGlvTmFtZSxcclxuICAgICAgICAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgIGkgPFxyXG4gICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICAgIF0ubnVtYmVyT2ZPcHRpb25zO1xyXG4gICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLnF1ZXN0aW9uSW1hZ2VOYW1lLFxyXG4gICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRoaXJkT2JqZWN0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGkgPFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAubnVtYmVyT2ZPcHRpb25zO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uaXNPcHRpb25UZXh0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXHJcbiAgICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9zdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9IFwiUG9kYXJcIjtcclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXkuZ2V0Q2hpbGRCeU5hbWUoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICApO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAuY29ycmVjdEFuc3dlck51bSxcclxuICAgIF07XHJcbiAgICB0aGlzLmNhbGxUaGlyZE9iamVjdEluKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwVFZGb2N1cyhhY3RpdmVDb250YWluZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG4gICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgIGxldCBzb3VuZEJ0biA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpO1xyXG4gICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICBsZXQgb3B0aW9uQnV0dG9ucyA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoYWN0aXZlQ29udGFpbmVyTmFtZSlcclxuICAgICAgLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBub2RlLmFjdGl2ZSAmJlxyXG4gICAgICAgICAgbm9kZS5vcGFjaXR5ID4gMCAmJlxyXG4gICAgICAgICAgKCFidG4gfHwgYnRuLmludGVyYWN0YWJsZSAhPT0gZmFsc2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIoXHJcbiAgICAgIChuKSA9PiAhIW5cclxuICAgICk7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMsIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgLTEpO1xyXG4gICAgfVxyXG4gICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMyKCkge1xyXG4gICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICBsZXQgbXVzaWNCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG5dLmZpbHRlcigobikgPT4gISFuKTtcclxuICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2RlcywgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICB9XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgfVxyXG5cclxuICBHZW5lcmF0ZU9wdGlvbnMoKSB7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGkgPFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5udW1iZXJPZk9wdGlvbnM7XHJcbiAgICAgIGkrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcbiAgICAgIG9wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICBvcHRpb24uc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKSk7XHJcbiAgICAgIG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgIG9wdGlvbi5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNhbGxUaGlyZE9iamVjdEluKCkge1xyXG4gICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuXHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgXS5xdWVzdGlvblRleHQ7XHJcblxyXG4gICAgdGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwoKTtcclxuICAgIHRoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQoKTtcclxuICAgIGxldCBwb3NYID0gLTIzNztcclxuICAgIGlmIChcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIiB8fFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCJcclxuICAgICkge1xyXG4gICAgICBwb3NYID0gLTMwMDtcclxuICAgIH1cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpKVxyXG4gICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9LCAwLjEpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHg6IHBvc1ggfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBPblZPQnV0dG9uKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICBfZXZlbnQudGFyZ2V0LnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJPcHRpb25cIik7XHJcbiAgICB9LCB0aGlzLnF1ZXN0aW9uU291bmRbMF0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbE9wdGlvbkluKCkge1xyXG4gICAgbGV0IGRlbGF5OiBudW1iZXIgPSAwLjU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLnNldFBvc2l0aW9uKDE1MCwgLTcwKTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gMTtcclxuICAgICAgaSA8PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBpKytcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLnNjYWxlID0gMDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2kgLSAxXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgY2MudHdlZW4oXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoaS50b1N0cmluZygpKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIGlmIChpID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwiT3B0aW9uXCIpO1xyXG4gICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICAgIGRlbGF5ICs9IDAuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgdGhpcy5jdXJyZW50SmNva2V5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAuc2hvdWxkUGxheVF1ZXN0aW9uQXVkaW9cclxuICAgICAgKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyIGFycmF5IG51bSA9IFwiLCB0aGlzLmFuc3dlckFycmF5WzBdKTtcclxuICAgICAgICBoYW5kLnNldFBhcmVudChcclxuICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGFuZC5zZXRQb3NpdGlvbig1MCwgLTUwKTtcclxuICAgICAgICBoYW5kLmFuZ2xlID0gMzA7XHJcbiAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiIHx8XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBpbnRvQW5pbSA9IFwiaW50cm9cIjtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDQ1MCwgLTM3MCk7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpbnRvQW5pbSA9IFwiaW50cm9fMVwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbig4NzAsIC0zNzApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBpbnRvQW5pbSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLnNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXIgYXJyYXkgbnVtID0gXCIsIHRoaXMuYW5zd2VyQXJyYXlbMF0pO1xyXG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudChcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGhhbmQuc2V0UG9zaXRpb24oNTAsIC01MCk7XHJcbiAgICAgICAgICAgIGhhbmQuYW5nbGUgPSAzMDtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uU291bmRbMF0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fZW5kXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyIGFycmF5IG51bSA9IFwiLCB0aGlzLmFuc3dlckFycmF5WzBdKTtcclxuICAgICAgICAgICAgICAgIGhhbmQuc2V0UGFyZW50KFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJBcnJheVswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBoYW5kLnNldFBvc2l0aW9uKDUwLCAtNTApO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5hbmdsZSA9IDMwO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPbkJ1dHRvbkNsaWNrKF9ldmVudDogY2MuRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5jYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcbiAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaCk7XHJcbiAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IF9ub2RlID0gX2V2ZW50LnRhcmdldDtcclxuICAgIGlmIChfbm9kZS5uYW1lID09IHRoaXMuYW5zd2VyQXJyYXlbMF0pIHtcclxuICAgICAgdGhpcy5zZXR1cFRWRm9jdXMyKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZXN0cm95T3B0aW9uKCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsUG9zaXRpdmVSZWN0aW9uKF9ub2RlKTtcclxuICAgICAgfSwgMC4zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGUsIF9ldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsTmV4dExldmVsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgdGhpcy5jYWxsU3RhcnNFYXJlZCgpO1xyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG4gICAgICB9LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsU3RhcnNFYXJlZCgpIHtcclxuICAgIGlmICghdGhpcy5zdGFyMUxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuICAgICAgdGhpcy5zdGFyMUxvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTFcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhcjJMb2cgJiYgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA0KSB7XHJcbiAgICAgIHRoaXMuc3RhcjJMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0yXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zdGFyM0xvZyAmJlxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWxcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXIzTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFuc3dlckFycmF5KCkge1xyXG4gICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMVwiXTtcclxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAyKSB7XHJcbiAgICAgIHRoaXMuYW5zd2VyQXJyYXkgPSBbXCIyXCJdO1xyXG4gICAgfSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDMpIHtcclxuICAgICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcIjFcIl07XHJcbiAgICB9IGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNCkge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMVwiXTtcclxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSA1KSB7XHJcbiAgICAgIHRoaXMuYW5zd2VyQXJyYXkgPSBbXCIyXCJdO1xyXG4gICAgfSBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDYpIHtcclxuICAgICAgdGhpcy5hbnN3ZXJBcnJheSA9IFtcIjFcIl07XHJcbiAgICB9IGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gNykge1xyXG4gICAgICB0aGlzLmFuc3dlckFycmF5ID0gW1wiMlwiXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxQb3NpdGl2ZVJlY3Rpb24oX25vZGU6IGNjLk5vZGUpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW8sIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBxQm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIik7XHJcblxyXG4gICAgY29uc3Qgd29ybGRQb3MgPSBxQm94LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocUJveC5nZXRQb3NpdGlvbigpKTtcclxuICAgIGNvbnN0IGxvY2FsUG9zID0gX25vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuNSxcclxuICAgICAgICB7IHdpZHRoOiBxQm94LndpZHRoLCBoZWlnaHQ6IHFCb3guaGVpZ2h0LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfVxyXG4gICAgICApXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGNvbnN0IGlubmVyID0gX25vZGUuY2hpbGRyZW5bMF07XHJcbiAgICBjYy50d2Vlbihpbm5lcilcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuNSxcclxuICAgICAgICB7IHdpZHRoOiBxQm94LndpZHRoICogMC44LCBoZWlnaHQ6IHFCb3guaGVpZ2h0ICogMC44LCBzY2FsZTogMSB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZldHRpID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIik7XHJcbiAgICAgIGNvbnN0IGNvbmZldHRpUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgIF9ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoX25vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgKTtcclxuICAgICAgY29uZmV0dGkuc2V0UG9zaXRpb24oY29uZmV0dGlQb3MpO1xyXG4gICAgICBjb25mZXR0aS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9LCAxLjUpO1xyXG4gICAgICB9LCAwLjcpO1xyXG4gICAgfSwgMC41KTtcclxuICB9XHJcblxyXG4gIGNhbGxKb2NrZXkoKSB7XHJcbiAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc3NpdGl2ZVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlMlwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlM1wiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNFwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNVwiLFxyXG4gICAgICAgIFwicG9zc2l0aXZlNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV83XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV84XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV85XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xMFwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV82XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlNpbmdoYW1cIikge1xyXG4gICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbSBsZW5ndGggPSBcIiwgYW5pbS5sZW5ndGgpO1xyXG4gICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XHJcbiAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy0zNTAsIDM1MF07XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgIGlmIChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJlxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCJcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbihcclxuICAgICAgICBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLFxyXG4gICAgICAgIC0zNTBcclxuICAgICAgKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG4gICAgICAgIC50byhcclxuICAgICAgICAgIDAuNSxcclxuICAgICAgICAgIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgICB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgICAgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sXHJcbiAgICAgICAgICAgICAgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fb3V0XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fb3V0XCIpLmR1cmF0aW9uKTtcclxuICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIgfHxcclxuICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIlxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIikuZHVyYXRpb24pO1xyXG4gICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIpLmR1cmF0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KS50bygyLCB7IHg6IC0xMDAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICAgIHRoaXMuY2FsbE5leHRMZXZlbCgpO1xyXG4gICAgICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlOiBjYy5Ob2RlLCBfZXZlbnQpIHtcclxuICAgIF9ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ3JleU1hdCk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMud3JvbmdBbnN3ZXJDb3VudCA+PSA2KSB7XHJcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJDb3VudCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcclxuICAgICAgICAgIFwibmVnZXRpdmVcIixcclxuICAgICAgICAgIFwibmVnZXRpdmUyXCIsXHJcbiAgICAgICAgICBcIm5lZ2V0aXZlM1wiLFxyXG4gICAgICAgICAgXCJuZWdldGl2ZTRcIixcclxuICAgICAgICAgIFwibmVnZXRpdmU1XCIsXHJcbiAgICAgICAgICBcIm5lZ2V0aXZlNlwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzNcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzRcIixcclxuICAgICAgICAgIFwibmVnYXRpdmVfNVwiLFxyXG4gICAgICAgICAgXCJuZWdhdGl2ZV80XCIsXHJcbiAgICAgICAgICBcIm5lZ2F0aXZlXzVcIixcclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5vXCJdO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiTWlnaHR5X1JhanVcIikge1xyXG4gICAgICAgIGFuaW0gPSBbXCJ0cnlfYWdhaW5cIl07XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwidGxjXCIgJiZcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInRsY1wiICYmXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJzdXBlcmN1YlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleS5zZXRQb3NpdGlvbigxMjAwLCAtMzUwKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHg6IDM1MCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG4gICAgICAgICAgICAgIC50bygwLjUsIHsgeDogMTIwMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgICAgfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIiB8fFxyXG4gICAgICAgICAgYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vcGxheSBidWxiIGJyZWFrIGlmIG5lZWRlZFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcbiAgICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIikuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuICAgICAgICAgIH0sIHRoaXMuY3VycmVudEpjb2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmZpbmRBbmltYXRpb24oYW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiKS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMC43KTtcclxuXHJcbiAgICBjYy50d2Vlbihfbm9kZSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IC0gMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54ICsgMTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLnRvKDAuMiwgeyB4OiBfbm9kZS54IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBfbm9kZS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAuc2V0TWF0ZXJpYWwoMCwgdGhpcy5kZWZhdWx0TWF0KTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95T3B0aW9uKCkge1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgaSsrXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpXS5uYW1lICE9XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJBcnJheVswXVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkU3ByaXRlRnJhbWUoXHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsXHJcbiAgICAgIGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhcclxuICAgICAgXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsXHJcbiAgICAgIGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBPcHRpb25zTGF5b3V0VmVydGljYWwoKSB7XHJcbiAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMub3B0aW9uc05vZGU7XHJcbiAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XHJcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IGFuZCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgb3B0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcbiAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcclxuICAgICAgbGV0IG9wdGlvbkhlaWdodCA9IG9wdGlvbi5oZWlnaHQ7XHJcblxyXG4gICAgICB0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25XaWR0aCA+IG1heFdpZHRoKSB7XHJcbiAgICAgICAgbWF4V2lkdGggPSBvcHRpb25XaWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdmFpbGFibGVIZWlnaHQgPSBvcHRpb25zTGF5b3V0LmhlaWdodDtcclxuICAgIGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID1cclxuICAgICAgdG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVIZWlnaHQgLyB0b3RhbEhlaWdodFdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICBsZXQgYWNjdW11bGF0ZWRIZWlnaHQgPSAwO1xyXG5cclxuICAgIC8vIFBvc2l0aW9uIGVhY2ggb3B0aW9uIG5vZGUgdmVydGljYWxseVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIG9wdGlvblxyXG4gICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgIC8vIFNjYWxlIHRoZSBvcHRpb25cclxuICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuICAgICAgbGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIG9wdGlvbi5oZWlnaHQgKiBvcHRpb24uYW5jaG9yWTtcclxuICAgICAgb3B0aW9uLnkgPSBwb3NZIC0gb3B0aW9uc0xheW91dC5oZWlnaHQgKiBvcHRpb25zTGF5b3V0LmFuY2hvclk7XHJcblxyXG4gICAgICBhY2N1bXVsYXRlZEhlaWdodCArPSBvcHRpb24uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcbiAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuICB9XHJcblxyXG4gIHJldmVyc2VPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG4gICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgdG8gaG9sZCB0aGUgbmV3IHBvc2l0aW9uc1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zIGluIHJldmVyc2Ugb3JkZXJcclxuICAgIGZvciAobGV0IGkgPSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBuZXdQb3NpdGlvbnMucHVzaChvcHRpb25Ob2Rlc1tpXS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3B0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBvcHRpb25Ob2Rlc1tpXS55ID0gbmV3UG9zaXRpb25zW2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
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
// Framework/Prefabs/Progressbar/Scripts/ProgressBar.ts

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
    ProgressBar.prototype.ProgressFill = function (_currentQues) {
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.totalLevels; //
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues < maxLevels && _currentQues < maxLevels / 2 && _currentQues != 0) {
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels) {
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels) {
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
//------QC-SOURCE-SPLIT------
